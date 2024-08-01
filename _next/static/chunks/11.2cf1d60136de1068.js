"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{6011:function(e,s,a){a.r(s),a.d(s,{default:function(){return containers_Experience}});var t=a(5893),r=a(7294),l=a(3356),n=a(8595),o=a(267),c=a(1252),i=a(6941),d=a(1121),u=a(7462),m=a(3366),g=a(5697),f=a.n(g),p=a(3967),x=a.n(p),h=a(3663),b=["className","cssModule","tag"],C={tag:h.iC,className:f().string,cssModule:f().object},CardTitle=function(e){var s=e.className,a=e.cssModule,t=e.tag,l=(0,m.Z)(e,b),n=(0,h.mx)(x()(s,"card-title"),a);return r.createElement(t,(0,u.Z)({},l,{className:n}))};CardTitle.propTypes=C,CardTitle.defaultProps={tag:"div"};var N=["className","cssModule","tag"],v={tag:h.iC,className:f().string,cssModule:f().object},CardSubtitle=function(e){var s=e.className,a=e.cssModule,t=e.tag,l=(0,m.Z)(e,N),n=(0,h.mx)(x()(s,"card-subtitle"),a);return r.createElement(t,(0,u.Z)({},l,{className:n}))};CardSubtitle.propTypes=v,CardSubtitle.defaultProps={tag:"div"};var y=["className","cssModule","tag"],j={tag:h.iC,className:f().string,cssModule:f().object},CardText=function(e){var s=e.className,a=e.cssModule,t=e.tag,l=(0,m.Z)(e,y),n=(0,h.mx)(x()(s,"card-text"),a);return r.createElement(t,(0,u.Z)({},l,{className:n}))};CardText.propTypes=j,CardText.defaultProps={tag:"p"};var components_ExperienceCard=e=>{let{companyLogo:s,company:a,role:r,date:l,desc:n,descBullets:o}=e;return(0,t.jsx)(c.Z,{lg:"6",children:(0,t.jsx)(i.Z,{style:{flex:1},className:"shadow-lg--hover my-4 shadow border-0 text-center rounded h-100",children:(0,t.jsxs)(d.Z,{className:"",children:[(0,t.jsx)("img",{src:s,style:{objectFit:"cover",left:0,right:0,top:"7rem",marginLeft:"auto",marginRight:"auto",width:"8rem",height:"8rem",borderRadius:"50%"},className:"shadow mb-3",alt:s}),(0,t.jsx)(CardTitle,{tag:"h4",className:"mb-2",children:a}),(0,t.jsx)(CardSubtitle,{tag:"h5",className:"mb-2",children:r}),(0,t.jsx)(CardSubtitle,{children:l}),(0,t.jsxs)(CardText,{tag:"div",className:"description my-3 text-left",children:[n,(0,t.jsx)("ul",{children:o?o.map(e=>(0,t.jsx)("li",{children:e},e)):null})]})]})})})},Z=a(6376),containers_Experience=()=>l.b8&&(0,t.jsx)(Z.E.section,{className:"section section-lg",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1.5},children:(0,t.jsxs)(n.Z,{children:[(0,t.jsxs)("div",{className:"d-flex p-4",children:[(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",children:(0,t.jsx)("i",{className:"ni ni-briefcase-24 text-info"})})}),(0,t.jsx)("div",{className:"pl-4",children:(0,t.jsx)("h4",{className:"display-3 text-info",children:"Experience"})})]}),(0,t.jsx)(o.Z,{className:"row-grid align-items-start",children:l.b8.map((e,s)=>(0,t.jsx)(components_ExperienceCard,{...e},s))})]})})},6941:function(e,s,a){var t=a(7462),r=a(3366),l=a(7294),n=a(5697),o=a.n(n),c=a(3967),i=a.n(c),d=a(3663),u=["className","cssModule","color","body","inverse","outline","tag","innerRef"],m={tag:d.iC,inverse:o().bool,color:o().string,body:o().bool,outline:o().bool,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])},Card=function(e){var s=e.className,a=e.cssModule,n=e.color,o=e.body,c=e.inverse,m=e.outline,g=e.tag,f=e.innerRef,p=(0,r.Z)(e,u),x=(0,d.mx)(i()(s,"card",!!c&&"text-white",!!o&&"card-body",!!n&&(m?"border":"bg")+"-"+n),a);return l.createElement(g,(0,t.Z)({},p,{className:x,ref:f}))};Card.propTypes=m,Card.defaultProps={tag:"div"},s.Z=Card},1121:function(e,s,a){var t=a(7462),r=a(3366),l=a(7294),n=a(5697),o=a.n(n),c=a(3967),i=a.n(c),d=a(3663),u=["className","cssModule","innerRef","tag"],m={tag:d.iC,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])},CardBody=function(e){var s=e.className,a=e.cssModule,n=e.innerRef,o=e.tag,c=(0,r.Z)(e,u),m=(0,d.mx)(i()(s,"card-body"),a);return l.createElement(o,(0,t.Z)({},c,{className:m,ref:n}))};CardBody.propTypes=m,CardBody.defaultProps={tag:"div"},s.Z=CardBody},1252:function(e,s,a){var t=a(7462),r=a(3366),l=a(7294),n=a(5697),o=a.n(n),c=a(3967),i=a.n(c),d=a(3663),u=["className","cssModule","widths","tag"],m=o().oneOfType([o().number,o().string]),g=o().oneOfType([o().bool,o().number,o().string,o().shape({size:o().oneOfType([o().bool,o().number,o().string]),order:m,offset:m})]),f={tag:d.iC,xs:g,sm:g,md:g,lg:g,xl:g,className:o().string,cssModule:o().object,widths:o().array},getColumnSizeClass=function(e,s,a){return!0===a||""===a?e?"col":"col-"+s:"auto"===a?e?"col-auto":"col-"+s+"-auto":e?"col-"+a:"col-"+s+"-"+a},Col=function(e){var s=e.className,a=e.cssModule,n=e.widths,o=e.tag,c=(0,r.Z)(e,u),m=[];n.forEach(function(s,t){var r=e[s];if(delete c[s],r||""===r){var l=!t;if((0,d.Kn)(r)){var n,o=l?"-":"-"+s+"-",u=getColumnSizeClass(l,s,r.size);m.push((0,d.mx)(i()(((n={})[u]=r.size||""===r.size,n["order"+o+r.order]=r.order||0===r.order,n["offset"+o+r.offset]=r.offset||0===r.offset,n)),a))}else{var g=getColumnSizeClass(l,s,r);m.push(g)}}}),m.length||m.push("col");var g=(0,d.mx)(i()(s,m),a);return l.createElement(o,(0,t.Z)({},c,{className:g}))};Col.propTypes=f,Col.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},s.Z=Col}}]);