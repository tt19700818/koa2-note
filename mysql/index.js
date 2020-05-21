const { query } = require('./query')

async function select() {
    let sql = 'SELECT * FROM book1'
    let data = await query(sql)
    let dataList = JSON.parse(JSON.stringify(data))
    return dataList
}

async function insert() {
    let sql = 'INSERT INTO book1 set ?'
    let id,bookname,title,content
    let value = {
        id: id || 101,
        err: 0,
        bookname: bookname || '默认',
        title: title || '默认' ,
        content: content || '默认'
    }
    let data = await query(sql,value)
}

async function initData() {
    let dataList = await select()
    let insertList = await insert()
    console.log(dataList);
}


initData()