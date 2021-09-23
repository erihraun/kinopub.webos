import { DeviceApi, LoginPhoneRequest, LoginRequest, RegisterPhoneRequest, RegisterRequest, UserApi } from '@e-raun/api';
import { AxiosInstance } from 'axios';
import { makeAutoObservable } from 'mobx';
import { create, persist } from 'mobx-persist';

import { http } from 'libs/http';

export enum Status {
  idle,
  pending,
  fulfilled,
  reject,
}

export class UserStore {
  name = '';
  token = '';
  isLoaded = false;
  daysPaid = 0;
  refreshToken = '';
  avatar = 'https://s80658.cdn.ngenix.net/i/avatars/avatar1.jpg';

  readonly userApi: UserApi;
  readonly deviceApi: DeviceApi;
  readonly http: AxiosInstance;

  constructor(userApi: UserApi, deviceApi: DeviceApi, http: AxiosInstance) {
    this.userApi = userApi;
    this.deviceApi = deviceApi;
    this.http = http;

    makeAutoObservable(this, {
      userApi: false,
      deviceApi: false,
      http: false,
    });
  }

  setIsLoading = (value: boolean): void => {
    this.isLoaded = value;
  };

  setToken = (token: string): void => {
    this.token = token;

    this.http.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  setRefreshToken = (refreshToken: string): void => {
    this.refreshToken = refreshToken;
  };

  setName = (name: string): void => {
    this.name = name;
  };

  setDaysPaid = (days: number): void => {
    this.daysPaid = days;
  };

  register = async (data: RegisterRequest) => {
    const response = await this.userApi.register(data);

    return response
      .mapRight((data) => {
        this.setToken(data.token);
        this.setRefreshToken(data.refreshToken);

        return data;
      })
      .asyncChain(() => this.getUser());
  };

  registerPhone = async (data: RegisterPhoneRequest) => {
    const response = await this.userApi.registerPhone(data);

    return response
      .mapRight((data) => {
        this.setToken(data.token);
        this.setRefreshToken(data.refreshToken);

        return data;
      })
      .asyncChain(() => this.getUser());
  };

  login = async (data: LoginRequest) => {
    const result = await this.userApi.login(data);

    return result
      .mapRight((data) => {
        this.setToken(data.token);
        this.setRefreshToken(data.refreshToken);

        return data;
      })
      .asyncChain(() => this.getUser());
  };

  loginPhone = async (data: LoginPhoneRequest) => {
    const result = await this.userApi.loginPhone(data);

    return result
      .mapRight((data) => {
        this.setToken(data.token);
        this.setRefreshToken(data.refreshToken);

        return data;
      })
      .asyncChain(() => this.getUser());
  };

  getUser = async () => {
    const result = await this.userApi.getUser();
    return result.mapRight((user) => {
      this.setName(user.name);
      this.setDaysPaid(user.days_paid);

      return user;
    });
  };

  logout = async (): Promise<void> => {
    await this.deviceApi.logout({
      access_token: this.token,
    });
    delete this.http.defaults.headers.common.Authorization;
    this.setToken('');
    this.setName('');
    this.setRefreshToken('');
  };

  refresh = async () => {
    return this.deviceApi
      .refreshToken({
        refresh_token: this.refreshToken,
      })
      .then(async (result) => {
        this.setToken(result.access_token);
        await this.getUser();
        return false;
      })
      .catch(() => {
        return true;
      });
  };

  checkUser = () => {
    return this.refresh();
  };

  get isLoggedIn(): boolean {
    return Boolean(this.token.length);
  }

  get paidDays(): number {
    return this.daysPaid;
  }

  get isPaid(): boolean {
    return this.paidDays > 0;
  }
}

export const userStore = new UserStore(new UserApi(http), new DeviceApi(http), http);

const schema = {
  token: true,
  refreshToken: true,
  daysPaid: true,
};

const hydrate = create();

const userStorePersist = persist(schema)(userStore);
hydrate('userStore', userStorePersist).then(() => console.log('someStore has been hydrated'));
