(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5923:function(e,t,a){Promise.resolve().then(a.t.bind(a,8173,23)),Promise.resolve().then(a.t.bind(a,231,23)),Promise.resolve().then(a.bind(a,6891)),Promise.resolve().then(a.bind(a,6764)),Promise.resolve().then(a.bind(a,970)),Promise.resolve().then(a.bind(a,6210)),Promise.resolve().then(a.bind(a,145)),Promise.resolve().then(a.bind(a,5265))},6891:function(e,t,a){"use strict";a.d(t,{default:function(){return m}});var i=a(7437),l=a(4756),r=a(7476),n=a(6106),s=a(2265),o=a(9354);let c=(0,s.forwardRef)((e,t)=>{let{children:a,className:r,...n}=e;return(0,i.jsx)(l.ck,{className:(0,o.cn)("mt-px overflow-hidden focus-within:relative focus-within:z-10",r),...n,ref:t,children:a})});c.displayName="AccordionItem";let d=(0,s.forwardRef)((e,t)=>{let{children:a,className:r,...n}=e;return(0,i.jsx)(l.h4,{className:"flex",children:(0,i.jsx)(l.xz,{className:(0,o.cn)("group flex flex-1 cursor-pointer items-center justify-between px-5 text-[15px] leading-none outline-none",r),...n,ref:t,children:a})})});function m(e){var t,a;let{collapseDelay:o=5e3,ltr:m=!1,linePosition:u="left",data:x=[]}=e,[f,h]=(0,s.useState)(-1),p=(0,s.useRef)(null),g=(0,s.useRef)(null),y=(0,r.Y)(g,{once:!0,amount:.5});(0,s.useEffect)(()=>{let e=setTimeout(()=>{y?h(0):h(-1)},100);return()=>clearTimeout(e)},[y]);let b=e=>{if(p.current){let t=p.current.querySelectorAll(".card")[e];if(t){let e=t.getBoundingClientRect(),a=p.current.getBoundingClientRect(),i=e.left-a.left-(a.width-e.width)/2;p.current.scrollTo({left:p.current.scrollLeft+i,behavior:"smooth"})}}};return(0,s.useEffect)(()=>{let e=setInterval(()=>{h(e=>void 0!==e?(e+1)%x.length:0)},o);return()=>clearInterval(e)},[o,f,x.length]),(0,s.useEffect)(()=>{let e=setInterval(()=>{b((void 0!==f?f+1:0)%x.length)},o);return()=>clearInterval(e)},[o,f,x.length]),(0,s.useEffect)(()=>{let e=p.current;if(e){let t=()=>{var t;h(Math.min(Math.floor(e.scrollLeft/((null===(t=e.querySelector(".card"))||void 0===t?void 0:t.clientWidth)||0)),x.length-1))};return e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[x.length]),(0,i.jsx)("section",{ref:g,id:"features",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,i.jsxs)("div",{className:"mx-auto my-12 h-full grid lg:grid-cols-2 gap-10 items-center",children:[(0,i.jsx)("div",{className:" hidden lg:flex order-1 lg:order-[0] ".concat(m?"lg:order-2 lg:justify-end":"justify-start"),children:(0,i.jsx)(l.fC,{className:"",type:"single",defaultValue:"item-".concat(f),value:"item-".concat(f),onValueChange:e=>h(Number(e.split("-")[1])),children:x.map((e,t)=>(0,i.jsxs)(c,{className:"relative mb-8 last:mb-0",value:"item-".concat(t),children:["left"===u||"right"===u?(0,i.jsx)("div",{className:"absolute bottom-0 top-0 h-full w-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ".concat("right"===u?"left-auto right-0":"left-0 right-auto"),children:(0,i.jsx)("div",{className:"absolute left-0 top-0 w-full ".concat(f===t?"h-full":"h-0"," origin-top bg-primary transition-all ease-linear dark:bg-white"),style:{transitionDuration:f===t?"".concat(o,"ms"):"0s"}})}):null,"top"===u||"bottom"===u?(0,i.jsx)("div",{className:"absolute left-0 right-0 w-full h-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ".concat("bottom"===u?"bottom-0":"top-0"),children:(0,i.jsx)("div",{className:"absolute left-0 ".concat("bottom"===u?"bottom-0":"top-0"," h-full ").concat(f===t?"w-full":"w-0"," origin-left bg-primary transition-all ease-linear dark:bg-white"),style:{transitionDuration:f===t?"".concat(o,"ms"):"0s"}})}):null,(0,i.jsxs)("div",{className:"flex items-center relative",children:[(0,i.jsx)("div",{className:"item-box w-12 h-12 bg-primary/10 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center",children:e.icon}),(0,i.jsxs)("div",{children:[(0,i.jsx)(d,{className:"text-xl font-bold pl-0",children:e.title}),(0,i.jsx)(d,{className:"justify-start text-left leading-4 text-[16px] pl-0",children:e.content})]})]})]},e.id))})}),(0,i.jsx)("div",{className:"h-[350px] min-h-[200px] w-auto  ".concat(m&&"lg:order-1"),children:(null===(t=x[f])||void 0===t?void 0:t.image)?(0,i.jsx)(n.E.img,{src:x[f].image,alt:"feature",className:"aspect-auto h-full w-full rounded-xl border border-neutral-300/50 object-cover object-left-top p-1 shadow-lg",initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},transition:{duration:.25,ease:"easeOut"}},f):(null===(a=x[f])||void 0===a?void 0:a.video)?(0,i.jsx)("video",{preload:"auto",src:x[f].video,className:"aspect-auto h-full w-full rounded-lg object-cover shadow-lg",autoPlay:!0,loop:!0,muted:!0}):(0,i.jsx)("div",{className:"aspect-auto h-full w-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1"})}),(0,i.jsx)("ul",{ref:p,className:" flex h-full snap-x flex-nowrap overflow-x-auto py-10 [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden snap-mandatory",style:{padding:"50px calc(50%)"},children:x.map((e,t)=>(0,i.jsxs)("div",{className:"card relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0",onClick:()=>h(t),style:{scrollSnapAlign:"center"},children:[(0,i.jsx)("div",{className:"absolute bottom-0 left-0 right-auto top-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30",children:(0,i.jsx)("div",{className:"absolute left-0 top-0 h-full ".concat(f===t?"w-full":"w-0"," origin-top bg-primary transition-all ease-linear"),style:{transitionDuration:f===t?"".concat(o,"ms"):"0s"}})}),(0,i.jsx)("h2",{className:"text-xl font-bold",children:e.title}),(0,i.jsx)("p",{className:"mx-0 max-w-sm text-balance text-sm",children:e.content})]},e.id))})]})})})})}d.displayName="AccordionTrigger",(0,s.forwardRef)((e,t)=>{let{children:a,className:r,...n}=e;return(0,i.jsx)(l.VY,{className:(0,o.cn)("overflow-hidden text-[15px] font-medium data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down",r),...n,ref:t,children:(0,i.jsx)("div",{className:"px-5 py-2",children:a})})}).displayName="AccordionContent"},6764:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var i=a(7437),l=a(7476),r=a(4446),n=a(6106),s=a(2265);function o(e){let{children:t,className:a,variant:o,duration:c=.4,delay:d=0,yOffset:m=6,inView:u=!1,inViewMargin:x="-50px",blur:f="6px"}=e,h=(0,s.useRef)(null),p=(0,l.Y)(h,{once:!0,margin:x});return(0,i.jsx)(r.M,{children:(0,i.jsx)(n.E.div,{ref:h,initial:"hidden",animate:!u||p?"visible":"hidden",exit:"hidden",variants:o||{hidden:{y:m,opacity:0,filter:"blur(".concat(f,")")},visible:{y:-m,opacity:1,filter:"blur(0px)"}},transition:{delay:.04+d,duration:c,ease:"easeOut"},className:a,children:t})})}},970:function(e,t,a){"use strict";a.d(t,{default:function(){return N}});var i=a(7437),l=a(4088),r=a(7138),n=a(2265),s=a(1366),o=a(3027),c=a(2421),d=a(9354);let m=n.forwardRef((e,t)=>{let{className:a,children:l,...r}=e;return(0,i.jsxs)(s.fC,{ref:t,className:(0,d.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center",a),...r,children:[l,(0,i.jsx)(y,{})]})});m.displayName=s.fC.displayName;let u=n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,i.jsx)(s.aV,{ref:t,className:(0,d.cn)("group flex flex-1 list-none items-center justify-center space-x-1",a),...l})});u.displayName=s.aV.displayName;let x=s.ck,f=(0,o.j)("group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/10 data-[state=open]:bg-primary/10"),h=n.forwardRef((e,t)=>{let{className:a,children:l,...r}=e;return(0,i.jsxs)(s.xz,{ref:t,className:(0,d.cn)(f(),"group",a),...r,children:[l," ",(0,i.jsx)(c.Z,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]})});h.displayName=s.xz.displayName;let p=n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,i.jsx)(s.VY,{ref:t,className:(0,d.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",a),...l})});p.displayName=s.VY.displayName;let g=s.rU,y=n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,i.jsx)("div",{className:(0,d.cn)("absolute left-0 top-full flex justify-center"),children:(0,i.jsx)(s.l_,{className:(0,d.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",a),ref:t,...l})})});y.displayName=s.l_.displayName,n.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,i.jsx)(s.z$,{ref:t,className:(0,d.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",a),...l,children:(0,i.jsx)("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})})}).displayName=s.z$.displayName;var b=a(5648);function v(){return(0,i.jsx)(m,{children:(0,i.jsx)(u,{children:b.J.header.map((e,t)=>(0,i.jsx)(x,{children:e.trigger&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{children:e.trigger}),(0,i.jsx)(p,{children:(0,i.jsxs)("ul",{className:"grid gap-3 p-6 ".concat(e.content.main?"md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]":"w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"),children:[e.content.main&&(0,i.jsx)("li",{className:"row-span-3",children:(0,i.jsx)(g,{asChild:!0,children:(0,i.jsxs)(r.default,{className:"flex h-full w-full select-none flex-col justify-end rounded-md bg-primary/10 from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",href:e.content.main.href,children:[e.content.main.icon,(0,i.jsx)("div",{className:"mb-2 mt-4 text-lg font-medium",children:e.content.main.title}),(0,i.jsx)("p",{className:"text-sm leading-tight text-muted-foreground",children:e.content.main.description})]})})}),e.content.items.map((e,t)=>(0,i.jsx)(j,{href:e.href,title:e.title,className:"hover:bg-primary/10",children:e.description},t))]})})]})},t))})})}let j=n.forwardRef((e,t)=>{let{className:a,title:l,children:r,...n}=e;return(0,i.jsx)("li",{children:(0,i.jsx)(g,{asChild:!0,children:(0,i.jsxs)("a",{ref:t,className:(0,d.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",a),...n,children:[(0,i.jsx)("div",{className:"text-sm font-medium leading-none",children:l}),(0,i.jsx)("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:r})]})})})});j.displayName="ListItem";var w=a(9733);function N(){let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{window.scrollY>20?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,i.jsxs)("header",{className:"relative sticky top-0 z-50 py-2 bg-background/60 backdrop-blur",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center container",children:[(0,i.jsx)(r.default,{href:"/",title:"brand-logo",className:"relative mr-6 flex items-center space-x-2",children:(0,i.jsx)("img",{src:"".concat(b.J.url,"/logo_checkmark.png"),alt:"Trustee",className:"w-[150px]"})}),(0,i.jsx)("div",{className:"hidden lg:block",children:(0,i.jsxs)("div",{className:"flex items-center ",children:[(0,i.jsx)("nav",{className:"mr-10",children:(0,i.jsx)(v,{})}),(0,i.jsx)("div",{className:"gap-2 flex",children:(0,i.jsxs)(r.default,{href:"https://github.com/Jaddevvv/Hackathon-From-LLM-To-Agentic-AI",className:(0,d.cn)((0,w.d)({variant:"default"}),"w-full sm:w-auto text-background flex gap-2"),children:[(0,i.jsx)(l.P.logo,{className:"h-6 w-6"}),"Get Started for Free"]})})]})})]}),(0,i.jsx)("hr",{className:(0,d.cn)("absolute w-full bottom-0 transition-opacity duration-300 ease-in-out",e?"opacity-100":"opacity-0")})]})}},6210:function(e,t,a){"use strict";a.d(t,{default:function(){return j}});var i=a(7437),l=a(6106),r=a(4088),n=a(9354),s=a(4446),o=a(8094),c=a(4697),d=a(6648),m=a(2265);let u={"from-bottom":{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"100%",opacity:0}},"from-center":{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0}},"from-top":{initial:{y:"-100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0}},"from-left":{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"-100%",opacity:0}},"from-right":{initial:{x:"100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"100%",opacity:0}},fade:{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},"top-in-bottom-out":{initial:{y:"-100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"100%",opacity:0}},"left-in-right-out":{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"100%",opacity:0}}};function x(e){let{animationStyle:t="from-center",videoSrc:a,thumbnailSrc:r,thumbnailAlt:x="Video thumbnail",className:f}=e,[h,p]=(0,m.useState)(!1),g=u[t];return(0,i.jsxs)("div",{className:(0,n.cn)("relative",f),children:[(0,i.jsxs)("div",{className:"relative cursor-pointer group rounded-md p-2 ring-1 ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10 backdrop-blur-md",onClick:()=>p(!0),children:[(0,i.jsx)(d.default,{src:r,alt:x,width:1920,height:1080,className:"transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md border"}),(0,i.jsx)("div",{className:"absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl",children:(0,i.jsx)("div",{className:"z-30 bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28",children:(0,i.jsx)("div",{className:"flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100",children:(0,i.jsx)(o.Z,{className:"size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out",style:{filter:"drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"}})})})})]}),(0,i.jsx)(s.M,{children:h&&(0,i.jsx)(l.E.div,{initial:{opacity:0},animate:{opacity:1},onClick:()=>p(!1),exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md",children:(0,i.jsxs)(l.E.div,{...g,transition:{type:"spring",damping:30,stiffness:300},className:"relative w-full max-w-4xl aspect-video mx-4 md:mx-0",children:[(0,i.jsx)(l.E.button,{className:"absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black",children:(0,i.jsx)(c.Z,{className:"size-5"})}),(0,i.jsx)("div",{className:"size-full border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative",children:(0,i.jsx)("iframe",{src:a,className:"size-full rounded-2xl",allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})})]})})})]})}var f=a(9733),h=a(7138);let p=[.16,1,.3,1];function g(){return(0,i.jsxs)(l.E.a,{href:"https://github.com/Jaddevvv/Hackathon-From-LLM-To-Agentic-AI",className:"flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8,ease:p},children:[(0,i.jsx)("div",{className:"w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm",children:"\uD83D\uDD12 Safety"}),(0,i.jsx)("p",{className:"text-xs font-medium text-primary sm:text-sm",children:"Introducing Trustee - Your AI Social Engineering Protector"}),(0,i.jsx)("svg",{width:"12",height:"12",className:"ml-1",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z",fill:"hsl(var(--primary))"})})]})}function y(){return(0,i.jsxs)("div",{className:"flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8",children:[(0,i.jsx)(l.E.h1,{className:"text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl",initial:{filter:"blur(10px)",opacity:0,y:50},animate:{filter:"blur(0px)",opacity:1,y:0},transition:{duration:1,ease:p,staggerChildren:.2},children:["Protect","yourself","from","online scams"].map((e,t)=>(0,i.jsx)(l.E.span,{className:"inline-block px-1 md:px-2 text-balance font-semibold",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2*t,ease:p},children:e},t))}),(0,i.jsx)(l.E.p,{className:"mx-auto max-w-xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9 text-balance",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.8,ease:p},children:"Your AI-powered trust advisor that scans marketplace listings and messages in real-time to protect you from scams."})]})}function b(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.E.div,{className:"mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.8,ease:p},children:(0,i.jsxs)(h.default,{href:"https://github.com/Jaddevvv/Hackathon-From-LLM-To-Agentic-AI",className:(0,n.cn)((0,f.d)({variant:"default"}),"w-full sm:w-auto text-background flex gap-2"),children:[(0,i.jsx)(r.P.logo,{className:"h-6 w-6"}),"Install Chrome Extension"]})}),(0,i.jsx)(l.E.p,{className:"mt-5 text-sm text-muted-foreground",initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.8},children:"Free to use. No credit card required."})]})}function v(){return(0,i.jsx)(l.E.div,{className:"relative mx-auto flex w-full items-center justify-center",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:1.2,duration:1,ease:p},children:(0,i.jsx)(x,{animationStyle:"from-center",videoSrc:"https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",thumbnailSrc:"/se-thumbnail.jpg",thumbnailAlt:"Hero Video",className:"border rounded-lg shadow-lg max-w-screen-lg mt-16"})})}function j(){return(0,i.jsx)("section",{id:"hero",children:(0,i.jsxs)("div",{className:"relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8",children:[(0,i.jsx)(g,{}),(0,i.jsx)(y,{}),(0,i.jsx)(b,{}),(0,i.jsx)(v,{}),(0,i.jsx)("div",{className:"pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"})]})})}},145:function(e,t,a){"use strict";a.d(t,{default:function(){return u}});var i=a(7437),l=a(5648),r=a(2265),n=a(9354);let s=r.memo(function(e){let{mainCircleSize:t=210,mainCircleOpacity:a=.24,numCircles:l=8,className:r}=e;return(0,i.jsx)("div",{className:(0,n.cn)("absolute inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]",r),children:Array.from({length:l},(e,r)=>{let n=t+70*r,s=5+5*r;return(0,i.jsx)("div",{className:"absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:".concat(r,"]"),style:{width:"".concat(n,"px"),height:"".concat(n,"px"),opacity:a-.03*r,animationDelay:"".concat(.06*r,"s"),borderStyle:r===l-1?"dashed":"solid",borderWidth:"1px",borderColor:"hsl(var(--foreground), ".concat(s/100,")"),top:"50%",left:"50%",transform:"translate(-50%, -50%) scale(1)"}},r)})})});function o(e){let{src:t,url:a,width:l=1203,height:r=753,...n}=e;return(0,i.jsxs)("svg",{width:l,height:r,viewBox:"0 0 ".concat(l," ").concat(r),fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[(0,i.jsxs)("g",{clipPath:"url(#path0)",children:[(0,i.jsx)("path",{d:"M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z",className:"fill-[#E5E5E5] dark:fill-[#404040]"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z",className:"fill-[#E5E5E5] dark:fill-[#404040]"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z",className:"fill-white dark:fill-[#262626]"}),(0,i.jsx)("circle",{cx:"27",cy:"25",r:"6",className:"fill-[#E5E5E5] dark:fill-[#404040]"}),(0,i.jsx)("circle",{cx:"47",cy:"25",r:"6",className:"fill-[#E5E5E5] dark:fill-[#404040]"}),(0,i.jsx)("circle",{cx:"67",cy:"25",r:"6",className:"fill-[#E5E5E5] dark:fill-[#404040]"}),(0,i.jsx)("path",{d:"M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z",fill:"#F5F5F5"}),(0,i.jsx)("g",{className:"mix-blend-luminosity",children:(0,i.jsx)("path",{d:"M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z",fill:"#A3A3A3"})}),(0,i.jsx)("g",{className:"mix-blend-luminosity",children:(0,i.jsx)("text",{x:"580",y:"30",fill:"#A3A3A3",fontSize:"12",fontFamily:"Arial, sans-serif",children:a})}),(0,i.jsx)("g",{className:"mix-blend-luminosity",children:(0,i.jsx)("path",{d:"M265.5 33.8984C265.641 33.8984 265.852 33.8516 266.047 33.7422C270.547 31.2969 272.109 30.1641 272.109 27.3203V21.4219C272.109 20.4844 271.742 20.1484 270.961 19.8125C270.094 19.4453 267.18 18.4297 266.328 18.1406C266.07 18.0547 265.766 18 265.5 18C265.234 18 264.93 18.0703 264.672 18.1406C263.82 18.3828 260.906 19.4531 260.039 19.8125C259.258 20.1406 258.891 20.4844 258.891 21.4219V27.3203C258.891 30.1641 260.461 31.2812 264.945 33.7422C265.148 33.8516 265.359 33.8984 265.5 33.8984ZM265.922 19.5781C266.945 19.9766 269.172 20.7656 270.344 21.1875C270.562 21.2656 270.617 21.3828 270.617 21.6641V27.0234C270.617 29.3125 269.469 29.9375 265.945 32.0625C265.727 32.1875 265.617 32.2344 265.508 32.2344V19.4844C265.617 19.4844 265.734 19.5156 265.922 19.5781Z",fill:"#A3A3A3"})}),(0,i.jsx)("g",{className:"mix-blend-luminosity",children:(0,i.jsx)("path",{d:"M936.273 24.9766C936.5 24.9766 936.68 24.9062 936.82 24.7578L940.023 21.5312C940.195 21.3594 940.273 21.1719 940.273 20.9531C940.273 20.7422 940.188 20.5391 940.023 20.3828L936.82 17.125C936.68 16.9688 936.5 16.8906 936.273 16.8906C935.852 16.8906 935.516 17.2422 935.516 17.6719C935.516 17.8828 935.594 18.0547 935.727 18.2031L937.594 20.0312C937.227 19.9766 936.852 19.9453 936.477 19.9453C932.609 19.9453 929.516 23.0391 929.516 26.9141C929.516 30.7891 932.633 33.9062 936.5 33.9062C940.375 33.9062 943.484 30.7891 943.484 26.9141C943.484 26.4453 943.156 26.1094 942.688 26.1094C942.234 26.1094 941.93 26.4453 941.93 26.9141C941.93 29.9297 939.516 32.3516 936.5 32.3516C933.492 32.3516 931.07 29.9297 931.07 26.9141C931.07 23.875 933.469 21.4688 936.477 21.4688C936.984 21.4688 937.453 21.5078 937.867 21.5781L935.734 23.6875C935.594 23.8281 935.516 24 935.516 24.2109C935.516 24.6406 935.852 24.9766 936.273 24.9766Z",fill:"#A3A3A3"})}),(0,i.jsx)("g",{className:"mix-blend-luminosity",children:(0,i.jsx)("path",{d:"M1134 33.0156C1134.49 33.0156 1134.89 32.6094 1134.89 32.1484V27.2578H1139.66C1140.13 27.2578 1140.54 26.8594 1140.54 26.3672C1140.54 25.8828 1140.13 25.4766 1139.66 25.4766H1134.89V20.5859C1134.89 20.1172 1134.49 19.7188 1134 19.7188C1133.52 19.7188 1133.11 20.1172 1133.11 20.5859V25.4766H1128.34C1127.88 25.4766 1127.46 25.8828 1127.46 26.3672C1127.46 26.8594 1127.88 27.2578 1128.34 27.2578H1133.11V32.1484C1133.11 32.6094 1133.52 33.0156 1134 33.0156Z",fill:"#A3A3A3"})}),(0,i.jsx)("g",{className:"mix-blend-luminosity",children:(0,i.jsx)("path",{d:"M1161.8 31.0703H1163.23V32.375C1163.23 34.0547 1164.12 34.9219 1165.81 34.9219H1174.2C1175.89 34.9219 1176.77 34.0547 1176.77 32.3828V24.0469C1176.77 22.375 1175.89 21.5 1174.2 21.5H1172.77V20.2578C1172.77 18.5859 1171.88 17.7109 1170.19 17.7109H1161.8C1160.1 17.7109 1159.23 18.5781 1159.23 20.2578V28.5234C1159.23 30.1953 1160.1 31.0703 1161.8 31.0703ZM1161.9 29.5078C1161.18 29.5078 1160.78 29.1328 1160.78 28.3828V20.3984C1160.78 19.6406 1161.18 19.2656 1161.9 19.2656H1170.09C1170.8 19.2656 1171.2 19.6406 1171.2 20.3984V21.5H1165.81C1164.12 21.5 1163.23 22.375 1163.23 24.0469V29.5078H1161.9ZM1165.91 33.3672C1165.19 33.3672 1164.8 32.9922 1164.8 32.2422V24.1875C1164.8 23.4297 1165.19 23.0625 1165.91 23.0625H1174.1C1174.81 23.0625 1175.21 23.4297 1175.21 24.1875V32.2422C1175.21 32.9922 1174.81 33.3672 1174.1 33.3672H1165.91Z",fill:"#A3A3A3"})}),(0,i.jsx)("g",{className:"mix-blend-luminosity",children:(0,i.jsx)("path",{d:"M1099.51 28.4141C1099.91 28.4141 1100.24 28.0859 1100.24 27.6953V19.8359L1100.18 18.6797L1100.66 19.25L1101.75 20.4141C1101.88 20.5547 1102.06 20.625 1102.24 20.625C1102.6 20.625 1102.9 20.3672 1102.9 20C1102.9 19.8047 1102.82 19.6641 1102.69 19.5312L1100.06 17.0078C1099.88 16.8203 1099.7 16.7578 1099.51 16.7578C1099.32 16.7578 1099.14 16.8203 1098.95 17.0078L1096.33 19.5312C1096.2 19.6641 1096.12 19.8047 1096.12 20C1096.12 20.3672 1096.41 20.625 1096.77 20.625C1096.95 20.625 1097.14 20.5547 1097.27 20.4141L1098.35 19.25L1098.84 18.6719L1098.78 19.8359V27.6953C1098.78 28.0859 1099.11 28.4141 1099.51 28.4141ZM1095 34.6562H1104C1105.7 34.6562 1106.57 33.7812 1106.57 32.1094V24.4297C1106.57 22.7578 1105.7 21.8828 1104 21.8828H1101.89V23.4375H1103.9C1104.61 23.4375 1105.02 23.8125 1105.02 24.5625V31.9688C1105.02 32.7188 1104.61 33.0938 1103.9 33.0938H1095.1C1094.38 33.0938 1093.98 32.7188 1093.98 31.9688V24.5625C1093.98 23.8125 1094.38 23.4375 1095.1 23.4375H1097.13V21.8828H1095C1093.31 21.8828 1092.43 22.75 1092.43 24.4297V32.1094C1092.43 33.7812 1093.31 34.6562 1095 34.6562Z",fill:"#A3A3A3"})}),(0,i.jsx)("g",{className:"mix-blend-luminosity",children:(0,i.jsx)("path",{d:"M99.5703 33.6016H112.938C114.633 33.6016 115.516 32.7266 115.516 31.0547V21.5469C115.516 19.875 114.633 19 112.938 19H99.5703C97.8828 19 97 19.8672 97 21.5469V31.0547C97 32.7266 97.8828 33.6016 99.5703 33.6016ZM99.6719 32.0469C98.9531 32.0469 98.5547 31.6719 98.5547 30.9141V21.6875C98.5547 20.9297 98.9531 20.5547 99.6719 20.5547H103.234V32.0469H99.6719ZM112.836 20.5547C113.555 20.5547 113.953 20.9297 113.953 21.6875V30.9141C113.953 31.6719 113.555 32.0469 112.836 32.0469H104.711V20.5547H112.836ZM101.703 23.4141C101.984 23.4141 102.219 23.1719 102.219 22.9062C102.219 22.6406 101.984 22.4062 101.703 22.4062H100.102C99.8203 22.4062 99.5859 22.6406 99.5859 22.9062C99.5859 23.1719 99.8203 23.4141 100.102 23.4141H101.703ZM101.703 25.5156C101.984 25.5156 102.219 25.2812 102.219 25.0078C102.219 24.7422 101.984 24.5078 101.703 24.5078H100.102C99.8203 24.5078 99.5859 24.7422 99.5859 25.0078C99.5859 25.2812 99.8203 25.5156 100.102 25.5156H101.703ZM101.703 27.6094C101.984 27.6094 102.219 27.3828 102.219 27.1094C102.219 26.8438 101.984 26.6172 101.703 26.6172H100.102C99.8203 26.6172 99.5859 26.8438 99.5859 27.1094C99.5859 27.3828 99.8203 27.6094 100.102 27.6094H101.703Z",fill:"#A3A3A3"})}),(0,i.jsx)("g",{className:"mix-blend-luminosity",children:(0,i.jsx)("path",{d:"M143.914 32.5938C144.094 32.7656 144.312 32.8594 144.562 32.8594C145.086 32.8594 145.492 32.4531 145.492 31.9375C145.492 31.6797 145.391 31.4453 145.211 31.2656L139.742 25.9219L145.211 20.5938C145.391 20.4141 145.492 20.1719 145.492 19.9219C145.492 19.4062 145.086 19 144.562 19C144.312 19 144.094 19.0938 143.922 19.2656L137.844 25.2031C137.625 25.4062 137.516 25.6562 137.516 25.9297C137.516 26.2031 137.625 26.4375 137.836 26.6484L143.914 32.5938Z",fill:"#A3A3A3"})}),(0,i.jsx)("g",{className:"mix-blend-luminosity",children:(0,i.jsx)("path",{d:"M168.422 32.8594C168.68 32.8594 168.891 32.7656 169.07 32.5938L175.148 26.6562C175.359 26.4375 175.469 26.2109 175.469 25.9297C175.469 25.6562 175.367 25.4141 175.148 25.2109L169.07 19.2656C168.891 19.0938 168.68 19 168.422 19C167.898 19 167.492 19.4062 167.492 19.9219C167.492 20.1719 167.602 20.4141 167.773 20.5938L173.25 25.9375L167.773 31.2656C167.594 31.4531 167.492 31.6797 167.492 31.9375C167.492 32.4531 167.898 32.8594 168.422 32.8594Z",fill:"#A3A3A3"})}),(0,i.jsx)("image",{href:t,width:"1200",height:"700",x:"1",y:"52",preserveAspectRatio:"xMidYMid slice",clipPath:"url(#roundedBottom)"})]}),(0,i.jsxs)("defs",{children:[(0,i.jsx)("clipPath",{id:"path0",children:(0,i.jsx)("rect",{width:l,height:r,fill:"white"})}),(0,i.jsx)("clipPath",{id:"roundedBottom",children:(0,i.jsx)("path",{d:"M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z",fill:"white"})})]})]})}function c(e){let{id:t,title:a,subtitle:l,description:r,children:n,className:s}=e,o=a?a.toLowerCase().replace(/\s+/g,"-"):t;return(0,i.jsx)("section",{id:t||o,children:(0,i.jsx)("div",{className:s,children:(0,i.jsxs)("div",{className:"relative container mx-auto px-4 py-16 max-w-7xl",children:[(0,i.jsxs)("div",{className:"text-center space-y-4 pb-6 mx-auto",children:[a&&(0,i.jsx)("h2",{className:"text-sm text-primary font-mono font-medium tracking-wider uppercase",children:a}),l&&(0,i.jsx)("h3",{className:"mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl",children:l}),r&&(0,i.jsx)("p",{className:"mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto",children:r})]}),n]})})})}s.displayName="Ripple";var d=a(6106);let m=[{title:"Real-time Analysis",description:"Instantly scan marketplace listings and messages for suspicious patterns, using advanced AI to detect potential scams before they harm you.",className:"hover:bg-red-500/10 transition-all duration-500 ease-out",content:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o,{src:"".concat(l.J.url,"/ebay-screen.png"),url:"https://trustee.ai",className:"-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"})})},{title:"Trust Score System",description:"Get a comprehensive trust score for each seller and listing, with detailed explanations of potential risks and recommendations for safe transactions.",className:"order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out",content:(0,i.jsx)(o,{src:"/trust-score.png",url:"https://trustee.ai",className:"-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"})},{title:"Smart Conversation Assistant",description:"Receive real-time guidance during conversations with sellers, including suggested questions and warnings about suspicious language patterns.",className:"md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out",content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e=>{let{squareSize:t=4,gridGap:a=6,flickerChance:l=.3,color:n="rgb(0, 0, 0)",width:s,height:o,className:c,maxOpacity:d=.3}=e,m=(0,r.useRef)(null),[u,x]=(0,r.useState)(!1),f=(0,r.useMemo)(()=>(e=>{let t=document.createElement("canvas");t.width=t.height=1;let a=t.getContext("2d");if(!a)return"rgba(255, 0, 0,";if(e.startsWith("hsl")){a.fillStyle=e,a.fillRect(0,0,1,1);let[t,i,l]=a.getImageData(0,0,1,1).data;return"rgba(".concat(t,", ").concat(i,", ").concat(l,",")}a.fillStyle=e,a.fillRect(0,0,1,1);let[i,l,r]=a.getImageData(0,0,1,1).data;return"rgba(".concat(i,", ").concat(l,", ").concat(r,",")})(n),[n]),h=(0,r.useCallback)(e=>{let i=s||e.clientWidth,l=o||e.clientHeight,r=window.devicePixelRatio||1;e.width=i*r,e.height=l*r,e.style.width="".concat(i,"px"),e.style.height="".concat(l,"px");let n=Math.floor(i/(t+a)),c=Math.floor(l/(t+a)),m=new Float32Array(n*c);for(let e=0;e<m.length;e++)m[e]=Math.random()*d;return{width:i,height:l,cols:n,rows:c,squares:m,dpr:r}},[t,a,s,o,d]),p=(0,r.useCallback)((e,t)=>{for(let a=0;a<e.length;a++)Math.random()<l*t&&(e[a]=Math.random()*d)},[l,d]),g=(0,r.useCallback)((e,i,l,r,n,s,o)=>{e.clearRect(0,0,i,l),e.fillStyle="transparent",e.fillRect(0,0,i,l);for(let i=0;i<r;i++)for(let l=0;l<n;l++){let r=s[i*n+l];e.fillStyle="".concat(f).concat(r,")"),e.fillRect(i*(t+a)*o,l*(t+a)*o,t*o,t*o)}},[f,t,a]);return(0,r.useEffect)(()=>{let e;let t=m.current;if(!t)return;let a=t.getContext("2d");if(!a)return;let{width:i,height:l,cols:r,rows:n,squares:s,dpr:o}=h(t),c=0,d=t=>{if(!u)return;let m=(t-c)/1e3;c=t,p(s,m),g(a,i*o,l*o,r,n,s,o),e=requestAnimationFrame(d)},f=()=>{({width:i,height:l,cols:r,rows:n,squares:s,dpr:o}=h(t))},y=new IntersectionObserver(e=>{let[t]=e;x(t.isIntersecting)},{threshold:0});return y.observe(t),window.addEventListener("resize",f),u&&(e=requestAnimationFrame(d)),()=>{window.removeEventListener("resize",f),cancelAnimationFrame(e),y.disconnect()}},[h,p,g,s,o,u]),(0,i.jsx)("canvas",{ref:m,className:"size-full pointer-events-none ".concat(c),style:{width:s||"100%",height:o||"100%"},width:s,height:o})},{className:"z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]",squareSize:4,gridGap:6,color:"#000",maxOpacity:.1,flickerChance:.1,height:800,width:800}),(0,i.jsx)(o,{src:"/extension-screen.png",url:"https://trustee.ai",className:"-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"})]})},{title:"Multi-platform Protection",description:"Works seamlessly across major marketplaces like Leboncoin, eBay, Etsy, and Vinted, providing consistent protection wherever you shop.",className:"flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out",content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{className:"absolute -bottom-full"}),(0,i.jsx)(o,{src:"".concat(l.J.url,"/ebay-screen.png"),url:"https://trustee.ai",className:"-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"})]})}];function u(){return(0,i.jsx)(c,{title:"Solution",subtitle:"Your AI-Powered Trust Advisor",description:"Trustee uses advanced AI to protect you from scams across online marketplaces, providing real-time analysis and guidance for safe transactions.",className:"bg-neutral-100 dark:bg-neutral-900",children:(0,i.jsx)("div",{className:"mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3",children:m.map((e,t)=>(0,i.jsxs)(d.E.div,{className:(0,n.cn)("group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl",e.className),initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.5,type:"spring",stiffness:100,damping:30,delay:.1*t},viewport:{once:!0},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"font-semibold mb-2 text-primary",children:e.title}),(0,i.jsx)("p",{className:"text-foreground",children:e.description})]}),e.content,(0,i.jsx)("div",{className:"absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"})]},t))})})}},5265:function(e,t,a){"use strict";a.d(t,{Accordion:function(){return o},AccordionContent:function(){return m},AccordionItem:function(){return c},AccordionTrigger:function(){return d}});var i=a(7437),l=a(2265),r=a(4756),n=a(2421),s=a(9354);let o=r.fC,c=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,i.jsx)(r.ck,{ref:t,className:(0,s.cn)("border-b",a),...l})});c.displayName="AccordionItem";let d=l.forwardRef((e,t)=>{let{className:a,children:l,...o}=e;return(0,i.jsx)(r.h4,{className:"flex",children:(0,i.jsxs)(r.xz,{ref:t,className:(0,s.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a),...o,children:[l,(0,i.jsx)(n.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});d.displayName=r.xz.displayName;let m=l.forwardRef((e,t)=>{let{className:a,children:l,...n}=e;return(0,i.jsx)(r.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:(0,i.jsx)("div",{className:(0,s.cn)("pb-4 pt-0",a),children:l})})});m.displayName=r.VY.displayName}},function(e){e.O(0,[522,240,699,631,502,733,971,23,744],function(){return e(e.s=5923)}),_N_E=e.O()}]);