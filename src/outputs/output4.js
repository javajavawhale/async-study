import {sampleAsync} from '../utils';

export const output4 = (isSuccess) => {
  const promiseArray = [sampleAsync(true), sampleAsync(isSuccess), sampleAsync(true)];
  Promise.all(promiseArray)
    .then((resArr) => console.log(resArr))
    .catch((e) => console.log(e));
};
