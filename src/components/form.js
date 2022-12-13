import React from "react";
import '../index.css';
import '../global__style.css'

const Form = () => {
    return (
            <section className="form__container">
                <form action="/public/index.html" method="get" className="form">
                    <div className="form__input--wrapper">
                        <div className="form__input--name">
                            <label for='name'>이름을 입력하세요.</label>
                            <input type='text' name='name' id='name' required />
                        </div>
                        <div className="form__input--title">
                            <label for='story'>제목을 입력하세요</label>
                            <input type='text' name='title' id='title' required />
                        </div>
                        <div className="form__textbox">
                            <label for='story' >질문 내용</label>
                            <textarea id='story' name="story" placeholder="질문을 작성하세요" required />
                        </div>
                    </div>
                    <div className="form__submit">
                        <input type='submit' value='submit' />
                    </div>
                </form>
            </section>
    )
}

export default Form;

