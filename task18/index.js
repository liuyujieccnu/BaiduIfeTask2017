let input = document.getElementById('value-input');
let data = [34, 46, 45, 34, 78, 32, 76, 37, 98, 23];

function getData(element) {
    if (data.length > 60) {
        alert('队列已满');
        return;
    }
    if (element.id === 'left-in') {
        data.unshift(Number(input.value));
    } else if (element.id === 'right-in') {
        data.push(Number(input.value));
    }
    input.value = '';
}

function delData(element) {
    let value = '';
    if (data.length === 0) {
        alert('队列已经为空！');
        return;
    }
    if (element.id === 'left-out') {
        value = data.shift();
    } else if (element.id === 'right-out') {
        value = data.pop();
    }
    alert(value);
}

function delSpecData(element) {
    data = data.filter((item, index) => index !== Number(element.id));
}

function render(key) {
    let mainOut = document.getElementById('main-output');
    let idNum = 0;
    mainOut.innerHTML = '';
    data.forEach(function (value) {
        let div = document.createElement('div');
        div.setAttribute('class', 'res-div');
        div.setAttribute('id', idNum.toString());
        if (idNum === key) {
            div.setAttribute('style', 'height:' + Number(value) * 5 + 'px;background-color: green');
        } else {

            div.setAttribute('style', 'height:' + Number(value) * 5 + 'px');
        }
        idNum++;
        div.innerText = value;
        mainOut.appendChild(div);
    });
}

function verifyInput() {
    let pattern = /[1-9]\d*/;
    return pattern.test(input.value) && Number(input.value) <= 100 && Number(input.value) >= 10;
}

function outSort() {
    let i = 0;
    let timer = setInterval(function () {
        if (i > data.length) {
            clearInterval(timer);
        }
        for (let j = i; j < data.length; j++) {
            if (data[j] < data[i]) {
                let temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
        }
        render(i);
        i++;
    }, 200);
}

function main() {
    document.getElementById('input-div').addEventListener('click', function (event) {
        if (verifyInput()) {
            getData(event.target);
            render();
        } else {
            alert('请输入10-100的整数');
        }
    });
    document.getElementById('output-div').addEventListener('click', function (event) {
        delData(event.target);
        render();
    });
    document.getElementById('main-output').addEventListener('click', function (event) {
        delSpecData(event.target);
        render();
    });
    document.getElementById('sort-btn').addEventListener('click', function () {
        outSort();
    });
    render();
}

main();