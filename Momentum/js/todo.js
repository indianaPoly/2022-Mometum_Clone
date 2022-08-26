const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

// 네번째
function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos)); // array 형태로 localstorage에 저장함
}

// 세번째
function deleteToDo(event){
    //버튼을 눌렀을 때 부모를 가져옴!
    const li = event.target.parentElement;
    li.remove();
}

// 두번째
function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// 첫번째
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value; // 빈칸으로 만들기 전에 내가 작성한 값을 저장하기 위함.
    toDoInput.value = ""; //빈 칸에 작성을하고 엔터를 누르면 input값이 비워져있도록 함.
    toDos.push(newToDo); // 값을 화면에 그리기 전에 저장
    paintToDo(newToDo); // 저장한 값을 화면에 표시해야 됨.
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("toDos");

if (savedToDos !== null ){
    const parsedToDos = JSon.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}