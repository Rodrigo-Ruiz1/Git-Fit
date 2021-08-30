INSERT INTO users
    (name, username, email)
VALUES
    ('test', 'username', 'email@example.com');

INSERT INTO routine
    (title, user_id)
VALUES
    ('Summer Workout', 1);

INSERT INTO exercises
    (name, category, image, description, username)
VALUES
    ('Bench Press', 1, 'https://i.ytimg.com/vi/XSza8hVTlmM/maxresdefault.jpg', 'Lay flat on the bench. Lift bar off stands, align directly above chest, and press bar until arms are fully extended again.', 'Git-Fit'),
    ('Squat', 2, 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/31/Male/l/31_2.jpg', 'Set bar on the top of your back, adjust grip, and lift bar off the rack. While facing forward, go down into a squatting position until thighs are parallel to the ground before returning to a standing position.', 'Git-Fit');

INSERT INTO routine_exercise
    (routine_id, exercise_id)
VALUES
    (1, 1),
    (1, 2);

INSERT into categories
    (category_title)
VALUES
    ('Chest'),
    ('Legs');

INSERT INTO exercise_category
    (exercise_id, category_id)
VALUES
    (1, 1),
    (2, 2);