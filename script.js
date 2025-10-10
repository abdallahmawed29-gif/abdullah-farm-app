
// Expanded crops data: stages with fertilization and irrigation details
const crops = {
  "قمح": {
    "stages":[
      {"name":"التأسيس","from":0,"to":30,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"خلط بالتربة قبل الزراعة"},{"name":"سوبر فوسفات","qty":"20-40 كجم/فدان","method":"أساس"}],"irr":{"note":"ري لتثبيت البادرات","qty":"----"}},
      {"name":"النمو الخضري","from":31,"to":70,"fert":[{"name":"يوريا","qty":"20-30 كجم/فدان دفعات","method":"تقسيم الجرعات"}],"irr":{"note":"حسب التربة والطقس","qty":"----"}},
      {"name":"التزهير والتكوين","from":71,"to":9999,"fert":[{"name":"بوتاسيوم","qty":"20-40 كجم/فدان","method":"قبل التكوين"}],"irr":{"note":"تحكم منعًا للعطش أثناء التزهير","qty":"----"}}
    ]
  },
  "ذرة": {
    "stages":[
      {"name":"التأسيس","from":0,"to":20,"fert":[{"name":"سماد بلدي","qty":"1-2 طن/فدان","method":"قبل الزراعة"},{"name":"فوسفور (سوبر فوسفات)","qty":"20-40 كجم","method":"أساس"}],"irr":{"note":"ري خفيف لتثبيت الشتل","qty":"----"}},
      {"name":"النمو","from":21,"to":60,"fert":[{"name":"يوريا أو نترات أمونيوم","qty":"20-40 كجم/فدان","method":"جرعات مقسمة"}],"irr":{"note":"زيادة وفقا للطور","qty":"----"}},
      {"name":"الملء","from":61,"to":9999,"fert":[{"name":"بوتاسيوم","qty":"20-50 كجم/فدان","method":"لتحسين حجم الحبوب"}],"irr":{"note":"إدارة الري بحذر خلال الملء","qty":"----"}}
    ]
  },
  "بطاطس": {
    "stages":[
      {"name":"التأسيس","from":0,"to":20,"fert":[{"name":"كمبوست","qty":"2-4 طن/فدان","method":"خلط بالتربة"},{"name":"سوبر فوسفات","qty":"20-40 كجم","method":"أساس"}],"irr":{"note":"ري خفيف يومي حتى التثبيت","qty":"5-8 لتر/نبتة/يوم (تقريبي)"}},
      {"name":"النمو الخضري","from":21,"to":50,"fert":[{"name":"يوريا","qty":"15-30 كجم/فدان","method":"تقسيم على 2-3 دفعات"},{"name":"سلفات مغنيسيوم","qty":"10-15 كجم/فدان","method":"مع الري"}],"irr":{"note":"ري متوازن وتجنب الغمر","qty":"10-15 لتر/نبتة/يوم (تقريبي)"}},
      {"name":"التزهير والعقد","from":51,"to":80,"fert":[{"name":"بوتاسيوم (MOP)","qty":"30-50 كجم/فدان","method":"دعم تكوين الدرنات"}],"irr":{"note":"زيادة الري أثناء تكوين الدرنات","qty":"15-20 لتر/نبتة/يوم (تقريبي)"}},
      {"name":"قبل الحصاد","from":81,"to":9999,"fert":[{"name":"خفض النيتروجين","qty":"قليل","method":"لتحسين التخزين"}],"irr":{"note":"تقليل الري قبل الحصاد","qty":"----"}}
    ]
  },
  "طماطم": {
    "stages":[
      {"name":"التأسيس","from":0,"to":20,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"خلط بالتربة"},{"name":"فوسفور (سوبر فوسفات)","qty":"20-30 كجم","method":"أساس"}],"irr":{"note":"ري خفيف متكرر","qty":"2-4 لتر/نبتة/يوم"}},
      {"name":"التزهير والعقد","from":21,"to":60,"fert":[{"name":"يوريا مقسمة","qty":"15-25 كجم/فدان","method":"تقسيم النيتروجين"},{"name":"بوتاسيوم (MOP)","qty":"20-40 كجم/فدان","method":"دعم النضج"}],"irr":{"note":"ري منتظم لمنع تشقق الثمار","qty":"4-8 لتر/نبتة/يوم"}},
      {"name":"نضج الثمار","from":61,"to":9999,"fert":[{"name":"تقليل النيتروجين","qty":"قليل","method":"تحسين التخزين"}],"irr":{"note":"تقليل الري قبل الحصاد قليلاً","qty":"----"}}
    ]
  },
  "فراولة": {
    "stages":[
      {"name":"التأسيس","from":0,"to":14,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"خلط بالتربة"},{"name":"سوبر فوسفات","qty":"15-30 كجم","method":"أساس"}],"irr":{"note":"ري خفيف منتظم","qty":"2-4 لتر/نبتة/يوم"}},
      {"name":"النمو والازهار","from":15,"to":45,"fert":[{"name":"NPK 20-20-20 (رش)","qty":"تركيز منخفض","method":"رش ورقي"},{"name":"سلفات بوتاسيوم","qty":"10-20 كجم/فدان","method":"لتحسين جودة الثمار"}],"irr":{"note":"تنقيط مفضل لتقليل بلل الاوراق","qty":"4-6 لتر/نبتة/يوم"}},
      {"name":"نضج الثمار","from":46,"to":9999,"fert":[{"name":"بوتاسيوم (K2SO4)","qty":"20-40 كجم/فدان","method":"تحسين الطعم واللون"}],"irr":{"note":"انتظام الري لتجنب تشقق الثمار","qty":"4-6 لتر/نبتة/يوم"}}
    ]
  },
  "بطيخ": {
    "stages":[
      {"name":"التأسيس","from":0,"to":20,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"أساس"}],"irr":{"note":"رطوبة منتظمة لتأسيس الجذر","qty":"----"}},
      {"name":"تكوين الثمار","from":21,"to":60,"fert":[{"name":"فوسفور وبوتاسيوم","qty":"20-40 كجم","method":"دعم التكوين"}],"irr":{"note":"زيادة الري أثناء تكوين الثمار","qty":"----"}},
      {"name":"نضج","from":61,"to":9999,"fert":[{"name":"توازن بوتاسيوم","qty":"20-40 كجم","method":"لتحسين السكر"}],"irr":{"note":"تقليل ري المراحل الأخيرة لتكثيف السكريات","qty":"----"}}
    ]
  },
  "موالح": {"stages":[{"name":"بعد العقد","from":30,"to":90,"fert":[{"name":"نيتروجين متوازن","qty":"20-40 كجم/فدان","method":"بعد العقد"}],"irr":{"note":"ري معتدل حسب الطقس","qty":"----"}},{"name":"قبل التسويق","from":91,"to":9999,"fert":[{"name":"بوتاسيوم","qty":"20-40 كجم","method":"تحسين الجودة"}],"irr":{"note":"معالجة حسب الحاجة","qty":"----"}}],
  "عنب": {"stages":[{"name":"التأسيس","from":0,"to":60,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"قبل الزراعة"}],"irr":{"note":"ري خفيف"}},{"name":"التكوين والنضج","from":61,"to":9999,"fert":[{"name":"بوتاسيوم","qty":"20-40 كجم","method":"لتحسين الحلاوة واللون"}],"irr":{"note":"تقليل الري قبل الحصاد"} }]},
  "مانجو": {"stages":[{"name":"قبل التزهير","from":0,"to":120,"fert":[{"name":"تسميد متوازن NPK","qty":"20-30 كجم/شجرة","method":"قبل التزهير"}],"irr":{"note":"ري عميق بين الفترات"}}]},
  "بصل": {"stages":[{"name":"التأسيس","from":0,"to":40,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"قبل الزراعة"},{"name":"فوسفور","qty":"15-30 كجم","method":"أساس"}],"irr":{"note":"ري خفيف"}},{"name":"نمو","from":41,"to":9999,"fert":[{"name":"يوريا بجرعات منخفضة","qty":"10-20 كجم/فدان","method":"تقسيم"}],"irr":{"note":"تجنب الغمر"}}],
  "ثوم": {"stages":[{"name":"التأسيس","from":0,"to":60,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"قبل الزراعة"}],"irr":{"note":"ري منتظم"}},{"name":"نمو","from":61,"to":9999,"fert":[{"name":"يوريا خفيف","qty":"قليل","method":"تدعيم"}],"irr":{"note":"تقليل الري قرب الجفاف للحصاد"}}],
  "فاصوليا خضراء": {"stages":[{"name":"التأسيس","from":0,"to":20,"fert":[{"name":"فوسفور","qty":"15-25 كجم","method":"أساس"}],"irr":{"note":"ري منتظم"}},{"name":"التزهير","from":21,"to":50,"fert":[{"name":"نيتروجين خفيف","qty":"قليل","method":"تعزيز الأزهار"}],"irr":{"note":""}},{"name":"نضج","from":51,"to":9999,"fert":[{"name":"توازن","qty":"--","method":"--"}],"irr":{"note":""}}]},
  "فول سوداني": {"stages":[{"name":"التأسيس","from":0,"to":30,"fert":[{"name":"فوسفور","qty":"20-40 كجم","method":"أساس"}],"irr":{"note":"ري معتدل"}},{"name":"نضج","from":31,"to":9999,"fert":[{"name":"توازن","qty":"--","method":"--"}],"irr":{"note":""}}]},
  "خيار": {"stages":[{"name":"التأسيس","from":0,"to":14,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"خلط"}],"irr":{"note":"ري منتظم"}},{"name":"الإنتاج","from":15,"to":9999,"fert":[{"name":"NPK متوازن","qty":"حسب الحاجة","method":"رشة أو تربة"}],"irr":{"note":"تنقيط مفضل"} }]},
  "فلفل": {"stages":[{"name":"التأسيس","from":0,"to":20,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"أساس"}],"irr":{"note":"ري خفيف"}},{"name":"التزهير","from":21,"to":60,"fert":[{"name":"يوريا خفيف","qty":"قليل","method":"تقسيم"}],"irr":{"note":""}},{"name":"نضج","from":61,"to":9999,"fert":[{"name":"بوتاسيوم","qty":"15-30 كجم","method":"لتحسين حجم الثمار"}],"irr":{"note":""}}]},
  "باذنجان": {"stages":[{"name":"التأسيس","from":0,"to":20,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"أساس"}],"irr":{"note":"ري خفيف"}},{"name":"نمو","from":21,"to":60,"fert":[{"name":"NPK متوازن","qty":"حسب الحاجة","method":"تسميد"}],"irr":{"note":""}}]},
  "جزر": {"stages":[{"name":"التأسيس","from":0,"to":30,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"أساس"}],"irr":{"note":"ري متكرر لتكوين الجذور"}],"stages_extra":[]} ,
  "خس": {"stages":[{"name":"التأسيس","from":0,"to":20,"fert":[{"name":"كمبوست","qty":"1-2 طن/فدان","method":"خلط"}],"irr":{"note":"ري خفيف متكرر"}}]}
};

