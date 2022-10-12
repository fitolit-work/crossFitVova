import { Counter } from "./Counter";

export default function ExerciseIntermediateLevel({ data, storageId }) {

    // создает или вытаскивает для себя стартовое значение из/в localStorage -start
    let compleatedStartCount = '0';
    if (localStorage.getItem(storageId + '-intermediate')) {
        compleatedStartCount = localStorage.getItem(storageId + '-intermediate')
    } else {
        localStorage.setItem(storageId + '-intermediate', '0');
    }
    // создает или вытаскивает для себя стартовое значение из/в localStorage -end

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

            <Counter compleatedStartCount={compleatedStartCount} storageId={storageId} level={'-intermediate'}/>

            <hr />



        </div>
    )
}
