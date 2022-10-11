import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from './QuizQuestions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const data = quizDetails.data;
    const { name, questions } = data;
    console.log(data);
    let count = 0;

    const correctAns = (correctA) => {
        toast(`Correct Answer: ${correctA}`);
    }

    const correctOrWrng = (optionCheck) => {
        const corOp = questions.filter(crra => crra.correctAnswer === optionCheck);
        if (corOp.length === 0) {
            toast(`Wrong!!!`);
        }

        else {
            toast(`Correct!!!`);
        }

    }

    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-emerald-500 my-5'>Quiz on {name}</h1>

            <ToastContainer />

            <div className='grid grid-cols-1 gap-5 lg:w-[50%] lg:mx-auto'>
                {
                    questions.map(question => <QuizQuestions
                        key={question.id}
                        question={question}
                        count={++count}
                        correctAns={correctAns}
                        correctOrWrng={correctOrWrng}
                    ></QuizQuestions>)
                }
            </div>


        </div>
    );
};

export default QuizDetails;