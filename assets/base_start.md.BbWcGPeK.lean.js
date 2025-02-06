import{T as l,_ as t}from"./chunks/dom.vue_vue_type_style_index_0_lang.B-DpeOHW.js";import{Q as p}from"./chunks/index.DMUZYavE.js";import{o as h,c as k,I as s,w as a,k as i,a4 as n,D as c}from"./chunks/framework.Ct5bBWy3.js";const d="/vue_study/assets/dmoe_end.DY4HI5UC.gif",r=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
    <style>
        #addButton {
            min-width: 50px;
            padding: 4px;
            background-color: #4CAF50;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
<div id="content">
</div>
<button id="addButton">递增</button>
<script type="module">
    //声明数据源
    const data = {
        number: 0
    }
    //获取DOM元素
    const content = document.getElementById("content");
    const button = document.querySelector("#addButton");
    //渲染函数
    const render = () => {
        content.innerHTML = data.number;
    };
    //初始化渲染
    render();
    //绑定事件监听(按钮每次被点击时，数据number加1，并重新渲染)
    button.addEventListener("click", () => {
        data.number++;
        render();
    });
<\/script>
</body>
</html>`,o=n("",6),E=n("",28),A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"base/start.md","filePath":"base/start.md"}'),g={name:"base/start.md"},D=Object.assign(g,{setup(u){return(b,m)=>{const e=c("ClientOnly");return h(),k("div",null,[o,s(e,null,{default:a(()=>[s(i(p),{title:"",description:"",select:"html",order:"html,vue",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,htmlCode:i(r),vueCode:i(l)},{vue:a(()=>[s(t)]),_:1},8,["htmlCode","vueCode"])]),_:1}),E])}}});export{A as __pageData,D as default};
