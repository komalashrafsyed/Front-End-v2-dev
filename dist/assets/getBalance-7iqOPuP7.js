import{aa as r,bD as n}from"./index-Cq-SXoro.js";import{getCurrencyMetadata as c}from"./getCurrencyMetadata-CM6gtBTg.js";import"./decimals-Dl13iPTw.js";const s="0x70a08231",o=[{type:"address",name:"_address"}],d=[{type:"uint256"}];async function m(a){return r({contract:a.contract,method:[s,o,d],params:[a.address]})}async function y(a){const[t,e]=await Promise.all([m(a),c(a)]);return{...e,value:t,displayValue:n(t,e.decimals)}}export{y as getBalance};