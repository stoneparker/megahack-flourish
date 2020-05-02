-- MySQL Script generated by MySQL Workbench
-- Sat May  2 00:38:39 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema fifteen
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `fifteen` ;

-- -----------------------------------------------------
-- Schema fifteen
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fifteen` DEFAULT CHARACTER SET utf8 ;
USE `fifteen` ;

-- -----------------------------------------------------
-- Table `fifteen`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fifteen`.`users` ;

CREATE TABLE IF NOT EXISTS `fifteen`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `genre` CHAR(1) NULL,
  `birth_date` DATE NULL,
  `rent` DOUBLE NOT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fifteen`.`costs_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fifteen`.`costs_type` ;

CREATE TABLE IF NOT EXISTS `fifteen`.`costs_type` (
  `id_cost_type` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `value` DOUBLE NOT NULL,
  `fk_user` INT NOT NULL,
  PRIMARY KEY (`id_cost_type`),
  CONSTRAINT `fk_user_c`
    FOREIGN KEY (`fk_user`)
    REFERENCES `fifteen`.`users` (`id_user`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fifteen`.`goals`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fifteen`.`goals` ;

CREATE TABLE IF NOT EXISTS `fifteen`.`goals` (
  `id_goal` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `value` DOUBLE NOT NULL,
  `fk_user` INT NOT NULL,
  `proportion` VARCHAR(45) NOT NULL,
  `term` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_goal`),
  CONSTRAINT `fk_user_g`
    FOREIGN KEY (`fk_user`)
    REFERENCES `fifteen`.`users` (`id_user`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fifteen`.`costs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fifteen`.`costs` ;

CREATE TABLE IF NOT EXISTS `fifteen`.`costs` (
  `id_cost` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  `value` DOUBLE NOT NULL,
  `fk_cost_type` INT NOT NULL,
  PRIMARY KEY (`id_cost`),
  CONSTRAINT `fk_cost_type`
    FOREIGN KEY (`fk_cost_type`)
    REFERENCES `fifteen`.`costs_type` (`id_cost_type`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fifteen`.`debts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fifteen`.`debts` ;

CREATE TABLE IF NOT EXISTS `fifteen`.`debts` (
  `id_debts` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `value` DOUBLE NOT NULL,
  `interest` DECIMAL NOT NULL,
  `term` DATE NOT NULL,
  `fk_user` INT NOT NULL,
  PRIMARY KEY (`id_debts`),
  CONSTRAINT `fk_user_d`
    FOREIGN KEY (`fk_user`)
    REFERENCES `fifteen`.`users` (`id_user`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fifteen`.`debts_payment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fifteen`.`debts_payment` ;

CREATE TABLE IF NOT EXISTS `fifteen`.`debts_payment` (
  `id_debts_payment` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `value` DOUBLE NOT NULL,
  `fk_debt` INT NOT NULL,
  PRIMARY KEY (`id_debts_payment`),
  CONSTRAINT `fk_debts`
    FOREIGN KEY (`fk_debt`)
    REFERENCES `fifteen`.`debts` (`id_debts`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fifteen`.`goals_payment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fifteen`.`goals_payment` ;

CREATE TABLE IF NOT EXISTS `fifteen`.`goals_payment` (
  `id_goals_payment` INT NOT NULL,
  `date` DATE NOT NULL,
  `value` DOUBLE NOT NULL,
  `fk_goal` INT NOT NULL,
  PRIMARY KEY (`id_goals_payment`),
  CONSTRAINT `fk_goal`
    FOREIGN KEY (`fk_goal`)
    REFERENCES `fifteen`.`goals` (`id_goal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;