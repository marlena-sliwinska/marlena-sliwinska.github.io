(()=>{var t={176:()=>{}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";n(176);function t(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){s=!0,c=t},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw c}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}console.log("Hi, My name is Marlena. Nice to meet you"),fetch("https://api.github.com/users/marlena-sliwinska/repos").then((function(t){return t.json()})).then((function(e){e.sort((function(t,e){var n=t.pushed_at,r=e.pushed_at;return new Date(r)-new Date(n)}));var n,r=t(e);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=o.name,c=o.description,l=o.html_url,s=o.homepage,i=o.fork;if(c&&!i){var u=document.querySelector(".project__box--js"),f='\n        <article class="projects__box ">\n        <table class="projects__table">\n            <tr>\n            <td class="projects__label">project:</td>\n            <td class="projects__content projects__content--name">'.concat(a,'</td>\n          </tr>\n          <tr>\n            <td class="projects__label" style ="height: 155px">description:</td>\n            <td class="projects__content"\n            style="padding-bottom: 16px;"\n            >').concat(c,"</td>\n          </tr>\n          ").concat(s&&'<tr>\n            <td class="projects__label">demo:</td>\n            <td class="projects__content"><<a\n              title= "'.concat(a,'"\n              style ="color: #14B5D0"\n              href="').concat(s,'"\n              target="_blank"\n              rel="noopener noreferrer"\n              >see here</a>></td>\n          </tr>'),'\n          <tr>\n            <td class="projects__label">github:</td>\n            <td class="projects__content"><<a \n            title= "').concat(a,'"\n              style ="color: #14B5D0"\n              href="').concat(l,'"\n              target="_blank"\n              rel="noopener noreferrer"\n              >source code</a>></td>\n          </tr>\n        </table>\n        </article>');u.innerHTML+=f}}}catch(t){r.e(t)}finally{r.f()}})).catch((function(t){console.log("Error during fetching repos",t)}))})()})();