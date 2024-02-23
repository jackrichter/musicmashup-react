import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
      <footer className="border-top text-center small text-muted py-3 footer">
        <p>
          <Link to="/" className="mx-1">
            <strong className="footer-link">Home</strong>
          </Link>
          <Link to="/about-us" className="mx-1">
            <strong className="footer-link">About</strong>
          </Link>
          <Link to="/terms" className="mx-1">
            <strong className="footer-link">Terms</strong>
          </Link>
        </p>
        <p className="m-0">
          Copyright &copy; {new Date().getFullYear()}
          <a href="/" className="text-muted">
            {" "}
            MusicMushup (J.Richter)
          </a>
          . All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default FooterComponent;
