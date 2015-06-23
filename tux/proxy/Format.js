Ext.define('Ext.tux.proxy.Format', {
    extend: 'Ext.data.proxy.Ajax',

    alias: 'proxy.format',

	config:{
		reader: {
		    type: 'json',
		    rootProperty : "data",
		    messageProperty: "msg"
		},
		writer:{
			type: "json",
		    encode: true,
		    rootProperty: "data",
		    allowSingle: false
		},
		listeners:{
		    exception : Ext.tux.Failure.Proxy
		}
   
	}
    
});
