import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="  flex-col justify-center items-center bg-[#F2F3F5]">
      <Header />
      
      {/* Main Content (Centered) */}
      <main className="">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
