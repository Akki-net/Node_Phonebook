(this.webpackJsonppart2_2=this.webpackJsonppart2_2||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(15),s=n.n(r),i=n(3),o=n(0),u=function(e){var t=e.handler,n=e.val;return Object(o.jsx)("input",{className:"form-control",onChange:t,value:n})},b=function(e){var t=e.handler,n=e.subHandler,a=e.name,c=e.number;return Object(o.jsxs)("form",{onSubmit:t,action:"/api/persons",method:"post",children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"name",children:"name:"}),Object(o.jsx)("input",{id:"name",className:"form-control",onChange:n,placeholder:"XYZ ",name:"pName",value:a})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{for:"number",children:"number:"}),Object(o.jsx)("input",{id:"number",className:"form-control",placeholder:"9623500000",maxLength:"10",name:"pNumber",value:c,onChange:n})]}),Object(o.jsx)("div",{className:"mt-2",children:Object(o.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})})]})},l=n(4),j=n.n(l),d="/api/persons",m=function(){return j.a.get(d).then((function(e){return e.data}))},h=function(e){return j.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},O=function(e){var t=e.persons,n=e.setHandler;return Object(o.jsx)("div",{className:"bg-light p-2",children:t.map((function(e){return Object(o.jsxs)("div",{className:"d-flex justify-content-between align-content-center mb-2",children:[Object(o.jsxs)("div",{children:[" ",e.name," ",e.number," "]}),Object(o.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return a=e.id,void(!0===window.confirm("Do You want to delete it?")&&h(a).then(n(t.filter((function(e){return e.id!==a})))));var a},children:"Delete"})]},e.id)}))})},f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),l=s[0],j=s[1],d=Object(a.useState)(""),h=Object(i.a)(d,2),f=h[0],p=h[1],x=Object(a.useState)(""),v=Object(i.a)(x,2),g=v[0],N=v[1],S=Object(a.useState)(!1),w=Object(i.a)(S,2),k=(w[0],w[1],Object(a.useState)("")),y=Object(i.a)(k,2),C=y[0],H=(y[1],Object(a.useState)("")),D=Object(i.a)(H,2),E=D[0];D[1];Object(a.useEffect)((function(){m().then((function(e){return c(e)}))}),[]);var A=""===g?n:n.filter((function(e){var t=new RegExp(g,"i");if(-1!==e.name.search(t))return e}));return Object(o.jsxs)("div",{className:"container bg-info pt-3 mt-3 rounded",children:[E,C,Object(o.jsx)("h2",{className:"bg-dark text-info p-2",children:"Phonebook"}),Object(o.jsx)(u,{handler:function(e){N(e.target.value)},val:g}),Object(o.jsx)("h3",{className:"mt-2",children:"Add a new"}),Object(o.jsx)(b,{handler:function(e){e.preventDefault(),j(""),p("")},subHandler:function(e){var t=e.target.name,n=e.target.value;"pName"===t?j(n):p(n)},name:l,number:f}),Object(o.jsx)("h3",{children:"Numbers"}),Object(o.jsx)(O,{persons:A,setHandler:c})]})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2203dcaf.chunk.js.map