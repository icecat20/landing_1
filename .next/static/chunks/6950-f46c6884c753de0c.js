(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6950],{1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,l=(o=t(7294))&&o.__esModule?o:{default:o},i=t(1003),c=t(880),u=t(9246);var s={};function f(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),o=l.default.useMemo((function(){var r=a(i.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),d=o.href,p=o.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var b=(r=l.default.Children.only(h))&&"object"===typeof r&&r.ref,j=a(u.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],C=l.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);l.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),r="undefined"!==typeof g?g:n&&n.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&f(n,d,p,{locale:r})}),[p,d,w,g,t,n]);var E={ref:C,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[a?"replace":"push"](t,n,{shallow:o,locale:c,scroll:l}))}(e,n,d,p,v,m,y,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var N="undefined"!==typeof g?g:n&&n.locale,k=n&&n.isLocaleDomain&&i.getDomainLocale(p,N,n&&n.locales,n&&n.domainLocales);E.href=k||i.addBasePath(i.addLocale(p,N,n&&n.defaultLocale))}return l.default.cloneElement(r,E)};r.default=d},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,s=o.useRef(),f=a(o.useState(!1),2),d=f[0],p=f[1],h=a(o.useState(r?r.current:null),2),v=h[0],m=h[1],y=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=c.get(n):(r=c.get(t),u.push(t));if(r)return r;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(t,r={id:t,observer:o,elements:a}),r}(t),a=n.id,o=n.observer,l=n.elements;return l.set(e,r),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),c.delete(a);var r=u.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));r>-1&&u.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]);return o.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){r&&m(r.current)}),[r]),[y,d]};var o=t(7294),l=t(4686),i="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},2518:function(e,r,t){"use strict";var n=t(5893),a=t(7294);r.Z=function(e){var r=e.state,t=e.setActive,o=e.active;return(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),t(1===o?1:o-1)},children:(0,n.jsx)("i",{className:"far fa-angle-left"})})}),r&&r.map((function(e,r){return(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:" ".concat(o===e?"active":""),href:"#",onClick:function(r){r.preventDefault(),t(e)},children:e})},r)})),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),t(o===r.length?r.length:o+1)},children:(0,n.jsx)("i",{className:"far fa-angle-right"})})})]})}},2879:function(e,r,t){"use strict";var n=t(5893),a=t(1664),o=t(9833);r.Z=function(e){var r=e.pageName,t=e.pageTitle;return(0,n.jsx)("section",{className:"page-title-area",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("h2",{className:"page-title",children:t||r})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("ul",{className:"breadcrumb-nav",children:[(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:(0,o.Z)(),children:"Home"})}),(0,n.jsx)("li",{children:r})]})})]})})})}},9008:function(e,r,t){e.exports=t(3121)},1664:function(e,r,t){e.exports=t(1551)}}]);