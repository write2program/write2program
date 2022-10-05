import React from 'react'
import A from '../../assets/images/slider/A.jpg';

const Banner = () => {
  return (
    <>
    <section className="banner">
      <div className="swiper-container">
        <div className="swiper-wrapper h-700 h-sm-500">
          <div className="swiper-slide align-items-center d-flex responsive-overlap-md bg-overlay-black-30" style={{backgroundIimage:"url(../../assets/images/slider/01.jpg)", backgroundSize: "cover",backgroundPosition: "center center"}}>
            <div className="swipeinner container">
              <div className="row justify-content-center">
                <div className="col-lg-9 col-md-10 text-center position-relative">
                  <h1 data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">A digital marketing company you can trust</h1>
                  <h6 data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.5s">Award-Winning website design & creative digital agency.</h6>
                  <a className="btn btn-dark btn-round text-white" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.75s" href="#">Get Started Now<i className="fas fa-arrow-right ps-3"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide align-items-center d-flex responsive-overlap-md bg-overlay-black-30" style={{backgroundIimage:"url(images/slider/02.jpg)", backgroundSize: "cover",backgroundPosition: "center center"}}>
            <div className="swipeinner container">
              <div className="row justify-content-center">
                <div className="col-lg-9 col-md-11 text-center position-relative">
                  <h1 data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">Award winning digital agency</h1>
                  <h6 data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.5s">We're Hi-soft. We help drive change with technology.</h6>
                  <a className="btn btn-dark btn-round text-white" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.75s" href="#">View Our Solution<i className="fas fa-arrow-right ps-3"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-prev"><i className="fas fa-arrow-left icon-btn"></i></div>
        <div className="swiper-button-next"><i className="fas fa-arrow-right icon-btn"></i></div>
      </div>
    </section>
    </>
  )
}

export default Banner