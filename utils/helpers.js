module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
        const Year = date.getFullYear()
        const Month = date.getMonth() + 1
        const Day = date.getDate()
        return `${Month}/${Day}/${Year}`
    },
    inc: (index) => {
      return index+1;
    }
};