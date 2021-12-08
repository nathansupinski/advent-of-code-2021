
import path from 'path';
import { processLineByLine } from '../fileParser.service';

interface BitMap{
  oneBit: number, zeroBit: number
}

function printBitmap(bitmap: BitMap[]){
  let msg = '';
  for(let digit of bitmap){
    msg = msg + `[1:${digit.oneBit},0:${digit.zeroBit}],`
  }
  console.log(msg);
}

function binaryToDecimal(bitString){
  let decimalValue = 0;
  let bitArray = bitString.split('');
  for(let x = bitArray.length - 1; x >= 0; x--){
    let binaryIndex = bitArray.length -1 - x;
    //console.log('binary index:'+binaryIndex);
    if(bitArray[x] === '1'){
      decimalValue += (2 ** binaryIndex);
    }
  }

  return decimalValue;
}

async function question3A(filePath){
  let bitMap: BitMap[] = [];
  for(let x = 0; x < 12; x++){
    bitMap.push({'oneBit':0, 'zeroBit':0})
  }

  printBitmap(bitMap);

  await processLineByLine(filePath, (line)=>{
    const bitPattern = line.split('');
    for(let x=0; x < bitPattern.length; x++){
      if(bitPattern[x] === '1'){
        bitMap[x].oneBit++;
      }

      if(bitPattern[x] === '0'){
        bitMap[x].zeroBit++;
      }
    }
  });
  printBitmap(bitMap);

  let gamaBinary = '';
  let epsilonBinary = '';

  for(let bit of bitMap){
    if(bit.oneBit > bit.zeroBit){
      gamaBinary += '1';
      epsilonBinary += '0'
    }

    if(bit.oneBit < bit.zeroBit){
      gamaBinary += '0';
      epsilonBinary += '1'
    }
  }

  console.log('gamaBinary:' + gamaBinary);
  console.log('epsilonBinary:' + epsilonBinary);

  const gamaValue = binaryToDecimal(gamaBinary);
  const epsilonValue = binaryToDecimal(epsilonBinary);

  console.log(`Q3a: gamaValue:${gamaValue}  epsilonValue:${epsilonValue}  power consumption:${gamaValue * epsilonValue}`);
}

async function question3B(filePath){

}

export default async function question3(){
  console.log('-----question 3-----')
  const filePath = path.resolve('build/question-input-data', 'question-3.txt')
  await question3A(filePath);
  await question3B(filePath);
}
