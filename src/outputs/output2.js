import {sampleAsync} from '../utils';

export const output2 = async (isSuccess) => {
  sampleAsync(isSuccess)
    .then((v) => console.log('success. value:', v))
    .catch((e) => console.log('fail. error:', e));
};
