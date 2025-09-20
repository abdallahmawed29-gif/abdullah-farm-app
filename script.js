const crops = {
'قمح':{'icon':'assets/crop_wheat.png','stages':[{'name':'التأسيس','from':0,'to':30,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'خلط بالتربة'},{'name':'سوبر فوسفات','qty':'20-40 كجم/فدان','method':'أساس'}],'irr':{'note':'ري خفيف لتثبيت البادرات','qty':'---'}},{'name':'النمو الخضري','from':31,'to':70,'fert':[{'name':'يوريا','qty':'20-30 كجم/فدان','method':'تقسيم الجرعات'}],'irr':{'note':'حسب التربة والطقس','qty':'---'}},{'name':'التزهير والتكوين','from':71,'to':9999,'fert':[{'name':'بوتاسيوم','qty':'20-40 كجم/فدان','method':'قبل التكوين'}],'irr':{'note':'تفادي العطش أثناء التزهير','qty':'---'}}]},
'ذرة':{'icon':'assets/crop_corn.png','stages':[{'name':'التأسيس','from':0,'to':20,'fert':[{'name':'سماد بلدي','qty':'1-2 طن/فدان','method':'قبل الزراعة'},{'name':'سوبر فوسفات','qty':'20-40 كجم','method':'أساس'}],'irr':{'note':'ري خفيف'}},{'name':'النمو','from':21,'to':60,'fert':[{'name':'يوريا أو نترات أمونيوم','qty':'20-40 كجم/فدان','method':'جرعات مقسمة'}],'irr':{'note':'زيادة الري حسب الحاجة'}},{'name':'الملء','from':61,'to':9999,'fert':[{'name':'بوتاسيوم','qty':'20-50 كجم/فدان','method':'لتحسين حجم الحبوب'}],'irr':{'note':'ادارة الري بحذر'}}]},
'بطاطس':{'icon':'assets/crop_potato.png','stages':[{'name':'التأسيس','from':0,'to':20,'fert':[{'name':'كمبوست','qty':'2-4 طن/فدان','method':'خلط بالتربة'},{'name':'سوبر فوسفات','qty':'20-40 كجم','method':'اساس'}],'irr':{'note':'ري خفيف يومي','qty':'5-8 لتر/نبتة/يوم'}},{'name':'النمو','from':21,'to':50,'fert':[{'name':'يوريا','qty':'15-30 كجم/فدان','method':'تقسيم'},{'name':'سلفات مغنيسيوم','qty':'10-15 كجم/فدان','method':'مع الري'}],'irr':{'note':'ري متوازن','qty':'10-15 لتر/نبتة/يوم'}},{'name':'التزهير والعقد','from':51,'to':80,'fert':[{'name':'بوتاسيوم (MOP)','qty':'30-50 كجم/فدان','method':'دعم تكوين الدرنات'}],'irr':{'note':'زيادة الري خلال التكوين','qty':'15-20 لتر/نبتة/يوم'}},{'name':'قبل الحصاد','from':81,'to':9999,'fert':[{'name':'تقليل النيتروجين','qty':'قليل','method':'تحسين التخزين'}],'irr':{'note':'تقليل الري قبل الحصاد'}}]},
'طماطم':{'icon':'assets/crop_tomato.png','stages':[{'name':'التأسيس','from':0,'to':20,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'خلط'},{'name':'فوسفور (سوبر فوسفات)','qty':'20-30 كجم','method':'اساس'}],'irr':{'note':'ري خفيف متكرر','qty':'2-4 لتر/نبتة/يوم'}},{'name':'التزهير','from':21,'to':60,'fert':[{'name':'يوريا مقسمة','qty':'15-25 كجم/فدان','method':'تقسيم'},{'name':'بوتاسيوم (MOP)','qty':'20-40 كجم/فدان','method':'دعم النضج'}],'irr':{'note':'ري منتظم لمنع التشقق','qty':'4-8 لتر/نبتة/يوم'}},{'name':'نضج','from':61,'to':9999,'fert':[{'name':'تقليل النيتروجين','qty':'قليل','method':'تحسين التخزين'}],'irr':{'note':'تقليل الري قبل الحصاد'}}]},
'فراولة':{'icon':'assets/crop_straw.png','stages':[{'name':'التأسيس','from':0,'to':14,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'خلط'}],'irr':{'note':'ري خفيف','qty':'2-4 لتر/نبتة/يوم'}},{'name':'النمو والازهار','from':15,'to':45,'fert':[{'name':'NPK 20-20-20 (رش)','qty':'تركيز منخفض','method':'رش ورقي'},{'name':'سلفات بوتاسيوم','qty':'10-20 كجم/فدان','method':'تحسين الجودة'}],'irr':{'note':'تنقيط مفضل','qty':'4-6 لتر/نبتة/يوم'}},{'name':'نضج','from':46,'to':9999,'fert':[{'name':'بوتاسيوم (K2SO4)','qty':'20-40 كجم/فدان','method':'تحسين الطعم'}],'irr':{'note':'انتظام الري'}}]},
'بطيخ':{'icon':'assets/crop_waterm.png','stages':[{'name':'التأسيس','from':0,'to':20,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'اساس'}],'irr':{'note':'رطوبة منتظمة'}},{'name':'تكوين الثمار','from':21,'to':60,'fert':[{'name':'فوسفور وبوتاسيوم','qty':'20-40 كجم','method':'دعم التكوين'}],'irr':{'note':'زيادة الري'}},{'name':'موالح':{'icon':'assets/crop_citrus.png','stages':[{'name':'بعد العقد','from':30,'to':90,'fert':[{'name':'نيتروجين متوازن','qty':'20-40 كجم/فدان','method':'بعد العقد'}],'irr':{'note':'ري معتدل'}},{'name':'قبل التسويق','from':91,'to':9999,'fert':[{'name':'بوتاسيوم','qty':'20-40 كجم/فدان','method':'تحسين الجودة'}],'irr':{'note':'حسب الحاجة'}}]},
// NOTE: rest of crops will be added programmatically below for size reasons
};
// To avoid a very long inline file we add remaining crops dynamically
const moreCrops = {
'عنب':{'icon':'assets/crop_grape.png','stages':[{'name':'التأسيس','from':0,'to':60,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'قبل الزراعة'}],'irr':{'note':'ري خفيف'}},{'name':'التكوين','from':61,'to':9999,'fert':[{'name':'بوتاسيوم','qty':'20-40 كجم/فدان','method':'لتحسين الحلاوة'}],'irr':{'note':'تقليل الري قبل الحصاد'}}]},
'مانجو':{'icon':'assets/crop_mango.png','stages':[{'name':'قبل التزهير','from':0,'to':120,'fert':[{'name':'NPK متوازن','qty':'20-30 كجم/شجرة','method':'قبل التزهير'}],'irr':{'note':'ري عميق بين الفترات'}}]},
'بصل':{'icon':'assets/crop_onion.png','stages':[{'name':'التأسيس','from':0,'to':40,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'قبل الزراعة'},{'name':'فوسفور','qty':'15-30 كجم','method':'اساس'}],'irr':{'note':'ري خفيف'}},{'name':'النمو','from':41,'to':9999,'fert':[{'name':'يوريا','qty':'10-20 كجم/فدان','method':'تقسيم'}],'irr':{'note':'تجنب الغمر'}}]},
'ثوم':{'icon':'assets/crop_garlic.png','stages':[{'name':'التأسيس','from':0,'to':60,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'قبل الزراعة'}],'irr':{'note':'ري منتظم'}},{'name':'النمو','from':61,'to':9999,'fert':[{'name':'يوريا','qty':'قليل','method':'تعزيز'}],'irr':{'note':'تقليل الري قرب الحصاد'}}]},
'فاصوليا':{'icon':'assets/crop_bean.png','stages':[{'name':'التأسيس','from':0,'to':20,'fert':[{'name':'فوسفور','qty':'15-25 كجم','method':'اساس'}],'irr':{'note':'ري منتظم'}},{'name':'التزهير','from':21,'to':50,'fert':[{'name':'نيتروجين خفيف','qty':'قليل','method':'تعزيز التزهير'}],'irr':{'note':''}},{'name':'نضج','from':51,'to':9999,'fert':[{'name':'توازن','qty':'--','method':'--'}],'irr':{'note':''}}]},
'فول_سوداني':{'icon':'assets/crop_peanut.png','stages':[{'name':'التأسيس','from':0,'to':30,'fert':[{'name':'فوسفور','qty':'20-40 كجم','method':'اساس'}],'irr':{'note':'ري معتدل'}},{'name':'نضج','from':31,'to':9999,'fert':[{'name':'توازن','qty':'--','method':'--'}],'irr':{'note':''}}]},
'خيار':{'icon':'assets/crop_cucumber.png','stages':[{'name':'التأسيس','from':0,'to':14,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'خلط'}],'irr':{'note':'ري منتظم'}},{'name':'الانتاج','from':15,'to':9999,'fert':[{'name':'NPK متوازن','qty':'حسب الحاجة','method':'رش او تربة'}],'irr':{'note':'تنقيط مفضل'}}]},
'فلفل':{'icon':'assets/crop_pepper.png','stages':[{'name':'التاسيس','from':0,'to':20,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'اساس'}],'irr':{'note':'ري خفيف'}},{'name':'التزهير','from':21,'to':60,'fert':[{'name':'يوريا خفيف','qty':'قليل','method':'تقسيم'}],'irr':{'note':''}},{'name':'نضج','from':61,'to':9999,'fert':[{'name':'بوتاسيوم','qty':'15-30 كجم','method':'لتحسين الثمار'}],'irr':{'note':''}}]},
'باذنجان':{'icon':'assets/crop_eggplant.png','stages':[{'name':'التأسيس','from':0,'to':20,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'اساس'}],'irr':{'note':'ري خفيف'}},{'name':'النمو','from':21,'to':60,'fert':[{'name':'NPK متوازن','qty':'حسب الحاجة','method':'تسميد'}],'irr':{'note':''}}]},
'جزر':{'icon':'assets/crop_carrot.png','stages':[{'name':'التأسيس','from':0,'to':30,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'اساس'}],'irr':{'note':'ري متكرر'}}]},
'بروكلي':{'icon':'assets/crop_broccoli.png','stages':[{'name':'التأسيس','from':0,'to':30,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'اساس'}],'irr':{'note':'ري متكرر'}},{'name':'نمو','from':31,'to':9999,'fert':[{'name':'NPK متوازن','qty':'حسب الحاجة','method':'تسميد'}],'irr':{'note':''}}]},
'خس':{'icon':'assets/crop_lettuce.png','stages':[{'name':'التأسيس','from':0,'to':20,'fert':[{'name':'كمبوست','qty':'1-2 طن/فدان','method':'اساس'}],'irr':{'note':'ري خفيف متكرر'}}]}
};
// merge moreCrops into crops
Object.assign(crops, moreCrops);

