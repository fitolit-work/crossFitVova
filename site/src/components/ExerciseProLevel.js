import { Counter } from "./Counter";

export default function ExerciseProLevel({ data, storageId }) {

    // создает или вытаскивает для себя стартовое значение из/в localStorage -start
    let compleatedStartCount = '0';
    if (localStorage.getItem(storageId + '-pro')) {
        compleatedStartCount = localStorage.getItem(storageId + '-pro')
    } else {
        localStorage.setItem(storageId + '-pro', '0');
    }
    // создает или вытаскивает для себя стартовое значение из/в localStorage -end

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

            <Counter compleatedStartCount={compleatedStartCount} storageId={storageId} level={'-pro'}/>

            <hr />
        </div>
    )
}