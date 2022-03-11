import { Wrapper } from "./TestimonialStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SectionTitle } from "../../components";
import images from "../../utils/images";

const Testimonials = () => {
  return (
    <Wrapper>
      <div className="testimonials-left"></div>
      <div className="testimonials-right"></div>
      <div className="testimonials-container">
        <div className="testimonials-wrap">
          <div className="testimonials-scroll">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="holder">
                  <div className="picture">
                    <img
                      src={images.testimonialImage1}
                      alt="testimonialImage1"
                    />
                  </div>
                  <div className="icon"></div>
                  <div className="text">
                    <blockquote>
                      <span></span>
                      "It really transcends everything we’ve done to date.
                      Everyone who’s seen the app has loved it".
                    </blockquote>
                    <p className="testimonial-name ">Cecil Usher</p>
                    <p className="testimonial-rank">CEO, Music Plug LLC</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="holder">
                  <div className="picture">
                    <img
                      src={images.testimonialImage2}
                      alt="testimonialImage2"
                    />
                  </div>
                  <div className="icon"></div>
                  <div className="text">
                    <blockquote>
                      <span></span>
                      "It really transcends everything we’ve done to date.
                      Everyone who’s seen the app has loved it".
                    </blockquote>
                    <p className="testimonial-name ">Cecil Usher</p>
                    <p className="testimonial-rank">CEO, Music Plug LLC</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="holder">
                  <div className="picture">
                    <img
                      src={images.testimonialImage3}
                      alt="testimonialImage3"
                    />
                  </div>
                  <div className="icon"></div>
                  <div className="text">
                    <blockquote>
                      <span></span>
                      "It really transcends everything we’ve done to date.
                      Everyone who’s seen the app has loved it".
                    </blockquote>
                    <p className="testimonial-name ">Cecil Usher</p>
                    <p className="testimonial-rank">CEO, Music Plug LLC</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="testimonials-contact"></div>
          <div className="testimonial-contact-item">
            <SectionTitle title="Have a project to discuss? Get in touch." />
            <div className="form-wrapper">
              <form>
                <div className="form-group name">
                  <input type="text" name="name" id="name" />
                  <label className="label">Name*</label>
                  <i className="bar"></i>
                </div>
                <div className="form-group-wrap">
                  <div className="form-group email">
                    <input type="text" name="email" id="email" />
                    <label className="label">Email*</label>
                    <i className="bar"></i>
                  </div>
                  <div className="form-group phone">
                    <input type="text" name="phone" id="phone" />
                    <label className="label">Phone</label>
                    <i className="bar"></i>
                  </div>
                </div>
                <div className="form-group name">
                  <div className="textarea-border">
                    <textarea
                      name="description"
                      placeholder="Type your message here..."
                      id="description"
                    ></textarea>
                    <label className="label">Message</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;
