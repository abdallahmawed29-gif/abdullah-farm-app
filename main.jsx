import React,{useMemo,useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const crops={
 'خضروات':['طماطم','بطاطس','بصل','ثوم','خيار','فلفل','باذنجان','كوسة','جزر','بنجر','خس','كرنب','قرنبيط','بروكلي','سبانخ','ملوخية','فاصوليا','بسلة','بامية','قلقاس','بطاطا','فجل','لفت'],
 'فاكهة':['مانجو','برتقال','يوسفي','ليمون','جريب فروت','عنب','فراولة','موز','تفاح','خوخ','مشمش','كمثرى','رمان','تين','زيتون','جوافة','بابايا','أفوكادو','نخيل التمر','بطيخ','شمام'],
 'محاصيل حقلية':['قمح','ذرة شامية','ذرة رفيعة','أرز','قطن','فول بلدي','عدس','حمص','فول سوداني','سمسم','عباد الشمس','قصب السكر','بنجر السكر','شعير','ترمس','حلبة','كراوية','كزبرة'],
 'أعلاف ونباتات أخرى':['برسيم','سورجم علفي','ذرة علفية','دخن','ريحان','نعناع','يانسون','شمر','بابونج','زعتر','روزماري']
};
const cropInfo={
 'طماطم':{water:'متوسط إلى مرتفع',soil:'تربة جيدة الصرف',salinity:'حساسة نسبيًا',tips:'توازن الري وتجنب البلل الزائد على الأوراق.'},
 'قمح':{water:'متوسط',soil:'طميية جيدة الصرف',salinity:'متوسطة التحمل',tips:'راقب التفريع والصدأ والحشائش في المراحل المبكرة.'},
 'ذرة شامية':{water:'متوسط إلى مرتفع',soil:'خصبة جيدة الصرف',salinity:'متوسطة',tips:'أهم فترات الاحتياج للماء حول التزهير وامتلاء الحبوب.'},
 'أرز':{water:'مرتفع',soil:'طينية تحتفظ بالماء',salinity:'حساسة نسبيًا',tips:'إدارة المياه والتسميد النيتروجيني أساسيان للإنتاج.'},
 'بطاطس':{water:'متوسط',soil:'خفيفة جيدة الصرف',salinity:'متوسطة الحساسية',tips:'تجنب تعطيش النبات ثم الري الغزير المفاجئ.'}
};
function App(){
 const [tab,setTab]=useState('home'); const [group,setGroup]=useState('خضروات'); const [crop,setCrop]=useState('طماطم'); const [age,setAge]=useState('30'); const [question,setQuestion]=useState(''); const [image,setImage]=useState(null); const [answer,setAnswer]=useState('');
 const info=useMemo(()=>cropInfo[crop]||{water:'يحدد حسب المرحلة والظروف',soil:'يُحدد حسب المحصول وتحليل التربة',salinity:'تختلف حسب الصنف',tips:'ارفع صورة أو اسأل المساعد للحصول على تحليل أكثر تخصيصًا.'},[crop]);
 function analyze(){setAnswer(`تحليل مبدئي لـ ${crop}: العمر ${age} يوم. الاحتياج المائي: ${info.water}. التربة المناسبة: ${info.soil}. تنبيه: ${info.tips} هذا وضع تجريبي؛ التشخيص الزراعي الحقيقي بالصور يحتاج ربط نموذج رؤية/واجهة API قبل الاعتماد عليه في قرار علاجي.`)}
 return <div>
  <header><div className="brand"><span>🌱</span><div><b>زرع AI</b><small>المساعد الزراعي الذكي</small></div></div><nav>{[['home','الرئيسية'],['diagnose','تشخيص بالصور'],['assistant','اسأل المهندس AI']].map(([id,label])=><button className={tab===id?'active':''} onClick={()=>setTab(id)} key={id}>{label}</button>)}</nav></header>
  <main>
   {tab==='home'&&<>
    <section className="hero"><div><span className="pill">منصة زراعية ذكية</span><h1>ازرع صح… <em>بمعلومة أذكى.</em></h1><p>اختار المحصول والعمر، وخد برنامجًا إرشاديًا مبدئيًا. وارفع صورة أو اسأل المساعد عندما تحتاج تحليلًا أوسع.</p><button className="cta" onClick={()=>setTab('diagnose')}>ابدأ التشخيص 📷</button></div><div className="hero-card">🌾<strong>{Object.values(crops).flat().length}+</strong><span>محصول ونبات في قاعدة البداية</span></div></section>
    <section className="panel"><div className="panel-title"><h2>بيانات المحصول</h2><span>تخصيص سريع</span></div><div className="grid">
      <label>الفئة<select value={group} onChange={e=>{setGroup(e.target.value);setCrop(crops[e.target.value][0])}}>{Object.keys(crops).map(g=><option key={g}>{g}</option>)}</select></label>
      <label>المحصول<select value={crop} onChange={e=>setCrop(e.target.value)}>{crops[group].map(c=><option key={c}>{c}</option>)}</select></label>
      <label>عمر النبات / المحصول (يوم)<input type="number" min="0" value={age} onChange={e=>setAge(e.target.value)}/></label>
    </div></section>
    <section className="cards"><article><span>💧</span><h3>المياه</h3><b>{info.water}</b><p>القرار النهائي يتأثر بالتربة والجو ومرحلة النمو.</p></article><article><span>🧪</span><h3>التربة والملوحة</h3><b>{info.salinity}</b><p>{info.soil}</p></article><article><span>🩺</span><h3>برنامج اليوم</h3><b>مراجعة الحقل</b><p>{info.tips}</p></article></section>
   </>}
   {tab==='diagnose'&&<section className="panel page"><div className="panel-title"><h2>تشخيص النبات بالصور</h2><span>وضع تجريبي</span></div><p>ارفع صورة واضحة للورقة أو الثمرة أو الساق. الواجهة جاهزة، لكن لا تعتمد على النتيجة كتشخيص حقيقي قبل ربط نموذج AI زراعي متخصص.</p><label className="upload">📷 <strong>{image?'تم اختيار صورة':'اختار صورة من جهازك'}</strong><input type="file" accept="image/*" onChange={e=>setImage(e.target.files?.[0]||null)}/></label>{image&&<p className="file">📎 {image.name}</p>}<button className="cta" onClick={analyze}>اعمل تحليل مبدئي</button>{answer&&<div className="result">{answer}</div>}</section>}
   {tab==='assistant'&&<section className="panel page"><div className="panel-title"><h2>اسأل المهندس AI</h2><span>مساعد زراعي</span></div><p>اكتب سؤالك عن الري، التسميد، التربة، الملوحة أو الآفات.</p><textarea value={question} onChange={e=>setQuestion(e.target.value)} placeholder="مثال: عندي طماطم عمرها 40 يوم والورق السفلي بيصفر…"></textarea><button className="cta" onClick={()=>setAnswer(question?`إجابة تجريبية لسؤالك: ${question}\n\nابدأ بقياس رطوبة التربة وفحص الجذور والأوراق وتسجيل ظروف الري والتسميد. في النسخة الإنتاجية سيتم إرسال السؤال إلى نموذج AI زراعي وربطه بقاعدة المحصول والطقس.`:'اكتب السؤال الأول.')}>اسأل الآن</button>{answer&&<div className="result">{answer}</div>}</section>}
   <section className="about"><h2>عن زرع AI</h2><p>منصة عربية لتجميع الإرشاد الزراعي والبيانات المناخية وتحليل صور النباتات في تجربة واحدة.</p><p><b>المهندس عبدالله موعد سالم</b> — للتواصل: <span dir="ltr">01062355724</span></p></section>
  </main><footer>© 2026 زرع AI — نسخة MVP قابلة للتطوير</footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
