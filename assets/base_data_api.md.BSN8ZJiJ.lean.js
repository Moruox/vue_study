import{T as d,_ as g}from"./chunks/dom.vue_vue_type_style_index_0_lang.ptHGDTc4.js";import{m as c,p as k,q as E,t as s,T as y,F as o,U as i,O as a,u as n,S as t,aS as u,ai as F}from"./chunks/framework.DdDdX3wp.js";import{Q as e}from"./chunks/index.CmeTuJ5d.js";const b=`<!--模版区域-->
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
</style>/`,m=c({__name:"dom_no_reactive",setup(r){const l={content:0},p=()=>{l.content++};return(h,f)=>(k(),E(o,null,[s("div",null,y(l.content),1),s("button",{id:"addButton",onClick:p},"递增")],64))}}),C=s("div",{class:"info custom-block"},[s("p",{class:"custom-block-title"},"说明"),s("p",null,[t("前面的篇章,有说到"),s("code",null,"响应式数据"),t("的概念,本篇将介绍如何使用"),s("code",null,"Vue"),t("内置的方法来实现响应式数据。 在此之前,我们先来看2组样例代码。")])],-1),v=s("p",null,[s("code",null,"样例代码一")],-1),A=s("p",null,[s("code",null,"样例代码二")],-1),D=u("",18),N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"base/data_api.md","filePath":"base/data_api.md"}'),B={name:"base/data_api.md"},V=Object.assign(B,{setup(r){return(l,p)=>{const h=F("ClientOnly");return k(),E("div",null,[C,v,i(h,null,{default:a(()=>[i(n(e),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(b)},{vue:a(()=>[i(m)]),_:1},8,["vueCode"])]),_:1}),A,i(h,null,{default:a(()=>[i(n(e),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(d)},{vue:a(()=>[i(g)]),_:1},8,["vueCode"])]),_:1}),D])}}});export{N as __pageData,V as default};