// nutrients and deficiency (expanded list)
const nutrients = [
  {"name":"النيتروجين (N)","function":"يدعم النمو الخضري وإنتاج البروتين.","def":"اصفرار عام يبدأ من الأوراق القديمة.","fix":"إضافة يوريا أو نترات أمونيوم بجرعات مقسمة."},
  {"name":"الفوسفور (P)","function":"تحسين نمو الجذور والإزهار.","def":"تباطؤ النمو وجذور ضعيفة.","fix":"سوبر فوسفات أو فوسفات أحادي."},
  {"name":"البوتاسيوم (K)","function":"تحسين جودة الثمار ومقاومة الإجهاد.","def":"حواف الأوراق محترقة، ضعف جودة الثمار.","fix":"MOP أو سلفات بوتاسيوم."},
  {"name":"الكالسيوم (Ca)","function":"بنية الخلايا ونضج الثمار.","def":"تعفن الطرف في الطماطم وتشوه الثمار.","fix":"أملاح الكالسيوم أو مبيدات موضعية."},
  {"name":"المغنيسيوم (Mg)","function":"جزء من الكلوروفيل.","def":"اصفرار بين العروق.","fix":"سلفات مغنيسيوم."},
  {"name":"الحديد (Fe)","function":"مهم للكلوروفيل والتمثيل الضوئي.","def":"اصفرار بين العروق في الأوراق الصغيرة.","fix":"حديد chelate أو تعديل pH."},
  {"name":"الزنك (Zn)","function":"نمو البراعم.","def":"صغر الأوراق.","fix":"سماد زنك."},
  {"name":"البورون (B)","function":"نقل السكر وتكوين الأنسجة.","def":"تشوه النمو الجديد.","fix":"سماد بورون محتشم."}
];

