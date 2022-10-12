import { useState } from "react";


export const Counter = ({compleatedStartCount, storageId, level}) => {
    const [completed, setCompleted] = useState(+compleatedStartCount)

    const incrementCompleted = () => {
        setCompleted(completed + 1);
        localStorage.setItem(storageId + level, +completed + 1)

    }
    const resetCompletedCounter = () => {
        setCompleted(0);
        localStorage.setItem(storageId + level, 0)
    }
    return (
        <div>
            <p>Compleated times: {completed}</p>
            <button onClick={incrementCompleted}>compleated +1</button>
            <button onClick={resetCompletedCounter}>reset</button>
        </div>
    )
}