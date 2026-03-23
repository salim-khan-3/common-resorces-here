// export const ToDo = ({task,isDone}) =>{
//     if(isDone === true) {
//         return(
//         <div>
//             <li>Task: {task} </li>
//         </div>
//     )
//     }
//     else{
//         return(
//             <div>
//                 <li>Panding: {task}</li>
//             </div>
//         )
//     }
// }

export default function ToDo({task, isDone, time = 0}){
    return isDone? <li>Done: {task}</li> : <li>Not Done: {task}</li>
}