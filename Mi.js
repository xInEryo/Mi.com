
//家电选项卡
var tabLis = document.querySelector('.tab-list').querySelectorAll('li');
var items = document.querySelector('.box-bd').querySelectorAll('.next');

for (var i = 0; i < tabLis.length; i++) {
    tabLis[i].setAttribute('index', i);
    tabLis[i].onmouseover = function () {
        for (var j = 0; j < tabLis.length; j++) {
            tabLis[j].className = '';
            items[j].style.display = 'none';
        }
        this.className = 'tab-active';
        items[this.getAttribute('index')].style.display = 'block';
    }
}

//智能选项卡

var tabLis_zn = document.querySelector('.box-zn').querySelector('.tab-list').querySelectorAll('li');
var items_zn = document.querySelector('.box-zn').querySelector('.box-bd').querySelectorAll('.next');

for (var i = 0; i < tabLis_zn.length; i++) {
    tabLis_zn[i].setAttribute('index', i);
    tabLis_zn[i].onmouseover = function () {
        for (var j = 0; j < tabLis_zn.length; j++) {
            tabLis_zn[j].className = '';
            items_zn[j].style.display = 'none';

        }
        this.className = 'tab-active';
        items_zn[this.getAttribute('index')].style.display = 'block';
    }
}

//搭配选项卡

var tabLis_dp = document.querySelector('.box-dp').querySelector('.tab-list').querySelectorAll('li');
var items_dp = document.querySelector('.box-dp').querySelector('.box-bd').querySelectorAll('.next');

for (var i = 0; i < tabLis_dp.length; i++) {
    tabLis_dp[i].setAttribute('index', i);
    tabLis_dp[i].onmouseover = function () {
        for (var j = 0; j < tabLis_dp.length; j++) {
            tabLis_dp[j].className = '';
            items_dp[j].style.display = 'none';

        }
        this.className = 'tab-active';
        items_dp[this.getAttribute('index')].style.display = 'block';
    }
}

//配件选项卡
var tabLis_pj = document.querySelector('.box-pj').querySelector('.tab-list').querySelectorAll('li');
var items_pj = document.querySelector('.box-pj').querySelector('.box-bd').querySelectorAll('.next');

for (var i = 0; i < tabLis_pj.length; i++) {
    tabLis_pj[i].setAttribute('index', i);
    tabLis_pj[i].onmouseover = function () {
        for (var j = 0; j < tabLis_pj.length; j++) {
            tabLis_pj[j].className = '';
            items_pj[j].style.display = 'none';

        }
        this.className = 'tab-active';
        items_pj[this.getAttribute('index')].style.display = 'block';
    }
}

//周边选项卡

var tabLis_zb = document.querySelector('.box-zb').querySelector('.tab-list').querySelectorAll('li');
var items_zb = document.querySelector('.box-zb').querySelector('.box-bd').querySelectorAll('.next');

for (var i = 0; i < tabLis_zb.length; i++) {
    tabLis_zb[i].setAttribute('index', i);
    tabLis_zb[i].onmouseover = function () {
        for (var j = 0; j < tabLis_zb.length; j++) {
            tabLis_zb[j].className = '';
            items_zb[j].style.display = 'none';

        }
        this.className = 'tab-active';
        items_zb[this.getAttribute('index')].style.display = 'block';
    }
}