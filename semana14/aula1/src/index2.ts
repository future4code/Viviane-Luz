const array: number[] = [1 ,2, 3];
const arr: Array<number> = []; 
 

function infosArray(arrayDeNumeros: number[]): Object{
    const quantidadeDeNumeros : number = arrayDeNumeros.length;
    const numerosImpares: number[] = arrayDeNumeros.filter((numero: number)=>{return numero%2===1});
    const numerosPares: number[] = arrayDeNumeros.filter((numero: number)=>{return numero%2===0});
    let somaArray: number = 0;
    arrayDeNumeros.forEach((numero: number) =>{somaArray+=numero})
    return {
        quantidadeDeNumeros: quantidadeDeNumeros,
        numerosImpares: numerosImpares,
        numerosPares: numerosPares,
        somaArray: somaArray
    }
}
const meuObjeto = infosArray([1, 2, 3, 4, 5, 6, 7, 8])
console.log(meuObjeto);