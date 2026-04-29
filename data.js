const courseData = {
    preTest: [
        {
            id: 1,
            question: "ما هو العنصر المفقود في هذا الطلب: 'اكتب مقالاً عن القهوة'؟",
            options: ["الموضوع", "السياق والتفاصيل المحددة", "اللغة", "لا شيء مفقود"],
            correct: 1
        },
        {
            id: 2,
            question: "أي من التالي يعتبر أفضل ممارسة عند استخدام ChatGPT؟",
            options: ["استخدام كلمات غامضة", "توفير معلومات واضحة ومحددة", "توقع أن يعرف كل شيء بدون توجيه", "استخدامه فقط للترجمة"],
            correct: 1
        },
        {
            id: 3,
            question: "كيف يمكنك جعل ChatGPT يتبنى أسلوباً معيناً؟",
            options: ["من خلال تحديد النبرة أو الشخصية في الطلب", "من خلال دفع اشتراك", "لا يمكن ذلك", "من خلال الكتابة بحروف كبيرة"],
            correct: 0
        },
        {
            id: 4,
            question: "ما هي الفائدة الرئيسية من 'التحسين التكراري'؟",
            options: ["تضييع الوقت", "الوصول إلى نتائج أكثر دقة وملاءمة", "إرباك النموذج", "زيادة عدد الكلمات فقط"],
            correct: 1
        },
        {
            id: 5,
            question: "إذا أردت جدولاً للمقارنة، ماذا يجب أن تذكر في طلبك؟",
            options: ["أريد مقارنة", "ضع النتائج في جدول", "اكتب نصاً طويلاً", "لا شيء"],
            correct: 1
        }
    ],
    modules: [
        {
            id: 1,
            title: "مقدمة إلى ChatGPT",
            description: "تعرف على ماهية ChatGPT، وكيف يعمل، ولماذا يعتبر ثورة في عالم الذكاء الاصطناعي.",
            content: `
                <h2>مقدمة إلى ChatGPT</h2>
                <div class="media-container">
                    <img src="assets/ai_brain.png" alt="AI Brain" class="module-image">
                </div>
                <p>ChatGPT هو نموذج لغوي متطور تم تطويره بواسطة OpenAI. يتميز بقدرته الفائقة على فهم وإنشاء نصوص تشبه النصوص البشرية، مما يجعله أداة قوية في العديد من المجالات.</p>
                
                <h3>كيف يعمل؟</h3>
                <p>يعتمد ChatGPT على معمارية المحولات (Transformers) وتم تدريبه على كميات هائلة من البيانات النصية. هذا التدريب يمكنه من التنبؤ بالكلمة التالية في الجملة، مما يسمح له بإجراء محادثات متماسكة وتقديم إجابات مفيدة.</p>
                
                <h3>تطبيقاته</h3>
                <ul>
                    <li>كتابة المحتوى الإبداعي والتقني.</li>
                    <li>المساعدة في البرمجة وتصحيح الأخطاء.</li>
                    <li>التلخيص والترجمة.</li>
                    <li>العصف الذهني وتوليد الأفكار.</li>
                </ul>

                <div class="practical-section">
                    <h3>تطبيق عملي</h3>
                    <p>جرب أن تطلب من ChatGPT شرح مفهوم معقد (مثل الفيزياء الكمية) بأسلوب مبسط لطفل في الخامسة.</p>
                </div>
                
                <h3>شاهد وتعلم</h3>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/r10Q6bqtOeU?origin=http://localhost:5000" title="Introduction to ChatGPT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            `,
            quiz: [
                {
                    question: "ما هي التقنية الأساسية التي يعتمد عليها ChatGPT؟",
                    options: ["الشبكات العصبية التقليدية", "معمارية المحولات (Transformers)", "أشجار القرار", "الخوارزميات الجينية"],
                    correct: 1
                }
            ]
        },
        {
            id: 2,
            title: "البداية وتسجيل الدخول",
            description: "خطواتك الأولى للوصول إلى الواجهة وإنشاء حسابك الشخصي للبدء في الاستخدام.",
            content: `
                <h2>الوصول إلى الواجهة</h2>
                <div class="media-container">
                    <img src="assets/signup_mockup.png" alt="Signup Page" class="module-image">
                </div>
                <p>للبدء في استخدام ChatGPT، تحتاج أولاً إلى الوصول إلى الموقع الرسمي وإنشاء حساب.</p>
                
                <h3>خطوات التسجيل:</h3>
                <ol>
                    <li>انتقل إلى موقع OpenAI أو تطبيق ChatGPT.</li>
                    <li>انقر على "Sign Up" لإنشاء حساب جديد.</li>
                    <li>يمكنك التسجيل باستخدام بريدك الإلكتروني، أو حساب Google، Microsoft، أو Apple.</li>
                    <li>بعد تأكيد الحساب، قم بتسجيل الدخول.</li>
                </ol>
                
                <h3>بدء محادثة جديدة</h3>
                <p>بمجرد الدخول، ستجد واجهة بسيطة. انقر على زر "New Chat" (محادثة جديدة) في الزاوية العلوية للبدء. يمكنك الآن كتابة أي سؤال أو طلب في مربع النص بالأسفل.</p>

                <div class="practical-section">
                    <h3>تطبيق عملي</h3>
                    <p>قم بزيارة موقع chat.openai.com وأنشئ حساباً مجانياً، ثم حاول تسجيل الدخول واستكشاف الواجهة الرئيسية.</p>
                </div>

                <h3>شرح خطوات التسجيل</h3>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/kTTS71syexs?origin=http://localhost:5000" title="How to Sign Up" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            `,
            quiz: [
                {
                    question: "ما هو الزر الذي تضغط عليه لبدء محادثة جديدة؟",
                    options: ["Start", "New Chat", "Go", "Login"],
                    correct: 1
                }
            ]
        },
        {
            id: 3,
            title: "صياغة طلبات فعالة (Prompts)",
            description: "تعلم فن كتابة الأوامر (Prompts) للحصول على أفضل النتائج الممكنة من النموذج.",
            content: `
                <h2>فن صياغة الطلبات (Prompt Engineering)</h2>
                <div class="media-container">
                    <img src="assets/prompt_engineering.png" alt="Prompt Engineering Guide" class="module-image">
                </div>
                <p>جودة الإجابة التي تحصل عليها تعتمد بشكل كبير على جودة الطلب الذي تقدمه. الطلب الواضح والمحدد يعطي نتائج أفضل بكثير من الطلب الغامض.</p>
                
                <h3>عناصر الطلب الناجح:</h3>
                <ul>
                    <li><strong>السياق (Context):</strong> أعطِ النموذج خلفية عن الموضوع. (مثال: "بصفتك خبير تسويق...")</li>
                    <li><strong>المهمة (Task):</strong> كن دقيقاً فيما تريده. (مثال: "اكتب قائمة بـ 5 أفكار...")</li>
                    <li><strong>التنسيق (Format):</strong> حدد شكل المخرجات. (مثال: "في جدول"، "كنقاط"، "ككود برمجي")</li>
                    <li><strong>النبرة (Tone):</strong> حدد الأسلوب. (مثال: "رسمي"، "مرح"، "مبسط")</li>
                </ul>
                
                <h3>مثال عملي:</h3>
                <p><strong>طلب ضعيف:</strong> "اكتب عن الصحة."</p>
                <p><strong>طلب قوي:</strong> "بصفتك مدرب لياقة بدنية، اكتب خطة أسبوعية مبسطة لعادات صحية تناسب طلاب الجامعة المشغولين، وقدمها في شكل نقاط."</p>

                <div class="practical-section">
                    <h3>تطبيق عملي</h3>
                    <p>اكتب طلباً (Prompt) تطلب فيه من ChatGPT كتابة رسالة بريد إلكتروني رسمية لمديرك تطلب فيها إجازة، مع تحديد السبب والمدة.</p>
                </div>

                <h3>أساسيات هندسة الأوامر</h3>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/2_3WuekEg4s?origin=http://localhost:5000" title="Prompt Engineering Basics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            `,
            quiz: [
                {
                    question: "أي عنصر يحدد 'شخصية' الذكاء الاصطناعي في الرد؟",
                    options: ["التنسيق", "السياق/الدور", "المهمة", "الطول"],
                    correct: 1
                }
            ]
        },
        {
            id: 4,
            title: "تحسين النتائج",
            description: "كيفية التعامل مع الإجابات وتكرار الطلب للوصول إلى النتيجة المثالية.",
            content: `
                <h2>التحسين التكراري</h2>
                <div class="media-container">
                    <img src="assets/refining_results.png" alt="Refining Results Process" class="module-image">
                </div>
                <p>نادراً ما تكون الإجابة الأولى هي الأفضل. استخدم أسلوب المحادثة لتحسين النتائج.</p>
                
                <h3>استراتيجيات التحسين:</h3>
                <ul>
                    <li><strong>اطلب التعديل:</strong> "اجعل النص أقصر"، "بسط الشرح أكثر"، "أضف أمثلة".</li>
                    <li><strong>صحح المعلومات:</strong> إذا أخطأ النموذج، صححه وأكمل.</li>
                    <li><strong>اطلب وجهات نظر مختلفة:</strong> "ما هي سلبيات هذا الرأي؟"</li>
                </ul>
                
                <h3>نصيحة ذهبية</h3>
                <p>تعامل مع ChatGPT كمساعد ذكي يحتاج إلى توجيه. كلما كنت أكثر تفاعلاً وتحديداً، كانت النتائج أكثر إبهاراً.</p>

                <div class="practical-section">
                    <h3>تطبيق عملي</h3>
                    <p>بعد الحصول على إجابة من ChatGPT، اطلب منه تعديلها لتكون "أكثر اختصاراً" أو "بأسلوب أكثر مرحاً" ولاحظ كيف تتغير النتيجة.</p>
                </div>

                <h3>نصائح للاستخدام الاحترافي</h3>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/sTeoEFzVNSc?origin=http://localhost:5000" title="Tips for Better Results" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            `,
            quiz: [
                {
                    question: "ماذا تفعل إذا كانت إجابة ChatGPT طويلة جداً؟",
                    options: ["أحذف الحساب", "أطلب منه اختصارها", "أبدأ محادثة جديدة", "لا شيء"],
                    correct: 1
                }
            ]
        }
    ],
    finalExam: [
        {
            id: 1,
            question: "ما هو العنصر المفقود في هذا الطلب: 'اكتب مقالاً عن القهوة'؟",
            options: ["الموضوع", "السياق والتفاصيل المحددة", "اللغة", "لا شيء مفقود"],
            correct: 1
        },
        {
            id: 2,
            question: "أي من التالي يعتبر أفضل ممارسة عند استخدام ChatGPT؟",
            options: ["استخدام كلمات غامضة", "توفير معلومات واضحة ومحددة", "توقع أن يعرف كل شيء بدون توجيه", "استخدامه فقط للترجمة"],
            correct: 1
        },
        {
            id: 3,
            question: "كيف يمكنك جعل ChatGPT يتبنى أسلوباً معيناً؟",
            options: ["من خلال تحديد النبرة أو الشخصية في الطلب", "من خلال دفع اشتراك", "لا يمكن ذلك", "من خلال الكتابة بحروف كبيرة"],
            correct: 0
        },
        {
            id: 4,
            question: "ما هي الفائدة الرئيسية من 'التحسين التكراري'؟",
            options: ["تضييع الوقت", "الوصول إلى نتائج أكثر دقة وملاءمة", "إرباك النموذج", "زيادة عدد الكلمات فقط"],
            correct: 1
        },
        {
            id: 5,
            question: "إذا أردت جدولاً للمقارنة، ماذا يجب أن تذكر في طلبك؟",
            options: ["أريد مقارنة", "ضع النتائج في جدول", "اكتب نصاً طويلاً", "لا شيء"],
            correct: 1
        }
    ]
};

