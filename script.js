'use strict';

/* ПЕРЕВОД*/
const translations = {
    ru: {
        skip_link: "Перейти к содержанию",
        nav_seasons: "Сезоны",
        nav_timeline: "Календарь",
        nav_journal: "Журнал",
        nav_traditions: "О традициях",
        header_tagline: "Традиции становятся ближе",
        hero_eyebrow: "ОНЛАЙН-ЖУРНАЛ О ТРАДИЦИЯХ ВИТЕБЩИНЫ",
        hero_title: "Обряды,<br>которые хранят<br>душу края.",
        hero_desc: "От зимних колядных игрищ на Лепельщине до купальских костров над Западной Двиной. Исследуйте праздники, песни и символы Витебской области.",
        hero_btn_start: "Начать путешествие",
        hero_btn_journal: "Листать журнал",
        hero_motto: "ПОМНИТЬ ПРОШЛОЕ. БЕРЕЧЬ НАСТОЯЩЕЕ.",
        hero_img_alt: "Традиционный народный костюм и обрядовый венок Витебского Поозерья",
        hero_caption_idx: "01 / ПООЗЕРЬЕ",
        hero_caption_note: "Наследие, пережившее столетия",
        seasons_title: "У каждого сезона — свой обряд",
        seasons_reset: "Все праздники",
        season_winter_dates: "Январь - Февраль",
        season_winter_title: "Каляды",
        season_winter_text: "Колядные песни, хождение со звездой и знаменитая игра «Женитьба Терешки» на Лепельщине.",
        season_spring_dates: "Март - Май",
        season_spring_title: "Гуканне вясны",
        season_spring_text: "Заклички с высоких холмов, украшение деревьев лентами и выпечка обрядовых жаворонков.",
        season_summer_dates: "Июнь - Июль",
        season_summer_title: "Купалле",
        season_summer_text: "Ночь огня и воды на берегах Двины и Браславских озёр, венки на воде и поиск папараць-кветкі.",
        season_autumn_dates: "Сентябрь - Ноябрь",
        season_autumn_title: "Дажынкі і Дзяды",
        season_autumn_text: "Чествование последнего снопа, благодарность земле за урожай и тихие семейные вечера памяти.",
        season_explore: "Исследовать",
        timeline_eyebrow: "ГОДОВОЙ КРУГ ТРАДИЦИЙ",
        timeline_title: "Год менялся. Обряд за обрядом.",
        timeline_link: "Слушать фольклор",
        t_date_1: "7 января",
        t_ev_1: "Калядныя вечары",
        t_pl_1: "Лепельский район",
        t_date_2: "Февраль",
        t_ev_2: "Масленіца і проводы зимы",
        t_pl_2: "Городокский район",
        t_date_3: "Апрель",
        t_ev_3: "Вялікдзень и валачобнікі",
        t_pl_3: "Глубокский край",
        t_date_4: "Ночь на 7 июля",
        t_ev_4: "Купалле над Дзвіной",
        t_pl_4: "Полоцк и Браслав",
        t_date_5: "Сентябрь",
        t_ev_5: "Багач і Дажынкі",
        t_pl_5: "Вся Витебщина",
        focus_title: "В фокусе традиции",
        focus_subtitle: "Живой взгляд на народный календарь Витебщины",
        art_1_meta: "ЗИМА — ЛЕПЕЛЬЩИНА — 3 МИН",
        art_1_title: "«Женитьба Терешки»: как играли свадьбы на Коляды",
        art_1_desc: "Уникальный обряд, включённый в список нематериального культурного наследия Беларуси: музыка, танцы и народный юмор.",
        art_2_meta: "ЛЕТО — ПООЗЕРЬЕ — 1.5 МИН",
        art_2_title: "Огонь на воде: символика купальского венка",
        art_2_desc: "Какие травы собирали на рассвете в Витебском крае и почему венки со свечами доверяли течению Западной Двины.",
        art_3_meta: "ВЕСНА — ВИТЕБСК — 4 МИН",
        art_3_title: "Гречневые блины и песни с пригорка",
        art_3_desc: "Как жители северной Беларуси провожали долгую зиму и зазывали первых перелётных птиц веснянками.",
        artifact_eyebrow: "СИМВОЛ В ДЕТАЛЯХ",
        artifact_title: "Один рушник.<br>Целая история.",
        artifact_desc: "Красный геометрический орнамент на небелёном льне сопровождал каждый праздник Витебщины. Ромб с точками означал засеянное поле, а волнистая линия — воды Западной Двины.",
        artifact_btn_zoom: "Рассмотреть орнамент поближе",
        artifact_zoom_back: "Вернуть обычный масштаб",
        artifact_extra_strong: "Расшифровка узора:",
        artifact_extra_text: "Восьмиконечная звезда («ружа») в центре композиции — древний оберег солнца и семейного благополучия на праздниках «Багач» и «Дажынкі».",
        artifact_code: "МУЗЕЙНЫЙ ФОНД — ВИТЕБСК, XIX В.",
        artifact_img_alt: "Традиционный витебский рушник с красным геометрическим орнаментом на белым льне",
        feedback_title: "Обратная связь",
        feedback_desc: "Знаете местный обряд, семейную историю или хотите поделиться архивным снимком Витебщины?<br>Напишите редакции журнала.",
        feedback_name_label: "Ваше имя",
        feedback_name_placeholder: "Ваше имя",
        feedback_email_label: "Ваша электронная почта",
        feedback_email_placeholder: "Ваша электронная почта",
        feedback_message_label: "Сообщение",
        feedback_message_placeholder: "Расскажите о традиции или задайте вопрос...",
        feedback_btn: "Отправить",
        feedback_note: "Отправляя сообщение, вы соглашаетесь на обработку контактных данных для ответа редакции.",
        footer_slogan: "Традиции ближе, чем кажется.",
        footer_contacts: "Контакты",
        footer_copy: "© 2026 Спадчына Віцебшчыны — Источники: архив ВОМЦНТ и музеев Витебской области",
        footer_quote: "Традиция — это диалог, который продолжается."
    },
    be: {
        skip_link: "Перайсці да зместу",
        nav_seasons: "Сезоны",
        nav_timeline: "Каляндар",
        nav_journal: "Часопіс",
        nav_traditions: "Пра традыцыі",
        header_tagline: "Традыцыі становяцца бліжэй",
        hero_eyebrow: "АНЛАЙН-ЧАСОПІС ПРА ТРАДЫЦЫІ ВІЦЕБШЧЫНЫ",
        hero_title: "Абрады,<br>якія захоўваюць<br>душу краю.",
        hero_desc: "Ад зімовых калядных ігрышчаў на Лепельшчыне да купальскіх вогнішчаў над Заходняй Дзвіной. Даследуйце святы, песні і сімвалы Віцебскай вобласці.",
        hero_btn_start: "Пачаць падарожжа",
        hero_btn_journal: "Гртаць часопіс",
        hero_motto: "ПАМЯЦЬ МІНУЛАГА. БЕРАЧЬ БУДУЧЫНЮ.",
        hero_img_alt: "Традыцыйны народны костюм і абрадавы вянок Віцебскага Паазер'я",
        hero_caption_idx: "01 / ПААЗЕР'Е",
        hero_caption_note: "Спадчына, якая перажыла стагоддзі",
        seasons_title: "У кожнага сезона — свой абрад",
        seasons_reset: "Усе святы",
        season_winter_dates: "Студзень - Люты",
        season_winter_title: "Каляды",
        season_winter_text: "Калядныя песні, хаджэнне са зоркай і знакамітая гульня «Вяселле Цярэшкі» на Лепельшчыне.",
        season_spring_dates: "Сакавік - Май",
        season_spring_title: "Гуканне вясны",
        season_spring_text: "Заклічкі з высокіх ўзгоркаў, упрыгожванне дрэваў стужкамі і выпяканне абрадавых жаўрукоў.",
        season_summer_dates: "Чэрвень - Ліпень",
        season_summer_title: "Купалле",
        season_summer_text: "Ноч агню і вады на берагах Дзвіны і Браслаўскіх азёр, вянкі на вадзе і пошук папараць-кветкі.",
        season_autumn_dates: "Верасень - Лістапад",
        season_autumn_title: "Дажынкі і Дзяды",
        season_autumn_text: "Ушанаванне апошняга снопа, падзяка зямлі за ўраджай і ціхія сямейныя вечары памяці.",
        season_explore: "Даследаваць",
        timeline_eyebrow: "ГАДАВЫ КОЛ ТРАДЫЦЫЙ",
        timeline_title: "Год мяняўся. Абрад за абрадам.",
        timeline_link: "Слухаць фальклор",
        t_date_1: "7 студзеня",
        t_ev_1: "Калядныя вечары",
        t_pl_1: "Лепельскі раён",
        t_date_2: "Люты",
        t_ev_2: "Масленіца і проводы зімы",
        t_pl_2: "Гарадоцкі раён",
        t_date_3: "Красавік",
        t_ev_3: "Вялікдзень і валачобнікі",
        t_pl_3: "Глыбоцкі край",
        t_date_4: "Ноч на 7 ліпеня",
        t_ev_4: "Купалле над Дзвіной",
        t_pl_4: "Полацк і Браслаў",
        t_date_5: "Верасень",
        t_ev_5: "Багач і Дажынкі",
        t_pl_5: "Уся Віцебшчына",
        focus_title: "У фокусе традыцыі",
        focus_subtitle: "Жывы погляд на народны каляндар Віцебшчыны",
        art_1_meta: "ЗІМА — ЛЕПЕЛЬШЧЫНА — 3 ХВ",
        art_1_title: "«Вяселле Цярэшкі»: як гулялі вяселлі на Каляды",
        art_1_desc: "Унікальны абрад, уключаны ў спіс нематэрыяльнай культурнай спадчыны Беларусі: музыка, танцы і народны гумар.",
        art_2_meta: "ЛЕТА — ПААЗЕР'Е — 1.5 ХВ",
        art_2_title: "Агонь на вадзе: сімволіка купальскага вянка",
        art_2_desc: "Якія травы збіралі на світанку ў Віцебскім краі і чаму вянкі са свечкамі давяралі плыні Заходняй Дзвіны.",
        art_3_meta: "ВЯСНА — ВІЦЕБСК — 4 ХВ",
        art_3_title: "Грэчныя млінцы і песні з узгорка",
        art_3_desc: "Як жыхары паўночнай Беларусі праважалі доўгую зіму і зазывалі першых пералётных птушак вяснянкамі.",
        artifact_eyebrow: "СІМВАЛ У ДЭТАЛЯХ",
        artifact_title: "Адзін ручнік.<br>Цэлая гісторыя.",
        artifact_desc: "Чрвоны геаметрычны арнамент на небеленай ільняной тканіне суправаджаў кожнае свята Віцебшчыны. Ромб з кропкамі азначаў засеянае поле, а хвалістая лінія — воды Заходняй Дзвіны.",
        artifact_btn_zoom: "Разгледзець арнамент бліжэй",
        artifact_zoom_back: "Вярнуць звычайны маштаб",
        artifact_extra_strong: "Расшыфроўка ўзору:",
        artifact_extra_text: "Васьміканцовая зорка («ружа») у цэнтры кампазіцыі — старажытны абярэг сонца і сямейнага дабрабыту на святах «Багач» і «Дажынкі».",
        artifact_code: "МУЗЕЙНЫ ФОНД — ВІЦЕБСК, XIX СТ.",
        artifact_img_alt: "Традыцыйны віцебскі ручнік з чырвоным геаметрычным арнаментам на белым ільне",
        feedback_title: "Зваротная сувязь",
        feedback_desc: "Ведаеце мясцовы абрад, сямейную гісторыю або хочаце падзяліцца архіўным здымкам Віцебшчыны?<br>Напішыце рэдакцыі часопіса.",
        feedback_name_label: "Ваша імя",
        feedback_name_placeholder: "Ваша імя",
        feedback_email_label: "Ваша электронная пошта",
        feedback_email_placeholder: "Ваша электронная пошта",
        feedback_message_label: "Паведамленне",
        feedback_message_placeholder: "Раскажыце пра традыцыю або задайце пытанне...",
        feedback_btn: "Адправіць",
        feedback_note: "Адпраўляючы паведамленне, вы згаджаецеся на апрацоўку кантактных даных для адказу рэдакцыі.",
        footer_slogan: "Традыцыі бліжэй, чым здаецца.",
        footer_contacts: "Кантакты",
        footer_copy: "© 2026 Спадчына Віцебшчыны — Крыніцы: архіў ВОМЦНТ і музеяў Віцебскай вобласці",
        footer_quote: "Традыцыя — гэта дыялог, які працягваецца."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initBurgerMenu();
    initRevealOnScroll();
    initSeasonSelection();
    initArtifactZoom();
    initArticleCarousel();
    initVideoModal();
    initFeedbackForm();
});

