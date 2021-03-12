CREATE DATABASE IF NOT EXISTS `CHANGE-ME`;
USE `CHANGE-ME`;

-- -----------------------------------------------------
-- Table `CHANGE-ME`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CHANGE-ME`.`user` (
	`userID`       INT AUTO_INCREMENT  PRIMARY KEY NOT NULL,
	`email`        VARCHAR(45)                         NULL,
	`password`     VARCHAR(64) COLLATE utf8_bin        NULL,
	`username`     VARCHAR(45)                         NULL,
	UNIQUE INDEX `userID_UNIQUE` (`userID` ASC) VISIBLE);

INSERT INTO `CHANGE-ME`.`user` (`userID`, `email`, `password`, `username`) VALUES
	(1, 'user1@email.com', 'd74ff0ee8da3b9806b18c877dbf29bbde50b5bd8e4dad7a3a725000feb82e8f1', 'user1'),
	(2, 'user2@email.com', 'ae91809961c202dcefb1d44638b70c13685dbb9b47a5e7a72de4bf8b24f859e7', 'user2'),
	(3, 'user3@email.com', '0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e', 'user3'),
	(4, 'user4@email.com', '8b2c86ea9cf2ea4eb517fd1e06b74f399e7fec0fef92e3b482a6cf2e2b092023', 'user4'),
	(5, 'user5@email.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'user5'),
	(6, 'user6@email.com', '5694d08a2e53ffcae0c3103e5ad6f6076abd960eb1f8a56577040bc1028f702b', 'user6');
