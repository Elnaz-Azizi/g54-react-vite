import React from "react";
import Card from "./Card";
import {FaShoppingCart} from "react-icons/fa";

const Pricing = () => {
    
  const handlePurchase = (plan) => {
    alert(`You selected the ${plan} plan!`);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Our Pricing Plans</h1>
       
      <div className="row">
        {/* Basic Plan */}
        <div className="col-md-4">
          <Card
            title="Basic Plan"
            description={[
              "Perfect for individuals starting out.",
              "Includes essential features.",
            ]}
            image="https://placehold.co/150"
            buttonText="Choose Basic"
            buttonAction={() => handlePurchase("Basic")}
            cardStyle="bg-secondary text-white"
          />
        </div>

        {/* Pro Plan */}
        <div className="col-md-4">
          <Card
            title="Pro Plan"
            description={[
              "Ideal for small teams or startups.",
              "Access to advanced tools.",
            ]}
            image="https://placehold.co/150"
            buttonText="Choose Pro"
            buttonAction={() => handlePurchase("Pro")}
            cardStyle="border-success bg-success"
          />
        </div>

        {/* Enterprise Plan */}
        <div className="col-md-4">
          <Card
            title="Enterprise Plan"
            description={[
              "Designed for large organizations.",
              "Premium support included.",
            ]}
            image="https://placehold.co/150"
            cardStyle="border-warning bg-warning"
          >
            <small className="text-muted">Contact us for volume pricing.</small>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Pricing;