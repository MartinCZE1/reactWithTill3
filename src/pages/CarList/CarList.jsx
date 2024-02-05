import { Link } from "react-router-dom"

export default function CarList(){
    return (
        <>
            <h1>Show all car</h1>
            <Link to={"/"}>
            <p>Go back</p>
            </Link>
        </>
    )
}