	
	var $ = function(id){return document.getElementById(id);}
	var extension;
	function init(){
		extension = chrome.extension.getBackgroundPage();
		Setting = extension.Setting;
		notic = extension.notic;
		var data = {};
		//加载配置数据
		window.onload = function ()
		{
			//data.poc = Setting.getvalues("poc");
			data.url_filter = Setting.getvalues("url_filter");
			exist_url_logs = Setting.getvalues("exist_url_logs");
			//data.page_filter = Setting.getvalues("page_filter");
			//console.log(data.poc);
			//$("Poc").value = data.poc.join("\n");
			$("Url_filter").value = data.url_filter.join("\n");
			$("Url_catch").value=exist_url_logs.join("\n");
			//$("Page_filter").value = data.page_filter.join("\n");

		}
		
		//保存配置
		$("save_btn").onclick=function(){
		
			//data.poc = $("Poc").value;
			data.url_filter = $("Url_filter").value;
			//data.page_filter = $("Page_filter").value;
			if(!data) return alert("Can't null");
			//Setting.setvalues('poc',data.poc.split("\n"));
			Setting.setvalues('url_filter',data.url_filter.split("\n"));
			//Setting.setvalues('page_filter',data.page_filter.split("\n"));
		}

		$("clear_btn").onclick=function(){
			 Setting.setvalues("exist_url_logs",new Array());
			 Setting.setvalues("visited_cache",new Array());
			 $("Url_catch").value="";
		}


	};

	document.addEventListener('DOMContentLoaded', init);

