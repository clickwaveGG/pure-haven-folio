import terrenoAsaSul1 from "@/assets/terreno-asa-sul-1.jpg";
import predioAdolfo1 from "@/assets/predio-adolfo-moitinho-1.jpg";
import terrenoGreenville1 from "@/assets/terreno-greenville-1.jpg";
import terrenoSaoGabriel1 from "@/assets/terreno-sao-gabriel-1.jpg";
import casaDonaMarta1 from "@/assets/casa-dona-marta-1.jpg";
import terrenoAltoMoura1 from "@/assets/terreno-alto-moura-1.jpg";
import fazendaMocozeiro1 from "@/assets/fazenda-mocozeiro-1.jpg";
import terrenoMocozeiro2_1 from "@/assets/terreno-mocozeiro2-1.jpg";
import terrenoAlphaGarden1 from "@/assets/terreno-alpha-garden-1.jpg";
import terrenoAlphaGarden2_1 from "@/assets/terreno-alpha-garden2-1.jpg";
import loteAcquaville1 from "@/assets/lote-acquaville-1.jpg";
import lotePiemont1 from "@/assets/lote-piemont-1.jpg";
import loteCabore2_1 from "@/assets/lote-cabore2-1.jpg";
import terrenoGreenville2_1 from "@/assets/terreno-greenville2-1.jpg";
import casaKagidu1 from "@/assets/casa-kagidu-1.jpg";

export interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  area: string;
  areaNumber: number;
  category: string;
  price: string;
  priceNumber: number;
  description: string;
  dimensions?: string;
  fronts?: number;
  floors?: number;
  facadeWidth?: string;
  isGatedCommunity?: boolean;
  highlights?: string[];
  bedrooms?: number;
  bathrooms?: number;
}

