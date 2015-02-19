grunt-mongo-drop
=========

Grunt task to drop database

Installing
-----------------

    npm install grunt-mongo-drop-task

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