# Instructions

### MySQL Setup

* init.sql
  1. Open `backend/mysql/init.sql`
  2. In lines 5,6,9 & 13 replace `CHANGE-ME`/`Password` with your MySQL password
* db_schema.sql
     1. Open `backend/mysql/project_schema.sql`
     2. In lines 1,2,5,7,14 replace `project` with the name of your project/database (all lowercase)
     3. Rename project_schema.sql with the name of your project/database (Ex: `project_schema.sql` -> `CoolProject_database.sql`)
* Dockerfile
     1. Open `backend/mysql/Dockerfile`
     2. In lines 5 & 10 replace `project` with the name of your database/schemafile (all lowercase)

### Node Setup

* See [`backend/node/README.md`](https://github.com/luisegarduno/FullStack-Template/blob/master/backend/node/README.md)

### Env File
Ensure that you have created & placed a `.env` file within the following locations:
* `backend/node/`
* `backend/authentication/`
* `frontend/`

Note: Your **backend** *.env* will be different from your **frontend** *.env*

* Frontend - .env
```text
# Main Server URL (port 8000)
REACT_APP_SERVER_URL=http://localhost:8000

# Authentication Server URL (port 4000)
REACT_APP_AUTHENTICATION_SERVER_URL=http://localhost:4000

# Other Attempts
REACT_APP_SERVER_URL_AWS=http://xxxxxxx.amazonaws.com:8000
REACT_APP_AUTHENTICATION_SERVER_URL_AWS=http://xxxxxxx.amazonaws.com:4000
REACT_APP_AUTHENTICATION_SERVER_URL_LAMBDA=https://xxxxxxx.aws


# Google Cloud API Key
REACT_APP_API_KEY=xxxxxxxxxxxxxx
```
* Backend - .env
```text
# MySQL Database name
MYSQL_DB=project

# MySQL Port number
MYSQL_PORT=3306             

# MySQL LocalDB host
MYSQL_HOST=backend-db
# MySQL LocalDB username
MYSQL_USER=project-admin
# MySQL LocalDB password
MYSQL_PASS=Password

# MySQL Cloud host
MYSQL_CLOUD_HOST=xxxxxxxxxx.amazonaws.com
# MySQL Cloud username
MYSQL_CLOUD_USER=admin
# MySQL Cloud password
MYSQL_CLOUD_PASS=xxxxxxxxxx

# Secret Key (JWT)
# Generate: node > require('crypto').randomBytes(64).toString('hex')
ACCESS_TOKEN_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REFRESH_TOKEN_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
  

### Run

* build : Run `./Initial_Run.sh` in the root directory of the project
* run : Run `./Run_Project.sh` in the root directory of the project

--------------------------

# ProductName

## Inspiration

## What it does

## How we built it

## Challenges

## Accomplishments / What we learned
