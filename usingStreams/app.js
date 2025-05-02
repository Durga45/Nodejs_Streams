import { open } from "fs/promises"; 

(async () => {
  console.time("writeMore"); 
  const fileHandle = await open('./streams.txt', 'w');
  const stream = fileHandle.createWriteStream(); 

  for (let i = 0; i < 100000; i++) {
    const buffer = Buffer.from(`${i}\n`);
    stream.write(buffer);
  }

  stream.end(() => {
    console.timeEnd("writeMore");
  });
})();
