import { Counter } from "./Counter";


export default function ExerciseBeginnerLevel({ data, storageId }) {

    // создает или вытаскивает для себя стартовое значение из/в localStorage -start
    let compleatedStartCount = '0';
    if (localStorage.getItem(storageId + '-beginner')) {
        compleatedStartCount = localStorage.getItem(storageId + '-beginner')
    } else {
        localStorage.setItem(storageId + '-beginner', '0');
    }
    // создает или вытаскивает для себя стартовое значение из/в localStorage -end

    return (
        <div className="beginnerLevel">
            <h3 className="beginnerTitle">{data.beginnerOptionTitle}</h3>
            <p className="beginnerDescription">{data.beginnerDescription}</p>
            <ul className="beginnerExerciseList">
                {data.beginnerExercises.map((ex, i) => (
                    <li className="beginnerExercise" key={i}>{ex.count} {ex.name}</li>
                ))}
            </ul>
            <p className="beginnerGenders">
                {data.beginnerGenders.map((gender, i) => (
                    <span key={i}>{gender.gender} {gender.weight} {gender.unit} </span>
                ))}
            </p>
                    <Counter/>
            <hr />

        </div>
    )
}
