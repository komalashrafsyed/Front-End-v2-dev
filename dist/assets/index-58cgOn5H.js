const __vite__fileDeps=["assets/index-jZJX28tk.js","assets/index-D3h7I4QW.js","assets/index-Bb7r3yRl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as fe}from"./index-D3h7I4QW.js";const he=Symbol(),ee=Object.getPrototypeOf,F=new WeakMap,Ee=e=>e&&(F.has(e)?F.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),me=e=>Ee(e)&&e[he]||null,te=(e,t=!0)=>{F.set(e,t)};var x={VITE_ENVIRONMENT:"local",VITE_LOCAL_API_BASE_URL:"http://localhost:8800",VITE_LOCAL_ETHERSCAN_BASE_URL:"https://sepolia.basescan.org",VITE_LOCAL_OPENSEA_BASE_URL:"https://testnets.opensea.io",VITE_LOCAL_NETWORK:"sepolia",VITE_LOCAL_CHAIN_ID:"11155111",VITE_DEV_API_BASE_URL:"https://swapup-dev-api2.azurewebsites.net",VITE_DEV_ETHERSCAN_BASE_URL:"https://sepolia.basescan.org",VITE_DEV_OPENSEA_BASE_URL:"https://testnets.opensea.io",VITE_DEV_NETWORK:"base-sepolia",VITE_DEV_CHAIN_ID:"84532",VITE_QA_API_BASE_URL:"https://swapup-dev-api2.azurewebsites.net",VITE_QA_ETHERSCAN_BASE_URL:"https://sepolia.etherscan.io",VITE_QA_OPENSEA_BASE_URL:"https://testnets.opensea.io",VITE_QA_NETWORK:"base-sepolia",VITE_QA_CHAIN_ID:"84532",VITE_PROD_API_BASE_URL:"https://swapup-dev-api2.azurewebsites.net",VITE_PROD_ETHERSCAN_BASE_URL:"https://etherscan.io",VITE_PROD_OPENSEA_BASE_URL:"https://opensea.io",VITE_PROD_NETWORK:"homestead",VITE_PROD_CHAIN_ID:"1",VITE_SWAPUP_CONTRACT:"0x0fc982675c80ae315707e27d7d8e1318269bd817",VITE_THIRDWEB_CLIENT_ID:"5c9e60ae0eda6988b9a4174283224961",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const J=e=>typeof e=="object"&&e!==null,C=new WeakMap,$=new WeakSet,ge=(e=Object.is,t=(o,m)=>new Proxy(o,m),s=o=>J(o)&&!$.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),r=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,m,y=r)=>{const I=l.get(o);if((I==null?void 0:I[0])===m)return I[1];const b=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return te(b,!0),l.set(o,[m,b]),Reflect.ownKeys(o).forEach(P=>{if(Object.getOwnPropertyDescriptor(b,P))return;const w=Reflect.get(o,P),S={value:w,enumerable:!0,configurable:!0};if($.has(w))te(w,!1);else if(w instanceof Promise)delete S.value,S.get=()=>y(w);else if(C.has(w)){const[g,z]=C.get(w);S.value=c(g,z(),y)}Object.defineProperty(b,P,S)}),Object.preventExtensions(b)},h=new WeakMap,f=[1,1],L=o=>{if(!J(o))throw new Error("object required");const m=h.get(o);if(m)return m;let y=f[0];const I=new Set,b=(i,a=++f[0])=>{y!==a&&(y=a,I.forEach(n=>n(i,a)))};let P=f[1];const w=(i=++f[1])=>(P!==i&&!I.size&&(P=i,g.forEach(([a])=>{const n=a[1](i);n>y&&(y=n)})),y),S=i=>(a,n)=>{const E=[...a];E[1]=[i,...E[1]],b(E,n)},g=new Map,z=(i,a)=>{if((x?"production":void 0)!=="production"&&g.has(i))throw new Error("prop listener already exists");if(I.size){const n=a[3](S(i));g.set(i,[a,n])}else g.set(i,[a])},Z=i=>{var a;const n=g.get(i);n&&(g.delete(i),(a=n[1])==null||a.call(n))},ue=i=>(I.add(i),I.size===1&&g.forEach(([n,E],R)=>{if((x?"production":void 0)!=="production"&&E)throw new Error("remove already exists");const M=n[3](S(R));g.set(R,[n,M])}),()=>{I.delete(i),I.size===0&&g.forEach(([n,E],R)=>{E&&(E(),g.set(R,[n]))})}),Q=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),k=t(Q,{deleteProperty(i,a){const n=Reflect.get(i,a);Z(a);const E=Reflect.deleteProperty(i,a);return E&&b(["delete",[a],n]),E},set(i,a,n,E){const R=Reflect.has(i,a),M=Reflect.get(i,a,E);if(R&&(e(M,n)||h.has(n)&&e(M,h.get(n))))return!0;Z(a),J(n)&&(n=me(n)||n);let B=n;if(n instanceof Promise)n.then(O=>{n.status="fulfilled",n.value=O,b(["resolve",[a],O])}).catch(O=>{n.status="rejected",n.reason=O,b(["reject",[a],O])});else{!C.has(n)&&s(n)&&(B=L(n));const O=!$.has(B)&&C.get(B);O&&z(a,O)}return Reflect.set(i,a,B,E),b(["set",[a],n,M]),!0}});h.set(o,k);const pe=[Q,w,c,ue];return C.set(k,pe),Reflect.ownKeys(o).forEach(i=>{const a=Object.getOwnPropertyDescriptor(o,i);"value"in a&&(k[i]=o[i],delete a.value,delete a.writable),Object.defineProperty(Q,i,a)}),k})=>[L,C,$,e,t,s,r,l,c,h,f],[Ie]=ge();function W(e={}){return Ie(e)}function U(e,t,s){const r=C.get(e);(x?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let l;const c=[],h=r[3];let f=!1;const o=h(m=>{c.push(m),l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function be(e,t){const s=C.get(e);(x?"production":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[r,l,c]=s;return c(r,l(),t)}const d=W({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:d,subscribe(e){return U(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},_e=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=W({enabled:_e,userSessionId:"",events:[],connectedWalletId:void 0}),ye={state:u,subscribe(e){return U(u.events,()=>e(be(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},A=W({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),_={state:A,subscribe(e){return U(A,()=>e(A))},setChains(e){A.chains=e},setWalletConnectUri(e){A.walletConnectUri=e},setIsCustomDesktop(e){A.isCustomDesktop=e},setIsCustomMobile(e){A.isCustomMobile=e},setIsDataLoaded(e){A.isDataLoaded=e},setIsUiLoaded(e){A.isUiLoaded=e},setIsAuth(e){A.isAuth=e}},H=W({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),N={state:H,subscribe(e){return U(H,()=>e(H))},setConfig(e){var t,s;ye.initialize(),_.setChains(e.chains),_.setIsAuth(!!e.enableAuthMode),_.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),_.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign(H,e)}};var Ae=Object.defineProperty,se=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,oe=(e,t,s)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Le=(e,t)=>{for(var s in t||(t={}))ve.call(t,s)&&oe(e,s,t[s]);if(se)for(var s of se(t))we.call(t,s)&&oe(e,s,t[s]);return e};const G="https://explorer-api.walletconnect.com",X="wcm",Y="js-2.6.2";async function K(e,t){const s=Le({sdkType:X,sdkVersion:Y},t),r=new URL(e,G);return r.searchParams.append("projectId",N.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&r.searchParams.append(l,String(c))}),(await fetch(r)).json()}const T={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${G}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}&sdkType=${X}&sdkVersion=${Y}`},getAssetImageUrl(e){return`${G}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}&sdkType=${X}&sdkVersion=${Y}`}};var Oe=Object.defineProperty,ne=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Se=(e,t)=>{for(var s in t||(t={}))Ce.call(t,s)&&re(e,s,t[s]);if(ne)for(var s of ne(t))We.call(t,s)&&re(e,s,t[s]);return e};const ae=p.isMobile(),v=W({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Ve={state:v,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=N.state;if(e==="NONE"||t==="ALL"&&!e)return v.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await T.getAllListings(s),l=Object.values(r);l.sort((c,h)=>{const f=e.indexOf(c.id),L=e.indexOf(h.id);return f-L}),v.recomendedWallets=l}else{const{chains:s,isAuth:r}=_.state,l=s==null?void 0:s.join(","),c=p.isArray(t),h={page:1,sdks:r?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=ae?await T.getMobileListings(h):await T.getDesktopListings(h);v.recomendedWallets=Object.values(f)}return v.recomendedWallets},async getWallets(e){const t=Se({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=N.state,{recomendedWallets:l}=v;if(r==="ALL")return v.wallets;l.length?t.excludedIds=l.map(y=>y.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),_.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:h}=e,{listings:f,total:L}=ae?await T.getMobileListings(t):await T.getDesktopListings(t),o=Object.values(f),m=h?"search":"wallets";return v[m]={listings:[...v[m].listings,...o],total:L,page:c??1},{listings:o,total:L}},getWalletImageUrl(e){return T.getWalletImageUrl(e)},getAssetImageUrl(e){return T.getAssetImageUrl(e)},resetSearch(){v.search={listings:[],total:0,page:1}}},j=W({open:!1}),q={state:j,subscribe(e){return U(j,()=>e(j))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=_.state;if(p.removeWalletConnectDeepLink(),_.setWalletConnectUri(e==null?void 0:e.uri),_.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&r)j.open=!0,t();else{const l=setInterval(()=>{const c=_.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),j.open=!0,t())},200)}})},close(){j.open=!1}};var Te=Object.defineProperty,ie=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Pe=(e,t)=>{for(var s in t||(t={}))De.call(t,s)&&le(e,s,t[s]);if(ie)for(var s of ie(t))Ue.call(t,s)&&le(e,s,t[s]);return e};function Re(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const V=W({themeMode:Re()?"dark":"light"}),ce={state:V,subscribe(e){return U(V,()=>e(V))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(V.themeMode=t),s&&(V.themeVariables=Pe({},s))}},D=W({open:!1,message:"",variant:"success"}),ke={state:D,subscribe(e){return U(D,()=>e(D))},openToast(e,t){D.open=!0,D.message=e,D.variant=t},closeToast(){D.open=!1}};class je{constructor(t){this.openModal=q.open,this.closeModal=q.close,this.subscribeModal=q.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),N.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await fe(()=>import("./index-jZJX28tk.js"),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),_.setIsUiLoaded(!0)}}}const Be=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:je},Symbol.toStringTag,{value:"Module"}));export{ye as R,de as T,p as a,Be as i,ce as n,ke as o,_ as p,q as s,Ve as t,N as y};
