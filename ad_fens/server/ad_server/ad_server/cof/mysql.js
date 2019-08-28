
// --------------------------common_mysql.js----------------------
let mysql = require('mysql') ;
let conf = require('./config.js');

function create_con(){

    return mysql.createConnection(conf.db);
}

function check_sel(str){
    return new Promise(function (resolve, reject) {
        let sqlCon = create_con();
        sqlCon.connect();
        sqlCon.query(str, function (error, results, fields) {
            if (error) throw error;
            resolve(results);
        });
        sqlCon.end();
    })    
}

exports.check_sel = check_sel ;