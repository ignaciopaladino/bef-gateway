// const formatString = (str) =>
//   str
//     .split("_")
//     .map((word, index) => {
//       if (index === 0) {
//         return word;
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join("");
const validateType = (type, definitions) => {
    var _a, _b;
    const findType = definitions.find((definition) => definition.kind === "UnionTypeDefinition" &&
        definition.name.value === type);
    if (findType) {
        const name = (_b = (_a = findType.types[0]) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.value;
        return { type: name, fragment: true };
    }
    return { type, fragment: false };
};
const getTypeField = (field) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    let type;
    if ((field.type.kind === "NonNullType" &&
        field.type.type.kind === "NamedType") ||
        (field.type.kind === "ListType" && field.type.type.kind === "NamedType")) {
        type = (_c = (_b = (_a = field.type) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.value;
    }
    if ((field.type.kind === "ListType" &&
        field.type.type.kind === "NonNullType") ||
        (field.type.kind === "NonNullType" && field.type.type.kind === "ListType")) {
        type = (_g = (_f = (_e = (_d = field.type) === null || _d === void 0 ? void 0 : _d.type) === null || _e === void 0 ? void 0 : _e.type) === null || _f === void 0 ? void 0 : _f.name) === null || _g === void 0 ? void 0 : _g.value;
    }
    if (field.type.kind === "NonNullType" &&
        field.type.type.kind === "ListType" &&
        field.type.type.type.kind === "NonNullType") {
        type = (_m = (_l = (_k = (_j = (_h = field.type) === null || _h === void 0 ? void 0 : _h.type) === null || _j === void 0 ? void 0 : _j.type) === null || _k === void 0 ? void 0 : _k.type) === null || _l === void 0 ? void 0 : _l.name) === null || _m === void 0 ? void 0 : _m.value;
    }
    if (field.type.kind === "NamedType") {
        type = (_p = (_o = field.type) === null || _o === void 0 ? void 0 : _o.name) === null || _p === void 0 ? void 0 : _p.value;
    }
    return type;
};
const genereteEntitieField = (definition) => {
    const entity = { name: definition.name.value, fields: [] };
    definition.fields.forEach((field) => {
        const required = field.type.kind === "NonNullType";
        const listType = field.type.kind === "ListType";
        const type = getTypeField(field);
        entity.fields.push({ name: field.name.value, type, required, listType });
    });
    return entity;
};
const findCountFilendsInQuery = (name, listDefinitios) => {
    var _a;
    const findDefinition = listDefinitios.find((definition) => definition.kind === "ObjectTypeDefinition" &&
        definition.name.value === name);
    return ((_a = findDefinition === null || findDefinition === void 0 ? void 0 : findDefinition.fields) === null || _a === void 0 ? void 0 : _a.length) || 0;
};
let finalResultQuerys = [];
const generateQueryField = (querys, definitions) => {
    querys.fields.forEach((query) => {
        const name = query.name.value;
        const { type, fragment } = validateType(getTypeField(query), definitions);
        const required = query.type.kind === "NonNullType";
        const listType = query.type.kind === "ListType";
        const args = [];
        const fieldsCount = findCountFilendsInQuery(type, definitions);
        query.arguments.forEach((argument) => {
            const argName = argument.name.value;
            const argType = getTypeField(argument);
            const argRequired = argument.type.kind === "NonNullType";
            const argListType = argument.type.kind === "ListType";
            args.push({
                name: argName,
                type: argType,
                required: argRequired,
                listType: argListType,
            });
        });
        if (fieldsCount > 0) {
            finalResultQuerys.push({
                name,
                result: { type, fragment, required, listType },
                args,
                fieldsCount,
            });
        }
    });
};
const generateInfoFromSchema = (definitios) => {
    finalResultQuerys = [];
    const arrayDefinitions = { entities: [], querys: [] };
    definitios.forEach((definition) => {
        if (definition.kind === "ObjectTypeDefinition" &&
            definition.name.value !== "Query" &&
            definition.name.value !== "Mutation") {
            arrayDefinitions.entities.push(genereteEntitieField(definition));
        }
        else if (definition.kind === "ObjectTypeDefinition" &&
            definition.name.value === "Query") {
            generateQueryField(definition, definitios);
        }
    });
    arrayDefinitions.querys = finalResultQuerys;
    return arrayDefinitions;
};
module.exports = {
    generateInfoFromSchema,
};
