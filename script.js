
// AgriScan AI Prototype - frontend script
const crops = ["قمح","ذرة","طماطم","بطاطس","فلفل","فراولة","بطيخ","شمام","بصل","ثوم"];
const cropSelect = document.getElementById('cropSelect');
const imgFile = document.getElementById('imgFile');
const preview = document.getElementById('preview');
const uploadBtn = document.getElementById('uploadBtn');
const resultCard = document.getElementById('resultCard');
const ageInput = document.getElementById('ageInput');
const showProgramBtn = document.getElementById('showProgramBtn');
const programsDiv = document.getElementById('programs');

crops.forEach(c=>{ const opt=document.createElement('option'); opt.value=c; opt.text=c; cropSelect.appendChild(opt); });

imgFile.addEventListener('change', ()=>{
  const f = imgFile.files[0]; if(!f) return;
  preview.src = URL.createObjectURL(f); preview.style.display='block';
});

// analyze image: calls backend /api/analyze-image if available, otherwise returns fake result for demo
async function analyzeImageDemo(file){
  // demo stub: returns fake analysis after 1s
  resultCard.innerHTML = '<p class="muted">جارٍ التحليل... (نسخة تجريبية)</p>';
  await new Promise(r=>setTimeout(r,1000));
  return {
    diagnosis: "احتمال: بياض دقيقي (فطري)",
    confidence: 0.78,
    recommendation: "رش مبيد فطري ملامس، وتحسين التهوية وتقليل البلل."
  };
}

uploadBtn.addEventListener('click', async ()=>{
  const file = imgFile.files[0];
  if(!file){ alert('ارفع صورة أولاً'); return; }
  // try real backend first
  try{
    const fd = new FormData(); fd.append('image', file);
    const res = await fetch('/api/analyze-image', { method:'POST', body: fd });
    if(res.ok){
      const j = await res.json();
      if(j.ok && j.result){
        showResult(j.result);
        return;
      }
    }
    // fallback to demo
  }catch(e){ /* fallback */ }
  const demo = await analyzeImageDemo(file);
  showResult(demo);
});

function showResult(r){
  resultCard.innerHTML = `<h4>التشخيص</h4><p><strong>${r.diagnosis}</strong> (ثقة تقريبية: ${Math.round((r.confidence||0)*100)}%)</p><p>${r.recommendation}</p>`;
}

// program by age (simple generic)
showProgramBtn.addEventListener('click', ()=>{
  const crop = cropSelect.value;
  const age = parseInt(ageInput.value || '0');
  if(!crop){ alert('اختر محصول'); return; }
  if(!Number.isInteger(age)){ alert('اكتب العمر بالأيام'); return; }
  let stage = '';
  if(age<=20) stage='مرحلة التأسيس - ري خفيف + كمبوست';
  else if(age<=60) stage='مرحلة النمو - ري متوازن + يوريا مجزأ';
  else if(age<=120) stage='مرحلة التزهير - رفع بوتاسيوم';
  else stage='قرب الحصاد - تقليل النيتروجين وتقليل الري';
  programsDiv.innerHTML = `<h4>${crop} — ${stage}</h4><p class="small">الكميات تقديرية ويجب تعديلها حسب تحليل التربة.</p>`;
});
