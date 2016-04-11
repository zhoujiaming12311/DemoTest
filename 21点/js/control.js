/**
 * Created by 123 on 2016/4/10.
 */

    var master = document.getElementById('master');
    var gamer = document.getElementById('gamer');
    var get = document.getElementById('get');
    var stop = document.getElementById('stop');
    var restart = document.getElementById('restart');
    var picture = document.getElementById('picture');
    var picM = document.getElementById('pic-master');
    var picG = document.getElementById('pic-gamer');
    var span=document.getElementById('point');

    var tArray = new Array();
    //    console.log(tArray);
    var i;
    //生成 (1-11)随机数 1-A 2-2 3-3 4-4 5-5 ... 10-10 10-J 10-Q 10-K 11-A
    function run() {
    return i = Math.ceil(Math.random() * 11);
}
    //运行
    function play(player) {
    var c = parseInt(player.value);//字符串转化
    if (isNaN(c)) { //开始值是空的时候
    var a = player.value = run();
//            var card = document.createElement('div');
//            card.innerHTML = player.value;
    var pic = 'pic-' + player.id;
    picture = document.getElementById(pic);
    console.log(pic)
//            picture.appendChild(card);
    giveCard(a);

}
    else {
    var a = run();
    if ((a == 11) && (c + a > 21)) { //A既可以当1用也可以当11用,取决于接下来是否爆点
    a = 1;
}
    c += a;

    player.value = c;
//            var card = document.createElement('div');
//            card.innerHTML = a;
    var pic = 'pic-' + player.id;
    picture = document.getElementById(pic);
    console.log(pic)
//            picture.appendChild(card);
    giveCard(a);

}

    if (c > 21) {
    x = master;
//            stop.click();
    alert(player.name + '爆点lose');//超过21点 直接输掉
}


}
    //初始化
    var x;
    function init() {
    //生成二维数组 1-13代表A-K,1-4代表红桃 方片 黑桃 草花

    for (var k = 0; k < 13; k++) {
    tArray[k] = new Array();
    for (var k2 = 0; k2 < 4; k2++) {
    tArray[k][k2] = (k + 1) + ',' + (k2 + 1);
}
}
    //清理内容
    master.value = '';
    gamer.value = '';
    picM.innerHTML = '';
    picG.innerHTML = '';
    //开始时庄闲各两张牌 一张明牌一张暗牌
    x = gamer;
    get.click();
    get.click();
    x = master;
    get.click();
    get.click();
    x = gamer;
}
    function cpu() {
//AI会根据当前点数判断是否跟进,并且尽可能赢得胜利
    while (true) {
    if (parseInt(master.value) < parseInt(gamer.value)) {
    get.click();
    console.log('master get')
}
    else if (parseInt(master.value) == parseInt(gamer.value) && parseInt(master.value) < 18) {
    get.click();
    console.log('master get');
}
    else if (parseInt(master.value) > parseInt(gamer.value)) {
    stop.click();
    console.log('master stop');
    break;
}

}

}
    var fen=0;
    function point(){
    fen+=1;
    span.innerHTML=fen;
//        alert(111)

}
    //停止 闲家先开始如果闲家不要,换庄家抓牌;在庄家不要时比较两者大小.
    function stop1() {
    if (x == gamer) {
    x = master;//闲家结束切换到庄家
    cpu();

}
    else if (x == master) {//庄家结束开始决胜负
    show();
}

}
    function show() {
//        var c = parseInt(player.value);
    var flag=compare(parseInt(gamer.value), parseInt(master.value))
    if(flag==1){ //根据返回值判断是否得分
    point();
}

//        alert(gamer.value+', '+master.value);
}
    //比较大小
    function compare(a, b) {

    if (a <= 21 && b <= 21) {   //爆点的直接输掉比赛
    if (b > a) {
    alert(' 庄家胜利');
    return 0;
}
    else if (b == a) {
    alert('平局');
    return 0;
}
    else if (b < a) {

    alert('闲家胜利' );
    return 1;
}
}
    else {
    if (a > 21) {
    alert(' 庄家胜利' );
    return 0;

}
    else if (b > 21) {
    alert('闲家胜利');
    return 1;

}
}


}
    //发牌
    function giveCard(index) {
    var d = Math.ceil(Math.random() * 4);

    //点数10: 10 J Q K  点数11: A

    if (tArray[index - 1][d - 1] !== undefined) {
    if (index == 10) {
    var e = Math.floor(Math.random() * 4)
    index += e;
}
    if (index == 11) {
    var e = 1;
    index = e;
}

    var num = tArray[index - 1][d - 1];
    var q = new Array();
    q = num.split(',');
    console.log("give" + tArray[index - 1][d - 1]);

    //保证发的牌不重复出现
    picture.innerHTML += '<img src=' + '"img/' + q[0] + '-' + q[1] + '.jpg" id='+'pic-'+q[0]+'-'+q[1]+'>';

    tArray[index - 1].splice(d - 1, 1);//splice删除 同时数组个数相应改变
    console.log("now" + tArray);
}
    else {
    giveCard(index);//如果这张牌要是没有,就从牌库重发一张
//            alert(111)
}

}
    //按钮事件
    stop.onclick = function () {
    stop1();

}
    restart.onclick = function () {
    picture.innerHTML = '';   //清空卡牌
    init();
}
    get.onclick = function () {
    play(x);

}
    //game start
    init();



