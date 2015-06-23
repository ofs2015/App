Ext.define("App.model.Product", {
    extend: 'Ext.data.Model',
    requires:[
    	'Ext.tux.proxy.Format'
    ],
    
    config: {
		fields:[
			{name: "ProductId" , type: "int"},
			"ProductName",
			{name: "Price" , type: "float" ,defaultValue: 0.00},
			{name: "Stock" , type: "int" ,defaultValue: 0}
		],
		validations:[
			{type: "presence" ,field: "ProductName"}
		],
		associations:[
			{type: "hasMany" , model: "App.model.Comment" }
		],
		idProperty:"ProductId",
		proxy:{
			type: 'format',
			api:{
				read: "data/product.json",
				destroy: "data/product.asp"
			}
		}
    }
});
