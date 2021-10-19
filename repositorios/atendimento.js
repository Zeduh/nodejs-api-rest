const query = require('../infraestrutura/database/queries')

class Atendimento{
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimento SET ?'
        return query(sql, atendimento)
    }

    lista(){
        const sql = 'SELECT * FROM Atendimento'

        return query(sql)
    }
    
    deleta(id){
        const sql = 'DELETE FROM Atendimento WHERE id =?'

        return query(sql, id)
    }
}

module.exports = new Atendimento