const nutrients = [
  {'name':'النيتروجين (N)','function':'دعم النمو الخضري','def':'اصفرار الأوراق القديمة','fix':'يوريا أو نترات أمونيوم','img':'assets/nut_N.png'},
  {'name':'الفوسفور (P)','function':'تطوير الجذور','def':'نمو بطيء','fix':'سوبر فوسفات','img':'assets/nut_P.png'},
  {'name':'البوتاسيوم (K)','function':'جودة الثمار','def':'تلف حواف الأوراق','fix':'MOP','img':'assets/nut_K.png'}
];

const symptomsOptions = ['بقع بيضاء/بودرية (بياض دقيقي)','بقع بنية/مائية','اصفرار عام (Chlorosis)','ذبول/ذبول فجائي','ثقوب/أكل (آفات)','تعفن ثمار'];

function el(id){return document.getElementById(id);}

// render crop grid
const cropGrid = el('cropGrid');
Object.keys(crops).forEach(key=>{
    const c = crops[key];
    const node = document.createElement('div');
    node.className = 'crop-item';
    node.innerHTML = `<img src="${c.icon}" alt=""><div><strong>${key}</strong><div class="small">اضغط للاختيار</div></div>`;
    node.onclick = ()=> selectCrop(key, node);
    cropGrid.appendChild(node);
});
let selectedNode = null;
let selectedCrop = Object.keys(crops)[0];

