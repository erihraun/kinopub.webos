import { createUseSerial } from '@e-raun/serial';

import { http } from 'libs/http';

const { useSerial: useSerialStore } = createUseSerial(http, {});

export const useSerial = (id: number) => {
  const { data, setTimeEpisode, setViewedEpisode } = useSerialStore(id || 0);

  return { data, setTimeEpisode, setViewedEpisode };
};
