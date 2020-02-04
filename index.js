module.exports.rules = { 
    "var-length": context => 
        ({ VariableDeclarator: (node) => 
            { 
                if(node.id.name.length < 2){ 
                    context.report(node, 'Variable names should be longer than 1 character');
            }
        } 
        // , more interception points (see https://github.com/estree/estree) 
    }) 
    // more rules 
};