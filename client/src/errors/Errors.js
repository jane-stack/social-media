import { useContext } from "react"
import { ErrorContext } from "../context/ErrorContext"

function Errors () {
    const { errors } = useContext(ErrorContext);

    const errorList = errors.map(error => (
        <div key={error.id}>
            <p>{error}</p>
        </div>
    ))

    return (
        <div>{ errorList }</div>
    )
}

export default Errors;