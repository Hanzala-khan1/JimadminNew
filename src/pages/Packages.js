import React from 'react'

const Packages = () => {
  return (
    <>
      <div class="container-xxl flex-grow-1 container-p-y">

        <div class="row">
          <div class="col-xl-9 mb-3 mb-xl-0">
          <h3>All Packages</h3>
            <ul class="list-group">
              <li class="list-group-item p-4">
                <div class="d-flex gap-3">
                  <div class="flex-shrink-0">
                    <img src="../assets/img/products/1.png" alt="google home" class="w-px-75" />
                  </div>
                  <div class="flex-grow-1">
                    <div class="row">
                      <div class="col-md-8">
                        <a href="javascript:void(0)" class="text-body">
                          <p>Google - Google Home - White</p>
                        </a>
                        <div class="text-muted mb-1 d-flex flex-wrap"><span class="me-1">Sold by:</span> <a href="javascript:void(0)" class="me-3">Apple</a> <span class="badge bg-label-success">In Stock</span></div>
                      </div>
                      <div class="col-md-4">
                        <div class="text-md-end">
                          <div class="my-2 my-lg-4"><span class="text-primary">$299/</span><s class="text-muted">$359</s></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="list-group-item p-4">
                <div class="d-flex gap-3">
                  <div class="flex-shrink-0">
                    <img src="../assets/img/products/2.png" alt="google home" class="w-px-75" />
                  </div>
                  <div class="flex-grow-1">
                    <div class="row">
                      <div class="col-md-8">
                        <a href="javascript:void(0)" class="text-body">
                          <p>Apple iPhone 11 (64GB, Black)</p>
                        </a>
                        <div class="text-muted mb-1 d-flex flex-wrap"><span class="me-1">Sold by:</span> <a href="javascript:void(0)" class="me-3">Apple</a> <span class="badge bg-label-success">In Stock</span></div>
                      </div>
                      <div class="col-md-4">
                        <div class="text-md-end">
                          <div class="my-2 my-lg-4"><span class="text-primary">$299/</span><s class="text-muted">$359</s></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-xl-3">
          <h4>Active Package</h4>

            <div class="border rounded p-4 pb-3">
              <h6>Price Details</h6>
              <dl class="row mb-0">

                <dt class="col-6 fw-normal text-heading">Order Total</dt>
                <dd class="col-6 text-end">$1198.00</dd>

                <dt class="col-sm-6 text-heading fw-normal">Delivery Charges</dt>
                <dd class="col-sm-6 text-end"><s class="text-muted">$5.00</s> <span class="badge bg-label-success ms-1">Free</span></dd>
              </dl>
              <hr class="mx-n4" />
              <dl class="row mb-0">
                <dt class="col-6 text-heading">Total</dt>
                <dd class="col-6 fw-medium text-end text-heading mb-0">$1198.00</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Packages
