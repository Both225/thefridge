import IconButton from "../ui/IconButton";
import Logo from "../ui/Logo";
import MenuMobile from "../ui/MenuMobile";

function Header() {
  return (
    <div className="bg-primary w-full flex justify-between items-center p-4 text-white">
      <MenuMobile />
      <Logo />
      <div className="space-x-2">
        <IconButton
          iconName="cart"
          variant="outline"
          className="border-none text-white"
        />
        <IconButton
          iconName="search"
          variant="outline"
          className="border-none text-white"
        />
      </div>
    </div>
  );
}

export default Header;
