// 封装数据库操作

const mysql = require('mysql')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mycrwaler'
})

let query = function(sql,value) {
    return new Promise((resolve,reject) => {
        pool.getConnection(function(err,connection) {
            if(err) {
                reject(err)
            } else {
                connection.query(sql,value,(err,result) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = {
    query
}