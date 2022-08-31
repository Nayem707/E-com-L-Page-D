import React from "react";

import {
  FaCoffee,
  FaCarrot,
  FaIceCream,
  FaPizzaSlice,
  FaUtensils,
  FaCartPlus,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const activCss = ({ isActive }) => {
  return {
    display: "block",
    color: isActive ? "red" : "",
  };
};

const Home = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 m-0 p-0">
              <div className="bg-dark text-info">sdd</div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 mt-4 p-0">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/img/p-3.png"
                      className="d-block w-100 p-auto img-fluid roded"
                      alt="ssd"
                    />
                    <div class="bg-opacity-25 m-5 p-5 carousel-caption d-none d-md-block bg-dark rounded">
                      <h2>62% Discount</h2>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                      <button type="button" class="btn btn-info">
                        GO TO <FaCartPlus />
                      </button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/img/p-5.png"
                      className="d-block w-100 p-auto img-fluid roded"
                      alt="ssd"
                    />
                    <div class="text-dark shadow-sm bg-opacity-25 m-5 p-5 carousel-caption d-none d-md-block bg-info rounded">
                      <h2 className="text-dark">62% Discount</h2>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                      <button type="button" class="btn btn-info">
                        GO TO <FaCartPlus />
                      </button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/img/p-6.png"
                      className="d-block w-100 p-auto img-fluid roded"
                      alt="ssd"
                    />
                    <div class="shadow-sm bg-opacity-25 m-5 p-5 carousel-caption d-none d-md-block bg-dark rounded">
                      <h2>62% Discount</h2>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                      <button type="button" class="btn btn-info">
                        GO TO <FaCartPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev "
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon bg-dark"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon bg-dark"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden ">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="row list-group ">
          <ul className="nav justify-content-center mt-3 m-auto ">
            <li className="nav-item bg-dark m-1 rounded shadow bg-body rounded">
              <a
                className="nav-link list-group-item list-group-item-action list-group-item-dark "
                href="#s"
              >
                <FaPizzaSlice
                  className=" rounded mx-auto d-block "
                  style={{ fontSize: "30px", color: "rgb(8, 124, 4)" }}
                />
                Pizza
              </a>
            </li>
            <li className="nav-item bg-dark m-1 rounded shadow bg-body rounded">
              <a
                className="nav-link list-group-item list-group-item-action list-group-item-dark"
                href="#s"
              >
                <FaIceCream
                  className="rounded mx-auto d-block "
                  style={{ fontSize: "30px", color: "rgb(8, 124, 4)" }}
                />
                Ice Cream
              </a>
            </li>
            <li className="nav-item bg-dark m-1 rounded shadow bg-body rounded">
              <a
                className="nav-link list-group-item list-group-item-action list-group-item-dark "
                href="#s"
              >
                <FaCoffee
                  className="rounded mx-auto d-block "
                  style={{ fontSize: "30px", color: "rgb(8, 124, 4)" }}
                />
                Coffee
              </a>
            </li>
            <li className="nav-item bg-dark m-1 rounded shadow bg-body rounded">
              <a
                className="nav-link list-group-item list-group-item-action list-group-item-dark"
                href="#s"
              >
                <FaCarrot
                  className="rounded mx-auto d-block "
                  style={{ fontSize: "30px", color: "rgb(8, 124, 4)" }}
                />
                Carrot
              </a>
            </li>
            <li className="nav-item bg-dark m-1 rounded shadow bg-body rounded">
              <a
                className="nav-link list-group-item list-group-item-action list-group-item-dark"
                href="#s"
              >
                <FaUtensils
                  className="rounded mx-auto d-block "
                  style={{ fontSize: "30px", color: "rgb(2, 124, 4) " }}
                />
                Over All
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Product Sample */}
      <section>
        <div className="container-fluid p-3">
          <div className="row">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="img/p3.png"
                    class="img-fluid rounded-end"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Best Sele</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer. This is a wider card
                      with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="card-text">
                      <FaStar class="card-text text-warning" />
                      <FaStar class="card-text text-warning" />
                      <FaStar class="card-text text-warning" />
                      <FaStar class="card-text text-warning" />
                      <FaStarHalfAlt class="card-text text-warning" />
                    </div>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>

                    <button type="button" class="btn btn-outline-primary">
                      ADD <FaCartPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="text-center mb-4">Most Sele</h1>
          <div className="row">
            <div className="col-lg-3 m-auto ">
              <div className="card" style={{ width: "18rem" }}>
                <img src="img/p6.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <div className="card-text">
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStarHalfAlt class="card-text text-warning" />
                  </div>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h4 class="card-text text-end">60$</h4>
                  <a href="#d" className="btn btn-primary">
                    ADD <FaCartPlus />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src="img/p6.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <div className="card-text">
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStarHalfAlt class="card-text text-warning" />
                  </div>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h4 class="card-text text-end">60$</h4>
                  <a href="#d" className="btn btn-primary">
                    ADD <FaCartPlus />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src="img/p6.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <div className="card-text">
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStarHalfAlt class="card-text text-warning" />
                  </div>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h4 class="card-text text-end">60$</h4>
                  <a href="#d" className="btn btn-primary">
                    ADD <FaCartPlus />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src="img/p6.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <div className="card-text">
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStar class="card-text text-warning" />
                    <FaStarHalfAlt class="card-text text-warning" />
                  </div>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h4 className="card-text text-end">60$</h4>
                  <a href="#d" class="btn btn-primary">
                    ADD <FaCartPlus />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
