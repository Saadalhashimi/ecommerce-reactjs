import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider= ({images})=>{

  return (

            <Carousel>
               {images.map((img,i)=>{
                   return(
                    <div>
                    <img src={img} alt={i}/>
                    <p className="legend"></p>
                    </div>
                   )
               })}
                
            </Carousel>
  )

}
export default Slider