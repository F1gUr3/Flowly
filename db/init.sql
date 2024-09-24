CREATE TABLE users(
    id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	userName varchar(255) not null,
	passwordHash text
)


CREATE TABLE tasks(
    id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	userId int unsigned not null,
	name varchar(255) not null,
	description text,
	priority enum('low', 'medium', 'high') not null,
	status enum('todo', 'in progress', 'done') not null,
	CONSTRAINT fk_task_to_user foreign key (userId) REFERENCES users(id) on delete cascade on update cascade
)

