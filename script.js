
// Data model: crops with stages keyed by start/end days and detailed fertilization & irrigation
const crops = {
  "بطاطس": {
    "stages": [
      {"name":"مرحلة التأسيس","from":0,"to":20,
       "fert":[{"name":"كمبوست/سماد بلدي","qty":"2-4 طن/فدان","method":"يدفن أثناء التحضير"},
              {"name":"سوبر فوسفات","qty":"20-40 كجم/فدان","method":"أساس قبل الزراعة"}],
       "irr":{"note":"ري خفيف يومي حتى تثبيت الشتلات","qty":"5-8 لتر/نبتة/يوم (تقريبي)"} },
      {"name":"مرحلة النمو الخضري","from":21,"to":50,
       "fert":[{"name":"يوريا (46% N)","qty":"15-30 كجم/فدان دفعة","method":"تقسيم على 2-3 دفعات"},
              {"name":"سلفات مغنيسيوم","qty":"10-15 كجم/فدان","method":"يُضاف مع الري أو رشة أرضية"}],
       "irr":{"note":"ري متوازن وتجنب الغمر","qty":"10-15 لتر/نبتة/يوم (تقريبي)"} },
      {"name":"مرحلة التزهير & العقد","from":51,"to":80,
       "fert":[{"name":"بوتاسيوم (MOP)","qty":"30-50 كجم/فدان","method":"تطبيق لدعم تكوين درنات"},
              {"name":"يوريا حسب الحاجة","qty":"قليل","method":"تخفيف قبل الحصاد"}],
       "irr":{"note":"زيادة الري أثناء نمو الدرنات مع تهوية جيدة","qty":"15-20 لتر/نبتة/يوم (تقريبي)"} }
    ]
  },
  "فراولة": {
    "stages":[
      {"name":"التأسيس","from":0,"to":14,
       "fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"خلط بالتربة قبل الزراعة"},
              {"name":"سوبر فوسفات","qty":"15-30 كجم/فدان","method":"أساس الزراعة"}],
       "irr":{"note":"ري منتظم وخفيف للحفاظ على رطوبة التربة","qty":"2-4 لتر/نبتة/يوم"} },
      {"name":"النمو والازهار","from":15,"to":45,
       "fert":[{"name":"NPK 20-20-20 (رش)","qty":"20-30 كجم/هكتار (رش)","method":"رش ورقي بمعدل منخفض"},
              {"name":"سلفات بوتاسيوم","qty":"10-20 كجم/فدان","method":"زيادة جودة الثمار"}],
       "irr":{"note":"ري بالتنقيط مفضل، تجنب بلل الأوراق","qty":"4-6 لتر/نبتة/يوم"} },
      {"name":"نضج الثمار","from":46,"to":9999,
       "fert":[{"name":"بوتاسيوم (K2SO4)","qty":"20-40 كجم/فدان","method":"لتحسين اللون والطعم"}],
       "irr":{"note":"انتظام الري لتجنب تشقق الثمار","qty":"4-6 لتر/نبتة/يوم"} }
    ]
  },
  "قمح": {
    "stages":[
      {"name":"التأسيس","from":0,"to":30,
       "fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"قبل الزراعة"},
              {"name":"سوبر فوسفات","qty":"20-40 كجم/فدان","method":"أساس"}],
       "irr":{"note":"ري خفيف لتثبيت البادرات","qty":"----"} },
      {"name":"النمو الخضري","from":31,"to":70,
       "fert":[{"name":"يوريا","qty":"20-30 كجم/فدان دفعة","method":"تقسيم الجرعات"}],
       "irr":{"note":"ري حسب التربة والطقس","qty":"----"} },
      {"name":"التزهير & التكوين","from":71,"to":9999,
       "fert":[{"name":"بوتاسيوم","qty":"20-40 كجم/فدان","method":"قبل التكوين"}],
       "irr":{"note":"تحكم منعًا للعطش أثناء التزهير","qty":"----"} }
    ]
  },
  "طماطم": {
    "stages":[
      {"name":"التأسيس","from":0,"to":20,
       "fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"خلط بالتربة"},
              {"name":"فوسفور (سوبر فوسفات)","qty":"20-30 كجم/فدان","method":"أساس"}],
       "irr":{"note":"ري خفيف متكرر","qty":"2-4 لتر/نبتة/يوم"} },
      {"name":"التزهير والعقد","from":21,"to":60,
       "fert":[{"name":"يوريا مقسمة","qty":"15-25 كجم/فدان","method":"تقسيم للنيتروجين"},
              {"name":"بوتاسيوم (MOP)","qty":"20-40 كجم/فدان","method":"دعم النضج"}],
       "irr":{"note":"ري منتظم لمنع تشقق الثمار","qty":"4-8 لتر/نبتة/يوم"} },
      {"name":"نضج الثمار","from":61,"to":9999,
       "fert":[{"name":"تقليل النيتروجين","qty":"قليل","method":"تحسين التخزين واللون"}],
       "irr":{"note":"تقليل القديم قبل الحصاد قليلاً","qty":"----"} }
    ]
  }
};

