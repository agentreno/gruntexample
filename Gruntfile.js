module.exports = function(grunt){
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
         dist: {
            files: {
               'dist/css/bundle.css': ['src/css/*'],
            }
         },
      },
      compass: {
         dist: {
            options: {
               sassDir: 'src/css',
               cssDir: 'src/css',
            },
         },
      },
      cssmin: {
         target: {
            files: {
               'dist/css/bundle.min.css': ['src/css/*']
            },
         },
      },
      watch: {
         files: ['src/**/*'],
         tasks: ['default'],
      },
   });

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-compass');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.registerTask('default', ['compass', 'concat', 'cssmin']);
};
