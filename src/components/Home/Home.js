import React from "react";


import {
  FaCoffee,
  FaCarrot,
  FaIceCream,
  FaPizzaSlice,
  FaUtensils,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12 m-0 p-0'>
              <div className='bg-dark text-info'>sdd</div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 m-0 p-0'>
              <div
                id='carouselExampleControls'
                class='carousel slide'
                data-bs-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img
                      src='/img/p-3.png'
                      className='d-block w-100 p-auto img-fluid roded'
                      alt='ssd'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='/img/p-5.png'
                      className='d-block w-100 p-auto img-fluid roded'
                      alt='ssd'
                    />
                    
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='/img/p-6.png'
                      className='d-block w-100 p-auto img-fluid roded'
                      alt='ssd'
                    />
                  </div>
                </div>
                <button
                  className='carousel-control-prev '
                  type='button'
                  data-bs-target='#carouselExampleControls'
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon bg-dark'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleControls'
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon bg-dark'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden '>Next</span>
                </button>
              </div>
            </div>
          </div>

          <ul className='nav justify-content-center mt-3'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#x'>
                <FaPizzaSlice
                  style={{ fontSize: "30px", color: "rgb(8, 124, 4)" }}
                />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#x'>
                <FaIceCream
                  style={{ fontSize: "30px", color: "rgb(8, 124, 4)" }}
                />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#s'>
                <FaCarrot
                  style={{ fontSize: "30px", color: "rgb(8, 124, 4)" }}
                />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#s'>
                <FaCoffee
                  style={{ fontSize: "30px", color: "rgb(8, 124, 4)" }}
                />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#s'>
                <FaUtensils
                  style={{ fontSize: "30px", color: "rgb(8, 124, 4)" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Product Sample */}
      <section>
        <div>
          <h1>jdjf</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
