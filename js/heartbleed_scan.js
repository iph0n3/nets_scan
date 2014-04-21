

function heartbleed_scan(host){
	
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