const userTable = `CREATE TABLE IF NOT EXISTS users(
    userid INT(20) NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(userid)
);`;
const questionTable = `CREATE TABLE IF NOT EXISTS questions(
    id INT(20) NOT NULL AUTO_INCREMENT,
    questionid VARCHAR(100) NOT NULL UNIQUE,
    userid INT(20) NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    tag VARCHAR(20),
    PRIMARY KEY(id, questionid),
    FOREIGN KEY(userid) REFERENCES users(userid)
);`;

const answerTable = `CREATE TABLE IF NOT EXISTS answers(
    answerid VARCHAR(100) NOT NULL,
    userid INT(20) NOT NULL,
    questionid VARCHAR(100) NOT NULL,
    answer TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(answerid),
    FOREIGN KEY(questionid) REFERENCES questions(questionid),
    FOREIGN KEY(userid) REFERENCES users(userid)
);`;

module.exports = { userTable, questionTable, answerTable };
