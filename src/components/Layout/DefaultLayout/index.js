import Header from "../components/Header";

function DefaultLayout({ children }) {
    return <div>
        <Header />
        <div className="container-fill">
            <div className="row">
                <div className="col-md-10">
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default DefaultLayout;