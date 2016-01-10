module.exports = function(grunt) {

  grunt.initConfig({
	  http:{joke: {
	      options: {
		  url: "http://api.icndb.com/jokes/random?firstName=Bernie&lastName=Sanders",
		  json: true,
		  callback: function(error, response, body) {
		      console.log(body.value.joke);
		      }
	      }
	  }}
  });
  grunt.loadNpmTasks('grunt-http');
  
  grunt.registerTask('default', ['http:joke']);
};