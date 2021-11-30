import React, { Component } from "react";
import Return_type from "./Return_types";
import styled from "styled-components";

export default function Returns() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [order_id, setOrdr_id] = React.useState("");
  const [preferred, setpreferred] = React.useState("");
  const [refund, setRefund] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  

  const handleSubmit = (event) => {
    console.log(`
    Form Submited 
    `);

  
    event.preventDefault();
  };

  return (
    <ReturnWrapper>
      <div className="container">
        <p>
          <h5>
            <b>SHIPPING </b>
          </h5>
          All Golden Shoe shipments are sent via express courier - fully tracked.
          <br />
          <br />
          <li>UK Courier 1-2 working days </li>
          <li>Europe Courier 1-3 working days </li>
          <li>
            US Courier 1-4 working days Worldwide Courier 1-5 working days
          </li>
          <br />
          <div>
            <h5>
              <b>RETURNS</b>
            </h5>
            <p>
              <p>Free exchanges and returns on all full price orders</p>
              <p>
                <b>Extended Returns Policy</b> - 60 Days. As always, our team
                will ensure your returns & exchange processes are as simply and
                easy as possible.
              </p>
              If you need to return your item then please complete our returns
              request form below. Our team will check your request and get back
              to you shortly.
              <p>
                Please note that item(s) must be in a new and unworn condition;
                with no marks and packaging intact. We cannot accept any used
                items and any we receive will be returned to the purchaser at
                their cost.
              </p>
            </p>

            <p>
              <b>
                Returns policy for items bought in sale.
                <br />
              </b>
              <br />
              To return any item bought during a sale, use our returns request
              form within 14 days of receipt, to let us know. We’ll send
              information on next steps but please note the following, in
              addition to our general return conditions:
              <p>
                <b />
                <b />
                <li>
                  Any items bought at a discounted price of 20% or more can be
                  exchanged (in line with conditions below) but we cannot offer
                  to refund
                </li>
                <li>We don’t offer free returns on items bought in the sale</li>
                <li>
                  You are responsible for arranging, paying for and posting
                  items bought in the sale back to our UK address
                </li>
                <li>
                  Any items purchased at a discounted price of 20% or more are
                  eligible for an exchange only
                </li>
                <li>
                  If you don’t want to exchange the items, or the items you want
                  are no longer available, you will be refunded via store credit
                  only
                </li>
              </p>
            </p>
          </div>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <h1>Return Form</h1>

        <label>
          Name:
          <input
            name="name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Reason for returning:
          <input
            name="refund"
            type="refund"
            value={refund}
            onChange={(e) => setRefund(e.target.value)}
            required
          />
        </label>

        <label>
          Order ID:
          <input
            name="password"
            type="password"
            value={order_id}
            onChange={(e) => setOrdr_id(e.target.value)}
            required
          />
        </label>

        <label>
          What's your preferred next step:
          <select
            name="country"
            value={preferred}
            onChange={(e) => setpreferred(e.target.value)}
            required
          >
            <option key="" />
            {Return_type.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </label>

        <label>
          <input
            name="acceptedTerms"
            type="checkbox"
            onChange={(e) => setAcceptedTerms(e.target.value)}
            required
          />
          I accept the terms of service
        </label>

        <button>Submit</button>
      </form>
    </ReturnWrapper>
  );
}

const ReturnWrapper = styled.nav`
  body {
    display: flex;
    font-family: Lato;
    height: 97vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4a4e69;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    min-width: 100px;
    min-height: 400px;
    padding: 20px 40px 40px 40px;
    border-radius: 6px;
    box-shadow: 0px 1px 1px #222;
    background-color: #fefefe;
    margin: auto;
    margin-top: 1.95em;
    width: 35%;
  }

  form > h1 {
    display: flex;
    justify-content: center;
    font-family: "Segoe UI", "Ubuntu", "Roboto", "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 2em;
    font-weight: lighter;
    margin-top: 0.25em;
    color: #222;
    letter-spacing: 2px;
  }

  .info {
    padding-bottom: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  label {
    margin-bottom: 0.5em;
    color: #444;
    font-weight: lighter;
  }

  input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
  }
  input,
  select {
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid #d6d1d5;
    margin-top: 5px;
  }
  select {
    display: block;
    width: 100%;
    height: 35px;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: auto;
    margin-top: 2em;
    margin-right: 10px;
  }

  button {
    min-width: 100%;
    cursor: pointer;
    margin-right: 0.25em;
    margin-top: 0.5em;
    padding: 0.938em;
    border: none;
    border-radius: 4px;
    background: var(--darkRed);
    color: #fefefe;
  }
  button:hover {
    background: var(--red);
    color: #fefefe;
  }

  .error {
    color: #db2269;
    font-size: 0.5em;
    display: relative;
  }

  .submit {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  container {
    display: flex;
    justify-content: center;
  }
  .center {
    width: 800px;
  }

  .container {
    font-family: Lato;
    display: flex;
    justify-content: left;
    align-items: left;
    justify-content: left;
    margin-top: 1.95em;
    list-style-type: circle;
    li {
      margin-left: 0;
      padding-left: 40px;
    h1 {
      justify-content: center;
      align-items: center;
      justify-content: center;

    }

  }
`;
