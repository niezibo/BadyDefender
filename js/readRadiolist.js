$(function(){

	function setLocalStorage (){
			if(window.localStorage){
			  window.requestFileSystem(LocalFileSystem.PERSISTENT,0,gotFS,fail);
		   }
	};
	function gotFS(fileSystem){
		    fileSystem.root.getFile("music.json",null,gotFileEntry,fail);
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
				  window.localStorage.setItem("songSource",evt.target.result);
			   };
			  reader.readAsText(file);
		};
		function fail(evt){
			console.log(evt.target.error.code);
			};
	function getLocalStorage(){
		if(window.localStorage){
		   var songSourceString = window.localStorage.getItem("songSource");
		   if(songSourceString ==null)
		   {
			   if(typeof LocalFileSystem == "undefined" )
			   {
				                console.log("Check>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
								window.localStorage.setItem("songSource",radioListCon());
							   songSourceString = window.localStorage.getItem("songSource");
				   
				}else
				{
					
				}

			}
			
				 json = eval("("+songSourceString+")");
				 arr = json.songList;
				 count =0;
				next();
				$("#PalyBtn").click(function(){
					next();
					});
		   }
	};

	getLocalStorage();

	function createAudio(audioUrl){
               		  var audio = document.getElementById("myAudio");
					audio.src = audioUrl;
					audio.play();
		};
	function next(){

					$(".songName").html(arr[count].songName);
					$(".songDetail").html(arr[count].songDetail);
		            createAudio(arr[count].songUrl);	
				    count++;
					if(count==arr.length)
					{
					count=0;	
					}		
		}

});