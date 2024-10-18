
# Passo a passo para rodar localmente
## Documentação swagger no arquivo `docks.json`

## Clonar
use o git para clonar o projeto ou baixe os arquivos
`git clone https://github.com/Kiragotzz/be_nest_typeorm_postgresql.git`

## Baixe as dependências
`npm i`

## Rode o banco de dados com Docker compose
### Lembre de startar o docker na sua máquina
`docker-compose up -d`

## Crie a tabela e insira dados fictícios 
`npm run migration:run`

## Rode o backend
`npm run start`