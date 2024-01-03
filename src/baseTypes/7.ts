/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfTheWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function isWeekend(day:DaysOfTheWeek): boolean {
  return day === DaysOfTheWeek.Saturday || day === DaysOfTheWeek.Sunday;
}

const today = isWeekend(DaysOfTheWeek.Sunday);