/* Переключение языков */
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('site-lang') || 'ru';

    setLanguage(savedLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('site-lang', lang);
        });
    });
}

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.dataset.i18nAlt;
        if (dict[key] !== undefined) {
            el.alt = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dict[key] !== undefined) {
            el.placeholder = dict[key];
        }
    });

    document.querySelectorAll('.article-card[data-title-key]').forEach(card => {
        const titleKey = card.dataset.titleKey;
        if (dict[titleKey]) {
            card.dataset.title = dict[titleKey];
        }
    });

    const zoomBtn = document.getElementById('toggle-zoom-btn');
    const visualBox = document.getElementById('artifact-box');
    if (zoomBtn && visualBox) {
        const isZoomed = visualBox.classList.contains('zoomed');
        zoomBtn.textContent = isZoomed ? dict['artifact_zoom_back'] : dict['artifact_btn_zoom'];
    }
}

/* 1. Мобильное меню */
function initBurgerMenu() {
    const burger = document.getElementById('burger-btn');
    const nav = document.getElementById('main-nav');
    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
        const expanded = nav.classList.toggle('open');
        burger.setAttribute('aria-expanded', String(expanded));
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        });
    });
}

/* 2. Плавное появление элементов при прокрутке */
function initRevealOnScroll() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    items.forEach(el => observer.observe(el));
}

