import { useContext } from "react"
import { ActionTypes, IEvent } from "../lib/Types"
import { Context } from "../lib/Context"
import { deleteEvent } from "../lib/Api"

interface IProps {
    event: IEvent   
}

export const Event: React.FC<IProps> = ({event}) => {
   

    const context = useContext(Context)
    if(!context) {
        throw new Error("Error...")
    }

    const { dispatch } = context
    
    const handleDelete = async() => {
        dispatch({type: ActionTypes.RemoveEvent, payload: event.id})
        await deleteEvent(event.id)
    }


    return <div>
        <p>event</p>
        <img src={event.cover}/>
        <p>{event.title}</p>
        <p>{event.date} at {event.time}</p>
        <strong>{event.type}</strong>
        <p>By {event?.composer}</p>
        <button onClick={handleDelete}>x</button>
    </div>
}