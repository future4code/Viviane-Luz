import axios from 'axios';

/* - Exercício 1 a) O endpoint get 
b) any
*/

// const baseUrl = " https://us-central1-labenu-apis.cloudfunctions.net/labenews"
// const main = async () => {
//     const returnAllSubscribes = await getSubscribers()
//     console.log(returnAllSubscribes)
// }
// async function getSubscribers(): Promise<any[]> {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data;
//   };
// main()
// .catch((err) =>{
//     console.log("err:");
// })
// // /* - Exercício 2*/
// const baseUrl = " https://us-central1-labenu-apis.cloudfunctions.net/labenews"
// const main = async () => {
//     const returnAllSubscribes = await getSubscribers()
//     console.log(returnAllSubscribes)
// }

// const getSubscribers = async (): Promise<any[]> => {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data;
//   };
//   main()

  /* -A diferença de uma função nomeada assíncrona e uma arrow function assicrona 
  sem a função */

/* - Exercício 3*/

// type User = {
// 	id: string;
// 	name: string;
// 	email: string;
// }

// const getSubscribers = async (): Promise<User[]> => {
// const users = await axios.get(`${baseUrl}/subscribers/all`);
// };
// return getSubscribers;


/*a)O erro da tipagem Promise<User[], não está sendo tratado como any>
b) Não sei a resposta.
c)
*/

/* - Exercício 4
a) Função assincrona nomeada, não entendi o porque.
*/

// const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
// axios.put(`${baseUrl}/createNews`,{
//     title: "Novas noticias",
//     content: "Future4: agora é Labenu",
//     date: 1590522289000,
// })
// .then((res) =>{
// console.log("Create news sucess!");
// })
// .catch((err) => {
// console.log("err: ", err.message);
// });

