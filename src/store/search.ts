import { useCallback, useState } from 'react';
import { CatalogApi, ResponseCatalogItemType } from '@e-raun/api';
import { debounce } from 'lodash';
import { makeAutoObservable } from 'mobx';

import { http } from 'libs/http';

enum Status {
  fulfilled,
  pending,
  rejected,
  idle,
}

export class SearchStore {
  items: ResponseCatalogItemType[] = [];
  total = 0;
  page = 1;
  status: Status = Status.idle;
  private query = '';

  private catalogApi: CatalogApi;

  constructor(catalogApi: CatalogApi) {
    makeAutoObservable(this);
    this.catalogApi = catalogApi;
  }

  private setStatus = (status: Status): void => {
    this.status = status;
  };

  search = async (query: string): Promise<void> => {
    try {
      const LIMIT = 36;
      this.resetSearch();
      this.query = query;

      this.setStatus(Status.pending);

      const response = await this.catalogApi.getItemsV2({ q: query, offset: LIMIT * (this.page - 1), limit: LIMIT });

      this.setTotal(response.total);
      this.setItems(response.items);

      this.setStatus(Status.fulfilled);
    } catch (e) {
      this.setStatus(Status.rejected);
      throw e;
    }
  };

  loadMore = async () => {
    this.setPage(this.page + 1);

    try {
      const LIMIT = 36;

      this.setStatus(Status.pending);

      const response = await this.catalogApi.getItemsV2({ q: this.query, offset: LIMIT * (this.page - 1), limit: LIMIT });

      this.setTotal(response.total);
      this.appendItems(response.items);

      this.setStatus(Status.fulfilled);
    } catch (e) {
      this.setStatus(Status.rejected);
      throw e;
    }
  };

  setPage = (page: number) => {
    this.page = page;
  };

  setTotal = (total: number) => {
    this.total = total;
  };

  setItems = (items: ResponseCatalogItemType[]) => {
    this.items = items;
  };

  appendItems = (items: ResponseCatalogItemType[]) => {
    this.items.push(...items);
  };

  resetSearch = () => {
    this.items = [];
    this.page = 1;
    this.status = Status.idle;
  };

  get isLoading(): boolean {
    return this.status === Status.pending;
  }

  get isFulfilled(): boolean {
    return this.status === Status.fulfilled;
  }

  get hasItems(): boolean {
    return this.items.length > 0 && this.items.length < this.total;
  }
}

export const useSearch = () => {
  const [searchStore] = useState(() => new SearchStore(new CatalogApi(http)));

  const loadMore = useCallback(async () => {
    searchStore.setPage(searchStore.page + 1);
    await searchStore.loadMore();
  }, [searchStore]);

  const search = useCallback(
    debounce(async (value: string) => {
      await searchStore.search(value);
    }, 500),
    [searchStore],
  );

  return { loadMore: loadMore, search: search, items: searchStore.items, hasItems: searchStore.hasItems, isLoading: searchStore.isLoading };
};
