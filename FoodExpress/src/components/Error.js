import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Ooops..</h1>
            <h3>Something went wrong</h3>
            <h3>{error.status} {error.statusText}</h3>
            <h4>{error.error.message}</h4>
        </div>
    )
}

export default Error;