# NLW 8 Impulse
> Prisma
- https://www.prisma.io/

> Jest
- https://jestjs.io/pt-BR/


# O que é Prisma:
- Prisma é uma ORM, serve para criar fácil uma integração com um banco de dados. 
> Como usar: 
1 - Instalamos o prisma e o prisma client
2 - Executamos um *npx prisma init*
3 - Atualizamos o schema.prisma para o banco de dados que vamos utilizar (no caso, sqlite)
4 - Criamos a nossa tabela Feedback
5 - Rodamos o comando *npx prisma migrate dev* e colocamos um nome na migração
6 - Por fim, usamos *npx prisma studio* para visualizar o bd.

# O que é Jest:
- Jest é uma estrutura de teste JavaScript
> Como usar: 
1 - Instalamos o jest com um *npm install jest -D*
2 - Executamos um *npx jest --init*
3 - Instalamos o ts-node com *npm install ts-node -D*

Por ser TS, é necessário instalar outras coisas para poder fazer o jest interpretar o TS.
4 - https://swc.rs/docs/usage/jest
5 - Por fim, só rodar a typagem do jest. *npm i @types/jest -D*

Um segredo é a pasta "coverage" gerada pelo *npm run test*, ao abrir o HTMl ele é capaz de mostrar os erros que os testes não estão cobrindo.