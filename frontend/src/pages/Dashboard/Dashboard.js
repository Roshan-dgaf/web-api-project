import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mt-5 premium-heading">
          Welcome to the Recipe App
        </h1>

        <section className="mx-auto mt-4">
          {/* Search Section */}
          <div className="d-flex justify-content-end">
            <Form className="mx-auto" style={{ maxWidth: "380px", width: "100%" }}>
              <Form.Group className="mb-3" style={{ position: "relative" }} controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Search Recipe..."
                  className="search-input"
                />
                <div className="clear-search-icon">
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </Form.Group>
            </Form>
          </div>

          {/* Recipe Section */}
          <div className="recipe-cards d-flex justify-content-between flex-wrap align-items-center">
            <Card className="recipe-card">
              <Card.Img variant="top" src="/logo192.png" className="card-img" />
              <Card.Body>
                <Card.Title className="premium-card-title">Delicious Recipe</Card.Title>
                <Card.Text className="premium-card-text">
                  A quick and easy recipe to satisfy your cravings. Perfect for any occasion.
                </Card.Text>
                <Button variant="primary" className="premium-button">View Recipe</Button>
              </Card.Body>
            </Card>

            {/* You can repeat the above Card component as needed */}
            <Card className="recipe-card">
              <Card.Img variant="top" src="/logo192.png" className="card-img" />
              <Card.Body>
                <Card.Title className="premium-card-title">Healthy Dish</Card.Title>
                <Card.Text className="premium-card-text">
                  A healthy and nutritious recipe for all the health-conscious individuals.
                </Card.Text>
                <Button variant="primary" className="premium-button">View Recipe</Button>
              </Card.Body>
            </Card>

            <Card className="recipe-card">
              <Card.Img variant="top" src="/logo192.png" className="card-img" />
              <Card.Body>
                <Card.Title className="premium-card-title">Healthy Dish</Card.Title>
                <Card.Text className="premium-card-text">
                  A healthy and nutritious recipe for all the health-conscious individuals.
                </Card.Text>
                <Button variant="primary" className="premium-button">View Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Dashboard;
