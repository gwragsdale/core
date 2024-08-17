function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(courseCode, note) {
      this.courses.forEach(course => {
        if (course["code"] === courseCode) {
          course["note"] ? course["note"] += "; " + note : course["note"] = note;
        }
      });
    },

    updateNote(courseCode, note) {
      this.courses.forEach(course => {
        if (course["code"] === courseCode) {
          course["note"] = note;
        }
      });
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) console.log(`${course.name}: ${course.note}`);
      });
    }
  }
}

let school = {
  students: [],

  addStudent(student) {
    let validYears = ['1st', '2nd', '3rd', '4th'];
    if (!validYears.includes(student.year)) {
      return console.log("Invalid year");
    }

    this.students.push(student);
  },

  enrollStudent(student, course) {
    student.addCourse(course);
  },

  addGrade(student, courseCode, grade) {
    student.courses.forEach(course => {
      if (course.code === courseCode) {
        course["grade"] = grade;
      }
    });
  },

  getReportCard(student) {
    for (let i = 0; i < student.courses.length; i += 1) {
      let currentCourse = student.courses[i];
      if (currentCourse.grade) {
        console.log(`${currentCourse.name}: ${currentCourse.grade}`);
      } else {
        console.log(`${currentCourse.name}: In progress`);
      }
    }
  },

  courseAverage(course) {
    let numEnrolled = 0;
    let sumOfGrades = 0;

    this.students.forEach(student => {
      let courses = student.courses;

      courses.forEach(currentCourse => {
        let grade = currentCourse.grade;

        if ((currentCourse.name === course) && grade) {
          numEnrolled += 1;
          sumOfGrades += grade;
        }
      });
    });

    let average = Math.floor(sumOfGrades / numEnrolled);
    return `Course Average: ${average}`;
  },

  courseReport(course) {
    console.log(`==${course} Grades==`);
    for (let i = 0; i < this.students.length; i += 1) {
      let currentStudent = this.students[i];

      currentStudent.courses.forEach(currentCourse => {
        if (currentCourse.name === course) {
          console.log(`${currentStudent.name}: ${currentCourse.grade}`);
        }
      });
    }

    console.log(this.courseAverage(course));
    console.log("---");
  },
}

let paul = createStudent("Paul", "3rd");
paul.addCourse({ name: 'Math', code: 101, grade: 95, });
paul.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });
paul.addCourse({ name: 'Physics', code: 202, });

let mary = createStudent("Mary", "1st");
mary.addCourse({ name: 'Math', code: 101, grade: 91, });

let kim = createStudent("Kim", "2nd");
kim.addCourse({ name: 'Math', code: 101, grade: 93, });
kim.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });

school.addStudent(paul);
school.addStudent(mary);
school.addStudent(kim);

school.getReportCard(paul);
// Math: 95
// Advanced Math: 90
// Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = Paul: 95
// = Mary: 91
// = Kim: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = Paul: 90
// = Kim: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined