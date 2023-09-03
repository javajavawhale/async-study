import {sampleAsync} from '../utils';

const successes = [true, true, true];

export const output6_forEach = () => {
  const results = [];
  successes.forEach(async (success) => {
    const result = await sampleAsync(success);
    results.push(result);
  });
  // forEachの終了は待たれない
  console.log(results);
};

export const output6_forOf = async () => {
  const results = [];
  for (const success of successes) {
    const result = await sampleAsync(success);
    results.push(result);
  }
  // forOf終了後にログ
  console.log(results);
};
