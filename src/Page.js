import "./App.css";
import { default as BookIcon } from "./assets/book-icon.svg";
import { default as ClockIcon } from "./assets/clock-icon.svg";
import { default as CapIcon } from "./assets/cap-icon.svg";
import { default as AdIcon } from "./assets/ad-icon.svg";
import { default as TvIcon } from "./assets/tv-icon.svg";
import { default as Vicon } from "./assets/v.svg";
import { default as SearchIcon } from "./assets/search.svg";
import { Button } from "@mantine/core";
import SubscriptionCard from "./components/SubscriptionCard/SubscriptionCard";

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
            // h="3rem"
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
                <img src={BookIcon} alt="book-icon" />

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
          <SubscriptionCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