/* 3. Фильтрация карточек по сезонам */
function initSeasonSelection() {
    const seasonButtons = document.querySelectorAll('.season-card__link');
    const resetBtn = document.getElementById('reset-season-btn');
    const seasonCards = document.querySelectorAll('.season-card');
    const articles = document.querySelectorAll('.article-card');

    function filterBySeason(season) {
        seasonCards.forEach(card => {
            card.classList.toggle('is-active', card.dataset.season === season);
        });

        articles.forEach(article => {
            if (season === 'all' || article.dataset.season === season) {
                article.classList.remove('is-dimmed');
            } else {
                article.classList.add('is-dimmed');
            }
        });
    }

    seasonButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const season = btn.dataset.filter;
            filterBySeason(season);
        });
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => filterBySeason('all'));
    }
}

/* 4. Зум артефакта (рушник) */
function initArtifactZoom() {
    const zoomBtn = document.getElementById('toggle-zoom-btn');
    const visualBox = document.getElementById('artifact-box');
    const extraInfo = document.getElementById('artifact-extra');

    if (!zoomBtn || !visualBox || !extraInfo) return;

    zoomBtn.addEventListener('click', () => {
        const isZoomed = visualBox.classList.toggle('zoomed');
        extraInfo.hidden = !isZoomed;
        const currentLang = document.documentElement.getAttribute('lang') || 'ru';
        const dict = translations[currentLang];

        zoomBtn.textContent = isZoomed
            ? dict['artifact_zoom_back']
            : dict['artifact_btn_zoom'];
    });
}

