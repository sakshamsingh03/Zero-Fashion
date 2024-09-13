import React from 'react'
import './ProductDetails.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDetails = (props) => {
    const {product} = props
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
            <button>ADD TO CART</button>
            <p className='productdetails-right-category'><span>Tags :</span>Modern, Latest </p>
        </div>
    </div>
  )
}

export default ProductDetails