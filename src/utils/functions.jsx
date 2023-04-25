
// Create our number formatter.
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// console.log(formatter.format(2500)); /* $2,500.00 */

export function getMonthNames() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const months = Array.from({ length: currentMonth + 1 }, (_, index) => {
    const monthDate = new Date();
    monthDate.setMonth(index);
    return monthDate.toLocaleString('default', { month: 'long' });
  });

  return months;
}