// Chat Simulator Logic
const chatSimulator = {
    analyzePrompt: (prompt) => {
        let score = 0;
        let feedback = [];

        // Check for Persona/Role
        if (prompt.match(/بصفتك|تخيل أنك|دورك|أنت|خبير/i)) {
            score += 1;
            feedback.push("✅ ممتاز! لقد حددت دوراً أو شخصية.");
        } else {
            feedback.push("💡 نصيحة: جرب تحديد دور (مثال: 'بصفتك خبير...') للحصول على نتائج أفضل.");
        }

        // Check for Context/Details
        if (prompt.length > 20 && prompt.match(/لـ|عن|بسبب|حيث|الذي/)) {
            score += 1;
            feedback.push("✅ أحسنت بإضافة سياق وتفاصيل.");
        } else {
            feedback.push("💡 نصيحة: أضف المزيد من التفاصيل والسياق لطلبك.");
        }

        // Check for Format
        if (prompt.match(/جدول|نقاط|قائمة|كود|نص|تقرير/i)) {
            score += 1;
            feedback.push("✅ رائع! لقد حددت تنسيق المخرجات.");
        } else {
            feedback.push("💡 نصيحة: حدد الشكل الذي تريد استلام الإجابة به (جدول، نقاط، إلخ).");
        }

        return { score, feedback };
    },

    getResponse: (prompt) => {
        const analysis = chatSimulator.analyzePrompt(prompt);
        let aiResponse = "";

        if (analysis.score >= 2) {
            aiResponse = "هذا طلب ممتاز! بصفتي نموذج ذكاء اصطناعي، فهمت تماماً ما تريده بناءً على السياق والتنسيق الذي قدمته. إليك الإجابة المفصلة التي طلبتها...";
        } else {
            aiResponse = "فهمت طلبك، ولكن يمكنني تقديم نتيجة أفضل إذا زودتني بمزيد من التفاصيل أو حددت السياق بشكل أوضح.";
        }

        return { aiResponse, feedback: analysis.feedback };
    }
};
