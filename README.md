# SBDF - Same Backend Different Framework

TLDR: same backend requirements, implemented using different programming languages/frameworks

## Requirements

'
Implement a simple Reddit API clone.

### API ROUTES

-   /auth
    -   **GET** /current-user --> get data of current logged in user with JWT
    -   **POST** / --> register a new user
-   /categories

    -   **GET** / --> get all categories
    -   **POST** / --> add a new category
        -   body:
            -   `name`: string required unique
        -   `id` - auto-generated on posting
        -   `created_at` - auto-generated on posting
        ```json
        { "name": "Category name" }
        ```
    -   **UPDATE** /`:id` --> update an existing category data
        -   body:
            -   `name`: string unique
        ```json
        { "name": "New Category name" }
        ```
    -   **DELETE** /`:id` --> delete a category by `id`

-   /posts
    -   **GET** / --> get all posts
        -   query params:
            -   `start_date` - filter posts that have the `created_at` equal or bigger than `start_date`
            -   `user` - filter posts that are posted by a specific user
            -   `category` - filter posts that are part of a specific category
    -   **GET** /`:id` --> get a post by `id`
    -   **POST** / --> add a new post
        -   body:
            -   `title` - string required unique
            -   `content` - string html-format required
            -   `categories` - array required
            -   `posted_by` - string id-format user-ref
            ```json
            {
            	"title": "Sample Title",
            	"content": "<h2>Sample Content Subtitle</h2><p>Hello World! This is a sample paragraph</p>",
            	"categories": ["categ1", "categ2", "categ3"],
            	"posted_by": "abc123def456"
            }
            ```
        -   `id` - auto-generated when posting
        -   `created_at` - auto-generated when posting
    -   **UPDATE** /`:id` --> update an existing post data
        -   body:
            -   title - string
            -   content - string html-format
            -   categories - array
            ```json
            {
            	"title": "Updated Title",
            	"content": "<p>New content</p>",
            	"categories": ["categ4", "categ5"]
            }
            ```
    -   **DELETE** /`:id` --> delete a post by `id`
-   /users
    -   **GET** / --> get all users
    -   **GET** /`:id` --> get a user by `id`
    -   **UPDATE** /`:id` --> update an existing user data
    -   **DELETE** /`:id` --> delete a user by `id`

## PROJECTS
-   express - https://github.com/mrheio/sbdf-express

