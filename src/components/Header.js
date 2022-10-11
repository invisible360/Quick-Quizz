import React from 'react';

const Header = () => {
    return (
        <div className='mb-20'>
            <div className='text-white  h-64 lg:h-96 bg-cover bg-center bg-no-repeat	' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>

                <div className='flex flex-col py-10 lg:py-24 items-center justify-center'>
                    <div className='lg:w-1/2 text-center'>
                        <h1 className='text-2xl lg:text-5xl  font-bold'>Shape Your Knowledge</h1>
                        <p className='my-10 p-5'>A comprehensive database of more than 31 computer programming quizzes online, test your knowledge with computer programming quiz questions.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;