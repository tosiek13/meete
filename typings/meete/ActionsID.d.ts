declare enum WeeklyCalendarHeaderActionID {
    SWITCH_WEEK
}

interface WeeklyCalendarHeaderAction {
    actionType: number,
    skipWeekAmount: number
}