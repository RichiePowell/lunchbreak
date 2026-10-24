import{Ct as e,ht as t,mt as n,t as r,yt as i}from"./registry-BrJNY1yS.js";function a(){let t=e();if(t.days===0)return{title:`Start a streak`,sub:`Play any game's challenge today.`,hot:!1};let n=`${t.days}-day streak`;return t.playedToday?{title:n,sub:`Today's done. Come back tomorrow to keep it going.`,hot:!0}:{title:n,sub:`Play any game's challenge today to keep it going.`,hot:!0}}function o(e,t){let n=document.createElement(`main`);n.className=`home`;let o=a();n.innerHTML=`
    <header class="home-head">
      <h1 class="home-mark" aria-label="Lunchbreak">
        <span class="mark-block"></span><span class="mark-block"></span><span class="mark-block"></span>
        <span class="mark-word">Lunchbreak</span>
      </h1>
      <p class="home-sub">Quick games for short breaks.</p>
      <div class="streak ${o.hot?`hot`:``}">
        <strong>${i(o.title)}</strong>
        <span>${i(o.sub)}</span>
      </div>
    </header>
    <section class="game-list" aria-label="Games">
      ${r.map(e=>{let t=e.daily?.(),n=t?`<p class="game-daily ${t.played?`done`:``}">${t.played?t.best?`Today's challenge done: ${i(t.best)}`:`Played today`:`Today's challenge is waiting`}</p>`:``;return`
        <a class="game-card" href="#/${e.id}" data-game="${e.id}">
          <canvas class="game-preview" aria-hidden="true"></canvas>
          <div class="game-head">
            <h2>${i(e.title)}</h2>
            <p>${i(e.tagline)}</p>
          </div>
          <ul class="game-bests">${e.summary().map(e=>`<li>${i(e)}</li>`).join(``)}</ul>
          ${n}
          <span class="play-pill">Play</span>
        </a>`}).join(``)}
    </section>`,e.appendChild(n);let s=new Map,c=new ResizeObserver(e=>{for(let t of e){let e=t.target,n=`${e.clientWidth}x${e.clientHeight}@${window.devicePixelRatio}`;e.clientWidth&&s.get(e)!==n&&(s.set(e,n),r.find(t=>t.id===e.dataset.preview)?.preview(e))}});return n.querySelectorAll(`[data-game]`).forEach(e=>{let n=r.find(t=>t.id===e.dataset.game),i=e.querySelector(`canvas`);i.dataset.preview=n.id,c.observe(i),e.addEventListener(`click`,e=>{e.preventDefault(),t(n.id)})}),n.querySelector(`.game-card`)?.focus({preventScroll:!0}),navigator.xr?.isSessionSupported(`immersive-vr`).then(e=>{if(!e||!n.isConnected)return;let t=document.createElement(`a`);t.className=`vr-link`,t.href=`./vr.html`,t.innerHTML=`<strong>Play in VR</strong><span>The arcade, all around you.</span>`,n.querySelector(`.home-head`)?.appendChild(t)}).catch(()=>void 0),()=>{c.disconnect(),n.remove()}}var s=document.getElementById(`app`),c=null;function l(){c?.(),c=null;let e=location.hash.replace(/^#\/?/,``),t=r.find(t=>t.id===e);document.body.dataset.view=t?`game`:`home`,t?(document.title=t.title,c=t.mount(s,{exit:()=>u(``)})):(document.title=`Lunchbreak`,c=o(s,e=>u(e)))}function u(e){let t=e?`#/${e}`:`#/`;location.hash===t?l():location.hash=t}t(),new URLSearchParams(location.search).has(`debug`)&&(window.__audio=()=>n.music?.isRunning??!1),window.addEventListener(`hashchange`,l),l(),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(()=>{})});