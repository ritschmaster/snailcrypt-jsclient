module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
    }
  });


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
                     ]);
};
