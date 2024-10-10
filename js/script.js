// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) { // Ensure the element exists
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('toggle');
    });
}

// Language Toggle
const langToggleBtn = document.getElementById('lang-toggle');
const elements = document.querySelectorAll('[data-key]');

const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_blog: "Blog",
        nav_contact: "Contact",
        hero_title: "Welcome to Amin's Vision",
        hero_subtitle: "Exploring the horizons of technology and innovation.",
        hero_button: "Learn More",
        about_title: "About Me",
        about_text: "Hello! I'm Amin, a passionate technologist dedicated to exploring and sharing insights on the latest advancements in technology and innovation. Through my blog, I aim to provide valuable content that helps you stay informed and inspired in the ever-evolving digital landscape.",
        blog_title: "Latest Posts",
        blog_title_detail: "The Future of AI in Everyday Life",
        blog_date: "Posted on: October 10, 2024",
        blog_category: "Category: Technology",
        blog_paragraph1: "Artificial Intelligence (AI) is no longer a concept confined to science fiction. It's increasingly becoming an integral part of our daily lives, shaping how we work, communicate, and even make decisions. From virtual assistants like Siri and Alexa to advanced data analytics and autonomous vehicles, AI's influence is profound and far-reaching.",
        blog_paragraph2: "One of the most significant impacts of AI is in the realm of healthcare. AI-powered diagnostic tools can analyze medical images with remarkable accuracy, assisting doctors in early disease detection and treatment planning. Additionally, personalized medicine, driven by AI algorithms, is paving the way for treatments tailored to individual genetic profiles, enhancing efficacy and reducing side effects.",
        blog_paragraph3: "In the workplace, AI is automating repetitive tasks, allowing employees to focus on more strategic and creative endeavors. This shift not only increases productivity but also fosters innovation and job satisfaction. Moreover, AI-driven insights are enabling businesses to make data-informed decisions, optimizing operations, and enhancing customer experiences.",
        blog_paragraph4: "However, the rise of AI also brings challenges that society must address. Ethical considerations, such as bias in AI algorithms and the potential for job displacement, require careful deliberation and proactive measures. Ensuring transparency, accountability, and inclusivity in AI development is crucial to harnessing its benefits while mitigating risks.",
        blog_paragraph5: "Looking ahead, the future of AI holds immense potential. Advancements in machine learning, natural language processing, and robotics will continue to push the boundaries of what's possible. As AI becomes more sophisticated, its integration into various sectors will deepen, driving progress and transforming lives in unprecedented ways.",
        contact_title: "Contact Me",
        contact_button: "Send Message",
        contact_email: "Email:",
        contact_telegram: "Telegram:"
    },
    fa: {
        nav_home: "خانه",
        nav_about: "درباره من",
        nav_blog: "بلاگ",
        nav_contact: "تماس",
        hero_title: "به امین ویژن خوش آمدید",
        hero_subtitle: "کاوش در افق‌های فناوری و نوآوری.",
        hero_button: "بیشتر بدانید",
        about_title: "درباره من",
        about_text: "سلام! من امین هستم، تکنولوژیست مشتاقی که به کشف و به اشتراک گذاری بینش‌ها درباره آخرین پیشرفت‌ها در فناوری و نوآوری می‌پردازم. از طریق وبلاگ خود، قصد دارم محتوای ارزشمندی ارائه دهم که به شما کمک می‌کند در چشم‌انداز دیجیتال همیشه در حال تحول، مطلع و الهام‌بخش باقی بمانید.",
        blog_title: "آخرین پست‌ها",
        blog_title_detail: "آینده هوش مصنوعی در زندگی روزمره",
        blog_date: "تاریخ انتشار: ۱۰ اکتبر ۲۰۲۴",
        blog_category: "دسته‌بندی: فناوری",
        blog_paragraph1: "هوش مصنوعی (AI) دیگر مفهومی محدود به علمی تخیلی نیست. به طور فزاینده‌ای بخش جدایی‌ناپذیری از زندگی روزانه ما شده است، و شکل می‌دهد که چگونه کار می‌کنیم، ارتباط برقرار می‌کنیم و حتی تصمیم می‌گیریم. از دستیاران مجازی مانند سیری و الکسا تا تحلیل‌های پیشرفته داده و وسایل نقلیه خودران، تأثیر AI عمیق و گسترده است.",
        blog_paragraph2: "یکی از تأثیرات قابل توجه AI در حوزه بهداشت و درمان است. ابزارهای تشخیص مبتنی بر AI می‌توانند تصاویر پزشکی را با دقت قابل توجهی تجزیه و تحلیل کنند و به پزشکان در تشخیص زودهنگام بیماری و برنامه‌ریزی درمان کمک کنند. علاوه بر این، پزشکی شخصی‌سازی شده که توسط الگوریتم‌های AI هدایت می‌شود، راه را برای درمان‌هایی که به پروفایل‌های ژنتیکی فردی تنظیم شده‌اند، هموار می‌کند و اثربخشی را افزایش داده و عوارض جانبی را کاهش می‌دهد.",
        blog_paragraph3: "در محیط کار، AI در حال اتوماسیون وظایف تکراری است و به کارکنان اجازه می‌دهد بر روی امور استراتژیک‌تر و خلاقانه‌تر تمرکز کنند. این تغییر نه تنها بهره‌وری را افزایش می‌دهد بلکه نوآوری و رضایت شغلی را نیز تقویت می‌کند. علاوه بر این، بینش‌های مبتنی بر AI به کسب‌وکارها اجازه می‌دهد تصمیمات مبتنی بر داده بگیرند، عملیات را بهینه کنند و تجربه مشتری را بهبود بخشند.",
        blog_paragraph4: "با این حال، رشد AI چالش‌هایی را نیز به همراه دارد که جامعه باید با آن‌ها مقابله کند. ملاحظات اخلاقی، مانند تعصب در الگوریتم‌های AI و احتمال جایگزینی شغل‌ها، نیازمند بررسی دقیق و اقدامات پیشگیرانه هستند. اطمینان از شفافیت، پاسخگویی و فراگیر بودن در توسعه AI برای بهره‌برداری از مزایای آن و کاهش خطرات ضروری است.",
        blog_paragraph5: "به آینده نگاه می‌کنیم، آینده AI پتانسیل عظیمی دارد. پیشرفت‌ها در یادگیری ماشین، پردازش زبان طبیعی و رباتیک همچنان مرزهای ممکن را جابه‌جا خواهند کرد. همان‌طور که AI پیچیده‌تر می‌شود، ادغام آن در بخش‌های مختلف عمیق‌تر خواهد شد، پیشرفت را هدایت کرده و زندگی‌ها را به روش‌های بی‌سابقه‌ای تحول خواهد داد.",
        contact_title: "تماس با من",
        contact_button: "ارسال پیام",
        contact_email: "ایمیل:",
        contact_telegram: "تلگرام:"
    }
};

