import * as fs from 'fs';
import * as readLine from 'readline';

export async function processLineByLine(filePath, callback) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readLine.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    await callback(line);
  }

  return true;
}
