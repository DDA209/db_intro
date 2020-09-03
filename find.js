const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/school') // Serveur mongo, en localhost sur port 27017 dans la BDD school 

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    created : {
        type : Date,
        default: Date.now
    }
});

const Student = mongoose.model("Student", studentSchema);



Student.find({}, (err, students) => { // tous les étudiants
    if (!err) {
        console.log(students);    
    } else {
        console.log(err);    
    }
  });

Student.find({ age: 28 }) // Seulement si age est 28 - Version 
    .then((students) => {
        console.log('28y students', students)
    })
    .catch((err) => {
        console.log('err',err)
    });

(async function () { // trop trop cool
    const students = await Student.find({ name : 'Nour'});
    console.log ('Nour', students);
})();


const getStudent = async () => { // trop cool
    const students = await Student.find({ age : 32});
    console.log ('32y students', students)
};
getStudent()


setTimeout(() => {
    mongoose.connection.close();
}, 5000);