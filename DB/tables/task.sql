CREATE TABLE IF NOT EXISTS task_tracking.task
(
    task_id          BIGSERIAL
        CONSTRAINT pk_task_id PRIMARY KEY,
    title            TEXT      NOT NULL,
    description      TEXT,
    status           SMALLINT  NOT NULL,
    created_datetime TIMESTAMP NOT NULL,
    updated_datetime TIMESTAMP NOT NULL
);
