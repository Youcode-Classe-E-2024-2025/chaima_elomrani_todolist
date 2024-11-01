// ********************** Form Controls *****************************
const addbtn = document.getElementById("addbtn");
const formContainer = document.getElementById("form-container");
const form = document.getElementById("form");
const exit = document.getElementById("exit");

addbtn.addEventListener('click', function () {
    formContainer.style.display = "block";
});

exit.addEventListener('click', function () {
    formContainer.style.display = "none";
});

// ********************** Task Array *****************************
const tacheArray = [];
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;
    const statut = document.getElementById("statut").value;

   
    const newTask = {
        title: title,
        description: description,
        date: date,
        priority: priority,
        statut: statut,
    };

    tacheArray.push(newTask); 
    form.reset();
    formContainer.style.display = "none"; 

    affichage(tacheArray); 
});

// ********************** Display Function *****************************
function affichage(tacheArray) {
    
    const todoAdd = document.querySelector('.todoAdd');
    const doingAdd = document.querySelector('.doingAdd');
    const doneAdd = document.querySelector('.doneAdd');

    
    todoAdd.innerHTML = '';
    doingAdd.innerHTML = '';
    doneAdd.innerHTML = '';

   
    for (let i = 0; i < tacheArray.length; i++) {
        const task = tacheArray[i];

       
        let lineColor;
        if (task.priority === 'P1') {
            lineColor = 'red';
        } else if (task.priority === 'P2') {
            lineColor = 'orange';
        } else if (task.priority === 'P3') {
            lineColor = 'green';
        }

       
        const taskHTML = `
            <div class="tache">
                <div class="tache-icon">
                    <div class="line" style="background-color: ${lineColor};"></div>
                    <button id="btn" style="background-color:white; border: none;">
                        <i class='bx bxs-trash' style="padding-right: 20px;"></i>
                    </button>
                </div>
                <h4 class="title">${task.title}</h4>
            </div>
        `;

      
        if (task.statut === 'todo') {
            todoAdd.innerHTML += taskHTML;
        } else if (task.statut === 'doing') {
            doingAdd.innerHTML += taskHTML;
        } else if (task.statut === 'done') {
            doneAdd.innerHTML += taskHTML;
        }
    }
}
