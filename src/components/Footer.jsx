import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <p>Made with ❤️ and 🥑</p>
            <div className="icon">
              <Link to="https://www.instagram.com/">
                <img
                  width={22}
                  height={22}
                  src="/images/icon-instagram.svg"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/">
                <img
                  width={22}
                  height={22}
                  src="/images/icon-bluesky.svg"
                  alt=""
                />
              </Link>
              <Link to="https://www.tiktok.com/">
                <img
                  width={22}
                  height={22}
                  src="/images/icon-tiktok.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
