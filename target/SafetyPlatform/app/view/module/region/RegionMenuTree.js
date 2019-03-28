/**
 * 树状菜单，显示在主界面的左边
 */
Ext.define('SafetyPlatform.view.module.region.RegionMenuTree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.regionmenutree',
	title : '系统菜单',
	glyph : 0xf0c9,
	rootVisible : false,
	lines : true,
	viewModel : 'main',

	// initComponent : function() {
		
	// 	this.store = Ext.create('Ext.data.TreeStore', {
	// 				root : {
	// 					text : '辖区树状图',
	// 					leaf : false,
	// 					expanded : true
	// 				}
	// 			});
	// 	var menus = this.getViewModel().get('regionMenu');
	// 	var root = this.store.getRootNode();
	// 	console.log('zzz');
	// 	for (var i in menus) {
	// 		var menugroup = menus[i];
	// 		var secondgroup = root.appendChild({//向root中加入一级菜单
	// 					text : menugroup.text,
	// 					expanded : menugroup.expanded,
	// 					icon : menugroup.icon,
	// 					glyph : menugroup.glhpy
	// 				});
	// 		for (var j in secondgroup.items) {
	// 			var secondrecycle = secondgroup.items[j];
	// 			var thirdgroup = {
	// 				moduleId : secondrecycle.text,
	// 				moduleName : secondrecycle.module,
	// 				text : secondrecycle.text,
	// 				leaf : true,
					
	// 			};
	// 			console.log('xxx');
				
	// 			secondgroup.appendChild(thirdgroup);
	// 		}
	// 	}
	// 	this.callParent(arguments);
	// }
	initComponent : function() {
		this.store = Ext.create('Ext.data.TreeStore', {
					root : {
						text : '系统菜单',
						leaf : false,
						expanded : true
					}
				});
		var menus = this.getViewModel().get('regionMenu');
		var root = this.store.getRootNode();
		for (var i in menus) {
			var menugroup = menus[i];
			var menuitem = root.appendChild({
						text : menugroup.text,
						expanded : menugroup.expanded,
						icon : menugroup.icon,
						glyph : menugroup.glhpy
					});
			for (var j in menugroup.items) {
				var menumodule = menugroup.items[j];
				var childnode = {
					moduleId : menumodule.text,
					moduleName : menumodule.module,
					text : menumodule.text,
					leaf : true
				};
				menuitem.appendChild(childnode);
			}
		}
		this.callParent(arguments);
	}

})