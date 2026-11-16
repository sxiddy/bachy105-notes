const fs=require('fs'),path=require('path');
const dir=process.argv[2];const out=[];
global.CHUNK=c=>{for(const t of c.topics)for(const [i,tb] of (t.tabs||[]).entries()){
 const txt=tb.html.replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/g,' ').replace(/\s+/g,' ');
 out.push(`${c.module}\t${c.chunk}\t${t.id}\t${i}:${tb.title}\t${txt}`);}};
for(const f of fs.readdirSync(dir).filter(f=>/^chunk-.*\.js$/.test(f))) { new Function(fs.readFileSync(path.join(dir,f),'utf8'))(); }
fs.writeFileSync(process.argv[3],out.join('\n'));console.log(out.length,'tabs');
