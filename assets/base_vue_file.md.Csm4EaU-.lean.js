import{m as c,p as h,q as k,t as s,T as a,ax as o,S as i,U as l,O as t,u as p,aS as r,ai as g}from"./chunks/framework.DdDdX3wp.js";import{Q as u}from"./chunks/index.CmeTuJ5d.js";const y=`<template>
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
</style>`,b=c({__name:"vue_file_demo",setup(d){const n={username:"张三",age:20,address:"北京市",gender:"1"};return(E,e)=>(h(),k("div",null,[s("h1",null,a(n.username),1),s("p",null,a(n.age),1),s("p",null,a(n.address),1),s("p",null,"gender: "+a("男"),1)]))}}),m=o(b,[["__scopeId","data-v-56a154be"]]),F=r("",10),v={class:"info custom-block"},C=s("p",{class:"custom-block-title"},"说明",-1),_=s("li",null,[i("模板语法是.vue文件的核心，它是.vue文件中最重要的部分。模板语法使用了"),s("code",null,"HTML语法"),i("，并提供了一些"),s("code",null,"指令"),i("和"),s("code",null,"内置组件"),i("，可以帮助我们更方便地渲染页面。")],-1),A=s("li",null,[i("为了减少学习成本，本章只介绍模板语法的一些基础知识,"),s("code",null,"指令"),i("和"),s("code",null,"内置组件"),i("的使用后续章节会详细介绍。")],-1),B=s("code",null,"vue",-1),D=s("code",null,"访问脚本区域的能力",-1),f=s("code",null,"表达式",-1),q=s("code",null,"JavaScript",-1),x=s("li",null,[i('当前模版中还允许在标签的属性中读取脚本区域的变量，但是要使用 :[属性名]="变量名" 的语法，比如：'),s("code",null,'<input :value="userInfo.username">')],-1),S=s("li",null,[i("单使用"),s("code",null,":=变量名"),i("这种语法时，如果变量是对象，"),s("code",null,"vue"),i("会将对象展开,以"),s("code",null,"key='value'"),i("的形式赋值给标签的属性。")],-1),I=r("",3),P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"base/vue_file.md","filePath":"base/vue_file.md"}'),T={name:"base/vue_file.md"},Z=Object.assign(T,{setup(d){return(n,E)=>{const e=g("ClientOnly");return h(),k("div",null,[F,s("div",v,[C,s("ul",null,[_,A,s("li",null,[i("模板区域内"),B,i("为我们提供了"),D,i("，但需要使用"),s("code",null,a(),1),i("语法来关联数据，"),s("code",null,a(),1),i(" 内部支持为"),f,i("，所以我们可以直接使用"),q,i("的语法。")]),x,S])]),I,l(e,null,{default:t(()=>[l(p(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:p(y)},{vue:t(()=>[l(m)]),_:1},8,["vueCode"])]),_:1})])}}});export{P as __pageData,Z as default};
