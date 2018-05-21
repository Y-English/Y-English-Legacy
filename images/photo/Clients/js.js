var OverH,OverW,ChangeDesc,ChangeH=50,ChangeW=50;
function OpenDiv(_Dw,_Dh,_Desc) {

showBackground(50);

document.getElementById("Loading").innerHTML="";
OverH=_Dh;OverW=_Dw;ChangeDesc=_Desc;
document.getElementById("Loading").style.display='';
document.getElementById("Loading").style.border='1px #DDDDDD solid';
document.getElementById("Loading").style.backgroundColor='';
if(_Dw>_Dh){ChangeH=Math.ceil((_Dh-10)/((_Dw-10)/50))}else if(_Dw<_Dh){ChangeW=Math.ceil((_Dw-10)/((_Dh-10)/50))}
document.getElementById("Loading").style.top=(document.documentElement.clientHeight-10)/2+"px";
document.getElementById("Loading").style.left=(document.documentElement.clientWidth-10)/2+"px";

OpenNow()
}
var Nw=10,Nh=10;
function OpenNow() {
if (Nw>OverW-ChangeW)ChangeW=2;
if (Nh>OverH-ChangeH)ChangeH=2;
Nw=Nw+ChangeW;Nh=Nh+ChangeH;

if(OverW>Nw||OverH>Nh) {
if(OverW>Nw) {
document.getElementById("Loading").style.width=Nw+"px";
document.getElementById("Loading").style.left=(document.documentElement.clientWidth-Nw)/2+"px";
}
if(OverH>Nh) {
document.getElementById("Loading").style.height=Nh+"px";
document.getElementById("Loading").style.top=(document.documentElement.clientHeight-Nh)/2+"px"
}
window.setTimeout("OpenNow()",20)
}else{
Nw=10;Nh=10;ChangeH=50;ChangeW=50;
                document.getElementById("Loading").style.border='1px #DDDDDD solid';
                document.getElementById("Loading").style.backgroundColor='#DDDDDD';
//这里是开始加载时的loading事件,可以插入图片
                document.getElementById("Loading").innerHTML="Loading...";
AjaxGet(ChangeDesc)
}

}

function showBackground(num){

	//var bWidth=parseInt(document.documentElement.scrollWidth);
	//var bHeight=parseInt(document.documentElement.scrollHeight);
	
	var bWidth=document.body.offsetWidth;
    var bHeight=document.body.offsetHeight;
	
	var bgObj=document.createElement("div");
	bgObj.setAttribute('id','bgDiv');
	bgObj.style.position="absolute";
	bgObj.style.top="0";
	bgObj.style.background="#000000";
	bgObj.style.filter="alpha(opacity="+num+");";
	bgObj.style.left="0";
	bgObj.style.width=bWidth + "px";
	bgObj.style.height="100%";
	document.body.appendChild(bgObj);	
	document.body.style.overflow='hidden';
}

function closeWindow()
{
	document.getElementById('Loading').style.display='none';
	if(document.getElementById('bgDiv')!=null){
	document.getElementById('bgDiv').parentNode.removeChild(document.getElementById('bgDiv'));
	}
}

//创建XML对象
function createXMLHttps(){
var ret = null;
try {ret = new ActiveXObject('Msxml2.XMLHTTP')}
catch (e) {
try {ret = new ActiveXObject('Microsoft.XMLHTTP')}
        catch (ee) {ret = null}
}
if (!ret&&typeof XMLHttpRequest !='undefined') ret = new XMLHttpRequest();
return ret;
}

function AjaxGet(URL) {
var xmlhttp = createXMLHttps();
xmlhttp.open("Get",URL,true);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status==404) {document.getElementById("Loading").innerHTML='读取页面失败,文件'+URL+'不存在!';return}
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
document.getElementById("Loading").innerHTML="<div class='colseLoadContent' onclick='closeWindow();'><img src='/statics/images/default/guanbi_d.gif' width='35' height='35' /></div><div class='LoadContent'>"+xmlhttp.responseText+"</div>";
}

}
xmlhttp.send(null);
}