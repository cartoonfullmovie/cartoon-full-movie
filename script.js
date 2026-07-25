// 🌟 قاعدة بيانات الكرتون الشاملة 🌟
const libraryData = [
    {
        id: 1,
        name: "سلاحف النينجا",
        category: "مسلسلات",
        secondaryCategory: "مدبلج",
        age: "7-12 سنة",
        img: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=300",
        isSeries: true, 
        parts: [
            { 
                name: "سلاحف النينجا - الموسم الأول (الحلقة 1)", 
                badge: "الموسم 1",
                group: "الموسم الأول",
                servers: [
                    { name: "ديلي موشن 📺", url: "https://www.dailymotion.com/embed/video/xap685u" },
                    { name: "فيسبوك 👥", url: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/v/1DVtw7sjyG/&show_text=0" }
                ]
            },
            { 
                name: "سلاحف النينجا - الموسم الثاني", 
                badge: "الموسم 2",
                group: "الموسم الثاني",
                servers: [
                    { name: "سيرفر 1 🎥", url: "https://www.youtube.com/embed/gLshK7p9o2E" },
                    { name: "سيرفر الاحتياط 🔄", url: "https://www.youtube.com/embed/fD14S9A_mlo" }
                ]
            },
            { 
                name: "فيلم سلاحف النينجا: مغامرة الفضاء", 
                badge: "فيلم مميز",
                group: "أفلام السلسلة",
                servers: [
                    { name: "سيرفر أساسي 🎥", url: "https://www.youtube.com/embed/fD14S9A_mlo" },
                    { name: "سيرفر خارجي 🌐", url: "https://www.youtube.com/embed/S_7iWofBfhs" }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "رحلة الفضاء العجيبة",
        category: "تعليمي",
        secondaryCategory: "مدبلج",
        age: "3-6 سنوات",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300",
        isSeries: true,
        parts: [
            { 
                name: "رحلة الفضاء - الحلقة الأولى: كوكب المريخ", 
                badge: "الحلقة 1",
                group: "مغامرات الكواكب",
                servers: [
                    { name: "سيرفر 1 🚀", url: "https://www.youtube.com/embed/fD14S9A_mlo" },
                    { name: "سيرفر 2 🛰️", url: "https://www.youtube.com/embed/S_7iWofBfhs" }
                ]
            },
            { 
                name: "رحلة الفضاء - الحلقة الثانية: حلقة زحل اللامعة", 
                badge: "الحلقة 2",
                group: "مغامرات الكواكب",
                servers: [
                    { name: "سيرفر الأساسي 🌌", url: "https://www.youtube.com/embed/S_7iWofBfhs" },
                    { name: "سيرفر السحاب ☁️", url: "https://www.youtube.com/embed/fD14S9A_mlo" }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "مدرسة الحروف والعلوم",
        category: "تعليمي",
        secondaryCategory: "الكل",
        age: "3-6 سنوات",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=300",
        servers: [
            { name: "سيرفر يوتيوب 🎒", url: "https://www.youtube.com/embed/S_7iWofBfhs" },
            { name: "سيرفر المنصة التعليمية 🏫", url: "https://www.youtube.com/embed/pT79K0M2gZ0" }
        ]
    },
    {
        id: 4,
        name: "الأرنب الكوميدي الضاحك",
        category: "مترجم",
        secondaryCategory: "مسلسلات",
        age: "7-12 سنة",
        img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300",
        servers: [
            { name: "سيرفر كوميدي 1 🥕", url: "https://www.youtube.com/embed/XgS8yR8_hO0" },
            { name: "سيرفر كوميدي 2 🎭", url: "https://www.youtube.com/embed/gLshK7p9o2E" }
        ]
    },
    {
        id: 5,
        name: "أغنية الأرقام والحيوانات",
        category: "اناشيد",
        secondaryCategory: "الكل",
        age: "3-6 سنوات",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300",
        servers: [
            { name: "سيرفر نغمات 🎹", url: "https://www.youtube.com/embed/pT79K0M2gZ0" },
            { name: "سيرفر ألحان 🎼", url: "https://www.youtube.com/embed/LgRGo8G-2Zg" }
        ]
    },
    {
        id: 6,
        name: "أنشودة النظافة الجميلة",
        category: "اناشيد",
        secondaryCategory: "الكل",
        age: "جميع الأعمار",
        img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=300",
        servers: [
            { name: "سيرفر نظافة 🫧", url: "https://www.youtube.com/embed/LgRGo8G-2Zg" },
            { name: "سيرفر حركي 🏃", url: "https://www.youtube.com/embed/pT79K0M2gZ0" }
        ]
    },
    {
        id: 7,
        name: "تلوين ورسم قناع السلحفاة",
        category: "انشطة",
        secondaryCategory: "الكل",
        age: "جميع الأعمار",
        img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=300",
        isDownloadable: true 
    },
    {
        id: 8,
        name: "نشاط قص ولصق أشكال الفضاء",
        category: "انشطة",
        secondaryCategory: "الكل",
        age: "7-12 سنة",
        img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=300",
        isDownloadable: true
    }
];

let currentCategory = "الكل";
let isInsideSeries = false;
let activeServers = []; 

window.onload = function() {
    renderContent();
    setTimeout(() => {
        document.getElementById("assistantBubble").innerText = "يا مرحباً بك يا بطل! 🍿";
    }, 2000);
};

function toggleAssistantSpeech() {
    const video = document.getElementById("assistantVideo");
    const bubble = document.getElementById("assistantBubble");
    
    if (video.paused) {
        video.muted = false;
        video.play().then(() => {
            bubble.innerText = "أهلاً بك! أنا صديقك المساعد السحري 🌟";
        }).catch(error => {
            console.log("المتصفح حظر الصوت التلقائي: " + error);
        });
        
        setTimeout(() => {
            video.pause();
            bubble.innerText = "اضغط عليّ مجدداً لأتحدث! 👍";
        }, 8000);
    } else {
        video.pause();
        bubble.innerText = "اضغط عليّ مجدداً لأتحدث! 👍";
    }
}

// دالة العرض المقسمة
function renderContent(searchQuery = "") {
    isInsideSeries = false;
    document.getElementById("backBtn").style.display = "none"; 
    document.getElementById("heroSection").style.display = "flex"; 
    
    const container = document.getElementById("displayContainer");
    container.innerHTML = ""; 

    const filteredData = libraryData.filter(item => {
        const matchesCategory = (currentCategory === "الكل" || item.category === currentCategory || item.secondaryCategory === currentCategory);
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredData.length === 0) {
        container.innerHTML = `<div class="no-results">🔍 لم نجد أي عروض مطابقة لبحثك.. جرب كلمة أخرى ممتعة!</div>`;
        return;
    }

    const groups = {};
    filteredData.forEach(item => {
        const groupName = item.age || "عروض عامة";
        if (!groups[groupName]) groups[groupName] = [];
        groups[groupName].push(item);
    });

    for (const groupName in groups) {
        const titleHeading = document.createElement("h3");
        titleHeading.className = "sub-group-title";
        titleHeading.innerHTML = `<span>👶</span> الفئة العمرية: ${groupName}`;
        container.appendChild(titleHeading);

        const grid = document.createElement("div");
        grid.className = "grid-layout";

        groups[groupName].forEach(item => {
            const card = createCartoonCard(item);
            grid.appendChild(card);
        });

        container.appendChild(grid);
    }
}

function createCartoonCard(item) {
    const card = document.createElement("div");
    card.className = "cartoon-card";
    
    if (item.isSeries) {
        card.onclick = () => openSeriesDetails(item.id);
    } else if (item.isDownloadable) {
        card.onclick = () => alert("📥 جاري تحميل ورقة نشاط: " + item.name + " جاهزة للطباعة المنزلية!");
    } else {
        card.onclick = () => playVideo(item.name, item.servers, item.age);
    }

    const badgeHTML = item.isSeries ? `<span class="series-badge">🎬 سلسلة أجزاء</span>` : '';

    card.innerHTML = `
        ${badgeHTML}
        <img src="${item.img}" alt="${item.name}" class="cartoon-thumb" />
        <div class="cartoon-info">
            <div class="cartoon-name">${item.name}</div>
            <span class="age-badge">${item.isDownloadable ? '✂️ نشاط ورقي' : item.age}</span>
        </div>
    `;
    return card;
}

function openSeriesDetails(seriesId) {
    isInsideSeries = true;
    const series = libraryData.find(item => item.id === seriesId);
    if (!series) return;

    document.getElementById("heroSection").style.display = "none";
    document.getElementById("pageTitle").innerText = `📂 أجزاء وحلقات: ${series.name}`;
    document.getElementById("backBtn").style.display = "block";

    const container = document.getElementById("displayContainer");
    container.innerHTML = ""; 

    const seriesGroups = {};
    series.parts.forEach(part => {
        const groupName = part.group || "الحلقات الرئيسية";
        if (!seriesGroups[groupName]) seriesGroups[groupName] = [];
        seriesGroups[groupName].push(part);
    });

    for (const groupName in seriesGroups) {
        const titleHeading = document.createElement("h3");
        titleHeading.className = "sub-group-title";
        titleHeading.innerHTML = `<span>📺</span> ${groupName}`;
        container.appendChild(titleHeading);

        const grid = document.createElement("div");
        grid.className = "grid-layout";

        seriesGroups[groupName].forEach(part => {
            const card = document.createElement("div");
            card.className = "cartoon-card";
            card.onclick = () => playVideo(part.name, part.servers, series.age);

            card.innerHTML = `
                <img src="${series.img}" alt="${part.name}" class="cartoon-thumb" />
                <div class="cartoon-info">
                    <div class="cartoon-name">${part.name}</div>
                    <span class="age-badge" style="background-color: var(--accent-blue); color: white;">${part.badge}</span>
                </div>
            `;
            grid.appendChild(card);
        });

        container.appendChild(grid);
    }

    window.scrollTo({ top: 150, behavior: 'smooth' });
}

function backToMain() {
    const pageTitle = document.getElementById("pageTitle");
    if (currentCategory === "الكل") pageTitle.innerText = "✨ المقترحة لك الآن";
    else pageTitle.innerText = "🎬 قسم: " + currentCategory;

    document.getElementById("searchInput").value = "";
    renderContent();
}

function selectCategory(category, event) {
    if (event) event.preventDefault();
    
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
    });
    if (event) {
        event.currentTarget.classList.add('active');
    } else {
        document.querySelector('.sidebar-link').classList.add('active');
    }

    currentCategory = category;
    
    const pageTitle = document.getElementById("pageTitle");
    if (category === "الكل") pageTitle.innerText = "✨ المقترحة لك الآن";
    else pageTitle.innerText = "🎬 قسم: " + (category === "اناشيد" ? "أناشيد الأطفال" : category === "انشطة" ? "أنشطة وتلوين" : category);

    renderContent();
}

function handleSearch() {
    const query = document.getElementById("searchInput").value;
    renderContent(query);
}

function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'ar-SA';
        recognition.start();

        document.getElementById("assistantBubble").innerText = "أنا أستمع إليك الآن... 🎤";

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById("searchInput").value = transcript;
            handleSearch();
            document.getElementById("assistantBubble").innerText = `بحثت عن: ${transcript} 🔎`;
        };
    } else {
        alert("خاصية البحث الصوتي غير مدعومة في هذا المتصفح.");
    }
}

function openParentalLock() {
    const num1 = Math.floor(Math.random() * 5) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;
    const answer = prompt(`بوابة الوالدين 🔒\nيرجى حل المسألة الرياضية التالية للدخول:\nكم يساوي ${num1} + ${num2} ؟`);
    
    if (parseInt(answer) === (num1 + num2)) {
        alert("تم التحقق بنجاح! مرحباً بك في لوحة تحكم الوالدين (إدارة وقت الشاشة والحظر).");
    } else if (answer !== null) {
        alert("إجابة خاطئة! لا يمكن الدخول.");
    }
}

function playVideo(title, servers, age) {
    activeServers = servers || [];
    document.getElementById("modalVideoName").innerText = title;
    document.getElementById("modalVideoAge").innerText = "مناسب لـ: " + age;

    const serversList = document.getElementById("serversList");
    serversList.innerHTML = "";

    if (activeServers.length > 0) {
        activeServers.forEach((server, index) => {
            const btn = document.createElement("button");
            btn.className = `server-btn ${index === 0 ? 'active' : ''}`;
            btn.innerText = server.name;
            btn.onclick = () => switchServer(index, server.url);
            serversList.appendChild(btn);
        });

        document.getElementById("videoIframe").src = activeServers[0].url;
    }

    document.getElementById("videoModal").style.display = "flex";
}

function switchServer(index, url) {
    const btns = document.querySelectorAll(".server-btn");
    btns.forEach((btn, i) => {
        if (i === index) btn.classList.add("active");
        else btn.classList.remove("active");
    });

    document.getElementById("videoIframe").src = url;
}

function closeVideo() {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("videoIframe").src = "";
}