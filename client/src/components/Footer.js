import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Sid Kicks
                </h6>
                <p>
                  Fast and Secure free shipping All over Pakistan with Cash On
                  Delivery. Feel free to contact us for any additional details
                  required on product delivery and payment methods.Buying from
                  us you can be sure that you’ll get the product quickly and
                  hassle­free. We value our reputation of the trustworthy
                  merchant and never upset our clients.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    VANS
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    NIKE
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    NORTH STAR
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    ADIDAS
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="bi bi-geo-alt"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="bi bi-envelope-fill"></i>
                  info@Sidkicks.com
                </p>
                <p>
                  <i class="bi bi-telephone-fill"></i> +92331-7841345
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
          style={{ backgroundColor: (0, 0, 0, 0.05) }}
        >
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            Sidkicks.com
          </a>
        </div>
      </footer>
    </div>
  );
}
