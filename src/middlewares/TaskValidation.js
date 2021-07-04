const TaskModel = require("../model/TaskModel")
const { isPast } = require("date-fns")

const TaskValidation = async (req, res, next) => {
    const {macaddress, type, tittle, description, when} = req.body;

    if(!macaddress)
        return res.status(400).json({error: 'macaddress é obrigatório'});
    else if(!type)
        return res.status(400).json({error: 'tipo é obrigatório'});
    else if(!tittle)
        return res.status(400).json({error: 'título é obrigatório'});
    else if(!description)
        return res.status(400).json({error: 'descrição é obrigatório'});
    else if(!when)
        return res.status(400).json({error: 'Data e Hora são obrigatório'});
    else if(isPast(new Date(when)))
        return res.status(400).json({error: 'Escolha uma Data e Hora futura'});
    else {
        let exists;

        exists = await TaskModel.
                            findOne({'when': {'$eq': new Date(when)}, 'macaddress': {'$in': macaddress}});

        if(exists)
            return res.status(400).json({error: 'já existe uma tarefa nesse dia e hoário'});

        next();
    }
}

module.exports = TaskValidation
