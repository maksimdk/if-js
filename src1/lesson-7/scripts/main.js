const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  if (object1 === object2) {
    return true;
  }

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  if (typeof object1 !== 'object' || typeof object2 !== 'object') {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];

    if (!keys2.includes(key) || !deepEqual(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false

//===========================================================

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
        notCurrentMonth: false,
        selectedDay: (start >= checkInDate && start <= checkOutDate) || false,
      });
      start++;
    }
    result.push(week);
  }
  return result;
};

console.log(getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek, 5, 15));