export const allProperties: Property[] = [
  {
    id: 4,
    image: terrenoAsaSul1,
    title: "Terreno Asa Sul com Duas Frentes",
    location: "Bairro Asa Sul, Irecê",
    area: "210m²",
    areaNumber: 210,
    category: "Terreno",
    price: "R$ 280.000",
    priceNumber: 280000,
    description: "Oportunidade única! Terreno 7x30m com acesso duplo (duas frentes). Próximo à UPA, Faculdade FAI e Av. 1º de Janeiro.",
    dimensions: "7x30m",
    fronts: 2,
  },
  {
    id: 1,
    image: predioAdolfo1,
    title: "Prédio Comercial Av. Adolfo Moitinho",
    location: "Centro, Irecê",
    area: "416m²",
    areaNumber: 416,
    category: "Prédio Comercial",
    price: "R$ 2.530.000",
    priceNumber: 2530000,
    description: "Investimento no epicentro comercial! Sobrado com 416m² em 3 pavimentos na via de maior fluxo de Irecê.",
    floors: 3,
    facadeWidth: "6,40m",
  },
  {
    id: 2,
    image: terrenoGreenville1,
    title: "Terreno Condomínio Green Ville",
    location: "Cond. Green Ville, Irecê",
    area: "200m²",
    areaNumber: 200,
    category: "Terreno",
    price: "R$ 85.000",
    priceNumber: 85000,
    description: "Terreno privilegiado nas primeiras quadras do condomínio. Piscina, churrasqueira, parquinhos e segurança 24h.",
    isGatedCommunity: true,
  },
  {
    id: 5,
    image: terrenoSaoGabriel1,
    title: "Lote Loteamento Caboré",
    location: "São Gabriel, BA",
    area: "200m²",
    areaNumber: 200,
    category: "Terreno",
    price: "R$ 25.000",
    priceNumber: 25000,
    description: "Ao lado do novo Colégio Integral e entrada principal da cidade. Potencial de valorização garantido!",
    highlights: ["Próx. Colégio Integral", "Entrada da Cidade"],
  },
  {
    id: 6,
    image: casaDonaMarta1,
    title: "Casa de Alto Padrão Cond. Dona Marta",
    location: "Cond. Dona Marta, Irecê",
    area: "600m²",
    areaNumber: 600,
    category: "Casa",
    price: "R$ 1.350.000",
    priceNumber: 1350000,
    description: "Exclusiva casa de alto padrão com 5 quartos, 2 suítes, piscina, espaço gourmet e sacada panorâmica.",
    highlights: ["Alto Padrão", "Piscina + Gourmet"],
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 7,
    image: terrenoAltoMoura1,
    title: "Terreno Alto do Moura",
    location: "Alto do Moura, Irecê",
    area: "375m²",
    areaNumber: 375,
    category: "Terreno",
    price: "R$ 210.000",
    priceNumber: 210000,
    description: "Terreno residencial de 375m² no Alto do Moura. Área tranquila com fácil acesso a escolas, comércio e serviços.",
    highlights: ["Área Tranquila", "Em Valorização"],
  },
  {
    id: 8,
    image: fazendaMocozeiro1,
    title: "Fazenda Estrada do Mocozeiro 2",
    location: "Estrada do Mocozeiro 2, Irecê",
    area: "32.670m²",
    areaNumber: 32670,
    category: "Fazenda",
    price: "R$ 800.000",
    priceNumber: 800000,
    description: "Fazenda de 7,5 tarefas com 2 poços artesianos, energia solar e internet. Região de grande valorização, ideal para agropecuária.",
    highlights: ["2 Poços Artesianos", "Energia Solar"],
  },
  {
    id: 9,
    image: terrenoMocozeiro2_1,
    title: "Oito Tarefas de Terras no Mocozeiro 2",
    location: "Mocozeiro 2, Irecê",
    area: "34.848m²",
    areaNumber: 34848,
    category: "Terreno Rural",
    price: "R$ 180.000",
    priceNumber: 180000,
    description: "Terreno de 8 tarefas próximo à BA-800 e grandes condomínios. O mais barato da região com grande potencial de valorização!",
    highlights: ["8 Tarefas", "Mais Barato da Região"],
  },
  {
    id: 10,
    image: terrenoAlphaGarden1,
    title: "Terreno Condomínio Alpha Garden",
    location: "BA-800, Meia Hora, Irecê",
    area: "300m²",
    areaNumber: 300,
    category: "Terreno",
    price: "R$ 105.000",
    priceNumber: 105000,
    description: "Terreno exclusivo no Condomínio Alpha Garden, na BA-800. Segurança 24h, piscinas, academia, salão de festas e quadra poliesportiva.",
    isGatedCommunity: true,
    highlights: ["Condomínio Fechado", "Lazer Completo"],
    dimensions: "10x30m",
  },
  {
    id: 11,
    image: terrenoAlphaGarden2_1,
    title: "Terreno Alpha Garden - 378m²",
    location: "BA-800, Meia Hora, Irecê",
    area: "378m²",
    areaNumber: 378,
    category: "Terreno",
    price: "R$ 132.300",
    priceNumber: 132300,
    description: "Terreno de 378m² (13,5x28m) no Condomínio Alpha Garden. Segurança 24h, piscinas, academia, quadras e aceita permuta.",
    isGatedCommunity: true,
    highlights: ["378m² Esquina", "Aceita Permuta"],
    dimensions: "13,5x28m",
  },
  {
    id: 12,
    image: loteAcquaville1,
    title: "Lote Acquaville Park Show",
    location: "KM 354, BA-052, Irecê",
    area: "150m²",
    areaNumber: 150,
    category: "Terreno",
    price: "R$ 90.000",
    priceNumber: 90000,
    description: "Lote exclusivo de 150m² no Acquaville Park Show com passaporte vitalício ao parque aquático. Piscina semi-olímpica e segurança 24h.",
    isGatedCommunity: true,
    highlights: ["Parque Aquático", "Passaporte Vitalício"],
    dimensions: "10x15m",
  },
  {
    id: 13,
    image: lotePiemont1,
    title: "Lote Reserva Piemont 2",
    location: "BA-144, Morro do Chapéu",
    area: "375m²",
    areaNumber: 375,
    category: "Terreno",
    price: "R$ 55.000",
    priceNumber: 55000,
    description: "Lote de 375m² no Reserva Piemont 2, Morro do Chapéu. Condomínio estilo europeu com vista para o Vale do Agreste, piscina aquecida e lareiras.",
    isGatedCommunity: true,
    highlights: ["Estilo Europeu", "Vista Montanhosa"],
    dimensions: "15x25m",
  },
  {
    id: 14,
    image: loteCabore2_1,
    title: "Lote Caboré - São Gabriel",
    location: "Loteamento Caboré, São Gabriel, BA",
    area: "200m²",
    areaNumber: 200,
    category: "Terreno",
    price: "R$ 35.000",
    priceNumber: 35000,
    description: "Lote de 200m² (10x20m) no Loteamento Caboré, São Gabriel. Próximo ao Colégio Integral e entrada principal da cidade.",
    highlights: ["Próx. Colégio Integral", "R$ 35 mil"],
    dimensions: "10x20m",
  },
  {
    id: 15,
    image: terrenoGreenville2_1,
    title: "Terreno Green Ville - R$ 80 mil",
    location: "Cond. Green Ville, Irecê",
    area: "200m²",
    areaNumber: 200,
    category: "Terreno",
    price: "R$ 80.000",
    priceNumber: 80000,
    description: "Terreno de 200m² nas primeiras quadras do Green Ville. Condomínio com piscina, churrasqueira, parquinhos e segurança 24h.",
    isGatedCommunity: true,
    highlights: ["Primeiras Quadras", "Ótimo Preço"],
    dimensions: "10x20m",
  },
  {
    id: 16,
    image: casaKagidu1,
    title: "Residência Áurea — Casa Contemporânea Cond. Kagidu",
    location: "Asa Sul, Irecê",
    area: "250m²",
    areaNumber: 250,
    category: "Casa",
    price: "R$ 1.300.000",
    priceNumber: 1300000,
    description: "Casa contemporânea com arquitetura moderna no Condomínio Kagidu. 210m² construídos, pé-direito alto, 3 suítes, jacuzzi e área gourmet coberta.",
    highlights: ["Condomínio Fechado", "Jacuzzi"],
    bedrooms: 3,
    bathrooms: 3,
    isGatedCommunity: true,
  },
];
