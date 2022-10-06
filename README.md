# Wordloop API
<p align="center">
  <img src="https://media.giphy.com/media/NpuT7NSTqosT9asiLi/giphy.gif" alt="animated" />
</p>

## About Wordloop API
Wordloop API created as an alternative to paper dictionaries.

With our API, you can add languages, words, and word lists. You can edit and edit them.

Thanks to cascade deletion, for example, if you delete a language and create words on its ID, these words will be removed from the database.

To access all paths (except /api/signup and /api/login) user need jwt token, which is signed when you sign into your account.

The Wordloop API uses as a backend Node.js and as a database -Mysql.

## Install software before inisilization
You need to install [Docker][1] on your pc or server.

## Creating docker container

Firstly you need to open project folder in terminal.
Then up containers by command:

```
docker-compose up
```

## App using

Open API doc in browser by route: http://localhost:3000/api-doc
You will see there all aviable routes and request parameters.

Also you can log in to database in terminal where you can check data or update something you want.
For it you need bash:
```
docker exec -it wordloop_db_1  bash    
```
Then log in with your user and password from docker-compose :
```
mysql -uroot -p(your password)
```

## Connecting to database from SQL Workbench as example

You can create a connection with parameters:
```
port: (port you choose)
username: (your username)
password:(your password)
```
[1]:https://www.docker.com/products/docker-desktop





