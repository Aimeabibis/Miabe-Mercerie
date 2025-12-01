import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ui-components/ProductCard";
import { Header } from "../components/ui-components/header";
import { Footer } from "../components/ui-components/footer";
import img1 from "../assets/images/imagerie.jpg";
import img2 from "../assets/images/imagerie1.jpg";
import img3 from "../assets/images/imagerie2.jpg";

import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";

export const Home = () => {
  const images = [img1, img2, img3];

  const [current, setCurrent] = useState(0);

  const products = [
    {
      image: product1,
      title: "Fil de coton bio",
      description: "Doux, respirant et facile à utiliser.",
      link: "/categories",
    },
    {
      image: product2,
      title: "Buttons",
      description: "Idéale pour vos créations.",
      link: "/categories",
    },
    {
      image: product3,
      title: "Surfilage",
      description: "Parfait pour des finitions nettes.",
      link: "/categories",
    },
  ];

  // Changement automatique toutes les 4 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full bg-[#fbf9f9] text-gray-800">
      <Header />
      {/* === Carrousel d'images === */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={images[current]}
            src={images[current]}
            alt="Bannière Abibis Mercerie"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Texte centré sur le carrousel */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Bienvenue chez Miabé Mercerie
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl font-bold">
            Tissus, accessoires et créations uniques pour vos projets couture.
          </p>
          <Link
            to="/newproducts"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            Découvrir nos nouveautés
          </Link>
        </div>

        {/* Petits indicateurs ronds */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-red-600" : "bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* === Présentation === */}
      <section className="px-6 md:px-20 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Notre passion, votre créativité{" "}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Chez <strong>Miabé Mercerie</strong>, nous croyons que chaque création
          mérite les meilleurs matériaux. Découvrez nos tissus de qualité,
          boutons, rubans et accessoires pour donner vie à vos idées.
        </p>
      </section>

      {/* === Produits phares === */}
      <section className="px-6 md:px-20 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-8 text-center">Produits phares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
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

      {/* Section Catégories */}
      <section className="px-6 md:px-20 py-12 bg-[#fff4f4]">
        <h2 className="text-2xl font-bold mb-8 text-center">Nos catégories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Tissus", "Boutons", "Accessoires", "Fil & Aiguilles"].map(
            (cat) => (
              <Link
                key={cat}
                to="/categories"
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition font-semibold"
              >
                {cat}
              </Link>
            )
          )}
        </div>
      </section>

      {/* Section Contact / CTA */}
      <section className="px-6 md:px-20 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Besoin d’un conseil ?</h2>
        <p className="text-gray-600 mb-6">
          Contactez notre équipe passionnée — nous serons ravis de vous aider à
          choisir vos matériaux !
        </p>
        <Link
          to="/contact"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold"
        >
          Nous contacter
        </Link>
      </section>

      <Footer />
    </div>
  );
};
