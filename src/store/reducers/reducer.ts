


function getFilterIndex<T>(state: T, itemId: number) {
    return state.get("filters").findIndex(
        (item) => item.get("id") === itemId
    );
}

function setState(state, newState) {
    return state.merge(newState);
}


function changeFilter(state, filter) {
    let filterIndex = getFilterIndex(state,filter)
    const updatedFilter = state.get("filters")
        .get(filterIndex)
        .update("inuse", inuse => inuse === false ? true : false);
    return state.update("filters", filters => filters.set(filterIndex, updatedFilter));
}

export default function(state = Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            return setState(state, action.state);
        case "CHANGE_FILTER":
            return changeFilter(state, action.filter);
        default:
            return state
    }
}