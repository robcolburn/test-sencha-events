Ext.application({
	name: 'TheApp'
	,requires: ['Ext.XTemplate', 'Ext.TabPanel', 'Ext.Panel', 'Ext.Button', 'Ext.List', 'Ext.dataview.DataView']
	,controllers: ['Login']
	,launch: function() {
		console.log('TheApp.launch');
		this.fireEvent('appstartup');
	}
});
