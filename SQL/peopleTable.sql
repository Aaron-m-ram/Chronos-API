CREATE TABLE Events.people (
	id INT NOT NULL,
	name varchar(100) NOT NULL,
	`rank` varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	phoneNumber varchar(100) NOT NULL
	ischecked tinyint(1) NOT NULL,
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
