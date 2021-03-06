interface WeeklyCalendarPropsAction {
    actionType: number,
    payload: {
        weekStartTime: number,
        hoursDayLength: number,
        nodesPerHour: number,
        startDayMilis: number
    }
}

interface WeeklyCalendarHeaderAction {
    actionType: number,
    payload: {
        weeksAmount: number
    }
}

interface WeeklyCalendarFieldAction {
    actionType: number,
    payload: {
        startTime: number,
        endTime: number
    }
}

interface EventAction {
    actionType: number,
    payload: {
        event: DTOEvent
    }
}

interface Action {
    actionType: number,
    payload: any
}