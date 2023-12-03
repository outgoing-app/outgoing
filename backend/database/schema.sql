DROP DATABASE IF EXISTS outgoingdb;
CREATE DATABASE outgoingdb;
\c outgoingdb;

DROP TABLE IF EXISTS ideas;
DROP TABLE IF EXISTS usersGroup;
DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS pollingTimes;
DROP TABLE IF EXISTS usersEvents;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TYPE user_statuses AS ENUM('Polling Pending', 'Voted', 'Declined', 'Confirming Pending', 'Confirmed')
CREATE TYPE EVENT_STATUSES AS EMUM('Polling', 'Confirming', 'Confirmed')

-- user entity
CREATE TABLE users (
    id          SERIAL      UNIQUE      PRIMARY KEY,
    firstname   VARCHAR     NOT NULL,
    lastname    VARCHAR     NOT NULL
);

-- polling event entity
CREATE TABLE events (
    id          SERIAL          UNIQUE      PRIMARY KEY,
    title       VARCHAR         NOT NULL,
    location    VARCHAR         NOT NULL,
    date        DATE,
    starttime   TIME,
    endtime     TIME,
    status      EVENT_STATUSES  NOT NULL
);

-- maps users to polling events (many-to-many)
CREATE TABLE usersEvents (
    id          SERIAL          UNIQUE      PRIMARY KEY,
    userId      INT             NOT NULL    REFERENCES users(id),
    eventId     INT             NOT NULL    REFERENCES events(id),
    status      USER_STATUSES   NOT NULL
)

-- maps polling times to a polling event (many-to-one)
CREATE TABLE pollingTimes (
    id          SERIAL      UNIQUE      PRIMARY KEY,
    eventId     INT         NOT NULL    REFERENCES pollingEvents(id),
    date        DATE        NOT NULL,
    starttime   TIME        NOT NULL,
    endtime     TIME        NOT NULL,
    count       INT         NOT NULL,
    selected    INT         NOT NULL
)

-- group entity
CREATE TABLE groups (
    id          SERIAL      UNIQUE      PRIMARY KEY,
    name        VARCHAR     NOT NULL,
)

-- maps users to groups (many-to-many)
CREATE TABLE usersGroups (
    id          SERIAL      UNIQUE      PRIMARY KEY,
    userId      INT         NOT NULL    REFERENCES users(id),
    groupId     INT         NOT NULL    REFERENCES groups(id),
)

-- map ideas to one specific group (many-to-one)
CREATE TABLE ideas (
    id          SERIAL      UNIQUE      PRIMARY KEY,
    groupId     INT         NOT NULL    REFERENCES groups(id),
    name        VARCHAR     NOT NULL,
    location    VARCHAR     NOT NULL
)

\COPY users(id, firstname, lastname) FROM 'data/users.csv' DELIMITER ',' CSV HEADER;
\COPY events(id, title, location, date, starttime, endtime, status) FROM 'data/events.csv' DELIMITER ',' CSV HEADER;
\COPY usersEvents(id, userId, eventId, status) FROM 'data/usersEvents.csv' DELIMITER ',' CSV HEADER;
\COPY pollingTimes(id, eventId, date, starttime, endtime, count, selected) FROM 'data/pollingTimes.csv' DELIMITER ',' CSV HEADER;
\COPY groups(id, name) FROM 'data/groups.csv' DELIMITER ',' CSV HEADER;
\COPY usersGroups(id, userId, groupId) FROM 'data/usersGroups.csv' DELIMITER ',' CSV HEADER;
\COPY ideas(id, groupId, name, location) FROM 'data/ideas.csv' DELIMITER ',' CSV HEADER;