DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    item_id INT (8) NOT NULL,
	product_name VARCHAR (60) NOT NULL,
    department VARCHAR (30) NOT NULL,
    price DECIMAL (10, 2) NOT NULL,
    stock_quantity INT (5) NOT NULL,
	PRIMARY KEY (id)
);