(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(0),c=o(1),s=o.n(c),a=o(7),i=o.n(a),l=(o(14),o(3)),d=(o(15),o(8)),r=function(t){var e=t.setInputText,o=t.inputText,c=t.setTodos,s=t.todos,a=t.setStatus;return Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{value:o,onChange:function(t){e(t.target.value)},type:"text",className:"todo-input",placeholder:"Lets go.."}),Object(n.jsx)("button",{className:"todo-button",type:"submit",onClick:function(t){t.preventDefault(),""!==o&&(c([].concat(Object(d.a)(s),[{text:o,completed:!1,id:1e3*Math.random()}])),e(""))},children:Object(n.jsx)("ion-icon",{name:"add-outline",className:"todo-button-icon"})}),Object(n.jsx)("div",{className:"select",children:Object(n.jsxs)("select",{name:"todos",className:"filter-todo",onChange:function(t){a(t.target.value)},children:[Object(n.jsx)("option",{value:"all",children:"All"}),Object(n.jsx)("option",{value:"completed",children:"Completed"}),Object(n.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=o(6),j=function(t){var e=t.text,o=t.todo,c=t.todos,s=t.setTodos;return Object(n.jsxs)("div",{className:"todo",children:[Object(n.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(n.jsx)("button",{className:"complete-btn",onClick:function(){s(c.map((function(t){return t.id===o.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},children:Object(n.jsx)("ion-icon",{name:"shield-checkmark-outline"})}),Object(n.jsx)("button",{className:"trash-btn",onClick:function(){s(c.filter((function(t){return t.id!==o.id})))},children:Object(n.jsx)("ion-icon",{name:"trash-outline"})})]})},b=function(t){var e=t.todos,o=t.setTodos,c=t.filteredTodos;return Object(n.jsx)("div",{className:"todo-container",children:Object(n.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(n.jsx)(j,{text:t.text,todo:t,todos:e,setTodos:o},t.id)}))})})};var m=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),o=e[0],s=e[1],a=Object(c.useState)([]),i=Object(l.a)(a,2),d=i[0],u=i[1],j=Object(c.useState)("all"),m=Object(l.a)(j,2),f=m[0],O=m[1],p=Object(c.useState)([]),h=Object(l.a)(p,2),x=h[0],g=h[1];Object(c.useEffect)((function(){N()}),[]),Object(c.useEffect)((function(){S(),v()}),[d,f]);var v=function(){switch(f){case"completed":g(d.filter((function(t){return!0===t.completed})));break;case"uncompleted":g(d.filter((function(t){return!1===t.completed})));break;default:g(d)}},S=function(){localStorage.setItem("todos",JSON.stringify(d))},N=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"So you want to get things done?"})}),Object(n.jsx)(r,{setTodos:u,todos:d,setInputText:s,inputText:o,setStatus:O}),Object(n.jsx)(b,{todos:d,setTodos:u,filteredTodos:x})]})},f=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),n(t),c(t),s(t),a(t)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.fe57cf1c.chunk.js.map