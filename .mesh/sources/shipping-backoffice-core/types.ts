// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ShippingBackofficeCoreTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: bigint;
};

export type Query = {
  getWithdrawalsRequest?: Maybe<WithdrawalRequest>;
  searchWithdrawalRequests?: Maybe<SearchResultsWithdrawalRequest>;
  getWithdrawalsRequestLocations?: Maybe<Scalars['String']>;
  getWithdrawalsRequestHistory?: Maybe<Array<Maybe<StatusHistoryWithdrawalsRequestStatus>>>;
  getWithdrawal?: Maybe<Withdrawal>;
  searchWithdrawals?: Maybe<SearchResultsWithdrawal>;
  getWithdrawalReadyToDispatchInfo?: Maybe<DispatchInfo>;
  getWithdrawalsContainer?: Maybe<WithdrawalContainer>;
  searchWithdrawalContainers?: Maybe<SearchResultsWithdrawalContainer>;
  getWithdrawalsContainerTrackingInfo?: Maybe<WithdrawalContainerTrackingInfo>;
  getDocuments?: Maybe<ContainerDocuments>;
};


export type QuerygetWithdrawalsRequestArgs = {
  id: Scalars['BigInt'];
};


export type QuerysearchWithdrawalRequestsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  seller_id?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  site_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inventory_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appointment_date?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  query?: InputMaybe<Scalars['String']>;
  shipment_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  default_warehouse_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appointment_date_from?: InputMaybe<Scalars['String']>;
  appointment_date_to?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerygetWithdrawalsRequestLocationsArgs = {
  id: Scalars['BigInt'];
};


export type QuerygetWithdrawalsRequestHistoryArgs = {
  id: Scalars['BigInt'];
};


export type QuerygetWithdrawalArgs = {
  id: Scalars['BigInt'];
};


export type QuerysearchWithdrawalsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  withdrawal_request_id?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  code?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seller_id?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  warehouse_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  site_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inventory_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appointment_date?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appointment_date_from?: InputMaybe<Scalars['String']>;
  appointment_date_to?: InputMaybe<Scalars['String']>;
  shipment_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  query?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerygetWithdrawalReadyToDispatchInfoArgs = {
  code: Scalars['String'];
};


export type QuerygetWithdrawalsContainerArgs = {
  id: Scalars['String'];
};


export type QuerysearchWithdrawalContainersArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withdrawal_id?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  parcel_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inventory_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storage_address?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  site_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  warehouse_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shipment_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tracking_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shipment_order_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sort_by?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerygetWithdrawalsContainerTrackingInfoArgs = {
  id: Scalars['String'];
};


export type QuerygetDocumentsArgs = {
  id: Scalars['String'];
};

export type WithdrawalRequest = {
  appointments?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  shipment?: Maybe<Shipment>;
  fee?: Maybe<Fee>;
  appointment?: Maybe<Appointment>;
  units?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<query_getWithdrawalsRequest_type>;
  version?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  status?: Maybe<query_getWithdrawalsRequest_status>;
  default_warehouse_id?: Maybe<Scalars['String']>;
  sub_status?: Maybe<DELAYED_const>;
  dispatch_id?: Maybe<Scalars['String']>;
  withdrawal_ids?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  last_updated?: Maybe<Scalars['String']>;
  seller_id?: Maybe<Scalars['BigInt']>;
  site_id?: Maybe<Scalars['String']>;
  print_action?: Maybe<query_getWithdrawalsRequest_print_action>;
};

export type Shipment = {
  address?: Maybe<Address>;
  type?: Maybe<query_getWithdrawalsRequest_shipment_type>;
};

export type Address = {
  id?: Maybe<Scalars['BigInt']>;
};

export type query_getWithdrawalsRequest_shipment_type =
  | 'FTL'
  | 'SPD'
  | 'SHIPMENT'
  | 'DISPOSAL'
  | 'TRANSFER';

export type Fee = {
  value?: Maybe<Scalars['Float']>;
  currency_id?: Maybe<Scalars['String']>;
};

export type Appointment = {
  date?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  source?: Maybe<query_getWithdrawalsRequest_appointment_source>;
  creation_date?: Maybe<Scalars['String']>;
};

export type query_getWithdrawalsRequest_appointment_source =
  | 'SELLER'
  | 'MELI';

export type query_getWithdrawalsRequest_type =
  | 'SWH'
  | 'MWH';

