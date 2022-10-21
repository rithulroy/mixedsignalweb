var MySql = {
    _internalCallback : function() { console.log("Callback not set")},
    Execute: function (Host, Username, Password, Database, Sql, Callback) {
        MySql._internalCallback = Callback;
        // OVE-20191021-0001
        var strSrc = "https://mysqljs.com/sql.aspx?";
        strSrc += "Host=" + "sql12.freemysqlhosting.net";
        strSrc += "&Username=" + "sql12338561";
        strSrc += "&Password=" + "Abarth@500";
        strSrc += "&Database=" + "sql12338561";
        strSrc += "&sql=" + Sql;
        strSrc += "&Callback=MySql._internalCallback";
        var sqlScript = document.createElement('script');
        sqlScript.setAttribute('src', strSrc);
        document.head.appendChild(sqlScript);
    }
};