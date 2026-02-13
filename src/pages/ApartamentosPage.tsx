import CategoryProperties from "./CategoryProperties";

const ApartamentosPage = () => (
  <CategoryProperties
    title="Apartamentos em Irecê e Região"
    subtitle="Explore apartamentos modernos e bem localizados em Irecê e região."
    categoryFilter={["Apartamento"]}
    emptyMessage="Nenhum apartamento disponível no momento. Entre em contato para saber sobre novas oportunidades."
  />
);

export default ApartamentosPage;
