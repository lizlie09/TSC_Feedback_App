(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[335],{90257:function(Q,M,a){"use strict";a.r(M),a.d(M,{default:function(){return H}});var d=a(3182),I=a(57663),Z=a(71577),u=a(14965),L=a(14072),R=a(94043),p=a.n(R),B=a(63804),k=a(35255),N=a(21010),O=a(58971),A=a.n(O);function D(E){return v.apply(this,arguments)}function v(){return v=(0,d.Z)(p().mark(function E(m){var f;return p().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=A().get("token"),o.abrupt("return",(0,N.WY)("".concat("https://capstone-feedback-api.herokuapp.com","/get-rankings"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(f)},params:m,skipErrorHandler:!0}));case 2:case"end":return o.stop()}},E)})),v.apply(this,arguments)}var j=a(67265),U=a(73727),h=a(85893),V=L.Z.RangePicker,H=function(){var E=function(P,o){var r,e,n,i=0;return r=parseInt(o)*5,e=parseInt(r)*10,n=parseFloat(P/e).toFixed(2),i=(n*100).toFixed(0),i},m=N.m8.location;return(0,h.jsx)(j.ZP,{extra:m.pathname.includes("/admin/print/ranking")?(0,h.jsx)(Z.Z,{type:"danger",onClick:function(){return window.print()},children:"Print Now"}):(0,h.jsx)(U.rU,{to:"/admin/print/ranking",target:"_blank",children:(0,h.jsx)(Z.Z,{type:"primary",children:"Preview Print"})}),children:(0,h.jsx)(k.ZP,{request:function(){var f=(0,d.Z)(p().mark(function P(o,r,e){var n,i,s;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e==null||(n=e.year)===null||n===void 0?void 0:n[0]),t.prev=1,t.next=4,D({year:(e==null||(i=e.year)===null||i===void 0?void 0:i[0])||void 0});case 4:return s=t.sent,t.abrupt("return",{data:s.rankings});case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}},P,null,[[1,8]])}));return function(P,o,r){return f.apply(this,arguments)}}(),columns:[{title:"Office/Department",dataIndex:"name"},{title:"Year",dataIndex:"year",filters:!0,filterMultiple:!1,valueEnum:{2021:{text:"2021"},2022:{text:"2022"},2023:{text:"2023"},2024:{text:"2024"},2025:{text:"2025"},2026:{text:"2026"},2027:{text:"2027"}}},{title:"Overall Percentage",render:function(P,o){return"".concat(E(o==null?void 0:o.rate,o==null?void 0:o.increment),"%")}}],rowKey:"key",pagination:{showQuickJumper:!0},search:!1,dateFormatter:"string",headerTitle:"Overall Rankings of Offices"})})}},73727:function(Q,M,a){"use strict";a.d(M,{rU:function(){return h}});var d=a(5977),I=a(41788),Z=a(63804),u=a.n(Z),L=a(97175),R=a(22122),p=a(19756),B=a(2177),k=function(r){(0,I.Z)(e,r);function e(){for(var i,s=arguments.length,l=new Array(s),t=0;t<s;t++)l[t]=arguments[t];return i=r.call.apply(r,[this].concat(l))||this,i.history=(0,L.lX)(i.props),i}var n=e.prototype;return n.render=function(){return u().createElement(d.F0,{history:this.history,children:this.props.children})},e}(u().Component),N=function(r){(0,I.Z)(e,r);function e(){for(var i,s=arguments.length,l=new Array(s),t=0;t<s;t++)l[t]=arguments[t];return i=r.call.apply(r,[this].concat(l))||this,i.history=(0,L.q_)(i.props),i}var n=e.prototype;return n.render=function(){return u().createElement(d.F0,{history:this.history,children:this.props.children})},e}(u().Component),O=function(e,n){return typeof e=="function"?e(n):e},A=function(e,n){return typeof e=="string"?(0,L.ob)(e,null,null,n):e},D=function(e){return e},v=u().forwardRef;typeof v=="undefined"&&(v=D);function j(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}var U=v(function(r,e){var n=r.innerRef,i=r.navigate,s=r.onClick,l=(0,p.Z)(r,["innerRef","navigate","onClick"]),t=l.target,g=(0,R.Z)({},l,{onClick:function(c){try{s&&s(c)}catch(C){throw c.preventDefault(),C}!c.defaultPrevented&&c.button===0&&(!t||t==="_self")&&!j(c)&&(c.preventDefault(),i())}});return D!==v?g.ref=e||n:g.ref=n,u().createElement("a",g)}),h=v(function(r,e){var n=r.component,i=n===void 0?U:n,s=r.replace,l=r.to,t=r.innerRef,g=(0,p.Z)(r,["component","replace","to","innerRef"]);return u().createElement(d.s6.Consumer,null,function(y){y||(0,B.Z)(!1);var c=y.history,C=A(O(l,y.location),y.location),W=C?c.createHref(C):"",T=(0,R.Z)({},g,{href:W,navigate:function(){var $=O(l,y.location),x=s?c.replace:c.push;x($)}});return D!==v?T.ref=e||t:T.innerRef=t,u().createElement(i,T)})});if(!1)var V,H;var E=function(e){return e},m=u().forwardRef;typeof m=="undefined"&&(m=E);function f(){for(var r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];return e.filter(function(i){return i}).join(" ")}var P=m(function(r,e){var n=r["aria-current"],i=n===void 0?"page":n,s=r.activeClassName,l=s===void 0?"active":s,t=r.activeStyle,g=r.className,y=r.exact,c=r.isActive,C=r.location,W=r.sensitive,T=r.strict,S=r.style,$=r.to,x=r.innerRef,b=(0,p.Z)(r,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return u().createElement(d.s6.Consumer,null,function(z){z||(0,B.Z)(!1);var K=C||z.location,G=A(O($,K),K),X=G.pathname,Y=X&&X.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),J=Y?(0,d.LX)(K.pathname,{path:Y,exact:y,sensitive:W,strict:T}):null,F=!!(c?c(J,K):J),q=F?f(g,l):g,_=F?(0,R.Z)({},S,{},t):S,w=(0,R.Z)({"aria-current":F&&i||null,className:q,style:_,to:G},b);return E!==m?w.ref=e||x:w.innerRef=x,u().createElement(h,w)})});if(!1)var o}}]);
