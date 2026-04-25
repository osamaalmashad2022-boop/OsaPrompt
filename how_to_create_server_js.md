# دليل إنشاء ملف الخادم (server.js) باستخدام Node.js

ملف [server.js](file:///c:/Users/mm/Desktop/%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9/server.js) هو المحرك الذي يجعل موقعك يعمل على جهازك كـ "خادم محلي" (Local Server). إليك كيفية إنشائه وفهم الأجزاء الأساسية فيه.

## 1. المتطلبات الأساسية
يجب أن يكون برنامج **Node.js** مثبتاً على جهازك. يمكنك التحقق من ذلك بكتابة `node -v` في الـ CMD.

## 2. كيفية إنشاء الملف
1. في مجلد المشروع، أنشئ ملفاً جديداً باسم [server.js](file:///c:/Users/mm/Desktop/%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9/server.js).
2. افتحه باستخدام VS Code أو أي محرر نصوص.
3. انسخ الكود الأساسي (المبسط) التالي:

```javascript
const http = require('http'); // لاستخدام مكتبة الـ HTTP
const fs = require('fs');     // للتعامل مع الملفات
const path = require('path'); // للتعامل مع مسارات الملفات

const PORT = 5000; // المنفذ الذي سيعمل عليه الخادم

const server = http.createServer((req, res) => {
    // تحديد مسار الملف المطلوب (مثلاً index.html)
    let filePath = '.' + req.url;
    if (filePath === './') filePath = './index.html';

    // قراءة الملف وإرساله للمتصفح
    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end('File Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

// تشغيل الخادم
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
```

## 3. شرح الأجزاء الرئيسية
*   **`require('http')`**: استيراد الوحدات الجاهزة في Node.js لبناء الخادم.
*   **`http.createServer`**: الوظيفة التي تستقبل طلباتك من المتصفح (`req`) وترد عليها (`res`).
*   **`fs.readFile`**: وظيفتها البحث عن ملف الـ HTML أو الـ CSS في جهازك وقراءته.
*   **`server.listen(PORT)`**: تجعل البرنامج "يسمع" للطلبات القادمة على الرقم 5000.

## 4. لماذا نحتاج للخادم؟
لا تكتفي المتصفحات أحياناً بفتح ملفات الـ HTML مباشرة (خصوصاً المتقدمة)، بل تحتاج لبيئة خادم لضمان عمل الـ JavaScript والروابط بشكل صحيح وآمن.

> [!IMPORTANT]
> الملف الموجود في مشروعك حالياً يحتوي على ميزات إضافية مثل "التعرف على أنواع الملفات" (MIME Types) و "فتح المتصفح تلقائياً"، وهي تطوير لهذا الكود البسيط.
