import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import QuizTopic from './QuizTopic';

const Home = () => {
    const quizTopics = useLoaderData();
    const topics = quizTopics.data;
    // console.log(topics);

    return (
        <div>
            <Header></Header>
            <h1 className='text-5xl font-bold text-center my-10'>Quiz Topic</h1>

            <div className='grid lg:grid-cols-4 my-10 w-[90%] mx-auto gap-10 place-content-center'>
                {
                    topics.map(topic => <QuizTopic
                        key={topic.id}
                        topic={topic}
                    ></QuizTopic>)
                }
            </div>

        </div>
    );
};

export default Home;