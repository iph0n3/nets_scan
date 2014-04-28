	chrome.runtime.onInstalled.addListener(function(){
		//var poc = new Array("admin",".bash_history",".svn/entries","system");
		var url_filter = new Array("163.com","126.com","huihui.cn","youdao.cn","lofter.com","1");
		//var page_filter = new Array("/<title>Index of/i","/.*svn.*/i");
		//if(!Setting.getvalues("poc")) Setting.setvalues("poc",poc);
		if(!Setting.getvalues("url_filter")) Setting.setvalues("url_filter",url_filter);
		//if(!Setting.getvalues("page_filter")) Setting.setvalues("page_filter",page_filter);
		if(!Setting.getvalues("visited_cache")) Setting.setvalues("visited_cache",new Array());
		if(!Setting.getvalues("exist_url_logs")) Setting.setvalues("exist_url_logs",new Array());
	});