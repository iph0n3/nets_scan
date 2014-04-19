//var exist_url = new Array();
//var exist_response = new Array();
//var visited_cache=new Array();
//var poc = Setting.getvalues("poc");
//console.log(poc)
//var url_filter = Setting.getvalues("url_filter");
//var page_filter = Setting.getvalues("page_filter");
//var visited_cache = Setting.getvalues("visited_cache");
//var exist_url_logs = Setting.getvalues("exist_url_logs");

function svn_scan(host){
	//var poc = Setting.getvalues("poc");

	//var xsspoc='\'"/><img src="http://mevar.sinaapp.com/xss.png" onload=alert("xss")>';
	//var page_filter = Setting.getvalues("page_filter");

		

	//for(var j=0;j<poc.length;j++)
	//{
		var url_data=get_domain(host);
		var uri=url_data["url"]+".svn/entries";
		//console.log("uri"+uri);
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					var response = xhr.responseText.toLowerCase();
					//if (response.indexOf())
					//var exist_page = page_filter.every(function(element, index, array){
						//console.log(element.toLowerCase());
						//console.log(response.match(element.toLowerCase()));
					//var match=response.match("/.*svn.*/i");
					//console.log(match);
					//if (match){
						//return true;
						//log_write(uri,"svn泄露");
					var match=response.match(/.*svn/i);
					//console.log(match);
					if (match){
						//return true;
						log_write(uri,"svn泄露");
					}
					else{
						return null;
					}
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
			xhr.open('GET', uri, true);
			xhr.send();
		}
		catch(e){
			console.log("request Error!");
		}
		
	//}
}