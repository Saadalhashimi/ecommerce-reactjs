import React, {Fragment} from 'react'

const Image = ({category}) => {
  console.log(category)
  return (
    <Fragment>
        {(category === "smartphones" && <img src={require('../assets/images/smartphones.jpg')} alt={category} />)
            || 
            (category === "laptops" && <img src={require('../assets/images/laptops.jpg')}  alt={category} />)
            || 
            (category === "groceries" && <img src={require('../assets/images/grocery.jpg')}  alt={category} />)
            || 
            (category === "home-decoration" && <img src={require('../assets/images/decoration.jpg')}  alt={category} />)
            || 
            (category === "skincare" && <img src={require('../assets/images/skincare.jpg')}  alt={category} />)
            || 
            (category === "fragrances" && <img src={require('../assets/images/fragrances.jpg')}  alt={category} />)
            }
    </Fragment>
  )
}

export default Image