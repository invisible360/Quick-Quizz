import React from 'react';

const QuesAns = () => {

    const quesAnss = [
        { id: 1, ques: 'What is the purpose of React Router?', ans: 'sadfdsf' },
        { id: 2, ques: 'How does context API works?', ans: 'sdfdsaf' },
        { id: 3, ques: 'Write about useRef () Hook?', ans: 'sdfsdf' },
    ];

    const openModal = (id) => {
        console.log('modal open', id);
    }

    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Got Answer</label>
                    </div>
                </div>
            </div>

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
                                            <label htmlFor="my-modal-6" className="text-white btn modal-button btn-warning
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
                                        <label onClick={() => openModal(qa.id)} htmlFor="my-modal-6" className="btn modal-button btn-warning text-white">Answer</label>
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