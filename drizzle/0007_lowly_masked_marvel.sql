CREATE TABLE `shops` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`prefecture` text,
	`municipality` text,
	FOREIGN KEY (`prefecture`,`municipality`) REFERENCES `addresses`(`prefecture`,`municipality`) ON UPDATE no action ON DELETE no action
);
