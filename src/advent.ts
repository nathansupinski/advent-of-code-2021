import { loadAdventData } from './dataLoader.service';
console.log('starting up...');
entryPoint();

async function entryPoint() {
  const data = await loadAdventData(1);
  console.log('service data', data);
}
