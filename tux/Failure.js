Ext.define('Ext.tux.Failure',{
	singleton: true,
	
	Ajax: function(response,options){
		if(response.status==404){
			Ext.Msg.alert("错误信息","错误的请求地址。");
		}else if (response.status==500) {
			Ext.Msg.alert("错误信息","服务器内部错误。");		
		}else{
			Ext.Msg.alert("错误信息",Ext.String.format('错误代码：{0}<br\>响应：{1}', response.status ,response.responseText));
		}
	},

	Proxy: function(proxy, response, options, epots){
		if(response.status==200){
			var result=eval("(" + response.responseText + ")"),
				msg=result.msg || "发生错误";
			Ext.Msg.alert("信息",msg);
		}else{
			Ext.tux.Failure.Ajax(response,options);
		}
	}
	
});
