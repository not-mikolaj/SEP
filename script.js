// Quiz data
const questions = [
    {
        text: "Jakie napięcie jest uważane za napięcie niskie według PN-EN 61140?",
        options: [
            "Do 1000 V AC, 1500 V DC",
            "Do 230 V AC",
            "Do 400 V AC",
            "Do 24 V DC"
        ],
        correctAnswer: 0
    },
    {
        text: "Przewód ochronny (PE) w instalacjach elektrycznych ma kolor:",
        options: [
            "Niebieski",
            "Zielono-żółty",
            "Brązowy",
            "Czarny"
        ],
        correctAnswer: 1
    },
    {
        text: "Minimalny przekrój przewodu ochronnego (PE) wynosi:",
        options: [
            "1,5 mm²",
            "10 mm²",
            "16 mm²",
            "25 mm²"
        ],
        correctAnswer: 0
    },
    {
        text: "Jaki jest minimalny przekrój przewodu neutralnego (N) w instalacji elektrycznej?",
        options: [
            "0,5 mm²",
            "1 mm²",
            "1,5 mm²",
            "2,5 mm²"
        ],
        correctAnswer: 2
    },
    {
        text: "Jaki jest minimalny przekrój przewodu ochronno-neutralnego (PEN) dla miedzi?",
        options: [
            "6 mm²",
            "10 mm²",
            "16 mm²",
            "25 mm²"
        ],
        correctAnswer: 2
    },
    {
        text: "Jakie napięcie dostarcza przewód fazowy (L)?",
        options: [
            "230 V",
            "400 V",
            "110 V",
            "24 V"
        ],
        correctAnswer: 0
    },
    {
        text: "Które z poniższych napięć dotyczy układu TN/TT/IT?",
        options: [
            "Napięcie robocze",
            "Napięcie znamionowe",
            "Napięcie dotykowe",
            "Napięcie separowane"
        ],
        correctAnswer: 2
    },
    {
        text: "Co oznacza skrót SELV?",
        options: [
            "Safety Extra Low Voltage",
            "Secure Electric Low Voltage",
            "Special Extra Low Voltage",
            "Standard Electric Low Voltage"
        ],
        correctAnswer: 0
    },
    {
        text: "W którym przypadku stosuje się napięcie PELV?",
        options: [
            "Obwód izolowany od ziemi",
            "Jedna część obwodu jest uziemiona",
            "Napięcie do 50V",
            "Napięcie zasilania nie przekracza 120 V"
        ],
        correctAnswer: 1
    },
    {
        text: "Która z poniższych klas ochrony urządzeń oznacza brak ochrony przy uszkodzeniu?",
        options: [
            "Klasa I",
            "Klasa II",
            "Klasa III",
            "Klasa 0"
        ],
        correctAnswer: 3
    },
    {
        text: "Jaki materiał może zostać zastosowany jako materiał izolacyjny podczas uwalniania porażonego spod działania prądu?",
        options: [
            "Wilgotne drewno",
            "Suche drewno",
            "Metal",
            "Plastik"
        ],
        correctAnswer: 1
    },
    {
        text: "Jakie napięcie jest dopuszczalne w warunkach normalnych dla prądu przemiennego?",
        options: [
            "12 V",
            "30 V",
            "50 V",
            "120 V"
        ],
        correctAnswer: 2
    },
    {
        text: "Przewód fazowy w instalacji elektrycznej jest zazwyczaj koloru:",
        options: [
            "Niebieskiego",
            "Zielono-żółtego",
            "Czarny lub brązowy",
            "Białego"
        ],
        correctAnswer: 2
    },
    {
        text: "Wartość rezystancji skóry człowieka zależy od:",
        options: [
            "Wiek osoby",
            "Stan zawilgocenia skóry",
            "Wagi osoby",
            "Typu przewodnika"
        ],
        correctAnswer: 1
    },
    {
        text: "Wartość rezystancji skóry człowieka przy napieciu powyżej 1000 V staje się:",
        options: [
            "Bardzo wysoka",
            "Znikomą",
            "Niezmienna",
            "Umiarkowana"
        ],
        correctAnswer: 1
    },
    {
        text: "Jakie jest zagrożenie przy używaniu wyłączników różnicowoprądowych o prądzie znamionowym powyżej 30 mA?",
        options: [
            "Zwiększone ryzyko porażenia prądem elektrycznym",
            "Zwiększone ryzyko uszkodzenia urządzeń",
            "Zwiększone ryzyko przepięć",
            "Brak ochrony przed uszkodzeniami"
        ],
        correctAnswer: 0
    },
    {
        text: "Jaki rodzaj prądu jest bardziej niebezpieczny dla zdrowia?",
        options: [
            "Prąd stały",
            "Prąd zmienny o częstotliwości 50 Hz",
            "Prąd zmienny o częstotliwości 500 Hz",
            "Prąd o częstotliwości 1000 Hz"
        ],
        correctAnswer: 1
    },
    {
        text: "Ochrona przy uszkodzeniu, według normy PN-EN 61140, dotyczy ochrony przed:",
        options: [
            "Dotykiem bezpośrednim",
            "Dotykiem pośrednim",
            "Przypadkowymi przepięciami",
            "Wszystkich powyższych"
        ],
        correctAnswer: 1
    },
    {
        text: "W jakich przypadkach należy stosować ochronę IPXXB?",
        options: [
            "Ochrona przed dotknięciem narzędziami",
            "Ochrona przed dotknięciem palcem",
            "Ochrona przed wodą",
            "Ochrona przed wstrząsami mechanicznymi"
        ],
        correctAnswer: 1
    },
    {
        text: "Co to jest napięcie dotykowe?",
        options: [
            "Napięcie, które występuje na obudowie urządzenia elektrycznego",
            "Napięcie wytworzone przez wypadek elektryczny",
            "Napięcie, które może wystąpić przy dotknięciu metalowego przedmiotu pod napięciem",
            "Napięcie, które występuje podczas kontaktu z ziemią"
        ],
        correctAnswer: 2
    },
    {
        text: "Który z poniższych systemów zapewnia oddzielanie obwodów elektrycznych w przypadku awarii?",
        options: [
            "Ochrona podstawowa",
            "Ochrona uzupełniająca",
            "Ochrona przy uszkodzeniu",
            "Ochrona przed przepięciem"
        ],
        correctAnswer: 2
    },
    {
        text: "Wartość graniczna prądu rażeniowego dla prądu zmiennego o częstotliwości 50 Hz wynosi:",
        options: [
            "10 mA",
            "20 mA",
            "30 mA",
            "40 mA"
        ],
        correctAnswer: 2
    },
    {
        text: "Dla ochrony przed porażeniem prądem w instalacjach elektrycznych zaleca się:",
        options: [
            "Izolowanie wszystkich przewodów",
            "Instalowanie tylko wyłączników automatycznych",
            "Wykorzystanie tylko przewodów miedzianych",
            "Ochronę wyłącznie za pomocą bezpieczników"
        ],
        correctAnswer: 0
    },
    {
        text: "Kiedy należy stosować samoczynne wyłączenie zasilania (SWZ)?",
        options: [
            "W przypadku uszkodzenia izolacji podstawowej",
            "Przy przegrzaniu urządzenia",
            "Po odłączeniu instalacji od sieci",
            "Gdy urządzenie wymaga naprawy"
        ],
        correctAnswer: 0
    },
    {
        text: "Przy jakiej wartości impedancji ciała ludzkiego skóra przestaje pełnić funkcję ochronną?",
        options: [
            "Powyżej 1 kΩ",
            "Powyżej 10 kΩ",
            "Powyżej 1000 Ω",
            "Powyżej 1000 kΩ"
        ],
        correctAnswer: 0
    },
    {
        text: "Przy jakiej częstotliwości prąd zmienny może wywołać groźniejsze skutki dla zdrowia?",
        options: [
            "50 Hz",
            "100 Hz",
            "200 Hz",
            "1000 Hz"
        ],
        correctAnswer: 0
    },
    {
        text: "W przypadku porażenia prądem zmiennym, który z objawów może wystąpić?",
        options: [
            "Ból w okolicy uszkodzonej tkanki",
            "Zatrzymanie akcji serca",
            "Drgawki",
            "Wszystkie powyższe"
        ],
        correctAnswer: 3
    },
    {
        text: "Wartość napięcia bezpiecznego dla prądu stałego w warunkach dużego zagrożenia wynosi:",
        options: [
            "25 V",
            "30 V",
            "60 V",
            "120 V"
        ],
        correctAnswer: 0
    },
    {
        text: "Ochrona przed porażeniem prądem przy uszkodzeniu obejmuje:",
        options: [
            "Ochronę przed dotykiem bezpośrednim",
            "Izolację urządzeń",
            "Separację obwodów",
            "Wszystkie powyższe"
        ],
        correctAnswer: 3
    },
    {
        text: "Jakie narzędzie należy użyć do wyłączania napięcia w przypadku porażenia?",
        options: [
            "Narzędzia metalowe",
            "Narzędzia z izolowanymi rączkami",
            "Narzędzia drewniane",
            "Narzędzia plastikowe"
        ],
        correctAnswer: 1
    },
    {
        text: "Jaki jest najczęstszy skutek porażenia prądem elektrycznym dla organizmu ludzkiego?",
        options: [
            "Poparzenia skóry",
            "Uszkodzenia narządów wewnętrznych",
            "Zatrzymanie akcji serca",
            "Drgawki"
        ],
        correctAnswer: 2
    },
    {
        text: "Podczas udzielania pierwszej pomocy przy porażeniu prądem, należy zawsze:",
        options: [
            "Oceniać stan poszkodowanego",
            "Zastosować sztuczne oddychanie",
            "Wezwać pogotowie",
            "Wszystkie powyższe"
        ],
        correctAnswer: 3
    },
    {
        text: "Co oznacza symbol IP2X na obudowie urządzenia?",
        options: [
            "Ochrona przed dotknięciem narzędzi",
            "Ochrona przed dotknięciem palcem",
            "Ochrona przed wilgocią",
            "Ochrona przed kurzem"
        ],
        correctAnswer: 1
    },
    {
        text: "Jaką rolę pełni przewód PEN?",
        options: [
            "Zasila urządzenie",
            "Zapewnia ochronę przed porażeniem",
            "Łączy urządzenia w obwód",
            "Nie pełni żadnej roli"
        ],
        correctAnswer: 1
    },
    {
        text: "Jakie napięcie jest bezpieczne dla urządzeń klasy II?",
        options: [
            "50 V AC",
            "120 V AC",
            "230 V AC",
            "400 V AC"
        ],
        correctAnswer: 2
    },
    {
        text: "Przewód ochronny (PE) w układzie TN/TT/IT pełni funkcję:",
        options: [
            "Zasilania urządzeń",
            "Ochrony przed porażeniem",
            "Przewodzenia prądu",
            "Działania w razie awarii"
        ],
        correctAnswer: 1
    },
    {
        text: "Izolacja podstawowa powinna być odporna na:",
        options: [
            "Tylko uszkodzenia mechaniczne",
            "Wpływy elektryczne i chemiczne",
            "Tylko wysokie temperatury",
            "Tylko na wilgoć"
        ],
        correctAnswer: 1
    },
    {
        text: "Które z poniższych przewodów jest stosowane w instalacjach elektrycznych niskiego napięcia?",
        options: [
            "Przewód instalacyjny typu YDY",
            "Przewód miedziany",
            "Przewód izolowany",
            "Wszystkie powyższe"
        ],
        correctAnswer: 3
    },
    {
        text: "Czym jest tzw. napięcie krokowe?",
        options: [
            "Napięcie między przewodami fazowymi",
            "Napięcie, które występuje między stopami osoby w pobliżu urządzenia pod napięciem",
            "Napięcie podczas dotykania urządzenia elektrycznego",
            "Napięcie generowane przez generator"
        ],
        correctAnswer: 1
    },
    {
        text: "Jakie napięcie jest uważane za niebezpieczne w instalacjach elektrycznych niskiego napięcia?",
        options: [
            "24 V",
            "50 V",
            "100 V",
            "230 V"
        ],
        correctAnswer: 3
    },
    {
        text: "Przewód neutralny (N) ma kolor:",
        options: [
            "Niebieski",
            "Zielono-żółty",
            "Brązowy",
            "Czarny"
        ],
        correctAnswer: 0
    },
    {
        text: "Zgodnie z normą PN-EN 61140, co należy zrobić w przypadku wykrycia uszkodzenia izolacji?",
        options: [
            "Przeprowadzić kontrolę odporności izolacji",
            "Natychmiast wyłączyć zasilanie",
            "Naprawić urządzenie bez wyłączania napięcia",
            "Zastosować dodatkowe zabezpieczenia"
        ],
        correctAnswer: 1
    },
    {
        text: "Jakie napięcie nie przekracza 25 V w systemach niskiego napięcia?",
        options: [
            "Napięcie robocze",
            "Napięcie bezpieczeństwa",
            "Napięcie dopuszczalne",
            "Napięcie zmienne"
        ],
        correctAnswer: 1
    },
    {
        text: "Co to jest zjawisko \"prądu błądzącego\"?",
        options: [
            "Prąd, który zmienia kierunek",
            "Prąd, który przepływa po nieizolowanej powierzchni",
            "Prąd generujący napięcie dotykowe",
            "Prąd o niskim natężeniu, który przechodzi przez ciało"
        ],
        correctAnswer: 1
    }
];

