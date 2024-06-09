import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Signin(props) {
    let history = useHistory()
    const initialState = localStorage.getItem("companyCached") ? JSON.parse(localStorage.getItem("companyCached")) :
        {
            companyname: "",
            regno: "",
            parentcompany: "",
            website: "",
            about: "",
            email: "",
            password: "",
            established: "",
            contactperson: "",
            phone: "",
            phone2: "",
            addressline1: "",
            addressline2: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
            lattitude: "",
            longitude: ""
        }

    const [company, setCompany] = useState(initialState);

    const handleChange = (event) => {
        setCompany({ ...company, [event.target.name]: event.target.value });
        localStorage.setItem("companyCached", JSON.stringify(company))
    };

    const submitDetails = async (companyPictures) => {
        let formData = new FormData();
        Object.entries(company).forEach(([key, value]) => {
            formData.append(key, value)
        })

        if (companyPictures.length > 0) {
            for (const single_file of companyPictures) {
                formData.append('companyPictures', single_file)
            }
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/company/createuser`, {

            method: "POST",
            headers: {
            },
            body: formData

        })

        const token = await response.json();

        console.log(token);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const companyPictures = e.target.companyPictures.files
        console.log(company);
        console.log(companyPictures);
        submitDetails(companyPictures);
        alert("Submitted successfully");
        history.push("/signin")

    }

    return (
        <div>
            <Layout mode={props.mode} Togglemode={props.Togglemode}>
                <div style={{
                    backgroundImage: props.mode ? "url(/img/signinupblack.jpg)" : "url(/img/signinup.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    width: '100%',
                    height: '100%',
                    minHeight: "100vh"
                }}>

                    <div className="container detailedform">
                        <Form className="onlyform" onSubmit={onSubmitHandler}>
                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                    <Form.Label>Name of Organisation</Form.Label>
                                    <Form.Control type="Text" name="companyname" placeholder="Enter name of your Organisation" value={company.companyname} onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Reg No of Organisation</Form.Label>
                                    <Form.Control type="Text" name="regno" placeholder="Enter regno of your Organisation" value={company.regno} onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>About</Form.Label>
                                    <Form.Control type="Text" name="about" placeholder="Enter about  your Organisation" value={company.about} onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control type="Text" name="website" placeholder="www.helptheearth.com" value={company.website} onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Parent company</Form.Label>
                                    <Form.Control type="Text" name="parentcompany" placeholder="Enter Parent of your Organisation" value={company.parentcompany} onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" value={company.email} onChange={handleChange} />
                                </Form.Group>
                            </Row>


                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" name="password" value={company.password} onChange={handleChange} />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="password">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Reconfirm password" />
                                </Form.Group>

                            </Row>

                            <Form.Group className="mb-3" controlId="established">
                                <Form.Label>Established</Form.Label>
                                <Form.Control type="date" placeholder="1905" name="established" value={company.established} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="contactperson">
                                <Form.Label>Contact Person</Form.Label>
                                <Form.Control type="Text" placeholder="Mr Andrew G" name="contactperson" value={company.contactperson} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="established">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="Text" placeholder="012345678" name="phone" value={company.phone} onChange={handleChange} />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="established">
                                <Form.Label>Phone Number Alt</Form.Label>
                                <Form.Control type="Text" placeholder="012345678" name="phone2" value={company.phone2} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="address1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" name="addressline1" value={company.addressline1} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="address2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" name="addressline2" value={company.addressline2} onChange={handleChange} />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="New York City" name="city" value={company.city} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="state">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="Text" placeholder="New York" name="state" value={company.state} onChange={handleChange} />
                                </Form.Group>


                                <Form.Group as={Col} controlId="country">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="Text" name="country" value={company.country} onChange={handleChange} />
                                </Form.Group>

                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="zip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="Text" name="pincode" value={company.pincode} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="lattitude">
                                    <Form.Label>Lattitude</Form.Label>
                                    <Form.Control type="Text" name="lattitude" value={company.lattitude} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="longitude">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="Text" name="longitude" value={company.longitude} onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="profilePicture">
                                <Form.Label>ProfilePicture</Form.Label>
                                <Form.Control type="file" multiple="multiple" name="companyPictures" />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
  </Button>
                        </Form>
                    </div>

                </div>
            </Layout>
        </div>
    )
}
