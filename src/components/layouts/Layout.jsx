import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F2F3F5]">
      <Header />
      
      {/* Main Content (Centered) */}
      <main className="flex-1 flex justify-center items-center text-center p-4">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
