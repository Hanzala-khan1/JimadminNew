import axios from 'axios';
import React, { useEffect, useState } from 'react'

const JimAdminDashboard = () => {
    const [activeUser, setActiveUser] = useState(0);
    const [totalUser, settotalUser] = useState(0);

    const token = localStorage.getItem('token');
let user =JSON.parse(localStorage.getItem("user"))
    let getActiveUser = async () => {
        const activeuser = await axios.get(`http://localhost:8000/v1/attendence/getActiveUser`, {
            headers: {
                token: token
            }
        });
        if (activeuser) {
            console.log()
            settotalUser(activeuser.data.data.total_users)
            setActiveUser(activeuser.data.data.active_users)
        }
    }

    useEffect(() => {
        getActiveUser();

    }, []);

    return (
        <>
            <div className="content-wrapper">

                <div className="container-xxl flex-grow-1 container-p-y">

                    <div className="row">
                        <div className="col-xl-6 mb-4 col-lg-6 col-12">
                            <div className="card">
                                <div className="d-flex align-items-end row">
                                    <div className="col-7">
                                        <div className="card-body text-nowrap">
                                            <h5 className="card-title mb-0">Welcome {user.full_name}! 💪</h5>
                                            <p>{user?.BusinessLocation[0]?.name} </p>


                                        </div>
                                    </div>
                                    <div className="col-5 text-center text-sm-left">
                                        <div className="card-body pb-0 px-0 px-md-4">
                                            <img src="../assets/img/illustrations/card-advance-sale.png" height="140" alt="view sales" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 mb-4 col-lg-6 col-12">
                            <div className="card h-100">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="card-title mb-0">Statistics</h5>

                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row gy-3">
                                        <div className="col-md-6 col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="badge rounded-pill bg-label-primary me-3 p-2"><i
                                                    className="ti ti-chart-pie-2 ti-sm"></i></div>
                                                <div className="card-info">
                                                    <h5 className="mb-0">{activeUser}</h5>
                                                    <small>Active Users</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="badge rounded-pill bg-label-info me-3 p-2"><i className="ti ti-users ti-sm"></i></div>
                                                <div className="card-info">
                                                    <h5 className="mb-0">{totalUser}</h5>
                                                    <small>Total Users</small>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="card card-border-shadow-primary">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-2 pb-1">
                                            <div className="avatar me-2">
                                                <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-truck ti-md"></i></span>
                                            </div>
                                            <h4 className="ms-1 mb-0">2</h4>
                                        </div>
                                        <p className="mb-1">New Requests</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="card card-border-shadow-warning">
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
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="card card-border-shadow-danger">
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
                            <div className="col-sm-6 col-lg-3 mb-4">
                                <div className="card card-border-shadow-info">
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
                        <div className="col-12 col-xl-12 mb-4">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="row row-bordered g-0">
                                        <div className="col-md-12 position-relative p-4">
                                            <div className="card-header d-inline-block p-0 text-wrap position-absolute">
                                                <h5 className="m-0 card-title">Peak Hours</h5>
                                            </div>
                                            <div id="totalRevenueChart" className="mt-n1"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="content-backdrop fade"></div>
            </div>
        </>
    )
}

export default JimAdminDashboard
