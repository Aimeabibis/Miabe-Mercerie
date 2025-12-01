import { Link } from "react-router-dom";

interface ProductProps {
  title: string;
  image: string;
  description: string;
  link: string;
  
  
}
export const ProductCard=({image, title, description, link}: ProductProps) => {
    return (
     <div className="bg-[#f8f8f8] rounded-2xl shadow-sm hover:shadow-md transition p-4 text-center">
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-56 object-cover mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 mb-3">{description}</p>
      <Link
        to={link}
        className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
      >
        Voir plus
      </Link>
    </div>
    );
}