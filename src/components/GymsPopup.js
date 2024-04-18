import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { App_host } from '../Data';
import { Link } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const GymsPopup = ({ showPackages, handleShowpackage, gymid }) => {
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
        BusinessLocation: gymid,
        is_jim_package: true
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
    }, [])
    let handleSubitform = async (packageId) => {
        try {

            let { BusinessLocation, _id, isJimAdmin, isAdmin, created_at, updated_at, __v, ...userData } = user
            let formData = {
                ...userData,
                BusinessLocation: gymid,
                package: packageId
            }

            const response = await axios.post(`${App_host}/user/addUser`, formData, {
                headers: {
                },
            });

            if (response?.data?.success) {
                toast.success('User registered successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            } else {
                toast.error("An Error Occured ", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
            handleShowpackage()
        } catch (error) {
            console.log("error.response.data.message", error)
            toast.error(error?.response?.data?.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }
    return (
        <>
            <div className={`modal fade ${showPackages ? "show" : ""}`} id="pricingModal" style={{ display: showPackages ? "block" : "none" }} role="dialog" tabIndex="-1">
                <div className="modal-dialog modal-xl modal-simple modal-pricing">
                    <div className="modal-content p-2 p-md-5">
                        <div className="modal-body">
                            <button type="button" className="btn-close" onClick={handleShowpackage}></button>
                            {/* Pricing Plans */}
                            <div className="py-0 rounded-top">
                                <h2 className="text-center mb-2">Select package</h2>
                                <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 pt-3 mb-4">
                                    <div className="mt-n5 ms-n5 d-none d-sm-block">
                                        <FontAwesomeIcon icon={faCheckCircle} className="ti ti-corner-left-down ti-sm text-muted me-1 scaleX-n1-rtl" />
                                        <span className="badge badge-sm bg-label-primary">Save up to 10%</span>
                                    </div>

                                    <div className="row mx-0 gy-3">
                                        {packagesData.length > 0 ? (
                                            packagesData.map((item) => {
                                                return (
                                                    <>
                                                        <div key={item._id.toString()} className="col-lg-3 col-md-6 col-sm-6 mb-4 " >
                                                            <div className="card h-100 border" style={{
                                                                border: '1px solid #007bff'
                                                            }}>
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{item.name}</h5>
                                                                    <div className="d-flex justify-content-center">
                                                                        <sup className="h6 pricing-currency mt-3 mb-0 me-1 text-primary"><FontAwesomeIcon icon={faIndianRupeeSign} /></sup>
                                                                        <h1 className="price-toggle price-yearly display-4 text-primary mb-0">{item.price}</h1>
                                                                        <sub className="h6 text-muted pricing-duration mt-auto mb-2 fw-normal">/month</sub>
                                                                    </div>
                                                                    <p className="card-text">
                                                                        {item.description}
                                                                    </p>
                                                                    {!user.isAdmin && (
                                                                        <button className="btn btn-primary" onClick={() => handleSubitform(item._id.toString())}>Register Now</button>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })) : (
                                            <> <div className="col-lg-3 col-md-6 col-sm-6 mb-4 " >
                                                <div className="card h-100 border" style={{
                                                    border: '1px solid #007bff'
                                                }}>
                                                    <div className="card-body"> no available Package to Show</div>
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
            </div>
            <ToastContainer />
        </>
    )
}

export default GymsPopup
