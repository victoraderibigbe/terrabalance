import Image from "next/image";
import loginBg from "../../../public/images/login.jpg";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">
      <div className="p-5 lg:p-10">
        <nav>
          <Link href={"/"} className="flex items-center gap-1 !no-underline">
            <Image
              src={"/terra-logo.png"}
              alt="Terra Balance logo"
              width={30}
              height={30}
            />
            <p className="font-semibold text-base md:text-lg lg:text-xl">
              Terra Balance
            </p>
          </Link>
        </nav>

        <div className="my-5">{children}</div>
      </div>
      <div className="hidden md:flex justify-center items-center col-span-2">
        <Image
          src={loginBg}
          alt="A woman smiling"
          className="object-cover w-full h-full"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default layout;
