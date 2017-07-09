/**
 * Created by scott on 2017/7/8.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = new Array;
var table = document.getElementById("aqi-table");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData(){
    var strCity = document.getElementById("aqi-city-input").value.trim();
    var strNum = document.getElementById("aqi-value-input").value.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
    if(!strCity.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名称请输入中文或者英文字符");
        return;
    }
    if (!strNum.match(/^\d+$/)) {
        alert("空气质量请输入整数");
        return;
    }
    aqiData.push([strCity,Number(strNum)]);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    table.innerHTML = "";
    if(table.childElementCount===0){
        var thStr = "<tr>"+"<td>"+"城市"+"</td>"+"<td>"+"空气质量"+"</td>"+"<td>"+"操作"+"</td>"+"</tr>";
        table.innerHTML=thStr;
    }
    for(var i=0;i<aqiData.length;i++){
        var tr=table.appendChild(document.createElement("tr"));
        var newStrCity = document.createElement("td");
        newStrCity.innerText = aqiData[i][0];
        tr.appendChild(newStrCity);
        var newAqiNum = document.createElement("td");
        newAqiNum.innerText = aqiData[i][1];
        tr.appendChild(newAqiNum);
        var del = document.createElement("td");
        del.innerHTML = "<button>"+"删除"+"</button>";
        tr.appendChild(del);
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(tar) {
    // do sth.
    var i,j;
    var tarCity = tar.parentElement.parentElement.firstChild;
    for(i=0;i<table.childElementCount;i++){
        if(aqiData[i][0]=== tarCity.innerHTML){
            j=i;
            break;
        }
    }
    aqiData.splice(j,1);
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").addEventListener("click",addBtnHandle);
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    table.addEventListener("click",function (event) {
        if(event.target&&event.target.nodeName==="BUTTON"){
            delBtnHandle(event.target);
        }
    });

}

init();
