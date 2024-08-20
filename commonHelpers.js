import{a as b,i as m,S as w}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const q="https://pixabay.com/api/",S="45452442-4cc5f4d2a2a90f01a49495506";async function g(r,s,i){return(await b.get(q,{params:{key:S,q:r,image_type:"photo",per_page:i,page:s,safesearch:!0,orientation:"horizontal"}})).data}function h(r){const s=document.querySelector(".gallery"),i=r.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}" download=false>
                <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" width=360  onclick="return false" data-source="${t.largeImageURL}">
                <ul class="description">
                    <li>
                    <p>Likes</p>
                    <p class="description-value">${t.likes}</p>
                    </li>
                    <li>
                    <p>Views</p>
                    <p class="description-value">${t.views}</p>
                    </li>
                    <li>
                    <p>Comments</p>
                    <p class="description-value">${t.comments}</p>
                    </li>
                    <li>
                    <p>Downloads</p>
                    <p class="description-value">${t.downloads}</p>
                    </li>
                </ul>
            </a>
            </li>
            `).join("");s.insertAdjacentHTML("beforeend",i)}function u(r){m.show({message:r})}function v(){document.querySelector(".loader").classList.remove("visually-hidden")}function p(){document.querySelector(".loader").classList.add("visually-hidden")}const f=document.querySelector(".form"),P=document.querySelector('input[name="query"]'),$=document.querySelector(".gallery"),a=document.querySelector(".load-more");m.settings({messageColor:"#fafafb",position:"bottomRight",backgroundColor:"#ef4040",iconColor:"#fafafb",close:!1});let L=new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),c="",n=1;const y=15;let l;f.addEventListener("submit",async r=>{if(r.preventDefault(),c=P.value.trim(),c===""){u("Please enter a search query.");return}a.classList.add("visually-hidden"),$.innerHTML="",n=1,v();try{if(l=await g(c,n,y),l.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!"),p();return}l.hits.length<15?a.classList.add("visually-hidden"):a.classList.remove("visually-hidden"),h(l.hits),L.refresh()}catch(s){console.log(s)}finally{p(),f.reset()}});a.addEventListener("click",async()=>{n+=1;try{a.classList.add("visually-hidden"),v(),l=await g(c,n,y),h(l.hits),L.refresh();const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"}),l.total<=Math.ceil(n*y)?(a.classList.add("visually-hidden"),u("We're sorry, but you've reached the end of search results.")):a.classList.remove("visually-hidden")}catch(r){console.log(r)}finally{p()}});
//# sourceMappingURL=commonHelpers.js.map
