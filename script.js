// Seletores do DOM
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementByld('taskInput');
const taskList = document.getElementById(' taskList');

// Função que cria um ‹li> com texto e botão "Remover"
function createlaskitem(text) {
const li = document. createElement('li');
const span = document. createElement('span');
span.textContent = text;
const deleteBtn = document .createElement('button');
deleteBtn.textContent = 'Remover';
deleteBtn.className = 'delete-btn';
deleteBtn. type = 'button';
li.appendChild(span);
li. appendchild(deleteBtn);
return li;
}

// Captura do submit taskForm. addEventListener(' submit", function(e) \ e.preventDefault();
const text = taskInput.value.trim();
if (!text) return;
const li = createTaskItem(text);
taskList.appendchild(11);
taskInput.value =' ';
taskInput.focus();