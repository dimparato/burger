var connection=require("./connection.js");

var orm={
    selectAll: function(sendBack){
        var queryString="select * from burgers";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            sendBack(result);
        });
    },
    insertOne: function(burger){
        var queryString="insert into burgers (burger_name) values ('?')";
        console.log(queryString);
        connection.query(queryString, [burger], function(err){
            if (err) throw err;
        });
    },
    updateOne: function(id){
        var queryString="update burgers, set devoured '1', where id '?'";
        connection.query(queryString, [id], function(err){
            if(err) throw err;
        });
    }
};

module.exports=orm;