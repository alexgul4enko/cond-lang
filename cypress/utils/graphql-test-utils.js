export const hasOperationName = (req, operationName) => {
    const { body } = req;
    // eslint-disable-next-line no-prototype-builtins
    return body.hasOwnProperty('operationName') && body.operationName === operationName;
};

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
    if (hasOperationName(req, operationName)) {
        req.alias = `gql${operationName}Query`;
    }
};

// Alias mutation if operationName matches
export const aliasMutation = (req, operationName) => {
    if (hasOperationName(req, operationName)) {
        req.alias = `gql${operationName}Mutation`;
    }
};