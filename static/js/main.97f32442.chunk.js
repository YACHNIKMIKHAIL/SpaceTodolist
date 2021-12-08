(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(7),r=n.n(c),o=(n(15),n(8)),l=n(1),u=n(2),s=n(3),d=(n(16),n(9)),b=function(e){return i.a.createElement("ul",null,e.tasks.map((function(t){return i.a.createElement("li",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement("input",{type:"checkbox",checked:t.isDone,onChange:function(n){return e.changeCheckbox(t.id,n)}}),i.a.createElement("span",null,t.title),i.a.createElement("button",{onClick:function(n){return e.removeTaskX(t.id)}},"x"))})))},f=["removeTask","changeFilter","addTask","changeTaskStatus","removeTodolist","todolistID"];function m(e){var t=e.removeTask,n=e.changeFilter,c=e.addTask,r=e.changeTaskStatus,o=e.removeTodolist,l=e.todolistID,u=Object(d.a)(e,f),m=Object(a.useState)(""),j=Object(s.a)(m,2),O=j[0],k=j[1],v=Object(a.useState)(""),h=Object(s.a)(v,2),E=h[0],p=h[1],g=function(){""!==O.trim()?(c(O.trim(),l),k("")):p("Title is undefined !")},D=function(e,t){return n(e,t)};return i.a.createElement("div",null,i.a.createElement("h3",null,u.title,i.a.createElement("button",{onClick:function(){return o(l)}},"x")),i.a.createElement("div",null,i.a.createElement("input",{className:E?"error":"",value:O,onChange:function(e){p(""),k(e.currentTarget.value)},onKeyPress:function(e){return"Enter"===e.key?g():""}}),i.a.createElement("button",{onClick:g},"+")),E?i.a.createElement("div",{className:"error-message"},E):"",i.a.createElement(b,{tasks:u.tasks,changeCheckbox:function(e,t){return r(e,t.currentTarget.checked,l)},removeTaskX:function(e){return t(e,l)},id:l}),i.a.createElement("div",null,i.a.createElement("button",{className:"all"===u.filter?"active-filter":"",onClick:function(){return D("all",l)}},"All"),i.a.createElement("button",{className:"active"===u.filter?"active-filter":"",onClick:function(){return D("active",l)}},"Active"),i.a.createElement("button",{className:"complited"===u.filter?"active-filter":"",onClick:function(){return D("complited",l)}},"Completed")))}var j=n(19);var O=function(){var e,t=Object(j.a)(),n=Object(j.a)(),c=Object(j.a)(),r=Object(a.useState)((e={},Object(u.a)(e,t,[{id:Object(j.a)(),title:"HTML&CSS",isDone:!0},{id:Object(j.a)(),title:"JS",isDone:!0},{id:Object(j.a)(),title:"ReactJS",isDone:!1}]),Object(u.a)(e,n,[{id:Object(j.a)(),title:"Hello world",isDone:!1},{id:Object(j.a)(),title:"Milk",isDone:!1},{id:Object(j.a)(),title:"Bread",isDone:!1}]),Object(u.a)(e,c,[{id:Object(j.a)(),title:"Helmet",isDone:!0},{id:Object(j.a)(),title:"Wheels",isDone:!1},{id:Object(j.a)(),title:"Crank",isDone:!1}]),e)),d=Object(s.a)(r,2),b=d[0],f=d[1],O=Object(a.useState)([{id:t,title:"What to learn?",filter:"all"},{id:n,title:"What to buy?",filter:"all"},{id:c,title:"What to fixie?",filter:"all"}]),k=Object(s.a)(O,2),v=k[0],h=k[1],E=function(e,t){return f(Object(l.a)(Object(l.a)({},b),{},Object(u.a)({},t,b[t].filter((function(t){return t.id!==e})))))},p=function(e,t){return h(v.map((function(n){return n.id===t?Object(l.a)(Object(l.a)({},n),{},{filter:e}):n})))},g=function(e,t){return f(Object(l.a)(Object(l.a)({},b),{},Object(u.a)({},t,[{id:Object(j.a)(),title:e,isDone:!1}].concat(Object(o.a)(b[t])))))},D=function(e,t,n){return f(Object(l.a)(Object(l.a)({},b),{},Object(u.a)({},n,b[n].map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},{isDone:t}):n})))))},T=function(e){h(v.filter((function(t){return t.id!==e}))),delete b[e],f(Object(l.a)({},b))};return i.a.createElement("div",{className:"App"},v.map((function(e){var t=b[e.id];return"active"===e.filter&&(t=b[e.id].filter((function(e){return!e.isDone}))),"complited"===e.filter&&(t=b[e.id].filter((function(e){return e.isDone}))),i.a.createElement(m,{key:e.id,todolistID:e.id,title:e.title,tasks:t,removeTask:E,changeFilter:p,addTask:g,changeTaskStatus:D,filter:e.filter,removeTodolist:T})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.97f32442.chunk.js.map