import CategoryProperties from "./CategoryProperties";

const TerrenosPage = () => (
  <CategoryProperties
    title="Terrenos em Irecê e Região"
    subtitle="Encontre o terreno ideal para construir o seu futuro. Lotes em condomínios fechados, áreas urbanas e rurais."
    categoryFilter={["Terreno", "Terreno Rural"]}
    emptyMessage="Nenhum terreno disponível no momento. Entre em contato para saber sobre novas oportunidades."
  />
);

export default TerrenosPage;
