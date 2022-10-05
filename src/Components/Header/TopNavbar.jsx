import React from 'react';

const TopNavbar = () => {
  return (
    <>
    <header className="header default">
      <div className="topbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="d-block d-md-flex align-items-center text-center">
                <div className="me-4 d-inline-block py-1">
                  <a href="#"><i className="far fa-envelope me-2 fa-flip-horizontal text-primary"></i>write2program@gmail.com</a>
                </div>
                <div className="me-auto d-inline-block py-1">
                  <a href="tel:1-800-555-1234"><i className="fas fa-map-marker-alt text-primary me-2"></i>Mumbai, Maharashtra</a>
                </div>
                <div className="d-inline-block py-1">
                  <ul className="list-unstyled">
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar bg-white navbar-static-top navbar-expand-lg">
        <div className="container-fluid">
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
          <a className="navbar-brand" href="/">
            {/* <img className="img-fluid" src="images/logo.svg" alt="logo"/> */}
          </a>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="nav-item dropdown active">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
              </li>
              <li className="dropdown nav-item">
                <a href="#" className="nav-link" data-bs-toggle="dropdown">Services</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">IT Consultancy</a></li>
                    <li><a className="dropdown-item" href="#">Digital Services</a></li>
                    <li><a className="dropdown-item" href="#">Advisory Services</a></li>
                    <li><a className="dropdown-item" href="#">Data Structuring</a></li>
                    <li><a className="dropdown-item" href="#">Experience Design</a></li>
                    <li><a className="dropdown-item" href="#">Content Engineering</a></li>
                  </ul>
              </li>
              <li className="dropdown nav-item">
                <a href="#" className="nav-link" data-bs-toggle="dropdown">Company</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">How We Work<i className="fas fa-arrow-right"></i></a></li>
                    <li><a className="dropdown-item" href="#">Our Team<i className="fas fa-arrow-right"></i></a></li>
                    <li><a className="dropdown-item" href="#">Mission Vision<i className="fas fa-arrow-right"></i></a></li>
                    <li><a className="dropdown-item" href="#">Our Value<i className="fas fa-arrow-right"></i></a></li>
                  </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Careers</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="d-none d-sm-flex ms-auto me-5 me-lg-0 pe-4 pe-lg-0">
            <ul className="nav ms-1 ms-lg-2 align-self-center">
              <li className="contact-number nav-item pe-4 ">
                <a className="fw-bold" href="#"><i className="fab fa-whatsapp pe-2"></i>+91 9876543210</a>
              </li>
              <li className="header-search nav-item">
                <div className="search">
                  <a className="search-btn not_click" href="#"></a>
                  <div className="search-box not-click">
                    <form action="search.html" method="get">
                      <input type="text" className="not-click form-control" name="search" placeholder="Search.."/>
                      <button className="search-button" type="submit"> <i className="fa fa-search not-click"></i></button>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default TopNavbar