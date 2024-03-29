

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema wordloop_data
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS wordloop_data DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE wordloop_data ;

-- -----------------------------------------------------
-- Table `wordloop_data`.`languages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS languages (
  lang_id INT NOT NULL AUTO_INCREMENT,
  lang_name VARCHAR(45) NOT NULL,
  user_id VARCHAR(45) NOT NULL,
  PRIMARY KEY (lang_id),
  INDEX lang_id (lang_id ASC) VISIBLE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `wordloop_data`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  user_id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(45) NOT NULL,
  user_login VARCHAR(45) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id),
  INDEX user_id (user_id ASC) VISIBLE )
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `wordloop_data`.`words`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS words (
  word_id INT NOT NULL AUTO_INCREMENT,
  word_lang1 VARCHAR(45) NOT NULL,
  word_lang2 VARCHAR(45) NOT NULL,
  lang1_id INT NOT NULL,
  lang2_id INT NOT NULL,
  description TEXT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (word_id),
  INDEX lang1_id (lang1_id ASC) VISIBLE,
  INDEX lang2_id (lang2_id ASC) VISIBLE,
  CONSTRAINT words_ibfk_1
    FOREIGN KEY (lang1_id)
    REFERENCES wordloop_data.languages (lang_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT words_ibfk_2
    FOREIGN KEY (lang2_id)
    REFERENCES wordloop_data.languages (lang_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `wordloop_data`.`words_lists`
-- ----------------------------------------------------
CREATE TABLE IF NOT EXISTS words_lists (
  list_id INT NOT NULL AUTO_INCREMENT,
  list_name VARCHAR(45) NOT NULL,
  lang1_id INT NOT NULL,
  lang2_id INT NOT NULL,
  user_id INT NULL DEFAULT NULL,
  PRIMARY KEY (list_id),
  INDEX lang1_id (lang1_id ASC) VISIBLE,
  INDEX lang2_id (lang2_id ASC) VISIBLE,
  CONSTRAINT words_lists_ibfk_1
    FOREIGN KEY (lang1_id)
    REFERENCES wordloop_data.languages (lang_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT words_lists_ibfk_2
    FOREIGN KEY (lang2_id)
    REFERENCES wordloop_data.languages (lang_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `wordloop_data`.`words_lists_words`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS words_lists_words (
  list_id INT NOT NULL ,
  word_id INT NOT NULL,
  INDEX list_id (list_id ASC) VISIBLE,
  CONSTRAINT words_lists_words_ibfk_1
    FOREIGN KEY (list_id)
    REFERENCES wordloop_data.words_lists (list_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT words_lists_words_ibfk_2
    FOREIGN KEY (word_id)
    REFERENCES wordloop_data.words (word_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `wordloop_data`.`tg_data`
-- ----------------------------------------------------

CREATE TABLE IF NOT EXISTS tg_data (
  user_id INT NOT NULL,
  telegram_id INT NOT NULL ,
  token VARCHAR(300) NOT NULL,
  INDEX telegram_id (telegram_id ASC) VISIBLE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
