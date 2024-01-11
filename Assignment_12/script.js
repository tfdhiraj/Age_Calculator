function showdate() {
  let day = parseInt(document.querySelector(".date").value);
  let month = parseInt(document.querySelector(".month").value);
  let year = document.querySelector(".year").value;

  let error = document.getElementById("result");
  error.innerText = "";

  //validate the number of digits in the year
  if (year.length !== 4 || isNaN(year)) {
    error.innerText = "Enter a valid 4 digit number";
    return;
  }

  //validate the month
  if (month < 0 || month > 12 || isNaN(month)) {
    error.innerText = "Month should be between 1 to 12.";
    return;
  }

  //validate the month based on days
  if (day < 0 || isNaN(day)) {
    error.innerText = "Enter a valid number";
    return;
  }

  if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    error.innerText = "This month only has 30 days";
    return;
  }
  if (
    (month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12) &&
    day > 31
  ) {
    error.innerText = "Invalid day";
    return;
  }
  if (month === 2) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const daysInFebruary = isLeapYear ? 29 : 28;

    if (day > daysInFebruary) {
      error.innerText = isLeapYear
        ? "February has 29 days in a leap year."
        : "February has 28 days.";
      return;
    }
  }

  let currentDate = new Date();

  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();

  let birthDay = currentDay - day;
  let birthMonth = currentMonth - month;
  let age = currentYear - year;

  if (birthMonth < 0 || (birthMonth === 0 && birthDay < 0)) {
    age--;
    birthMonth += 12;
    birthDay = day - currentDay;
  }
  if (age < 0) {
    error.innerText = "Enter the year no later than current year";
    return;
  }

  error.innerText = `You're ${age} year, ${birthMonth} months, ${birthDay} days old`;
}
