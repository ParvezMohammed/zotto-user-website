import { useLocation } from "react-router-dom";
import Footer from "./Footer"; 
import NewFooter from "./secondfooter";
import Header from "./Header";

const Layout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  const newFooterPaths = ["/aboutus", "/contactus", "/privacypolicy", "/termscondition"];

  const showNewFooter = newFooterPaths.includes(path);

  return (
    <div className="flex-col justify-center items-center bg-[#F2F3F5] min-h-screen">
      <Header />
      
      <main className="pt-[2px]">
        {children}
      </main>

      {/* Footer conditionally */}
      {showNewFooter ? <NewFooter /> : <Footer />}
    </div>
  );
};

export default Layout;
