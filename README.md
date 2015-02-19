grunt-mongo-drop
=========

Grunt task to drop database

Installing
-----------------

    add line with repository to package.json:
    "grunt-mongo-drop": "git+https://github.com/IOKI/grunt-mongo-drop.git"

    and then "npm install"

    next step is to load it into your gruntfile.js:
    grunt.loadTasks('grunt-drop-mongodb');

    specify options grunt.initConfig:
    'mongo-drop': {
                options: {
                    dbname: 'mean-dev',
                    host: 'localhost'
                }
            }

    and then you can use it e.g. grunt.registerTask('drop', ['mongo-drop']);


Options with default values
-----------------

     dbname: null
     host: 'localhost'