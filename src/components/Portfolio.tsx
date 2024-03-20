import Education from "./Education";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PortfolioTemplate from "./PortfolioTemplate";
import Profile from "./Profile";

const Portfolio = () => {
  return (
    <PortfolioTemplate
      navbar={<NavBar onClick={(str) => console.log(str)} />}
      leftBody={<Profile />}
      rightBody={<Education />}
      footer={<Footer />}
    />
  );
};

export default Portfolio;
