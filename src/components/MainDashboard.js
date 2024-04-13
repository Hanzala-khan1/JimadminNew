import React from 'react'

const MainDashboard = () => {
    return (
        <div>
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="row">
                        <div className="card-body row p-0 pb-3">
                            <div className="col-12 col-md-8 card-separator">
                                <h3>Welcome back, Admin 👋🏻 </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 mb-4 ">
                                <div className="card card-border-shadow-primary ">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2 pb-1">
                                            <div className="avatar me-2">
                                                <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-truck ti-md"></i></span>
                                            </div>
                                            <h4 className="ms-1 mb-0">2</h4>
                                        </div>
                                        <p className="mb-1">New Gym Requests</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-4 ">
                                <div className="card card-border-shadow-warning ">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2 pb-1">
                                            <div className="avatar me-2">
                                                <span className="avatar-initial rounded bg-label-warning"><i
                                                    className='ti ti-alert-triangle ti-md'></i></span>
                                            </div>
                                            <h4 className="ms-1 mb-0">800$</h4>
                                        </div>
                                        <p className="mb-1">Total Earnings</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-4 ">
                                <div className="card card-border-shadow-danger ">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2 pb-1">
                                            <div className="avatar me-2">
                                                <span className="avatar-initial rounded bg-label-danger"><i
                                                    className='ti ti-git-fork ti-md'></i></span>
                                            </div>
                                            <h4 className="ms-1 mb-0">270$</h4>
                                        </div>
                                        <p className="mb-1">Pending Payments</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-4 ">
                                <div className="card card-border-shadow-info ">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2 pb-1">
                                            <div className="avatar me-2">
                                                <span className="avatar-initial rounded bg-label-info"><i className='ti ti-clock ti-md'></i></span>
                                            </div>
                                            <h4 className="ms-1 mb-0">4</h4>
                                        </div>
                                        <p className="mb-1">Total Packages</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6  mb-4 order-2 order-xxl-2 ">
                                <div className="card h-100">
                                    <div className="card-header d-flex align-items-center justify-content-between mb-2">
                                        <div className="card-title mb-0">
                                            <h5 className="m-0 me-2">Most Active Gyms</h5>

                                        </div>

                                    </div>
                                    <div className="card-body">
                                        <ul className="p-0 m-0">
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-circle-check"></i></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0 fw-normal">Gym Name</h6>
                                                        <small className="text-success fw-normal d-block">
                                                            <i className="ti ti-chevron-up mb-1"></i>
                                                            14 New Members
                                                        </small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">100 Active Members</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-circle-check"></i></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0 fw-normal">Gym Name</h6>
                                                        <small className="text-success fw-normal d-block">
                                                            <i className="ti ti-chevron-up mb-1"></i>
                                                            10 New Members
                                                        </small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">90 Active Members</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-circle-check"></i></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0 fw-normal">Gym Name</h6>
                                                        <small className="text-success fw-normal d-block">
                                                            <i className="ti ti-chevron-up mb-1"></i>
                                                            6 New Members
                                                        </small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">70 Active Members</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-circle-check"></i></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0 fw-normal">Gym Name</h6>
                                                        <small className="text-success fw-normal d-block">
                                                            <i className="ti ti-chevron-up mb-1"></i>
                                                            4 New Members
                                                        </small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">50 Active Members</h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  mb-4 order-2 order-xxl-2 ">
                                <div className="card h-100">
                                    <div className="card-header d-flex align-items-center justify-content-between mb-2">
                                        <div className="card-title mb-0">
                                            <h5 className="m-0 me-2">Most Unactive Gyms</h5>

                                        </div>

                                    </div>
                                    <div className="card-body">
                                        <ul className="p-0 m-0">
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-circle-check"></i></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0 fw-normal">Gym Name</h6>
                                                        <small className="text-danger fw-normal d-block">
                                                            <i className="ti ti-chevron-down mb-1"></i>
                                                            10 Members Left
                                                        </small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">100 Active Members</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-circle-check"></i></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0 fw-normal">Gym Name</h6>
                                                        <small className="text-danger fw-normal d-block">
                                                            <i className="ti ti-chevron-down mb-1"></i>
                                                            10 Members Left
                                                        </small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">100 Active Members</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-circle-check"></i></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0 fw-normal">Gym Name</h6>
                                                        <small className="text-danger fw-normal d-block">
                                                            <i className="ti ti-chevron-down mb-1"></i>
                                                            10 Members Left
                                                        </small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">100 Active Members</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-circle-check"></i></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0 fw-normal">Gym Name</h6>
                                                        <small className="text-danger fw-normal d-block">
                                                            <i className="ti ti-chevron-down mb-1"></i>
                                                            10 Members Left
                                                        </small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">100 Active Members</h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="content-backdrop fade"></div>
            </div>
        </div>
    )
}

export default MainDashboard
