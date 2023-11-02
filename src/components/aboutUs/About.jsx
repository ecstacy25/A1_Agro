import "./about.css";
import Line from "../../assets/line.png";
// import Arrow from "../arrowDown/Arrow";


const About = () => {
  return (
    <section className='about' id='about'>
      {/* <Arrow /> */}
      <div className='about_us'>

        <img className='about_line' src={Line} alt='line' width={100} height={7} />

        <h1>About Us</h1>

        <p>
        We are committed to promoting Nigeria's rich agricultural heritage on the global stage by offering a comprehensive range of handpicked products, including grains, fruits, vegetables, and various other farm-fresh commodities. With a strong emphasis on quality and sustainability, we prioritize fostering partnerships with local farmers and communities, contributing to the development of ethical and eco-friendly farming practices. <br />
        Our mission is to be a leading exporter of top-tier Nigerian agricultural goods, delivering excellence and reliability to our international clientele.
        </p>
      </div>
      
    </section>
  );
};

export default About;
