import { Header } from "../components/ui-components/header";
import { Footer } from "../components/ui-components/footer";
import { Instagram, Linkedin, Twitter } from "lucide-react";

import contact from "../assets/images/contact.jpg";


export const Contact = () => {
  return (
    <>
      <div>
        <Header />
        <section
          className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${contact})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
            Contactez-nous
          </h1>
        </section>
        {/* formulaire */}
        <section className="max-w-4xl mx-auto px-6 py-10">
            <h2 className="text-2xl font-semibold mb-6">Nous aimerions avoir de vos nouvelles !</h2>
            <form className="space-y-6">
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        placeholder="Votre nom"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        placeholder="Votre email"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        rows={5}
                        placeholder="Votre message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
                >
                    Envoyer
                </button>
            </form>

      </section>
      {/* contact */}
    
        <section className="max-w-4xl mx-auto px-6 py-10 flex justify-center gap-10">
          <div className="w-1/2 mt-20 ">
          <h3 className="font-bold text-black text-2xl mb-8">
                Pourquoi nous contacter ?
          </h3>
            <p className="">
                Nous sommes là pour vous aider ! Que vous ayez des questions sur
                nos produits, besoin d'assistance avec une commande, ou que vous
                souhaitiez simplement en savoir plus sur ce que nous faisons, n'hésitez
                pas à nous contacter. Votre satisfaction est notre priorité.
            </p>
          </div>
          <div className="h-auto w-auto p-10 rounded-sm shadow-md hover:bg-red-50 transition-all duration-300 ease-in-out hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-5 flex justify-center">
              Nos coordonnées
            </h3>

            <p className="mb-4">
              <strong>Téléphone :</strong> +229 40116703
            </p>
            <p className="mb-4">
              <strong>Email :</strong> aimeabibis@gmail.com
            </p>
            <p>
              <strong>Adresse :</strong> Comé, Bénin
            </p>
            <div className="mt-4">
              <p className="mb-2 font-semibold">Suivez-nous :</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <Linkedin className="hover:text-gray-300 transition" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="hover:text-gray-300 transition" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="hover:text-gray-300 transition" />
                </a>
              </div>
            </div>
          </div>
        </section>


    </div>

      <Footer />
    </>
  );
};
