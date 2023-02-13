import React from 'react';
import Select from '../Select';
import s from './style.module.css'

const Form = ({createToDo}) => {
    const days = [
        { id: 1, text: "Выберите день", disabled: true, value: ""},
        { id: 2, value: "ПН", text: "ПН" },
        { id: 3, value: "ВТ", text: "ВТ" },
        { id: 4, value: "СР", text: "СР" },
        { id: 5, value: "ЧТ", text: "ЧТ" },
        { id: 6, value: "ПТ", text: "ПТ" },
        { id: 7, value: "СБ", text: "СБ" },
        { id: 8, value: "ВС", text: "ВС" },
    ]
    const options = [
        { id: 1, text: "Выберите важность", disabled: true, value: ""},
        { id: 2, value: 1, text: "важно" },
        { id: 3, value: 0, text: "неважно" },
    ]

    const onSubmit = event => {
        event.preventDefault();
        const {title, days, options} = event.target;
        
        createToDo(title.value, options.value, days.value )

        title.value = ''
        days.value = ''
        options.value = ''
    }

    return (

        <form className={s.form} onSubmit={onSubmit}>
            <div className={s.selects}>
                <Select data={days} name={'days'} />
                <Select data={options} name={'options'} />
            </div>
            <div className={s.inputs}>
                <textarea type="text" placeholder="Описание" name="title" wrap="soft" rows="1" required/>
                <input type="submit" value="Добавить" />
            </div>
        </form>

    );
};

export default Form;