// Nutrients details for sidebar
const nutrients = [
  {"name":"النيتروجين (N)","function":"يدعم النمو الخضري وإنتاج البروتين.","def":"اصفرار عام يبدأ من الأوراق القديمة.","fix":"إضافة يوريا أو نترات أمونيوم بجرعات مقسمة."},
  {"name":"الفوسفور (P)","function":"تحسين نمو الجذور والإزهار.","def":"تباطؤ النمو وجذور ضعيفة.","fix":"إضافة سوبر فوسفات."},
  {"name":"البوتاسيوم (K)","function":"تحسين جودة الثمار ومقاومة الإجهاد.","def":"حواف الأوراق براقة/محترقة وقِلة جودة الثمار.","fix":"إضافة MOP أو سلفات البوتاسيوم."},
  {"name":"الكالسيوم (Ca)","function":"مهم لبنية الخلية ونمو الثمار.","def":"تعفن طرف الثمرة أو تشوه في الطماطم.","fix":"التسميد بالكالسيوم أو استخدام منتجات كالسيوم موضعية."},
  {"name":"المغنيسيوم (Mg)","function":"مكون للكلوروفيل.","def":"اصفرار بين العروق.","fix":"إضافة سلفات المغنيسيوم."},
  {"name":"الحديد (Fe)","function":"مهم للتمثيل الضوئي.","def":"اصفرار بين العروق خصوصًا في الأوراق الصغيرة.","fix":"سماد حديد chelate أو تعديل pH."}
];

// Symptoms options for basic diagnosis
const symptomsOptions = [
  "بقع بيضاء/بودرية (بياض دقيقي)",
  "بقع بنية/مائية على الورقة",
  "اصفرار عام (Chlorosis)",
  "ذبول/ذبول فجائي",
  "ثقوب/أكل (آفات حشرية)",
  "تعفن ثمار/بقع مائية"
];

// Populate crops dropdown
const cropSelect = document.getElementById('cropSelect');
Object.keys(crops).forEach(c=>{
  const opt = document.createElement('option');
  opt.value = c; opt.textContent = c;
  cropSelect.appendChild(opt);
});

// Populate nutrients sidebar
const nutDiv = document.getElementById('nutrients-list');
nutDiv.innerHTML = nutrients.map(n=>`<div class="nut"><strong>${n.name}</strong><div class="small">${n.function}</div><div class="small"><em>أعراض:</em> ${n.def}</div><div class="small"><em>حل:</em> ${n.fix}</div><hr></div>`).join('');

// Show program based on age
document.getElementById('showBtn').addEventListener('click', ()=>{
  const crop = cropSelect.value;
  const age = parseInt(document.getElementById('ageInput').value || '0');
  if(!crop){ alert('اختر محصول'); return; }
  if(!age && age!==0){ alert('اكتب عمر النبات بالأيام'); return; }
  showProgramFor(crop, age);
});

