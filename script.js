// FAZENDA INTERATIVA 6.0 - SUSTAINABLE METROPOLIS LOGIC (ULTIMATE EDITION)

const techData = {
    trator: { title: "BIO-AUTOMAÇÃO", icon: "🚜", content: "Tratores movidos a hidrogênio verde que analisam a microbiota do solo em tempo real, aplicando biofertilizantes em taxa variável apenas onde necessário." },
    drone: { title: "SENTINELAS CLIMÁTICOS", icon: "🛸", content: "Enxames de drones com visão computacional que identificam pragas no início, polinizam flores e dispersam sementes nativas, reduzindo agrotóxicos em 90%." },
    represa: { title: "HIDRO-REGENERAÇÃO", icon: "💧", content: "Sistema de filtragem biológica automatizado que capta água das chuvas, purifica e devolve água limpa para o lençol freático, mantendo o ciclo hídrico perfeito." },
    paineis: { title: "FOTOSSÍNTESE ARTIFICIAL", icon: "☀️", content: "Painéis solares orgânicos transparentes colocados sobre as plantações. Eles filtram a luz solar excedente e geram energia limpa para toda a metrópole agrícola." },
    estufa: { title: "NÚCLEO DE VIDA VERTICAL", icon: "🌿", content: "Produção hidropônica vertical com 0% de emissão de carbono. O clima é 100% controlado por IA, utilizando nutrientes circulares gerados pelo resto da fazenda." },
    celeiro: { title: "CÉREBRO ECOLÓGICO", icon: "📊", content: "O supercomputador central. Uma rede neural avançada que prevê anomalias climáticas e compartilha estratégias de regeneração ambiental global em tempo real." }
};

// 1. Inicialização e Loader
let exploredTechs = new Set();
const totalTechs = 6;

window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
        showNotification("Sincronização Bio-Digital 6.0 Completa! 🟢");
        startTypewriter();
    }, 2500);
    initCounters();
});

// 2. Efeito Typewriter no Hero
function startTypewriter() {
    const text = "Sustentável";
    const el = document.getElementById('typewriter');
    if (!el) return;
    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 150);
        }
    }
    type();
}

// 3. Sistema de Clima Dinâmico
const weatherBtns = document.querySelectorAll('.w-btn');
const html = document.documentElement;

weatherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const weather = btn.getAttribute('data-w');
        html.setAttribute('data-weather', weather);
        weatherBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        html.setAttribute('data-theme', weather === 'storm' ? 'night' : 'day');
    });
});

// 4. Contadores de Impacto Global
function initCounters() {
    const counters = [
        { id: 'carbon-counter', target: 12450, suffix: 't' },
        { id: 'water-counter', target: 850000, suffix: 'L' },
        { id: 'energy-counter', target: 3200, suffix: 'MWh' }
    ];

    counters.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        let current = 0;
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = duration / frameRate;
        const increment = c.target / totalFrames;
        
        const updateCounter = () => {
            current += increment;
            if (current >= c.target) {
                el.innerText = c.target.toLocaleString() + c.suffix;
            } else {
                el.innerText = Math.floor(current).toLocaleString() + c.suffix;
                requestAnimationFrame(updateCounter);
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                requestAnimationFrame(updateCounter);
                observer.disconnect();
            }
        });
        observer.observe(el);
    });
}
// 5. Mini-Game: Desafio de Sustentabilidade 2.0 (Expandido)
let gameScore = 0;
let gameActive = false;
let lastEventIndex = -1; // Variável que memoriza a última pergunta para não repetir

