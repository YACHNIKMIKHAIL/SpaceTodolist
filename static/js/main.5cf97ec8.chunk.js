(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{70:function(e,t,a){e.exports=a.p+"static/media/wallpaperflare.com_wallpaper.5940d32b.jpg"},80:function(e,t,a){e.exports=a(94)},85:function(e,t,a){},86:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n,i,r=a(0),c=a.n(r),o=a(29),l=a.n(o),s=(a(85),a(22)),u=a(3),d=a(13),b=(a(86),a(134)),f=a(28),m=a(131),O=["onChange"],j=c.a.memo((function(e){var t=e.onChange,a=Object(f.a)(e,O),n=Object(r.useState)(a.title),i=Object(d.a)(n,2),o=i[0],l=i[1],s=Object(r.useState)(!1),u=Object(d.a)(s,2),b=u[0],j=u[1];return b?c.a.createElement(m.a,{id:"standard-basic",label:"Changes:",variant:"standard",value:o,autoFocus:!0,onChange:function(e){return l(e.currentTarget.value)},onBlur:function(){j(!1),t(o)},style:{color:"white"}}):c.a.createElement("span",{onDoubleClick:function(){j(!0),l(a.title)}},o)})),T=a(139),k=a(136),E=a(127),D=a(128),h=function(e,t,a){return"+"===e?c.a.createElement(T.a,{style:{color:"#ffe1b2"},onClick:function(){return t()}},c.a.createElement(E.a,null)):"x"===e?c.a.createElement(T.a,{"aria-label":"delete",size:"small",onClick:function(){return t()}},c.a.createElement(D.a,{fontSize:"small"})):"All"===e?c.a.createElement(k.a,{variant:a?"contained":"text",onClick:function(){return t()}},"All"):"Active"===e?c.a.createElement(k.a,{variant:a?"contained":"text",onClick:function(){return t()}},"Active"):"Complited"===e?c.a.createElement(k.a,{variant:a?"contained":"text",onClick:function(){return t()}},"Complited"):void 0},g=function(e){var t=e.name,a=e.callback,n=e.className;return c.a.createElement("div",null,h(t,a,n))},v=a(133),p=function(e){return c.a.createElement(v.a,{color:"secondary",defaultChecked:e.isDone,onChange:function(t){return function(t){e.callback(t)}(t)}})},y=a(35),C=["tasks","changeCheckbox","removeTaskX"],I=c.a.memo((function(e){var t=e.tasks,a=e.changeCheckbox,n=e.removeTaskX,i=Object(f.a)(e,C),r=function(e){return i.changeTaskTitle(i.id,e,i.todolistID)};return c.a.createElement("div",null,t.map((function(e){return c.a.createElement(x,{opacity:e.isDone?"0.4":"1",color:e.isDone?"rgba(109,4,234,0.77)":"rgba(28,16,0,0.8)",key:e.id,style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},c.a.createElement(p,{isDone:e.isDone,callback:function(t){return function(e,t){return a(e,t,i.todolistID)}(e.id,t)}}),c.a.createElement(j,{title:e.title,onChange:r}),c.a.createElement(g,{name:"x",callback:function(){return n(e.id)}}))})))})),x=y.a.div(n||(n=Object(s.a)(["\n  opacity: ",";\n  color: ",";\n"])),(function(e){return e.opacity}),(function(e){return e.color})),A=function(e){var t=e.error,a=e.value,n=e.onChange,i=e.onKeyPress,r=function(e){return n(e)},o=function(e){return i(e)};return c.a.createElement(m.a,{id:"outlined-basic",label:"New challenge",variant:"outlined",value:a,onChange:function(e){return r(e)},onKeyPress:function(e){return o(e)},helperText:t,style:{color:"whitesmoke"}})},w=function(e){var t=Object(r.useState)(""),a=Object(d.a)(t,2),n=a[0],i=a[1],o=Object(r.useState)(""),l=Object(d.a)(o,2),s=l[0],u=l[1],b=function(){""!==n.trim()?(e.addItem(n.trim()),i("")):u("Title is undefined !")};return c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},c.a.createElement(A,{value:n,onChange:function(e){u(""),i(e.currentTarget.value)},onKeyPress:function(e){return"Enter"===e.key?b():""},error:s}),c.a.createElement(g,{name:"+",callback:b}))},S=a(137),_=["removeTask","changeFilter","addTask","changeTaskStatus","removeTodolist","todolistID","filter"];var N,K=c.a.memo((function(e){var t=e.removeTask,a=e.changeFilter,n=e.addTask,i=e.changeTaskStatus,r=e.removeTodolist,o=e.todolistID,l=e.filter,s=Object(f.a)(e,_),u=function(e,t){return a(e,t)},d=function(e){return l===e?"active-filter":""};return c.a.createElement(S.a,{item:!0},c.a.createElement(F,null,c.a.createElement("h3",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},c.a.createElement(j,{title:s.title,onChange:function(e){return s.onChangeTodolistTitle(o,e)}}),c.a.createElement(g,{name:"x",callback:function(){return r(o)}})),c.a.createElement(w,{addItem:function(e){return n(e,o)}}),c.a.createElement(I,{tasks:s.tasks,changeCheckbox:function(e,t,a){return i(e,t.currentTarget.checked,a)},removeTaskX:function(e){return t(e,o)},id:o,changeTaskTitle:s.changeTaskTitle,todolistID:o}),c.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},c.a.createElement(g,{name:"All",callback:function(){return u("all",o)},className:d("all")}),c.a.createElement(g,{name:"Active",callback:function(){return u("active",o)},className:d("active")}),c.a.createElement(g,{name:"Complited",callback:function(){return u("complited",o)},className:d("complited")}))))})),F=y.a.div(i||(i=Object(s.a)(["\n  background: rgba(203, 209, 213,0.7);\n  padding: 15px;\n  border-radius: 10px;\n"]))),H=["todolists","tasks","removeTask","changeFilter","addTask","changeTaskStatus","removeTodolist"],R=c.a.memo((function(e){var t=e.todolists,a=e.tasks,n=e.removeTask,i=e.changeFilter,r=e.addTask,o=e.changeTaskStatus,l=e.removeTodolist,s=Object(f.a)(e,H);return c.a.createElement(c.a.Fragment,null," ",t.map((function(e){var t=a[e.id];return"active"===e.filter&&(t=a[e.id].filter((function(e){return!e.isDone}))),"complited"===e.filter&&(t=a[e.id].filter((function(e){return e.isDone}))),c.a.createElement(K,{key:e.id,todolistID:e.id,title:e.title,tasks:t,removeTask:n,changeFilter:i,addTask:r,changeTaskStatus:o,filter:e.filter,removeTodolist:l,changeTaskTitle:s.changeTaskTitle,onChangeTodolistTitle:s.onChangeTodolistTitle})})))})),G=a(140),L=a(141),W=a(142),M=a(143),B=a(130),z=a(70),J=a.n(z),V=a(14),P=a(16),X=function(e,t){switch(t.type){case"REMOVE_TASK":return Object(P.a)(Object(P.a)({},e),{},Object(u.a)({},t.todolistId,e[t.todolistId].filter((function(e){return e.id!==t.taskId}))));case"CHANGE_TASK_STATUS":return Object(P.a)(Object(P.a)({},e),{},Object(u.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskId?Object(P.a)(Object(P.a)({},e),{},{isDone:t.isDone}):e}))));case"ADD_TASK":return Object(P.a)(Object(P.a)({},e),{},Object(u.a)({},t.todolistId,[{id:Object(b.a)(),title:t.title,isDone:!1}].concat(Object(V.a)(e[t.todolistId]))));case"CHANGE_TASK_TITLE":return Object(P.a)(Object(P.a)({},e),{},Object(u.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskId?Object(P.a)(Object(P.a)({},e),{},{title:t.title}):e}))));case"ADD_NEW_TODO":return Object(P.a)(Object(P.a)({},e),{},Object(u.a)({},t.newTodolistId,[]));default:return e}},U=function(e,t){switch(t.type){case"REMOVE_TODO":return e.filter((function(e){return e.id!==t.id}));case"ADD_TODO":return[].concat(Object(V.a)(e),[{id:t.newTodolistId,title:t.title,filter:"all"}]);case"CHANGE_TODO_TITLE":return e.map((function(e){return e.id===t.id?Object(P.a)(Object(P.a)({},e),{},{title:t.newTitle}):e}));case"CHANGE_TODO_FILTER":return e.map((function(e){return e.id===t.id?Object(P.a)(Object(P.a)({},e),{},{filter:t.filter}):e}));default:return e}};var $=function(){var e,t=Object(b.a)(),a=Object(b.a)(),n=Object(b.a)(),i=Object(b.a)(),o=Object(b.a)(),l=Object(b.a)(),s=Object(b.a)(),f=Object(b.a)(),m=Object(b.a)(),O=Object(r.useReducer)(X,(e={},Object(u.a)(e,t,[{id:Object(b.a)(),title:"HTML&CSS",isDone:!0},{id:Object(b.a)(),title:"JS",isDone:!0},{id:Object(b.a)(),title:"ReactJS",isDone:!1}]),Object(u.a)(e,a,[{id:Object(b.a)(),title:"Book",isDone:!1},{id:Object(b.a)(),title:"Milk",isDone:!1},{id:Object(b.a)(),title:"Bread",isDone:!1}]),Object(u.a)(e,n,[{id:Object(b.a)(),title:"Helmet",isDone:!0},{id:Object(b.a)(),title:"Wheels",isDone:!1},{id:Object(b.a)(),title:"Crank",isDone:!1}]),Object(u.a)(e,i,[{id:Object(b.a)(),title:"\u0422\u0443\u0434\u0443\u043b\u0438\u0441\u0442",isDone:!0},{id:Object(b.a)(),title:"\u041d\u0430\u0442\u0438\u0432\u043e\u0447\u043a\u0430",isDone:!1},{id:Object(b.a)(),title:"\u0427\u0438\u043b\u043b)))",isDone:!1}]),Object(u.a)(e,o,[{id:Object(b.a)(),title:"\u0414\u043e\u043c\u043e\u0439 \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f",isDone:!0},{id:Object(b.a)(),title:"\u0418\u0433\u0440\u043e\u0432\u0430\u044f \u043a\u043e\u043c\u043d\u0430\u0442\u0430",isDone:!0},{id:Object(b.a)(),title:"\u0412 \u0433\u043e\u0441\u0442\u0438 \u043a \u043c\u0430\u043c\u0435)",isDone:!1}]),Object(u.a)(e,l,[{id:Object(b.a)(),title:"\u0427\u0430\u0439",isDone:!0},{id:Object(b.a)(),title:"\u0427\u0430\u0439",isDone:!0},{id:Object(b.a)(),title:"\u0427\u0430\u0439",isDone:!1}]),Object(u.a)(e,s,[{id:Object(b.a)(),title:"\u043f\u043e \u043e\u0431\u0441-\u0432\u0430\u043c(",isDone:!1},{id:Object(b.a)(),title:"\u0412\u044b\u0436\u0438\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u0446\u0435\u043d\u043e\u0439",isDone:!1},{id:Object(b.a)(),title:"\u041f\u043e\u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u0439\u0444\u0430\u043d\u0443\u0442\u044c)",isDone:!0}]),Object(u.a)(e,f,[{id:Object(b.a)(),title:"\u041c\u0443\u043b\u044c\u0442\u044b",isDone:!0},{id:Object(b.a)(),title:"\u0421\u043d\u044b",isDone:!0},{id:Object(b.a)(),title:"\u041d\u0438\u0447\u0451",isDone:!1}]),Object(u.a)(e,m,[{id:Object(b.a)(),title:"\u0426\u0432\u0435\u0442\u044b",isDone:!1},{id:Object(b.a)(),title:"\u0426\u0432\u0435\u0442\u044b",isDone:!1},{id:Object(b.a)(),title:"\u0426\u0432\u0435\u0442\u044b)",isDone:!0}]),e)),j=Object(d.a)(O,2),E=j[0],D=j[1],h=Object(r.useReducer)(U,[{id:t,title:"What to learn?",filter:"all"},{id:a,title:"What to buy?",filter:"all"},{id:n,title:"What to fixie?",filter:"all"},{id:i,title:"C \u0447\u0435\u0433\u043e \u043d\u0430\u0447\u0430\u0442\u044c?",filter:"all"},{id:o,title:"\u041a\u0443\u0434\u0430 \u0441\u0445\u043e\u0434\u0438\u0442\u044c?",filter:"all"},{id:l,title:"\u0427\u0442\u043e \u043f\u0438\u0442\u044c?",filter:"all"},{id:s,title:"\u041a\u0430\u043a \u0436\u0438\u0442\u044c \u0442\u0435\u043f\u0435\u0440\u044c?",filter:"all"},{id:f,title:"\u0427\u0442\u043e \u043f\u043e\u0437\u044b\u0440\u0438\u0442\u044c?",filter:"all"},{id:m,title:"\u0427\u0442\u043e \u043f\u043e\u0434\u0430\u0440\u0438\u0442\u044c?",filter:"all"}]),g=Object(d.a)(h,2),v=g[0],p=g[1];return c.a.createElement(q,null,c.a.createElement(G.a,{position:"static",style:{opacity:"0.7"}},c.a.createElement(L.a,null,c.a.createElement(T.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}},c.a.createElement(B.a,{fontSize:"large"})),c.a.createElement(W.a,{variant:"h6",component:"div",sx:{flexGrow:1}},"Space Todolist"),c.a.createElement(k.a,{color:"inherit"},"Login"))),c.a.createElement(M.a,{fixed:!0},c.a.createElement(S.a,{container:!0,style:{padding:"10px",backgroundColor:"rgba(203, 209, 213,0.7)",margin:"10px",borderRadius:"10px",display:"flex",justifyContent:"flex-end"}},c.a.createElement(w,{addItem:function(e){var t=Object(b.a)();p(function(e,t){return{type:"ADD_TODO",title:e,newTodolistId:t}}(e,t)),D(function(e){return{type:"ADD_NEW_TODO",newTodolistId:e}}(t))}})),c.a.createElement(S.a,{container:!0,spacing:3},c.a.createElement(R,{todolists:v,tasks:E,removeTask:function(e,t){return D({type:"REMOVE_TASK",taskId:e,todolistId:t})},changeFilter:function(e,t){p(function(e,t){return{type:"CHANGE_TODO_FILTER",id:t,filter:e}}(e,t))},addTask:function(e,t){return D(function(e,t){return{type:"ADD_TASK",title:e,todolistId:t}}(e,t))},changeTaskStatus:function(e,t,a){return D(function(e,t,a){return{type:"CHANGE_TASK_STATUS",taskId:e,isDone:t,todolistId:a}}(e,t,a))},removeTodolist:function(e){return p({type:"REMOVE_TODO",id:e})},changeTaskTitle:function(e,t,a){return D(function(e,t,a){return{type:"CHANGE_TASK_TITLE",title:t,taskId:e,todolistId:a}}(e,t,a))},onChangeTodolistTitle:function(e,t){return p({type:"CHANGE_TODO_TITLE",id:t,newTitle:e})}}))))},q=y.a.div(N||(N=Object(s.a)(["\n  background: url(",") no-repeat center/cover;\n  height: 100vh;\n  overflow: auto;\n"])),J.a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[80,1,2]]]);
//# sourceMappingURL=main.5cf97ec8.chunk.js.map