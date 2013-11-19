// JavaScript Document
$(function(){
	//进入详情页面
	
	
	function radioListCon()
	{
		 var Source ="{'baikeList':[{'baikeName':'5步辨小儿肺炎','baikeDetail':'一看发热：体温多在38℃以上，持续两三天；二看咳嗽和呼吸：咳喘较重，呼吸频率增快；三看精神：状态不佳、口唇青紫、烦躁、哭闹或昏睡、抽风；四看食欲：不吃东西，或一吃就哭闹不安；五听胸部：孩子睡着时去上衣，耳朵贴在孩子脊柱两侧的胸壁，听是否有“咕噜儿”的声音。。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/a17f779ddd044859b578/460  alt=>','baikeTime':'2012 / 06 / 28' }, { 'baikeName': '如何训练孩子听力能力','baikeDetail': '建议：1、用打击乐训练孩子手/耳协调和听觉记忆；2、给孩子听故事、音乐、儿歌，然后引导他复述；3、有意识让孩子说颜色、说线路、说偏旁部首等，训练孩子左右脑协调能力。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/d14c866356757698a644/460  alt=>','baikeTime':'2012 / 06 / 28' },{ 'baikeName': '让孩子爱上读书','baikeDetail': '给孩子讲一些知名场景的台词。读给孩子听是让其变得喜欢阅读第一步。许多内容在孩提时代留下了强烈的印象，在长大后仍会清晰地残留在记忆中。虽然朗读书籍很重要，但千万不要有“为了孩子”而这样做的想法，反而是和孩子一起阅读想读的书籍这种做法才更有效果。。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/86689446afa2e05974c2/460  alt=>','baikeTime':'2012 / 06 / 28' },{ 'baikeName': '十个月宝宝成长囧事','baikeDetail': '1.辅食再好也么有捡垃圾吃过瘾！对策：虎口夺食。2.玩尿尿，踩完还要用小手擦擦擦！对策：一起玩水。3.板凳拿起来摔摔摔！对策：人肉保镖。4.摸电视中的人！对策：转移注意力。5.东西抢抢抢，抽屉翻翻翻、床单掀掀掀、手机、相机夺夺夺！应对：配合引导纠正。。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/a5bcdcca1612fffcd8e4/460  alt=>','baikeTime':'2012 / 06 / 28' },{ 'baikeName': '父母育儿的四大坏习惯', 'baikeDetail': '1.边吃饭，边给孩子看电视；2.饭前，给孩子只吃喜欢的肉菜，边吃边玩；3.边吃饭、边让孩子喝牛奶；4.饭前1小时给孩子吃甜食。这些习惯不但会导致孩子食欲下降，长期下去，还会导致胃酸分泌减少，消化吸收功能减弱，身体出现营养不良，发育也受影响。。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/3aba271dee74982149b4/460  alt=>','baikeTime':'2012 / 06 / 28' },{'baikeName': '新妈育儿十宗罪','baikeDetail': '1.带宝宝逛街。2.（2岁以下）带宝宝出远门旅游。3.让宝宝练瑜伽、做健身。4.给宝宝常穿新衣服、只用一次性纸尿裤。5.因为妈妈晚睡，也带着宝宝晚睡。6.让宝宝和爸妈一起玩电脑游戏。7.放纵宝宝饮食。8.带宝宝去听高分贝的摇滚音乐会。9.给宝宝大量补钙。10.给宝宝进补，吃胎盘。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/932a173fb4e1747493e6/460  alt=>','baikeTime':'2012 / 06 / 28'},{'baikeName': '妙招巧治疗宝宝烂嘴角','baikeDetail': '很多孩子觉得嘴巴干了就用舌头舔，导致烂嘴角。这时，妈妈们不应单纯的给孩子降火、喝水。 步入五月后，天气开始变得干燥起来，对脏腑和肌肤娇嫩、体温调节中枢功能不完善的小宝宝来说，很容易出现发烧、烂嘴角、嘴唇干裂。。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/f94b258f5c01a59d5c18/460  alt=>','baikeTime':'2012 / 06 / 28' },{'baikeName': '让宝宝乖乖吃饭的绝招','baikeDetail': '1、在餐中多加宝宝喜欢吃的东西；2、教会宝宝用筷子；3、别在饭桌上骂宝宝；4、让宝宝有饥饿感；5、多表扬。。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/dc991fde8dbd541ce15c/460  alt=>','baikeTime':'2012 / 06 / 28'},{ 'baikeName': '母婴教育','baikeDetail': '家长的这些特征有利于发展孩子的创造力：1.自信，不传染给孩子焦躁的情绪；2.开明豁达，给孩子自由的空间，不对孩子过分干预；3.热情，鼓励并参与孩子的活动；4.尊重孩子，重视孩子说的话，不敷衍或是嘲笑孩子看似幼稚的“发明”或“发现”。。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/54781d1479f33b0e9052/460  alt=>','baikeTime':'2012 / 06 / 28' },{ 'baikeName': '几岁培养宝宝的绘画能力', 'baikeDetail': '孩子在1岁或1岁多已会“涂鸦”；2-3岁开始对形状、颜色产生兴趣；4-5岁开始对实际事物、经历过的事物有了认识并用简单图画绘出；5-6岁时不是画看到的东西，而是画认识的东西，此时的孩子观察力、想象力、表现欲都很高。因此，从2岁半到3岁开始培养孩子的绘画能力最为适宜。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/b471dba523d4d644041a/460  alt=>','baikeTime':'2012 / 06 / 28'},{ 'baikeName': '亲子游戏','baikeDetail': '出生第5周给宝宝换尿布时，拿上硬纸筒，向宝宝宣布：“我要告诉你一个秘密。”然后把纸筒放到宝宝的一只耳朵边，通过这个道具轻声对宝宝说一些简短的话。然后把硬纸筒移到宝宝的另一只耳朵边，告诉他另一个“秘密”。这能够引起宝宝的好奇心，并能让他安静地集中注意力。。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/939fe20061c47411fd98/460  alt=>','baikeTime':'2012 / 06 / 28' },{  'baikeName': '孩子三岁前看电视伤脑', 'baikeDetail': '在法国让3岁前的孩子看电视是非法的。因为过早看电视对大脑会造成不可逆的损伤。看电视不同于看书，后者可以促进发育提高儿童的分析思考能力。而看电视是被动接受的行为，不仅影响视力还会阻碍孩子体会真实世界，限制其想象力。。母婴小百科】www.xyb2c.com<img src=http://t1.qpic.cn/mblogpic/4778bbfea5f00517d6ae/460  alt=>','baikeTime':'2012 / 06 / 28'}]}";
	    return Source;
	};
	function setLocalStorage (){
			if(window.localStorage){
			  window.requestFileSystem(LocalFileSystem.PERSISTENT,0,gotFS,fail);
		   }
	};
	function gotFS(fileSystem){
		    fileSystem.root.getFile("baike.json",null,gotFileEntry,fail);
		};
	function gotFileEntry(fileEntry){
		    fileEntry.file(gotFile,fail);
		};
	function gotFile(file){
		   readAsText(file);
		};
	function readAsText(file){
		   var reader = new FileReader();
		   reader.onloadend = function(evt){
			      console.log("Read as Text");
				  console.log(evt.target.result);
				  window.localStorage.setItem("baikeSource",evt.target.result);
			   };
			   reader.readAsText(file);
		};
		function fail(evt){
			console.log(evt.target.error.code);
			};
	function getLocalStorage(){
		if(window.localStorage){
		   var baikeSourceString = window.localStorage.getItem("baikeSource");
		   if(baikeSourceString ==null)
		   {
			   if(typeof LocalFileSystem == "undefined" )
			   {
				                console.log("Check>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
								window.localStorage.setItem("baikeSource",radioListCon());
							   baikeSourceString = window.localStorage.getItem("baikeSource");
				   
				}else
				{
					
				}

			}
			
				 json = eval("("+baikeSourceString+")");
				 arr = json.baikeList;
				 return arr;
		   }
	};
	
        for(i = 0 ; i < getLocalStorage().length;i++)
		{
			$("#baikeList").append("<li><a href='#page2'>"+getLocalStorage()[i].baikeName+"</a></li>");
		}
		$("#baikeList li").bind("click",function(){
		    $("#baikeDetailSup").html(arr[$(this).index()].baikeName);
		    $("#baikeDetailSub").html(arr[$(this).index()].baikeDetail);
			
		});
	});
