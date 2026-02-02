import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/contexts/PageTransitionContext";

// Property Components
import PropertyHero from "@/components/property/PropertyHero";
import PropertyOverview from "@/components/property/PropertyOverview";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import PropertyLocation from "@/components/property/PropertyLocation";
import InvestmentAnalysis from "@/components/property/InvestmentAnalysis";
import AgentContact from "@/components/property/AgentContact";

// Assets
import property3 from "@/assets/property-3.jpg";
import terrenoAsaSul1 from "@/assets/terreno-asa-sul-1.jpg";
import terrenoAsaSul2 from "@/assets/terreno-asa-sul-2.jpg";
import terrenoAsaSul3 from "@/assets/terreno-asa-sul-3.jpg";
import predioAdolfo1 from "@/assets/predio-adolfo-moitinho-1.jpg";
import predioAdolfo2 from "@/assets/predio-adolfo-moitinho-2.jpg";
import predioAdolfo3 from "@/assets/predio-adolfo-moitinho-3.jpg";
import terrenoGreenville1 from "@/assets/terreno-greenville-1.jpg";
import terrenoGreenville2 from "@/assets/terreno-greenville-2.jpg";
import terrenoGreenville3 from "@/assets/terreno-greenville-3.jpg";
import terrenoGreenville4 from "@/assets/terreno-greenville-4.jpg";
import terrenoGreenville5 from "@/assets/terreno-greenville-5.jpg";
import terrenoGreenville6 from "@/assets/terreno-greenville-6.jpg";
import terrenoGreenville7 from "@/assets/terreno-greenville-7.jpg";
import terrenoGreenville8 from "@/assets/terreno-greenville-8.jpg";
import terrenoGreenville9 from "@/assets/terreno-greenville-9.jpg";
import terrenoSaoGabriel1 from "@/assets/terreno-sao-gabriel-1.jpg";
import terrenoSaoGabriel2 from "@/assets/terreno-sao-gabriel-2.jpg";
import terrenoSaoGabriel3 from "@/assets/terreno-sao-gabriel-3.jpg";
import terrenoSaoGabriel4 from "@/assets/terreno-sao-gabriel-4.jpg";
import casaDonaMarta1 from "@/assets/casa-dona-marta-1.jpg";
import casaDonaMarta2 from "@/assets/casa-dona-marta-2.jpg";
import casaDonaMarta3 from "@/assets/casa-dona-marta-3.jpg";
import casaDonaMarta4 from "@/assets/casa-dona-marta-4.jpg";
import casaDonaMarta5 from "@/assets/casa-dona-marta-5.jpg";
import casaDonaMarta6 from "@/assets/casa-dona-marta-6.jpg";
import casaDonaMarta7 from "@/assets/casa-dona-marta-7.jpg";
import casaDonaMarta8 from "@/assets/casa-dona-marta-8.jpg";
import casaDonaMarta9 from "@/assets/casa-dona-marta-9.jpg";
import casaDonaMarta10 from "@/assets/casa-dona-marta-10.jpg";
import casaDonaMarta11 from "@/assets/casa-dona-marta-11.jpg";
import casaDonaMarta12 from "@/assets/casa-dona-marta-12.jpg";
import casaDonaMarta13 from "@/assets/casa-dona-marta-13.jpg";
import casaDonaMarta14 from "@/assets/casa-dona-marta-14.jpg";
import casaDonaMarta15 from "@/assets/casa-dona-marta-15.jpg";
import casaDonaMarta16 from "@/assets/casa-dona-marta-16.jpg";
import casaDonaMarta17 from "@/assets/casa-dona-marta-17.jpg";
import casaDonaMarta18 from "@/assets/casa-dona-marta-18.jpg";
import casaDonaMarta19 from "@/assets/casa-dona-marta-19.jpg";
import casaDonaMarta20 from "@/assets/casa-dona-marta-20.jpg";
import terrenoAltoMoura1 from "@/assets/terreno-alto-moura-1.jpg";
import logo from "@/assets/logo-joile-barreto.png";

