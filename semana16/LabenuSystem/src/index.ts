import { Students } from "./Students"
import { JSONFileManager } from "./JSONFileManager"

const newStudentsName = process.argv[2]
const newStudentsId = process.argv[3]
const newEmail = process.argv[4]
const newDataDeNascimento = process.argv[5]

//Criar um novo aluno

const fileManager: JSONFileManager = new JSONFileManager('students.json')
const students: any = fileManager.getObjectFromFile()

const myStudents: Students = new Students(newStudentsName, newStudentsId, newEmail, newDataDeNascimento)
myStudents.getId

console.log(myStudents.getId())
// console.log(aluno)

students.push(myStudents)

fileManager.writeObjectToFile(students)
 console.log("Aluno adcionado")