// Quiz state
let selectedOption = null;
let answered = false;
let correctCount = 0;
let incorrectCount = 0;
let skippedCount = 0;
let currentQuestionIndex = null;
let usedQuestions = new Set();

// DOM elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const skipBtn = document.getElementById('skip-btn');
const correctCountSpan = document.getElementById('correct-count');
const incorrectCountSpan = document.getElementById('incorrect-count');
const skippedCountSpan = document.getElementById('skipped-count');
const themeToggle = document.getElementById('theme-toggle');

// Initialize quiz
function initQuiz() {
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    }
    
    // Load first random question
    loadRandomQuestion();
    
    // Event listeners
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', loadRandomQuestion);
    skipBtn.addEventListener('click', skipQuestion);
    themeToggle.addEventListener('click', toggleTheme);
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'true');
    } else {
        themeToggle.textContent = '☀️';
        localStorage.setItem('darkMode', 'false');
    }
}

// Get random question
function getRandomQuestion() {
    // Reset used questions if all have been used
    if (usedQuestions.size >= questions.length) {
        usedQuestions.clear();
    }
    
    // Find a question that hasn't been used recently
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.has(randomIndex));
    
    // Add to used questions
    usedQuestions.add(randomIndex);
    
    return {
        question: questions[randomIndex],
        index: randomIndex
    };
}

