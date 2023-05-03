type TestingProps = {
    carSSS: Array<ArrayProps>
}

type ArrayProps = {
    manufacturer: string
    model: string
}

const MapInTable = (props: TestingProps) => {

// const topCars = [
//     {manufacturer:'BMW', model:'m5cs'},
//     {manufacturer:'Mercedes', model:'e63s'},
//     {manufacturer:'Audi', model:'rs6'}
// ]

    return <table>
        {props.carSSS.map((CarsData, index) => {
            return (
                <tbody key={index}>
                    <tr><th>{CarsData.manufacturer}</th></tr>
                    <tr><td>{CarsData.model}</td></tr>
                </tbody>
            )})}
    </table>
}


export default MapInTable;

