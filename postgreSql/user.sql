
-- creating a new database
CREATE DATABASE user

-- creating a table in user database, named "users"
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE,
  email DECIMAL(100) NOT NULL UNIQUE,
  password CHAR(64) NOT NULL
);

-- inserting values in users table
INSERT INTO users (username, email, password)
VALUES ('john_doe', 'john.doe@example.com', 'abc123'),
       ('jane_smith', 'jane.smith@example.com', 'xyz123');

-- to update a value in users
UPDATE users
SET email = 'updated_email@example.com'
WHERE name = 'john_doe';

-- to delete a value from the users table with id = 2
DELETE FROM users
WHERE id = 2;
