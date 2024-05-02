CREATE TABLE `addresses` (
	`prefecture` text,
	`municipality` text,
	PRIMARY KEY(`municipality`, `prefecture`)
);
--> statement-breakpoint
ALTER TABLE writers ADD `pseudonym` text NOT NULL;--> statement-breakpoint
ALTER TABLE writers ADD `comment` text DEFAULT '';--> statement-breakpoint
CREATE UNIQUE INDEX `unique_pseudonym` ON `writers` (`pseudonym`);