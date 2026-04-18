import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import FadeIn from "../animation/FadeIn";
function Layout({ children }) {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-grow-1">
        <Navbar />
        <div className="p-4">
          <FadeIn>{children}</FadeIn>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default Layout;