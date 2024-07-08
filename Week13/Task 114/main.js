document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.input');
  const addBtn = document.querySelector('.add');
  const tasksContainer = document.querySelector('.Tasks');

  addBtn.addEventListener('click', function () {
    const taskText = input.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      input.value = '';
    }
  });

  function addTask(text) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskContent = document.createElement('span');
    taskContent.textContent = text;

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
      tasksContainer.removeChild(taskDiv);
    });

    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(deleteBtn);
    tasksContainer.appendChild(taskDiv);
  }
});
