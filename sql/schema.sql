CREATE TABLE users(
    id serial PRIMARY KEY,
    name text,
    username text,
    email text,
    created_at timestamp DEFAULT NOW()
);

CREATE TABLE routine(
    id serial PRIMARY KEY,
    title text,
    user_id int REFERENCES users(id)
);

CREATE TABLE exercises(
    id serial PRIMARY KEY,
    exercise_id int,
    title text,
    category text,
    sets int,
    reps int,
    completed bool default false,
    routine_id int REFERENCES routine(id)
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
    body text
);

CREATE TABLE comments_likes(
    user_id int REFERENCES users(id),
    comment_id int REFERENCES comments(id)
);

