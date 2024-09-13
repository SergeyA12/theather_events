import { useContext } from "react"
import { deleteEvent } from "../lib/Api"
import { Context } from "../lib/Context"
import { ActionTypes, IEvent } from "../lib/Types"

interface IProps{
    event:IEvent
}
export const Event:React.FC<IProps> = ({event}) => {
    
    const context = useContext(Context)
    if(!context){
        throw new Error("Outside provider")
    }
    const {dispatch} = context

    const handleDelete = async()=>{
        dispatch({type:ActionTypes.RemoveEvent,payload:event.id})
        await deleteEvent(event.id)
    }
    
    return <div>
        <img src={event.cover} />
        <p>{event.title}</p>
        <p>{event.date} at {event.time}</p>
        <strong>{event.type}</strong>
        <p>By {event.composer}</p>
        <button style={{background:"red"}} onClick={handleDelete}>delete</button>
    </div>
}