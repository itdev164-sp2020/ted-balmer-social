import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {logout} from "../utils/auth"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      color: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Link style={{color: "white" }} to='/app/profile'>Profile</Link>{" "} |
    <Link style={{color: "white" }} to='/app/details'>Details</Link>{" "} |
    <Link style={{color: "white" }} to='/app/'>Home</Link>{" "} |
    <Link style={{color: "white" }} to='/app/login'>Login</Link>{" "} |

    <button onClick={() => logout(()=> navigate("app/login"))}>Logout</button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
