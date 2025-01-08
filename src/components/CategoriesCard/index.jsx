import Image from "next/image";

const CategoriesCard = ({ category, quantity, imageUrl, altText }) => {
  return (
    <>
      <div className="flex items-center gap-5">
        <div className="flex item-center p-1 rounded-full bg-neutralGray">
          <Image src={imageUrl} alt={altText} width={40} height={40} />
        </div>
        <div>
          <p className="font-semibold">{category}</p>
          <p className="text-gray-500">{quantity}</p>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
