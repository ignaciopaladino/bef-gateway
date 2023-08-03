"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
exports.default = {
    "name": "teams-api",
    "baseUrl": "https://team-api.furycloud.io",
    "operations": [
        {
            "method": "GET",
            "path": "/ping",
            "type": "query",
            "field": "ping_ping_get",
            "description": "Ping endpoint, used to know if the app is up.",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {},
            "headers": {
                "accept": "application/json"
            }
        },
        {
            "method": "GET",
            "path": "/teams",
            "type": "query",
            "field": "list_teams_get",
            "description": "List",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "200": {
                    "responseSchema": {
                        "title": "Response List Teams Get",
                        "type": "array",
                        "items": {
                            "title": "TeamResponse",
                            "required": [
                                "id",
                                "code",
                                "name",
                                "enabled"
                            ],
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "code": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "enabled": {
                                    "type": "boolean"
                                },
                                "description": {
                                    "type": "string"
                                }
                            },
                            "$resolvedRef": "/components/schemas/TeamResponse"
                        }
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "argTypeMap": {
                "username": {
                    "title": "Username",
                    "type": "string"
                },
                "match": {
                    "title": "Match",
                    "type": "string"
                },
                "orderTeam": {
                    "title": "TeamOrderEnum",
                    "enum": [
                        "asc",
                        "desc"
                    ],
                    "type": "string",
                    "description": "An enumeration.",
                    "$resolvedRef": "/components/schemas/TeamOrderEnum"
                },
                "limit": {
                    "title": "Limit",
                    "type": "integer"
                }
            },
            "queryParamArgMap": {
                "username": "username",
                "match": "match",
                "orderTeam": "orderTeam",
                "limit": "limit"
            },
            "headers": {
                "accept": "application/json"
            }
        },
        {
            "method": "POST",
            "path": "/teams",
            "type": "mutation",
            "field": "create_teams_post",
            "description": "Create",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "201": {
                    "responseSchema": {
                        "title": "TeamResponse",
                        "required": [
                            "id",
                            "code",
                            "name",
                            "enabled"
                        ],
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "code": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            },
                            "enabled": {
                                "type": "boolean"
                            },
                            "description": {
                                "type": "string"
                            }
                        },
                        "$resolvedRef": "/components/schemas/TeamResponse"
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "argTypeMap": {
                "x_tiger_token": {
                    "title": "X-Tiger-Token",
                    "type": "string"
                }
            },
            "headers": {
                "x-tiger-token": "{args.x_tiger_token:undefined}",
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            "requestSchema": {
                "title": "TeamRequest",
                "required": [
                    "name",
                    "collaborators"
                ],
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "collaborators": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/TeamUserRequest"
                        }
                    }
                },
                "$resolvedRef": "/components/schemas/TeamRequest"
            }
        },
        {
            "method": "GET",
            "path": "/teams/{args.team_code}",
            "type": "query",
            "field": "get_by_team_code_teams__team_code__get",
            "description": "Get By Team Code",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "200": {
                    "responseSchema": {
                        "title": "TeamResponse",
                        "required": [
                            "id",
                            "code",
                            "name",
                            "enabled"
                        ],
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "code": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            },
                            "enabled": {
                                "type": "boolean"
                            },
                            "description": {
                                "type": "string"
                            }
                        },
                        "$resolvedRef": "/components/schemas/TeamResponse"
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "argTypeMap": {
                "team_code": {
                    "title": "Team Code",
                    "type": "string",
                    "nullable": false
                }
            },
            "headers": {
                "accept": "application/json"
            }
        },
        {
            "method": "PUT",
            "path": "/teams/{args.team_code}",
            "type": "mutation",
            "field": "update_teams__team_code__put",
            "description": "Update",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "204": {
                    "responseSchema": {
                        "type": "null",
                        "description": "Successful Response",
                        "title": "update_teams__team_code__put_204_response"
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "argTypeMap": {
                "team_code": {
                    "title": "Team Code",
                    "type": "string",
                    "nullable": false
                },
                "x_tiger_token": {
                    "title": "X-Tiger-Token",
                    "type": "string"
                }
            },
            "headers": {
                "x-tiger-token": "{args.x_tiger_token:undefined}",
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            "requestSchema": {
                "title": "TeamUpdateRequest",
                "required": [
                    "collaborators"
                ],
                "type": "object",
                "properties": {
                    "description": {
                        "type": "string"
                    },
                    "collaborators": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/TeamUserRequest"
                        }
                    }
                },
                "$resolvedRef": "/components/schemas/TeamUpdateRequest"
            }
        },
        {
            "method": "DELETE",
            "path": "/teams/{args.team_code}",
            "type": "mutation",
            "field": "delete_teams__team_code__delete",
            "description": "Delete",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "204": {
                    "responseSchema": {
                        "type": "null",
                        "description": "Successful Response",
                        "title": "delete_teams__team_code__delete_204_response"
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "argTypeMap": {
                "team_code": {
                    "title": "Team Code",
                    "type": "string",
                    "nullable": false
                },
                "x_tiger_token": {
                    "title": "X-Tiger-Token",
                    "type": "string"
                }
            },
            "headers": {
                "x-tiger-token": "{args.x_tiger_token:undefined}",
                "accept": "application/json"
            }
        },
        {
            "method": "GET",
            "path": "/teams/user/{args.username}",
            "type": "query",
            "field": "get_teams_by_username_teams_user__username__get",
            "description": "Get Teams By Username",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "200": {
                    "responseSchema": {
                        "title": "TeamsByUserListResponse",
                        "type": "array",
                        "items": {
                            "title": "TeamUserListResponse",
                            "required": [
                                "id",
                                "code",
                                "name",
                                "enabled",
                                "role",
                                "isTemporary"
                            ],
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "code": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "enabled": {
                                    "type": "boolean"
                                },
                                "role": {
                                    "type": "string"
                                },
                                "isTemporary": {
                                    "type": "boolean"
                                }
                            },
                            "$resolvedRef": "/components/schemas/TeamUserListResponse"
                        },
                        "$resolvedRef": "/components/schemas/TeamsByUserListResponse"
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "argTypeMap": {
                "username": {
                    "type": "string",
                    "nullable": false
                }
            },
            "headers": {
                "accept": "application/json"
            }
        },
        {
            "method": "GET",
            "path": "/teams/{args.team_code}/collaborators",
            "type": "query",
            "field": "get_team_collaborators_teams__team_code__collaborators_get",
            "description": "Get Team Collaborators",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "200": {
                    "responseSchema": {
                        "title": "TeamUserResponse",
                        "required": [
                            "id",
                            "code",
                            "name",
                            "enabled",
                            "collaborators"
                        ],
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "code": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            },
                            "enabled": {
                                "type": "boolean"
                            },
                            "description": {
                                "type": "string"
                            },
                            "collaborators": {
                                "$ref": "#/definitions/Collaborators"
                            }
                        },
                        "$resolvedRef": "/components/schemas/TeamUserResponse"
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "argTypeMap": {
                "team_code": {
                    "title": "Team Code",
                    "type": "string",
                    "nullable": false
                }
            },
            "headers": {
                "accept": "application/json"
            }
        },
        {
            "method": "POST",
            "path": "/teams/{args.team_code}/refresh",
            "type": "mutation",
            "field": "refresh_teams__team_code__refresh_post",
            "description": "Refresh",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "204": {
                    "responseSchema": {
                        "type": "null",
                        "description": "Successful Response",
                        "title": "refresh_teams__team_code__refresh_post_204_response"
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "argTypeMap": {
                "team_code": {
                    "title": "Team Code",
                    "type": "string",
                    "nullable": false
                }
            },
            "headers": {
                "accept": "application/json"
            }
        },
        {
            "method": "GET",
            "path": "/teams/{args.team_code}/applications",
            "type": "query",
            "field": "get_applications_by_team_code_teams__team_code__applications_get",
            "description": "Get Applications By Team Code",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "200": {
                    "responseSchema": {
                        "title": "Response Get Applications By Team Code Teams  Team Code  Applications Get",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "argTypeMap": {
                "team_code": {
                    "title": "Team Code",
                    "type": "string",
                    "nullable": false
                }
            },
            "headers": {
                "accept": "application/json"
            }
        },
        {
            "method": "POST",
            "path": "/teams/exit/collaborator",
            "type": "mutation",
            "field": "exit_collaborator_teams_exit_collaborator_post",
            "description": "Exit Collaborator",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "204": {
                    "responseSchema": {
                        "type": "null",
                        "description": "Successful Response",
                        "title": "exit_collaborator_teams_exit_collaborator_post_204_response"
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "requestSchema": {
                "title": "SquidExitCollaboratorMessage",
                "required": [
                    "msg"
                ],
                "type": "object",
                "properties": {
                    "msg": {
                        "$ref": "#/definitions/SquidExitCollaboratorDetail"
                    }
                },
                "$resolvedRef": "/components/schemas/SquidExitCollaboratorMessage"
            },
            "headers": {
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        },
        {
            "method": "GET",
            "path": "/role",
            "type": "query",
            "field": "list_role_get",
            "description": "List",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "200": {
                    "responseSchema": {
                        "title": "Response List Role Get",
                        "type": "array",
                        "items": {
                            "title": "RoleResponse",
                            "required": [
                                "id",
                                "name"
                            ],
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                }
                            },
                            "$resolvedRef": "/components/schemas/RoleResponse"
                        }
                    }
                }
            },
            "headers": {
                "accept": "application/json"
            }
        },
        {
            "method": "POST",
            "path": "/role",
            "type": "mutation",
            "field": "create_role_post",
            "description": "Create",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {
                "201": {
                    "responseSchema": {
                        "title": "RoleResponse",
                        "required": [
                            "id",
                            "name"
                        ],
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "name": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            }
                        },
                        "$resolvedRef": "/components/schemas/RoleResponse"
                    }
                },
                "422": {
                    "responseSchema": {
                        "title": "HTTPValidationError",
                        "type": "object",
                        "properties": {
                            "detail": {
                                "$ref": "#/definitions/Detail"
                            }
                        },
                        "$resolvedRef": "/components/schemas/HTTPValidationError"
                    }
                }
            },
            "requestSchema": {
                "title": "RoleRequest",
                "required": [
                    "name"
                ],
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    }
                },
                "$resolvedRef": "/components/schemas/RoleRequest"
            },
            "headers": {
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        },
        {
            "method": "POST",
            "path": "/temporary-role/sync",
            "type": "mutation",
            "field": "sync_temporary_role_sync_post",
            "description": "Sync",
            "operationHeaders": {
                "Content-Type": "application/json"
            },
            "responseByStatusCode": {},
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
                    "ping_ping_get": {
                        "$ref": "#/definitions/Any"
                    },
                    "list_teams_get": {
                        "$ref": "#/definitions/list_teams_get_response"
                    },
                    "get_by_team_code_teams__team_code__get": {
                        "$ref": "#/definitions/get_by_team_code_teams__team_code__get_response"
                    },
                    "get_teams_by_username_teams_user__username__get": {
                        "$ref": "#/definitions/get_teams_by_username_teams_user__username__get_response"
                    },
                    "get_team_collaborators_teams__team_code__collaborators_get": {
                        "$ref": "#/definitions/get_team_collaborators_teams__team_code__collaborators_get_response"
                    },
                    "get_applications_by_team_code_teams__team_code__applications_get": {
                        "$ref": "#/definitions/get_applications_by_team_code_teams__team_code__applications_get_response"
                    },
                    "list_role_get": {
                        "$ref": "#/definitions/Response_SPACE_List_SPACE_Role_SPACE_Get"
                    }
                }
            },
            "Any": {
                "title": "Any",
                "oneOf": [
                    {
                        "type": "string"
                    },
                    {
                        "type": "integer"
                    },
                    {
                        "type": "boolean"
                    },
                    {
                        "type": "number"
                    },
                    {
                        "$ref": "#/definitions/query_ping_ping_get_oneOf_4"
                    }
                ]
            },
            "query_ping_ping_get_oneOf_4": {
                "type": "object",
                "additionalProperties": true,
                "title": "query_ping_ping_get_oneOf_4"
            },
            "list_teams_get_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"200\":0,\"422\":1}",
                "title": "list_teams_get_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/Response_SPACE_List_SPACE_Teams_SPACE_Get"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "Response_SPACE_List_SPACE_Teams_SPACE_Get": {
                "title": "Response List Teams Get",
                "type": "array",
                "items": {
                    "title": "TeamResponse",
                    "required": [
                        "id",
                        "code",
                        "name",
                        "enabled"
                    ],
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "code": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        },
                        "enabled": {
                            "type": "boolean"
                        },
                        "description": {
                            "type": "string"
                        }
                    },
                    "$resolvedRef": "/components/schemas/TeamResponse"
                }
            },
            "TeamResponse": {
                "title": "TeamResponse",
                "required": [
                    "id",
                    "code",
                    "name",
                    "enabled"
                ],
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "code": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "enabled": {
                        "type": "boolean"
                    },
                    "description": {
                        "type": "string"
                    }
                },
                "$resolvedRef": "/components/schemas/TeamResponse"
            },
            "HTTPValidationError": {
                "title": "HTTPValidationError",
                "type": "object",
                "properties": {
                    "detail": {
                        "$ref": "#/definitions/Detail"
                    }
                },
                "$resolvedRef": "/components/schemas/HTTPValidationError"
            },
            "Detail": {
                "title": "Detail",
                "type": "array",
                "items": {
                    "title": "ValidationError",
                    "required": [
                        "loc",
                        "msg",
                        "type"
                    ],
                    "type": "object",
                    "properties": {
                        "loc": {
                            "$ref": "#/definitions/Location"
                        },
                        "msg": {
                            "type": "string"
                        },
                        "type": {
                            "type": "string"
                        }
                    },
                    "$resolvedRef": "/components/schemas/ValidationError"
                }
            },
            "ValidationError": {
                "title": "ValidationError",
                "required": [
                    "loc",
                    "msg",
                    "type"
                ],
                "type": "object",
                "properties": {
                    "loc": {
                        "$ref": "#/definitions/Location"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "type": {
                        "type": "string"
                    }
                },
                "$resolvedRef": "/components/schemas/ValidationError"
            },
            "Location": {
                "title": "Location",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "get_by_team_code_teams__team_code__get_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"200\":0,\"422\":1}",
                "title": "get_by_team_code_teams__team_code__get_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/TeamResponse"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "get_teams_by_username_teams_user__username__get_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"200\":0,\"422\":1}",
                "title": "get_teams_by_username_teams_user__username__get_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/TeamsByUserListResponse"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "TeamsByUserListResponse": {
                "title": "TeamsByUserListResponse",
                "type": "array",
                "items": {
                    "title": "TeamUserListResponse",
                    "required": [
                        "id",
                        "code",
                        "name",
                        "enabled",
                        "role",
                        "isTemporary"
                    ],
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "code": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        },
                        "enabled": {
                            "type": "boolean"
                        },
                        "role": {
                            "type": "string"
                        },
                        "isTemporary": {
                            "type": "boolean"
                        }
                    },
                    "$resolvedRef": "/components/schemas/TeamUserListResponse"
                },
                "$resolvedRef": "/components/schemas/TeamsByUserListResponse"
            },
            "TeamUserListResponse": {
                "title": "TeamUserListResponse",
                "required": [
                    "id",
                    "code",
                    "name",
                    "enabled",
                    "role",
                    "isTemporary"
                ],
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "code": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "enabled": {
                        "type": "boolean"
                    },
                    "role": {
                        "type": "string"
                    },
                    "isTemporary": {
                        "type": "boolean"
                    }
                },
                "$resolvedRef": "/components/schemas/TeamUserListResponse"
            },
            "get_team_collaborators_teams__team_code__collaborators_get_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"200\":0,\"422\":1}",
                "title": "get_team_collaborators_teams__team_code__collaborators_get_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/TeamUserResponse"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "TeamUserResponse": {
                "title": "TeamUserResponse",
                "required": [
                    "id",
                    "code",
                    "name",
                    "enabled",
                    "collaborators"
                ],
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "code": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "enabled": {
                        "type": "boolean"
                    },
                    "description": {
                        "type": "string"
                    },
                    "collaborators": {
                        "$ref": "#/definitions/Collaborators"
                    }
                },
                "$resolvedRef": "/components/schemas/TeamUserResponse"
            },
            "Collaborators": {
                "title": "Collaborators",
                "type": "array",
                "items": {
                    "title": "UserResponse",
                    "required": [
                        "id",
                        "role",
                        "username",
                        "name",
                        "email",
                        "is_temporary",
                        "active"
                    ],
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "role": {
                            "type": "string"
                        },
                        "username": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "is_temporary": {
                            "type": "boolean"
                        },
                        "active": {
                            "type": "boolean"
                        },
                        "from_date": {
                            "type": "string"
                        },
                        "to_date": {
                            "type": "string"
                        },
                        "applications": {
                            "$ref": "#/definitions/Applications"
                        }
                    },
                    "$resolvedRef": "/components/schemas/UserResponse"
                }
            },
            "UserResponse": {
                "title": "UserResponse",
                "required": [
                    "id",
                    "role",
                    "username",
                    "name",
                    "email",
                    "is_temporary",
                    "active"
                ],
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "role": {
                        "type": "string"
                    },
                    "username": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "is_temporary": {
                        "type": "boolean"
                    },
                    "active": {
                        "type": "boolean"
                    },
                    "from_date": {
                        "type": "string"
                    },
                    "to_date": {
                        "type": "string"
                    },
                    "applications": {
                        "$ref": "#/definitions/Applications"
                    }
                },
                "$resolvedRef": "/components/schemas/UserResponse"
            },
            "Applications": {
                "title": "Applications",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "default": []
            },
            "get_applications_by_team_code_teams__team_code__applications_get_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"200\":0,\"422\":1}",
                "title": "get_applications_by_team_code_teams__team_code__applications_get_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/Response_SPACE_Get_SPACE_Applications_SPACE_By_SPACE_Team_SPACE_Code_SPACE_Teams_SPACE__SPACE_Team_SPACE_Code_SPACE__SPACE_Applications_SPACE_Get"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "Response_SPACE_Get_SPACE_Applications_SPACE_By_SPACE_Team_SPACE_Code_SPACE_Teams_SPACE__SPACE_Team_SPACE_Code_SPACE__SPACE_Applications_SPACE_Get": {
                "title": "Response Get Applications By Team Code Teams  Team Code  Applications Get",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "Response_SPACE_List_SPACE_Role_SPACE_Get": {
                "title": "Response List Role Get",
                "type": "array",
                "items": {
                    "title": "RoleResponse",
                    "required": [
                        "id",
                        "name"
                    ],
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "name": {
                            "type": "string"
                        },
                        "description": {
                            "type": "string"
                        }
                    },
                    "$resolvedRef": "/components/schemas/RoleResponse"
                }
            },
            "RoleResponse": {
                "title": "RoleResponse",
                "required": [
                    "id",
                    "name"
                ],
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    }
                },
                "$resolvedRef": "/components/schemas/RoleResponse"
            },
            "QueryInput": {
                "type": "object",
                "title": "QueryInput",
                "properties": {
                    "list_teams_get": {
                        "$ref": "#/definitions/queryInput_list_teams_get"
                    },
                    "get_by_team_code_teams__team_code__get": {
                        "$ref": "#/definitions/queryInput_get_by_team_code_teams__team_code__get"
                    },
                    "get_teams_by_username_teams_user__username__get": {
                        "$ref": "#/definitions/queryInput_get_teams_by_username_teams_user__username__get"
                    },
                    "get_team_collaborators_teams__team_code__collaborators_get": {
                        "$ref": "#/definitions/queryInput_get_team_collaborators_teams__team_code__collaborators_get"
                    },
                    "get_applications_by_team_code_teams__team_code__applications_get": {
                        "$ref": "#/definitions/queryInput_get_applications_by_team_code_teams__team_code__applications_get"
                    }
                }
            },
            "queryInput_list_teams_get": {
                "title": "queryInput_list_teams_get",
                "type": "object",
                "properties": {
                    "username": {
                        "$ref": "#/definitions/Username"
                    },
                    "match": {
                        "$ref": "#/definitions/Match"
                    },
                    "orderTeam": {
                        "$ref": "#/definitions/TeamOrderEnum"
                    },
                    "limit": {
                        "$ref": "#/definitions/Limit"
                    }
                }
            },
            "Username": {
                "title": "Username",
                "type": "string"
            },
            "Match": {
                "title": "Match",
                "type": "string"
            },
            "TeamOrderEnum": {
                "title": "TeamOrderEnum",
                "enum": [
                    "asc",
                    "desc"
                ],
                "type": "string",
                "description": "An enumeration.",
                "$resolvedRef": "/components/schemas/TeamOrderEnum"
            },
            "Limit": {
                "title": "Limit",
                "type": "integer"
            },
            "queryInput_get_by_team_code_teams__team_code__get": {
                "title": "queryInput_get_by_team_code_teams__team_code__get",
                "type": "object",
                "properties": {
                    "team_code": {
                        "$ref": "#/definitions/Team_SPACE_Code"
                    }
                }
            },
            "Team_SPACE_Code": {
                "title": "Team Code",
                "type": "string",
                "nullable": false
            },
            "queryInput_get_teams_by_username_teams_user__username__get": {
                "title": "queryInput_get_teams_by_username_teams_user__username__get",
                "type": "object",
                "properties": {
                    "username": {
                        "type": "string",
                        "nullable": false
                    }
                }
            },
            "queryInput_get_team_collaborators_teams__team_code__collaborators_get": {
                "title": "queryInput_get_team_collaborators_teams__team_code__collaborators_get",
                "type": "object",
                "properties": {
                    "team_code": {
                        "$ref": "#/definitions/Team_SPACE_Code"
                    }
                }
            },
            "queryInput_get_applications_by_team_code_teams__team_code__applications_get": {
                "title": "queryInput_get_applications_by_team_code_teams__team_code__applications_get",
                "type": "object",
                "properties": {
                    "team_code": {
                        "$ref": "#/definitions/Team_SPACE_Code"
                    }
                }
            },
            "Mutation": {
                "type": "object",
                "title": "Mutation",
                "properties": {
                    "create_teams_post": {
                        "$ref": "#/definitions/create_teams_post_response"
                    },
                    "update_teams__team_code__put": {
                        "$ref": "#/definitions/update_teams__team_code__put_response"
                    },
                    "delete_teams__team_code__delete": {
                        "$ref": "#/definitions/delete_teams__team_code__delete_response"
                    },
                    "refresh_teams__team_code__refresh_post": {
                        "$ref": "#/definitions/refresh_teams__team_code__refresh_post_response"
                    },
                    "exit_collaborator_teams_exit_collaborator_post": {
                        "$ref": "#/definitions/exit_collaborator_teams_exit_collaborator_post_response"
                    },
                    "create_role_post": {
                        "$ref": "#/definitions/create_role_post_response"
                    },
                    "sync_temporary_role_sync_post": {
                        "$ref": "#/definitions/Any"
                    }
                }
            },
            "create_teams_post_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"201\":0,\"422\":1}",
                "title": "create_teams_post_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/TeamResponse"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "update_teams__team_code__put_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"204\":0,\"422\":1}",
                "title": "update_teams__team_code__put_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/update_teams__team_code__put_204_response"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "update_teams__team_code__put_204_response": {
                "type": "null",
                "description": "Successful Response",
                "title": "update_teams__team_code__put_204_response"
            },
            "delete_teams__team_code__delete_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"204\":0,\"422\":1}",
                "title": "delete_teams__team_code__delete_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/delete_teams__team_code__delete_204_response"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "delete_teams__team_code__delete_204_response": {
                "type": "null",
                "description": "Successful Response",
                "title": "delete_teams__team_code__delete_204_response"
            },
            "refresh_teams__team_code__refresh_post_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"204\":0,\"422\":1}",
                "title": "refresh_teams__team_code__refresh_post_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/refresh_teams__team_code__refresh_post_204_response"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "refresh_teams__team_code__refresh_post_204_response": {
                "type": "null",
                "description": "Successful Response",
                "title": "refresh_teams__team_code__refresh_post_204_response"
            },
            "exit_collaborator_teams_exit_collaborator_post_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"204\":0,\"422\":1}",
                "title": "exit_collaborator_teams_exit_collaborator_post_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/exit_collaborator_teams_exit_collaborator_post_204_response"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "exit_collaborator_teams_exit_collaborator_post_204_response": {
                "type": "null",
                "description": "Successful Response",
                "title": "exit_collaborator_teams_exit_collaborator_post_204_response"
            },
            "create_role_post_response": {
                "$comment": "statusCodeOneOfIndexMap:{\"201\":0,\"422\":1}",
                "title": "create_role_post_response",
                "oneOf": [
                    {
                        "$ref": "#/definitions/RoleResponse"
                    },
                    {
                        "$ref": "#/definitions/HTTPValidationError"
                    }
                ]
            },
            "MutationInput": {
                "type": "object",
                "title": "MutationInput",
                "properties": {
                    "create_teams_post": {
                        "$ref": "#/definitions/mutationInput_create_teams_post"
                    },
                    "update_teams__team_code__put": {
                        "$ref": "#/definitions/mutationInput_update_teams__team_code__put"
                    },
                    "delete_teams__team_code__delete": {
                        "$ref": "#/definitions/mutationInput_delete_teams__team_code__delete"
                    },
                    "refresh_teams__team_code__refresh_post": {
                        "$ref": "#/definitions/mutationInput_refresh_teams__team_code__refresh_post"
                    },
                    "exit_collaborator_teams_exit_collaborator_post": {
                        "$ref": "#/definitions/mutationInput_exit_collaborator_teams_exit_collaborator_post"
                    },
                    "create_role_post": {
                        "$ref": "#/definitions/mutationInput_create_role_post"
                    }
                }
            },
            "mutationInput_create_teams_post": {
                "title": "mutationInput_create_teams_post",
                "type": "object",
                "properties": {
                    "x_tiger_token": {
                        "$ref": "#/definitions/X-Tiger-Token"
                    },
                    "input": {
                        "$ref": "#/definitions/TeamRequest"
                    }
                }
            },
            "X-Tiger-Token": {
                "title": "X-Tiger-Token",
                "type": "string"
            },
            "TeamRequest": {
                "title": "TeamRequest",
                "required": [
                    "name",
                    "collaborators"
                ],
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "collaborators": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/TeamUserRequest"
                        }
                    }
                },
                "$resolvedRef": "/components/schemas/TeamRequest"
            },
            "TeamUserRequest": {
                "title": "TeamUserRequest",
                "required": [
                    "username",
                    "role_name",
                    "email",
                    "is_temporary"
                ],
                "type": "object",
                "properties": {
                    "username": {
                        "type": "string"
                    },
                    "role_name": {
                        "type": "string"
                    },
                    "full_name": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "from_date": {
                        "$ref": "#/definitions/From_SPACE_Date"
                    },
                    "to_date": {
                        "$ref": "#/definitions/To_SPACE_Date"
                    },
                    "is_temporary": {
                        "type": "boolean"
                    },
                    "active": {
                        "type": "boolean"
                    },
                    "applications": {
                        "$ref": "#/definitions/Applications"
                    }
                },
                "$resolvedRef": "/components/schemas/TeamUserRequest"
            },
            "From_SPACE_Date": {
                "title": "From Date",
                "type": "string",
                "format": "date-time"
            },
            "To_SPACE_Date": {
                "title": "To Date",
                "type": "string",
                "format": "date-time"
            },
            "mutationInput_update_teams__team_code__put": {
                "title": "mutationInput_update_teams__team_code__put",
                "type": "object",
                "properties": {
                    "x_tiger_token": {
                        "$ref": "#/definitions/X-Tiger-Token"
                    },
                    "team_code": {
                        "$ref": "#/definitions/Team_SPACE_Code"
                    },
                    "input": {
                        "$ref": "#/definitions/TeamUpdateRequest"
                    }
                }
            },
            "TeamUpdateRequest": {
                "title": "TeamUpdateRequest",
                "required": [
                    "collaborators"
                ],
                "type": "object",
                "properties": {
                    "description": {
                        "type": "string"
                    },
                    "collaborators": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/TeamUserRequest"
                        }
                    }
                },
                "$resolvedRef": "/components/schemas/TeamUpdateRequest"
            },
            "mutationInput_delete_teams__team_code__delete": {
                "title": "mutationInput_delete_teams__team_code__delete",
                "type": "object",
                "properties": {
                    "x_tiger_token": {
                        "$ref": "#/definitions/X-Tiger-Token"
                    },
                    "team_code": {
                        "$ref": "#/definitions/Team_SPACE_Code"
                    }
                }
            },
            "mutationInput_refresh_teams__team_code__refresh_post": {
                "title": "mutationInput_refresh_teams__team_code__refresh_post",
                "type": "object",
                "properties": {
                    "team_code": {
                        "$ref": "#/definitions/Team_SPACE_Code"
                    }
                }
            },
            "mutationInput_exit_collaborator_teams_exit_collaborator_post": {
                "title": "mutationInput_exit_collaborator_teams_exit_collaborator_post",
                "type": "object",
                "properties": {
                    "input": {
                        "$ref": "#/definitions/SquidExitCollaboratorMessage"
                    }
                }
            },
            "SquidExitCollaboratorMessage": {
                "title": "SquidExitCollaboratorMessage",
                "required": [
                    "msg"
                ],
                "type": "object",
                "properties": {
                    "msg": {
                        "$ref": "#/definitions/SquidExitCollaboratorDetail"
                    }
                },
                "$resolvedRef": "/components/schemas/SquidExitCollaboratorMessage"
            },
            "SquidExitCollaboratorDetail": {
                "title": "SquidExitCollaboratorDetail",
                "required": [
                    "details"
                ],
                "type": "object",
                "properties": {
                    "details": {
                        "$ref": "#/definitions/SquidExitCollaboratorUsername"
                    }
                },
                "$resolvedRef": "/components/schemas/SquidExitCollaboratorDetail"
            },
            "SquidExitCollaboratorUsername": {
                "title": "SquidExitCollaboratorUsername",
                "required": [
                    "username"
                ],
                "type": "object",
                "properties": {
                    "username": {
                        "type": "string"
                    }
                },
                "$resolvedRef": "/components/schemas/SquidExitCollaboratorUsername"
            },
            "mutationInput_create_role_post": {
                "title": "mutationInput_create_role_post",
                "type": "object",
                "properties": {
                    "input": {
                        "$ref": "#/definitions/RoleRequest"
                    }
                }
            },
            "RoleRequest": {
                "title": "RoleRequest",
                "required": [
                    "name"
                ],
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    }
                },
                "$resolvedRef": "/components/schemas/RoleRequest"
            }
        }
    }
};
