class UFormatter {
      private static id = 0;

      public static getHourWithMinutes(time: number): string {
            let date = new Date(time);

            return UFormatter.printIntegerOnPositions(date.getHours(), 2) + ":" + UFormatter.printIntegerOnPositions(date.getMinutes(), 2);
      }

      public static printIntegerOnPositions(value: number, positions: number): string {
            let digitsAmount: number = value.toString().length;
            let missingZeros = positions - digitsAmount;
            return UFormatter.repeatChar(missingZeros, "0") + value;
      }

      private static repeatChar(count: number, ch: string): string {
            if (count == 0) {
                  return "";
            }
            var count2 = count / 2;
            var result = ch;

            // double the input until it is long enough.
            while (result.length <= count2) {
                  result += result;
            }
            // use substring to hit the precise length target without
            // using extra memory
            return result + result.substring(0, count - result.length);
      }
}

export { UFormatter };