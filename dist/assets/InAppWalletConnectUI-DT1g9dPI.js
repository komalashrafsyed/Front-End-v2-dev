import{aw as se,aB as Ue,aq as n,ar as e,aC as f,aA as Ve,ax as ce,aF as Me,ay as Ge,az as qe,bx as te,aN as ge,aM as x,aG as P,aW as ae,aI as Y,aO as Qe,c5 as Ye,b$ as ne,c0 as re,bl as Ae,av as pe,aY as Ke,c6 as Je,bM as Xe}from"./index-Xx1AppN7.js";import{o as Ze,u as et,a as tt}from"./useInAppWalletLocale-BIUG-zPU.js";import{preAuthenticate as be}from"./index-I5ZHt4Gi.js";import{h as nt}from"./passkeys-CKj7jnrR.js";const Ee=se({animation:`${Ue} 0.15s ease-in`});var rt=Object.defineProperty,ot=Object.defineProperties,it=Object.getOwnPropertyDescriptors,le=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,Le=(t,r,o)=>r in t?rt(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,at=(t,r)=>{for(var o in r||(r={}))Ie.call(r,o)&&Le(t,o,r[o]);if(le)for(var o of le(r))Pe.call(r,o)&&Le(t,o,r[o]);return t},lt=(t,r)=>ot(t,it(r)),st=(t,r)=>{var o={};for(var i in t)Ie.call(t,i)&&r.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&le)for(var i of le(t))r.indexOf(i)<0&&Pe.call(t,i)&&(o[i]=t[i]);return o},ct="^\\d+$";function ut(t){let r=setTimeout(t,0),o=setTimeout(t,10),i=setTimeout(t,50);return[r,o,i]}function dt(t){let r=n.useRef();return n.useEffect(()=>{r.current=t}),r.current}var xt=18,Te=40,ht=`${Te}px`,ft=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function gt({containerRef:t,inputRef:r,pushPasswordManagerStrategy:o,isFocused:i}){let u=n.useRef({done:!1,refocused:!1}),[l,g]=n.useState(!1),[d,j]=n.useState(!1),[v,C]=n.useState(!1),D=n.useMemo(()=>o==="none"?!1:(o==="increase-width"||o==="experimental-no-flickering")&&l&&d,[l,d,o]),L=n.useCallback(()=>{let m=t.current,h=r.current;if(!m||!h||v||o==="none")return;let c=m,M=c.getBoundingClientRect().left+c.offsetWidth,A=c.getBoundingClientRect().top+c.offsetHeight/2,k=M-xt,B=A;if(!(document.querySelectorAll(ft).length===0&&document.elementFromPoint(k,B)===m)&&(g(!0),C(!0),!u.current.refocused&&document.activeElement===h)){let O=[h.selectionStart,h.selectionEnd];h.blur(),h.focus(),h.setSelectionRange(O[0],O[1]),u.current.refocused=!0}},[t,r,v,o]);return n.useEffect(()=>{let m=t.current;if(!m||o==="none")return;function h(){let M=window.innerWidth-m.getBoundingClientRect().right;j(M>=Te)}h();let c=setInterval(h,1e3);return()=>{clearInterval(c)}},[t,o]),n.useEffect(()=>{let m=i||document.activeElement===r.current;if(o==="none"||!m)return;let h=setTimeout(L,0),c=setTimeout(L,2e3),M=setTimeout(L,5e3),A=setTimeout(()=>{C(!0)},6e3);return()=>{clearTimeout(h),clearTimeout(c),clearTimeout(M),clearTimeout(A)}},[r,i,o,L]),{hasPWMBadge:l,willPushPWMBadge:D,PWM_BADGE_SPACE_WIDTH:ht}}var pt=n.createContext({}),We=n.forwardRef((t,r)=>{var o=t,{value:i,onChange:u,maxLength:l,textAlign:g="left",pattern:d=ct,inputMode:j="numeric",onComplete:v,pushPasswordManagerStrategy:C="increase-width",containerClassName:D,noScriptCSSFallback:L=mt,render:m,children:h}=o,c=st(o,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]),M,A,k,B,O;let[w,oe]=n.useState(typeof c.defaultValue=="string"?c.defaultValue:""),p=i??w,b=dt(p),K=n.useCallback(a=>{u==null||u(a),oe(a)},[u]),W=n.useMemo(()=>d?typeof d=="string"?new RegExp(d):d:null,[d]),S=n.useRef(null),ue=n.useRef(null),de=n.useRef({value:p,onChange:K,isIOS:typeof window<"u"&&((A=(M=window==null?void 0:window.CSS)==null?void 0:M.supports)==null?void 0:A.call(M,"-webkit-touch-callout","none"))}),ie=n.useRef({prev:[(k=S.current)==null?void 0:k.selectionStart,(B=S.current)==null?void 0:B.selectionEnd,(O=S.current)==null?void 0:O.selectionDirection]});n.useImperativeHandle(r,()=>S.current,[]),n.useEffect(()=>{let a=S.current,s=ue.current;if(!a||!s)return;de.current.value!==a.value&&de.current.onChange(a.value),ie.current.prev=[a.selectionStart,a.selectionEnd,a.selectionDirection];function E(){if(document.activeElement!==a){X(null),Z(null);return}let y=a.selectionStart,T=a.selectionEnd,z=a.selectionDirection,N=a.maxLength,$=a.value,Q=ie.current.prev,F=-1,_=-1,U;if($.length!==0&&y!==null&&T!==null){let He=y===T,Ne=y===$.length&&$.length<N;if(He&&!Ne){let V=y;if(V===0)F=0,_=1,U="forward";else if(V===N)F=V-1,_=V,U="backward";else if(N>1&&$.length>1){let fe=0;if(Q[0]!==null&&Q[1]!==null){U=V<Q[1]?"backward":"forward";let $e=Q[0]===Q[1]&&Q[0]<N;U==="backward"&&!$e&&(fe=-1)}F=fe+V,_=fe+V+1}}F!==-1&&_!==-1&&F!==_&&S.current.setSelectionRange(F,_,U)}let ke=F!==-1?F:y,Ce=_!==-1?_:T,_e=U??z;X(ke),Z(Ce),ie.current.prev=[ke,Ce,_e]}if(document.addEventListener("selectionchange",E,{capture:!0}),E(),document.activeElement===a&&xe(!0),!document.getElementById("input-otp-style")){let y=document.createElement("style");if(y.id="input-otp-style",document.head.appendChild(y),y.sheet){let T="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";ee(y.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),ee(y.sheet,`[data-input-otp]:autofill { ${T} }`),ee(y.sheet,`[data-input-otp]:-webkit-autofill { ${T} }`),ee(y.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),ee(y.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let I=()=>{s&&s.style.setProperty("--root-height",`${a.clientHeight}px`)};I();let R=new ResizeObserver(I);return R.observe(a),()=>{document.removeEventListener("selectionchange",E,{capture:!0}),R.disconnect()}},[]);let[me,ye]=n.useState(!1),[J,xe]=n.useState(!1),[H,X]=n.useState(null),[G,Z]=n.useState(null);n.useEffect(()=>{ut(()=>{var a,s,E,I;(a=S.current)==null||a.dispatchEvent(new Event("input"));let R=(s=S.current)==null?void 0:s.selectionStart,y=(E=S.current)==null?void 0:E.selectionEnd,T=(I=S.current)==null?void 0:I.selectionDirection;R!==null&&y!==null&&(X(R),Z(y),ie.current.prev=[R,y,T])})},[p,J]),n.useEffect(()=>{b!==void 0&&p!==b&&b.length<l&&p.length===l&&(v==null||v(p))},[l,v,b,p]);let q=gt({containerRef:ue,inputRef:S,pushPasswordManagerStrategy:C,isFocused:J}),je=n.useCallback(a=>{let s=a.currentTarget.value.slice(0,l);if(s.length>0&&W&&!W.test(s)){a.preventDefault();return}typeof b=="string"&&s.length<b.length&&document.dispatchEvent(new Event("selectionchange")),K(s)},[l,K,b,W]),ve=n.useCallback(()=>{var a;if(S.current){let s=Math.min(S.current.value.length,l-1),E=S.current.value.length;(a=S.current)==null||a.setSelectionRange(s,E),X(s),Z(E)}xe(!0)},[l]),we=n.useCallback(a=>{var s,E;let I=S.current;if(!de.current.isIOS||!a.clipboardData||!I)return;let R=a.clipboardData.getData("text/plain");a.preventDefault();let y=(s=S.current)==null?void 0:s.selectionStart,T=(E=S.current)==null?void 0:E.selectionEnd,z=(y!==T?p.slice(0,y)+R+p.slice(T):p.slice(0,y)+R+p.slice(y)).slice(0,l);if(z.length>0&&W&&!W.test(z))return;I.value=z,K(z);let N=Math.min(z.length,l-1),$=z.length;I.setSelectionRange(N,$),X(N),Z($)},[l,K,W,p]),Oe=n.useMemo(()=>({position:"relative",cursor:c.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[c.disabled]),Se=n.useMemo(()=>({position:"absolute",inset:0,width:q.willPushPWMBadge?`calc(100% + ${q.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:q.willPushPWMBadge?`inset(0 ${q.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:g,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[q.PWM_BADGE_SPACE_WIDTH,q.willPushPWMBadge,g]),ze=n.useMemo(()=>n.createElement("input",lt(at({autoComplete:c.autoComplete||"one-time-code"},c),{"data-input-otp":!0,"data-input-otp-mss":H,"data-input-otp-mse":G,inputMode:j,pattern:W==null?void 0:W.source,style:Se,maxLength:l,value:p,ref:S,onPaste:a=>{var s;we(a),(s=c.onPaste)==null||s.call(c,a)},onChange:je,onMouseOver:a=>{var s;ye(!0),(s=c.onMouseOver)==null||s.call(c,a)},onMouseLeave:a=>{var s;ye(!1),(s=c.onMouseLeave)==null||s.call(c,a)},onFocus:a=>{var s;ve(),(s=c.onFocus)==null||s.call(c,a)},onBlur:a=>{var s;xe(!1),(s=c.onBlur)==null||s.call(c,a)}})),[je,ve,we,j,Se,l,G,H,c,W==null?void 0:W.source,p]),he=n.useMemo(()=>({slots:Array.from({length:l}).map((a,s)=>{let E=J&&H!==null&&G!==null&&(H===G&&s===H||s>=H&&s<G),I=p[s]!==void 0?p[s]:null;return{char:I,isActive:E,hasFakeCaret:E&&I===null}}),isFocused:J,isHovering:!c.disabled&&me}),[J,me,l,G,H,c.disabled,p]),Fe=n.useMemo(()=>m?m(he):n.createElement(pt.Provider,{value:he},h),[h,he,m]);return n.createElement(n.Fragment,null,L!==null&&n.createElement("noscript",null,n.createElement("style",null,L)),n.createElement("div",{ref:ue,"data-input-otp-container":!0,style:Oe,className:D},Fe,n.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},ze)))});We.displayName="Input";function ee(t,r){try{t.insertRule(r)}catch{console.error("input-otp could not insert CSS rule:",r)}}var mt=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;function yt(t){return e.jsx(jt,{children:e.jsx(We,{onComplete:()=>{t.onEnter()},maxLength:6,value:t.value,render:({slots:r})=>e.jsx(f,{flex:"row",gap:"xs",center:"both",children:r.map((o,i)=>e.jsx(vt,{...o,isInvalid:t.isInvalid},i))}),onChange:r=>{t.setValue(r)}})})}const jt=se({"& input":{maxWidth:"100%"}});function vt(t){return e.jsxs(kt,{"data-active":t.isActive,"data-error":t.isInvalid,children:[t.char!==null&&e.jsx("div",{children:t.char}),t.hasFakeCaret&&e.jsx(St,{})]})}const wt=Ve`
  0%, 100% {
    opacity: 0;
  },
  50% {
    opacity: 1;
  }
  `,St=se(()=>{const t=ce();return{position:"absolute",pointerEvents:"none",inset:0,display:"flex",alignItems:"center",justifyContent:"center",animation:`${wt} 1s infinite`,"&::before":{content:"''",display:"block",width:"1.5px",height:"1em",backgroundColor:t.colors.primaryText}}}),kt=se(()=>{const t=ce();return{position:"relative",width:"40px",height:"40px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",fontSize:Me.md,padding:Ge.xs,boxSizing:"border-box",transition:"color 200ms ease",border:`2px solid ${t.colors.borderColor}`,"&[data-active='true']":{borderColor:t.colors.accentText},color:t.colors.primaryText,borderRadius:qe.lg,"&[data-error='true']":{borderColor:t.colors.danger}}});function Ct(t){const{wallet:r,done:o,goBack:i,userInfo:u}=t,{client:l,chain:g,connectModal:d}=te(),j=d.size==="wide",v=t.locale,[C,D]=n.useState(""),[L,m]=n.useState("idle"),[h,c]=n.useState("sending"),[M]=n.useState("base"),A=n.useCallback(async()=>{D(""),m("idle"),c("sending");try{if("email"in u){const w=await be({email:u.email,strategy:"email",client:l});c(w)}else if("phone"in u){const w=await be({phoneNumber:u.phone,strategy:"phone",client:l});c(w)}else throw new Error("Invalid userInfo")}catch(w){console.error(w),m("idle"),c("error")}},[l,u]);async function k(w){if("email"in u)await r.connect({chain:g,strategy:"email",email:u.email,verificationCode:w,client:l}),await ne("email",re);else if("phone"in u)await r.connect({chain:g,strategy:"phone",phoneNumber:u.phone,verificationCode:w,client:l}),await ne("phone",re);else throw new Error("Invalid userInfo")}const B=async w=>{var oe;if(!(typeof h!="object"||w.length!==6)&&(m("idle"),typeof h=="object"&&r))try{if(m("verifying"),h.recoveryShareManagement==="USER_MANAGED"&&(h.isNewUser||h.isNewDevice))if(h.isNewUser)try{await k(w)}catch(b){if(!(b instanceof Error&&b.message.includes("encryption key")))throw b}else try{await k(w)}catch(b){if(!(b instanceof Error&&b.message.includes("encryption key")))throw b}else await k(w),o();m("valid")}catch(p){p instanceof Error&&((oe=p==null?void 0:p.message)!=null&&oe.includes("PAYMENT_METHOD_REQUIRED"))?m("payment_required"):m("invalid"),console.error("Authentication Error",p)}},O=n.useRef(!1);return n.useEffect(()=>{O.current||(O.current=!0,A())},[A]),M==="base"?e.jsxs(f,{fullHeight:!0,flex:"column",animate:"fadein",children:[e.jsx(f,{p:"lg",children:e.jsx(ge,{title:v.signIn,onBack:i})}),e.jsx(f,{expand:!0,flex:"column",center:"y",children:e.jsxs("form",{onSubmit:w=>{w.preventDefault()},children:[e.jsxs(f,{flex:"column",center:"x",px:"lg",children:[!j&&e.jsx(x,{y:"xl"}),e.jsx(P,{children:v.emailLoginScreen.enterCodeSendTo}),e.jsx(x,{y:"sm"}),e.jsx(P,{color:"primaryText",children:"email"in u?u.email:u.phone}),e.jsx(x,{y:"xl"})]}),e.jsx(yt,{isInvalid:L==="invalid",digits:6,value:C,setValue:w=>{D(w),m("idle")},onEnter:()=>{B(C)}}),L==="invalid"&&e.jsxs(Ee,{children:[e.jsx(x,{y:"md"}),e.jsx(P,{size:"sm",color:"danger",center:!0,children:v.emailLoginScreen.invalidCode})]}),L==="payment_required"&&e.jsxs(Ee,{children:[e.jsx(x,{y:"md"}),e.jsx(P,{size:"sm",color:"danger",center:!0,children:v.maxAccountsExceeded})]}),e.jsx(x,{y:"xl"}),e.jsx(f,{px:j?"xxl":"lg",children:L==="verifying"?e.jsx(e.Fragment,{children:e.jsx(f,{flex:"row",center:"x",animate:"fadein",children:e.jsx(ae,{size:"lg",color:"accentText"})})}):e.jsx(f,{animate:"fadein",children:e.jsx(Y,{onClick:()=>B(C),variant:"accent",type:"submit",style:{width:"100%"},children:v.emailLoginScreen.verify})},"btn-container")}),e.jsx(x,{y:"xl"}),!j&&e.jsx(Qe,{}),e.jsxs(f,{p:j?void 0:"lg",children:[h==="error"&&e.jsx(e.Fragment,{children:e.jsx(P,{size:"sm",center:!0,color:"danger",children:v.emailLoginScreen.failedToSendCode})}),h==="sending"&&e.jsxs(f,{flex:"row",center:"both",gap:"xs",style:{textAlign:"center"},children:[e.jsx(P,{size:"sm",children:v.emailLoginScreen.sendingCode}),e.jsx(ae,{size:"xs",color:"secondaryText"})]}),typeof h=="object"&&e.jsx(bt,{onClick:A,type:"button",children:v.emailLoginScreen.resendCode})]})]})})]}):null}const bt=Ye(()=>{const t=ce();return{all:"unset",color:t.colors.accentText,fontSize:Me.sm,cursor:"pointer",textAlign:"center",fontWeight:500,width:"100%","&:hover":{color:t.colors.primaryText}}}),Be=t=>e.jsxs("svg",{width:t.size,height:t.size,viewBox:"0 0 36 36",fill:"none","aria-hidden":"true",children:[e.jsx("path",{d:"M18.0001 15C17.2045 15 16.4414 15.3161 15.8788 15.8787C15.3162 16.4413 15.0001 17.2044 15.0001 18C15.0001 19.53 14.8501 21.765 14.6101 24",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M21.0002 19.6801C21.0002 23.2501 21.0002 29.2501 19.5002 33.0001",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M25.9348 31.53C26.1148 30.63 26.5798 28.08 26.6848 27",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2.99976 18C2.99976 14.8518 3.99032 11.7833 5.83112 9.22935C7.67193 6.67536 10.2697 4.76531 13.2563 3.76975C16.243 2.77419 19.4672 2.74359 22.4723 3.6823C25.4773 4.621 28.1108 6.48141 29.9998 9",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2.99976 24H3.01628",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M32.7 24C33 21 32.8965 15.969 32.7 15",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.49976 29.25C8.24976 27 8.99976 22.5 8.99976 18C8.99824 16.9783 9.17071 15.9638 9.50976 15",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12.9751 33C13.2901 32.01 13.6501 31.02 13.8301 30",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M13.5 10.2C14.8686 9.40988 16.4211 8.99401 18.0014 8.99426C19.5818 8.99452 21.1342 9.41088 22.5025 10.2015C23.8708 10.9921 25.0069 12.129 25.7964 13.498C26.5859 14.867 27.001 16.4197 27 18V21",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]});function Et(t){const{client:r,connectModal:o,chain:i}=te(),{wallet:u,done:l}=t,[g,d]=n.useState("loading"),j=n.useRef(!1);return n.useEffect(()=>{j.current||(j.current=!0,nt(r).then(v=>{d(v?"login":"select")}).catch(()=>{d("select")}))},[r]),e.jsxs(f,{animate:"fadein",fullHeight:!0,flex:"column",children:[e.jsx(f,{p:"lg",children:e.jsx(ge,{title:"Passkey",onBack:t.onBack})}),e.jsx(f,{px:o.size==="wide"?"xxl":"lg",expand:!0,flex:"column",center:"y",children:e.jsxs("div",{children:[g==="loading"&&e.jsxs(e.Fragment,{children:[e.jsx(Ae,{}),e.jsx(x,{y:"xxl"})]}),g==="select"&&e.jsx(At,{onSignin:()=>{d("login")},onSignup:()=>{d("signup")}}),g==="login"&&e.jsx(Lt,{wallet:u,client:r,done:l,onCreate:()=>{d("signup")},chain:i}),g==="signup"&&e.jsx(Mt,{wallet:u,client:r,done:l,chain:i})]})})]})}function Lt(t){const{wallet:r,done:o,client:i,chain:u}=t,[l,g]=n.useState("loading");async function d(){g("loading");try{await r.connect({client:i,strategy:"passkey",type:"sign-in",chain:u}),await ne("passkey",re),o()}catch{g("error")}}const j=n.useRef(!1);return n.useEffect(()=>{j.current||(j.current=!0,d())}),l==="loading"?e.jsx(De,{title:"Requesting Passkey",subtitle:"A pop-up prompt will appear to sign-in and verify your passkey"}):l==="error"?e.jsxs(e.Fragment,{children:[e.jsx(Re,{onTryAgain:d,title:"Failed to Login"}),e.jsx(x,{y:"sm"}),e.jsx(Y,{variant:"outline",fullWidth:!0,onClick:t.onCreate,children:"Create a new Passkey"}),e.jsx(x,{y:"lg"})]}):null}function Mt(t){const{wallet:r,done:o,client:i,chain:u}=t,[l,g]=n.useState("loading");async function d(){g("loading");try{await r.connect({client:i,strategy:"passkey",type:"sign-up",chain:u}),await ne("passkey",re),o()}catch{g("error")}}const j=n.useRef(!1);return n.useEffect(()=>{j.current||(j.current=!0,d())}),l==="loading"?e.jsx(De,{title:"Creating Passkey",subtitle:"A pop-up prompt will appear to sign-in and verify your passkey"}):l==="error"?e.jsxs(e.Fragment,{children:[e.jsx(Re,{onTryAgain:d,title:"Failed to create passkey"}),e.jsx(x,{y:"lg"})]}):null}function At(t){return e.jsxs(f,{children:[e.jsx(x,{y:"xxl"}),e.jsx(f,{flex:"row",center:"x",color:"accentText",children:e.jsx(Be,{size:pe["4xl"]})}),e.jsx(x,{y:"xl"}),e.jsx(x,{y:"xxl"}),e.jsx(Y,{variant:"accent",onClick:t.onSignup,fullWidth:!0,children:"Create a Passkey"}),e.jsx(x,{y:"sm"}),e.jsx(Y,{variant:"outline",onClick:t.onSignin,fullWidth:!0,children:"I have a Passkey"}),e.jsx(x,{y:"lg"})]})}function Re(t){return e.jsxs(f,{animate:"fadein",children:[e.jsx(x,{y:"xxl"}),e.jsx(f,{flex:"row",center:"x",children:e.jsx(Ke,{size:pe["3xl"]})}),e.jsx(x,{y:"lg"}),e.jsx(P,{center:!0,color:"primaryText",size:"lg",children:t.title}),e.jsx(x,{y:"xl"}),e.jsx(x,{y:"xxl"}),e.jsx(Y,{variant:"accent",fullWidth:!0,onClick:t.onTryAgain,children:"Try Again"})]})}function De(t){return e.jsxs(f,{animate:"fadein",children:[e.jsx(x,{y:"xxl"}),e.jsxs(f,{flex:"row",center:"x",style:{position:"relative"},children:[e.jsx(ae,{size:"4xl",color:"accentText"}),e.jsx(f,{color:"accentText",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:e.jsx(Be,{size:pe.xxl})})]}),e.jsx(x,{y:"xl"}),e.jsx(P,{center:!0,color:"primaryText",size:"lg",children:t.title}),e.jsx(x,{y:"md"}),e.jsx(P,{multiline:!0,center:!0,children:t.subtitle}),e.jsx(x,{y:"xxl"}),e.jsx(x,{y:"xxl"})]})}function It(t){var M;const r=t.locale,o=r.socialLoginScreen,i=ce(),{connectModal:u}=te(),[l,g]=n.useState(void 0),{done:d,wallet:j}=t,[v,C]=n.useState("connecting"),{client:D,chain:L}=te(),m=async()=>{var A;try{const k=Ze(t.socialAuth,i);if(!k)throw new Error(`Failed to open ${t.socialAuth} login window`);C("connecting"),await j.connect({chain:L,strategy:t.socialAuth,openedWindow:k,closeOpenedWindow:B=>{B.close()},client:D}),await ne(t.socialAuth,re),C("connected"),d()}catch(k){C("error"),k instanceof Error&&((A=k==null?void 0:k.message)!=null&&A.includes("PAYMENT_METHOD_REQUIRED"))&&g(r.maxAccountsExceeded),console.error(`Error sign in with ${t.socialAuth}`,k)}},h=(M=t.state)==null?void 0:M.socialLogin,c=n.useRef(!1);return n.useEffect(()=>{c.current||h&&(c.current=!0,C("connecting"),h.connectionPromise.then(()=>{d(),C("connected")}).catch(()=>{C("error")}))},[d,h]),e.jsx(f,{animate:"fadein",flex:"column",fullHeight:!0,children:e.jsxs(f,{flex:"column",expand:!0,p:"lg",style:{paddingBottom:0},children:[t.goBack&&e.jsx(ge,{title:o.title,onBack:t.goBack}),u.size==="compact"?e.jsx(x,{y:"xl"}):null,e.jsxs(f,{flex:"column",center:"both",expand:!0,style:{textAlign:"center",minHeight:"250px"},children:[v!=="error"&&e.jsxs(f,{animate:"fadein",children:[e.jsx(P,{color:"primaryText",center:!0,multiline:!0,style:{maxWidth:"250px"},children:o.instruction}),e.jsx(x,{y:"xl"}),e.jsx(f,{center:"x",flex:"row",children:e.jsx(ae,{size:"lg",color:"accentText"})}),e.jsx(x,{y:"xxl"})]}),v==="error"&&e.jsxs(f,{animate:"fadein",children:[e.jsx(P,{color:"danger",children:o.failed}),l&&e.jsx(P,{color:"danger",children:l}),e.jsx(x,{y:"lg"}),e.jsx(Y,{variant:"primary",onClick:m,children:o.retry}),e.jsx(x,{y:"xxl"})]})]})]})})}function Rt(t){const r=Je(),o=Xe(),i=r,u=et(),{connectModal:l}=te();if(!u.data)return e.jsx(Ae,{});const g=l.size==="compact"?t.goBack:()=>{o({})},d=i!=null&&i.emailLogin?{email:i.emailLogin}:i!=null&&i.phoneLogin?{phone:i.phoneLogin}:void 0;return d?e.jsx(Ct,{userInfo:d,locale:u.data,done:t.done,goBack:g,wallet:t.wallet}):i!=null&&i.passkeyLogin?e.jsx(Et,{wallet:t.wallet,done:t.done,onBack:g}):i!=null&&i.socialLogin?e.jsx(It,{socialAuth:i.socialLogin.type,locale:u.data,done:t.done,goBack:g,wallet:t.wallet,state:i}):e.jsx(tt,{select:()=>{},locale:u.data,done:t.done,goBack:t.goBack,wallet:t.wallet})}export{Rt as default};
