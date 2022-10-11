import React from 'react';

const QuizRow = ({ qa, openModal }) => {
    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{qa.id}Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Got Answer</label>
                    </div>
                </div>
            </div>

            <tr>
                <th>Q{qa.id}.</th>
                <td>{qa.ques}</td>
                <td className='text-right'>
                    <label onClick={() => openModal(qa.id)} htmlFor="my-modal-6" className="btn modal-button btn-warning text-white">Answer</label>
                </td>
            </tr>
        </div>
    );
};

export default QuizRow;