import React from 'react'

const Contact = () => {
    return (
        <>
            <div class="container-xxl flex-grow-1 container-p-y">

                <div class="col-xxl">
                    <div class="card mb-4">
                        <h5 class="card-header">Contact Query</h5>
                        <form class="card-body">


                            <div class="row mb-3">
                                <label class="col-sm-3 col-form-label text-sm-end" for="alignment-username">Subject</label>
                                <div class="col-sm-9">
                                    <input type="text" id="alignment-username" class="form-control" placeholder="Enter Subject Here" fdprocessedid="g2wkjl" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-3 col-form-label text-sm-end" for="alignment-username">Message</label>
                                <div class="col-sm-9">
                                    <textarea class="form-control message-input" placeholder="Enter Message Here" rows="4"></textarea>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-3 col-form-label text-sm-end" for="alignment-username">Image (optional)</label>
                                <div class="col-sm-9">
                                    <div class="input-group">
                                        <input type="file" class="form-control" id="inputGroupFile02" />
                                    </div>
                                </div>
                            </div>
                            <div class="pt-4">
                                <div class="row justify-content-end">
                                    <div class="col-sm-9">
                                        <button type="submit" class="btn btn-primary me-sm-2 me-1 waves-effect waves-light" fdprocessedid="mmsy5m">Submit</button>
                                        <button type="reset" class="btn btn-label-secondary waves-effect" fdprocessedid="sn5j">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
