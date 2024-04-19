import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { App_host } from '../Data';
import UserDetails from './UserDetail';

const Table = ({ data, pagination, onPageChange, reloadUsers, type }) => {
    const { page, totalPages } = pagination;
    let token = localStorage.getItem("token")
    const [showDetails, setShowDetails] = useState(false)
    const [detailsData, setDetailsData] = useState(null)
    let HandleUpdateUser = async (status, id) => {
        try {
            console.log("idididiidididididididid", id)
            // return
            let changestatus = status === "active" ? "inactive" : "active"
            console.log("insode the app ")
            const response = await axios.put(`${App_host}/user/updateUserStatus`, {
                status: changestatus,
                id: id
            },
                {
                    headers: {
                        token,
                    },
                });
            console.log("also got the response ", response)

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
                reloadUsers()
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
    let HandledeteUser = async (id) => {
        try {
            const response = await axios.put(`${App_host}/user/deleteUser`, {
                id: id
            },
                {
                    headers: {
                        token,
                    },
                });
            console.log("also got the response ", response)

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
                reloadUsers()
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

    let handleShowDeatils = (data = null) => {
        setDetailsData(data)
        setShowDetails(!showDetails)
    }

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div>
            <table className="dt-multilingual table dataTable no-footer dtr-column"
                id="DataTables_Table_3" aria-describedby="DataTables_Table_3_info"
                style={{ width: "1045px" }}>
                <thead>
                    <tr>
                        <th className="control sorting_disabled sorting_asc dtr-hidden" rowSpan="1"
                            colSpan="1" style={{ width: "0px", display: "none" }} aria-label=""></th>
                        {type === "jim" ?
                            (
                                <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_3"
                                    rowSpan="1" colSpan="1" style={{ width: "79px" }}
                                    aria-label="Name: aktivieren, um Spalte aufsteigend zu sortieren">
                                    Gym Name</th>
                            ) : (
                                <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_3"
                                    rowSpan="1" colSpan="1" style={{ width: "79px" }}
                                    aria-label="Name: aktivieren, um Spalte aufsteigend zu sortieren">
                                    Name</th>
                            )}
                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_3"
                            rowSpan="1" colSpan="1" style={{ width: "122px" }}
                            aria-label="Contact: aktivieren, um Spalte aufsteigend zu sortieren">
                            Contact</th>

                        {type === "jim" ?
                            (
                                <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_3"
                                    rowSpan="1" colSpan="1" style={{ width: "229px" }}
                                    aria-label="Email: aktivieren, um Spalte aufsteigend zu sortieren">
                                    City</th>
                            ) : (
                                <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_3"
                                    rowSpan="1" colSpan="1" style={{ width: "229px" }}
                                    aria-label="Email: aktivieren, um Spalte aufsteigend zu sortieren">
                                    Email</th>
                            )}
                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_3"
                            rowSpan="1" colSpan="1" style={{ width: "75px" }}
                            aria-label="Date: aktivieren, um Spalte aufsteigend zu sortieren">
                            Date</th>

                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_3"
                            rowSpan="1" colSpan="1" style={{ width: "90px" }}
                            aria-label="Status: aktivieren, um Spalte aufsteigend zu sortieren">
                            Status</th>
                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_3"
                            rowSpan="1" colSpan="1" style={{ width: "90px" }}
                            aria-label="Status: aktivieren, um Spalte aufsteigend zu sortieren">
                            Payment</th>
                        {
                            type !== "admin" ? (
                                <th className="sorting_disabled" rowSpan="1" colSpan="1"
                                    style={{ width: "65px" }} aria-label="Actions">Actions</th>) : ('')}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        <>
                            {data.map((user) => {
                                { console.log("---------------------------------------", user) }

                                return (
                                    <tr className="odd">
                                        <td className="control sorting_1 dtr-hidden" tabIndex="0"
                                            style={{ display: "none" }}></td>
                                        {type === "jim" ?
                                            (
                                                <td>{user.name}</td>
                                            ) : (
                                                <td>{user.full_name}</td>
                                            )
                                        }
                                        <td>{user.phone}</td>
                                        {type === "jim" ?
                                            (
                                                <td>{user.city}</td>
                                            ) : (
                                                <td>{user.email}</td>
                                            )
                                        }
                                        <td className="" style={{}}>{user.created_at}</td>
                                        <td className="" style={{}}><span
                                            className="badge" style={{
                                                backgroundColor: user.status == "active" ? "green" : "red"
                                            }}>{user.status == "active" ? "active" : "pending"}</span></td>
                                        <td
                                            className=""
                                            style={{}}><span
                                                className="badge  bg-label-danger" style={{
                                                    backgroundColor: user.payment_status == "paid" ? "green" : "red"
                                                }}>{user.payment_status ? user.payment_status : "paid"}</span></td>
                                        <td className="" style={{}}>
                                            {
                                                type !== "admin" ? (
                                                    <div className="d-inline-block">
                                                        <a href="javascript:;"
                                                            className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                                                            data-bs-toggle="dropdown">
                                                            <i className="text-primary ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end m-0">
                                                            <a className="dropdown-item" onClick={() => HandleUpdateUser(user.status, type === "jim" ? (user.Owner.toString()) : (user._id.toString()))}>{user.status == "active" ? "inactive" : "Approve"}</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" onClick={() => handleShowDeatils(user)}>Details</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item text-danger delete-record" onClick={() => HandledeteUser(type === "jim" ? (user.Owner.toString()) : (user._id.toString()))}>Delete</a>


                                                        </div>
                                                    </div>) : (

                                                    <></>)}
                                        </td>
                                    </tr>)
                            })}

                        </>) : (<><div className="odd d-flex justify-cntent-center">

                            No data Found

                        </div>
                        </>
                    )}
                </tbody>
            </table>
            <UserDetails showDetails={showDetails} handleShowDeatils={handleShowDeatils} Data={detailsData} type={type=="jim"?"jim":"user"}/>
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page - 1)}>
                            Previous
                        </button>
                    </li>
                    {pageNumbers.map((number) => (
                        <li key={number} className={`page-item ${page === number ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => onPageChange(number)}>
                                {number}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page + 1)}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
            <ToastContainer />
        </div>
    );
};

export default Table;
