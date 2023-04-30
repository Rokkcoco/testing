type ButtonTypeProps = {
    name:string
    callback?: (e:any)=>void
}
type namesType = {
    name: string
    surname: string
}
export const Button = (props:ButtonTypeProps) => {

    return <button onClick={props.callback}>{props.name}</button>
}