function selectCrop(key, node){
    selectedCrop = key;
    if(selectedNode) selectedNode.style.borderColor = '#eef6ee';
    node.style.borderColor = '#cfe8cf';
    selectedNode = node;
    showProgramFor(selectedCrop, parseInt(el('ageInput').value || '0'));
}

// render deficiencies tab
el('def').innerHTML = nutrients.map(n=>`<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px"><img src="${n.img}" style="width:48px;border-radius:6px"><div><strong>${n.name}</strong><div class="small">${n.function}</div><div class="small"><em>أعراض:</em> ${n.def}</div><div class="small"><em>حل:</em> ${n.fix}</div></div></div>`).join('');

el('guidelinesContent').innerHTML = `<ul><li>افحص التربة (pH) قبل التسميد.</li><li>قسّم جرعات النيتروجين.</li><li>استخدم تنقيط لتوفير المياه.</li><li>سجل كل التطبيق في دفتر الحقل.</li></ul>`;

// tabs
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-page').forEach(p=>p.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
}));

el('showBtn').addEventListener('click', ()=>{
    const age = parseInt(el('ageInput').value || '0');
    if(!selectedCrop){ alert('اختر محصول'); return; }
    if(!Number.isInteger(age)){ alert('اكتب العمر بالأيام'); return; }
    showProgramFor(selectedCrop, age);
});

