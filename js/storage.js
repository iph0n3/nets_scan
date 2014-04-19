
		
	var Setting={};
		
	Setting.getvalues = function(key){
		if(localStorage[key] == undefined){
			return false;
		}
		else{
			return JSON.parse(localStorage[key]);
		}
	
	}
		
	Setting.setvalues = function(key,object,option){
		option=(typeof(option)=="undefined")?true:false; 
		if(option){
			if(isArray(object)){
				object = unique(object);
			}
		}
		localStorage[key] = JSON.stringify(object);
		return true;
	}
	
	function isArray(obj) {   
		return Object.prototype.toString.call(obj) === '[object Array]';    
	} 
	
	//数组去重方法
	var  unique = function(arr) {
		var ret = []
		var hash = {}
 
        for(var i = 0; i < arr.length; i++) {
                var item = arr[i]
                var key = typeof(item) + item
                if(hash[key] !== 1) {
                        ret.push(item)
                        hash[key] = 1
                }
        }
		//数组去除空值
		ret = ret.filter(function(n){return n});
        return ret
	}
	
	
	
