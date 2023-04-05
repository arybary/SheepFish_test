import { Link } from "react-router-dom";

const NoProductPage=()=> {
    return (
      <div>
        <h2>NO PRODUCT...</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }

  export default NoProductPage