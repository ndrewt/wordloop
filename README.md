# Wordloop
 
## Step 1 || Working with Docker and database
Firstly you need to create docker image and run it by command in terminal with installed docker:
```
 docker run --name words -p 3006:3306 -e MYSQL_ROOT_PASSWORD=1010 -d mysql
```

## Step 2 || Working with MySql Workbench
Create connection with parameters:
```
collection name: Words Db
port: 3306
username: root
password: 1010
```
## Step 3 || Complete migration from db/migration
Copy migration script frob db/migration
Paste copied script to query and execute







