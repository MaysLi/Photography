/**
 * Created by Administrator on 2018/6/19.
 */
/*菜单*/
$(function(){
    $("#fda").click(function(){
        $("#fdr").css("right","0").toggle();
        $("#sel li").mouseenter(function(){
            $(this).find("div").show().animate({"width":"270px"},300);
        });
        $("#sel li").mouseleave(function(){
            $(this).find("div").hide().animate({"width":"0"},0);
        });
    });
});

/*----------------------------------------------------------------滚动-------------------------------------------------------------------------------*/
//$(function(){
//    var i = 1;
//    $(function(){
//        $("#right").click(function(){
//            var left = $("#imgb").css("left");
//            left = parseInt(left) - $("#imgb").find("a").width();
//            if( i < $("#imgb").find("li").length){
//                i++;
//                $("#imgb").animate({"left":left + "px"},1000);
//            }else if( i = $("#imgb").find("li").length){
//
//            }
//        });
//        $("#left").click(function(){
//            var left = $("#imgb").css("left");
//            left = parseInt(left) + $("#imgb").find("a").width();
//            if(i >= 1){
//                i--;
//                $("#imgb").animate({"left":left + "px"},1000);
//            }
//        });
//
//    });
//});
$(function(){
    $("#right").click(function(){
        $("#imgb li").first().remove().appendTo('#imgb');
        $("#imgb li").slice(0,3).show();
        $("#imgb li").slice(3).hide();
    });
    $("#left").click(function(){
        $("#imgb li").last().remove().prependTo("#imgb");
        $("#imgb li").slice(0,3).show();
        $("#imgb li").slice(3).hide();
    });
});


/*---------------------------------------------------------------------关于我们-----------------------------------------------------------------------*/
$(function(){
    $(".dp").hover(
        function(){
            $(this).animate({"bottom":"20px"},300);
            $(this).find(".bt").show().animate({"width":"300px"},300);
        },
        function(){
            $(this).animate({"bottom":"0"},300);
            $(this).find(".bt").hide().animate({"width":"0"},300);
        }
    );
    $(".dp").hover(
        function(){
            $(this).animate({"bottom":"20px"},300);
            $(this).find(".bt").show().animate({"width":"300px"},300);
        },
        function(){
            $(this).animate({"bottom":"0"},300);
            $(this).find(".bt").hide().animate({"width":"0"},300);
        }
    );
});

/*---------------------------------------------------------------------------服务案例-----------------------------------------------------------------*/

$(function(){
    $('#cse li').click(function(){
        $('#cse li a').removeClass("csa1");
        $(this).find("a").addClass("csa1");
        var now = $(this).index();
        $('#ct li').eq(now).show()
            .siblings().hide();
    });
});


/*----------------------------------------------------------------------业内资讯---------------------------------------------------------------------*/

$(function(){
    $("#con .fse li").find("a").hover(
        function(){
            $(this).parent().find(".ove1").animate({"left":"-10px"},300);
            $(this).parent().find(".name").animate({"bottom":"-18px"},300);
            $(this).parent().find(".na1").animate({"bottom":"-12px"},300);
            $(this).parent().find(".np").animate({"bottom":"-8px"},300);
            $(this).parent().find(".nd").animate({"bottom":"-20px"},300);
        },
        function(){
            $(this).parent().find(".ove1").animate({"left":"0"},300);
            $(this).parents().find(".name").animate({"bottom":"0"},300);
            $(this).parents().find(".na1").animate({"bottom":"0"},300);
            $(this).parents().find(".np").animate({"bottom":"0"},300);
            $(this).parents().find(".nd").animate({"bottom":"0"},300);
        }
    );

    $('#cse li').click(function(){
        $('#cse li a').removeClass("csa1");
        $(this).find("a").addClass("csa1");
        var now = $(this).index();
        $('#fce ul').eq(now).show()
            .siblings().hide();
    });
});

/*---------------------------------------------------------------------联系我们----------------------------------------------------------------------*/

$(function(){
    $("#itemL").click(function(){
        $("#leftB").animate({left:"0"},300);
        $(this).find("a").addClass("ia1");
        $("#itemR").find("a").removeClass("ia1");
        $("#getl").show();
        $("#input").hide();
    });
    $("#itemR").click(function(){
        $("#leftB").animate({left:"50%"},300);
        $(this).find("a").addClass("ia1");
        $("#itemL").find("a").removeClass("ia1");
        $("#input").show();
        $("#getl").hide();
    });
});




/*地图*/

//创建和初始化地图函数：
function tit(){
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
    }
//创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.95705,38.319702);//定义一个中心点坐标
        map.centerAndZoom(point,11);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
//地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
//地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }
    initMap();//创建和初始化地图
}
$(function(){
    $("#dno").click(function(){
        if($(".dto").css("display") == 'none'){
            $(".dto").slideDown();
        }else{
            $(".dto").slideUp();
        }

        //$("#dno").find("#dno .n").addClass('background','url(../img/on.jpg)');
        $("#dno .n .nimg").css("display","none");
        $("#dno .n .nn").css("display","block");
    });
});
//$(function(){
//    $("#dno").click(function(){
//        $(".dto").animate({"height":"350px"},500);
//    });
//});
/*---------------------------------------------------------------------照片墙--------------------------------------------------------------------*/

