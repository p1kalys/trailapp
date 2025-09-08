import { Images } from "../utils/Images";

const Header = () => {
  return (
    <header
      className="relative w-full min-h-[144px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Images.banner})` }}
    >
      <div className="absolute top-3 left-14 sm:top-4 sm:left-16">
        <img
          src={Images.logo}
          alt="Logo"
          className="h-26 w-auto sm:h-28 md:h-30 drop-shadow"
          loading="eager"
          decoding="async"
        />
      </div>
    </header>
  );
};

export default Header;
