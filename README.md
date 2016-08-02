grunt-mongo-drop
=========

Grunt task to drop database

Installing
-----------------

    npm install grunt-mongo-drop-task

    specify options grunt.initConfig:

        'mongo-drop': {
            options: {
                databases: [{
                    dbname: 'database1',
                    host: 'localhost'
                },
                {
                    dbname: 'database2',
                    host: 'localhost'
                }]
            }
        }

    and then you can use it e.g. grunt.registerTask('drop', ['mongo-drop']);


Options with default values
-----------------

    databases: [{
        dbname: null,
        host: 'localhost'
    }]