// Banco de Dados de Cenários Expandido
const events = [
    // Cenários de Drones
    { title: "INFESTAÇÃO DE PRAGAS", desc: "Nuvens de gafanhotos detectadas no setor norte!", correct: "drone", msg: "Drones Sentinelas ativados! Dispersando repelente orgânico de citronela." },
    { title: "ALERTA DE INCÊNDIO", desc: "Foco de calor extremo detectado na reserva florestal adjacente.", correct: "drone", msg: "Drones de monitoramento despachados com retardante de chamas biodegradável." },
    { title: "QUEDA NA POLINIZAÇÃO", desc: "Sensores indicam que as flores da estufa não estão sendo polinizadas.", correct: "drone", msg: "Enxame de micro-drones polinizadores ativado com sucesso!" },
    
    // Cenários de Represa / Água
    { title: "INUNDAÇÃO IMINENTE", desc: "Nível da chuva subindo rapidamente, risco de erosão!", correct: "represa", msg: "Comportas Inteligentes abertas! Fluxo controlado para as bacias de contenção." },
    { title: "SECA SEVERA", desc: "O nível de umidade do solo atingiu níveis críticos no Setor Sul.", correct: "represa", msg: "Irrigação de emergência ativada a partir da represa principal!" },
    
    // Cenários de Painéis / Energia
    { title: "ONDA DE CALOR", desc: "As plantas estão superaquecendo sob o sol intenso!", correct: "paineis", msg: "Modo Proteção Ativado! Painéis ajustados para sombreamento e resfriamento." },
    { title: "PICO DE ENERGIA", desc: "O supercomputador do celeiro está consumindo energia além do limite.", correct: "paineis", msg: "Fotossíntese Artificial em capacidade máxima! Energia limpa redirecionada." },
    
    // Cenários de Bio-Tratores / Solo (NOVOS)
    { title: "SOLO POBRE", desc: "A biometria do solo indica falta grave de nitrogênio na zona leste.", correct: "trator", msg: "Bio-Tratores em rota! Aplicando biofertilizante de precisão direto na raiz." },
    { title: "COMPACTAÇÃO DO SOLO", desc: "A terra endureceu após a última tempestade, impedindo o crescimento das raízes.", correct: "trator", msg: "Tratores autônomos ativados para aeração suave, preservando a microbiota da terra." }
];

const startBtn = document.getElementById('start-game');
const gameStatus = document.getElementById('game-status');
const eventTitle = document.getElementById('game-event-title');
const eventDesc = document.getElementById('game-event-desc');
const scoreEl = document.getElementById('game-score');
const gameActionBtns = document.querySelectorAll('.btn-game');

if (startBtn) {
    startBtn.onclick = () => {
        gameActive = true;
        gameScore = 0;
        scoreEl.innerText = "Pontuação: 0";
        startBtn.style.display = "none";
        nextGameEvent();
    };
}

function nextGameEvent() {
    if (!gameActive) return;
    
    // 🧠 LÓGICA ANTI-REPETIÇÃO: Escolhe um número aleatório, mas sorteia de novo se for igual ao anterior
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * events.length);
    } while (randomIndex === lastEventIndex);
    
    lastEventIndex = randomIndex; // Salva a pergunta escolhida para a próxima rodada
    const event = events[randomIndex];
    
    eventTitle.innerText = event.title;
    eventDesc.innerText = event.desc;
    gameStatus.innerText = "AGINDO AGORA...";
    
    gameActionBtns.forEach(btn => {
        btn.onclick = () => {
            if (!gameActive) return; // Evita bugar o botão de duplo clique
            
            if (btn.getAttribute('data-action') === event.correct) {
                gameScore += 100;
                showNotification("Sucesso! " + event.msg + " 🟢");
            } else {
                gameScore -= 50;
                showNotification("Ação incorreta! Dano ao ecossistema detectado. ⚠️");
            }
            
            // Impede que a pontuação fique negativa
            if (gameScore < 0) gameScore = 0;
            
            scoreEl.innerText = "Pontuação: " + gameScore;
            
            if (gameScore >= 500) {
                gameActive = false;
                gameStatus.innerText = "VITÓRIA! Ecossistema Salvo e Estabilizado. 🌍";
                startBtn.style.display = "inline-block";
                startBtn.innerText = "JOGAR NOVAMENTE";
            } else {
                // Dá 0.5s de delay antes da próxima pergunta para o jogador ver os pontos subindo
                setTimeout(nextGameEvent, 500); 
            }
        };
    });
}
// 6. Agro-Bot 2.0 Terminal Flutuante
const terminal = document.getElementById('agro-bot-terminal');
const openTerminalBtn = document.getElementById('open-terminal-btn');
const closeTerminalBtn = document.getElementById('close-terminal');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

