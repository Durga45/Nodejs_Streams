import fs from 'fs';

(() => {
  console.time("writeMore");

  fs.open('./myfile.txt', 'w', (err, fd) => {
    if (err) throw err;

    for (let i = 0; i < 100000; i++) {
      const buff = Buffer.from(`${i}\n`);
      fs.writeSync(fd, buff);
    }

    fs.closeSync(fd); 
    console.timeEnd("writeMore");
  });
})();
