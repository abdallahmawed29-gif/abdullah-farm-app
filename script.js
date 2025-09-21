const crops = [
  "القمح","الأرز","الذرة","الفول","البرسيم","الفراولة","البطاطس",
  "البصل","الطماطم","الفلفل","الخيار","الباذنجان","القطن","قصب السكر",
  "البرتقال","اليوسفي","الليمون","المانجو","العنب","الرمان",
  "الزيتون","النخيل","الفول السوداني","البطيخ","الشمام","الكوسة",
  "اللوبيا","الفاصوليا","السبانخ","البنجر"
];

window.onload = () => {
  let select = document.getElementById("crop");
  crops.forEach(crop => {
    let opt = document.createElement("option");
    opt.value = crop;
    opt.innerHTML = crop;
    select.appendChild(opt);
  });
};

function showProgram(){
  const crop = document.getElementById("crop").value;
  const age = parseInt(document.getElementById("age").value);
  document.getElementById("programs").style.display = "block";
  let fert = document.getElementById("fertilization");
  let irr = document.getElementById("irrigation");

  fert.innerHTML = `<h3>برنامج التسميد لـ ${crop}</h3>`;
  irr.innerHTML = `<h3>برنامج الري لـ ${crop}</h3>`;

  if(age <= 30){
    fert.innerHTML += "<p>إضافة يوريا + سوبر فوسفات.</p>";
    irr.innerHTML += "<p>ري خفيف يومياً.</p>";
  } else if(age <= 60){
    fert.innerHTML += "<p>إضافة نترات + بوتاسيوم.</p>";
    irr.innerHTML += "<p>ري كل 3 أيام.</p>";
  } else {
    fert.innerHTML += "<p>جرعات متوازنة NPK.</p>";
    irr.innerHTML += "<p>ري حسب طبيعة التربة.</p>";
  }
}
