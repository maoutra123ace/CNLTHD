import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <h6 className="h2 text-white d-inline-block mb-0">Tables</h6>
        <nav
          aria-label="breadcrumb"
          className="ml-md-4"
        >
          <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
            <li className="breadcrumb-item">
              <a href="#">
                <i className="fas fa-home" />
              </a>
            </li>
            <li className="breadcrumb-item">
              <Link to="">Tables</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tables
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumb;
