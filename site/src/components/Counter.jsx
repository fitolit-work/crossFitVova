import { useState } from "react";


export const Counter = ({compleatedStartCount}) => {
    const [completed, setCompleted] = useState(+compleatedStartCount)

    const incrementCompleted = () => {
        setCompleted(completed + 1)

    }
    const resetCompletedCounter = () => {
        setCompleted(0)
    }
    return (
        <div>
            <p>Compleated times: {completed}</p>
            <button onClick={incrementCompleted}>compleated +1</button>
            <button onClick={resetCompletedCounter}>reset</button>
        </div>
    )
}
