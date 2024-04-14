import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full z-10">
      <nav className="max-w-[1440px] mx-auto flex 
      justify-between items-center sm:px-16 px-5 py--3">
        <div className="top-0 right-0 left-0 bottom-4 bg-white z-0" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}></div>

        <Link href="/" className="flex justify-center
         items-center z-10">
          <Image
            src="/newlogo11.svg"
            alt="Luxe & Drive Logo"
            width={200}
            height={20}
            className="object-contain"
            style={{ marginLeft: "-50px" }}
          />
        </Link>
        <Link href="/signin">
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-white font-bold rounded-full bg-primary-green z-10 min-w-[130px] left-25"
          />
        </Link>
        <Link href="/signup">
          <CustomButton
            title="Sign Up"
            btnType="button"
            containerStyles="text-white font-bold rounded-full bg-primary-green z-10 min-w-[130px] left-25"
          />
        </Link>


      </nav>
    </header>

  )
}

export default Navbar