//放大镜
$(function(){
    //1.鼠标移入小图片效果
    $('#goodsPic .smallPicList li').mouseenter(function(){
        var n = $(this).index();//当前对象索引值
        $(this).addClass('active').siblings().removeClass('active');
        $('#goodsPic .bigPicList li').eq(n).show()
            .siblings().hide();
        $('#goodsPic .middlePicList li').eq(n).show()
            .siblings().hide();
    });
    //2.鼠标移入遮罩层
    $('#maskLayer').mouseenter(function(){
        //显示浮动层
        $('#floatLayer').show();
        //显示大图片列表
        $('#goodsPic .bigPicList').show();
    });
    //3.鼠标移出遮罩层
    $('#maskLayer').mouseleave(function(){
        //隐藏浮动层
        $('#floatLayer').hide();
        //隐藏大图片列表
        $('#goodsPic .bigPicList').hide();
    });
    //4.鼠标在遮罩层中移动
    $('#maskLayer').mousemove(function(event){
        //获取鼠标在遮罩层中的位置,也就是偏移量
        var x = event.offsetX;//左偏移量
        var y = event.offsetY;//上偏移量
        //console.log("左偏移量:"+x+"上偏移量"+y);
        //获取浮动层的宽度和高度
        var fw = $('#floatLayer').width();//浮动层宽度
        var fh = $('#floatLayer').height();//浮动层高度
        //console.log("浮动层宽度:"+fw+"浮动层高度:"+fh);
        //获取遮罩层的宽度和高度
        var mw = $('#maskLayer').width();//遮罩层宽度
        var mh = $('#maskLayer').height();//遮罩层高度
        //console.log("遮罩层宽度:"+mw+"遮罩层高度:"+mh);
        //初始化浮动层位置
        var t = 0;
        var l = 0;
        //设置浮动层位置
        //控制上边界
        if(y<fh/2){t=0;}
        else{ t = y - fh/2;}
        //控制左边界
        if(x<fw/2){l=0;}
        else{ l = x - fw/2;}
        //控制右边界
        if(x>mw-fw/2){l = mw - fw;}
        //控制下边界
        if(y>mh-fh/2){t = mh - fh;}
        //定位浮动层
        $('#floatLayer').offset({top:t,left:l});
        //计算相对位置
        var prex = l/(mw-fw);
        var prey = t/(mh-fh);
        //计算大图片容器的宽度与高度
        var bpw = $('#goodsPic .bigPicList').width();
        var bph = $('#goodsPic .bigPicList').height();
        //计算大图片的宽度和高度
        var biw = $('#goodsPic .bigPicList li img').width();
        var bih = $('#goodsPic .bigPicList li img').height();
        //计算大图片的相对位置，也就是偏移量
        var bl = -(biw - bpw)*prex;
        var bt = -(bih - bph)*prey;
        //定位大图片
        $('#goodsPic .bigPicList li img').css({left:bl,top:bt});

    });


});

/*---------------------------------------------------------------------产品展示-------------------------------------------------------------------*/
$(function(){
    //定义变量并且初始化
    var index	=	0;
    var timer	=	null;
    var size	= 	$('#lunBo ul li').length;
    var speed 	= 	1000;
    //定义展示函数
    function display(index){
        $('#lunBo ul li').eq(index).show()
            .siblings().hide();
        $('#lunBo ol li').eq(index).addClass('active')
            .siblings().removeClass('active');
    }
    //定义轮播函数
    function autoPlay(){
        if(index == size){index = 0;}
        else{index++;}
        display(index);
    }
    //左播放
    function leftPlay(){
        if(index==0){index= size-1;}
        else index--;
        display(index);
    }
    //右播放
    function rightPlay(){
        if(index == size-1){index=0;}
        else index++;
        display(index);
    }
    //设置自动播放
    timer = setInterval(autoPlay,speed);
    //停止播放
    $('#lunBo').mouseenter(function(){clearInterval(timer);});
    //启动播放
    $('#lunBo').mouseleave(function(){timer = setInterval(autoPlay,speed);});
    //上一个
    $('#l_left').click(function(){leftPlay();});
    //下一个
    $('#r_right').click(function(){rightPlay();});
    //单击播放
    $('#lunBo ol li').click(function(){index = $(this).index();display(index);});
    //结束
});

$(function(){
    $("#cn_lt").mouseenter(function(){
        $("#bgl").animate({top:"0"},500);
    });
    $("#bgl").mouseleave(function(){
        $("#bgl").animate({top:"434px"},500);
    });
    $("#cn_rt").mouseenter(function(){
        $("#bgr").animate({top:"0"},500);
    });
    $("#bgr").mouseleave(function(){
        $("#bgr").animate({top:"434px"},500);
    });
});

/*-----------------------------------------------------------------服务优势------------------------------------------------------------------------*/
function tab(){
    var arr1 = [200,75,150,250,155,105,70,80];
    $("#bar li .one").each(function(index, element) {
        var pro = arr1[index];
        $(this).animate({"height":pro},1000);
        $(this).children().html(pro).css("color","#fff");
    });
    var arr2 = [100,150,40,99,200,210,90,40];
    $("#bar li .two").each(function(index, element) {
        var pro = arr2[index];
        $(this).animate({"height":pro},1000);
        $(this).children().html(pro).css("color","#fff");
    });
    var arr3 = [80,50,90,20,60,50,120,55];
    $("#bar li .three").each(function(index, element) {
        var pro = arr3[index];
        $(this).animate({"height":pro},1000);
        $(this).children().html(pro).css("color","#fff");
    });
}





