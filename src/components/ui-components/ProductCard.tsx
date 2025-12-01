import { Link } from "react-router-dom";

interface ProductProps {
  title: string;
  image: string;
  description: string;
  link: string;
  price?: number;
}
export const ProductCard = ({
  image,
  title,
  description,
  link,
  price,
}: ProductProps) => {
  return (
    <div className="bg-[#f8f8f8] rounded-2xl shadow-sm hover:shadow-lg transition p-4 text-center hover:scale-105">
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-56 object-cover mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 mb-3">{description}</p>
      {price && <p className="text-red-600 font-bold mb-4">{price} €</p>}
      <Link
        to={link}
        className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
      >
        Voir plus
      </Link>
    </div>
  );
};
