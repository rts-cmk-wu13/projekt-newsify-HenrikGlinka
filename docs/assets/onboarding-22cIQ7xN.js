import{a as m}from"./swiper-D2Yy1f32.js";function h(...u){const s="slider",p=Math.random().toString(36).slice(2,7),r=document.createElement("div"),n=document.createElement("div");return r.classList.add(s),n.classList.add(`${s}__dot-container`),r.append(n),u.forEach((d,o)=>{const e=document.createElement("div"),t=document.createElement("input"),a=document.createElement("label");e.classList.add(`${s}__slide`),e.innerHTML=d,t.type="radio",t.name=`slide-${p}`,t.classList.add(`${s}__dot`),a.classList.add(`${s}__dot-label`),o===0&&(t.defaultChecked=!0),t.addEventListener("change",()=>e.scrollIntoView()),r.append(e),a.append(t),n.append(a)}),r.next=()=>{const d=Array.from(n.children),o=d.findIndex(t=>t.firstChild.checked),e=o+1<d.length?o+1:0;return e===0?!1:(n.children[e].click(),!0)},r.previous=()=>{const e=Array.from(n.children).findIndex(t=>t.firstChild.checked)-1;return e===-1?!1:(n.children[e].click(),!0)},r}const f="/assets/slide1-Dp5g4Lcn.png",E="/assets/slide2-Cvj3eFYe.png",g="/assets/slide3-CzJB4AD1.png",y=document.querySelector("#app"),i=h(`
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
    `),l=document.createElement("button"),c=document.createElement("button");m(i);i.addEventListener("swipeleft",i.next);i.addEventListener("swiperight",i.previous);l.innerText="Skip";c.innerText="Continue";c.classList.add("highlight");c.addEventListener("click",()=>{i.next()||(location.href="/")});l.addEventListener("click",()=>location.href="/");y.append(i,l,c);