// symptoms options for diagnosis
const symptomsOptions = [
  "بقع بيضاء/بودرية (بياض دقيقي)",
  "بقع بنية/مائية على الورقة",
  "اصفرار عام (Chlorosis)",
  "ذبول/ذبول فجائي",
  "ثقوب/أكل (آفات حشرية)",
  "تعفن ثمار/بقع مائية"
];

// populate crop dropdown
const cropSelect = document.getElementById('cropSelect');
Object.keys(crops).forEach(c=>{
  const opt = document.createElement('option');
  opt.value = c; opt.textContent = c;
  cropSelect.appendChild(opt);
});

// populate deficiency content
const defDiv = document.getElementById('deficiencyContent');
defDiv.innerHTML = nutrients.map(n=>`<div class="nut"><strong>${n.name}</strong><div class="small">${n.function}</div><div class="small"><em>أعراض:</em> ${n.def}</div><div class="small"><em>حل:</em> ${n.fix}</div><hr></div>`).join('');

// guidelines bottom content
const guidelinesContent = document.getElementById('guidelinesContent');
guidelinesContent.innerHTML = `
<strong>نصائح عامة وإرشادات ميدانية:</strong>
<ul>
<li>قم بتحليل التربة قبل تطبيق أي برنامج تسميد لتحديد الاحتياجات الفعلية.</li>
<li>قسّم جرعات النيتروجين على دفعات لتقليل الفاقد والتلوث.</li>
<li>استخدم السماد العضوي لزيادة احتجاز الماء وتحسين بنية التربة.</li>
<li>تجنّب الري أثناء ذروة الشمس لتقليل فقد الماء والتعرض للأمراض.</li>
<li>سجّل كل عملياتك (كمية السماد، تاريخ التطبيق، نوع السماد) للمتابعة.</li>
<li>في حالة ظهور أعراض جديدة أرسل صورًا واضحة من عدة زوايا.</li>
</ul>
`;

