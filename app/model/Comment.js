Ext.define("App.model.Comment", {
    extend: 'Ext.data.Model',
    config: {
    	fields:[
    		{name: "CommentId" , type: "int"},
    		{name: "ProductId" , type: "int"},
    		"Title",
    		{name: "Posttime" , type: "date" , dateFormat: "Y-m-d H:i:s", defaultValue: new Date()},
    		"Content",
    		"User"
    	],
    	validations:[
    		{type: "presence" ,field: "Title"},
		{type: "length" ,field: "Title", max : 255 , min: 4},
    		{type: "presence" ,field: "Content"},
    		{type: "presence" ,field: "User"}
    	],
    	associations:[
    		{type: "belongsTo" , model: "App.model.Product" , foreignKey: "ProductId" }
    	],
    	idProperty: "CommentId"
    }
});
