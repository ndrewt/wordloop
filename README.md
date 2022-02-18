# Wordloop
 
## Step 1 || Creating docker image from Dockerfile.
Firstly you need to create a docker image by command in terminal with installed docker.

Open project folder in terminal and select migrations folder by:
```
cd db/migrations 
```
Then build an image by command:

```
docker build -t db_wordloop_image . 

```

## Step 2 || Using docker container.

Run container with port 3006 and image by command:
```
docker run --name db_wordloop_container -p 3006:3006 -d db_wordloop_image 
```
---
Also you can log in to database in terminal and do any you want with database.
For it you need bash in your container:
```
docker exec -it db_wordloop_container bash
```
Then log in:
```
mysql -uadmin -padmin
```

## Step 3 || Connecting to database from SQL Workbench as example

You can create a connection with parameters:
```
port: 3306
username: admin
password: admin
```






