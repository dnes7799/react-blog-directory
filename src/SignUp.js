import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Col } from 'react-bootstrap';


const SignUp = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("Nepal");
    const [position, setPosition] = useState()
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <div className="container">
            <div className="signup">
                <Form noValidate validated={validated} onSubmit={handleSubmit} id="myForm">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                required
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide your first name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                required
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide your last name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="your_address@example.com"
                                required
                                pattern="^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,4})$"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide valid e-mail address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone"
                                required
                                value={phone}
                                //Nepal phone number pattern.
                                pattern="^[9][6-8]{1}[0-9]{8}$"
                                //New Zealand Phone number pattern.
                                // pattern="^(\((02|03|04|06|07|09)\)\d{7})|(\((021|022|025|027|028|029)\)\d{6,8})|((0508|0800|0900)\d{5,8})$"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Label>Select Country</Form.Label>
                    <Form.Select value={country} onChange={(e) => setCountry(e.target.value)} className="mb-3">
                        <option value="nepal">Nepal</option>
                        <option value="australia">Australia</option>
                        <option value="denmark">Denmark</option>
                        <option value="norway">Norway</option>
                        <option value="canada">Canada</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide your city name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Address"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide your address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Label>Choose a desired position</Form.Label>
                    <Form.Select className="mb-3" value={position} onChange={(e) => setPosition(e.target.value)}>
                        <option value="ceo">Chief Executive Officer</option>
                        <option value="coo">Chief Operating Officer</option>
                        <option value="cmo">Chief Marketing Officer</option>
                        <option value="cto">Chief Technology Officer</option>
                        <option value="ea">Executive Assistant</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formInfo">
                        <Form.Control as="textarea"
                            placeholder="Tell us more about yourself..."
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Label>Add your resume</Form.Label>
                        <Form.Control
                            type="file"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide your resume.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="secondary" className="me-3" type="submit">Submit</Button>
                    <Button variant="secondary" type="reset">Reset</Button>

                </Form>
            </div>
        </div>

    );
}

export default SignUp;