// show program when button clicked
document.getElementById('showBtn').addEventListener('click', ()=>{
  const crop = cropSelect.value;
  const age = parseInt(document.getElementById('ageInput').value || '0');
  if(!crop){ alert('اختر محصول'); return; }
  if(!Number.isInteger(age)){ alert('اكتب عمر النبات بالأيام كرقم صحيح'); return; }
  showProgramFor(crop, age);
});

function showProgramFor(crop, age){
  const data = crops[crop];
  const programContent = document.getElementById('programContent');
  let html = `<h3>${crop} — عمر النبات: ${age} يوم</h3>`;
  const stage = data.stages.find(s=> age>=s.from && age<=s.to) || data.stages[data.stages.length-1];
  html += `<h4>المرحلة الحالية: ${stage.name}</h4>`;
  html += `<h5>برنامج التسميد لهذه المرحلة</h5>`;
  html += `<table><tr><th>السماد/المنتج</th><th>الكمية</th><th>الطريقة</th></tr>`;
  stage.fert.forEach(f=>{ html += `<tr><td>${f.name}</td><td>${f.qty}</td><td>${f.method}</td></tr>`; });
  html += `</table>`;
  // full stages summary
  html += `<h5>خطة شاملة لكل المراحل</h5><table><tr><th>المرحلة</th><th>التسميد</th></tr>`;
  data.stages.forEach(s=>{ const list = s.fert.map(x=>`${x.name} (${x.qty})`).join(', '); html += `<tr><td>${s.name}</td><td>${list}</td></tr>`; });
  html += `</table><p class="small">ملاحظة: الكميات تقريبية ويجب تعديلها حسب تحليل التربة ومساحة الفدان.</p>`;
  programContent.innerHTML = html;

  // irrigation
  const irrDiv = document.getElementById('irrigationContent');
  irrDiv.innerHTML = `<h4>المرحلة: ${stage.name}</h4><p>${stage.irr.note}</p><p><strong>كمية/مرجع:</strong> ${stage.irr.qty}</p>`;
}

// Image upload / diagnosis
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
  let res = '<h4>تشخيص مبدئي</h4><ul>';
  let recs = [];
  if(selected.includes('بقع بيضاء/بودرية (بياض دقيقي)')){ res += '<li>احتمال: بياض دقيقي (فطر)</li>'; recs.push('رش مبيد فطري ملامس أو استخدام منتجات حيوية'); }
  if(selected.includes('بقع بنية/مائية على الورقة')){ res += '<li>احتمال: بقع فطرية/بكتيرية</li>'; recs.push('عزل المصاب ورش مبيد مناسب'); }
  if(selected.includes('اصفرار عام (Chlorosis)')){ res += '<li>احتمال: نقص عناصر أو خلل ري</li>'; recs.push('افحص pH والتربة، وفكر في تسميد N أو Fe حسب التحليل'); }
  if(selected.includes('ذبول/ذبول فجائي')){ res += '<li>احتمال: ذبول جرثومي/فطري/جذري</li>'; recs.push('افحص الجذور وقلل الري إذا تعفن'); }
  if(selected.includes('ثقوب/أكل (آفات حشرية)')){ res += '<li>احتمال: آفات حشرية</li>'; recs.push('مكافحة متكاملة: مصائد، مبيد مستهدف') }
  if(selected.includes('تعفن ثمار/بقع مائية')){ res += '<li>احتمال: تعفن ثمار (فطري/بكتيري)</li>'; recs.push('تحسين التهوية وتجنب بلل الثمار') }
  res += '</ul>';
  res += `<h4>توصيات عامة</h4><ul>${recs.map(r=>'<li>'+r+'</li>').join('')}</ul>`;
  res += `<p class="small">ملاحظة: هذا تشخيص مبدئي — للاستشارة النهائية راجع مهندس محلي أو ارسل صور إضافية.</p>`;
  diagnosisResult.innerHTML = res;
});

// initialize default view (first crop, age 0)
showProgramFor(Object.keys(crops)[0], 0);
