import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Row, Col, Form, Button } from 'react-bootstrap'

const UpdateDetails = (props) => {
    const [individual, setIndividual] = useState({});
    useEffect(() => {
        // get the initial detials of the individual
        var options = {
            method: 'POST',
            url: `${process.env.REACT_APP_BACKEND_URL}/api/indiv/getindivdetails`,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("indivtoken")
            }
        };

        axios.request(options).then(function (response) {
            setIndividual(response.data.userindiv)
            // console.log(individual)
        }).catch(function (error) {
            console.error(error);

        });
    
    }, [])


    const handleChange = (event) => {
        setIndividual({ ...individual, [event.target.name]: event.target.value });
        localStorage.setItem("companyCached", JSON.stringify(individual))
    };


    const submitDetails = async (profilePicture) => {
        let formData = new FormData();
        Object.entries(individual).forEach(([key, value]) => {
            formData.append(key, value)
        })

        if (profilePicture.length > 0) {
            for (const single_file of profilePicture) {
                formData.append('profilePicture', single_file)
            }
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/indiv/updateuserdetails`, {

            method: "PUT",
            headers: {
                "auth-token": localStorage.getItem("indivtoken")
            },
            body: formData

        })

        const resp = await response.json();

        console.log(resp);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const profilePicture = e.target.profilePicture.files
        console.log(individual);
        console.log(profilePicture);
        submitDetails(profilePicture);
        alert("Submitted successfully");


    }

    return (
        <div className="component" >
            <center> <h1>Update your details here! </h1> </center>

            <div className="container detailedform">
                <Form className="onlyform" onSubmit={onSubmitHandler}>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="Text" name="name" placeholder="Alex Smith" value={individual.name} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>About</Form.Label>
                            <Form.Control type="Text" name="about" placeholder="Enter something about you" value={individual.about} onChange={handleChange} />
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" value={individual.email} onChange={handleChange} />
                        </Form.Group>
                    </Row>


                    

                    <Form.Group className="mb-3" controlId="dob">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="1905" name="dob" value={individual.dob} onChange={handleChange} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="Text" placeholder="012345678" name="phone" value={individual.phone} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="address1">
                        <Form.Label>Address line 1 </Form.Label>
                        <Form.Control placeholder="1234 Main St" name="addressline1" value={individual.addressline1} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="address2">
                        <Form.Label>Address line 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" name="addressline2" value={individual.addressline2} onChange={handleChange} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder="New York City" name="city" value={individual.city} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="Text" placeholder="New York" name="state" value={individual.state} onChange={handleChange} />
                        </Form.Group>


                        <Form.Group as={Col} controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="Text" name="country" value={individual.country} onChange={handleChange} />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="zip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="Text" name="pincode" value={individual.pincode} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="profilePicture">
                        <Form.Label>ProfilePicture</Form.Label>
                        <Form.Control type="file" multiple="multiple" name="profilePicture" />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
            </div>


        </div>
    )
}

export default UpdateDetails
