
import path from 'path';
import { processLineByLine } from '../fileParser.service';

async function question1A(filePath){
  let lastDepth;
  let totalIncreases = 0;

  await processLineByLine(filePath, (line)=>{
    const numericDepth = parseInt(line);
    if(lastDepth && numericDepth > lastDepth){
      totalIncreases++;
    }
    lastDepth = numericDepth;
    //console.log(line);
  });
  console.log('Q1a: total increases:' + totalIncreases);
}

async function question1B(filePath){
  let totalIncreases = 0;
  let n1;
  let n2;
  let lastSegmentTotal;
  let currentSegmentTotal = 0;

  await processLineByLine(filePath, (line)=>{
    const numericDepth = parseInt(line);
    if(!n1){
      n1 = numericDepth;
      return
    }

    if(!n2){
      n2 = numericDepth;
      return;
    }

    currentSegmentTotal = n1 + n2 + numericDepth;

    if(lastSegmentTotal && currentSegmentTotal > lastSegmentTotal ){ //check for increase
      totalIncreases++;
    }

    //reset for next
    lastSegmentTotal = currentSegmentTotal;//update last segment
    n1 = n2;
    n2 = numericDepth;

  });
  console.log('Q1b: total increases:' + totalIncreases);
}

export default async function question1(){
  console.log('-----question 1-----')
  const filePath = path.resolve('build/question-input-data', 'question-1.txt')
  await question1A(filePath);
  await question1B(filePath);
}
