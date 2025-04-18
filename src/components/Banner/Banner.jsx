import "./Banner.css";
import Main_Banner from "/images/banner.png";

function Banner() {
  return (
    <header className="banner">
      <img src={Main_Banner} alt="Banner Principal" />
    </header>
  );
}

export default Banner;
