/* Trassens Joaquin Desafio-Clase-4 (Curso de Javascript/CODERHOUSE) 
------------------------Calculadora de notas------------------------*/

const notaDeLosAlumnos = prompt('Ingrese la nota de los alumnos');
notaDeLosAlumnos = parseInt(notaDeLosAlumnos);


while (isNaN(notaDeLosAlumnos)) {
    notaDeLosAlumnos = prompt('ERROR REINGRESE LA NOTA');
    notaDeLosAlumnos = parseInt(notaDeLosAlumnos);
}

if(notaDeLosAlumnos<6){
    console.log('Estas desaprobado');
}else if(notaDeLosAlumnos>=6||notaDeLosAlumnos<10){
    console.log('Estas aprobado');
}else if(notaDeLosAlumnos==10){
    console.log('Excelente');
}else{
    console.log('ERROR');
}



