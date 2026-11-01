import Link from "next/link";
import IconButton from "../ui/IconButton";
import Logo from "../ui/Logo";
import MenuMobile from "../ui/MenuMobile";
import HeaderSearch from "../ui/HeaderSearch";

function Header() {
  return (
    <div className="bg-primary w-full flex justify-between items-center p-4 text-white">
      <MenuMobile />
      <Logo />
      <div className="space-x-2">
        <Link href={"/cart"}>
          <IconButton
            iconName="cart"
            variant="outline"
            className="border-none text-white"
          />
        </Link>
        <HeaderSearch />
      </div>
    </div>
  );
}

export default Header;
