
/**
 * 
 * @param {*} date given js date string "yy-mm-dd" calculate the number of days that has past as of today
 * @returns the string today or x number of days
 */
export const calculateDaysAgo= (date_str) => {
    // console.log("date to calc", date_str);
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date()
    // console.log("todays date", today);


    let parts = date_str.split('-');
    var date_obj = new Date(parts[0], parts[1] - 1, parts[2]);
    const diffDays = Math.floor(Math.abs((today - date_obj) / oneDay));
    const diffDaysStr = (diffDays === 0 )? "today" : diffDays + " days"


    return diffDaysStr
}