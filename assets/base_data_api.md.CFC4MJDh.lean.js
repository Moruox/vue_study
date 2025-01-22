import{T as d,_ as g}from"./chunks/dom.vue_vue_type_style_index_0_lang.B-DpeOHW.js";import{d as c,o as e,c as k,j as n,t as y,F as o,I as s,w as i,k as a,a4 as E,D as u}from"./chunks/framework.Ct5bBWy3.js";import{Q as p}from"./chunks/index.DMUZYavE.js";const b=`<!--模版区域-->
<template>
  <!--2.将响应式数据源绑定到模板中-->
  <div>{{data.content}}</div>
  <button id="addButton" @click="addCount">递增</button>
</template>
<!--脚本区域-->
<script lang="ts" setup>
//1.声明响应式数据源
const data = {
  content: 0
}
//变更响应式数据源
const addCount = ()=>{
  data.content++
}
<\/script>
<!--样式区域-->
<style>
#addButton {
  min-width: 50px;
  padding: 4px;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>/`,F=c({__name:"dom_no_reactive",setup(r){const l={content:0},t=()=>{l.content++};return(h,D)=>(e(),k(o,null,[n("div",null,y(l.content),1),n("button",{id:"addButton",onClick:t},"递增")],64))}}),m=E("",2),C=n("p",null,[n("code",null,"样例代码二")],-1),v=E("",18),w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"base/data_api.md","filePath":"base/data_api.md"}'),A={name:"base/data_api.md"},q=Object.assign(A,{setup(r){return(l,t)=>{const h=u("ClientOnly");return e(),k("div",null,[m,s(h,null,{default:i(()=>[s(a(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(b)},{vue:i(()=>[s(F)]),_:1},8,["vueCode"])]),_:1}),C,s(h,null,{default:i(()=>[s(a(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(d)},{vue:i(()=>[s(g)]),_:1},8,["vueCode"])]),_:1}),v])}}});export{w as __pageData,q as default};
