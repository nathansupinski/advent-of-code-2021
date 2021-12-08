import request from 'superagent';

//RIP i guess you have to be logged in to get the data - im not wasting my time implementing the necessary auth
export async function loadAdventData(question: number) {
  const url = `https://adventofcode.com/2021/day/${question}/input`;
  const data = await request.get(url);
  console.log('got some data boss', data);
  return data;
}
