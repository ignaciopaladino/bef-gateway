"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
exports.default = {
    "name": "trusted-contacts-api",
    "baseUrl": "http://internal.mercadolibre.com/internal/trusted-contacts-api",
    "operations": [
        {
            "method": "GET",
            "path": "/contacts",
            "type": "query",
            "field": "searchContacts",
            "description": "Search all users contacts",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "200": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "paging": {
                                "$ref": "#/definitions/Paging"
                            },
                            "results": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/ContactResponse"
                                }
                            }
                        },
                        "title": "ContactsSearchResponse",
                        "$resolvedRef": "/components/schemas/ContactsSearchResponse"
                    }
                },
                "400": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                },
                "404": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                }
            },
            "argTypeMap": {
                "X_Customer_Id": {
                    "type": "integer",
                    "name": "X-Customer-Id",
                    "description": "Owner user id.",
                    "nullable": false
                },
                "is_trusted": {
                    "type": "boolean",
                    "name": "is_trusted",
                    "description": "Filter contacts with is_trusted=true/false"
                },
                "limit": {
                    "type": "integer",
                    "name": "limit",
                    "description": "Limit of records per page. Default value 50."
                },
                "offset": {
                    "type": "integer",
                    "name": "offset",
                    "description": "Offset. Default value 0."
                }
            },
            "queryParamArgMap": {
                "X-Customer-Id": "X_Customer_Id",
                "is_trusted": "is_trusted",
                "limit": "limit",
                "offset": "offset"
            },
            "headers": {
                "accept": "application/json"
            }
        },
        {
            "method": "POST",
            "path": "/contacts",
            "type": "mutation",
            "field": "createContact",
            "description": "Create a trusted contact",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "201": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "description": "UUID of contact."
                            },
                            "alias": {
                                "type": "string",
                                "description": "Contact aliases."
                            },
                            "status": {
                                "type": "string",
                                "description": "Indicates the status of the contact, status: pending/ready."
                            },
                            "identifier_type": {
                                "$ref": "#/definitions/query_searchContacts_oneOf_0_results_items_identifier_type"
                            },
                            "is_trusted": {
                                "type": "boolean",
                                "description": "Indicates if the contact is already secure."
                            },
                            "trusted_updated_at": {
                                "type": "string",
                                "description": "Date and time the contact was secured."
                            },
                            "created_at": {
                                "type": "string",
                                "description": "Date and time the contact was created."
                            },
                            "updated_at": {
                                "type": "string",
                                "description": "Date and time of the last modification."
                            }
                        },
                        "title": "ContactResponse",
                        "$resolvedRef": "/components/schemas/ContactResponse"
                    }
                },
                "400": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                },
                "409": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                }
            },
            "argTypeMap": {
                "X_Customer_Id": {
                    "type": "integer",
                    "name": "X-Customer-Id",
                    "description": "Owner user id.",
                    "nullable": false
                }
            },
            "queryParamArgMap": {
                "X-Customer-Id": "X_Customer_Id"
            },
            "requestSchema": {
                "required": [
                    "user_identifier",
                    "alias",
                    "identifier_type"
                ],
                "type": "object",
                "properties": {
                    "user_identifier": {
                        "type": "string",
                        "description": "Document ID used to identify the person."
                    },
                    "alias": {
                        "type": "string",
                        "description": "Contact aliases"
                    },
                    "identifier_type": {
                        "$ref": "#/definitions/mutationInput_createContact_input_identifier_type"
                    }
                },
                "title": "ContactRequest",
                "$resolvedRef": "/components/schemas/ContactRequest"
            },
            "headers": {
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        },
        {
            "method": "PUT",
            "path": "/contacts/{args.contact_id}",
            "type": "mutation",
            "field": "putContact",
            "description": "Update only the fields that are in the body.",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "200": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "description": "UUID of contact."
                            },
                            "alias": {
                                "type": "string",
                                "description": "Contact aliases."
                            },
                            "status": {
                                "type": "string",
                                "description": "Indicates the status of the contact, status: pending/ready."
                            },
                            "identifier_type": {
                                "$ref": "#/definitions/query_searchContacts_oneOf_0_results_items_identifier_type"
                            },
                            "is_trusted": {
                                "type": "boolean",
                                "description": "Indicates if the contact is already secure."
                            },
                            "trusted_updated_at": {
                                "type": "string",
                                "description": "Date and time the contact was secured."
                            },
                            "created_at": {
                                "type": "string",
                                "description": "Date and time the contact was created."
                            },
                            "updated_at": {
                                "type": "string",
                                "description": "Date and time of the last modification."
                            }
                        },
                        "title": "ContactResponse",
                        "$resolvedRef": "/components/schemas/ContactResponse"
                    }
                },
                "400": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                },
                "403": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                },
                "404": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                },
                "409": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                }
            },
            "argTypeMap": {
                "X_Customer_Id": {
                    "type": "integer",
                    "name": "X-Customer-Id",
                    "description": "Owner user id.",
                    "nullable": false
                },
                "contact_id": {
                    "type": "string",
                    "name": "contact_id",
                    "description": "Contact ID",
                    "nullable": false
                }
            },
            "queryParamArgMap": {
                "X-Customer-Id": "X_Customer_Id"
            },
            "requestSchema": {
                "type": "object",
                "properties": {
                    "alias": {
                        "type": "string",
                        "description": "Contact aliases"
                    },
                    "is_trusted": {
                        "type": "boolean",
                        "description": "Indicates if the contact is already secure."
                    }
                },
                "title": "UpdateContactRequest",
                "$resolvedRef": "/components/schemas/UpdateContactRequest"
            },
            "headers": {
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        },
        {
            "method": "DELETE",
            "path": "/contacts/{args.contact_id}",
            "type": "mutation",
            "field": "deleteContact",
            "description": "Delete a contact",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "204": {
                    "responseSchema": {
                        "type": "null",
                        "description": "No Content",
                        "title": "deleteContact_204_response"
                    }
                },
                "400": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                },
                "403": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                },
                "404": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                }
            },
            "argTypeMap": {
                "X_Customer_Id": {
                    "type": "integer",
                    "name": "X-Customer-Id",
                    "description": "Owner user id.",
                    "nullable": false
                },
                "contact_id": {
                    "type": "string",
                    "name": "contact_id",
                    "description": "Contact ID",
                    "nullable": false
                }
            },
            "queryParamArgMap": {
                "X-Customer-Id": "X_Customer_Id"
            },
            "headers": {
                "accept": "application/json"
            }
        },
        {
            "method": "GET",
            "path": "/contact/{args.user_identifier}",
            "type": "query",
            "field": "findContactByUserIdentifier",
            "description": "Find if a contact is trusted by user identifier",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "200": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "is_trusted": {
                                "type": "boolean",
                                "description": "Indicates if the contact is already secure."
                            }
                        },
                        "title": "findContactByUserIdentifier_200_response"
                    }
                },
                "400": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                },
                "404": {
                    "responseSchema": {
                        "type": "object",
                        "properties": {
                            "error_code": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            }
                        },
                        "title": "ErrorResponse",
                        "$resolvedRef": "/components/schemas/ErrorResponse"
                    }
                }
            },
            "argTypeMap": {
                "X_Customer_Id": {
                    "type": "integer",
                    "name": "X-Customer-Id",
                    "description": "Owner user id.",
                    "nullable": false
                },
                "user_identifier": {
                    "type": "string",
                    "name": "user_identifier",
                    "description": "CPF/CNPJ",
                    "nullable": false
                },
                "X_Identifier_Type": {
                    "type": "string",
                    "enum": [
                        "cpf",
                        "cnpj"
                    ],
                    "name": "X-Identifier-Type",
                    "description": "Document type used as identifier.",
                    "nullable": false,
                    "title": "queryInput_findContactByUserIdentifier_X_Identifier_Type"
                }
            },
            "queryParamArgMap": {
                "X-Customer-Id": "X_Customer_Id",
                "X-Identifier-Type": "X_Identifier_Type"
            },
            "headers": {
                "accept": "application/json"
            }
        }
    ],
    "operationHeaders": {
        "Content-Type": "application/json"
    },
    "referencedSchema": {
        "$ref": "#/definitions/_schema",
        "definitions": {
            "_schema": {
                "type": "object",
                "title": "_schema",
                "properties": {
                    "query": {
                        "$ref": "#/definitions/Query"
                    },
                    "queryInput": {
                        "$ref": "#/definitions/QueryInput"
                    },
                    "mutation": {
                        "$ref": "#/definitions/Mutation"
                    },
                    "mutationInput": {
                        "$ref": "#/definitions/MutationInput"
                    }
                },
                "required": [
                    "query"
                ]
            },
            "Query": {
                "type": "object",
                "title": "Query",
                "properties": {
                    "searchContacts": {
                        "$ref": "#/definitions/searchContacts_response"
                    },
                    "findContactByUserIdentifier": {
                        "$ref": "#/definitions/findContactByUserIdentifier_response"
                    }
                }
            },
            "searchContacts_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"200\":0,\"400\":1,\"404\":2}",
                "title": "searchContacts_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/ContactsSearchResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    }
                ]
            },
            "ContactsSearchResponse": {
                "type": "object",
                "properties": {
                    "paging": {
                        "$ref": "#/definitions/Paging"
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/ContactResponse"
                        }
                    }
                },
                "title": "ContactsSearchResponse",
                "$resolvedRef": "/components/schemas/ContactsSearchResponse"
            },
            "Paging": {
                "type": "object",
                "properties": {
                    "limit": {
                        "type": "integer",
                        "description": "Limit of records per page."
                    },
                    "offset": {
                        "type": "integer",
                        "description": "offset"
                    },
                    "total": {
                        "type": "integer",
                        "description": "Total results found."
                    }
                },
                "title": "Paging",
                "$resolvedRef": "/components/schemas/Paging"
            },
            "ContactResponse": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string",
                        "description": "UUID of contact."
                    },
                    "alias": {
                        "type": "string",
                        "description": "Contact aliases."
                    },
                    "status": {
                        "type": "string",
                        "description": "Indicates the status of the contact, status: pending/ready."
                    },
                    "identifier_type": {
                        "$ref": "#/definitions/query_searchContacts_oneOf_0_results_items_identifier_type"
                    },
                    "is_trusted": {
                        "type": "boolean",
                        "description": "Indicates if the contact is already secure."
                    },
                    "trusted_updated_at": {
                        "type": "string",
                        "description": "Date and time the contact was secured."
                    },
                    "created_at": {
                        "type": "string",
                        "description": "Date and time the contact was created."
                    },
                    "updated_at": {
                        "type": "string",
                        "description": "Date and time of the last modification."
                    }
                },
                "title": "ContactResponse",
                "$resolvedRef": "/components/schemas/ContactResponse"
            },
            "query_searchContacts_oneOf_0_results_items_identifier_type": {
                "type": "string",
                "description": "Type of document used as identifier",
                "enum": [
                    "cpf",
                    "cnpj"
                ],
                "title": "query_searchContacts_oneOf_0_results_items_identifier_type"
            },
            "ErrorResponse": {
                "type": "object",
                "properties": {
                    "error_code": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    },
                    "status": {
                        "type": "string"
                    }
                },
                "title": "ErrorResponse",
                "$resolvedRef": "/components/schemas/ErrorResponse"
            },
            "findContactByUserIdentifier_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"200\":0,\"400\":1,\"404\":2}",
                "title": "findContactByUserIdentifier_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/findContactByUserIdentifier_200_response"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    }
                ]
            },
            "findContactByUserIdentifier_200_response": {
                "type": "object",
                "properties": {
                    "is_trusted": {
                        "type": "boolean",
                        "description": "Indicates if the contact is already secure."
                    }
                },
                "title": "findContactByUserIdentifier_200_response"
            },
            "QueryInput": {
                "type": "object",
                "title": "QueryInput",
                "properties": {
                    "searchContacts": {
                        "$ref": "#/definitions/queryInput_searchContacts"
                    },
                    "findContactByUserIdentifier": {
                        "$ref": "#/definitions/queryInput_findContactByUserIdentifier"
                    }
                }
            },
            "queryInput_searchContacts": {
                "title": "queryInput_searchContacts",
                "type": "object",
                "properties": {
                    "X_Customer_Id": {
                        "type": "integer",
                        "name": "X-Customer-Id",
                        "description": "Owner user id.",
                        "nullable": false
                    },
                    "is_trusted": {
                        "type": "boolean",
                        "name": "is_trusted",
                        "description": "Filter contacts with is_trusted=true/false"
                    },
                    "limit": {
                        "type": "integer",
                        "name": "limit",
                        "description": "Limit of records per page. Default value 50."
                    },
                    "offset": {
                        "type": "integer",
                        "name": "offset",
                        "description": "Offset. Default value 0."
                    }
                }
            },
            "queryInput_findContactByUserIdentifier": {
                "title": "queryInput_findContactByUserIdentifier",
                "type": "object",
                "properties": {
                    "user_identifier": {
                        "type": "string",
                        "name": "user_identifier",
                        "description": "CPF/CNPJ",
                        "nullable": false
                    },
                    "X_Customer_Id": {
                        "type": "integer",
                        "name": "X-Customer-Id",
                        "description": "Owner user id.",
                        "nullable": false
                    },
                    "X_Identifier_Type": {
                        "$ref": "#/definitions/queryInput_findContactByUserIdentifier_X_Identifier_Type"
                    }
                }
            },
            "queryInput_findContactByUserIdentifier_X_Identifier_Type": {
                "type": "string",
                "enum": [
                    "cpf",
                    "cnpj"
                ],
                "name": "X-Identifier-Type",
                "description": "Document type used as identifier.",
                "nullable": false,
                "title": "queryInput_findContactByUserIdentifier_X_Identifier_Type"
            },
            "Mutation": {
                "type": "object",
                "title": "Mutation",
                "properties": {
                    "createContact": {
                        "$ref": "#/definitions/createContact_response"
                    },
                    "putContact": {
                        "$ref": "#/definitions/putContact_response"
                    },
                    "deleteContact": {
                        "$ref": "#/definitions/deleteContact_response"
                    }
                }
            },
            "createContact_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"201\":0,\"400\":1,\"409\":2}",
                "title": "createContact_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/ContactResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    }
                ]
            },
            "putContact_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"200\":0,\"400\":1,\"403\":2,\"404\":3,\"409\":4}",
                "title": "putContact_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/ContactResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    }
                ]
            },
            "deleteContact_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"204\":0,\"400\":1,\"403\":2,\"404\":3}",
                "title": "deleteContact_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/deleteContact_204_response"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    },
                    {
                        "$ref": "#/definitions/ErrorResponse"
                    }
                ]
            },
            "deleteContact_204_response": {
                "type": "null",
                "description": "No Content",
                "title": "deleteContact_204_response"
            },
            "MutationInput": {
                "type": "object",
                "title": "MutationInput",
                "properties": {
                    "createContact": {
                        "$ref": "#/definitions/mutationInput_createContact"
                    },
                    "putContact": {
                        "$ref": "#/definitions/mutationInput_putContact"
                    },
                    "deleteContact": {
                        "$ref": "#/definitions/mutationInput_deleteContact"
                    }
                }
            },
            "mutationInput_createContact": {
                "title": "mutationInput_createContact",
                "type": "object",
                "properties": {
                    "X_Customer_Id": {
                        "type": "integer",
                        "name": "X-Customer-Id",
                        "description": "Owner user id.",
                        "nullable": false
                    },
                    "input": {
                        "$ref": "#/definitions/ContactRequest"
                    }
                }
            },
            "ContactRequest": {
                "required": [
                    "user_identifier",
                    "alias",
                    "identifier_type"
                ],
                "type": "object",
                "properties": {
                    "user_identifier": {
                        "type": "string",
                        "description": "Document ID used to identify the person."
                    },
                    "alias": {
                        "type": "string",
                        "description": "Contact aliases"
                    },
                    "identifier_type": {
                        "$ref": "#/definitions/mutationInput_createContact_input_identifier_type"
                    }
                },
                "title": "ContactRequest",
                "$resolvedRef": "/components/schemas/ContactRequest"
            },
            "mutationInput_createContact_input_identifier_type": {
                "type": "string",
                "description": "Type of document used as user_identifier (cpf/cnpj)",
                "enum": [
                    "cpf",
                    "cnpj"
                ],
                "title": "mutationInput_createContact_input_identifier_type"
            },
            "mutationInput_putContact": {
                "title": "mutationInput_putContact",
                "type": "object",
                "properties": {
                    "contact_id": {
                        "type": "string",
                        "name": "contact_id",
                        "description": "Contact ID",
                        "nullable": false
                    },
                    "X_Customer_Id": {
                        "type": "integer",
                        "name": "X-Customer-Id",
                        "description": "Owner user id.",
                        "nullable": false
                    },
                    "input": {
                        "$ref": "#/definitions/UpdateContactRequest"
                    }
                }
            },
            "UpdateContactRequest": {
                "type": "object",
                "properties": {
                    "alias": {
                        "type": "string",
                        "description": "Contact aliases"
                    },
                    "is_trusted": {
                        "type": "boolean",
                        "description": "Indicates if the contact is already secure."
                    }
                },
                "title": "UpdateContactRequest",
                "$resolvedRef": "/components/schemas/UpdateContactRequest"
            },
            "mutationInput_deleteContact": {
                "title": "mutationInput_deleteContact",
                "type": "object",
                "properties": {
                    "contact_id": {
                        "type": "string",
                        "name": "contact_id",
                        "description": "Contact ID",
                        "nullable": false
                    },
                    "X_Customer_Id": {
                        "type": "integer",
                        "name": "X-Customer-Id",
                        "description": "Owner user id.",
                        "nullable": false
                    }
                }
            }
        }
    }
};
