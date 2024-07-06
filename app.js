const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { questions: getQuestionsFromPDF() });
});

app.post('/submit', (req, res) => {
    const answers = req.body;
    const score = evaluateAnswers(answers);
    res.render('result', { score: score });
});

function getQuestionsFromPDF() {
    return [
        { question: "What is 2 + 2?", options: ["3", "4", "5"], correctAnswer: "4" },
    ];
}

function evaluateAnswers(answers) {
    return 5; // Dummy score
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
