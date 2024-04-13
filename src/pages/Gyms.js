import React from 'react'
import Table from '../components/Table'
import Layout from '../components/shared/Layout'

const Gyms = () => {
    return (
        <>
                <div class="container-xxl flex-grow-1 container-p-y">
                    <div class="card " >
                        <h5 class="card-header" >All Gyms</h5>
                        <div class="card-datatable table-responsive">
                            <div id="DataTables_Table_3_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">
                                        <div class="dataTables_length" id="DataTables_Table_3_length"><label><select
                                            name="DataTables_Table_3_length"
                                            aria-controls="DataTables_Table_3"
                                            class="form-select form-select-sm" fdprocessedid="wbr0va">
                                            <option value="7">7</option>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="75">75</option>
                                            <option value="100">100</option>
                                        </select> Show Results</label></div>
                                    </div>
                                    <div
                                        class="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                                        <div id="DataTables_Table_3_filter" class="dataTables_filter">
                                            <label>Search<input type="search" class="form-control form-control-sm"
                                                placeholder="" aria-controls="DataTables_Table_3" /></label></div>
                                    </div>
                                </div>
                                <Table />

                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Gyms
