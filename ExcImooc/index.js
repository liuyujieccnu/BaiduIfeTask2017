/**
 * Created by scott on 2017/7/8.
 */
window.onload=function () {
    var mtabs = document.getElementById("tabs");
    var ul = mtabs.getElementsByTagName("ul")[0];
    var li = ul.getElementsByTagName("li");
    var tabs = mtabs.getElementsByTagName("div");
    for(var i= 0;i<li.length;i++){
        li[i].index=i;
        /*li[i].onclick=function () {
            for(var j=0;j<li.length;j++){
                li[j].className=" ";
                tabs[j].className='hide';
            }
            this.className="on";
            tabs[this.index].className="";
        };*/
        li[i].addEventListener('click',function () {
            for(var j=0;j<li.length;j++){
                li[j].className=" ";
                tabs[j].className='hide';
            }
            this.className="on";
            tabs[this.index].className=" ";
        })
    }
}