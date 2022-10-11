import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizTopic = ({ topic }) => {
    // console.log(topic);
    const { name, logo, total: totalQuestion, id } = topic;

    const navigate = useNavigate ();
    const quizHandlerNavigate = () => {
        navigate (`/quiz/${id}`);
    }

    return (
        <div>
            <main className=''>
                <div className="card w-72 bg-base-100 shadow-xl image-full">
                    <figure><img src={logo} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">{name}</h2>
                        <p className='my-2'>Number of Questions: {totalQuestion} </p>
                        <div className="card-actions justify-center">
                            <button onClick={quizHandlerNavigate} className="btn btn-info">Start Quiz</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default QuizTopic;