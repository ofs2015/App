Ext.define("App.store.Products", {
    extend: 'Ext.data.Store',

    config: {
    	autoLoad:true,
	    model: 'App.model.Product',
	    syncRemovedRecords: false,
		proxy:{
			type: 'format',
			api:{
				read: "data/products.json",
				destroy: "data/products.asp",
				create: "data/products.asp",
				update: "data/products.asp"
			}
		},
		listeners: {
			load :function( store, records, success, operation, eopts){
				//console.log("Load:",arguments);
			},
			refresh: function(Store,data,eopts){
				//console.log("Refresh:",arguments);
				var commentsStore= Ext.StoreManager.get("Comments");
				commentsStore.setData(data.getAt(0).comments().getData().items);
			}
		},
		remoteSort: true,
		sorters:[
			{property:"ProductName" , direction: "DESC"}
		]
    }
})
