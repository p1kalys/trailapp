import { Images } from "../utils/Images";

const Header = () => {
  return (
    <header
      className="relative w-full min-h-[130px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Images.banner})` }}
    >
      <div className="absolute left-14 sm:left-16">
        <img
          src={Images.logo}
          alt="Logo"
          className="h-auto w-32 sm:w-34 md:w-36 drop-shadow"
          loading="eager"
          decoding="async"
        />
      </div>
    </header>
  );
};

export default Header;
