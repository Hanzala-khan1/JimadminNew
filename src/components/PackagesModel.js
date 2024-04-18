import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { App_host } from '../Data';

const PackageSchema = Yup.object().shape({
    name: Yup.string().required('Package Name is required'),
    price: Yup.number().required('Price is required').positive('Price must be a positive number'),
    description: Yup.string().required('Description is required'),
});

const PackagesModel = ({ showUpdatePackage, HandleSHowUpdatePackageModel, getPackagesList }) => {
    let user = JSON.parse(localStorage.getItem('user'))
    let token = localStorage.getItem('token')

    const handleSubmit = async (values, formikBag) => {
        try {

            const formValues = await PackageSchema.validate(values, { abortEarly: false });
            console.log("nnnnnnnnnnnnnnnnnn", formValues)
            if (user.isJimAdmin) {
                formValues['is_jim_package'] = true
                formValues['is_admin_package'] = false
                formValues['BusinessLocation'] = user.BusinessLocation[0]._id.toString()
            } else if (user.isAdmin) {
                formValues['is_jim_package'] = false
                formValues['is_admin_package'] = true
            }

            const response = await axios.post(`${App_host}/packages/addPackage`, formValues, {
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'token': token
                },
            });

            if (response?.data?.success) {
                toast.success('Package added successfully!', {
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
            formikBag?.resetForm();
            HandleSHowUpdatePackageModel()
            getPackagesList()
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
        finally {
            formikBag?.setSubmitting(false);
        }
    };

    return (
        <>
            <Modal show={showUpdatePackage} onHide={HandleSHowUpdatePackageModel}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Gym Package</Modal.Title>
                </Modal.Header>
                <Formik
                    initialValues={{
                        name: '',
                        price: '',
                        description: '',
                    }}
                    validationSchema={PackageSchema}
                    onSubmit={handleSubmit}
                    validateOnBlur={true}
                    validateOnChange={true}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Modal.Body>
                                <div className="form-group">
                                    <label htmlFor="name">Package Name</label>
                                    <Field type="text" name="name" className="form-control bg-none" placeholder="Enter Package Name" />
                                    <ErrorMessage name="name" component="div" className="error-message" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <Field type="number" name="price" className="form-control bg-none" placeholder="Enter Price" />
                                    <ErrorMessage name="price" component="div" className="error-message" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <Field as="textarea" name="description" className="form-control bg-none" placeholder="Enter Description" rows="4" />
                                    <ErrorMessage name="description" component="div" className="error-message" />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={HandleSHowUpdatePackageModel}>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit" disabled={isSubmitting}>
                                    Save Package
                                </Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal>
            <ToastContainer />
        </>
    );
};

export default PackagesModel;
