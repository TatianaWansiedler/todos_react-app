import React, {useState} from 'react';
import Form from '../Form';
import Day from '../Day';
import s from './style.module.css'

const ToDosContainer = () => {
    const initialArr = [
        {id: 1, day: 'ПН', option: 1, title: 'Выучить React'},
        {id: 2, day: 'ВТ', option: 1, title: 'Сходить в зал'},
        {id: 3, day: 'ПТ', option: 0, title: 'Поспать'},
        {id: 4, day: 'ВТ', option: 0, title: 'Посмотреть YouTube'},
        {id: 5, day: 'ПТ', option: 1, title: 'Сходить в зал'},
    ]
    const days = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС']

    const [todos, setToDos] = useState(initialArr)

    const createToDo = (title, option, day) => {
        setToDos([...todos,{title, option, day, id: Date.now()}])
    }

    const deleteDay = (value) => {
        setToDos(todos.filter(({day}) => day !== value))
    }

    const deleteTodo = (value) => {
        setToDos(todos.filter(({id}) => id !== value))
    }

    const targets = todos.map(({day}) => day)

    return (
        <div>
            <Form createToDo={createToDo}/>
            <div className={s.container}>
                {
                    days.map((day,i) => targets.includes(day) 
                    ? <Day 
                        key={i}
                        todos={todos} 
                        day={day} 
                        deleteDay={deleteDay} 
                        deleteTodo={deleteTodo}/> 
                    : '')
                }
            </div>
        </div>
    );
};

export default ToDosContainer;