/* 5. Карусель видео */
function initArticleCarousel() {
    const grid = document.getElementById('articles-grid');
    const prevBtn = document.getElementById('prev-article');
    const nextBtn = document.getElementById('next-article');

    if (!grid || !prevBtn || !nextBtn) return;

    let isAnimating = false;

    function slideCards(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const cards = Array.from(grid.children);
        const outClass = direction === 'next' ? 'is-flipping-out-next' : 'is-flipping-out-prev';
        const inClass = direction === 'next' ? 'flip-in-next' : 'flip-in-prev';

        cards.forEach(card => card.classList.add(outClass));

        setTimeout(() => {
            if (direction === 'next' && grid.firstElementChild) {
                grid.appendChild(grid.firstElementChild);
            } else if (direction === 'prev' && grid.lastElementChild) {
                grid.insertBefore(grid.lastElementChild, grid.firstElementChild);
            }

            cards.forEach(card => card.classList.remove(outClass));
            grid.classList.remove('flip-in-next', 'flip-in-prev');
            void grid.offsetWidth;
            grid.classList.add(inClass);

            setTimeout(() => {
                grid.classList.remove(inClass);
                isAnimating = false;
            }, 600);
        }, 280);
    }

    nextBtn.addEventListener('click', () => slideCards('next'));
    prevBtn.addEventListener('click', () => slideCards('prev'));

    let touchStartX = 0;
    grid.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    grid.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            slideCards(diff > 0 ? 'next' : 'prev');
        }
    }, { passive: true });
}

/* 6. Модальное окно для видео */
function initVideoModal() {
    const modal = document.getElementById('video-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const closeBtn = document.getElementById('modal-close-btn');
    const player = document.getElementById('modal-video-player');
    const modalTitle = document.getElementById('modal-video-title');
    const cards = document.querySelectorAll('.article-card[data-video]');

    if (!modal || !player || !modalTitle) return;

    let lastFocusedCard = null;

    function openModal(card) {
        const videoSrc = card.dataset.video;
        const titleText = card.dataset.title || '';

        lastFocusedCard = card;
        modalTitle.textContent = titleText;
        player.src = videoSrc;
        modal.hidden = false;
        document.body.style.overflow = 'hidden';

        player.play().catch(() => {});
        closeBtn.focus();
    }

    function closeModal() {
        player.pause();
        player.removeAttribute('src');
        player.load();
        modal.hidden = true;
        document.body.style.overflow = '';

        if (lastFocusedCard) {
            lastFocusedCard.focus();
        }
    }

    cards.forEach(card => {
        const previewVideo = card.querySelector('video');

        if (previewVideo) {
            card.addEventListener('mouseenter', () => {
                previewVideo.play().catch(() => {});
            });
            card.addEventListener('mouseleave', () => {
                previewVideo.pause();
                previewVideo.currentTime = 0;
            });
        }

        card.addEventListener('click', () => openModal(card));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(card);
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) {
            closeModal();
        }
    });
}