const properties = [
  {
    id: 1,
    image: predioAdolfo1,
    images: [predioAdolfo1, predioAdolfo2, predioAdolfo3],
    title: "Prédio Comercial Av. Adolfo Moitinho",
    location: "Av. Adolfo Moitinho, Centro, Irecê, Bahia",
    area: "416m²",
    category: "Prédio Comercial",
    description: "Oportunidade de investimento no epicentro comercial de Irecê! Sobrado/prédio com 416m² de área construída em 3 pavimentos. Localização privilegiada na via de maior fluxo da cidade.",
    fullDescription: "Esta é a sua chance de adquirir um imóvel no epicentro comercial de Irecê! Apresentamos este sobrado/prédio comercial estrategicamente localizado na Avenida Adolfo Moitinho, a via de maior fluxo de pessoas e negócios da cidade. Com uma fachada de 6,40 metros e um terreno de 138,88m², o imóvel conta com 416,64m² de área construída, distribuídos em três pavimentos.\n\nA maior vantagem deste imóvel é sua incrível versatilidade. A estrutura robusta e a localização permitem uma transformação para uso misto, maximizando seu potencial de rentabilidade: Térreo Comercial perfeito para loja âncora, farmácia, clínica ou escritório de grande visibilidade. Andares Superiores ideais para apartamentos modernos (altamente procurados para locação no centro) ou salas comerciais.\n\nCom um valor atrativo pela metragem e localização, este sobrado não é apenas um imóvel, é um investimento com retorno garantido.",
    features: ["Uso Misto (Comercial/Residencial)", "3 Pavimentos", "Fachada 6,40m", "Térreo Comercial", "Andares p/ Apartamentos", "Alta Visibilidade", "Próximo ao Hospital", "Próximo à Rodoviária", "Próximo à Av. 1º de Janeiro", "Cercado de Bancos e Lojas"],
    price: "R$ 2.530.000",
    priceNumber: 2530000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    // Building-specific properties
    floors: 3,
    facadeWidth: "6,40m",
    landArea: "138,88m²",
    builtArea: "416,64m²",
    pricePerM2: "R$ 6.000",
    avgPricePerM2: "R$ 7.000",
    walkScore: 98,
    coordinates: "11.3039° S, 41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://maps.app.goo.gl/irece",
    nearbyPlaces: [
      { icon: "hospital", name: "Hospital", distance: "2 min a pé" },
      { icon: "bus", name: "Rodoviária", distance: "3 min a pé" },
      { icon: "market", name: "Av. 1º de Janeiro", distance: "1 min a pé" },
      { icon: "bank", name: "Bancos e Serviços", distance: "No local" },
    ],
  },
  {
    id: 2,
    image: terrenoGreenville1,
    images: [terrenoGreenville1, terrenoGreenville2, terrenoGreenville3, terrenoGreenville4, terrenoGreenville5, terrenoGreenville6, terrenoGreenville7, terrenoGreenville8, terrenoGreenville9],
    title: "Terreno Condomínio Green Ville",
    location: "Condomínio Residencial Green Ville, Irecê, Bahia",
    area: "200m²",
    category: "Terreno",
    description: "Terreno privilegiado nas primeiras quadras do condomínio. Piscina, churrasqueira, parquinhos e segurança 24h. Próximo à BA-052.",
    fullDescription: "Apresentamos uma oportunidade imperdível de adquirir um terreno privilegiado no Condomínio Residencial Green Ville. Com dimensões ideais de 10 metros de frente por 20 metros de fundo, totalizando 200 m², este terreno oferece o espaço perfeito para você tirar do papel o projeto da sua casa.\n\nA localização é um dos grandes diferenciais: situado em uma das primeiras quadras do condomínio, garantindo facilidade de acesso e proximidade com a portaria e as principais áreas de lazer.\n\nO Condomínio foi cuidadosamente planejado com infraestrutura completa: piscina refrescante, churrasqueira ideal para confraternizações, e parquinhos seguros para as crianças. Com portaria e controle de acesso, você e sua família desfrutarão de total tranquilidade e privacidade.\n\nSituado próximo à BA-052, uma das principais vias da região, o Green Ville permite fácil e rápido deslocamento para o centro de Irecê e outras cidades próximas. Irecê é uma cidade em constante crescimento, com um mercado imobiliário aquecido e um potencial de valorização que não para de crescer.",
    features: ["Condomínio Fechado", "Piscina", "Churrasqueira", "Parquinhos", "Portaria 24h", "Controle de Acesso", "Primeiras Quadras", "Próximo à BA-052", "Infraestrutura Completa", "Documentação OK"],
    price: "R$ 85.000",
    priceNumber: 85000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    // Land-specific properties
    dimensions: "10x20m",
    fronts: 1,
    hasInfrastructure: true,
    hasDocumentation: true,
    isGatedCommunity: true,
    pricePerM2: "R$ 425",
    avgPricePerM2: "R$ 500",
    walkScore: 75,
    coordinates: "11.3039° S, 41.8559° W",
    latitude: -11.3050,
    longitude: -41.8700,
    mapsUrl: "https://www.google.com/maps/@-11.3050,-41.8700,17z",
    nearbyPlaces: [
      { icon: "market", name: "BA-052", distance: "2 min de carro" },
      { icon: "school", name: "Centro de Irecê", distance: "5 min de carro" },
      { icon: "hospital", name: "Área de Lazer", distance: "No condomínio" },
      { icon: "bank", name: "Portaria 24h", distance: "No local" },
    ],
  },
  {
    id: 3,
    image: property3,
    title: "Terreno Vila Nova",
    location: "Bairro Vila Nova, Irecê",
    area: "360m²",
    category: "Terreno",
    description: "Oportunidade única de construir a casa dos seus sonhos em Irecê. Terreno plano em área valorizada com infraestrutura completa.",
    fullDescription: "Este terreno de 360m² está localizado em uma área residencial em pleno crescimento. Topografia plana, ideal para projetos arquitetônicos. Próximo a comércios, escolas e com fácil acesso às principais vias da cidade. Infraestrutura completa com água, luz e esgoto.",
    features: ["Topografia Plana", "Área Residencial", "Infraestrutura Completa", "Documentação OK", "Próximo ao Comércio", "Fácil Acesso"],
    price: "R$ 120.000",
    priceNumber: 120000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    pricePerM2: "R$ 333",
    avgPricePerM2: "R$ 400",
    walkScore: 70,
    coordinates: "11.3039° S, 41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://maps.app.goo.gl/irece",
    nearbyPlaces: [
      { icon: "school", name: "Escola Municipal", distance: "10 min a pé" },
      { icon: "market", name: "Comércio Local", distance: "5 min a pé" },
      { icon: "metro", name: "Centro de Irecê", distance: "8 min de carro" },
    ],
  },
  {
    id: 4,
    image: terrenoAsaSul1,
    images: [terrenoAsaSul1, terrenoAsaSul2, terrenoAsaSul3],
    title: "Terreno Asa Sul com Duas Frentes",
    location: "128 Rua Rio Tapajós, Asa Sul, Irecê, Bahia",
    area: "210m²",
    category: "Terreno",
    description: "Oportunidade única no Asa Sul! Terreno 7x30m com acesso duplo (duas frentes), ideal para casa ou comércio. Localização estratégica próxima à UPA, Faculdade FAI e Av. 1º de Janeiro.",
    fullDescription: "Você encontrou o terreno perfeito para construir ou investir em Irecê! Este lote excepcional no Bairro Asa Sul, uma das áreas de maior valorização da cidade, possui dimensões ideais de 7 metros de frente por 30 metros de comprimento. O grande diferencial: vai de uma rua a outra, oferecendo acesso duplo! Construa a casa dos seus sonhos com fachada imponente e área de lazer nos fundos, ou desenvolva um projeto comercial/misto aproveitando o fluxo das duas vias. A localização combina tranquilidade residencial com conveniência total.",
    features: ["Acesso Duplo (Duas Frentes)", "7x30m (210m²)", "Alta Valorização", "Próximo à UPA", "Próximo à Faculdade FAI", "Próximo ao Colégio Cometa", "Próximo à Av. 1º de Janeiro", "Ideal para Casa ou Comércio", "Documentação OK", "Infraestrutura Completa"],
    price: "R$ 280.000",
    priceNumber: 280000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    dimensions: "7x30m",
    fronts: 2,
    hasInfrastructure: true,
    hasDocumentation: true,
    pricePerM2: "R$ 1.333",
    avgPricePerM2: "R$ 1.500",
    walkScore: 92,
    coordinates: "11.3039° S, 41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://maps.app.goo.gl/pUngTUbG9wmc27cd6",
    nearbyPlaces: [
      { icon: "hospital", name: "UPA Irecê", distance: "3 min a pé" },
      { icon: "school", name: "Faculdade FAI", distance: "2 min a pé" },
      { icon: "school", name: "Colégio Cometa", distance: "3 min a pé" },
      { icon: "market", name: "Av. 1º de Janeiro", distance: "5 min a pé" },
    ],
  },
  {
    id: 5,
    image: terrenoSaoGabriel1,
    images: [terrenoSaoGabriel1, terrenoSaoGabriel2, terrenoSaoGabriel3, terrenoSaoGabriel4],
    title: "Lote Loteamento Caboré",
    location: "Lote 20, Rua Cantionílio Alves Durães, Loteamento Caboré, São Gabriel, Bahia",
    area: "200m²",
    category: "Terreno",
    description: "Investimento inteligente em São Gabriel/BA! Lote de 200m² (10x20m) em localização estratégica: ao lado do novo Colégio de Tempo Integral e da entrada principal da cidade. Potencial de valorização garantido.",
    fullDescription: "Pronto para fazer um investimento inteligente? Apresentamos a você uma oportunidade imperdível na cidade de São Gabriel, Bahia! Este é o momento ideal para adquirir um lote em uma localização estratégica, que oferece não apenas um espaço para construir, mas um caminho para a valorização.\n\nEste lote de 200 m², com generosas dimensões de 10 metros de frente por 20 metros de fundo, é o alicerce perfeito para o seu próximo projeto, seja ele a construção de sua casa, um comércio promissor ou um investimento com retorno garantido.\n\nSua localização é um dos pontos mais fortes: o loteamento está situado atrás do novo Colégio de Tempo Integral que está em construção. Imagine o fluxo de pessoas e o potencial de valorização que a proximidade com uma instituição de ensino moderna trará para a região. Escolas são âncoras de desenvolvimento, e ter um imóvel tão próximo significa estar no caminho do crescimento.\n\nAlém de estar ao lado do futuro colégio, o loteamento se beneficia de sua posição ao lado da entrada principal da cidade de São Gabriel. Essa característica é um diferencial enorme, pois garante fácil acesso para quem chega e sai da cidade, além de uma visibilidade que impulsiona o valor do seu investimento.\n\nEste não é apenas mais um lote à venda; trata-se de um ótimo investimento, pois está bem precificado, dentro da realidade de mercado. A chegada do novo Colégio Integral e o desenvolvimento urbano ao redor da entrada da cidade são indicadores claros de uma expansão que trará valorização imobiliária.",
    features: ["10x20m (200m²)", "Próximo ao Colégio Integral", "Entrada Principal da Cidade", "Alta Visibilidade", "Potencial de Valorização", "Ideal para Casa ou Comércio", "Documentação OK", "Infraestrutura em Expansão", "Fácil Acesso", "Preço Justo"],
    price: "R$ 25.000",
    priceNumber: 25000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    dimensions: "10x20m",
    fronts: 1,
    hasInfrastructure: true,
    hasDocumentation: true,
    pricePerM2: "R$ 125",
    avgPricePerM2: "R$ 150",
    walkScore: 85,
    coordinates: "-11.2286° S, -41.9164° W",
    latitude: -11.2286,
    longitude: -41.9164,
    mapsUrl: "https://maps.app.goo.gl/sao-gabriel-ba",
    nearbyPlaces: [
      { icon: "school", name: "Colégio Integral (em construção)", distance: "Ao lado" },
      { icon: "market", name: "Entrada Principal", distance: "Ao lado" },
      { icon: "bus", name: "Centro de São Gabriel", distance: "5 min de carro" },
      { icon: "hospital", name: "Serviços Essenciais", distance: "Próximo" },
    ],
  },
  {
    id: 6,
    image: casaDonaMarta1,
    images: [casaDonaMarta1, casaDonaMarta2, casaDonaMarta3, casaDonaMarta4, casaDonaMarta5, casaDonaMarta6, casaDonaMarta7, casaDonaMarta8, casaDonaMarta9, casaDonaMarta10, casaDonaMarta11, casaDonaMarta12, casaDonaMarta13, casaDonaMarta14, casaDonaMarta15, casaDonaMarta16, casaDonaMarta17, casaDonaMarta18, casaDonaMarta19, casaDonaMarta20],
    title: "Casa de Alto Padrão Condomínio Dona Marta",
    location: "Condomínio Dona Marta, Irecê, Bahia",
    area: "600m²",
    category: "Casa",
    description: "Exclusiva casa de alto padrão no Condomínio Dona Marta, Irecê/BA. Com 600 m², oferece 5 quartos (2 suítes), 4 banheiros e 3 cozinhas. Desfrute da piscina, amplo espaço gourmet e sacada panorâmica. Viva o luxo, conforto e lazer em um dos condomínios mais valorizados da cidade.",
    fullDescription: "Um oásis de luxo e exclusividade espera por você no Condomínio Dona Marta, em Irecê/Bahia. Esta magnífica residência de alto padrão, com uma área total de 600 m², é a personificação do conforto, da sofisticação e do lazer, projetada para atender aos mais exigentes padrões de vida. Desde o momento em que você cruza seus portões, é envolvido por uma atmosfera de requinte e tranquilidade, onde cada detalhe foi meticulosamente planejado para oferecer uma experiência de moradia inigualável.\n\nA arquitetura imponente e o design contemporâneo desta casa se harmonizam perfeitamente com a paisagem do condomínio, criando um visual deslumbrante que se destaca pela elegância.\n\nCom cinco quartos espaçosos, sendo duas suítes primorosas, esta casa oferece o refúgio perfeito para cada membro da família. As suítes são projetadas para o máximo relaxamento, com acabamentos de alta qualidade, armários planejados e banheiros com funcionalidade. Os outros quartos, igualmente confortáveis, são ideais para crianças, hóspedes ou até mesmo para a criação de um escritório, adaptando-se às suas necessidades. Os quatro banheiros, distribuídos estrategicamente pela casa, seguem o mesmo padrão de excelência.\n\nA vida social e gastronômica encontra seu ápice nesta residência, que dispõe de três cozinhas independentes, cada uma com sua personalidade e funcionalidade. A cozinha principal, equipada com bancadas amplas, armários planejados e espaço de sobra. As outras duas cozinhas oferecem flexibilidade, seja para refeições rápidas, para o preparo de churrascos no espaço gourmet, ou para atender a eventos maiores sem comprometer a organização da casa. Essa versatilidade é um diferencial que eleva a experiência de morar e receber.\n\nA piscina, um verdadeiro cartão-postal, é o coração da diversão, perfeita para refrescar-se nos dias quentes de Irecê ou para momentos de descontração com a família e amigos. Ao lado da piscina, o espaço gourmet amplo é um convite para celebrações.\n\nNo andar superior, a sacada ampla é um dos pontos altos da casa. Com vistas panorâmicas do condomínio, é o local ideal para desfrutar do nascer ou pôr do sol, para um café da manhã tranquilo ou para relaxar ao final do dia.\n\nLocalizada no Condomínio Dona Marta, um dos mais valorizados de Irecê, esta casa oferece não apenas uma moradia, mas um estilo de vida. O condomínio proporciona infraestrutura completa e um ambiente familiar, com áreas verdes e espaços para lazer e caminhadas, garantindo tranquilidade e bem-estar para toda a família.\n\nEsta é uma oportunidade única de adquirir uma propriedade que une luxo, conforto e funcionalidade. Um investimento no seu bem-estar e na qualidade de vida da sua família, esta casa está pronta para ser o seu novo lar, onde cada dia será uma celebração.",
    features: ["Alto Padrão", "5 Quartos (2 Suítes)", "4 Banheiros", "3 Cozinhas", "Piscina", "Espaço Gourmet", "Sacada Panorâmica", "Armários Planejados", "Design Contemporâneo", "Condomínio Fechado", "Áreas Verdes", "Infraestrutura Completa"],
    price: "R$ 1.350.000",
    priceNumber: 1350000,
    bedrooms: 5,
    bathrooms: 4,
    parking: 2,
    builtArea: "600m²",
    isGatedCommunity: true,
    pricePerM2: "R$ 2.250",
    avgPricePerM2: "R$ 2.500",
    walkScore: 80,
    coordinates: "11.3039° S, 41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://maps.app.goo.gl/irece",
    nearbyPlaces: [
      { icon: "market", name: "Centro de Irecê", distance: "10 min de carro" },
      { icon: "hospital", name: "Área de Lazer", distance: "No condomínio" },
      { icon: "bank", name: "Portaria 24h", distance: "No local" },
      { icon: "school", name: "Áreas Verdes", distance: "No condomínio" },
    ],
  },
  {
    id: 7,
    image: terrenoAltoMoura1,
    images: [terrenoAltoMoura1],
    title: "Terreno Alto do Moura",
    location: "Rua Santa Catarina, S/N, Alto do Moura, Irecê, Bahia",
    area: "375m²",
    category: "Terreno",
    description: "Terreno residencial de 375m² no Alto do Moura em Irecê, Bahia. Área tranquila, com acesso a escolas, comércio e serviços. O terreno oferece amplo espaço para construção.",
    fullDescription: "Oportunidade de adquirir um terreno residencial desocupado, localizado no Alto do Moura, Irecê, Bahia. Com um espaço total de 375 m², este terreno está localizado na Rua Santa Catarina e oferece um excelente potencial para a realização do seu projeto.\n\nO Alto do Moura é conhecido por sua tranquilidade e ambiente residencial. Situado numa área em crescimento, assegura valorização ao longo do tempo. Com fácil acesso a escolas, comércio local, e serviços essenciais, o terreno é ideal para quem busca qualidade de vida.\n\nSeu tamanho de 375 m² possibilita várias opções de construção, seja a casa dos seus sonhos, um projeto comercial ou investimento para o futuro.\n\nNão perca essa chance! Entre em contato para mais detalhes e agende uma visita ao local.",
    features: ["375m² de Área", "Área Tranquila", "Em Valorização", "Fácil Acesso", "Próximo a Escolas", "Próximo ao Comércio", "Serviços Essenciais", "Ambiente Residencial", "Documentação OK", "Desocupado"],
    price: "R$ 210.000",
    priceNumber: 210000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    hasInfrastructure: true,
    hasDocumentation: true,
    pricePerM2: "R$ 560",
    avgPricePerM2: "R$ 650",
    walkScore: 78,
    coordinates: "-11.3039° S, -41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://maps.app.goo.gl/irece",
    nearbyPlaces: [
      { icon: "school", name: "Escolas Locais", distance: "Próximo" },
      { icon: "market", name: "Comércio Local", distance: "Próximo" },
      { icon: "hospital", name: "Serviços Essenciais", distance: "Fácil Acesso" },
      { icon: "bank", name: "Centro de Irecê", distance: "10 min de carro" },
    ],
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { transitionData, endTransition, isTransitioning, clearTransition } = usePageTransition();
  const [animationPhase, setAnimationPhase] = useState<"initial" | "animating" | "complete">("initial");
  
  const property = properties.find((p) => p.id === Number(id));

  // Clear transition on unmount (when navigating back)
  useEffect(() => {
    return () => {
      clearTransition();
    };
  }, [clearTransition]);

  // Handle the page entry animation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    if (transitionData?.rect && isTransitioning) {
      // Start animation immediately
      setAnimationPhase("animating");
      
      // Complete animation after transition
      const timer = setTimeout(() => {
        setAnimationPhase("complete");
        endTransition();
      }, 600);
      
      return () => clearTimeout(timer);
    } else {
      // No transition data, show immediately
      setAnimationPhase("complete");
    }
  }, [id, transitionData, isTransitioning, endTransition]);

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-semibold text-foreground mb-4">Imóvel não encontrado</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Voltar para o início
          </Button>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse no imóvel: ${property.title} - ${property.location}`);
  const whatsappLink = `https://wa.me/5574999999999?text=${whatsappMessage}`;

  // Calculate initial transform based on card position
  const hasTransition = transitionData?.rect && animationPhase !== "complete";
  const rect = transitionData?.rect;
  
  const initialTransform = rect ? {
    x: rect.left + rect.width / 2 - window.innerWidth / 2,
    y: rect.top + rect.height / 2 - window.innerHeight / 2,
    scale: Math.min(rect.width / window.innerWidth, rect.height / window.innerHeight),
  } : { x: 0, y: 0, scale: 0.8 };

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={hasTransition ? {
        opacity: 0,
        scale: initialTransform.scale,
        x: initialTransform.x,
        y: initialTransform.y,
        borderRadius: 16,
      } : { opacity: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        borderRadius: 0,
      }}
      transition={{
        type: "spring",
        damping: 28,
        stiffness: 180,
        mass: 0.8,
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: animationPhase === "complete" ? 1 : 0, y: animationPhase === "complete" ? 0 : -20 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      >
        <div className="container-luxury py-2 flex items-center justify-between">
          {/* Logo com botão de voltar à página principal */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
          >
            <motion.div 
              className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={16} className="text-primary" />
            </motion.div>
            <img src={logo} alt="Joíle Barreto" className="h-10 md:h-12 object-contain" />
          </button>
          
          <span className="text-xs text-muted-foreground">{property.category}</span>
        </div>
      </motion.header>

      {/* Hero Gallery */}
      <PropertyHero
        image={property.image}
        images={property.images}
        title={property.title}
      />

      {/* Main Content */}
      <div className="container-luxury py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            <PropertyOverview
              title={property.title}
              location={property.location}
              price={property.price}
              area={property.area}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              parking={property.parking}
              category={property.category}
              isExclusive={true}
              dimensions={property.dimensions}
              fronts={property.fronts}
              hasInfrastructure={property.hasInfrastructure}
              hasDocumentation={property.hasDocumentation}
              isGatedCommunity={property.isGatedCommunity}
              floors={property.floors}
              facadeWidth={property.facadeWidth}
              landArea={property.landArea}
              builtArea={property.builtArea}
            />

            <PropertyDescription
              description={property.description}
              fullDescription={property.fullDescription}
            />

            <PropertyAmenities amenities={property.features} />

            <InvestmentAnalysis
              pricePerM2={property.pricePerM2}
              avgPricePerM2={property.avgPricePerM2}
              walkScore={property.walkScore}
              nearbyPlaces={property.nearbyPlaces}
            />

            <PropertyLocation 
              location={property.location} 
              coordinates={property.coordinates}
              mapsUrl={property.mapsUrl}
            />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <AgentContact
              whatsappLink={whatsappLink}
              phoneNumber="+5574999999999"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container-luxury text-center">
          <img src={logo} alt="Joíle Barreto - RE/MAX Gardense" className="h-10 mx-auto mb-4 brightness-0 invert" />
          <p className="text-sm opacity-70">
            © 2024 Joíle Barreto | RE/MAX Gardense | Irecê, BA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default PropertyDetails;
