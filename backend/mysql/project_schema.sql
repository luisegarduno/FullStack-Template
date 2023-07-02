CREATE DATABASE IF NOT EXISTS `project`;
USE `project`;

-- -----------------------------------------------------
-- Table `CHANGE-ME`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`user` (
	`userID`       INT AUTO_INCREMENT  PRIMARY KEY NOT NULL,
	`email`        VARCHAR(45)                         NULL,
	`password`     VARCHAR(64) COLLATE utf8_bin        NULL,
	`username`     VARCHAR(45)                         NULL,
	UNIQUE INDEX `userID_UNIQUE` (`userID` ASC) VISIBLE);

INSERT INTO `project`.`user` (`userID`, `email`, `password`, `username`) VALUES
	(1, 'user1@email.com', '$2b$10$CmrDR3YvdkT7Xpd7XYc/F.eD2MH8NU.mJewWsu7bLXxh1WX4JCXtW', 'user1'),
	(2, 'user2@email.com', '$2b$10$eN.9Oz3nCnVNB9enqfKgmeZ8KkHAziCZIwFPUKSxBsG8Ye5q5Q9o2', 'user2'),
	(3, 'user3@email.com', '$2b$10$Xx7ODAIIQjMJVGCURK295eeehZX18pTeZz4Up2L9FTsvo6ivgD9Bu', 'user3'),
	(4, 'user4@email.com', '$2b$10$IplV67.58Eg7LHDoO6.jBOsIQw5ZkEWylEDzF1jgCM3hpwmh88gj.', 'user4'),
	(5, 'user5@email.com', '$2b$10$O4pyMK4HhF61dY4IVqhqiO0wFWR6L4l513K1p40.uw8Ima4GS/Mr6', 'user5'),
	(6, 'user6@email.com', '$2b$10$0zrtNGOGJav4gc7ASaEAMO8HZRAL0jwjkgOqZ82ouZhHaJFsWYYaC', 'user6');
