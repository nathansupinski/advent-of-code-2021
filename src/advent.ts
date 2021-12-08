import question1 from './questions/question-1'
import question2 from './questions/question-2';
import question3 from './questions/question-3';
console.log('starting up...');
entryPoint();

async function entryPoint() {
  //const data = await loadAdventData(1);
  await question1();
  await question2()
  await question3()
  console.log('finished.');
}
