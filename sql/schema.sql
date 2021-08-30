CREATE TABLE users(
    id serial PRIMARY KEY,
    name text,
    username text,
    email text,
    picture text,
    created_at timestamp DEFAULT NOW()
);

CREATE TABLE routine(
    id serial PRIMARY KEY,
    title text,
    user_id int REFERENCES users(id)
);

CREATE TABLE exercises(
    id serial PRIMARY KEY,
    name text,
    category int,
    image text,
    description text,
    username text
);

CREATE TABLE routine_exercise(
    routine_id int REFERENCES routine(id),
    exercise_id int REFERENCES exercises(id)
);

CREATE TABLE categories(
    id serial PRIMARY KEY,
    category_title text
);

CREATE TABLE exercise_category(
    exercise_id int REFERENCES exercises(id),
    category_id int REFERENCES categories(id)
);

CREATE TABLE posts(
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id),
    date timestamp DEFAULT NOW(),
    is_public bool default false,
    likes int default 0,
    comments int default 0,
    content text,
    routine_id int REFERENCES routine(id)
);

CREATE TABLE posts_likes(
    user_id int REFERENCES users(id),
    post_id int REFERENCES posts(id)
);

CREATE TABLE comments(
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id),
    post_id int REFERENCES posts(id),
    body text,
    date timestamp DEFAULT NOW()
);

CREATE TABLE comments_likes(
    user_id int REFERENCES users(id),
    comment_id int REFERENCES comments(id)
);

