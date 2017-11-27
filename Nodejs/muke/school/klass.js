var teacher = require('./teacher');
var student = require('./student');

function add(teacherName, students) {
  teacher.add(teacherName);
  students.forEach(function(item){
    student.add(item)
  })
}

exports.add = add;