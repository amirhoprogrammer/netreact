import { Link } from "react-router-dom" 

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry! not found your page!!!!</h2>
            <p>please come to home page</p>
            <br />
            <Link to="/">Home page</Link>
            
        </div>
    );
}
 
export default NotFound;