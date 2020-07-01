import { Client } from "./Client"
import { Place } from "./Place"

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

  console.log(client.calculateBill())

  //1- As propriedades impressas foi name, registrationNumber, consumedEnergy, calculateBill
  //2- Não consegui imprimir o número 2