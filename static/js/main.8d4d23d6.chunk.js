(this["webpackJsonpgame-exp-react"]=this["webpackJsonpgame-exp-react"]||[]).push([[0],{88:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a,i,c,o,r,A,s,u,g,l,p,b=n(1),d=n.n(b),m=n(79),h=n.n(m),v=(n(88),n(71)),f=n(15),O=n(12),C=n(13),j=n(35),w=n(96),y=n(97),I=function(e){return Math.floor(Math.random()*e)},L=function(){return I(2)<1},k=n.p+"static/media/ufo.3048b82b.png",x=n(3),E=["future-engine.wav","machine-glitch.wav","traveling.wav","time-machine.wav","vibrating-engine.wav"].map((function(e){return"".concat("/audio/sfx/spaceship/").concat(e)})),S=Object(C.a)(w.a.img)(a||(a=Object(O.a)(["\n    height: 4em;\n    position: absolute;\n    top: 4em;\n    width: auto;\n    z-index: 1;\n"]))),M={flying:{y:[0,20,0],rotate:[0,5,20,10,0]},landed:{y:[0,5,0],transition:{repeat:1/0}}},Z=function(){var e=Object(b.useMemo)((function(){return new j.Howl({src:[E[I(E.length-1)]],volume:.25})}),[]),t=Object(b.useState)(!0),n=Object(f.a)(t,2),a=n[0],i=n[1];return Object(b.useEffect)((function(){a?(e.play(),e.fade(0,1,400)):(e.fade(e.volume(),0,400),e.once("fade",(function(){return e.stop()})))}),[e,a]),Object(x.jsx)(S,{layoutId:"spaceship",variants:M,initial:"flying",animate:a?"flying":"landed",transition:{duration:1},src:k,onAnimationComplete:function(){a&&i(!1)}})},W=Object(C.a)(w.a.div)(i||(i=Object(O.a)(["\n    align-items: center;\n    display: flex;\n    height: 50%;\n    margin: 1rem;\n    max-height: 20vw;\n    place-content: center;\n    position: relative;\n    text-align: center;\n    width: 30vw;\n\n    &:hover {\n        cursor: pointer;\n    }\n"]))),Y=Object(C.a)(w.a.img)(c||(c=Object(O.a)(["\n    min-height: 5em;\n    z-index: 0;\n\n    @media (min-height: 768px) {\n        min-height: 8em;\n    }\n"]))),z=function(e){var t=e.img,n=e.handleClick,a=e.isSelected,i=e.name,c=Object(b.useState)(!1),o=Object(f.a)(c,2),r=o[0],A=o[1],s=Object(b.useState)(!1),u=Object(f.a)(s,2),g=u[0],l=u[1],p={bounce:{y:[-5,5],rotate:[-15,15],transition:{duration:.8,repeatType:"reverse",repeat:1/0,ease:"easeInOut"}},circle:{y:[0,-5,-15,-25,-30,-25,-15,-5,0],x:[0,10,15,10,0,-10,-15,-10,0],transition:{repeat:1/0,duration:.8,ease:"linear"}},settle:{y:[0,I(10),0],rotate:[I(-5),I(10)],transition:{repeat:1/0,repeatType:"reverse",duration:2,ease:"easeInOut",delay:I(3)}},zoom:{scale:1.5,transition:{duration:.6,ease:"backInOut"}}},d=Object(b.useCallback)((function(){return a?"bounce":r?"circle":"settle"}),[a,r]),m=Object(b.useCallback)((function(){return a?"zoom":"settle"}),[a]);return Object(x.jsxs)(W,{onClick:function(e){g||n(e)},"data-name":i,onTapStart:function(e){l(!0),n(e)},onMouseEnter:function(e){a||A(!0)},onMouseLeave:function(e){A(!1)},children:[Object(x.jsx)(Y,{src:t,variants:p,initial:"settle",animate:"base"===i?m():d()}),a&&Object(x.jsx)(Z,{})]})},B=n(98),F="./audio/sfx/stars/",X=["fairy-swoosh.wav","fire-swoosh.wav","future-swoosh.wav","sweeping-swoosh.wav"].map((function(e){return"".concat(F,"shooting/").concat(e)})),V=["fairy-flow.wav","flitter.wav","magic.wav"].map((function(e){return"".concat(F,"caught/").concat(e)})),J=Object(C.a)(w.a.img)(o||(o=Object(O.a)(["\n    height: 2.5em;\n    left: ",";\n    position: absolute;\n    top: ",";\n    width: 2.5em;\n    z-index: 10;\n"])),(function(e){return e.leftOffset}),(function(e){return e.topOffset})),T=function(e){var t=e.containerRef,n=e.top,a=e.left,i=e.destroy,c=e.destroyTime,o=e.size,r=Object(B.a)(),A=Object(b.useRef)(null),s=Object(b.useRef)(null),u=Object(b.useState)(!1),g=Object(f.a)(u,2),l=g[0],p=g[1],d=Object(b.useState)(!1),m=Object(f.a)(d,2),h=m[0],v=m[1],O=Object(b.useState)(!1),C=Object(f.a)(O,2),w=C[0],y=C[1],L=Object(b.useMemo)((function(){return new j.Howl({src:X[I(X.length-1)],rate:.25,volume:.05})}),[]),k=Object(b.useMemo)((function(){return new j.Howl({src:V[I(V.length-1)],rate:1.2,volume:.8})}),[]),E={shooting:{rotate:360,opacity:["0%","80%","100%","80%","0%"],times:[0,.1,.5,.8,1],x:window.innerWidth,y:window.innerHeight,transition:{duration:c}},caught:{scale:2,opacity:0,transition:{duration:.6}}},S=Object(b.useMemo)((function(){return{root:t.current,rootMargin:"0px",threshold:1}}),[t]),M=Object(b.useCallback)((function(e){Object(f.a)(e,1)[0].isIntersecting&&!w&&A.current&&(L.play(),y(!0))}),[w,A,L]);return Object(b.useEffect)((function(){var e=A.current,t=new IntersectionObserver(M,S);return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[A,M,S]),Object(b.useEffect)((function(){h?(r.stop(),k.play(),L.fade(1,0,1e3),k.fade(0,1,500).fade(1,0,2e3),r.start("caught").then((function(){i(),clearTimeout(s.current)}))):l||(p(!0),r.start("shooting").then((function(){i(),clearTimeout(s.current)})))}),[h,r,i,l,k]),Object(b.useEffect)((function(){return s.current=setTimeout((function(){i()}),1e3*c),function(){clearTimeout(s.current)}}),[c,i]),Object(x.jsx)(J,{ref:A,leftOffset:a||"-100px",topOffset:n||"-100px",src:"small"===o?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAALNJREFUOBGVjtENgzAMBVHVf0ZgBEagm2QERmg3YZSM0BEyAiOkZwkjFzkJsXSKY/s9exgqkXNehMpIvYU4CvWpQlc2g0b/FSijqiUv7PHLCBYj1vTeFYf4qyrzSq1sQnOGCK2IDMzn7Xwm2KA3NgTTA6fXwWl6M/nX4bbCDq2QmdVdQmOEN3hGUpPe6IptkaEA1wh2ppmjTsYhNQXXAcTBGPRtVzMMkqB/7316RVP7mNxNf+b7XOY5XYVjAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAABGdBTUEAALGPC/xhBQAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAhdJREFUaAXVls1twkAQhe2IOyVwiXKGCkIJ6YCksriElEAqMOcIiRIoYTNjM9Jkmay97DywV1rt/8x71jeCqgK2EMKOOzBF9YQMTrHXlw5OAwpPX//EHRQeG5aEL6lLW6KyIRF6U6L1XG2XT5EGmH9pei570x6JnZPww/Npq43UkWDNv/iA1AEKIYt5ay+ynr9EGbCYt/byFd/jBTMv3KhxHnVAgi3+xYd7HSAQSrGeOrsJDoSBFOups5sMuD8iVk7CizFOuw7a9rgzRP/Z4jueX80NoV5YaIbFhcbThIuB8eLFnp+JYgP54n1N1BIuZySoX+n+VvWc5/HdPW10va7r7/hwaD3KgLPgIU2dGbq0H2PINHBnwUWGOgMTE5xlaDEz8WxuKw5Je3WF0EQN7Ul01+O6uDIg7mR8kKFOLGkYLORBA2JERpCh0YJFh4zZBuShjG3781lV9bus1+tnmZrj4XBU+6HZbF4+1Eb2tPiXuBcw5j9QrK1cPEcsNsBB8k34iOfcro1xohpJth4517S+wUj9OeHg7JvNCaFI1Fe01svUmb43eu5SA1G2Q7TWy9SZvve4OeGzSiC0epyyjMxkwKoDd/5ZEgIhjmuxbu3x3aKGMmCxbu0ViYc9/qcO5sG/fJWoDiD8cy4UQhxbM6/nfObWkAY083ruJh4aKKqDefEvX+ZSBzD+Oc9CkoFGGPuiF20Azv4vTsjpGf79IEIAAAAASUVORK5CYII=",variants:E,animate:r,onMouseEnter:function(e){return v(!0)}})},N=Object(C.a)(w.a.button)(r||(r=Object(O.a)(["\n    background: ",";\n    border: 0.16em solid rgba(255,255,255,0.35);\n    border-radius: 2em;\n    box-sizing: border-box;\n    color: #FFFFFF;\n    font-size: 2.8vw;\n    font-family: 'Roboto',sans-serif;\n    font-weight: 300;\n    flex-wrap: wrap;\n    height: 2em;\n    margin: 0.5em;\n    padding: 0.3em 1.2em;\n    position: relative;\n    text-decoration: none;\n    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\n    text-align: center;\n    transition: all 0.2s;\n    z-index: 1;\n\n    &:hover {\n        border-color: ",";\n        cursor: pointer;\n        font-weight: bold;\n    }\n\n    @media(min-width: 768px) {\n        flex-wrap: no-wrap;\n        font-size: 1.9vw;\n    }\n"])),(function(e){return e.bgColor}),(function(e){return e.selected?e.bgColor:"white"})),G=function(e){var t=e.color,n=e.isSelected,a=e.onClick,i=e.onComplete;return Object(x.jsxs)(N,{bgColor:"transparent",selected:n,onClick:a,children:[n&&Object(x.jsx)(w.a.div,{layoutId:"btn-background",className:"btn-background",initial:!1,animate:{backgroundColor:t,borderColor:t},transition:{type:"spring",stiffness:500,damping:30},onAnimationComplete:i}),"Click Me"]})},R=1.1/10*-.5,K=Object(C.a)(w.a.div)(A||(A=Object(O.a)(["\n    background: ",";\n    display: flex;\n    height: 100%;\n    place-content: center;\n    width: 100%;\n    z-index: 100;\n"])),(function(e){return e.bgColor})),P=Object(C.a)(w.a.div)(s||(s=Object(O.a)(["\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    place-content: center;\n    width: 75%;\n\n    @media(min-width: 768px) {\n        flex-wrap: nowrap;\n    }\n"]))),Q=Object(C.a)(w.a.button)(u||(u=Object(O.a)(["\n    background: url('./images/white-close-btn.png');\n    background-repeat: no-repeat;\n    background-size: contain;\n    border: 0;\n    color: #fff;\n    display: inline-block;\n    font-family: Arial, sans-serif;\n    font-weight: 300;\n    height: ","rem;\n    left: 0;\n    margin: 1rem;\n    position: absolute;\n    top: 0;\n    width: ","rem;\n\n    &:hover {\n        cursor: pointer;\n    }\n"])),2,2),H=["#ee4a4a","#bc74bb","#86aedf","#5bbe87","#ffb057"],U={open:{opacity:1,y:0,transition:{duration:.5,type:"spring",ease:"linear",bounce:.1,restDelta:.25}},closed:{height:0,opacity:0,y:"100%",transition:{delay:.2,type:"spring",stiffness:50,damping:10}}},D=function(e){var t=e.clearSelected,n=e.planetSelected,a=e.addStars,i=Object(b.useState)(H[0]),c=Object(f.a)(i,2),o=c[0],r=c[1],A=Object(b.useState)(!1),s=Object(f.a)(A,2),u=s[0],g=s[1];return Object(b.useEffect)((function(){g("base"!==n)}),[n]),Object(x.jsxs)(K,{bgColor:"black",style:{height:"12em",width:"100%"},animate:u?"open":"closed",variants:U,onAnimationComplete:function(){return!u&&t()},children:[Object(x.jsx)(Q,{whileHover:{rotate:90,scale:1.1,y:"".concat(R,"rem"),x:"".concat(R,"rem")},transition:{duration:.1},onClick:function(e){g(!1)}}),Object(x.jsx)(P,{variants:{open:{opacity:1,y:0},closed:{opacity:0,y:"100%"}},children:Object(x.jsx)(y.a,{children:H.map((function(e){return Object(x.jsx)(G,{color:e,isSelected:o===e,onClick:function(){return r(e)},onComplete:a},e)}))})})]})},q=n.p+"static/media/earth.ce252f74.png",$=n.p+"static/media/background.5c5c02fc.jpg",_=n.p+"static/media/jupiter.a6ebc2b3.png",ee=n.p+"static/media/rings.f59db321.png",te=n.p+"static/media/blue.73f7c10e.png",ne=["Galactic-Renaissance.mp3","Jungle-Loop.mp3"].map((function(e){return"".concat("./audio/music/").concat(e)})),ae=["data:image/png;base64,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",_,ee,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAX9klEQVR4Ac2deazdxXXH57792e/ZeMU2MZiH2Q0ObULLEnCgQMMSNUuRIkWplAapVVpUtSqLWqWI/BMVRIiSEEWkQFpUSpKWFIVATUJQoIGUAKE1NrYB82w/vC9v39+v5zNzz/3NnTu/u737Hh647zfLmTMz3zlz5szy+zlnTlB317e/l6xavtSsWbbcdHctMAs7OkxTc860tbSYsfEJMzE5ZfqHhszhY/1m35Gj5o5bvpA7EZtyQlTqvoceSy6+8GzTs2a1yeWaZolTYg73D5j/eXO7+dPP3PSBt+8Dq8APn34uuWTjuaYplzP8NyOwUhn7Iy7/89FOksQGearfT1e/pKrX+t7pe99c8ZHf+UDaOq+FfvtffpRcf+XvmY7WtgIAgqRpbm42LfLj2dTkJDhJplMa62vKg0pXGDMjjxn5Mz09bX82soo/v96yzfzRNZvmrd3zUtCPN/8iufiCc6145hIpUkBtFV3aIj9ARVp9iXR+BySYubCqjpkg7NIVaEAv55BuGt138Ij5yMbz57z9c1rAvz/zXHLpxvNtexm0gNnWCrCtBRWQy7nhnMs1FyQUQBVw8PIBT+gg6xyQYXh6OjFTU1OF/HnizMfeQ4fNRy+cO6C1tpkVqCfh6488lvzxtZsK+tUC29ZmJRYNgMSWumIVoAArHRLqpDNLklPJJi8gV5JmeOe1unlt+9vmxk2XxyqmVajr2XCG//fWzmTZ4m6pTM7q0472NtPa2ir+rKJCYJWudKg7nZtKt7Y47AwNVwsyfACaTnzwiZ+au//yS1oJLaLuZ8MYfeORf0tuvu7jtqpIaKtMZB3YripwkSo6IJQglUBHWgow8agMgFOnYGaFqwXZSTJikZitu3abqy+9uCHYNITJL17+TXLOaWttG1EHANvS0pShChSK6iXX5XAdAaCqLiqBq+mArH4tvdJzaHTUnNmzbtb4qPhUKi8z/a2d7wi4H7LpbaJnFyxYYFVCXM86NjTWb7DvzyoIGqcipkusDvKEPPwwnV6r6+rsNH379iW33/eACnetLCz9rHqod09fwtIV19HRZgBY7VgbGfkTzvo+EBFyAc5VcXx8vGDvkgcpbm9vrxpsOqeaSS+sA2X96LkXza2f/2xdWNWViUr0vX8gaRITi6UtKqGtraWCSlAp06EeLiTCpqX0IbhQMuwBeeHChUUZww7zw77uLspUJpBgRsr/z770mvmTT19fM151qYi+ffsFXMytJtPZ2S4qwS0WytTTG8JMXvEJzM/vJLepoBZIc2C5/IzbSQFZQSPNBzOlx+dcObWlNOGThRH/XXPJReaRJ56pWV3UDPDevvcTmZ6stHaKntLVWFgxP+w3PAaET4vfp9dh7cf5NEhxLM2Pw8+vHoDTujWZa39/o/nmoz+sCeSaAH5PdG5zE9LaLJLrwEXn+o3xK4QUxtNSqtQHH+gZhapGHCiOh0quSHWeL/GVdX5NeKTVCXzUSix78+k/+Jj5u/u/WzXTqnXKFllALJUFBMMFcJmZkd6s4e6AopZq3+LPdim9o/E7ZlRMJjZ/iBNILQF6Genu7uoqSKafB6IwTBwSPxtHDYSxWbNmdVXYVSXBTz//oqzOFllwsRQA1y0gYrrUSaIDHnBTiYw3TOnT1BAYygRYfk6SHHh0tA77ME8snMYlZpDN+iNHzNFjx2TzfhLYjJ3Q0mpEfVYjy9zz9q7eqqTY2VhRVi7yrm89mGw8e70NACyNpVGxpa9rQFquC5fv6LTRrrxYGDWwQMBE+lQCsR6qATfkt//AAfPee732VCRfouWzYvly09NzuukQ068at6Cj3Tz57PPJJytsfZZvvZTU17cvUT2njUJ6NS6tDJIIuE6qw4aldOpTeg0XD+k0f+kowXJId9ni+TU25WPMO+++a3bv3qtJJU/2TC68cINZKEdUdlu1hALLyc0ro2NjZnh42PzzT54z99zxF5k4llUR//2b3xbAxagHVDbCQnBphN8Q3x+po6X1aWrJDy26189PGWE4jDsgkrtv34FYdQpxk6Iqtm7dZmZkyzPLUQ6jaGRkxJJ8/vpNWaQ2vizAPaesckQCLL3rGlFceNqw/CxvpTi7zFQnx+lDfiEn9nvLTYjQwyPl48K9Irl+XMhXwyOjY4bOyHJMcoMiucorJ9g8/pP/KgbFy5wJ8K73dks1neQDLo7hoXqPsBaCHxeGXWz6N0yvFE5zOh+So3YxMeQvx0PTGcpqdYQ8S8OJOSKTX5Ybkw5A0n133jq30eXHqT8K8De+/3iCsgdeekgBdo0hS3n9qcz9Z6nkwj0tPgXKSbafFz86d2qqVDX4dCmPNBbLAH2pYKcpcR9WwtjYREkiIjolHTwsqsGJnSNR/89efDkqxVErAmNanbN1NeSefkN8fzFVGnI0WhWV9DCc0oc+8k9NpfZrrEw/zvdLaXbOIK44PiwlDWftvg2JaZflVp60OJqUilA++esP/6tdrSl1m6gHVQuukjTU2behLtQ87qmSDpCuGJc/DGvHxyWXMiYn0+VwDCQ/zvdTj5ws7LvEpAvjXR1L/1KbLrEiQoea0X2PMI0wuvnnL7ykjSmQlEjwp66+ojAEnNXgzBKtoD6VA3pxTIaggoCVkZ5mpP0X5gvDys9/QjMpN3iUVp/Q+H7NkxWHilu2bJk5fPiwkmY+EaZVq9zkrkToXNpYzqFaViwpleISgNvzExrMdKi4iiNhNAz9KxdFRCn29/cblrEuPh2CSeKGEnbzYpbXoB7Vt+R0fPH5DmuBzqPsGHA+Lf6QJgz39KyT+h63HRbm9cNrVp9suhd1IZLWTUs7WfVVciKGluSxJ59OPvfJT9Bg61IRk+CvXv/fIhEHYL+i+PnRmwcPHrTgapzS+WF01v79B+3kRGmaZkvO+AMNQ7EcuFqWsqgUhq6js81s2HC+3bvWfOFzzZo1Zv369UXRtGFmpgiWovQwsEE60ncFpIl8f98Bu3OgBKz1xYiwTvXt5OSE2bunz3QuKN0H8AGkSrbhAhgTJcPOSXJcYpFwQFVgKbQScGF6LA9xvsMSwM7FFENQmmR3sLu726xedbJZtGhRgRSdOiommS4oCgkVPLT7oad+Zu6//VaLbUFF3P3AwwIuySnm6OD0CpOLp3JsdE9Lz+rSWRvqP32A0WHHZFNl6dKl0eqRb2pqsmDjKh+fOIwLw9DG4nwe+BmVSOop8sMBJPozdNPSxpERp/7CtPJh2Tf+6EZzf56ooCKuu+R3bVF+ZirM3q/TnzO2N4el0JlkxoLcPzBgxicmbLfMCK2CahsqYWmxZUd4YHBQlqDpcTsJ6HEmx4mJ8pdEQuBi4TDOFhz5A5Q+nCG41Ji2DAyid139I2wyo+C9duXJhfSCBK9dtVIKhmFaPEParzj6iLD+AGhQgEMFsMvGbE1uzeM/UQyDw0N2/5Z8ykNVDzVSevzq/DjfH0vXuNk+aRN1rMcxWv2VXgHgsCdhrg3S54jd+E4B1ngYTiDJAj6dUmze5fK6ddIw7Do7nI0ppOLSziQUOvghTXQsEx/DG7Vk+Quxlh/mm00Yq8gBpIO7OqBH5FI4Ol075mvfeSi548+/mLMAP/DoD6JjAWI3MVFlN7vTKP9nU7w48gCGNl4FAV2uhrqmKRBhWHnyBFztPCZA+C9evLjAX3k04gmwR+TG/PjEuGmxB7qc3JQXAlScXYSI2qQditf5PafaKlmAN5zVE62fy5BiryqD+PAHAxeHWsGvYaUVeQ1UjuYJC4ePOhqtYZ5Wurx0pZvtc2pm2hw6elT2GoYtK2aLcZl4ly4+KQ9aKMk5a6YOewsQBRcGXFzB2XFw+imn2ED4R8VdG2iPbqRxhGv9MQK4P+E75atxytMPFy920sWP0jTiSbmDA0Oy41a8yUO8jrqwnOHhEWvGhfEaVrm3ADdn3HxkSLo+cKs3XdMrEMVPJNdNisXxaWecJEMbp+k2kP9DnDo/vUsONRVknovEZm2kk9rZ/d3p6RnTIjZx6Nw6wJfenBkS+3hU1MiMohhmkrC2xk1y9vZKKTUSzE9FH0O8Rexg1YkKhHu6ShTHpeB2dy+0p9Gkh86P8/3QMaGhc0trF3KpL8ykxl4xR/KMMNSCSq2envucaXulfQnoMRpuu/dbiQWYHacsR2GYX9rw1bIi6+3dXZBCJ7XFUgmt/uhLDkhPO/XUAg8tS3lmhW288JoLcJHciYlJu5hw/BEkY07q7ipYAnRu6hjFYtHk917S+LgPMVohJ/FNd977gMx/2U6Xr0qBJK5evaoAoAKpTyRe/TwBmNNazvR859JcjNL76fh9mjBttmH2l7FQYg5gi8F1VL4ZFsvnx9FpS6WzWhYulBNUPyXiR4qZ4HBILEveFnnXYs+evVYKwFFB0qU1YYbYutNOs7arD5bvjxQ3p8DS5QgBi4lK9fDrlogYjoyX37L06fG3yh3plu4FxTN7SESYimAe+acb3dI7555zjr244bYt3U0bXmoB2KVLlljdqfmVr98o3x9L17hGPilzQJb4gFyLY5MrVt8sHmwqNUkRLabJDeNKqyoqhCQXQBZJRmctE2nmFxYehqmIH+f7tZKxOE2b7ZNW4pBcZx25cLV/x70jq3J5aAM/a08LPr4WL5fPpgEykhz2fgiMH9YCw7iwMD89TGtUGJ1rFyp1MES4qq0jlkmS30NumcGYQwlrF1conEIoLDYRVFOBkCYMVyi+6uS0OU4VDA4O291Aqb61atgHZgSmMpatMqgjUq/marlKjMuJ9KTsDkI7LavDlgEpWG69lcsTTUOK+QF0VsEheJXC0YJmEYm0jsnE1C8vhw/L4gBHHbS+qLvOtvYSC8cvEvqw3n6678dGxqa2TvKNjE86AyI8yfAzVeun0lrxME+sgrG4MF89YSQX3uhaGsyKa2Sk/OzPCrFbTmgK80tRwe6k5dhAf1FsGJiWOxuoIG1XTmz/nXv3ySQnrnb5Ddm7Rinz0tT5i2EoY9UwupAmrkJZ9ZfRSOpMnuOywc5WaGebu8Xk1zhLcKAhPz921IqcxA1Ix9pJLsll65+iTCdwAMnFNFJwx8SsYs/AugxwSfPBAyROV4odatDFhAKk4eGhEduhGoaaqe3w8X4HcC4p3eQoLuTED9E4PYlANQwPy3laOtNV3QCGuW/GKWioEb8zNJ5OCa0qCmuSee07d98hu8rixmRNXslZ3SZE+qxEP9/pqAOsGyR3UA8ry0huVv2QvILkC5GC2tZcbNESPyoqYMq7deTz1L61ubb19vppmX4kg2NsGjJXTq2TWvlTL0CuV3L98rA+wjZyW0mlFtr0aMnPmfpl49YG7CS3Zcfb5qIzz0hTIz6Gjm7T0RjuEtg3LSO09UShP/2FABLCpMMWopUiUQFZjmsEw2OjbkKDqA7JDXmPi2T6VkWbTH7Nooy5hILph71bzh0eGLTJVoJv+9IXKlZJwVWm9GCjHFLL5OSvsojTTvUlJ1YmewvWFMvug1i2snHc0whdh+yxMErGxvK2bkjghd/Kv6pQUCyc3tY1K3hM6/VyfzecKFT3MVpiva+1HZJJZkBmcetihHVWijtpoWPbhj3kcpOn1vveO//a1qYA8Jadb0u+7BqyQ+a7MOyn1er3Z+0wbzmdjNXAyGLzvNEuHDVILaOWrwkoiLEyw3zuyEgor7vy8hwrulgm4jiPa5c9YfQdJxx81KgRjgLLVZgy/HToAR1wdSLKFgtyz97ZO2qiGpC/Fnkvu1O2eLEgQjApSaYOs0NWcOpqQglgW+TXaMdkGep4LUPfy9Mw0u7v5wK+HooqTSOeyhPdjt71B7c9nRE71+6aBZMvAnCbXDjROhRUBBGvbtuu8ZlPchZyR6gowP6kYMCI9bKfDV7cosda8Gnh0cQegZwqq5uQfQVdqWkcJyytzTXJiWaNPrUObcITky/r9Lhdvo+BJNPB/gibDgAvqtlNV12Rk3fJaFvdDkmkZxVcCkfyeVNTj51izDmeRzKQFhqJCmoX0PkyII5Lh85yKa0e/ClHwYnxrzZO+WDz24k340oD/KhvS3Nr0drg1R3vFBVVIoxvbt+ZLJHj+ZKEomylAawQ3cEqTXUxTIzYtrhq+dsb5p6+dZxK/6In/Vs2pRSVY+ggfnQyk1ktDutiQvLd+IlrippWpCJg+P0nN9fCt0DrNkrKG9+YXFm6tsDI82AXs5frv2HkJRd5Ozv5wlVJc4poygUAFonF9rY6thxxJA01t//4QElKEdqauuOdXUl3lT3IgEUdcMG6GscQ5AyPZ8xJM60OHxH9V0tnwIt6sO1Yj6qYkM1xVBB6NZxYY/UsjZs2my4v/bBdtMvPOuP0eOtLudoYO8tmpIXRSIm/YgvTua3YL5JQK7jwsRvnsoTP6rywLMJ0BiMLcJlokd5a8ivPnXvir99GASbT/iPHKV7zZz7pCSSnWkflsaXVUQI/bs0PyQVtTLBa+CkffbLrtWRRd9E+gqb5z4JKkCMzVBBv2HfI94dqdtJBcsJpbvncZ6JCmQnwRRvO5sbavDhGwDHZnObL1o1w6GKuQC2SCRULI+YYRUhue3urWVxFh8R4EMcdtF/+dmtWcvnJnI8oX/bhc/Nsoh1kpY/hVXJkklmksW/z2FWhNJJ3f3VFVibLrJKQVt67Qz1NibRRX/yzmRS1QsPC64ZrroqDI0SZCcpgx7u9SZcMHXoq5pDyWic5bmliVnFbZv5ckz0EHRp1xzv16NlYXTddfkkcmDxxpopQZmf1nJaFrSWBO1+vzt78oQucsmFY0hno2fkEF2kdEP0+KLfXkeaGgCt8XnzjTYUp81kRYHL+x7MvZDLQBN0c17A+pW1iEUyYY7IBPSmb1brG1/S5fg7LLpgtWzq3kW7/kWPm779c+TO4ZcXbr9Bm+R7ChjNOz1AUKqPsl3IPYUR+43ZFNMntFln2Lsh/R9jnWd6vfZ811WrVS/dt4TsqKyt0LRLbUCf8xuUF9etkW6EavlURKaPXtmxNVstb66Gzk4cMfVQAb8e7ScvtDegnxMM8lcNNFqCBIfZ85UBT+GLKcWyDrbpQFkLsX/AZXd9x7I4NTcc2TB14BczIqwZXXXlZ1bhVTahlvLFlW7JAJj0ut6FPAZdfo9y4SN6BAwfNwUOH7aRUji+69CS5Rb5yxQqxYxfaETPVwLoUly0jQf7f9LFLa8KsJmIt8KVXXreWhYYb8eQllD759y769u/HbhdXeWjTseRjo4VV2Nq1a+RTBI19SabQNlENtYJL3roAJuOvXnlVQOZ2fGUgoC/n2Hd9a8dOK4Hl6DQNFcT3e2L284qVy83aD50i3xqqu2lajH3mBFhuon78itokV5nMqhZ8QmVl5Csfyrya5xFZwe2U80B0W5bThcK0vEzOsrb8xJWThUyX6TljXUMsFrZLr76iep0btmFWAMPsB09tTs45VSTGvpVPTPErpcTEXZOYT8fN9rd2luhwAOT+wYxMVEgqqqA8qKUlLBJVccb6Hlmt1ddEJHdQFkM3Xpu9SisttTSmeAouTa8Yc/MN1+aefOFlZ5KJFVHtRs24XN7YLv92BRLJj9mfNy05A7NHNdK4cdlChF+t4FLpAXlzc++evRXrn0Wwa/+BWYML7/q6N6NWz/z8efu9NUFEOMsC0PuRxQGFZBoruWxuz7Vbf2aPvIyTfskkszypsxzvyVeqjHlKPid+z23Z36PM5BFJaCjA8L//nx5NPszL5QKuSl64ND0qq6Bdu3oj1Wl8VId8JfW88862H9gry13QPXz8uPnsTX/YUEwaysxvwBM/3ZzwIp6zMaSYfEkI97at22QRUfn6kc9vNv518unDZctLF0gIANXC1PvxL39tvvmVv2k4HrPWwVkN/9T11+Ye3fy8GRU96ptyQ3KAOZ/gUr9Dh46WVFNH14tvbDVXy79hNBfgUmjDe6ykJRLxZ//wteTGyy423bIC7N29Txp8KEY2p3EXXHCeac3/UxR8vhZgv3LrLXPe/jkvIETtzq/ekyxntYWumEd3uqiJnNzxfeaV181377p93to9bwXFsPxbkexVS+SLIv5q0JscY3kqxbF5ba0BCKUTB2WjaOue983j3/7HD6StH0ihMZBu/vLtyboVS80KWYXN5ijnmHyJpE8ObB++76snRNtOiErEANe4G774V8nCDrl0KNuSnONRYTZ3ZIEnE+iE+c8H7zuh2/D/Y+MNgLxrerEAAAAASUVORK5CYII=",te],ie=C.a.div(g||(g=Object(O.a)(["\n    background-image: url(",");\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: none;\n    width: 100%;\n"])),$),ce=C.a.div(l||(l=Object(O.a)(["\n    align-content: space-evenly;\n    align-items: center;\n    box-sizing: border-box;\n    display: flex;\n    flex-wrap: wrap;\n    height: 100%;\n    justify-content: center;\n    padding: 3em 0;\n    width: 100%;\n"]))),oe=Object(C.a)(w.a.div)(p||(p=Object(O.a)(["\n    bottom: 0;\n    left: 0;\n    height: 100vh;\n    position: absolute;\n    width: 100vw;\n"]))),re=function(){var e=Object(b.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1],i=Object(b.useState)("base"),c=Object(f.a)(i,2),o=c[0],r=c[1],A=Object(b.useRef)(null),s=Object(b.useMemo)((function(){return new j.Howl({src:[ne[I(ne.length-1)]],loop:!0,volume:.75})}),[]),u=function(e){return a((function(e){var t=g(e);return t.pop(),t}))},g=function(e){return e.filter((function(e){return Math.abs(new Date-e.timestamp)<6e3}))},l=function(e){r(e.currentTarget.dataset.name)};return Object(b.useEffect)((function(){s.play(),s.fade(0,1,200)}),[s]),Object(x.jsxs)(ie,{children:[Object(x.jsx)(oe,{ref:A,height:"100%",children:n.map((function(e,t){return Object(x.jsx)(T,{top:e.top,left:e.left,size:e.size,destroyTime:e.speed,destroy:function(){return u(e.id)},containerRef:function(e){return A}},"star-".concat(t))}))}),Object(x.jsx)(ce,{children:Object(x.jsxs)(y.a,{children:[ae.map((function(e,t){var n="planet-".concat(t);return Object(x.jsx)(z,{img:ae[t],handleClick:l,name:n,isSelected:o===n},t)})),Object(x.jsx)(z,{img:q,handleClick:l,name:"base",isSelected:"base"===o},"base")]})}),Object(x.jsx)(D,{clearSelected:function(){return r("base")},planetSelected:o,addStars:function(){return a((function(e){var t=I(5)+3,n=Object(v.a)(new Array(t)).map((function(e){var t={speed:I(6)+6,size:L()?"small":"medium",timestamp:new Date},n=L()?"top":"left",a=I(40);return t[n]=a+"%",t})),a=g(e);return[].concat(Object(v.a)(a),Object(v.a)(n))}))},destroyStar:u})]})},Ae=function(){return Object(x.jsx)("div",{className:"App","data-testid":"app",children:Object(x.jsx)(re,{})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};h.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(Ae,{})}),document.getElementById("root")),se()}},[[95,1,2]]]);
//# sourceMappingURL=main.8d4d23d6.chunk.js.map