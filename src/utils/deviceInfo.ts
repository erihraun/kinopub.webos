import deviceinfo from '@enact/webos/deviceinfo';

export const getDeviceInfo = (): Promise<object> => new Promise((resolve) => deviceinfo(resolve));
