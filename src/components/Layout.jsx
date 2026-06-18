import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BackToTop from "./BackToTop";

function Layout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-700 mt-10">
        <div className="container-custom py-8 text-center">
          <h3 className="font-semibold text-lg">
            Ghanshyam Jadhav
          </h3>

          <p className="text-slate-400 mt-2">
            React.js | ASP.NET Core | MERN Stack Developer
          </p>

          <p className="text-slate-500 mt-4">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}

export default Layout;