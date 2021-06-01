import React, {useState} from 'react'
import QuCSS from './Quiz.module.css'
import {Link} from 'react-router-dom'

function Quiz() {
  
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many continents on earth?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '8', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
    },
    {
			questionText: 'What is the oldest country in the world?',
			answerOptions: [
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Egypt', isCorrect: false },
				{ answerText: 'Iran', isCorrect: false },
				{ answerText: 'San Marino', isCorrect: true },
			],
    },
    {
			questionText: 'Which country won FIFA world cup 1994?',
			answerOptions: [
				{ answerText: 'Brazil', isCorrect: true },
				{ answerText: 'Germany', isCorrect: false },
				{ answerText: 'Argentina', isCorrect: true },
				{ answerText: 'France', isCorrect: false },
			],
    },
    
    {
			questionText: 'What is the closest star to earth?',
			answerOptions: [
				{ answerText: 'Rigil Kentaurus	', isCorrect: false },
				{ answerText: 'Proxima Centauri', isCorrect: true },
				{ answerText: "Barnard's Star", isCorrect: false },
				{ answerText: 'Luyten', isCorrect: false },
			],
    },
    
    {
			questionText: 'How many months in the calendar year have exactly 30 days?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '3', isCorrect: false },
			],
    },
	];
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);




  const handleAnswerButtonClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;

    if(isCorrect){
      setScore(score + 1)
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    setCurrentQuestion(nextQuestion);
  };

  
  return (
	  <body className={QuCSS.bodyt}>
		  <button className={QuCSS.homebtn}> <Link to="/" style={{ textDecoration: 'none'}} className={QuCSS.btnlink}> main page. </Link> </button>
    <div className={QuCSS.app}>
      {showScore ? (
				<div className={QuCSS.scoresection}>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className={QuCSS.questionsection}>
						<div className={QuCSS.questioncount}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className={QuCSS.questiontext}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={QuCSS.answersection}>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
		                <button className={QuCSS.btn} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
	              ))}
					</div>
				</>
			)}
			
    </div>
	</body>
  );
}

export default Quiz;
