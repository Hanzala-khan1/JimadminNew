import React from 'react'

const Earning = () => {
    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">

                <div className="col-lg-12 mb-4 order-md-0 order-lg-0">
                    <div className="card h-100">
                        <div className="card-header pb-0 d-flex justify-content-between mb-lg-n4">
                            <div className="card-title mb-5">
                                <h5 className="mb-0">Earning Reports</h5>
                                <small className="text-muted">Monthly Earnings Overview</small>
                            </div>

                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-4 d-flex flex-column align-self-end">
                                    <div className="d-flex gap-2 align-items-center mb-2 pb-1 flex-wrap">
                                        <h1 className="mb-0">$468</h1>
                                        <div className="badge rounded bg-label-success">+4.2%</div>
                                    </div>
                                    <small className="text-muted">this Month compared to last Month</small>
                                </div>
                            </div>

                            <div className="border rounded p-3 mt-2">
                                <div className="row gap-4 gap-sm-0">
                                    <div className="col-12 col-sm-4">
                                        <div className="d-flex gap-2 align-items-center">
                                            <div className="badge rounded bg-label-primary p-1"><i
                                                className="ti ti-currency-dollar ti-sm"></i></div>
                                            <h6 className="mb-0">Total Earnings</h6>
                                        </div>
                                        <h4 className="my-2 pt-1">$545.69</h4>
                                        <div className="progress w-75" style={{height:"4px"}}>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="d-flex gap-2 align-items-center">
                                            <div className="badge rounded bg-label-info p-1"><i
                                                className="ti ti-chart-pie-2 ti-sm"></i></div>
                                            <h6 className="mb-0">Total Profit</h6>
                                        </div>
                                        <h4 className="my-2 pt-1">$256.34</h4>
                                        <div className="progress w-75" style={{height:"4px"}}>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="d-flex gap-2 align-items-center">
                                            <div className="badge rounded bg-label-danger p-1"><i
                                                className="ti ti-brand-paypal ti-sm"></i></div>
                                            <h6 className="mb-0">Total Expense</h6>
                                        </div>
                                        <h4 className="my-2 pt-1">$74.19</h4>
                                        <div className="progress w-75" style={{height:"4px"}}>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="border rounded p-3 mt-2">
                                <div className="row gap-4 gap-sm-0">
                                    <div className="col-12 col-sm-4">
                                        <div className="d-flex gap-2 align-items-center">
                                            <div className="badge rounded bg-label-primary p-1"><i
                                                className="ti ti-currency-dollar ti-sm"></i></div>
                                            <h6 className="mb-0">Monthly Earnings</h6>
                                        </div>
                                        <h4 className="my-2 pt-1">$545.69</h4>
                                        <div className="progress w-75" style={{height:"4px"}}>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="d-flex gap-2 align-items-center">
                                            <div className="badge rounded bg-label-info p-1"><i
                                                className="ti ti-chart-pie-2 ti-sm"></i></div>
                                            <h6 className="mb-0">Monthly Profit</h6>
                                        </div>
                                        <h4 className="my-2 pt-1">$256.34</h4>
                                        <div className="progress w-75" style={{height:"4px"}}>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="d-flex gap-2 align-items-center">
                                            <div className="badge rounded bg-label-danger p-1"><i
                                                className="ti ti-brand-paypal ti-sm"></i></div>
                                            <h6 className="mb-0">Monthly Expense</h6>
                                        </div>
                                        <h4 className="my-2 pt-1">$74.19</h4>
                                        <div className="progress w-75" style={{height:"4px"}}>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Earning
