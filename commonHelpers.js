import{i as d,S as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",m="45452442-4cc5f4d2a2a90f01a49495506";function y(o){return fetch(`${p}?key=${m}&q=${o}&image_type=photo&per_page=150&safesearch=true&orientation=horizontal`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function g(o){const s=document.querySelector(".gallery"),a=o.hits.map(r=>`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}" download=false>
                <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-img" width=360  onclick="return false" data-source="${r.largeImageURL}">
                <ul class="description">
                    <li>
                    <p>Likes</p>
                    <p class="description-value">${r.likes}</p>
                    </li>
                    <li>
                    <p>Views</p>
                    <p class="description-value">${r.views}</p>
                    </li>
                    <li>
                    <p>Comments</p>
                    <p class="description-value">${r.comments}</p>
                    </li>
                    <li>
                    <p>Downloads</p>
                    <p class="description-value">${r.downloads}</p>
                    </li>
                </ul>
            </a>
            </li>
            `).join("");s.innerHTML=a}function n(o){d.show({message:o})}function h(){document.querySelector(".loader").classList.remove("visually-hidden")}function L(){document.querySelector(".loader").classList.add("visually-hidden")}const c=document.querySelector(".form"),u=document.querySelector('input[name="query"]'),v=document.querySelector(".gallery");d.settings({messageColor:"#fafafb",position:"bottomRight",backgroundColor:"#ef4040",iconColor:"#fafafb",close:!1});let i;c.addEventListener("submit",o=>{if(o.preventDefault(),u.value.trim()===""){n("Please enter a search query.");return}v.innerHTML="",h(),y(u.value.trim()).then(a=>{if(a.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}else g(a);i?i.refresh():i=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}).catch(a=>{console.log(a)}).finally(()=>{L(),c.reset()})});
//# sourceMappingURL=commonHelpers.js.map
