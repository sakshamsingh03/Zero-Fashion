import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const filteredProducts = all_product.filter(item => props.category === item.category);
  
  return (
    <div className='shop-category'>
      <div className="banner-wrapper">
        <img
          className="shopcategory-banner"
          src={props.banner}
          alt={`${props.category} category banner`}
        />
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{Math.min(12, filteredProducts.length)}</span> out of {filteredProducts.length} products
        </p>
        <div className="sort-container">
          <button className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="dropdown icon" className="dropdown-icon" />
          </button>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item) => {
          if(props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
      {filteredProducts.length > 12 && (
        <div className="load-more-container">
          <button className="shopcategory-loadmore">
            Explore More
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;