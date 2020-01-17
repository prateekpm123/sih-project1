-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2020 at 08:28 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student grievance`
--

-- --------------------------------------------------------

--
-- Table structure for table `ins comp`
--

CREATE TABLE `ins comp` (
  `Id` varchar(255) NOT NULL,
  `compid` varchar(255) NOT NULL,
  `description` varchar(999) NOT NULL,
  `tags` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `login1`
--

CREATE TABLE `login1` (
  `name` varchar(255) NOT NULL,
  `midname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `colname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `dob` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `std comp`
--

CREATE TABLE `std comp` (
  `Id` varchar(255) NOT NULL,
  `compid` varchar(255) NOT NULL,
  `description` varchar(999) NOT NULL,
  `tags` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `university comp`
--

CREATE TABLE `university comp` (
  `Id` varchar(255) NOT NULL,
  `compid` varchar(255) NOT NULL,
  `description` varchar(999) NOT NULL,
  `tags` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ins comp`
--
ALTER TABLE `ins comp`
  ADD PRIMARY KEY (`compid`),
  ADD KEY `Id` (`Id`);

--
-- Indexes for table `login1`
--
ALTER TABLE `login1`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `std comp`
--
ALTER TABLE `std comp`
  ADD PRIMARY KEY (`compid`),
  ADD KEY `Id` (`Id`);

--
-- Indexes for table `university comp`
--
ALTER TABLE `university comp`
  ADD PRIMARY KEY (`compid`),
  ADD KEY `Id` (`Id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ins comp`
--
ALTER TABLE `ins comp`
  ADD CONSTRAINT `ins comp_ibfk_1` FOREIGN KEY (`Id`) REFERENCES `login1` (`username`);

--
-- Constraints for table `std comp`
--
ALTER TABLE `std comp`
  ADD CONSTRAINT `std comp_ibfk_1` FOREIGN KEY (`Id`) REFERENCES `login1` (`username`);

--
-- Constraints for table `university comp`
--
ALTER TABLE `university comp`
  ADD CONSTRAINT `university comp_ibfk_1` FOREIGN KEY (`Id`) REFERENCES `login1` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
