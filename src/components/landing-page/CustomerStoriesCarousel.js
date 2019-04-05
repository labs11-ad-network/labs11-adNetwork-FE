import React, { Component } from "react";
import { CustomerStoriesCarouselStyle } from "./CustomerStoriesCarouselStyle";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

let responsive = {
  0: {
    items: 1
  },
  481: {
    items: 2
  },
  939: {
    items: 3
  }
};

class CustomerStoriesCarousel extends Component {
  render() {
    return (
      <CustomerStoriesCarouselStyle>
        <div className="container">
          <h2 className="testimonial-heading">Costumer Stories</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            quae autem beatae delectus, tempore voluptatum?
          </p>

          <div className="card-testimonial">
            <OwlCarousel
              className="owl-theme"
              autoplay={true}
              loop
              margin={30}
              responsive={responsive}
              nav
            >
              <div className="item">
                <div className="testimonial-card">
                  <p>testing</p>
                </div>
              </div>

              <div className="item">
                <div className="testimonial-card">
                  <div className="testimonial-item-flex">
                    {/* <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
                      alt="profile pic"
                      className="testimonial-profile_picture"
                    /> */}
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates dignissimos impedit laborum ab? Reprehenderit,
                    perferendis?
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-card">
                  <p>testing</p>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-card">
                  <p>testing</p>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-card">
                  <p>testing</p>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-card">
                  <p>testing</p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </CustomerStoriesCarouselStyle>
    );
  }
}

export default CustomerStoriesCarousel;
