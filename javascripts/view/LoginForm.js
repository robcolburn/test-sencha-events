Ext.define('TheApp.view.LoginForm', {
    extend: 'Ext.form.Panel'
    ,alias: 'widget.LoginForm'
    ,config: {
		cls: 'login-card'
		,title: 'Login'
		,items: [
			{xtype: 'toolbar', docked: 'top', items: [
				 {xtype: 'spacer'}
				,{xtype: 'button', ui: 'normal', cls: 'show-register', text: 'Sign Up'}
			]}
			,{xtype: 'textfield', name: 'username', placeHolder: 'Username', useClearIcon: true, autoCapitalize: false, allowBlank:false}
			,{xtype: 'passwordfield', name: 'password', placeHolder: 'Password', useClearIcon: true, autoCapitalize: false, allowBlank:false}
			,{xtype: 'button', cls: 'submit-button', text: 'Log In', ui: 'confirm'}
		]
	}
});