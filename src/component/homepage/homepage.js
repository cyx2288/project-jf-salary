/**
 * Created by Qiaodan on 2017/10/10.
 */


//选择天数点击

    function chooseDate(){

    var chooseAllDate=document.getElementsByClassName('date')[0];

    chooseAllDate.addEventListener("click",function(e){

        var evt=e||window.event;

        var thistargetEle=evt.srcElement||evt.target;

        if(thistargetEle.className.indexOf('choosed')<0&&thistargetEle.tagName.toLowerCase()=="p"){

            document.getElementsByClassName('choosed')[0].className="";

            thistargetEle.className="choosed";
        }

    },false)
}


var chooseSalary={

    init:function(details){

        var _this=this;

        if(!details){
            details={}
        }


        var thisMoveCoin=document.getElementsByClassName('move_coin')[0];

        var changeGreenEle=document.getElementsByClassName('green')[0];

        var showChangeNum=document.getElementsByClassName('money_num')[0];//显示金额

        var parentEleWidth=document.getElementsByClassName('move_bar')[0].offsetWidth;//显示总长度

        var salaryTotal=parseFloat(document.getElementsByClassName('max')[0].innerHTML)-parseFloat(document.getElementsByClassName('min')[0].innerHTML);

        showChangeNum.innerHTML=salaryTotal/2+parseFloat(document.getElementsByClassName('min')[0].innerHTML);//初始化金额中间值

        var firstPointX;

        var lastPonintX;

        var moveDis;

        var thisGreenEleWidth;

        var lastcoinMoveDis=0;//缓存上一次移动的距离；

        thisMoveCoin.addEventListener("touchstart",startFn,false);

        thisMoveCoin.addEventListener("touchmove",moveFn,false);

        thisMoveCoin.addEventListener("touchend",endFn,false);


        function startFn(e){

            var evt=e||window.event;

            firstPointX=evt.touches[0].screenX;

            thisGreenEleWidth=changeGreenEle.offsetWidth;

        }

        function moveFn(e){

            var evt=e||window.event;

            evt.preventDefault();

            lastPonintX=evt.touches[0].screenX;

            moveDis=parseFloat(lastPonintX)-parseFloat(firstPointX);//移动距离

            var changeWidth=thisGreenEleWidth+moveDis;//变化宽度

            if(thisGreenEleWidth+moveDis<0){

                changeWidth=0;

            }else if(thisGreenEleWidth+moveDis>parentEleWidth){

                changeWidth=parentEleWidth;

            }
            if(0<=changeWidth&&changeWidth<=parentEleWidth){

                changeGreenEle.style.width=changeWidth+'px';

                var coinMove=parseFloat(lastcoinMoveDis)+parseFloat(moveDis);//钱币应该移动的距离

                var moneyMove;//钱币移动距离

                moneyMoveFn();//临界值判断；防止超出

                translateFn(this);//移动的方法

                moneyShow();//计算金额


                function moneyMoveFn(){

                    if(coinMove>parentEleWidth/2) {//钱币移动的临界值

                        coinMove = parentEleWidth / 2;

                    }else if(coinMove<-parentEleWidth/2){

                        coinMove=-parentEleWidth/2;
                    }

                    if(changeWidth/parentEleWidth>0.95){//金额移动的临界值

                        moneyMove=parentEleWidth/2-30;

                    }else if(changeWidth/parentEleWidth<0.1){//到达最左边

                        moneyMove=-parentEleWidth/2+10;

                    }else {                       //普通情况缓存上一次的值
                        moneyMove=coinMove
                    }
                }

                function translateFn(ele){
                    ele.style.transform='translate3d('+coinMove+'px,0,0)';

                    ele.style.webkitTransform='translate3d('+coinMove+'px,0,0)';

                    showChangeNum.style.transform='translate3d('+moneyMove+'px,0,0)';

                    showChangeNum.style.webkitTransform='translate3d('+moneyMove+'px,0,0)';
                }

                function moneyShow(){

                    var showMoneyNum=(changeWidth/parentEleWidth*salaryTotal).toFixed(0);

                    var thisBalance=showMoneyNum%100;//取模

                    if(thisBalance>=50){//超过50，则加100,否则维持原来整数

                        showMoneyNum=showMoneyNum-thisBalance+100;
                    }else {
                        showMoneyNum=showMoneyNum-thisBalance;
                    }

                    showMoneyNum=showMoneyNum+parseFloat(document.getElementsByClassName('min')[0].innerHTML);

                    showChangeNum.innerHTML=showMoneyNum;

                }

            }



        }

        function endFn(){

            var changeWidth=thisGreenEleWidth+moveDis;

            if(changeWidth>=parentEleWidth){//到达最右边

                lastcoinMoveDis=parentEleWidth/2;


            }else if(changeWidth<=5){//到达最左边

                lastcoinMoveDis=-parentEleWidth/2;


            }else {                       //普通情况缓存上一次的值
                lastcoinMoveDis=lastcoinMoveDis+moveDis;
            }


        }











    }
}



