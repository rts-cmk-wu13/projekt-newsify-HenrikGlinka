import{i as h,a as l,b as g}from"./settings-manager-C5GFsIZX.js";function f(...p){const o="slider",u=Math.random().toString(36).slice(2,7),i=document.createElement("div"),n=document.createElement("div");return i.classList.add(o),n.classList.add(`${o}__dot-container`),i.append(n),p.forEach((a,d)=>{const e=document.createElement("div"),t=document.createElement("input"),c=document.createElement("label");e.classList.add(`${o}__slide`),e.innerHTML=a,t.type="radio",t.name=`slide-${u}`,t.classList.add(`${o}__dot`),c.classList.add(`${o}__dot-label`),d===0&&(t.defaultChecked=!0),t.addEventListener("change",()=>e.scrollIntoView()),i.append(e),c.append(t),n.append(c)}),i.next=()=>{const a=Array.from(n.children),d=a.findIndex(t=>t.firstChild.checked),e=d+1<a.length?d+1:0;return e===0?!1:(n.children[e].click(),!0)},i.previous=()=>{const e=Array.from(n.children).findIndex(t=>t.firstChild.checked)-1;return e===-1?!1:(n.children[e].click(),!0)},i}const k=""+new URL("slide1-Dp5g4Lcn.png",import.meta.url).href,E=""+new URL("slide2-Cvj3eFYe.png",import.meta.url).href,L=""+new URL("slide3-CzJB4AD1.png",import.meta.url).href,y=""+new URL("slide1-dark-mode-C2fPIGXa.png",import.meta.url).href,S=""+new URL("slide2-dark-mode-BMMrStVo.png",import.meta.url).href,v=""+new URL("slide3-dark-mode-CZN41_pa.png",import.meta.url).href;localStorage.getItem("skipOnboarding")==="true"&&(location.href="../");h();const w=document.querySelector("#app"),r=f(`
        <img src="${l()?y:k}" alt="">
        <h2>Stay Connected,<br>Everywhere, Anytime</h2>
        <p>Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.<p>
    `,`
        <img src="${l()?S:E}" alt="">
        <h2>Become a Savvy<br>Global Citizen.</h2>
        <p>Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!<p>
    `,`
        <img src="${l()?v:L}" alt="">
        <h2>Enhance your News<br>Journey Now!</h2>
        <p>Be part of our dynamic community and contribute your insights and participate in enriching conversations.<p>
    `),m=document.createElement("button"),s=document.createElement("button");g(r);r.addEventListener("swipeleft",r.next);r.addEventListener("swiperight",r.previous);m.innerText="Skip";s.innerText="Continue";s.classList.add("highlight");s.addEventListener("click",()=>{localStorage.setItem("skipOnboarding","true"),r.next()||(location.href="../")});m.addEventListener("click",()=>{localStorage.setItem("skipOnboarding","true"),location.href="../"});w.append(r,m,s);
