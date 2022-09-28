import ExerciseProLevel from "./ExerciseProLevel";
import ExerciseIntermediateLevel from "./ExerciseIntermediateLevel";
import ExerciseBeginnerLevel from "./ExerciseBeginnerLevel";



export default function Day({ data }) {
    return (

        <div className={'trainingDay'}>
            <div className="exerciseBlock">
                <h2>{data.name}</h2>
                <ExerciseProLevel data={data.proLevel}/>
                <ExerciseIntermediateLevel data={data.intermediateLevel} />
                <ExerciseBeginnerLevel data={data.beginnerLevel} storageId={data.id}/>
            </div>
        </div>

    )
}

