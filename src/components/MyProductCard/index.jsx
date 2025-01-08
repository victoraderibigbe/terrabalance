import Image from "next/image";

const MyProductCard = ({
  imageUrl,
  imageAlt,
  productName,
  weight,
  price,
  route,
  key,
}) => {
  return (
    <div key={key} className="rounded-lg max-w-[11rem] md:max-w-[18rem] w-full hover:shadow-md">
      <div className="h-48 overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 md:p-3 lg:p-5">
        <div>
          <h5>{productName}</h5>
          <i className="text-sm md:text-base lg:text-lg">{weight}g</i>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm md:text-base lg:text-lg font-semibold">
            ₦ {price}
          </p>
          <button className="bg-accentYellow px-2 py-2 rounded-lg font-semibold text-primaryBrown text-sm md:text-base lg:text-lg md:px-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
