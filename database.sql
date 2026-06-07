-- MySQL Database Schema initialization script for Hitoffice
-- Run this in your MySQL database client (e.g. phpMyAdmin, MySQL Workbench, or mysql-cli)

CREATE DATABASE IF NOT EXISTS hitoffice_db;
USE hitoffice_db;

CREATE TABLE IF NOT EXISTS demo_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mobile VARCHAR(50) NOT NULL,
  business_type VARCHAR(100) NOT NULL,
  city VARCHAR(255),
  company_name VARCHAR(255) NOT NULL,
  website_link VARCHAR(255),
  preferred_date VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
