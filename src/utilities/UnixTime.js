class UnixTime {
  static toDate(unixTime) {
    return new Date(unixTime * 1000);
  }

  static toUnixTime(date) {
    date = new Date(date); // Ensure date is a Date object
    return Math.floor(date.getTime() / 1000);
  }

  static getCurrentTimeUNIX() {
    return Math.floor(Date.now() / 1000);
  }

  static ConvertUNIXtoDC(unixTime, modifier) {
    

    switch (modifier) {
      case 't':
        return `<t:${unixTime}:t>`; // Short time format
      case 'T':
        return `<t:${unixTime}:T>`; // Long time format
      case 'd':
        return `<t:${unixTime}:d>`; // Short date format
      case 'D':
        return `<t:${unixTime}:D>`; // Long date format
      case 'f':
        return `<t:${unixTime}:f>`; // Short date/time format
      case 'F':
        return `<t:${unixTime}:F>`; // Long date/time format
      case 'R':
        return `<t:${unixTime}:R>`; // Relative time format
      default:
        return unixTime;
    }
  }

  static ConvertUnixUTCtoUnixTimezone(unixTime, timezoneOffset) {
    const date = this.toDate(unixTime);
    const utcDate = new Date(date.getTime() + timezoneOffset * 60 * 1000);
    return this.toUnixTime(utcDate);
  }

  
}

export default UnixTime;