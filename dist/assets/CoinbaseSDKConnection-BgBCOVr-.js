import{aq as n,bx as C,ar as x,c4 as k}from"./index-C6ZDBfLX.js";function p(l){const{onBack:u,done:c,wallet:t,walletInfo:f,onGetStarted:S,locale:e}=l,[d,o]=n.useState(!1),{client:a,chain:s}=C(),r=n.useCallback(()=>{o(!1),t.connect({client:a,chain:s}).then(()=>{c()}).catch(g=>{console.error(g),o(!0)})},[a,t,s,c]),i=n.useRef(!1);return n.useEffect(()=>{i.current||(i.current=!0,r())},[r]),x.jsx(k,{locale:{getStartedLink:e.getStartedLink,instruction:e.connectionScreen.instruction,tryAgain:e.connectionScreen.retry,inProgress:e.connectionScreen.inProgress,failed:e.connectionScreen.failed},onBack:u,walletName:f.name,walletId:t.id,errorConnecting:d,onRetry:r,onGetStarted:S})}export{p as default};
