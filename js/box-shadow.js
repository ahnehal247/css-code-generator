function toggleBtnClickm(e){var t=document.querySelector(".mobile_sidebar");e?t.classList.remove("mvSideBar"):t.classList.add("mvSideBar")}function mySnackbar(e,t,n){var r=document.getElementById("snackbar");r.style.backgroundColor=e,r.innerHTML=t,r.className="show","none"!=n&&(n.innerHTML='<img src="./image/logo/copy.svg" alt="Copy">&nbsp;Copied !'),setTimeout((function(){r.className=r.className.replace("show",""),"none"!=n&&(n.innerHTML='<img src="./image/logo/copy.svg" alt="Copy">&nbsp;Copy')}),3e3)}function showhide(e){var t=document.getElementById(e[0]),n=document.getElementById(e[1]);"0px"==t.style.maxHeight?(t.style.maxHeight=`${e[2]}`,n.innerHTML="︽"):(t.style.maxHeight="0px",n.innerHTML="︾")}function ctrlShiftKey(e,t){return e.ctrlKey&&e.shiftKey&&e.keyCode===t.charCodeAt(0)}function showhide(e){var t=e.nextElementSibling,n=e.getElementsByTagName("span")[1];"0px"==t.style.maxHeight?(t.style.maxHeight="400px",n.style.transform="rotate(0deg)"):(t.style.maxHeight="0px",n.style.transform="rotate(-90deg)")}document.addEventListener("contextmenu",(e=>e.preventDefault())),document.onkeydown=e=>{if(123===event.keyCode||ctrlShiftKey(e,"I")||ctrlShiftKey(e,"J")||ctrlShiftKey(e,"C")||e.ctrlKey&&e.keyCode==="U".charCodeAt(0))return!1};var noofshadow=1;function sliderchange(e,t,n){"textcolor"!=t&&"checkbox"!=e&&(document.getElementById(t).innerText=`${e}${n}`);var r="";for(let e=1;e<=noofshadow;e++){var a=document.getElementById(`active${e}`),l=document.getElementById(`inset${e}`);e>1?a.checked&&(l.checked?"none"!=r?r+=`, inset ${document.getElementById(`horoffrng${e}`).value}px ${document.getElementById(`veroffrng${e}`).value}px ${document.getElementById(`blradrng${e}`).value}px ${document.getElementById(`spradrng${e}`).value}px ${document.getElementById(`clrpickrng${e}`).value}`:(r="",r+=`inset ${document.getElementById(`horoffrng${e}`).value}px ${document.getElementById(`veroffrng${e}`).value}px ${document.getElementById(`blradrng${e}`).value}px ${document.getElementById(`spradrng${e}`).value}px ${document.getElementById(`clrpickrng${e}`).value}`):"none"!=r?r+=`, ${document.getElementById(`horoffrng${e}`).value}px ${document.getElementById(`veroffrng${e}`).value}px ${document.getElementById(`blradrng${e}`).value}px ${document.getElementById(`spradrng${e}`).value}px ${document.getElementById(`clrpickrng${e}`).value}`:(r="",r+=`${document.getElementById(`horoffrng${e}`).value}px ${document.getElementById(`veroffrng${e}`).value}px ${document.getElementById(`blradrng${e}`).value}px ${document.getElementById(`spradrng${e}`).value}px ${document.getElementById(`clrpickrng${e}`).value}`)):a.checked?l.checked?r+=`inset ${document.getElementById(`horoffrng${e}`).value}px ${document.getElementById(`veroffrng${e}`).value}px ${document.getElementById(`blradrng${e}`).value}px ${document.getElementById(`spradrng${e}`).value}px ${document.getElementById(`clrpickrng${e}`).value}`:r+=`${document.getElementById(`horoffrng${e}`).value}px ${document.getElementById(`veroffrng${e}`).value}px ${document.getElementById(`blradrng${e}`).value}px ${document.getElementById(`spradrng${e}`).value}px ${document.getElementById(`clrpickrng${e}`).value}`:r="none"}(document.getElementById("samplebox").style.boxShadow=`${r}`,document.getElementById("preview").style.backgroundColor=document.getElementById("canvacolrrng").value,document.getElementById("samplebox").style.backgroundColor=document.getElementById("baccolrrng").value,document.getElementById("samplebox").style.borderRadius=`${document.getElementById("bordradrng").value}rem`,document.getElementById("samplebox").style.borderWidth=`${document.getElementById("bordwdthrng").value}px`,document.getElementById("samplebox").style.height=`${document.getElementById("heightrng").value}rem`,document.getElementById("samplebox").style.width=`${document.getElementById("widthrng").value}rem`,document.getElementById("bordtras").checked)?(document.getElementById("samplebox").style.borderColor="transparent",setcsscode(`.cssgenerator{<br>\n        <span class="cssproperty">box-shadow:</span> ${r};<br>\n        <span class="cssproperty">background-color:</span> ${document.getElementById("baccolrrng").value};<br>\n        <span class="cssproperty">border-color:</span> transparent;<br>\n        <span class="cssproperty">border-radius:</span> ${document.getElementById("bordradrng").value}rem;<br>\n        <span class="cssproperty">border-width:</span> ${document.getElementById("bordwdthrng").value}px;<br>\n        <span class="cssproperty">height:</span> ${document.getElementById("heightrng").value}rem;<br>\n        <span class="cssproperty">width:</span> ${document.getElementById("widthrng").value}rem;<br>\n        }`)):(document.getElementById("samplebox").style.borderColor=document.getElementById("bordcolrrng").value,setcsscode(`.cssgenerator{<br>\n    <span class="cssproperty">box-shadow:</span> ${r};<br>\n    <span class="cssproperty">background-color:</span> ${document.getElementById("baccolrrng").value};<br>\n    <span class="cssproperty">border-color:</span> ${document.getElementById("bordcolrrng").value};<br>\n    <span class="cssproperty">border-radius:</span> ${document.getElementById("bordradrng").value}rem;<br>\n    <span class="cssproperty">border-width:</span> ${document.getElementById("bordwdthrng").value}px;<br>\n    <span class="cssproperty">height:</span> ${document.getElementById("heightrng").value}rem;<br>\n    <span class="cssproperty">width:</span> ${document.getElementById("widthrng").value}rem;<br>\n    }`))}function addshadow(){noofshadow++;var e=document.createElement("div");e.className="fsparent",e.id=`fsparent${noofshadow}`;var t=`<button onclick="showhide(this)"><span class="shd">Shadow ${noofshadow}</span><span>︾</span></button>\n    <div class="childfirst" style="max-height: 700px;">\n        <br>\n        <div class="checlboxdiv">\n                <label><input type="checkbox" class="activec" id="active${noofshadow}" onchange="sliderchange('checkbox','checked')" checked> Active</label>\n                <label><input type="checkbox" class="inset" id="inset${noofshadow}" onchange="sliderchange('checkbox','checked')"> Inset</label>\n            <button class="button" style="background-color: rgb(237, 5, 5);margin-left: auto;" onclick="removeshadow(this)">Remove</button>\n        </div>\n        <div class="mainchild">\n            <div class="ch1">\n                <label>Horizontal offset</label>\n                <p class="horoffnum" id="horoffnum${noofshadow}">0px</p>\n            </div>\n            <div class="ch2">\n                <input type="range" class="horoffrng" id="horoffrng${noofshadow}" max="100" min="-100" value="0" oninput="sliderchange(this.value,'horoffnum${noofshadow}','px')">\n            </div>\n        </div>\n        <div class="mainchild">\n            <div class="ch1">\n                <label>Vertical offset</label>\n                <p class="veroffnum" id="veroffnum${noofshadow}">10px</p>\n            </div>\n            <div class="ch2">\n                <input type="range" class="veroffrng" id="veroffrng${noofshadow}" max="100" min="-100" value="10" oninput="sliderchange(this.value,'veroffnum${noofshadow}','px')">\n            </div>\n        </div>\n        <div class="mainchild">\n            <div class="ch1">\n                <label>Blur radius</label>\n                <p class="blradnum" id="blradnum${noofshadow}">15px</p>\n            </div>\n            <div class="ch2">\n                <input type="range" class="blradrng" id="blradrng${noofshadow}" max="100" min="0" value="15" oninput="sliderchange(this.value,'blradnum${noofshadow}','px')">\n            </div>\n        </div>\n        <div class="mainchild">\n            <div class="ch1">\n                <label>Spread radius</label>\n                <p class="spradnum" id="spradnum${noofshadow}">-3px</p>\n            </div>\n            <div class="ch2">\n                <input type="range" class="spradrng" id="spradrng${noofshadow}" max="100" min="-100" value="-3" oninput="sliderchange(this.value,'spradnum${noofshadow}','px')">\n            </div>\n        </div>\n        <div class="mainchild">\n            <div class="ch1">\n                <label>Shadow Color</label>\n            </div>\n            <div class="ch2">\n                <input type="text" id="clrpickrng${noofshadow}" oninput="sliderchange(this.value,'textcolor','')" class="coloris instance1" value="#000000">\n            </div>\n        </div>\n    </div>`;e.innerHTML=t,document.getElementById("firstscroll").append(e),sliderchange("checkbox","checked")}function removeshadow(e){if(noofshadow>1){var t=e.parentElement.parentElement;document.getElementById("firstscroll").removeChild(t.parentElement),noofshadow--;var n=document.querySelectorAll(".fsparent");for(let e=1;e<=noofshadow;e++)n[e-1].id!=`fsparent${e}`&&(document.getElementById(n[e-1].id).id=`fsparent${e}`,document.getElementById(n[e-1].id).id=`shd1${e}`,document.querySelectorAll(".shd")[e-1].innerHTML=`Shadow ${e}`,document.querySelectorAll(".activec")[e-1].id=`active${e}`,document.querySelectorAll(".inset")[e-1].id=`inset${e}`,document.querySelectorAll(".horoffnum")[e-1].id=`horoffnum${e}`,document.querySelectorAll(".horoffrng")[e-1].id=`horoffrng${e}`,document.querySelectorAll(".horoffrng")[e-1].setAttribute("oninput",`sliderchange(this.value,'horoffnum${e}','px')`),document.querySelectorAll(".veroffnum")[e-1].id=`veroffnum${e}`,document.querySelectorAll(".veroffrng")[e-1].id=`veroffrng${e}`,document.querySelectorAll(".veroffrng")[e-1].setAttribute("oninput",`sliderchange(this.value,'veroffnum${e}','px')`),document.querySelectorAll(".blradnum")[e-1].id=`blradnum${e}`,document.querySelectorAll(".blradrng")[e-1].id=`blradrng${e}`,document.querySelectorAll(".blradrng")[e-1].setAttribute("oninput",`sliderchange(this.value,'blradnum${e}','px')`),document.querySelectorAll(".spradnum")[e-1].id=`spradnum${e}`,document.querySelectorAll(".spradrng")[e-1].id=`spradrng${e}`,document.querySelectorAll(".spradrng")[e-1].setAttribute("oninput",`sliderchange(this.value,'spradnum${e}','px')`),document.querySelectorAll(".coloris")[e-1].id=`clrpickrng${e}`)}else{t=e.parentElement.parentElement;document.getElementById("firstscroll").removeChild(t.parentElement),noofshadow--}sliderchange("checkbox","checked")}var initialcsscode=`.cssgenerator{<br>\n    <span class="cssproperty">box-shadow:</span> 0px 10px 15px -3px rgba(0, 0, 0, 1);<br>\n    <span class="cssproperty">background-color:</span> ${document.getElementById("baccolrrng").value};<br>\n    <span class="cssproperty">border-color:</span> transparent;<br>\n    <span class="cssproperty">border-radius:</span> ${document.getElementById("bordradrng").value}rem;<br>\n    <span class="cssproperty">border-width:</span> ${document.getElementById("bordwdthrng").value}px;<br>\n    <span class="cssproperty">height:</span> ${document.getElementById("heightrng").value}rem;<br>\n    <span class="cssproperty">width:</span> ${document.getElementById("widthrng").value}rem;<br>\n}`;function setcsscode(e){noofshadow<1?(document.getElementById("finalcode").innerHTML="Select atleast 1 Shadow",document.getElementById("finalcode").style.color="red"):document.getElementById("finalcode").innerHTML=e}setcsscode(initialcsscode),function(e,t,n,r){var a,l,o,c,s,i,d,u,p,m,h,f,g,v,y,b,w=t.createElement("canvas").getContext("2d"),E={r:0,g:0,b:0,h:0,s:0,v:0,a:1},x={},$={el:"[data-coloris]",parent:"body",theme:"default",themeMode:"light",rtl:!1,wrap:!0,margin:2,format:"hex",formatToggle:!1,swatches:[],swatchesOnly:!1,alpha:!0,forceAlpha:!1,focusInput:!0,selectInput:!1,inline:!1,defaultColor:"#000000",clearButton:!1,clearLabel:"Clear",closeButton:!1,closeLabel:"Close",onChange:function(){return r},a11y:{open:"Open color picker",close:"Close color picker",clear:"Clear the selected color",marker:"Saturation: {s}. Brightness: {v}.",hueSlider:"Hue slider",alphaSlider:"Opacity slider",input:"Color value field",format:"Color format",swatch:"Color swatch",instruction:"Saturation and brightness selector. Use up, down, left and right arrow keys to select."}},k={},B="",I={},S=!1;function L(n){if("object"==typeof n)for(var c in n)switch(c){case"el":H(n.el),!1!==n.wrap&&q(n.el);break;case"parent":(a=t.querySelector(n.parent))&&(a.appendChild(l),$.parent=n.parent,a===t.body&&(a=r));break;case"themeMode":$.themeMode=n.themeMode,"auto"===n.themeMode&&e.matchMedia&&e.matchMedia("(prefers-color-scheme: dark)").matches&&($.themeMode="dark");case"theme":n.theme&&($.theme=n.theme),l.className="clr-picker clr-"+$.theme+" clr-"+$.themeMode,$.inline&&M();break;case"rtl":$.rtl=!!n.rtl,t.querySelectorAll(".clr-field").forEach((function(e){return e.classList.toggle("clr-rtl",$.rtl)}));break;case"margin":n.margin*=1,$.margin=isNaN(n.margin)?$.margin:n.margin;break;case"wrap":n.el&&n.wrap&&q(n.el);break;case"formatToggle":$.formatToggle=!!n.formatToggle,G("clr-format").style.display=$.formatToggle?"block":"none",$.formatToggle&&($.format="auto");break;case"swatches":Array.isArray(n.swatches)&&function(){var e=[];n.swatches.forEach((function(t,n){e.push('<button type="button" id="clr-swatch-'+n+'" aria-labelledby="clr-swatch-label clr-swatch-'+n+'" style="color: '+t+';">'+t+"</button>")})),G("clr-swatches").innerHTML=e.length?"<div>"+e.join("")+"</div>":"",$.swatches=n.swatches.slice()}();break;case"swatchesOnly":$.swatchesOnly=!!n.swatchesOnly,l.setAttribute("data-minimal",$.swatchesOnly);break;case"alpha":$.alpha=!!n.alpha,l.setAttribute("data-alpha",$.alpha);break;case"inline":if($.inline=!!n.inline,l.setAttribute("data-inline",$.inline),$.inline){var m=n.defaultColor||$.defaultColor;v=D(m),M(),O(m)}break;case"clearButton":"object"==typeof n.clearButton&&(n.clearButton.label&&($.clearLabel=n.clearButton.label,d.innerHTML=$.clearLabel),n.clearButton=n.clearButton.show),$.clearButton=!!n.clearButton,d.style.display=$.clearButton?"block":"none";break;case"clearLabel":$.clearLabel=n.clearLabel,d.innerHTML=$.clearLabel;break;case"closeButton":$.closeButton=!!n.closeButton,$.closeButton?l.insertBefore(u,s):s.appendChild(u);break;case"closeLabel":$.closeLabel=n.closeLabel,u.innerHTML=$.closeLabel;break;case"a11y":var f=n.a11y,g=!1;if("object"==typeof f)for(var y in f)f[y]&&$.a11y[y]&&($.a11y[y]=f[y],g=!0);if(g){var b=G("clr-open-label"),w=G("clr-swatch-label");b.innerHTML=$.a11y.open,w.innerHTML=$.a11y.swatch,u.setAttribute("aria-label",$.a11y.close),d.setAttribute("aria-label",$.a11y.clear),p.setAttribute("aria-label",$.a11y.hueSlider),h.setAttribute("aria-label",$.a11y.alphaSlider),i.setAttribute("aria-label",$.a11y.input),o.setAttribute("aria-label",$.a11y.instruction)}break;default:$[c]=n[c]}}function A(e,t){"string"==typeof e&&"object"==typeof t&&(k[e]=t,S=!0)}function C(e){delete k[e],0===Object.keys(k).length&&(S=!1,e===B&&T())}function T(){Object.keys(I).length>0&&(L(I),B="",I={})}function H(e){J(t,"click",e,(function(e){$.inline||(function(e){if(S){var t=["el","wrap","rtl","inline","defaultColor","a11y"],n=function(n){var r=k[n];if(e.matches(n)){for(var a in B=n,I={},t.forEach((function(e){return delete r[e]})),r)I[a]=Array.isArray($[a])?$[a].slice():$[a];return L(r),"break"}};for(var r in k)if("break"===n(r))break}}(e.target),g=e.target,y=g.value,v=D(y),l.classList.add("clr-open"),M(),O(y),($.focusInput||$.selectInput)&&(i.focus({preventScroll:!0}),i.setSelectionRange(g.selectionStart,g.selectionEnd)),$.selectInput&&i.select(),(b||$.swatchesOnly)&&z().shift().focus(),g.dispatchEvent(new Event("open",{bubbles:!0})))})),J(t,"input",e,(function(e){var t=e.target.parentNode;t.classList.contains("clr-field")&&(t.style.color=e.target.value)}))}function M(){var n,r,c,s=a,i=e.scrollY,d=l.offsetWidth,u=l.offsetHeight,p={left:!1,top:!1},m={x:0,y:0};if(s&&(n=e.getComputedStyle(s),r=parseFloat(n.marginTop),c=parseFloat(n.borderTopWidth),(m=s.getBoundingClientRect()).y+=c+i),!$.inline){var h=g.getBoundingClientRect(),f=h.x,v=i+h.y+h.height+$.margin;s?(f-=m.x,v-=m.y,f+d>s.clientWidth&&(f+=h.width-d,p.left=!0),v+u>s.clientHeight-r&&u+$.margin<=h.top-(m.y-i)&&(v-=h.height+u+2*$.margin,p.top=!0),v+=s.scrollTop):(f+d>t.documentElement.clientWidth&&(f+=h.width-d,p.left=!0),v+u-i>t.documentElement.clientHeight&&u+$.margin<=h.top&&(v=i+h.y-u-$.margin,p.top=!0)),l.classList.toggle("clr-left",p.left),l.classList.toggle("clr-top",p.top),l.style.left=f+"px",l.style.top=v+"px",m.x+=l.offsetLeft,m.y+=l.offsetTop}x={width:o.offsetWidth,height:o.offsetHeight,x:o.offsetLeft+m.x,y:o.offsetTop+m.y}}function q(e){t.querySelectorAll(e).forEach((function(e){var n=e.parentNode;if(!n.classList.contains("clr-field")){var r=t.createElement("div"),a="clr-field";($.rtl||e.classList.contains("clr-rtl"))&&(a+=" clr-rtl"),r.innerHTML='<button type="button" aria-labelledby="clr-open-label"></button>',n.insertBefore(r,e),r.setAttribute("class",a),r.style.color=e.value,r.appendChild(e)}}))}function N(e){if(g&&!$.inline){var t=g;e&&(g=r,y!==t.value&&(t.value=y,t.dispatchEvent(new Event("input",{bubbles:!0})))),setTimeout((function(){y!==t.value&&t.dispatchEvent(new Event("change",{bubbles:!0}))})),l.classList.remove("clr-open"),S&&T(),t.dispatchEvent(new Event("close",{bubbles:!0})),$.focusInput&&t.focus({preventScroll:!0}),g=r}}function O(e){var t=function(e){var t,n;return w.fillStyle="#000",w.fillStyle=e,(t=/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i.exec(w.fillStyle))?(n={r:1*t[3],g:1*t[4],b:1*t[5],a:1*t[6]}).a=+n.a.toFixed(2):n={r:(t=w.fillStyle.replace("#","").match(/.{2}/g).map((function(e){return parseInt(e,16)})))[0],g:t[1],b:t[2],a:1},n}(e),r=function(e){var t=e.r/255,r=e.g/255,a=e.b/255,l=n.max(t,r,a),o=l-n.min(t,r,a),c=l,s=0,i=0;return o&&(l===t&&(s=(r-a)/o),l===r&&(s=2+(a-t)/o),l===a&&(s=4+(t-r)/o),l&&(i=o/l)),{h:(s=n.floor(60*s))<0?s+360:s,s:n.round(100*i),v:n.round(100*c),a:e.a}}(t);R(r.s,r.v),U(t,r),p.value=r.h,l.style.color="hsl("+r.h+", 100%, 50%)",m.style.left=r.h/360*100+"%",c.style.left=x.width*r.s/100+"px",c.style.top=x.height-x.height*r.v/100+"px",h.value=100*r.a,f.style.left=100*r.a+"%"}function D(e){var t=e.substring(0,3).toLowerCase();return"rgb"===t||"hsl"===t?t:"hex"}function j(n){n=n!==r?n:i.value,g&&(g.value=n,g.dispatchEvent(new Event("input",{bubbles:!0}))),$.onChange&&$.onChange.call(e,n,g),t.dispatchEvent(new CustomEvent("coloris:pick",{detail:{color:n,currentEl:g}}))}function K(e,t){var r={h:1*p.value,s:e/x.width*100,v:100-t/x.height*100,a:h.value/100},a=function(e){var t=e.v/100,r=e.s/100*t,a=e.h/60,l=r*(1-n.abs(a%2-1)),o=t-r;r+=o,l+=o;var c=n.floor(a)%6,s=[r,l,o,o,l,r][c],i=[l,r,r,l,o,o][c],d=[o,o,l,r,r,l][c];return{r:n.round(255*s),g:n.round(255*i),b:n.round(255*d),a:e.a}}(r);R(r.s,r.v),U(a,r),j()}function R(e,t){var n=$.a11y.marker;e=1*e.toFixed(1),t=1*t.toFixed(1),n=(n=n.replace("{s}",e)).replace("{v}",t),c.setAttribute("aria-label",n)}function W(e){var t=function(e){return{pageX:e.changedTouches?e.changedTouches[0].pageX:e.pageX,pageY:e.changedTouches?e.changedTouches[0].pageY:e.pageY}}(e),n=t.pageX-x.x,r=t.pageY-x.y;a&&(r+=a.scrollTop),Y(n,r),e.preventDefault(),e.stopPropagation()}function F(e,t){Y(1*c.style.left.replace("px","")+e,1*c.style.top.replace("px","")+t)}function Y(e,t){e=e<0?0:e>x.width?x.width:e,t=t<0?0:t>x.height?x.height:t,c.style.left=e+"px",c.style.top=t+"px",K(e,t),c.focus()}function U(e,r){void 0===e&&(e={}),void 0===r&&(r={});var a=$.format;for(var l in e)E[l]=e[l];for(var d in r)E[d]=r[d];var u,p=function(e){var t=e.r.toString(16),n=e.g.toString(16),r=e.b.toString(16),a="";if(e.r<16&&(t="0"+t),e.g<16&&(n="0"+n),e.b<16&&(r="0"+r),$.alpha&&(e.a<1||$.forceAlpha)){var l=255*e.a|0;a=l.toString(16),l<16&&(a="0"+a)}return"#"+t+n+r+a}(E),m=p.substring(0,7);switch(c.style.color=m,f.parentNode.style.color=m,f.style.color=p,s.style.color=p,o.style.display="none",o.offsetHeight,o.style.display="",f.nextElementSibling.style.display="none",f.nextElementSibling.offsetHeight,f.nextElementSibling.style.display="","mixed"===a?a=1===E.a?"hex":"rgb":"auto"===a&&(a=v),a){case"hex":i.value=p;break;case"rgb":i.value=function(e){return!$.alpha||1===e.a&&!$.forceAlpha?"rgb("+e.r+", "+e.g+", "+e.b+")":"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"}(E);break;case"hsl":i.value=(u=function(e){var t,r=e.v/100,a=r*(1-e.s/100/2);return a>0&&a<1&&(t=n.round((r-a)/n.min(a,1-a)*100)),{h:e.h,s:t||0,l:n.round(100*a),a:e.a}}(E),!$.alpha||1===u.a&&!$.forceAlpha?"hsl("+u.h+", "+u.s+"%, "+u.l+"%)":"hsla("+u.h+", "+u.s+"%, "+u.l+"%, "+u.a+")");break}t.querySelector('.clr-format [value="'+a+'"]').checked=!0}function X(){var e=1*p.value,t=1*c.style.left.replace("px",""),n=1*c.style.top.replace("px","");l.style.color="hsl("+e+", 100%, 50%)",m.style.left=e/360*100+"%",K(t,n)}function P(){var e=h.value/100;f.style.left=100*e+"%",U({a:e}),j()}function z(){return Array.from(l.querySelectorAll("input, button")).filter((function(e){return!!e.offsetWidth}))}function G(e){return t.getElementById(e)}function J(e,t,n,r){var a=Element.prototype.matches||Element.prototype.msMatchesSelector;"string"==typeof n?e.addEventListener(t,(function(e){a.call(e.target,n)&&r.call(e.target,e)})):(r=n,e.addEventListener(t,r))}function V(e,n){n=n!==r?n:[],"loading"!==t.readyState?e.apply(void 0,n):t.addEventListener("DOMContentLoaded",(function(){e.apply(void 0,n)}))}NodeList!==r&&NodeList.prototype&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),e.Coloris=function(){var e={set:L,wrap:q,close:N,setInstance:A,removeInstance:C,updatePosition:M,ready:V};function t(e){V((function(){e&&("string"==typeof e?H(e):L(e))}))}var n=function(n){t[n]=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];V(e[n],r)}};for(var r in e)n(r);return t}(),V((function(){a=r,(l=t.createElement("div")).setAttribute("id","clr-picker"),l.className="clr-picker",l.innerHTML='<input id="clr-color-value" name="clr-color-value" class="clr-color" type="text" value="" spellcheck="false" aria-label="'+$.a11y.input+'"><div id="clr-color-area" class="clr-gradient" role="application" aria-label="'+$.a11y.instruction+'"><div id="clr-color-marker" class="clr-marker" tabindex="0"></div></div><div class="clr-hue"><input id="clr-hue-slider" name="clr-hue-slider" type="range" min="0" max="360" step="1" aria-label="'+$.a11y.hueSlider+'"><div id="clr-hue-marker"></div></div><div class="clr-alpha"><input id="clr-alpha-slider" name="clr-alpha-slider" type="range" min="0" max="100" step="1" aria-label="'+$.a11y.alphaSlider+'"><div id="clr-alpha-marker"></div><span></span></div><div id="clr-format" class="clr-format"><fieldset class="clr-segmented"><legend>'+$.a11y.format+'</legend><input id="clr-f1" type="radio" name="clr-format" value="hex"><label for="clr-f1">Hex</label><input id="clr-f2" type="radio" name="clr-format" value="rgb"><label for="clr-f2">RGB</label><input id="clr-f3" type="radio" name="clr-format" value="hsl"><label for="clr-f3">HSL</label><span></span></fieldset></div><div id="clr-swatches" class="clr-swatches"></div><button type="button" id="clr-clear" class="clr-clear" aria-label="'+$.a11y.clear+'">'+$.clearLabel+'</button><div id="clr-color-preview" class="clr-preview"><button type="button" id="clr-close" class="clr-close" aria-label="'+$.a11y.close+'">'+$.closeLabel+'</button></div><span id="clr-open-label" hidden>'+$.a11y.open+'</span><span id="clr-swatch-label" hidden>'+$.a11y.swatch+"</span>",t.body.appendChild(l),o=G("clr-color-area"),c=G("clr-color-marker"),d=G("clr-clear"),u=G("clr-close"),s=G("clr-color-preview"),i=G("clr-color-value"),p=G("clr-hue-slider"),m=G("clr-hue-marker"),h=G("clr-alpha-slider"),f=G("clr-alpha-marker"),H($.el),q($.el),J(l,"mousedown",(function(e){l.classList.remove("clr-keyboard-nav"),e.stopPropagation()})),J(o,"mousedown",(function(e){J(t,"mousemove",W)})),J(o,"touchstart",(function(e){t.addEventListener("touchmove",W,{passive:!1})})),J(c,"mousedown",(function(e){J(t,"mousemove",W)})),J(c,"touchstart",(function(e){t.addEventListener("touchmove",W,{passive:!1})})),J(i,"change",(function(e){var t=i.value;(g||$.inline)&&j(""===t?t:O(t))})),J(d,"click",(function(e){j(""),N()})),J(u,"click",(function(e){j(),N()})),J(G("clr-format"),"click",".clr-format input",(function(e){v=e.target.value,U(),j()})),J(l,"click",".clr-swatches button",(function(e){O(e.target.textContent),j(),$.swatchesOnly&&N()})),J(t,"mouseup",(function(e){t.removeEventListener("mousemove",W)})),J(t,"touchend",(function(e){t.removeEventListener("touchmove",W)})),J(t,"mousedown",(function(e){b=!1,l.classList.remove("clr-keyboard-nav"),N()})),J(t,"keydown",(function(e){var t=e.key,n=e.target,r=e.shiftKey;if("Escape"===t?N(!0):["Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)&&(b=!0,l.classList.add("clr-keyboard-nav")),"Tab"===t&&n.matches(".clr-picker *")){var a=z(),o=a.shift(),c=a.pop();r&&n===o?(c.focus(),e.preventDefault()):r||n!==c||(o.focus(),e.preventDefault())}})),J(t,"click",".clr-field button",(function(e){S&&T(),e.target.nextElementSibling.dispatchEvent(new Event("click",{bubbles:!0}))})),J(c,"keydown",(function(e){var t={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};Object.keys(t).includes(e.key)&&(F.apply(void 0,t[e.key]),e.preventDefault())})),J(o,"click",W),J(p,"input",X),J(h,"input",P)}))}(window,document,Math),Coloris({el:".coloris",swatches:["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51","#d62828","#023e8a","#0077b6","#0096c7","#00b4d8","#48cae4"]}),Coloris.setInstance(".instance1",{theme:"polaroid"});