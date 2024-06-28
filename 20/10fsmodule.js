const{readFileSync,writeFileSync}=require(`fs`);
console.log("start")
const first = readFileSync(`./content/first.txt`,`utf-8`);
const second = readFileSync(`./content/secondt.txt`,`utf-8`);
console.log(first,second);

writeFileSync(
    `./content/result-sync.txt`,`here is the result:${first},${second}`,{flag:`a`}
);
console.log("this task is done");
console.log("starting the nesxt task");
