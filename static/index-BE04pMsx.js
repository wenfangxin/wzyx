import{Q as P,f as T,r as v,b as L,a8 as i,ae as A,h as s,i as B,H as N,E as d,G as t,j as c,M as a,L as _,K as f,J as h,u as l}from"./vue-Bs5yWiiQ.js";import{r as V,_ as I}from"./index-B3XkOEpg.js";import{f as b}from"./index-HIP7fy-L.js";import"./element-B77pVBIR.js";import"./vxe-B2HKue-a.js";const K={total:0,currentPage:1,pageSizes:[10,20,50],pageSize:10,layout:"total, sizes, prev, pager, next, jumper"};function j(u={}){const r=P({...K,...u});return{paginationData:r,handleCurrentChange:p=>{r.currentPage=p},handleSizeChange:p=>{r.pageSize=p}}}function E(u){return V({url:"admin/task/list",method:"post",data:u})}const q={class:"app-container"},G={class:"table-wrapper"},H=["href"],J=["href"],M={class:"pager-wrapper"},Q=T({name:"Task",__name:"index",setup(u){const r=v(!1),{paginationData:n,handleCurrentChange:w,handleSizeChange:p}=j(),k=v([]);return L([()=>n.currentPage,()=>n.pageSize],()=>{r.value=!0,E({page:n.currentPage,pageSize:n.pageSize}).then(m=>{n.total=m.data.total,k.value=m.data.list,r.value=!1})},{immediate:!0}),(m,O)=>{const o=i("el-table-column"),C=i("Loading"),z=i("el-icon"),g=i("el-tag"),x=i("el-table"),y=i("el-pagination"),S=i("el-card"),D=A("loading");return s(),B("div",q,[N((s(),d(S,{shadow:"never"},{default:t(()=>[c("div",G,[a(x,{data:k.value},{default:t(()=>[a(o,{prop:"userId",fixed:"","min-width":"140",label:"用户ID",align:"center"}),a(o,{prop:"title","show-overflow-tooltip":"","min-width":"160px",label:"标题",align:"center"}),a(o,{prop:"aiToken",width:"160px",label:"消耗Token",align:"center"}),a(o,{prop:"articleLink","show-overflow-tooltip":"","min-width":"160px",label:"文章链接",align:"center"},{default:t(e=>[c("a",{class:"a-link",target:"_blank",href:e.row.articleLink},_(e.row.articleLink),9,H)]),_:1}),a(o,{prop:"link","min-width":"160px",label:"洗稿链接",align:"center"},{default:t(e=>[c("a",{class:"a-link",href:e.row.link,"show-overflow-tooltip":"",target:"_blank"},_(e.row.link),9,J)]),_:1}),a(o,{prop:"modelKey","min-width":"160px",label:"模型Key",align:"center"}),a(o,{prop:"status","min-width":"120px",label:"状态",align:"center"},{default:t(e=>[e.row.status==0?(s(),d(g,{key:0,effect:"plain"},{default:t(()=>[a(z,null,{default:t(()=>[a(C)]),_:1}),f(" 生成中")]),_:1})):h("",!0),e.row.status==1?(s(),d(g,{key:1,type:"success",effect:"plain"},{default:t(()=>[f("同步完成")]),_:1})):h("",!0),e.row.status==2?(s(),d(g,{key:2,type:"danger",effect:"plain"},{default:t(()=>[f("同步失败")]),_:1})):h("",!0),e.row.status==3?(s(),d(g,{key:3,type:"success"},{default:t(()=>[f("已发布")]),_:1})):h("",!0)]),_:1}),a(o,{prop:"createdAt","min-width":"180px",label:"创建时间",align:"center"},{default:t(e=>[c("div",null,_(l(b)(e.row.createdAt)),1)]),_:1}),a(o,{prop:"updatedAt","min-width":"180px",label:"更新时间",align:"center"},{default:t(e=>[c("div",null,_(l(b)(e.row.updatedAt)),1)]),_:1})]),_:1},8,["data"])]),c("div",M,[a(y,{background:"",layout:l(n).layout,"page-sizes":l(n).pageSizes,total:l(n).total,"page-size":l(n).pageSize,currentPage:l(n).currentPage,onSizeChange:l(p),onCurrentChange:l(w)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])]),_:1})),[[D,r.value]])])}}}),Z=I(Q,[["__scopeId","data-v-c4ffea05"]]);export{Z as default};
