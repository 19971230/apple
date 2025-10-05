

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
    ep1:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP1.mp4?q-sign-algorithm=sha1&q-ak=AKIDVmJCGFDe0PV8GOw3qPGOi0xUW-jTSlMBa8MVN1pNQ3JjldQ3iYX3bTspEDxxgxnn&q-sign-time=1759693872;1759697472&q-key-time=1759693872;1759697472&q-header-list=host&q-url-param-list=&q-signature=cf7211ce5700ecc40273e3a492c779dc2230ce28&x-cos-security-token=zYJl7B42FoPdi3tkM1Phx3MfGpOGYoFa6617f522216d4cfb3044469f4d22be03CVnauUp8Zyo2VwQ04KGRNuVXaG_iGQNDuR_lHVGZJRILtx0lnH_otSezvHWpBKOr81uHlv9tDvXeqZscw_d_4TYm3clHgLheLB6mHLiYMHZcXmQXSsUMUcllL6l2RgQ7J1agA_I_bDmJB_gCN9iDmAS_q-ti6ffBF44ZdZfBfMDxV6adFPaQDuiuosk0AXQhzokoEZ5V7oNdJ7AwZ7lQNuQxGLfHpxmpph-siaZGq5dpubus3B230Nq-zbgFq_I19ILhjJrj_tF4o_ZfQnCWJA",
    ep2:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP2.mp4?q-sign-algorithm=sha1&q-ak=AKIDOiNySK3C66jZiKlrAMGtpnCQpBpqmDUecuAW9bLJ-BzfFvTA2fbaqY3tbUGZarmK&q-sign-time=1759693899;1759697499&q-key-time=1759693899;1759697499&q-header-list=host&q-url-param-list=&q-signature=d48c8fe9d57a88537146dffad939e1fac7978485&x-cos-security-token=zYJl7B42FoPdi3tkM1Phx3MfGpOGYoFad503f6f1a122a72793a0a9311c5a6498CVnauUp8Zyo2VwQ04KGRNiRn0oAQEWe0_SUPk5ebSmxsqY0JlwWaj6xccgBT0CpI9bRVsvExVURpWLS9uYvZN6rVNwk1rRJx58CQ7F7Hh8PLN7QivNzph6K7QRJqwdIvoZO0gGzUrulvRI-NaC4W_nXx39kAey3006vi7OGywvVQVTlvm6SyW0PvHnY93F28pkvf21V5e7BAcJ8f8jPElsgKond0Mb4nn0f09kuHM29__kfODcqg0FiLrjAj5Z92GsR8rUED2fAAfV9cPYcGNA",
    ep3:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP3.mp4?q-sign-algorithm=sha1&q-ak=AKIDLmnoXAn5zI0g7Bfkl8ye9ZOMwwPufabvHMcn0BxUW_EjR4-kelSB03iN3S00ttxM&q-sign-time=1759693916;1759697516&q-key-time=1759693916;1759697516&q-header-list=host&q-url-param-list=&q-signature=cc1b4fae165e2a2e87b94d3d4c07038854a8fc92&x-cos-security-token=Fsv3rE83qdSxqiPL1SRvWhvb1i1wL67a1e7ebb6b874feac520736497c0723ae59HbeCmdKs_xXUJ_7d0XrzY2Skgy4E70v7zAka57NoGtlrTZzybrH5zmOYwoFVEm7T9iZk6jAEMUgHri24d0QtUp3cDJZiAxjLIguMgg3mdaTmocqnbHoR-4Tb-XyZzdH6xU0i6Jurb7ZIgaM0GlrzeNgb7tHtLi-B6qxLxlOuS-UD0wOsB4JyeW70imK5ljaFDm_00FHwSl1Mdu8vAaE4zYgr_5mv3bKoWTXxF6SAymtMovxSx4rG3733kVDQ8mqaVJIHBPtd2iJMh5qZrgoeg",
    ep4:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP4.mp4?q-sign-algorithm=sha1&q-ak=AKID0U4XJWV8r5HsIn7bNl18lWu_kCwMXCpDoeSsYaimOAt0nKT4vbF6suBOuJuBDRmx&q-sign-time=1759693942;1759697542&q-key-time=1759693942;1759697542&q-header-list=host&q-url-param-list=&q-signature=09a1f21386f6deace37e1d4d9212b9f989fcc1ff&x-cos-security-token=zYJl7B42FoPdi3tkM1Phx3MfGpOGYoFacf2c063eb75625bc39e98c00aa646b58CVnauUp8Zyo2VwQ04KGRNo3muUx5HwtDg5A1UToLmgySjpkUVlZJM-XIKg84EB8vXbBCk8CTKW_YzhnFzZ-UPY7kqbi4G9ThaU2X2wVD4IL2EzzcxGqaUADGNePl5AU1DKuB-cwKtD7RZuDlxulIJJryBGBIW05kbZQMr8TodEoSovVogNalTDZ1CVkUTfZ9Zht7M8i3Duk8XDzl155teLFOjLOBLba5ZutC32rxYtVOTRi93NcpokAcWhFhBWy5lSUAOz_Vs1ZivuSp6Y3bKA",
    ep5:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP5.mp4?q-sign-algorithm=sha1&q-ak=AKIDzGrLhTjV_8bTbWv0qT3k3v-wtg1M055z78D69zAGt76M0-W1i73YgS9RYLANTyAO&q-sign-time=1759693953;1759697553&q-key-time=1759693953;1759697553&q-header-list=host&q-url-param-list=&q-signature=a8c3843b805470659486d1702625be3f7f6c951a&x-cos-security-token=Fsv3rE83qdSxqiPL1SRvWhvb1i1wL67a58f22033b6fc978c692dded065a145ab9HbeCmdKs_xXUJ_7d0XrzTj0oZ66AwV57C0EEy21e7mOdqC57s6vC9w3w3D9OZ1gTAasaai78a1aQdDgHRSxD7xgJiy_yBarJiCU562ITQAsVMXkeGwx33cXERXnA0KpGU6Bku7iBEwSuiawFGPjDzlla8X_bE_Ln-zXQcMe1RYShy0t2_pMavMldR2oN04eWpFuEmzAusAf-Qx7wke9vfu-_qIvMyTFWLvJRXoFYwENg6KPWngF2zQ3h-FGUmkf3VH0zT7GfTt0-QDMOpc6Qw",
    ep6:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP6.mp4?q-sign-algorithm=sha1&q-ak=AKIDmGUJ2DRIURkMadKwEhQLgUhcmMu6nCiE9oMPKROWyh4wfZ8i9ODe_CEPO51pecJs&q-sign-time=1759693969;1759697569&q-key-time=1759693969;1759697569&q-header-list=host&q-url-param-list=&q-signature=653628d9c3494032d4d405967d07f256f1e4ddc4&x-cos-security-token=Fsv3rE83qdSxqiPL1SRvWhvb1i1wL67ad6b90141c1755f658175c9bfde39bcfd9HbeCmdKs_xXUJ_7d0XrzWZb_IlBe-ZiIKZYkV2wb6gTpRgJ5Hv4mQj3WS9RUQvV8kv77Fau8NApAwFtHDOaDuAsOS2-v_6BEPkQBNAtNgxSXuKvHEwlZxJv4zGoVlSH-4ArkAUXnVXDvq5Wc8Wdf3-MPceBOsVlzml4SaAK00ebHH1f1bXvZZJqGMHlEBhIVNMc3ZIROVL3p9W7e-BmAXYvPJXPM0YZ6EE7tLzxxUnDyWXHsBLJQgvMaV4xDa-mPy48xVZI-yi0AQRaQQ8zCw",
    ep7:"https://zhongqiu-1381679397.cos.ap-guangzhou.myqcloud.com/EP7.mp4?q-sign-algorithm=sha1&q-ak=AKIDcRfxvOKADwJyY7GRlbEmKJulAVFSESpk_w2UBna70wNB0LtdbIQGJ9EDg0mrPAoZ&q-sign-time=1759693989;1759697589&q-key-time=1759693989;1759697589&q-header-list=host&q-url-param-list=&q-signature=b6ccd084da7afdd491304867c758c678b6faf272&x-cos-security-token=zYJl7B42FoPdi3tkM1Phx3MfGpOGYoFa22fc5a7c058d1a56d2ed980509bb6dfeCVnauUp8Zyo2VwQ04KGRNjDiS1RRycE2kdBBCxX2Rlct8otZxxZHagPbymceOT6iFqNPmJQoAWYGp4chEOZn-lwcKEi4Z9F5c4MuRv4yCQyo4OkEfoCqvP469uZKGbHEamiM-B32nMSLs3sIakIkNaRBZpzMmBRytgIQtGAGQriM5p1azchGTOchDdgYHNNdMuX6v66ylnpOEmCWERr51xlC6FtLxjht3RidVe2bIH_OZVFbs14yq74tu7245_T6MuVmgDmKgx7KnI9K9D3hWw",
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


