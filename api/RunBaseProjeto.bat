mongod --port 27018 --dbpath C:\Users\Usuario\Documents\projetoIntegrador2\mongo\baseProjeto --auth

rem mongod --port 27018 --dbpath C:\Users\Usuario\Documents\projetoIntegrador2\mongo\baseProjeto

rem mongo --port 27018
rem use baseProjeto

rem db.createUser( {
rem user: "admin",
rem pwd: "admin",
rem roles: [ { role: "userAdminAnyDatabase", db: "admin" },
rem { role: "dbAdminAnyDatabase", db: "admin" },
rem { role: "readWriteAnyDatabase", db: "admin" } ]
rem } );



rem mongo -u "admin" -p "admin" --authenticationDatabase "baseProjeto" --port 27018   ---com autenticação
rem compass e node:  mongodb://admin:admin@localhost:27018/baseProjeto?authSource=baseProjeto