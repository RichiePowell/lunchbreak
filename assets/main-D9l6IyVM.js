import{Ct as e,bt as t,ht as n,mt as r,t as i,yt as a}from"./registry-b6H3vZsk.js";function o(){let t=e();if(t.days===0)return{title:`Start a streak`,sub:`Play any game's challenge today.`,hot:!1};let n=`${t.days}-day streak`;return t.playedToday?{title:n,sub:`Today's done. Come back tomorrow to keep it going.`,hot:!0}:{title:n,sub:`Play any game's challenge today to keep it going.`,hot:!0}}function s(e,n,r=``){let s=document.createElement(`main`);s.className=`home`;let c=o();s.innerHTML=`
    <header class="home-head">
      <h1 class="home-mark" aria-label="Arcade">
        <span class="mark-block"></span><span class="mark-block"></span><span class="mark-block"></span>
        <span class="mark-word">Arcade</span>
      </h1>
      <p class="home-sub">Quick games for short breaks.</p>
      <div class="streak ${c.hot?`hot`:``}">
        <strong>${a(c.title)}</strong>
        <span>${a(c.sub)}</span>
      </div>
    </header>
    <section class="game-list" aria-label="Games">
      ${i.map(e=>{let t=e.daily?.(),n=t?`<p class="game-daily ${t.played?`done`:``}">${t.played?t.best?`Today's challenge done: ${a(t.best)}`:`Played today`:`Today's challenge is waiting`}</p>`:``;return`
        <a class="game-card" href="#/${e.id}" data-game="${e.id}">
          <canvas class="game-preview" aria-hidden="true"></canvas>
          <div class="game-head">
            <h2>${a(e.title)}</h2>
            <p>${a(e.tagline)}</p>
          </div>
          <ul class="game-bests">${e.summary().map(e=>`<li>${a(e)}</li>`).join(``)}</ul>
          ${n}
          <span class="play-pill">Play</span>
        </a>`}).join(``)}
    </section>`,e.appendChild(s);let l=t.get().effects!==`off`&&!matchMedia(`(prefers-reduced-motion: reduce)`).matches,u=e=>i.find(t=>t.id===e.dataset.preview),d=new Map,f=new ResizeObserver(e=>{for(let t of e){let e=t.target,n=`${e.clientWidth}x${e.clientHeight}@${window.devicePixelRatio}`;e.clientWidth&&d.get(e)!==n&&(d.set(e,n),(!l||!p.has(e))&&u(e)?.preview(e))}}),p=new Set,m=new IntersectionObserver(e=>{for(let t of e){let e=t.target;t.isIntersecting?p.add(e):p.delete(e)}}),h=performance.now(),g=0,_=e=>{g=requestAnimationFrame(_);for(let t of p)t.clientWidth&&u(t)?.preview(t,e-h+Number(t.dataset.offset))};l&&(g=requestAnimationFrame(_)),s.querySelectorAll(`[data-game]`).forEach(e=>{let t=i.find(t=>t.id===e.dataset.game),r=e.querySelector(`canvas`);r.dataset.preview=t.id,r.dataset.offset=String(t.order*1700),f.observe(r),l&&m.observe(r),e.addEventListener(`click`,e=>{e.preventDefault(),n(t.id)})});let v=r?s.querySelector(`.game-card[data-game="${r}"]`):null;return v?(v.scrollIntoView({block:`center`}),v.focus({preventScroll:!0})):s.querySelector(`.game-card`)?.focus({preventScroll:!0}),navigator.xr?.isSessionSupported(`immersive-vr`).then(e=>{if(!e||!s.isConnected)return;let t=document.createElement(`a`);t.className=`vr-link`,t.href=`./vr.html`,t.innerHTML=`<strong>Play in VR</strong><span>The arcade, all around you.</span>`,s.querySelector(`.home-head`)?.appendChild(t)}).catch(()=>void 0),()=>{cancelAnimationFrame(g),m.disconnect(),f.disconnect(),s.remove()}}var c=document.getElementById(`app`),l=null,u=``,d=()=>location.hash.replace(/^#\/?/,``);function f(){let e=document.body.dataset.view===`game`?u:``;l?.(),l=null;let t=d(),n=i.find(e=>e.id===t);document.body.dataset.view=n?`game`:`home`,u=n?.id??``,n?(document.title=n.title,l=n.mount(c,{exit:()=>h(``)})):(document.title=`Arcade`,l=s(c,e=>h(e),e))}function p(e){let t=e&&c.querySelector(`.game-card[data-game="${e}"]`),n=document.documentElement.style;if(!t){n.setProperty(`--glide-x`,`50vw`),n.setProperty(`--glide-y`,`50vh`);return}let r=t.getBoundingClientRect();n.setProperty(`--glide-x`,`${Math.round(r.left+r.width/2)}px`),n.setProperty(`--glide-y`,`${Math.round(r.top+r.height/2)}px`)}function m(){let e=t.get().effects,n=i.find(e=>e.id===d())?.id??``;if(!document.startViewTransition||e===`off`||n===u)return f();let r=!!n,a=document.documentElement;a.dataset.glide=r?u?`swap`:`in`:`out`,a.dataset.glideLevel=e,r&&p(n);let o=u;document.startViewTransition(()=>{f(),r||p(o)}).finished.finally(()=>{delete a.dataset.glide,delete a.dataset.glideLevel})}function h(e){let t=e?`#/${e}`:`#/`;location.hash===t?f():location.hash=t}n(),new URLSearchParams(location.search).has(`debug`)&&(window.__audio=()=>r.music?.isRunning??!1,window.__preview=(e,t,n)=>i.find(t=>t.id===e)?.preview(t,n)),window.addEventListener(`hashchange`,m),f(),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(()=>{})});