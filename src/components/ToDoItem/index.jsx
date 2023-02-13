import React from 'react';
import s from './style.module.css'

const ToDoItem = ({id,title, option, deleteTodo}) => {
    return (
        <div className={+option ? s.item : [s.item, s.item_red].join(' ')}>
            <p>{title}</p>
            <button className={s.del_btn} onClick={() => deleteTodo(id)}>
                <i className="las la-times"></i>
            </button>
        </div>
    );
};

export default ToDoItem;





