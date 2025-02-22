import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

let  Img=()=> {
  return (
    <div style={{width:"100%",height:"350px"}} > {/* Adjust width and height here */}
      <Carousel showThumbs={false} showArrows={false} showStatus={false} stopOnHover={false} autoPlay interval={5000}  infiniteLoop transitionTime={600}
         className="img_carousel">
        <div>
          <img src="https://commercialvehicle.in/wp-content/uploads/2024/04/Rapido-all-services-1-1.jpg"/>
        </div>
        <div>
          <img src="https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2023/12/Rapido-cab.jpg"/>
        </div>
        <div>
        <img src="https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2024/04/bike-taxi-featured-1-760x570.png"/>
        </div>
      </Carousel>
    </div>
  );
}
export default Img;
