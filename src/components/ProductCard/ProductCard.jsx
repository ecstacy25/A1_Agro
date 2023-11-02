import './ProductCard.css';

const ProductCard = ({ name, image, description }) => {
  return (
    <div className="product-card-container"> 
      <img src={image} alt={name} className="product-image" />
      <h3 className='product-name'>{name}</h3>
      <p className='product-description'>{description}</p>
    </div>
    
  );
};

export default ProductCard;
