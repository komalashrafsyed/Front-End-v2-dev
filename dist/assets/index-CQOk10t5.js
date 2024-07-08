import{i as g,g as l,a as f,b as m,n as u,c as T,d as I,s as E,u as q,p as D,e as _,v,f as P}from"./index-C4wIsjsa.js";function b(a){return!!g(a.id)}function C(a){const e=g(a);if(!e)throw new Error(`No injected provider found for wallet: "${a}"`);return e}async function j(a,e,c){const n=C(a),r=(await n.request({method:"eth_requestAccounts"}))[0];if(!r)throw new Error("no accounts available");const t=l(r),s=await n.request({method:"eth_chainId"}).then(f);let o=e.chain&&e.chain.id===s?e.chain:m(s);return e.chain&&e.chain.id!==s&&(await p(n,e.chain),o=e.chain),y(n,t,o,c)}async function H(a,e,c){const n=C(a),r=(await n.request({method:"eth_accounts"}))[0];if(!r)throw new Error("no accounts available");const t=l(r),s=await n.request({method:"eth_chainId"}).then(f),o=c&&c.id===s?c:m(s);return y(n,t,o,e)}function w(a,e){const c={address:e,async sendTransaction(n){return{transactionHash:await a.request({method:"eth_sendTransaction",params:[{accessList:n.accessList,value:n.value?u(n.value):void 0,gas:n.gas?u(n.gas):void 0,from:this.address,to:n.to,data:n.data}]})}},async signMessage({message:n}){if(!c.address)throw new Error("Provider not setup");const i=typeof n=="string"?E(n):n.raw instanceof Uint8Array?q(n.raw):n.raw;return await a.request({method:"personal_sign",params:[i,c.address]})},async signTypedData(n){if(!a||!c.address)throw new Error("Provider not setup");const i=D(n),{domain:r,message:t,primaryType:s}=i,o={EIP712Domain:_({domain:r}),...i.types};v({domain:r,message:t,primaryType:s,types:o});const d=P({domain:r??{},message:t,primaryType:s,types:o});return await a.request({method:"eth_signTypedData_v4",params:[c.address,d]})}};return c}async function y(a,e,c,n){const i=w(a,e);async function r(){a.removeListener("accountsChanged",s),a.removeListener("chainChanged",o),a.removeListener("disconnect",t)}function t(){r(),n.emit("disconnect",void 0)}function s(d){if(d[0]){const h=w(a,l(d[0]));n.emit("accountChanged",h),n.emit("accountsChanged",d)}else t()}function o(d){const h=m(f(d));n.emit("chainChanged",h)}return a.on&&(a.on("accountsChanged",s),a.on("chainChanged",o),a.on("disconnect",t)),[i,c,r,d=>p(a,d)]}async function p(a,e){var n,i,r;const c=u(e.id);try{await a.request({method:"wallet_switchEthereumChain",params:[{chainId:c}]})}catch(t){if((t==null?void 0:t.code)===4902||((i=(n=t==null?void 0:t.data)==null?void 0:n.originalError)==null?void 0:i.code)===4902){const s=await T(e);await a.request({method:"wallet_addEthereumChain",params:[{chainId:c,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:I(s),blockExplorerUrls:(r=s.explorers)==null?void 0:r.map(o=>o.url)}]})}else throw t}}export{H as autoConnectInjectedWallet,j as connectInjectedWallet,C as getInjectedProvider,b as isInjectedWallet};
