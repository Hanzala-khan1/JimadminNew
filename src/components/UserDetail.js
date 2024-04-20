import React, { useEffect } from "react";

const UserDetails = ({
  showDetails,
  handleShowDeatils,
  Data,
  type = "user",
}) => {
  let image;
  // Data = JSON.parse(localStorage.getItem('user'))

  if (type == "jim") {
    if (Data?.images && Data?.images?.length) {
      image = Data?.images[0];
    }
  } else {
    image = Data?.images;
  }

  return (
    <>
      {Data && (
        <div
          className={`modal fade ${showDetails ? "show" : ""}`}
          id="pricingModal"
          style={{ display: showDetails ? "block" : "none" }}
          role="dialog"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-xl modal-simple modal-pricing">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleShowDeatils}
                ></button>
                {/* <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}> */}
                <div className="row  ">
                  {/* <div className="col"> */}
                  <div className=" mb-3" style={{ borderRadius: ".5rem" }}>
                    <div className="row g-0">
                      <div
                        className="col-md-4 gradient-custom text-center text-white"
                        style={{
                          borderTopLeftRadius: ".5rem",
                          borderBottomLeftRadius: ".5rem",
                        }}
                      >
                        <img
                          src={
                            image
                              ? image
                              : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          }
                          alt="Avatar"
                          className="img-fluid my-5"
                          style={{ width: "120px", height: "150px" }}
                        />
                        <h5>{type == "user" ? Data?.full_name : Data?.name}</h5>
                        <i className="far fa-edit"></i>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-4">
                          <h6>Information</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-md-6 col-sm-12 mb-3">
                              <h6>Email</h6>
                              <p className="text-muted">{Data?.email}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                              <h6>Phone</h6>
                              <p className="text-muted">{Data?.phone}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                              <h6>City</h6>
                              <p className="text-muted">{Data?.city}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                              <h6>Description</h6>
                              <p className="text-muted">{Data?.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                {/* </section> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
