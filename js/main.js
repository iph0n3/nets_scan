chrome.webRequest.onBeforeRequest.addListener(
	function(info){
		if(info.type!="image"&&info.type!="script"&&info.type!="object"&&info.type!="xmlhttprequest"&&info.type!="stylesheet"&&info.type!="other"){
			//console.log(info.url);
			//console.log(info.type);
		    //changeURLPar(info.url);
			url_scan(info.url);
		}
	},
	{
		urls:["http://*/*","https://*/*"]
	},
	[]
);


function url_scan(url)
{
	//console.log("url_filter"+url_filter);
	var url_filter = Setting.getvalues("url_filter");
	var exist_repeat = url_filter.every(function(element, index, array){ 
				
				if(url.indexOf(element.toLowerCase()) == -1){
					
					return true;
					//console.log("true");
				}
				else{
					
					return false;
					//console.log("false");
				}
			});
	if(!exist_repeat)
	{
		//console.log("ok");
		svn_scan(url);
		xsssql_scan(url);
		dir_scan(url);
		phpinfo_scan(url);
		wp_scan(url);
		resin_scan(url);
		if(url.indexOf("https")>=0){
			heartbleed_scan(url);
		}
	}
}