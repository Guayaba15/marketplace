/*! For license information please see 288.6e0daaa4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarketplace_front=self.webpackChunkmarketplace_front||[]).push([[288],{288:(e,t,r)=>{r.r(t),r.d(t,{GESTURE_CONTROLLER:()=>n.G,createGesture:()=>i});var n=r(267);const o=(e,t,r,n)=>{const o=s(e)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;let a,c;return e.__zone_symbol__addEventListener?(a="__zone_symbol__addEventListener",c="__zone_symbol__removeEventListener"):(a="addEventListener",c="removeEventListener"),e[a](t,r,o),()=>{e[c](t,r,o)}},s=e=>{if(void 0===a)try{const t=Object.defineProperty({},"passive",{get:()=>{a=!0}});e.addEventListener("optsTest",(()=>{}),t)}catch(t){a=!1}return!!a};let a;const c=e=>e instanceof Document?e:e.ownerDocument,i=e=>{let t=!1,r=!1,s=!0,a=!1;const i=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),v=i.canStart,m=i.onWillStart,p=i.onStart,h=i.onEnd,y=i.notCaptured,X=i.onMove,Y=i.threshold,_=i.passive,f=i.blurOnStart,g={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},b=((e,t,r)=>{const n=r*(Math.PI/180),o="x"===e,s=Math.cos(n),a=t*t;let c=0,i=0,u=!1,l=0;return{start(e,t){c=e,i=t,l=0,u=!0},detect(e,t){if(!u)return!1;const r=e-c,n=t-i,d=r*r+n*n;if(d<a)return!1;const v=Math.sqrt(d),m=(o?r:n)/v;return l=m>s?1:m<-s?-1:0,u=!1,!0},isGesture:()=>0!==l,getDirection:()=>l}})(i.direction,i.threshold,i.maxAngle),T=n.G.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),E=()=>{t&&(a=!1,X&&X(g))},S=()=>!!T.capture()&&(t=!0,s=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime,m?m(g).then(L):L(),!0),L=()=>{f&&(()=>{if("undefined"!==typeof document){const e=document.activeElement;(null===e||void 0===e?void 0:e.blur)&&e.blur()}})(),p&&p(g),s=!0},w=()=>{t=!1,r=!1,a=!1,s=!0,T.release()},G=e=>{const r=t,n=s;w(),n&&(u(g,e),r?h&&h(g):y&&y(g))},k=((e,t,r,n,s)=>{let a,i,u,l,d,v,m,p=0;const h=n=>{p=Date.now()+2e3,t(n)&&(!i&&r&&(i=o(e,"touchmove",r,s)),u||(u=o(n.target,"touchend",X,s)),l||(l=o(n.target,"touchcancel",X,s)))},y=n=>{p>Date.now()||t(n)&&(!v&&r&&(v=o(c(e),"mousemove",r,s)),m||(m=o(c(e),"mouseup",Y,s)))},X=e=>{_(),n&&n(e)},Y=e=>{f(),n&&n(e)},_=()=>{i&&i(),u&&u(),l&&l(),i=u=l=void 0},f=()=>{v&&v(),m&&m(),v=m=void 0},g=()=>{_(),f()},b=function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(a&&a(),d&&d(),a=d=void 0,g()):(a||(a=o(e,"touchstart",h,s)),d||(d=o(e,"mousedown",y,s)))};return{enable:b,stop:g,destroy:()=>{b(!1),n=r=t=void 0}}})(i.el,(e=>{const t=d(e);return!(r||!s)&&(l(e,g),g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime=t,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=e,(!v||!1!==v(g))&&(T.release(),!!T.start()&&(r=!0,0===Y?S():(b.start(g.startX,g.startY),!0))))}),(e=>{t?!a&&s&&(a=!0,u(g,e),requestAnimationFrame(E)):(u(g,e),b.detect(g.currentX,g.currentY)&&(b.isGesture()&&S()||D()))}),G,{capture:!1,passive:_}),D=()=>{w(),k.stop(),y&&y(g)};return{enable(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e||(t&&G(void 0),w()),k.enable(e)},destroy(){T.destroy(),k.destroy()}}},u=(e,t)=>{if(!t)return;const r=e.currentX,n=e.currentY,o=e.currentTime;l(t,e);const s=e.currentX,a=e.currentY,c=(e.currentTime=d(t))-o;if(c>0&&c<100){const t=(s-r)/c,o=(a-n)/c;e.velocityX=.7*t+.3*e.velocityX,e.velocityY=.7*o+.3*e.velocityY}e.deltaX=s-e.startX,e.deltaY=a-e.startY,e.event=t},l=(e,t)=>{let r=0,n=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];r=e.clientX,n=e.clientY}else void 0!==e.pageX&&(r=e.pageX,n=e.pageY)}t.currentX=r,t.currentY=n},d=e=>e.timeStamp||Date.now()}}]);
//# sourceMappingURL=288.6e0daaa4.chunk.js.map