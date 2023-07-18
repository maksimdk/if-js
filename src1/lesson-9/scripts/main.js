const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current === undefined) {
      this.current = 0;
    }

    if (this.current === this.data.length) {
      this.current = 0;
    }

    return {
      done: false,
      value: this.data[this.current++],
    };
  },
};

const changeStyle = (color) => (event) => {
  event.target.style.color = color.next().value;
};

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

text1.addEventListener('click', changeStyle({ ...colors }));

text2.addEventListener('click', changeStyle({ ...colors }));

text3.addEventListener('click', changeStyle({ ...colors }));

//=================================

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4;
const getCalendarMonth = (
  daysInMonth,
  daysInWeek,
  dayOfWeek,
  checkInDate,
  checkOutDate,
) => {
  const result = [];
  const weekValue = Math.ceil(daysInMonth / daysInWeek);
  let start = daysInMonth - dayOfWeek + 1;

  for (let i = 0; i < weekValue; i++) {
    const week = [];
    for (let j = 0; j < daysInWeek; j++) {
      if (start > daysInMonth) {
        start = 1;
      }
      week.push({
        dayOfMonth: start,
        notCurrentMonth: (start >= dayOfWeek && start <= daysInMonth) || false,
        selectedDay: (start >= checkInDate && start <= checkOutDate) || false,
      });
      start++;
    }
    result.push(week);
  }
  return result;
};

console.log(getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek, 5, 15));
