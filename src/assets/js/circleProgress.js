
// 待完善:把圆形进度条抽出来做成组件
function setProgessbar(max, cur){
    //将传入的参数转换，允许字符串表示的数字
    max =  + max;
    cur =  + cur;
    let ocPercent=cur/max,
        ldeg=ocPercent*360-180-225,
        rdeg=ocPercent*360-225;
    if(typeof oldPercent ==='number' && typeof curPercent ==='number'){
        if(ocPercent>0.5){
            return [0,ldeg];
        }else if(ocPercent<=0.5){
            return [0,rdeg];
        }else{
            return;
        }
    }else{
        return false;
    }
}