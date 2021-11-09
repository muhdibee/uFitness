import * as actionTypes from './actionTypes'
export function receiveEntries (entries) {
    return {
        type: actionTypes.RECEIVE_ENTRIES,
        entries,
    }
}

export function addEntry (entry) {
    return {
        type: actionTypes.ADD_ENTRY,
        entry,
    }
} 