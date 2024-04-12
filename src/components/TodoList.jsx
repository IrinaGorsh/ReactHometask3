//Задание 2: Список дел с Material UI

//Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

//Компоненты:
//Используйте TextField для ввода новой задачи.
//Добавьте Button для добавления задачи в список.
//Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента //списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

//Логика:
//При нажатии на кнопку добавления, новая задача должна добавляться в список.
//Рядом с каждой задачей должна быть кнопка для её удаления.

import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function TodoList() {

    const [inputText, setinputText] = useState("");
    const [arr, setArr] = useState(["Prod1", "Prod2"]);

    function clickHandler() {
        if (!inputText.trim()) {
            return;
        }

        setArr([...arr, inputText]);
        setinputText(" ");
    }

    const handleDelete = (deleteItem) => {
        const newArr = arr.filter((item) => item !== deleteItem);
        setArr(newArr);
            }
        
           
        
    return (
        <div>
             <TextField id="outlined-basic" label="Make your list" variant="outlined" onChange={(e) => setinputText(e.target.value)}/>
             <Button variant="outlined" onClick={clickHandler}>Click to add</Button>
           
          
           
           <ul>
            {arr.map((item) => (
                 <Box
                 
               >
                 •<CardContent key={arr.indexOf(item)}>{item}</CardContent>
                 <Button variant="outlined" onClick={() => handleDelete(item)}>Delete</Button>
               </Box>
               // < li key={arr.indexOf(item)}>{item}<button onClick={() => handleDelete(item)}>Delete</button></li>
            ))}
           </ul>
        </div>
      );
}

export default TodoList;
