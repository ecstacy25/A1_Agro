import  './footer.css';
import { BsTwitter, BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin, BsPinterest } from "react-icons/bs";
const Footer = () => {
  const socialIcons = [
    // {
    //   to: "https://twitter.com/ecstacy_ibiam",
    //   icon: <BsTwitter />,
    // },
    {
      to: "https://www.facebook.com/profile.php?id=100094470590741&mibextid=ZbWKwL/",
      icon: <BsFacebook />,
    },
    {
      to: "https://www.linkedin.com/in/wisdom-avanhen-409543282",
      icon: <BsLinkedin />,
    },
    {
      to: "https://instagram.com/a1agro_foods?igshid=MzNlNGNkZWQ4Mg==",
      icon: <BsInstagram />,
    },
    {
      to: "https://wa.link/ot5jor",
      icon: <BsWhatsapp />,
    },
    // {
    //   to: "https://www.pinterest.com/",
    //   icon: <BsPinterest />,
    // },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>A1 Agro &copy; 2023</p>
        <div className="social-icons">
          {socialIcons.map((item, index) => (
            <a key={index} href={item.to}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
