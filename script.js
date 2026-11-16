// SQL typing effect
(function(){
  var q=["SELECT passion FROM youssef WHERE field = 'data';","SELECT * FROM skills WHERE learning = TRUE;","SELECT goal FROM youssef LIMIT 1; -- first data role"],
      el=document.getElementById('sql'),w=0,i=0,del=false;
  function tick(){var s=q[w];el.textContent=s.slice(0,i);
    if(!del&&i===s.length){del=true;return setTimeout(tick,1800);}
    if(del&&i===0){del=false;w=(w+1)%q.length;}
    i+=del?-2:1;setTimeout(tick,del?18:55);}
  tick();
})();

// Reveal on scroll + counters
var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(!e.isIntersecting)return;var t=e.target;t.classList.add('in');io.unobserve(t);
  t.querySelectorAll('[data-n]').forEach(function(b){var n=+b.dataset.n,s=performance.now();
    (function f(now){var p=Math.min((now-s)/1300,1);b.textContent=Math.round(n*p);if(p<1)requestAnimationFrame(f);})(s);});
});},{threshold:.2});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

// Mobile menu + year
var btn=document.getElementById('menuBtn'),menu=document.getElementById('menu');
btn.addEventListener('click',function(){btn.setAttribute('aria-expanded',menu.classList.toggle('open'));});
menu.addEventListener('click',function(e){if(e.target.tagName==='A')menu.classList.remove('open');});
document.getElementById('year').textContent=new Date().getFullYear();
