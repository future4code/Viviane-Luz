import axios from 'axios';

//a) getall para pegar todos os assinantes 
//b) usando a função main
//Exercício1
//  const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';
// axios.get(`${baseUrl}/subscribers/all`)
//  .then((res) =>{
//      console.log(res.data)
//  })
//  .catch((err) =>{
// console.log(err)
//  })

//Exercício2

//a)assincrona faz uma comunicação com promises, usando arrow function utilizamos o método than.

// const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// const main = async () => {
//    const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
        
//         console.log(subscribers)
// }
// main()

// type User = {
// 	id: string;
// 	name: string;s
// 	email: string;
// }

//b)não retorna um array de usuarios
//b)Porque, a função get do axios devolve uma promise any, o typescript não retorna um erro.
// para garantir que vai retornar a finção que foi feita.

//Exercício4

//Criar uma nova  noticia axios.put
 const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
 axios.put(`${baseUrl}/news`, {
     title: "Nova noticia",
     content: " ",
     date: 1589818936000// Esqueci como gera esse numero mesmo? vi no slide.
 })
 .then((res) => {
    axios.get(`${baseUrl}/subscribers/all`)
    .then((res) => {
        const subscribers = res.data
        for (const subscriber of subscribers){
            axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: subscriber.id,
                message: "Veja a nova noticia",
            })
            .catch((err)=> {
                console.log(err.data)
             }
             )
        }
     })

  })
//a) É uma função sincrona, porque não tem tem o async(sincronicidade)
//b) Método post

//Exercício5 Não é recomendável usar o forEach, porque após enviar as requições, ele retorna novamente as ssolicitações