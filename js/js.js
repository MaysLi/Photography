/**
 * Created by Administrator on 2018/6/19.
 */
/*�˵�*/
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

/*----------------------------------------------------------------����-------------------------------------------------------------------------------*/
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


/*---------------------------------------------------------------------��������-----------------------------------------------------------------------*/
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

/*---------------------------------------------------------------------------������-----------------------------------------------------------------*/

$(function(){
    $('#cse li').click(function(){
        $('#cse li a').removeClass("csa1");
        $(this).find("a").addClass("csa1");
        var now = $(this).index();
        $('#ct li').eq(now).show()
            .siblings().hide();
    });
});


/*----------------------------------------------------------------------ҵ����Ѷ---------------------------------------------------------------------*/

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

/*---------------------------------------------------------------------��ϵ����----------------------------------------------------------------------*/

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




/*��ͼ*/

//�����ͳ�ʼ����ͼ������
function tit(){
    function initMap(){
        createMap();//������ͼ
        setMapEvent();//���õ�ͼ�¼�
        addMapControl();//���ͼ��ӿؼ�
    }
//������ͼ������
    function createMap(){
        var map = new BMap.Map("dituContent");//�ڰٶȵ�ͼ�����д���һ����ͼ
        var point = new BMap.Point(116.95705,38.319702);//����һ�����ĵ�����
        map.centerAndZoom(point,11);//�趨��ͼ�����ĵ�����겢����ͼ��ʾ�ڵ�ͼ������
        window.map = map;//��map�����洢��ȫ��
    }
//��ͼ�¼����ú�����
    function setMapEvent(){
        map.enableDragging();//���õ�ͼ��ק�¼���Ĭ������(�ɲ�д)
        map.enableScrollWheelZoom();//���õ�ͼ���ַŴ���С
        map.enableDoubleClickZoom();//�������˫���Ŵ�Ĭ������(�ɲ�д)
        map.enableKeyboard();//���ü����������Ҽ��ƶ���ͼ
    }
//��ͼ�ؼ���Ӻ�����
    function addMapControl(){
        //���ͼ��������ſؼ�
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //���ͼ���������ͼ�ؼ�
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //���ͼ����ӱ����߿ؼ�
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }
    initMap();//�����ͳ�ʼ����ͼ
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
/*---------------------------------------------------------------------��Ƭǽ--------------------------------------------------------------------*/

//�Ŵ�
$(function(){
    //1.�������СͼƬЧ��
    $('#goodsPic .smallPicList li').mouseenter(function(){
        var n = $(this).index();//��ǰ��������ֵ
        $(this).addClass('active').siblings().removeClass('active');
        $('#goodsPic .bigPicList li').eq(n).show()
            .siblings().hide();
        $('#goodsPic .middlePicList li').eq(n).show()
            .siblings().hide();
    });
    //2.����������ֲ�
    $('#maskLayer').mouseenter(function(){
        //��ʾ������
        $('#floatLayer').show();
        //��ʾ��ͼƬ�б�
        $('#goodsPic .bigPicList').show();
    });
    //3.����Ƴ����ֲ�
    $('#maskLayer').mouseleave(function(){
        //���ظ�����
        $('#floatLayer').hide();
        //���ش�ͼƬ�б�
        $('#goodsPic .bigPicList').hide();
    });
    //4.��������ֲ����ƶ�
    $('#maskLayer').mousemove(function(event){
        //��ȡ��������ֲ��е�λ��,Ҳ����ƫ����
        var x = event.offsetX;//��ƫ����
        var y = event.offsetY;//��ƫ����
        //console.log("��ƫ����:"+x+"��ƫ����"+y);
        //��ȡ������Ŀ�Ⱥ͸߶�
        var fw = $('#floatLayer').width();//��������
        var fh = $('#floatLayer').height();//������߶�
        //console.log("��������:"+fw+"������߶�:"+fh);
        //��ȡ���ֲ�Ŀ�Ⱥ͸߶�
        var mw = $('#maskLayer').width();//���ֲ���
        var mh = $('#maskLayer').height();//���ֲ�߶�
        //console.log("���ֲ���:"+mw+"���ֲ�߶�:"+mh);
        //��ʼ��������λ��
        var t = 0;
        var l = 0;
        //���ø�����λ��
        //�����ϱ߽�
        if(y<fh/2){t=0;}
        else{ t = y - fh/2;}
        //������߽�
        if(x<fw/2){l=0;}
        else{ l = x - fw/2;}
        //�����ұ߽�
        if(x>mw-fw/2){l = mw - fw;}
        //�����±߽�
        if(y>mh-fh/2){t = mh - fh;}
        //��λ������
        $('#floatLayer').offset({top:t,left:l});
        //�������λ��
        var prex = l/(mw-fw);
        var prey = t/(mh-fh);
        //�����ͼƬ�����Ŀ����߶�
        var bpw = $('#goodsPic .bigPicList').width();
        var bph = $('#goodsPic .bigPicList').height();
        //�����ͼƬ�Ŀ�Ⱥ͸߶�
        var biw = $('#goodsPic .bigPicList li img').width();
        var bih = $('#goodsPic .bigPicList li img').height();
        //�����ͼƬ�����λ�ã�Ҳ����ƫ����
        var bl = -(biw - bpw)*prex;
        var bt = -(bih - bph)*prey;
        //��λ��ͼƬ
        $('#goodsPic .bigPicList li img').css({left:bl,top:bt});

    });


});

/*---------------------------------------------------------------------��Ʒչʾ-------------------------------------------------------------------*/
$(function(){
    //����������ҳ�ʼ��
    var index	=	0;
    var timer	=	null;
    var size	= 	$('#lunBo ul li').length;
    var speed 	= 	1000;
    //����չʾ����
    function display(index){
        $('#lunBo ul li').eq(index).show()
            .siblings().hide();
        $('#lunBo ol li').eq(index).addClass('active')
            .siblings().removeClass('active');
    }
    //�����ֲ�����
    function autoPlay(){
        if(index == size){index = 0;}
        else{index++;}
        display(index);
    }
    //�󲥷�
    function leftPlay(){
        if(index==0){index= size-1;}
        else index--;
        display(index);
    }
    //�Ҳ���
    function rightPlay(){
        if(index == size-1){index=0;}
        else index++;
        display(index);
    }
    //�����Զ�����
    timer = setInterval(autoPlay,speed);
    //ֹͣ����
    $('#lunBo').mouseenter(function(){clearInterval(timer);});
    //��������
    $('#lunBo').mouseleave(function(){timer = setInterval(autoPlay,speed);});
    //��һ��
    $('#l_left').click(function(){leftPlay();});
    //��һ��
    $('#r_right').click(function(){rightPlay();});
    //��������
    $('#lunBo ol li').click(function(){index = $(this).index();display(index);});
    //����
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

/*-----------------------------------------------------------------��������------------------------------------------------------------------------*/
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





