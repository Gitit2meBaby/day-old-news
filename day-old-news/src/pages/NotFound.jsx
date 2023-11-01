import { Link } from "react-router-dom";


export const NotFound = () => {

    return (
        <section className="not-found">
            <h1>Oops! You seem to be lost.</h1>
            <Link to='/' ><button className="primary-btn">
                Home
            </button></Link>
        </section>
    );
};
