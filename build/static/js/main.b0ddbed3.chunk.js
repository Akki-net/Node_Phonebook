(this.webpackJsonppart2_2=this.webpackJsonppart2_2||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(15),s=n.n(c),i=n(3),u=n(0),o=function(e){var t=e.handler,n=e.val;return Object(u.jsx)("input",{className:"form-control",onChange:t,value:n})},b=function(e){var t=e.handler,n=e.subHandler,a=e.name,r=e.number;return Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"name",children:"name:"}),Object(u.jsx)("input",{id:"name",className:"form-control",onChange:n,placeholder:"XYZ ",name:"pName",value:a})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"number",children:"number:"}),Object(u.jsx)("input",{id:"number",className:"form-control",placeholder:"9623500000",maxLength:"10",name:"pNumber",value:r,onChange:n})]}),Object(u.jsx)("div",{className:"mt-2",children:Object(u.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})})]})},l=n(4),j=n.n(l),d="/api/persons",m=function(){return j.a.get(d).then((function(e){return e.data}))},h=function(e){return j.a.post(d,e).then((function(e){return e.data}))},f=function(e){return j.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},O=function(e){var t=e.persons,n=e.setHandler;return Object(u.jsx)("div",{className:"bg-light p-2",children:t.map((function(e){return Object(u.jsxs)("div",{className:"d-flex justify-content-between align-content-center mb-2",children:[Object(u.jsxs)("div",{children:[" ",e.name," ",e.number," "]}),Object(u.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return a=e.id,void(!0===window.confirm("Do You want to delete it?")&&f(a).then(n(t.filter((function(e){return e.id!==a})))));var a},children:"Delete"})]},e.id)}))})},p=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),l=s[0],j=s[1],d=Object(a.useState)(""),f=Object(i.a)(d,2),p=f[0],x=f[1],v=Object(a.useState)(""),g=Object(i.a)(v,2),N=g[0],S=g[1],w=Object(a.useState)(!1),k=Object(i.a)(w,2),y=(k[0],k[1],Object(a.useState)("")),C=Object(i.a)(y,2),H=C[0],D=(C[1],Object(a.useState)("")),E=Object(i.a)(D,2),A=E[0];E[1];Object(a.useEffect)((function(){m().then((function(e){return r(e)}))}),[]);var J=""===N?n:n.filter((function(e){var t=new RegExp(N,"i");if(-1!==e.name.search(t))return e}));return Object(u.jsxs)("div",{className:"container bg-info pt-3 mt-3 rounded",children:[A,H,Object(u.jsx)("h2",{className:"bg-dark text-info p-2",children:"Phonebook"}),Object(u.jsx)(o,{handler:function(e){S(e.target.value)},val:N}),Object(u.jsx)("h3",{className:"mt-2",children:"Add a new"}),Object(u.jsx)(b,{handler:function(e){e.preventDefault(),h({name:l,number:p}).then((function(e){j(""),x("")}))},subHandler:function(e){var t=e.target.name,n=e.target.value;"pName"===t?j(n):x(n)},name:l,number:p}),Object(u.jsx)("h3",{children:"Numbers"}),Object(u.jsx)(O,{persons:J,setHandler:r})]})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b0ddbed3.chunk.js.map