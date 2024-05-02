CREATE TABLE `members` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`organizer_id` integer,
	FOREIGN KEY (`organizer_id`) REFERENCES `organizations`(`id`) ON UPDATE set null ON DELETE cascade
);
