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
          <h2
            className="testimonial-heading wow fadeIn"
            id="reviews"
            data-wow-delay=".2s"
            data-wow-duration="2s"
          >
            Costumer Stories
          </h2>
          <p
            className="wow fadeInRightBig"
            data-wow-delay=".3s"
            data-wow-duration="2s"
          >
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
                  <div className="testimonial-item-flex">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
                      alt="profile pic"
                      className="testimonial-profile_picture"
                    />
                    <div className="testimonial-title_wrapper">
                      <h3 className="customer-name">Name here</h3>
                      <p>Envato Customer</p>
                    </div>
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
                  <div className="testimonial-item-flex">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
                      alt="profile pic"
                      className="testimonial-profile_picture"
                    />
                    <div className="testimonial-title_wrapper">
                      <h3 className="customer-name">Name here</h3>
                      <p>Envato Customer</p>
                    </div>
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
                  <div className="testimonial-item-flex">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
                      alt="profile pic"
                      className="testimonial-profile_picture"
                    />
                    <div className="testimonial-title_wrapper">
                      <h3 className="customer-name">Name here</h3>
                      <p>Envato Customer</p>
                    </div>
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
                  <div className="testimonial-item-flex">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
                      alt="profile pic"
                      className="testimonial-profile_picture"
                    />
                    <div className="testimonial-title_wrapper">
                      <h3 className="customer-name">Name here</h3>
                      <p>Envato Customer</p>
                    </div>
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
                  <div className="testimonial-item-flex">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
                      alt="profile pic"
                      className="testimonial-profile_picture"
                    />
                    <div className="testimonial-title_wrapper">
                      <h3 className="customer-name">Name here</h3>
                      <p>Envato Customer</p>
                    </div>
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
                  <div className="testimonial-item-flex">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
                      alt="profile pic"
                      className="testimonial-profile_picture"
                    />
                    <div className="testimonial-title_wrapper">
                      <h3 className="customer-name">Name here</h3>
                      <p>Envato Customer</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates dignissimos impedit laborum ab? Reprehenderit,
                    perferendis?
                  </p>
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
