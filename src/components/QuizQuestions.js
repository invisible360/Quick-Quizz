import React from 'react';

const QuizQuestions = ({ question, count, correctAns, correctOrWrng }) => {

    // console.log(question);
    let number = 0;

    return (
        <div className='rounded-lg p-5 shadow-2xl my-5'>

            <div className='flex justify-between my-5'>
                <div className='text-center'>
                    <p><span className='text-xl font-bold text-blue-600'>Question {count}</span> : <span className='text-orange-600'><code>{question.question}?</code></span></p>
                </div>

                <button onClick={() => correctAns(question.correctAnswer, count)} className='ml-5 btn btn-circle btn-sm btn-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </div>

            <div className='grid grid-cols-1 gap-3 lg:w-3/5 lg:mx-auto'>
                {
                    question.options.map((option, idx) =>

                        <button onClick={() => correctOrWrng(option, count)} key={idx} className='grid grid-cols-3 border-2 items-center border-indigo-600 py-2 rounded-md hover:bg-green-500 hover:text-white'>
                            <p className='col-span-1'>{++number}.</p>
                            <p className='col-span-2 text-left p-2'>{option}</p>
                        </button>

                    )
                }
            </div>

        </div>
    );
};

export default QuizQuestions;