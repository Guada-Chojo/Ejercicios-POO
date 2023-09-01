"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var Alumno = /** @class */ (function () {
    function Alumno(dni, nombre, examen1, examen2, examen3) {
        this.dni = dni;
        this.nombre = nombre;
        this.examen1 = examen1;
        this.examen2 = examen2;
        this.examen3 = examen3;
    }
    Alumno.prototype.promedioAlumno = function () {
        var promedio = 0;
        promedio = (this.examen1 + this.examen2 + this.examen3) / 3;
        return Math.floor(promedio);
    };
    Alumno.prototype.GetNombre = function () {
        return this.nombre;
    };
    return Alumno;
}());
var Escuela = /** @class */ (function () {
    function Escuela(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
    }
    ///
    Escuela.prototype.obtenerPromedioAlumno = function (alumno) {
        console.log("Alumno: ", alumno.GetNombre(), ". Promedio: ", alumno.promedioAlumno(), ".");
    };
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.listarAlumnos = function () {
        console.log(this.alumnos);
    };
    return Escuela;
}());
///
var miEscuela = new Escuela("Escuela IT");
var alumno1 = new Alumno(45740398, "Consuelo Viale", 10, 9, 8);
var alumno2 = new Alumno(44485386, "Natalia Perez", 4, 6, 5);
var alumno3 = new Alumno(44809535, "Lautaro Fernandez", 7, 6, 8);
var alumno4 = new Alumno(45268964, "Laura Gonzales", 6, 2, 4);
miEscuela.matricularAlumno(alumno1);
miEscuela.matricularAlumno(alumno2);
miEscuela.matricularAlumno(alumno3);
miEscuela.matricularAlumno(alumno4);
console.log("Listado de Alumnos");
miEscuela.listarAlumnos();
var usuarioEleccion = eleccion();
switch (usuarioEleccion) {
    case 1:
        miEscuela.obtenerPromedioAlumno(alumno1);
        break;
    case 2:
        miEscuela.obtenerPromedioAlumno(alumno2);
        break;
    case 3:
        miEscuela.obtenerPromedioAlumno(alumno3);
        break;
    case 4:
        miEscuela.obtenerPromedioAlumno(alumno4);
        break;
    case 5:
        console.log("Lista de promedios generales: ");
        miEscuela.obtenerPromedioAlumno(alumno1);
        miEscuela.obtenerPromedioAlumno(alumno2);
        miEscuela.obtenerPromedioAlumno(alumno3);
        miEscuela.obtenerPromedioAlumno(alumno4);
        break;
}
function eleccion() {
    console.log('Que desea hacer? ');
    console.log('1] Ver promedio general de Consuelo Viale.');
    console.log('2] Ver promedio general de Natalia Perez.');
    console.log('3] Ver promedio general de Lautaro Fernandez.');
    console.log('4] Ver promedio general de Laura Gonzales.');
    console.log('5] Ver los promedios de todos los alumnos.');
    var opcion = rls.questionInt('Elija una opcion: ');
    return opcion;
}
