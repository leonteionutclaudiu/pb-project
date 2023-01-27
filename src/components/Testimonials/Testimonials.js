import Carousel from 'react-bootstrap/Carousel';
import classes from './Testimonials.module.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Testimonials() {
  return (
    <div className={classes.testimonials}>
      <div className={classes.testimonialsText}>
        <h2 className={classes.testimonialsTitle}>
          People love Big
          <br />
          <span className={classes.testimonialsTitleSpan}>Invest</span>
        </h2>
      </div>
      <Carousel
        className={classes.carousel}
        prevIcon={<div className={classes.leftArrow}> &#x2190; </div>}
        nextIcon={<div className={classes.rightArrow}> &#x2192; </div>}
        interval={null}
        variant="dark"
      >
        <Carousel.Item className={classes.carouselItem}>
          <div className={classes.topTestimonial}>
            <img
              className={classes.testimonialsImage}
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt="Second slide"
            />
            <div>
              <p className={classes.carouselPersonName}>Albert Abello</p>
              <p className={classes.carouselPersonPosition}>
                Director of Growth
              </p>
            </div>
          </div>

          <div className={classes.bottomTestimonial}>
            <div className={classes.quoteIcon}>
              <FormatQuoteIcon fontSize="large" />
            </div>
            <p className={classes.carouselText}>
              Magical product actually works! It has radically changed the way
              we build our audiences. Increasing new customer sales by 6x in our
              most mature market. Nice!
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className={classes.carouselItem}>
          <div className={classes.topTestimonial}>
            <img
              className={classes.testimonialsImage}
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="First slide"
            />
            <div>
              <p className={classes.carouselPersonName}>Another user</p>
              <p className={classes.carouselPersonPosition}>Manager</p>
            </div>
          </div>
          <div className={classes.bottomTestimonial}>
            <div className={classes.quoteIcon}>
              <FormatQuoteIcon fontSize="large" />
            </div>
            <p className={classes.carouselText}>Some test text.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials;
