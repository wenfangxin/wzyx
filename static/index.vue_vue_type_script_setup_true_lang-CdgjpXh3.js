import{f as g}from"./index-B3XkOEpg.js";import{w as v}from"./element-B77pVBIR.js";import{f as C,a8 as o,h as c,E as p,G as e,M as r,i as T,$ as B,u as i,F as M,j as _,L as V}from"./vue-Bs5yWiiQ.js";const P=C({__name:"index",setup(b){const{themeList:u,activeThemeName:h,setTheme:f}=g(),w=({clientX:n,clientY:a},d)=>{const m=Math.hypot(Math.max(n,window.innerWidth-n),Math.max(a,window.innerHeight-a)),t=document.documentElement.style;t.setProperty("--v3-theme-x",n+"px"),t.setProperty("--v3-theme-y",a+"px"),t.setProperty("--v3-theme-r",m+"px");const s=()=>{f(d)};document.startViewTransition?document.startViewTransition(s):s()};return(n,a)=>{const d=o("el-icon"),m=o("el-tooltip"),t=o("el-dropdown-item"),s=o("el-dropdown-menu"),x=o("el-dropdown");return c(),p(x,{trigger:"click"},{dropdown:e(()=>[r(s,null,{default:e(()=>[(c(!0),T(M,null,B(i(u),(l,k)=>(c(),p(t,{key:k,disabled:i(h)===l.name,onClick:y=>{w(y,l.name)}},{default:e(()=>[_("span",null,V(l.title),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),default:e(()=>[_("div",null,[r(m,{effect:"dark",content:"主题模式",placement:"bottom"},{default:e(()=>[r(d,{size:20},{default:e(()=>[r(i(v))]),_:1})]),_:1})])]),_:1})}}});export{P as _};
