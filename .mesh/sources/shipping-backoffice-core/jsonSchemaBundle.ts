// @ts-nocheck
export default {
  "name": "shipping-backoffice-core",
  "baseUrl": "https://internal-api.mercadolibre.com",
  "operations": [
    {
      "method": "GET",
      "path": "/fulfillment/withdrawal_requests/{args.id}",
      "type": "query",
      "field": "getWithdrawalsRequest",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "object",
            "properties": {
              "appointments": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_appointment"
                }
              },
              "shipment": {
                "$ref": "#/definitions/Shipment"
              },
              "fee": {
                "$ref": "#/definitions/Fee"
              },
              "appointment": {
                "$ref": "#/definitions/Appointment"
              },
              "units": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_unit_withdrawal_request_unit_detail"
                }
              },
              "title": {
                "type": "string"
              },
              "type": {
                "$ref": "#/definitions/query_getWithdrawalsRequest_type"
              },
              "version": {
                "type": "string"
              },
              "id": {
                "format": "int64",
                "type": "integer"
              },
              "status": {
                "$ref": "#/definitions/query_getWithdrawalsRequest_status"
              },
              "default_warehouse_id": {
                "type": "string"
              },
              "sub_status": {
                "$ref": "#/definitions/DELAYED_const"
              },
              "dispatch_id": {
                "type": "string"
              },
              "withdrawal_ids": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "format": "int64",
                  "type": "integer"
                }
              },
              "last_updated": {
                "type": "string"
              },
              "seller_id": {
                "format": "int64",
                "type": "integer"
              },
              "site_id": {
                "type": "string"
              },
              "print_action": {
                "$ref": "#/definitions/query_getWithdrawalsRequest_print_action"
              }
            },
            "title": "WithdrawalRequest"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "format": "int64",
          "type": "integer",
          "name": "id",
          "nullable": false
        }
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "DELETE",
      "path": "/fulfillment/withdrawal_requests/{args.id}",
      "type": "mutation",
      "field": "deleteWithdrawalRequestProjection",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "string"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "format": "int64",
          "type": "integer",
          "name": "id",
          "nullable": false
        }
      },
      "headers": {
        "accept": "*/*"
      }
    },
    {
      "method": "GET",
      "path": "/fulfillment/withdrawal_requests/search",
      "type": "query",
      "field": "searchWithdrawalRequests",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "object",
            "properties": {
              "paging": {
                "$ref": "#/definitions/Paging"
              },
              "sort": {
                "$ref": "#/definitions/Sorter"
              },
              "results": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_withdrawal_request"
                }
              },
              "applied_filters": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_filter"
                }
              },
              "available_filters": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "title": "SearchResultsWithdrawalRequest"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "format": "int64",
            "type": "integer"
          },
          "name": "id"
        },
        "seller_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "format": "int64",
            "type": "integer"
          },
          "name": "seller_id"
        },
        "status": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "status"
        },
        "site_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "site_id"
        },
        "type": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "type"
        },
        "version": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "version"
        },
        "inventory_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "inventory_id"
        },
        "appointment_date": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "appointment_date"
        },
        "title": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "title"
        },
        "query": {
          "type": "string",
          "name": "query"
        },
        "shipment_type": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "shipment_type"
        },
        "default_warehouse_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "default_warehouse_id"
        },
        "appointment_date_from": {
          "type": "string",
          "name": "appointment_date_from"
        },
        "appointment_date_to": {
          "type": "string",
          "name": "appointment_date_to"
        },
        "sort_by": {
          "type": "string",
          "name": "sort_by"
        },
        "offset": {
          "default": 0,
          "format": "int32",
          "type": "integer",
          "name": "offset"
        },
        "limit": {
          "default": 50,
          "format": "int32",
          "type": "integer",
          "name": "limit"
        }
      },
      "queryParamArgMap": {
        "id": "id",
        "seller_id": "seller_id",
        "status": "status",
        "site_id": "site_id",
        "type": "type",
        "version": "version",
        "inventory_id": "inventory_id",
        "appointment_date": "appointment_date",
        "title": "title",
        "query": "query",
        "shipment_type": "shipment_type",
        "default_warehouse_id": "default_warehouse_id",
        "appointment_date_from": "appointment_date_from",
        "appointment_date_to": "appointment_date_to",
        "sort_by": "sort_by",
        "offset": "offset",
        "limit": "limit"
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "GET",
      "path": "/fulfillment/withdrawal_requests/{args.id}/locations",
      "type": "query",
      "field": "getWithdrawalsRequestLocations",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "string"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "format": "int64",
          "type": "integer",
          "name": "id",
          "nullable": false
        }
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "GET",
      "path": "/fulfillment/withdrawal_requests/{args.id}/history",
      "type": "query",
      "field": "getWithdrawalsRequestHistory",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "status": {
                  "$ref": "#/definitions/query_getWithdrawalsRequestHistory_items_status"
                },
                "event_date": {
                  "type": "string"
                }
              },
              "title": "StatusHistoryWithdrawalsRequestStatus"
            },
            "title": "getWithdrawalsRequestHistory_200_response"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "format": "int64",
          "type": "integer",
          "name": "id",
          "nullable": false
        }
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "GET",
      "path": "/fulfillment/withdrawals/{args.id}",
      "type": "query",
      "field": "getWithdrawal",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "object",
            "properties": {
              "appointments": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_appointment_document"
                }
              },
              "code": {
                "type": "string"
              },
              "shipment": {
                "$ref": "#/definitions/Shipment"
              },
              "appointment": {
                "$ref": "#/definitions/Appointment"
              },
              "units": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_unit_withdrawal_unit_detail"
                }
              },
              "id": {
                "format": "int64",
                "type": "integer"
              },
              "status": {
                "$ref": "#/definitions/query_getWithdrawal_status"
              },
              "transfer_plan_id": {
                "format": "int64",
                "type": "integer"
              },
              "sub_status": {
                "$ref": "#/definitions/DELAYED_const"
              },
              "dispatch_id": {
                "type": "string"
              },
              "last_updated": {
                "type": "string"
              },
              "date_created": {
                "type": "string"
              },
              "seller_id": {
                "format": "int64",
                "type": "integer"
              },
              "warehouse_id": {
                "type": "string"
              },
              "site_id": {
                "type": "string"
              },
              "withdrawal_request_id": {
                "format": "int64",
                "type": "integer"
              },
              "print_action": {
                "$ref": "#/definitions/query_getWithdrawal_print_action"
              }
            },
            "title": "Withdrawal"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "format": "int64",
          "type": "integer",
          "name": "id",
          "nullable": false
        }
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "DELETE",
      "path": "/fulfillment/withdrawals/{args.id}",
      "type": "mutation",
      "field": "deleteWithdrawalProjection",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "string"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "format": "int64",
          "type": "integer",
          "name": "id",
          "nullable": false
        }
      },
      "headers": {
        "accept": "*/*"
      }
    },
    {
      "method": "GET",
      "path": "/fulfillment/withdrawals/search",
      "type": "query",
      "field": "searchWithdrawals",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "object",
            "properties": {
              "paging": {
                "$ref": "#/definitions/Paging"
              },
              "sort": {
                "$ref": "#/definitions/Sorter"
              },
              "results": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_withdrawal"
                }
              },
              "applied_filters": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_filter"
                }
              },
              "available_filters": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "title": "SearchResultsWithdrawal"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "format": "int64",
            "type": "integer"
          },
          "name": "id"
        },
        "withdrawal_request_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "format": "int64",
            "type": "integer"
          },
          "name": "withdrawal_request_id"
        },
        "code": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "code"
        },
        "seller_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "format": "int64",
            "type": "integer"
          },
          "name": "seller_id"
        },
        "status": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "status"
        },
        "warehouse_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "warehouse_id"
        },
        "site_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "site_id"
        },
        "inventory_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "inventory_id"
        },
        "appointment_date": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "appointment_date"
        },
        "appointment_date_from": {
          "type": "string",
          "name": "appointment_date_from"
        },
        "appointment_date_to": {
          "type": "string",
          "name": "appointment_date_to"
        },
        "shipment_type": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "shipment_type"
        },
        "query": {
          "type": "string",
          "name": "query"
        },
        "sort_by": {
          "type": "string",
          "name": "sort_by"
        },
        "offset": {
          "default": 0,
          "format": "int32",
          "type": "integer",
          "name": "offset"
        },
        "limit": {
          "default": 50,
          "format": "int32",
          "type": "integer",
          "name": "limit"
        }
      },
      "queryParamArgMap": {
        "id": "id",
        "withdrawal_request_id": "withdrawal_request_id",
        "code": "code",
        "seller_id": "seller_id",
        "status": "status",
        "warehouse_id": "warehouse_id",
        "site_id": "site_id",
        "inventory_id": "inventory_id",
        "appointment_date": "appointment_date",
        "appointment_date_from": "appointment_date_from",
        "appointment_date_to": "appointment_date_to",
        "shipment_type": "shipment_type",
        "query": "query",
        "sort_by": "sort_by",
        "offset": "offset",
        "limit": "limit"
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "POST",
      "path": "/fulfillment/withdrawal_requests/events/messages",
      "type": "mutation",
      "field": "processWithdrawalRequestEventMessage",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "string"
          }
        }
      },
      "requestSchema": {
        "type": "object",
        "properties": {
          "msg": {
            "$ref": "#/definitions/EventMessage"
          }
        },
        "title": "BigQueueMessage"
      },
      "headers": {
        "Content-Type": "application/json",
        "accept": "*/*"
      }
    },
    {
      "method": "POST",
      "path": "/fulfillment/withdrawals/events/messages",
      "type": "mutation",
      "field": "processWithdrawalEventMessage",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "string"
          }
        }
      },
      "requestSchema": {
        "type": "object",
        "properties": {
          "msg": {
            "$ref": "#/definitions/EventMessage"
          }
        },
        "title": "BigQueueMessage"
      },
      "headers": {
        "Content-Type": "application/json",
        "accept": "*/*"
      }
    },
    {
      "method": "POST",
      "path": "/fulfillment/withdrawal_containers/events/messages",
      "type": "mutation",
      "field": "processWithdrawalEventMessage_1",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "string"
          }
        }
      },
      "requestSchema": {
        "type": "object",
        "properties": {
          "msg": {
            "$ref": "#/definitions/EventMessage"
          }
        },
        "title": "BigQueueMessage"
      },
      "headers": {
        "Content-Type": "application/json",
        "accept": "*/*"
      }
    },
    {
      "method": "GET",
      "path": "/fulfillment/withdrawals/{args.code}/ready_to_dispatch",
      "type": "query",
      "field": "getWithdrawalReadyToDispatchInfo",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "object",
            "properties": {
              "constraint": {
                "$ref": "#/definitions/query_getWithdrawalReadyToDispatchInfo_constraint"
              },
              "ready_to_dispatch": {
                "type": "boolean"
              },
              "dispatch_channel": {
                "type": "string"
              }
            },
            "title": "DispatchInfo"
          }
        }
      },
      "argTypeMap": {
        "code": {
          "type": "string",
          "name": "code",
          "nullable": false
        }
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "GET",
      "path": "/fulfillment/withdrawal_containers/{args.id}",
      "type": "query",
      "field": "getWithdrawalsContainer",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "object",
            "properties": {
              "shipment": {
                "$ref": "#/definitions/ContainerShipment"
              },
              "movements": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_movement"
                }
              },
              "units": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_unit_unit_detail"
                }
              },
              "id": {
                "type": "string"
              },
              "status": {
                "$ref": "#/definitions/query_getWithdrawalsContainer_status"
              },
              "dimensions": {
                "$ref": "#/definitions/Dimensions"
              },
              "withdrawal_id": {
                "format": "int64",
                "type": "integer"
              },
              "parcel_id": {
                "type": "string"
              },
              "last_updated": {
                "type": "string"
              },
              "seller_id": {
                "format": "int64",
                "type": "integer"
              },
              "warehouse_id": {
                "type": "string"
              },
              "site_id": {
                "type": "string"
              },
              "storage_address": {
                "type": "string"
              }
            },
            "title": "WithdrawalContainer"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "type": "string",
          "name": "id",
          "nullable": false
        }
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "DELETE",
      "path": "/fulfillment/withdrawal_containers/{args.id}",
      "type": "mutation",
      "field": "deleteWithdrawalContainerProjection",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "string"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "type": "string",
          "name": "id",
          "nullable": false
        }
      },
      "headers": {
        "accept": "*/*"
      }
    },
    {
      "method": "GET",
      "path": "/fulfillment/withdrawal_containers/search",
      "type": "query",
      "field": "searchWithdrawalContainers",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "object",
            "properties": {
              "paging": {
                "$ref": "#/definitions/Paging"
              },
              "sort": {
                "$ref": "#/definitions/Sorter"
              },
              "results": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_withdrawal_container"
                }
              },
              "applied_filters": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/_filter"
                }
              },
              "available_filters": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "title": "SearchResultsWithdrawalContainer"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "id"
        },
        "withdrawal_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "format": "int64",
            "type": "integer"
          },
          "name": "withdrawal_id"
        },
        "parcel_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "parcel_id"
        },
        "status": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "status"
        },
        "inventory_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "inventory_id"
        },
        "storage_address": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "storage_address"
        },
        "site_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "site_id"
        },
        "warehouse_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "warehouse_id"
        },
        "shipment_type": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "shipment_type"
        },
        "tracking_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "tracking_id"
        },
        "shipment_order_id": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "type": "string"
          },
          "name": "shipment_order_id"
        },
        "sort_by": {
          "type": "string",
          "name": "sort_by"
        },
        "offset": {
          "default": 0,
          "format": "int32",
          "type": "integer",
          "name": "offset"
        },
        "limit": {
          "default": 50,
          "format": "int32",
          "type": "integer",
          "name": "limit"
        }
      },
      "queryParamArgMap": {
        "id": "id",
        "withdrawal_id": "withdrawal_id",
        "parcel_id": "parcel_id",
        "status": "status",
        "inventory_id": "inventory_id",
        "storage_address": "storage_address",
        "site_id": "site_id",
        "warehouse_id": "warehouse_id",
        "shipment_type": "shipment_type",
        "tracking_id": "tracking_id",
        "shipment_order_id": "shipment_order_id",
        "sort_by": "sort_by",
        "offset": "offset",
        "limit": "limit"
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "GET",
      "path": "/fulfillment/withdrawal_containers/{args.id}/tracking_info",
      "type": "query",
      "field": "getWithdrawalsContainerTrackingInfo",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "object",
            "properties": {
              "address": {
                "$ref": "#/definitions/AddressDTO"
              },
              "user": {
                "$ref": "#/definitions/User"
              },
              "container_id": {
                "type": "string"
              },
              "dimensions": {
                "$ref": "#/definitions/Dimensions"
              },
              "withdrawal_id": {
                "format": "int64",
                "type": "integer"
              },
              "shipment_type": {
                "$ref": "#/definitions/query_getWithdrawalsContainerTrackingInfo_shipment_type"
              },
              "tracking_id": {
                "type": "string"
              }
            },
            "title": "WithdrawalContainerTrackingInfo"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "type": "string",
          "name": "id",
          "nullable": false
        }
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "GET",
      "path": "/fulfillment/withdrawal_containers/{args.id}/documents",
      "type": "query",
      "field": "getDocuments",
      "operationHeaders": {
        "Content-Type": "application/json",
        "accept-version": "2"
      },
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "object",
            "properties": {
              "shipping_label": {
                "type": "string"
              },
              "invoice_labels": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "box_id": {
                "type": "string"
              }
            },
            "title": "ContainerDocuments"
          }
        }
      },
      "argTypeMap": {
        "id": {
          "type": "string",
          "name": "id",
          "nullable": false
        }
      },
      "headers": {
        "accept": "application/json"
      }
    }
  ],
  "operationHeaders": {
    "Content-Type": "application/json",
    "accept-version": "2"
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
          "getWithdrawalsRequest": {
            "$ref": "#/definitions/WithdrawalRequest"
          },
          "searchWithdrawalRequests": {
            "$ref": "#/definitions/SearchResultsWithdrawalRequest"
          },
          "getWithdrawalsRequestLocations": {
            "type": "string"
          },
          "getWithdrawalsRequestHistory": {
            "$ref": "#/definitions/getWithdrawalsRequestHistory_200_response"
          },
          "getWithdrawal": {
            "$ref": "#/definitions/Withdrawal"
          },
          "searchWithdrawals": {
            "$ref": "#/definitions/SearchResultsWithdrawal"
          },
          "getWithdrawalReadyToDispatchInfo": {
            "$ref": "#/definitions/DispatchInfo"
          },
          "getWithdrawalsContainer": {
            "$ref": "#/definitions/WithdrawalContainer"
          },
          "searchWithdrawalContainers": {
            "$ref": "#/definitions/SearchResultsWithdrawalContainer"
          },
          "getWithdrawalsContainerTrackingInfo": {
            "$ref": "#/definitions/WithdrawalContainerTrackingInfo"
          },
          "getDocuments": {
            "$ref": "#/definitions/ContainerDocuments"
          }
        },
        "readOnly": true
      },
      "WithdrawalRequest": {
        "type": "object",
        "properties": {
          "appointments": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_appointment"
            }
          },
          "shipment": {
            "$ref": "#/definitions/Shipment"
          },
          "fee": {
            "$ref": "#/definitions/Fee"
          },
          "appointment": {
            "$ref": "#/definitions/Appointment"
          },
          "units": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_unit_withdrawal_request_unit_detail"
            }
          },
          "title": {
            "type": "string"
          },
          "type": {
            "$ref": "#/definitions/query_getWithdrawalsRequest_type"
          },
          "version": {
            "type": "string"
          },
          "id": {
            "format": "int64",
            "type": "integer"
          },
          "status": {
            "$ref": "#/definitions/query_getWithdrawalsRequest_status"
          },
          "default_warehouse_id": {
            "type": "string"
          },
          "sub_status": {
            "$ref": "#/definitions/DELAYED_const"
          },
          "dispatch_id": {
            "type": "string"
          },
          "withdrawal_ids": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "format": "int64",
              "type": "integer"
            }
          },
          "last_updated": {
            "type": "string"
          },
          "seller_id": {
            "format": "int64",
            "type": "integer"
          },
          "site_id": {
            "type": "string"
          },
          "print_action": {
            "$ref": "#/definitions/query_getWithdrawalsRequest_print_action"
          }
        },
        "title": "WithdrawalRequest"
      },
      "Shipment": {
        "type": "object",
        "properties": {
          "address": {
            "$ref": "#/definitions/Address"
          },
          "type": {
            "$ref": "#/definitions/query_getWithdrawalsRequest_shipment_type"
          }
        },
        "title": "Shipment",
        "$resolvedRef": "/components/schemas/Shipment"
      },
      "Address": {
        "type": "object",
        "properties": {
          "id": {
            "format": "int64",
            "type": "integer"
          }
        },
        "title": "Address"
      },
      "query_getWithdrawalsRequest_shipment_type": {
        "type": "string",
        "enum": [
          "FTL",
          "SPD",
          "SHIPMENT",
          "DISPOSAL",
          "TRANSFER"
        ],
        "title": "query_getWithdrawalsRequest_shipment_type"
      },
      "Fee": {
        "type": "object",
        "properties": {
          "value": {
            "format": "double",
            "type": "number"
          },
          "currency_id": {
            "type": "string"
          }
        },
        "title": "Fee",
        "$resolvedRef": "/components/schemas/Fee"
      },
      "Appointment": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string"
          },
          "from": {
            "type": "string"
          },
          "to": {
            "type": "string"
          },
          "source": {
            "$ref": "#/definitions/query_getWithdrawalsRequest_appointment_source"
          },
          "creation_date": {
            "type": "string"
          }
        },
        "title": "Appointment"
      },
      "query_getWithdrawalsRequest_appointment_source": {
        "type": "string",
        "enum": [
          "SELLER",
          "MELI"
        ],
        "title": "query_getWithdrawalsRequest_appointment_source"
      },
      "query_getWithdrawalsRequest_type": {
        "type": "string",
        "enum": [
          "SWH",
          "MWH"
        ],
        "title": "query_getWithdrawalsRequest_type"
      },
      "query_getWithdrawalsRequest_status": {
        "type": "string",
        "enum": [
          "CREATED",
          "UNITS_IN_PROGRESS",
          "UNITS_COMPLETED",
          "SCHEDULED",
          "PROCESSING",
          "CANCELED",
          "FISCAL_ERROR",
          "READY_TO_DISPATCH",
          "APPOINTMENT_EXPIRED",
          "ABLE_TO_DISCARD",
          "PARTIALLY_SHIPPED",
          "COMPLETED",
          "SHIPPED",
          "UNFULFILLABLE",
          "DISCARDED",
          "DELIVERED",
          "DELIVERED_WITH_DIFFERENCES",
          "NOT_DELIVERED",
          "CONFIRMED"
        ],
        "title": "query_getWithdrawalsRequest_status"
      },
      "DELAYED_const": {
        "type": "string",
        "const": "DELAYED",
        "title": "DELAYED_const"
      },
      "query_getWithdrawalsRequest_print_action": {
        "type": "string",
        "enum": [
          "PRINT",
          "REPRINT",
          "DONE"
        ],
        "title": "query_getWithdrawalsRequest_print_action"
      },
      "SearchResultsWithdrawalRequest": {
        "type": "object",
        "properties": {
          "paging": {
            "$ref": "#/definitions/Paging"
          },
          "sort": {
            "$ref": "#/definitions/Sorter"
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_withdrawal_request"
            }
          },
          "applied_filters": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_filter"
            }
          },
          "available_filters": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "title": "SearchResultsWithdrawalRequest"
      },
      "Paging": {
        "type": "object",
        "properties": {
          "total": {
            "format": "int64",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          }
        },
        "title": "Paging",
        "$resolvedRef": "/components/schemas/Paging"
      },
      "Sorter": {
        "type": "object",
        "properties": {
          "field": {
            "type": "string"
          },
          "order": {
            "$ref": "#/definitions/query_searchWithdrawalRequests_sort_order"
          }
        },
        "title": "Sorter",
        "$resolvedRef": "/components/schemas/Sorter"
      },
      "query_searchWithdrawalRequests_sort_order": {
        "type": "string",
        "enum": [
          "asc",
          "desc"
        ],
        "title": "query_searchWithdrawalRequests_sort_order"
      },
      "getWithdrawalsRequestHistory_200_response": {
        "uniqueItems": true,
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "status": {
              "$ref": "#/definitions/query_getWithdrawalsRequestHistory_items_status"
            },
            "event_date": {
              "type": "string"
            }
          },
          "title": "StatusHistoryWithdrawalsRequestStatus"
        },
        "title": "getWithdrawalsRequestHistory_200_response"
      },
      "StatusHistoryWithdrawalsRequestStatus": {
        "type": "object",
        "properties": {
          "status": {
            "$ref": "#/definitions/query_getWithdrawalsRequestHistory_items_status"
          },
          "event_date": {
            "type": "string"
          }
        },
        "title": "StatusHistoryWithdrawalsRequestStatus"
      },
      "query_getWithdrawalsRequestHistory_items_status": {
        "type": "string",
        "enum": [
          "CREATED",
          "UNITS_IN_PROGRESS",
          "UNITS_COMPLETED",
          "SCHEDULED",
          "PROCESSING",
          "CANCELED",
          "FISCAL_ERROR",
          "READY_TO_DISPATCH",
          "APPOINTMENT_EXPIRED",
          "ABLE_TO_DISCARD",
          "PARTIALLY_SHIPPED",
          "COMPLETED",
          "SHIPPED",
          "UNFULFILLABLE",
          "DISCARDED",
          "DELIVERED",
          "DELIVERED_WITH_DIFFERENCES",
          "NOT_DELIVERED",
          "CONFIRMED"
        ],
        "title": "query_getWithdrawalsRequestHistory_items_status"
      },
      "Withdrawal": {
        "type": "object",
        "properties": {
          "appointments": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_appointment_document"
            }
          },
          "code": {
            "type": "string"
          },
          "shipment": {
            "$ref": "#/definitions/Shipment"
          },
          "appointment": {
            "$ref": "#/definitions/Appointment"
          },
          "units": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_unit_withdrawal_unit_detail"
            }
          },
          "id": {
            "format": "int64",
            "type": "integer"
          },
          "status": {
            "$ref": "#/definitions/query_getWithdrawal_status"
          },
          "transfer_plan_id": {
            "format": "int64",
            "type": "integer"
          },
          "sub_status": {
            "$ref": "#/definitions/DELAYED_const"
          },
          "dispatch_id": {
            "type": "string"
          },
          "last_updated": {
            "type": "string"
          },
          "date_created": {
            "type": "string"
          },
          "seller_id": {
            "format": "int64",
            "type": "integer"
          },
          "warehouse_id": {
            "type": "string"
          },
          "site_id": {
            "type": "string"
          },
          "withdrawal_request_id": {
            "format": "int64",
            "type": "integer"
          },
          "print_action": {
            "$ref": "#/definitions/query_getWithdrawal_print_action"
          }
        },
        "title": "Withdrawal"
      },
      "query_getWithdrawal_status": {
        "type": "string",
        "enum": [
          "CREATED",
          "STOCK_RESERVED",
          "READY_TO_COLLECT",
          "COLLECTING",
          "COLLECTED",
          "READY_TO_DISPATCH",
          "APPOINTMENT_EXPIRED",
          "ABLE_TO_DISCARD",
          "DOCUMENTED",
          "COMPLETED",
          "UNFULFILLABLE",
          "SHIPPED",
          "PARTIALLY_SHIPPED",
          "FISCAL_ERROR",
          "DISCARDED",
          "CANCELED",
          "DELIVERED",
          "DELIVERED_WITH_DIFFERENCES",
          "NOT_DELIVERED"
        ],
        "title": "query_getWithdrawal_status"
      },
      "query_getWithdrawal_print_action": {
        "type": "string",
        "enum": [
          "PRINT",
          "REPRINT",
          "DONE"
        ],
        "title": "query_getWithdrawal_print_action"
      },
      "SearchResultsWithdrawal": {
        "type": "object",
        "properties": {
          "paging": {
            "$ref": "#/definitions/Paging"
          },
          "sort": {
            "$ref": "#/definitions/Sorter"
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_withdrawal"
            }
          },
          "applied_filters": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_filter"
            }
          },
          "available_filters": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "title": "SearchResultsWithdrawal"
      },
      "DispatchInfo": {
        "type": "object",
        "properties": {
          "constraint": {
            "$ref": "#/definitions/query_getWithdrawalReadyToDispatchInfo_constraint"
          },
          "ready_to_dispatch": {
            "type": "boolean"
          },
          "dispatch_channel": {
            "type": "string"
          }
        },
        "title": "DispatchInfo"
      },
      "query_getWithdrawalReadyToDispatchInfo_constraint": {
        "type": "string",
        "enum": [
          "PENDING_PROCESS",
          "PROCESSING",
          "PROCESSED",
          "CANCELLED",
          "FISCAL_ERROR",
          "DOCUMENTED",
          "COMPLETED",
          "UNFULFILLABLE",
          "DISCARDED"
        ],
        "title": "query_getWithdrawalReadyToDispatchInfo_constraint"
      },
      "WithdrawalContainer": {
        "type": "object",
        "properties": {
          "shipment": {
            "$ref": "#/definitions/ContainerShipment"
          },
          "movements": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_movement"
            }
          },
          "units": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_unit_unit_detail"
            }
          },
          "id": {
            "type": "string"
          },
          "status": {
            "$ref": "#/definitions/query_getWithdrawalsContainer_status"
          },
          "dimensions": {
            "$ref": "#/definitions/Dimensions"
          },
          "withdrawal_id": {
            "format": "int64",
            "type": "integer"
          },
          "parcel_id": {
            "type": "string"
          },
          "last_updated": {
            "type": "string"
          },
          "seller_id": {
            "format": "int64",
            "type": "integer"
          },
          "warehouse_id": {
            "type": "string"
          },
          "site_id": {
            "type": "string"
          },
          "storage_address": {
            "type": "string"
          }
        },
        "title": "WithdrawalContainer"
      },
      "ContainerShipment": {
        "type": "object",
        "properties": {
          "address": {
            "$ref": "#/definitions/Address"
          },
          "type": {
            "$ref": "#/definitions/query_getWithdrawalsContainer_shipment_type"
          },
          "tracking": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_tracking_step"
            }
          },
          "order_id": {
            "type": "string"
          },
          "transfer_unit_id": {
            "format": "int64",
            "type": "integer"
          },
          "estimated_delivery_date": {
            "$ref": "#/definitions/Delivery"
          },
          "tracking_id": {
            "type": "string"
          },
          "parcel_id": {
            "type": "string"
          }
        },
        "title": "ContainerShipment"
      },
      "query_getWithdrawalsContainer_shipment_type": {
        "type": "string",
        "enum": [
          "FTL",
          "SPD",
          "SHIPMENT",
          "DISPOSAL",
          "TRANSFER"
        ],
        "title": "query_getWithdrawalsContainer_shipment_type"
      },
      "Delivery": {
        "type": "object",
        "properties": {
          "from": {
            "type": "string"
          },
          "to": {
            "type": "string"
          }
        },
        "title": "Delivery",
        "$resolvedRef": "/components/schemas/Delivery"
      },
      "query_getWithdrawalsContainer_status": {
        "type": "string",
        "enum": [
          "CREATED",
          "STORED",
          "SHIPPED",
          "LOST",
          "DAMAGED",
          "TRACKED",
          "READY_TO_DISPATCH",
          "IN_TRANSFER",
          "TRANSFERRED",
          "DISCARDED",
          "DELIVERED",
          "NOT_DELIVERED",
          "FISCAL_ERROR",
          "IN_POST_OFFICE",
          "RETURNED_TO_WAREHOUSE"
        ],
        "title": "query_getWithdrawalsContainer_status"
      },
      "Dimensions": {
        "type": "object",
        "properties": {
          "length": {
            "$ref": "#/definitions/Dimension"
          },
          "width": {
            "$ref": "#/definitions/Dimension"
          },
          "weight": {
            "$ref": "#/definitions/Dimension"
          },
          "height": {
            "$ref": "#/definitions/Dimension"
          }
        },
        "title": "Dimensions",
        "$resolvedRef": "/components/schemas/Dimensions"
      },
      "Dimension": {
        "type": "object",
        "properties": {
          "value": {
            "format": "double",
            "type": "number"
          },
          "measure_unit": {
            "$ref": "#/definitions/query_getWithdrawalsContainer_dimensions_length_measure_unit"
          }
        },
        "title": "Dimension",
        "$resolvedRef": "/components/schemas/Dimension"
      },
      "query_getWithdrawalsContainer_dimensions_length_measure_unit": {
        "type": "string",
        "enum": [
          "g",
          "cm"
        ],
        "title": "query_getWithdrawalsContainer_dimensions_length_measure_unit"
      },
      "SearchResultsWithdrawalContainer": {
        "type": "object",
        "properties": {
          "paging": {
            "$ref": "#/definitions/Paging"
          },
          "sort": {
            "$ref": "#/definitions/Sorter"
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_withdrawal_container"
            }
          },
          "applied_filters": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_filter"
            }
          },
          "available_filters": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "title": "SearchResultsWithdrawalContainer"
      },
      "WithdrawalContainerTrackingInfo": {
        "type": "object",
        "properties": {
          "address": {
            "$ref": "#/definitions/AddressDTO"
          },
          "user": {
            "$ref": "#/definitions/User"
          },
          "container_id": {
            "type": "string"
          },
          "dimensions": {
            "$ref": "#/definitions/Dimensions"
          },
          "withdrawal_id": {
            "format": "int64",
            "type": "integer"
          },
          "shipment_type": {
            "$ref": "#/definitions/query_getWithdrawalsContainerTrackingInfo_shipment_type"
          },
          "tracking_id": {
            "type": "string"
          }
        },
        "title": "WithdrawalContainerTrackingInfo"
      },
      "AddressDTO": {
        "type": "object",
        "properties": {
          "country": {
            "$ref": "#/definitions/AddressArea"
          },
          "references": {
            "type": "string"
          },
          "city": {
            "$ref": "#/definitions/AddressArea"
          },
          "phone": {
            "type": "string"
          },
          "comment": {
            "type": "string"
          },
          "id": {
            "format": "int64",
            "type": "integer"
          },
          "state": {
            "$ref": "#/definitions/AddressArea"
          },
          "zip_code": {
            "type": "string"
          },
          "street_name": {
            "type": "string"
          },
          "street_number": {
            "type": "string"
          },
          "aditional_info": {
            "type": "string"
          },
          "address_line": {
            "type": "string"
          }
        },
        "title": "AddressDTO",
        "$resolvedRef": "/components/schemas/AddressDTO"
      },
      "AddressArea": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "id": {
            "type": "string"
          }
        },
        "title": "AddressArea"
      },
      "User": {
        "type": "object",
        "properties": {
          "nickname": {
            "type": "string"
          },
          "id": {
            "format": "int64",
            "type": "integer"
          }
        },
        "title": "User"
      },
      "query_getWithdrawalsContainerTrackingInfo_shipment_type": {
        "type": "string",
        "enum": [
          "FTL",
          "SPD",
          "SHIPMENT",
          "DISPOSAL",
          "TRANSFER"
        ],
        "title": "query_getWithdrawalsContainerTrackingInfo_shipment_type"
      },
      "ContainerDocuments": {
        "type": "object",
        "properties": {
          "shipping_label": {
            "type": "string"
          },
          "invoice_labels": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "box_id": {
            "type": "string"
          }
        },
        "title": "ContainerDocuments"
      },
      "QueryInput": {
        "type": "object",
        "title": "QueryInput",
        "properties": {
          "getWithdrawalsRequest": {
            "$ref": "#/definitions/queryInput_getWithdrawalsRequest"
          },
          "searchWithdrawalRequests": {
            "$ref": "#/definitions/queryInput_searchWithdrawalRequests"
          },
          "getWithdrawalsRequestLocations": {
            "$ref": "#/definitions/queryInput_getWithdrawalsRequestLocations"
          },
          "getWithdrawalsRequestHistory": {
            "$ref": "#/definitions/queryInput_getWithdrawalsRequestHistory"
          },
          "getWithdrawal": {
            "$ref": "#/definitions/queryInput_getWithdrawal"
          },
          "searchWithdrawals": {
            "$ref": "#/definitions/queryInput_searchWithdrawals"
          },
          "getWithdrawalReadyToDispatchInfo": {
            "$ref": "#/definitions/queryInput_getWithdrawalReadyToDispatchInfo"
          },
          "getWithdrawalsContainer": {
            "$ref": "#/definitions/queryInput_getWithdrawalsContainer"
          },
          "searchWithdrawalContainers": {
            "$ref": "#/definitions/queryInput_searchWithdrawalContainers"
          },
          "getWithdrawalsContainerTrackingInfo": {
            "$ref": "#/definitions/queryInput_getWithdrawalsContainerTrackingInfo"
          },
          "getDocuments": {
            "$ref": "#/definitions/queryInput_getDocuments"
          }
        },
        "writeOnly": true
      },
      "queryInput_getWithdrawalsRequest": {
        "title": "queryInput_getWithdrawalsRequest",
        "type": "object",
        "properties": {
          "id": {
            "format": "int64",
            "type": "integer",
            "name": "id",
            "nullable": false
          }
        }
      },
      "queryInput_searchWithdrawalRequests": {
        "title": "queryInput_searchWithdrawalRequests",
        "type": "object",
        "properties": {
          "id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "format": "int64",
              "type": "integer"
            },
            "name": "id"
          },
          "seller_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "format": "int64",
              "type": "integer"
            },
            "name": "seller_id"
          },
          "status": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "status"
          },
          "site_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "site_id"
          },
          "type": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "type"
          },
          "version": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "version"
          },
          "inventory_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "inventory_id"
          },
          "appointment_date": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "appointment_date"
          },
          "title": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "title"
          },
          "query": {
            "type": "string",
            "name": "query"
          },
          "shipment_type": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "shipment_type"
          },
          "default_warehouse_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "default_warehouse_id"
          },
          "appointment_date_from": {
            "type": "string",
            "name": "appointment_date_from"
          },
          "appointment_date_to": {
            "type": "string",
            "name": "appointment_date_to"
          },
          "sort_by": {
            "type": "string",
            "name": "sort_by"
          },
          "offset": {
            "default": 0,
            "format": "int32",
            "type": "integer",
            "name": "offset"
          },
          "limit": {
            "default": 50,
            "format": "int32",
            "type": "integer",
            "name": "limit"
          }
        }
      },
      "queryInput_getWithdrawalsRequestLocations": {
        "title": "queryInput_getWithdrawalsRequestLocations",
        "type": "object",
        "properties": {
          "id": {
            "format": "int64",
            "type": "integer",
            "name": "id",
            "nullable": false
          }
        }
      },
      "queryInput_getWithdrawalsRequestHistory": {
        "title": "queryInput_getWithdrawalsRequestHistory",
        "type": "object",
        "properties": {
          "id": {
            "format": "int64",
            "type": "integer",
            "name": "id",
            "nullable": false
          }
        }
      },
      "queryInput_getWithdrawal": {
        "title": "queryInput_getWithdrawal",
        "type": "object",
        "properties": {
          "id": {
            "format": "int64",
            "type": "integer",
            "name": "id",
            "nullable": false
          }
        }
      },
      "queryInput_searchWithdrawals": {
        "title": "queryInput_searchWithdrawals",
        "type": "object",
        "properties": {
          "id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "format": "int64",
              "type": "integer"
            },
            "name": "id"
          },
          "withdrawal_request_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "format": "int64",
              "type": "integer"
            },
            "name": "withdrawal_request_id"
          },
          "code": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "code"
          },
          "seller_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "format": "int64",
              "type": "integer"
            },
            "name": "seller_id"
          },
          "status": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "status"
          },
          "warehouse_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "warehouse_id"
          },
          "site_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "site_id"
          },
          "inventory_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "inventory_id"
          },
          "appointment_date": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "appointment_date"
          },
          "appointment_date_from": {
            "type": "string",
            "name": "appointment_date_from"
          },
          "appointment_date_to": {
            "type": "string",
            "name": "appointment_date_to"
          },
          "shipment_type": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "shipment_type"
          },
          "query": {
            "type": "string",
            "name": "query"
          },
          "sort_by": {
            "type": "string",
            "name": "sort_by"
          },
          "offset": {
            "default": 0,
            "format": "int32",
            "type": "integer",
            "name": "offset"
          },
          "limit": {
            "default": 50,
            "format": "int32",
            "type": "integer",
            "name": "limit"
          }
        }
      },
      "queryInput_getWithdrawalReadyToDispatchInfo": {
        "title": "queryInput_getWithdrawalReadyToDispatchInfo",
        "type": "object",
        "properties": {
          "code": {
            "type": "string",
            "name": "code",
            "nullable": false
          }
        }
      },
      "queryInput_getWithdrawalsContainer": {
        "title": "queryInput_getWithdrawalsContainer",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "name": "id",
            "nullable": false
          }
        }
      },
      "queryInput_searchWithdrawalContainers": {
        "title": "queryInput_searchWithdrawalContainers",
        "type": "object",
        "properties": {
          "id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "id"
          },
          "withdrawal_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "format": "int64",
              "type": "integer"
            },
            "name": "withdrawal_id"
          },
          "parcel_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "parcel_id"
          },
          "status": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "status"
          },
          "inventory_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "inventory_id"
          },
          "storage_address": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "storage_address"
          },
          "site_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "site_id"
          },
          "warehouse_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "warehouse_id"
          },
          "shipment_type": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "shipment_type"
          },
          "tracking_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "tracking_id"
          },
          "shipment_order_id": {
            "uniqueItems": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "name": "shipment_order_id"
          },
          "sort_by": {
            "type": "string",
            "name": "sort_by"
          },
          "offset": {
            "default": 0,
            "format": "int32",
            "type": "integer",
            "name": "offset"
          },
          "limit": {
            "default": 50,
            "format": "int32",
            "type": "integer",
            "name": "limit"
          }
        }
      },
      "queryInput_getWithdrawalsContainerTrackingInfo": {
        "title": "queryInput_getWithdrawalsContainerTrackingInfo",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "name": "id",
            "nullable": false
          }
        }
      },
      "queryInput_getDocuments": {
        "title": "queryInput_getDocuments",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "name": "id",
            "nullable": false
          }
        }
      },
      "Mutation": {
        "type": "object",
        "title": "Mutation",
        "properties": {
          "deleteWithdrawalRequestProjection": {
            "type": "string"
          },
          "deleteWithdrawalProjection": {
            "type": "string"
          },
          "processWithdrawalRequestEventMessage": {
            "type": "string"
          },
          "processWithdrawalEventMessage": {
            "type": "string"
          },
          "processWithdrawalEventMessage_1": {
            "type": "string"
          },
          "deleteWithdrawalContainerProjection": {
            "type": "string"
          }
        },
        "readOnly": true
      },
      "MutationInput": {
        "type": "object",
        "title": "MutationInput",
        "properties": {
          "deleteWithdrawalRequestProjection": {
            "$ref": "#/definitions/mutationInput_deleteWithdrawalRequestProjection"
          },
          "deleteWithdrawalProjection": {
            "$ref": "#/definitions/mutationInput_deleteWithdrawalProjection"
          },
          "processWithdrawalRequestEventMessage": {
            "$ref": "#/definitions/mutationInput_processWithdrawalRequestEventMessage"
          },
          "processWithdrawalEventMessage": {
            "$ref": "#/definitions/mutationInput_processWithdrawalEventMessage"
          },
          "processWithdrawalEventMessage_1": {
            "$ref": "#/definitions/mutationInput_processWithdrawalEventMessage_1"
          },
          "deleteWithdrawalContainerProjection": {
            "$ref": "#/definitions/mutationInput_deleteWithdrawalContainerProjection"
          }
        },
        "writeOnly": true
      },
      "mutationInput_deleteWithdrawalRequestProjection": {
        "title": "mutationInput_deleteWithdrawalRequestProjection",
        "type": "object",
        "properties": {
          "id": {
            "format": "int64",
            "type": "integer",
            "name": "id",
            "nullable": false
          }
        }
      },
      "mutationInput_deleteWithdrawalProjection": {
        "title": "mutationInput_deleteWithdrawalProjection",
        "type": "object",
        "properties": {
          "id": {
            "format": "int64",
            "type": "integer",
            "name": "id",
            "nullable": false
          }
        }
      },
      "mutationInput_processWithdrawalRequestEventMessage": {
        "title": "mutationInput_processWithdrawalRequestEventMessage",
        "type": "object",
        "properties": {
          "input": {
            "$ref": "#/definitions/BigQueueMessage"
          }
        }
      },
      "BigQueueMessage": {
        "type": "object",
        "properties": {
          "msg": {
            "$ref": "#/definitions/EventMessage"
          }
        },
        "title": "BigQueueMessage"
      },
      "EventMessage": {
        "type": "object",
        "properties": {
          "source_id": {
            "type": "string"
          },
          "event_id": {
            "format": "int64",
            "type": "integer"
          }
        },
        "title": "EventMessage",
        "$resolvedRef": "/components/schemas/EventMessage"
      },
      "mutationInput_processWithdrawalEventMessage": {
        "title": "mutationInput_processWithdrawalEventMessage",
        "type": "object",
        "properties": {
          "input": {
            "$ref": "#/definitions/BigQueueMessage"
          }
        }
      },
      "mutationInput_processWithdrawalEventMessage_1": {
        "title": "mutationInput_processWithdrawalEventMessage_1",
        "type": "object",
        "properties": {
          "input": {
            "$ref": "#/definitions/BigQueueMessage"
          }
        }
      },
      "mutationInput_deleteWithdrawalContainerProjection": {
        "title": "mutationInput_deleteWithdrawalContainerProjection",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "name": "id",
            "nullable": false
          }
        }
      }
    }
  }
}