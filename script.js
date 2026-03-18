// ===========================
// HEADER SCROLL EFFECT
// ===========================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===========================
// MOBILE MENU
// ===========================
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('open');
    document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.about-content, .about-image, .production-card, .timeline-item, .award-card, .contact-info, .contact-form-wrap, .photo-divider, .photo-statement-inner, .experience-photo-aside, .news-card').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]:not([data-project])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// PROJECT MODAL
// ===========================
const projectData = {
    'o-banquete': {
        title: 'O Banquete',
        category: 'Teatro & Cultura',
        role: 'Produção — Companhia Ensaio Aberto',
        date: 'Set — Nov 2024',
        image: 'images/projects/o-banquete/sopacultural.jpg',
        gallery: [
            'images/projects/o-banquete/jprevistas-thiago-gouvea.jpg',
            'images/projects/o-banquete/vislun-thiago-gouvea.webp',
            'images/projects/o-banquete/brasildefato.webp',
            'images/projects/o-banquete/diariodorio.jpg'
        ],
        description: '<p>Espetáculo teatral baseado nas crônicas musicais semanais de <strong>Mário de Andrade</strong>, escritas para a coluna "Mundo Musical" do jornal <em>Folha da Manhã</em> (1943-1945) — obra inacabada devido à morte do autor.</p>' +
            '<p>A história se desenrola em "Mentira", descrita como um país vizinho ao Brasil ou uma cidade paulista, onde um banquete se torna cenário para explorar o papel da arte na sociedade e o engajamento crítico com a realidade. A produção encarna uma "arte do inacabado", refletindo a visão crítica de Mário sobre a sociedade e o papel do artista.</p>' +
            '<p><strong>O espetáculo inaugurou o Teatro Vianinha</strong>, novo espaço com capacidade para 272 pessoas dentro do Armazém da Utopia, no Cais do Porto do Rio de Janeiro.</p>' +
            '<h4>Ficha Técnica</h4>' +
            '<ul>' +
            '<li><strong>Direção:</strong> Luiz Fernando Lobo</li>' +
            '<li><strong>Dramaturgia:</strong> João Batista</li>' +
            '<li><strong>Cenografia:</strong> J.C. Serroni</li>' +
            '<li><strong>Figurinos:</strong> Beth Filipecki & Renaldo Machado</li>' +
            '<li><strong>Iluminação:</strong> Cesar de Ramires</li>' +
            '<li><strong>Música Original e Direção Musical:</strong> Felipe Radiccetti</li>' +
            '<li><strong>Direção de Produção:</strong> Tuca Moraes</li>' +
            '<li><strong>Elenco:</strong> 21 atores — Leonardo Hinckel, Tuca Moraes, Gilberto Miranda, Grégori Eckert, Luiz Fernando Lobo, Caroline Gerhein, Mateus Pitanga, Mariana Pompeu, Tainá Baldez, Karolyna Mendes, entre outros</li>' +
            '</ul>' +
            '<p><strong>Local:</strong> Teatro Vianinha — Armazém da Utopia, Cais do Porto, Rio de Janeiro<br>' +
            '<strong>Duração:</strong> 90 minutos &bull; <strong>Classificação:</strong> 14+</p>' +
            '<p><em>"Precisamos reconhecer que não pode haver uma cultura nacional, popular, se virarmos as costas para a nossa herança negra."</em> — Luiz Fernando Lobo, diretor</p>',
        tags: ['Teatro', 'Mário de Andrade', 'Cia. Ensaio Aberto', 'Teatro Vianinha', 'Armazém da Utopia', 'Inauguração']
    },
    'ensaio-aberto': {
        title: 'Instituto Ensaio Aberto',
        category: 'Teatro & Cultura',
        role: 'Coordenação Geral — Gestão de Projetos e Produção',
        date: 'Dez 2023 — Presente',
        image: 'images/projects/ensaio-aberto.webp',
        description: '<p>Atuação junto à Companhia Ensaio Aberto no Armazém da Utopia, na zona portuária do Rio de Janeiro.</p><ul><li>Coordenação e gestão do projeto "Teatro dos Trabalhadores" — financiado por emenda parlamentar</li><li>Gerenciamento de conteúdo para a publicação de 4 cadernos de estudos, produzidos pelo núcleo artístico com a pesquisadora francesa Béatrice Picon-Vallin</li><li>Produção nos espetáculos "Morte e Vida Severina" (2025), "O Banquete" (2024) e "Encontro Em Boa Companhia" (2023)</li><li>Produção técnica do Armazém da Utopia para o evento "U20 Rio Summit" (extensão do G20) e a gravação do projeto "Funk Generation" da Anitta</li></ul>',
        tags: ['Teatro', 'Gestão de Projetos', 'Produção Cultural', 'Emenda Parlamentar']
    },
    'elefante': {
        title: 'ElefantE',
        category: 'Teatro & Cultura',
        role: 'Produtora Executiva — Direção de Flávio Souza',
        date: 'Mai — Set 2023',
        image: 'images/projects/elefante.jpg',
        description: '<p>Espetáculo teatral premiado na 8ª Premiação CBTIJ 2024 em 6 categorias, incluindo Melhor Espetáculo.</p><ul><li>Gestão completa da pré-produção à prestação de contas</li><li>Temporada no teatro do Espaço Cultural Municipal Sérgio Porto (Humaitá, RJ)</li><li>Selecionado pelo edital Foca 2022 da Prefeitura do Rio de Janeiro</li><li>Organização de equipe, agenda, captação de apoios e prestação de contas</li></ul><p><strong>Prêmios CBTIJ 2024:</strong> Melhor Espetáculo, Adereços, Melhor Direção Musical, Cenário, Melhor Ator, Iluminação.</p>',
        tags: ['Teatro', 'Produção Executiva', 'CBTIJ', 'Premiado']
    },
    'conto-de-quem-sonha': {
        title: 'Conto de Quem Sonha',
        category: 'Teatro & Cultura',
        role: 'Produtora Assistente & Captação de Apoio — Teçá Arte e Cultura',
        date: '2023',
        image: null,
        description: '<ul><li>Assistência na execução da temporada de circulação pelas unidades do SESC na cidade do Rio de Janeiro</li><li>Montagem e desmontagem de cenário, figurinos e adereços cênicos</li><li>Captação de apoio para alimentação da equipe, com logística junto ao fornecedor parceiro</li><li>Produção de conteúdo para as redes sociais do espetáculo</li></ul>',
        tags: ['Teatro', 'SESC', 'Circulação', 'Produção Assistente']
    },
    'elas-brilham': {
        title: 'Elas Brilham',
        category: 'Teatro & Cultura',
        role: 'Produtora Assistente — Direção de Frederico Reder / Brain+',
        date: 'Set — Out 2022',
        image: 'images/projects/elas-brilham.jpg',
        description: '<p>Teatro musical com temporadas no Rio de Janeiro e São Paulo, celebrando grandes mulheres da música brasileira.</p><ul><li>Assistência na execução das temporadas no Teatro Claro (Copacabana, RJ) e Teatro Claro (Shopping Vila Olímpia, SP)</li><li>Montagem e desmontagem, manutenção do espetáculo e cuidado especial com o elenco</li><li>Produção de conteúdo e suporte para as equipes de comunicação e assessoria de imprensa da Brain+</li></ul>',
        tags: ['Teatro Musical', 'Teatro Claro', 'Rio de Janeiro', 'São Paulo']
    },
    'giros-filmes': {
        title: 'Giros Filmes — Pós-Produção',
        category: 'Audiovisual & Cinema',
        role: 'Data Manager (Logger)',
        date: 'Out — Dez 2023',
        image: 'images/projects/clube-spelunca.png',
        description: '<p>Atuação na equipe de pós-produção da Giros Filmes, produtora carioca.</p><ul><li>Gerente de logística dos HDs da produtora, implantando sistema de organização para entradas e saídas dos materiais de logagem e armazenamento físico</li><li>Logger dos projetos em execução na produtora durante o período da contratação</li><li>Destaque para a série "Clube Spelunca" da HBO/TNT — produzida pela O2 Filmes</li></ul>',
        tags: ['Pós-Produção', 'Data Manager', 'HBO', 'O2 Filmes']
    },
    'mais-um-dia': {
        title: 'Mais um dia, Zona Norte',
        category: 'Audiovisual & Cinema',
        role: 'Assistente de Produção — Acalante Filmes / Dir. Allan Ribeiro',
        date: '2022',
        image: 'images/projects/mais-um-dia-zona-norte.jpg',
        description: '<p>Longa-metragem de cinema independente, grande vencedor do 56º Festival de Brasília do Cinema Brasileiro (2023).</p><ul><li>Pré-produção das diárias com revisão de ordem do dia, planejamento e controle dos mapas de transporte</li><li>Apoio nos sets de gravação (internos e externos)</li></ul><p><strong>Prêmios — 56º Festival de Brasília 2023:</strong></p><ul><li>Melhor Longa Metragem</li><li>Melhor Longa (Júri Abraccine)</li><li>Melhor Ator Coadjuvante</li><li>Melhor Trilha Sonora</li><li>Melhor Atriz Coadjuvante</li><li>Menção Honrosa</li></ul>',
        tags: ['Cinema', 'Longa-metragem', 'Festival de Brasília', 'Premiado']
    },
    'isso-aqui': {
        title: 'Isso Aqui Não É Uma Festa',
        category: 'Audiovisual & Cinema',
        role: 'Assistente de Produção — Caprisciana Produções / Murilo Sampaio',
        date: '2022',
        image: null,
        description: '<p>Projeto de cinema independente em processo de desenvolvimento e pesquisa.</p><ul><li>Coordenação da pré-produção, montagem e desmontagem, gestão de transporte, alimentação, casting e estrutura dos sets (internos e externos)</li><li>Interface entre direção, produção e equipe técnica</li><li>Contribuição na produção de arte, auxiliando na montagem artística das cenas internas</li></ul>',
        tags: ['Cinema Independente', 'Produção de Arte', 'Pré-Produção']
    },
    'amar-fortes': {
        title: 'Amar é para os Fortes',
        category: 'Audiovisual & Cinema',
        role: 'Assistente de Produção (apoio de set) — Prodigo Films / Amazon Prime Video',
        date: '2022',
        image: 'images/projects/amar-e-para-os-fortes.jpg',
        description: '<p>Série original Amazon Prime Video, criada por Marcelo D2. Projeto de publicidade (Marketing Day).</p><ul><li>Pré-produção: visita técnica de locação, planejamento e logística das diárias de produção, mapa de transporte, orçamentos e controle de custos</li><li>Execução de 2 sets internos em estúdios simultâneos — Fotografia e Vídeo</li><li>Fechamento e envio dos contratos para os fornecedores</li></ul>',
        tags: ['Publicidade', 'Amazon Prime Video', 'Prodigo Films', 'Série']
    },
    'tocaia': {
        title: 'Tocaia Filmes',
        category: 'Audiovisual & Cinema',
        role: 'Produção e Assistência + Produção de Set',
        date: 'Ago 2021 — Fev 2022',
        image: null,
        description: '<p>Produtora audiovisual com foco em conteúdo para YouTube e marcas.</p><ul><li>Conteúdo para canais do YouTube agenciados pela empresa Omni Criativo</li><li>Pré à pós-produção das diárias: coordenação de equipe, mapas de transporte, gerência de agenda, montagem/desmontagem de sets, claquete, ordem do dia, logagem de material</li><li>Projetos para a marca de games Ubisoft (Rainbow Six)</li><li>Podcast "Só 1 Minutinho" — 1ª temporada, com Ed Gama e Estevam Nabote</li><li>Canal "Talk Astral Show" — com Fernanda Souza como convidada</li><li>Canal "Castro Brothers" — quadro "UTC" e outros</li></ul>',
        tags: ['YouTube', 'Ubisoft', 'Podcast', 'Produção de Set']
    },
    'cerol': {
        title: 'Clipe "Cerol" — Thom',
        category: 'Audiovisual & Cinema',
        role: 'Assistente de Produção — Cachoeira Music',
        date: '2023',
        image: 'images/projects/cerol-thom.jpg',
        description: '<p>Produção do videoclipe musical "Cerol" do artista Thom, pela Cachoeira Music.</p><ul><li>Assistência na produção e logística do set de filmagem</li><li>Apoio na coordenação de equipe e cronograma de gravação</li></ul>',
        tags: ['Clipe Musical', 'Produção Audiovisual']
    },
    'se-voce-nao-vem': {
        title: 'Clipe "Se Você Não Vem"',
        category: 'Audiovisual & Cinema',
        role: 'Assistente de Produção — AYO / TH4I e MC THA',
        date: '2021',
        image: 'images/projects/se-voce-nao-vem.jpg',
        description: '<p>Videoclipe do DJ e produtor TH4I com a colaboração de MC THA, lançado pela Universal Music Brasil.</p><ul><li>Assistência na produção e execução do set de gravação</li><li>Apoio logístico e coordenação durante as diárias de filmagem</li></ul>',
        tags: ['Clipe Musical', 'Universal Music', 'TH4I', 'MC THA']
    },
    'escola-conquer': {
        title: 'Escola Conquer',
        category: 'Audiovisual & Cinema',
        role: 'Produção — Direção de Leo Pacífico',
        date: '2021',
        image: 'images/projects/escola-conquer.png',
        description: '<p>Produção de conteúdo audiovisual para a Escola Conquer, plataforma de educação e desenvolvimento profissional.</p><ul><li>Produção e assistência nas diárias de gravação</li><li>Apoio na logística e organização do set</li></ul>',
        tags: ['Conteúdo Educacional', 'Produção Audiovisual']
    },
    'cadernos-vermelhos-1': {
        title: 'Cadernos Vermelhos 1',
        category: 'Produção Editorial',
        role: 'Gerenciamento de Conteúdo — Companhia Ensaio Aberto',
        date: 'Instituto Ensaio Aberto / Funarte',
        image: 'images/projects/cadernos-vermelhos/cadernos-vermelhos-1.jpg',
        description: '<p>Primeira edição da publicação <strong>Cadernos Vermelhos</strong>, criada para a socialização dos materiais de pesquisa do <strong>Teatro dos Trabalhadores</strong>, processo de estudo que reúne o coletivo artístico da Companhia Ensaio Aberto regularmente desde 2014.</p>' +
            '<p>A publicação reúne reflexões, estudos e materiais produzidos pelo núcleo artístico da companhia em parceria com a pesquisadora francesa <strong>Béatrice Picon-Vallin</strong>, referência mundial em estudos teatrais.</p>' +
            '<p><strong>Viabilização:</strong> Termo de Fomento Plataforma Transferegov n° 881158/2018, "Companhia Ensaio Aberto – Teatro dos Trabalhadores – Pesquisa e Formação – Ano 5", celebrado entre o Instituto Ensaio Aberto e Fundação Nacional de Artes – Funarte.</p>',
        tags: ['Produção Editorial', 'Cadernos Vermelhos', 'Teatro dos Trabalhadores', 'Funarte', 'Béatrice Picon-Vallin']
    },
    'cadernos-vermelhos-2': {
        title: 'Cadernos Vermelhos 2',
        category: 'Produção Editorial',
        role: 'Gerenciamento de Conteúdo — Companhia Ensaio Aberto',
        date: 'Instituto Ensaio Aberto / Funarte',
        image: 'images/projects/cadernos-vermelhos/cadernos-vermelhos-2.jpg',
        description: '<p>Segunda edição da publicação <strong>Cadernos Vermelhos</strong>, dedicada à geração que antecedeu o coletivo artístico.</p>' +
            '<p><em>"A partir da retomada de fios que permaneceram soltos, vamos, juntos com nossas companhias irmãs espalhadas pelo Brasil e, com esses mesmos fios, tecer uma nova teia. Repensar o teatro épico no Brasil. Retomar a memória, como ferramenta de luta, para a construção não só de um teatro crítico mas para a construção de uma nova sociedade."</em></p>' +
            '<p>Esta edição integra o grupo de estudos regular da Companhia Ensaio Aberto — o <strong>Teatro dos Trabalhadores</strong> — dando continuidade ao trabalho de pesquisa e formação com a pesquisadora <strong>Béatrice Picon-Vallin</strong>.</p>' +
            '<p><strong>Viabilização:</strong> Termo de Fomento Plataforma Transferegov n° 881158/2018, "Companhia Ensaio Aberto – Teatro dos Trabalhadores – Pesquisa e Formação – Ano 5", celebrado entre o Instituto Ensaio Aberto e Fundação Nacional de Artes – Funarte.</p>',
        tags: ['Produção Editorial', 'Cadernos Vermelhos', 'Teatro Épico', 'Funarte', 'Béatrice Picon-Vallin']
    },
    'teatros-documentarios': {
        title: 'Os Teatros Documentários',
        category: 'Produção Editorial',
        role: 'Gerenciamento de Conteúdo — Cadernos Vermelhos 3 e 4',
        date: 'Instituto Ensaio Aberto / Ministério da Cultura',
        image: 'images/projects/cadernos-vermelhos/teatros-documentarios.jpg',
        description: '<p>O livro <strong>Os Teatros Documentários</strong>, organizado por <strong>Béatrice Picon-Vallin</strong> e <strong>Érica Magris</strong>, é uma edição da Ensaio Aberto e foi traduzido pela primeira vez para o português por <strong>Fátima Saadi</strong>.</p>' +
            '<p>A publicação é uma socialização dos materiais de pesquisa do <strong>Teatro dos Trabalhadores</strong> da Companhia Ensaio Aberto, integrando a coleção <strong>Cadernos Vermelhos</strong> como volumes 3 e 4.</p>' +
            '<p>O trabalho representa um marco na pesquisa teatral brasileira, trazendo ao público de língua portuguesa pela primeira vez esta importante obra sobre teatros documentários, que dialoga com as práticas cênicas contemporâneas e o engajamento social do teatro.</p>' +
            '<p><strong>Viabilização:</strong> Ministério da Cultura, Secretaria de Cidadania e Diversidade Cultural | Dramaturgia Crítica em Processo — Termo de Fomento — Plataforma Transfere.gov nº 887487/2019.</p>',
        tags: ['Produção Editorial', 'Cadernos Vermelhos', 'Béatrice Picon-Vallin', 'Érica Magris', 'Fátima Saadi', 'Ministério da Cultura']
    },
    'kelly-jorge': {
        title: 'Kelly Jorge',
        category: 'Produção Artística',
        role: 'Produção Executiva e Artística + Suporte Comercial — Espetáculo Entretenimento',
        date: 'Mar 2022 — Jan 2024',
        image: 'images/projects/kelly-jorge.jpg',
        description: '<p>Gerenciamento artístico e produção de eventos para Kelly Jorge, locutora da Rádio FM O Dia, sob coordenação do empresário Raphael Almeida.</p><ul><li>Planejamento, logística e execução das ações publicitárias (caseiras e externas)</li><li>Produção de conteúdo como cobertura para as redes sociais</li><li>Atendimento e negociação com clientes e parceiros via WhatsApp Business</li><li>Interface com a equipe de design, atuando nas estratégias de conteúdo</li></ul>',
        tags: ['Gerenciamento Artístico', 'Eventos', 'Rádio FM O Dia', 'Social Media']
    },
    'carnaval-kelly': {
        title: 'Carnaval — Kelly Jorge',
        category: 'Produção Artística',
        role: 'Produção Artística — Sapucaí & Intendente Magalhães',
        date: '2022 — 2023',
        image: 'images/projects/carnaval-intendente.jpg',
        description: '<p>Produção artística para as apresentações de carnaval de Kelly Jorge na Sapucaí e Intendente Magalhães.</p><ul><li>Planejamento e execução da logística para os desfiles e eventos de carnaval</li><li>Coordenação de equipe nos dias de apresentação</li><li>Produção de conteúdo e cobertura para redes sociais durante o carnaval</li></ul>',
        tags: ['Carnaval', 'Sapucaí', 'Produção Artística', 'Eventos']
    },
    'mita-festival': {
        title: 'MITA Festival',
        category: 'Produção Artística',
        role: 'Equipe Harry Albergaria — 30e São Paulo',
        date: '2022',
        image: 'images/projects/mita-festival.jpg',
        description: '<p>Festival de música e entretenimento criado pela Bonus Track e 30e, realizado em São Paulo e Rio de Janeiro.</p><ul><li>Atuação na equipe de produção liderada por Harry Albergaria</li><li>Apoio na logística e coordenação do evento</li><li>Suporte nas operações durante os dias de festival</li></ul>',
        tags: ['Festival', 'Música', 'São Paulo', 'Eventos']
    },
    'casa-e-video': {
        title: 'Casa & Vídeo',
        category: 'Produção Artística',
        role: 'Produção de Kit Publicitário',
        date: '2021',
        image: 'images/projects/casa-e-video.jpg',
        description: '<p>Produção de kit publicitário para a rede de varejo Casa & Vídeo.</p><ul><li>Planejamento e execução da produção de materiais publicitários</li><li>Coordenação de fornecedores e logística de entrega</li></ul>',
        tags: ['Publicidade', 'Varejo', 'Kit Publicitário']
    }
};

