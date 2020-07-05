import { Students, students1, students3, students4, students2 } from "./Students"
import { JSONFileManager } from "./JSONFileManager"
import { teacher1, teacher2, teacher3 } from "./Teacher"
import { fullTimeMission } from "./FullTimeMission"
import { nightMission } from "./NightMission"

// const newStudentsName = process.argv[2]
// const newStudentsId = process.argv[3]
// const newEmail = process.argv[4]
// const newDataDeNascimento = process.argv[5]

// //Criar um novo aluno

const fileManager: JSONFileManager = new JSONFileManager('students.json')
const students: any = fileManager.getObjectFromFile()

fileManager.registerInJson(students1)
fileManager.registerInJson(students)
fileManager.registerInJson(students3)
fileManager.registerInJson(students4)

fileManager.setFilePath('teacher.json')
fileManager.registerInJson(teacher1)
fileManager.registerInJson(teacher2)
fileManager.registerInJson(teacher3)

fileManager.setFilePath('Missions.json')

fullTimeMission.setName('Beleza')
fullTimeMission.addStudent(students1)
fullTimeMission.addStudent(students2)
// fullTimeMission.addStudent(teacher1)

fileManager.registerInJson(fullTimeMission)

fullTimeMission.setName('Backend')
nightMission.addStudent(students3)
nightMission.addStudent(students4)

fileManager.registerInJson(nightMission)

fileManager.writeObjectToFile(students)
 console.log("Aluno adcionado")

// const myStudents: Students = new Students(newStudentsName, newStudentsId, newEmail, newDataDeNascimento, newHobbie)
// myStudents.getId

// console.log(myStudents.getId())
// // console.log(aluno)

// students.push(myStudents)

