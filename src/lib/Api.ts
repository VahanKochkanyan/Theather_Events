import axios from "axios";
import { FilterTypes, IEvent } from "./Types";

export const getEvents = async(type: FilterTypes = FilterTypes.All): Promise<IEvent[]> => {

    const quary = type != FilterTypes.All ? ("?type=" + type) : ""

    const response = await axios.get('http://localhost:3004/events' + quary)
    return response.data
}


export const deleteEvent = async (id: string | number): Promise<void> => {
    await axios.delete(`http://localhost:3004/events/${id}`);
};
