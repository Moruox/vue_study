import{m as o,Z as a,p as c,q as d,t,T as r,F as s}from"./framework.DdDdX3wp.js";const m=`<!--模版区域-->
<template>
  <!--2.将响应式数据源绑定到模板中-->
  <div>{{data.content}}</div>
  <button id="addButton" @click="addCount">递增</button>
</template>
<!--脚本区域-->
<script lang="ts" setup>
import { reactive } from 'vue'
//1.声明响应式数据源
const data = reactive({
    content: 0
})
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
</style>/`,v=o({__name:"dom",setup(i){const n=a({content:0}),e=()=>{n.content++};return(l,p)=>(c(),d(s,null,[t("div",null,r(n.content),1),t("button",{id:"addButton",onClick:e},"递增")],64))}});export{m as T,v as _};
