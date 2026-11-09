import Button from "./Button.jsx";
export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <div>
          <h1>A New Way to Cook Begins With the Sun.</h1>
          <p>Discover a smarter outdoor cooking experience. SUNOVEN harnesses the power of sunlight to bring a different approach to preparing everyday meals.</p>
          <div className="cta"><Button href="#cooker">Explore SUNOVEN</Button><Button href="#how" ghost>How It Works</Button></div>
        </div>
        {/* TODO: replace this illustration with a real hero photo: <img src="/images/hero.jpg" alt="..." /> */}
        <div className="scene" role="img" aria-label="Illustration of a SUNOVEN solar cooker under a low sun">
          <svg viewBox="0 0 400 440" preserveAspectRatio="xMidYMid slice">
            <g className="ray" stroke="#D99A36" strokeWidth="6" strokeLinecap="round" opacity=".55"><path d="M200 70v-40M200 430v-40M0 250h40M360 250h40M58 108l28 28M314 364l28 28M58 392l28-28M314 136l28-28" /></g>
            <circle cx="200" cy="250" r="92" fill="#D99A36" />
            <path d="M0 360h400v80H0z" fill="#493A2B" />
            <path d="M90 360 135 290h130l45 70z" fill="#F3EBDD" /><path d="M135 290h130l-14 22H149z" fill="#D99A36" />
            <rect x="150" y="312" width="100" height="48" rx="6" fill="#303B32" /><circle cx="200" cy="336" r="14" fill="#493A2B" />
          </svg>
          <span className="ph">Placeholder illustration – replace with hero photo</span>
        </div>
      </div>
      <div className="strip" style={{ marginTop: 56 }}><div className="wrap"><span>Powered by sunlight</span><span>Built for the outdoors</span><span>Cook with the sun.</span></div></div>
    </div>
  );
}
