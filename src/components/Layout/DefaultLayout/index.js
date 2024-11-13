import Footer from "../components/Footer";
import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {/* {children} */}
      <div className="container-fill">
        <div className="row">
          <div className="col-md-10" style={{width:'100%'}}>
            <div className="content ">{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
