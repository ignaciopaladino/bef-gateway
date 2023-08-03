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
                "value": "typescript"
            },
            "arguments": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "type"
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
                    "value": "SCALAR"
                },
                {
                    "kind": "Name",
                    "value": "ENUM"
                }
            ]
        },
        {
            "kind": "DirectiveDefinition",
            "name": {
                "kind": "Name",
                "value": "example"
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
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                }
            ],
            "repeatable": true,
            "locations": [
                {
                    "kind": "Name",
                    "value": "FIELD_DEFINITION"
                },
                {
                    "kind": "Name",
                    "value": "OBJECT"
                },
                {
                    "kind": "Name",
                    "value": "INPUT_OBJECT"
                },
                {
                    "kind": "Name",
                    "value": "ENUM"
                },
                {
                    "kind": "Name",
                    "value": "SCALAR"
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
                    "name": {
                        "kind": "Name",
                        "value": "getWithdrawalsRequest"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
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
                            "value": "WithdrawalRequest"
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
                                        "value": "/fulfillment/withdrawal_requests/{args.id}"
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
                    "name": {
                        "kind": "Name",
                        "value": "searchWithdrawalRequests"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "seller_id"
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "status"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "site_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "type"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "version"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "inventory_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "appointment_date"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "title"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "query"
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
                                "value": "shipment_type"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "default_warehouse_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "appointment_date_from"
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
                                "value": "appointment_date_to"
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
                                "value": "sort_by"
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
                                "value": "offset"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
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
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "50"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "SearchResultsWithdrawalRequest"
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
                                        "value": "/fulfillment/withdrawal_requests/search"
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
                                        "value": "{\"id\":\"id\",\"seller_id\":\"seller_id\",\"status\":\"status\",\"site_id\":\"site_id\",\"type\":\"type\",\"version\":\"version\",\"inventory_id\":\"inventory_id\",\"appointment_date\":\"appointment_date\",\"title\":\"title\",\"query\":\"query\",\"shipment_type\":\"shipment_type\",\"default_warehouse_id\":\"default_warehouse_id\",\"appointment_date_from\":\"appointment_date_from\",\"appointment_date_to\":\"appointment_date_to\",\"sort_by\":\"sort_by\",\"offset\":\"offset\",\"limit\":\"limit\"}"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "getWithdrawalsRequestLocations"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
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
                            "value": "String"
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
                                        "value": "/fulfillment/withdrawal_requests/{args.id}/locations"
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
                    "name": {
                        "kind": "Name",
                        "value": "getWithdrawalsRequestHistory"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
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
                                "value": "StatusHistoryWithdrawalsRequestStatus"
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
                                        "value": "/fulfillment/withdrawal_requests/{args.id}/history"
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
                    "name": {
                        "kind": "Name",
                        "value": "getWithdrawal"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
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
                            "value": "Withdrawal"
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
                                        "value": "/fulfillment/withdrawals/{args.id}"
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
                    "name": {
                        "kind": "Name",
                        "value": "searchWithdrawals"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "withdrawal_request_id"
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "code"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "seller_id"
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "status"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "warehouse_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "site_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "inventory_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "appointment_date"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "appointment_date_from"
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
                                "value": "appointment_date_to"
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
                                "value": "shipment_type"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "query"
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
                                "value": "sort_by"
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
                                "value": "offset"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
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
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "50"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "SearchResultsWithdrawal"
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
                                        "value": "/fulfillment/withdrawals/search"
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
                                        "value": "{\"id\":\"id\",\"withdrawal_request_id\":\"withdrawal_request_id\",\"code\":\"code\",\"seller_id\":\"seller_id\",\"status\":\"status\",\"warehouse_id\":\"warehouse_id\",\"site_id\":\"site_id\",\"inventory_id\":\"inventory_id\",\"appointment_date\":\"appointment_date\",\"appointment_date_from\":\"appointment_date_from\",\"appointment_date_to\":\"appointment_date_to\",\"shipment_type\":\"shipment_type\",\"query\":\"query\",\"sort_by\":\"sort_by\",\"offset\":\"offset\",\"limit\":\"limit\"}"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "getWithdrawalReadyToDispatchInfo"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "code"
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
                            "value": "DispatchInfo"
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
                                        "value": "/fulfillment/withdrawals/{args.code}/ready_to_dispatch"
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
                    "name": {
                        "kind": "Name",
                        "value": "getWithdrawalsContainer"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
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
                            "value": "WithdrawalContainer"
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
                                        "value": "/fulfillment/withdrawal_containers/{args.id}"
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
                    "name": {
                        "kind": "Name",
                        "value": "searchWithdrawalContainers"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "withdrawal_id"
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "parcel_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "status"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "inventory_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "storage_address"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "site_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "warehouse_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "shipment_type"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "tracking_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "shipment_order_id"
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
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "sort_by"
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
                                "value": "offset"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
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
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "50"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "SearchResultsWithdrawalContainer"
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
                                        "value": "/fulfillment/withdrawal_containers/search"
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
                                        "value": "{\"id\":\"id\",\"withdrawal_id\":\"withdrawal_id\",\"parcel_id\":\"parcel_id\",\"status\":\"status\",\"inventory_id\":\"inventory_id\",\"storage_address\":\"storage_address\",\"site_id\":\"site_id\",\"warehouse_id\":\"warehouse_id\",\"shipment_type\":\"shipment_type\",\"tracking_id\":\"tracking_id\",\"shipment_order_id\":\"shipment_order_id\",\"sort_by\":\"sort_by\",\"offset\":\"offset\",\"limit\":\"limit\"}"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "getWithdrawalsContainerTrackingInfo"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
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
                            "value": "WithdrawalContainerTrackingInfo"
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
                                        "value": "/fulfillment/withdrawal_containers/{args.id}/tracking_info"
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
                    "name": {
                        "kind": "Name",
                        "value": "getDocuments"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
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
                            "value": "ContainerDocuments"
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
                                        "value": "/fulfillment/withdrawal_containers/{args.id}/documents"
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
                                "value": "shipping-backoffice-core"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "endpoint"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "http://localhost:8080"
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
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "WithdrawalRequest"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "appointments"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Appointment"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "shipment"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Shipment"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "fee"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Fee"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "defaultWarehouseId"
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
                        "value": "appointment"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Appointment"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "UnitWithdrawalRequestUnitDetail"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "title"
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
                        "value": "type"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsRequest_type"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "version"
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
                        "value": "subStatus"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "DELAYED_const"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "dispatchId"
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
                        "value": "withdrawalIds"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "BigInt"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated"
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
                        "value": "sellerId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "siteId"
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
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "status"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsRequest_status"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "printAction"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsRequest_printAction"
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
                "value": "Appointment"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "date"
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
                        "value": "from"
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
                        "value": "to"
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
                        "value": "source"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsRequest_appointments_items_source"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "creationDate"
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
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsRequest_appointments_items_source"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SELLER"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "MELI"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Shipment"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "address"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Address"
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
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsRequest_shipment_type"
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
                "value": "Address"
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
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
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
                "value": "The `BigInt` scalar type represents non-fractional signed whole numeric values."
            },
            "name": {
                "kind": "Name",
                "value": "BigInt"
            },
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsRequest_shipment_type"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "FTL"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SPD"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SHIPMENT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DISPOSAL"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "TRANSFER"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Fee"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "currencyId"
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
                        "value": "value"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Float"
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
                "value": "UnitWithdrawalRequestUnitDetail"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "inventoryId"
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
                        "value": "details"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "WithdrawalRequestUnitDetail"
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
                "value": "WithdrawalRequestUnitDetail"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "quantity"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "reservedQuantity"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "collectedQuantity"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "status"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsRequest_units_items_details_items_status"
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
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsRequest_units_items_details_items_status"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "OK"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DAMAGED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "INPOK"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "INPDAMAGED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "RETURN"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsRequest_type"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SWH"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "MWH"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "DELAYED_const"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELAYED"
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "enum"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "value"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "\"DELAYED\""
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "typescript"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "type"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "\"DELAYED\""
                            }
                        }
                    ]
                },
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "example"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "value"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "\"DELAYED\""
                            }
                        }
                    ]
                }
            ]
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsRequest_status"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CREATED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "UNITS_IN_PROGRESS"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "UNITS_COMPLETED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SCHEDULED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PROCESSING"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CANCELED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "FISCAL_ERROR"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "READY_TO_DISPATCH"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "APPOINTMENT_EXPIRED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "ABLE_TO_DISCARD"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PARTIALLY_SHIPPED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "COMPLETED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SHIPPED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "UNFULFILLABLE"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DISCARDED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELIVERED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELIVERED_WITH_DIFFERENCES"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "NOT_DELIVERED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CONFIRMED"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsRequest_printAction"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PRINT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "REPRINT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DONE"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "SearchResultsWithdrawalRequest"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "appliedFilters"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Filter"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "availableFilters"
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
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "paging"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Paging"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "sort"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Sorter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "results"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "WithdrawalRequest"
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
                "value": "Filter"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "key"
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
                "value": "Paging"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "total"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "offset"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "limit"
                    },
                    "arguments": [],
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
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Sorter"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "field"
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
                        "value": "order"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_searchWithdrawalRequests_sort_order"
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
            "name": {
                "kind": "Name",
                "value": "query_searchWithdrawalRequests_sort_order"
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
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "StatusHistoryWithdrawalsRequestStatus"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "status"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsRequestHistory_items_status"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "eventDate"
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
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsRequestHistory_items_status"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CREATED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "UNITS_IN_PROGRESS"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "UNITS_COMPLETED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SCHEDULED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PROCESSING"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CANCELED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "FISCAL_ERROR"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "READY_TO_DISPATCH"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "APPOINTMENT_EXPIRED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "ABLE_TO_DISCARD"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PARTIALLY_SHIPPED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "COMPLETED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SHIPPED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "UNFULFILLABLE"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DISCARDED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELIVERED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELIVERED_WITH_DIFFERENCES"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "NOT_DELIVERED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CONFIRMED"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Withdrawal"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "transferPlanId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "appointments"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "AppointmentDocument"
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
                        "value": "shipment"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Shipment"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "appointment"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Appointment"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "UnitWithdrawalUnitDetail"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "subStatus"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "DELAYED_const"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "dispatchId"
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
                        "value": "lastUpdated"
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
                        "value": "dateCreated"
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
                        "value": "sellerId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "warehouseId"
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
                        "value": "siteId"
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
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "withdrawalRequestId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "status"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawal_status"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "printAction"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawal_printAction"
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
                "value": "AppointmentDocument"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "date"
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
                        "value": "from"
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
                        "value": "to"
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
                        "value": "source"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawal_appointments_items_source"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "creationDate"
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
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawal_appointments_items_source"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SELLER"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "MELI"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "UnitWithdrawalUnitDetail"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "inventoryId"
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
                        "value": "details"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "WithdrawalUnitDetail"
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
                "value": "WithdrawalUnitDetail"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "quantity"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "reservedQuantity"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "deliveredQuantity"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "collectedQuantity"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "status"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawal_units_items_details_items_status"
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
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawal_units_items_details_items_status"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "OK"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DAMAGED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "INPOK"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "INPDAMAGED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "RETURN"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawal_status"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CREATED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "STOCK_RESERVED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "READY_TO_COLLECT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "COLLECTING"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "COLLECTED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "READY_TO_DISPATCH"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "APPOINTMENT_EXPIRED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "ABLE_TO_DISCARD"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DOCUMENTED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "COMPLETED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "UNFULFILLABLE"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SHIPPED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PARTIALLY_SHIPPED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "FISCAL_ERROR"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DISCARDED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CANCELED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELIVERED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELIVERED_WITH_DIFFERENCES"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "NOT_DELIVERED"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawal_printAction"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PRINT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "REPRINT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DONE"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "SearchResultsWithdrawal"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "appliedFilters"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Filter"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "availableFilters"
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
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "paging"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Paging"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "sort"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Sorter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "results"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Withdrawal"
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
                "value": "DispatchInfo"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "readyToDispatch"
                    },
                    "arguments": [],
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
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "constraint"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalReadyToDispatchInfo_constraint"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "dispatchChannel"
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
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalReadyToDispatchInfo_constraint"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PENDING_PROCESS"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PROCESSING"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PROCESSED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CANCELLED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "FISCAL_ERROR"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DOCUMENTED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "COMPLETED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "UNFULFILLABLE"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DISCARDED"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "WithdrawalContainer"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "withdrawalId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "shipment"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ContainerShipment"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "movements"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Movement"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "UnitUnitDetail"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "parcelId"
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
                        "value": "lastUpdated"
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
                        "value": "sellerId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "warehouseId"
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
                        "value": "siteId"
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
                        "value": "id"
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
                        "value": "storageAddress"
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
                        "value": "status"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsContainer_status"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "dimensions"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Dimensions"
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
                "value": "ContainerShipment"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "address"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Address"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "orderId"
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
                        "value": "type"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsContainer_shipment_type"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "transferUnitId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "estimatedDeliveryDate"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Delivery"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "tracking"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "TrackingStep"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "trackingId"
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
                        "value": "parcelId"
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
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsContainer_shipment_type"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "FTL"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SPD"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SHIPMENT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DISPOSAL"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "TRANSFER"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Delivery"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "from"
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
                        "value": "to"
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
                "value": "TrackingStep"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "dateTime"
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
                        "value": "step"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsContainer_shipment_tracking_items_step"
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
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsContainer_shipment_tracking_items_step"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "READY_TO_SHIP"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SHIPPED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "IN_POST_OFFICE"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELIVERED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "NOT_DELIVERED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "RETURNED_TO_WAREHOUSE"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Movement"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "date"
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
                        "value": "from"
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
                        "value": "to"
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
                "value": "UnitUnitDetail"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "inventoryId"
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
                        "value": "details"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "UnitDetail"
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
                "value": "UnitDetail"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "quantity"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "status"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsContainer_units_items_details_items_status"
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
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsContainer_units_items_details_items_status"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "OK"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DAMAGED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "INPOK"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "INPDAMAGED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "RETURN"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsContainer_status"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CREATED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "STORED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SHIPPED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "LOST"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DAMAGED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "TRACKED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "READY_TO_DISPATCH"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "IN_TRANSFER"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "TRANSFERRED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DISCARDED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELIVERED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "NOT_DELIVERED"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "FISCAL_ERROR"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "IN_POST_OFFICE"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "RETURNED_TO_WAREHOUSE"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Dimensions"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "length"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Dimension"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "width"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Dimension"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "weight"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Dimension"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "height"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Dimension"
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
                "value": "Dimension"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "measureUnit"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsContainer_dimensions_length_measureUnit"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "value"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Float"
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
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsContainer_dimensions_length_measureUnit"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "g"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "cm"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "SearchResultsWithdrawalContainer"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "appliedFilters"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Filter"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "availableFilters"
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
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "paging"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Paging"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "sort"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Sorter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "results"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "WithdrawalContainer"
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
                "value": "WithdrawalContainerTrackingInfo"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "withdrawalId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "address"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "AddressDTO"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "user"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "User"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "container_id"
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
                        "value": "dimensions"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Dimensions"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "shipmentType"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "query_getWithdrawalsContainerTrackingInfo_shipmentType"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "trackingId"
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
                "value": "AddressDTO"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "country"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "AddressArea"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "zipCode"
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
                        "value": "streetName"
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
                        "value": "references"
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
                        "value": "streetNumber"
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
                        "value": "city"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "AddressArea"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "phone"
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
                        "value": "aditionalInfo"
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
                        "value": "comment"
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
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "state"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "AddressArea"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "addressLine"
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
                "value": "AddressArea"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
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
                        "value": "id"
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
                "value": "User"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "nickname"
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
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
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
            "name": {
                "kind": "Name",
                "value": "query_getWithdrawalsContainerTrackingInfo_shipmentType"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "FTL"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SPD"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "SHIPMENT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DISPOSAL"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "TRANSFER"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "ContainerDocuments"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "shippingLabel"
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
                        "value": "invoiceLabels"
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
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "boxId"
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
                    "name": {
                        "kind": "Name",
                        "value": "deleteWithdrawalRequestProjection"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
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
                            "value": "String"
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
                                        "value": "/fulfillment/withdrawal_requests/{args.id}"
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
                                        "value": "{\"accept\":\"*/*\"}"
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
                    "name": {
                        "kind": "Name",
                        "value": "deleteWithdrawalProjection"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
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
                            "value": "String"
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
                                        "value": "/fulfillment/withdrawals/{args.id}"
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
                                        "value": "{\"accept\":\"*/*\"}"
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
                    "name": {
                        "kind": "Name",
                        "value": "processWithdrawalRequestEventMessage"
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
                                    "value": "BigQueueMessage_Input"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
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
                                        "value": "/fulfillment/withdrawal_requests/events/messages"
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
                                        "value": "{\"Content-Type\":\"application/json\",\"accept\":\"*/*\"}"
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
                    "name": {
                        "kind": "Name",
                        "value": "processWithdrawalEventMessage"
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
                                    "value": "BigQueueMessage_Input"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
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
                                        "value": "/fulfillment/withdrawals/events/messages"
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
                                        "value": "{\"Content-Type\":\"application/json\",\"accept\":\"*/*\"}"
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
                    "name": {
                        "kind": "Name",
                        "value": "processWithdrawalEventMessage_1"
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
                                    "value": "BigQueueMessage_Input"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
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
                                        "value": "/fulfillment/withdrawal_containers/events/messages"
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
                                        "value": "{\"Content-Type\":\"application/json\",\"accept\":\"*/*\"}"
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
                    "name": {
                        "kind": "Name",
                        "value": "deleteWithdrawalContainerProjection"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
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
                            "value": "String"
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
                                        "value": "/fulfillment/withdrawal_containers/{args.id}"
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
                                        "value": "{\"accept\":\"*/*\"}"
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
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "BigQueueMessage_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "msg"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "EventMessage_Input"
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
                "value": "EventMessage_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "sourceId"
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
                        "value": "eventId"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
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
