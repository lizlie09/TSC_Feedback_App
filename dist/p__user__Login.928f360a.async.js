(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[531],{86615:function(T,L,e){"use strict";var J=e(88983),x=e(47933),R=e(22122),h=e(28991),S=e(81253),c=e(63804),E=e.n(c),m=e(20809),p=e(22270),P=e(64893),A=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],O=E().forwardRef(function(l,Z){var f=l.fieldProps,b=l.options,M=l.radioType,$=l.layout,B=l.proFieldProps,I=l.valueEnum,D=(0,S.Z)(l,A);return E().createElement(m.Z,(0,R.Z)({mode:"edit",valueType:M==="button"?"radioButton":"radio",ref:Z,valueEnum:(0,p.h)(I,void 0)},D,{fieldProps:(0,h.Z)({options:b,layout:$},f),proFieldProps:B,filedConfig:{customLightMode:!0}}))}),W=E().forwardRef(function(l,Z){var f=l.fieldProps,b=l.children;return E().createElement(x.ZP,(0,R.Z)({},f,{ref:Z}),b)}),F=(0,P.G)(W,{valuePropName:"checked",ignoreWidth:!0}),y=F;y.Group=O,y.Button=x.ZP.Button,y.displayName="ProFormComponent",L.Z=y},34687:function(T){T.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",icon:"icon___rzGKO"}},3882:function(T,L,e){"use strict";e.r(L),e.d(L,{default:function(){return w}});var J=e(13062),x=e(71230),R=e(89032),h=e(15746),S=e(57663),c=e(71577),E=e(34792),m=e(48086),p=e(11849),P=e(3182),A=e(18106),O=e(51752),W=e(402),F=e(97272),y=e(94043),l=e.n(y),Z=e(28991),f=e(63804),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},M=b,$=e(27029),B=function(C,Y){return f.createElement($.Z,(0,Z.Z)((0,Z.Z)({},C),{},{ref:Y,icon:M}))};B.displayName="LockOutlined";var I=f.forwardRef(B),D=e(89366),j=e(21010),K=e(92986),Q=e(34687),N=e.n(Q),X=e(58971),z=e.n(X),U=e(952),G=e(86615),v=e(5966),n=e(85893),V=F.Z.Title,H=O.Z.TabPane,k=function(){var C=(0,j.tT)("@@initialState"),Y=C.initialState,_=C.setInitialState,ee=(0,f.useRef)(),re=function(){var g=(0,P.Z)(l().mark(function o(a,d,i){var s;return l().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(s=a,z().set("user",(0,p.Z)((0,p.Z)({},a),{},{mode:i})),z().set("token",d),!s){r.next=6;break}return r.next=6,_(function(u){return(0,p.Z)((0,p.Z)({},u),{},{currentUser:s})});case 6:case"end":return r.stop()}},o)}));return function(a,d,i){return g.apply(this,arguments)}}(),ne=function(){var g=(0,P.Z)(l().mark(function o(a){var d,i,s;return l().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,K.x4)(a);case 3:if(d=r.sent,!d.success){r.next=16;break}return m.default.success("Welcome"),r.next=8,re(d.user,d.token,a.mode);case 8:if(j.m8){r.next=10;break}return r.abrupt("return");case 10:return i=j.m8.location.query,s=i.redirect,j.m8.push(a.mode==="admin"?"/admin/dashboard":"/assignedOffer/dashboard"),r.abrupt("return");case 16:m.default.error(d.message);case 17:r.next=22;break;case 19:r.prev=19,r.t0=r.catch(0),m.default.error("Log in failed.");case 22:case"end":return r.stop()}},o,null,[[0,19]])}));return function(a){return g.apply(this,arguments)}}(),ae=function(){return(0,n.jsxs)(U.ZP,{initialValues:{autoLogin:!0},onFinish:function(){var o=(0,P.Z)(l().mark(function a(d){return l().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,ne(d);case 2:case"end":return s.stop()}},a)}));return function(a){return o.apply(this,arguments)}}(),submitter:{render:function(a,d){var i,s;return[(0,n.jsx)(c.Z,{loading:a==null||(i=a.submitButtonProps)===null||i===void 0?void 0:i.loading,type:"primary",onClick:function(){var r,u;return(r=a.form)===null||r===void 0||(u=r.submit)===null||u===void 0?void 0:u.call(r)},children:"Log In"},"submit"),(0,n.jsx)(c.Z,{loading:a==null||(s=a.submitButtonProps)===null||s===void 0?void 0:s.loading,onClick:function(){var r,u;return(r=a.form)===null||r===void 0||(u=r.resetFields)===null||u===void 0?void 0:u.call(r)},children:"Reset"})]}},children:[(0,n.jsx)("div",{style:{marginTop:10}}),(0,n.jsx)(G.Z.Group,{name:"mode",radioType:"button",buttonStyle:"solid",options:[{label:"Administrator",value:"admin"},{label:"Assigned Officer",value:"assigned-officer"}],rules:[{required:!0}]}),(0,n.jsx)(v.Z,{name:"email",fieldProps:{size:"large",prefix:(0,n.jsx)(D.Z,{className:N().prefixIcon})},placeholder:"Email",rules:[{required:!0,message:"Email required"}]}),(0,n.jsx)(v.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,n.jsx)(I,{className:N().prefixIcon})},placeholder:"Password",rules:[{required:!0,message:"Password required"}]})]})},se=function(){return(0,n.jsxs)(U.ZP,{onFinish:function(){var o=(0,P.Z)(l().mark(function a(d){var i;return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,K.IU)(d);case 3:if(i=t.sent,!i.success){t.next=10;break}return m.default.success(i.message),j.m8.push("/user/login"),t.abrupt("return");case 10:m.default.error(i.message);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),m.default.error("Sign up failed.");case 16:case"end":return t.stop()}},a,null,[[0,13]])}));return function(a){return o.apply(this,arguments)}}(),submitter:{render:function(a,d){var i,s;return[(0,n.jsx)(c.Z,{loading:a==null||(i=a.submitButtonProps)===null||i===void 0?void 0:i.loading,type:"primary",onClick:function(){var r,u;return(r=a.form)===null||r===void 0||(u=r.submit)===null||u===void 0?void 0:u.call(r)},children:"Sign Up"},"submit"),(0,n.jsx)(c.Z,{loading:a==null||(s=a.submitButtonProps)===null||s===void 0?void 0:s.loading,onClick:function(){var r,u;return(r=a.form)===null||r===void 0||(u=r.resetFields)===null||u===void 0?void 0:u.call(r)},children:"Reset"})]}},children:[(0,n.jsx)(v.Z,{name:"firstname",label:"Last Name",placeholder:"",rules:[{required:!0}]}),(0,n.jsx)(v.Z,{name:"lastname",label:"First Name",placeholder:"",rules:[{required:!0}]}),(0,n.jsx)(v.Z,{name:"middlename",label:"Middle Name",placeholder:"",rules:[{required:!0}]}),(0,n.jsx)(v.Z,{name:"email",label:"Email",placeholder:"",rules:[{required:!0,message:"Field required"}]}),(0,n.jsx)(v.Z.Password,{name:"password",label:"Password",placeholder:"",rules:[{required:!0,message:"Field required"}]})]})};return(0,n.jsxs)("div",{style:{marginLeft:"10vw",marginRight:"10vw"},children:[(0,n.jsxs)(x.Z,{align:"middle",style:{marginTop:20},children:[(0,n.jsx)(h.Z,{children:(0,n.jsx)("img",{src:"../assets/images/icons.png",style:{height:50,width:50,marginRight:20}})}),(0,n.jsx)(h.Z,{children:(0,n.jsx)("h3",{children:" TSC Breeder farm. External farm of San Miguel foods INC"})})]}),(0,n.jsxs)(x.Z,{gutter:200,children:[(0,n.jsxs)(h.Z,{xs:24,sm:24,md:24,lg:12,xl:12,children:[(0,n.jsx)("img",{src:"../assets/images/rate.svg",style:{height:200,marginBottom:50,marginTop:50}}),(0,n.jsxs)(U.ZP,{style:{},onFinish:function(o){j.m8.push("/rating-page",o)},submitter:{render:function(o,a){var d;return[(0,n.jsx)(c.Z,{loading:o==null||(d=o.submitButtonProps)===null||d===void 0?void 0:d.loading,type:"primary",onClick:function(){var s,t;return(s=o.form)===null||s===void 0||(t=s.submit)===null||t===void 0?void 0:t.call(s)},children:"Rate Now!"},"submit")]}},children:[(0,n.jsx)(V,{level:3,children:"Rate"}),(0,n.jsx)(v.Z,{name:"fullname",placeholder:"Full Name",rules:[{required:!0}],label:"Your name"}),(0,n.jsx)(G.Z.Group,{name:"raterType",style:{margin:16},label:"I am a",radioType:"button",options:["Doctor","Client","Company Employee","Visitor"],rules:[{required:!0}]})]})]}),(0,n.jsxs)(h.Z,{xs:24,sm:24,md:24,lg:12,xl:12,children:[(0,n.jsx)("img",{src:"../assets/images/admin.svg",style:{height:200,marginBottom:50,marginTop:50}}),(0,n.jsx)(V,{level:3,children:"Administrator"}),(0,n.jsxs)(O.Z,{defaultActiveKey:"1",tabRef:ee,style:{marginBottom:20},children:[(0,n.jsx)(H,{tab:"Log In",children:(0,n.jsx)(ae,{})},"1"),(0,n.jsx)(H,{tab:"Sign Up",children:(0,n.jsx)(se,{})},"2")]})]})]})]})},w=k}}]);
