import{T as p,_ as h}from"./chunks/dom.vue_vue_type_style_index_0_lang.ptHGDTc4.js";import{Q as e}from"./chunks/index.CmeTuJ5d.js";import{p as k,q as r,U as s,O as a,u as i,aS as t,t as l,ai as d}from"./chunks/framework.DdDdX3wp.js";const c=`<!doctype html>
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
</html>`,o=t("",6),E=l("p",null,[l("code",null,"Vue语法")],-1),g=t("",27),C=JSON.parse('{"title":"Vue 是什么","description":"","frontmatter":{},"headers":[],"relativePath":"base/start.md","filePath":"base/start.md"}'),u={name:"base/start.md"},D=Object.assign(u,{setup(m){return(b,y)=>{const n=d("ClientOnly");return k(),r("div",null,[o,s(n,null,{default:a(()=>[s(i(e),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,htmlCode:i(c)},null,8,["htmlCode"])]),_:1}),E,s(n,null,{default:a(()=>[s(i(e),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:i(p)},{vue:a(()=>[s(h)]),_:1},8,["vueCode"])]),_:1}),g])}}});export{C as __pageData,D as default};
