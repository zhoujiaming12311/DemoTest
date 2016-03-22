/**
 * Created by 123 on 2016/3/22.
 */
var city=document.getElementById('aqi-city-input');
var air=document.getElementById('aqi-value-input');
var button=document.getElementById('add-btn');
var del=document.getElementsByName('delete');
var flag=0;
var index=0;
function submit(s){
    //alert(s)
    if(s==1){
        //alert(city.value+','+air.value);
        var table=document.getElementById('aqi-table');
        //var tr;
        var str=table.innerHTML;
        var nav=document.getElementById('nav');
        if(!nav){
            str=" <tr id='nav'><td>城市</td><td>空气质量</td><td>操作</td> </tr>";
            //table.innerHTML = table.innerHTML+city.value;
            table.innerHTML=str;
        }

        del=document.getElementsByName('delete');
        table.innerHTML=str+" <tr><td>"+city.value+"</td><td>"+air.value+"</td><td><input name='delete' type='button'value='删除'></td></tr>";
        //以下是一段脑残闭包
        var tr= document.getElementsByTagName('tr');
            for(var i=0;i<del.length;i++){
                (function (index){
                    del[index].onclick=function(){
                        table.removeChild(table.childNodes[index]);
                        //alert(index)
                    }
                })(i)

            }
    }
}
function  yanzheng(){
    var str=city.value.toString();
    var str2=air.value.toString();
    if (!str.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert('城市名必须为中英文字符');
        return  0;
    }
    else if(!str2.match(/^\d+$/)){
        alert('空气质量指数必须为整数');
        return 0;
    }
    else {
        return 1;
    }
}


button.onclick=function() {
    flag= yanzheng();
    //alert(flag);
    submit(flag);

}

