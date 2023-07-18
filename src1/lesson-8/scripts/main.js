class User {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor({ admissionYear, courseName = 'Engineer', firstName, lastName }) {
    super({ firstName, lastName });
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return 2023 - this.admissionYear;
  }
}

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class Students {
  constructor(students) {
    this.students = students;
  }

  getInfo() {
    return this.students
      .sort((a, b) => {
        const value1 = new Student(a);
        const value2 = new Student(b);
        return value1.course - value2.course;
      })
      .map((item) => {
        const student = new Student(item);
        return `${student.fullName} - ${student.courseName}, ${student.course} курс`;
      });
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());
