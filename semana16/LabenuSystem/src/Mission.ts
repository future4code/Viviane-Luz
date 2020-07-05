import { Students } from "./Students";
import { Teacher } from "./Teacher";
import moment from "moment"
export abstract class Mission {
    private name: string = ""
    constructor(
       private id: string,
       private startDate: moment.Moment,
       private endDtae: moment.Moment,
       private teachers: Teacher [],
       private students: Students [],
       private currentModule?: number
    ) {}

    public setName(name:string){
        this.name = name
    }

    public addStudent(students: Students){
        this.students.push(students)
    }

    public addTeacher(teacher: Teacher){
        this.teachers.push(teacher)
    }

    }   
