# Wordloop
 
## Creating docker containers.

Firstly you need to open project folder in terminal.
Then up containers by command:
```
docker-compose up
```

## Using app.

Open app doc in browser by route: http://localhost:3000/api-doc
---
Also you can log in to database in terminal where you can check data or update something you want.
For it you need bash:
```
docker exec -it wordloop_db_1  bash    
```
Then log in with your user and password from docker-compose :
```
mysql -uroot -pwordloop_2022_4
```

## Connecting to database from SQL Workbench as example

You can create a connection with parameters:
```
port: 3306
username: root
password: wordloop_2022_4
```






