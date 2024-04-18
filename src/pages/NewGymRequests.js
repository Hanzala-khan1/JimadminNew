import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { App_host } from '../Data';

const NewGymRequests = () => {

    const [userData, setUserData] = useState([]);
    const [pagination, setPagination] = useState({});
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [search, setSearch] = useState('');
    let location = useLocation()
    let searchStatus = location.pathname == "/new-gym-request" ? "inactive" : "active"
    console.log("location.pathnamelocation.pathnamelocation.pathname",location.pathname)
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${App_host}/Jim/getAllBusinessLocation`, {
                params: {
                    page,
                    limit,
                    search: search.trim(),
                    status: searchStatus

                },
                headers: {
                    token,
                },
            });

            let { results, ...otherPages } = response.data.data
            setUserData(results);
            setPagination(otherPages);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleLimitChange = (newLimit) => {
        setLimit(newLimit);
        setPage(1)
    };

    useEffect(() => {
        fetchUsers();
    }, [page, limit, search]);

    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="card">
                <h5 className="card-header">All Gyms </h5>
                <div className="card-datatable table-responsive">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="dataTables_length" id="DataTables_Table_3_length">
                                <label>
                                    <select
                                        value={limit}
                                        onChange={(e) => handleLimitChange(e.target.value)}
                                        className="form-select form-select-sm"
                                    >
                                        <option value="7">7</option>
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="75">75</option>
                                        <option value="100">100</option>
                                    </select>
                                    Show Results
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                            <div className="dataTables_filter">
                                <label>
                                    Search
                                    <input
                                        type="search"
                                        value={search}
                                        onChange={handleSearchChange}
                                        className="form-control form-control-sm"
                                        placeholder=""
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <Table data={userData} pagination={pagination} onPageChange={handlePageChange} reloadUsers={fetchUsers} type={"jim"} />
                </div>
            </div>
        </div>
    );
}

export default NewGymRequests
