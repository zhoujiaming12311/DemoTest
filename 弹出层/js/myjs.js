/**
 * Created by 123 on 2016/4/22.
 */
var body=document.getElementsByTagName('body');
var float=document.createElement('div');

float.className='float';
var btn=document.querySelector('.btn');
btn.onclick=function(){
    float.className='float';
    float.innerHTML='<div class="float-container"></div><div class="float-div" ><div class="float-header">弹出层顶部</div><div class="float-content">弹出层内容</div><div class="float-footer">弹出层页脚</div><div>';
    body[0].appendChild(float);
    var floatContainer=document.querySelector('.float-container');
    floatContainer.onclick=function(){
//            floatContainer=document.querySelector('.float-container');
        float.className="none";
        float.innerHTML="";
    }

}