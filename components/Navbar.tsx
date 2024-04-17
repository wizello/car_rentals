import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-10 bg-white shadow-md border-b border-gray-200">
      <nav className="mx-auto flex items-center justify-between sm:px-16 px-5 py--3">
        <div className="flex items-center justify-start ml-0">
          <Link href="/" className="z-10">
            <Image
              src="/newlogo11.svg"
              alt="Luxe & Drive Logo"
              width={180}
              height={18}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
        <Link href="/aboutus">
            <CustomButton
              title="About Us"
              btnType="button"
              containerStyles="text-primary-green font-bold rounded-full z-10 min-w-[130px]"
            />
          </Link>
          <Link href="/racetracks">
            <CustomButton
              title="Race tracks"
              btnType="button"
              containerStyles="text-primary-green font-bold rounded-full z-10 min-w-[130px]"
            />
          </Link>

          <Link href="/signup">
            <CustomButton
              title="Sign Up"
              btnType="button"
              containerStyles="text-white font-bold rounded-full bg-primary-green z-10 min-w-[130px]"
            />
          </Link>
          <Link href="/signin">
            <CustomButton
              title="Sign In"
              btnType="button"
              containerStyles="text-white font-bold rounded-full bg-primary-green z-10 min-w-[130px]"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
