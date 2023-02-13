import React from 'react';
import ToDoItem from '../ToDoItem';
import s from './style.module.css'

const Day = ({day, todos, deleteDay, deleteTodo}) => {

    return (
        <div className={s.card}>
            <div className={s.day}>
                 {day} 
            </div>
            <div className={s.todo_box}>
                {
                    todos.map(el => el.day===day ? <ToDoItem key={el.id} {...el} deleteTodo={deleteTodo}/> : '')
                }
            </div>
            <button className={s.del_btn} onClick={()=> deleteDay(day)}>
                <i className="las la-times"></i>
            </button>
        </div>
    );
};

export default Day;