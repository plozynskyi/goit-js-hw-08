!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=a||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,y=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,u,f,c,a,l=0,d=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function h(e){return l=e,c=setTimeout(T,t),d?j(e):f}function O(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-l>=u}function T(){var e=p();if(O(e))return w(e);c=setTimeout(T,function(e){var n=t-(e-a);return s?y(n,u-(e-l)):n}(e))}function w(e){return c=void 0,b&&r?j(e):(r=i=void 0,f)}function x(){var e=p(),n=O(e);if(r=arguments,i=this,a=e,n){if(void 0===c)return h(a);if(s)return c=setTimeout(T,t),j(a)}return void 0===c&&(c=setTimeout(T,t)),f}return t=g(t)||0,m(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),x.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=a=i=c=void 0},x.flush=function(){return void 0===c?f:w(p())},x}function m(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=m(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var a=u.test(e);return a||f.test(e)?c(e.slice(2),a?2:8):i.test(e)?NaN:+e}document.querySelector(".feedback-form"),document.querySelector('input[type="email"]'),document.querySelector('textarea[name="message"]')}();
//# sourceMappingURL=03-feedback.03df3a61.js.map
