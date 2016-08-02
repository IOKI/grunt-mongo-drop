'use strict';

module.exports = function (grunt) {
  return grunt.registerTask('mongo-drop', 'Drop mongodb database.', function () {

    var options,
      mongoose = require('mongoose'),
      done = this.async(),
      db;

    options = this.options(
      {
        databases: [{
          dbname: null,
          host: 'localhost'
        }]
      });

    grunt.verbose.writeflags(options, 'Options');

    for (var i = 0; i < options.databases.length; i++) {

      if (options.databases[i].dbname !== null) {

        grunt.verbose.writeln('dropping: ' + options.databases[i].dbname);

        var connection = mongoose.createConnection('mongodb://' + options.databases[i].host + '/' + options.databases[i].dbname, function (err) {
          if (err) {
            grunt.log.writeln('Could not connect to mongodb, check if mongo is running');
            done(err);
          } else {
            grunt.log.writeln('Open db connection');
            connection.db.dropDatabase(function (err) {
              if (err) {
                grunt.log.writeln('Could not drop database');
                done(err);
              } else {
                grunt.log.writeln('Database dropped');
                done();
              }
            });
          }
        });
      }
    }
  });
};
