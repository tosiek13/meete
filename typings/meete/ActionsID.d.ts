interface WeeklyCalendarHeaderAction {
    actionType: number,
    payload: {
        weeksAmount: number
    }
}

interface WeeklyCalendarFieldAction {
    actionType: number,
    payload: {
        dayID: number,
        hourID: number
    }
}

interface Action {
    actionType: number,
    payload: any
}