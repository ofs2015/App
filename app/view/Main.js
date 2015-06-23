Ext.define('App.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
		activeItem:2,
        items: [
            {
                title: '模板121',
                iconCls: 'home',
                styleHtmlContent: true,
                scrollable: true,
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '模板'
                },
                html:"<div id='mainDiv'></div>",
                listeners:{
                	painted:"onPainted"
                },
                onPainted:function(cmp,eOpts){
                	var tpl=new Ext.Template(
                		'<p>{ProductName}</p>',
                		'<p>价格:{Price}</p>',
                		'<p>库存:{Stock}</p>',
                		{
                			compiled:true
                		}
                	);
                	tpl.overwrite('mainDiv',{ProductId:1,ProductName:"zhu",Price:700.00,Stock:10})
                }
            },
            {
                title: '高级模板',
                iconCls: 'action',
                  scrollable: true,
                items: 
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '高级模板'
                 } ,
                html:"<div id='mainDiv1'></div>",
                listeners:{
                	painted:"onPainted"
                },
                 onPainted:function(cmp,eOpts){
                  	var store=Ext.StoreManager.get("Products");
                  	store.on('refresh',this.onRefresh,this,{single:true});
                  	store.load();
                  },
                onRefresh:function(store,data,eopts){
                   var subtpl= new Ext.XTemplate(
						'<tpl for=".">',
							'<div>评论{#}.{data.Title}<div>',
							'<div>{data.User}发表于{data.Posttime:date("Y-m-d H:i:s")}<div>',
							'<div>{data.Content}<div>',
						'</tpl>',
						{
							compiled: true
						}
					);
                	var tpl=new Ext.XTemplate(
                		'<tpl for =".">',
                		'<p>{data.ProductName}</p>',
                		'<tpl if="data.Price <= 1000">',
                			'<p>价格:<span style="color:red;">{data.Price}</span></p>',
                		'<tpl else>',
                			'<p>价格:<span style="color:green;">{data.Price}</span></p>',
                		'</tpl>',
                		'<p>库存:{data.Stock}</p>',
                		'<h3>评论</h3>',
                		'{[this.writeComments(values)]}',
                		'<hr></tpl>',
                		{
                			compiled:true,
	                		writeComments : function(data){
	                			return subtpl.apply(data.comments().getData().items)
	                		}
                		}
                	);
                	tpl.overwrite('mainDiv1',data.items);
                }
            },{
            	title:'数据视图',
            	iconCls: 'star',
                items: 
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '数据视图'
                 } ,
            	xtype:'dataview',
            	store:'Products',
            	selectedCls: 'my-item-selected',
                itemTpl:[
                		'<p>{ProductName}</p>',
                		'<tpl if="Price <= 1000">',
                			'<p>价格:<span style="color:red;">{Price}</span></p>',
                		'<tpl else>',
                			'<p>价格:<span style="color:green;">{Price}</span></p>',
                		'</tpl>',
                		'<p>库存:{Stock}</p>',
                		'<hr>'
                	]
            }
        ]
    }
});
