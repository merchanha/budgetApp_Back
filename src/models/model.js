const db = require('../database/db')

const getBudget = () => {
    return  db.execute("SELECT * FROM budget")
  
}

const addBudget = async (identificador, valor) => {
    const [result, fields] = await db(`INSERT INTO budget ${identificador} = ? ;`,[valor]);
    return [result, fields];
}

const deleteBudget = async (id) => {
    const [result, fields] = await db(`DELETE from budget WHERE id = ? ;`,[id]);
    return [result, fields];
}

module.exports = {getBudget, addBudget, deleteBudget}