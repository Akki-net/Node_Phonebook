(this.webpackJsonppart2_2=this.webpackJsonppart2_2||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(15),o=t.n(r),i=t(3),u=t(0),s=function(e){var n=e.handler,t=e.val;return Object(u.jsx)("input",{className:"form-control",onChange:n,value:t})},l=function(e){var n=e.handler,t=e.subHandler,a=e.name,c=e.number;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"name",children:"name:"}),Object(u.jsx)("input",{id:"name",className:"form-control",onChange:t,placeholder:"XYZ ",name:"pName",value:a})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"number",children:"number:"}),Object(u.jsx)("input",{id:"number",className:"form-control",placeholder:"9623500000",maxLength:"10",name:"pNumber",value:c,onChange:t})]}),Object(u.jsx)("div",{className:"mt-2",children:Object(u.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})})]})},d=t(4),b=t.n(d),m="/api/persons",j=function(){return b.a.get(m).then((function(e){return e.data}))},f=function(e){return b.a.post(m,e).then((function(e){return e.data}))},h=function(e,n){return b.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){return b.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},p=function(e){var n=e.persons,t=e.setHandler;return Object(u.jsx)("div",{className:"bg-light p-2",children:n.map((function(e){return Object(u.jsxs)("div",{className:"d-flex justify-content-between align-content-center mb-2",children:[Object(u.jsxs)("div",{children:[" ",e.name," ",e.number," "]}),Object(u.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return a=e.id,void(!0===window.confirm("Do You want to delete it?")&&O(a).then(t(n.filter((function(e){return e.id!==a})))));var a},children:"Delete"})]},e.id)}))})},v=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),d=o[0],b=o[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),v=O[0],x=O[1],g=Object(a.useState)(""),N=Object(i.a)(g,2),w=N[0],S=N[1],k=Object(a.useState)(!1),y=Object(i.a)(k,2),C=y[0],E=y[1],H=Object(a.useState)(""),A=Object(i.a)(H,2),D=A[0],I=A[1],J=Object(a.useState)(""),T=Object(i.a)(J,2),Y=T[0],_=T[1];Object(a.useEffect)((function(){j().then((function(e){return c(e)}))}),[]);var B=""===w?t:t.filter((function(e){var n=new RegExp(w,"i");if(-1!==e.name.search(n))return e}));return Object(u.jsxs)("div",{className:"container bg-info pt-3 mt-3 rounded",children:[Y,D,Object(u.jsx)("h2",{className:"bg-dark text-info p-2",children:"Phonebook"}),Object(u.jsx)(s,{handler:function(e){S(e.target.value)},val:w}),Object(u.jsx)("h3",{className:"mt-2",children:"Add a new"}),Object(u.jsx)(l,{handler:function(e){e.preventDefault();var n={name:d,number:v};t.forEach((function(e){if(e.name===d){window.confirm("".concat(d," is already added to phonebook, want to replace with new one?"))?j().then((function(e){e.forEach((function(e){if(e.name===d){var a=e.id;h(a,n).then((function(e){c(t.map((function(n){return n.name!==d?n:e}))),E(!1),I("Changed ".concat(d)),b(""),x("")})).catch((function(n){var a="Information of ".concat(e.name," has already been removed");_(a),c(t.map((function(n){return n.name!==e.name}))),setTimeout((function(){return _("")}),5e3)}))}}))})):(console.log("checked"),E(!1),b(""),x(""))}else E(!0)})),console.log("Test",C),C&&f(n).then((function(e){c(t.concat(e)),I("Added ".concat(e.name)),b(""),x("")}))},subHandler:function(e){var n=e.target.name,t=e.target.value;"pName"===n?b(t):x(t)},name:d,number:v}),Object(u.jsx)("h3",{children:"Numbers"}),Object(u.jsx)(p,{persons:B,setHandler:c})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d03cec16.chunk.js.map