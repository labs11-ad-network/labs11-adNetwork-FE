import styled from "styled-components";

export const CustomerStoriesCarouselStyle = styled.div`
  background: #eff4ff !important;
  padding: 150px 0 200px 0;
  margin-top: 200px;

  @media (min-width: 481px) {
    margin-top: initial;
  }
  .container {
    max-width: 1100px;
    width: calc(100vw - 10vw);
    margin: 0 auto;
    @media (min-width: 940px) {
      width: calc(100vw - 5vw);
    }
  }

  .costumer-stories {
    margin-top: 150px;
  }
  /* Testimonial Heading */
  .testimonial-heading {
    text-align: center;
  }
  p {
    max-width: 567px;
    margin: 10px auto;
    text-align: center;
  }

  /* Testimonial Card */

  .testimonial-card {
    border: 1px solid #cadce2;
    border-top: none;
    border-radius: 8px;
    text-align: center;
    background: #fff;
    padding: 0 15px 25px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    padding-top: 24px;
    margin-top: 39px;

    .testimonial-profile_picture {
      max-width: 65px;
      height: 65px;
      margin-right: 15px;
    }
  }

  .testimonial-item-flex {
    display: flex;
    align-items: flex-start;
  }
  .customer-name {
    margin: 0;
    padding: 0;
    text-align: initial;
  }
  .testimonial-title_wrapper {
    p {
      padding: 0;
      margin: 2px 0;
      font-size: 17px !important;
    }
  }
  .testimonial-card p {
    text-align: left;
  }
`;
