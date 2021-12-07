import request from 'superagent';

export async function loadAdventData(question: number) {
  const url = `https://adventofcode.com/2021/day/${question}/input`;
  const data = await request.get(url);
  console.log('got some data boss', data);
  return data;
}
