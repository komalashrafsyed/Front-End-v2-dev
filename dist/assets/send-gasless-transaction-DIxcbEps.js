const __vite__fileDeps=["assets/biconomy-ChPciqfj.js","assets/index-C4wIsjsa.js","assets/index-DQ0JnDgT.css","assets/openzeppelin-yu0sag65.js","assets/engine-DalpsOLC.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_}from"./index-C4wIsjsa.js";async function p({account:n,transaction:t,serializableTransaction:o,gasless:r}){if(o.value&&o.value>0n)throw new Error("Gasless transactions cannot have a value");if(r.provider==="biconomy"){const{relayBiconomyTransaction:e}=await _(()=>import("./biconomy-ChPciqfj.js"),__vite__mapDeps([0,1,2]));return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}if(r.provider==="openzeppelin"){const{relayOpenZeppelinTransaction:e}=await _(()=>import("./openzeppelin-yu0sag65.js"),__vite__mapDeps([3,1,2]));return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}if(r.provider==="engine"){const{relayEngineTransaction:e}=await _(()=>import("./engine-DalpsOLC.js"),__vite__mapDeps([4,1,2]));return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}throw new Error("Unsupported gasless provider")}export{p as sendGaslessTransaction};