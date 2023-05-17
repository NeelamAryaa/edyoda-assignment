import "../App.css";

import SubscriptionCard from "../components/SubscriptionCard/SubscriptionCard";
import Content from "../components/Content/Content";
import Navbar from "../components/Navbar/Navbar";

const Page = () => {
  return (
    // <div className="container">
    <>
      <Navbar />
      <div className="main">
        <Content />
        <SubscriptionCard />
      </div>
    </>
    // </div>
  );
};

export default Page;
