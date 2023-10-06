export default class DateParser {

    // return a date object into a string like "2023,10,05" -> October 5th
    parseDate = function(date, now) {
        if (this._getIsToday(date, now)) {
            return "Today";
        } else if (this._getIsTomorrow(date, now)) {
            return "Tomorrow";
        } else {
            return `${this.getMonth(date.getMonth() +1)} ${date.getDate()}${this.getSuffix(date.getDate())}`;
        }
    }

    getTimeFromIso8601 = function(date) {
        return String(date).split('T')[1].substring(0, 5);
    }

    _getIsToday = function(date, now) {
        const sameMonth = now.getMonth() == date.getMonth();
        const sameDay = now.getDate() == date.getDate();
        const sameYear = now.getYear() == date.getYear();
        return sameDay && sameMonth && sameYear; 
    }

    //return a boolean if p1 is one date ahead of now
    _getIsTomorrow = function(date, now) {
        const sameMonth = now.getMonth() == date.getMonth();
        const sameDay = now.getDate() + 1 == date.getDate();
        const sameYear = now.getYear() == date.getYear();
        return sameDay && sameMonth && sameYear;
    }

    // turn month as num into month as string
    getMonth = function(month) {
        switch(month) {
            case 1: return "January";
            case 2: return "February";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
        return null;
    }

    // get suffix to put behind a number like 1 -> "st" or 2 -> "nd"
    getSuffix = function(date) {
        const lastDigit = date % 10;
        if (date > 10 && date < 20) return "th";
        switch(lastDigit) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
}