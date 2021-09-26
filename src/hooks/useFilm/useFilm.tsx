import { useFilmV2 as createUseFilm } from '@e-raun/film';

import { http } from 'libs/http';

const { useFilm } = createUseFilm(http, {});

export { useFilm };
// export const useFilm = (id: number) => {
//   const { data, setViewed, setTime } = useFilmStore(id || 0);
//
//   return { data, setViewed, setTime };
// };
