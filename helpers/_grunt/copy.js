module.exports = { 
	dev : {
		files: [{
			expand: true,
			cwd: '<%= paths.src %>/bower-components',
			src: ['**/*'],
			dest: '<%= paths.dev %>/bower-components'
 		},{
			expand: false,
			src: ['<%= paths.src %>/js/FormValidation.js'],
			dest: '<%= paths.dev %>/js/FormValidation.js'
 		},{
			expand: false,
			src: ['<%= paths.src %>/templating/pages/contact-form-handler.php'],
			dest: '<%= paths.dev %>/contact-form-handler.php'
 		}]
	},

	dist: {
		files: [{
			cwd: '<%= paths.dev %>/',
			dest: '<%= paths.dist %>',
			expand: true,
			src: ['**']
 		}]
	}
};