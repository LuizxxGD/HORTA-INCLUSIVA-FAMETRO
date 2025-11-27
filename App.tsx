import React from 'react';

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-verde-escuro" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
  </svg>
);

const ScopeIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
    </svg>
);


const TimelineIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const MethodologyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-verde-escuro mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);


const TeamIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

const ResourcesIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
    </svg>
);


const RiskIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);

const SuccessIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 01-4.874-1.954.5.5 0 01.374-.836h17a.5.5 0 01.374.836A9.75 9.75 0 0116.5 18.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75V11.25m0 0l3.375 3.375M12 11.25L8.625 14.625M12 21.75a1.5 1.5 0 01-1.5-1.5v-2.25a1.5 1.5 0 013 0v2.25a1.5 1.5 0 01-1.5 1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75A9.75 9.75 0 0112 4.5v0a9.75 9.75 0 017.5 5.25" />
    </svg>
);


const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="text-verde-escuro hover:text-azul-escuro font-semibold transition-colors duration-300 ease-in-out px-3 py-2 rounded-md">
        {children}
    </a>
);


function App() {
  const sections = [
    { id: 'sobre', name: 'Sobre' },
    { id: 'funcionamento', name: 'Como Funciona' },
    { id: 'objetivos', name: 'Objetivos' },
    { id: 'publico', name: 'Público-alvo' },
    { id: 'cronograma', name: 'Cronograma' },
    { id: 'importancia', name: 'Importância' },
    { id: 'metodologia', name: 'Metodologia' },
    { id: 'equipe', name: 'Equipe' },
    { id: 'recursos', name: 'Recursos' },
    { id: 'riscos', name: 'Riscos' },
    { id: 'sucesso', name: 'Resultados' },
  ];

  const scopeItems = [
    {
      icon: "♿",
      title: "Inclusão e Acessibilidade",
      description: "Design centrado no usuário para garantir que pessoas com mobilidade reduzida e deficiência visual possam cultivar com autonomia e segurança.",
    },
    {
      icon: "🤖",
      title: "Automação Inteligente",
      description: "Sistema de irrigação e monitoramento automatizados, controláveis por aplicativo, para simplificar o cuidado com as plantas.",
    },
    {
      icon: "🌿",
      title: "Sustentabilidade",
      description: "Uso de materiais reciclados, compostagem e sistema de reaproveitamento de água para um cultivo amigo do ambiente.",
    },
  ];

  const timelineEvents = [
    {
      phase: "Fase 1: Pesquisa e Planejamento",
      date: "Mês 1-2",
      description: "Levantamento de requisitos, estudo de tecnologias e definição da arquitetura do projeto."
    },
    {
      phase: "Fase 2: Design e Prototipagem",
      date: "Mês 3-4",
      description: "Criação dos modelos 3D, design da interface do aplicativo e desenvolvimento do protótipo inicial."
    },
    {
      phase: "Fase 3: Desenvolvimento",
      date: "Mês 5-8",
      description: "Desenvolvimento do hardware, software embarcado e aplicativo móvel."
    },
    {
      phase: "Fase 4: Testes e Iteração",
      date: "Mês 9-10",
      description: "Testes com usuários-alvo para coletar feedback e realizar melhorias."
    },
    {
      phase: "Fase 5: Lançamento e Avaliação",
      date: "Mês 11-12",
      description: "Lançamento do produto e monitoramento do impacto e satisfação dos usuários."
    },
  ];

  const teamMembers = [
    { name: "Camille Biase", role: "Gerente do Projeto", photo: "/Fotos/Camille .jpg" },
    { name: "Miguel Menezes", role: "Engenheiro de Hardware", photo: "/Fotos/Miguel .jpg" },
    { name: "Ian Takashima", role: "Engenheiro de Software", photo: "/Fotos/Ian .jpg" },
    { name: "Luiz Gabriel", role: "Engenheiro de Software web", photo: "/Fotos/Luiz Gabriel.jpg" },
    { name: "Fernanda", role: "Designer UX/UI", photo: "/Fotos/Fernanda.jpg", instagram: "https://www.instagram.com/hortsensiplus?igsh=MXRvenBmaTNjYmUzdg==" },
  ];

  const resources = [
    { title: "Recursos Tecnológicos", items: ["Sensores de umidade e luz", "Microcontroladores", "Servidores em nuvem", "Ferramentas de software"] },
    { title: "Recursos Humanos", items: ["Equipe multidisciplinar", "Consultores em acessibilidade", "Voluntários para testes"] },
    { title: "Recursos Financeiros", items: ["Orçamento para componentes", "Custos de desenvolvimento", "Marketing e divulgação"] },
  ];

  const risks = [
    { text: "Atrasos na entrega de componentes eletrônicos.", mitigation: "Mitigação: Fornecedores alternativos." },
    { text: "Desafios na integração entre hardware e software.", mitigation: "Mitigação: Testes de integração contínuos." },
    { text: "Baixa adesão do público-alvo.", mitigation: "Mitigação: Envolvimento da comunidade desde o início." },
  ];

  const successCriteria = [
    "Nível de satisfação do usuário acima de 90%.",
    "Redução de 50% no tempo gasto com cuidados manuais da horta.",
    "Publicação de 2 artigos sobre o projeto em conferências de tecnologia assistiva.",
  ];


  return (
    <div className="bg-creme text-gray-800">
      <header className="bg-creme/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-verde-escuro">Hortsensi+</a>
          <div className="hidden lg:flex items-center space-x-2">
            {sections.map(section => (
              <NavLink key={section.id} href={`#${section.id}`}>{section.name}</NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
          style={{ backgroundImage: "url('/FUNDOHOTSENSIHERO.png')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-center z-10 p-4 opacity-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Hortsensi+
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-200" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              Tecnologia inclusiva para hortas inteligentes e acessíveis.
            </p>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="relative -top-1">
          <svg viewBox="0 0 1440 120" fill="#FFF9E6" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M1440 24.8427V120H0V24.8427C120.333 42.6617 240.667 52.5519 361 54.5134C481.333 56.4749 601.667 50.5076 722 36.6116C842.333 22.7156 962.667 1.83851 1083 0.999999C1203.33 0.161488 1321.67 8.36291 1440 24.8427Z" />
          </svg>
        </div>


        {/* Sobre o Projeto Section */}
        <section id="sobre" className="py-20 px-4 container mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="opacity-0 animate-fade-in-up text-left">
                    <h2 className="text-4xl font-bold text-verde-escuro mb-6">Sobre o Projeto</h2>
                    <p className="text-lg mb-4">
                        Hortsensi+ é um sistema automatizado de horta acessível, desenvolvido para promover a inclusão de pessoas com mobilidade reduzida ou deficiência visual.
                    </p>
                    <p className="text-lg mb-4">
                        O projeto une tecnologia, sustentabilidade e acessibilidade, automatizando a rega e o monitoramento da umidade e temperatura das plantas.
                    </p>
                    <p className="text-lg mb-4">
                        Com botões ampliados e símbolos em Braille, o sistema oferece autonomia e segurança para que qualquer pessoa possa cultivar de forma independente.
                    </p>
                    <p className="text-lg">
                        O objetivo é tornar o cultivo doméstico mais acessível e inclusivo, aproximando a tecnologia da natureza.
                    </p>
                </div>
                <div className="flex justify-center items-center opacity-0 animate-fade-in-up animation-delay-200">
                    <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop" alt="Ilustração de pessoas diversas cuidando de uma horta" className="max-w-md w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </section>


        {/* Como Funciona Section */}
        <section id="funcionamento" className="py-20 px-4 bg-verde-suave/30">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-verde-escuro mb-12 opacity-0 animate-fade-in-up">Como Funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-creme p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-in-up">
                <div className="text-5xl mb-4">💧</div>
                <h3 className="text-2xl font-bold text-verde-escuro mb-3">Automação da Irrigação</h3>
                <p>Controla a rega das plantas conforme a necessidade, garantindo a quantidade ideal de água para cada tipo de cultivo.</p>
              </div>
              <div className="bg-creme p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-in-up animation-delay-200">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-verde-escuro mb-3">Monitoramento Inteligente</h3>
                <p>Acompanha as condições ideais do cultivo através de sensores de umidade e temperatura em tempo real.</p>
              </div>
              <div className="bg-creme p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-in-up animation-delay-400">
                <div className="text-5xl mb-4">♿</div>
                <h3 className="text-2xl font-bold text-verde-escuro mb-3">Interface Acessível</h3>
                <p>Botões ampliados e símbolos em Braille proporcionam autonomia total ao usuário, independentemente de suas limitações físicas ou visuais.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="relative">
            <svg viewBox="0 0 1440 120" fill="#FFF9E6" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="transform rotate-180">
                <path d="M1440 24.8427V120H0V24.8427C120.333 42.6617 240.667 52.5519 361 54.5134C481.333 56.4749 601.667 50.5076 722 36.6116C842.333 22.7156 962.667 1.83851 1083 0.999999C1203.33 0.161488 1321.67 8.36291 1440 24.8427Z" />
            </svg>
        </div>


        {/* Objetivos Section */}
        <section id="objetivos" className="py-20 px-4 container mx-auto">
          <h2 className="text-4xl font-bold text-verde-escuro mb-12 text-center opacity-0 animate-fade-in-up">Objetivos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg opacity-0 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-verde-escuro mb-4">Acessibilidade Universal</h3>
              <p className="text-lg">Tornar o cultivo doméstico acessível a todos, independentemente de limitações físicas ou visuais.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg opacity-0 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-verde-escuro mb-4">Autonomia Tecnológica</h3>
              <p className="text-lg">Promover autonomia e inclusão tecnológica através de interfaces intuitivas e acessíveis.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg opacity-0 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-verde-escuro mb-4">Sustentabilidade</h3>
              <p className="text-lg">Estimular práticas sustentáveis e educativas para um futuro mais consciente.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg opacity-0 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-verde-escuro mb-4">Inovação Social</h3>
              <p className="text-lg">Demonstrar o potencial da automação aplicada à acessibilidade e inclusão social.</p>
            </div>
          </div>
        </section>

        {/* Público-alvo Section */}
        <section id="publico" className="py-20 px-4 bg-verde-suave/30">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-verde-escuro mb-12 opacity-0 animate-fade-in-up">Público-alvo</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6 opacity-0 animate-fade-in-up animation-delay-200">
                O sistema é voltado a pessoas com deficiência visual e mobilidade reduzida, além de instituições educativas e sociais que buscam soluções acessíveis e sustentáveis para o ensino e prática de jardinagem.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="bg-creme p-6 rounded-xl shadow-lg opacity-0 animate-fade-in-up animation-delay-400">
                  <div className="text-4xl mb-4">👁️</div>
                  <h3 className="text-xl font-bold text-verde-escuro mb-2">Deficiência Visual</h3>
                  <p>Pessoas com baixa visão ou cegueira total</p>
                </div>
                <div className="bg-creme p-6 rounded-xl shadow-lg opacity-0 animate-fade-in-up animation-delay-600">
                  <div className="text-4xl mb-4">♿</div>
                  <h3 className="text-xl font-bold text-verde-escuro mb-2">Mobilidade Reduzida</h3>
                  <p>Usuários de cadeira de rodas ou com limitações motoras</p>
                </div>
                <div className="bg-creme p-6 rounded-xl shadow-lg opacity-0 animate-fade-in-up animation-delay-800">
                  <div className="text-4xl mb-4">🏫</div>
                  <h3 className="text-xl font-bold text-verde-escuro mb-2">Instituições</h3>
                  <p>Escolas, ONGs e centros de reabilitação</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cronograma Section */}
        <section id="cronograma" className="py-20 px-4 container mx-auto">
          <h2 className="text-4xl font-bold text-verde-escuro mb-12 text-center opacity-0 animate-fade-in-up">Cronograma</h2>
          <div className="relative">
            <div className="border-l-4 border-azul-delicado absolute h-full top-0 left-1/2 -translate-x-1/2"></div>
            {timelineEvents.map((event, index) => (
              <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                <div className="z-10 bg-azul-escuro rounded-full w-8 h-8 flex items-center justify-center">
                    <TimelineIcon className="w-5 h-5 text-white" />
                </div>
                <div className={`w-5/12 bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in-up animation-delay-${index * 200}`}>
                  <h3 className="text-xl font-bold text-azul-escuro">{event.phase}</h3>
                  <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Importância Section */}
        <section id="importancia" className="py-20 px-4 container mx-auto">
          <h2 className="text-4xl font-bold text-verde-escuro mb-12 text-center opacity-0 animate-fade-in-up">Importância</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="opacity-0 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-verde-escuro mb-4">Benefícios à Saúde</h3>
              <p className="text-lg mb-4">
                Uma meta-análise examinou 22 estudos (76 comparações) e concluiu que jardinagem melhora resultados de saúde física, psicológica e social.
              </p>
              <p className="text-lg">
                Pessoas com limitações de mobilidade que praticavam jardinagem diária tiveram menor risco de mortalidade em comparação aos que não jardinavam.
              </p>
            </div>
            <div className="opacity-0 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-verde-escuro mb-4">Inclusão e Acessibilidade</h3>
              <p className="text-lg mb-4">
                Jardins acessíveis (caminhos largos, camas elevadas, adaptados para cadeirantes ou baixa visão) promovem bem-estar, pertencimento social e segurança.
              </p>
              <p className="text-lg">
                O design universal em jardins promove redução de isolamento, estimulação sensorial e inclusão.
              </p>
            </div>
            <div className="opacity-0 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-verde-escuro mb-4">Sustentabilidade</h3>
              <p className="text-lg mb-4">
                Jardins domésticos e hortas ajudam a melhorar segurança alimentar, nutrição e acessibilidade a alimentos frescos.
              </p>
              <p className="text-lg">
                Hortas comunitárias produzem milhares de porções de vegetais por temporada, melhorando a nutrição da comunidade.
              </p>
            </div>
            <div className="opacity-0 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-verde-escuro mb-4">Tecnologia e Independência</h3>
              <p className="text-lg mb-4">
                Incorporar tecnologia e adaptabilidade em jardinagem urbana ajuda pessoas de diferentes níveis de mobilidade a participar.
              </p>
              <p className="text-lg">
                Ferramentas adaptadas e sistemas automatizados garantem que todos possam cultivar com autonomia e segurança.
              </p>
            </div>
          </div>
        </section>

        {/* Metodologia Section */}
        <section id="metodologia" className="py-20 px-4 bg-verde-suave/30">
            <div className="container mx-auto text-center">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center items-center opacity-0 animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" alt="Ilustração de um processo de design thinking com post-its e colaboração" className="max-w-md w-full h-auto rounded-lg shadow-lg" />
                    </div>
                    <div className="opacity-0 animate-fade-in-up animation-delay-200 text-left">
                        <h2 className="text-4xl font-bold text-verde-escuro mb-6">Metodologia</h2>
                        <p className="text-lg mb-4">
                            Adotaremos uma abordagem de Design Thinking, colocando os futuros usuários no centro de todas as decisões. A metodologia ágil Scrum será utilizada para o gerenciamento do desenvolvimento, permitindo flexibilidade e entregas incrementais.
                        </p>
                        <p className="text-lg">
                            Ciclos de prototipagem rápida e testes de usabilidade contínuos com a comunidade garantirão que o produto final seja verdadeiramente eficaz, intuitivo e amado por quem o utiliza.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        {/* Equipe Section */}
        <section id="equipe" className="py-20 px-4 container mx-auto">
          <h2 className="text-4xl font-bold text-verde-escuro mb-12 text-center opacity-0 animate-fade-in-up">Nossa Equipe</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className={`text-center bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-in-up animation-delay-${index * 200}`}>
                <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-azul-delicado object-cover" />
                <h3 className="text-xl font-bold text-verde-escuro mb-2">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Recursos Section */}
        <section id="recursos" className="py-20 px-4 bg-verde-suave/30">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-verde-escuro mb-12 opacity-0 animate-fade-in-up">Recursos</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <div key={index} className={`bg-creme p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-in-up animation-delay-${index * 200}`}>
                            <div className="flex justify-center mb-4">
                                <div className="bg-azul-delicado p-3 rounded-full">
                                    <ResourcesIcon className="h-8 w-8 text-white"/>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-verde-escuro mb-4">{resource.title}</h3>
                            <ul className="text-left space-y-2">
                                {resource.items.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-verde-escuro mr-2">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Riscos e Sucesso Section */}
        <section className="py-20 px-4 container mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div id="riscos" className="opacity-0 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-verde-escuro mb-8 text-center">Riscos e Mitigações</h2>
              <ul className="space-y-4">
                {risks.map((risk, index) => (
                  <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex items-start">
                          <RiskIcon className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1"/>
                          <div>
                            <p className="font-semibold">{risk.text}</p>
                            <p className="text-sm text-gray-600">{risk.mitigation}</p>
                          </div>
                      </div>
                  </li>
                ))}
              </ul>
            </div>
            <div id="sucesso" className="opacity-0 animate-fade-in-up animation-delay-200">
              <h2 className="text-4xl font-bold text-verde-escuro mb-8 text-center">Resultados e Impacto</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <SuccessIcon className="h-8 w-8 text-green-500 mr-4 flex-shrink-0 mt-1"/>
                    <div>
                      <h3 className="text-xl font-bold text-verde-escuro mb-3">Sistema Automatizado Eficiente</h3>
                      <p className="text-gray-700 mb-4">
                        Os testes mostraram que o sistema automatizado funciona de forma eficiente no controle da irrigação, umidade e temperatura das plantas, garantindo um cultivo mais saudável, sustentável e inteligente.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <SuccessIcon className="h-8 w-8 text-green-500 mr-4 flex-shrink-0 mt-1"/>
                    <div>
                      <h3 className="text-xl font-bold text-verde-escuro mb-3">Interface Acessível Aprovada</h3>
                      <p className="text-gray-700 mb-4">
                        A interface acessível, com botões em Braille e comandos simples, foi testada e aprovada, confirmando que pessoas com deficiência visual ou mobilidade reduzida podem cuidar da horta com autonomia e segurança.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <SuccessIcon className="h-8 w-8 text-green-500 mr-4 flex-shrink-0 mt-1"/>
                    <div>
                      <h3 className="text-xl font-bold text-verde-escuro mb-3">Impacto Social Positivo</h3>
                      <p className="text-gray-700">
                        O projeto demonstrou potencial significativo para promover inclusão social, autonomia e bem-estar através do contato com a natureza, criando oportunidades reais de cultivo para todos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Wave Divider */}
        <div className="relative">
             <svg viewBox="0 0 1440 120" fill="#a3cfa74d" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M1440 24.8427V120H0V24.8427C120.333 42.6617 240.667 52.5519 361 54.5134C481.333 56.4749 601.667 50.5076 722 36.6116C842.333 22.7156 962.667 1.83851 1083 0.999999C1203.33 0.161488 1321.67 8.36291 1440 24.8427Z" />
             </svg>
        </div>



      </main>

      <footer className="bg-verde-escuro text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} Hortsensi+. Todos os direitos reservados.</p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <p className="text-sm">Acesse nosso instagram</p>
          <a 
            href="https://www.instagram.com/hortsensiplus?igsh=MXRvenBmaTNjYmUzdg==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center text-white hover:text-pink-300 transition-colors" 
            aria-label="Instagram Hotsensi+"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
