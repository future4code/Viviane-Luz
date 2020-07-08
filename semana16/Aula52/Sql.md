### Exercício1
A) ```ALTER TABLE Actor DROP COLUMN salary;``` Para alterar a tabela Actor de uma coluna que já existe, e remove a coluna salary.
B) ```ALTER TABLE Actor CHANGE gender sex VARCHAR(6);``` Altera a tabela de Actor com strings no máximo 6 caracteres e muda o sexo, não entendi o sex
C)```ALTER TABLE Actor CHANGE gender gender VARCHAR(255);```Altera tabela sem aparecer o sexo.
D) Alterar a tabela e que aceita strings com até 100 caracteres```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```

### Exercício2
A) Update atualiza a query ```UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10" WHERE id = "003";```  
name e birth_date.

B) Atualizei a query com o name Juliana Paes para JULIANA PÃES e escrita a query para voltar ao nome anterior
``` UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES";```

C) Escrito uma query que atualiza todas as informações com id "005" ``` UPDATE Actor SET name = "", birth_date = "", salary = , gender = "" WHERE id = "005";```

### Exercício3
A) ```DELETE FROM Actor WHERE name = "Fernanda Montenegro"```
B)```DELETE FROM Actor WHERE gender = "male" AND salary > 100000```
### Exercício4
a. Selecionar o sálario de todos os atores e atrizes ```SELECT MAX(salary) FROM Actor```(719333.0)
b. ```SELECT MIN(salary) FROM Actor WHERE gender = "female"```(120000.0)
c. ```SELECT COUNT(*) FROM Actor WHERE gender = "female"```(2)
d. ```SELECT SUM(salary) FROM Actor```(2)

### Exercício5
a. Retornou a quantidade de atrizes 
b. Retorna em ordem alfábetica descrescente (Tony Ramos, Selton Mello, Juliana Paes e Glória Pires)
c. Ordem de atores por salary(Glória pires, Tony Ramos, Selton mello e Juliana Paes)
d. Todos os atores com os três maiores salary(Juliana Paes, Tony Ramos e Selton Mello)
e. ```AGV``` média de slary por gênero(gender)

### Exercício6

a.
b.(Updated Rows value 4)
c.(Updated Rows value 0)
d.()

### Exercício7
a. Nenhum filme em cartaz
b. 8.5
c. 0
d. 4
e. 10
f. 7

### Exercício8
a.(Deus é brasileiro, Doce de mãe, Dona Flor e seus Dois Maridos e Se eu fosse Você)
b.(Deus é brasileiro, Doce de mãe, Dona Flor e seus Dois Maridos e Se eu fosse Você)
c. ( Dona Flor e seus Dois Maridos, Doce de mãe e Se eu fosse Você)
d.(Doce de mãe, Deus é brasileiro e Dona Flor e seus Dois Maridos)




