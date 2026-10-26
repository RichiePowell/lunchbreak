import{Gr as e,Kr as t,Rr as n,Yr as r,t as i,ti as a,zr as o}from"./registry-CZHq-ppo.js";function s(){let e=r();if(e.days===0)return{title:`Start a streak`,sub:`Play any game's challenge today.`,hot:!1};let t=`${e.days}-day streak`;return e.playedToday?{title:t,sub:`Today's done. Come back tomorrow to keep it going.`,hot:!0}:{title:t,sub:`Play any game's challenge today to keep it going.`,hot:!0}}function c(n,r,o=``){let c=a.filter(e=>i.some(t=>t.category===e.id)),l=document.createElement(`main`);l.className=`home`;let u=s();l.innerHTML=`
    <header class="home-head">
      <h1 class="home-mark" aria-label="Arcade">
        <span class="mark-block"></span><span class="mark-block"></span><span class="mark-block"></span>
        <span class="mark-word">Arcade</span>
      </h1>
      <p class="home-sub">Quick games for short breaks.</p>
      <div class="streak ${u.hot?`hot`:``}">
        <strong>${e(u.title)}</strong>
        <span>${e(u.sub)}</span>
      </div>
    </header>
    <nav class="shelf-nav" aria-label="Kinds of game">
      ${c.map(t=>`<button type="button" data-shelf="${t.id}">${e(t.name)}</button>`).join(``)}
    </nav>
    ${c.map(t=>`
    <section class="shelf" id="shelf-${t.id}" aria-labelledby="shelf-${t.id}-title">
      <h2 class="shelf-title" id="shelf-${t.id}-title">${e(t.name)} <span>${e(t.blurb)}</span></h2>
      <div class="game-list">
      ${i.filter(e=>e.category===t.id).map(t=>{let n=t.daily?.(),r=n?`<p class="game-daily ${n.played?`done`:``}">${n.played?n.best?`Today's challenge done: ${e(n.best)}`:`Played today`:`Today's challenge is waiting`}</p>`:``;return`
        <a class="game-card" href="#/${t.id}" data-game="${t.id}">
          <canvas class="game-preview" aria-hidden="true"></canvas>
          <div class="game-head">
            <h3>${e(t.title)}</h3>
            <p>${e(t.tagline)}</p>
          </div>
          <ul class="game-bests">${t.summary().map(t=>`<li>${e(t)}</li>`).join(``)}</ul>
          ${r}
          <span class="play-pill">Play</span>
        </a>`}).join(``)}
      </div>
    </section>`).join(``)}`,n.appendChild(l);let d=t.get().effects!==`off`&&!matchMedia(`(prefers-reduced-motion: reduce)`).matches,f=e=>i.find(t=>t.id===e.dataset.preview),p=new Map,m=new ResizeObserver(e=>{for(let t of e){let e=t.target,n=`${e.clientWidth}x${e.clientHeight}@${window.devicePixelRatio}`;e.clientWidth&&p.get(e)!==n&&(p.set(e,n),(!d||!h.has(e))&&f(e)?.preview(e))}}),h=new Set,g=new IntersectionObserver(e=>{for(let t of e){let e=t.target;t.isIntersecting?h.add(e):h.delete(e)}}),_=performance.now(),v=0,y=e=>{v=requestAnimationFrame(y);for(let t of h)t.clientWidth&&f(t)?.preview(t,e-_+Number(t.dataset.offset))};d&&(v=requestAnimationFrame(y)),l.querySelectorAll(`[data-game]`).forEach(e=>{let t=i.find(t=>t.id===e.dataset.game),n=e.querySelector(`canvas`);n.dataset.preview=t.id,n.dataset.offset=String(t.order*1700),m.observe(n),d&&g.observe(n),e.addEventListener(`click`,e=>{e.preventDefault(),r(t.id)})}),l.querySelectorAll(`[data-shelf]`).forEach(e=>{e.addEventListener(`click`,()=>{l.querySelector(`#shelf-${e.dataset.shelf}`)?.scrollIntoView({behavior:`smooth`,block:`start`})})});let b=o?l.querySelector(`.game-card[data-game="${o}"]`):null;return b?(b.scrollIntoView({block:`center`}),b.focus({preventScroll:!0})):l.querySelector(`.game-card`)?.focus({preventScroll:!0}),navigator.xr?.isSessionSupported(`immersive-vr`).then(e=>{if(!e||!l.isConnected)return;let t=document.createElement(`a`);t.className=`vr-link`,t.href=`./vr.html`,t.innerHTML=`<strong>Play in VR</strong><span>The arcade, all around you.</span>`,l.querySelector(`.home-head`)?.appendChild(t)}).catch(()=>void 0),()=>{cancelAnimationFrame(v),g.disconnect(),m.disconnect(),l.remove()}}var l=document.getElementById(`app`),u=null,d=``,f=()=>location.hash.replace(/^#\/?/,``);function p(){let e=document.body.dataset.view===`game`?d:``;u?.(),u=null;let t=f(),n=i.find(e=>e.id===t);document.body.dataset.view=n?`game`:`home`,d=n?.id??``,n?(document.title=n.title,u=n.mount(l,{exit:()=>g(``)})):(document.title=`Arcade`,u=c(l,e=>g(e),e))}function m(e){let t=e&&l.querySelector(`.game-card[data-game="${e}"]`),n=document.documentElement.style;if(!t){n.setProperty(`--glide-x`,`50vw`),n.setProperty(`--glide-y`,`50vh`);return}let r=t.getBoundingClientRect();n.setProperty(`--glide-x`,`${Math.round(r.left+r.width/2)}px`),n.setProperty(`--glide-y`,`${Math.round(r.top+r.height/2)}px`)}function h(){let e=t.get().effects,n=i.find(e=>e.id===f())?.id??``;if(!document.startViewTransition||e===`off`||n===d)return p();let r=!!n,a=document.documentElement;a.dataset.glide=r?d?`swap`:`in`:`out`,a.dataset.glideLevel=e,r&&m(n);let o=d;document.startViewTransition(()=>{p(),r||m(o)}).finished.finally(()=>{delete a.dataset.glide,delete a.dataset.glideLevel})}function g(e){let t=e?`#/${e}`:`#/`;location.hash===t?p():location.hash=t}o(),new URLSearchParams(location.search).has(`debug`)&&(window.__audio=()=>n.music?.isRunning??!1,window.__preview=(e,t,n)=>i.find(t=>t.id===e)?.preview(t,n)),window.addEventListener(`hashchange`,h),p(),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(()=>{})});