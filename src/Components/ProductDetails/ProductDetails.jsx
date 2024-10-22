import React, { useContext, useState } from 'react';
import './ProductDetails.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const ProductDetails = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(product.id, count);
        Toastify({
            text: `
                <div style="display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" style="margin-right: 8px;">
                        <path fill="#c8e6c9" d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"></path>
                        <path fill="#4caf50" d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"></path>
                    </svg>
                    ${count} ${count === 1 ? 'item added to cart successfully!' : 'items added to cart successfully!'}
                </div>
            `,
            duration: 3000,
            gravity: "top",  
            position: "right", 
            backgroundColor: "#4caf50",
            escapeMarkup: false,
        }).showToast();
        
    };
console.log("product",product)
    return (
        <div className='productdetails'>
            <div className="productdetails-left">
                <div className="productdetails-img">
                    <img className='productdetails-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdetails-right">
                <h1>{product.name}</h1>
                <div className="productdetails-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>{122}</p>
                </div>
                <div className="productdetails-right-prices">
                    <div className="productdetails-right-price-old">${product.old_price}</div>
                    <div className="productdetails-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdetails-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
                    commodi sed. Deleniti mollitia rem consectetur corrupti in reiciendis animi ab.
                </div>
                <div className="productdetails-right-size">
                    <h1>Select Size</h1>
                    <div className="productdetails-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <div className="button-container">
                     <button className="increment" onClick={handleIncrement}>+</button>
                     <input className="count" type="number" value={count} readOnly style={{ width: '40px', height: '40px', textAlign: 'center' }}/>
                     <button className="decrement" onClick={handleDecrement}>-</button>
                </div>

                <button className='addToCart' onClick={handleAddToCart}>ADD TO CART</button>
                <p className='productdetails-right-category'><span>Tags :</span>Modern, Latest </p>
            </div>
        </div>
    )
}

export default ProductDetails;
