import { Counter } from "./Counter";

export default function ExerciseIntermediateLevel({ data }) {

    return (
        <div className="intermediateLevel">
            <h3 className="intermediateTitle">{data.intermediateOptionTitle}</h3>
            <p className="intermediateDescription">{data.intermediateDescription}</p>
            <ul className="intermediateExerciseList">
                {data.intermediateExercises.map((ex, i) => (
                    <li className="intermediateExercise" key={i}>{ex.count} {ex.name}</li>
                ))}
            </ul>
            <p className="intermediateGenders">
                {data.intermediateGenders.map((gender, i) => (
                    <span key={i}>{gender.gender} {gender.weight} {gender.unit} </span>
                ))}
            </p>

            <Counter />

            <hr />



        </div>
    )
}
