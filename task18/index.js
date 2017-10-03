let input = document.getElementById('value-input');
let data = [];

function getData(element) {
    if (element.id === 'left-in') {
        data.unshift(input.value);
    } else if (element.id === 'right-in') {
        data.push(input.value);
    }
    input.value = '';
}

function delData(element) {
    let value = '';
    if (data.length === 0) {
        alert('队列已经为空！');
        return;
    }
    if (element.id = 'left-out') {
        value = data.shift();
    } else if (element.id = 'right-out') {
        value = data.pop();
    }
    alert(value);
}

function delSpecData(value) {
    data = data.filter(item => item !== value);
}

function render() {
    let mainOut = document.getElementById('main-output');
    mainOut.innerHTML = '';
    data.forEach(function (value) {
        let div = document.createElement('div');
        div.setAttribute('class', 'res-div');
        div.innerText = value;
        mainOut.appendChild(div);
    });
}

function main() {
    document.getElementById('input-div').addEventListener('click', function (event) {
        getData(event.target);
        render();
    });
    document.getElementById('output-div').addEventListener('click', function (event) {
        delData(event.target);
        render();
    });
    document.getElementById('main-output').addEventListener('click', function (event) {
        delSpecData(event.target.innerHTML);
        render();
    })
}

main();