import { useParams, useNavigate } from "react-router-dom";
import { useSafeBack } from "@/hooks/use-safe-back";
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
import terrenoAsaSul1 from "@/assets/terreno-asa-sul-1.webp";
import terrenoAsaSul2 from "@/assets/terreno-asa-sul-2.webp";
import terrenoAsaSul3 from "@/assets/terreno-asa-sul-3.webp";
import predioAdolfo1 from "@/assets/predio-adolfo-moitinho-1.webp";
import predioAdolfo2 from "@/assets/predio-adolfo-moitinho-2.webp";
import predioAdolfo3 from "@/assets/predio-adolfo-moitinho-3.webp";
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
import fazendaMocozeiro1 from "@/assets/fazenda-mocozeiro-1.jpg";
import fazendaMocozeiro2 from "@/assets/fazenda-mocozeiro-2.jpg";
import fazendaMocozeiro3 from "@/assets/fazenda-mocozeiro-3.jpg";
import fazendaMocozeiro4 from "@/assets/fazenda-mocozeiro-4.jpg";
import fazendaMocozeiro5 from "@/assets/fazenda-mocozeiro-5.jpg";
import fazendaMocozeiro6 from "@/assets/fazenda-mocozeiro-6.jpg";
import fazendaMocozeiro7 from "@/assets/fazenda-mocozeiro-7.jpg";
import fazendaMocozeiro8 from "@/assets/fazenda-mocozeiro-8.jpg";
import fazendaMocozeiro9 from "@/assets/fazenda-mocozeiro-9.jpg";
import terrenoMocozeiro2_1 from "@/assets/terreno-mocozeiro2-1.jpg";
import terrenoMocozeiro2_2 from "@/assets/terreno-mocozeiro2-2.jpg";
import terrenoMocozeiro2_3 from "@/assets/terreno-mocozeiro2-3.jpg";
import terrenoMocozeiro2_4 from "@/assets/terreno-mocozeiro2-4.jpg";
import terrenoAlphaGarden1 from "@/assets/terreno-alpha-garden-1.jpg";
import terrenoAlphaGarden2 from "@/assets/terreno-alpha-garden-2.jpg";
import terrenoAlphaGarden3 from "@/assets/terreno-alpha-garden-3.jpg";
import terrenoAlphaGarden4 from "@/assets/terreno-alpha-garden-4.jpg";
import terrenoAlphaGarden5 from "@/assets/terreno-alpha-garden-5.jpg";
import terrenoAlphaGarden6 from "@/assets/terreno-alpha-garden-6.jpg";
import terrenoAlphaGarden7 from "@/assets/terreno-alpha-garden-7.jpg";
import terrenoAlphaGarden8 from "@/assets/terreno-alpha-garden-8.jpg";
import terrenoAlphaGarden9 from "@/assets/terreno-alpha-garden-9.jpg";
import terrenoAlphaGarden10 from "@/assets/terreno-alpha-garden-10.jpg";
import terrenoAlphaGarden11 from "@/assets/terreno-alpha-garden-11.jpg";
import terrenoAlphaGarden12 from "@/assets/terreno-alpha-garden-12.jpg";
import terrenoAlphaGarden2_1 from "@/assets/terreno-alpha-garden2-1.jpg";
import terrenoAlphaGarden2_2 from "@/assets/terreno-alpha-garden2-2.jpg";
import terrenoAlphaGarden2_3 from "@/assets/terreno-alpha-garden2-3.jpg";
import terrenoAlphaGarden2_4 from "@/assets/terreno-alpha-garden2-4.jpg";
import terrenoAlphaGarden2_5 from "@/assets/terreno-alpha-garden2-5.jpg";
import terrenoAlphaGarden2_6 from "@/assets/terreno-alpha-garden2-6.jpg";
import terrenoAlphaGarden2_7 from "@/assets/terreno-alpha-garden2-7.jpg";
import terrenoAlphaGarden2_8 from "@/assets/terreno-alpha-garden2-8.jpg";
import terrenoAlphaGarden2_9 from "@/assets/terreno-alpha-garden2-9.jpg";
import terrenoAlphaGarden2_10 from "@/assets/terreno-alpha-garden2-10.jpg";
import terrenoAlphaGarden2_11 from "@/assets/terreno-alpha-garden2-11.jpg";
import terrenoAlphaGarden2_12 from "@/assets/terreno-alpha-garden2-12.jpg";
import loteAcquaville1 from "@/assets/lote-acquaville-1.jpg";
import loteAcquaville2 from "@/assets/lote-acquaville-2.jpg";
import loteAcquaville3 from "@/assets/lote-acquaville-3.jpg";
import loteAcquaville4 from "@/assets/lote-acquaville-4.jpg";
import loteAcquaville5 from "@/assets/lote-acquaville-5.jpg";
import loteAcquaville6 from "@/assets/lote-acquaville-6.jpg";
import lotePiemont1 from "@/assets/lote-piemont-1.jpg";
import lotePiemont2 from "@/assets/lote-piemont-2.jpg";
import lotePiemont3 from "@/assets/lote-piemont-3.jpg";
import lotePiemont4 from "@/assets/lote-piemont-4.jpg";
import lotePiemont5 from "@/assets/lote-piemont-5.jpg";
import loteCabore2_1 from "@/assets/lote-cabore2-1.jpg";
import loteCabore2_2 from "@/assets/lote-cabore2-2.jpg";
import loteCabore2_3 from "@/assets/lote-cabore2-3.jpg";
import loteCabore2_4 from "@/assets/lote-cabore2-4.jpg";
import terrenoGreenville2_1 from "@/assets/terreno-greenville2-1.jpg";
import terrenoGreenville2_2 from "@/assets/terreno-greenville2-2.jpg";
import terrenoGreenville2_3 from "@/assets/terreno-greenville2-3.jpg";
import terrenoGreenville2_4 from "@/assets/terreno-greenville2-4.jpg";
import terrenoGreenville2_5 from "@/assets/terreno-greenville2-5.jpg";
import terrenoGreenville2_6 from "@/assets/terreno-greenville2-6.jpg";
import terrenoGreenville2_7 from "@/assets/terreno-greenville2-7.jpg";
import terrenoGreenville2_8 from "@/assets/terreno-greenville2-8.jpg";
import terrenoGreenville2_9 from "@/assets/terreno-greenville2-9.jpg";
import casaKagidu1 from "@/assets/casa-kagidu-1.jpg";
import casaKagidu2 from "@/assets/casa-kagidu-2.jpg";
import casaKagidu3 from "@/assets/casa-kagidu-3.jpg";
import casaKagidu4 from "@/assets/casa-kagidu-4.jpg";
import casaKagidu5 from "@/assets/casa-kagidu-5.jpg";
import casaKagidu6 from "@/assets/casa-kagidu-6.jpg";
import casaKagidu7 from "@/assets/casa-kagidu-7.jpg";
import casaKagidu8 from "@/assets/casa-kagidu-8.jpg";
import casaKagidu9 from "@/assets/casa-kagidu-9.jpg";
import casaKagidu10 from "@/assets/casa-kagidu-10.jpg";
import casaKagidu11 from "@/assets/casa-kagidu-11.jpg";
import casaKagidu12 from "@/assets/casa-kagidu-12.jpg";
import casaKagidu13 from "@/assets/casa-kagidu-13.jpg";
import casaKagidu14 from "@/assets/casa-kagidu-14.jpg";
import casaKagidu15 from "@/assets/casa-kagidu-15.jpg";
import casaKagidu16 from "@/assets/casa-kagidu-16.jpg";
import casaKagidu17 from "@/assets/casa-kagidu-17.jpg";
import casaKagidu18 from "@/assets/casa-kagidu-18.jpg";
import casaKagidu19 from "@/assets/casa-kagidu-19.jpg";
import casaKagidu20 from "@/assets/casa-kagidu-20.jpg";
import casaKagidu21 from "@/assets/casa-kagidu-21.jpg";
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av+Adolfo+Moitinho,+Centro,+Irec%C3%AA,+Bahia",
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Condom%C3%ADnio+Residencial+Green+Ville,+Irec%C3%AA,+Bahia",
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bairro+Vila+Nova,+Irec%C3%AA,+Bahia",
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Loteamento+Cabor%C3%A9,+S%C3%A3o+Gabriel,+Bahia",
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Condom%C3%ADnio+Dona+Marta,+Irec%C3%AA,+Bahia",
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Santa+Catarina,+Alto+do+Moura,+Irec%C3%AA,+Bahia",
    nearbyPlaces: [
      { icon: "school", name: "Escolas Locais", distance: "Próximo" },
      { icon: "market", name: "Comércio Local", distance: "Próximo" },
      { icon: "hospital", name: "Serviços Essenciais", distance: "Fácil Acesso" },
      { icon: "bank", name: "Centro de Irecê", distance: "10 min de carro" },
    ],
  },
  {
    id: 8,
    image: fazendaMocozeiro1,
    images: [fazendaMocozeiro1, fazendaMocozeiro2, fazendaMocozeiro3, fazendaMocozeiro4, fazendaMocozeiro5, fazendaMocozeiro6, fazendaMocozeiro7, fazendaMocozeiro8, fazendaMocozeiro9],
    title: "Fazenda Estrada do Mocozeiro 2",
    location: "Estrada do Mocozeiro 2, Zona Rural, Irecê, Bahia",
    area: "32.670m²",
    category: "Fazenda",
    description: "Fazenda de 7,5 tarefas com 2 poços artesianos, energia elétrica, energia solar e internet. Localizada em região de grande valorização, cercada por outras fazendas. Ideal para agropecuária ou investimentos no campo.",
    fullDescription: "Localizada em uma das regiões mais promissoras da área rural de Irecê, na Bahia, esta fazenda oferece uma excelente oportunidade de investimento em um local estratégico e de constante valorização. A propriedade, com 7 tarefas e meia de extensão (32.670m²), está situada na Estrada do Mocozeiro 2, um ponto de fácil acesso e com grande potencial de desenvolvimento devido à proximidade com outras fazendas e um Condomínio de Chácaras.\n\nA fazenda é equipada com 2 poços artesianos, garantindo água abundante para diversas atividades rurais. Além disso, conta com energia elétrica, fornecida pela rede pública, e um sistema de energia solar, o que proporciona autonomia e economia no consumo de energia. A internet também está disponível, permitindo uma conexão eficiente para quem busca equilibrar o campo com as vantagens da tecnologia e comunicação.\n\nA região do Mocozeiro 2 é um dos polos de maior crescimento da área rural de Irecê, com constantes investimentos em infraestrutura e aumento da procura por propriedades rurais. A localização da fazenda é estratégica, situada na estrada principal, o que facilita o acesso e a logística.\n\nA fazenda tem grande potencial para atividades agropecuárias, incluindo cultivo de grãos, criação de gado, lazer ou até mesmo agricultura orgânica, aproveitando os recursos naturais da região e a crescente demanda por produtos diferenciados.\n\nCom uma localização privilegiada, infraestrutura completa e um mercado local em expansão, esta fazenda representa uma oportunidade única de negócio, seja para quem busca um local produtivo ou para aqueles que desejam investir em uma área em pleno crescimento.",
    features: ["7,5 Tarefas (32.670m²)", "2 Poços Artesianos", "Energia Elétrica", "Energia Solar", "Internet Disponível", "Estrada Principal", "Região em Valorização", "Próximo a Chácaras", "Ideal para Agropecuária", "Documentação OK"],
    price: "R$ 800.000",
    priceNumber: 800000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    hasInfrastructure: true,
    hasDocumentation: true,
    // Farm-specific
    totalArea: "32.670m²",
    tarefas: "7,5 tarefas",
    hasWaterWell: true,
    waterWells: 2,
    hasSolarEnergy: true,
    hasElectricity: true,
    hasInternet: true,
    pricePerM2: "R$ 24,50",
    avgPricePerM2: "R$ 30",
    walkScore: 45,
    coordinates: "-11.2800° S, -41.9000° W",
    latitude: -11.2800,
    longitude: -41.9000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Estrada+do+Mocozeiro+2,+Irec%C3%AA,+Bahia",
    nearbyPlaces: [
      { icon: "market", name: "Estrada Principal", distance: "No local" },
      { icon: "school", name: "Condomínio de Chácaras", distance: "Próximo" },
      { icon: "hospital", name: "Outras Fazendas", distance: "Vizinhas" },
      { icon: "bank", name: "Centro de Irecê", distance: "15 min de carro" },
    ],
  },
  {
    id: 9,
    image: terrenoMocozeiro2_1,
    images: [terrenoMocozeiro2_1, terrenoMocozeiro2_2, terrenoMocozeiro2_3, terrenoMocozeiro2_4],
    title: "Oito Tarefas de Terras no Mocozeiro 2",
    location: "Mocozeiro 2, Zona Rural, Irecê, Bahia",
    area: "34.848m²",
    category: "Terreno Rural",
    description: "Terreno de 8 tarefas (34.848m²) próximo à BA-800 e grandes condomínios. O mais barato da região com grande potencial de valorização!",
    fullDescription: "Apresentamos uma excelente oportunidade de investimento na região que mais se valoriza em Irecê e arredores. Este terreno com 8 tarefas de terras (equivalente a 34.848 metros quadrados) está localizado no Mocozeiro 2, uma das localidades em ascensão da cidade, próximo à BA-800, proporcionando fácil acesso tanto à Sede Municipal, Irecê, quanto aos povoados vizinhos.\n\nAlém disso, está em uma área estratégica, com proximidade a grandes condomínios residenciais que estão se estabelecendo na região, o que torna a localização ainda mais promissora para quem busca valorização imobiliária nos próximos anos.\n\nCom um valor total de R$ 180.000,00, o terreno apresenta um custo competitivo, sendo o mais barato por tarefa de terra na área, o que torna essa proposta uma excelente oportunidade para quem busca investir em um local com grande potencial de valorização. Cada tarefa de terra, com uma área de aproximadamente 4.360 metros quadrados, proporciona amplo espaço para a realização de projetos diversos, sejam eles residenciais, comerciais ou mesmo agrícolas.\n\nA área oferece um terreno plano, com boa topografia e fácil acesso, ideal para quem deseja construir em uma região em pleno crescimento, com infraestrutura em expansão. A proximidade com a BA-800, uma das principais rodovias que interliga o município de Irecê a outras localidades, torna o acesso ao centro da cidade e aos demais pontos de interesse muito mais rápido e conveniente.\n\nA valorização da região é evidente, com a chegada de novos empreendimentos e a ampliação da infraestrutura local. A presença de grandes condomínios residenciais e a crescente procura por áreas tranquilas e com boa qualidade de vida fazem deste terreno uma excelente opção para quem deseja morar ou investir.\n\nEste terreno representa uma oportunidade rara no mercado local, com preço competitivo e uma localização estratégica que oferece fácil acesso a serviços essenciais e um futuro de crescimento e valorização.",
    features: ["8 Tarefas (34.848m²)", "Mais Barato da Região", "Próximo à BA-800", "Próximo a Condomínios", "Terreno Plano", "Boa Topografia", "Fácil Acesso", "Região em Valorização", "Ideal para Investimento", "Documentação OK"],
    price: "R$ 180.000",
    priceNumber: 180000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    hasInfrastructure: false,
    hasDocumentation: true,
    // Rural land specific
    totalArea: "34.848m²",
    tarefas: "8 tarefas",
    pricePerM2: "R$ 5,17",
    avgPricePerM2: "R$ 8",
    walkScore: 35,
    coordinates: "-11.2750° S, -41.9050° W",
    latitude: -11.2750,
    longitude: -41.9050,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mocozeiro+2,+Irec%C3%AA,+Bahia",
    nearbyPlaces: [
      { icon: "market", name: "BA-800", distance: "Próximo" },
      { icon: "school", name: "Condomínios Residenciais", distance: "Próximo" },
      { icon: "hospital", name: "Centro de Irecê", distance: "10 min de carro" },
      { icon: "bank", name: "Povoados Vizinhos", distance: "Fácil Acesso" },
    ],
  },
  {
    id: 10,
    image: terrenoAlphaGarden1,
    images: [terrenoAlphaGarden1, terrenoAlphaGarden2, terrenoAlphaGarden3, terrenoAlphaGarden4, terrenoAlphaGarden5, terrenoAlphaGarden6, terrenoAlphaGarden7, terrenoAlphaGarden8, terrenoAlphaGarden9, terrenoAlphaGarden10, terrenoAlphaGarden11, terrenoAlphaGarden12],
    title: "Terreno Condomínio Alpha Garden",
    location: "BA-800, Meia Hora, Zona Rural, Irecê, Bahia",
    area: "300m²",
    category: "Terreno",
    description: "Oportunidade exclusiva de construir a residência dos seus sonhos no Condomínio Alpha Garden, estrategicamente localizado na BA-800 em Irecê. Terreno de 300m² em condomínio com apenas 282 unidades.",
    fullDescription: "Você está convidado a descobrir um novo padrão de viver bem em Irecê. Apresentamos uma oportunidade ímpar de construir a residência dos seus sonhos no Condomínio Alpha Garden, estrategicamente localizado na BA-800.\n\nEste não é apenas um terreno. É o passaporte para um estilo de vida onde a segurança da sua família, o lazer e o contato com a natureza coexistem em perfeita harmonia. O Alpha Garden foi meticulosamente planejado para oferecer uma experiência residencial inigualável.\n\nOferecemos um terreno exclusivo, pronto para construir, inserido em um condomínio com apenas 282 unidades. Essa exclusividade garante não apenas privacidade, mas também um senso de comunidade mais forte e uma gestão de condomínio mais eficiente.\n\nViver no Alpha Garden é sinônimo de tranquilidade. O condomínio foi projetado com sistema de segurança, começando pela Guarita 24 horas, contando com profissionais treinados, controle de acesso rigoroso de visitantes e prestadores de serviço, além de monitoramento constante.\n\nO grande diferencial do Alpha Garden é sua área de lazer completa: duas piscinas (adulto e infantil), academia equipada, salão de festas climatizado, churrasqueira, quadra poliesportiva e quadra de tênis.\n\nSituado na BA-800, Meia Hora, o Condomínio Alpha Garden está em uma localização privilegiada. Longe do barulho e do trânsito intenso do centro, mas a poucos minutos de todas as conveniências que você precisa.\n\nAdquirir um terreno no Alpha Garden é investir em um patrimônio sólido. A demanda por condomínios fechados com infraestrutura completa e segurança de alto nível é crescente em Irecê. A combinação de localização, lazer exclusivo e o número limitado de lotes (apenas 282) cria uma escassez que impulsiona a valorização do imóvel a curto, médio e longo prazo.",
    features: ["Condomínio Fechado", "Segurança 24h", "2 Piscinas (Adulto e Infantil)", "Academia", "Salão de Festas", "Churrasqueira", "Quadra Poliesportiva", "Quadra de Tênis", "Rua Asfaltada", "Apenas 282 Unidades", "Aceita Permuta", "Documentação OK"],
    price: "R$ 105.000",
    priceNumber: 105000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    dimensions: "10x30m",
    fronts: 1,
    hasInfrastructure: true,
    hasDocumentation: true,
    isGatedCommunity: true,
    pricePerM2: "R$ 350",
    avgPricePerM2: "R$ 425",
    walkScore: 70,
    coordinates: "-11.3039° S, -41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Condom%C3%ADnio+Alpha+Garden,+BA-800,+Irec%C3%AA,+Bahia",
    nearbyPlaces: [
      { icon: "market", name: "BA-800", distance: "No local" },
      { icon: "hospital", name: "Área de Lazer Completa", distance: "No condomínio" },
      { icon: "bank", name: "Segurança 24h", distance: "No local" },
      { icon: "school", name: "Centro de Irecê", distance: "10 min de carro" },
    ],
  },
  {
    id: 11,
    image: terrenoAlphaGarden2_1,
    images: [terrenoAlphaGarden2_1, terrenoAlphaGarden2_2, terrenoAlphaGarden2_3, terrenoAlphaGarden2_4, terrenoAlphaGarden2_5, terrenoAlphaGarden2_6, terrenoAlphaGarden2_7, terrenoAlphaGarden2_8, terrenoAlphaGarden2_9, terrenoAlphaGarden2_10, terrenoAlphaGarden2_11, terrenoAlphaGarden2_12],
    title: "Terreno Alpha Garden - 378m²",
    location: "BA-800, Meia Hora, Zona Rural, Irecê, Bahia",
    area: "378m²",
    category: "Terreno",
    description: "Terreno diferenciado de 378m² (13,5x28m) no Condomínio Alpha Garden, na BA-800 em Irecê. Condomínio com apenas 282 unidades, segurança 24h e lazer completo. Aceita permuta.",
    fullDescription: "Você está convidado a descobrir um novo padrão de viver bem em Irecê. Apresentamos uma oportunidade ímpar de construir a residência dos seus sonhos no Condomínio Alpha Garden, estrategicamente localizado na BA-800.\n\nEste terreno diferenciado de 378m², com dimensões generosas de 13,5 metros de frente por 28 metros de fundo, oferece amplo espaço para projetos arquitetônicos arrojados. É o passaporte para um estilo de vida onde a segurança da sua família, o lazer e o contato com a natureza coexistem em perfeita harmonia.\n\nO Alpha Garden foi meticulosamente planejado para oferecer uma experiência residencial inigualável, com apenas 282 unidades, garantindo privacidade e um senso de comunidade mais forte.\n\nO condomínio foi projetado com sistema de segurança completo, começando pela Guarita 24 horas, com profissionais treinados, controle de acesso rigoroso e monitoramento constante.\n\nA área de lazer é um dos grandes diferenciais: duas piscinas (adulto e infantil), academia equipada, salão de festas climatizado, churrasqueira, quadra poliesportiva e quadra de tênis.\n\nSituado na BA-800, Meia Hora, o condomínio está em localização privilegiada — longe do barulho, mas a poucos minutos de todas as conveniências. A demanda por condomínios fechados com infraestrutura completa é crescente em Irecê, o que impulsiona a valorização do imóvel.\n\nEste imóvel aceita permuta, tornando a negociação ainda mais flexível para você.",
    features: ["Condomínio Fechado", "Segurança 24h", "2 Piscinas (Adulto e Infantil)", "Academia", "Salão de Festas", "Churrasqueira", "Quadra Poliesportiva", "Quadra de Tênis", "Rua Asfaltada", "Apenas 282 Unidades", "Aceita Permuta", "Documentação OK"],
    price: "R$ 132.300",
    priceNumber: 132300,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    dimensions: "13,5x28m",
    fronts: 1,
    hasInfrastructure: true,
    hasDocumentation: true,
    isGatedCommunity: true,
    pricePerM2: "R$ 350",
    avgPricePerM2: "R$ 425",
    walkScore: 70,
    coordinates: "-11.3039° S, -41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Condom%C3%ADnio+Alpha+Garden,+BA-800,+Irec%C3%AA,+Bahia",
    nearbyPlaces: [
      { icon: "market", name: "BA-800", distance: "No local" },
      { icon: "hospital", name: "Área de Lazer Completa", distance: "No condomínio" },
      { icon: "bank", name: "Segurança 24h", distance: "No local" },
      { icon: "school", name: "Centro de Irecê", distance: "10 min de carro" },
    ],
  },
  {
    id: 12,
    image: loteAcquaville1,
    images: [loteAcquaville1, loteAcquaville2, loteAcquaville3, loteAcquaville4, loteAcquaville5, loteAcquaville6],
    title: "Lote Acquaville Park Show",
    location: "KM 354, BA-052, Zona Rural, Irecê, Bahia",
    area: "150m²",
    category: "Terreno",
    description: "Oportunidade única no coração do Acquaville Park Show, o principal parque aquático de Irecê! Lote exclusivo de 150m² para construção de chalé, com passaporte vitalício ao parque aquático.",
    fullDescription: "Apresentamos a você uma oportunidade única e imperdível no coração do Acquaville Park Show, o principal parque aquático de Irecê! Imagine acordar todos os dias com a energia contagiante de um paraíso aquático à sua porta, onde diversão, relaxamento e momentos inesquecíveis se encontram.\n\nEste lote exclusivo de 150m², com dimensões de 10 metros de frente por 15 metros de fundo, oferece o espaço perfeito para você construir um chalé, seguindo o padrão charmoso e funcional do Acquaville. Localizado estrategicamente no KM 354 da BA-052, o Acquaville Park Show é facilmente acessível e se tornou um marco na região.\n\nO grande diferencial desta oferta é o Passaporte Vitalício ao Parque Aquático que acompanha a aquisição do lote. Uma vez proprietário, você e sua família terão acesso ilimitado e para sempre a todas as atrações que o Acquaville Park Show oferece. Este é um benefício que agrega um valor inestimável ao seu investimento.\n\nO Acquaville Park Show não é apenas um parque aquático; é um complexo de lazer completo que se destaca pela sua infraestrutura moderna, segurança e uma variedade de atrações para todas as idades.\n\nEsta é a oportunidade perfeita para quem busca um investimento inteligente, com potencial de valorização, e ao mesmo tempo um refúgio para desfrutar da vida ao máximo. Seja para passar fins de semana, feriados ou até mesmo para morar, ter um chalé no Acquaville Park Show com acesso vitalício ao parque é um privilégio que poucos podem ter.",
    features: ["Passaporte Vitalício", "Parque Aquático Completo", "Piscina Semi-Olímpica", "Segurança 24h", "Condomínio Fechado", "Próximo à BA-052", "Ideal para Chalé", "Lazer para Toda Família", "Investimento Inteligente", "Documentação OK"],
    price: "R$ 90.000",
    priceNumber: 90000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    dimensions: "10x15m",
    fronts: 1,
    hasInfrastructure: true,
    hasDocumentation: true,
    isGatedCommunity: true,
    pricePerM2: "R$ 600",
    avgPricePerM2: "R$ 700",
    walkScore: 60,
    coordinates: "-11.2900° S, -41.9200° W",
    latitude: -11.2900,
    longitude: -41.9200,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Acquaville+Park+Show,+BA-052+Km+354,+Irec%C3%AA,+Bahia",
    nearbyPlaces: [
      { icon: "market", name: "BA-052", distance: "No local" },
      { icon: "hospital", name: "Parque Aquático", distance: "No condomínio" },
      { icon: "bank", name: "Segurança 24h", distance: "No local" },
      { icon: "school", name: "Centro de Irecê", distance: "15 min de carro" },
    ],
  },
  {
    id: 13,
    image: lotePiemont1,
    images: [lotePiemont1, lotePiemont2, lotePiemont3, lotePiemont4, lotePiemont5],
    title: "Lote Reserva Piemont 2",
    location: "BA-144, Km 03, Morro do Chapéu, Bahia",
    area: "375m²",
    category: "Terreno",
    description: "Lote exclusivo de 375m² no Condomínio Reserva Piemont 2, em Morro do Chapéu. Empreendimento com arquitetura inspirada no estilo europeu, vista para o Vale do Agreste e apenas 103 unidades.",
    fullDescription: "O Condomínio Reserva Piemont 2 está localizado em Morro do Chapéu, na BA-144, Km 03. Em um cenário fascinante, com belíssimo relevo montanhoso, cercada pela natureza e vista para o Vale do Agreste.\n\nDesenvolvido como um empreendimento único, inovador e que contempla os anseios de moradores e turistas da região, o Reserva Piemont 2 traz requinte, charme, lazer e arquitetura inspirada no estilo europeu.\n\nTrata-se de um Condomínio Exclusivo, com apenas 103 unidades, onde os Lotes contam com uma área total de 375m² (15x25m).\n\nO Condomínio contará com uma Piscina parcialmente aquecida e vista exuberante. O Reserva Piemont preparou 2 lareiras ricas em detalhes, madeiras e estofados.\n\nO Salão de Festas foi decorado para trazer requinte, sofisticação e praticidade, e está localizado numa área incrível com vista privilegiada para o Vale do Agreste, envolvido com área de preservação.\n\nO Reserva Piemont 2 conta com os melhores profissionais para deixar o paisagismo incrível. Serão disponibilizados 4 layouts de Chalés padronizados para você escolher o que mais se adequa ao seu estilo, conforto e bem-estar.",
    features: ["Condomínio Fechado", "Estilo Europeu", "Apenas 103 Unidades", "Piscina Aquecida", "2 Lareiras", "Salão de Festas", "Espaço Gourmet", "Vista para o Vale do Agreste", "Segurança 24h", "Câmeras de Segurança", "Paisagismo Profissional", "4 Layouts de Chalés"],
    price: "R$ 55.000",
    priceNumber: 55000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    dimensions: "15x25m",
    fronts: 1,
    hasInfrastructure: true,
    hasDocumentation: true,
    isGatedCommunity: true,
    pricePerM2: "R$ 147",
    avgPricePerM2: "R$ 200",
    walkScore: 45,
    coordinates: "-11.5500° S, -41.1600° W",
    latitude: -11.5500,
    longitude: -41.1600,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Reserva+Piemont+2,+BA-144+Km+03,+Morro+do+Chap%C3%A9u,+Bahia",
    nearbyPlaces: [
      { icon: "market", name: "BA-144", distance: "No local" },
      { icon: "hospital", name: "Vale do Agreste", distance: "Vista panorâmica" },
      { icon: "bank", name: "Segurança 24h", distance: "No local" },
      { icon: "school", name: "Centro de Morro do Chapéu", distance: "3 min de carro" },
    ],
  },
  {
    id: 14,
    image: loteCabore2_1,
    images: [loteCabore2_1, loteCabore2_2, loteCabore2_3, loteCabore2_4],
    title: "Lote Caboré - São Gabriel",
    location: "Loteamento Caboré, São Gabriel, Bahia",
    area: "200m²",
    category: "Terreno",
    description: "Investimento inteligente em São Gabriel/BA! Lote de 200m² (10x20m) no Loteamento Caboré, próximo ao novo Colégio Integral e à entrada principal da cidade.",
    fullDescription: "Pronto para fazer um investimento inteligente? Apresentamos a você uma oportunidade imperdível na cidade de São Gabriel, Bahia! Este é o momento ideal para adquirir um lote em uma localização estratégica, que oferece não apenas um espaço para construir, mas um caminho para a valorização.\n\nEste lote de 200m², com generosas dimensões de 10 metros de frente por 20 metros de fundo, é o alicerce perfeito para o seu próximo projeto, seja ele a construção de sua casa, um comércio promissor ou um investimento com retorno garantido.\n\nSua localização é um dos pontos mais fortes: o loteamento está situado atrás do novo Colégio de Tempo Integral que está em construção. Imagine o fluxo de pessoas e o potencial de valorização que a proximidade com uma instituição de ensino moderna trará para a região. Escolas são âncoras de desenvolvimento, e ter um imóvel tão próximo significa estar no caminho do crescimento.\n\nAlém de estar ao lado do futuro colégio, o loteamento se beneficia de sua posição ao lado da entrada principal da cidade de São Gabriel. Essa característica é um diferencial enorme, pois garante fácil acesso para quem chega e sai da cidade, além de uma visibilidade que impulsiona o valor do seu investimento.\n\nEste não é apenas mais um lote à venda; trata-se de um ótimo investimento, pois está bem precificado, dentro da realidade de mercado. A chegada do novo Colégio Integral e o desenvolvimento urbano ao redor da entrada da cidade são indicadores claros de uma expansão que trará valorização imobiliária.",
    features: ["10x20m (200m²)", "Próximo ao Colégio Integral", "Entrada Principal da Cidade", "Alta Visibilidade", "Potencial de Valorização", "Fácil Acesso", "Área Residencial", "Perto de Escolas", "Bom Tráfego", "Documentação OK"],
    price: "R$ 35.000",
    priceNumber: 35000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    dimensions: "10x20m",
    fronts: 1,
    hasInfrastructure: true,
    hasDocumentation: true,
    pricePerM2: "R$ 175",
    avgPricePerM2: "R$ 200",
    walkScore: 80,
    coordinates: "-11.2286° S, -41.9164° W",
    latitude: -11.2286,
    longitude: -41.9164,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Loteamento+Cabor%C3%A9,+S%C3%A3o+Gabriel,+Bahia",
    nearbyPlaces: [
      { icon: "school", name: "Colégio Integral (em construção)", distance: "Ao lado" },
      { icon: "market", name: "Entrada Principal", distance: "Ao lado" },
      { icon: "bus", name: "Centro de São Gabriel", distance: "5 min de carro" },
      { icon: "hospital", name: "Serviços Essenciais", distance: "Próximo" },
    ],
  },
  {
    id: 15,
    image: terrenoGreenville2_1,
    images: [terrenoGreenville2_1, terrenoGreenville2_2, terrenoGreenville2_3, terrenoGreenville2_4, terrenoGreenville2_5, terrenoGreenville2_6, terrenoGreenville2_7, terrenoGreenville2_8, terrenoGreenville2_9],
    title: "Terreno Green Ville - R$ 80 mil",
    location: "Condomínio Residencial Green Ville, Zona Rural, Irecê, Bahia",
    area: "200m²",
    category: "Terreno",
    description: "Terreno privilegiado de 200m² nas primeiras quadras do Condomínio Green Ville. Piscina, churrasqueira, parquinhos e segurança 24h. Próximo à BA-052.",
    fullDescription: "Apresentamos a você uma oportunidade imperdível de adquirir um terreno privilegiado no Condomínio Residencial Green Ville. Com dimensões ideais de 10 metros de frente por 20 metros de fundo, totalizando 200 m², este terreno oferece o espaço perfeito para você tirar do papel o projeto da sua casa.\n\nA localização é um dos grandes diferenciais deste terreno: ele está situado em uma das primeiras quadras do condomínio, o que garante facilidade de acesso e proximidade com a portaria e as principais áreas de lazer. Para quem busca praticidade e conforto, essa é a escolha certa.\n\nCom uma infraestrutura completa, o Condomínio foi cuidadosamente planejado para oferecer tudo o que sua família precisa para viver com tranquilidade. Possui uma área de lazer completa, contando com uma piscina refrescante, perfeita para os dias quentes, e uma churrasqueira, ideal para confraternizações com amigos e familiares. Para a alegria das crianças, o condomínio dispõe de parquinhos seguros, onde a diversão é garantida.\n\nA segurança é outro ponto forte do Green Ville. Com portaria e controle de acesso, você e sua família poderão desfrutar de total tranquilidade e privacidade.\n\nSituado próximo à BA-052, uma das principais vias da região, o Green Ville permite fácil e rápido deslocamento para o centro de Irecê e outras cidades próximas. Irecê é uma cidade em constante crescimento, com um mercado imobiliário aquecido e um potencial de valorização que não para de crescer.",
    features: ["Condomínio Fechado", "Primeiras Quadras", "Piscina", "Churrasqueira", "Parquinhos", "Segurança 24h", "Controle de Acesso", "Próximo à BA-052", "Infraestrutura Completa", "Documentação OK"],
    price: "R$ 80.000",
    priceNumber: 80000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    dimensions: "10x20m",
    fronts: 1,
    hasInfrastructure: true,
    hasDocumentation: true,
    isGatedCommunity: true,
    pricePerM2: "R$ 400",
    avgPricePerM2: "R$ 500",
    walkScore: 75,
    coordinates: "-11.3050° S, -41.8700° W",
    latitude: -11.3050,
    longitude: -41.8700,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Condom%C3%ADnio+Residencial+Green+Ville,+Irec%C3%AA,+Bahia",
    nearbyPlaces: [
      { icon: "market", name: "BA-052", distance: "2 min de carro" },
      { icon: "school", name: "Centro de Irecê", distance: "5 min de carro" },
      { icon: "hospital", name: "Área de Lazer", distance: "No condomínio" },
      { icon: "bank", name: "Portaria 24h", distance: "No local" },
    ],
  },
  {
    id: 16,
    image: casaKagidu1,
    images: [casaKagidu1, casaKagidu2, casaKagidu3, casaKagidu4, casaKagidu5, casaKagidu6, casaKagidu7, casaKagidu8, casaKagidu9, casaKagidu10, casaKagidu11, casaKagidu12, casaKagidu13, casaKagidu14, casaKagidu15, casaKagidu16, casaKagidu17, casaKagidu18, casaKagidu19, casaKagidu20, casaKagidu21],
    title: "Residência Áurea — Casa Contemporânea no Condomínio Kagidu",
    location: "SN Rua Umbuzeiro, Asa Sul, Irecê, Bahia",
    area: "250m²",
    category: "Casa",
    description: "Casa contemporânea em condomínio valorizado, com 250m² de terreno e 210m² construídos. Sala com pé-direito alto e ambientes integrados: estar, jantar, cozinha e área gourmet. 1 suíte master com closet e acesso à jacuzzi, 1 suíte e 1 demi-suíte.",
    fullDescription: "Com arquitetura contemporânea e linhas modernas, esta residência foi cuidadosamente projetada para oferecer conforto, funcionalidade e integração entre os ambientes, reunindo características que valorizam o bem-estar e a qualidade de vida. Localizada em um dos condomínios mais valorizados da região, o imóvel combina estética, praticidade e um projeto arquitetônico que privilegia amplitude, iluminação natural e ventilação.\n\nConstruída em um terreno de 250 m², com 210 m² de área construída, a casa se destaca logo na entrada pelo pé-direito alto na sala, um elemento arquitetônico que proporciona maior sensação de espaço, elegância e luminosidade ao ambiente social. A iluminação natural e a ventilação cruzada tornam os ambientes ainda mais agradáveis e acolhedores no dia a dia.\n\nO projeto foi pensado para valorizar a integração entre os espaços, trazendo sala de estar, sala de jantar e cozinha em conceito aberto, criando um ambiente moderno e funcional, ideal para convivência familiar. Esses ambientes se conectam diretamente com a área gourmet coberta, proporcionando um espaço perfeito para receber amigos, reunir a família e aproveitar momentos especiais com conforto e praticidade.\n\nNa área íntima, o imóvel foi planejado para garantir privacidade e conforto aos moradores. A casa dispõe de três suítes, sendo uma suíte master com closet e acesso direto à área da jacuzzi, criando um ambiente exclusivo e relaxante. Além disso, conta com uma suíte adicional e uma demi-suíte, oferecendo uma configuração funcional para famílias ou para quem deseja receber visitas com comodidade.\n\nA área externa complementa o projeto com um espaço pensado para lazer e descanso. O destaque fica para a jacuzzi com capacidade para quatro pessoas, criando um ambiente reservado e aconchegante, ideal para relaxar ao final do dia.\n\nO imóvel dispõe ainda de lavabo, área de serviço e garagem para dois veículos. A implantação da casa foi planejada com um dos lados soltos, favorecendo a circulação de ar e a entrada de luz natural, fatores que contribuem diretamente para o conforto térmico e para a valorização do projeto arquitetônico.\n\nA residência está situada próxima à portaria do Condomínio Kagidu, um condomínio que oferece infraestrutura de lazer e convivência para toda a família, contando com piscina, quadra poliesportiva, salão de festas com churrasqueira e parque infantil, além de segurança e tranquilidade para os moradores.\n\nTrata-se de um imóvel que reúne arquitetura moderna, ambientes bem planejados, lazer e conforto, sendo uma excelente oportunidade para quem busca morar com segurança, sofisticação e qualidade de vida em um condomínio completo.",
    features: ["Arquitetura Contemporânea", "Pé-Direito Alto", "3 Suítes (1 Master c/ Closet)", "3 Banheiros", "Conceito Aberto", "Área Gourmet Coberta", "Jacuzzi p/ 4 Pessoas", "Garagem 2 Veículos", "Lavabo", "Condomínio Fechado", "Piscina do Condomínio", "Quadra Poliesportiva"],
    price: "R$ 1.300.000",
    priceNumber: 1300000,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    builtArea: "210m²",
    isGatedCommunity: true,
    pricePerM2: "R$ 5.200",
    avgPricePerM2: "R$ 5.500",
    walkScore: 82,
    coordinates: "-11.3039° S, -41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Condom%C3%ADnio+Kagidu,+Asa+Sul,+Irec%C3%AA,+Bahia",
    nearbyPlaces: [
      { icon: "hospital", name: "Piscina e Quadra", distance: "No condomínio" },
      { icon: "market", name: "Salão de Festas", distance: "No condomínio" },
      { icon: "bank", name: "Portaria 24h", distance: "No local" },
      { icon: "school", name: "Centro de Irecê", distance: "5 min de carro" },
    ],
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = useSafeBack();
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

  const whatsappMessage = encodeURIComponent(`Olá Joíle! Vi o ${property.category === "Terreno" || property.category === "Lote" ? "terreno" : "Imóvel"} "${property.title}" em ${property.location} no seu site e gostaria de mais informações. Pode me ajudar?`);
  const whatsappLink = `https://wa.me/5574999993009?text=${whatsappMessage}`;

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
            onClick={goBack}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
          >
            <motion.div 
              className="flex items-center justify-center w-10 h-10 md:w-8 md:h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={20} className="text-primary md:w-4 md:h-4" />
            </motion.div>
            <img src={logo} alt="Joíle Barreto" className="h-8 md:h-12 object-contain" />
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

      {/* WhatsApp CTA below images — mobile only */}
      <div className="container-luxury mt-6 lg:hidden">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full max-w-5xl mx-auto py-4 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-white font-semibold text-base transition-colors shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Tenho interesse neste Imóvel
        </a>
      </div>

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
              tarefas={property.tarefas}
              waterWells={property.waterWells}
              hasSolarEnergy={property.hasSolarEnergy}
              hasElectricity={property.hasElectricity}
              hasInternet={property.hasInternet}
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
              phoneNumber="+5574999993009"
              propertyPrice={property.price}
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
