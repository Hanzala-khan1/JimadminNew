import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faFaceFrown, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { App_host } from '../Data';
import GymsPopup from '../components/GymsPopup';

const Otherjims = () => {
    const [jim, setJim] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [nearby, setNearby] = useState(false);
    const [gymId, setGymId] = useState("");
    const itemsPerPage = 12;

    const [showPackages, setShowPackages] = useState(false)

    let handleShowpackageModel = (id) => {
        setGymId(id)
        setShowPackages(!showPackages)
    }
    useEffect(() => {
        const fetchJim = async () => {
            try {
                const response = await axios.get(`${App_host}/Jim/getAllBusinessLocation?page=${currentPage}&limit=${itemsPerPage}`);
                setJim(response.data.data.results);
                setTotalPages(response.data.data.totalPages);
            } catch (error) {
                console.error("Error fetching gym data:", error);
            }
        };

        fetchJim();
    }, [currentPage]); // Reload when currentPage changes

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleCheckboxChange = (event) => {
        setNearby(event.target.checked);
    };

    return (
        <div>
            <section className="choseus-section spad mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h4><strong>Find Gym</strong> for your Fitness</h4>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row justify-content-between py-3 border-1">
                        <button className="btn btn-primary col-5">request for custom Package</button>
                        <div class="custom-control custom-switch col-3">
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            <label class="">
                                nearby Gyms
                            </label>
                        </div>
                    </div> */}
                    <div className="row">
                        {jim.map((data, index) => (
                            <>
                                <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                    <div className="card h-100">
                                        {data.images.length > 0 ? (
                                            <img
                                                src={data.images[0]}
                                                className="card-img-top"
                                                alt="Gym"
                                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <img
                                                src="https://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png"
                                                className="card-img-top"
                                                alt="Gym"
                                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                            />
                                        )}
                                        <div className="card-body">
                                            <h5 className="card-title">{data.name}</h5>
                                            <p className="card-text">
                                                <i><FontAwesomeIcon icon={faMapMarker} /></i> {data.adress}
                                            </p>
                                            <button className="btn btn-primary" onClick={() => handleShowpackageModel(data._id.toString())}>Register Now</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                        {jim.length === 0 && (
                            <div className="col-12 d-flex justify-content-center">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <FontAwesomeIcon icon={faFaceFrown} style={{ color: "white", fontSize: "50px" }} />
                                        <h5 className="card-title">No available Gyms to Show</h5>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {
                        showPackages && <GymsPopup showPackages={showPackages} handleShowpackage={handleShowpackageModel} gymid={gymId} />
                    }
                    {totalPages > 1 && (
                        <div className="row mt-4">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                                                <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Otherjims;
