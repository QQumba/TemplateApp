CREATE TABLE IF NOT EXISTS task_tracking.user
(
    user_id          bigserial
        CONSTRAINT pk_user_id PRIMARY KEY,
    email            TEXT      NOT NULL,
    password         TEXT      NOT NULL,
    salt             TEXT      NOT NULL,
    first_name       TEXT      NOT NULL,
    last_name        TEXT,
    created_datetime TIMESTAMP NOT NULL,
    updated_datetime TIMESTAMP NOT NULL
);
