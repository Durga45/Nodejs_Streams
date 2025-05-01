import fs from 'fs/promises'

(async()=>{
console.time("writeMore")
const filehandle=await fs.open('./newfile.txt','w')
for(let i=0;i<100000;i++){
  await filehandle.write(`${i}`)
}
await filehandle.close()
console.timeEnd("writeMore")
})()