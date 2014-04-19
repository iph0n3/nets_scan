function log_write(uri,hole_type)
{
	//var page_filter = Setting.getvalues("page_filter");
	var visited_cache = Setting.getvalues("visited_cache");
	var exist_url_logs = Setting.getvalues("exist_url_logs");
	var exist_url = new Array();

	//var exist_page = page_filter.every(function(element, index, array){
	//if(response.indexOf(element.toLowerCase()) == -1){
	//	return false;
	//	}
	//else{
	//	return true;
	//	}
	//});	
						
	//if(exist_page){

		visited_cache_str=visited_cache.toString();
		
		//console.log(visited_cache_str);

		if(visited_cache_str.indexOf(uri) == -1){
			visited_cache.push(uri);
			Setting.setvalues("visited_cache",visited_cache);
			exist_url.push(new Array(Date.parse(new Date()),uri,hole_type));
			show(hole_type,uri);
			//notic("","Find url:",uri);
		}

		if(exist_url.length>0){
			exist_url_logs = exist_url_logs.concat(exist_url);
			Setting.setvalues("exist_url_logs",exist_url_logs,false);
			var exist_url_notic = exist_url.map(function (element, index, array){return element[1];});
					//show("exist url",exist_url_notic);
					
			exist_url = [];
		}
		//console.log("visited_cache"+visited_cache);
		//console.log(exist_url_logs);
	//}
}