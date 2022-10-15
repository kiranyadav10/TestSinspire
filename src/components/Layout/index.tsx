import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const BasicLayout = ({ children }: any) => {
  return (
    <>
      <Sidebar>
        {children}
      </Sidebar>
      {/* <Navbar />
  
      <div className="max_width layoutPadding" style={{ margin: "50px auto" }}>
        {children}
      </div> */}
    </>
  );
};

export default BasicLayout;
