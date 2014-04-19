//var exist_url = new Array();
//var exist_response = new Array();
//var visited_cache=new Array();
//var poc = Setting.getvalues("poc");
//console.log(poc)
//var url_filter = Setting.getvalues("url_filter");
//var page_filter = Setting.getvalues("page_filter");
//var visited_cache = Setting.getvalues("visited_cache");
//var exist_url_logs = Setting.getvalues("exist_url_logs");

function heartbleed_scan(host){
	//var poc = Setting.getvalues("poc");

	//var xsspoc='\'"/><img src="http://mevar.sinaapp.com/xss.png" onload=alert("xss")>';
	//var page_filter = Setting.getvalues("page_filter");

		

	//for(var j=0;j<poc.length;j++)
	//{
		var url_data=get_domain(host);
		//console.log(url_data["host"]);
		var uri=url_data["host"]+"#heart";
		var bleedURL = 'http://bleed-1161785939.us-east-1.elb.amazonaws.com/bleed/' + uri;
		//console.log(bleedURL);
		//console.log("uri"+uri);
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					var response = xhr.responseText.toLowerCase();
					var result = JSON.parse(response);
					//console.log(result);
					if (result.error) {
                     	console.log('[ERR]:' + result.error);
                    }
					if (result.code === 0) {
						log_write("https://"+uri,"心脏滴血漏洞");
					}
					//if (response.indexOf())
					//var exist_page = page_filter.every(function(element, index, array){
						//console.log(element.toLowerCase());
						//console.log(response.match(element.toLowerCase()));
					//var match=response.match("/.*svn.*/i");
					//console.log(match);
					//if (match){
						//return true;
						//log_write(uri,"svn泄露");
					//var match=response.match(/.*svn/i);
					//console.log(match);
					//if (match){
						//return true;
						//log_write(uri,"svn泄露");
					//}
					//else{
					//	return null;
					//}
					//}
					//else{
					//	return null;
					//}
					//});

					//console.log(exist_page)

					//log_write(exist_page,uri,response);
				
				}
			}
		}
		try{
			xhr.open('GET', bleedURL, true);
			xhr.send();
		}
		catch(e){
			console.log("request Error!");
		}
		
	//}
}