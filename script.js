// ===== STATE MANAGEMENT =====
const state = {
    userName: "",
    results: { preTest: 0, finalExam: 0, modules: {} },
    totalQuestions: 0,
    completedModules: [],
    currentQuiz: null,
    currentQuizType: null,
    currentQuestionIndex: 0,
    quizScore: 0,
    currentModule: null
};

// ===== DOM ELEMENTS =====
const elements = {
    modulesContainer: document.getElementById('modules-container'),
    moduleModal: document.getElementById('module-modal'),
    moduleModalBody: document.getElementById('modal-body'),
    quizModal: document.getElementById('quiz-modal'),
    quizTitle: document.getElementById('quiz-title'),
    quizContainer: document.getElementById('quiz-question-container'),
    nextBtn: document.getElementById('next-question-btn'),
    nameModal: document.getElementById('name-modal'),
    nameInput: document.getElementById('user-name-input'),
    startBtn: document.getElementById('start-course-btn'),
    certModal: document.getElementById('certificate-modal'),
    certName: document.getElementById('cert-name'),
    certScore: document.getElementById('cert-score'),
    certDate: document.getElementById('cert-date'),
    chatWidget: document.getElementById('chat-widget'),
    chatToggle: document.getElementById('chat-toggle'),
    chatInput: document.getElementById('chat-input'),
    chatMessages: document.getElementById('chat-messages'),
    sendBtn: document.getElementById('send-btn'),
    themeToggle: document.getElementById('theme-toggle'),
    navbar: document.getElementById('navbar'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    navLinks: document.getElementById('nav-links'),
    navbarLogo: document.getElementById('navbar-logo'),
    lightboxModal: document.getElementById('lightbox-modal')
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const saved = localStorage.getItem('theme');
    if (saved) document.body.setAttribute('data-theme', saved);

    // Event Listeners
    elements.startBtn.addEventListener('click', startCourse);
    elements.chatToggle.addEventListener('click', toggleChat);
    elements.sendBtn.addEventListener('click', handleChatSubmit);
    elements.chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleChatSubmit(); });
    elements.themeToggle.addEventListener('click', toggleTheme);

    // Nav CTA buttons -> open name modal
    document.getElementById('nav-start-btn').addEventListener('click', showNameModal);
    document.getElementById('hero-start-btn').addEventListener('click', showNameModal);
    document.getElementById('modules-start-btn').addEventListener('click', showNameModal);

    // Lightbox for Logo, Team, and Supervisors
    const lightboxImg = elements.lightboxModal ? elements.lightboxModal.querySelector('img') : null;
    
    if (elements.navbarLogo && lightboxImg) {
        elements.navbarLogo.addEventListener('click', (e) => {
            e.preventDefault();
            lightboxImg.src = elements.navbarLogo.src;
            elements.lightboxModal.classList.remove('hidden');
        });
    }

    if (lightboxImg) {
        document.querySelectorAll('.team-img-inner img, .supervisor-icon img').forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', (e) => {
                e.preventDefault();
                lightboxImg.src = img.src;
                elements.lightboxModal.classList.remove('hidden');
            });
        });
    }

    // Mobile menu with overlay and animation
    const navOverlay = document.getElementById('nav-overlay');
    elements.mobileMenuBtn.addEventListener('click', () => {
        const isOpen = elements.navLinks.classList.toggle('open');
        elements.mobileMenuBtn.classList.toggle('active', isOpen);
        if (navOverlay) navOverlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    function closeMobileMenu() {
        elements.navLinks.classList.remove('open');
        elements.mobileMenuBtn.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close menu on overlay click
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close modals
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.add('hidden');
        });
    });

    document.getElementById('print-btn').addEventListener('click', () => window.print());

    // Smooth scroll for nav links - close mobile menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            closeMobileMenu();
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', handleScroll);

    // Scroll animations
    initScrollAnimations();

    // Counter animation
    initCounters();

    // Active nav link tracking
    initActiveNavTracking();
});

