function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}else{
					return getComputedStyle(obj,false)[attr];
				}
			}
			//var timer=null;
//		function startMove(obj,attr,iTarget,fn){
//			clearInterval(obj.timer);
//			obj.timer=setInterval(function(){
//				var icur=0;
//				if(attr=='opacity'){
//					 icur=Math.round(parseFloat(getStyle(obj,attr))*100);
//				}
//				else{
//				 icur=parseInt(getStyle(obj,attr));
//				}
//				
//				//var speed=(iTarget-obj.offsetWidth)/8;
//				var speed=(iTarget-icur)/8;
//				speed=speed>0?Math.ceil(speed):Math.floor(speed);
//				//if(obj.offsetWidth==iTarget){
//					if(icur==iTarget){
//					clearInterval(obj.timer);
//					if(fn){
//						fn();
//					}
//				}else{
//					if(attr=='opacity'){
//						obj.style.opacity=(icur+speed)/100;
//					obj.style.filter='alpha(opacity:'+(icur+speed)+')';
//					}
//					//obj.style.width=obj.offsetWidth+speed+'px';
//					else{obj.style[attr]=icur+speed+'px';}				
//				}
//			},30)
//		}
function startMove(obj,json,fn){

	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var flag=true;
		for(var attr in json){
		var icur=0;
				if(attr=='opacity'){
					 icur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}
				else{
				 icur=parseInt(getStyle(obj,attr));
				}
				
				//var speed=(iTarget-obj.offsetWidth)/8;
				var speed=(json[attr]-icur)/8;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				//if(obj.offsetWidth==iTarget){
					if(icur!=json[attr]){
						flag=false;
				}
					if(attr=='opacity'){
						obj.style.opacity=(icur+speed)/100;
					obj.style.filter='alpha(opacity:'+(icur+speed)+')';
					}
					//obj.style.width=obj.offsetWidth+speed+'px';
					else{obj.style[attr]=icur+speed+'px';}				
							
	     }
		if(flag)
		{
			clearInterval(obj.timer);
					if(fn){
						fn();
					}
		}
	},30)
}
