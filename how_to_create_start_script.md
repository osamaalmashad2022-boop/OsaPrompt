# دليل إنشاء ملف تشغيل المشروع (Start Project.bat)

ملف الـ **Batch (.bat)** هو ملف نصي يحتوي على أوامر يتم تنفيذها في سطر الأوامر (CMD) بنقرة واحدة. إليك كيفية إنشائه وفهم الأوامر الموجودة بداخله.

## 1. كيفية إنشاء الملف
1. اذهب إلى مجلد المشروع الخاص بك.
2. انقر بزر الفأرة الأيمن في مكان فارغ واختر **New** -> **Text Document**.
3. أعد تسمية الملف إلى `Start Project.bat` (تأكد من تغيير الامتداد من `.txt` إلى [.bat](file:///c:/Users/mm/Desktop/%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9/Start%20Project.bat)).
4. سيظهر تحذير، اضغط **Yes**.
5. انقر بزر الفأرة الأيمن على الملف واختر **Edit** لتعديله.

## 2. شرح الأوامر الأساسية
إليك الكود الموجود في ملفك وشرح كل سطر:

```batch
@echo off
title Project Launcher
echo Starting the Project...
echo Please wait while the server starts...
node server.js
pause
```

*   **`@echo off`**: يمنع إظهار الأوامر نفسها في الشاشة، ويُبقي المخرجات نظيفة (يظهر فقط ما تكتبه بـ `echo`).
*   **`title [Name]`**: يغير اسم نافذة الـ CMD التي ستفتح.
*   **`echo [Message]`**: يطبع نصاً على الشاشة للمستخدم.
*   **`node server.js`**: هذا هو الأمر الفعلي لتشغيل الخادم الخاص بك (يفترض وجود ملف [server.js](file:///c:/Users/mm/Desktop/%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9/server.js)).
*   **`pause`**: يمنع النافذة من الإغلاق فوراً بعد الانتهاء، مما يسمح لك برؤية أي أخطاء قد حدثت.

## 3. إضافات مفيدة
يمكنك تطوير الملف ليقوم بمهام أكثر، مثل فتح المتصفح تلقائياً:

```batch
@echo off
title My Awesome Project
echo Starting Server...
start http://localhost:3000
node server.js
pause
```

*   **`start http://...`**: سيفتح المتصفح الافتراضي على الرابط المحدد.
*   **`code .`**: (إذا كان لديك VS Code) سيفتح المجلد الحالي في المحرر.

> [!TIP]
> تأكد دائماً من وجود ملف [server.js](file:///c:/Users/mm/Desktop/%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9/server.js) في نفس المجلد، أو قم بتغيير المسار في الملف.
