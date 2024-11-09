#!/usr/bin/env bash

set -e

echo "---> 1. Stopping Docker"
docker compose down

echo "---> 2. Deleting docker data"
docker system prune --all --volumes -f > /dev/null 2>&1 

echo "---> 3. Deleting database"
sudo rm -rf backend/mysql/db/

echo "---> 4. Deleting node logs/node_modules"
sudo rm -rf backend/node/log/ backend/node/node_modules/

echo "---> 5. Deleting authentication logs/node_modules"
sudo rm -rf backend/authentication/log/ backend/authentication/node_modules/

echo "---> 6. Deleting frontend node_modules"
sudo rm -rf frontend/node_modules/

