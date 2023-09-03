import {sampleAsync} from '../utils';

async function sampleAsyncWithLog(isSuccess, startText, endText) {
  console.log(startText);
  return new Promise((resolve, reject) => {
    sampleAsync(isSuccess)
      .then((v) => {
        console.log('success:', endText);
        resolve(v);
      })
      .catch((v) => {
        console.log('fail:', endText);
        reject(v);
      });
  });
}

// promise.all すべて並列で走っているか確認

export const output7_forEach = () => {};
// 実行結果の順序確認
