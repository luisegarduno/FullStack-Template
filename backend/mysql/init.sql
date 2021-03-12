-- -----------------------------------------------------
-- Initial database rules (init.sql)
-- -----------------------------------------------------

-- Create user called `admin` with password `CHANGE-ME`
CREATE USER 'admin'@'%' IDENTIFIED BY 'CHANGE-ME';

-- Give access to admin on db
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';
GRANT ALL PRIVILEGES ON `CHANGE-ME` TO 'admin'@'%';

-- Set password method to native password for mysql workbench access (mysql 8 issue)
ALTER USER 'admin'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'CHANGE-ME';

-- Flush them privileges
FLUSH PRIVILEGES;
