import { useLocation } from "react-router-dom";
import Footer from "./Footer"; 
import NewFooter from "./SecondFooter";
import Header from "./Header";

const Layout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  const newFooterPaths = ["/aboutus", "/contactus", "/privacypolicy", "/termscondition"];
  const showNewFooter = newFooterPaths.includes(path);

  

  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Header />

      <main className="flex-grow w-full  overflow-hidden">
        {children ? children : <p>No content available</p>} 
      </main>

      {showNewFooter ? <NewFooter /> : <Footer />}
    </div>
  );
};

export default Layout;
