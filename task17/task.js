// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    let y = dat.getFullYear();
    let m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}

function randomBuildData(seed) {
    let returnData = {};
    let dat = new Date("2017-09-04");
    let datStr = '';
    for (let i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

let aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
let chartData = initAqiChartData();


// 记录当前页面的表单选项
let pageState = {
    nowSelectCity: "北京",
    nowGraTime: "day"
};

let timeStr = {
    'day': '日',
    'week': '周',
    'month': '月'
};

let color = ['#DB9019', '#5ED5D1', '#1A2D27', '#FF6E97', '#F1AAA6'];

/**
 * 渲染图表
 */
function renderChart() {
    let formChart = document.getElementById('form-chart');
    let legend = document.createElement('legend');
    formChart.innerHTML = '';
    legend.innerHTML = pageState.nowSelectCity + '市' + timeStr[pageState.nowGraTime] + '空气质量统计表';
    formChart.appendChild(legend);
    let charDiv = document.createElement('div');
    charDiv.setAttribute('class', 'aqi-chart-wrap');
    formChart.appendChild(charDiv);
    let i = -1;
    for (let value of chartData[pageState.nowSelectCity][pageState.nowGraTime]) {
        i++;
        let width = 0;
        if (pageState.nowGraTime === 'day') {
            width = 10;
        } else if (pageState.nowGraTime === 'week') {
            width = 50;
        } else if (pageState.nowGraTime === 'month') {
            width = 200;
        }
        let height = value * 450 / 500;
        let valueDiv = document.createElement('div');
        valueDiv.setAttribute('class', 'aqi-div-wrap');
        valueDiv.setAttribute('style', 'background-color:' + color[value % 5] + ';height:' + height + 'px' + ';width:' + width + 'px');

        let tipDiv = document.createElement('div');
        tipDiv.setAttribute('class', 'aqi-tip-wrap');
        let str = '';
        if (pageState.nowGraTime === 'day') {
            str = '<p style="margin-top: 3px">' + chartData[pageState.nowSelectCity]['date'][i] + '<br>' + 'AQI:' + value + '</p>';
        } else if (pageState.nowGraTime === 'month') {
            str = '<p style="margin-top: 3px">' + chartData[pageState.nowSelectCity]['monthStr'][i] + '月<br>' + 'AQI:' + value + '</p>';
        } else if (pageState.nowGraTime === 'week') {
            str = '<p style="margin-top: 3px">' + chartData[pageState.nowSelectCity]['weekStr'][i].split('-')[0] + '月第' + chartData[pageState.nowSelectCity]['weekStr'][i].split('-')[1] + '周<br>' + 'AQI:' + value + '</p>';
        }
        tipDiv.innerHTML = str;
        tipDiv.setAttribute('style', 'display:none');
        valueDiv.appendChild(tipDiv);
        valueDiv.addEventListener('mouseover', function () {
            tipDiv.setAttribute('style', 'display:block');
        });
        valueDiv.addEventListener('mouseout', function () {
            tipDiv.setAttribute('style', 'display:none');
        });
        charDiv.appendChild(valueDiv);
    }
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(item) {
    // 确定是否选项发生了变化
    if (item.value !== pageState.nowGraTime) {
        // 设置对应数据
        pageState.nowGraTime = item.value;
        // 调用图表渲染函数
        renderChart();
    }
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(item) {
    // 确定是否选项发生了变化
    if (item.value !== pageState.nowSelectCity) {
        // 设置对应数据
        pageState.nowSelectCity = item.value;
        // 调用图表渲染函数
        renderChart();
    }
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    let radio = document.getElementsByName('gra-time');
    for (let item of radio) {
        item.addEventListener('click', function () {
            graTimeChange(item);
        });
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    let select = document.getElementById('city-select');
    for (let index in aqiSourceData) {
        let node = document.createElement('option');
        node.innerText = index;
        select.appendChild(node);
    }
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    select.addEventListener('change', function () {
        citySelectChange(select);
    });
}

/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
    let resData = {};
    for (let index in aqiSourceData) {
        let dStr = [];
        let wStr = [];
        let mStr = [];
        let day = [];
        let week = [];
        let month = [];
        let weekCache = [];
        let monthCache = [];
        let monthFlag = -1;
        let weekFlag = -1;
        let wf = 1;
        let firstday = new Date();
        for (let dateStr in aqiSourceData[index]) {
            let item = aqiSourceData[index][dateStr];
            //在day数组中添加每天的AQI数据
            day.push(parseInt(item));
            //构建一个日期对象
            let dateArray = dateStr.split("-");
            let date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
            if (monthFlag === -1 && date.getDay() !== 1) {
                firstday = date;
                wf = 0;
            }
            //在week数组中添加每周的AQI数据平均值
            if (date.getDay() === 1 && weekFlag !== -1) {
                wf += 1;
                week.push(Math.round(weekCache.reduce((total, sum) => total + sum) / weekCache.length));
                weekCache.splice(0, weekCache.length);
            }
            weekCache.push(parseInt(item));
            weekFlag = date.getDay();
            //在month数组中添加每月的AQI数据平均值
            if (date.getDate() === 1 && monthFlag !== -1) {
                month.push(Math.round(monthCache.reduce((total, sum) => total + sum) / monthCache.length));
                monthCache.splice(0, monthCache.length);
                if (date.getDay() === 1) {
                    wf = 1;
                } else
                    wf = 0;
            }

            monthCache.push(parseInt(item));
            monthFlag = date.getDate();
            //在dStr数组中添加日期的字符串
            dStr.push(dateStr);
            //在mStr数组中添加月的字符串，例："1"表示1月
            if (mStr.indexOf(dateArray[1]) === -1) {
                mStr.push(dateArray[1]);
            }
            //在wStr数组中添加周的字符串，例："1-1"表示1月第1周
            if (wStr.indexOf(dateArray[1] + '-' + wf) === -1) {
                wStr.push(dateArray[1] + '-' + wf);
            }
        }
        week.push(Math.round(weekCache.reduce((total, sum) => total + sum) / weekCache.length));
        month.push(Math.round(monthCache.reduce((total, sum) => total + sum) / monthCache.length));
        let weStr = [];
        weStr.push(wStr[0]);
        for (let i = 1; i < wStr.length; i++) {
            if (wStr[i].split('-')[1] !== '0') {
                weStr.push(wStr[i]);
            }
        }
        resData[index] = {
            'day': day,
            'week': week,
            'month': month,
            'date': dStr,
            'weekStr': weStr,
            'monthStr': mStr
        };
    }
    return resData;
}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm();
    initCitySelector();
    initAqiChartData();
    renderChart();
}

init();