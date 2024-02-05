import { Link } from "react-router-dom"
import MainPage from "../MainPage/MainPage"

export default function CarCreateForm() {
    return(
        <>
            <h1>Car create form</h1>
            <Link to={"/"}>
            <p>Go back</p>
            </Link>
        </>
    )
}