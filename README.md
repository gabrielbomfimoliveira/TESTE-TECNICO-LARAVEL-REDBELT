# REDBELT-LARAVELDOCKER
Com o Docker e Git instalado e funcionando na máquina:

1 - Clone o reposítório

2 - Acesse o diretorio clonado no terminal

3 - Com o Docker em execução, executar: 

    docker-compose up -d

4 - Para listar os containers, execute: 

    docker container ls

5 - Verifique o id do container, copie e cole no comando abaixo

    docker exec -it idcontainer bash

 * Exemplo: docker exec -it 83ad4ef2b5dc bash

7 - Instale os pacotes: 

    composer install

8 - Limpe o cache com:

    php artisan config:cache
    
    php artisan cache:clear

9 - Rode as migrações com:

    php artisan migrate

10 - Acesse a aplicação http://localhost:8080/
