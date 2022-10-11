import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from './QuizQuestions';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const data = quizDetails.data;
    const { name, questions } = data;
    let count = 0;

    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-emerald-500 my-5'>Quiz on {name}</h1>

            <div className='grid grid-cols-1 gap-5 lg:w-[50%] lg:mx-auto'>
                {
                    questions.map(question => <QuizQuestions
                        key={question.id}
                        question={question}
                        count={++count}
                    ></QuizQuestions>)
                }
            </div>


        </div>
    );
};

export default QuizDetails;