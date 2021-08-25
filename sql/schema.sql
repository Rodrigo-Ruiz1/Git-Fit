TABLE users (
    id serial PRIMARY KEY,
    name text,
    username text,
    email text,
    created_at timestamp
)

TABLE routine (
    id serial PRIMARY KEY,
    title text,
    user_id int REFERENCES users(id)
);

TABLE exercises (
    id serial PRIMARY KEY,
    exercise_id int,
    category text,
    sets int,
    reps int,
    completed bool default false,
    routine_id int REFERENCES routine(id)
);

TABLE posts (
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id),
    date timestamp DEFAULT NOW(),
    public bool default false,
    likes int default 0,
    comments int default 0
);

TABLE posts_likes (
    user_id int REFERENCES users(id),
    post_id int REFERENCES posts(id)
);

TABLE comments (
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id)
    post_id int REFERENCES posts(id),
    body text,
);

TABLE comments_likes (
    user_id int REFERENCES users(id),
    comment_id int REFERENCES comments(id)
);

