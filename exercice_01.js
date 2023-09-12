let numberOne= 1;
let numbertwo= 2;

// Ejercicio 1
function add(numberOne, numbertwo){
    let addResult;
    addResult= numberOne + numbertwo;
    console.log(addResult);
    return addResult;
}

console.log(add(numberOne, numbertwo));
console.log(add(7, 8));
console.log(add("2", 2));

// Ejercicio 2
function multiply(numberOne, numbertwo){
    if(Number.isInteger(numberOne) && Number.isInteger(numbertwo)){
        multiplyResult= numberOne * numbertwo;
        console.log(multiplyResult);
        return multiplyResult;
    } else {
        console.log("Ambos parámetros deben ser números.");
        return "Ambos parámetros deben ser números.";
    }
}

console.log(multiply(numberOne, numbertwo));
console.log(multiply(7, 8));
console.log(multiply("2", 2));

// Ejercicio 3
let month = "mayo";

function isWinter (month){
    if(month == "junio" || month == "julio" || month == "agosto"){
        console.log(true);
        return true;
    } else{
        console.log(false);
        return false;
    }
}

console.log(isWinter(month));
console.log(isWinter("junio"));
console.log(isWinter("enero"));

// Ejercicio 4
let covidSymptoms = ["fiebre", "dolor muscular", "pérdida de gusto"];

let sickSymptoms = ["fiebre", "dolor muscular", "vómitos"];
let noSickSymptoms = ["fiebre", "titila ojo", "vómitos"];


function isCovid(patientSymptoms, covidSymptoms){
    let matchSymptoms = 0;

    for(i = 0; i < patientSymptoms.length; i++){     
        for(j = 0; j < covidSymptoms.length; j++){
            if(patientSymptoms[i] == covidSymptoms[j]){
                matchSymptoms++;
            }              
        }
    }

    if(matchSymptoms >= 2){
        console.log(true);
        console.log(matchSymptoms);
        return true;
    }else{
        console.log(false);
        console.log(matchSymptoms);
        return false;
    } 
}

function isCovidTwo(patientSymptoms, covidSymptoms){
    let matchSymptoms = 0;

    for(i = 0; i < patientSymptoms.length; i++){
        if(covidSymptoms.includes(patientSymptoms[i])){
            matchSymptoms++;
        }
    }

    if(matchSymptoms >= 2){
        console.log(true);
        console.log(matchSymptoms);
        return true;
    }else{
        console.log(false);
        console.log(matchSymptoms);
        return false;
    } 
}

console.log(isCovid(["fiebre", "diarrea", "dolor muscular", "pérdida de gusto"], covidSymptoms));
console.log(isCovid(noSickSymptoms, covidSymptoms));
console.log(isCovid(sickSymptoms, covidSymptoms));

console.log(isCovidTwo(["fiebre", "diarrea", "dolor muscular", "pérdida de gusto"], covidSymptoms));
console.log(isCovidTwo(noSickSymptoms, covidSymptoms));
console.log(isCovidTwo(sickSymptoms, covidSymptoms));

// Ejercicio 5
function showSchedule(subject){
    switch(subject){
        case "matemática":
            return "jueves";
            break;

        case "lengua":
            return "lunes";
            break;

        case "geografia":
            return "viernes";
            break;
        
        default:
            return "MATERIA NO ENCONTRADA."
    }
}

console.log(showSchedule("matemática"));
console.log(showSchedule("lengua"));
console.log(showSchedule("geografia"));
console.log(showSchedule("programación"));

//Ejercicio 5 opc 2

let openSubjects = [
    {
        name: "Frontend",
        day: 'Martes'
    },
    {
        name: "Backend",
        day: 'Miercoles'
    },
    {
        name: "Metodologias",
        day: 'Lunes'
    }
];


function showDay(subject) {
    let nameOpenSubjects = [];
    for (i=0; i < openSubjects.length; i++){
        nameOpenSubjects.push(openSubjects[i]['name']);
        console.log(nameOpenSubjects);
    }
    if (nameOpenSubjects.includes(subject)){

        let subjectIndex = nameOpenSubjects.indexOf(subject);
        console.log(nameOpenSubjects.indexOf(subject));
        return openSubjects[subjectIndex]['day'];
    } 
    else {
        return 'Materia no encontrada';
    }
}

console.log(showDay('Backend'));
console.log(showDay('Metodologias'));
console.log(showDay('Frontend'));
console.log(showDay('Arquitectura'));