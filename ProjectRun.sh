#!/usr/bin/env bash
sudo tee /etc/sudoers.d/$USER <<END
END

set -e

docker-compose down -v
docker-compose up -d

source backend/node/.env

echo "---> Loading Fermii db..."
sudo ./backend/node/execution-tools/wait-until.sh "docker-compose exec -T -e MYSQL_PWD=${MYSQL_PASS} backend-db mysql -u ${MYSQL_USER} -D ${MYSQL_DB} -e 'select 1'" > /dev/null 2>&1 
echo "---> Successfully loaded in Fermii db"

echo "---> Restarting Database & API containers"
docker restart ChangeMe_backend-db_1
docker restart ChangeMe_backend-api_1
docker-compose up