export type query_getWithdrawalsRequest_status =
  | 'CREATED'
  | 'UNITS_IN_PROGRESS'
  | 'UNITS_COMPLETED'
  | 'SCHEDULED'
  | 'PROCESSING'
  | 'CANCELED'
  | 'FISCAL_ERROR'
  | 'READY_TO_DISPATCH'
  | 'APPOINTMENT_EXPIRED'
  | 'ABLE_TO_DISCARD'
  | 'PARTIALLY_SHIPPED'
  | 'COMPLETED'
  | 'SHIPPED'
  | 'UNFULFILLABLE'
  | 'DISCARDED'
  | 'DELIVERED'
  | 'DELIVERED_WITH_DIFFERENCES'
  | 'NOT_DELIVERED'
  | 'CONFIRMED';

export type DELAYED_const =
  | 'DELAYED';

export type query_getWithdrawalsRequest_print_action =
  | 'PRINT'
  | 'REPRINT'
  | 'DONE';

export type SearchResultsWithdrawalRequest = {
  paging?: Maybe<Paging>;
  sort?: Maybe<Sorter>;
  results?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  applied_filters?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  available_filters?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Paging = {
  total?: Maybe<Scalars['BigInt']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Sorter = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<query_searchWithdrawalRequests_sort_order>;
};

export type query_searchWithdrawalRequests_sort_order =
  | 'asc'
  | 'desc';

export type StatusHistoryWithdrawalsRequestStatus = {
  status?: Maybe<query_getWithdrawalsRequestHistory_items_status>;
  event_date?: Maybe<Scalars['String']>;
};

export type query_getWithdrawalsRequestHistory_items_status =
  | 'CREATED'
  | 'UNITS_IN_PROGRESS'
  | 'UNITS_COMPLETED'
  | 'SCHEDULED'
  | 'PROCESSING'
  | 'CANCELED'
  | 'FISCAL_ERROR'
  | 'READY_TO_DISPATCH'
  | 'APPOINTMENT_EXPIRED'
  | 'ABLE_TO_DISCARD'
  | 'PARTIALLY_SHIPPED'
  | 'COMPLETED'
  | 'SHIPPED'
  | 'UNFULFILLABLE'
  | 'DISCARDED'
  | 'DELIVERED'
  | 'DELIVERED_WITH_DIFFERENCES'
  | 'NOT_DELIVERED'
  | 'CONFIRMED';

export type Withdrawal = {
  appointments?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  code?: Maybe<Scalars['String']>;
  shipment?: Maybe<Shipment>;
  appointment?: Maybe<Appointment>;
  units?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['BigInt']>;
  status?: Maybe<query_getWithdrawal_status>;
  transfer_plan_id?: Maybe<Scalars['BigInt']>;
  sub_status?: Maybe<DELAYED_const>;
  dispatch_id?: Maybe<Scalars['String']>;
  last_updated?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['String']>;
  seller_id?: Maybe<Scalars['BigInt']>;
  warehouse_id?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  withdrawal_request_id?: Maybe<Scalars['BigInt']>;
  print_action?: Maybe<query_getWithdrawal_print_action>;
};

export type query_getWithdrawal_status =
  | 'CREATED'
  | 'STOCK_RESERVED'
  | 'READY_TO_COLLECT'
  | 'COLLECTING'
  | 'COLLECTED'
  | 'READY_TO_DISPATCH'
  | 'APPOINTMENT_EXPIRED'
  | 'ABLE_TO_DISCARD'
  | 'DOCUMENTED'
  | 'COMPLETED'
  | 'UNFULFILLABLE'
  | 'SHIPPED'
  | 'PARTIALLY_SHIPPED'
  | 'FISCAL_ERROR'
  | 'DISCARDED'
  | 'CANCELED'
  | 'DELIVERED'
  | 'DELIVERED_WITH_DIFFERENCES'
  | 'NOT_DELIVERED';

export type query_getWithdrawal_print_action =
  | 'PRINT'
  | 'REPRINT'
  | 'DONE';

export type SearchResultsWithdrawal = {
  paging?: Maybe<Paging>;
  sort?: Maybe<Sorter>;
  results?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  applied_filters?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  available_filters?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DispatchInfo = {
  constraint?: Maybe<query_getWithdrawalReadyToDispatchInfo_constraint>;
  ready_to_dispatch?: Maybe<Scalars['Boolean']>;
  dispatch_channel?: Maybe<Scalars['String']>;
};

export type query_getWithdrawalReadyToDispatchInfo_constraint =
  | 'PENDING_PROCESS'
  | 'PROCESSING'
  | 'PROCESSED'
  | 'CANCELLED'
  | 'FISCAL_ERROR'
  | 'DOCUMENTED'
  | 'COMPLETED'
  | 'UNFULFILLABLE'
  | 'DISCARDED';

export type WithdrawalContainer = {
  shipment?: Maybe<ContainerShipment>;
  movements?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  units?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<query_getWithdrawalsContainer_status>;
  dimensions?: Maybe<Dimensions>;
  withdrawal_id?: Maybe<Scalars['BigInt']>;
  parcel_id?: Maybe<Scalars['String']>;
  last_updated?: Maybe<Scalars['String']>;
  seller_id?: Maybe<Scalars['BigInt']>;
  warehouse_id?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  storage_address?: Maybe<Scalars['String']>;
};

export type ContainerShipment = {
  address?: Maybe<Address>;
  type?: Maybe<query_getWithdrawalsContainer_shipment_type>;
  tracking?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  order_id?: Maybe<Scalars['String']>;
  transfer_unit_id?: Maybe<Scalars['BigInt']>;
  estimated_delivery_date?: Maybe<Delivery>;
  tracking_id?: Maybe<Scalars['String']>;
  parcel_id?: Maybe<Scalars['String']>;
};

export type query_getWithdrawalsContainer_shipment_type =
  | 'FTL'
  | 'SPD'
  | 'SHIPMENT'
  | 'DISPOSAL'
  | 'TRANSFER';

export type Delivery = {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type query_getWithdrawalsContainer_status =
  | 'CREATED'
  | 'STORED'
  | 'SHIPPED'
  | 'LOST'
  | 'DAMAGED'
  | 'TRACKED'
  | 'READY_TO_DISPATCH'
  | 'IN_TRANSFER'
  | 'TRANSFERRED'
  | 'DISCARDED'
  | 'DELIVERED'
  | 'NOT_DELIVERED'
  | 'FISCAL_ERROR'
  | 'IN_POST_OFFICE'
  | 'RETURNED_TO_WAREHOUSE';

export type Dimensions = {
  length?: Maybe<Dimension>;
  width?: Maybe<Dimension>;
  weight?: Maybe<Dimension>;
  height?: Maybe<Dimension>;
};

export type Dimension = {
  value?: Maybe<Scalars['Float']>;
  measure_unit?: Maybe<query_getWithdrawalsContainer_dimensions_length_measure_unit>;
};

export type query_getWithdrawalsContainer_dimensions_length_measure_unit =
  | 'g'
  | 'cm';

export type SearchResultsWithdrawalContainer = {
  paging?: Maybe<Paging>;
  sort?: Maybe<Sorter>;
  results?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  applied_filters?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  available_filters?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WithdrawalContainerTrackingInfo = {
  address?: Maybe<AddressDTO>;
  user?: Maybe<User>;
  container_id?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Dimensions>;
  withdrawal_id?: Maybe<Scalars['BigInt']>;
  shipment_type?: Maybe<query_getWithdrawalsContainerTrackingInfo_shipment_type>;
  tracking_id?: Maybe<Scalars['String']>;
};

export type AddressDTO = {
  country?: Maybe<AddressArea>;
  references?: Maybe<Scalars['String']>;
  city?: Maybe<AddressArea>;
  phone?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  state?: Maybe<AddressArea>;
  zip_code?: Maybe<Scalars['String']>;
  street_name?: Maybe<Scalars['String']>;
  street_number?: Maybe<Scalars['String']>;
  aditional_info?: Maybe<Scalars['String']>;
  address_line?: Maybe<Scalars['String']>;
};

export type AddressArea = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type User = {
  nickname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
};

export type query_getWithdrawalsContainerTrackingInfo_shipment_type =
  | 'FTL'
  | 'SPD'
  | 'SHIPMENT'
  | 'DISPOSAL'
  | 'TRANSFER';

export type ContainerDocuments = {
  shipping_label?: Maybe<Scalars['String']>;
  invoice_labels?: Maybe<Array<Maybe<Scalars['String']>>>;
  box_id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  deleteWithdrawalRequestProjection?: Maybe<Scalars['String']>;
  deleteWithdrawalProjection?: Maybe<Scalars['String']>;
  processWithdrawalRequestEventMessage?: Maybe<Scalars['String']>;
  processWithdrawalEventMessage?: Maybe<Scalars['String']>;
  processWithdrawalEventMessage_1?: Maybe<Scalars['String']>;
  deleteWithdrawalContainerProjection?: Maybe<Scalars['String']>;
};


export type MutationdeleteWithdrawalRequestProjectionArgs = {
  id: Scalars['BigInt'];
};


export type MutationdeleteWithdrawalProjectionArgs = {
  id: Scalars['BigInt'];
};


export type MutationprocessWithdrawalRequestEventMessageArgs = {
  input?: InputMaybe<BigQueueMessage_Input>;
};


export type MutationprocessWithdrawalEventMessageArgs = {
  input?: InputMaybe<BigQueueMessage_Input>;
};


export type MutationprocessWithdrawalEventMessage_1Args = {
  input?: InputMaybe<BigQueueMessage_Input>;
};


export type MutationdeleteWithdrawalContainerProjectionArgs = {
  id: Scalars['String'];
};

export type BigQueueMessage_Input = {
  msg?: InputMaybe<EventMessage_Input>;
};

export type EventMessage_Input = {
  source_id?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['BigInt']>;
};

  export type QuerySdk = {
      /** undefined **/
  getWithdrawalsRequest: InContextSdkMethod<Query['getWithdrawalsRequest'], QuerygetWithdrawalsRequestArgs, MeshContext>,
  /** undefined **/
  searchWithdrawalRequests: InContextSdkMethod<Query['searchWithdrawalRequests'], QuerysearchWithdrawalRequestsArgs, MeshContext>,
  /** undefined **/
  getWithdrawalsRequestLocations: InContextSdkMethod<Query['getWithdrawalsRequestLocations'], QuerygetWithdrawalsRequestLocationsArgs, MeshContext>,
  /** undefined **/
  getWithdrawalsRequestHistory: InContextSdkMethod<Query['getWithdrawalsRequestHistory'], QuerygetWithdrawalsRequestHistoryArgs, MeshContext>,
  /** undefined **/
  getWithdrawal: InContextSdkMethod<Query['getWithdrawal'], QuerygetWithdrawalArgs, MeshContext>,
  /** undefined **/
  searchWithdrawals: InContextSdkMethod<Query['searchWithdrawals'], QuerysearchWithdrawalsArgs, MeshContext>,
  /** undefined **/
  getWithdrawalReadyToDispatchInfo: InContextSdkMethod<Query['getWithdrawalReadyToDispatchInfo'], QuerygetWithdrawalReadyToDispatchInfoArgs, MeshContext>,
  /** undefined **/
  getWithdrawalsContainer: InContextSdkMethod<Query['getWithdrawalsContainer'], QuerygetWithdrawalsContainerArgs, MeshContext>,
  /** undefined **/
  searchWithdrawalContainers: InContextSdkMethod<Query['searchWithdrawalContainers'], QuerysearchWithdrawalContainersArgs, MeshContext>,
  /** undefined **/
  getWithdrawalsContainerTrackingInfo: InContextSdkMethod<Query['getWithdrawalsContainerTrackingInfo'], QuerygetWithdrawalsContainerTrackingInfoArgs, MeshContext>,
  /** undefined **/
  getDocuments: InContextSdkMethod<Query['getDocuments'], QuerygetDocumentsArgs, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  deleteWithdrawalRequestProjection: InContextSdkMethod<Mutation['deleteWithdrawalRequestProjection'], MutationdeleteWithdrawalRequestProjectionArgs, MeshContext>,
  /** undefined **/
  deleteWithdrawalProjection: InContextSdkMethod<Mutation['deleteWithdrawalProjection'], MutationdeleteWithdrawalProjectionArgs, MeshContext>,
  /** undefined **/
  processWithdrawalRequestEventMessage: InContextSdkMethod<Mutation['processWithdrawalRequestEventMessage'], MutationprocessWithdrawalRequestEventMessageArgs, MeshContext>,
  /** undefined **/
  processWithdrawalEventMessage: InContextSdkMethod<Mutation['processWithdrawalEventMessage'], MutationprocessWithdrawalEventMessageArgs, MeshContext>,
  /** undefined **/
  processWithdrawalEventMessage_1: InContextSdkMethod<Mutation['processWithdrawalEventMessage_1'], MutationprocessWithdrawalEventMessage_1Args, MeshContext>,
  /** undefined **/
  deleteWithdrawalContainerProjection: InContextSdkMethod<Mutation['deleteWithdrawalContainerProjection'], MutationdeleteWithdrawalContainerProjectionArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["shipping-backoffice-core"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
