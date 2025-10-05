

// let js = document.getElementById("js");
// js.onclick = function () {
//     console.log("监控成功确定"); js.style.color = "red"; js.style.fontSize = "2vh"; js.style.boxShadow = "rgba(0, 0, 0, 0.6) 3px 5px 15px"

// }

let meishi = document.getElementById("meishi");
let tanc = document.getElementById("tanc");
let tanc3 = document.getElementById("tanc3");
meishi.onclick = function () {
    tanc.style.display = "flex";
    console.log("触发没")
}
function tancguanbi(e) {
    if( e.target === tanc || e.target === tanc3)
    tanc.style.display = "none";
}
tanc3.onclick = tancguanbi;
tanc.onclick = tancguanbi;

let bj = document.getElementById("bj");
let bjtancx = document.getElementById("bjtancx");
let bjtanc3 = document.getElementById("bjtanc3");
bj.onclick = function () {
    bjtancx.style.display = "flex"; console.log("依然记得生效");
}
bjtanc3.onclick = function () {
    bjtancx.style.display = "none"; console.log("依然记得关闭");
}
bjtancx.onclick = function(e){
    if(e.target === bjtancx)
        bjtancx.style.display = "none";
}



let end = document.getElementById("end");
let endtc = document.getElementById("endtc");
let endtc3 = document.getElementById("endtc3");
end.onclick = function () {
    endtc.style.display = "flex";
    console.log("end弹窗成功");

}

function endtcguanbi(e) {
    if(e.target === endtc)
        endtc.style.display = "none";
}
endtc.onclick = endtcguanbi;

endtc3.onclick = function () {
    endtc.style.display = "none";
    console.log("end弹窗关闭成功");
}

let xinqing = document.getElementById("xinqing");
let xqct = document.getElementById("xqct");
let xqct2 = document.getElementById("xqtc2");
xinqing.onclick = function () {
    console.log("心情弹窗获取");
    xqct.style.display = "flex";

}
xqct2.onclick = function () {
    console.log("心情弹窗关闭");
    xqct.style.display = "none";

}

let yanhua = document.getElementById("yanhua");
let endtc4 = document.getElementById("endtc4");
let yanhuavideo = document.getElementById("yanhuavideo");
endtc4.onclick = function () {
    yanhua.style.display = "flex";
    yanhuavideo.play();
    console.log("烟花播放成功");
}
function guanbi() {
    yanhua.style.display = "none";
}
yanhuavideo.onclick = guanbi;
yanhuavideo.addEventListener('ended', guanbi);


// 国庆放假
let xuanzhe1_input = document.getElementById("xuanzhe1_input");
let xuanzhe2_input = document.getElementById("xuanzhe2_input");
let mg1 = document.getElementById("mg1");
function xuanzhemg1() {
    mg1.style.display = "flex";
}
xuanzhe1_input.addEventListener("click", xuanzhemg1);


// 猫和老鼠
let ep1 = document.getElementById("ep1");
let timex = document.getElementById("timex");
let videov1 = document.getElementById("videov1");

const epx = {
    ep1:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP1.mp4",
    ep2:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP2.mp4",
    ep3:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP3.mp4",
    ep4:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP4.mp4",
    ep5:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP5.mp4",
    ep6:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP6.mp4",
    ep7:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP7.mp4",
    ep8:"video/EP8.mp4",
    ep9:"video/EP9.mp4",
    ep10:"video/EP10.mp4",
    ep11:"video/EP11.mp4",
    ep12:"video/EP12.mp4",
    ep13:"video/EP13.mp4",
    ep14:"video/EP14.mp4",
    ep15:"video/EP15.mp4",
    ep16:"video/EP16.mp4",
    ep17:"video/EP17.mp4",
    ep18:"video/EP18.mp4",
}
let currentVideoId = null;
Object.keys(epx).forEach(function(id){
    let btn = document.getElementById(id);
    if(btn){
        btn.onclick = function(){
            if (currentVideoId !== id){
            videov1.src = epx[id];
            currentVideoId = id;
            }
            timex.style.display = "flex";
            videov1.play();
        }
    }
});

timex.onclick = function(e){
    if(e.target === timex){
        timex.style.display = "none";
        videov1.pause();
    }
}


