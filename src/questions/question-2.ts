
import path from 'path';
import { processLineByLine } from '../fileParser.service';

async function question2A(filePath){
  let depth = 0;
  let horizontal = 0;

  await processLineByLine(filePath, (line)=>{
    const [keyword, rawValue] = line.split(' ');
    const value = parseInt(rawValue);
    switch(keyword){
      case 'forward':
        horizontal += value;
        break;
      case 'down':
        depth += value;
        break;
      case 'up':
        depth -= value;
        break;
    }
  });
  console.log(`Q1a: depth:${depth}  horizontal:${horizontal}  multiple:${depth * horizontal}`);
}

async function question2B(filePath){
  let depth = 0;
  let horizontal = 0;
  let aim = 0;

  await processLineByLine(filePath, (line)=>{
    const [keyword, rawValue] = line.split(' ');
    const value = parseInt(rawValue);
    switch(keyword){
      case 'forward':
        horizontal += value;
        depth += (aim*value);
        break;
      case 'down':
        aim += value;
        break;
      case 'up':
        aim -= value;
        break;
    }
  });
  console.log(`Q2a: depth:${depth}  horizontal:${horizontal}  multiple:${depth * horizontal}`);
}

export default async function question2(){
  console.log('-----question 2-----')
  const filePath = path.resolve('build/question-input-data', 'question-2.txt')
  await question2A(filePath);
  await question2B(filePath);
}
