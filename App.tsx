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
    { id: 'objetivo', name: 'Objetivo' },
    { id: 'escopo', name: 'Escopo' },
    { id: 'cronograma', name: 'Cronograma' },
    { id: 'metodologia', name: 'Metodologia' },
    { id: 'equipe', name: 'Equipe' },
    { id: 'recursos', name: 'Recursos' },
    { id: 'riscos', name: 'Riscos' },
    { id: 'sucesso', name: 'Resultados' },
    { id: 'contato', name: 'Contato' },
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
    { name: "membro1", role: "Gerente de Projeto", photo: "https://picsum.photos/200/200?random=1" },
    { name: "membro2", role: "Engenheiro de Hardware", photo: "https://picsum.photos/200/200?random=2" },
    { name: "membro3", role: "Desenvolvedora de Software", photo: "https://picsum.photos/200/200?random=3" },
    { name: "membro4", role: "Designer UX/UI", photo: "https://picsum.photos/200/200?random=4" },
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
          <a href="#" className="text-2xl font-bold text-verde-escuro">Hotsensi+</a>
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
          style={{ backgroundImage: "url('./img/FUNDOHOTSENSIHERO.png')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-center z-10 p-4 opacity-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Hotsensi+
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


        {/* Objetivo Section */}
        <section id="objetivo" className="py-20 px-4 container mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="opacity-0 animate-fade-in-up text-left">
                    <h2 className="text-4xl font-bold text-verde-escuro mb-6">Nosso Objetivo</h2>
                    <p className="text-lg mb-4">
                        O projeto "Hotsensi+" visa desenvolver uma solução de horta automatizada, sustentável e, acima de tudo, acessível. Nosso foco é empoderar pessoas com mobilidade reduzida ou deficiência visual, proporcionando-lhes as ferramentas para cultivar seus próprios alimentos frescos.
                    </p>
                    <p className="text-lg">
                        Queremos quebrar barreiras e promover a inclusão através do contato com a natureza, incentivando a autonomia, o bem-estar e práticas de consumo mais conscientes e saudáveis.
                    </p>
                </div>
                <div className="flex justify-center items-center opacity-0 animate-fade-in-up animation-delay-200">
                    <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop" alt="Ilustração de pessoas diversas cuidando de uma horta" className="max-w-md w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </section>


        {/* Escopo Section */}
        <section id="escopo" className="py-20 px-4 bg-verde-suave/30">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-verde-escuro mb-12 opacity-0 animate-fade-in-up">Escopo do Projeto</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {scopeItems.map((item, index) => (
                <div key={index} className={`bg-creme p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-in-up animation-delay-${index * 200}`}>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-verde-escuro mb-3">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="relative">
            <svg viewBox="0 0 1440 120" fill="#FFF9E6" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="transform rotate-180">
                <path d="M1440 24.8427V120H0V24.8427C120.333 42.6617 240.667 52.5519 361 54.5134C481.333 56.4749 601.667 50.5076 722 36.6116C842.333 22.7156 962.667 1.83851 1083 0.999999C1203.33 0.161488 1321.67 8.36291 1440 24.8427Z" />
            </svg>
        </div>


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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`text-center bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 opacity-0 animate-fade-in-up animation-delay-${index * 200}`}>
                <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-azul-delicado" />
                <h3 className="text-xl font-bold text-verde-escuro">{member.name}</h3>
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


        {/* Contato Section */}
        <section id="contato" className="py-20 px-4 bg-verde-suave/30 relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
          <div className="absolute inset-0 bg-creme/80"></div>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold text-verde-escuro mb-6 opacity-0 animate-fade-in-up">Entre em Contato</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up animation-delay-200">
              Tem interesse no projeto, gostaria de colaborar ou apenas saber mais? Adoraríamos ouvir de você!
            </p>
            <a href="mailto:contato@hortainclusiva.com" className="bg-verde-escuro text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-azul-escuro transition-colors duration-300 transform hover:scale-105 inline-block opacity-0 animate-fade-in-up animation-delay-400">
              Enviar um E-mail
            </a>
          </div>
        </section>

      </main>

      <footer className="bg-verde-escuro text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} Hotsensi+. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
