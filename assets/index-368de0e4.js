(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();(()=>{const r=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),s=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),r.classList.toggle("is-open"),document.body.classList.toggle("modal-open");const o=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};t.addEventListener("click",s),n.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(r.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(function(r){typeof r.matches!="function"&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(t){for(var n=this,s=(n.document||n.ownerDocument).querySelectorAll(t),e=0;s[e]&&s[e]!==n;)++e;return Boolean(s[e])}),typeof r.closest!="function"&&(r.closest=function(t){for(var n=this;n&&n.nodeType===1;){if(n.matches(t))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");r.forEach(function(s){s.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+o+'"]');c.classList.add("active"),t.classList.add("active"),document.body.classList.toggle("modal-open")})}),n.forEach(function(s){s.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),t.classList.remove("active"),document.body.classList.toggle("modal-open")})}),document.body.addEventListener("keyup",function(s){var e=s.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),t.classList.remove("active"),document.body.classList.toggle("modal-open"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),t.classList.remove("active"),document.body.classList.toggle("modal-open")})});const l=new Plyr("#how-its-made-player");l.poster="../img/how-its-made-desktop.jpg";new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},breakpoints:{480:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:30},1200:{slidesPerView:3,spaceBetween:40}}});
