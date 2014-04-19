function notic(id,title,msg){
		var opt = {
			type: "basic",
			title: title,
			message: msg.join("\n"),
			iconUrl: "icon.png",
		}

	chrome.notifications.create(id,opt,function(){});
	chrome.notifications.onClosed.addListener(function (id){
	OpenWindow=window.open("", "url", "height=500, width=700,toolbar=no,top=500,left=500,location=no,menubar=no");  
	OpenWindow.document.body.innerHTML="";
	OpenWindow.document.write("<title>Url Address<\/title>");
	OpenWindow.document.write("<ul>");
	for(var i = 0;i<msg.length;i++){ 
		OpenWindow.document.write("<li><a href=\""+msg[i]+"\" target=\"_blank\">"+msg[i]+"</a></li>")
	}	
	OpenWindow.document.write("</ul>");

	});
	};
	
function show(title,content) {
  var notification = window.webkitNotifications.createNotification(
    'icon.png',                      	// The image.
    title, 								// The title.
    content      						// The body.
  );
  notification.show();
}