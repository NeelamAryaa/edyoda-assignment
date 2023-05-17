import React from "react";
import "./SubscriptionCard.css";

import { default as NoTime } from "../../assets/no-time.svg";

import { default as Razorpay } from "../../assets/razorpay.svg";

import { Checkbox, Button } from "@mantine/core";
import { useState } from "react";

export default function SubscriptionCard() {
  const card = [
    {
      id: 1,
      text: "12 Months Subscription",
      expired: true,
      recommend: false,
      total_price: 99,
    },
    {
      id: 2,
      text: "12 Months Subscription",
      expired: false,
      recommend: true,
      total_price: 179,
    },
    {
      id: 3,
      text: "6 Months Subscription",
      expired: false,
      recommend: false,
      total_price: 149,
    },
    {
      id: 4,
      text: "3 Months Subscription",
      expired: false,
      recommend: false,
      total_price: 99,
    },
  ];

  const discount_price = 50;

  const [seletedSubscription, setSeletedSubscription] = useState(-1);
  const [subscriptionPrice, setSubscriptionPrice] = useState(0);

  const onChangeHandler = (id) => {
    setSeletedSubscription(id);
    setSubscriptionPrice(card[id - 1].total_price);
  };
  return (
    <div className="r-main">
      <div className="card">
        <div className="progress-bar">
          <div className="signup-container">
            <div className="sign-up">1</div>
            <span style={{ fontSize: "0.8rem" }}>Sign Up</span>
          </div>
          <div className="subscribe-container">
            <div className="subscribe">2</div>
            <span style={{ fontSize: "0.8rem" }}>Subscribe</span>
          </div>
        </div>
        <p className="form-header">Select your subcription plan</p>
        <form className="form">
          {card.map((ele) => (
            <div
              className="input-container"
              style={{
                background: ele.expired
                  ? "#E7E7E7"
                  : seletedSubscription === ele.id
                  ? "#D7EDDD"
                  : "none",
              }}
            >
              <div>
                {ele.expired ? (
                  <div
                    className="tag"
                    style={{
                      background: "#F77171",
                      border: "#F77171 2px solid",
                      cursor: "pointer",
                    }}
                  >
                    Offer expired
                  </div>
                ) : null}{" "}
                {ele.recommend ? (
                  <div
                    className="tag"
                    style={{
                      background: "#47BA68",
                      border: "#47BA68 2px solid",
                    }}
                  >
                    Recommended
                  </div>
                ) : null}
                <Checkbox
                  className="checkbox"
                  color={seletedSubscription === ele.id ? "green" : ""}
                  label={ele.text}
                  radius="xl"
                  size="md"
                  fw={"500"}
                  disabled={ele.expired}
                  value={seletedSubscription}
                  onChange={() => onChangeHandler(ele.id)}
                  checked={seletedSubscription === ele.id}
                />
              </div>
              <div className="text-container">
                <span>
                  Total{" "}
                  <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                    ₹{ele.total_price}
                  </span>
                </span>
                <span>
                  {" "}
                  ₹{(ele.total_price / 12).toFixed()}{" "}
                  <span style={{ color: "#BEBEBE" }}>/mo</span>
                </span>
              </div>
            </div>
          ))}

          <hr style={{ marginTop: "1.5rem" }} />
          <div className="summary-container">
            <div className="st-container">
              <p>Subscription Fee</p>
              <p style={{ fontWeight: "600" }}>₹{subscriptionPrice}</p>
            </div>
            <div className="alert">
              <div className="offer">
                <p>Limited time offer</p>
                <p style={{ fontWeight: "600" }}>- ₹{discount_price}</p>
              </div>
              <div className="alert-body">
                <img src={NoTime} alt="search-icon"></img>
                <p style={{ paddingLeft: "5px" }}>
                  Offer valid till 25th March 2023{" "}
                </p>
              </div>
            </div>
            <div className="total-price">
              <p>Total (Incl. of 18% GST)</p>
              <p style={{ fontWeight: "600", fontSize: "1.5rem" }}>
                ₹{subscriptionPrice ? subscriptionPrice - discount_price : 0}
              </p>
            </div>
            <div className="btn-container">
              <Button
                style={{ borderWidth: "2px" }}
                variant="outline"
                color="red"
                size="md"
                w="48%"
                h="3rem"
              >
                CANCEL
              </Button>
              <Button size="md" w="48%" h="3rem" color="green">
                PROCEED TO PAY{" "}
              </Button>
            </div>
            <div style={{ display: "flex", marginTop: "1.2rem" }}>
              <img src={Razorpay} alt="razorpay"></img>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
