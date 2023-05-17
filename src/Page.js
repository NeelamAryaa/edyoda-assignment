import "./App.css";
import { default as BookIcon } from "./assets/book-icon.svg";
import { default as ClockIcon } from "./assets/clock-icon.svg";
import { default as CapIcon } from "./assets/cap-icon.svg";
import { default as AdIcon } from "./assets/ad-icon.svg";
import { default as NoTime } from "./assets/no-time.svg";
import { default as TvIcon } from "./assets/tv-icon.svg";
import { default as SearchIcon } from "./assets/search.svg";
import { default as Razorpay } from "./assets/razorpay.svg";
import { default as Vicon } from "./assets/v.svg";

import { Checkbox, Button } from "@mantine/core";

const Page = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="l-nav">
          <div className="name" style={{ fontSize: "2.5rem" }}>
            EDYODA
          </div>
          <div>
            Courses
            <img src={Vicon} alt="v-icon" style={{ marginLeft: "1rem" }}></img>
          </div>
          <div>
            Program
            <img src={Vicon} alt="v-icon" style={{ marginLeft: "1rem" }}></img>
          </div>
        </div>
        <div className="r-nav">
          <div>
            <img src={SearchIcon} alt="search-icon"></img>
          </div>
          <div>Log in</div>
          {/* <div>JOIN NOW</div> */}
          <Button
            fz={"lg"}
            radius="xl"
            px={"3.3rem"}
            h="3rem"
            variant="gradient"
            gradient={{ from: "#0048ff", to: "#0096ff", deg: 105 }}
          >
            JOIN NOW
          </Button>
        </div>
      </div>
      <div className="main">
        <div className="l-main">
          <div className="desc-card">
            <div style={{ fontSize: "3rem", fontWeight: "500" }}>
              Access curated courses worth ₹{" "}
              <span
                style={{
                  textDecoration: "line-through red 6px",
                  // textDecorationColor: "red",
                  // textDecorationThickness: "10px",
                }}
              >
                18,500
              </span>{" "}
              at just{" "}
              <span style={{ color: "#0096ff", fontWeight: "600" }}>₹ 99</span>{" "}
              per year!
            </div>
            <div className="keypoints" style={{ fontSize: "1.8rem" }}>
              <div className="keypoint">
                <img
                  src={BookIcon}
                  alt="book-icon"
                  // height="40px"
                  // style={{ marginRight: "1rem" }}
                />

                <p>
                  <span>100+</span> Job relevant courses
                </p>
              </div>

              <div className="keypoint">
                <img
                  src={ClockIcon}
                  alt="book-icon"
                  // height="40px"
                  // style={{ marginRight: "1rem" }}
                ></img>

                <p>
                  <span>20,000+</span> Hours of content
                </p>
              </div>

              <div className="keypoint">
                <img
                  src={TvIcon}
                  alt="book-icon"
                  // height="40px"
                  // style={{ marginRight: "1rem" }}
                ></img>

                <p>
                  <span>Exclusive</span> webinar access
                </p>
              </div>

              <div className="keypoint">
                <img
                  src={CapIcon}
                  alt="book-icon"
                  // height="40px"
                  // style={{ marginRight: "1rem" }}
                ></img>

                <p>
                  Scholarship worth <span>₹94,500</span>
                </p>
              </div>

              <div className="keypoint">
                <img
                  src={AdIcon}
                  alt="book-icon"
                  // height="40px"
                  // style={{ marginRight: "1rem" }}
                ></img>

                <p>
                  <span>Ad Free</span> learning experience
                </p>
              </div>
            </div>
          </div>
        </div>
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
              <div
                className="input-container"
                style={{ background: "#E7E7E7" }}
              >
                <div>
                  <div
                    className="tag"
                    style={{
                      background: "#F77171",
                      border: "#F77171 2px solid",
                    }}
                  >
                    Offer expired
                  </div>
                  <Checkbox
                    className="checkbox"
                    label="12 Months Subscription"
                    radius="xl"
                    size="md"
                    fw={"500"}
                    disabled
                  />
                </div>
                <div className="text-container">
                  <span>Total ₹179</span>
                  <span> ₹15 /mo</span>
                </div>
              </div>
              <div
                className="input-container"
                style={{ background: "#D7EDDD", border: "2px solid #47BA68" }}
              >
                <div>
                  <div
                    className="tag"
                    style={{
                      background: "#47BA68",
                      border: "#47BA68 2px solid",
                    }}
                  >
                    Recommended
                  </div>
                  <Checkbox
                    color="green"
                    className="checkbox"
                    label="12 Months Subscription"
                    radius="xl"
                    size="md"
                    fw={"500"}
                  />
                </div>
                <div className="text-container">
                  <span>Total ₹179</span>
                  <span> ₹15 /mo</span>
                </div>
              </div>
              <div className="input-container">
                <Checkbox
                  className="checkbox"
                  label="6 Months Subscription"
                  radius="xl"
                  size="md"
                  fw={"500"}
                />
                <div className="text-container">
                  <span>Total ₹179</span>
                  <span> ₹15 /mo</span>
                </div>
              </div>
              <div className="input-container">
                <Checkbox
                  className="checkbox"
                  label="3 Months Subscription"
                  radius="xl"
                  size="md"
                  fw={"500"}
                />
                <div className="text-container">
                  <span style={{ display: "block" }}>Total ₹179</span>
                  <span> ₹15 /mo</span>
                </div>
              </div>
              <hr style={{ marginTop: "1.5rem" }} />
              <div className="summary-container">
                <div className="st-container">
                  <p>Subscription Fee</p>
                  <p>₹1500</p>
                </div>
                <div className="alert">
                  <div className="offer">
                    <p>Limited time offer</p>
                    <p>- ₹18,401</p>
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
                  <p>₹149</p>
                </div>
                <div className="btn-container">
                  <Button
                    variant="outline"
                    color="red"
                    size="md"
                    w="48%"
                    h="3rem"
                  >
                    CANCEL
                  </Button>
                  <Button size="md" w="48%" h="3rem">
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
      </div>
    </div>
  );
};

export default Page;
