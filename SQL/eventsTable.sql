CREATE TABLE Events.events (
	id INT NOT NULL,
	name varchar(100) NOT NULL,
	`date` varchar(100) NOT NULL,
	`start` varchar(100) NOT NULL,
	`end` varchar(100) NOT NULL,
	seats INT NOT NULL,
	reoccuring varchar(100) NOT NULL,
	regBtn tinyint(1) NOT NULL,
	CONSTRAINT events_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;

