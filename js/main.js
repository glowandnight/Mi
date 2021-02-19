
window.onload = function () {
    var oPreBtn = document.querySelector('.swiper .pre');
    var oNextBtn = document.querySelector('.swiper .next');
    var oImgItems = document.querySelectorAll('.swiper .imgItem');
    var oCirCleItems = document.querySelectorAll('.swiper .circleItem');
    var oCircleList = document.querySelector('.swiper .circleList');
    var currentImg = 0;

    var oSearch = document.querySelector('#search');
    var oKeywordList = document.querySelector('.keywordList');

    var oCategoryItem = document.getElementsByClassName('categoryItem');
    var oCategoryChild1 = document.querySelector('.categoryChild1');
    var oCategoryChild2 = document.querySelector('.categoryChild2');
    var oCategoryChild3 = document.querySelector('.categoryChild3');
    var oCategoryChild4 = document.querySelector('.categoryChild4');
    var oCategoryChild5 = document.querySelector('.categoryChild5');
    var oCategoryChild6 = document.querySelector('.categoryChild6');
    var oCategoryChild7 = document.querySelector('.categoryChild7');
    var oCategoryChild8 = document.querySelector('.categoryChild8');
    var oCategoryChild9 = document.querySelector('.categoryChild9');
    var oCategoryChild10 = document.querySelector('.categoryChild10');

    var oRemain = document.querySelector('.remain')
    var oMiHour = document.querySelector('.miHour');
    var oMiMinute = document.querySelector('.miMinute');
    var oMiSecond = document.querySelector('.miSecond');

    var oSwiperPre = document.querySelector('.swiperPre');
    var oSwiperNext = document.querySelector('.swiperNext');
    var oSwiperWrapper = document.querySelector('.swiperWrapper');

    var oHouseHot = document.querySelector('.household .hot');
    var oVision = document.querySelector('.vision');
    var oHouseHotBrick = document.querySelector('.household .hotBrick');
    var oVisionBrick = document.querySelector('.visionBrick');

    var oIntelHot = document.querySelector('.intellect .hot');
    var oSecurity = document.querySelector('.security');
    var oGoOut = document.querySelector('.goOut');
    var oIntelHotBrick = document.querySelector('.intellect .hotBrick');
    var oSecurityBrick = document.querySelector('.securityBrick');
    var oGoOutBrick = document.querySelector('.goOutBrick');

    var oCombineHot = document.querySelector('.combine .hot');
    var oEarphone = document.querySelector('.earphone');
    var oCombineHotBrick = document.querySelector('.combine .hotBrick');
    var oEarphoneBrick = document.querySelector('.earphoneBrick')

    var oPartsHot = document.querySelector('.parts .hot');
    var oCharge = document.querySelector('.charge');
    var oPartsHotBrick = document.querySelector('.parts .hotBrick');
    var oChargeBrick = document.querySelector('.chargeBrick');

    var oProductHot = document.querySelector('.product .hot');
    var oOutdoor = document.querySelector('.outdoor');
    var oProductHotBrick = document.querySelector('.product .hotBrick');
    var oOutdoorBrick = document.querySelector('.outdoorBrick');

    var owx = document.querySelector('.wx');
    var omiwx = document.querySelector('.miwx');

    // 轮播事件开始
    oNextBtn.onclick = function () {
        currentImg = currentImg + 1;
        if (currentImg >= oImgItems.length) {
            currentImg = 0;
        }
        renderNumImg();
    }

    oPreBtn.onclick = function () {
        currentImg = currentImg - 1;
        if (currentImg < 0) {
            currentImg = oImgItems.length - 1;
        }
        renderNumImg();
    }

    function renderNumImg() {
        // 初始化，将img列表的active去掉
        oImgItems.forEach(function (item, i) {
            item.classList.remove('active');
        });
        // 初始化，将circle列表中的active去掉
        oCirCleItems.forEach(function (item, i) {
            item.classList.remove('active');
        });
        oImgItems[currentImg].classList.add('active');
        oCirCleItems[currentImg].classList.add('active');
    }

    // oCirCleItems.forEach(function(item,i){
    //     item.onclick = function(){
    //         var index = parseInt(item.id[1]);
    //         currentImg = index;
    //         renderNumImg();
    //     }
    // })

    // for(var i = 0; i < oCirCleItems.length; i++){
    //     oCirCleItems[i].onclick = function(){
    //         var index = parseInt(this.id[1]);
    //         currentImg = index;
    //         renderNumImg();
    //     }
    // }

    // 通过事件代理（冒泡）完成小圆点功能（父元素circleList代理子元素circleItem）
    oCircleList.onclick = function (event) {
        if (event.target.classList.contains('circleItem')) {
            var index = parseInt(event.target.id[1]);
            currentImg = index;
            renderNumImg();
        }
    }

    // 自动向后轮播图片
    setInterval(function () {
        currentImg = currentImg + 1;
        if (currentImg >= oImgItems.length) {
            currentImg = 0;
        }
        // 初始化，将img列表的active去掉
        oImgItems.forEach(function (item, i) {
            item.classList.remove('active');
        });
        // 初始化，将circle列表中的active去掉
        oCirCleItems.forEach(function (item, i) {
            item.classList.remove('active');
        });
        oImgItems[currentImg].classList.add('active');
        oCirCleItems[currentImg].classList.add('active');
    }, 13000);

    // 轮播图事件结束

    // 点击搜索框弹出推荐搜索项或搜索历史
    oSearch.onfocus = function () {
        oKeywordList.classList.remove('hide');
    }
    oSearch.onblur = function () {
        oKeywordList.classList.add('hide');
    }

    // 鼠标移入左侧导航显示产品，移出隐藏产品
    oCategoryItem[0].onmouseover = function () {
        oCategoryChild1.classList.remove('hide');
    }
    oCategoryItem[0].onmouseout = function () {
        oCategoryChild1.classList.add('hide');
    }

    oCategoryItem[1].onmouseover = function () {
        oCategoryChild2.classList.remove('hide');
    }
    oCategoryItem[1].onmouseout = function () {
        oCategoryChild2.classList.add('hide');
    }

    oCategoryItem[2].onmouseover = function () {
        oCategoryChild3.classList.remove('hide');
    }
    oCategoryItem[2].onmouseout = function () {
        oCategoryChild3.classList.add('hide');
    }

    oCategoryItem[3].onmouseover = function () {
        oCategoryChild4.classList.remove('hide');
    }
    oCategoryItem[3].onmouseout = function () {
        oCategoryChild4.classList.add('hide');
    }

    oCategoryItem[4].onmouseover = function () {
        oCategoryChild5.classList.remove('hide');
    }
    oCategoryItem[4].onmouseout = function () {
        oCategoryChild5.classList.add('hide');
    }

    oCategoryItem[5].onmouseover = function () {
        oCategoryChild6.classList.remove('hide');
    }
    oCategoryItem[5].onmouseout = function () {
        oCategoryChild6.classList.add('hide');
    }

    oCategoryItem[6].onmouseover = function () {
        oCategoryChild7.classList.remove('hide');
    }
    oCategoryItem[6].onmouseout = function () {
        oCategoryChild7.classList.add('hide');
    }

    oCategoryItem[7].onmouseover = function () {
        oCategoryChild8.classList.remove('hide');
    }
    oCategoryItem[7].onmouseout = function () {
        oCategoryChild8.classList.add('hide');
    }

    oCategoryItem[8].onmouseover = function () {
        oCategoryChild9.classList.remove('hide');
    }
    oCategoryItem[8].onmouseout = function () {
        oCategoryChild9.classList.add('hide');
    }

    oCategoryItem[9].onmouseover = function () {
        oCategoryChild10.classList.remove('hide');
    }
    oCategoryItem[9].onmouseout = function () {
        oCategoryChild10.classList.add('hide');
    }

    // 小米秒杀倒计时功能
    function miCountdown(time) {
        var nowMs = new Date();
        var endMs = time;
        var Ms = endMs - nowMs;
        if (Ms > 0) {
            oMiSecond.textContent = parseInt(Ms / 1000 % 60);
            if (oMiSecond.textContent <= 9) {
                oMiSecond.textContent = '0' + oMiSecond.textContent;
            }

            oMiMinute.textContent = parseInt(Ms / 1000 / 60 % 60);
            if (oMiMinute.textContent <= 9) {
                oMiMinute.textContent = '0' + oMiMinute.textContent;
            }

            oMiHour.textContent = parseInt(Ms / 1000 / 60 / 60 % 24);
            if (oMiHour.textContent <= 9) {
                oMiHour.textContent = '0' + oMiHour.textContent;
            }
        }
        else {
            window.clearInterval(setInterval(miCountdown, 1000));
            oRemain.innerHTML = '活动结束';
        }
    }
    setInterval(() => {
        miCountdown(new Date(2021, 1, 25, 13, 30, 00));
    }, 1000);

    // 小米秒杀轮播图
    var swiperLength = oSwiperWrapper.getElementsByTagName('li').length;
    // 记录当前显示的是第几组商品
    var oNow = 0
    // 记录是否显示到最后一组商品
    var count = Math.ceil(swiperLength / 4) - 1;

    oSwiperPre.onclick = function(){
        oNow--;
        oNow = Math.max(0, oNow);
        goodstab();
    }

    oSwiperNext.onclick = function(){
        oNow++;
        oNow = Math.min(count, oNow);
        goodstab();
    }
    
    function goodstab(){
        oNow == 0 ? oSwiperPre.classList.add('swiperDisabled') : oSwiperPre.classList.remove('swiperDisabled');
        oNow == count ? oSwiperNext.classList.add('swiperDisabled') : oSwiperNext.classList.remove('swiperDisabled');
        var oTarget = oNow * -992;
        oSwiperWrapper.style.transitionDuration = '1000ms';
        oSwiperWrapper.style.transform = 'translateX(' + oTarget + 'px)';
    }

    // 切换显示的函数
    function changeSHOW(a,b,c,d){
        a.classList.add('tabActive');
        if(b.className.indexOf('tabActive')){
            b.classList.remove('tabActive');
        }
        if(c.className.indexOf('hide')){
            d.classList.add('hide');
            c.classList.remove('hide');
        }
    }

    // 家电区域右上角切换显示区域功能
    oHouseHot.onmouseover = function(){
        changeSHOW(oHouseHot,oVision,oHouseHotBrick,oVisionBrick);
    }
    oVision.onmouseover = function(){
        changeSHOW(oVision,oHouseHot,oVisionBrick,oHouseHotBrick);
    }

    // 智能区域
    oIntelHot.onmouseover = function(){
        oIntelHot.classList.add('tabActive');
        if(oSecurity.className.indexOf('tabActive')){
            oSecurity.classList.remove('tabActive');
        }
        if(oGoOut.className.indexOf('tabActive')){
            oGoOut.classList.remove('tabActive');
        }
        if(oIntelHotBrick.className.indexOf('hide')){
            oSecurityBrick.classList.add('hide');
            oGoOutBrick.classList.add('hide');
            oIntelHotBrick.classList.remove('hide');
        }
    }
    oSecurity.onmouseover = function(){
        oSecurity.classList.add('tabActive');
        if(oIntelHot.className.indexOf('tabActive')){
            oIntelHot.classList.remove('tabActive');
        }
        if(oGoOut.className.indexOf('tabActive')){
            oGoOut.classList.remove('tabActive');
        }
        if(oSecurityBrick.className.indexOf('hide')){
            oIntelHotBrick.classList.add('hide');
            oGoOutBrick.classList.add('hide');
            oSecurityBrick.classList.remove('hide');
        }
    }
    oGoOut.onmouseover = function(){
        oGoOut.classList.add('tabActive');
        if(oIntelHot.className.indexOf('tabActive')){
            oIntelHot.classList.remove('tabActive');
        }
        if(oSecurity.className.indexOf('tabActive')){
            oSecurity.classList.remove('tabActive');
        }
        if(oGoOutBrick.className.indexOf('hide')){
            oIntelHotBrick.classList.add('hide');
            oSecurityBrick.classList.add('hide');
            oGoOutBrick.classList.remove('hide');
        }
    }

    // 搭配区域
    oCombineHot.onmouseover = function(){
        changeSHOW(oCombineHot,oEarphone,oCombineHotBrick,oEarphoneBrick);
    }
    oEarphone.onmouseover = function(){
        changeSHOW(oEarphone,oCombineHot,oEarphoneBrick,oCombineHotBrick);
    }

    // 配件区域
    oPartsHot.onmouseover = function(){
        changeSHOW(oPartsHot,oCharge,oPartsHotBrick,oChargeBrick);
    }
    oCharge.onmouseover = function(){
        changeSHOW(oCharge,oPartsHot,oChargeBrick,oPartsHotBrick);
    }

    // 周边区域
    oProductHot.onmouseover = function(){
        changeSHOW(oProductHot,oOutdoor,oProductHotBrick,oOutdoorBrick);
    }
    oOutdoor.onmouseover = function(){
        changeSHOW(oOutdoor,oProductHot,oOutdoorBrick,oProductHotBrick);
    }

    // 页脚微信二维码
    owx.onmouseover = function(){
        if(omiwx.className.indexOf('hide')){
            omiwx.classList.remove('hide');
        }
    }
    owx.onmouseout = function(){
        if(omiwx.className.indexOf('hide') != true){
            omiwx.classList.add('hide');
        }
    }
}