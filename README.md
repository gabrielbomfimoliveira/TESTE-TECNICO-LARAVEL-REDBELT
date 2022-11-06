# REDBELT-LARAVELDOCKER
Com o Docker e Git instalado e funcionando na máquina:

1 - Clone o reposítório

![image](https://user-images.githubusercontent.com/81661415/200200543-b34aa409-0852-413e-ae37-438b25a262fa.png)


2 - Acesse o diretorio do repositório clonado no terminal

![image](https://user-images.githubusercontent.com/81661415/200200575-2167fd9f-f82d-45c2-a783-62b44936599b.png)


3 - Com o Docker em execução, executar: 

    docker-compose up -d
    
![image](https://user-images.githubusercontent.com/81661415/200200587-a0528bd5-7d40-44a7-8a9d-5587165a8f77.png)

4 - Para listar os containers, execute: 

    docker container ls


5 - Verifique o id do container com o nome de laravelapp, copie e cole no comando abaixo

    docker exec -it idcontainer bash

 * Exemplo: docker exec -it 83ad4ef2b5dc bash
 
 ![image](https://user-images.githubusercontent.com/81661415/200200719-f55b21fe-a8fa-4003-9f0e-13513942320b.png)


7 - Instale os pacotes: 

    composer install
    
  ![image](https://user-images.githubusercontent.com/81661415/200200653-914b7fe5-1151-4cb0-9888-42ce7c110865.png)


8 - Limpe o cache com:

    php artisan config:cache
    
    php artisan cache:clear

9 - Rode as migrações com:

    php artisan migrate

10 - Acesse a aplicação http://localhost:8080/

![image](https://user-images.githubusercontent.com/81661415/200200820-640d5d8b-ce6a-403e-a05e-1f4c1bd1958c.png)

