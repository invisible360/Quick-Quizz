import React from 'react';

const ShowRightAnswerToast = ({question}) => {
    return (
        <div>
            <div className="toast toast-end toast-middle">
                <div className="alert alert-success">
                    <div>
                        <span>{question.correctAnswer}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowRightAnswerToast;