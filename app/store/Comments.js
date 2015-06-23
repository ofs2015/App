Ext.define("App.store.Comments", {
    extend: 'Ext.data.Store',

    config: {
	    model: 'App.model.Comment',
    	listeners: {
    		load :function( store, records, success, operation, eopts){
    			console.log("Load:",arguments);
    		},
    		
    		refresh: function(Store,data,eopts){
    			console.log("Refresh:",arguments);
    		}
    	}
  
    }
})
