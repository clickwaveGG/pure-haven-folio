import CategoryProperties from "./CategoryProperties";

const CasasPage = () => (
  <CategoryProperties
    title="Casas em Irecê e Região"
    subtitle="Descubra casas de alto padrão e residências exclusivas em Irecê e região."
    categoryFilter={["Casa"]}
    emptyMessage="Nenhuma casa disponível no momento. Entre em contato para saber sobre novas oportunidades."
  />
);

export default CasasPage;
