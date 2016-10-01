class UserPreferences {
      weeklyCalendarFields :{ [name: number]: string; } = {
            0/*EventRepetition.NO*/: "#fc8e5a",
            1/*EventRepetition.WEEKLY*/: "#d66c3b",
            2/*EventRepetition.MONTHLY*/: "#ad542b",
            3/*EventRepetition.ANNUALY*/: "#993203"
      }

      getWeeklyCalendarFieldColor(eventRepetition: EventRepetition): string{
            return this.weeklyCalendarFields[eventRepetition];
      }
}

let UserPreferencesInstance = new UserPreferences();

export { UserPreferencesInstance };