let currentLang = 'en';

if (langToggleBtn) { // Ensure the element exists
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fa' : 'en';
        updateLanguage();
        langToggleBtn.textContent = currentLang === 'en' ? 'فارسی' : 'English';
        // Change text direction
        if(currentLang === 'fa'){
            document.documentElement.setAttribute('lang', 'fa');
            document.body.style.direction = 'rtl';
            document.body.style.textAlign = 'right';
        } else {
            document.documentElement.setAttribute('lang', 'en');
            document.body.style.direction = 'ltr';
            document.body.style.textAlign = 'left';
        }
    });
}

function updateLanguage(){
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if(translations[currentLang][key]){
            el.textContent = translations[currentLang][key];
            // Handle links with href attributes if necessary
            if(el.tagName.toLowerCase() === 'a' && el.href) {
                // Optionally update link URLs based on language
            }
        }
    });
}

// Initial language setup
updateLanguage();

// Start Animation Handling
window.addEventListener('load', () => {
    const startAnimation = document.getElementById('start-animation');
    startAnimation.classList.add('fade-out');
    setTimeout(() => {
        startAnimation.style.display = 'none';
    }, 500); // Match with CSS transition duration
});

// Dynamic Background Colors
const colors = ['#ff5722', '#2196F3', '#4CAF50', '#FFC107', '#9C27B0'];
let colorIndex = 0;
const body = document.body;

setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[colorIndex];
}, 3000);

// Search Functionality
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Array of blog posts
const blogPosts = [
    { title: "The Future of AI in Everyday Life", url: "blog1.html" },
    // Add more blog posts here as you create them
];

// Function to display search results
function displayResults(matches) {
    searchResults.innerHTML = '';
    if(matches.length > 0){
        matches.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            li.addEventListener('click', () => {
                window.location.href = post.url;
            });
            searchResults.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No results found';
        li.style.cursor = 'default';
        li.style.color = '#777777';
        searchResults.appendChild(li);
    }
}

// Event listener for search input
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const matches = blogPosts.filter(post => post.title.toLowerCase().includes(query));
    if(query.length > 0){
        displayResults(matches);
    } else {
        searchResults.innerHTML = '';
    }
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if(!searchInput.contains(e.target) && !searchResults.contains(e.target)){
        searchResults.innerHTML = '';
    }
});
