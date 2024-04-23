
-- creating a new database
CREATE DATABASE product

-- creating a table in product database, named "products"
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  prod_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INTEGER NOT NULL
);

-- inserting values in products table
INSERT INTO products (prod_name, price, stock)
VALUES ('T-Shirt', 19.99, 100),
       ('Coffee Mug', 8.50, 50),
       ('Laptop', 799.99, 20);

-- to update a value in products
UPDATE products
SET price = price * 1.1  -- Increase price by 10%
WHERE name = 'T-Shirt';

-- to delete a value from the products table
DELETE FROM products
WHERE stock = 0;
