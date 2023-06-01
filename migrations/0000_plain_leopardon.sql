CREATE TABLE `categories` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()));
