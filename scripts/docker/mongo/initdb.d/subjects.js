db = db.getSiblingDB('local');
db.createCollection('subjects');
db.subjects.insertMany([
  { name: 'Aerodinâmica II', search: 'Aerodinamica Ii', creditos: 4 },
  { name: 'Aerodinâmica I', search: 'Aerodinamica I', creditos: 4 },
  {
    name: 'Aditivação de Polímeros',
    search: 'Aditivacao De Polimeros',
    creditos: 4
  },
  {
    name: 'Análise de Sistemas Dinâmicos Lineares',
    search: 'Analise De Sistemas Dinamicos Lineares',
    creditos: 3
  },
  {
    name: 'abordagens tradicionais das relações internacionais',
    search: 'Abordagens Tradicionais Das Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'Análise Econômica de Projetos',
    search: 'Analise Economica De Projetos',
    creditos: 3
  },
  {
    name: 'Aplicações de Elementos Finitos para Engenharia',
    search: 'Aplicacoes De Elementos Finitos Para Engenharia',
    creditos: 4
  },
  {
    name: 'Arquitetura de Computadores de Alto Desempenho',
    search: 'Arquitetura De Computadores De Alto Desempenho',
    creditos: 4
  },
  {
    name: 'Arranjos Institucionais e Marco Regulatório do Território',
    search: 'Arranjos Institucionais E Marco Regulatorio Do Territorio',
    creditos: 2
  },
  {
    name: 'Arte, Ciência, Tecnologia e Política',
    search: 'Arte Ciencia Tecnologia E Politica',
    creditos: 4
  },
  {
    name: 'Avaliação no Ensino de Química',
    search: 'Avaliacao No Ensino De Quimica',
    creditos: 3
  },
  { name: 'Banco de Dados', search: 'Banco De Dados', creditos: 4 },
  {
    name: 'Administração Pública e Reforma do Estado em Perspectiva Comparada',
    search: 'Administracao Publica E Reforma Do Estado Em Perspectiva Comparada',
    creditos: 4
  },
  { name: 'Análise Complexa', search: 'Analise Complexa', creditos: 4 },
  { name: 'Aeronáutica I-A', search: 'Aeronautica IA', creditos: 4 },
  {
    name: 'Acionamentos Elétricos',
    search: 'Acionamentos Eletricos',
    creditos: 5
  },
  {
    name: 'Antropologia Filosófica',
    search: 'Antropologia Filosofica',
    creditos: 4
  },
  {
    name: 'Análise da Produção do Espaço e Políticas Públicas Urbanas',
    search: 'Analise Da Producao Do Espaco E Politicas Publicas Urbanas',
    creditos: 4
  },
  {
    name: 'Análise de Regressão',
    search: 'Analise De Regressao',
    creditos: 4
  },
  {
    name: 'Arquitetura de Computadores',
    search: 'Arquitetura De Computadores',
    creditos: 4
  },
  {
    name: 'Análise de Algoritmos',
    search: 'Analise De Algoritmos',
    creditos: 4
  },
  { name: 'Aeronáutica I-B', search: 'Aeronautica IB', creditos: 4 },
  {
    name: 'Análise Econômica de Projetos Energéticos',
    search: 'Analise Economica De Projetos Energeticos',
    creditos: 4
  },
  {
    name: 'Aplicações de Microcontroladores',
    search: 'Aplicacoes De Microcontroladores',
    creditos: 4
  },
  { name: 'Arte e ensino', search: 'Arte E Ensino', creditos: 4 },
  {
    name: 'Banco de Dados de Apoio à Tomada de Decisão',
    search: 'Banco De Dados De Apoio A Tomada De Decisao',
    creditos: 4
  },
  {
    name: 'Base Experimental das Ciências Naturais',
    search: 'Base Experimental Das Ciencias Naturais',
    creditos: 3
  },
  {
    name: 'Análise Experimental de Estruturas',
    search: 'Analise Experimental De Estruturas',
    creditos: 4
  },
  { name: 'Análise Real II', search: 'Analise Real Ii', creditos: 4 },
  {
    name: 'Análise da Conjuntura Internacional Contemporânea',
    search: 'Analise Da Conjuntura Internacional Contemporanea',
    creditos: 4
  },
  {
    name: 'Avaliação e Monitoramento de Políticas Públicas',
    search: 'Avaliacao E Monitoramento De Politicas Publicas',
    creditos: 4
  },
  { name: 'Aviônica', search: 'Avionica', creditos: 4 },
  {
    name: 'Administração Municipal e Desenvolvimento Local',
    search: 'Administracao Municipal E Desenvolvimento Local',
    creditos: 4
  },
  {
    name: 'Atenção e Estados de Consciência',
    search: 'Atencao E Estados De Consciencia',
    creditos: 2
  },
  {
    name: 'Automação de Sistemas Elétricos de Potência',
    search: 'Automacao De Sistemas Eletricos De Potencia',
    creditos: 3
  },
  {
    name: 'Acumuladores de Energia',
    search: 'Acumuladores De Energia',
    creditos: 2
  },
  {
    name: 'Bases Biológicas para Engenharia II',
    search: 'Bases Biologicas Para Engenharia Ii',
    creditos: 5
  },
  {
    name: 'Bases Computacionais da Ciência',
    search: 'Bases Computacionais Da Ciencia',
    creditos: 2
  },
  { name: 'Análise no Rn I ', search: 'Analise No Rn I', creditos: 4 },
  { name: 'Aeroelasticidade', search: 'Aeroelasticidade', creditos: 4 },
  {
    name: 'Avaliação de Impactos Ambientais',
    search: 'Avaliacao De Impactos Ambientais',
    creditos: 4
  },
  {
    name: 'Análise de Redes de Transporte e Distribuição',
    search: 'Analise De Redes De Transporte E Distribuicao',
    creditos: 4
  },
  {
    name: 'Armazenamento de Energia Elétrica',
    search: 'Armazenamento De Energia Eletrica',
    creditos: 4
  },
  {
    name: 'Algoritmos e Estruturas de Dados I',
    search: 'Algoritmos E Estruturas De Dados I',
    creditos: 4
  },
  { name: 'Aeronáutica II', search: 'Aeronautica Ii', creditos: 4 },
  { name: 'Análise Numérica', search: 'Analise Numerica', creditos: 4 },
  {
    name: 'Análise de Sistemas e Modelagem Ambiental',
    search: 'Analise De Sistemas E Modelagem Ambiental',
    creditos: 3
  },
  { name: 'Análise no Rn I', search: 'Analise No Rn I', creditos: 4 },
  { name: 'Anéis e Corpos', search: 'Aneis E Corpos', creditos: 4 },
  {
    name: 'Aplicações em Voz, Áudio e Acústica',
    search: 'Aplicacoes Em Voz Audio E Acustica',
    creditos: 4
  },
  {
    name: 'Automação em Sistemas de Manufatura',
    search: 'Automacao Em Sistemas De Manufatura',
    creditos: 4
  },
  {
    name: 'Automação de Sistemas Industriais',
    search: 'Automacao De Sistemas Industriais',
    creditos: 4
  },
  {
    name: 'Análise Química Instrumental',
    search: 'Analise Quimica Instrumental',
    creditos: 6
  },
  {
    name: 'Análise e Controle de Sistemas Mecânicos',
    search: 'Analise E Controle De Sistemas Mecanicos',
    creditos: 4
  },
  {
    name: 'Algoritmos e Estruturas de Dados II',
    search: 'Algoritmos E Estruturas De Dados Ii',
    creditos: 4
  },
  {
    name: 'Análise Estática em Sistemas Elétricos de Potência',
    search: 'Analise Estatica Em Sistemas Eletricos De Potencia',
    creditos: 4
  },
  {
    name: 'Análise de Fourier e aplicações',
    search: 'Analise De Fourier E Aplicacoes',
    creditos: 4
  },
  {
    name: 'Aprendizado de Máquina',
    search: 'Aprendizado De Maquina',
    creditos: 4
  },
  {
    name: 'Argumentação e Ensino',
    search: 'Argumentacao E Ensino',
    creditos: 4
  },
  { name: 'Astrobiologia', search: 'Astrobiologia', creditos: 2 },
  {
    name: 'Bases Biológicas para Engenharia I',
    search: 'Bases Biologicas Para Engenharia I',
    creditos: 5
  },
  { name: 'Análise no Rn II', search: 'Analise No Rn Ii', creditos: 4 },
  { name: 'Análise Real I', search: 'Analise Real I', creditos: 4 },
  {
    name: 'Análise de Séries Temporais - Tópicos Especiais',
    search: 'Analise De Series Temporais Topicos Especiais',
    creditos: 4
  },
  { name: 'Biomateriais', search: 'Biomateriais', creditos: 4 },
  { name: 'Biofísica', search: 'Biofisica', creditos: 4 },
  {
    name: 'Bases Epistemológicas da Ciência Moderna',
    search: 'Bases Epistemologicas Da Ciencia Moderna',
    creditos: 3
  },
  {
    name: 'Biologia do Desenvolvimento em Vertebrados',
    search: 'Biologia Do Desenvolvimento Em Vertebrados',
    creditos: 4
  },
  {
    name: 'Bases Conceituais da Energia',
    search: 'Bases Conceituais Da Energia',
    creditos: 2
  },
  { name: 'Combustão I', search: 'Combustao I', creditos: 4 },
  {
    name: 'Cidadania, Direitos e Desigualdades',
    search: 'Cidadania Direitos E Desigualdades',
    creditos: 4
  },
  {
    name: 'Circuitos Elétricos I',
    search: 'Circuitos Eletricos I',
    creditos: 5
  },
  {
    name: 'Blendas Poliméricas',
    search: 'Blendas Polimericas',
    creditos: 4
  },
  {
    name: 'Computação Científica aplicada a Problemas Biológicos',
    search: 'Computacao Cientifica Aplicada A Problemas Biologicos',
    creditos: 4
  },
  {
    name: 'Bases Neurais da Motricidade',
    search: 'Bases Neurais Da Motricidade',
    creditos: 4
  },
  {
    name: 'Biologia Animal II',
    search: 'Biologia Animal Ii',
    creditos: 5
  },
  {
    name: 'Caracterização de Matrizes Ambientais',
    search: 'Caracterizacao De Matrizes Ambientais',
    creditos: 3
  },
  {
    name: 'Ciência dos Materiais',
    search: 'Ciencia Dos Materiais',
    creditos: 4
  },
  { name: 'Climatologia', search: 'Climatologia', creditos: 3 },
  {
    name: 'Biologia Animal III',
    search: 'Biologia Animal Iii',
    creditos: 5
  },
  {
    name: 'Botânica Econômica',
    search: 'Botanica Economica',
    creditos: 4
  },
  {
    name: 'Cartografia e Geoprocessamento',
    search: 'Cartografia E Geoprocessamento',
    creditos: 4
  },
  {
    name: 'Circuitos Elétricos II',
    search: 'Circuitos Eletricos Ii',
    creditos: 5
  },
  { name: 'Combustão II', search: 'Combustao Ii', creditos: 4 },
  { name: 'Compiladores', search: 'Compiladores', creditos: 4 },
  { name: 'Biologia Celular', search: 'Biologia Celular', creditos: 6 },
  {
    name: 'Biologia Animal I',
    search: 'Biologia Animal I',
    creditos: 5
  },
  { name: 'Bioética', search: 'Bioetica', creditos: 2 },
  { name: 'Biomecânica I', search: 'Biomecanica I', creditos: 4 },
  {
    name: 'Caracterização de Biomateriais',
    search: 'Caracterizacao De Biomateriais',
    creditos: 5
  },
  {
    name: 'Bioquímica Funcional',
    search: 'Bioquimica Funcional',
    creditos: 6
  },
  {
    name: 'Biotecnologia de Plantas',
    search: 'Biotecnologia De Plantas',
    creditos: 4
  },
  {
    name: 'Circuitos Hidráulicos e Pneumáticos',
    search: 'Circuitos Hidraulicos E Pneumaticos',
    creditos: 4
  },
  {
    name: 'Cartografia e Geoprocessamento para o Planejamento Territorial',
    search: 'Cartografia E Geoprocessamento Para O Planejamento Territorial',
    creditos: 5
  },
  {
    name: 'Circuitos Digitais',
    search: 'Circuitos Digitais',
    creditos: 4
  },
  { name: 'Compostagem', search: 'Compostagem', creditos: 2 },
  {
    name: 'Ciência dos Materiais Biocompatíveis',
    search: 'Ciencia Dos Materiais Biocompativeis',
    creditos: 4
  },
  {
    name: 'Ciências Atmosféricas',
    search: 'Ciencias Atmosfericas',
    creditos: 4
  },
  {
    name: 'Cerâmicas Especiais e Refratárias',
    search: 'Ceramicas Especiais E Refratarias',
    creditos: 4
  },
  {
    name: 'Computação Evolutiva e Conexionista',
    search: 'Computacao Evolutiva E Conexionista',
    creditos: 4
  },
  {
    name: 'Bioquímica: Estrutura, Propriedade e Funções de Biomoléculas',
    search: 'Bioquimica Estrutura Propriedade E Funcoes De Biomoleculas',
    creditos: 5
  },
  {
    name: 'Circuitos Elétricos e Fotônica',
    search: 'Circuitos Eletricos E Fotonica',
    creditos: 4
  },
  {
    name: 'Clima e Cultura Organizacional',
    search: 'Clima E Cultura Organizacional',
    creditos: 2
  },
  {
    name: 'Biodiversidade: Interações entre organismos e ambiente',
    search: 'Biodiversidade Interacoes Entre Organismos E Ambiente',
    creditos: 3
  },
  {
    name: 'Bases Matemáticas',
    search: 'Bases Matematicas',
    creditos: 4
  },
  { name: 'Biossegurança', search: 'Biosseguranca', creditos: 3 },
  { name: 'Biomecânica II', search: 'Biomecanica Ii', creditos: 4 },
  {
    name: 'Citogenética Básica',
    search: 'Citogenetica Basica',
    creditos: 5
  },
  {
    name: 'Codificação de Sinais Multimídia',
    search: 'Codificacao De Sinais Multimidia',
    creditos: 4
  },
  {
    name: 'Biologia Molecular e Biotecnologia',
    search: 'Biologia Molecular E Biotecnologia',
    creditos: 3
  },
  {
    name: 'Biocombustíveis e Biorrefinarias',
    search: 'Biocombustiveis E Biorrefinarias',
    creditos: 4
  },
  { name: 'Bioestatística', search: 'Bioestatistica', creditos: 4 },
  {
    name: 'Biologia Reprodutiva de Plantas',
    search: 'Biologia Reprodutiva De Plantas',
    creditos: 4
  },
  { name: 'Biologia Vegetal', search: 'Biologia Vegetal', creditos: 6 },
  {
    name: 'Biologia Vegetal I',
    search: 'Biologia Vegetal I',
    creditos: 5
  },
  {
    name: 'Biologia Vegetal II',
    search: 'Biologia Vegetal Ii',
    creditos: 5
  },
  { name: 'Ceticismo', search: 'Ceticismo', creditos: 4 },
  {
    name: 'Computadores, Ética e Sociedade',
    search: 'Computadores Etica E Sociedade',
    creditos: 2
  },
  {
    name: 'Caracterização Biológica de Dispositivos Médicos',
    search: 'Caracterizacao Biologica De Dispositivos Medicos',
    creditos: 4
  },
  {
    name: 'Caracterização de Materiais',
    search: 'Caracterizacao De Materiais',
    creditos: 4
  },
  {
    name: 'Bioquímica Experimental',
    search: 'Bioquimica Experimental',
    creditos: 6
  },
  {
    name: 'Centrais Termoelétricas e Cogeração',
    search: 'Centrais Termoeletricas E Cogeracao',
    creditos: 4
  },
  {
    name: 'Ciência, Tecnologia e Sociedade',
    search: 'Ciencia Tecnologia E Sociedade',
    creditos: 3
  },
  { name: 'Clima Urbano', search: 'Clima Urbano', creditos: 4 },
  {
    name: 'Biologia Vegetal III',
    search: 'Biologia Vegetal Iii',
    creditos: 5
  },
  {
    name: 'Biomas Brasileiros',
    search: 'Biomas Brasileiros',
    creditos: 3
  },
  {
    name: 'Blendas Poliméricas e Aditivação de Polímeros',
    search: 'Blendas Polimericas E Aditivacao De Polimeros',
    creditos: 4
  },
  {
    name: 'Cinema e Conhecimento',
    search: 'Cinema E Conhecimento',
    creditos: 2
  },
  {
    name: 'Comunicação Digital',
    search: 'Comunicacao Digital',
    creditos: 4
  },
  {
    name: 'Comunicação e Redes',
    search: 'Comunicacao E Redes',
    creditos: 3
  },
  {
    name: 'Desenvolvimento Econômico e Social no Brasil',
    search: 'Desenvolvimento Economico E Social No Brasil',
    creditos: 4
  },
  {
    name: 'Comunicações Multimídia',
    search: 'Comunicacoes Multimidia',
    creditos: 4
  },
  { name: 'Dinâmica Orbital', search: 'Dinamica Orbital', creditos: 3 },
  {
    name: 'Conhecimento e Ética',
    search: 'Conhecimento E Etica',
    creditos: 4
  },
  {
    name: 'Controle Discreto',
    search: 'Controle Discreto',
    creditos: 4
  },
  {
    name: 'Conflitos no Ciberespaço: Ativismo e Guerra nas Redes Cibernéticas',
    search: 'Conflitos No Ciberespaco Ativismo E Guerra Nas Redes Ciberneticas',
    creditos: 4
  },
  {
    name: 'Contabilidade Básica',
    search: 'Contabilidade Basica',
    creditos: 4
  },
  {
    name: 'Cultura, Identidade e Política na América Latina',
    search: 'Cultura Identidade E Politica Na America Latina',
    creditos: 4
  },
  {
    name: 'Desigualdades Regionais e Formação Sócio-Espacial do Brasil',
    search: 'Desigualdades Regionais E Formacao Socio Espacial Do Brasil',
    creditos: 4
  },
  {
    name: 'Desenvolvimento Humano e Pobreza Urbana',
    search: 'Desenvolvimento Humano E Pobreza Urbana',
    creditos: 4
  },
  {
    name: 'Design de Dispositivos',
    search: 'Design De Dispositivos',
    creditos: 4
  },
  {
    name: 'Diagramas de Fase',
    search: 'Diagramas De Fase',
    creditos: 4
  },
  {
    name: 'Conhecimento na Economia: Abordagens e Interfaces com as Atividades de CT&I',
    search: 'Conhecimento Na Economia Abordagens E Interfaces Com As Atividades De Ct I',
    creditos: 4
  },
  {
    name: 'Consolidação de Conceitos e Métodos de Fenômenos Térmicos',
    search: 'Consolidacao De Conceitos E Metodos De Fenomenos Termicos',
    creditos: 2
  },
  {
    name: 'Cálculo de Probabilidade',
    search: 'Calculo De Probabilidade',
    creditos: 4
  },
  {
    name: 'Dinâmica Molecular e Monte Carlo',
    search: 'Dinamica Molecular E Monte Carlo',
    creditos: 4
  },
  { name: 'Ecologia Vegetal', search: 'Ecologia Vegetal', creditos: 4 },
  {
    name: 'Ecologia do Ambiente Antropizado',
    search: 'Ecologia Do Ambiente Antropizado',
    creditos: 2
  },
  {
    name: 'Comunicações Móveis',
    search: 'Comunicacoes Moveis',
    creditos: 4
  },
  {
    name: 'Conceitos de Marketing',
    search: 'Conceitos De Marketing',
    creditos: 2
  },
  {
    name: 'Desenvolvimento Socioeconômico',
    search: 'Desenvolvimento Socioeconomico',
    creditos: 4
  },
  { name: 'Didática', search: 'Didatica', creditos: 4 },
  {
    name: 'De Mercosul, Unasul à Celac',
    search: 'De Mercosul Unasul A Celac',
    creditos: 4
  },
  {
    name: 'Desigualdades de Raça, Gênero e Renda',
    search: 'Desigualdades De Raca Genero E Renda',
    creditos: 4
  },
  {
    name: 'Dinâmica de Fluidos Computacional',
    search: 'Dinamica De Fluidos Computacional',
    creditos: 4
  },
  {
    name: 'Dinâmica e Desafios dos Processos Migratórios',
    search: 'Dinamica E Desafios Dos Processos Migratorios',
    creditos: 4
  },
  {
    name: 'Dinâmicas Territoriais e Relações Étnico-Raciais no Brasil',
    search: 'Dinamicas Territoriais E Relacoes Etnico Raciais No Brasil',
    creditos: 4
  },
  {
    name: 'Confiabilidade Industrial em Sistemas de Gestão',
    search: 'Confiabilidade Industrial Em Sistemas De Gestao',
    creditos: 4
  },
  {
    name: 'Desenho e Projeto em Química',
    search: 'Desenho E Projeto Em Quimica',
    creditos: 3
  },
  {
    name: 'Ecologia Comportamental',
    search: 'Ecologia Comportamental',
    creditos: 4
  },
  {
    name: 'Confiabilidade de Componentes e Sistemas',
    search: 'Confiabilidade De Componentes E Sistemas',
    creditos: 3
  },
  { name: 'Cultura Política', search: 'Cultura Politica', creditos: 4 },
  {
    name: 'Desafios do Pré-Sal e a Inserção Internacional do Brasil',
    search: 'Desafios Do Pre Sal EA Insercao Internacional Do Brasil',
    creditos: 4
  },
  {
    name: 'Desenvolvimento e Degeneração do Sistema Nervoso',
    search: 'Desenvolvimento E Degeneracao Do Sistema Nervoso',
    creditos: 4
  },
  {
    name: 'Dinâmica Não-Linear e Caos',
    search: 'Dinamica Nao Linear E Caos',
    creditos: 4
  },
  {
    name: 'Dinâmica de Gases',
    search: 'Dinamica De Gases',
    creditos: 6
  },
  {
    name: 'Computação Gráfica',
    search: 'Computacao Grafica',
    creditos: 4
  },
  {
    name: 'Controle Não-Linear',
    search: 'Controle Nao Linear',
    creditos: 4
  },
  {
    name: 'Comunicações Ópticas',
    search: 'Comunicacoes Opticas',
    creditos: 4
  },
  {
    name: 'Consolidação de Conceitos e Métodos de Fenômenos Eletromagnéticos',
    search: 'Consolidacao De Conceitos E Metodos De Fenomenos Eletromagneticos',
    creditos: 2
  },
  {
    name: 'Contabilidade para Engenharia',
    search: 'Contabilidade Para Engenharia',
    creditos: 4
  },
  { name: 'Custos', search: 'Custos', creditos: 6 },
  { name: 'Demografia', search: 'Demografia', creditos: 4 },
  { name: 'Dinâmica II', search: 'Dinamica Ii', creditos: 4 },
  {
    name: 'Direito Internacional Público',
    search: 'Direito Internacional Publico',
    creditos: 4
  },
  {
    name: 'Desenvolvimento Integrado do Produto',
    search: 'Desenvolvimento Integrado Do Produto',
    creditos: 4
  },
  {
    name: 'Conflitos Sociais',
    search: 'Conflitos Sociais',
    creditos: 4
  },
  {
    name: 'Conservação da Biodiversidade',
    search: 'Conservacao Da Biodiversidade',
    creditos: 4
  },
  {
    name: 'Controle Robusto Multivariável',
    search: 'Controle Robusto Multivariavel',
    creditos: 4
  },
  {
    name: 'Desenvolvimento e Aprendizagem',
    search: 'Desenvolvimento E Aprendizagem',
    creditos: 4
  },
  { name: 'Dinâmica I', search: 'Dinamica I', creditos: 4 },
  {
    name: 'Dinâmica dos Investimentos Produtivos Internacionais',
    search: 'Dinamica Dos Investimentos Produtivos Internacionais',
    creditos: 4
  },
  { name: 'Ecologia Animal', search: 'Ecologia Animal', creditos: 4 },
  {
    name: 'Conhecimento e Técnica: perspectivas da Antiguidade e Período Medieval',
    search: 'Conhecimento E Tecnica Perspectivas Da Antiguidade E Periodo Medieval',
    creditos: 4
  },
  {
    name: 'Contaminação e Remediação de Solos',
    search: 'Contaminacao E Remediacao De Solos',
    creditos: 3
  },
  {
    name: 'Cristalografia e difração de raios X',
    search: 'Cristalografia E Difracao De Raios X',
    creditos: 4
  },
  { name: 'Cálculo Numérico', search: 'Calculo Numerico', creditos: 4 },
  {
    name: 'Cálculo Vetorial e Tensorial',
    search: 'Calculo Vetorial E Tensorial',
    creditos: 4
  },
  {
    name: 'Desempenho de Aeronaves',
    search: 'Desempenho De Aeronaves',
    creditos: 4
  },
  {
    name: 'Desenvolvimento e Sustentabilidade',
    search: 'Desenvolvimento E Sustentabilidade',
    creditos: 4
  },
  {
    name: 'Dinâmica e Controle de Veículos Espaciais',
    search: 'Dinamica E Controle De Veiculos Espaciais',
    creditos: 4
  },
  {
    name: 'Dispositivos Eletrônicos',
    search: 'Dispositivos Eletronicos',
    creditos: 5
  },
  {
    name: 'Economia Solidária, Associativismo e Cooperativismo',
    search: 'Economia Solidaria Associativismo E Cooperativismo',
    creditos: 4
  },
  {
    name: 'Economia de Empresas',
    search: 'Economia De Empresas',
    creditos: 2
  },
  {
    name: 'Engenharia Logística',
    search: 'Engenharia Logistica',
    creditos: 4
  },
  {
    name: 'Economia Política Internacional da Energia',
    search: 'Economia Politica Internacional Da Energia',
    creditos: 4
  },
  { name: 'Econometria II', search: 'Econometria Ii', creditos: 4 },
  {
    name: 'Educação inclusiva',
    search: 'Educacao Inclusiva',
    creditos: 2
  },
  {
    name: 'Eletromagnetismo I',
    search: 'Eletromagnetismo I',
    creditos: 4
  },
  {
    name: 'Empreendedorismo e Desenvolvimento de Negócios',
    search: 'Empreendedorismo E Desenvolvimento De Negocios',
    creditos: 4
  },
  { name: 'Empreendedorismo', search: 'Empreendedorismo', creditos: 4 },
  {
    name: 'Eficiência Energética Industrial',
    search: 'Eficiencia Energetica Industrial',
    creditos: 4
  },
  {
    name: 'Eletroanalítica e Técnicas de Separação',
    search: 'Eletroanalitica E Tecnicas De Separacao',
    creditos: 6
  },
  {
    name: 'Economia e Meio Ambiente',
    search: 'Economia E Meio Ambiente',
    creditos: 3
  },
  {
    name: 'Economia Brasileira Contemporânea I',
    search: 'Economia Brasileira Contemporanea I',
    creditos: 4
  },
  {
    name: 'Economia Monetária',
    search: 'Economia Monetaria',
    creditos: 4
  },
  {
    name: 'Economia Industrial',
    search: 'Economia Industrial',
    creditos: 4
  },
  { name: 'Econometria III', search: 'Econometria Iii', creditos: 4 },
  { name: 'Econometria I', search: 'Econometria I', creditos: 4 },
  {
    name: 'Economia Matemática',
    search: 'Economia Matematica',
    creditos: 4
  },
  {
    name: 'Educação Ambiental',
    search: 'Educacao Ambiental',
    creditos: 4
  },
  {
    name: 'Eletromagnetismo Aplicado',
    search: 'Eletromagnetismo Aplicado',
    creditos: 4
  },
  {
    name: 'Eletroquímica e Cinética Química',
    search: 'Eletroquimica E Cinetica Quimica',
    creditos: 6
  },
  {
    name: 'Eletrônica de Potência I',
    search: 'Eletronica De Potencia I',
    creditos: 5
  },
  {
    name: 'Energia Geotérmica',
    search: 'Energia Geotermica',
    creditos: 2
  },
  {
    name: 'Energia Nuclear e Relações Internacionais',
    search: 'Energia Nuclear E Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'Engenharia Nuclear',
    search: 'Engenharia Nuclear',
    creditos: 4
  },
  {
    name: 'Engenharia Solar Fotovoltaica',
    search: 'Engenharia Solar Fotovoltaica',
    creditos: 4
  },
  {
    name: 'Eletrônica Analógica Aplicada',
    search: 'Eletronica Analogica Aplicada',
    creditos: 5
  },
  {
    name: 'Engenharia Econômica',
    search: 'Engenharia Economica',
    creditos: 4
  },
  {
    name: 'Economia Internacional I',
    search: 'Economia Internacional I',
    creditos: 4
  },
  {
    name: 'Economia Internacional II',
    search: 'Economia Internacional Ii',
    creditos: 4
  },
  {
    name: 'Educação em saúde e sexualidade',
    search: 'Educacao Em Saude E Sexualidade',
    creditos: 3
  },
  {
    name: 'Educação à Distância e Novas Tecnologias',
    search: 'Educacao A Distancia E Novas Tecnologias',
    creditos: 3
  },
  {
    name: 'Engenharia Clínica I',
    search: 'Engenharia Clinica I',
    creditos: 5
  },
  {
    name: 'Engenharia Laboral',
    search: 'Engenharia Laboral',
    creditos: 4
  },
  {
    name: 'Economia Política da Segurança Alimentar Global',
    search: 'Economia Politica Da Seguranca Alimentar Global',
    creditos: 4
  },
  {
    name: 'Elementos Finitos Aplicados em Materiais',
    search: 'Elementos Finitos Aplicados Em Materiais',
    creditos: 4
  },
  {
    name: 'Eletromagnetismo II',
    search: 'Eletromagnetismo Ii',
    creditos: 4
  },
  {
    name: 'Engenharia Humana',
    search: 'Engenharia Humana',
    creditos: 4
  },
  {
    name: 'Engenharia Unificada II',
    search: 'Engenharia Unificada Ii',
    creditos: 2
  },
  {
    name: 'Educação Científica, Sociedade e Cultura',
    search: 'Educacao Cientifica Sociedade E Cultura',
    creditos: 4
  },
  {
    name: 'Eletrônica de Potência II',
    search: 'Eletronica De Potencia Ii',
    creditos: 5
  },
  {
    name: 'Energia dos Oceanos',
    search: 'Energia Dos Oceanos',
    creditos: 2
  },
  {
    name: 'Engenharia Econômica Aplicada a Sistemas de Gestão',
    search: 'Engenharia Economica Aplicada A Sistemas De Gestao',
    creditos: 4
  },
  {
    name: 'Engenharia Solar Térmica',
    search: 'Engenharia Solar Termica',
    creditos: 4
  },
  {
    name: 'Economia Institucional I',
    search: 'Economia Institucional I',
    creditos: 4
  },
  {
    name: 'Energia, Meio Ambiente e Sociedade',
    search: 'Energia Meio Ambiente E Sociedade',
    creditos: 4
  },
  {
    name: 'Eletrificação Rural com Recursos Energéticos Renováveis',
    search: 'Eletrificacao Rural Com Recursos Energeticos Renovaveis',
    creditos: 4
  },
  {
    name: 'Engenharia Unificada I',
    search: 'Engenharia Unificada I',
    creditos: 2
  },
  {
    name: 'Economia Institucional II',
    search: 'Economia Institucional Ii',
    creditos: 4
  },
  {
    name: 'Economia Brasileira Contemporânea II',
    search: 'Economia Brasileira Contemporanea Ii',
    creditos: 4
  },
  {
    name: 'Economia Brasileira Contemporânea III',
    search: 'Economia Brasileira Contemporanea Iii',
    creditos: 4
  },
  {
    name: 'Economia Política',
    search: 'Economia Politica',
    creditos: 4
  },
  {
    name: 'Elaboração, Análise e Avaliação de Projetos',
    search: 'Elaboracao Analise E Avaliacao De Projetos',
    creditos: 4
  },
  {
    name: 'Economia da Energia',
    search: 'Economia Da Energia',
    creditos: 2
  },
  {
    name: 'Economia do Petróleo e do Gás Natural',
    search: 'Economia Do Petroleo E Do Gas Natural',
    creditos: 4
  },
  {
    name: 'Economia do Território',
    search: 'Economia Do Territorio',
    creditos: 4
  },
  {
    name: 'Eletromagnetismo III',
    search: 'Eletromagnetismo Iii',
    creditos: 4
  },
  {
    name: 'Energia: Origens, Conversão e Uso',
    search: 'Energia Origens Conversao E Uso',
    creditos: 2
  },
  {
    name: 'Engenharia Eólica',
    search: 'Engenharia Eolica',
    creditos: 4
  },
  {
    name: 'Engenharia de Biocombustíveis',
    search: 'Engenharia De Biocombustiveis',
    creditos: 4
  },
  { name: 'Economia Urbana', search: 'Economia Urbana', creditos: 4 },
  {
    name: 'Economia do Trabalho',
    search: 'Economia Do Trabalho',
    creditos: 4
  },
  {
    name: 'Economia, Sociedade e Meio Ambiente',
    search: 'Economia Sociedade E Meio Ambiente',
    creditos: 3
  },
  {
    name: 'Eletrônica Digital',
    search: 'Eletronica Digital',
    creditos: 6
  },
  {
    name: 'Estrutura da Matéria',
    search: 'Estrutura Da Materia',
    creditos: 3
  },
  {
    name: 'Engenharia de Petróleo e Gás',
    search: 'Engenharia De Petroleo E Gas',
    creditos: 4
  },
  {
    name: 'Engenharia de Metais',
    search: 'Engenharia De Metais',
    creditos: 4
  },
  {
    name: 'Engenharia de Sistemas Eólicos',
    search: 'Engenharia De Sistemas Eolicos',
    creditos: 4
  },
  {
    name: 'Engenharia de Software',
    search: 'Engenharia De Software',
    creditos: 4
  },
  {
    name: 'Ergonomia Cognitiva',
    search: 'Ergonomia Cognitiva',
    creditos: 4
  },
  {
    name: 'Experimentação e Ensino de Química',
    search: 'Experimentacao E Ensino De Quimica',
    creditos: 3
  },
  {
    name: 'Fermentação Industrial',
    search: 'Fermentacao Industrial',
    creditos: 4
  },
  {
    name: 'Estética: Perspectivas Contemporâneas',
    search: 'Estetica Perspectivas Contemporaneas',
    creditos: 4
  },
  {
    name: 'Equações Diferenciais Ordinárias',
    search: 'Equacoes Diferenciais Ordinarias',
    creditos: 4
  },
  {
    name: 'Federalismo e Políticas Públicas',
    search: 'Federalismo E Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Fenômenos Ondulatórios',
    search: 'Fenomenos Ondulatorios',
    creditos: 4
  },
  { name: 'Espectroscopia', search: 'Espectroscopia', creditos: 6 },
  {
    name: 'Estrutura da Matéria Avançada',
    search: 'Estrutura Da Materia Avancada',
    creditos: 6
  },
  {
    name: 'Evolução Molecular',
    search: 'Evolucao Molecular',
    creditos: 3
  },
  {
    name: 'Equipamentos Médico-Hospitalares',
    search: 'Equipamentos Medico Hospitalares',
    creditos: 5
  },
  {
    name: 'Estado e Desenvolvimento Econômico no Brasil Contemporâneo',
    search: 'Estado E Desenvolvimento Economico No Brasil Contemporaneo',
    creditos: 4
  },
  {
    name: 'Evolução da Física',
    search: 'Evolucao Da Fisica',
    creditos: 4
  },
  {
    name: 'Fenômenos de Transporte',
    search: 'Fenomenos De Transporte',
    creditos: 4
  },
  {
    name: 'Filosofia da Ciência: o debate Popper-Kuhn e seus desdobramentos',
    search: 'Filosofia Da Ciencia O Debate Popper Kuhn E Seus Desdobramentos',
    creditos: 4
  },
  {
    name: 'Engenharia de Sistemas Fotovoltaicos',
    search: 'Engenharia De Sistemas Fotovoltaicos',
    creditos: 4
  },
  {
    name: 'Engenharia de Biocombustíveis II',
    search: 'Engenharia De Biocombustiveis Ii',
    creditos: 4
  },
  {
    name: 'Ensino Superior no Brasil: Trajetórias e Modelos Institucionais',
    search: 'Ensino Superior No Brasil Trajetorias E Modelos Institucionais',
    creditos: 4
  },
  {
    name: 'Engenharia de Tecidos',
    search: 'Engenharia De Tecidos',
    creditos: 5
  },
  {
    name: 'Estudos Étnico-Raciais',
    search: 'Estudos Etnico Raciais',
    creditos: 3
  },
  { name: 'Existencialismo', search: 'Existencialismo', creditos: 4 },
  {
    name: 'Engenharia de Biocombustíveis I',
    search: 'Engenharia De Biocombustiveis I',
    creditos: 4
  },
  {
    name: 'Engenharia de Polímeros',
    search: 'Engenharia De Polimeros',
    creditos: 4
  },
  {
    name: 'Evolução e Diversidade de Plantas II',
    search: 'Evolucao E Diversidade De Plantas Ii',
    creditos: 6
  },
  {
    name: 'Estado e Relações de Poder',
    search: 'Estado E Relacoes De Poder',
    creditos: 4
  },
  {
    name: 'Estrutura e Dinâmica Social',
    search: 'Estrutura E Dinamica Social',
    creditos: 3
  },
  {
    name: 'Engenharia de Recursos Hídricos',
    search: 'Engenharia De Recursos Hidricos',
    creditos: 4
  },
  {
    name: 'Estado e Sociedade Civil Organizada',
    search: 'Estado E Sociedade Civil Organizada',
    creditos: 4
  },
  {
    name: 'Estatística Aplicada a Sistemas de Gestão',
    search: 'Estatistica Aplicada A Sistemas De Gestao',
    creditos: 4
  },
  {
    name: 'Evolução e Diversificação da Vida na Terra',
    search: 'Evolucao E Diversificacao Da Vida Na Terra',
    creditos: 3
  },
  {
    name: 'Extensões Algébricas',
    search: 'Extensoes Algebricas',
    creditos: 4
  },
  {
    name: 'Fenomenologia e Filosofia Hermenêutica',
    search: 'Fenomenologia E Filosofia Hermeneutica',
    creditos: 4
  },
  {
    name: 'Engenharia Óptica e Imagens',
    search: 'Engenharia Optica E Imagens',
    creditos: 4
  },
  {
    name: 'Engenharia de Reabilitação e Biofeedback',
    search: 'Engenharia De Reabilitacao E Biofeedback',
    creditos: 4
  },
  {
    name: 'Engenharia de Cerâmicas',
    search: 'Engenharia De Ceramicas',
    creditos: 4
  },
  {
    name: 'Equações Diferenciais Parciais',
    search: 'Equacoes Diferenciais Parciais',
    creditos: 4
  },
  {
    name: 'Engenharia de Filmes Finos',
    search: 'Engenharia De Filmes Finos',
    creditos: 4
  },
  {
    name: 'Engenharia de Combustíveis Fósseis',
    search: 'Engenharia De Combustiveis Fosseis',
    creditos: 4
  },
  { name: 'Estado Sólido', search: 'Estado Solido', creditos: 4 },
  { name: 'Etnofarmacologia', search: 'Etnofarmacologia', creditos: 3 },
  {
    name: 'Evolução dos Conceitos Matemáticos',
    search: 'Evolucao Dos Conceitos Matematicos',
    creditos: 4
  },
  {
    name: 'Evolução e Diversidade de Plantas I',
    search: 'Evolucao E Diversidade De Plantas I',
    creditos: 4
  },
  {
    name: 'Fenômenos Eletromagnéticos',
    search: 'Fenomenos Eletromagneticos',
    creditos: 5
  },
  {
    name: 'Filosofia da Arte',
    search: 'Filosofia Da Arte',
    creditos: 4
  },
  { name: 'Ergonomia', search: 'Ergonomia', creditos: 4 },
  {
    name: 'Estratégias de Comunicação Organizacional',
    search: 'Estrategias De Comunicacao Organizacional',
    creditos: 4
  },
  { name: 'Evolução', search: 'Evolucao', creditos: 5 },
  {
    name: 'Fenômenos Mecânicos',
    search: 'Fenomenos Mecanicos',
    creditos: 5
  },
  {
    name: 'Filosofia Política: perspectivas contemporâneas',
    search: 'Filosofia Politica Perspectivas Contemporaneas',
    creditos: 4
  },
  {
    name: 'Engenharia de Perfuração',
    search: 'Engenharia De Perfuracao',
    creditos: 4
  },
  {
    name: 'Estabilidade e Controle de Aeronaves',
    search: 'Estabilidade E Controle De Aeronaves',
    creditos: 4
  },
  {
    name: 'Fenômenos Térmicos',
    search: 'Fenomenos Termicos',
    creditos: 4
  },
  {
    name: 'Filosofia Brasileira: História e Problemas',
    search: 'Filosofia Brasileira Historia E Problemas',
    creditos: 4
  },
  {
    name: 'Equações Diferenciais Parciais Aplicadas',
    search: 'Equacoes Diferenciais Parciais Aplicadas',
    creditos: 4
  },
  { name: 'Estética', search: 'Estetica', creditos: 4 },
  {
    name: 'Filosofia Política',
    search: 'Filosofia Politica',
    creditos: 4
  },
  {
    name: 'Estudos do Meio Físico',
    search: 'Estudos Do Meio Fisico',
    creditos: 4
  },
  { name: 'Farmacologia', search: 'Farmacologia', creditos: 6 },
  {
    name: 'Filosofia da Ciência: em torno à concepção ortodoxa',
    search: 'Filosofia Da Ciencia Em Torno A Concepcao Ortodoxa',
    creditos: 4
  },
  {
    name: 'Finanças Corporativas',
    search: 'Financas Corporativas',
    creditos: 4
  },
  {
    name: 'Filosofia da Educação',
    search: 'Filosofia Da Educacao',
    creditos: 4
  },
  {
    name: 'Filosofia da Mente',
    search: 'Filosofia Da Mente',
    creditos: 4
  },
  {
    name: 'Fundamentos de Sistemática Vegetal',
    search: 'Fundamentos De Sistematica Vegetal',
    creditos: 6
  },
  {
    name: 'Fundamentos da Eletrodinâmica',
    search: 'Fundamentos Da Eletrodinamica',
    creditos: 4
  },
  {
    name: 'Fundamentos da Eletrostática',
    search: 'Fundamentos Da Eletrostatica',
    creditos: 4
  },
  {
    name: 'Fundamentos de Álgebra',
    search: 'Fundamentos De Algebra',
    creditos: 4
  },
  {
    name: 'Física Computacional',
    search: 'Fisica Computacional',
    creditos: 4
  },
  {
    name: 'Física do Contínuo',
    search: 'Fisica Do Continuo',
    creditos: 4
  },
  {
    name: 'Filosofia, Ensino e Universidade',
    search: 'Filosofia Ensino E Universidade',
    creditos: 4
  },
  {
    name: 'Filosofia da Lógica',
    search: 'Filosofia Da Logica',
    creditos: 4
  },
  { name: 'Finanças II', search: 'Financas Ii', creditos: 4 },
  {
    name: 'Formação Histórica do Brasil',
    search: 'Formacao Historica Do Brasil',
    creditos: 4
  },
  {
    name: 'Fisiologia Vegetal I',
    search: 'Fisiologia Vegetal I',
    creditos: 6
  },
  {
    name: 'Fundamentos de Desenho Técnico',
    search: 'Fundamentos De Desenho Tecnico',
    creditos: 2
  },
  {
    name: 'Fundamentos de Imunologia',
    search: 'Fundamentos De Imunologia',
    creditos: 4
  },
  {
    name: 'Fundamentos de Processamento Gráfico',
    search: 'Fundamentos De Processamento Grafico',
    creditos: 4
  },
  {
    name: 'Funções de Várias Variáveis',
    search: 'Funcoes De Varias Variaveis',
    creditos: 4
  },
  { name: 'Física Médica II', search: 'Fisica Medica Ii', creditos: 2 },
  {
    name: 'Formação Histórica da América Latina',
    search: 'Formacao Historica Da America Latina',
    creditos: 4
  },
  {
    name: 'Funções de Variável Complexa',
    search: 'Funcoes De Variavel Complexa',
    creditos: 6
  },
  {
    name: 'Finanças Públicas',
    search: 'Financas Publicas',
    creditos: 4
  },
  {
    name: 'Fundamentos de Geometria',
    search: 'Fundamentos De Geometria',
    creditos: 4
  },
  {
    name: 'Filosofia no Ensino Fundamental',
    search: 'Filosofia No Ensino Fundamental',
    creditos: 4
  },
  {
    name: 'Filosofia da Linguagem',
    search: 'Filosofia Da Linguagem',
    creditos: 4
  },
  {
    name: 'Fontes Renováveis de Energia',
    search: 'Fontes Renovaveis De Energia',
    creditos: 4
  },
  {
    name: 'Formação Histórica do Brasil Contemporâneo',
    search: 'Formacao Historica Do Brasil Contemporaneo',
    creditos: 4
  },
  {
    name: 'Funções e Reações Orgânicas',
    search: 'Funcoes E Reacoes Organicas',
    creditos: 4
  },
  { name: 'Física Médica I', search: 'Fisica Medica I', creditos: 4 },
  { name: 'Física Quântica', search: 'Fisica Quantica', creditos: 3 },
  {
    name: 'Física de Reatores Nucleares',
    search: 'Fisica De Reatores Nucleares',
    creditos: 4
  },
  {
    name: 'Funções Complexas e Transformadas Integrais',
    search: 'Funcoes Complexas E Transformadas Integrais',
    creditos: 4
  },
  { name: 'Física Térmica', search: 'Fisica Termica', creditos: 4 },
  { name: 'Fotônica', search: 'Fotonica', creditos: 4 },
  {
    name: 'Fundamentos de Eletromagnetismo Aplicado',
    search: 'Fundamentos De Eletromagnetismo Aplicado',
    creditos: 4
  },
  {
    name: 'Fundamentos de Fotônica',
    search: 'Fundamentos De Fotonica',
    creditos: 4
  },
  {
    name: 'Funções de Uma Variável',
    search: 'Funcoes De Uma Variavel',
    creditos: 4
  },
  {
    name: 'Fontes Não-Renováveis de Energia',
    search: 'Fontes Nao Renovaveis De Energia',
    creditos: 4
  },
  {
    name: 'Formação de Grupos Sociais',
    search: 'Formacao De Grupos Sociais',
    creditos: 2
  },
  {
    name: 'Fundamentos de Conversão de Energia Elétrica',
    search: 'Fundamentos De Conversao De Energia Eletrica',
    creditos: 4
  },
  {
    name: 'Fundamentos de Geologia para Engenharia',
    search: 'Fundamentos De Geologia Para Engenharia',
    creditos: 4
  },
  {
    name: 'Fundamentos de Robótica',
    search: 'Fundamentos De Robotica',
    creditos: 4
  },
  {
    name: 'Funções de Variáveis Complexas',
    search: 'Funcoes De Variaveis Complexas',
    creditos: 6
  },
  {
    name: 'Formas Diferenciais',
    search: 'Formas Diferenciais',
    creditos: 4
  },
  {
    name: 'Formação do Sistema Internacional',
    search: 'Formacao Do Sistema Internacional',
    creditos: 4
  },
  {
    name: 'Física de Semicondutores',
    search: 'Fisica De Semicondutores',
    creditos: 4
  },
  {
    name: 'Finanças I (Apreçamento de Ativos)',
    search: 'Financas I Aprecamento De Ativos',
    creditos: 4
  },
  {
    name: 'Fundamentos de Análise',
    search: 'Fundamentos De Analise',
    creditos: 4
  },
  {
    name: 'Fundamentos de Máquinas Térmicas',
    search: 'Fundamentos De Maquinas Termicas',
    creditos: 4
  },
  {
    name: 'Fundamentos da Mecânica dos Fluidos',
    search: 'Fundamentos Da Mecanica Dos Fluidos',
    creditos: 4
  },
  { name: 'Finanças I', search: 'Financas I', creditos: 4 },
  {
    name: 'Filosofia no Brasil e na América Latina',
    search: 'Filosofia No Brasil E Na America Latina',
    creditos: 4
  },
  {
    name: 'Filosofia da Educação: perspectivas contemporâneas',
    search: 'Filosofia Da Educacao Perspectivas Contemporaneas',
    creditos: 4
  },
  {
    name: 'Fundamentos de Desenho e Projeto',
    search: 'Fundamentos De Desenho E Projeto',
    creditos: 4
  },
  {
    name: 'Funções Especiais',
    search: 'Funcoes Especiais',
    creditos: 4
  },
  {
    name: 'Física Ondulatória',
    search: 'Fisica Ondulatoria',
    creditos: 4
  },
  {
    name: 'Formação das Políticas Educacionais no Brasil',
    search: 'Formacao Das Politicas Educacionais No Brasil',
    creditos: 4
  },
  {
    name: 'Fundamentos de Máquinas Elétricas',
    search: 'Fundamentos De Maquinas Eletricas',
    creditos: 4
  },
  {
    name: 'Fundamentos de Eletrônica Analógica e Digital',
    search: 'Fundamentos De Eletronica Analogica E Digital',
    creditos: 4
  },
  {
    name: 'Filosofia do Ensino de Filosofia',
    search: 'Filosofia Do Ensino De Filosofia',
    creditos: 4
  },
  {
    name: 'Fisiologia Vegetal II',
    search: 'Fisiologia Vegetal Ii',
    creditos: 4
  },
  {
    name: 'Formação Econômica do Brasil',
    search: 'Formacao Economica Do Brasil',
    creditos: 4
  },
  {
    name: 'Fundamentos de Sistemas Dinâmicos',
    search: 'Fundamentos De Sistemas Dinamicos',
    creditos: 4
  },
  {
    name: 'Física de Reatores Nucleares I',
    search: 'Fisica De Reatores Nucleares I',
    creditos: 3
  },
  {
    name: 'Geografia Política',
    search: 'Geografia Politica',
    creditos: 4
  },
  {
    name: 'Governo, Burocracia e Administração Pública',
    search: 'Governo Burocracia E Administracao Publica',
    creditos: 4
  },
  {
    name: 'Gestão Estratégica e Organizacional',
    search: 'Gestao Estrategica E Organizacional',
    creditos: 2
  },
  {
    name: 'Inovação nos Serviços Públicos',
    search: 'Inovacao Nos Servicos Publicos',
    creditos: 4
  },
  {
    name: 'Introdução à Probabilidade e à Estatística',
    search: 'Introducao A Probabilidade EA Estatistica',
    creditos: 3
  },
  {
    name: 'História da Filosofia Medieval: Patrística e Escolástica',
    search: 'Historia Da Filosofia Medieval Patristica E Escolastica',
    creditos: 4
  },
  {
    name: 'Indicadores de Políticas Públicas',
    search: 'Indicadores De Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Interação Fluido-Estrutura',
    search: 'Interacao Fluido Estrutura',
    creditos: 3
  },
  {
    name: 'Introdução à Biofotônica e Óptica Biomédica',
    search: 'Introducao A Biofotonica E Optica Biomedica',
    creditos: 4
  },
  {
    name: 'Introdução à Engenharia Nuclear',
    search: 'Introducao A Engenharia Nuclear',
    creditos: 4
  },
  {
    name: 'Introdução à Engenharia do Petróleo I',
    search: 'Introducao A Engenharia Do Petroleo I',
    creditos: 4
  },
  {
    name: 'Introdução à Neurociência',
    search: 'Introducao A Neurociencia',
    creditos: 4
  },
  {
    name: 'Introdução à Neurociência Computacional',
    search: 'Introducao A Neurociencia Computacional',
    creditos: 4
  },
  {
    name: 'Historiografia e História das Ciências',
    search: 'Historiografia E Historia Das Ciencias',
    creditos: 4
  },
  {
    name: 'História da Filosofia Moderna: o Idealismo alemão',
    search: 'Historia Da Filosofia Moderna O Idealismo Alemao',
    creditos: 4
  },
  {
    name: 'Instrumentação e Sensores em Veículos Aeroespaciais',
    search: 'Instrumentacao E Sensores Em Veiculos Aeroespaciais',
    creditos: 4
  },
  {
    name: 'Inteligência Artificial',
    search: 'Inteligencia Artificial',
    creditos: 4
  },
  {
    name: 'Interações Atômicas e Moleculares',
    search: 'Interacoes Atomicas E Moleculares',
    creditos: 3
  },
  {
    name: 'Interpretações do Brasil',
    search: 'Interpretacoes Do Brasil',
    creditos: 4
  },
  {
    name: 'Introdução aos Sistemas Elétricos de Potência',
    search: 'Introducao Aos Sistemas Eletricos De Potencia',
    creditos: 4
  },
  {
    name: 'Introdução à Filosofia da Mente',
    search: 'Introducao A Filosofia Da Mente',
    creditos: 2
  },
  {
    name: 'Gestão de Operações',
    search: 'Gestao De Operacoes',
    creditos: 4
  },
  {
    name: 'História da Filosofia Moderna: o Iluminismo e seus desdobramentos',
    search: 'Historia Da Filosofia Moderna O Iluminismo E Seus Desdobramentos',
    creditos: 4
  },
  {
    name: 'Introdução à Bioinformática',
    search: 'Introducao A Bioinformatica',
    creditos: 4
  },
  {
    name: 'Introdução à Física de Partículas Elementares',
    search: 'Introducao A Fisica De Particulas Elementares',
    creditos: 4
  },
  { name: 'Genética I', search: 'Genetica I', creditos: 6 },
  { name: 'Genética II', search: 'Genetica Ii', creditos: 4 },
  {
    name: 'Gestão de Custos Avançada',
    search: 'Gestao De Custos Avancada',
    creditos: 4
  },
  {
    name: 'Globalização e os Processos de Integração Regional',
    search: 'Globalizacao E Os Processos De Integracao Regional',
    creditos: 4
  },
  {
    name: 'Grupo Fundamental e Espaço de Recobrimento',
    search: 'Grupo Fundamental E Espaco De Recobrimento',
    creditos: 4
  },
  {
    name: 'História do Pensamento Econômico',
    search: 'Historia Do Pensamento Economico',
    creditos: 4
  },
  {
    name: 'Informação e Sociedade',
    search: 'Informacao E Sociedade',
    creditos: 2
  },
  {
    name: 'Instrumentação e Controle',
    search: 'Instrumentacao E Controle',
    creditos: 4
  },
  {
    name: 'Instrumentação para o Ensino de Ciências e Biologia',
    search: 'Instrumentacao Para O Ensino De Ciencias E Biologia',
    creditos: 4
  },
  {
    name: 'Físico-Química Experimental',
    search: 'Fisico Quimica Experimental',
    creditos: 4
  },
  {
    name: 'Geometria Não Euclidiana',
    search: 'Geometria Nao Euclidiana',
    creditos: 4
  },
  { name: 'Hidrologia', search: 'Hidrologia', creditos: 4 },
  {
    name: 'História da Filosofia Medieval: do século IV ao X',
    search: 'Historia Da Filosofia Medieval Do Seculo Iv Ao X',
    creditos: 4
  },
  {
    name: 'História das Ideias Biológicas',
    search: 'Historia Das Ideias Biologicas',
    creditos: 2
  },
  {
    name: 'História e Filosofia das Ciências e o Ensino de Ciências',
    search: 'Historia E Filosofia Das Ciencias EO Ensino De Ciencias',
    creditos: 4
  },
  {
    name: 'Instalações Elétricas II',
    search: 'Instalacoes Eletricas Ii',
    creditos: 4
  },
  {
    name: 'Instrumentação Biomédica',
    search: 'Instrumentacao Biomedica',
    creditos: 5
  },
  { name: 'Geotecnia', search: 'Geotecnia', creditos: 4 },
  {
    name: 'Genética Molecular',
    search: 'Genetica Molecular',
    creditos: 4
  },
  {
    name: 'História da Cidade e do Urbanismo',
    search: 'Historia Da Cidade E Do Urbanismo',
    creditos: 4
  },
  {
    name: 'História e Análise da Política Externa Brasileira',
    search: 'Historia E Analise Da Politica Externa Brasileira',
    creditos: 4
  },
  {
    name: 'Introdução ao Direito Administrativo',
    search: 'Introducao Ao Direito Administrativo',
    creditos: 4
  },
  {
    name: 'Introdução à Economia',
    search: 'Introducao A Economia',
    creditos: 4
  },
  {
    name: 'Governança Pública, Democracia e Políticas no Território',
    search: 'Governanca Publica Democracia E Politicas No Territorio',
    creditos: 4
  },
  {
    name: 'Impactos Econômicos e Socioambientais da Geração Fotovoltaica',
    search: 'Impactos Economicos E Socioambientais Da Geracao Fotovoltaica',
    creditos: 2
  },
  {
    name: 'Indústria de Polímeros',
    search: 'Industria De Polimeros',
    creditos: 4
  },
  {
    name: 'Introdução aos Processos de Fabricação',
    search: 'Introducao Aos Processos De Fabricacao',
    creditos: 4
  },
  {
    name: 'Introdução à Inferência Estatística',
    search: 'Introducao A Inferencia Estatistica',
    creditos: 4
  },
  {
    name: 'Geometria Diferencial I',
    search: 'Geometria Diferencial I',
    creditos: 4
  },
  {
    name: 'Geologia e Paleontologia',
    search: 'Geologia E Paleontologia',
    creditos: 4
  },
  {
    name: 'História Econômica Geral',
    search: 'Historia Economica Geral',
    creditos: 4
  },
  {
    name: 'História da Filosofia Contemporânea: o século XIX',
    search: 'Historia Da Filosofia Contemporanea O Seculo Xix',
    creditos: 4
  },
  {
    name: 'História da Filosofia Moderna: perspectivas racionalistas',
    search: 'Historia Da Filosofia Moderna Perspectivas Racionalistas',
    creditos: 4
  },
  {
    name: 'História da Filosofia da Antiguidade Tardia',
    search: 'Historia Da Filosofia Da Antiguidade Tardia',
    creditos: 4
  },
  {
    name: 'História da Matemática',
    search: 'Historia Da Matematica',
    creditos: 4
  },
  {
    name: 'História das Ciências no Brasil',
    search: 'Historia Das Ciencias No Brasil',
    creditos: 4
  },
  {
    name: 'Instituições Judiciais e Políticas Públicas',
    search: 'Instituicoes Judiciais E Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Instrumentação Biomédica Avançada',
    search: 'Instrumentacao Biomedica Avancada',
    creditos: 5
  },
  {
    name: 'Instrumentação Biomédica I',
    search: 'Instrumentacao Biomedica I',
    creditos: 4
  },
  {
    name: 'Introdução à Análise Funcional',
    search: 'Introducao A Analise Funcional',
    creditos: 4
  },
  {
    name: 'Introdução à Criptografia',
    search: 'Introducao A Criptografia',
    creditos: 4
  },
  {
    name: 'Geometria Diferencial II',
    search: 'Geometria Diferencial Ii',
    creditos: 4
  },
  {
    name: 'Geometria Plana e Construções Geométricas',
    search: 'Geometria Plana E Construcoes Geometricas',
    creditos: 4
  },
  {
    name: 'Gestão de Projetos Culturais',
    search: 'Gestao De Projetos Culturais',
    creditos: 4
  },
  {
    name: 'Gestão de Tecnologia Hospitalar I',
    search: 'Gestao De Tecnologia Hospitalar I',
    creditos: 4
  },
  {
    name: 'Gestão de projetos de software',
    search: 'Gestao De Projetos De Software',
    creditos: 4
  },
  { name: 'Hidráulica', search: 'Hidraulica', creditos: 4 },
  {
    name: 'Histologia e Embriologia',
    search: 'Histologia E Embriologia',
    creditos: 6
  },
  {
    name: 'Imunologia Aplicada',
    search: 'Imunologia Aplicada',
    creditos: 4
  },
  {
    name: 'Introdução a Troca de Calor, Massa e Movimentação de Fluidos',
    search: 'Introducao A Troca De Calor Massa E Movimentacao De Fluidos',
    creditos: 4
  },
  {
    name: 'Introdução ao Processamento de Sinais de Voz e Áudio',
    search: 'Introducao Ao Processamento De Sinais De Voz E Audio',
    creditos: 4
  },
  {
    name: 'Introdução à Física Estelar',
    search: 'Introducao A Fisica Estelar',
    creditos: 4
  },
  {
    name: 'Introdução à Física Nuclear',
    search: 'Introducao A Fisica Nuclear',
    creditos: 4
  },
  {
    name: 'Física do Meio Ambiente',
    search: 'Fisica Do Meio Ambiente',
    creditos: 4
  },
  {
    name: 'Habitação e Assentamentos Humanos',
    search: 'Habitacao E Assentamentos Humanos',
    creditos: 4
  },
  { name: 'Genética Geral', search: 'Genetica Geral', creditos: 5 },
  {
    name: 'História de Atuação do Brasil nos Processos de Integração Sul-americana',
    search: 'Historia De Atuacao Do Brasil Nos Processos De Integracao Sul Americana',
    creditos: 4
  },
  {
    name: 'História e Filosofia da Ciência',
    search: 'Historia E Filosofia Da Ciencia',
    creditos: 4
  },
  {
    name: 'Inovação Tecnológica',
    search: 'Inovacao Tecnologica',
    creditos: 4
  },
  {
    name: 'Inteligência Artificial em Robótica',
    search: 'Inteligencia Artificial Em Robotica',
    creditos: 4
  },
  {
    name: 'Interface Humano-Máquina',
    search: 'Interface Humano Maquina',
    creditos: 4
  },
  {
    name: 'Introdução ao Processamento de Sinais de Voz, Áudio e Acústicos',
    search: 'Introducao Ao Processamento De Sinais De Voz Audio E Acusticos',
    creditos: 4
  },
  {
    name: 'Introdução aos Processos de Fabricação Metal - Mecânico',
    search: 'Introducao Aos Processos De Fabricacao Metal Mecanico',
    creditos: 6
  },
  {
    name: 'Introdução à Cosmologia',
    search: 'Introducao A Cosmologia',
    creditos: 4
  },
  {
    name: 'Informática Aplicada ao Planejamento Territorial',
    search: 'Informatica Aplicada Ao Planejamento Territorial',
    creditos: 4
  },
  {
    name: 'Instrumentação Biomédica II',
    search: 'Instrumentacao Biomedica Ii',
    creditos: 4
  },
  {
    name: 'Introdução ao Direito Constitucional',
    search: 'Introducao Ao Direito Constitucional',
    creditos: 4
  },
  {
    name: 'Introdução à Biotecnologia',
    search: 'Introducao A Biotecnologia',
    creditos: 4
  },
  {
    name: 'Introdução à Engenharia Biomédica',
    search: 'Introducao A Engenharia Biomedica',
    creditos: 2
  },
  {
    name: 'Geomorfologia Descritiva',
    search: 'Geomorfologia Descritiva',
    creditos: 4
  },
  { name: 'Geomorfologia', search: 'Geomorfologia', creditos: 3 },
  {
    name: 'Gerenciamento e Interoperabilidade de Redes',
    search: 'Gerenciamento E Interoperabilidade De Redes',
    creditos: 4
  },
  {
    name: 'Hidráulica de Condutos Livres',
    search: 'Hidraulica De Condutos Livres',
    creditos: 2
  },
  {
    name: 'Instrumentação e Metrologia Óptica',
    search: 'Instrumentacao E Metrologia Optica',
    creditos: 4
  },
  {
    name: 'Introdução à Modelagem e Processos Estocásticos',
    search: 'Introducao A Modelagem E Processos Estocasticos',
    creditos: 4
  },
  {
    name: 'Geotecnia Aplicada ao Planejamento Urbano-Ambiental',
    search: 'Geotecnia Aplicada Ao Planejamento Urbano Ambiental',
    creditos: 3
  },
  {
    name: 'Gerência de Ativos',
    search: 'Gerencia De Ativos',
    creditos: 2
  },
  {
    name: 'Gestão da Inovação',
    search: 'Gestao Da Inovacao',
    creditos: 4
  },
  {
    name: 'História da Ciência e Ensino',
    search: 'Historia Da Ciencia E Ensino',
    creditos: 2
  },
  {
    name: 'História da Educação',
    search: 'Historia Da Educacao',
    creditos: 4
  },
  {
    name: 'Instalações Elétricas I',
    search: 'Instalacoes Eletricas I',
    creditos: 4
  },
  {
    name: 'Instalações Hospitalares',
    search: 'Instalacoes Hospitalares',
    creditos: 4
  },
  {
    name: 'Introdução à Física Médica',
    search: 'Introducao A Fisica Medica',
    creditos: 4
  },
  {
    name: 'Gestão Urbano-Ambiental',
    search: 'Gestao Urbano Ambiental',
    creditos: 4
  },
  {
    name: 'Geometria Analítica',
    search: 'Geometria Analitica',
    creditos: 3
  },
  { name: 'Grupos', search: 'Grupos', creditos: 4 },
  {
    name: 'Hidráulica de Condutos Forçados',
    search: 'Hidraulica De Condutos Forcados',
    creditos: 3
  },
  {
    name: 'História da Filosofia Antiga: Platão e o Platonismo',
    search: 'Historia Da Filosofia Antiga Platao EO Platonismo',
    creditos: 4
  },
  {
    name: 'História da Filosofia Contemporânea: o Século XX',
    search: 'Historia Da Filosofia Contemporanea O Seculo Xx',
    creditos: 4
  },
  {
    name: 'História da Política Externa Brasileira',
    search: 'Historia Da Politica Externa Brasileira',
    creditos: 4
  },
  {
    name: 'História das Relações Internacionais',
    search: 'Historia Das Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'História do Terceiro Mundo',
    search: 'Historia Do Terceiro Mundo',
    creditos: 4
  },
  {
    name: 'Introdução a Processos Industriais Biotecnológicos',
    search: 'Introducao A Processos Industriais Biotecnologicos',
    creditos: 2
  },
  {
    name: 'Introdução ao Controle Moderno',
    search: 'Introducao Ao Controle Moderno',
    creditos: 5
  },
  {
    name: 'Introdução ao Estudo do Direito',
    search: 'Introducao Ao Estudo Do Direito',
    creditos: 4
  },
  {
    name: 'Introdução à Elaboração e Análise de Cenários Macroeconômicos',
    search: 'Introducao A Elaboracao E Analise De Cenarios Macroeconomicos',
    creditos: 4
  },
  {
    name: 'Geração Distribuída',
    search: 'Geracao Distribuida',
    creditos: 2
  },
  {
    name: 'História da Filosofia Antiga: Aristóteles e o Aristotelismo',
    search: 'Historia Da Filosofia Antiga Aristoteles EO Aristotelismo',
    creditos: 4
  },
  {
    name: 'Identidade e Cultura',
    search: 'Identidade E Cultura',
    creditos: 4
  },
  {
    name: 'Informática Industrial',
    search: 'Informatica Industrial',
    creditos: 4
  },
  {
    name: 'Interação Humano-Computador',
    search: 'Interacao Humano Computador',
    creditos: 4
  },
  {
    name: 'Introdução ao Controle Discreto',
    search: 'Introducao Ao Controle Discreto',
    creditos: 3
  },
  {
    name: 'Introdução à Astronáutica',
    search: 'Introducao A Astronautica',
    creditos: 2
  },
  {
    name: 'Laboratório de Física II',
    search: 'Laboratorio De Fisica Ii',
    creditos: 3
  },
  {
    name: 'Materiais Compósitos e Aplicações Estruturais',
    search: 'Materiais Compositos E Aplicacoes Estruturais',
    creditos: 4
  },
  {
    name: 'Materiais Poliméricos',
    search: 'Materiais Polimericos',
    creditos: 4
  },
  {
    name: 'Introdução à Programação de Jogos',
    search: 'Introducao A Programacao De Jogos',
    creditos: 4
  },
  {
    name: 'Manufatura Integrada por Computador',
    search: 'Manufatura Integrada Por Computador',
    creditos: 4
  },
  {
    name: 'Introdução às Humanidades e Ciências Sociais',
    search: 'Introducao As Humanidades E Ciencias Sociais',
    creditos: 2
  },
  {
    name: 'Introdução às Engenharias',
    search: 'Introducao As Engenharias',
    creditos: 2
  },
  {
    name: 'Introdução à Psicolinguística e Neurociência da Linguagem',
    search: 'Introducao A Psicolinguistica E Neurociencia Da Linguagem',
    creditos: 4
  },
  {
    name: 'Laboratório de Física Moderna',
    search: 'Laboratorio De Fisica Moderna',
    creditos: 3
  },
  {
    name: 'Mecânica dos Fluidos Avançada',
    search: 'Mecanica Dos Fluidos Avancada',
    creditos: 6
  },
  {
    name: 'Mecânica dos Fluidos I',
    search: 'Mecanica Dos Fluidos I',
    creditos: 4
  },
  {
    name: 'Mecânica dos Sólidos I',
    search: 'Mecanica Dos Solidos I',
    creditos: 4
  },
  {
    name: 'Laboratório de Física I',
    search: 'Laboratorio De Fisica I',
    creditos: 3
  },
  { name: 'Macroeconomia I', search: 'Macroeconomia I', creditos: 4 },
  {
    name: 'Materiais Cerâmicos',
    search: 'Materiais Ceramicos',
    creditos: 4
  },
  {
    name: 'Materiais para Energia e Ambiente',
    search: 'Materiais Para Energia E Ambiente',
    creditos: 4
  },
  {
    name: 'Mecânica Estatística',
    search: 'Mecanica Estatistica',
    creditos: 6
  },
  {
    name: 'Mecânica Quântica II',
    search: 'Mecanica Quantica Ii',
    creditos: 4
  },
  {
    name: 'Introdução às Políticas Públicas',
    search: 'Introducao As Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Lógica em Sistemas de Gestão',
    search: 'Logica Em Sistemas De Gestao',
    creditos: 2
  },
  {
    name: 'Matemática Discreta',
    search: 'Matematica Discreta',
    creditos: 4
  },
  {
    name: 'Introdução às Vibrações Não Lineares',
    search: 'Introducao As Vibracoes Nao Lineares',
    creditos: 4
  },
  { name: 'LIBRAS', search: 'Libras', creditos: 4 },
  {
    name: 'Laboratório de Bioinformática',
    search: 'Laboratorio De Bioinformatica',
    creditos: 4
  },
  {
    name: 'Laboratório de Engenharia de Software',
    search: 'Laboratorio De Engenharia De Software',
    creditos: 4
  },
  {
    name: 'Laboratório de Física III',
    search: 'Laboratorio De Fisica Iii',
    creditos: 3
  },
  {
    name: 'Laboratório de Guiagem, Navegação e Controle',
    search: 'Laboratorio De Guiagem Navegacao E Controle',
    creditos: 4
  },
  {
    name: 'Materiais para Tecnologia da Informação',
    search: 'Materiais Para Tecnologia Da Informacao',
    creditos: 4
  },
  {
    name: 'Matérias Primas Cerâmicas',
    search: 'Materias Primas Ceramicas',
    creditos: 4
  },
  {
    name: 'Livros Didáticos no Ensino de Química',
    search: 'Livros Didaticos No Ensino De Quimica',
    creditos: 4
  },
  {
    name: 'Materiais e Suas Propriedades',
    search: 'Materiais E Suas Propriedades',
    creditos: 4
  },
  {
    name: 'Mecânica Quântica',
    search: 'Mecanica Quantica',
    creditos: 6
  },
  {
    name: 'Mecânica Quântica III',
    search: 'Mecanica Quantica Iii',
    creditos: 4
  },
  {
    name: 'Introdução às Equações Diferenciais Ordinárias',
    search: 'Introducao As Equacoes Diferenciais Ordinarias',
    creditos: 4
  },
  {
    name: 'Laboratório de Física Médica',
    search: 'Laboratorio De Fisica Medica',
    creditos: 3
  },
  {
    name: 'Mecânica Clássica I',
    search: 'Mecanica Classica I',
    creditos: 4
  },
  {
    name: 'Mecanismos de Reações Orgânicas',
    search: 'Mecanismos De Reacoes Organicas',
    creditos: 4
  },
  {
    name: 'Legislação Relacionada à Saúde',
    search: 'Legislacao Relacionada A Saude',
    creditos: 2
  },
  { name: 'Lógica Básica', search: 'Logica Basica', creditos: 4 },
  {
    name: 'Materiais Compósitos',
    search: 'Materiais Compositos',
    creditos: 4
  },
  {
    name: 'Materiais Nanoestruturados',
    search: 'Materiais Nanoestruturados',
    creditos: 4
  },
  {
    name: 'Mecânica Clássica',
    search: 'Mecanica Classica',
    creditos: 4
  },
  {
    name: 'Ligações Químicas',
    search: 'Ligacoes Quimicas',
    creditos: 4
  },
  {
    name: 'Mecânica Clássica III',
    search: 'Mecanica Classica Iii',
    creditos: 4
  },
  {
    name: 'Macroeconomia Pós-Keynesiana',
    search: 'Macroeconomia Pos Keynesiana',
    creditos: 4
  },
  {
    name: 'Introdução à Psicolinguística',
    search: 'Introducao A Psicolinguistica',
    creditos: 4
  },
  {
    name: 'Laboratório de Propriedades Físicas de Materiais',
    search: 'Laboratorio De Propriedades Fisicas De Materiais',
    creditos: 4
  },
  {
    name: 'Linguagens Formais e Automata',
    search: 'Linguagens Formais E Automata',
    creditos: 4
  },
  {
    name: 'Laboratório de Física Básica II',
    search: 'Laboratorio De Fisica Basica Ii',
    creditos: 3
  },
  {
    name: 'Laboratório de Calor e Fluidos',
    search: 'Laboratorio De Calor E Fluidos',
    creditos: 2
  },
  {
    name: 'Laboratório de Física Básica I',
    search: 'Laboratorio De Fisica Basica I',
    creditos: 3
  },
  {
    name: 'Materiais Metálicos',
    search: 'Materiais Metalicos',
    creditos: 4
  },
  {
    name: 'Jogos Digitais: Aspectos Técnicos e Aplicações',
    search: 'Jogos Digitais Aspectos Tecnicos E Aplicacoes',
    creditos: 4
  },
  {
    name: 'Lógica Programável',
    search: 'Logica Programavel',
    creditos: 4
  },
  { name: 'Macroeconomia II', search: 'Macroeconomia Ii', creditos: 3 },
  { name: 'Mecânica Geral', search: 'Mecanica Geral', creditos: 4 },
  {
    name: 'Lógicas Não Clássicas',
    search: 'Logicas Nao Classicas',
    creditos: 4
  },
  {
    name: 'Mecânica Quântica I',
    search: 'Mecanica Quantica I',
    creditos: 6
  },
  {
    name: 'Laboratório de Máquinas Elétricas',
    search: 'Laboratorio De Maquinas Eletricas',
    creditos: 2
  },
  {
    name: 'Logística e Meio Ambiente',
    search: 'Logistica E Meio Ambiente',
    creditos: 2
  },
  {
    name: 'Macroeconomia III',
    search: 'Macroeconomia Iii',
    creditos: 4
  },
  {
    name: 'Mecânica Clássica II',
    search: 'Mecanica Classica Ii',
    creditos: 4
  },
  {
    name: 'Laboratório de Máquinas Térmicas e Hidráulicas',
    search: 'Laboratorio De Maquinas Termicas E Hidraulicas',
    creditos: 2
  },
  {
    name: 'Mecânica dos Fluidos II',
    search: 'Mecanica Dos Fluidos Ii',
    creditos: 4
  },
  {
    name: 'Memória e Aprendizagem',
    search: 'Memoria E Aprendizagem',
    creditos: 4
  },
  {
    name: 'Metodologia de Análise de Riscos',
    search: 'Metodologia De Analise De Riscos',
    creditos: 2
  },
  {
    name: 'Morfofisiologia Humana I',
    search: 'Morfofisiologia Humana I',
    creditos: 6
  },
  {
    name: 'Métodos de Tomada de Decisão Aplicados ao Planejamento Urbano-Ambiental',
    search: 'Metodos De Tomada De Decisao Aplicados Ao Planejamento Urbano Ambiental',
    creditos: 2
  },
  {
    name: 'Pensamento Crítico das Relações Internacionais',
    search: 'Pensamento Critico Das Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'Políticas Culturais',
    search: 'Politicas Culturais',
    creditos: 4
  },
  {
    name: 'Mercado Imobiliário',
    search: 'Mercado Imobiliario',
    creditos: 4
  },
  {
    name: 'Meio ambiente e Políticas Públicas',
    search: 'Meio Ambiente E Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Máquinas Elétricas',
    search: 'Maquinas Eletricas',
    creditos: 4
  },
  {
    name: 'Métodos Computacionais para Análise Estrutural',
    search: 'Metodos Computacionais Para Analise Estrutural',
    creditos: 4
  },
  {
    name: 'Métodos de Pesquisa em Políticas Públicas',
    search: 'Metodos De Pesquisa Em Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Negociação e Solução de Conflitos Organizacionais',
    search: 'Negociacao E Solucao De Conflitos Organizacionais',
    creditos: 4
  },
  {
    name: 'Pensamento Nietzcheano e seus Desdobramentos Contemporâneos',
    search: 'Pensamento Nietzcheano E Seus Desdobramentos Contemporaneos',
    creditos: 4
  },
  {
    name: 'Planejamento e Controle da Produção',
    search: 'Planejamento E Controle Da Producao',
    creditos: 6
  },
  {
    name: 'Planejamento e Controle de Projetos',
    search: 'Planejamento E Controle De Projetos',
    creditos: 4
  },
  {
    name: 'Planejamento e Gestão de Redes Técnicas e Sistemas Territoriais',
    search: 'Planejamento E Gestao De Redes Tecnicas E Sistemas Territoriais',
    creditos: 4
  },
  {
    name: 'Políticas Públicas de Esporte e Lazer',
    search: 'Politicas Publicas De Esporte E Lazer',
    creditos: 2
  },
  {
    name: 'Morfofisiologia Humana II',
    search: 'Morfofisiologia Humana Ii',
    creditos: 6
  },
  {
    name: 'Microeconomia III',
    search: 'Microeconomia Iii',
    creditos: 4
  },
  {
    name: 'Métodos Matemáticos Aplicados a Sistemas Biomédicos',
    search: 'Metodos Matematicos Aplicados A Sistemas Biomedicos',
    creditos: 6
  },
  {
    name: 'Métodos de Otimização',
    search: 'Metodos De Otimizacao',
    creditos: 4
  },
  {
    name: 'Neuropsicofarmacologia',
    search: 'Neuropsicofarmacologia',
    creditos: 4
  },
  {
    name: 'Oficina de Planejamento Macro e Meso Regional',
    search: 'Oficina De Planejamento Macro E Meso Regional',
    creditos: 4
  },
  {
    name: 'Patrimônio Cultural e Paisagem',
    search: 'Patrimonio Cultural E Paisagem',
    creditos: 4
  },
  {
    name: 'Pesquisa Operacional',
    search: 'Pesquisa Operacional',
    creditos: 6
  },
  {
    name: 'Política Energética',
    search: 'Politica Energetica',
    creditos: 4
  },
  {
    name: 'Políticas Públicas de Gênero, Etnia e Geração',
    search: 'Politicas Publicas De Genero Etnia E Geracao',
    creditos: 4
  },
  {
    name: 'Métodos de Elementos Finitos Aplicados a Sistemas Biomédicos',
    search: 'Metodos De Elementos Finitos Aplicados A Sistemas Biomedicos',
    creditos: 3
  },
  {
    name: 'Neurobiologia Molecular e Celular',
    search: 'Neurobiologia Molecular E Celular',
    creditos: 4
  },
  {
    name: 'Ondas Eletromagnéticas Aplicadas',
    search: 'Ondas Eletromagneticas Aplicadas',
    creditos: 4
  },
  {
    name: 'Pensamento Econômico',
    search: 'Pensamento Economico',
    creditos: 4
  },
  {
    name: 'Planejamento e Política Ambiental',
    search: 'Planejamento E Politica Ambiental',
    creditos: 4
  },
  {
    name: 'Métodos e Técnicas de Análise de Informação para o Planejamento',
    search: 'Metodos E Tecnicas De Analise De Informacao Para O Planejamento',
    creditos: 4
  },
  {
    name: 'Negociações Internacionais, Propriedade Intelectual e Transferência Tecnológica',
    search: 'Negociacoes Internacionais Propriedade Intelectual E Transferencia Tecnologica',
    creditos: 4
  },
  {
    name: 'Paradigmas de Programação',
    search: 'Paradigmas De Programacao',
    creditos: 4
  },
  {
    name: 'Participação, Movimentos Sociais e Políticas Públicas',
    search: 'Participacao Movimentos Sociais E Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Pesquisa e Comunicação Científica',
    search: 'Pesquisa E Comunicacao Cientifica',
    creditos: 2
  },
  {
    name: 'Metodologia de Pesquisa em Relações Internacionais',
    search: 'Metodologia De Pesquisa Em Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'Microscopia Eletrônica',
    search: 'Microscopia Eletronica',
    creditos: 4
  },
  { name: 'Metodologia', search: 'Metodologia', creditos: 4 },
  { name: 'Microbiologia', search: 'Microbiologia', creditos: 6 },
  {
    name: 'Modelagem de Sistemas Biológicos',
    search: 'Modelagem De Sistemas Biologicos',
    creditos: 4
  },
  {
    name: 'Modelagem e Simulação de Sistemas Biomédicos',
    search: 'Modelagem E Simulacao De Sistemas Biomedicos',
    creditos: 4
  },
  {
    name: 'Modelos de Comunicação nas Organizações',
    search: 'Modelos De Comunicacao Nas Organizacoes',
    creditos: 2
  },
  {
    name: 'Natureza da Informação',
    search: 'Natureza Da Informacao',
    creditos: 3
  },
  {
    name: 'Operações e Equipamentos Industriais II',
    search: 'Operacoes E Equipamentos Industriais Ii',
    creditos: 4
  },
  {
    name: 'Planejamento Estratégico em Gestão de Projetos',
    search: 'Planejamento Estrategico Em Gestao De Projetos',
    creditos: 4
  },
  {
    name: 'Planejamento da Operação de Sistemas Hidrotérmicos de Potência',
    search: 'Planejamento Da Operacao De Sistemas Hidrotermicos De Potencia',
    creditos: 2
  },
  {
    name: 'Políticas Públicas Sul-Americanas',
    search: 'Politicas Publicas Sul Americanas',
    creditos: 4
  },
  {
    name: 'Mineração de Dados',
    search: 'Mineracao De Dados',
    creditos: 4
  },
  {
    name: 'Modelagem Molecular de Sistemas Biológicos',
    search: 'Modelagem Molecular De Sistemas Biologicos',
    creditos: 4
  },
  {
    name: 'Modelagem de Sistemas Dinâmicos II',
    search: 'Modelagem De Sistemas Dinamicos Ii',
    creditos: 4
  },
  {
    name: 'Modelos de Decisão Multicritério',
    search: 'Modelos De Decisao Multicriterio',
    creditos: 2
  },
  {
    name: 'Modelos e Ferramentas de Gestão Ambiental',
    search: 'Modelos E Ferramentas De Gestao Ambiental',
    creditos: 3
  },
  {
    name: 'Métodos Quantitativos para Ciências Sociais',
    search: 'Metodos Quantitativos Para Ciencias Sociais',
    creditos: 4
  },
  {
    name: 'Observatório de Políticas Públicas',
    search: 'Observatorio De Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Oficina de Planejamento Urbano',
    search: 'Oficina De Planejamento Urbano',
    creditos: 4
  },
  {
    name: 'Operações Unitárias I',
    search: 'Operacoes Unitarias I',
    creditos: 4
  },
  {
    name: 'Políticas Públicas de Intervenção Territorial no Brasil',
    search: 'Politicas Publicas De Intervencao Territorial No Brasil',
    creditos: 4
  },
  {
    name: 'Metalurgia Física',
    search: 'Metalurgia Fisica',
    creditos: 4
  },
  {
    name: 'Microbiologia Ambiental',
    search: 'Microbiologia Ambiental',
    creditos: 4
  },
  {
    name: 'Modelagem e Controle',
    search: 'Modelagem E Controle',
    creditos: 2
  },
  {
    name: 'Morfofisiologia animal comparada',
    search: 'Morfofisiologia Animal Comparada',
    creditos: 4
  },
  {
    name: 'Máquinas de Fluxo',
    search: 'Maquinas De Fluxo',
    creditos: 4
  },
  {
    name: 'Políticas Sociais',
    search: 'Politicas Sociais',
    creditos: 4
  },
  {
    name: 'Políticas de Educação',
    search: 'Politicas De Educacao',
    creditos: 4
  },
  {
    name: 'Navegação Inercial e GPS',
    search: 'Navegacao Inercial E Gps',
    creditos: 4
  },
  {
    name: 'Operações Unitárias II',
    search: 'Operacoes Unitarias Ii',
    creditos: 4
  },
  {
    name: 'Pensamento Marxista e seus Desdobramentos Contemporâneos',
    search: 'Pensamento Marxista E Seus Desdobramentos Contemporaneos',
    creditos: 4
  },
  {
    name: 'Política Habitacional',
    search: 'Politica Habitacional',
    creditos: 4
  },
  {
    name: 'Políticas Públicas para Sociedade da Informação',
    search: 'Politicas Publicas Para Sociedade Da Informacao',
    creditos: 4
  },
  {
    name: 'Políticas de Infraestrutura',
    search: 'Politicas De Infraestrutura',
    creditos: 4
  },
  {
    name: 'Mudança Tecnológica e Dinâmica Capitalista na Economia Contemporânea',
    search: 'Mudanca Tecnologica E Dinamica Capitalista Na Economia Contemporanea',
    creditos: 4
  },
  {
    name: 'Métodos de Análise em Química Orgânica',
    search: 'Metodos De Analise Em Quimica Organica',
    creditos: 4
  },
  {
    name: 'Métodos de Planejamento',
    search: 'Metodos De Planejamento',
    creditos: 4
  },
  {
    name: 'Oficina de Planejamento de Áreas Periurbanas, Interioranas e Rurais',
    search: 'Oficina De Planejamento De Areas Periurbanas Interioranas E Rurais',
    creditos: 4
  },
  { name: 'Parasitologia', search: 'Parasitologia', creditos: 3 },
  {
    name: 'Política Metropolitana',
    search: 'Politica Metropolitana',
    creditos: 4
  },
  {
    name: 'Modelagem e Simulação do Movimento Humano',
    search: 'Modelagem E Simulacao Do Movimento Humano',
    creditos: 4
  },
  {
    name: 'Máquinas Térmicas',
    search: 'Maquinas Termicas',
    creditos: 4
  },
  {
    name: 'Métodos Experimentais em Engenharia',
    search: 'Metodos Experimentais Em Engenharia',
    creditos: 4
  },
  {
    name: 'Oficina de Planejamento e Governança Metropolitana',
    search: 'Oficina De Planejamento E Governanca Metropolitana',
    creditos: 4
  },
  {
    name: 'Origem da Vida e Diversidade dos Seres Vivos',
    search: 'Origem Da Vida E Diversidade Dos Seres Vivos',
    creditos: 3
  },
  {
    name: 'Patologias do Sistema Nervoso Central',
    search: 'Patologias Do Sistema Nervoso Central',
    creditos: 4
  },
  {
    name: 'Polímeros Síntese Caracterização e Processos',
    search: 'Polimeros Sintese Caracterizacao E Processos',
    creditos: 6
  },
  {
    name: 'Política Externa Brasileira Contemporânea',
    search: 'Politica Externa Brasileira Contemporanea',
    creditos: 4
  },
  {
    name: 'Política Internacional dos EUA e da União Europeia',
    search: 'Politica Internacional Dos Eua E Da Uniao Europeia',
    creditos: 4
  },
  { name: 'Política Urbana', search: 'Politica Urbana', creditos: 4 },
  {
    name: 'Oficina de Projeto Urbano',
    search: 'Oficina De Projeto Urbano',
    creditos: 4
  },
  {
    name: 'Operação de Sistemas Elétricos de Potência',
    search: 'Operacao De Sistemas Eletricos De Potencia',
    creditos: 4
  },
  {
    name: 'Organização do Trabalho',
    search: 'Organizacao Do Trabalho',
    creditos: 2
  },
  {
    name: 'Pensamento Crítico',
    search: 'Pensamento Critico',
    creditos: 4
  },
  {
    name: 'Pensamento Hegeliano e seus Desdobramentos Contemporâneos',
    search: 'Pensamento Hegeliano E Seus Desdobramentos Contemporaneos',
    creditos: 4
  },
  {
    name: 'Perspectivas Críticas da Filosofia Contemporânea',
    search: 'Perspectivas Criticas Da Filosofia Contemporanea',
    creditos: 4
  },
  { name: 'Microeconomia I', search: 'Microeconomia I', creditos: 4 },
  { name: 'Microeconomia II', search: 'Microeconomia Ii', creditos: 4 },
  {
    name: 'Mecânica dos Sólidos II',
    search: 'Mecanica Dos Solidos Ii',
    creditos: 4
  },
  {
    name: 'Memória, Identidades Sociais e Cidadania nas Sociedades Complexas Contemporâneas',
    search: 'Memoria Identidades Sociais E Cidadania Nas Sociedades Complexas Contemporaneas',
    creditos: 4
  },
  {
    name: 'Modelos e Práticas Colaborativas em CT&I',
    search: 'Modelos E Praticas Colaborativas Em Ct I',
    creditos: 4
  },
  {
    name: 'Morfofisiologia Humana III',
    search: 'Morfofisiologia Humana Iii',
    creditos: 6
  },
  { name: 'Neuroarte', search: 'Neuroarte', creditos: 2 },
  {
    name: 'Noções de Astronomia e Cosmologia',
    search: 'Nocoes De Astronomia E Cosmologia',
    creditos: 4
  },
  {
    name: 'Pesquisa Operacional Aplicada',
    search: 'Pesquisa Operacional Aplicada',
    creditos: 4
  },
  {
    name: 'Mobilização Produtiva dos Territórios e Desenvolvimento Local',
    search: 'Mobilizacao Produtiva Dos Territorios E Desenvolvimento Local',
    creditos: 4
  },
  {
    name: 'Modelagem de Sistemas Dinâmicos I',
    search: 'Modelagem De Sistemas Dinamicos I',
    creditos: 4
  },
  {
    name: 'Morfofisiologia Evolutiva',
    search: 'Morfofisiologia Evolutiva',
    creditos: 4
  },
  {
    name: 'Métodos Quantitativos para Planejamento Estratégico',
    search: 'Metodos Quantitativos Para Planejamento Estrategico',
    creditos: 2
  },
  {
    name: 'Nanociência e Nanotecnologia',
    search: 'Nanociencia E Nanotecnologia',
    creditos: 2
  },
  { name: 'Nanocompósitos', search: 'Nanocompositos', creditos: 4 },
  {
    name: 'Neurociência da Cognição Musical',
    search: 'Neurociencia Da Cognicao Musical',
    creditos: 2
  },
  { name: 'Optoeletrônica', search: 'Optoeletronica', creditos: 4 },
  {
    name: 'Planejamento Urbano e Metropolitano',
    search: 'Planejamento Urbano E Metropolitano',
    creditos: 4
  },
  {
    name: 'Planejamento e Política Rural',
    search: 'Planejamento E Politica Rural',
    creditos: 4
  },
  {
    name: 'Modelos Econômicos e Análise das Dinâmicas Territoriais',
    search: 'Modelos Economicos E Analise Das Dinamicas Territoriais',
    creditos: 4
  },
  { name: 'Neuroanatomia', search: 'Neuroanatomia', creditos: 3 },
  {
    name: 'Operações e Equipamentos Industriais I',
    search: 'Operacoes E Equipamentos Industriais I',
    creditos: 4
  },
  {
    name: 'Otimização em Projetos de Estruturas',
    search: 'Otimizacao Em Projetos De Estruturas',
    creditos: 4
  },
  {
    name: 'Pensamento e Cinema',
    search: 'Pensamento E Cinema',
    creditos: 4
  },
  { name: 'Placas e Cascas', search: 'Placas E Cascas', creditos: 4 },
  {
    name: 'Planejamento Orçamentário',
    search: 'Planejamento Orcamentario',
    creditos: 4
  },
  { name: 'Poder Local', search: 'Poder Local', creditos: 4 },
  {
    name: 'Poluição Atmosférica',
    search: 'Poluicao Atmosferica',
    creditos: 3
  },
  {
    name: 'Políticas Educacionais',
    search: 'Politicas Educacionais',
    creditos: 3
  },
  { name: 'Metrologia', search: 'Metrologia', creditos: 4 },
  {
    name: 'Nascimento e Desenvolvimento da Ciência Moderna',
    search: 'Nascimento E Desenvolvimento Da Ciencia Moderna',
    creditos: 4
  },
  { name: 'Neuroetologia', search: 'Neuroetologia', creditos: 4 },
  {
    name: 'Pensamento Kantiano e seus Desdobramentos Contemporâneos',
    search: 'Pensamento Kantiano E Seus Desdobramentos Contemporaneos',
    creditos: 4
  },
  {
    name: 'Planejamento e Política Regional',
    search: 'Planejamento E Politica Regional',
    creditos: 4
  },
  {
    name: 'Processadores Digitais em Controle e Automação',
    search: 'Processadores Digitais Em Controle E Automacao',
    creditos: 4
  },
  {
    name: 'Projeto de Sistemas de Comunicação',
    search: 'Projeto De Sistemas De Comunicacao',
    creditos: 3
  },
  {
    name: 'Processamento de Polímeros',
    search: 'Processamento De Polimeros',
    creditos: 4
  },
  {
    name: 'Processamento e Conformação de Metais II',
    search: 'Processamento E Conformacao De Metais Ii',
    creditos: 4
  },
  {
    name: 'Programação Orientada a Objetos',
    search: 'Programacao Orientada A Objetos',
    creditos: 4
  },
  {
    name: 'Projeto de Microturbinas Eólicas',
    search: 'Projeto De Microturbinas Eolicas',
    creditos: 2
  },
  {
    name: 'Prática Avançada de Programação C',
    search: 'Pratica Avancada De Programacao C',
    creditos: 4
  },
  {
    name: 'Psicologia Experimental',
    search: 'Psicologia Experimental',
    creditos: 6
  },
  {
    name: 'Qualidade em Sistemas',
    search: 'Qualidade Em Sistemas',
    creditos: 4
  },
  {
    name: 'Química Ambiental',
    search: 'Quimica Ambiental',
    creditos: 2
  },
  {
    name: 'Química Analítica Clássica I',
    search: 'Quimica Analitica Classica I',
    creditos: 6
  },
  {
    name: 'Química de Coordenação',
    search: 'Quimica De Coordenacao',
    creditos: 8
  },
  {
    name: 'Reciclagem e Ambiente',
    search: 'Reciclagem E Ambiente',
    creditos: 4
  },
  {
    name: 'Seminários em Química II',
    search: 'Seminarios Em Quimica Ii',
    creditos: 2
  },
  {
    name: 'Simulação e Processamento de Polímeros',
    search: 'Simulacao E Processamento De Polimeros',
    creditos: 4
  },
  {
    name: 'Sistemas de Drenagem Urbana',
    search: 'Sistemas De Drenagem Urbana',
    creditos: 3
  },
  {
    name: 'Surgimento da China como Potência Mundial',
    search: 'Surgimento Da China Como Potencia Mundial',
    creditos: 4
  },
  {
    name: 'Síntese de Polímeros',
    search: 'Sintese De Polimeros',
    creditos: 4
  },
  {
    name: 'Tecnologia de Produção de Etanol',
    search: 'Tecnologia De Producao De Etanol',
    creditos: 4
  },
  {
    name: 'Tendências em Educação Matemática',
    search: 'Tendencias Em Educacao Matematica',
    creditos: 4
  },
  {
    name: 'Transformadas em Sinais e Sistemas Lineares',
    search: 'Transformadas Em Sinais E Sistemas Lineares',
    creditos: 4
  },
  {
    name: 'Prática de Ensino de Filosofia I',
    search: 'Pratica De Ensino De Filosofia I',
    creditos: 3
  },
  {
    name: 'Prática de Ensino de Filosofia III',
    search: 'Pratica De Ensino De Filosofia Iii',
    creditos: 3
  },
  {
    name: 'Prática de Ensino de Filosofia: Metodologias',
    search: 'Pratica De Ensino De Filosofia Metodologias',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Ciências e Matemática no Ensino Fundamental',
    search: 'Praticas De Ensino De Ciencias E Matematica No Ensino Fundamental',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Matemática II',
    search: 'Praticas De Ensino De Matematica Ii',
    creditos: 3
  },
  {
    name: 'Química Analítica Clássica II',
    search: 'Quimica Analitica Classica Ii',
    creditos: 6
  },
  {
    name: 'Relações Internacionais e Globalização',
    search: 'Relacoes Internacionais E Globalizacao',
    creditos: 4
  },
  { name: 'Reologia', search: 'Reologia', creditos: 4 },
  {
    name: 'Riscos no Ambiente Urbano',
    search: 'Riscos No Ambiente Urbano',
    creditos: 4
  },
  {
    name: 'Sensores Biomédicos',
    search: 'Sensores Biomedicos',
    creditos: 2
  },
  {
    name: 'Sensoriamento Remoto',
    search: 'Sensoriamento Remoto',
    creditos: 4
  },
  {
    name: 'Sistemas Biológicos I',
    search: 'Sistemas Biologicos I',
    creditos: 6
  },
  {
    name: 'Sistemas Distribuídos',
    search: 'Sistemas Distribuidos',
    creditos: 4
  },
  {
    name: 'Sistemas Inteligentes',
    search: 'Sistemas Inteligentes',
    creditos: 4
  },
  {
    name: 'Sistemas de Micro-ondas',
    search: 'Sistemas De Micro Ondas',
    creditos: 4
  },
  {
    name: 'Sistemas de Propulsão I',
    search: 'Sistemas De Propulsao I',
    creditos: 4
  },
  {
    name: 'Sociedade Civil Organizada Global',
    search: 'Sociedade Civil Organizada Global',
    creditos: 4
  },
  {
    name: 'Temas da Filosofia Moderna',
    search: 'Temas Da Filosofia Moderna',
    creditos: 4
  },
  {
    name: 'Teoria da Relatividade',
    search: 'Teoria Da Relatividade',
    creditos: 4
  },
  { name: 'Termoquímica', search: 'Termoquimica', creditos: 4 },
  {
    name: 'Território e Logística',
    search: 'Territorio E Logistica',
    creditos: 4
  },
  { name: 'Topologia I', search: 'Topologia I', creditos: 4 },
  {
    name: 'Transformações Químicas',
    search: 'Transformacoes Quimicas',
    creditos: 5
  },
  {
    name: 'Princípios de Comunicação',
    search: 'Principios De Comunicacao',
    creditos: 4
  },
  {
    name: 'Princípios de Termodinâmica',
    search: 'Principios De Termodinamica',
    creditos: 4
  },
  {
    name: 'Processamento e Conformação de Metais I',
    search: 'Processamento E Conformacao De Metais I',
    creditos: 4
  },
  {
    name: 'Processos Estocásticos',
    search: 'Processos Estocasticos',
    creditos: 4
  },
  {
    name: 'Processos Industriais Orgânicos e Inorgânicos',
    search: 'Processos Industriais Organicos E Inorganicos',
    creditos: 4
  },
  {
    name: 'Programação Matemática',
    search: 'Programacao Matematica',
    creditos: 4
  },
  {
    name: 'Projeto de Alta Frequência',
    search: 'Projeto De Alta Frequencia',
    creditos: 4
  },
  {
    name: 'Propriedades Mecânicas e Térmicas',
    search: 'Propriedades Mecanicas E Termicas',
    creditos: 4
  },
  {
    name: 'Prática de Ensino de Filosofia II',
    search: 'Pratica De Ensino De Filosofia Ii',
    creditos: 3
  },
  {
    name: 'Práticas de Ciências no Ensino Fundamental',
    search: 'Praticas De Ciencias No Ensino Fundamental',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Biologia II',
    search: 'Praticas De Ensino De Biologia Ii',
    creditos: 3
  },
  {
    name: 'Práticas de Ensino de Química II',
    search: 'Praticas De Ensino De Quimica Ii',
    creditos: 3
  },
  {
    name: 'Saneamento Ambiental',
    search: 'Saneamento Ambiental',
    creditos: 4
  },
  { name: 'Sistemas CAD/CAM', search: 'Sistemas Cad Cam', creditos: 4 },
  {
    name: 'Sistemas Multiagentes',
    search: 'Sistemas Multiagentes',
    creditos: 4
  },
  {
    name: 'Tecnologias Sociais',
    search: 'Tecnologias Sociais',
    creditos: 4
  },
  {
    name: 'Teoria Aritmética dos Números',
    search: 'Teoria Aritmetica Dos Numeros',
    creditos: 4
  },
  {
    name: 'Termodinâmica Química',
    search: 'Termodinamica Quimica',
    creditos: 4
  },
  {
    name: 'Transferência de Calor e Mecânica dos Fluidos Computacional I',
    search: 'Transferencia De Calor E Mecanica Dos Fluidos Computacional I',
    creditos: 4
  },
  {
    name: 'Transferência de Calor e Mecânica dos Fluidos Computacional II',
    search: 'Transferencia De Calor E Mecanica Dos Fluidos Computacional Ii',
    creditos: 4
  },
  {
    name: 'Transporte de Petróleo e Gás Natural',
    search: 'Transporte De Petroleo E Gas Natural',
    creditos: 4
  },
  {
    name: 'Projeto de Geradores Elétricos para Energia Eólica',
    search: 'Projeto De Geradores Eletricos Para Energia Eolica',
    creditos: 2
  },
  {
    name: 'Políticas de saúde',
    search: 'Politicas De Saude',
    creditos: 4
  },
  {
    name: 'Princípios de Imagens Médicas',
    search: 'Principios De Imagens Medicas',
    creditos: 4
  },
  {
    name: 'Propagação e Antenas',
    search: 'Propagacao E Antenas',
    creditos: 4
  },
  {
    name: 'Prática de Ensino de Filosofia: Currículos',
    search: 'Pratica De Ensino De Filosofia Curriculos',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Biologia I',
    search: 'Praticas De Ensino De Biologia I',
    creditos: 3
  },
  {
    name: 'Recursos Didáticos para o Ensino de Química',
    search: 'Recursos Didaticos Para O Ensino De Quimica',
    creditos: 4
  },
  {
    name: 'Recursos Hídricos',
    search: 'Recursos Hidricos',
    creditos: 3
  },
  {
    name: 'Refino do Petróleo',
    search: 'Refino Do Petroleo',
    creditos: 4
  },
  {
    name: 'Sensação e Percepção',
    search: 'Sensacao E Percepcao',
    creditos: 4
  },
  {
    name: 'Sistemas Fotovoltaicos Conectados à Rede Elétrica',
    search: 'Sistemas Fotovoltaicos Conectados A Rede Eletrica',
    creditos: 4
  },
  {
    name: 'Tecnologia da Informação',
    search: 'Tecnologia Da Informacao',
    creditos: 2
  },
  {
    name: 'Tecnologias da Informação e Comunicação na Educação',
    search: 'Tecnologias Da Informacao E Comunicacao Na Educacao',
    creditos: 3
  },
  {
    name: 'Teoria Clássica dos Campos',
    search: 'Teoria Classica Dos Campos',
    creditos: 4
  },
  {
    name: 'Teoria do Planejamento Urbano e Ambiental',
    search: 'Teoria Do Planejamento Urbano E Ambiental',
    creditos: 3
  },
  {
    name: 'Teoria do conhecimento: a epistemologia contemporânea',
    search: 'Teoria Do Conhecimento A Epistemologia Contemporanea',
    creditos: 4
  },
  {
    name: 'Transportes, Uso e Ocupação do Solo',
    search: 'Transportes Uso E Ocupacao Do Solo',
    creditos: 2
  },
  { name: 'Probabilidade', search: 'Probabilidade', creditos: 4 },
  {
    name: 'Processamento de Linguagem Natural',
    search: 'Processamento De Linguagem Natural',
    creditos: 4
  },
  {
    name: 'Programação para Web',
    search: 'Programacao Para Web',
    creditos: 4
  },
  {
    name: 'Projeto Assistido por Computador',
    search: 'Projeto Assistido Por Computador',
    creditos: 2
  },
  { name: 'Projeto Dirigido', search: 'Projeto Dirigido', creditos: 2 },
  {
    name: 'Projeto de Controle Discreto',
    search: 'Projeto De Controle Discreto',
    creditos: 3
  },
  {
    name: 'Projeto de Elementos Estruturais de Aeronaves II',
    search: 'Projeto De Elementos Estruturais De Aeronaves Ii',
    creditos: 4
  },
  {
    name: 'Química Inorgânica Avançada',
    search: 'Quimica Inorganica Avancada',
    creditos: 4
  },
  {
    name: 'Redes de Barramento de Campo',
    search: 'Redes De Barramento De Campo',
    creditos: 3
  },
  {
    name: 'Redes de Computadores',
    search: 'Redes De Computadores',
    creditos: 4
  },
  {
    name: 'Regimes e Formas de Governo',
    search: 'Regimes E Formas De Governo',
    creditos: 4
  },
  {
    name: 'Sistemas Térmicos',
    search: 'Sistemas Termicos',
    creditos: 5
  },
  {
    name: 'Sistemas de Abastecimento de Águas',
    search: 'Sistemas De Abastecimento De Aguas',
    creditos: 4
  },
  {
    name: 'Sistemas de Controle I',
    search: 'Sistemas De Controle I',
    creditos: 5
  },
  {
    name: 'Sistemas de Esgotamento Sanitário',
    search: 'Sistemas De Esgotamento Sanitario',
    creditos: 3
  },
  {
    name: 'Sistemas de Potência I',
    search: 'Sistemas De Potencia I',
    creditos: 4
  },
  {
    name: 'Tecnologias Alternativas de Tratamento de Água e Efluentes',
    search: 'Tecnologias Alternativas De Tratamento De Agua E Efluentes',
    creditos: 3
  },
  {
    name: 'Teoria da Elasticidade',
    search: 'Teoria Da Elasticidade',
    creditos: 4
  },
  {
    name: 'Teoria da Medida e Integração',
    search: 'Teoria Da Medida E Integracao',
    creditos: 4
  },
  {
    name: 'Trabalho de Conclusão de Curso em Física',
    search: 'Trabalho De Conclusao De Curso Em Fisica',
    creditos: 2
  },
  {
    name: 'Princípios de Mecânica Quântica',
    search: 'Principios De Mecanica Quantica',
    creditos: 4
  },
  {
    name: 'Processamento da Informação',
    search: 'Processamento Da Informacao',
    creditos: 5
  },
  {
    name: 'Processamento de Imagens Médicas',
    search: 'Processamento De Imagens Medicas',
    creditos: 4
  },
  {
    name: 'Processos Termoquímicos de Conversão Energética',
    search: 'Processos Termoquimicos De Conversao Energetica',
    creditos: 2
  },
  {
    name: 'Programação de Software Embarcado',
    search: 'Programacao De Software Embarcado',
    creditos: 4
  },
  {
    name: 'Proteção de Sistemas Elétricos de Potência',
    search: 'Protecao De Sistemas Eletricos De Potencia',
    creditos: 4
  },
  {
    name: 'Questões Ambientais Globais',
    search: 'Questoes Ambientais Globais',
    creditos: 2
  },
  {
    name: 'Química dos Materiais',
    search: 'Quimica Dos Materiais',
    creditos: 6
  },
  {
    name: 'Segurança de Dados',
    search: 'Seguranca De Dados',
    creditos: 4
  },
  {
    name: 'Seminários em Materiais Avançados',
    search: 'Seminarios Em Materiais Avancados',
    creditos: 2
  },
  {
    name: 'Tecnologia de Elastômeros',
    search: 'Tecnologia De Elastomeros',
    creditos: 4
  },
  {
    name: 'Telefonia Fixa Moderna',
    search: 'Telefonia Fixa Moderna',
    creditos: 4
  },
  {
    name: 'Temas Contemporâneos',
    search: 'Temas Contemporaneos',
    creditos: 4
  },
  {
    name: 'Trabalho de Conclusão de Curso em Matemática I',
    search: 'Trabalho De Conclusao De Curso Em Matematica I',
    creditos: 2
  },
  {
    name: 'Princípios de Ética em Serviços de Saúde',
    search: 'Principios De Etica Em Servicos De Saude',
    creditos: 2
  },
  {
    name: 'Processamento e Análise de Sinais Biomédicos',
    search: 'Processamento E Analise De Sinais Biomedicos',
    creditos: 4
  },
  {
    name: 'Projeto de Filtros Digitais',
    search: 'Projeto De Filtros Digitais',
    creditos: 4
  },
  {
    name: 'Projeto e Análise de Próteses e Órteses',
    search: 'Projeto E Analise De Proteses E Orteses',
    creditos: 4
  },
  {
    name: 'Práticas de Ecologia',
    search: 'Praticas De Ecologia',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Matemática I',
    search: 'Praticas De Ensino De Matematica I',
    creditos: 3
  },
  {
    name: 'Práticas de Ensino de Matemática no Ensino Fundamental',
    search: 'Praticas De Ensino De Matematica No Ensino Fundamental',
    creditos: 4
  },
  {
    name: 'Questões Metodológicas em Economia',
    search: 'Questoes Metodologicas Em Economia',
    creditos: 4
  },
  {
    name: 'Química Inorgânica de Materiais',
    search: 'Quimica Inorganica De Materiais',
    creditos: 6
  },
  {
    name: 'Química de Alimentos',
    search: 'Quimica De Alimentos',
    creditos: 4
  },
  {
    name: 'Regulação e Mercado de Energia Elétrica',
    search: 'Regulacao E Mercado De Energia Eletrica',
    creditos: 2
  },
  {
    name: 'Robôs Móveis Autônomos',
    search: 'Robos Moveis Autonomos',
    creditos: 4
  },
  {
    name: 'Sensores e Transdutores',
    search: 'Sensores E Transdutores',
    creditos: 4
  },
  {
    name: 'Sistemas Biológicos III',
    search: 'Sistemas Biologicos Iii',
    creditos: 6
  },
  {
    name: 'Sistemas de Informação',
    search: 'Sistemas De Informacao',
    creditos: 4
  },
  {
    name: 'Termodinâmica de Materiais',
    search: 'Termodinamica De Materiais',
    creditos: 4
  },
  { name: 'Topologia', search: 'Topologia', creditos: 4 },
  {
    name: 'Processamento de Vídeo',
    search: 'Processamento De Video',
    creditos: 4
  },
  {
    name: 'Programação Estruturada',
    search: 'Programacao Estruturada',
    creditos: 4
  },
  {
    name: 'Problemas Metafísicos: Perspectivas Contemporâneas',
    search: 'Problemas Metafisicos Perspectivas Contemporaneas',
    creditos: 4
  },
  {
    name: 'Processamento de Informação em Línguas Naturais',
    search: 'Processamento De Informacao Em Linguas Naturais',
    creditos: 4
  },
  {
    name: 'Prática de Ensino de Filosofia: Programas de Ensino',
    search: 'Pratica De Ensino De Filosofia Programas De Ensino',
    creditos: 4
  },
  {
    name: 'Práticas em Ciências e Humanidades',
    search: 'Praticas Em Ciencias E Humanidades',
    creditos: 3
  },
  {
    name: 'Qualidade da Energia Elétrica',
    search: 'Qualidade Da Energia Eletrica',
    creditos: 4
  },
  {
    name: 'Regulação Ambiental e Urbanística',
    search: 'Regulacao Ambiental E Urbanistica',
    creditos: 2
  },
  {
    name: 'Seleção de Materiais',
    search: 'Selecao De Materiais',
    creditos: 4
  },
  {
    name: 'Sequências e Séries',
    search: 'Sequencias E Series',
    creditos: 4
  },
  {
    name: 'Sistemas Biológicos IV',
    search: 'Sistemas Biologicos Iv',
    creditos: 6
  },
  { name: 'Sistemas CAM', search: 'Sistemas Cam', creditos: 4 },
  {
    name: 'Sistemas de Controle II',
    search: 'Sistemas De Controle Ii',
    creditos: 5
  },
  {
    name: 'Subestação e Equipamentos',
    search: 'Subestacao E Equipamentos',
    creditos: 2
  },
  {
    name: 'Sustentabilidade e Indicadores',
    search: 'Sustentabilidade E Indicadores',
    creditos: 4
  },
  {
    name: 'Teoria das Decisões',
    search: 'Teoria Das Decisoes',
    creditos: 2
  },
  {
    name: 'Teoria e Gestão de Organizações Públicas',
    search: 'Teoria E Gestao De Organizacoes Publicas',
    creditos: 4
  },
  {
    name: 'Transferência de Massa',
    search: 'Transferencia De Massa',
    creditos: 4
  },
  {
    name: 'Tratamento de Águas Urbanas Servidas',
    search: 'Tratamento De Aguas Urbanas Servidas',
    creditos: 3
  },
  {
    name: 'Princípios e Aplicações de Biomecânica',
    search: 'Principios E Aplicacoes De Biomecanica',
    creditos: 4
  },
  {
    name: 'Processamento e Análise de Falhas em Biomateriais',
    search: 'Processamento E Analise De Falhas Em Biomateriais',
    creditos: 5
  },
  {
    name: 'Processamento e Conformação de Metais',
    search: 'Processamento E Conformacao De Metais',
    creditos: 4
  },
  {
    name: 'Processos Industriais Cerâmicos',
    search: 'Processos Industriais Ceramicos',
    creditos: 4
  },
  {
    name: 'Química Orgânica Aplicada',
    search: 'Quimica Organica Aplicada',
    creditos: 4
  },
  {
    name: 'Refugiados: Direito e Política',
    search: 'Refugiados Direito E Politica',
    creditos: 4
  },
  {
    name: 'Regimes de Negociação Comercial Internacional e a Atuação Brasileira',
    search: 'Regimes De Negociacao Comercial Internacional EA Atuacao Brasileira',
    creditos: 4
  },
  {
    name: 'Regulação Ambiental e Urbana',
    search: 'Regulacao Ambiental E Urbana',
    creditos: 2
  },
  { name: 'Resíduos Sólidos', search: 'Residuos Solidos', creditos: 3 },
  {
    name: 'Segurança Internacional em Perspectiva Histórica e Desafios Contemporâneos',
    search: 'Seguranca Internacional Em Perspectiva Historica E Desafios Contemporaneos',
    creditos: 4
  },
  {
    name: 'Sistemas de Tratamento de Águas e Efluentes',
    search: 'Sistemas De Tratamento De Aguas E Efluentes',
    creditos: 4
  },
  {
    name: 'Trajetória Internacional do Continente Africano e do Oriente Médio',
    search: 'Trajetoria Internacional Do Continente Africano E Do Oriente Medio',
    creditos: 4
  },
  {
    name: 'Transferência de Calor Aplicada a Sistemas Aeroespaciais',
    search: 'Transferencia De Calor Aplicada A Sistemas Aeroespaciais',
    creditos: 4
  },
  {
    name: 'Projeto Ambiental Urbano',
    search: 'Projeto Ambiental Urbano',
    creditos: 4
  },
  {
    name: 'Projeto de Aeronaves I',
    search: 'Projeto De Aeronaves I',
    creditos: 4
  },
  {
    name: 'Prática Avançada de Programação B',
    search: 'Pratica Avancada De Programacao B',
    creditos: 4
  },
  {
    name: 'Prática de Ensino de Filosofia IV',
    search: 'Pratica De Ensino De Filosofia Iv',
    creditos: 3
  },
  {
    name: 'Práticas Especiais do Planejamento Territorial',
    search: 'Praticas Especiais Do Planejamento Territorial',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Biologia III',
    search: 'Praticas De Ensino De Biologia Iii',
    creditos: 3
  },
  {
    name: 'Práticas de Ensino de Física III',
    search: 'Praticas De Ensino De Fisica Iii',
    creditos: 3
  },
  {
    name: 'Práticas de Ensino de Química III',
    search: 'Praticas De Ensino De Quimica Iii',
    creditos: 3
  },
  {
    name: 'Química Orgânica Experimental',
    search: 'Quimica Organica Experimental',
    creditos: 4
  },
  {
    name: 'Reações Nucleares',
    search: 'Reacoes Nucleares',
    creditos: 3
  },
  {
    name: 'Regimes de Negociação Financeira Internacional e a Atuação Brasileira',
    search: 'Regimes De Negociacao Financeira Internacional EA Atuacao Brasileira',
    creditos: 4
  },
  {
    name: 'Seminários em Química I',
    search: 'Seminarios Em Quimica I',
    creditos: 2
  },
  {
    name: 'Sistema ONU e os Desafios do Multilateralismo',
    search: 'Sistema Onu E Os Desafios Do Multilateralismo',
    creditos: 4
  },
  {
    name: 'Tempos, Métodos e Arranjos Físicos',
    search: 'Tempos Metodos E Arranjos Fisicos',
    creditos: 4
  },
  {
    name: 'Teoria da Informação e Códigos',
    search: 'Teoria Da Informacao E Codigos',
    creditos: 4
  },
  {
    name: 'Teoria dos Grafos',
    search: 'Teoria Dos Grafos',
    creditos: 4
  },
  {
    name: 'Teorias Contemporâneas de RI',
    search: 'Teorias Contemporaneas De Ri',
    creditos: 4
  },
  {
    name: 'Teorias da Justiça',
    search: 'Teorias Da Justica',
    creditos: 4
  },
  {
    name: 'Termo-Hidráulica de Reatores Nucleares I',
    search: 'Termo Hidraulica De Reatores Nucleares I',
    creditos: 4
  },
  {
    name: 'Termodinâmica Estatística de Materiais',
    search: 'Termodinamica Estatistica De Materiais',
    creditos: 4
  },
  {
    name: 'Transformações Bioquímicas',
    search: 'Transformacoes Bioquimicas',
    creditos: 5
  },
  {
    name: 'Progressos e Métodos em Neurociência',
    search: 'Progressos E Metodos Em Neurociencia',
    creditos: 4
  },
  {
    name: 'Processamento de Cerâmicas',
    search: 'Processamento De Ceramicas',
    creditos: 4
  },
  {
    name: 'Processamento de Imagens Utilizando GPU',
    search: 'Processamento De Imagens Utilizando Gpu',
    creditos: 4
  },
  {
    name: 'Processamento de Sinais Neurais',
    search: 'Processamento De Sinais Neurais',
    creditos: 4
  },
  {
    name: 'Projeto de Microdispositivos para Instrumentação',
    search: 'Projeto De Microdispositivos Para Instrumentacao',
    creditos: 4
  },
  {
    name: 'Propulsão Aeroespacial Não-Convencional',
    search: 'Propulsao Aeroespacial Nao Convencional',
    creditos: 3
  },
  {
    name: 'Prática de Ensino de Filosofia V',
    search: 'Pratica De Ensino De Filosofia V',
    creditos: 3
  },
  {
    name: 'Práticas de Ensino de Física I',
    search: 'Praticas De Ensino De Fisica I',
    creditos: 3
  },
  {
    name: 'Práticas de Ensino de Química I',
    search: 'Praticas De Ensino De Quimica I',
    creditos: 3
  },
  {
    name: 'Psicologia Cognitiva',
    search: 'Psicologia Cognitiva',
    creditos: 4
  },
  {
    name: 'Questões Atuais no Ensino de Ciências',
    search: 'Questoes Atuais No Ensino De Ciencias',
    creditos: 2
  },
  {
    name: 'Saúde, Determinantes Socioambientais e Equidade',
    search: 'Saude Determinantes Socioambientais E Equidade',
    creditos: 3
  },
  {
    name: 'Segurança de Instalações Nucleares',
    search: 'Seguranca De Instalacoes Nucleares',
    creditos: 3
  },
  {
    name: 'Servo-Sistema para Robôs e Acionamento para Sistemas Mecatrônicos',
    search: 'Servo Sistema Para Robos E Acionamento Para Sistemas Mecatronicos',
    creditos: 4
  },
  {
    name: 'Simulação de Sistemas de Comunicação',
    search: 'Simulacao De Sistemas De Comunicacao',
    creditos: 4
  },
  {
    name: 'Sinais Aleatórios',
    search: 'Sinais Aleatorios',
    creditos: 4
  },
  {
    name: 'Sistemas de Esgotos e Drenagem Urbana',
    search: 'Sistemas De Esgotos E Drenagem Urbana',
    creditos: 4
  },
  {
    name: 'Sistemas e Processos de Produção',
    search: 'Sistemas E Processos De Producao',
    creditos: 4
  },
  {
    name: 'Telemedicina e Sistemas de Apoio a Decisão',
    search: 'Telemedicina E Sistemas De Apoio A Decisao',
    creditos: 4
  },
  {
    name: 'Temas da Filosofia Antiga',
    search: 'Temas Da Filosofia Antiga',
    creditos: 4
  },
  {
    name: 'Temas da Filosofia Medieval',
    search: 'Temas Da Filosofia Medieval',
    creditos: 4
  },
  {
    name: 'Teoria Axiomática de Conjuntos',
    search: 'Teoria Axiomatica De Conjuntos',
    creditos: 4
  },
  {
    name: 'Teoria do Conhecimento: Empirismo versus Racionalismo',
    search: 'Teoria Do Conhecimento Empirismo Versus Racionalismo',
    creditos: 4
  },
  {
    name: 'Termodinâmica Aplicada II',
    search: 'Termodinamica Aplicada Ii',
    creditos: 4
  },
  { name: 'Toxicologia', search: 'Toxicologia', creditos: 6 },
  {
    name: 'Trajetórias Internacionais do Continente Africano',
    search: 'Trajetorias Internacionais Do Continente Africano',
    creditos: 4
  },
  {
    name: 'Trajetórias das Políticas de CT&I no Brasil',
    search: 'Trajetorias Das Politicas De Ct I No Brasil',
    creditos: 4
  },
  {
    name: 'Transformações nos Seres Vivos e Ambiente',
    search: 'Transformacoes Nos Seres Vivos E Ambiente',
    creditos: 3
  },
  {
    name: 'Princípios de Administração',
    search: 'Principios De Administracao',
    creditos: 2
  },
  {
    name: 'Programação Avançada para Dispositivos Móveis',
    search: 'Programacao Avancada Para Dispositivos Moveis',
    creditos: 4
  },
  {
    name: 'Projeto de Elementos Estruturais de Aeronaves I',
    search: 'Projeto De Elementos Estruturais De Aeronaves I',
    creditos: 4
  },
  {
    name: 'Propriedades Elétricas, Magnéticas e Ópticas',
    search: 'Propriedades Eletricas Magneticas E Opticas',
    creditos: 4
  },
  {
    name: 'Prática Avançada de Programação A',
    search: 'Pratica Avancada De Programacao A',
    creditos: 4
  },
  {
    name: 'Regimes de Negociação Ambiental Internacional e a Atuação Brasileira',
    search: 'Regimes De Negociacao Ambiental Internacional EA Atuacao Brasileira',
    creditos: 4
  },
  {
    name: 'Regulação Urbanística e Ambiental',
    search: 'Regulacao Urbanistica E Ambiental',
    creditos: 2
  },
  {
    name: 'Sistema Financeiro Internacional: de Bretton Woods ao non-sistema',
    search: 'Sistema Financeiro Internacional De Bretton Woods Ao Non Sistema',
    creditos: 4
  },
  {
    name: 'Sistemas Digitais',
    search: 'Sistemas Digitais',
    creditos: 4
  },
  {
    name: 'Sistemas Fotovoltaicos Isolados',
    search: 'Sistemas Fotovoltaicos Isolados',
    creditos: 4
  },
  {
    name: 'Sistemas Microprocessados',
    search: 'Sistemas Microprocessados',
    creditos: 4
  },
  {
    name: 'Sistemas Multimídia',
    search: 'Sistemas Multimidia',
    creditos: 4
  },
  {
    name: 'Sistemas de Propulsão II',
    search: 'Sistemas De Propulsao Ii',
    creditos: 4
  },
  {
    name: 'Telefonia Fixa e VOIP',
    search: 'Telefonia Fixa E Voip',
    creditos: 4
  },
  {
    name: 'Teoria de Acionamentos Elétricos',
    search: 'Teoria De Acionamentos Eletricos',
    creditos: 4
  },
  {
    name: 'Teoria de Controle Ótimo',
    search: 'Teoria De Controle Otimo',
    creditos: 3
  },
  {
    name: 'Teoria de Filas e Análise de Desempenho',
    search: 'Teoria De Filas E Analise De Desempenho',
    creditos: 4
  },
  {
    name: 'Tomada de Decisões e Neuroeconomia',
    search: 'Tomada De Decisoes E Neuroeconomia',
    creditos: 4
  },
  {
    name: 'Trajetória de Desenvolvimento de Países Exportadores de Petróleo',
    search: 'Trajetoria De Desenvolvimento De Paises Exportadores De Petroleo',
    creditos: 4
  },
  {
    name: 'Transferência de Calor II',
    search: 'Transferencia De Calor Ii',
    creditos: 4
  },
  {
    name: 'Processamento Digital de Imagens',
    search: 'Processamento Digital De Imagens',
    creditos: 4
  },
  { name: 'Redes sem Fio', search: 'Redes Sem Fio', creditos: 4 },
  { name: 'Reúso de Água', search: 'Reuso De Agua', creditos: 3 },
  {
    name: 'Segurança de Redes',
    search: 'Seguranca De Redes',
    creditos: 4
  },
  {
    name: 'Sistemas Multi-Robôs Sociais',
    search: 'Sistemas Multi Robos Sociais',
    creditos: 4
  },
  {
    name: 'Sistemas Operacionais',
    search: 'Sistemas Operacionais',
    creditos: 4
  },
  {
    name: 'Temas e Problemas em Filosofia',
    search: 'Temas E Problemas Em Filosofia',
    creditos: 4
  },
  {
    name: 'Teoria Crítica e Escola de Frankfurt',
    search: 'Teoria Critica E Escola De Frankfurt',
    creditos: 4
  },
  {
    name: 'Território e Sociedade',
    search: 'Territorio E Sociedade',
    creditos: 4
  },
  {
    name: 'Trabalho de Conclusão de Curso em Biologia',
    search: 'Trabalho De Conclusao De Curso Em Biologia',
    creditos: 2
  },
  {
    name: 'Trabalho de Conclusão de Curso em Matemática II',
    search: 'Trabalho De Conclusao De Curso Em Matematica Ii',
    creditos: 2
  },
  {
    name: 'Processamento de Materiais Cerâmicos',
    search: 'Processamento De Materiais Ceramicos',
    creditos: 4
  },
  { name: 'Pragmatismo', search: 'Pragmatismo', creditos: 4 },
  {
    name: 'Projetos Industriais',
    search: 'Projetos Industriais',
    creditos: 4
  },
  {
    name: 'Propriedade Intelectual',
    search: 'Propriedade Intelectual',
    creditos: 4
  },
  {
    name: 'Psicofarmacologia',
    search: 'Psicofarmacologia',
    creditos: 4
  },
  {
    name: 'Química Analítica Instrumental',
    search: 'Quimica Analitica Instrumental',
    creditos: 6
  },
  {
    name: 'Química dos Elementos',
    search: 'Quimica Dos Elementos',
    creditos: 6
  },
  {
    name: 'Regulação e Agências Reguladoras no Contexto Brasileiro',
    search: 'Regulacao E Agencias Reguladoras No Contexto Brasileiro',
    creditos: 4
  },
  {
    name: 'Resíduos Nucleares',
    search: 'Residuos Nucleares',
    creditos: 3
  },
  {
    name: 'Simulação de Modelos de Gestão',
    search: 'Simulacao De Modelos De Gestao',
    creditos: 4
  },
  {
    name: 'Sistemas de Potência II',
    search: 'Sistemas De Potencia Ii',
    creditos: 4
  },
  {
    name: 'Sistemas de Tratamento de Água',
    search: 'Sistemas De Tratamento De Agua',
    creditos: 3
  },
  { name: 'TV Digital', search: 'Tv Digital', creditos: 4 },
  { name: 'Temas de Lógica', search: 'Temas De Logica', creditos: 4 },
  {
    name: 'Teoria Eletromagnética',
    search: 'Teoria Eletromagnetica',
    creditos: 6
  },
  { name: 'Teoria das Filas', search: 'Teoria Das Filas', creditos: 4 },
  {
    name: 'Transportes e Mobilidade Urbana',
    search: 'Transportes E Mobilidade Urbana',
    creditos: 2
  },
  {
    name: 'Programação Baseada em Componentes para Jogos',
    search: 'Programacao Baseada Em Componentes Para Jogos',
    creditos: 4
  },
  {
    name: 'Programação Paralela',
    search: 'Programacao Paralela',
    creditos: 4
  },
  {
    name: 'Projeto e Desenvolvimento de Interfaces Cérebro-Máquina',
    search: 'Projeto E Desenvolvimento De Interfaces Cerebro Maquina',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Física II',
    search: 'Praticas De Ensino De Fisica Ii',
    creditos: 4
  },
  {
    name: 'Química Analítica e Bioanalítica Avançada',
    search: 'Quimica Analitica E Bioanalitica Avancada',
    creditos: 6
  },
  {
    name: 'Química Inorgânica Experimental',
    search: 'Quimica Inorganica Experimental',
    creditos: 4
  },
  {
    name: 'Redes WAN de Banda Larga',
    search: 'Redes Wan De Banda Larga',
    creditos: 4
  },
  {
    name: 'Regime Internacional dos Direitos Humanos e a Atuação Brasileira',
    search: 'Regime Internacional Dos Direitos Humanos EA Atuacao Brasileira',
    creditos: 4
  },
  { name: 'Reologia I', search: 'Reologia I', creditos: 2 },
  {
    name: 'Representação Gráfica de Projetos Ambientais e Urbanos',
    search: 'Representacao Grafica De Projetos Ambientais E Urbanos',
    creditos: 4
  },
  {
    name: 'Siderurgia e Engenharia dos Aços',
    search: 'Siderurgia E Engenharia Dos Acos',
    creditos: 4
  },
  {
    name: 'Sistemas de Controle III',
    search: 'Sistemas De Controle Iii',
    creditos: 5
  },
  {
    name: 'Sociologia dos Territórios',
    search: 'Sociologia Dos Territorios',
    creditos: 4
  },
  {
    name: 'Teoria de Grupos em Física',
    search: 'Teoria De Grupos Em Fisica',
    creditos: 4
  },
  { name: 'Teoria dos Jogos', search: 'Teoria Dos Jogos', creditos: 4 },
  {
    name: 'Termodinâmica Aplicada I',
    search: 'Termodinamica Aplicada I',
    creditos: 4
  },
  {
    name: 'Trabalho de Conclusão de Curso em Matemática III',
    search: 'Trabalho De Conclusao De Curso Em Matematica Iii',
    creditos: 2
  },
  {
    name: 'Trabalho de Conclusão de Curso em Química',
    search: 'Trabalho De Conclusao De Curso Em Quimica',
    creditos: 2
  },
  {
    name: 'Transferência de Calor Industrial',
    search: 'Transferencia De Calor Industrial',
    creditos: 4
  },
  {
    name: 'Transportes e Meio Ambiente',
    search: 'Transportes E Meio Ambiente',
    creditos: 2
  },
  {
    name: 'Problemas Metafísicos: Perspectivas Modernas',
    search: 'Problemas Metafisicos Perspectivas Modernas',
    creditos: 4
  },
  {
    name: 'Processamento Digital de Sinais',
    search: 'Processamento Digital De Sinais',
    creditos: 4
  },
  {
    name: 'Projeto Virtual e Integrado de Manufatura',
    search: 'Projeto Virtual E Integrado De Manufatura',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Matemática III',
    search: 'Praticas De Ensino De Matematica Iii',
    creditos: 4
  },
  { name: 'Química Forense', search: 'Quimica Forense', creditos: 6 },
  {
    name: 'Recuperação de Áreas Degradadas',
    search: 'Recuperacao De Areas Degradadas',
    creditos: 3
  },
  { name: 'Saúde Ambiental', search: 'Saude Ambiental', creditos: 2 },
  { name: 'Sistemas CAD/CAE', search: 'Sistemas Cad Cae', creditos: 4 },
  {
    name: 'Sistemas de Informação Corporativos',
    search: 'Sistemas De Informacao Corporativos',
    creditos: 4
  },
  {
    name: 'Sistemática e Biogeografia',
    search: 'Sistematica E Biogeografia',
    creditos: 4
  },
  {
    name: 'Supervisão e Monitoramento de Processos Energéticos',
    search: 'Supervisao E Monitoramento De Processos Energeticos',
    creditos: 4
  },
  {
    name: 'Temas da Filosofia Contemporânea',
    search: 'Temas Da Filosofia Contemporanea',
    creditos: 4
  },
  {
    name: 'Transferência de Calor I',
    search: 'Transferencia De Calor I',
    creditos: 4
  },
  {
    name: 'Técnicas Avançadas de Programação',
    search: 'Tecnicas Avancadas De Programacao',
    creditos: 4
  },
  {
    name: 'Unidades de Conservação da Natureza',
    search: 'Unidades De Conservacao Da Natureza',
    creditos: 4
  },
  {
    name: 'Técnicas de Tomadas de Decisão Aplicáveis em Modelos de Dependência',
    search: 'Tecnicas De Tomadas De Decisao Aplicaveis Em Modelos De Dependencia',
    creditos: 4
  },
  {
    name: 'Tópicos Especiais em Planejamento Territorial',
    search: 'Topicos Especiais Em Planejamento Territorial',
    creditos: 4
  },
  {
    name: 'Tópicos Avançados em Macroeconomia',
    search: 'Topicos Avancados Em Macroeconomia',
    creditos: 4
  },
  {
    name: 'Economia Dinâmica',
    search: 'Economia Dinamica',
    creditos: 4
  },
  {
    name: 'Inferência Estatística',
    search: 'Inferencia Estatistica',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Matemática IV',
    search: 'Praticas De Ensino De Matematica Iv',
    creditos: 4
  },
  {
    name: 'Refrigeração e Condicionamento de Ar',
    search: 'Refrigeracao E Condicionamento De Ar',
    creditos: 4
  },
  {
    name: 'Urbanização Brasileira',
    search: 'Urbanizacao Brasileira',
    creditos: 4
  },
  {
    name: 'Fundamentos de Morfofisiologia Humana',
    search: 'Fundamentos De Morfofisiologia Humana',
    creditos: 6
  },
  {
    name: 'Motores de Combustão Interna',
    search: 'Motores De Combustao Interna',
    creditos: 2
  },
  {
    name: 'Projeto de Sistemas Multimídia',
    search: 'Projeto De Sistemas Multimidia',
    creditos: 2
  },
  {
    name: 'Zoologia de Invertebrados II',
    search: 'Zoologia De Invertebrados Ii',
    creditos: 6
  },
  {
    name: 'Geometria Plana Axiomática',
    search: 'Geometria Plana Axiomatica',
    creditos: 4
  },
  {
    name: 'Segurança dos Territórios',
    search: 'Seguranca Dos Territorios',
    creditos: 4
  },
  {
    name: 'Tópicos Avançados em Microeconomia',
    search: 'Topicos Avancados Em Microeconomia',
    creditos: 4
  },
  {
    name: 'Tópicos Especiais em Engenharia Organizacional',
    search: 'Topicos Especiais Em Engenharia Organizacional',
    creditos: 2
  },
  { name: 'Ética e Justiça', search: 'Etica E Justica', creditos: 4 },
  {
    name: 'Variáveis complexas e aplicações',
    search: 'Variaveis Complexas E Aplicacoes',
    creditos: 4
  },
  {
    name: 'Zoologia de Vertebrados',
    search: 'Zoologia De Vertebrados',
    creditos: 6
  },
  {
    name: 'Técnicas em Pesquisa',
    search: 'Tecnicas Em Pesquisa',
    creditos: 5
  },
  {
    name: 'Tópicos de História da Ciência',
    search: 'Topicos De Historia Da Ciencia',
    creditos: 4
  },
  { name: 'Óptica', search: 'Optica', creditos: 4 },
  {
    name: 'Estrutura Atômica e Molecular',
    search: 'Estrutura Atomica E Molecular',
    creditos: 4
  },
  {
    name: 'Tópicos de Ensino de Astronomia na Educação Básica',
    search: 'Topicos De Ensino De Astronomia Na Educacao Basica',
    creditos: 4
  },
  {
    name: 'Tópicos Avançados em Química Orgânica',
    search: 'Topicos Avancados Em Quimica Organica',
    creditos: 2
  },
  {
    name: 'Didática da Matemática',
    search: 'Didatica Da Matematica',
    creditos: 4
  },
  {
    name: 'Práticas em Química Verde',
    search: 'Praticas Em Quimica Verde',
    creditos: 4
  },
  {
    name: 'Álgebra Linear Avançada I',
    search: 'Algebra Linear Avancada I',
    creditos: 4
  },
  {
    name: 'Práticas em LIBRAS',
    search: 'Praticas Em Libras',
    creditos: 4
  },
  {
    name: 'Tópicos de Otimização em Sistemas Elétricos de Potência e Aplicações',
    search: 'Topicos De Otimizacao Em Sistemas Eletricos De Potencia E Aplicacoes',
    creditos: 2
  },
  {
    name: 'Tópicos Computacionais em Materiais',
    search: 'Topicos Computacionais Em Materiais',
    creditos: 4
  },
  {
    name: 'Técnicas de Pesquisa em Economia',
    search: 'Tecnicas De Pesquisa Em Economia',
    creditos: 5
  },
  {
    name: 'Técnicas Modernas em Fototerapia',
    search: 'Tecnicas Modernas Em Fototerapia',
    creditos: 4
  },
  {
    name: 'Técnicas Modernas em Fotodiagnóstico',
    search: 'Tecnicas Modernas Em Fotodiagnostico',
    creditos: 4
  },
  {
    name: 'Tópicos Especiais em Engenharia Ambiental e Urbana',
    search: 'Topicos Especiais Em Engenharia Ambiental E Urbana',
    creditos: 4
  },
  { name: 'Ética', search: 'Etica', creditos: 4 },
  {
    name: 'Introdução aos Sistemas Dinâmicos',
    search: 'Introducao Aos Sistemas Dinamicos',
    creditos: 4
  },
  {
    name: 'Introdução à Mecânica Biofluídica',
    search: 'Introducao A Mecanica Biofluidica',
    creditos: 4
  },
  {
    name: 'Tópicos em Física Contemporânea',
    search: 'Topicos Em Fisica Contemporanea',
    creditos: 3
  },
  { name: 'Vibrações', search: 'Vibracoes', creditos: 4 },
  {
    name: 'Filosofia da Matemática',
    search: 'Filosofia Da Matematica',
    creditos: 4
  },
  {
    name: 'Políticas, Educação e Surdez',
    search: 'Politicas Educacao E Surdez',
    creditos: 4
  },
  {
    name: 'Técnicas de Análise Estrutural e Projeto',
    search: 'Tecnicas De Analise Estrutural E Projeto',
    creditos: 4
  },
  {
    name: 'Uso do Solo Urbano',
    search: 'Uso Do Solo Urbano',
    creditos: 4
  },
  {
    name: 'Ética: Perspectivas Contemporâneas',
    search: 'Etica Perspectivas Contemporaneas',
    creditos: 4
  },
  {
    name: 'Algoritmos Probabilísticos',
    search: 'Algoritmos Probabilisticos',
    creditos: 4
  },
  {
    name: 'Tópicos Experimentais em Materiais I',
    search: 'Topicos Experimentais Em Materiais I',
    creditos: 4
  },
  {
    name: 'Fundamentos da Computação Semântica',
    search: 'Fundamentos Da Computacao Semantica',
    creditos: 4
  },
  {
    name: 'Teoria de Grupos: Moléculas e Sólidos',
    search: 'Teoria De Grupos Moleculas E Solidos',
    creditos: 2
  },
  {
    name: 'Tópicos em Física Experimental',
    search: 'Topicos Em Fisica Experimental',
    creditos: 4
  },
  {
    name: 'Ultrassom Aplicado à Medicina',
    search: 'Ultrassom Aplicado A Medicina',
    creditos: 4
  },
  {
    name: 'Vida Artificial na Computação',
    search: 'Vida Artificial Na Computacao',
    creditos: 2
  },
  { name: 'Virologia', search: 'Virologia', creditos: 4 },
  { name: 'Álgebra Linear', search: 'Algebra Linear', creditos: 6 },
  {
    name: 'Capitalismo Contemporâneo',
    search: 'Capitalismo Contemporaneo',
    creditos: 4
  },
  {
    name: 'Simetrias no Plano Euclidiano',
    search: 'Simetrias No Plano Euclidiano',
    creditos: 4
  },
  {
    name: 'Violência e Segurança Pública',
    search: 'Violencia E Seguranca Publica',
    creditos: 4
  },
  {
    name: 'Tópicos Avançados em Desenvolvimento Socioeconômico',
    search: 'Topicos Avancados Em Desenvolvimento Socioeconomico',
    creditos: 4
  },
  {
    name: 'Visão Computacional',
    search: 'Visao Computacional',
    creditos: 4
  },
  { name: 'Web Semântica', search: 'Web Semantica', creditos: 4 },
  {
    name: 'Zoologia de Invertebrados I',
    search: 'Zoologia De Invertebrados I',
    creditos: 6
  },
  {
    name: 'Álgebra Linear Avançada II',
    search: 'Algebra Linear Avancada Ii',
    creditos: 4
  },
  {
    name: 'Engenharia do Biodiesel',
    search: 'Engenharia Do Biodiesel',
    creditos: 4
  },
  {
    name: 'Metodologia de Pesquisa em Relações Internacionais (TCC 1)',
    search: 'Metodologia De Pesquisa Em Relacoes Internacionais Tcc 1',
    creditos: 4
  },
  {
    name: 'fundamentos da biotecnologia',
    search: 'Fundamentos Da Biotecnologia',
    creditos: 2
  },
  {
    name: 'Meio Ambiente e Indústria',
    search: 'Meio Ambiente E Industria',
    creditos: 2
  },
  {
    name: 'Tópicos Emergentes em Banco de Dados',
    search: 'Topicos Emergentes Em Banco De Dados',
    creditos: 4
  },
  {
    name: 'Filosofia da escola: modelos institucionais e questões filosóficas',
    search: 'Filosofia Da Escola Modelos Institucionais E Questoes Filosoficas',
    creditos: 4
  },
  {
    name: 'Análise Social da Família e Implementação de Políticas Públicas',
    search: 'Analise Social Da Familia E Implementacao De Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Consolidação de Conceitos e Métodos de Fenômenos Mecânicos',
    search: 'Consolidacao De Conceitos E Metodos De Fenomenos Mecanicos',
    creditos: 2
  },
  {
    name: 'Métodos para produção de Filosofia',
    search: 'Metodos Para Producao De Filosofia',
    creditos: 4
  },
  {
    name: 'História da Filosofia Medieval: Escolas Franciscanas e Nominalismo',
    search: 'Historia Da Filosofia Medieval Escolas Franciscanas E Nominalismo',
    creditos: 4
  },
  {
    name: 'Sistemas Embarcados para Engenharia Biomédica',
    search: 'Sistemas Embarcados Para Engenharia Biomedica',
    creditos: 4
  },
  {
    name: 'Álgebra na Educação Básica',
    search: 'Algebra Na Educacao Basica',
    creditos: 2
  },
  {
    name: 'Projeto e Desenvolvimento de Sistemas para Análise de Dados Médicos',
    search: 'Projeto E Desenvolvimento De Sistemas Para Analise De Dados Medicos',
    creditos: 4
  },
  {
    name: 'Movimentos Sindicais, Sociais e Culturais',
    search: 'Movimentos Sindicais Sociais E Culturais',
    creditos: 4
  },
  {
    name: 'Teoria Básica de Modelos',
    search: 'Teoria Basica De Modelos',
    creditos: 4
  },
  {
    name: 'Bioquímica Clínica',
    search: 'Bioquimica Clinica',
    creditos: 6
  },
  {
    name: 'Matemática nos anos iniciais',
    search: 'Matematica Nos Anos Iniciais',
    creditos: 4
  },
  {
    name: 'Cinemática e Dinâmica de Mecanismos',
    search: 'Cinematica E Dinamica De Mecanismos',
    creditos: 4
  },
  {
    name: 'Genômica e Pós-Genômica',
    search: 'Genomica E Pos Genomica',
    creditos: 6
  },
  {
    name: 'Processo e Desenvolvimento de Softwares Educacionais',
    search: 'Processo E Desenvolvimento De Softwares Educacionais',
    creditos: 4
  },
  {
    name: 'Redes de Distribuição de Energia Elétrica',
    search: 'Redes De Distribuicao De Energia Eletrica',
    creditos: 4
  },
  {
    name: 'Segurança e Regulamentação em Biotecnologia',
    search: 'Seguranca E Regulamentacao Em Biotecnologia',
    creditos: 2
  },
  {
    name: 'Economia da Inovação Tecnológica',
    search: 'Economia Da Inovacao Tecnologica',
    creditos: 4
  },
  {
    name: 'Proteínas Recombinantes',
    search: 'Proteinas Recombinantes',
    creditos: 4
  },
  {
    name: 'Análise na Educação Básica',
    search: 'Analise Na Educacao Basica',
    creditos: 2
  },
  {
    name: 'Biotecnologia Animal',
    search: 'Biotecnologia Animal',
    creditos: 4
  },
  {
    name: 'História da Astronomia',
    search: 'Historia Da Astronomia',
    creditos: 4
  },
  {
    name: 'Análise Multivariada',
    search: 'Analise Multivariada',
    creditos: 6
  },
  {
    name: 'Introdução à Linguística Computacional',
    search: 'Introducao A Linguistica Computacional',
    creditos: 4
  },
  {
    name: 'Corpo, sexualidade e questões de gênero',
    search: 'Corpo Sexualidade E Questoes De Genero',
    creditos: 4
  },
  {
    name: 'Bromatologia e Análise de Alimentos',
    search: 'Bromatologia E Analise De Alimentos',
    creditos: 4
  },
  {
    name: 'História da Filosofia Medieval: do século XI ao XIV',
    search: 'Historia Da Filosofia Medieval Do Seculo Xi Ao Xiv',
    creditos: 4
  },
  {
    name: 'Métodos Variacionais',
    search: 'Metodos Variacionais',
    creditos: 4
  },
  {
    name: 'Pensamento Latino-Americano e Políticas de CT&I',
    search: 'Pensamento Latino Americano E Politicas De Ct I',
    creditos: 4
  },
  {
    name: 'Filtragem Adaptativa',
    search: 'Filtragem Adaptativa',
    creditos: 4
  },
  {
    name: 'Fundamentos de Zoologia de Invertebrados',
    search: 'Fundamentos De Zoologia De Invertebrados',
    creditos: 6
  },
  {
    name: 'Tecnologia de Biomateriais',
    search: 'Tecnologia De Biomateriais',
    creditos: 4
  },
  {
    name: 'Teoria Aritmética dos Números II',
    search: 'Teoria Aritmetica Dos Numeros Ii',
    creditos: 4
  },
  {
    name: 'Filosofia Experimental e Mecanicismo',
    search: 'Filosofia Experimental E Mecanicismo',
    creditos: 4
  },
  {
    name: 'Livro didático no ensino de conhecimentos biológicos',
    search: 'Livro Didatico No Ensino De Conhecimentos Biologicos',
    creditos: 4
  },
  { name: 'Módulos', search: 'Modulos', creditos: 4 },
  {
    name: 'Estudos Queer e Educação',
    search: 'Estudos Queer E Educacao',
    creditos: 3
  },
  {
    name: 'Escrita e Leitura na Educação em Ciências',
    search: 'Escrita E Leitura Na Educacao Em Ciencias',
    creditos: 2
  },
  {
    name: 'História da Sociedade Contemporânea',
    search: 'Historia Da Sociedade Contemporanea',
    creditos: 4
  },
  {
    name: 'Tratamento Avançado de Águas Residuárias',
    search: 'Tratamento Avancado De Aguas Residuarias',
    creditos: 4
  },
  {
    name: 'Métodos Empíricos para Avaliação de Políticas Públicas',
    search: 'Metodos Empiricos Para Avaliacao De Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Tópicos Avançados em História Econômica',
    search: 'Topicos Avancados Em Historia Economica',
    creditos: 4
  },
  {
    name: 'Tecnologia do Vácuo e Criogenia',
    search: 'Tecnologia Do Vacuo E Criogenia',
    creditos: 4
  },
  {
    name: 'Fundamentos da Relatividade Geral',
    search: 'Fundamentos Da Relatividade Geral',
    creditos: 4
  },
  {
    name: 'Ecologia do Ambiente Urbano',
    search: 'Ecologia Do Ambiente Urbano',
    creditos: 2
  },
  {
    name: 'Biotecnologia Humana',
    search: 'Biotecnologia Humana',
    creditos: 4
  },
  {
    name: 'Conceitos e Modelos da Química Moderna',
    search: 'Conceitos E Modelos Da Quimica Moderna',
    creditos: 2
  },
  {
    name: 'Nanobiotecnologia',
    search: 'Nanobiotecnologia',
    creditos: 4
  },
  {
    name: 'Construções Geométricas e Geometria Métrica',
    search: 'Construcoes Geometricas E Geometria Metrica',
    creditos: 4
  },
  {
    name: 'Projetos de Ensino de Matemática e Ciências com Arte',
    search: 'Projetos De Ensino De Matematica E Ciencias Com Arte',
    creditos: 4
  },
  {
    name: 'Teoria Básica de Categorias',
    search: 'Teoria Basica De Categorias',
    creditos: 4
  },
  {
    name: 'Teoria do Conhecimento Científico',
    search: 'Teoria Do Conhecimento Cientifico',
    creditos: 4
  },
  {
    name: 'Inovação Estratégica',
    search: 'Inovacao Estrategica',
    creditos: 2
  },
  {
    name: 'Educação Estatística',
    search: 'Educacao Estatistica',
    creditos: 4
  },
  {
    name: 'Filosofia da Ciência Pós-kuhniana',
    search: 'Filosofia Da Ciencia Pos Kuhniana',
    creditos: 4
  },
  {
    name: 'Tecnologia da Combustão',
    search: 'Tecnologia Da Combustao',
    creditos: 3
  },
  {
    name: 'Tópicos Especiais em Economia Financeira',
    search: 'Topicos Especiais Em Economia Financeira',
    creditos: 4
  },
  {
    name: 'Seminários de Modalidades Diversas em Educação Matemática',
    search: 'Seminarios De Modalidades Diversas Em Educacao Matematica',
    creditos: 2
  },
  {
    name: 'Análise e Concepção Estrutural para a Engenharia',
    search: 'Analise E Concepcao Estrutural Para A Engenharia',
    creditos: 4
  },
  {
    name: 'Integração e Otimização Energética de Processos',
    search: 'Integracao E Otimizacao Energetica De Processos',
    creditos: 2
  },
  {
    name: 'Seminários de Pesquisa em Educação Matemática II',
    search: 'Seminarios De Pesquisa Em Educacao Matematica Ii',
    creditos: 2
  },
  {
    name: 'Avaliação de Desempenho de Redes',
    search: 'Avaliacao De Desempenho De Redes',
    creditos: 4
  },
  {
    name: 'Gênero, Raça, Classe e Sexualidade',
    search: 'Genero Raca Classe E Sexualidade',
    creditos: 4
  },
  {
    name: 'Tópicos de Metafísica',
    search: 'Topicos De Metafisica',
    creditos: 4
  },
  {
    name: 'Epistemologia Feminista',
    search: 'Epistemologia Feminista',
    creditos: 4
  },
  {
    name: 'Epistemologia Analítica',
    search: 'Epistemologia Analitica',
    creditos: 4
  },
  {
    name: 'Técnicas de Tomadas de Decisão Aplicáveis em Modelos de Interdependência',
    search: 'Tecnicas De Tomadas De Decisao Aplicaveis Em Modelos De Interdependencia',
    creditos: 4
  },
  {
    name: 'Introdução à Estatística Bayesiana',
    search: 'Introducao A Estatistica Bayesiana',
    creditos: 4
  },
  {
    name: 'Desenvolvimento Guiado por Tipos',
    search: 'Desenvolvimento Guiado Por Tipos',
    creditos: 4
  },
  {
    name: 'Economia Brasileira I',
    search: 'Economia Brasileira I',
    creditos: 4
  },
  {
    name: 'Ética Contemporânea',
    search: 'Etica Contemporanea',
    creditos: 4
  },
  {
    name: 'Introdução à Neuroimunologia',
    search: 'Introducao A Neuroimunologia',
    creditos: 2
  },
  {
    name: 'Tópicos Avançados em Economia Institucional',
    search: 'Topicos Avancados Em Economia Institucional',
    creditos: 4
  },
  {
    name: 'Metodologia do Ensino de Geografia',
    search: 'Metodologia Do Ensino De Geografia',
    creditos: 4
  },
  {
    name: 'Relações Comerciais e de Investimento Internacionais',
    search: 'Relacoes Comerciais E De Investimento Internacionais',
    creditos: 4
  },
  {
    name: 'Seminários de Leitura',
    search: 'Seminarios De Leitura',
    creditos: 4
  },
  {
    name: 'Termo Hidráulica de Reatores Nucleares',
    search: 'Termo Hidraulica De Reatores Nucleares',
    creditos: 4
  },
  {
    name: 'Introdução às Humanidades e às Ciências Sociais',
    search: 'Introducao As Humanidades E As Ciencias Sociais',
    creditos: 2
  },
  {
    name: 'Práticas escolares em educação especial e inclusiva',
    search: 'Praticas Escolares Em Educacao Especial E Inclusiva',
    creditos: 4
  },
  {
    name: 'História da Filosofia Antiga Helenística',
    search: 'Historia Da Filosofia Antiga Helenistica',
    creditos: 4
  },
  {
    name: 'Filosofia da Ciência',
    search: 'Filosofia Da Ciencia',
    creditos: 4
  },
  {
    name: 'Niilismo e Pessimismo Filosófico',
    search: 'Niilismo E Pessimismo Filosofico',
    creditos: 4
  },
  {
    name: 'Discussões Atuais em Filosofia da Ciência',
    search: 'Discussoes Atuais Em Filosofia Da Ciencia',
    creditos: 4
  },
  {
    name: 'Laboratório de Práticas Integradoras I (PCC)',
    search: 'Laboratorio De Praticas Integradoras I Pcc',
    creditos: 4
  },
  {
    name: 'Filosofia e Teatro',
    search: 'Filosofia E Teatro',
    creditos: 4
  },
  {
    name: 'Práticas pedagógicas e formativas em museus de ciências',
    search: 'Praticas Pedagogicas E Formativas Em Museus De Ciencias',
    creditos: 4
  },
  {
    name: 'Laboratório de Práticas Integradoras II (PCC)',
    search: 'Laboratorio De Praticas Integradoras Ii Pcc',
    creditos: 4
  },
  {
    name: 'Teorias das Vanguardas Artísticas',
    search: 'Teorias Das Vanguardas Artisticas',
    creditos: 4
  },
  {
    name: 'Enzimologia e Biocatálise',
    search: 'Enzimologia E Biocatalise',
    creditos: 6
  },
  {
    name: 'Tópicos de Filosofia e Práticas de ensino',
    search: 'Topicos De Filosofia E Praticas De Ensino',
    creditos: 4
  },
  { name: 'Cogeração', search: 'Cogeracao', creditos: 2 },
  {
    name: 'Engenharia Metabólica',
    search: 'Engenharia Metabolica',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Geografia: Currículos',
    search: 'Praticas De Ensino De Geografia Curriculos',
    creditos: 4
  },
  { name: 'Psicopatologia', search: 'Psicopatologia', creditos: 2 },
  {
    name: 'Diálogos Interdisciplinares',
    search: 'Dialogos Interdisciplinares',
    creditos: 4
  },
  {
    name: 'Práticas Discursivas da Ciência e Educação em Ciências',
    search: 'Praticas Discursivas Da Ciencia E Educacao Em Ciencias',
    creditos: 2
  },
  {
    name: 'Teoria Espectral de Grafos',
    search: 'Teoria Espectral De Grafos',
    creditos: 4
  },
  {
    name: 'Empreendedorismo e planejamento de projetos em Biotecnologia',
    search: 'Empreendedorismo E Planejamento De Projetos Em Biotecnologia',
    creditos: 4
  },
  {
    name: 'Temas de Filosofia Medieval I',
    search: 'Temas De Filosofia Medieval I',
    creditos: 4
  },
  {
    name: 'Estudos de Gênero',
    search: 'Estudos De Genero',
    creditos: 3
  },
  {
    name: 'Ensino Interdisciplinar de História',
    search: 'Ensino Interdisciplinar De Historia',
    creditos: 4
  },
  {
    name: 'Temas de Filosofia Moderna I',
    search: 'Temas De Filosofia Moderna I',
    creditos: 4
  },
  {
    name: 'História, Eurocentrismo e Pós-Colonialismo',
    search: 'Historia Eurocentrismo E Pos Colonialismo',
    creditos: 4
  },
  {
    name: 'Economia Institucional',
    search: 'Economia Institucional',
    creditos: 4
  },
  {
    name: 'Gestão Educacional: Políticas, Processos e Cotidiano Escolar',
    search: 'Gestao Educacional Politicas Processos E Cotidiano Escolar',
    creditos: 4
  },
  {
    name: 'Introdução à Neuromodulação Invasiva e Não-invasiva',
    search: 'Introducao A Neuromodulacao Invasiva E Nao Invasiva',
    creditos: 2
  },
  {
    name: 'Interposições da Linguagem à Filosofia Contemporânea',
    search: 'Interposicoes Da Linguagem A Filosofia Contemporanea',
    creditos: 4
  },
  {
    name: 'Seminários de Pesquisa em Educação Matemática I',
    search: 'Seminarios De Pesquisa Em Educacao Matematica I',
    creditos: 2
  },
  {
    name: 'Ciência e Culturas Antigas',
    search: 'Ciencia E Culturas Antigas',
    creditos: 4
  },
  {
    name: 'Introdução às Curvas Algébricas',
    search: 'Introducao As Curvas Algebricas',
    creditos: 4
  },
  {
    name: 'História da Filosofia Antiga Clássica',
    search: 'Historia Da Filosofia Antiga Classica',
    creditos: 4
  },
  {
    name: 'Laboratório de Bioprocessos',
    search: 'Laboratorio De Bioprocessos',
    creditos: 4
  },
  {
    name: 'Redes Convergentes',
    search: 'Redes Convergentes',
    creditos: 4
  },
  {
    name: 'Teoria da História I',
    search: 'Teoria Da Historia I',
    creditos: 4
  },
  {
    name: 'Biologia Sintética',
    search: 'Biologia Sintetica',
    creditos: 4
  },
  {
    name: 'Oriente Médio nas Relações Internacionais',
    search: 'Oriente Medio Nas Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'Engenharia de Sistemas de Comunicação e Missão Crítica',
    search: 'Engenharia De Sistemas De Comunicacao E Missao Critica',
    creditos: 4
  },
  {
    name: 'Fundamentos do ensino de Geografia',
    search: 'Fundamentos Do Ensino De Geografia',
    creditos: 4
  },
  {
    name: 'História, Patrimônio e Memória',
    search: 'Historia Patrimonio E Memoria',
    creditos: 4
  },
  {
    name: 'tópicos contemporâneos em educação e filosofia',
    search: 'Topicos Contemporaneos Em Educacao E Filosofia',
    creditos: 4
  },
  {
    name: 'Introdução ao Pensamento Econômico',
    search: 'Introducao Ao Pensamento Economico',
    creditos: 3
  },
  {
    name: 'Metodologias de Pesquisa em Educação',
    search: 'Metodologias De Pesquisa Em Educacao',
    creditos: 2
  },
  {
    name: 'Paulo Freire: educação para a criticidade',
    search: 'Paulo Freire Educacao Para A Criticidade',
    creditos: 2
  },
  {
    name: 'Biofísica de Membranas',
    search: 'Biofisica De Membranas',
    creditos: 6
  },
  {
    name: 'História da Física no Brasil',
    search: 'Historia Da Fisica No Brasil',
    creditos: 2
  },
  {
    name: 'Tecnologia de Fermentações',
    search: 'Tecnologia De Fermentacoes',
    creditos: 4
  },
  {
    name: 'Filosofia africana',
    search: 'Filosofia Africana',
    creditos: 4
  },
  {
    name: 'Sociologia da educação',
    search: 'Sociologia Da Educacao',
    creditos: 4
  },
  {
    name: 'Engenharia do Etanol',
    search: 'Engenharia Do Etanol',
    creditos: 4
  },
  {
    name: 'Neurociência Teórica e Computacional',
    search: 'Neurociencia Teorica E Computacional',
    creditos: 4
  },
  {
    name: 'Estágio Supervisionado em Computação',
    search: 'Estagio Supervisionado Em Computacao',
    creditos: 4
  },
  {
    name: 'Questões de Ética',
    search: 'Questoes De Etica',
    creditos: 4
  },
  {
    name: 'Teoria do Conhecimento: Empirismo e Racionalismo',
    search: 'Teoria Do Conhecimento Empirismo E Racionalismo',
    creditos: 4
  },
  {
    name: 'Economia Brasileira II',
    search: 'Economia Brasileira Ii',
    creditos: 4
  },
  { name: 'Teoria Crítica', search: 'Teoria Critica', creditos: 4 },
  {
    name: 'Análise de Política Externa',
    search: 'Analise De Politica Externa',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Geografia: Metodologias',
    search: 'Praticas De Ensino De Geografia Metodologias',
    creditos: 4
  },
  {
    name: 'Projeto de Graduação em Computação II',
    search: 'Projeto De Graduacao Em Computacao Ii',
    creditos: 8
  },
  {
    name: 'Introdução à Análise Estocástica em Finanças',
    search: 'Introducao A Analise Estocastica Em Financas',
    creditos: 4
  },
  {
    name: 'Sistema Financeiro Internacional',
    search: 'Sistema Financeiro Internacional',
    creditos: 4
  },
  {
    name: 'Controle Avançado de Robôs',
    search: 'Controle Avancado De Robos',
    creditos: 3
  },
  {
    name: 'Química do Petróleo',
    search: 'Quimica Do Petroleo',
    creditos: 4
  },
  {
    name: 'Tópicos de História da Ciência Moderna',
    search: 'Topicos De Historia Da Ciencia Moderna',
    creditos: 4
  },
  {
    name: 'Teoria das Ciências Humanas',
    search: 'Teoria Das Ciencias Humanas',
    creditos: 4
  },
  {
    name: 'Atores e Instituições no Regime Militar: 1964 - 1985',
    search: 'Atores E Instituicoes No Regime Militar',
    creditos: 4
  },
  {
    name: 'Economia Comportamental',
    search: 'Economia Comportamental',
    creditos: 4
  },
  {
    name: 'Trabalho de Conclusão de Curso de Biotecnologia',
    search: 'Trabalho De Conclusao De Curso De Biotecnologia',
    creditos: 2
  },
  {
    name: 'Práticas em Neurobiologia Molecular',
    search: 'Praticas Em Neurobiologia Molecular',
    creditos: 2
  },
  {
    name: 'Análise de dados para o Planejamento Territorial',
    search: 'Analise De Dados Para O Planejamento Territorial',
    creditos: 4
  },
  {
    name: 'Bioimpedância Aplicada',
    search: 'Bioimpedancia Aplicada',
    creditos: 2
  },
  {
    name: 'Deslocamento Forçado, Refúgio e humanitarismo',
    search: 'Deslocamento Forcado Refugio E Humanitarismo',
    creditos: 4
  },
  {
    name: 'Práticas do Ensino de Física no Ensino Fundamental II',
    search: 'Praticas Do Ensino De Fisica No Ensino Fundamental Ii',
    creditos: 4
  },
  {
    name: 'Projeto de Graduação em Computação I',
    search: 'Projeto De Graduacao Em Computacao I',
    creditos: 8
  },
  {
    name: 'Metafísica Clássica',
    search: 'Metafisica Classica',
    creditos: 4
  },
  { name: 'Neuropsicologia', search: 'Neuropsicologia', creditos: 4 },
  {
    name: 'Microeconomia do Desenvolvimento',
    search: 'Microeconomia Do Desenvolvimento',
    creditos: 4
  },
  {
    name: 'Temas de Filosofia Contemporânea II',
    search: 'Temas De Filosofia Contemporanea Ii',
    creditos: 4
  },
  {
    name: 'Metafísica Analítica',
    search: 'Metafisica Analitica',
    creditos: 4
  },
  {
    name: 'Região e Regionalização',
    search: 'Regiao E Regionalizacao',
    creditos: 4
  },
  {
    name: 'Práticas de Educação em Direitos Humanos',
    search: 'Praticas De Educacao Em Direitos Humanos',
    creditos: 4
  },
  {
    name: 'Economia Brasileira Contemporânea',
    search: 'Economia Brasileira Contemporanea',
    creditos: 4
  },
  {
    name: 'Filosofia Política Contemporânea',
    search: 'Filosofia Politica Contemporanea',
    creditos: 4
  },
  {
    name: 'História do Pensamento Geográfico',
    search: 'Historia Do Pensamento Geografico',
    creditos: 4
  },
  {
    name: 'Máquinas Térmicas de Fluxo',
    search: 'Maquinas Termicas De Fluxo',
    creditos: 4
  },
  {
    name: 'Filosofia, Música e Literatura',
    search: 'Filosofia Musica E Literatura',
    creditos: 4
  },
  {
    name: 'Segurança Internacional',
    search: 'Seguranca Internacional',
    creditos: 4
  },
  {
    name: 'Teorias da Verdade',
    search: 'Teorias Da Verdade',
    creditos: 4
  },
  {
    name: 'Literatura e Ensino de Ciências',
    search: 'Literatura E Ensino De Ciencias',
    creditos: 4
  },
  {
    name: 'Oficina de Pesquisa em Filosofia II',
    search: 'Oficina De Pesquisa Em Filosofia Ii',
    creditos: 2
  },
  { name: 'Geopolítica', search: 'Geopolitica', creditos: 4 },
  {
    name: 'Técnicas Aplicadas a Processos Biotecnológicos',
    search: 'Tecnicas Aplicadas A Processos Biotecnologicos',
    creditos: 6
  },
  {
    name: 'Lasers e Óptica Moderna',
    search: 'Lasers E Optica Moderna',
    creditos: 4
  },
  {
    name: 'Doenças do Sistema Nervoso',
    search: 'Doencas Do Sistema Nervoso',
    creditos: 4
  },
  {
    name: 'Fundamentos Psicoantropológicos da Educação',
    search: 'Fundamentos Psicoantropologicos Da Educacao',
    creditos: 4
  },
  {
    name: 'Práticas em Textos Históricos das Ciências',
    search: 'Praticas Em Textos Historicos Das Ciencias',
    creditos: 2
  },
  {
    name: 'Combinatória Extremal',
    search: 'Combinatoria Extremal',
    creditos: 4
  },
  {
    name: 'História Cultural',
    search: 'Historia Cultural',
    creditos: 4
  },
  {
    name: 'Metodologia em História',
    search: 'Metodologia Em Historia',
    creditos: 4
  },
  {
    name: 'Biotecnologia Ambiental e Agroindustrial',
    search: 'Biotecnologia Ambiental E Agroindustrial',
    creditos: 4
  },
  {
    name: 'Poder e Cultura na Sociedade da Informação',
    search: 'Poder E Cultura Na Sociedade Da Informacao',
    creditos: 4
  },
  {
    name: 'Economia Política Internacional',
    search: 'Economia Politica Internacional',
    creditos: 4
  },
  {
    name: 'História da Química',
    search: 'Historia Da Quimica',
    creditos: 2
  },
  {
    name: 'Projeto de Graduação em Computação III',
    search: 'Projeto De Graduacao Em Computacao Iii',
    creditos: 8
  },
  {
    name: 'Gestão Ambiental na Indústria',
    search: 'Gestao Ambiental Na Industria',
    creditos: 3
  },
  {
    name: 'Visualização de Dados e Informações',
    search: 'Visualizacao De Dados E Informacoes',
    creditos: 4
  },
  {
    name: 'Projeto Avançado em Sistemas de Computação',
    search: 'Projeto Avancado Em Sistemas De Computacao',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de História: Metodologias',
    search: 'Praticas De Ensino De Historia Metodologias',
    creditos: 4
  },
  {
    name: 'Oficinas de Cultura e Arte-Educação',
    search: 'Oficinas De Cultura E Arte Educacao',
    creditos: 4
  },
  {
    name: 'Estudos Estratégicos e Defesa',
    search: 'Estudos Estrategicos E Defesa',
    creditos: 4
  },
  {
    name: 'Conhecimento Físico e Linguagens',
    search: 'Conhecimento Fisico E Linguagens',
    creditos: 4
  },
  {
    name: 'Práticas de Agroecologia: de(s)colonizando saberes sobre manejo e cultivo em solos tropicais',
    search: 'Praticas De Agroecologia De S Colonizando Saberes Sobre Manejo E Cultivo Em Solos Tropicais',
    creditos: 4
  },
  {
    name: 'Semântica de Linguagem de Programação',
    search: 'Semantica De Linguagem De Programacao',
    creditos: 4
  },
  {
    name: 'Hidrogenio e Celulas a Combustivel',
    search: 'Hidrogenio E Celulas A Combustivel',
    creditos: 4
  },
  {
    name: 'Ensino de História da África',
    search: 'Ensino De Historia Da Africa',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de História: Currículos',
    search: 'Praticas De Ensino De Historia Curriculos',
    creditos: 4
  },
  {
    name: 'África nas Relações Internacionais',
    search: 'Africa Nas Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'Integração Regional - Teorias e Experiências',
    search: 'Integracao Regional Teorias E Experiencias',
    creditos: 4
  },
  {
    name: 'Relações Monetárias e Financeiras Internacionais',
    search: 'Relacoes Monetarias E Financeiras Internacionais',
    creditos: 4
  },
  {
    name: 'Pensamento Nietzscheano e seus Desdobramentos Contemporâneos',
    search: 'Pensamento Nietzscheano E Seus Desdobramentos Contemporaneos',
    creditos: 4
  },
  {
    name: 'Direito Constitucional',
    search: 'Direito Constitucional',
    creditos: 4
  },
  {
    name: 'Estudos Estrategicos e Defesa',
    search: 'Estudos Estrategicos E Defesa',
    creditos: 4
  },
  {
    name: 'Atores Não Estatais e as Relações Internacionais',
    search: 'Atores Nao Estatais E As Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'Introdução à Robótica',
    search: 'Introducao A Robotica',
    creditos: 4
  },
  {
    name: 'História e Gênero',
    search: 'Historia E Genero',
    creditos: 4
  },
  {
    name: 'Economia do Meio Ambiente',
    search: 'Economia Do Meio Ambiente',
    creditos: 4
  },
  {
    name: 'Estágio Supervisionado em Matemática III',
    search: 'Estagio Supervisionado Em Matematica Iii Nivel Medio',
    creditos: 0
  },
  {
    name: 'Organizações Internacionais e Multilateralismo',
    search: 'Organizacoes Internacionais E Multilateralismo',
    creditos: 4
  },
  {
    name: 'Tópicos Avançados em Finanças',
    search: 'Topicos Avancados Em Financas',
    creditos: 4
  },
  {
    name: 'Historia e Genero',
    search: 'Historia E Genero',
    creditos: 4
  },
  {
    name: 'Métodos Qualitativos e Desenho de Pesquisa para o TCC de Políticas Públicas',
    search: 'Metodos Qualitativos E Desenho De Pesquisa Para O Tcc De Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Integraçao Regional - Teorias e Experiencias',
    search: 'Integracao Regional Teorias E Experiencias',
    creditos: 4
  },
  {
    name: 'Temas de Filosofia Contemporânea I',
    search: 'Temas De Filosofia Contemporanea I',
    creditos: 4
  },
  {
    name: 'Atores Nao Estatais e as Relacoes Internacionais',
    search: 'Atores Nao Estatais E As Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'Hidrogênio e Células a Combustível',
    search: 'Hidrogenio E Celulas A Combustivel',
    creditos: 4
  },
  {
    name: 'Conhecimento Fisico e Linguagens',
    search: 'Conhecimento Fisico E Linguagens',
    creditos: 4
  },
  {
    name: 'Ensino de Historia da Africa',
    search: 'Ensino De Historia Da Africa',
    creditos: 4
  },
  {
    name: 'Educação Não Formal, Informal e Popular',
    search: 'Educacao Nao Formal Informal E Popular',
    creditos: 4
  },
  {
    name: 'Temas de Direito Internacional Público',
    search: 'Temas De Direito Internacional Publico',
    creditos: 4
  },
  {
    name: 'Segurança em Redes',
    search: 'Seguranca Em Redes',
    creditos: 4
  },
  {
    name: 'questões de filosofia política',
    search: 'Questoes De Filosofia Politica',
    creditos: 4
  },
  { name: 'Provas e Modelos', search: 'Provas E Modelos', creditos: 4 },
  {
    name: 'avaliação ambiental estratégica',
    search: 'Avaliacao Ambiental Estrategica',
    creditos: 2
  },
  {
    name: 'Educação em Saúde',
    search: 'Educacao Em Saude',
    creditos: 3
  },
  {
    name: 'Políticas Públicas e Desigualdades de Gênero e Raça',
    search: 'Politicas Publicas E Desigualdades De Genero E Raca',
    creditos: 4
  },
  {
    name: 'análise de sisitemas dinâmicos lineares',
    search: 'Analise De Sisitemas Dinamicos Lineares',
    creditos: 3
  },
  { name: 'geologia geral', search: 'Geologia Geral', creditos: 4 },
  {
    name: 'burocracia e implementação de políticas públicas',
    search: 'Burocracia E Implementacao De Politicas Publicas',
    creditos: 4
  },
  {
    name: 'desenho universal e tecnologia assistiva',
    search: 'Desenho Universal E Tecnologia Assistiva',
    creditos: 2
  },
  {
    name: 'análise de projetos',
    search: 'Analise De Projetos',
    creditos: 2
  },
  {
    name: 'análises de dados ambientais',
    search: 'Analises De Dados Ambientais',
    creditos: 2
  },
  {
    name: 'bombas hidráulicas',
    search: 'Bombas Hidraulicas',
    creditos: 4
  },
  {
    name: 'capitalismo, imperialismo e dependência',
    search: 'Capitalismo Imperialismo E Dependencia',
    creditos: 4
  },
  {
    name: 'elaboração e análise de cenários econômicos',
    search: 'Elaboracao E Analise De Cenarios Economicos',
    creditos: 4
  },
  {
    name: 'soluções para desafios em engenharia',
    search: 'Solucoes Para Desafios Em Engenharia',
    creditos: 2
  },
  {
    name: 'américa latina contemporânea',
    search: 'America Latina Contemporanea',
    creditos: 4
  },
  {
    name: 'ásia: cultura e processos sócio-políticos',
    search: 'Asia Cultura E Processos Socio Politicos',
    creditos: 4
  },
  {
    name: 'economia dinâmica em tempo contínuo',
    search: 'Economia Dinamica Em Tempo Continuo',
    creditos: 4
  },
  { name: 'Geografia Urbana', search: 'Geografia Urbana', creditos: 4 },
  {
    name: 'Política Previdenciária, Interesses Organizados e Processo Decisório',
    search: 'Politica Previdenciaria Interesses Organizados E Processo Decisorio',
    creditos: 4
  },
  {
    name: 'modelagem matemática em ecologia e evolução',
    search: 'Modelagem Matematica Em Ecologia E Evolucao',
    creditos: 4
  },
  {
    name: 'álgebra comutativa',
    search: 'Algebra Comutativa',
    creditos: 4
  },
  {
    name: 'análise de conjuntura internacional',
    search: 'Analise De Conjuntura Internacional',
    creditos: 8
  },
  { name: 'antiguidade', search: 'Antiguidade', creditos: 4 },
  {
    name: 'bioquímica do sistema nervoso central',
    search: 'Bioquimica Do Sistema Nervoso Central',
    creditos: 4
  },
  {
    name: 'brasil independente',
    search: 'Brasil Independente',
    creditos: 4
  },
  {
    name: 'conflitos, paz e negociação internacional (prática)',
    search: 'Conflitos Paz E Negociacao Internacional Pratica',
    creditos: 4
  },
  {
    name: 'introdução ao direito e fundamentos do direito internacional',
    search: 'Introducao Ao Direito E Fundamentos Do Direito Internacional',
    creditos: 4
  },
  {
    name: 'modelagem de banco de dados',
    search: 'Modelagem De Banco De Dados',
    creditos: 4
  },
  {
    name: 'aeronaves dirigíveis',
    search: 'Aeronaves Dirigiveis',
    creditos: 2
  },
  {
    name: 'aproveitamento energético de resíduos',
    search: 'Aproveitamento Energetico De Residuos',
    creditos: 4
  },
  {
    name: 'biotecnologia vegetal',
    search: 'Biotecnologia Vegetal',
    creditos: 4
  },
  {
    name: 'compiladores e interpretadores',
    search: 'Compiladores E Interpretadores',
    creditos: 4
  },
  {
    name: 'economia de reatores nucleares',
    search: 'Economia De Reatores Nucleares',
    creditos: 3
  },
  {
    name: 'Educação em Sexualidade',
    search: 'Educacao Em Sexualidade',
    creditos: 3
  },
  {
    name: 'ações extensionistas em biodiversidade e evolução',
    search: 'Acoes Extensionistas Em Biodiversidade E Evolucao',
    creditos: 4
  },
  {
    name: 'as categorias de karl marx e a análise do capitalismo contemporâneo',
    search: 'As Categorias De Karl Marx EA Analise Do Capitalismo Contemporaneo',
    creditos: 4
  },
  {
    name: 'corpo, sexualidade e questões de gênero',
    search: 'Corpo Sexualidade E Questoes De Genero',
    creditos: 4
  },
  {
    name: 'Práticas Extensionistas em Biotecnologia',
    search: 'Praticas Extensionistas Em Biotecnologia',
    creditos: 3
  },
  {
    name: 'Práticas Extensionistas em Economia',
    search: 'Praticas Extensionistas Em Economia',
    creditos: 8
  },
  {
    name: 'bioquímica: estrutura, propriedades e funções de biomoléculas',
    search: 'Bioquimica Estrutura Propriedades E Funcoes De Biomoleculas',
    creditos: 5
  },
  {
    name: 'china nas relações internacionais',
    search: 'China Nas Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'computabilidade e complexidade',
    search: 'Computabilidade E Complexidade',
    creditos: 4
  },
  {
    name: 'diásporas africanas e as relações internacionais',
    search: 'Diasporas Africanas E As Relacoes Internacionais',
    creditos: 4
  },
  { name: 'dinâmica de voo', search: 'Dinamica De Voo', creditos: 4 },
  {
    name: 'Política Internacional dos EUA',
    search: 'Politica Internacional Dos Eua',
    creditos: 4
  },
  {
    name: 'Arenas e Problemas Públicos',
    search: 'Arenas E Problemas Publicos',
    creditos: 8
  },
  {
    name: 'física experimental i',
    search: 'Fisica Experimental I',
    creditos: 4
  },
  {
    name: 'práticas de ensino de biologia e planejamento',
    search: 'Praticas De Ensino De Biologia E Planejamento',
    creditos: 3
  },
  {
    name: 'ações extensionistas em botânica',
    search: 'Acoes Extensionistas Em Botanica',
    creditos: 2
  },
  {
    name: 'aplicações estruturais de materiais compósitos',
    search: 'Aplicacoes Estruturais De Materiais Compositos',
    creditos: 4
  },
  {
    name: 'cartografia escolar e inclusiva',
    search: 'Cartografia Escolar E Inclusiva',
    creditos: 4
  },
  {
    name: 'direito internacional privado',
    search: 'Direito Internacional Privado',
    creditos: 4
  },
  {
    name: 'diversidades e cultura no mundo ocidental',
    search: 'Diversidades E Cultura No Mundo Ocidental',
    creditos: 4
  },
  {
    name: 'economia do setor público',
    search: 'Economia Do Setor Publico',
    creditos: 4
  },
  {
    name: 'Comunicação Científica',
    search: 'Comunicacao Cientifica',
    creditos: 2
  },
  {
    name: 'Geometria dos Espaços Métricos',
    search: 'Geometria Dos Espacos Metricos',
    creditos: 4
  },
  {
    name: 'Métodos Quantitativos em Políticas Públicas',
    search: 'Metodos Quantitativos Em Politicas Publicas',
    creditos: 4
  },
  {
    name: 'ensino de astronomia para a educação básica',
    search: 'Ensino De Astronomia Para A Educacao Basica',
    creditos: 4
  },
  {
    name: 'ações extensionistas em microbiologia, ambiente e saúde',
    search: 'Acoes Extensionistas Em Microbiologia Ambiente E Saude',
    creditos: 2
  },
  {
    name: 'afro-brasileira: relações étnico-raciais',
    search: 'Afro Brasileira Relacoes Etnico Raciais',
    creditos: 4
  },
  {
    name: 'análise de algoritmos i',
    search: 'Analise De Algoritmos I',
    creditos: 4
  },
  {
    name: 'centrais termoelétricas',
    search: 'Centrais Termoeletricas',
    creditos: 2
  },
  {
    name: 'contradições e dilemas do setor agrário latino-americano',
    search: 'Contradicoes E Dilemas Do Setor Agrario Latino Americano',
    creditos: 4
  },
  {
    name: 'dinâmica das estruturas',
    search: 'Dinamica Das Estruturas',
    creditos: 4
  },
  {
    name: 'direitos humanos, punição e políticas públicas',
    search: 'Direitos Humanos Punicao E Politicas Publicas',
    creditos: 4
  },
  {
    name: 'introdução ao acolhimento intercultural aos migrantes e refugiados',
    search: 'Introducao Ao Acolhimento Intercultural Aos Migrantes E Refugiados',
    creditos: 8
  },
  {
    name: 'números reais e sequências',
    search: 'Numeros Reais E Sequencias',
    creditos: 4
  },
  {
    name: 'segurança em laboratórios de química',
    search: 'Seguranca Em Laboratorios De Quimica',
    creditos: 2
  },
  { name: 'teoria de anéis', search: 'Teoria De Aneis', creditos: 4 },
  {
    name: 'ações extensionistas em biomoléculas e suas funções',
    search: 'Acoes Extensionistas Em Biomoleculas E Suas Funcoes',
    creditos: 4
  },
  {
    name: 'ações extensionistas em fisiologia e saúde',
    search: 'Acoes Extensionistas Em Fisiologia E Saude',
    creditos: 2
  },
  {
    name: 'américa portuguesa',
    search: 'America Portuguesa',
    creditos: 4
  },
  {
    name: 'aproximação teórica e numérica ii',
    search: 'Aproximacao Teorica E Numerica Ii',
    creditos: 4
  },
  {
    name: 'arte no ensino de ciências humanas',
    search: 'Arte No Ensino De Ciencias Humanas',
    creditos: 4
  },
  {
    name: 'diversidade cultural, conhecimento local e políticas públicas',
    search: 'Diversidade Cultural Conhecimento Local E Politicas Publicas',
    creditos: 4
  },
  {
    name: 'Evolução da Física I',
    search: 'Evolucao Da Fisica I',
    creditos: 4
  },
  {
    name: 'Biodiversidade, Geodiversidade e Paisagem',
    search: 'Biodiversidade Geodiversidade E Paisagem',
    creditos: 3
  },
  {
    name: 'Direito Administrativo',
    search: 'Direito Administrativo',
    creditos: 4
  },
  {
    name: 'Mulher, Imagem e Sociedade',
    search: 'Mulher Imagem E Sociedade',
    creditos: 4
  },
  {
    name: 'evolução da física ii',
    search: 'Evolucao Da Fisica Ii',
    creditos: 4
  },
  {
    name: 'inovações para engenharia',
    search: 'Inovacoes Para Engenharia',
    creditos: 2
  },
  {
    name: 'oficina de pesquisa em filosofia iii',
    search: 'Oficina De Pesquisa Em Filosofia Iii',
    creditos: 2
  },
  {
    name: 'práticas comunitárias em campo',
    search: 'Praticas Comunitarias Em Campo',
    creditos: 8
  },
  {
    name: 'zoologia de ecdysozoa',
    search: 'Zoologia De Ecdysozoa',
    creditos: 6
  },
  {
    name: 'economia dinâmica em tempo discreto',
    search: 'Economia Dinamica Em Tempo Discreto',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Ciências no Ensino Fundamental',
    search: 'Praticas De Ensino De Ciencias No Ensino Fundamental',
    creditos: 4
  },
  {
    name: 'Otimização Linear',
    search: 'Otimizacao Linear',
    creditos: 4
  },
  {
    name: 'polímeros: síntese, caracterização e processos',
    search: 'Polimeros Sintese Caracterizacao E Processos',
    creditos: 6
  },
  {
    name: 'aproximação teórica e numérica i',
    search: 'Aproximacao Teorica E Numerica I',
    creditos: 4
  },
  {
    name: 'colonialismo ibérico',
    search: 'Colonialismo Iberico',
    creditos: 4
  },
  {
    name: 'educação e desigualdades',
    search: 'Educacao E Desigualdades',
    creditos: 4
  },
  { name: 'Teoria de Grupos', search: 'Teoria De Grupos', creditos: 4 },
  {
    name: 'Robótica Pedagógica com Projetos Interdisciplinares',
    search: 'Robotica Pedagogica Com Projetos Interdisciplinares',
    creditos: 4
  },
  {
    name: 'Práticas de Ensino de Biologia e Currículo',
    search: 'Praticas De Ensino De Biologia E Curriculo',
    creditos: 3
  },
  {
    name: 'teorias clássicas das relações internacionais',
    search: 'Teorias Classicas Das Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'ações extensionistas em zoologia',
    search: 'Acoes Extensionistas Em Zoologia',
    creditos: 2
  },
  {
    name: 'Tópicos Especiais em Políticas Setoriais no Território',
    search: 'Topicos Especiais Em Politicas Setoriais No Territorio',
    creditos: 4
  },
  {
    name: 'Diversidade de gênero e formação de professor',
    search: 'Diversidade De Genero E Formacao De Professor',
    creditos: 4
  },
  {
    name: 'Tópicos Especiais em Relações Internacionais',
    search: 'Topicos Especiais Em Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'monografia i - técnicas de pesquisa em economia',
    search: 'Monografia I Tecnicas De Pesquisa Em Economia',
    creditos: 5
  },
  {
    name: 'socialização e sociabilidade na sociedade contemporânea',
    search: 'Socializacao E Sociabilidade Na Sociedade Contemporanea',
    creditos: 4
  },
  {
    name: 'análise de algoritmos ii',
    search: 'Analise De Algoritmos Ii',
    creditos: 4
  },
  {
    name: 'ciência, saúde, educação e a formação da nacionalidade',
    search: 'Ciencia Saude Educacao EA Formacao Da Nacionalidade',
    creditos: 4
  },
  {
    name: 'divulgação científica em biotecnologia',
    search: 'Divulgacao Cientifica Em Biotecnologia',
    creditos: 4
  },
  {
    name: 'clínica de direitos humanos e políticas públicas',
    search: 'Clinica De Direitos Humanos E Politicas Publicas',
    creditos: 4
  },
  {
    name: 'História das Instituições Políticas Brasileiras',
    search: 'Historia Das Instituicoes Politicas Brasileiras',
    creditos: 4
  },
  {
    name: 'álgebra linear avançada',
    search: 'Algebra Linear Avancada',
    creditos: 6
  },
  {
    name: 'algoritmos em grafos',
    search: 'Algoritmos Em Grafos',
    creditos: 4
  },
  {
    name: 'introdução aos processos de fabricação metal ¿ mecânico',
    search: 'Introducao Aos Processos De Fabricacao Metal Mecanico',
    creditos: 6
  },
  {
    name: 'educação em direitos humanos',
    search: 'Educacao Em Direitos Humanos',
    creditos: 4
  },
  {
    name: 'dinâmica não linear e caos',
    search: 'Dinamica Nao Linear E Caos',
    creditos: 4
  },
  {
    name: 'economia política internacional da segurança alimentar',
    search: 'Economia Politica Internacional Da Seguranca Alimentar',
    creditos: 4
  },
  {
    name: 'fundamentos de sinais e sistemas de tempo discreto',
    search: 'Fundamentos De Sinais E Sistemas De Tempo Discreto',
    creditos: 2
  },
  { name: 'quimiometria', search: 'Quimiometria', creditos: 4 },
  {
    name: 'análise de política externa',
    search: 'Analise De Politica Externa',
    creditos: 4
  },
  {
    name: 'atividades da teoria',
    search: 'Atividades Da Teoria',
    creditos: 4
  },
  {
    name: 'atores e instituições no regime militar: 1964-1985',
    search: 'Atores E Instituicoes No Regime Militar 19641985',
    creditos: 4
  },
  { name: 'cinética química', search: 'Cinetica Quimica', creditos: 3 },
  {
    name: 'diálogos extensionistas em economia',
    search: 'Dialogos Extensionistas Em Economia',
    creditos: 8
  },
  {
    name: 'dinâmica e controle de veículos aéreos não-tripulados de asas rotativas',
    search: 'Dinamica E Controle De Veiculos Aereos Nao Tripulados De Asas Rotativas',
    creditos: 4
  },
  {
    name: 'efeitos biológicos das radiações',
    search: 'Efeitos Biologicos Das Radiacoes',
    creditos: 4
  },
  {
    name: 'epistemologias do sul: filosofias ameríndias',
    search: 'Epistemologias Do Sul Filosofias Amerindias',
    creditos: 4
  },
  {
    name: 'encontros sobre gênero e sexualidades',
    search: 'Encontros Sobre Genero E Sexualidades',
    creditos: 8
  },
  {
    name: 'escoamento multifásico',
    search: 'Escoamento Multifasico',
    creditos: 4
  },
  {
    name: 'estruturalismo e pós-estruturalismo',
    search: 'Estruturalismo E Pos Estruturalismo',
    creditos: 4
  },
  {
    name: 'eletroanalítica e instrumentação em química',
    search: 'Eletroanalitica E Instrumentacao Em Quimica',
    creditos: 5
  },
  {
    name: 'eletrofisiologia e hemodinâmica cardíaca',
    search: 'Eletrofisiologia E Hemodinamica Cardiaca',
    creditos: 4
  },
  {
    name: 'epistemologia naturalizada',
    search: 'Epistemologia Naturalizada',
    creditos: 4
  },
  {
    name: 'filosofia da química',
    search: 'Filosofia Da Quimica',
    creditos: 2
  },
  {
    name: 'filosofia, fotografia e arte na era das redes',
    search: 'Filosofia Fotografia E Arte Na Era Das Redes',
    creditos: 4
  },
  {
    name: 'finanças, gestão e administração financeira',
    search: 'Financas Gestao E Administracao Financeira',
    creditos: 4
  },
  {
    name: 'física médica ii',
    search: 'Fisica Medica Ii',
    creditos: 2
  },
  {
    name: 'história e filosofia da economia e das ciências sociais',
    search: 'Historia E Filosofia Da Economia E Das Ciencias Sociais',
    creditos: 4
  },
  {
    name: 'história da filosofia no renascimento',
    search: 'Historia Da Filosofia No Renascimento',
    creditos: 4
  },
  {
    name: 'engenharia de segurança do trabalho',
    search: 'Engenharia De Seguranca Do Trabalho',
    creditos: 4
  },
  {
    name: 'espectroanalítica molecular e atômica',
    search: 'Espectroanalitica Molecular E Atomica',
    creditos: 6
  },
  {
    name: 'fundamentos de química',
    search: 'Fundamentos De Quimica',
    creditos: 2
  },
  {
    name: 'história dos povos indígenas brasileiros',
    search: 'Historia Dos Povos Indigenas Brasileiros',
    creditos: 4
  },
  { name: 'idealismo alemão', search: 'Idealismo Alemao', creditos: 4 },
  {
    name: 'energia e abastecimento',
    search: 'Energia E Abastecimento',
    creditos: 4
  },
  {
    name: 'epistemologias formais',
    search: 'Epistemologias Formais',
    creditos: 4
  },
  {
    name: 'fundamentos de fisiopatologia para engenharias ii',
    search: 'Fundamentos De Fisiopatologia Para Engenharias Ii',
    creditos: 4
  },
  {
    name: 'governança, políticas públicas e resistência em tempos de crises múltiplas',
    search: 'Governanca Politicas Publicas E Resistencia Em Tempos De Crises Multiplas',
    creditos: 4
  },
  {
    name: 'europa moderna e contemporânea: cultura e processos políticos',
    search: 'Europa Moderna E Contemporanea Cultura E Processos Politicos',
    creditos: 4
  },
  {
    name: 'filosofia da tecnologia',
    search: 'Filosofia Da Tecnologia',
    creditos: 4
  },
  {
    name: 'filosofia da história',
    search: 'Filosofia Da Historia',
    creditos: 4
  },
  {
    name: 'filosofia da natureza, mecanicismo e cosmologia',
    search: 'Filosofia Da Natureza Mecanicismo E Cosmologia',
    creditos: 4
  },
  {
    name: 'física experimental iv',
    search: 'Fisica Experimental Iv',
    creditos: 4
  },
  {
    name: 'gestão da qualidade, segurança, saúde e ambiental aplicada em projetos',
    search: 'Gestao Da Qualidade Seguranca Saude E Ambiental Aplicada Em Projetos',
    creditos: 2
  },
  {
    name: 'eleições e partidos políticos',
    search: 'Eleicoes E Partidos Politicos',
    creditos: 4
  },
  { name: 'eletroquímica', search: 'Eletroquimica', creditos: 3 },
  {
    name: 'fundamentos de sinais e sistemas em tempo discreto',
    search: 'Fundamentos De Sinais E Sistemas Em Tempo Discreto',
    creditos: 2
  },
  {
    name: 'engenharia de reservatórios ii',
    search: 'Engenharia De Reservatorios Ii',
    creditos: 4
  },
  {
    name: 'filosofia e sociedade civil em movimento(s)',
    search: 'Filosofia E Sociedade Civil Em Movimento S',
    creditos: 8
  },
  {
    name: 'física de reatores nucleares ii',
    search: 'Fisica De Reatores Nucleares Ii',
    creditos: 4
  },
  {
    name: 'fundamentos de navegação inercial e gnss',
    search: 'Fundamentos De Navegacao Inercial E Gnss',
    creditos: 2
  },
  {
    name: 'geometria diferencial',
    search: 'Geometria Diferencial',
    creditos: 6
  },
  { name: 'geração de vapor', search: 'Geracao De Vapor', creditos: 4 },
  {
    name: 'história e ambiente',
    search: 'Historia E Ambiente',
    creditos: 2
  },
  {
    name: 'ética e conhecimento',
    search: 'Etica E Conhecimento',
    creditos: 4
  },
  {
    name: 'fundamentos de fisiopatologia para engenharias iii',
    search: 'Fundamentos De Fisiopatologia Para Engenharias Iii',
    creditos: 4
  },
  {
    name: 'fundamentos de reações orgânicas',
    search: 'Fundamentos De Reacoes Organicas',
    creditos: 4
  },
  {
    name: 'elementos finitos',
    search: 'Elementos Finitos',
    creditos: 4
  },
  {
    name: 'engenharia de completação',
    search: 'Engenharia De Completacao',
    creditos: 4
  },
  {
    name: 'europa medieval: cultura, política e sociedade',
    search: 'Europa Medieval Cultura Politica E Sociedade',
    creditos: 4
  },
  {
    name: 'geografia agrária',
    search: 'Geografia Agraria',
    creditos: 4
  },
  {
    name: 'geografia das indústrias e movimentos operários no abc',
    search: 'Geografia Das Industrias E Movimentos Operarios No Abc',
    creditos: 4
  },
  {
    name: 'gestão de tecnologia hospitalar ii',
    search: 'Gestao De Tecnologia Hospitalar Ii',
    creditos: 4
  },
  {
    name: 'história e filosofia da biologia',
    search: 'Historia E Filosofia Da Biologia',
    creditos: 4
  },
  {
    name: 'impacto ambiental e social na cadeia de produção de petróleo',
    search: 'Impacto Ambiental E Social Na Cadeia De Producao De Petroleo',
    creditos: 4
  },
  {
    name: 'energia e meio ambiente',
    search: 'Energia E Meio Ambiente',
    creditos: 3
  },
  {
    name: 'física experimental ii',
    search: 'Fisica Experimental Ii',
    creditos: 4
  },
  {
    name: 'gestão ambiental empresarial',
    search: 'Gestao Ambiental Empresarial',
    creditos: 4
  },
  {
    name: 'fibrados e conexões',
    search: 'Fibrados E Conexoes',
    creditos: 4
  },
  {
    name: 'engenharia de reservatórios i',
    search: 'Engenharia De Reservatorios I',
    creditos: 4
  },
  {
    name: 'engenharia de segurança do trabalho: ergonomia',
    search: 'Engenharia De Seguranca Do Trabalho Ergonomia',
    creditos: 4
  },
  {
    name: 'funções especiais e teoria de representações de grupos',
    search: 'Funcoes Especiais E Teoria De Representacoes De Grupos',
    creditos: 4
  },
  {
    name: 'fundamentos de fisiopatologia para engenharias i',
    search: 'Fundamentos De Fisiopatologia Para Engenharias I',
    creditos: 2
  },
  {
    name: 'hidrologia urbana',
    search: 'Hidrologia Urbana',
    creditos: 4
  },
  {
    name: 'história da filosofia moderna: a filosofia crítica',
    search: 'Historia Da Filosofia Moderna A Filosofia Critica',
    creditos: 4
  },
  {
    name: 'física experimental iii',
    search: 'Fisica Experimental Iii',
    creditos: 4
  },
  {
    name: 'geopolítica do petróleo e o desenvolvimento brasileiro',
    search: 'Geopolitica Do Petroleo EO Desenvolvimento Brasileiro',
    creditos: 4
  },
  {
    name: 'história e filosofia da física',
    search: 'Historia E Filosofia Da Fisica',
    creditos: 4
  },
  {
    name: 'história e filosofia da psicologia e das ciências cognitivas',
    search: 'Historia E Filosofia Da Psicologia E Das Ciencias Cognitivas',
    creditos: 4
  },
  {
    name: 'iluminação rural fotovoltaica',
    search: 'Iluminacao Rural Fotovoltaica',
    creditos: 4
  },
  {
    name: 'introdução à teoria analítica dos números',
    search: 'Introducao A Teoria Analitica Dos Numeros',
    creditos: 4
  },
  {
    name: 'introdução às álgebras não associativas',
    search: 'Introducao As Algebras Nao Associativas',
    creditos: 4
  },
  {
    name: 'internet das coisas e blockchain',
    search: 'Internet Das Coisas E Blockchain',
    creditos: 4
  },
  {
    name: 'mecânica estatística i',
    search: 'Mecanica Estatistica I',
    creditos: 4
  },
  {
    name: 'política internacional da europa',
    search: 'Politica Internacional Da Europa',
    creditos: 4
  },
  {
    name: 'primórdios da filosofia e ciência antiga',
    search: 'Primordios Da Filosofia E Ciencia Antiga',
    creditos: 4
  },
  {
    name: 'relações internacionais e arte',
    search: 'Relacoes Internacionais E Arte',
    creditos: 4
  },
  { name: 'séries temporais', search: 'Series Temporais', creditos: 4 },
  {
    name: 'sistemas de gerenciamento de banco de dados',
    search: 'Sistemas De Gerenciamento De Banco De Dados',
    creditos: 4
  },
  {
    name: 'dinâmicas socioespaciais do abc paulista',
    search: 'Dinamicas Socioespaciais Do Abc Paulista',
    creditos: 4
  },
  {
    name: 'introdução aos processos pontuais',
    search: 'Introducao Aos Processos Pontuais',
    creditos: 4
  },
  {
    name: 'desigualdades regionais e formação socioespacial do brasil',
    search: 'Desigualdades Regionais E Formacao Socioespacial Do Brasil',
    creditos: 4
  },
  {
    name: 'filosofia latino-americana: história e problemas',
    search: 'Filosofia Latino Americana Historia E Problemas',
    creditos: 4
  },
  {
    name: 'trajetória da opep e da agência internacional de energia (iea)',
    search: 'Trajetoria Da Opep E Da Agencia Internacional De Energia Iea',
    creditos: 4
  },
  {
    name: 'perspectivas analíticas sobre a burocracia',
    search: 'Perspectivas Analiticas Sobre A Burocracia',
    creditos: 4
  },
  {
    name: 'laboratório de navegação inercial e gnss',
    search: 'Laboratorio De Navegacao Inercial E Gnss',
    creditos: 2
  },
  {
    name: 'novas abordagens teóricas em políticas públicas',
    search: 'Novas Abordagens Teoricas Em Politicas Publicas',
    creditos: 4
  },
  { name: 'petrofísica', search: 'Petrofisica', creditos: 4 },
  {
    name: 'psicologia do desenvolvimento: infância, juventude, vida adulta e envelhecimento',
    search: 'Psicologia Do Desenvolvimento Infancia Juventude Vida Adulta E Envelhecimento',
    creditos: 4
  },
  {
    name: 'estágio curricular em engenharia aeroespacial',
    search: 'Estagio Curricular Em Engenharia Aeroespacial',
    creditos: 14
  },
  {
    name: 'trabalho de graduação iii em engenharia de instrumentação, automação e robótica',
    search: 'Trabalho De Graduacao Iii Em Engenharia De Instrumentacao Automacao E Robotica',
    creditos: 2
  },
  {
    name: 'monografia i – técnicas de pesquisa em economia',
    search: 'Monografia I Tecnicas De Pesquisa Em Economia',
    creditos: 5
  },
  {
    name: 'políticas públicas para a sociedade da informação',
    search: 'Politicas Publicas Para A Sociedade Da Informacao',
    creditos: 4
  },
  {
    name: 'metodologia de pesquisa em ciência de dados',
    search: 'Metodologia De Pesquisa Em Ciencia De Dados',
    creditos: 4
  },
  {
    name: 'óptica e relatividade',
    search: 'Optica E Relatividade',
    creditos: 4
  },
  {
    name: 'periferias urbanas, direito à cidade e políticas públicas',
    search: 'Periferias Urbanas Direito A Cidade E Politicas Publicas',
    creditos: 4
  },
  {
    name: 'regime internacional dos direitos humanos',
    search: 'Regime Internacional Dos Direitos Humanos',
    creditos: 4
  },
  {
    name: 'relatividade restrita',
    search: 'Relatividade Restrita',
    creditos: 4
  },
  {
    name: 'técnicas analíticas de separação',
    search: 'Tecnicas Analiticas De Separacao',
    creditos: 5
  },
  {
    name: 'polímeros síntese, caracterização e processos',
    search: 'Polimeros Sintese Caracterizacao E Processos',
    creditos: 6
  },
  {
    name: 'tecnologia de alimentos',
    search: 'Tecnologia De Alimentos',
    creditos: 4
  },
  {
    name: 'formação histórica da america latina',
    search: 'Formacao Historica Da America Latina',
    creditos: 4
  },
  {
    name: 'sistema de abastecimento de águas',
    search: 'Sistema De Abastecimento De Aguas',
    creditos: 3
  },
  {
    name: 'laboratório de redes',
    search: 'Laboratorio De Redes',
    creditos: 4
  },
  {
    name: 'instituições, mercado e poder',
    search: 'Instituicoes Mercado E Poder',
    creditos: 4
  },
  {
    name: 'introdução à topologia diferencial',
    search: 'Introducao A Topologia Diferencial',
    creditos: 4
  },
  {
    name: 'práticas extensionistas em políticas públicas iii',
    search: 'Praticas Extensionistas Em Politicas Publicas Iii',
    creditos: 4
  },
  {
    name: 'relação família-escola na inclusão escolar',
    search: 'Relacao Familia Escola Na Inclusao Escolar',
    creditos: 2
  },
  {
    name: 'teoria de semigrupos',
    search: 'Teoria De Semigrupos',
    creditos: 4
  },
  {
    name: 'tópicos em espaços de sobolev',
    search: 'Topicos Em Espacos De Sobolev',
    creditos: 4
  },
  {
    name: 'tópicos especiais em políticas públicas',
    search: 'Topicos Especiais Em Politicas Publicas',
    creditos: 4
  },
  {
    name: 'tópicos especiais em química orgânica',
    search: 'Topicos Especiais Em Quimica Organica',
    creditos: 2
  },
  {
    name: 'fluidos quânticos',
    search: 'Fluidos Quanticos',
    creditos: 4
  },
  {
    name: 'trabalho de conclusão de curso i de planejamento territorial',
    search: 'Trabalho De Conclusao De Curso I De Planejamento Territorial',
    creditos: 2
  },
  {
    name: 'métodos numéricos em edp’s',
    search: 'Metodos Numericos Em Edps',
    creditos: 4
  },
  {
    name: 'introdução à bioestatística',
    search: 'Introducao A Bioestatistica',
    creditos: 4
  },
  {
    name: 'mecânica estatística ii',
    search: 'Mecanica Estatistica Ii',
    creditos: 4
  },
  {
    name: 'migrações internacionais',
    search: 'Migracoes Internacionais',
    creditos: 4
  },
  {
    name: 'modelagem de sistemas eletromecânicos',
    search: 'Modelagem De Sistemas Eletromecanicos',
    creditos: 4
  },
  {
    name: 'modelos matemáticos em epidemiologia',
    search: 'Modelos Matematicos Em Epidemiologia',
    creditos: 4
  },
  {
    name: 'panorama internacional do abc',
    search: 'Panorama Internacional Do Abc',
    creditos: 8
  },
  {
    name: 'política externa do brasil e a américa do sul',
    search: 'Politica Externa Do Brasil EA America Do Sul',
    creditos: 4
  },
  {
    name: 'prática em museus, arquivos e bens culturais',
    search: 'Pratica Em Museus Arquivos E Bens Culturais',
    creditos: 4
  },
  {
    name: 'práticas de ensino de biologia e aprendizagem',
    search: 'Praticas De Ensino De Biologia E Aprendizagem',
    creditos: 3
  },
  {
    name: 'processos biotecnológicos para produção de biocombustíveis',
    search: 'Processos Biotecnologicos Para Producao De Biocombustiveis',
    creditos: 4
  },
  {
    name: 'qualidade de imagens médicas',
    search: 'Qualidade De Imagens Medicas',
    creditos: 4
  },
  {
    name: 'tópicos em engenharia de produção na indústria automotiva',
    search: 'Topicos Em Engenharia De Producao Na Industria Automotiva',
    creditos: 2
  },
  {
    name: 'teoria de conjuntos',
    search: 'Teoria De Conjuntos',
    creditos: 4
  },
  {
    name: 'métodos e técnicas aplicadas às políticas públicas urbanas',
    search: 'Metodos E Tecnicas Aplicadas As Politicas Publicas Urbanas',
    creditos: 4
  },
  {
    name: 'tópicos avançados em modalidades: lógica deôntica e lógica epistêmica',
    search: 'Topicos Avancados Em Modalidades Logica Deontica E Logica Epistemica',
    creditos: 2
  },
  {
    name: 'trabalho de graduação iii em engenharia de gestão',
    search: 'Trabalho De Graduacao Iii Em Engenharia De Gestao',
    creditos: 2
  },
  {
    name: 'métodos numéricos para edos',
    search: 'Metodos Numericos Para Edos',
    creditos: 4
  },
  {
    name: 'práticas territoriais',
    search: 'Praticas Territoriais',
    creditos: 8
  },
  {
    name: 'propriedades magnéticas e eletrônicas',
    search: 'Propriedades Magneticas E Eletronicas',
    creditos: 4
  },
  {
    name: 'reprodução assistida em mamíferos',
    search: 'Reproducao Assistida Em Mamiferos',
    creditos: 4
  },
  {
    name: 'trabalhos de campo, coleta e preservação de organismos',
    search: 'Trabalhos De Campo Coleta E Preservacao De Organismos',
    creditos: 4
  },
  {
    name: 'métodos e técnicas aplicadas às políticas públicas ambientais',
    search: 'Metodos E Tecnicas Aplicadas As Politicas Publicas Ambientais',
    creditos: 4
  },
  {
    name: 'estágio curricular em engenharia biomédica',
    search: 'Estagio Curricular Em Engenharia Biomedica',
    creditos: 14
  },
  {
    name: 'estágio curricular em engenharia de informação',
    search: 'Estagio Curricular Em Engenharia De Informacao',
    creditos: 14
  },
  {
    name: 'trabalho de graduação ii em engenharia ambiental e urbana',
    search: 'Trabalho De Graduacao Ii Em Engenharia Ambiental E Urbana',
    creditos: 2
  },
  {
    name: 'sistema de gerenciamento de banco de dados',
    search: 'Sistema De Gerenciamento De Banco De Dados',
    creditos: 4
  },
  {
    name: 'integração regional - teorias e experiências',
    search: 'Integracao Regional Teorias E Experiencias',
    creditos: 4
  },
  {
    name: 'implementação de bancos de dados',
    search: 'Implementacao De Bancos De Dados',
    creditos: 4
  },
  {
    name: 'introdução à teoria geométrica da medida',
    search: 'Introducao A Teoria Geometrica Da Medida',
    creditos: 4
  },
  {
    name: 'laboratório de sistemas operacionais',
    search: 'Laboratorio De Sistemas Operacionais',
    creditos: 4
  },
  {
    name: 'métodos de formação de imagem e de inspeção nuclear',
    search: 'Metodos De Formacao De Imagem E De Inspecao Nuclear',
    creditos: 4
  },
  {
    name: 'microeconomia sistêmica ambiental',
    search: 'Microeconomia Sistemica Ambiental',
    creditos: 4
  },
  {
    name: 'psicologia da educação: aprendizagem',
    search: 'Psicologia Da Educacao Aprendizagem',
    creditos: 4
  },
  {
    name: 'qualidade em serviços',
    search: 'Qualidade Em Servicos',
    creditos: 2
  },
  {
    name: 'reflexões sobre arte e sociedade',
    search: 'Reflexoes Sobre Arte E Sociedade',
    creditos: 8
  },
  {
    name: 'sindicalismo e movimentos sociais',
    search: 'Sindicalismo E Movimentos Sociais',
    creditos: 4
  },
  {
    name: 'tecnologia de redes ópticas',
    search: 'Tecnologia De Redes Opticas',
    creditos: 4
  },
  {
    name: 'teoria da recursão e computabilidade',
    search: 'Teoria Da Recursao E Computabilidade',
    creditos: 4
  },
  {
    name: 'tópicos em engenharia de produção na indústria química',
    search: 'Topicos Em Engenharia De Producao Na Industria Quimica',
    creditos: 4
  },
  {
    name: 'inovação e desenvolvimento agroindustrial',
    search: 'Inovacao E Desenvolvimento Agroindustrial',
    creditos: 4
  },
  {
    name: "métodos numéricos em edp's",
    search: 'Metodos Numericos Em Edps',
    creditos: 4
  },
  {
    name: 'trabalho de graduação iii em engenharia de energia',
    search: 'Trabalho De Graduacao Iii Em Engenharia De Energia',
    creditos: 2
  },
  {
    name: 'instrumentação em rf e micro-ondas',
    search: 'Instrumentacao Em Rf E Micro Ondas',
    creditos: 4
  },
  {
    name: 'introdução à transferência de calor, massa e movimentação de fluidos.',
    search: 'Introducao A Transferencia De Calor Massa E Movimentacao De Fluidos',
    creditos: 4
  },
  {
    name: 'leitura filosófica de obras de arte',
    search: 'Leitura Filosofica De Obras De Arte',
    creditos: 4
  },
  {
    name: 'práticas de leituras em ciências humanas',
    search: 'Praticas De Leituras Em Ciencias Humanas',
    creditos: 4
  },
  {
    name: 'práticas teatrais como recurso didático',
    search: 'Praticas Teatrais Como Recurso Didatico',
    creditos: 4
  },
  { name: 'psicometria', search: 'Psicometria', creditos: 4 },
  {
    name: 'tópicos de metafísica medieval',
    search: 'Topicos De Metafisica Medieval',
    creditos: 4
  },
  {
    name: 'fundamentos da lógica modal',
    search: 'Fundamentos Da Logica Modal',
    creditos: 4
  },
  {
    name: 'monografia ii em ciências econômicas',
    search: 'Monografia Ii Em Ciencias Economicas',
    creditos: 8
  },
  {
    name: 'monografia iii em ciências econômicas',
    search: 'Monografia Iii Em Ciencias Economicas',
    creditos: 9
  },
  {
    name: 'trabalho de graduação iii em engenharia de materiais',
    search: 'Trabalho De Graduacao Iii Em Engenharia De Materiais',
    creditos: 2
  },
  {
    name: 'termo-hidráulica de reatores nucleares',
    search: 'Termo Hidraulica De Reatores Nucleares',
    creditos: 4
  },
  {
    name: 'introdução ao projeto de dispositivos eletromagnéticos',
    search: 'Introducao Ao Projeto De Dispositivos Eletromagneticos',
    creditos: 5
  },
  {
    name: 'modelagem econômica no século xxi',
    search: 'Modelagem Economica No Seculo Xxi',
    creditos: 4
  },
  {
    name: 'otimização em redes de comunicação',
    search: 'Otimizacao Em Redes De Comunicacao',
    creditos: 4
  },
  {
    name: 'políticas públicas de desenvolvimento sustentável e economia solidária',
    search: 'Politicas Publicas De Desenvolvimento Sustentavel E Economia Solidaria',
    creditos: 4
  },
  {
    name: 'programação de dispositivos móveis',
    search: 'Programacao De Dispositivos Moveis',
    creditos: 2
  },
  {
    name: 'química de macromoléculas biológicas',
    search: 'Quimica De Macromoleculas Biologicas',
    creditos: 8
  },
  {
    name: 'relações internacionais contemporâneas',
    search: 'Relacoes Internacionais Contemporaneas',
    creditos: 4
  },
  {
    name: 'sistemas termosolares',
    search: 'Sistemas Termosolares',
    creditos: 2
  },
  {
    name: 'temas de filosofia moderna ii',
    search: 'Temas De Filosofia Moderna Ii',
    creditos: 4
  },
  {
    name: 'tópicos especiais sobre o sul global',
    search: 'Topicos Especiais Sobre O Sul Global',
    creditos: 4
  },
  {
    name: 'transmissão de energia elétrica em corrente contínua',
    search: 'Transmissao De Energia Eletrica Em Corrente Continua',
    creditos: 4
  },
  {
    name: 'trabalho de graduação i em engenharia aeroespacial',
    search: 'Trabalho De Graduacao I Em Engenharia Aeroespacial',
    creditos: 2
  },
  {
    name: 'trabalho de graduação ii em engenharia biomédica',
    search: 'Trabalho De Graduacao Ii Em Engenharia Biomedica',
    creditos: 2
  },
  {
    name: 'trabalho de graduação ii em engenharia de informação',
    search: 'Trabalho De Graduacao Ii Em Engenharia De Informacao',
    creditos: 2
  },
  {
    name: 'introdução à filosofia da ciência',
    search: 'Introducao A Filosofia Da Ciencia',
    creditos: 4
  },
  {
    name: 'introdução à teoria de homologia',
    search: 'Introducao A Teoria De Homologia',
    creditos: 4
  },
  {
    name: 'metametafísica e metaontologia',
    search: 'Metametafisica E Metaontologia',
    creditos: 4
  },
  {
    name: 'microssimulação de sistemas de transportes',
    search: 'Microssimulacao De Sistemas De Transportes',
    creditos: 2
  },
  {
    name: 'práticas de ensino de história: programas de ensino',
    search: 'Praticas De Ensino De Historia Programas De Ensino',
    creditos: 4
  },
  {
    name: 'práticas extensionistas em políticas públicas ii',
    search: 'Praticas Extensionistas Em Politicas Publicas Ii',
    creditos: 4
  },
  { name: 'projeto de redes', search: 'Projeto De Redes', creditos: 4 },
  { name: 'robótica', search: 'Robotica', creditos: 4 },
  {
    name: 'temas filosóficos em debate',
    search: 'Temas Filosoficos Em Debate',
    creditos: 8
  },
  {
    name: 'teoria da regularidade',
    search: 'Teoria Da Regularidade',
    creditos: 4
  },
  {
    name: 'tópicos em física teórica',
    search: 'Topicos Em Fisica Teorica',
    creditos: 4
  },
  {
    name: 'turbinas e sistemas eólicos de pequeno porte',
    search: 'Turbinas E Sistemas Eolicos De Pequeno Porte',
    creditos: 2
  },
  {
    name: 'neuroarte prática e estética experimental',
    search: 'Neuroarte Pratica E Estetica Experimental',
    creditos: 4
  },
  {
    name: 'estágio curricular em engenharia de energia',
    search: 'Estagio Curricular Em Engenharia De Energia',
    creditos: 14
  },
  {
    name: 'estágio curricular em engenharia de gestão',
    search: 'Estagio Curricular Em Engenharia De Gestao',
    creditos: 14
  },
  {
    name: 'estágio curricular em engenharia de instrumentação, automação e robótica',
    search: 'Estagio Curricular Em Engenharia De Instrumentacao Automacao E Robotica',
    creditos: 14
  },
  {
    name: 'trabalho de conclusão de curso de políticas públicas i',
    search: 'Trabalho De Conclusao De Curso De Politicas Publicas I',
    creditos: 3
  },
  {
    name: 'trabalho de conclusão de curso ii em relações internacionais (tcc 2)',
    search: 'Trabalho De Conclusao De Curso Ii Em Relacoes Internacionais Tcc 2',
    creditos: 2
  },
  {
    name: 'trabalho de graduação i em engenharia ambiental e urbana',
    search: 'Trabalho De Graduacao I Em Engenharia Ambiental E Urbana',
    creditos: 2
  },
  {
    name: 'trabalho de graduação i em engenharia biomédica',
    search: 'Trabalho De Graduacao I Em Engenharia Biomedica',
    creditos: 2
  },
  {
    name: 'trabalho de graduação i em engenharia de energia',
    search: 'Trabalho De Graduacao I Em Engenharia De Energia',
    creditos: 2
  },
  {
    name: 'trabalho de graduação i em engenharia de gestão',
    search: 'Trabalho De Graduacao I Em Engenharia De Gestao',
    creditos: 2
  },
  {
    name: 'trabalho de graduação ii em engenharia de energia',
    search: 'Trabalho De Graduacao Ii Em Engenharia De Energia',
    creditos: 2
  },
  {
    name: 'introdução à ciência de dados e programação',
    search: 'Introducao A Ciencia De Dados E Programacao',
    creditos: 4
  },
  {
    name: 'introdução à engenharia de sistemas aeroespaciais',
    search: 'Introducao A Engenharia De Sistemas Aeroespaciais',
    creditos: 2
  },
  {
    name: 'oficina de relações internacionais',
    search: 'Oficina De Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'orçamento público',
    search: 'Orcamento Publico',
    creditos: 4
  },
  {
    name: 'políticas digitais, dados e gestão algorítmica',
    search: 'Politicas Digitais Dados E Gestao Algoritmica',
    creditos: 4
  },
  {
    name: 'princípios de fisiologia para biotecnologia',
    search: 'Principios De Fisiologia Para Biotecnologia',
    creditos: 6
  },
  {
    name: 'técnicas de análise estrutural',
    search: 'Tecnicas De Analise Estrutural',
    creditos: 4
  },
  { name: 'teoria de corpos', search: 'Teoria De Corpos', creditos: 4 },
  {
    name: 'tópicos de análise de fourier',
    search: 'Topicos De Analise De Fourier',
    creditos: 4
  },
  {
    name: 'seminários em biologia i',
    search: 'Seminarios Em Biologia I',
    creditos: 1
  },
  {
    name: 'teoria e prática da cooperação internacional e da ajuda humanitária',
    search: 'Teoria E Pratica Da Cooperacao Internacional E Da Ajuda Humanitaria',
    creditos: 4
  },
  {
    name: 'trajetória dos investimentos produtivos no brasil e do brasil',
    search: 'Trajetoria Dos Investimentos Produtivos No Brasil E Do Brasil',
    creditos: 4
  },
  {
    name: 'estágio supervisionado em neurociência i',
    search: 'Estagio Supervisionado Em Neurociencia I',
    creditos: 10
  },
  {
    name: 'estágio supervisionado em neurociência ii',
    search: 'Estagio Supervisionado Em Neurociencia Ii',
    creditos: 10
  },
  {
    name: 'trabalho de graduação ii em engenharia aeroespacial',
    search: 'Trabalho De Graduacao Ii Em Engenharia Aeroespacial',
    creditos: 2
  },
  {
    name: 'tcc de relações internacionais ii',
    search: 'Tcc De Relacoes Internacionais Ii',
    creditos: 2
  },
  {
    name: 'introdução à biomecânica do contínuo',
    search: 'Introducao A Biomecanica Do Continuo',
    creditos: 4
  },
  {
    name: 'introdução à geometria riemanniana',
    search: 'Introducao A Geometria Riemanniana',
    creditos: 4
  },
  {
    name: 'laboratório de engenharia solar fotovoltaica',
    search: 'Laboratorio De Engenharia Solar Fotovoltaica',
    creditos: 4
  },
  { name: 'língua latina ii', search: 'Lingua Latina Ii', creditos: 4 },
  {
    name: 'lógica e os fundamentos da matemática',
    search: 'Logica E Os Fundamentos Da Matematica',
    creditos: 4
  },
  {
    name: 'metateoremas da lógica clássica',
    search: 'Metateoremas Da Logica Classica',
    creditos: 4
  },
  {
    name: 'práticas de ensino de física no ensino fundamental ii',
    search: 'Praticas De Ensino De Fisica No Ensino Fundamental Ii',
    creditos: 4
  },
  {
    name: 'conexões e fibrados',
    search: 'Conexoes E Fibrados',
    creditos: 4
  },
  {
    name: 'perspectiva de análise do estado e das políticas públicas',
    search: 'Perspectiva De Analise Do Estado E Das Politicas Publicas',
    creditos: 4
  },
  {
    name: 'estágio supervisionado em neurociência iii',
    search: 'Estagio Supervisionado Em Neurociencia Iii',
    creditos: 6
  },
  {
    name: 'história da linguagem',
    search: 'Historia Da Linguagem',
    creditos: 4
  },
  {
    name: 'história social da tecnologia na américa latina',
    search: 'Historia Social Da Tecnologia Na America Latina',
    creditos: 4
  },
  {
    name: 'tópicos de lógicas não-clássicas',
    search: 'Topicos De Logicas Nao Classicas',
    creditos: 4
  },
  {
    name: 'trabalho de conclusão de curso ii de planejamento territorial',
    search: 'Trabalho De Conclusao De Curso Ii De Planejamento Territorial',
    creditos: 2
  },
  {
    name: 'trabalho de graduação i em engenharia de informação',
    search: 'Trabalho De Graduacao I Em Engenharia De Informacao',
    creditos: 2
  },
  {
    name: 'trabalho de graduação i em engenharia de instrumentação, automação e robótica',
    search: 'Trabalho De Graduacao I Em Engenharia De Instrumentacao Automacao E Robotica',
    creditos: 2
  },
  {
    name: 'trabalho de graduação iii em engenharia de informação',
    search: 'Trabalho De Graduacao Iii Em Engenharia De Informacao',
    creditos: 2
  },
  {
    name: 'tcc de relações internacionais i',
    search: 'Tcc De Relacoes Internacionais I',
    creditos: 2
  },
  {
    name: 'interações da radiação com a matéria',
    search: 'Interacoes Da Radiacao Com A Materia',
    creditos: 4
  },
  {
    name: 'introdução à prospecção tecnológica',
    search: 'Introducao A Prospeccao Tecnologica',
    creditos: 4
  },
  {
    name: 'mecânica quântica iv',
    search: 'Mecanica Quantica Iv',
    creditos: 4
  },
  {
    name: 'pedagogias feministas',
    search: 'Pedagogias Feministas',
    creditos: 4
  },
  {
    name: 'planejamento de redes de informação',
    search: 'Planejamento De Redes De Informacao',
    creditos: 4
  },
  {
    name: 'poder legislativo e processo decisório',
    search: 'Poder Legislativo E Processo Decisorio',
    creditos: 4
  },
  {
    name: 'políticas de segurança pública e violência',
    search: 'Politicas De Seguranca Publica E Violencia',
    creditos: 4
  },
  {
    name: 'práticas de ensino de geografia: programas de ensino',
    search: 'Praticas De Ensino De Geografia Programas De Ensino',
    creditos: 4
  },
  {
    name: 'práticas em química analítica',
    search: 'Praticas Em Quimica Analitica',
    creditos: 4
  },
  {
    name: 'projeto interdisciplinar',
    search: 'Projeto Interdisciplinar',
    creditos: 4
  },
  {
    name: 'temas de filosofia medieval ii',
    search: 'Temas De Filosofia Medieval Ii',
    creditos: 4
  },
  {
    name: 'teoria e prática da cooperação internacional',
    search: 'Teoria E Pratica Da Cooperacao Internacional',
    creditos: 4
  },
  {
    name: 'tópicos de pesquisa em ensino de filosofia',
    search: 'Topicos De Pesquisa Em Ensino De Filosofia',
    creditos: 4
  },
  {
    name: 'tópicos em teoria do conhecimento',
    search: 'Topicos Em Teoria Do Conhecimento',
    creditos: 4
  },
  {
    name: 'tópicos em topologia geral',
    search: 'Topicos Em Topologia Geral',
    creditos: 4
  },
  {
    name: 'tópicos especiais em direito internacional, multilateralismo e direitos humanos',
    search: 'Topicos Especiais Em Direito Internacional Multilateralismo E Direitos Humanos',
    creditos: 4
  },
  {
    name: 'consolidação de conceitos e métodos de interações atômicas e moleculares',
    search: 'Consolidacao De Conceitos E Metodos De Interacoes Atomicas E Moleculares',
    creditos: 2
  },
  {
    name: 'perspectivas analíticas sobre burocracia',
    search: 'Perspectivas Analiticas Sobre Burocracia',
    creditos: 4
  },
  {
    name: 'seminários em biologia ii',
    search: 'Seminarios Em Biologia Ii',
    creditos: 1
  },
  {
    name: 'estágio curricular em engenharia de materiais',
    search: 'Estagio Curricular Em Engenharia De Materiais',
    creditos: 14
  },
  {
    name: 'trabalho de conclusão de curso de políticas públicas ii',
    search: 'Trabalho De Conclusao De Curso De Politicas Publicas Ii',
    creditos: 3
  },
  {
    name: 'trabalho de conclusão de curso de relações internacionais ii',
    search: 'Trabalho De Conclusao De Curso De Relacoes Internacionais Ii',
    creditos: 2
  },
  {
    name: 'trabalho de graduação ii em ciências econômicas',
    search: 'Trabalho De Graduacao Ii Em Ciencias Economicas',
    creditos: 9
  },
  {
    name: 'trabalho de graduação ii em engenharia de gestão',
    search: 'Trabalho De Graduacao Ii Em Engenharia De Gestao',
    creditos: 2
  },
  {
    name: 'trabalho de graduação ii em engenharia de materiais',
    search: 'Trabalho De Graduacao Ii Em Engenharia De Materiais',
    creditos: 2
  },
  {
    name: 'trabalho de graduação iii em engenharia aeroespacial',
    search: 'Trabalho De Graduacao Iii Em Engenharia Aeroespacial',
    creditos: 2
  },
  {
    name: 'trabalho de graduação iii em engenharia ambiental e urbana',
    search: 'Trabalho De Graduacao Iii Em Engenharia Ambiental E Urbana',
    creditos: 2
  },
  {
    name: 'de mercosul , unasul à celac',
    search: 'De Mercosul Unasul A Celac',
    creditos: 4
  },
  {
    name: 'introdução aos processos estocásticos',
    search: 'Introducao Aos Processos Estocasticos',
    creditos: 4
  },
  { name: 'língua latina i', search: 'Lingua Latina I', creditos: 4 },
  {
    name: 'morfofisiologia vegetal',
    search: 'Morfofisiologia Vegetal',
    creditos: 4
  },
  { name: 'percolação', search: 'Percolacao', creditos: 4 },
  {
    name: 'políticas públicas de juventude',
    search: 'Politicas Publicas De Juventude',
    creditos: 4
  },
  {
    name: 'práticas extensionistas em políticas públicas',
    search: 'Praticas Extensionistas Em Politicas Publicas',
    creditos: 4
  },
  {
    name: 'programação segura',
    search: 'Programacao Segura',
    creditos: 4
  },
  {
    name: 'temas de filosofia antiga',
    search: 'Temas De Filosofia Antiga',
    creditos: 4
  },
  {
    name: 'teoria das distribuições',
    search: 'Teoria Das Distribuicoes',
    creditos: 4
  },
  {
    name: 'tópicos em engenharia de produção na indústria têxtil',
    search: 'Topicos Em Engenharia De Producao Na Industria Textil',
    creditos: 4
  },
  {
    name: 'tópicos especiais em métodos e técnicas para o planejamento territorial',
    search: 'Topicos Especiais Em Metodos E Tecnicas Para O Planejamento Territorial',
    creditos: 4
  },
  {
    name: 'materiais e tecnologias de conversão fotovoltaica',
    search: 'Materiais E Tecnologias De Conversao Fotovoltaica',
    creditos: 2
  },
  {
    name: 'métodos numéricos em edo’s',
    search: 'Metodos Numericos Em Edos',
    creditos: 4
  },
  {
    name: 'trabalho de conclusão de curso de relações internacionais i',
    search: 'Trabalho De Conclusao De Curso De Relacoes Internacionais I',
    creditos: 2
  },
  {
    name: 'trabalho de graduação iii em engenharia biomédica',
    search: 'Trabalho De Graduacao Iii Em Engenharia Biomedica',
    creditos: 2
  },
  {
    name: 'trabalho de conclusão de curso iii em relações internacionais (tcc 3)',
    search: 'Trabalho De Conclusao De Curso Iii Em Relacoes Internacionais Tcc 3',
    creditos: 2
  },
  {
    name: 'linguagens formais e autômatos',
    search: 'Linguagens Formais E Automatos',
    creditos: 4
  },
  {
    name: 'introdução aos letramentos em inglês',
    search: 'Introducao Aos Letramentos Em Ingles',
    creditos: 4
  },
  {
    name: 'matemática discreta ii',
    search: 'Matematica Discreta Ii',
    creditos: 4
  },
  {
    name: 'oficina de pesquisa em filosofia i',
    search: 'Oficina De Pesquisa Em Filosofia I',
    creditos: 2
  },
  {
    name: 'robótica e sistemas inteligentes',
    search: 'Robotica E Sistemas Inteligentes',
    creditos: 4
  },
  {
    name: 'robótica educacional',
    search: 'Robotica Educacional',
    creditos: 4
  },
  {
    name: 'teorias contemporâneas das relações internacionais',
    search: 'Teorias Contemporaneas Das Relacoes Internacionais',
    creditos: 4
  },
  {
    name: 'tópicos avançados em economia e planejamento territorial',
    search: 'Topicos Avancados Em Economia E Planejamento Territorial',
    creditos: 4
  },
  {
    name: 'tópicos em engenharia de produção na indústria de alimentos',
    search: 'Topicos Em Engenharia De Producao Na Industria De Alimentos',
    creditos: 4
  },
  {
    name: 'tópicos especiais em economia política internacional',
    search: 'Topicos Especiais Em Economia Politica Internacional',
    creditos: 4
  },
  {
    name: 'vizualização de dados e informações',
    search: 'Vizualizacao De Dados E Informacoes',
    creditos: 4
  },
  {
    name: 'zoologia: origem e diversificação de metazoa',
    search: 'Zoologia Origem E Diversificacao De Metazoa',
    creditos: 6
  },
  {
    name: 'estágio curricular em engenharia ambiental e urbana',
    search: 'Estagio Curricular Em Engenharia Ambiental E Urbana',
    creditos: 14
  },
  {
    name: 'métodos numéricos para edps',
    search: 'Metodos Numericos Para Edps',
    creditos: 4
  },
  {
    name: 'microeconomia: problemas avançados e técnicas de resolução',
    search: 'Microeconomia Problemas Avancados E Tecnicas De Resolucao',
    creditos: 4
  },
  {
    name: 'programação funcional',
    search: 'Programacao Funcional',
    creditos: 4
  },
  {
    name: 'teoria de módulos',
    search: 'Teoria De Modulos',
    creditos: 4
  },
  {
    name: 'tópicos avançados de ciências e humanidades',
    search: 'Topicos Avancados De Ciencias E Humanidades',
    creditos: 4
  },
  {
    name: 'tópicos experimentais em materiais ii',
    search: 'Topicos Experimentais Em Materiais Ii',
    creditos: 4
  },
  {
    name: 'turbinas hidráulicas',
    search: 'Turbinas Hidraulicas',
    creditos: 4
  },
  {
    name: 'ventilação industrial e ar comprimido',
    search: 'Ventilacao Industrial E Ar Comprimido',
    creditos: 2
  },
  {
    name: 'ventiladores industriais',
    search: 'Ventiladores Industriais',
    creditos: 4
  },
  {
    name: 'pesquisa em filosofia',
    search: 'Pesquisa Em Filosofia',
    creditos: 4
  },
  {
    name: 'trabalho de conclusão de curso iii em relações internacionais',
    search: 'Trabalho De Conclusao De Curso Iii Em Relacoes Internacionais',
    creditos: 2
  },
  {
    name: 'trabalho de graduação i em ciências econômicas',
    search: 'Trabalho De Graduacao I Em Ciencias Economicas',
    creditos: 8
  },
  {
    name: 'trabalho de graduação i em engenharia de materiais',
    search: 'Trabalho De Graduacao I Em Engenharia De Materiais',
    creditos: 2
  },
  {
    name: 'trabalho de graduação ii em engenharia de instrumentação, automação e robótica',
    search: 'Trabalho De Graduacao Ii Em Engenharia De Instrumentacao Automacao E Robotica',
    creditos: 2
  },
  {
    name: 'fundamentos de zoologia dos invertebrados',
    search: 'Fundamentos De Zoologia Dos Invertebrados',
    creditos: 6
  },
  {
    name: 'linguagens formais e autômata',
    search: 'Linguagens Formais E Automata',
    creditos: 4
  }
]);
