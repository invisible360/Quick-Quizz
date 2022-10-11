import React, { useState } from 'react';
import Modal from './Modal';

const QuesAns = () => {
    const [state, setState] = useState(undefined);

    const quesAnss = [
        { id: 1, ques: 'What is the purpose of React Router?', ans: "ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route" },
        { id: 2, ques: 'How does context API works?', ans: 'The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.' },
        { id: 3, ques: 'Write about useRef () Hook?', ans: 'The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.' },
    ];

    return (
        <div>

            {
                state === 1 ? <Modal id={quesAnss[0].id} ques={quesAnss[0].ques} ans={quesAnss[0].ans} /> : undefined
            }
            {
                state === 2 ? <Modal id={quesAnss[1].id} ques={quesAnss[1].ques} ans={quesAnss[1].ans} /> : undefined
            }
            {
                state === 3 ? <Modal id={quesAnss[2].id} ques={quesAnss[2].ques} ans={quesAnss[2].ans} /> : undefined
            }
            {/* <p>{state}</p> */}


            {/* for mobile device */}
            <div className="lg:hidden overflow-x-auto my-10 mx-auto w-[90%]">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th className='border-0'></th>
                            <th className='text-center text-lg font-bold border-0'>Questions & Answers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quesAnss.map(qa =>
                                <tr key={qa.id}>
                                    <th className='border-0'>Q{qa.id}.</th>
                                    <td className='flex flex-col items-center justify-center'>
                                        <p>{qa.ques}</p>

                                        <div className='my-2'>
                                            <label onClick={() => setState(qa.id)} htmlFor="my-modal-6" className="text-white btn modal-button btn-warning
                                    ">Answer</label>
                                        </div>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {/* for large device */}
            <div className="hidden lg:block overflow-x-auto my-10 mx-auto w-[80%]">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Questions</th>
                            <th className='text-right'>answers</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            quesAnss.map(qa =>
                                <tr key={qa.id}>
                                    <th>Q{qa.id}.</th>
                                    <td>{qa.ques}</td>
                                    <td className='text-right'>
                                        <label onClick={() => setState(qa.id)} htmlFor="my-modal-6" className="btn modal-button btn-warning text-white">Answer</label>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default QuesAns;