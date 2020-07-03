import * as fs from 'fs'

export class JSONFileManager {//ler o arquivo no inicio do programa e salvar no final

    constructor(private fileName: string){
        this.fileName = fileName

    }

    public getObjectFromFile(): object {
        const fileBuffer: Buffer = fs.readFileSync(this.fileName)
        const fileText: string = String(fileBuffer)
        return fileText ? JSON.parse(fileText): []

    }
    public writeObjectToFile(data: any): void {
        const updateData: string = JSON. stringify(data, null, 3)
        fs.writeFileSync(this.fileName, updateData)
    }
    public setFilePath(path: string): void {
        this.fileName = path;
      }
}