const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalRole = document.getElementById('modalRole');
const modalDate = document.getElementById('modalDate');
const modalDescription = document.getElementById('modalDescription');
const modalGallery = document.getElementById('modalGallery');
const modalTags = document.getElementById('modalTags');

function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    if (data.image) {
        modalImage.innerHTML = '<img src="' + data.image + '" alt="' + data.title + '">';
        modalImage.classList.remove('no-image');
    } else {
        modalImage.innerHTML = '';
        modalImage.classList.add('no-image');
    }

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalRole.textContent = data.role;
    modalDate.textContent = data.date;
    modalDescription.innerHTML = data.description;

    // Gallery
    if (data.gallery && data.gallery.length > 0) {
        modalGallery.innerHTML = '<h4 class="gallery-title">Galeria de Fotos</h4><div class="gallery-grid">' +
            data.gallery.map(function(img) {
                return '<div class="gallery-item"><img src="' + img + '" alt="' + data.title + '" loading="lazy"></div>';
            }).join('') + '</div>';
        modalGallery.style.display = 'block';
    } else {
        modalGallery.innerHTML = '';
        modalGallery.style.display = 'none';
    }

    modalTags.innerHTML = data.tags.map(function(tag) {
        return '<span>' + tag + '</span>';
    }).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.production-card[data-project]').forEach(function(card) {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(this.getAttribute('data-project'));
    });
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// ===========================
// VIDEO CARD HOVER PLAY
// ===========================
document.querySelectorAll('.card-has-video').forEach(function(card) {
    var video = card.querySelector('.card-video');
    if (!video) return;

    card.addEventListener('mouseenter', function() {
        video.currentTime = 0;
        video.play().catch(function() {});
    });

    card.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0;
    });
});

// ===========================
// CONTACT FORM
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn-submit');
        const originalText = btn.textContent;
        btn.textContent = 'SENT!';
        btn.style.background = 'var(--color-accent)';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}
