import { useCallback } from 'react';

let mirror: string | null = null;

export const useMirror = () => {
  const getMirror = useCallback(async (): Promise<string> => {
    return 'http://localhost:3001' || mirror;
  }, []);

  return getMirror;
};
