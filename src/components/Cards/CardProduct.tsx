import { ProductType } from "@/data/ProviderProducts";
import Divider from "../utils/Divider";
import { aplyDescuento } from "@/utils/AplyDescuento";

interface CardProductProps {
  product: ProductType;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const newPrice = product.descuento.is_descuento
    ? aplyDescuento(product.price, product.descuento.porcent)
    : product.price;
  return (
    <article
      className="relative w-full custom:w-[200px] border-solid border-2
     border-border hover:border-primary-variant
       flex flex-col bg-background-1 overflow-hidden
        rounded-xl
        transition ease-in-out
        hover:shadow-lg
        cursor-pointer"
    >
      <div className="flex items-center justify-center p-3 h-[200px]">
        <img src={product.img_paht} alt={product.name_product} />
      </div>
      <div className="bg-white w-full p-2">
        <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis text-heading">
          {product.name_product}
        </h1>
        <div className="flex space-x-3 my-2">
          <h2 className="text-heading font-bold">${newPrice}</h2>
          {product.descuento.is_descuento && (
            <h2 className="text-secondary line-through ">${product.price}</h2>
          )}
        </div>

        <Divider />

        {product.descuento.is_descuento && (
          <span className="text-sm text-success font-semibold">
            Save - ${product.price - newPrice}
          </span>
        )}
      </div>
      {product.descuento.is_descuento && (
        <div className="absolute z-10 flex flex-col justify-center items-center text-sm text-white font-semibold top-0 right-0 w-[50px] h-[50px] bg-primary text-center rounded-bl-xl">
          <span className="mt-1 mb-1  leading-3">
            {product.descuento.porcent}%
          </span>
          <span>OFF</span>
        </div>
      )}
    </article>
  );
};

export default CardProduct;
