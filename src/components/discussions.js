import React, { Fragment } from "react";
import '../index.css';
import '../global__style.css'
import Discussion from './discussion.js'

const Discussions = ({ discussions }) => {
    return (
        <Fragment>
            <section className="discussion__wrapper">
                <ul className="discussions__container">
                    { discussions.map((discussion) => {
                        return <Discussion discussion={discussion} key={discussion.id} />
                    })}
                </ul>
            </section>
        </Fragment>
    )
}
export default Discussions