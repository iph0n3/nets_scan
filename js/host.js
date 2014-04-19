function parseURL(url) { 
	var a = document.createElement('a'); 
	a.href = url; 
	return { 
		source: url, 
		protocol: a.protocol.replace(':',''), 
		host: a.hostname, 
		port: a.port, 
		query: a.search, 
		params: (function(){ 
			var ret = {}, 
			seg = a.search.replace(/^\?/,'').split('&'), 
			len = seg.length, i = 0, s; 
			for (;i<len;i++) { 
				if (!seg[i]) { continue; } 
			s = seg[i].split('='); 
		ret[s[0]] = s[1]; 
	} 
		return ret; 
	})(), 
	file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1], 
	hash: a.hash.replace('#',''), 
	path: a.pathname.replace(/^([^\/])/,'/$1'), 
	relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1], 
	segments: a.pathname.replace(/^\//,'').split('/') 
	}; 
}


function get_domain(host_url) {
	var url_data={};
	var protocol=parseURL(host_url).protocol;
	//console.log(protocol);
	var host=parseURL(host_url).host;
	var port=parseURL(host_url).port;
    url_data["host"]=host;
    //url_data["port"]=port;
	path=parseURL(host_url).path;
    var file=parseURL(host_url).file;
    var path=path.replace(file,"");
   	if(port){
    	url_data["url"]="http://"+host+":"+port+path;
    }
    else{
    	url_data["url"]="http://"+host+path;
    }
    
    
   	//domain["server"]=analyserver(host,port,"").server;
   	//console.log(url);
	return  url_data;
}