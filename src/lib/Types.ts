import { Dispatch } from "react"

export interface IEvent {
    id: string | number
    title: string
    date: string
    time: string
    type: string
    composer: string
    cover: string
}


export interface IState {
    events: IEvent[]
    currentFilter: FilterTypes
    
}

export interface Action {
    type: ActionTypes
    payload?: unknown
}   

export interface IContextType {
    state: IState
    dispatch: Dispatch<Action>
}


export enum ActionTypes {
    AddEvent,
    RemoveEvent,
    UpdateEvent,
    setEvents,
    setFilter,
    deleteEvent
}

export enum FilterTypes {
    All = 'all',
    Opera = 'opera',
    Ballet = 'ballet'       

}

