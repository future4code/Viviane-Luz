import axios from 'axios';

/* - Exercício 1 a) O endpoint get 
b) any
*/


const baseUrl = " https://us-central1-labenu-apis.cloudfunctions.net/labenews"
const main = async () => {
    const returnAllSubscribes = await getSubscribers()
    console.log(returnAllSubscribes)
}
async function getSubscribers(): Promise<any[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data;
  };
main()