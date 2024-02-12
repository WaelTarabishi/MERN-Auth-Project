import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner animation='border' role='status' style={{ width: "60px", height: "60px", margin: "auto", display: "block" }}></Spinner>
    )
}

export default Loader