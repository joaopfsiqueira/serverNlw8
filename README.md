# NLW 8 Impulse
> Prisma
- https://www.prisma.io/


# O que é Prisma:
- Prisma é uma ORM, serve para criar fácil uma integração com um banco de dados. 
> Como usar: 
1 - Instalamos o prisma e o prisma client
2 - Executamos um *npx prisma init*
3 - Atualizamos o schema.prisma para o banco de dados que vamos utilizar (no caso, sqlite)
4 - Criamos a nossa tabela Feedback
5 - Rodamos o comando *npx prisma migrate dev* e colocamos um nome na migração
6 - Por fim, usamos *npx prisma studio* para visualizar o bd.