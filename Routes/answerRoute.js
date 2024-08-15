const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const { getAnswersForQuestion, postAnswer, updateAnswer } = require('../Controller/answerController');

router.get('/:question_id', authMiddleware, getAnswersForQuestion);
router.post("/:question_id", authMiddleware, postAnswer);
router.put("/:answer_id", authMiddleware, updateAnswer);

module.exports = router;
