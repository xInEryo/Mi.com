
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

