import{B as e,I as t,M as n,j as r,t as i}from"./registry-BfmKnJvM.js";function a(){let t=e();if(t.days===0)return{title:`Start a streak`,sub:`Play any game's challenge today.`,hot:!1};let n=`${t.days}-day streak`;return t.playedToday?{title:n,sub:`Today's done. Come back tomorrow to keep it going.`,hot:!0}:{title:n,sub:`Play any game's challenge today to keep it going.`,hot:!0}}function o(e,n){let r=document.createElement(`main`);r.className=`home`;let o=a();r.innerHTML=`
    <header class="home-head">
      <h1 class="home-mark" aria-label="Lunchbreak">
        <span class="mark-block"></span><span class="mark-block"></span><span class="mark-block"></span>
        <span class="mark-word">Lunchbreak</span>
      </h1>
      <p class="home-sub">Quick games for short breaks.</p>
      <div class="streak ${o.hot?`hot`:``}">
        <strong>${t(o.title)}</strong>
        <span>${t(o.sub)}</span>
      </div>
    </header>
    <section class="game-list" aria-label="Games">
      ${i.map(e=>{let n=e.daily?.(),r=n?`<p class="game-daily ${n.played?`done`:``}">${n.played?n.best?`Today's challenge done: ${t(n.best)}`:`Played today`:`Today's challenge is waiting`}</p>`:``;return`
        <a class="game-card" href="#/${e.id}" data-game="${e.id}">
          <canvas class="game-preview" aria-hidden="true"></canvas>
          <div class="game-head">
            <h2>${t(e.title)}</h2>
            <p>${t(e.tagline)}</p>
          </div>
          <ul class="game-bests">${e.summary().map(e=>`<li>${t(e)}</li>`).join(``)}</ul>
          ${r}
          <span class="play-pill">Play</span>
        </a>`}).join(``)}
    </section>`,e.appendChild(r);let s=new Map,c=new ResizeObserver(e=>{for(let t of e){let e=t.target,n=`${e.clientWidth}x${e.clientHeight}@${window.devicePixelRatio}`;e.clientWidth&&s.get(e)!==n&&(s.set(e,n),i.find(t=>t.id===e.dataset.preview)?.preview(e))}});return r.querySelectorAll(`[data-game]`).forEach(e=>{let t=i.find(t=>t.id===e.dataset.game),r=e.querySelector(`canvas`);r.dataset.preview=t.id,c.observe(r),e.addEventListener(`click`,e=>{e.preventDefault(),n(t.id)})}),r.querySelector(`.game-card`)?.focus({preventScroll:!0}),navigator.xr?.isSessionSupported(`immersive-vr`).then(e=>{if(!e||!r.isConnected)return;let t=document.createElement(`a`);t.className=`vr-link`,t.href=`./vr.html`,t.innerHTML=`<strong>Play in VR</strong><span>The arcade, all around you.</span>`,r.querySelector(`.home-head`)?.appendChild(t)}).catch(()=>void 0),()=>{c.disconnect(),r.remove()}}var s=document.getElementById(`app`),c=null;function l(){c?.(),c=null;let e=location.hash.replace(/^#\/?/,``),t=i.find(t=>t.id===e);document.body.dataset.view=t?`game`:`home`,t?(document.title=t.title,c=t.mount(s,{exit:()=>u(``)})):(document.title=`Lunchbreak`,c=o(s,e=>u(e)))}function u(e){let t=e?`#/${e}`:`#/`;location.hash===t?l():location.hash=t}n(),new URLSearchParams(location.search).has(`debug`)&&(window.__audio=()=>r.music?.isRunning??!1),window.addEventListener(`hashchange`,l),l(),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(()=>{})});