
-- creating a new database
CREATE DATABASE customer

-- creating a table in user database, named "users"
CREATE TABLE customer (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone_number VARCHAR(20),
  address VARCHAR(255)
);


-- inserting values in customers table
INSERT INTO customer (first_name, last_name, email, phone_number, address)
VALUES ('Alice', 'Smith', 'alice.smith@example.com', '555-123-4567', '123 Main St, Anytown, CA 12345'),
       ('Bob', 'Johnson', 'bob.johnson@example.com', '555-789-0123', '456 Elm St, Anytown, CA 12345');


-- to update a value in customers
UPDATE customer
SET phone_number = '555-987-6543'
WHERE email = 'alice.smith@example.com';


-- to delete a value from the customers table with id = 1
DELETE FROM customers
WHERE id = 1;