/* 7. Валидация и отправка обратной связи */
function initFeedbackForm() {
    const form = document.getElementById('feedback-form');
    const nameInput = document.getElementById('sender-name');
    const emailInput = document.getElementById('sender-email');
    const messageInput = document.getElementById('feedback-message');
    const feedback = document.getElementById('form-feedback');

    if (!form || !nameInput || !emailInput || !messageInput || !feedback) return;

    const EMAILJS_CONFIG = {
        publicKey: 'N206Dzbb4npZ_MDFd',
        serviceId: 'service_lc49j0v',
        templateId: 'template_fyhfgd9'
    };

    if (window.emailjs && EMAILJS_CONFIG.publicKey) {
        emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const currentLang = document.documentElement.getAttribute('lang') || 'ru';
        const isBe = currentLang === 'be';

        feedback.classList.remove('is-error', 'is-success');

        if (!name) {
            feedback.textContent = isBe
                ? 'Калі ласка, увядзіце ваша імя.'
                : 'Пожалуйста, введите ваше имя.';
            feedback.classList.add('is-error');
            nameInput.focus();
            return;
        }

        if (!emailPattern.test(email)) {
            feedback.textContent = isBe
                ? 'Калі ласка, увядзіце правільны адрас электроннай пошты.'
                : 'Пожалуйста, введите корректный адрес электронной почты.';
            feedback.classList.add('is-error');
            emailInput.focus();
            return;
        }

        if (!message) {
            feedback.textContent = isBe
                ? 'Калі ласка, напішыце паведамленне.'
                : 'Пожалуйста, напишите сообщение.';
            feedback.classList.add('is-error');
            messageInput.focus();
            return;
        }

        if (!window.emailjs) {
            feedback.textContent = isBe
                ? 'Скрыпт EmailJS не загрузіўся.'
                : 'Скрипт EmailJS не загрузился.';
            feedback.classList.add('is-error');
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;

        try {
            await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                {
                    from_name: name,
                    reply_to: email,
                    message: message,
                    lang: currentLang
                }
            );

            feedback.textContent = isBe
                ? `Дзякуй, ${name}! Ваша паведамленне адпраўлена рэдакцыі.`
                : `Спасибо, ${name}! Ваше сообщение отправлено редакции.`;
            feedback.classList.add('is-success');
            form.reset();
        } catch (err) {
            console.error('EmailJS error:', err);
            feedback.textContent = isBe
                ? 'Памылка пры адпраўцы. Паспрабуйце пазней.'
                : 'Ошибка при отправке. Попробуйте ещё раз чуть позже.';
            feedback.classList.add('is-error');
        } finally {
            submitBtn.disabled = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('footer-audio');
    const toggleBtn = document.getElementById('footer-player-toggle');
    const range = document.getElementById('footer-player-range');
    const timeEl = document.getElementById('footer-player-time');

    if (!audio || !toggleBtn || !range || !timeEl) return;

    const playIcon = toggleBtn.querySelector('.footer__player-icon--play');
    const pauseIcon = toggleBtn.querySelector('.footer__player-icon--pause');

    const formatTime = (sec) => {
        if (!Number.isFinite(sec) || sec < 0) return '0:00';
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const syncState = (isPlaying) => {
        playIcon.hidden = isPlaying;
        pauseIcon.hidden = !isPlaying;
        toggleBtn.setAttribute('aria-label', isPlaying ? 'Поставить на паузу' : 'Воспроизвести песню');
    };

    toggleBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(() => {});
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('play', () => syncState(true));
    audio.addEventListener('pause', () => syncState(false));

    audio.addEventListener('loadedmetadata', () => {
        timeEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        if (!audio.duration) return;
        range.value = (audio.currentTime / audio.duration) * 100;
        timeEl.textContent = formatTime(audio.currentTime);
    });

    range.addEventListener('input', () => {
        if (!audio.duration) return;
        audio.currentTime = (Number(range.value) / 100) * audio.duration;
    });

    audio.addEventListener('ended', () => {
        syncState(false);
        range.value = 0;
        timeEl.textContent = formatTime(audio.duration);
    });
});