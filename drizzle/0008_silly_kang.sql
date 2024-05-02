CREATE TABLE `organizations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`parent_id` integer,
	FOREIGN KEY (`parent_id`) REFERENCES `organizations`(`id`) ON UPDATE no action ON DELETE no action
);
