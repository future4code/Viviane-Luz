import { User } from "./User"
import moment from "moment"

export class Teacher implements User {
    constructor(
      public id: string,
      public name: string,
      public email: string,
      public specialties: TEACHER_SPECIALTY[]
    ) {}
  }


enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
  }


  export const teacher1 = new Teacher('1','Goli', 'goli@goli.com',[TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.OOP])
  export const teacher2 = new Teacher('1','Paula', 'paula@paula.com', [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.OOP])
  export const teacher3 = new Teacher('1', 'Darvas','darvas@darvas.com',[TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.OOP])

  