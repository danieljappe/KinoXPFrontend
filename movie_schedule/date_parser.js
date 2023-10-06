export default class DateParser {

    // return a date object into a string like "2023,10,05" -> October 5th
    parseDate = function(date, now) {
        if (this._getIsToday(date, now)) {
            return "Today";
        } else if (this._getIsTomorrow(date, now)) {
            return "Tomorrow";
        } else {
            return `${this._getMonth(date.getMonth() +1)} ${date.getDate()}${this._getSuffix(date.getDay())}`;
        }
    }

    _getIsToday = function(date, now) {
        //const sameMonth = now.getMonth() + 1 == date.getMonth();
        //const sameDay = now.getDate() + 1 == date.getDate();
        return false; 
    }

    _getIsTomorrow = function(date, now) {
        //sameDay = now.getDate() + 1 == date.getDate();
        return false;
    }

    // turn month as num into month as string
    _getMonth = function(month) {
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
    _getSuffix = function(day) {
        const lastDigit = day % 10;
        switch(lastDigit) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
}