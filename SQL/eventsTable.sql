CREATE TABLE Events.events (
	id INT NOT NULL,
	Name varchar(100) NOT NULL,
	`Date` varchar(100) NOT NULL,
	`Start` varchar(100) NOT NULL,
	`End` varchar(100) NOT NULL,
	Seats INT NOT NULL,
	Reoccuring varchar(100) NOT NULL,
	CONSTRAINT events_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