function showProgramFor(crop, age){
  const data = crops[crop];
  const programContent = document.getElementById('programContent');
  let html = `<h3>${crop} — عمر النبات: ${age} يوم</h3>`;
  // find matching stage
  const stage = data.stages.find(s=> age>=s.from && age<=s.to) || data.stages[data.stages.length-1];
  html += `<h4>المرحلة الحالية: ${stage.name}</h4>`;
  // Fertilization table
  html += `<h5>برنامج التسميد التفصيلي (المرتب حسب العمر)</h5>`;
  html += `<table><tr><th>السماد/المنتج</th><th>الكمية</th><th>الطريقة</th></tr>`;
  stage.fert.forEach(f=>{
    html += `<tr><td>${f.name}</td><td>${f.qty}</td><td>${f.method}</td></tr>`;
  });
  html += `</table>`;
  html += `<p class="small">ملاحظة: الكميات تقديرية ويجب تعديلها حسب تحليل التربة ومساحة الفدان.</p>`;

  // Add full-stage program preview (future/previous)
  html += `<h5>خطة كاملة للمراحل:</h5><table><tr><th>المرحلة</th><th>توصيف التسميد</th></tr>`;
  data.stages.forEach(s=>{
    const list = s.fert.map(x=>`${x.name} (${x.qty})`).join(', ');
    html += `<tr><td>${s.name}</td><td>${list}</td></tr>`;
  });
  html += `</table>`;

  programContent.innerHTML = html;

  // Irrigation
  const irrDiv = document.getElementById('irrigationContent');
  irrDiv.innerHTML = `<h4>المرحلة: ${stage.name}</h4><p>${stage.irr.note}</p><p><strong>كمية/مرجع:</strong> ${stage.irr.qty}</p>`;
}

// Image upload and symptom selection
const imgFile = document.getElementById('imgFile');
const preview = document.getElementById('preview');
const symptomsArea = document.getElementById('symptomsArea');
const symptomsList = document.getElementById('symptomsList');
const diagBtn = document.getElementById('diagBtn');
const diagnosisResult = document.getElementById('diagnosisResult');

imgFile.addEventListener('change', (e)=>{
  const f = e.target.files[0];
  if(!f) return;
  preview.src = URL.createObjectURL(f);
  preview.style.display = 'block';
  symptomsArea.style.display = 'block';
  symptomsList.innerHTML = '';
  symptomsOptions.forEach(s=>{
    const el = document.createElement('div');
    el.className = 'tag';
    el.innerText = s;
    el.onclick = ()=> el.classList.toggle('selected');
    symptomsList.appendChild(el);
  });
  diagnosisResult.innerHTML = '';
});

diagBtn.addEventListener('click', ()=>{
  const selected = Array.from(document.querySelectorAll('.tag.selected')).map(t=>t.innerText);
  if(selected.length===0){ alert('اختار عرض أو أكثر'); return; }
  // simple rule-based diagnosis
  let res = '<h4>تشخيص مبدئي</h4><ul>';
  let recs = [];
  if(selected.includes('بقع بيضاء/بودرية (بياض دقيقي)')){
    res += '<li>احتمال: بياض دقيقي (فطر)</li>';
    recs.push('رش مبيد فطري ملامس أو استخدام المنتجات الحيوية الموصى بها.');
  }
  if(selected.includes('بقع بنية/مائية على الورقة')){
    res += '<li>احتمال: بقع فطرية/بكتيرية</li>';
    recs.push('عزل المصاب ورش مبيد فطري/بكتيري مناسب.');
  }
  if(selected.includes('اصفرار عام (Chlorosis)')){
    res += '<li>احتمال: نقص عناصر (N أو Fe) أو مشكلة ري</li>';
    recs.push('افحص pH والتربة. ضع خطة تسميد بالنيتروجين أو سماد حديد chelate عند الحاجة.');
  }
  if(selected.includes('ذبول/ذبول فجائي')){
    res += '<li>احتمال: ذبول جرثومي/فطري/جذري</li>';
    recs.push('افحص الجذور، قلل الري إذا كان تعفّن، واستخدم معالجات جذور في الحالات المناسبة.');
  }
  if(selected.includes('ثقوب/أكل (آفات حشرية)')){
    res += '<li>احتمال: آفات حشرية (حشرات قارضة، ديدان)</li>';
    recs.push('استخدم مصائد/مبيدات مستهدفة أو تفقد الحقول لعمل مكافحة متكاملة.');
  }
  if(selected.includes('تعفن ثمار/بقع مائية')){
    res += '<li>احتمال: تعفن ثمار (فطري أو بكتيري)</li>';
    recs.push('حافظ على تهوية الحقل، وتجنب بلل الثمار، واستخدم مبيدات حسب التشخيص.');
  }
  res += '</ul>';
  res += `<h4>توصيات عامة</h4><ul>${recs.map(r=>'<li>'+r+'</li>').join('')}</ul>`;
  res += `<p class="small">ملاحظة: هذا تشخيص مبدئي — للتشخيص النهائي أرسل صورة ميدانية مفصّلة وسجل موقع الحقل.</p>`;
  diagnosisResult.innerHTML = res;
});

// Initialize with first crop
showProgramFor(Object.keys(crops)[0], 0);
