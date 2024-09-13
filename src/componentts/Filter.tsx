import { useContext } from "react"
import { Context } from "../lib/Context"
import { ActionTypes, FilterTypes } from "../lib/Types"

export const Filter = () => {

    const context = useContext(Context)
    if(!context) {
        throw new Error("Error...")
    }

    const { state, dispatch } = context


    return <div>
        <p>{state.currentFilter} filter in used</p>
        <div className="select-wrapper">
            <select value={state.currentFilter} 
                    onChange={event => 
                    dispatch({type: ActionTypes.setFilter, 
                    payload: event.target.value})}>

                <option value={FilterTypes.All}>All</option>
                <option value={FilterTypes.Ballet}>Ballet</option>
                <option value={FilterTypes.Opera}>Opera</option>
            </select>
        </div>
    </div>
}