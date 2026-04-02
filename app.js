const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => {
  hdr.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
}, { passive: true });
function toggleMenu(){ document.getElementById('mobNav').classList.toggle('open'); }
function closeMenu(){ document.getElementById('mobNav').classList.remove('open'); }
const obs = new IntersectionObserver(e => e.forEach(x => { if(x.isIntersecting) x.target.classList.add('in'); }), {threshold:.1});
document.querySelectorAll('.reveal').forEach(r => obs.observe(r));
const di = document.getElementById('fdate');
if(di){ const t=new Date(); di.min=t.toISOString().split('T')[0]; di.addEventListener('change',function(){ const d=new Date(this.value); const day=d.getDay(); const n=document.getElementById('dateNote'); if(day===0||day===6){ n.textContent='⚠️ Cabinetul este închis în weekend. Alege Luni–Vineri.'; n.className='f-note err'; this.value=''; } else { n.textContent=''; n.className='f-note'; } }); }
async function submitForm(event){
  event.preventDefault();
  const form=document.getElementById('bookingForm');
  const n=document.getElementById('fname').value.trim();
  const p=document.getElementById('fphone').value.trim();
  const s=document.getElementById('fservice').value;
  const d=document.getElementById('fdate').value;
  const t=document.getElementById('ftime').value;
  const status=document.getElementById('formStatus');
  const consent=document.getElementById('fconsent');
  const btn=document.querySelector('.f-submit');
  status.textContent='';
  if(!n||!p||!s||!d||!t){ status.textContent='Te rugăm să completezi toate câmpurile obligatorii.'; return; }
  if(consent && !consent.checked){ status.textContent='Te rugăm să confirmi că ai citit politicile de confidențialitate și cookies.'; return; }
  const dw=new Date(d).getDay();
  if(dw===0||dw===6){ status.textContent='Cabinetul este închis în weekend. Alege Luni–Vineri.'; return; }
  btn.textContent='Se trimite...'; btn.disabled=true;
  status.textContent='Trimitem cererea către clinică...';
  try {
    const formData = new FormData(form);
    const res = await fetch(form.action, {
      method:'POST',
      body: formData,
      headers:{ Accept:'application/json' }
    });
    const json = await res.json().catch(() => ({}));
    if(res.ok){
      window.location.href='multumim.html';
      return;
    }
    if(Array.isArray(json.errors) && json.errors.length){
      status.textContent = json.errors.map(err => err.message).join(', ');
    } else if(res.status===429) {
      status.textContent = 'Au fost trimise prea multe cereri într-un timp scurt. Încearcă din nou în câteva momente.';
    } else {
      status.textContent = 'Nu am putut trimite cererea acum. Poți suna direct la 0757 188 573.';
    }
  } catch(e) {
    status.textContent='Eroare de conexiune. Vă rugăm sunați la 0757 188 573.';
  } finally {
    btn.textContent='Trimite cererea de programare →'; btn.disabled=false;
  }
}

// Parallax hero into header
const heroEl = document.getElementById('hero');
const heroInner = heroEl.querySelector('.hero-inner');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  // Hero background scrolls slower — creates depth effect merging into header
  heroEl.style.backgroundPositionY = (y * 0.4) + 'px';
  // Hero content fades and moves up slightly as you scroll
  const progress = Math.min(y / (heroEl.offsetHeight * 0.5), 1);
  heroInner.style.transform = `translateY(${y * 0.18}px)`;
  heroInner.style.opacity = 1 - progress * 0.35;
}, { passive: true });

function loadMap(){
  const consent = document.getElementById('mapConsent');
  const embed = document.getElementById('mapEmbed');
  if(!embed) return;
  const iframe = embed.querySelector('iframe');
  if(iframe && !iframe.src){
    iframe.src = iframe.dataset.src;
  }
  embed.hidden = false;
  if(consent) consent.hidden = true;
}
