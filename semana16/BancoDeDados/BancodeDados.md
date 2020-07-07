CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL

### Exercício 1
a) Explicando os comandos.
b) Utilizando os comandos SHOW DATABASES
Ele exibe todo o conteúdo DATABASE, infomation_schema/julian_viviane_luz_db
SHOW TABLES criou uma tabela ator.
c) SQL Error [1064], o comando DESCRIBE é um atalho para o comando 

### Exercício 2
 Foi acrescentado INSERT INTO Actor (id, name, salary, birth_date, gender)
a)```  
$ INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  2, 
  "Glória Pires",
  120000,
  "1963-08-23", 
  "female"
);```

b)A contagem de colunas não corresponde à contagem de valores na linha.
Os valores na coluna Insert Into, não é a mesma quantidade na coluna de valores Value.

c)A contagem de colunas não corresponde à contagem de valores na linha.
Foi corrigido as query ```INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(3, "Fernanda Montenegro",300000,"1929-10-19", "female");```

d) Inserido name, mais um item com colunas.
```shINSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(4,"Selton Mello",400000,"1949-04-18", "male"); 
```
e)Acrescentar os valores VACHAR em strings.

f) c) Entrada duplycada '3', d) duplycada '4', e) duplycada '5'

### Exercício 3
a)SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female", nessa query busquei todas as atrizes com os dados.
b)SELECT id, name, salary from Actor WHERE name = "Tony Ramos", nesta query busquei o ator Tony Ramos e o sálario.
c) Registros de erros, não tem nenhuma informação com string "invalid"(Empty query string)
d)``` SELECT id, name, salary  from Actor WHERE salary > 500000 ```
e)Verificar o manual para obter a sintaxe correta

### Exercício 4
a) Juliana Paes
a)Selecionou todos os Actor que começa o nome com a letra "J" e salary > 30000
b) A query ``` SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000 ```
c)A query ```SELECT * FROM Actor WHERE (name LIKE "G%" AND name LIKE "g%")```
d) Selecionou os atores Tony Ramos e Juliana Paes

### Exercício 5
a) A qyery 

### Exercício 6
a)```SELECT id, titulo, avaliacao from Filme WHERE id = 2;```(Doce de mãe)
b)```SELECT titulo from Filme WHERE (titulo LIKE "Deus é Brasileiro%");```
c)```SELECT id, titulo, sinopse FROM Filme WHERE avaliacao > 7;```

### Exercício 7 
a) Não tem um titulo com a palavra ```"%vida%";```, testei com ```"%Deus%";``` e selecionou "Deus é Brasileiro".
b) Criei a query ```SELECT * FROM Filme WHERE titulo LIKE "Deus%" OR  sinopse LIKE "%Dona Picucha,%";```
Retornou Doce de mãe e Deus é Brasileiro.
c)```SELECT * FROM Filme ``` (Seleciona todos os filmes)
d)```SELECT * FROM Filme
WHERE data_lancamento < "2020-05-04" AND 
(titulo LIKE "%Dona Flor e Seus Dois Maridos%" OR sinopse LIKE "%Dona Flor%") AND avaliacao > 7;```
com a data de lançamento:   ```SELECT * FROM Filme
WHERE data_lancamento < CURDATE() AND 
      (titulo LIKE "%Doce De mãe%" OR
      sinopse LIKE "%Dona Picucha%");``` ``` 2012-12-27```



