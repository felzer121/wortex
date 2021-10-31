import React from 'react';
import './style.scss'
import {Modal} from "../Modal/Modal";

export const Started = () => {
    const [isShow, setShow]=React.useState(false)
    const handleModal = (): void => {
        setShow(!isShow)
    }
    return (
        <div className='App__content'>
            {isShow && <Modal top={window.scrollY} handleModal={handleModal} /> }
            <div className='started'>
                <div className='started__info started__width'>
                    <h4>Как начать обучение?</h4>
                    <div className='started__content'>
                        <h5>Просто оставьте заявку</h5>
                        <p>Мы свяжемся с вами и подберем направление, которое
                            заинтересует вашего ребенка, и учителя</p>
                        <h5>Бесплатный пробный урок</h5>
                        <p>Приходите вместе и убедитесь, что урок проходит полноценно,
                            информативно и интересно для ребенка</p>
                        <h5>Начало курса</h5>
                        <p>Оплатите курс, подберите расписание, которое впишется
                            в вашу занятость</p>
                        <div className='started__button'>
                            <button className='button' onClick={handleModal}>ЗАПИСАТЬСЯ</button>
                        </div>
                    </div>
                </div>
                <div className='started__width'>
                    <img className='started__pic' src="./started.png" alt=""/>
                </div>
            </div>
        </div>
    )
}