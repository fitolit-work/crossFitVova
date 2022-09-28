import { Counter } from "./Counter";

export default function ExerciseProLevel({ data }) {

    return (
        <div className="proLevel">
            <p className="proDescription">{data.description}</p>
            <ul className="proExerciseList">
                {data.exercises.map((ex, i) => (
                    <li className="proExercise" key={i}>{ex.count} {ex.name}</li>
                ))}
            </ul>
            <p className="proGenders">
                {data.genders.map((gender, i) => (
                    <span key={i}>{gender.gender} {gender.weight} {gender.unit} </span>
                ))}
            </p>
            <p className="proAdditionally">{data.additionally}</p>

            <Counter />

            <hr />
        </div>
    )
}