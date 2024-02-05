import { Link } from "react-router-dom"

export default function CarView(){
    return (
        <>
            <h1>View car</h1>
            <Link to={"/"}>
            <p>Go back</p>
            </Link>
        </>
    )
}