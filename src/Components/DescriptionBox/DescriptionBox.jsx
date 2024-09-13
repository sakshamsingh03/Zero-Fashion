import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="decriptionbox-nav-box">Description</div>
            <div className="decriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Itaque facilis aliquam delectus nemo architecto, deserunt
               magnam voluptatum minima, qui nulla impedit eos fugit enim voluptatem perspiciatis ullam, 
               ipsam dignissimos omnis dolorum obcaecati illum iste id velit incidunt. Qui, error voluptate optio nemo delectus consectetur! 
               Cum quasi impedit incidunt magnam veniam?</p>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ab deserunt ex deleniti error quaerat praesentium similique iusto accusamus ducimus magni, 
                animi exercitationem ullam quod asperiores corrupti expedita commodi voluptatem vero.
               </p>
        </div>
    </div>
  )
}

export default DescriptionBox