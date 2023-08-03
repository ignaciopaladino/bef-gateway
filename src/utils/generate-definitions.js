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
  const findType = definitions.find(
    (definition) =>
      definition.kind === "UnionTypeDefinition" &&
      definition.name.value === type
  );
  if (findType) {
    const name = findType.types[0]?.name?.value;
    return { type: name, fragment: true  };
  }
  return { type, fragment: false  };
};

const getTypeField = (field) => {
  let type;
  if (
    (field.type.kind === "NonNullType" &&
      field.type.type.kind === "NamedType") ||
    (field.type.kind === "ListType" && field.type.type.kind === "NamedType")
  ) {
    type = field.type?.type?.name?.value;
  }
  if (
    (field.type.kind === "ListType" &&
      field.type.type.kind === "NonNullType") ||
    (field.type.kind === "NonNullType" && field.type.type.kind === "ListType")
  ) {
    type = field.type?.type?.type?.name?.value;
  }
  if (
    field.type.kind === "NonNullType" &&
    field.type.type.kind === "ListType" &&
    field.type.type.type.kind === "NonNullType"
  ) {
    type = field.type?.type?.type?.type?.name?.value;
  }
  if (field.type.kind === "NamedType") {
    type = field.type?.name?.value;
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
  const findDefinition = listDefinitios.find(
    (definition) =>
      definition.kind === "ObjectTypeDefinition" &&
      definition.name.value === name
  );
  return findDefinition?.fields?.length || 0;
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
    if (
      definition.kind === "ObjectTypeDefinition" &&
      definition.name.value !== "Query" &&
      definition.name.value !== "Mutation"
    ) {
      arrayDefinitions.entities.push(genereteEntitieField(definition));
    } else if (
      definition.kind === "ObjectTypeDefinition" &&
      definition.name.value === "Query"
    ) {
      generateQueryField(definition, definitios);
    }
  });
  arrayDefinitions.querys = finalResultQuerys;
  return arrayDefinitions;
};

module.exports = {
  generateInfoFromSchema,
};
