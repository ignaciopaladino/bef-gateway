"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const graphql_1 = require("graphql");
const schemaAST = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "SchemaDefinition",
            "operationTypes": [
                {
                    "kind": "OperationTypeDefinition",
                    "operation": "query",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Query"
                        }
                    }
                },
                {
                    "kind": "OperationTypeDefinition",
                    "operation": "mutation",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Mutation"
                        }
                    }
                }
            ],
            "directives": []
        },
        {
            "kind": "DirectiveDefinition",
            "name": {
                "kind": "Name",
                "value": "oneOf"
            },
            "arguments": [],
            "repeatable": false,
            "locations": [
                {
                    "kind": "Name",
                    "value": "OBJECT"
                },
                {
                    "kind": "Name",
                    "value": "INTERFACE"
                }
            ]
        },
        {
            "kind": "DirectiveDefinition",
            "name": {
                "kind": "Name",
                "value": "statusCodeTypeName"
            },
            "arguments": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "typeName"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "statusCode"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                }
            ],
            "repeatable": true,
            "locations": [
                {
                    "kind": "Name",
                    "value": "UNION"
                }
            ]
        },
        {
            "kind": "DirectiveDefinition",
            "name": {
                "kind": "Name",
                "value": "enum"
            },
            "arguments": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "value"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "repeatable": false,
            "locations": [
                {
                    "kind": "Name",
                    "value": "ENUM_VALUE"
                }
            ]
        },
        {
            "kind": "DirectiveDefinition",
            "name": {
                "kind": "Name",
                "value": "globalOptions"
            },
            "arguments": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "sourceName"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "endpoint"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "operationHeaders"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "queryStringOptions"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "queryParams"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                }
            ],
            "repeatable": false,
            "locations": [
                {
                    "kind": "Name",
                    "value": "OBJECT"
                }
            ]
        },
        {
            "kind": "DirectiveDefinition",
            "name": {
                "kind": "Name",
                "value": "httpOperation"
            },
            "arguments": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "path"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "operationSpecificHeaders"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "httpMethod"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "HTTPMethod"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "isBinary"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Boolean"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "requestBaseBody"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "queryParamArgMap"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "queryStringOptionsByParam"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                }
            ],
            "repeatable": false,
            "locations": [
                {
                    "kind": "Name",
                    "value": "FIELD_DEFINITION"
                }
            ]
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Query"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Ping endpoint, used to know if the app is up."
                    },
                    "name": {
                        "kind": "Name",
                        "value": "ping_ping_get"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/ping"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "List"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "list_teams_get"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "username"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "match"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderTeam"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "TeamOrderEnum"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "limit"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "list_teams_get_response"
                            }
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/teams"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "queryParamArgMap"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"username\":\"username\",\"match\":\"match\",\"orderTeam\":\"orderTeam\",\"limit\":\"limit\"}"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get By Team Code"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "get_by_team_code_teams__team_code__get"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "team_code"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "get_by_team_code_teams__team_code__get_response"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/teams/{args.team_code}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get Teams By Username"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "get_teams_by_username_teams_user__username__get"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "username"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "get_teams_by_username_teams_user__username__get_response"
                            }
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/teams/user/{args.username}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get Team Collaborators"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "get_team_collaborators_teams__team_code__collaborators_get"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "team_code"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "get_team_collaborators_teams__team_code__collaborators_get_response"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/teams/{args.team_code}/collaborators"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get Applications By Team Code"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "get_applications_by_team_code_teams__team_code__applications_get"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "team_code"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "get_applications_by_team_code_teams__team_code__applications_get_response"
                            }
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/teams/{args.team_code}/applications"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "List"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "list_role_get"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "RoleResponse"
                            }
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/role"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "interfaces": [],
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "globalOptions"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "sourceName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "rubik-api"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "operationHeaders"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "{\"Content-Type\":\"application/json\",\"accept-version\":\"2\"}"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "kind": "ScalarTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf)."
            },
            "name": {
                "kind": "Name",
                "value": "JSON"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "specifiedBy"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "url"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "list_teams_get_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "200"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "TeamResponse"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "TeamResponse"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "TeamResponse"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "code"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "enabled"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "description"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "HTTPValidationError"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "detail"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ValidationError"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "ValidationError"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "loc"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "msg"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "type"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "An enumeration."
            },
            "name": {
                "kind": "Name",
                "value": "TeamOrderEnum"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "asc"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "desc"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "get_by_team_code_teams__team_code__get_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "200"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "TeamResponse"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "TeamResponse"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "get_teams_by_username_teams_user__username__get_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "200"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "TeamUserListResponse"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "TeamUserListResponse"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "TeamUserListResponse"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "code"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "enabled"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "role"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "isTemporary"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "get_team_collaborators_teams__team_code__collaborators_get_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "200"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "TeamUserResponse"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "TeamUserResponse"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "TeamUserResponse"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "code"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "enabled"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "description"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "collaborators"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "UserResponse"
                                }
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "UserResponse"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "role"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "username"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "email"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "is_temporary"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "active"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "from_date"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "to_date"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "applications"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "get_applications_by_team_code_teams__team_code__applications_get_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "200"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "String_container"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String_container"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "String_container"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "String"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "RoleResponse"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "description"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Mutation"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Create"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "create_teams_post"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "x_tiger_token"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "TeamRequest_Input"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "create_teams_post_response"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/teams"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"x-tiger-token\":\"{args.x_tiger_token}\",\"Content-Type\":\"application/json\",\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Update"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "update_teams__team_code__put"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "x_tiger_token"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "team_code"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "TeamUpdateRequest_Input"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "update_teams__team_code__put_response"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/teams/{args.team_code}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"x-tiger-token\":\"{args.x_tiger_token}\",\"Content-Type\":\"application/json\",\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "PUT"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Delete"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "delete_teams__team_code__delete"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "x_tiger_token"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "team_code"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "delete_teams__team_code__delete_response"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/teams/{args.team_code}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"x-tiger-token\":\"{args.x_tiger_token}\",\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "DELETE"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Refresh"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "refresh_teams__team_code__refresh_post"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "team_code"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "refresh_teams__team_code__refresh_post_response"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/teams/{args.team_code}/refresh"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Exit Collaborator"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "exit_collaborator_teams_exit_collaborator_post"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "SquidExitCollaboratorMessage_Input"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "exit_collaborator_teams_exit_collaborator_post_response"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/teams/exit/collaborator"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"application/json\",\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Create"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "create_role_post"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "RoleRequest_Input"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "create_role_post_response"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/role"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"application/json\",\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Sync"
                    },
                    "name": {
                        "kind": "Name",
                        "value": "sync_temporary_role_sync_post"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/temporary-role/sync"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "create_teams_post_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "201"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "TeamResponse"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "TeamResponse"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "TeamRequest_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "description"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "collaborators"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "TeamUserRequest_Input"
                                }
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "TeamUserRequest_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "username"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "role_name"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "full_name"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "email"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "from_date"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "DateTime"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "to_date"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "DateTime"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "is_temporary"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "active"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Boolean"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "applications"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": [],
                    "defaultValue": {
                        "kind": "ListValue",
                        "values": []
                    }
                }
            ],
            "directives": []
        },
        {
            "kind": "ScalarTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."
            },
            "name": {
                "kind": "Name",
                "value": "DateTime"
            },
            "directives": []
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "update_teams__team_code__put_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "204"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "Void_container"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "Void_container"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Void_container"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "Void"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Void"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ScalarTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Represents empty values"
            },
            "name": {
                "kind": "Name",
                "value": "Void"
            },
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "TeamUpdateRequest_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "description"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "collaborators"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "TeamUserRequest_Input"
                                }
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "delete_teams__team_code__delete_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "204"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "Void_container"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "Void_container"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "refresh_teams__team_code__refresh_post_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "204"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "Void_container"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "Void_container"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "exit_collaborator_teams_exit_collaborator_post_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "204"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "Void_container"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "Void_container"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "SquidExitCollaboratorMessage_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "msg"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "SquidExitCollaboratorDetail_Input"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "SquidExitCollaboratorDetail_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "details"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "SquidExitCollaboratorUsername_Input"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "SquidExitCollaboratorUsername_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "username"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "UnionTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "create_role_post_response"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "201"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "RoleResponse"
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "statusCodeTypeName"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "statusCode"
                            },
                            "value": {
                                "kind": "IntValue",
                                "value": "422"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "typeName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "HTTPValidationError"
                            }
                        }
                    ]
                }
            ],
            "types": [
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "RoleResponse"
                    }
                },
                {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "HTTPValidationError"
                    }
                }
            ]
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "RoleRequest_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "description"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ScalarTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "ObjMap"
            },
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "HTTPMethod"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "GET"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "HEAD"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "POST"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PUT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELETE"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CONNECT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "OPTIONS"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "TRACE"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PATCH"
                    },
                    "directives": []
                }
            ],
            "directives": []
        }
    ]
};
exports.default = (0, graphql_1.buildASTSchema)(schemaAST, {
    assumeValid: true,
    assumeValidSDL: true
});
