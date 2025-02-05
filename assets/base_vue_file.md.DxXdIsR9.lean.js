import{d,o as t,c as h,j as i,t as a,_ as c,I as n,w as e,k as p,a4 as k,D as g}from"./chunks/framework.Ct5bBWy3.js";import{Q as o}from"./chunks/index.DMUZYavE.js";const u=`<template>
  <div>
    <h1>{{ userInfo.username }}</h1>
    <p>{{ userInfo.age }}</p>
    <p>{{ userInfo.address }}</p>
    <p>gender: {{ userInfo.gender === '1' ? '男' : '女' }}</p>
  </div>
</template>
<script lang="ts" setup>
const userInfo = {
  username: "张三",
  age: 20,
  address: "北京市",
  gender: '1'
}
<\/script>
<style lang="css" scoped>
h1 {
  color: blue;
}
</style>`,y=d({__name:"vue_file_demo",setup(r){const s={username:"张三",age:20,address:"北京市",gender:"1"};return(E,l)=>(t(),h("div",null,[i("h1",null,a(s.username),1),i("p",null,a(s.age),1),i("p",null,a(s.address),1),i("p",null,"gender: "+a("男"),1)]))}}),b=c(y,[["__scopeId","data-v-56a154be"]]),m=k("",14),F=k("",2),D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"base/vue_file.md","filePath":"base/vue_file.md"}'),v={name:"base/vue_file.md"},B=Object.assign(v,{setup(r){return(s,E)=>{const l=g("ClientOnly");return t(),h("div",null,[m,n(l,null,{default:e(()=>[n(p(o),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:p(u)},{vue:e(()=>[n(b)]),_:1},8,["vueCode"])]),_:1}),F])}}});export{D as __pageData,B as default};