function showProgramFor(crop, age){
    const data = crops[crop];
    const fertEl = el('fert');
    const irrEl = el('irr');
    let html = `<h3>${crop} — عمر النبات: ${age} يوم</h3>`;
    const stage = data.stages.find(s=> age>=s.from && age<=s.to) || data.stages[data.stages.length-1];
    html += `<h4>المرحلة الحالية: ${stage.name}</h4>`;
    html += `<h5>التسميد المقترح لهذه المرحلة</h5><table><tr><th>السماد</th><th>الكمية</th><th>الطريقة</th></tr>`;
    stage.fert.forEach(f=> html += `<tr><td>${f.name}</td><td>${f.qty}</td><td>${f.method || ''}</td></tr>`);
    html += `</table><p class="small">ملاحظة: الكميات تقريبية ويجب تعديلها حسب تحليل التربة ومساحة الفدان.</p>`;
    fertEl.innerHTML = html;
    irrEl.innerHTML = `<h4>المرحلة: ${stage.name}</h4><p>${stage.irr.note}</p><p class="small"><strong>مرجع كمية:</strong> ${stage.irr.qty || '---'}</p>`;
}

// image diagnosis UI
el('imgFile').addEventListener('change', (e)=>{
    const f = e.target.files[0]; if(!f) return;
    el('preview').src = URL.createObjectURL(f); el('preview').style.display='block';
    el('symptomsArea').style.display='block'; el('symptomsList').innerHTML='';
    symptomsOptions.forEach(s=>{ const d=document.createElement('div'); d.className='tag'; d.innerText=s; d.onclick=()=> d.classList.toggle('selected'); el('symptomsList').appendChild(d); });
    el('diagnosisResult').innerHTML='';
});
el('diagBtn').addEventListener('click', ()=>{
    const selected = Array.from(document.querySelectorAll('.tag.selected')).map(t=>t.innerText);
    if(selected.length===0){ alert('اختار عرض'); return; }
    let res = '<h4>تشخيص مبدئي</h4><ul>'; let recs=[];
    if(selected.includes('بقع بيضاء/بودرية (بياض دقيقي)')){ res+='<li>بياض دقيقي (فطري)</li>'; recs.push('رش مبيد فطري ملامس'); }
    if(selected.includes('بقع بنية/مائية')){ res+='<li>بقع فطرية/بكتيرية</li>'; recs.push('عزل المصاب ورش مبيد مناسب'); }
    if(selected.includes('اصفرار عام (Chlorosis)')){ res+='<li>نقص عناصر أو خلل ري</li>'; recs.push('افحص pH والتربة'); }
    if(selected.includes('ذبول/ذبول فجائي')){ res+='<li>ذبول جرثومي/فطري أو جذر</li>'; recs.push('افحص الجذور وقلل الري إذا لزم'); }
    if(selected.includes('ثقوب/أكل (آفات)')){ res+='<li>آفات حشرية</li>'; recs.push('مكافحة متكاملة'); }
    if(selected.includes('تعفن ثمار')){ res+='<li>تعفن ثمار</li>'; recs.push('تحسين التهوية وتقليل البلل'); }
    res += '</ul>'; res += `<h4>توصيات</h4><ul>${recs.map(r=>'<li>'+r+'</li>').join('')}</ul>`;
    res += `<p class='small'>ملاحظة: تشخيص مبدئي. للاستشارة النهائية تواصل مهندس زراعي.</p>`;
    el('diagnosisResult').innerHTML = res;
});
// init default view
showProgramFor(selectedCrop, 0);
