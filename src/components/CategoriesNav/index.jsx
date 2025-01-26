import { categoriesData } from "@/data/dataStore";
import Image from "next/image";
import Link from "next/link";

const CategoriesNav = () => {
  const categories = categoriesData();

  return (
    <div className="flex items-center justify-between gap-5 md:gap-10 overflow-auto p-5 md:px-5">
      {categories.map((cat, idx) => (
        <Link
          key={idx}
          href={`/${cat.category.toLowerCase()}`}
          className="flex items-center gap-2 text-base md:text-lg min-w-28 w-full md:justify-center font-semibold text-foreground"
        >
          <div className="flex item-center p-1 rounded-full bg-neutralGray">
            <Image
              src={cat.imageUrl}
              alt={cat.category}
              width={30}
              height={30}
            />
          </div>
          {cat.category}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesNav;
