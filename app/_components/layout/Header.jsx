import Logo from "../ui/Logo";
import MenuMobile from "../ui/MenuMobile";

function Header() {
  return (
    <div className="bg-primary w-full flex justify-between items-center p-4 text-white">
      <MenuMobile />
      <Logo />
      <p>profile</p>
    </div>
  );
}

export default Header;
