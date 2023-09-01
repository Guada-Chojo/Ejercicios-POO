import * as rls from 'readline-sync';

class Alumno {
    private dni: number;
    private nombre: string;
    private examen1: number;
    private examen2: number;
    private examen3: number;

    public constructor(dni: number, nombre: string, examen1: number, examen2: number, examen3: number) {
        this.dni = dni;
        this.nombre = nombre;
        this.examen1 = examen1;
        this.examen2 = examen2;
        this.examen3 = examen3;
    }

    public promedioAlumno():number{   
        let promedio : number = 0;
        promedio = (this.examen1 + this.examen2 + this.examen3)/3;
        return Math.floor(promedio);
    } 

public GetNombre(): string {
        return this.nombre;
    }
}


class Escuela {
    private nombre: string;
    private alumnos: Alumno[];

    public constructor(nombre: string) {
        this.nombre = nombre;
        this.alumnos = [];
    }


///

    public obtenerPromedioAlumno(alumno:Alumno) {
       console.log("Alumno: ",alumno.GetNombre(),". Promedio: ",alumno.promedioAlumno(),".");
    }

    public matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    public listarAlumnos(): void {
        console.log(this.alumnos);
    }
}

///



let miEscuela: Escuela = new Escuela("Escuela IT");

let alumno1: Alumno = new Alumno(45740398, "Consuelo Viale", 10, 9,8);
let alumno2: Alumno = new Alumno(44485386, "Natalia Perez", 4,6,5);
let alumno3: Alumno = new Alumno(44809535, "Lautaro Fernandez", 7,6,8);
let alumno4: Alumno = new Alumno(45268964, "Laura Gonzales", 6,2,4);

miEscuela.matricularAlumno(alumno1);
miEscuela.matricularAlumno(alumno2);
miEscuela.matricularAlumno(alumno3);
miEscuela.matricularAlumno(alumno4);

console.log("Listado de Alumnos");
miEscuela.listarAlumnos();

let usuarioEleccion : number = eleccion();

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
        console.log("Lista de promedios generales: ")
        miEscuela.obtenerPromedioAlumno(alumno1);
        miEscuela.obtenerPromedioAlumno(alumno2);
        miEscuela.obtenerPromedioAlumno(alumno3);
        miEscuela.obtenerPromedioAlumno(alumno4);
        break;
}

function eleccion(): number {
    console.log('Que desea hacer? ');
    console.log('1] Ver promedio general de Consuelo Viale.');
    console.log('2] Ver promedio general de Natalia Perez.');
    console.log('3] Ver promedio general de Lautaro Fernandez.');
    console.log('4] Ver promedio general de Laura Gonzales.');
    console.log('5] Ver los promedios de todos los alumnos.');
    let opcion : number = rls.questionInt('Elija una opcion: ');
    return opcion;
}