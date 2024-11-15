import { Link } from "react-router-dom";


const Logout = () => {
    return (
        <button id="logout-button" className="button is-normal is-link is-light is-responsive is-pulled-right">
  <Link to='/login'>Logout</Link>
</button>
    )
}

export default Logout;