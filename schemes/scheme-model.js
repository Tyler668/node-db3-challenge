const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

function findSteps(schemeID) {
    return db('steps')
        .join('schemes', 'steps.scheme_id', '=', 'schemes.id')
        .select('schemes.scheme_name', 'steps.*')
        .where({ scheme_id: schemeID })
        .orderBy('step_number')
}

function add(scheme) {
    return db('schemes')
        .insert(scheme, 'id')
        .then(([id]) => {
            return findById(id);
        });
}

function update(scheme, id) {
    return db('schemes')
        .where('id', Number(id))
        .update(scheme);
}

function remove(id) {
    return db('schemes')
        .where('id', Number(id))
        .del();
}