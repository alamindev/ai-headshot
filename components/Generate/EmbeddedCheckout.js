"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useRef, useState } from "react";

// Load Stripe outside of the component
const stripePromise = loadStripe(
    'pk_test_51OmIKGASvVieBJpKtWjKXYLvKlEOFQhOWMMGCjDEb6dMVLImvPLzqbvEyWBhSdR905TWzn4SLhdWllxcglzz9dFt00l0r8f7cF'
  );
const EmbeddedCheckout = ({price}) => {
  const [clientSecret, setClientSecret] = useState("");
  const checkoutRef = useRef(null); // Container reference
  const checkoutInstanceRef = useRef(null); // To store the checkout instance

  const convertToSmallestUnit = (amount, currency) =>{
    const zeroDecimalCurrencies = ["jpy", "krw"]; // Add currencies with no decimals here
    if (zeroDecimalCurrencies.includes(currency.toLowerCase())) {
      return Math.round(amount); // No decimal places
    }
    return Math.round(amount * 100); // For most currencies (2 decimal places)
  }
  


  useEffect(() => {
    // Step 1: Fetch the clientSecret from your backend
    fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: convertToSmallestUnit(price, 'usd'), currency: "usd" }), // Example amount
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => console.error("Error fetching client secret:", error));
  }, []);

  useEffect(() => {
    // Step 2: Initialize Stripe Embedded Checkout when clientSecret is available
    if (clientSecret) {
      stripePromise.then((stripe) => {
        stripe.initEmbeddedCheckout({ clientSecret }).then((checkout) => {
          // Step 3: Mount the checkout form
          if (!checkoutInstanceRef.current) {
            checkoutInstanceRef.current = checkout;
            checkout.mount(checkoutRef.current);
          }
        });
      });
    }

    // Optional: Cleanup to prevent multiple mounts
    return () => {
      if (checkoutInstanceRef.current) {
        checkoutInstanceRef.current.destroy();
        checkoutInstanceRef.current = null;
      }
    };
  }, [clientSecret]);

  return (
    <div className=""> 
      <div ref={checkoutRef} style={{ width: "100%", marginTop: "1rem" }} />
    </div>
  );
};

export default EmbeddedCheckout;
