let data = [];
let input = document.getElementById('value-input');
let output = document.getElementById('main-output');

function getData() {
    let value = input.value.trim().split(/[^\u4e00-\u9fa5\da-zA-Z]+/).filter(t => t.length !== 0);
    data = data.concat(value);
}

function render() {
    output.innerHTML = '';
    data.forEach(function (value) {
        let div = document.createElement('div');
        div.setAttribute('class', 'res-div');
        div.innerText = value;
        output.appendChild(div);
    });
}

function queryData() {
    return document.getElementById('query-input').value.trim();
}

function queryRender(str) {
    output.innerHTML = '';
    if (str.length !== 0) {
        data.forEach(function (value) {
            if (str.length !== 0) {
                let value1 = value.replace(new RegExp(str, "g"), "<span class='select'>" + str + "</span>");
                let div = document.createElement('div');
                div.setAttribute('class', 'res-div');
                div.innerHTML = value1;
                output.appendChild(div);
            }
        });
    } else {
        render();
    }
}

function main() {
    document.getElementById('input-btn').addEventListener('click', function () {
        getData();
        render();
    });
    document.getElementById('query-btn').addEventListener('click', function () {
        let str = queryData();
        queryRender(str);
    });
}

main();