import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { App_host } from '../Data';
import { Link } from 'react-router-dom';

const PackagesPlaneModel = ({ showPackages, handleShowpackage }) => {
    const [showModal, setShowModal] = useState(false);
    const [packagesData, SetPackagesData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [search, setSearch] = useState('');
    const activegym = localStorage.getItem("activegym")
    let user = JSON.parse(localStorage.getItem('user'))
    let token = localStorage.getItem('token')

    const [filterPackages, setFilterPackages] = useState(user.isJimAdmin ? "mypackages" : null);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handlePageChange = (page) => {
        setPage(page);
    };
    let params = {
        page,
        limit,
        search: search.trim(),
    }
    if (user.isAdmin) {
        params['is_admin_package'] = true
    } else if (user.isJimAdmin || !user.isJimAdmin) {
        params['is_jim_package'] = true
        params['BusinessLocation'] = activegym
        params['is_admin_package'] = false
        if (filterPackages == "adminpackages") {
            params['is_admin_package'] = true
            params['is_jim_package'] = false
            params['BusinessLocation'] = null
        }
    }

    console.log("000000000000000000000", packagesData)

    const getPackagesList = async () => {
        try {
            const response = await axios.get(`${App_host}/packages/getPackages`, {
                params: params,
                headers: {
                    token,
                },
            });
            console.log("rrrrrrrrrrrrrrrr", response)

            let { results, ...otherPages } = response.data.data
            SetPackagesData(results);
            setTotalPages(otherPages.totalPages);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
    useEffect(() => {
        getPackagesList()
    }, [page, filterPackages])
    return (
        <>

            <div className={`modal fade ${showPackages ? "show" : ""}`} id="pricingModal" style={{ display: showPackages ? "block" : "none" }} role="dialog" tabIndex="-1">
                <div className="modal-dialog modal-xl modal-simple modal-pricing">
                    <div className="modal-content p-2 p-md-5">
                        <div className="modal-body">
                            <button type="button" className="btn-close" onClick={handleShowpackage}></button>
                            {/* Pricing Plans */}
                            <div className="py-0 rounded-top">
                                <h2 className="text-center mb-2">Pricing Plans</h2>
                                <p className="text-center">Get started with us - it's perfect for individuals and teams. Choose a subscription plan that meets your needs.</p>
                                <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 pt-3 mb-4">
                                    <div className="mt-n5 ms-n5 d-none d-sm-block">
                                        <FontAwesomeIcon icon={faCheckCircle} className="ti ti-corner-left-down ti-sm text-muted me-1 scaleX-n1-rtl" />
                                        <span className="badge badge-sm bg-label-primary">Save up to 10%</span>
                                    </div>
                                </div>
                                <div className="row mx-0 gy-3">
                                    {packagesData.length > 0 ? (
                                        packagesData.map((item) => {
                                            return (<>
                                                <div className="col-xl mb-md-0 mb-4">
                                                    <div className="card border-primary border shadow-none">
                                                        <div className="card-body position-relative">

                                                            <div className="my-3 pt-2 text-center">
                                                                <img src="../assets/img/illustrations/page-pricing-standard.png" alt="Standard Image" height="140" />
                                                            </div>
                                                            <h3 className="card-title text-center text-capitalize mb-1">{item.name}</h3>
                                                            <p className="text-center">For Gym users</p>
                                                            <div className="text-center h-px-100 mb-2">
                                                                <div className="d-flex justify-content-center">
                                                                    <sup className="h6 pricing-currency mt-3 mb-0 me-1 text-primary"><FontAwesomeIcon icon={faIndianRupeeSign} /></sup>
                                                                    <h1 className="price-toggle price-yearly display-4 text-primary mb-0">{item.price}</h1>
                                                                    <sub className="h6 text-muted pricing-duration mt-auto mb-2 fw-normal">/month</sub>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {item.description}
                                                            </div>
                                                            {!user.isJimAdmin && (
                                                                <Link to={`/checkoutPackage?id=${item._id.toString()}`}>
                                                                    <button type="button" className="btn btn-primary d-grid w-100 mt-3" data-bs-dismiss="modal">Upgrade</button>
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>)
                                        }
                                        )
                                    ) : (
                                        <>
                                            <div className="col-xl mb-md-0 mb-4">
                                                <div className="card border-primary border shadow-none">

                                                    no available Package
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PackagesPlaneModel;
