import { Link } from "react-router"


const PageNotFoundPage = () => {

    return (
        <>
        <div>This page does not exist</div>
        <Link to={"/auth/login"}>Go back to login</Link>
        </>
    )
}

export default PageNotFoundPage