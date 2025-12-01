import { Header } from "../components/ui-components/header";
import { Footer } from "../components/ui-components/footer";
import { ProductCard } from "../components/ui-components/ProductCard";

import categorie1 from "../assets/images/categorie1.jpg";
import cat1 from "../assets/images/cat1.jpg";
import cat2 from "../assets/images/cat2.jpg";
import cat3 from "../assets/images/cat3.jpg";
import cat4 from "../assets/images/cat4.jpg";

// import { desc } from "framer-motion/client";

export const Categories = () => {
  const categ = [
    {
      image: cat1,
      title: "Tissus",
      description:
        "Large sélection de tissus pour tous vos projets de couture.",
      price: undefined,
      link: "/categories/tissus",
    },
    {
      image: cat2,
      title: "Accessoires",
      description:
        "Tout ce dont vous avez besoin pour compléter vos créations.",
      price: undefined,
      link: "/categories/accessoires",
    },
    {
      image: cat3,
      title: "Bouttons",
      description:
        "Des boutons de toutes formes et tailles pour embellir vos vêtements.",
      price: undefined,
      link: "/categories/bouttons",
    },
    {
      image: cat4,
      title: "Fils à coudre",
      description:
        "Fils de haute qualité pour des coutures solides et durables.",
      price: undefined,
      link: "/categories/fils-a-coudre",
    },
  ];

  return (
    <>
      <div>
        <Header />
        <section
          className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${categorie1})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
            Découvrez nos catégories
          </h1>
        </section>

        <section className="px-6 md:px-20 py-12 text-center">
          <h2 className="text-2xl font-semibold mb-6"> </h2>
          <p className="text-gray-600 mb-8">
            Explorez une variété de catégories pour tous vos besoins en couture.
            Que vous cherchiez des tissus, des accessoires ou des outils, nous
            avons tout ce qu'il vous faut.
          </p>
          {/* Contenu des catégories peut être ajouté ici */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 cursor-pointer">
            {categ.map((p, i) => (
              <ProductCard
                key={i}
                image={p.image}
                title={p.title}
                description={p.description}
                link={p.link}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
