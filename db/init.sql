CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    passwordHash TEXT NOT NULL
) ENGINE=InnoDB; 

CREATE TABLE task (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    priority ENUM('Low', 'Medium', 'High') NOT NULL,
    status ENUM('todo', 'in progress', 'done') NOT NULL,
    FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;
