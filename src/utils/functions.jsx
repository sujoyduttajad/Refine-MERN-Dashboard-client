// Create our number formatter.
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

/* 
  The getMonthNames function returns an array of month names starting from January 
  up to the current month, using the current date and the toLocaleString method 
  to get the localized month names.
*/
export function getMonthNames() {
  const months = [];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  for (let i = 0; i <= currentMonth; i++) {
    const monthDate = new Date(currentDate.getFullYear(), i, 1);
    const monthName = monthDate.toLocaleString("default", { month: "long" });
    months.push(monthName);
  }

  return months;
}

/* 
  The getMonthShortNames function returns an array of short month names starting 
  from January up to the current month, using the current date and the toLocaleString 
  method with the "short" option to get the abbreviated month names.
*/
export function getMonthShortNames() {
  const months = [];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  for (let i = 0; i <= currentMonth; i++) {
    const monthDate = new Date(currentDate.getFullYear(), i, 1);
    const monthShortName = monthDate.toLocaleString("default", {
      month: "short",
    });
    months.push(monthShortName);
  }

  return months;
}

/* 
    The truncateText function takes in the text and limit parameters. 
    It trims the text to remove leading and trailing whitespace, splits 
    it into an array of words, and then slices the array to include only 
    the first limit words. Finally, it joins the sliced words back into a string, 
    appending ellipsis (...) if the original text exceeded the word limit.
*/
export function truncateText(text, limit) {
  const words = text.trim().split(" ");
  const truncated = words.slice(0, limit).join(" ");
  return words.length > limit ? truncated + "..." : truncated;
}
