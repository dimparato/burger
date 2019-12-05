var connection=require("./connection.js");

var orm={
    selectAll: function(sendBack){
        var queryString="select * from burgers";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            sendBack(result);
        });
    },
    insertOne: function(burger, cb){
        var burgerName = burger.name
        var queryString="insert into burgers (burger_name) values (?)";
        connection.query(queryString, [burgerName], function(err, res){
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(id, cb){
        var queryString="update burgers set devoured = 1 where id = "+id;
        connection.query(queryString, [id], function(err, res){
            if(err) throw err;
            cb(res);
        });
    }
};

module.exports=orm;