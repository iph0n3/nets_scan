var extension;
function init(){
		extension = chrome.extension.getBackgroundPage();
		Setting = extension.Setting;
		//加载配置数据
		window.onload = function ()
		{
			//var br = document.createElement("br");
			//var mytd1 = document.createElement("td");

			var exist_url_logs = Setting.getvalues("exist_url_logs");
			//console.log(exist_url_logs);
			//document.write("<center> <h2>扫描结果记录</h2></center>");
			//document.write("<center> <h4>ps：暂时使用#后面字段描述漏洞类型。建议在其他浏览器下进行验证操作。</h4></center>");
			//document.write('<table id="xss" border="1" cellpadding="10" width="100%">');
			//document.write('<tr><td>时间</td><td width="900">地址</td><td>漏洞类型</td></tr>');
			for(var i = 0;i<exist_url_logs.length;i++){
				var time = new Date(exist_url_logs[i][0]).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
				
				var mytr = document.createElement("tr");
				var mytd_time = document.createElement("td");
				mytd_time.innerText=time;
				var mytd_url = document.createElement("td");
				mytd_url.innerText=exist_url_logs[i][1];
				var mytd_type=document.createElement("td");
				mytd_type.innerText=exist_url_logs[i][2];

				mytr.appendChild(mytd_time);
				mytr.appendChild(mytd_url);
				mytr.appendChild(mytd_type);

				document.getElementById("holes").appendChild(mytr);
				//document.write('<td>'time)
				//document.write("<tr>Time:"+time+">>><a href=\""+exist_url_logs[i][1]+"\" target=\"_blank\">"+exist_url_logs[i][1]+"</a></tr>");
				
			//	document.write("<br>");
			//}
			//document.write('</table');
		}
	}
		//document.getElementById("holes").appendChild(mytr);

	};

	document.addEventListener('DOMContentLoaded', init);

