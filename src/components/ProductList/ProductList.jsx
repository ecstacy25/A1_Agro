
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';
import Line from "../../assets/line.png";
import Loofah from "../../assets/img1.jpg";
import Neem from "../../assets/img2.jpg";
import Crayfish from "../../assets/Crayfish.jpeg";
import RedOil from "../../assets/RedOil.jpg";
import Garri from "../../assets/Garri.jpeg";
import Plantain from "../../assets/Plantain.jpg";
import DrySnail from "../../assets/Drysnail.jpeg";
import BitterCola from "../../assets/Bittercola.jpeg";
import CatFish from "../../assets/Catfish.jpeg";
import Melon from "../../assets/Melon.jpeg";
import Beans from "../../assets/Beans.jpeg";
import Veggies from "../../assets/Veggies.jpeg";


const MovingText = ({ text }) => {
  return (
    <div className="moving-text">
      <marquee behavior="scroll" direction="left">
        {text}
      </marquee>
    </div>
  );
};


const products = [
    {
      name: 'Loofah Sponge',
      image: Loofah,
      description: 'Loofah sponge is a natural exfoliating material derived from matured loofah fruit. Renowned for its gentle skin-sloughing properties, its popular in skincare and bath products.',
    },
    {
      name: 'Neem Leaf',
      image: Neem,
      description: 'Neem leaf is commonly used in the treatment of a wide range of health conditions, including skin disorders, digestive issues, and infections. Its bitter taste is often indicative of its strong medicinal properties.',
    },
    {
      name: 'Crayfish',
      image: Crayfish,
      description: 'Crayfish is a small freshwater crustacean resembling a small lobster. It is widely used as an ingredient in various culinary dishes, adding a distinctive flavor to soups, stews, and sauces. .',
    },
    {
      name: 'Palm Oil',
      image: RedOil,
      description: 'Red palm oil is a nutritious vegetable oil extracted from the fruit of the oil palm tree. Widely used in African, Asian, and South American cuisines, red palm oil adds a distinct flavor and rich aroma to various dishes. .',
    },
    {
      name: 'Yellow Garri',
      image: Garri,
      description: 'Yellow garri is a popular West African food product made from cassava tubers. It is similar to regular garri, but with a characteristic yellow color due to the addition of palm oil during processing.',
    },
    {
      name: 'Plantain Flour',
      image: Plantain,
      description: 'Plantain flour is a gluten-free flour made from dried plantains. It is a versatile ingredient used in various culinary preparations, including baking and cooking.',
    },
    {
      name: 'Honey Beans & Beans Flour',
      image: Beans,
      description: 'Honey beans, known for their distinctive taste and soft texture, are a specific variety of beans popular in various culinary dishes. Beans flour, derived from dried beans, is a versatile ingredient used in cooking, renowned for its nutritional richness and wide applicability in diverse cuisines.',
    },
    {
      name: 'Veggies',
      image: Veggies,
      description: 'Veggies, short for vegetables, encompass a wide variety of edible plant parts, including leaves, stems, roots, and flowers. They are a vital component of a balanced diet, providing essential vitamins, minerals, and dietary fiber necessary for maintaining overall health and well-being.',
    },
    {
      name: 'Catfish',
      image: CatFish,
      description: 'Dry catfish is a dehydrated form of catfish, a popular freshwater fish known for its distinct taste and firm texture. With its moisture removed through a drying process, dry catfish offers an extended shelf life and serves as a convenient ingredient for various culinary preparations, including soups, stews, and traditional dishes in many cultures.',
    },
    {
      name: 'Dried Snail',
      image: DrySnail,
      description: 'Dried snail refers to snails that have undergone a dehydration process, resulting in the removal of moisture from the shell and the flesh. Common in many cuisines worldwide, dried snails offer a preserved and concentrated snail flavor, often used as a key ingredient in soups, stews, and various traditional dishes.',
    },
    {
      name: 'Bitter kola',
      image: BitterCola,
      description: 'Bitter kola, also known as Garcinia kola, is a bitter-tasting nut commonly found in West Africa. It is renowned for its cultural, medicinal, and nutritional significance, often used in traditional practices and herbal remedies.',
    },
    {
        name: 'Melon',
        image: Melon,
        description: 'Melon, also known as Egusi in West Africa, refers to a type of edible seed derived from melon plants. Commonly used in various culinary dishes, particularly in Nigerian cuisine, melon seeds are valued for their rich nutty flavor and high nutritional content.',  
      },
    
  ];

const ProductList = () => {
  return (
    <section className="ProductList" id="ProductList">
      <img className="about_line" src={Line} alt="line" width={100} height={7} />
      <h1 className="Our">
        Our Products
      </h1>

      <div className="product-list-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
          />
        ))}
        <div className='moving-text marquee'>
        <MovingText className  text="Don't hesitate to order a wide range of agricultural products as we are fully equipped to fulfill your requests!" />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
