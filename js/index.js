
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


//轮播图

var circle = document.querySelector('.circle');
var swiper_img = document.querySelector('.swiper-img');
var imgLis = swiper_img.querySelector('ul');
var w = document.querySelector('.w');
var swiper_btn_prev = document.querySelector('.swiper-btn-prev');
var swiper_btn_next = document.querySelector('.swiper-btn-next');
var imgWidth = w.offsetWidth;
var num = 0;
//控制小圆圈的变量
var rings = 0;


for (let i = 0; i < imgLis.children.length; i++) {
    var circleLis = document.createElement('a');
    circleLis.setAttribute('index', i);
    circle.appendChild(circleLis);
    circle.children[0].className = 'current';
    circleLis.href = 'javascript:;';
    circleLis.addEventListener('click', function () {
        for (let j = 0; j < circle.children.length; j++) {
            circle.children[j].className = '';
        }
        this.className = 'current';
        let index = this.getAttribute('index');
        animate(imgLis, -index * imgWidth);
        num = index;
        rings = index;
    })
}

var firstImg = imgLis.children[0].cloneNode(true);
imgLis.appendChild(firstImg);
var flag = true;

swiper_btn_prev.addEventListener('click', function () {
    if (flag) {
        flag = false;
        if (num == 0) {
            imgLis.style.left = -(imgLis.children.length - 1) * imgWidth + 'px';
            num = imgLis.children.length - 1;
        }
        num--;
        animate(imgLis, -num * imgWidth, function () {
            flag = true;
        });

        if (rings == 0) {
            rings = imgLis.children.length - 1;
        }
        rings--;
        circleChange();
    }

})
swiper_btn_next.addEventListener('click', function () {
    if (flag) {
        flag = false;
        if (num == imgLis.children.length - 1) {
            imgLis.style.left = 0 + 'px';
            num = 0;
        }
        num++;
        animate(imgLis, -num * imgWidth, function () {
            flag = true;
        });

        rings++;
        if (rings == imgLis.children.length - 1) {
            rings = 0;
        }
        circleChange();
    }
})

function circleChange() {
    for (let i = 0; i < circle.children.length; i++) {
        circle.children[i].className = '';
    }
    circle.children[rings].className = 'current';

}

var timer = setInterval(function () {
    swiper_btn_next.click();
}, 3000)

swiper_img.addEventListener('mouseenter', function () {
    clearInterval(timer);
    timer = null;
    console.log(1);
})
swiper_img.addEventListener('mouseleave', function () {
    timer = setInterval(function () {
        //手动调用点击事件！
        swiper_btn_next.click();
    }, 3000);
})


//工具栏
var tool_bar = document.querySelector('.tool-bar');
tool_bar.addEventListener('click', function () {
    console.log(1);
})
window.addEventListener('resize', function () {
    if (window.innerWidth <= 1460) {
        tool_bar.className = 'tool-bar tool-bar-small';
    } else {
        tool_bar.className = 'tool-bar tool-bar-large';
    }
    console.log(window.innerWidth);
})