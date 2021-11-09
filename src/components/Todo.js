import { useState } from 'react';
import Modal from './Modal'
import Backdrop from './Backdrop'
function Todo(props) {
    const [modalOpen, setModalOpen] = useState(false);

    function deleteHandler() {
        setModalOpen(true);


    }
    
     function closeModalHandler() {
        setModalOpen(false);


}
    return (
        <div classname='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className="btn" onClick={deleteHandler} >Delete</button>
            </div>
            {modalOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>

    );

}
// if modalOpen is true and Modal is true, then the component function is outputed here
export default Todo;