// ===== THEME =====
function toggleTheme() {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    if (window.updateParticleTheme) window.updateParticleTheme();
}

// ===== NAVBAR =====
function handleScroll() {
    elements.navbar.classList.toggle('scrolled', window.scrollY > 50);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number[data-target]');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsEl = document.querySelector('.hero-stats');
    if (statsEl) observer.observe(statsEl);
}

function animateCounter(el, target) {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
    }, 30);
}

// ===== ACTIVE NAV TRACKING =====
function initActiveNavTracking() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });
    sections.forEach(s => observer.observe(s));
}

// ===== NAME MODAL =====
function showNameModal() {
    elements.nameModal.classList.remove('hidden');
}

function startCourse() {
    const name = elements.nameInput.value.trim();
    if (!name) { alert("الرجاء إدخال اسمك"); return; }
    state.userName = name;
    elements.nameModal.classList.add('hidden');
    startQuiz('preTest', courseData.preTest, "الاختبار القبلي");
}

// ===== MODULE RENDERING =====
function renderModules() {
    elements.modulesContainer.innerHTML = '';
    courseData.modules.forEach((module, index) => {
        const card = document.createElement('div');
        card.className = 'module-card animate-on-scroll visible';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="card-number">0${module.id}</div>
            <h3 class="card-title">${module.title}</h3>
            <p class="card-desc">${module.description}</p>
        `;
        card.addEventListener('click', () => openModule(module));
        elements.modulesContainer.appendChild(card);
    });

    const examCard = document.createElement('div');
    examCard.className = 'module-card animate-on-scroll visible';
    examCard.innerHTML = `
        <div class="card-number">🏆</div>
        <h3 class="card-title">الاختبار النهائي</h3>
        <p class="card-desc">اختبر معلوماتك واحصل على الشهادة</p>
    `;
    examCard.addEventListener('click', () => startQuiz('final', courseData.finalExam, "الاختبار النهائي"));
    elements.modulesContainer.appendChild(examCard);

    // Scroll to modules section
    document.getElementById('modules').scrollIntoView({ behavior: 'smooth' });
}

function openModule(module) {
    state.currentModule = module;
    elements.moduleModalBody.innerHTML = module.content;
    requestAnimationFrame(() => {
        elements.moduleModalBody.parentElement.scrollTop = 0;
        setTimeout(() => elements.moduleModalBody.parentElement.scrollTop = 0, 50);
    });

    if (module.quiz) {
        const btn = document.createElement('button');
        btn.className = 'action-btn';
        btn.textContent = 'اختبر فهمك';
        btn.style.width = '100%';
        btn.onclick = () => {
            elements.moduleModal.classList.add('hidden');
            startQuiz('formative', module.quiz, `اختبار: ${module.title}`);
        };
        elements.moduleModalBody.appendChild(btn);
    }
    elements.moduleModal.classList.remove('hidden');
}

// ===== QUIZ =====
function startQuiz(type, questions, title) {
    state.currentQuiz = questions;
    state.currentQuizType = type;
    state.currentQuestionIndex = 0;
    state.quizScore = 0;
    elements.quizTitle.textContent = title;
    elements.quizModal.classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    const question = state.currentQuiz[state.currentQuestionIndex];
    const indexedOptions = question.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    shuffleArray(indexedOptions);
    elements.quizContainer.innerHTML = `
        <h3 style="margin-bottom:20px;">${question.question}</h3>
        <div class="options-grid">
            ${indexedOptions.map(opt => `
                <button class="quiz-option" data-original-index="${opt.originalIndex}" onclick="selectOption(this, ${opt.originalIndex})">${opt.text}</button>
            `).join('')}
        </div>
    `;
    elements.nextBtn.classList.add('hidden');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.selectOption = (btn, selectedOriginalIndex) => {
    const question = state.currentQuiz[state.currentQuestionIndex];
    document.querySelectorAll('.quiz-option').forEach(opt => opt.disabled = true);
    if (selectedOriginalIndex === question.correct) {
        btn.classList.add('correct');
        state.quizScore++;
    } else {
        btn.classList.add('wrong');
        const correctBtn = document.querySelector(`.quiz-option[data-original-index="${question.correct}"]`);
        if (correctBtn) correctBtn.classList.add('correct');
    }
    setTimeout(() => {
        state.currentQuestionIndex++;
        if (state.currentQuestionIndex < state.currentQuiz.length) renderQuestion();
        else finishQuiz();
    }, 1500);
};

function finishQuiz() {
    if (state.currentQuizType === 'preTest') {
        state.results.preTest = state.quizScore;
        elements.quizModal.classList.add('hidden');
        renderModules();
        alert(`أحسنت! نتيجتك في الاختبار القبلي: ${state.quizScore}/${state.currentQuiz.length}`);
    } else if (state.currentQuizType === 'final') {
        state.results.finalExam = state.quizScore;
        elements.quizModal.classList.add('hidden');
        showCertificate();
    } else if (state.currentQuizType === 'formative') {
        const isCorrect = state.quizScore === state.currentQuiz.length;
        if (state.currentModule) {
            const mid = state.currentModule.id;
            state.results.modules[mid] = Math.max(state.results.modules[mid] || 0, state.quizScore);
        }
        elements.quizContainer.innerHTML = `
            <div style="text-align:center;padding:2rem;">
                <div style="font-size:4rem;margin-bottom:1rem;">${isCorrect ? '🎉' : '❌'}</div>
                <h3 style="margin-bottom:1rem;color:${isCorrect ? 'var(--success)' : 'var(--error)'}">${isCorrect ? 'إجابة صحيحة!' : 'إجابة خاطئة'}</h3>
                <p style="margin-bottom:2rem;font-size:1.2rem;">${isCorrect ? 'أحسنت! لقد أتممت هذا القسم بنجاح.' : 'يرجى مراجعة المحتوى والمحاولة مرة أخرى.'}</p>
                <button class="action-btn" onclick="${isCorrect ? 'goToNextModule()' : 'retryModule()'}" style="width:auto;min-width:200px;">${isCorrect ? 'الدرس التالي' : 'مراجعة المحتوى'}</button>
            </div>
        `;
        elements.nextBtn.classList.add('hidden');
    }
}

window.retryModule = () => { elements.quizModal.classList.add('hidden'); openModule(state.currentModule); };
window.goToNextModule = () => {
    elements.quizModal.classList.add('hidden');
    const next = courseData.modules.find(m => m.id === state.currentModule.id + 1);
    if (next) openModule(next);
    else { alert("لقد أتممت جميع المديولات! يمكنك الآن البدء في الاختبار النهائي."); }
};

// ===== CHAT =====
function toggleChat() { elements.chatWidget.classList.toggle('collapsed'); }

function handleChatSubmit() {
    const text = elements.chatInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    elements.chatInput.value = '';
    setTimeout(() => {
        const response = chatSimulator.getResponse(text);
        addMessage(response.aiResponse, 'system');
        response.feedback.forEach(fb => addMessage(fb, 'feedback'));
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }, 800);
}

function addMessage(text, type) {
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.textContent = text;
    elements.chatMessages.appendChild(div);
}

// ===== CERTIFICATE =====
function showCertificate() {
    const totalPossible = courseData.finalExam.length;
    const totalScore = state.results.finalExam;
    const percentage = Math.round((totalScore / totalPossible) * 100);
    elements.certName.textContent = state.userName;
    elements.certScore.textContent = `${percentage}%`;
    elements.certDate.textContent = new Date().toLocaleDateString('ar-EG');
    elements.certModal.classList.remove('hidden');
}

// ===== HERO TYPEWRITER EFFECT =====
(function() {
    const titleEl = document.getElementById('hero-typed-title');
    if (!titleEl) return;

    const lines = [
        { text: 'أتقن', className: 'title-line' },
        { text: 'ChatGPT', className: 'title-line glow-text' },
        { text: 'باحترافية', className: 'title-line' }
    ];

    const TYPE_SPEED = 90;
    const LINE_DELAY = 300;
    const START_DELAY = 600;

    function typeText(text, targetSpan, speed, onDone) {
        let idx = 0;
        const iv = setInterval(() => {
            if (idx < text.length) {
                targetSpan.textContent += text[idx];
                idx++;
            } else {
                clearInterval(iv);
                if (onDone) onDone();
            }
        }, speed);
    }

    // Create cursor
    const cursor = document.createElement('span');
    cursor.className = 'hero-title-cursor';
    titleEl.appendChild(cursor);

    function typeLine(index) {
        if (index >= lines.length) {
            // Done — fade cursor after a moment
            setTimeout(() => {
                cursor.style.transition = 'opacity 0.5s ease';
                cursor.style.opacity = '0';
            }, 1500);
            return;
        }

        const lineData = lines[index];
        const span = document.createElement('span');
        span.className = lineData.className;
        titleEl.insertBefore(span, cursor);

        typeText(lineData.text, span, TYPE_SPEED, () => {
            // Add line break before cursor (except last line)
            if (index < lines.length - 1) {
                titleEl.insertBefore(document.createElement('br'), cursor);
            }
            setTimeout(() => typeLine(index + 1), LINE_DELAY);
        });
    }

    // Start typing after delay
    setTimeout(() => typeLine(0), START_DELAY);
})();

// ===== SECTION TITLES TYPEWRITER EFFECT =====
(function() {
    const TYPE_SPEED = 50;

    function typeInto(el, segments, onDone) {
        let segIdx = 0;
        function typeSegment() {
            if (segIdx >= segments.length) {
                if (onDone) onDone();
                return;
            }
            const seg = segments[segIdx];
            const span = document.createElement('span');
            if (seg.className) span.className = seg.className;
            // Insert before cursor
            const cursor = el.querySelector('.section-title-cursor');
            if (cursor) el.insertBefore(span, cursor);
            else el.appendChild(span);

            let charIdx = 0;
            const iv = setInterval(() => {
                if (charIdx < seg.text.length) {
                    span.textContent += seg.text[charIdx];
                    charIdx++;
                } else {
                    clearInterval(iv);
                    segIdx++;
                    typeSegment();
                }
            }, TYPE_SPEED);
        }
        typeSegment();
    }

    // Parse each section-title into segments
    const titles = document.querySelectorAll('.section-title');
    const titleData = [];

    titles.forEach(title => {
        const segments = [];
        title.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                if (text.trim()) segments.push({ text: text, className: '' });
            } else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('gradient-text')) {
                segments.push({ text: node.textContent, className: 'gradient-text' });
            }
        });
        titleData.push({ el: title, segments: segments, typed: false });
        // Empty the title
        title.innerHTML = '';
        // Add cursor
        const cursor = document.createElement('span');
        cursor.className = 'section-title-cursor hero-title-cursor';
        cursor.style.opacity = '0';
        title.appendChild(cursor);
    });

    // Observe each title
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const data = titleData.find(d => d.el === entry.target);
                if (data && !data.typed) {
                    data.typed = true;
                    const cursor = data.el.querySelector('.section-title-cursor');
                    if (cursor) cursor.style.opacity = '1';
                    typeInto(data.el, data.segments, () => {
                        // Fade cursor after done
                        setTimeout(() => {
                            if (cursor) {
                                cursor.style.transition = 'opacity 0.5s ease';
                                cursor.style.opacity = '0';
                            }
                        }, 1200);
                    });
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });

    titleData.forEach(d => observer.observe(d.el));
})();
