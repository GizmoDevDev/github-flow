function init(args) {
    if (args[2] === undefined) {
        return {
            count: 10,
            message: 'Hello world'
        }
    }
    return {
        const: Number(args[2]),
        message: 'I m best developer'
    }
}

module.exports = init