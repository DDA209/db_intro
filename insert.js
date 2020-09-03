const mongoose = require('mongoose'); // npm i mongoose | 

mongoose.connect('mongodb://localhost:27017/school'); // connection à la base de donnée 27017 port par défaut



const studentSchema = new mongoose.Schema({
    name: String, // Attribut 
    // name: { 
    //     type: String,
    //     required: true // forcer le remplissage du champ
    // },
    age: Number,
    Created: {
        type: Date, // attribut type si on veut ajouter d'autres 
        default: Date.now // attribut par défaut
    }
})


const Student = mongoose.model("Student", studentSchema); // le modèle (est une entité) - Classe

const veronique = new Student({ // instance veronique de la classe Student
    name : "Véronique",
    age: 28
});

const nour = new Student({
    name : "Nour",
    age: 32
});

veronique.save((err, student) => {
    console.log('err', err);
    console.log('student', student);
    if (err){
        console.log('err',err);
    } else {
        console.log(`${student.name} a été ajouté(e) avec l'ID ${student._id} dans la collection Student`)
    }

});

nour.save((err, student) => {
    console.log('err', err);
    console.log('student', student);
    if (err){
        console.log('err',err);
    } else {
        console.log(`${student.name} a été ajouté(e) avec l'ID ${student._id} dans la collection Student`)
    }

});




setTimeout(() => {
    mongoose.connection.close();
}, 5000);


// Questions : 
// - A quel moment est créé la collection students que je ne crée jamais
//      gestion des pluriels ,
// - Comment on promessifie la création 
// - Tu montres les fonctions auto-invoquées, j'ai été sage

