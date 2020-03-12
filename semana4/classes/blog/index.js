// class Blog{
//     constructor(título, autor, conteudo){
//         this.titulo = título;
//         this.autor = autor;
//         this.conteudo = conteudo;

// } 
// novopost(){
//     console.log(this.título, this.conteudo, this.autor)
//    }   
// }

// function onclickButton(){
//     const titulo = document.getElementById("titulo")
//     const autor = document.getElementById("autor")
//     const conteudo = document.getElementById("conteudo")

// }

// console.log()

class meuBlog{
    constructor(título, autor, conteudo) {
      this.título = título;
      this.autor = autor;
      this.conteudo = conteudo;
    }
}
    function onClickButton(){
        let título = document.getElementById("titulo").value
        let autor = document.getElementById("autor").value
        let conteudo = document.getElementById("conteudo").value
    
let novopost = new meuBlog(título, autor, conteudo)
    
     console.log(novopost);
    }


    
  
    
  