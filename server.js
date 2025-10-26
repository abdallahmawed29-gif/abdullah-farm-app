
/*
server.js - AgriScan AI backend stub
- Provides /api/analyze-image (stub) and /api/chat (stub)
- To enable real AI: replace stubs with calls to Roboflow/TensorFlow/your model and OpenAI or other LLM
*/
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
require('dotenv').config();
const app = express();
app.use(express.json());

app.post('/api/analyze-image', upload.single('image'), async (req, res)=>{
  try{
    if(!req.file) return res.status(400).json({ error: 'No image' });
    // For prototype: return sample result
    const result = {
      diagnosis: "تشخيص مبدئي: احتمال إصابة فطرية (مثال)",
      confidence: 0.7,
      recommendation: "عزل الأجزاء المصابة، استخدام مبيد فطري مناسب، وتحسين التهوية."
    };
    // delete uploaded file after use
    fs.unlink(req.file.path, ()=>{});
    return res.json({ ok:true, result });
  }catch(err){
    console.error(err); return res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/chat', async (req, res)=>{
  // stub chat response; in production connect to OpenAI or other LLM
  const { message } = req.body;
  if(!message) return res.status(400).json({ error: 'No message' });
  const reply = "هذه إجابة تجريبية: راجع رطوبة التربة وابدأ بتحليل pH إذا استمرت الأعراض.";
  return res.json({ ok:true, answer: reply });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log('AgriScan backend running on', PORT));