// Load random question
function loadRandomQuestion() {
    // Get random question
    const { question, index } = getRandomQuestion();
    currentQuestionIndex = index;
    
    // Set question text
    questionText.textContent = question.text;
    
    // Clear options container
    optionsContainer.innerHTML = '';
    
    // Create options
    question.options.forEach((option, optIndex) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.index = optIndex;
        
        optionElement.innerHTML = `
            <input type="radio" name="quiz-option" id="option-${optIndex}" class="option-radio">
            <label for="option-${optIndex}" class="option-text">${option}</label>
            <svg class="icon icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <svg class="icon icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        `;
        
        optionElement.addEventListener('click', () => selectOption(optionElement, optIndex));
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Reset state
    selectedOption = null;
    answered = false;
    checkBtn.disabled = true;
    checkBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    skipBtn.classList.remove('hidden');
    
    // Update progress
    updateProgress();
}

// Select option
function selectOption(optionElement, index) {
    if (answered) return;
    
    // Clear previous selection
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Select current option
    optionElement.classList.add('selected');
    selectedOption = index;
    
    // Enable check button
    checkBtn.disabled = false;
}

// Check answer
function checkAnswer() {
    if (selectedOption === null) return;
    
    answered = true;
    
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const options = document.querySelectorAll('.option');
    
    // Mark correct and incorrect answers
    options.forEach(option => {
        const optionIndex = parseInt(option.dataset.index);
        
        if (optionIndex === correctAnswer) {
            option.classList.add('correct');
        } else if (optionIndex === selectedOption) {
            option.classList.add('incorrect');
        }
    });
    
    // Update score
    if (selectedOption === correctAnswer) {
        correctCount++;
        correctCountSpan.textContent = correctCount;
    } else {
        incorrectCount++;
        incorrectCountSpan.textContent = incorrectCount;
    }
    
    // Update progress
    updateProgress();
    
    // Show next button, hide skip button
    checkBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    skipBtn.classList.add('hidden');
}

// Skip question
function skipQuestion() {
    skippedCount++;
    skippedCountSpan.textContent = skippedCount;
    loadRandomQuestion();
}

// Update progress
function updateProgress() {
    const totalAnswered = correctCount + incorrectCount;
    const accuracy = totalAnswered > 0 ? (correctCount / totalAnswered) * 100 : 0;
    progressBar.style.width = `${accuracy}%`;
}

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', initQuiz); 