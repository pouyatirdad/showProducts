(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{66:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c(16),r=c.n(a),i=c(71),o=c.p+"static/media/menu.d145648c.svg",j=c(11);var l=function(){return Object(n.jsx)("div",{className:"container-fluid bg-primary",children:Object(n.jsxs)("div",{className:"row mb-2 p-4 d-flex justify-content-between",children:[Object(n.jsx)("h3",{className:" text-white ",children:Object(n.jsx)(j.c,{className:"text-light",exact:!0,to:"/",children:"Home"})}),Object(n.jsxs)("div",{children:[Object(n.jsxs)(i.a,{className:"d-sm-block d-md-none",children:[Object(n.jsx)(i.a.Toggle,{variant:"primary",id:"dropdown-basic",children:Object(n.jsx)("img",{src:o,alt:"menu"})}),Object(n.jsxs)(i.a.Menu,{children:[Object(n.jsx)(i.a.Item,{href:"#/action-1",children:"About Us"}),Object(n.jsx)(i.a.Item,{href:"#/action-2",children:"Contact Us"}),Object(n.jsx)(i.a.Item,{href:"#/action-3",children:"Something else"})]})]}),Object(n.jsxs)("div",{className:"d-none d-md-block text-light",children:[Object(n.jsx)("span",{className:"m-3",children:"About Us"}),Object(n.jsx)("span",{className:"m-3",children:"Contact Us"}),Object(n.jsx)("span",{className:"m-3",children:"Something else"})]})]})]})})};var d=function(){return Object(n.jsx)("div",{className:"bg-primary mt-2 p-4 d-flex justify-content-center",children:Object(n.jsx)("h3",{className:" text-white ",children:"Footer"})})},b=c(5),h=c(15),u=c(12);var m=function(e){var t=e.posts,c=e.loading;return Object(n.jsx)(n.Fragment,{children:c?Object(n.jsx)("h3",{children:"Loading..."}):Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row justify-content-center",children:t.map((function(e){return Object(n.jsx)(j.b,{"data-toggle":"tooltip",title:"Click To See Info",className:"card mx-1 my-3 shadow rounded  col-lg-5 col-8",to:"/info/".concat(e.id),children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("img",{src:e.url,className:"card-img ",alt:e.id}),Object(n.jsxs)("h4",{className:"card-title text-center text-info mt-2",children:[e.title," "]})]})})}))})})})};var x=function(e){for(var t=e.postperPage,c=e.setcurrent,s=e.totalpost,a=e.current,r=[],i=1;i<=s/t;i++)r.push(i);return Object(n.jsx)("div",{className:"my-3 pagination justify-content-center",children:r.slice(a<5?0:a-4,a+4).map((function(e){return Object(n.jsx)("span",{className:" justify-content-around page-item",children:Object(n.jsx)("button",{onClick:function(){return c(e)},className:"btn  ".concat(a===e?"btn-bg text-primary":"btn-sm text-dark"),children:e})})}))})},O=c(17),p=c.n(O);var g=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)([]),i=Object(u.a)(r,2),o=i[0],j=i[1],l=Object(s.useState)({currentPage:1,postperPage:10}),d=Object(u.a)(l,2),b=d[0],O=d[1];Object(s.useEffect)((function(){a(!0),p.a.get("https://jsonplaceholder.typicode.com/photos").then((function(e){return j(e.data)})).catch((function(e){return console.log(e)})),a(!1)}),[]);var g=b.currentPage*b.postperPage,f=g-b.postperPage,N=o.slice(f,g);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{totalpost:o.length,postperPage:b.postperPage,current:b.currentPage,setcurrent:function(e){return O((function(t){return Object(h.a)(Object(h.a)({},t),{},{currentPage:e})}))}}),Object(n.jsx)(m,{posts:N,loading:c}),Object(n.jsx)(x,{totalpost:o.length,postperPage:b.postperPage,current:b.currentPage,setcurrent:function(e){return O((function(t){return Object(h.a)(Object(h.a)({},t),{},{currentPage:e})}))}})]})};var f=function(e){var t=Object(b.f)(),c=Object(s.useState)({}),a=Object(u.a)(c,2),r=a[0],i=a[1],o=Object(s.useState)(!1),j=Object(u.a)(o,2),l=j[0],d=j[1];return Object(s.useEffect)((function(){d(!0),p.a.get("https://jsonplaceholder.typicode.com/photos/".concat(t.id)).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)})),d(!1)}),[t]),Object(n.jsx)(n.Fragment,{children:l?Object(n.jsx)("h3",{children:"Loading..."}):Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row justify-content-center",children:[Object(n.jsxs)("div",{className:"col-lg-6 col-10",children:[Object(n.jsx)("h4",{className:"text-center",children:"Photo"}),Object(n.jsx)("hr",{className:"bg-info"}),Object(n.jsx)("img",{className:"img-thumbnail mx-auto d-block",width:"500px",height:"500px",src:r.url,alt:"img"})]}),Object(n.jsxs)("div",{className:"col-lg-6 col-10",children:[Object(n.jsx)("h4",{className:"text-center",children:"Title"}),Object(n.jsx)("hr",{className:"bg-info"}),Object(n.jsx)("p",{className:"text-center",children:r.title})]})]})})})};var N=function(){return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,component:g}),Object(n.jsx)(b.a,{path:"/info/:id",component:f})]}),Object(n.jsx)(d,{})]})};c(65);r.a.render(Object(n.jsx)(N,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.a854be8e.chunk.js.map