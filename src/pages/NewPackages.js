import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import PackagesPlaneModel from '../components/PackagesPlaneModel';
import axios from 'axios';
import { App_host } from '../Data';
import PackagesModel from '../components/PackagesModel';

const NewPackages = () => {
    const [showPackages, setShowPackages] = useState(false)
    const [packageDays, setPackagesDays] = useState(0)
    const [toDay, setToDays] = useState(0)
    const [remainingDays, SetRemainingDays] = useState(0)
    const [showUpdatePackage, showUpdatePackages] = useState(false);
    const [activePackage, setActivePackage] = useState({});
    const [lastDate, setLastDate] = useState(0);
    const [isCustom, setIscustom] = useState(false)

    let user = JSON.parse(localStorage.getItem('user'))
    let token = localStorage.getItem('token')
    let activegym = localStorage.getItem('activegym')

    let handleShowpackageModel = () => {
        console.log("here")
        setShowPackages(!showPackages)
    }
    function getLastDayOfMonth() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const lastDay = new Date(year, month + 1, 0);
        const monthName = lastDay.toLocaleString('default', { month: 'short' });
        const dayOfMonth = lastDay.getDate();
        const formattedDate = `${monthName} ${dayOfMonth}, ${year}`; // e.g., "Dec 30, 2024"
        setLastDate(formattedDate)
    }
    let filterDates = () => {
        const today = new Date();
        const currentDayOfMonth = today.getDate();
        setToDays(currentDayOfMonth)
        const totalDaysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        SetRemainingDays(totalDaysInMonth - currentDayOfMonth)
        const percentDaysPassed = (currentDayOfMonth / totalDaysInMonth) * 100;
        setPackagesDays(percentDaysPassed);
    }

    useEffect(() => {
        filterDates()
        getLastDayOfMonth()
    }, []);

    const HandleSHowUpdatePackageModel = () => {
        setIscustom(false)
        showUpdatePackages(!showUpdatePackage)
    }
    const HandleSHowUpdatePackageModelCustom = () => {
        setIscustom(true)
        showUpdatePackages(!showUpdatePackage)
    }

    const getActivePackage = async () => {
        try {
            const response = await axios.get(`${App_host}/packages/getActivePackage`, {
                params: {
                    activegym: activegym
                },
                headers: {
                    token,
                },
            });
            console.log("Active vvvvvvvvvvvvvvvvvvvvvvvv", response)
            setActivePackage(response.data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
    useEffect(() => {
        getActivePackage()
    }, [])
    console.log("------------------------------", activePackage)

    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y p-0">

                <div className="container">
                    <div className='d-flex justify-content-end mb-3'>
                        <button className="btn btn-primary me-2 mt-2 pointer" onClick={HandleSHowUpdatePackageModel}>Add Package</button>
                        <button className="btn btn-primary me-2 mt-2 pointer" onClick={HandleSHowUpdatePackageModelCustom}>Add Custom Package</button>
                    </div>
                    <PackagesModel HandleSHowUpdatePackageModel={HandleSHowUpdatePackageModel} showUpdatePackage={showUpdatePackage} type={isCustom ? "custom" : null} />
                    <div class="row">
                        <div class="col-md-12">
                            <div className="card mb-4">
                                <h4 className="card-header"><strong>Current Plan</strong></h4>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-1">
                                            <div className="mb-3">
                                                <h6 className="mb-1">Your Current Plan is <strong>{activePackage.name}</strong></h6>
                                                <p>A simple start for everyone</p>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-1">Active until {lastDate}</h6>
                                                <p>We will send you a notification upon Subscription expiration</p>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-1">
                                                    <span className="me-2"><FontAwesomeIcon icon={faIndianRupeeSign} /> {activePackage.price} Per Month</span>
                                                </h6>
                                                <p>Standard plan for Gyms</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-1">
                                            <div className="alert alert-warning mb-3" role="alert">
                                                <h5 className="alert-heading mb-1">We need your attention!</h5>
                                                <span><FontAwesomeIcon icon={faExclamationTriangle} />  Your plan requires update</span>
                                            </div>
                                            <div className="plan-statistics">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-2">Days</h6>
                                                    <h6 className="mb-2">{toDay} of 30 Days</h6>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" style={{ width: `${packageDays.toFixed()}%` }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="mt-1 mb-0">{remainingDays} days remaining until your plan requires update</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary me-2 mt-2 pointer" onClick={handleShowpackageModel}>{user.isJimAdmin ? "check Offers" : "Upgrade Plan"}</button>
                                            {/* <button className="btn btn-label-danger cancel-subscription mt-2">Cancel Subscription</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PackagesPlaneModel showPackages={showPackages} handleShowpackage={handleShowpackageModel} />
        </>
    );
}

export default NewPackages;
