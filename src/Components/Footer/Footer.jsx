import React from 'react'
//import footerlogo from '../../assets/images/footerlogo.png';

const Footer = () => {
  return (
    <>
    <footer className="footer space-ptb bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 mb-5 mb-lg-0">
            <h5 className="text-primary mb-2 mb-sm-4">IT Services</h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-3 mb-sm-0">
                <li><a href="#">Data Synchronization</a></li>
                <li><a href="#">Content Management</a></li>
                <li><a href="#">Content Delivery</a></li>
                <li><a href="#">Transaction Processing</a></li>
                <li><a href="#">Process Automation</a></li>
              </ul>
              <ul className="list-unstyled mb-3 mb-sm-0">
                <li><a href="#">Event Processing</a></li>
                <li><a href="#">Information Security</a></li>
                <li><a href="#">Mobile Platforms</a></li>
                <li><a href="#">Communications</a></li>
              </ul>
              <ul className="list-unstyled mb-0">
                <li><a href="#">Event Processing</a></li>
                <li><a href="#">Information Security</a></li>
                <li><a href="#">Mobile Platforms</a></li>
                <li><a href="#">Communications</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-5 mb-sm-0">
            <h5 className="text-primary mb-2 mb-sm-4">Company</h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li><a href="#">About</a></li>
                <li><a href="#">Leadership Team</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Careers <span className="badge bg-success ms-2">We're hiring</span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h5 className="text-primary mb-2 mb-sm-4">Support</h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li><a href="#">Forum Support</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Pricing And Plans</a></li>
                <li><a href="#">Cookies Policy</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mt-5">
            <h5 className="text-primary mb-2 mb-sm-4">Social</h5>
            <ul className="list-unstyled social-icon">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-github"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
            </ul>
             <p className="mb-0 text-white mt-4">©Copyright {new Date().getFullYear()} <a href="/" className="text-primary">write2program</a> All Rights Reserved.</p>
          </div>
          <div className="col-sm-6 mt-5">
            <h5 className="text-primary mb-2 mb-sm-4">Where we are</h5>
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid flag-svg" src="images/svg/uk.svg" alt=""/>
              <div className="ms-4">
                <h6 className="mb-0 text-white">Mumbai, Maharashtra</h6>
              </div>
            </div>
            {/* <div className="d-flex align-items-center">
              <img className="img-fluid flag-svg" src="images/svg/usa.svg" alt=""/>
              <div className="ms-4">
                <h6 className="mb-0 text-white">214 West Arnold St. New York, NY 10002</h6>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>

    <div id="back-to-top" className="back-to-top">up</div>
    </>
  )
}

export default Footer