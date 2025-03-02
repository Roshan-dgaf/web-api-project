// src/pages/ContactUs/contact.js

import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                {/* Left Column: Contact Details */}
                <Col md={5} className="mb-4 mb-md-0">
                    <h1 className="text-center mb-4">Contact Us</h1>
                    <p className="text-center">We would love to hear from you! Reach out to us via the form on the right or using the contact details below.</p>

                    <div className="contact-details">
                        <h5>Email</h5>
                        <p>info@recipeapp.com</p>

                        <h5>Phone</h5>
                        <p>+1 (123) 456-7890</p>

                        <h5>Address</h5>
                        <p>123 Recipe St, Food City, FC 56789</p>
                    </div>
                </Col>

                {/* Right Column: Contact Form */}
                <Col md={5}>
                    <h3 className="text-center mb-4">Send Us a Message</h3>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="mt-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Your message" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3 w-100">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
