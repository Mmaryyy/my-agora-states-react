import React, { useState } from "react";
import '../index.css';
import '../global__style.css'

const Discussion = ({ discussion }) => {
    // const [ displayFeedback, setDisplayFeedback ] = useState(none)

    // if (discussion.answer.url) {
    //     setDisplayFeedback(block)
    // }
    return (
        <li className="discussion__container">
            <div className="discussion__avatar--wrapper">
                <img className="discussion__avatar--image" src={discussion.avatarUrl} alt={`avatar of ${discussion.author}`}></img>
            </div>
            <div className="discussion__content">
                <h2 className="discussion__title">
                    <a href={discussion.url}>{discussion.title}</a>
                </h2>
                <div className="discussion__information">
                    {`${discussion.author} / ${new Date(discussion.createdAt).toLocaleString()}`}
                </div>
            </div>
            <div className="discussion__answered">
                <p className="discussion__answered--feedback">
                { discussion.answer !== null ? <a href={discussion.answer.url} display={false}>Check Feedback!</a> : null }
                </p>
                <input className='discussion__information--answercheck' type='checkbox' checked={true}></input>
            </div>
        </li>
        )
}


export default Discussion