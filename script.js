let enter = document.querySelector('#task-enter');
enter.addEventListener('click', function () {
    console.log('clicked');
    let task = document.querySelector('#task-input').value;
    if (task === '') {
        alert('Please enter a task');
    } else {
        let div = document.createElement('div');
        div.className = 'note';
        let task = document.querySelector('#task-input').value;
        let p = div.appendChild(document.createElement('span'));
        p.textContent = task;
        p.id = 'text';
        let d = div.appendChild(document.createElement('div'));
        d.id = "icon";
        let btn = d.appendChild(document.createElement('button'));
        btn.id = 'check';
        let i = d.appendChild(document.createElement('i'));
        i.id = "icons";
        i.className = 'fas fa-trash';
        i.innerText = ""

        let c = document.querySelector('#main');
        c.appendChild(div);

        i.addEventListener('click', function () {
            div.remove();
        });

        btn.addEventListener('click', function () {
            if (p.style.textDecoration === 'line-through') {
                p.style.textDecoration = 'none';
                btn.style.backgroundColor = 'salmon';
            } else {
                p.style.textDecoration = 'line-through';
                btn.style.backgroundColor = 'green';
            }

        });
       
    }
});

let trash = document.querySelectorAll('.fas.fa-trash');
trash.forEach(function (t) {
    t.addEventListener('click', function () {
        t.parentElement.parentElement.remove();
    });
});


let button = document.querySelector('#check'); // Select the 'check' button using its ID
button.addEventListener('click', function () {
    let p = button.parentElement.parentElement.querySelector('#text'); // Select the 'text' span using its ID
    if (p.style.textDecoration === 'line-through') {
        p.style.textDecoration = 'none';
        button.style.backgroundColor = 'salmon';

    } else {
        p.style.textDecoration = 'line-through';
        button.style.backgroundColor = 'green';

    }

});


