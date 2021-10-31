import React from 'react';
import './style.scss'
import emailJs from "emailjs-com";

interface ModalProps {
    top: number
    handleModal: () => void
}

export const Modal = ({top, handleModal}:ModalProps) => {

    (function(){
        emailJs.init("user_YWFJ05qbxsCx6oYYopJWA");
    })();
    const [value, setValue] = React.useState({
        name: '',
        phone: ''
    })
    const templateParams = {
        name: `😞  ${value.name}`,
        phone: `😐  ${value.phone}`
    }
    const send = () => {
        emailJs.send('service_91y31ce','template_f4iucvr', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text)
            }, function(err) {
                console.log('FAILED...', err)
            })
        handleModal()
    }

    return (
        <div className='modal' style={{top: top}}>
            <div className='modal__mask' onClick={() => handleModal()} />
            <div className='modal__content'>
                <h2>Записаться на бесплатный урок</h2>
                <div className='modal__form'>
                    <input className='modal__input' value={value.name} onChange={(e)=>setValue({...value, name: e.target.value})} placeholder='имя' type="text"/>
                    <input className='modal__input' value={value.phone} onChange={(e)=>setValue({...value, phone: e.target.value})} placeholder='телефон' type="text"/>
                    <button className='button' onClick={send}>ЗАПИСАТЬСЯ</button>
                    <p>Ваши данные никаким образом не будут переданы третьим лицам.</p>
                </div>
            </div>
        </div>
    );
}