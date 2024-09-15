// 1. Создаем элементы с помошью JS


//const btn = document.querySelector(".add_note"); /* Нашли кнопку на странице*/
//const notes = document.querySelector(".notes"); /*нашли блок, в который будем записывать новые заметки. То есть таким образом мы обращаемся к элементам на странице */
//btn.addEventListener("click" /* описание события*/, ()=> { /* в фигурных скобках прописываем, что произойдет при наступлении события (создается функция)*/
//    const note = document.createElement("div"/*прописываем тег, который нужно создать*/); /* создали новый элемент */
//    note.innerHTML = "<h2>Заголовок</h2>"; /* записываем в новую константу информацию (но ничего пока не происходит - нужно новый элемент еще добавить на страницу (в div)) */
//    note.classList.add('note'); /*стилизуем новые элемент*/
//    notes.appendChild(note);/* добавили новый элемент (но пока без стилтзации*/
//});   /* описание события*/ 


// 2. Более сложный вариант. С записью объектов

//const btn = document.querySelector(".add_note"); 
//const notes = document.querySelector(".notes"); 

//const dataHeader = document.querySelector(".data_header"); // обращаемся к элементу input
//const dataText = document.querySelector(".data_text"); // обращаемся к элементу textarea


//btn.addEventListener("click", ()=>{
//    const header = dataHeader.value; /*вносим в новую переменную header значение (value) из dataHeader*/
//    const text = dataText.value;
//
//    const note = document.createElement("div"); 
    
//    note.innerHTML = `
//    <h2>${header}</h2> 
//    <p>${text}</p>
//        `; /* ${} - синтаксис, который позволяет добавлять перемнные. Стили для h2 и p присваиваются для переменных. Обязательны обратные кавычки */ 
    
//    note.classList.add('note'); 
//    notes.appendChild(note);
//}); 



//3. Удаление заметки
const btn = document.querySelector(".add_note"); 
const notes = document.querySelector(".notes"); 

const dataHeader = document.querySelector(".data_header"); 
const dataText = document.querySelector(".data_text"); 


btn.addEventListener("click", ()=>{
    const header = dataHeader.value; 
    const text = dataText.value;

    const note = document.createElement("div"); 
    
    note.innerHTML = `
    <h2>${header}</h2> 
    <p>${text}</p>
    <button onclick='deleteNote(this)'>Удалить заметку</button>`; /* deletNote - событие, которое произойдет при нажатии кнопри, This - именно эта заметка */ 
    
    note.classList.add('note'); 
    notes.appendChild(note);
}); 

function deleteNote(button){
    const note = button.parentNode; /*обращаемся к родителю кнопки*/
    notes.removeChild(note);
}