import{a as p}from"./swiper-D9e-pZfW.js";function h(...u){const o="slider",m=Math.random().toString(36).slice(2,7),i=document.createElement("div"),n=document.createElement("div");return i.classList.add(o),n.classList.add(`${o}__dot-container`),i.append(n),u.forEach((s,d)=>{const e=document.createElement("div"),t=document.createElement("input"),a=document.createElement("label");e.classList.add(`${o}__slide`),e.innerHTML=s,t.type="radio",t.name=`slide-${m}`,t.classList.add(`${o}__dot`),a.classList.add(`${o}__dot-label`),d===0&&(t.defaultChecked=!0),t.addEventListener("change",()=>e.scrollIntoView()),i.append(e),a.append(t),n.append(a)}),i.next=()=>{const s=Array.from(n.children),d=s.findIndex(t=>t.firstChild.checked),e=d+1<s.length?d+1:0;return e===0?!1:(n.children[e].click(),!0)},i.previous=()=>{const e=Array.from(n.children).findIndex(t=>t.firstChild.checked)-1;return e===-1?!1:(n.children[e].click(),!0)},i}const f=""+new URL("slide1-Dp5g4Lcn.png",import.meta.url).href,E=""+new URL("slide2-Cvj3eFYe.png",import.meta.url).href,g=""+new URL("slide3-CzJB4AD1.png",import.meta.url).href,y=document.querySelector("#app"),r=h(`
        <img src="${f}" alt="">
        <h2>Stay Connected,<br>Everywhere, Anytime</h2>
        <p>Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.<p>
    `,`
        <img src="${E}" alt="">
        <h2>Become a Savvy<br>Global Citizen.</h2>
        <p>Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!<p>
    `,`
        <img src="${g}" alt="">
        <h2>Enhance your News<br>Journey Now!</h2>
        <p>Be part of our dynamic community and contribute your insights and participate in enriching conversations.<p>
    `),l=document.createElement("button"),c=document.createElement("button");p(r);r.addEventListener("swipeleft",r.next);r.addEventListener("swiperight",r.previous);l.innerText="Skip";c.innerText="Continue";c.classList.add("highlight");c.addEventListener("click",()=>{r.next()||(location.href="/")});l.addEventListener("click",()=>location.href="/");y.append(r,l,c);