if (openTerminalBtn) openTerminalBtn.onclick = () => terminal.classList.remove('terminal-hidden');
if (closeTerminalBtn) closeTerminalBtn.onclick = () => terminal.classList.add('terminal-hidden');

if (terminalInput) {
    terminalInput.onkeydown = (e) => {
        if (e.key === 'Enter') {
            const cmd = terminalInput.value.toLowerCase().trim();
            if (cmd) processCommand(cmd);
            terminalInput.value = "";
        }
    };
}

function processCommand(cmd) {
    let response = "";
    if (cmd === 'help') response = "Comandos: status, weather [sunny/rainy/storm], relatorio, clear, about";
    else if (cmd === 'status') response = "Sistemas: 100% | Bio-Atividade: Alta | CO2: Negativo";
    else if (cmd === 'relatorio') response = "As reservas de água estão em 95%. O índice de biodiversidade cresceu 12% desde a última safra.";
    else if (cmd.startsWith('weather ')) {
        const w = cmd.split(' ')[1];
        if (['sunny', 'rainy', 'storm'].includes(w)) {
            html.setAttribute('data-weather', w);
            html.setAttribute('data-theme', w === 'storm' ? 'night' : 'day');
            response = "Clima alterado para: " + w;
        } else response = "Clima inválido. Tente 'weather rainy'.";
    }
    else if (cmd === 'clear') { terminalOutput.innerHTML = ""; return; }
    else if (cmd === 'about') response = "Agro-Bot 2.0 - IA Desenvolvida para Gestão Autônoma de Metrópoles Sustentáveis.";
    else response = "Comando desconhecido. Digite 'help' para ver a lista.";
    
    terminalOutput.innerHTML += `<div>> ${cmd}</div><div style="color: #fff; margin-bottom: 10px;">${response}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// 7. IA Simulator Section (Diagnóstico - Recuperado)
const btnAnalyze = document.getElementById("btn-analyze");
const iaSymptom = document.getElementById("ia-symptom");
const iaOutput = document.getElementById("ia-typing-text");
const iaStatus = document.getElementById("ia-status-text");

const iaResponses = {
    praga: "> ANALISANDO IMAGENS DE DRONE... \n> ALERTA: Indícios de lagarta-do-cartucho. \n> SOLUÇÃO SUSTENTÁVEL: Liberação de vespas Trichogramma (Controle Biológico). Redução de 95% no uso de químicos. \n> AÇÃO: Drones de dispersão acionados.",
    agua: "> CRUZANDO DADOS DE SENSORES DE SOLO E CLIMA... \n> ALERTA: Nível de umidade crítico na raiz. \n> SOLUÇÃO SUSTENTÁVEL: Ativação do sistema de irrigação inteligente por gotejamento profundo. \n> IMPACTO: Economia de 40% de água.",
    nutriente: "> ANALISANDO ESPECTROMETRIA FOLIAR... \n> ALERTA: Deficiência de Nitrogênio identificada. \n> SOLUÇÃO SUSTENTÁVEL: Aplicação de biofertilizante do biodigestor. \n> AÇÃO: Tratores autônomos configurados para aplicação localizada."
};

let iaIsTyping = false;

if (btnAnalyze) {
    btnAnalyze.addEventListener("click", () => {
        const symptom = iaSymptom.value;
        if (!symptom) {
            showNotification("ERRO: Selecione um sintoma. ⚠️");
            return;
        }
        if (iaIsTyping) return;
        iaIsTyping = true;
        
        const textToType = iaResponses[symptom];
        iaOutput.innerHTML = "";
        iaStatus.innerText = "Processando Dados...";
        iaStatus.style.color = "#ffeb3b"; 
        
        let i = 0;
        function typeResponse() {
            if (i < textToType.length) {
                if (textToType.charAt(i) === '\n') {
                    iaOutput.innerHTML += "<br>";
                } else {
                    iaOutput.innerHTML += textToType.charAt(i);
                }
                i++;
                setTimeout(typeResponse, 30);
            } else {
                iaIsTyping = false;
                iaStatus.innerText = "Diagnóstico Concluído";
                iaStatus.style.color = "var(--primary)";
                showNotification("Diagnóstico de IA Finalizado! 🧠");
                checkAchievements("ia_simulator");
            }
        }
        typeResponse();
    });
}

// 8. Notificações e Conquistas
function showNotification(message) {
    const container = document.getElementById('notification-container');
    if (!container) return;
    const n = document.createElement('div');
    n.className = 'notification';
    n.innerText = message;
    container.appendChild(n);
    setTimeout(() => { n.style.opacity = '0'; setTimeout(() => n.remove(), 500); }, 4000);
}

function checkAchievements(techKey) {
    if (!exploredTechs.has(techKey)) {
        exploredTechs.add(techKey);
        if (exploredTechs.size === 1) showNotification("Primeira Tecnologia Acessada! 🛰️");
        // Considerando que a IA conta, podemos pedir totalTechs + 1 ou manter 6
        if (exploredTechs.size >= totalTechs) unlockCertificate();
    }
}

function unlockCertificate() {
    const certCard = document.getElementById('certificate-card');
    const certBtn = document.getElementById('btn-cert');
    if (certCard && certCard.classList.contains('certificate-locked')) {
        certCard.classList.replace('certificate-locked', 'certificate-unlocked');
        if (certBtn) {
            certCard.querySelector('p').innerText = "Parabéns! Você desbloqueou tudo e é um Gestor Ambiental Certificado.";
            certBtn.disabled = false;
            certBtn.onclick = () => showNotification("Certificado Gerado e Baixado! 📄");
        }
    }
}

// 9. Parallax, Mapa e Modais Universais
const mapLayers = document.querySelector('.map-layers');
document.addEventListener('mousemove', (e) => {
    if (!mapLayers) return;
    const x = (window.innerWidth / 2 - e.pageX) / 80;
    const y = (window.innerHeight / 2 - e.pageY) / 80;
    mapLayers.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Lógica Modal das Tecnologias
const modal = document.getElementById("modal");
const hotspots = document.querySelectorAll(".hotspot-4d");
hotspots.forEach(h => {
    h.onclick = () => {
        const tech = techData[h.getAttribute("data-tech")];
        document.getElementById("modal-title").innerText = tech.title;
        document.getElementById("modal-icon").innerText = tech.icon;
        document.getElementById("modal-body").innerText = tech.content;
        modal.style.display = "block";
        checkAchievements(h.getAttribute("data-tech"));
    };
});

// Lógica Modal "Sobre o Projeto" (Recuperado)
const aboutTab = document.getElementById("about-tab");
const aboutModal = document.getElementById("about-modal");
if (aboutTab) aboutTab.addEventListener("click", () => aboutModal.style.display = "block");

// Fechar Modais Universais
const closeTech = document.getElementById("close-tech");
const closeAbout = document.getElementById("close-about");

if (closeTech) closeTech.onclick = () => modal.style.display = "none";
if (closeAbout) closeAbout.onclick = () => aboutModal.style.display = "none";

window.onclick = (e) => { 
    if (e.target == modal) modal.style.display = "none"; 
    if (e.target == aboutModal) aboutModal.style.display = "none";
};

// 10. Bio-Feedback Dinâmico
const co2Fill = document.getElementById('co2-fill');
const waterStream = document.getElementById('water-stream');

setInterval(() => {
    if (co2Fill) {
        const variation = (Math.random() * 10) - 5;
        let currentWidth = parseFloat(co2Fill.style.width) || 78;
        co2Fill.style.width = Math.min(100, Math.max(50, currentWidth + variation)) + '%';
    }
    if (waterStream) {
        let binary = "";
        for(let i=0; i<15; i++) binary += Math.round(Math.random());
        waterStream.innerText = binary + "...";
    }
}, 2000);