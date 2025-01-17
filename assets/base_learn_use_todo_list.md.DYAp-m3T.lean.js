import{m as g,p,q as h,t as d,ax as o,F as B,a8 as b,T as u,P as A,al as m,R as D,Z as v,U as E,O as F,u as c,aS as C,ai as f}from"./chunks/framework.DdDdX3wp.js";import{Q as T}from"./chunks/index.CmeTuJ5d.js";const x="/vue_study/assets/img_1.BrjwrNmV.png",_=`<template>
  <div class="todo-container">
    <!--引入使用,并绑定数据，监听事件-->
    <TodoMsg v-model="state.todoMsg" @userEvent="userEvent"/>
    <ToDoList :todoList="state.todoList" @userEvent="userEvent"/>
  </div>
</template>
<script lang="ts" setup>
import TodoMsg from './todoMessageInput.vue'
import ToDoList from "./ToDoList.vue";
import { reactive } from 'vue'
//定义数据类型
type ToDoType = {
  id: string
  message: string
  edit: boolean
}
//定义数据源
const state = reactive<{
  todoMsg: string,
  todoList: Array<ToDoType>,
}> ({
  todoMsg: '',
  todoList: []
})
//完善业务逻辑处理
//生成唯一id的工具函数
const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}
//添加todo触发的逻辑
const addTodo = (message: string) => {
  if (state.todoMsg.trim() === '') {
    return
  }
  const newTodo = {
    id: generateId(),
    message: message,
    edit: false
  }
  state.todoList.push(newTodo)
  state.todoMsg = ''
}
//删除todo触发的逻辑
const deleteTodo = (todo: ToDoType) => {
  const index = state.todoList.findIndex(todo => todo.id === todo.id)
  if (index!== -1) {
    state.todoList.splice(index, 1)
  }
}
//编辑todo触发的逻辑
const editTodo = (todo: ToDoType) => {
  const todoIndex = state.todoList.findIndex(item => item.id === todo.id)
  if (todoIndex !== -1) {
    todo.edit = !todo.edit
    state.todoList[todoIndex] = todo
  }
}
//用户事件
const userEvent = (emitEvent: { type: 'submitTodo' | 'deleteTodo', detail:ToDoType | string}) => {
//根据事件类型进行不同的处理
  switch (emitEvent.type) {
    case 'submitTodo':
      addTodo(emitEvent.detail as string)
      break
    case 'deleteTodo':
      deleteTodo((emitEvent.detail as ToDoType).id)
      break
    case 'editTodo':
      editTodo(emitEvent.detail)
      break
    default:
      break
  }
}
<\/script>
<style lang="css" scoped>
.todo-container {
  width: 100%;
  height: 100%;
}
</style>`,q={class:"todo-msg"},L=["value"],M=g({__name:"todoMessageInput",props:{modelValue:{default:""}},emits:["update:modelValue","userEvent"],setup(r,{emit:i}){return(n,l)=>(p(),h("div",q,[d("input",{class:"todo-input",value:n.modelValue,onInput:l[0]||(l[0]=k=>n.$emit("update:modelValue",k.target.value))},null,40,L),d("button",{class:"todo-btn",onClick:l[1]||(l[1]=k=>n.$emit("userEvent",{type:"submitTodo",detail:n.modelValue}))},"Submit")]))}}),w=o(M,[["__scopeId","data-v-f1ffb7cc"]]),I={class:"todo-list-container"},V={key:0,class:"message"},P=["onUpdate:modelValue","onBlur"],S=["onClick"],N=["onClick"],X=g({__name:"todoList",props:{todoList:{default:[]}},emits:["userEvent","update:todoList"],setup(r,{emit:i}){const n=i,l=k=>{n("userEvent",{type:"editTodo",detail:k})};return(k,y)=>(p(),h("div",I,[(p(!0),h(B,null,b(k.todoList,a=>(p(),h("div",{class:"todo-list",key:a.id},[a.edit?A((p(),h("input",{key:1,type:"text",class:"edit-input","onUpdate:modelValue":s=>a.message=s,onBlur:s=>l(a)},null,40,P)),[[m,a.message]]):(p(),h("div",V,u(a.message),1)),a.edit?D("",!0):(p(),h("button",{key:2,class:"btn edit-btn",onClick:s=>n("userEvent",{type:"editTodo",detail:a})},"Edit",8,S)),d("button",{class:"btn remove-btn",onClick:s=>n("userEvent",{type:"deleteTodo",detail:a})},"Remove",8,N)]))),128))]))}}),$=o(X,[["__scopeId","data-v-6111af4f"]]),Z={class:"todo-container"},R=g({__name:"App",setup(r){const i=v({todoMsg:"",todoList:[]}),n=()=>Math.random().toString(36).substr(2,9),l=s=>{if(i.todoMsg.trim()==="")return;const t={id:n(),message:s,edit:!1};i.todoList.push(t),i.todoMsg=""},k=s=>{const t=i.todoList.findIndex(e=>e.id===e.id);t!==-1&&i.todoList.splice(t,1)},y=s=>{const t=i.todoList.findIndex(e=>e.id===s.id);t!==-1&&(s.edit=!s.edit,i.todoList[t]=s)},a=s=>{switch(s.type){case"submitTodo":l(s.detail);break;case"deleteTodo":k(s.detail.id);break;case"editTodo":y(s.detail);break}};return(s,t)=>(p(),h("div",Z,[E(w,{modelValue:i.todoMsg,"onUpdate:modelValue":t[0]||(t[0]=e=>i.todoMsg=e),onUserEvent:a},null,8,["modelValue"]),E($,{todoList:i.todoList,onUserEvent:a},null,8,["todoList"])]))}}),z=o(R,[["__scopeId","data-v-d8b467ed"]]),j=C("",21),U=C("",2),G=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"base/learn_use/todo_list.md","filePath":"base/learn_use/todo_list.md"}'),W={name:"base/learn_use/todo_list.md"},H=Object.assign(W,{setup(r){return(i,n)=>{const l=f("ClientOnly");return p(),h("div",null,[j,E(l,null,{default:F(()=>[E(c(T),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22App.vue%22%3A%22%3Ctemplate%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22todo-container%5C%22%3E%5Cn%20%20%20%20%3C!--%E5%BC%95%E5%85%A5%E4%BD%BF%E7%94%A8%2C%E5%B9%B6%E7%BB%91%E5%AE%9A%E6%95%B0%E6%8D%AE%EF%BC%8C%E7%9B%91%E5%90%AC%E4%BA%8B%E4%BB%B6--%3E%5Cn%20%20%20%20%3CTodoMsg%20v-model%3D%5C%22state.todoMsg%5C%22%20%40userEvent%3D%5C%22userEvent%5C%22%2F%3E%5Cn%20%20%20%20%3CToDoList%20%3AtodoList%3D%5C%22state.todoList%5C%22%20%40userEvent%3D%5C%22userEvent%5C%22%2F%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%3Cscript%20lang%3D%5C%22ts%5C%22%20setup%3E%5Cnimport%20TodoMsg%20from%20'.%2FtodoMessageInput.vue'%5Cnimport%20ToDoList%20from%20%5C%22.%2FToDoList.vue%5C%22%3B%5Cnimport%20%7B%20reactive%20%7D%20from%20'vue'%5Cn%2F%2F%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%5Cntype%20ToDoType%20%3D%20%7B%5Cn%20%20id%3A%20string%5Cn%20%20message%3A%20string%5Cn%20%20edit%3A%20boolean%5Cn%7D%5Cn%2F%2F%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E6%BA%90%5Cnconst%20state%20%3D%20reactive%3C%7B%5Cn%20%20todoMsg%3A%20string%2C%5Cn%20%20todoList%3A%20Array%3CToDoType%3E%2C%5Cn%7D%3E%20(%7B%5Cn%20%20todoMsg%3A%20''%2C%5Cn%20%20todoList%3A%20%5B%5D%5Cn%7D)%5Cn%2F%2F%E5%AE%8C%E5%96%84%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91%E5%A4%84%E7%90%86%5Cn%2F%2F%E7%94%9F%E6%88%90%E5%94%AF%E4%B8%80id%E7%9A%84%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%5Cnconst%20generateId%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20Math.random().toString(36).substr(2%2C%209)%5Cn%7D%5Cn%2F%2F%E6%B7%BB%E5%8A%A0todo%E8%A7%A6%E5%8F%91%E7%9A%84%E9%80%BB%E8%BE%91%5Cnconst%20addTodo%20%3D%20(message%3A%20string)%20%3D%3E%20%7B%5Cn%20%20if%20(state.todoMsg.trim()%20%3D%3D%3D%20'')%20%7B%5Cn%20%20%20%20return%5Cn%20%20%7D%5Cn%20%20const%20newTodo%20%3D%20%7B%5Cn%20%20%20%20id%3A%20generateId()%2C%5Cn%20%20%20%20message%3A%20message%2C%5Cn%20%20%20%20edit%3A%20false%5Cn%20%20%7D%5Cn%20%20state.todoList.push(newTodo)%5Cn%20%20state.todoMsg%20%3D%20''%5Cn%7D%5Cn%2F%2F%E5%88%A0%E9%99%A4todo%E8%A7%A6%E5%8F%91%E7%9A%84%E9%80%BB%E8%BE%91%5Cnconst%20deleteTodo%20%3D%20(todo%3A%20ToDoType)%20%3D%3E%20%7B%5Cn%20%20const%20index%20%3D%20state.todoList.findIndex(todo%20%3D%3E%20todo.id%20%3D%3D%3D%20todo.id)%5Cn%20%20if%20(index!%3D%3D%20-1)%20%7B%5Cn%20%20%20%20state.todoList.splice(index%2C%201)%5Cn%20%20%7D%5Cn%7D%5Cn%2F%2F%E7%BC%96%E8%BE%91todo%E8%A7%A6%E5%8F%91%E7%9A%84%E9%80%BB%E8%BE%91%5Cnconst%20editTodo%20%3D%20(todo%3A%20ToDoType)%20%3D%3E%20%7B%5Cn%20%20const%20todoIndex%20%3D%20state.todoList.findIndex(item%20%3D%3E%20item.id%20%3D%3D%3D%20todo.id)%5Cn%20%20if%20(todoIndex%20!%3D%3D%20-1)%20%7B%5Cn%20%20%20%20todo.edit%20%3D%20!todo.edit%5Cn%20%20%20%20state.todoList%5BtodoIndex%5D%20%3D%20todo%5Cn%20%20%7D%5Cn%7D%5Cn%2F%2F%E7%94%A8%E6%88%B7%E4%BA%8B%E4%BB%B6%5Cnconst%20userEvent%20%3D%20(emitEvent%3A%20%7B%20type%3A%20'submitTodo'%20%7C%20'deleteTodo'%2C%20detail%3AToDoType%20%7C%20string%7D)%20%3D%3E%20%7B%5Cn%2F%2F%E6%A0%B9%E6%8D%AE%E4%BA%8B%E4%BB%B6%E7%B1%BB%E5%9E%8B%E8%BF%9B%E8%A1%8C%E4%B8%8D%E5%90%8C%E7%9A%84%E5%A4%84%E7%90%86%5Cn%20%20switch%20(emitEvent.type)%20%7B%5Cn%20%20%20%20case%20'submitTodo'%3A%5Cn%20%20%20%20%20%20addTodo(emitEvent.detail%20as%20string)%5Cn%20%20%20%20%20%20break%5Cn%20%20%20%20case%20'deleteTodo'%3A%5Cn%20%20%20%20%20%20deleteTodo((emitEvent.detail%20as%20ToDoType).id)%5Cn%20%20%20%20%20%20break%5Cn%20%20%20%20case%20'editTodo'%3A%5Cn%20%20%20%20%20%20editTodo(emitEvent.detail)%5Cn%20%20%20%20%20%20break%5Cn%20%20%20%20default%3A%5Cn%20%20%20%20%20%20break%5Cn%20%20%7D%5Cn%7D%5Cn%3C%2Fscript%3E%5Cn%3Cstyle%20lang%3D%5C%22css%5C%22%20scoped%3E%5Cn.todo-container%20%7B%5Cn%20%20width%3A%20100%25%3B%5Cn%20%20height%3A%20100%25%3B%5Cn%7D%5Cn%3C%2Fstyle%3E%22%2C%22todoMessageInput.vue%22%3A%22%3Ctemplate%3E%5Cn%20%20%3C!--%E4%BD%9C%E4%B8%BA%E6%96%B0%E5%A2%9E%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86--%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22todo-msg%5C%22%3E%5Cn%20%20%20%20%3C!--%20%E8%BE%93%E5%85%A5%E6%A1%86%20%E5%BD%93%E6%95%B0%E6%8D%AE%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96%E6%97%B6%EF%BC%8C%E8%A7%A6%E5%8F%91update%3AmodelValue%E4%BA%8B%E4%BB%B6%20%E9%80%9A%E7%9F%A5%E7%88%B6%E7%BB%84%E4%BB%B6%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE%20--%3E%5Cn%20%20%20%20%3Cinput%20class%3D%5C%22todo-input%5C%22%20%3Avalue%3D%5C%22modelValue%5C%22%20%40input%3D%5C%22%24emit('update%3AmodelValue'%2C%20%24event.target.value)%5C%22%20%2F%3E%5Cn%20%20%20%20%3C!--%20%E6%8F%90%E4%BA%A4%E6%8C%89%E9%92%AE%20%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E8%A7%A6%E5%8F%91%E7%88%B6%E7%BB%84%E4%BB%B6%E7%9A%84submitTodo%E4%BA%8B%E4%BB%B6%20--%3E%5Cn%20%20%20%20%3Cbutton%20class%3D%5C%22todo-btn%5C%22%20%40click%3D%5C%22%24emit('userEvent'%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA%E4%BA%8B%E4%BB%B6%E7%B1%BB%E5%9E%8B%E4%BE%BF%E4%BA%8E%E7%88%B6%E7%BB%84%E4%BB%B6%E5%A4%84%E7%90%86%5Cn%20%20%20%20%20%20%20%20type%3A%20'submitTodo'%2C%5Cn%20%20%20%20%20%20%20%20%2F%2F%E4%BA%8B%E4%BB%B6%E8%AF%A6%E6%83%85%20%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E5%86%85%E5%AE%B9%5Cn%20%20%20%20%20%20%20%20detail%3A%20modelValue%2C%5Cn%20%20%20%20%7D)%5C%22%3ESubmit%3C%2Fbutton%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%3Cscript%20lang%3D%5C%22ts%5C%22%20setup%3E%5Cn%2F%2F%E6%8E%A5%E6%94%B6%E7%88%B6%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E7%9A%84modelValue%5CnwithDefaults(defineProps%3C%7B%5Cn%20%20modelValue%3A%20string%3B%5Cn%7D%3E()%2C%7B%5Cn%20%20modelValue%3A%20''%5Cn%7D)%5Cnconst%20emits%20%3D%20defineEmits(%5B'update%3AmodelValue'%2C'userEvent'%5D)%5Cn%3C%2Fscript%3E%5Cn%3Cstyle%20scoped%3E%5Cn.todo-msg%20%7B%5Cn%20%20width%3A%20100%25%3B%5Cn%20%20display%3A%20flex%3B%5Cn%20%20align-items%3A%20center%3B%5Cn%20%20justify-content%3A%20space-between%3B%5Cn%7D%5Cn.todo-input%20%7B%5Cn%20%20flex%3A%201%3B%5Cn%20%20padding%3A%200.5rem%3B%5Cn%20%20border%3A%201px%20solid%20%23ccc%3B%5Cn%20%20border-radius%3A%200.25rem%3B%5Cn%20%20margin-right%3A%200.5rem%3B%5Cn%7D%5Cn.todo-input%3Afocus%20%7B%5Cn%20%20outline%3A%20none%3B%5Cn%20%20border-color%3A%20%23007bff%3B%5Cn%7D%5Cn.todo-btn%20%7B%5Cn%20%20min-width%3A%20100px%3B%5Cn%20%20height%3A%20100%25%3B%5Cn%20%20padding%3A%200.5rem%3B%5Cn%20%20border%3A%20none%3B%5Cn%20%20border-radius%3A%200.25rem%3B%5Cn%20%20background-color%3A%20%23007bff%3B%5Cn%20%20color%3A%20%23fff%3B%5Cn%20%20cursor%3A%20pointer%3B%5Cn%7D%5Cn%3C%2Fstyle%3E%22%2C%22ToDoList.vue%22%3A%22%3Ctemplate%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22todo-list-container%5C%22%3E%5Cn%20%20%20%20%3C!--%E5%BE%AA%E7%8E%AF%E7%94%9F%E6%88%90%E4%BB%A3%E5%8A%9E%E4%BA%8B%E9%A1%B9%E5%88%97%E8%A1%A8--%3E%5Cn%20%20%20%20%3Cdiv%20class%3D%5C%22todo-list%5C%22%20v-for%3D%5C%22todo%20in%20todoList%5C%22%20%3Akey%3D%5C%22todo.id%5C%22%3E%5Cn%20%20%20%20%20%20%3C!--%E5%A6%82%E6%9E%9C%E5%BC%80%E5%90%AF%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F%2C%E5%88%99%E6%98%BE%E7%A4%BA%E7%BC%96%E8%BE%91%E6%A1%86%2C%E5%90%A6%E5%88%99%E6%98%BE%E7%A4%BA%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E5%86%85%E5%AE%B9--%3E%5Cn%20%20%20%20%20%20%3Cdiv%20v-if%3D%5C%22!todo.edit%5C%22%20class%3D%5C%22message%5C%22%3E%7B%7Btodo.message%7D%7D%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%3C!--%E5%BD%93%E8%BE%93%E5%85%A5%E6%A1%86%E5%A4%B1%E5%8E%BB%E7%84%A6%E7%82%B9%E6%97%B6%2C%E8%A7%A6%E5%8F%91submitEdit%E6%96%B9%E6%B3%95%2C%E9%80%9A%E7%9F%A5%E7%88%B6%E7%BB%84%E4%BB%B6%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE--%3E%5Cn%20%20%20%20%20%20%3Cinput%20v-else%20type%3D%5C%22text%5C%22%20class%3D%5C%22edit-input%5C%22%20v-model%3D%5C%22todo.message%5C%22%20%40blur%3D%5C%22submitEdit(todo)%5C%22%2F%3E%5Cn%20%20%20%20%20%20%3C!--%E7%BC%96%E8%BE%91%E6%8C%89%E9%92%AE%2C%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E8%A7%A6%E5%8F%91%E5%8F%98%E6%9B%B4%E5%BD%93%E5%89%8Dtodo%E7%9A%84edit%E7%8A%B6%E6%80%81--%3E%5Cn%20%20%20%20%20%20%3Cbutton%20v-if%3D%5C%22!todo.edit%5C%22%20class%3D%5C%22btn%20edit-btn%5C%22%20%40click%3D%5C%22emits('userEvent'%2C%20%7Btype%3A%20'editTodo'%2C%20detail%3A%20todo%7D)%5C%22%3EEdit%3C%2Fbutton%3E%5Cn%20%20%20%20%20%20%3C!--%E5%88%A0%E9%99%A4%E6%8C%89%E9%92%AE%2C%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E8%A7%A6%E5%8F%91%E7%88%B6%E7%BB%84%E4%BB%B6%E7%9A%84deleteTodo%E4%BA%8B%E4%BB%B6--%3E%5Cn%20%20%20%20%20%20%3Cbutton%20class%3D%5C%22btn%20remove-btn%5C%22%20%40click%3D%5C%22emits('userEvent'%2C%20%7Btype%3A%20'deleteTodo'%2C%20detail%3A%20todo%7D)%5C%22%3ERemove%3C%2Fbutton%3E%5Cn%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%3Cscript%20lang%3D%5C%22ts%5C%22%20setup%3E%5Cn%2F%2F%E5%AE%9A%E4%B9%89%E6%8E%A5%E6%94%B6%E7%88%B6%E7%BB%84%E4%BB%B6%E7%9A%84%E5%8F%82%E6%95%B0%5Cnconst%20props%20%3D%20withDefaults(defineProps%3C%7B%5Cn%20%20todoList%3A%20%7B%5Cn%20%20%20%20id%3Astring%2C%5Cn%20%20%20%20message%3Astring%2C%5Cn%20%20%7D%5B%5D%5Cn%7D%3E()%2C%7B%5Cn%20%20%2F%2F%E7%94%A8%E4%BA%8E%E6%B8%B2%E6%9F%93%E5%88%9D%E5%A7%8B%E6%95%B0%E6%8D%AE%5Cn%20%20todoList%3A%20%5B%5D%5Cn%7D)%5Cn%2F%2F%E5%AE%9A%E4%B9%89%E5%AD%90%E7%BB%84%E4%BB%B6%E8%A7%A6%E5%8F%91%E7%9A%84%E4%BA%8B%E4%BB%B6%5Cnconst%20emits%20%3D%20defineEmits(%5B'userEvent'%2C'update%3AtodoList'%5D)%5Cn%2F%2F%E5%BD%93%E7%BC%96%E8%BE%91%E5%AE%8C%E6%88%90%E5%90%8E%EF%BC%8C%E5%B0%86%E7%BC%96%E8%BE%91%E7%9A%84%E7%BB%93%E6%9E%9C%E9%80%9A%E7%9F%A5%E7%88%B6%E7%BB%84%E4%BB%B6%5Cnconst%20submitEdit%20%3D%20(todo%3A%20%7Bid%3Astring%2C%20message%3Astring%2Cedit%3Aboolean%7D)%20%3D%3E%20%7B%5Cn%20%20emits('userEvent'%2C%20%7Btype%3A%20'editTodo'%2C%20detail%3A%20todo%7D)%5Cn%7D%5Cn%3C%2Fscript%3E%5Cn%3C!--%20%E6%A0%B7%E5%BC%8F%20--%3E%5Cn%3Cstyle%20scoped%3E%5Cn.todo-list-container%7B%5Cn%20%20margin-top%3A%2020px%3B%5Cn%20%20width%3A%20calc(100%25%20-%2010px)%3B%5Cn%20%20height%3A%20400px%3B%5Cn%20%20overflow-y%3A%20scroll%3B%5Cn%20%20border%3A%201px%20solid%20%23ccc%3B%5Cn%20%20border-radius%3A%204px%3B%5Cn%20%20padding%3A%205px%3B%5Cn%7D%5Cn.todo-list%20%7B%5Cn%20%20width%3A%20calc(100%25%20-%2020px)%3B%5Cn%20%20display%3A%20flex%3B%5Cn%20%20align-items%3A%20center%3B%5Cn%20%20justify-content%3A%20center%3B%5Cn%20%20height%3A%2040px%3B%5Cn%20%20border%3A%201px%20solid%20%23ccc%3B%5Cn%20%20margin%3A%2010px%200%3B%5Cn%20%20padding%3A%205px%3B%5Cn%20%20font-size%3A%2016px%3B%5Cn%20%20color%3A%20%23333%3B%5Cn%7D%5Cn.message%20%7B%5Cn%20%20flex%3A%201%3B%5Cn%7D%5Cn.edit-input%20%7B%5Cn%20%20flex%3A%201%3B%5Cn%20%20height%3A%2030px%3B%5Cn%20%20margin-right%3A%200.5rem%3B%5Cn%20%20border-radius%3A%200.25rem%3B%5Cn%20%20border%3A%201px%20solid%20%23ccc%3B%5Cn%7D%5Cn.edit-input%3Afocus%20%7B%5Cn%20%20outline%3A%20none%3B%5Cn%20%20border-color%3A%20%23007bff%3B%5Cn%7D%5Cn.btn%20%7B%5Cn%20%20min-width%3A%20100px%3B%5Cn%20%20padding%3A%200.14rem%3B%5Cn%20%20border%3A%20none%3B%5Cn%20%20border-radius%3A%200.25rem%3B%5Cn%20%20color%3A%20%23fff%3B%5Cn%20%20cursor%3A%20pointer%3B%5Cn%20%20margin-right%3A%200.5rem%3B%5Cn%7D%5Cn.remove-btn%20%7B%5Cn%20%20background-color%3A%20%23dc3545%3B%5Cn%7D%5Cn.edit-btn%20%7B%5Cn%20%20background-color%3A%20%23007bff%3B%5Cn%7D%5Cn%3C%2Fstyle%3E%22%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:c(_)},{vue:F(()=>[E(z)]),_:1},8,["vueCode"])]),_:1}),U])}}});export{G as __pageData,H as default};
