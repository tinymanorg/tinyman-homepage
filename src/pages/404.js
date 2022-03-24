import * as React from "react"
import { Link } from "gatsby"


const NotFoundPage = () => {
  return (
    <div class="container error"> 
    <div class="error_bg"></div>
    <div class="error_content">
      <h1>404!</h1>
      <p>The page you're looking for may be broken or have been removed. You may mistyped the address or the page may have moved.</p>
      <Link to="/" className="link-s" >
            <div data-hover-animation="Go back to homepage">
              Go back to homepage
            </div>
      </Link>
      <div class="seperator"></div>
    </div>
  </div>
  )
}

export default NotFoundPage
