Ext.define('TheApp.controller.Login', {
	extend: 'Ext.app.Controller'
	,requires: ['TheApp.view.LoginForm']
	,refs: [
		{ref: 'viewport', selector: 'viewport'}
	]
	,init: function () {
		this.control({
			'LoginForm button': {
				click: function() { console.log('component selector, click') }
				,tap: function() { console.log('component selector, tap') }
			}
			,'button.submit-button': {
				click: function() { console.log('component & class selector, click') }
				,tap: function() { console.log('component & class selector, tap') }
			}
			,'.submit-button': {
				click: function() { console.log('class selector, click') }
				,tap: function() { console.log('class selector, tap') }
			}
			,'.show-register': {
				click: function() { console.log('class selector, click') }
				,tap: function() { console.log('class selector, tap') }
			}
			,'LoginForm': {
				submit:  function() { console.log('component selector, submit') }
			}
			,'.login-form': {
				submit:  function() { console.log('class selector, submit') }
			}
		});
		
	}
	,launch: function (application) {
		this.getViewport().setActiveItem(Ext.create('widget.LoginForm'), {type: 'pop'});
	}
});