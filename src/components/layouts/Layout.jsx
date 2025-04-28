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
    <div className="flex flex-col w-full min-h-screen bg-[#F2F3F5]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* Footer */}
      {showNewFooter ? <NewFooter /> : <Footer />}
    </div>
  );
};

export default Layout;
