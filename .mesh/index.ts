// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import fetchFn from "../src/utils/custom-fetch.js";

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import OpenapiHandler from "@graphql-mesh/openapi"
import NamingConventionTransform from "@graphql-mesh/transform-naming-convention";
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { ShippingBackofficeCoreTypes } from './sources/shipping-backoffice-core/types';
import type { RubikApiTypes } from './sources/rubik-api/types';
import type { SauronBackofficeApiTypes } from './sources/sauron-backoffice-api/types';
import * as importedModule$0 from "./sources/shipping-backoffice-core/jsonSchemaBundle";
import * as importedModule$1 from "./sources/rubik-api/jsonSchemaBundle";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  Map: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: bigint;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date | string;
  /** Represents empty values */
  Void: void;
};

export type Query = {
  buyer: User;
  delay: Delay;
  destination: Destination;
  getReturnShipments?: Maybe<Array<Maybe<ReturnShipment>>>;
  getShipmentId?: Maybe<Array<Maybe<ShipmentId>>>;
  inbound: Inbound;
  inboundInventories: InboundInventories;
  inboundInventoriesPaging: InboundInventoriesResult;
  inboundPenalties: InboundPenalties;
  incidences?: Maybe<Array<Maybe<Incidence>>>;
  inventory: InventoryItem;
  inventoryAddresses: Array<Maybe<InventoryAddress>>;
  inventoryInbounds: InventoryInbounds;
  inventoryMovements: InventoryMovementsResult;
  inventoryMovementsAll: Array<Maybe<InventoryMovement>>;
  inventoryRecommendationsItem?: Maybe<InventoryRecommendationsItem>;
  item: Item;
  itemHistory: History;
  itemHistoryV2: HistoryItem;
  logisticCenter?: Maybe<LogisticCenter>;
  meLogistic?: Maybe<MELogistic>;
  orderHistory: History;
  orderHistoryV2: HistoryOrder;
  orders?: Maybe<Array<Maybe<Order>>>;
  paymentDetail?: Maybe<PaymentDetail>;
  payments?: Maybe<Array<Maybe<Payment>>>;
  searchUser: Scalars['String'];
  seller?: Maybe<Seller>;
  sellerInbounds: SellerInbounds;
  sellerInventories: SellerInventories;
  sellerPenalties: InboundPenalties;
  sellerPricingWarehousings: SellerPricingWarehousings;
  sellerProperties: SellerProperties;
  sellerWithdrawals: SellerWithdrawals;
  shipment: Shipment;
  shipmentStatusHistory: ShipmentStatusHistory;
  step: Step;
  timeline: TimeLine;
  tmsInfo: TmsInfo;
  tracking: Tracking;
  user: User;
  withdrawal: Withdrawal;
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
  /** Ping endpoint, used to know if the app is up. */
  ping_ping_get?: Maybe<Scalars['JSON']>;
  /** List */
  list_teams_get?: Maybe<Array<Maybe<list_teams_get_response>>>;
  /** Get By Team Code */
  get_by_team_code_teams__team_code__get?: Maybe<get_by_team_code_teams__team_code__get_response>;
  /** Get Teams By Username */
  get_teams_by_username_teams_user__username__get?: Maybe<Array<Maybe<get_teams_by_username_teams_user__username__get_response>>>;
  /** Get Team Collaborators */
  get_team_collaborators_teams__team_code__collaborators_get?: Maybe<get_team_collaborators_teams__team_code__collaborators_get_response>;
  /** Get Applications By Team Code */
  get_applications_by_team_code_teams__team_code__applications_get?: Maybe<Array<Maybe<get_applications_by_team_code_teams__team_code__applications_get_response>>>;
  /** List */
  list_role_get?: Maybe<Array<Maybe<RoleResponse>>>;
};


export type QuerybuyerArgs = {
  shipmentId: Scalars['String'];
};


export type QuerydelayArgs = {
  country: Scalars['String'];
  extendedDateFormat?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  timeZone: Scalars['String'];
};


export type QuerydestinationArgs = {
  id: Scalars['String'];
};


export type QuerygetReturnShipmentsArgs = {
  id: Scalars['String'];
};


export type QuerygetShipmentIdArgs = {
  input: SearchByValue;
};


export type QueryinboundArgs = {
  id: Scalars['String'];
};


export type QueryinboundInventoriesArgs = {
  id: Scalars['String'];
};


export type QueryinboundInventoriesPagingArgs = {
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryinboundPenaltiesArgs = {
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryincidencesArgs = {
  shipment: Scalars['ID'];
};


export type QueryinventoryArgs = {
  id: Scalars['String'];
};


export type QueryinventoryAddressesArgs = {
  id: Scalars['String'];
};


export type QueryinventoryInboundsArgs = {
  inventoryId: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sellerId: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
};


export type QueryinventoryMovementsArgs = {
  inventoryId: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  processName?: InputMaybe<Scalars['String']>;
};


export type QueryinventoryMovementsAllArgs = {
  id: Scalars['String'];
};


export type QueryinventoryRecommendationsItemArgs = {
  inventoryID: Scalars['String'];
};


export type QueryitemArgs = {
  id: Scalars['String'];
};


export type QueryitemHistoryArgs = {
  from: Scalars['String'];
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  to: Scalars['String'];
};


export type QueryitemHistoryV2Args = {
  from: Scalars['String'];
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  to: Scalars['String'];
};


export type QuerylogisticCenterArgs = {
  logisticCenterId: Scalars['String'];
};


export type QuerymeLogisticArgs = {
  sellerID: Scalars['String'];
};


export type QueryorderHistoryArgs = {
  from: Scalars['String'];
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  to: Scalars['String'];
};


export type QueryorderHistoryV2Args = {
  from: Scalars['String'];
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  to: Scalars['String'];
};


export type QueryordersArgs = {
  orders: OrderIDS;
};


export type QuerypaymentDetailArgs = {
  order: Scalars['String'];
};


export type QuerypaymentsArgs = {
  input: PaymentsInput;
};


export type QuerysearchUserArgs = {
  input: SearchByValue;
};


export type QuerysellerArgs = {
  id: Scalars['String'];
};


export type QuerysellerInboundsArgs = {
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QuerysellerInventoriesArgs = {
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QuerysellerPenaltiesArgs = {
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QuerysellerPricingWarehousingsArgs = {
  fromDate: Scalars['String'];
  id: Scalars['String'];
  toDate: Scalars['String'];
};


export type QuerysellerPropertiesArgs = {
  userId: Scalars['String'];
};


export type QuerysellerWithdrawalsArgs = {
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryshipmentArgs = {
  id: Scalars['String'];
};


export type QueryshipmentStatusHistoryArgs = {
  id: Scalars['String'];
};


export type QuerystepArgs = {
  id: Scalars['String'];
};


export type QuerytimelineArgs = {
  shipmentId: Scalars['String'];
};


export type QuerytmsInfoArgs = {
  shipmentId: Scalars['String'];
};


export type QuerytrackingArgs = {
  id: Scalars['String'];
};


export type QueryuserArgs = {
  id: Scalars['String'];
};


export type QuerywithdrawalArgs = {
  id: Scalars['String'];
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


export type Querylist_teams_getArgs = {
  username?: InputMaybe<Scalars['String']>;
  match?: InputMaybe<Scalars['String']>;
  orderTeam?: InputMaybe<TeamOrderEnum>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Queryget_by_team_code_teams__team_code__getArgs = {
  team_code: Scalars['String'];
};


export type Queryget_teams_by_username_teams_user__username__getArgs = {
  username: Scalars['String'];
};


export type Queryget_team_collaborators_teams__team_code__collaborators_getArgs = {
  team_code: Scalars['String'];
};


export type Queryget_applications_by_team_code_teams__team_code__applications_getArgs = {
  team_code: Scalars['String'];
};

export type Mutation = {
  activateCBTAccount: Scalars['Boolean'];
  activateDO: Scalars['Boolean'];
  activateFulfillment: Scalars['Boolean'];
  activateFulfillmentMLB: Scalars['Boolean'];
  activateXD: Scalars['Boolean'];
  activateXDDO: Scalars['Boolean'];
  addMode: Scalars['Boolean'];
  addOptionalMode: Scalars['Boolean'];
  changeAxado: Scalars['Boolean'];
  changeCBTCarrier: Scalars['Boolean'];
  changeCBTStatus: Scalars['Boolean'];
  changeHandlingTime: Scalars['Boolean'];
  changeMode: Scalars['Boolean'];
  changeStatus: Scalars['Boolean'];
  changeTrackingNumber: Scalars['Boolean'];
  deactivateFulfillment: Scalars['Boolean'];
  deactivateSelfService: Scalars['Boolean'];
  deleteOptionalMode: Scalars['Boolean'];
  editDO: Scalars['Boolean'];
  editFBMPickUp: Scalars['Boolean'];
  editFragile: Scalars['Boolean'];
  editFulfillment: Scalars['Boolean'];
  editXD: Scalars['Boolean'];
  editXDDO: Scalars['Boolean'];
  fraudProcess: Scalars['Boolean'];
  getModeActions?: Maybe<Array<ModeActions>>;
  mandatoryME: Scalars['Boolean'];
  printLabel: printLabelOutput;
  regenerateLabel: Scalars['Boolean'];
  removeFlammableTag: Scalars['Boolean'];
  reputationTag: Scalars['Boolean'];
  resetHandlingTime: Scalars['Boolean'];
  deleteWithdrawalRequestProjection?: Maybe<Scalars['String']>;
  deleteWithdrawalProjection?: Maybe<Scalars['String']>;
  processWithdrawalRequestEventMessage?: Maybe<Scalars['String']>;
  processWithdrawalEventMessage?: Maybe<Scalars['String']>;
  processWithdrawalEventMessage_1?: Maybe<Scalars['String']>;
  deleteWithdrawalContainerProjection?: Maybe<Scalars['String']>;
  /** Create */
  create_teams_post?: Maybe<create_teams_post_response>;
  /** Update */
  update_teams__team_code__put?: Maybe<update_teams__team_code__put_response>;
  /** Delete */
  delete_teams__team_code__delete?: Maybe<delete_teams__team_code__delete_response>;
  /** Refresh */
  refresh_teams__team_code__refresh_post?: Maybe<refresh_teams__team_code__refresh_post_response>;
  /** Exit Collaborator */
  exit_collaborator_teams_exit_collaborator_post?: Maybe<exit_collaborator_teams_exit_collaborator_post_response>;
  /** Create */
  create_role_post?: Maybe<create_role_post_response>;
  /** Sync */
  sync_temporary_role_sync_post?: Maybe<Scalars['JSON']>;
};


export type MutationactivateCBTAccountArgs = {
  userId: Scalars['String'];
};


export type MutationactivateDOArgs = {
  carrierActivation: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationactivateFulfillmentArgs = {
  userId: Scalars['String'];
  warehouseId?: InputMaybe<Scalars['String']>;
};


export type MutationactivateFulfillmentMLBArgs = {
  input: FulfillmentMLB;
};


export type MutationactivateXDArgs = {
  input: CrossDocking;
};


export type MutationactivateXDDOArgs = {
  placeId: Scalars['String'];
  userId: Scalars['String'];
  warehouseId: Scalars['String'];
};


export type MutationaddModeArgs = {
  option: Scalars['String'];
  shippingMode: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationaddOptionalModeArgs = {
  shippingMode: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationchangeAxadoArgs = {
  token: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationchangeCBTCarrierArgs = {
  carrier: Scalars['String'];
  countryId: Scalars['String'];
  siteId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationchangeCBTStatusArgs = {
  input: ChangeCBTStatusInput;
};


export type MutationchangeHandlingTimeArgs = {
  handlingTime: Scalars['Int'];
  logisticType: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationchangeModeArgs = {
  option: Scalars['String'];
  shippingMode: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationchangeStatusArgs = {
  input: ChangeStatusInput;
};


export type MutationchangeTrackingNumberArgs = {
  input: ChangeTrackingNumberInput;
};


export type MutationdeactivateFulfillmentArgs = {
  userId: Scalars['String'];
};


export type MutationdeactivateSelfServiceArgs = {
  userId: Scalars['String'];
};


export type MutationdeleteOptionalModeArgs = {
  shippingMode: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationeditDOArgs = {
  carrierActivation: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationeditFBMPickUpArgs = {
  userId: Scalars['String'];
};


export type MutationeditFragileArgs = {
  fragile: Scalars['Boolean'];
  userId: Scalars['String'];
};


export type MutationeditFulfillmentArgs = {
  userId: Scalars['String'];
  warehouseId?: InputMaybe<Scalars['String']>;
};


export type MutationeditXDArgs = {
  input: CrossDocking;
};


export type MutationeditXDDOArgs = {
  placeId: Scalars['String'];
  userId: Scalars['String'];
  warehouseId: Scalars['String'];
};


export type MutationfraudProcessArgs = {
  input: FraudProcessInput;
};


export type MutationgetModeActionsArgs = {
  sellerId: Scalars['String'];
};


export type MutationmandatoryMEArgs = {
  comment: Scalars['String'];
  status: Scalars['Boolean'];
  userId: Scalars['String'];
};


export type MutationprintLabelArgs = {
  input: PrintLabelInput;
};


export type MutationregenerateLabelArgs = {
  input: RegenerateLabelInput;
};


export type MutationremoveFlammableTagArgs = {
  id: Scalars['String'];
};


export type MutationreputationTagArgs = {
  input: ReputationTagInput;
};


export type MutationresetHandlingTimeArgs = {
  logisticType: Scalars['String'];
  userId: Scalars['String'];
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


export type Mutationcreate_teams_postArgs = {
  x_tiger_token?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<TeamRequest_Input>;
};


export type Mutationupdate_teams__team_code__putArgs = {
  x_tiger_token?: InputMaybe<Scalars['String']>;
  team_code: Scalars['String'];
  input?: InputMaybe<TeamUpdateRequest_Input>;
};


export type Mutationdelete_teams__team_code__deleteArgs = {
  x_tiger_token?: InputMaybe<Scalars['String']>;
  team_code: Scalars['String'];
};


export type Mutationrefresh_teams__team_code__refresh_postArgs = {
  team_code: Scalars['String'];
};


export type Mutationexit_collaborator_teams_exit_collaborator_postArgs = {
  input?: InputMaybe<SquidExitCollaboratorMessage_Input>;
};


export type Mutationcreate_role_postArgs = {
  input?: InputMaybe<RoleRequest_Input>;
};

export type Action = {
  body?: Maybe<Array<Scalars['String']>>;
  disabled: Scalars['Boolean'];
  label: Scalars['String'];
  method: Scalars['String'];
  name: Scalars['String'];
  params?: Maybe<Array<Scalars['String']>>;
  reason: Scalars['String'];
};

export type Address = {
  address: Scalars['String'];
  types: Array<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
};

export type Attribute = {
  id: Scalars['String'];
  name: Scalars['String'];
  source: Scalars['String'];
  valueId: Scalars['String'];
  valueName: Scalars['String'];
};

export type AvailableFilters = {
  id: Scalars['String'];
  name: Scalars['String'];
  values?: Maybe<Array<Maybe<FilterValue>>>;
};

export type Buyer = {
  address_line: Scalars['String'];
  doc_type: Scalars['String'];
  email: Scalars['String'];
  full_name: Scalars['String'];
  id: Scalars['String'];
  identification: Identification;
  nickname: Scalars['String'];
  phone: Scalars['String'];
  scoring: Scalars['String'];
};

export type Capacities = {
  availables?: Maybe<Array<Scalars['Int']>>;
  currentCount: Scalars['Int'];
  selected: Scalars['Int'];
};

export type CarrierLabeling = {
  ID: Scalars['Int'];
  Name: Scalars['String'];
};

export type CaseDataInp = {
  associatedPublicationId?: Maybe<Array<Maybe<Scalars['String']>>>;
  identificationCounter?: Maybe<Scalars['Int']>;
  physicalProductGtin?: Maybe<Scalars['String']>;
  productExpirationDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<TagCaseInp>>>;
};

export type ChangeCBTStatusInput = {
  id: Scalars['String'];
  shippingStatusNew: Scalars['String'];
  shippingSubStatusNew: Scalars['String'];
};

export type ChangeStatusInput = {
  id: Scalars['String'];
  minimumChangeDate: Scalars['String'];
  shippingStatusNew: Scalars['String'];
  shippingSubStatusNew: Scalars['String'];
};

export type ChangeTrackingNumberInput = {
  id: Scalars['String'];
  trackingNumber: Scalars['String'];
  trackingNumberNew: Scalars['String'];
};

export type Checkpoint = {
  checkpointDate: Scalars['String'];
  dateCreated: Scalars['String'];
  shipmentStatus: Scalars['String'];
  shipmentSubstatus: Scalars['String'];
};

export type Claim = {
  detail?: Maybe<SummaryClaims>;
  mediation?: Maybe<Array<Maybe<MediationMessage>>>;
};

export type ComparisonChanges = {
  modifiedField: Scalars['String'];
  newValue: Scalars['String'];
  oldValue: Scalars['String'];
};

export type Comparisons = {
  changeDate: Scalars['String'];
  comparisonChanges?: Maybe<Array<Maybe<ComparisonChanges>>>;
  snapshot: Scalars['String'];
};

export type CostComponents = {
  freeListingAdditionalAmount: Scalars['Float'];
  freeShippingAmount: Scalars['Float'];
  gapDiscount: Scalars['Float'];
  insurance: Scalars['Float'];
  loyalCartDiscount: Scalars['Float'];
  loyalDiscount: Scalars['Float'];
  mandatoryFsDiscount: Scalars['Float'];
  meliGmvDiscount: Scalars['Float'];
  meliRatioAdjustiment: Scalars['Float'];
  normalDiscount: Scalars['Float'];
  roundingDifference: Scalars['Float'];
  routeDiscount: Scalars['Float'];
  ruleCost: Scalars['Float'];
  sellerGmvAggregatedDiscount: Scalars['Float'];
  sellerMarketplaceFee: Scalars['Float'];
  sellerShippingFee: Scalars['Float'];
  specialDiscount: Scalars['Float'];
};

export type CrossDocking = {
  aditionalInfo: Scalars['String'];
  city: Scalars['String'];
  dailyDetailedSchedule?: InputMaybe<Array<InputMaybe<DailyDetailedItemDTO>>>;
  milkRunConfigType: Scalars['String'];
  neighborhood: Scalars['String'];
  placeID: Scalars['String'];
  route: Scalars['String'];
  sellerID: Scalars['String'];
  sellerName: Scalars['String'];
  siteID: Scalars['String'];
  state: Scalars['String'];
  stop: Scalars['String'];
  streetName: Scalars['String'];
  streetNumber: Scalars['String'];
  userID: Scalars['String'];
  warehouseID: Scalars['String'];
  zipCode: Scalars['String'];
};

export type Crossdocking = {
  logisticInfo?: Maybe<LogisticInfo>;
  milkrunHistory?: Maybe<Array<Maybe<MilkrunHistory>>>;
  sellerID: Scalars['String'];
};


export type CrossdockingmilkrunHistoryArgs = {
  date: Scalars['String'];
};

export type CrossdockingDropOff = {
  logisticInfo?: Maybe<LogisticInfo>;
  sellerID: Scalars['String'];
};

export type Currency = {
  decimal_places: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['String'];
  symbol: Scalars['String'];
};

export type Cutoffs = {
  availables?: Maybe<Array<ValueUnit>>;
  selected?: Maybe<ValueUnit>;
};

export type DailyDetailedItemDTO = {
  carrierID: Scalars['String'];
  carrierName: Scalars['String'];
  day: Scalars['Int'];
  endTime: Scalars['String'];
  id: Scalars['String'];
  logisticCenter: Scalars['String'];
  startTime: Scalars['String'];
};

export type DataDisposalInventory = {
  closeDisposalDate?: Maybe<Scalars['String']>;
  disposalQuantity?: Maybe<Scalars['String']>;
};

export type Delay = {
  extendedDateExtended: dateTm;
  extendedDateFinal: dateTm;
  extendedDateLimit: dateTm;
  extendedDateLimitReceiver: dateTm;
  promiseLimit?: Maybe<PromiseLimit>;
  returnTime: Scalars['String'];
};

export type DeliveryPromise = {
  dateCreated: Scalars['String'];
  from: Scalars['String'];
  reason: Scalars['String'];
  rescheduled: Scalars['Boolean'];
  stage: Scalars['String'];
  to: Scalars['String'];
  type: Scalars['String'];
};

export type Destination = {
  id: Scalars['String'];
  receiverId: Scalars['String'];
  receiverName: Scalars['String'];
  receiverPhone: Scalars['String'];
  returnAddress: Scalars['String'];
  shippingAddress: Scalars['String'];
  type: Scalars['String'];
};

export type DetailInp = {
  addressId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type Dimension = {
  height: Scalars['String'];
  length: Scalars['String'];
  weight: Scalars['String'];
  width: Scalars['String'];
  value?: Maybe<Scalars['Float']>;
  measure_unit?: Maybe<query_getWithdrawalsContainer_dimensions_length_measure_unit>;
};

export type Dimensions = {
  cubicWeight: Scalars['String'];
  dimensions: Dimension;
  source: Source;
  length?: Maybe<Dimension>;
  width?: Maybe<Dimension>;
  weight?: Maybe<Dimension>;
  height?: Maybe<Dimension>;
};

export type Discount = {
  promotedAmount: Scalars['Float'];
  rate: Scalars['Float'];
  type: Scalars['String'];
};

export type DropOff = {
  logisticInfo?: Maybe<LogisticInfo>;
  sellerID: Scalars['String'];
};

export type EventInp = {
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifiedProductID?: Maybe<Scalars['String']>;
  newStatus?: Maybe<Scalars['String']>;
  subMotives?: Maybe<Array<Maybe<SubMotiveInp>>>;
};

export type FbmCharge = {
  action: Scalars['String'];
  amount: Scalars['String'];
  amountPerUnit: Scalars['String'];
  currencyId: Scalars['String'];
  details: FbmChargeDetail;
  ean: Scalars['String'];
  id: Scalars['ID'];
  inventoryId: Scalars['String'];
  inventoryType: Scalars['String'];
  itemId: Scalars['String'];
  itemName: Scalars['String'];
  newsDate: Scalars['String'];
  referenceId?: Maybe<Scalars['String']>;
  sellerId: Scalars['String'];
  siteId: Scalars['String'];
  sku: Scalars['String'];
  type: Scalars['String'];
  variation: Scalars['String'];
};

export type FbmChargeDetail = {
  amountPerVolumeUnit?: Maybe<Scalars['String']>;
  inboundId?: Maybe<Scalars['String']>;
  penaltyType?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  shipmentType?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  volumeType?: Maybe<Scalars['String']>;
  volumeUnit?: Maybe<Scalars['String']>;
  withdrawalId?: Maybe<Scalars['String']>;
};

export type FilterValue = {
  id: Scalars['String'];
  name: Scalars['String'];
  results: Scalars['Int'];
};

export type Flex = {
  logisticInfo?: Maybe<LogisticInfo>;
  selfServiceConfiguration?: Maybe<SelfServiceConfiguration>;
  userId: Scalars['String'];
};

export type FlexAllowed = {
  activationDate: Scalars['String'];
  allowed?: Maybe<Scalars['Boolean']>;
  causes?: Maybe<Array<Scalars['String']>>;
};

export type FraudProcessInput = {
  id: Scalars['String'];
  shippingStatusNew: Scalars['String'];
  shippingSubStatusNew: Scalars['String'];
};

export type FromTo = {
  from: Scalars['String'];
  isBold: Scalars['Boolean'];
  isGrey: Scalars['Boolean'];
  to: Scalars['String'];
  unit: Scalars['String'];
};

export type Fulfillment = {
  logisticInfo?: Maybe<LogisticInfo>;
  sellerID: Scalars['String'];
};

export type FulfillmentMLB = {
  isFillial: Scalars['Boolean'];
  sellerBilling: SellerBilling;
  subsidiary: UserSubsidiary;
  userId: Scalars['String'];
  warehouseId: Scalars['String'];
};

export type FulfillmentRestriction = {
  dimensionsOrigin: Scalars['String'];
  restricted: Scalars['Boolean'];
  restrictionCause: Scalars['String'];
};

export type GenericNameValue = {
  name: Scalars['String'];
  value: Scalars['String'];
  verified: Scalars['Boolean'];
};

export type Geometry = {
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Scalars['Float']>>>>>>;
  type: Scalars['String'];
};

export type HandlingTime = {
  unit: Scalars['String'];
  value: Scalars['String'];
};

export type HandlingTimePredictions = {
  day: Scalars['Int'];
  hour: Scalars['Int'];
  value: Scalars['Int'];
};

export type Header = {
  buyer: Buyer;
  cart: Scalars['Boolean'];
  id: Scalars['String'];
  logistic_title: Scalars['String'];
  marketplace: Scalars['String'];
  search_type: Scalars['String'];
};

export type History = {
  comparisons?: Maybe<Array<Comparisons>>;
  paging: Paging;
};

export type HistoryItem = {
  historyItem?: Maybe<Array<Maybe<itemHistory>>>;
  paging?: Maybe<Paging>;
};

export type HistoryOrder = {
  historyOrder?: Maybe<Array<Maybe<orderHistory>>>;
  paging?: Maybe<Paging>;
};

export type IdName = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Identification = {
  number: Scalars['String'];
  type: Scalars['String'];
};

export type Inbound = {
  appointmentDate: Scalars['String'];
  appointmentTimeSlot: Scalars['String'];
  confirmationDate?: Maybe<Scalars['String']>;
  dateCreated: Scalars['String'];
  declaredPackages: Scalars['String'];
  declaredUnits: Scalars['String'];
  fbppTicketsAlfred?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  inboundCharges?: Maybe<Array<Maybe<FbmCharge>>>;
  inboundMilkRunsPlannig?: Maybe<InboundMilkRunPlannig>;
  inboundPenalties?: Maybe<Array<Maybe<InboundPenalty>>>;
  inboundPlanId?: Maybe<Scalars['Int']>;
  inventories?: Maybe<Array<Maybe<InboundInventory>>>;
  inventoryProblems?: Maybe<Array<Maybe<InventoryProblem>>>;
  receivedPackages: Scalars['String'];
  receivedUnits: Scalars['String'];
  receptionDate: Scalars['String'];
  sellerId: Scalars['ID'];
  shipmentType: Scalars['String'];
  siteId: Scalars['String'];
  status: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  warehouseId: Scalars['String'];
};

export type InboundInventories = {
  hasQuantityDifferences: Scalars['Boolean'];
  inventories?: Maybe<Array<InboundInventory>>;
};

export type InboundInventoriesResult = {
  paging: Paging;
  results?: Maybe<InboundInventories>;
};

export type InboundInventory = {
  declaredUnits: Scalars['String'];
  dimensions?: Maybe<Dimension>;
  id: Scalars['ID'];
  inboundId: Scalars['String'];
  insuranceCost: Scalars['String'];
  inventoryProblem?: Maybe<InventoryProblem>;
  inventoryProblemINP?: Maybe<Array<Maybe<InventoryProblemINP>>>;
  itemId: Scalars['String'];
  receivedUnits: Scalars['String'];
  siteId: Scalars['String'];
  title: Scalars['String'];
  warehouseInbound: Scalars['String'];
};

export type InboundMilkRunPlannig = {
  customerId?: Maybe<Scalars['Int']>;
  inboundMilkRunsRunning?: Maybe<Array<Maybe<InboundMilkRunRunning>>>;
  milkRunDays?: Maybe<Array<Maybe<MilkRunDay>>>;
  siteId?: Maybe<Scalars['String']>;
};

export type InboundMilkRunRunning = {
  carrier?: Maybe<MilkRunGenericEntity>;
  collectedPackage?: Maybe<Scalars['Int']>;
  deliveredNoteId?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['String']>;
  driver?: Maybe<MilkRunDriver>;
  estimatedPackage?: Maybe<Scalars['Int']>;
  facilityId?: Maybe<Scalars['String']>;
  finishMilkRunTime?: Maybe<Scalars['String']>;
  incidentType?: Maybe<MilkRunIncidentType>;
  logisticType?: Maybe<Scalars['String']>;
  milkRunStatus?: Maybe<Scalars['String']>;
  milkRunTime?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  outOfRange?: Maybe<Scalars['Boolean']>;
  outOfRangeDistance?: Maybe<Scalars['String']>;
  outOfRangeGeolocationType?: Maybe<Scalars['String']>;
  routeDate?: Maybe<Scalars['String']>;
  routeId?: Maybe<Scalars['String']>;
  routeName?: Maybe<Scalars['String']>;
  seller?: Maybe<MilkRunSellerEntity>;
  site?: Maybe<Scalars['String']>;
  startMilkRunTime?: Maybe<Scalars['String']>;
  topSeller?: Maybe<Scalars['Boolean']>;
  vehicle?: Maybe<MilkRunVehicle>;
};

export type InboundPenalties = {
  availableFilters?: Maybe<Array<Maybe<AvailableFilters>>>;
  filters?: Maybe<Scalars['Map']>;
  paging: Paging;
  results?: Maybe<Array<Maybe<InboundPenalty>>>;
};

export type InboundPenalty = {
  bonificationType?: Maybe<Scalars['String']>;
  bookingId: Scalars['String'];
  bookingSource?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  chargeStatus?: Maybe<Scalars['String']>;
  chargesInboudPenalty?: Maybe<Array<Maybe<FbmCharge>>>;
  concept?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  detail: InboundPenaltyDetail;
  eventDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inboundId: Scalars['String'];
  sellerId: Scalars['String'];
  shipmentType?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  totalAmountToPay?: Maybe<Scalars['String']>;
  totalBonificationAmount?: Maybe<Scalars['String']>;
  totalChargeAmount?: Maybe<Scalars['String']>;
  warehouseId: Scalars['String'];
};

export type InboundPenaltyDetail = {
  appointmentArrivalDate: Scalars['String'];
  appointmentCancellationDate?: Maybe<Scalars['String']>;
  appointmentCancellationLimitDate?: Maybe<Scalars['String']>;
  appointmentDate: Scalars['String'];
  dateCreated: Scalars['String'];
  dateUpdated: Scalars['String'];
  id: Scalars['ID'];
  penaltyUnits: Scalars['String'];
  toleranceDifference?: Maybe<Scalars['String']>;
  totalUnitsDeclared?: Maybe<Scalars['String']>;
  totalUnitsReceived?: Maybe<Scalars['String']>;
};

export type Incidence = {
  category: Scalars['String'];
  category_description: Scalars['String'];
};

export type IncidentsInp = {
  id: Scalars['ID'];
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>;
  quantity?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['String']>;
};

export type InventoryAddress = {
  addressId: Scalars['ID'];
  availableQuantity: Scalars['Int'];
  reservedQuantity: Scalars['Int'];
  sellerProductId: Scalars['String'];
  totalQuantity: Scalars['Int'];
  warehouseId: Scalars['String'];
};

export type InventoryDimensions = {
  height?: Maybe<InventoryDimensionsUnit>;
  length?: Maybe<InventoryDimensionsUnit>;
  weight?: Maybe<InventoryDimensionsUnit>;
  width?: Maybe<InventoryDimensionsUnit>;
};

export type InventoryDimensionsUnit = {
  measureUnit?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type InventoryFeeDetail = {
  date?: Maybe<Scalars['String']>;
  stockDetails?: Maybe<Array<Maybe<StockFeeDetail>>>;
  totalFeeAmount?: Maybe<Scalars['String']>;
  totalQuantity?: Maybe<Scalars['String']>;
};

export type InventoryInbounds = {
  availableFilters?: Maybe<Array<Maybe<AvailableFilters>>>;
  paging: Paging;
  results?: Maybe<Array<Maybe<Inbound>>>;
};

export type InventoryItem = {
  dataDisposalInventory?: Maybe<DataDisposalInventory>;
  dimensions?: Maybe<InventoryDimensions>;
  fbppTicketsAlfred?: Maybe<Array<Scalars['String']>>;
  fulfillmentActive: Scalars['Boolean'];
  identifiers?: Maybe<Array<Maybe<GenericNameValue>>>;
  insuranceCost: Scalars['String'];
  inventoryId: Scalars['ID'];
  itemId: Scalars['String'];
  itemIsConsistent: Scalars['Boolean'];
  sellerId: Scalars['String'];
  siteId: Scalars['String'];
  stockDetailWithLocation?: Maybe<StockDetailWithLocation>;
  title: Scalars['String'];
  variationId: Scalars['String'];
};

export type InventoryMovement = {
  clientId?: Maybe<Scalars['String']>;
  dateCreated: Scalars['String'];
  externalReferences?: Maybe<Scalars['Map']>;
  fiscalCoverage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemId: Scalars['String'];
  locationId: Scalars['String'];
  movements?: Maybe<Array<Maybe<Scalars['Int']>>>;
  processName: Scalars['String'];
  quantity: Scalars['String'];
  reservations?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sellerProductId: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
  userName: Scalars['String'];
};

export type InventoryMovementsResult = {
  availableFilters?: Maybe<Array<Maybe<AvailableFilters>>>;
  filters?: Maybe<Scalars['Map']>;
  paging: Paging;
  results?: Maybe<Array<Maybe<InventoryMovement>>>;
};

export type InventoryProblem = {
  category: Scalars['String'];
  inventoryId: Scalars['String'];
  message: Scalars['String'];
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>;
  subCategory: Scalars['String'];
};

export type InventoryProblemINP = {
  caseData?: Maybe<CaseDataInp>;
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Array<Maybe<DetailInp>>>;
  events?: Maybe<Array<Maybe<EventInp>>>;
  id: Scalars['ID'];
  identification?: Maybe<Scalars['String']>;
  incidents?: Maybe<Array<Maybe<IncidentsInp>>>;
  quantity?: Maybe<Scalars['Int']>;
  sellerProductId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subCategory?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  warehouseId?: Maybe<Scalars['String']>;
};

export type InventoryQuantityItem = {
  arrivalStock?: Maybe<Scalars['String']>;
  availableStock?: Maybe<Scalars['String']>;
  delta?: Maybe<Scalars['String']>;
  hasForecast?: Maybe<Scalars['Boolean']>;
  itemID?: Maybe<Scalars['String']>;
  limits?: Maybe<Array<Maybe<LimitsQuantityItem>>>;
  stockSurplus?: Maybe<Scalars['String']>;
  variationID?: Maybe<Scalars['String']>;
};

export type InventoryRecommendationsItem = {
  inventoryQuantityRecommendations?: Maybe<InventoryQuantityItem>;
  inventoryRecommendationsDetail?: Maybe<InventoryQuantityItem>;
};

export type InventoryWarehosingCharge = {
  currencyID?: Maybe<Scalars['String']>;
  details?: Maybe<Array<Maybe<InventoryFeeDetail>>>;
  inventoryID?: Maybe<Scalars['String']>;
  inventoryInfo?: Maybe<InventoryItem>;
  sellerID?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  totalFeeAmount?: Maybe<Scalars['String']>;
};

export type Item = {
  actions?: Maybe<Array<Maybe<Action>>>;
  dimensions?: Maybe<Dimensions>;
  fulfillmentRestriction?: Maybe<FulfillmentRestriction>;
  inventories?: Maybe<Array<Scalars['String']>>;
  itemDetail: ItemDetail;
  seller?: Maybe<User>;
  shippingPreferences?: Maybe<ShippingPreferences>;
};

export type ItemAttribute = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['String']>;
  valueName?: Maybe<Scalars['String']>;
};

export type ItemDetail = {
  catalogId: Scalars['String'];
  categoryId: Scalars['String'];
  condition: Scalars['String'];
  digital: Scalars['Boolean'];
  dimensionsExceeded: Scalars['Boolean'];
  flammable: Scalars['Boolean'];
  flex: Scalars['Boolean'];
  freeShipping?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  inventoryId?: Maybe<Scalars['String']>;
  lostMe2ByDimensions: Scalars['Boolean'];
  permalink: Scalars['String'];
  price: Scalars['String'];
  saleTerms?: Maybe<Array<SaleTerms>>;
  shipping?: Maybe<Shipping>;
  status: Scalars['String'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  variations?: Maybe<Array<Maybe<ItemVariations>>>;
};

export type ItemDetailHistory = {
  CategoryId?: Maybe<Scalars['String']>;
  Condition?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  VariationId?: Maybe<Scalars['Int']>;
  Warranty?: Maybe<Scalars['String']>;
};

export type ItemPicture = {
  secureUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ItemSTValueStruct = {
  number: Scalars['String'];
  unit: Scalars['String'];
};

export type ItemSaleTerms = {
  id?: Maybe<Scalars['String']>;
  valueStruct?: Maybe<ItemSTValueStruct>;
};

export type ItemShipping = {
  dimensions?: Maybe<Scalars['String']>;
  freeMethod?: Maybe<Scalars['String']>;
  freeShipping?: Maybe<Scalars['Boolean']>;
  localPickup?: Maybe<Scalars['Boolean']>;
  logisticType?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  storePickUp?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ItemVariation = {
  attributeCombinations?: Maybe<Array<Maybe<ItemAttribute>>>;
  attributes?: Maybe<Array<Maybe<ItemAttribute>>>;
  availableQuantity?: Maybe<Scalars['Int']>;
  catalogProductId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inventoryId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  soldQuantity?: Maybe<Scalars['Int']>;
};

export type ItemVariations = {
  id?: Maybe<Scalars['String']>;
  inventoryId?: Maybe<Scalars['String']>;
};

export type Labeling = {
  AddressLine: Scalars['String'];
  Carrier: CarrierLabeling;
  GenerateDate: Scalars['String'];
  LastPrintUser: Scalars['String'];
  PrintDate: Scalars['String'];
  Reason: Scalars['String'];
  Route: Scalars['String'];
  UserID: Scalars['String'];
  WorkstationID: Scalars['Int'];
};

export type Lead = {
  deliveryRange?: Maybe<FromTo>;
  estimatedDeliveryTime: FromTo;
  handlingDelay: Scalars['Boolean'];
  handlingTime: HandlingTime;
  limitHandlingTime: Scalars['String'];
  manufacturingTime: Scalars['String'];
  originalPromiseDeliveryTime: FromTo;
  promiseDeliveryTime: FromTo;
  recalculatedPromises?: Maybe<Array<Maybe<DeliveryPromise>>>;
  returnTime?: Maybe<ReturnTime>;
  shippingDelay: Scalars['Boolean'];
};

export type LimitsQuantityItem = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type LocationDetail = {
  fiscalCoverage?: Maybe<Scalars['Map']>;
  inLocation?: Maybe<Scalars['Map']>;
  inLocationProcessing?: Maybe<Scalars['Map']>;
  inTransfer?: Maybe<Scalars['Map']>;
  locationId?: Maybe<Scalars['String']>;
  locationType?: Maybe<Scalars['String']>;
  saleable?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type Logistic = {
  mode: Scalars['String'];
  types?: Maybe<Array<Scalars['String']>>;
};

export type LogisticCenter = {
  address?: Maybe<LogisticCenterAddress>;
  dateCreated: Scalars['String'];
  id: Scalars['String'];
  logisticCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  logisticProvider: Scalars['String'];
  name: Scalars['String'];
  shortName: Scalars['String'];
  siteId: Scalars['String'];
  status: Scalars['String'];
  type: Scalars['String'];
};

export type LogisticCenterAddress = {
  addressLine: Scalars['String'];
  agency?: Maybe<Scalars['String']>;
  city?: Maybe<IdName>;
  comment: Scalars['String'];
  country?: Maybe<IdName>;
  geolocationType: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  isValidForCarrier: Scalars['Boolean'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  municipality?: Maybe<IdName>;
  neighborhood?: Maybe<IdName>;
  state?: Maybe<IdName>;
  streetName: Scalars['String'];
  streetNumber: Scalars['String'];
  types?: Maybe<Array<Scalars['String']>>;
  zipCode: Scalars['String'];
};

export type LogisticHandlingTime = {
  accuracy: Scalars['String'];
  logisticType: Scalars['String'];
  predictions?: Maybe<Array<Maybe<HandlingTimePredictions>>>;
  source: Scalars['String'];
  unit: Scalars['String'];
  userID: Scalars['Int'];
};

export type LogisticInfo = {
  carrierPickup?: Maybe<Array<Maybe<LogisticService>>>;
  default: Scalars['Boolean'];
  handlingTime?: Maybe<LogisticHandlingTime>;
  overCapacity: Scalars['Boolean'];
  selfServiceTime?: Maybe<SelfServiceTime>;
  services?: Maybe<Array<Maybe<LogisticService>>>;
  status: Scalars['String'];
  tokenAxado: Scalars['String'];
  warehouses?: Maybe<Array<Maybe<LogisticWarehouse>>>;
};

export type LogisticService = {
  ID: Scalars['String'];
  companyID: Scalars['String'];
  description: Scalars['String'];
};

export type LogisticType = {
  default: Scalars['Boolean'];
  schedule?: Maybe<Array<Maybe<ScheduleDay>>>;
  services: Array<Maybe<Scalars['Int']>>;
  status: Scalars['String'];
  type: Scalars['String'];
};

export type LogisticWarehouse = {
  fiscal: Scalars['String'];
  flex?: Maybe<Flex>;
  integrator: Scalars['String'];
  name: Scalars['String'];
};

export type MELogistic = {
  crossdocking?: Maybe<Crossdocking>;
  dropoff?: Maybe<DropOff>;
  flex?: Maybe<Flex>;
  fulfillment?: Maybe<Fulfillment>;
  xddo?: Maybe<CrossdockingDropOff>;
};

export type MediationMessage = {
  author: Scalars['String'];
  dateCreated: Scalars['String'];
  dateCreatedNew: Scalars['String'];
  message: Scalars['String'];
  receiverRole: Scalars['String'];
  role: Scalars['String'];
};

export type Method = {
  method: Scalars['String'];
  methodId: Scalars['String'];
};

export type MilkRunDay = {
  carrier?: Maybe<MilkRunGenericEntity>;
  dateCreated?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['String']>;
  driver?: Maybe<MilkRunGenericEntity>;
  timeWindows?: Maybe<Array<Maybe<TimeWindows>>>;
  vehicle?: Maybe<MilkRunVehicle>;
};

export type MilkRunDriver = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type MilkRunGenericEntity = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type MilkRunIncidentType = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type MilkRunSellerEntity = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type MilkRunTypeVehicle = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type MilkRunVehicle = {
  id?: Maybe<Scalars['ID']>;
  licensePlate?: Maybe<Scalars['String']>;
  type?: Maybe<MilkRunTypeVehicle>;
  vehicleType?: Maybe<Scalars['String']>;
};

export type MilkrunCarrier = {
  ID: Scalars['Int'];
  name: Scalars['String'];
};

export type MilkrunDriver = {
  ID: Scalars['Int'];
  name: Scalars['String'];
};

export type MilkrunHistory = {
  carrier?: Maybe<MilkrunCarrier>;
  configID: Scalars['String'];
  cutoff: Scalars['String'];
  deliveryNotes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  driver?: Maybe<MilkrunDriver>;
  logisticCenter: Scalars['String'];
  specialMilkrun: Scalars['Boolean'];
  vehicle?: Maybe<MilkrunVehicle>;
  window: Scalars['String'];
};

export type MilkrunVehicle = {
  ID: Scalars['Int'];
  licensePlate: Scalars['String'];
};

export type ModeActions = {
  Disabled: Scalars['Boolean'];
  Label: Scalars['String'];
  Name: Scalars['String'];
  Reason: Scalars['String'];
};

export type MonthSales = {
  amount?: Maybe<Scalars['Int']>;
  amountME?: Maybe<Scalars['Int']>;
};

export type MovementContainer = {
  date: Scalars['String'];
  from: Scalars['String'];
  to: Scalars['String'];
};

export type OnlyID = {
  Id?: Maybe<Scalars['Int']>;
};

export type OnlyName = {
  name?: Maybe<Scalars['String']>;
};

export type Order = {
  buyer: OrderBuyer;
  claims?: Maybe<Array<Maybe<Claim>>>;
  external: Scalars['Boolean'];
  id: Scalars['ID'];
  orderItem: OrderItem;
  paymentDetail: PaymentDetail;
  payments: Array<Maybe<Payment>>;
  seller: OrderSeller;
  summaryHandlingTime: SummaryHandlingTime;
};

export type OrderBuyer = {
  userID: Scalars['String'];
};

export type OrderIDS = {
  orders?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shipment?: InputMaybe<Scalars['String']>;
};

export type OrderItem = {
  cost: Scalars['Float'];
  fragile?: Maybe<Scalars['Boolean']>;
  item?: Maybe<Array<Maybe<Item>>>;
  listingTypeId?: Maybe<Scalars['String']>;
  units: Scalars['Int'];
};

export type OrderItemHistory = {
  FullUnitPrice?: Maybe<Scalars['Float']>;
  Item?: Maybe<ItemDetailHistory>;
  ListingTypeID?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  UnitPrice?: Maybe<Scalars['Float']>;
};

export type OrderSeller = {
  historicReputation?: Maybe<OrderSellerReputation>;
  orderID: Scalars['String'];
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type OrderSellerReputation = {
  previousLevel?: Maybe<Scalars['String']>;
  sellerLevel?: Maybe<Scalars['String']>;
};

export type OriginDestination = {
  address: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Outbound = {
  AddedBy: Scalars['String'];
  ClosedBy: Scalars['String'];
  DateClosed: Scalars['String'];
  DateOpened: Scalars['String'];
  ID: Scalars['String'];
  IncludedAt: Scalars['String'];
  Status: Scalars['String'];
  UserIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  WorkstationID: Scalars['Int'];
};

export type PaginatedInputWithDate = {
  from: Scalars['String'];
  limit: Scalars['String'];
  offset: Scalars['String'];
  sort: Scalars['String'];
  to: Scalars['String'];
};

export type Paging = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['BigInt']>;
};

export type Payment = {
  ID: Scalars['ID'];
  creditCardSurchage: Scalars['String'];
  date: Scalars['String'];
  isAcredited: Scalars['Boolean'];
  method: Scalars['String'];
  paymentAddition: Scalars['String'];
  productCost: Scalars['String'];
  releaseDate: Scalars['String'];
  shippingCost: Scalars['String'];
  status: Scalars['String'];
  statusDetail: Scalars['String'];
  totalCost: Scalars['String'];
};

export type PaymentDetail = {
  ID: Scalars['ID'];
  autoPurchase: Scalars['Boolean'];
  currency: Currency;
  date: Scalars['String'];
  fraudRiskDetected: Scalars['Boolean'];
  isDisponibility: Scalars['Boolean'];
  originalPrice: Scalars['Float'];
  releaseDate: Scalars['String'];
  total: Scalars['Float'];
};

export type PaymentHistory = {
  CurrencyID?: Maybe<Scalars['String']>;
  DateApproved?: Maybe<Scalars['String']>;
  DateCreated?: Maybe<Scalars['String']>;
  DateLastModified?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['Int']>;
  Method?: Maybe<Scalars['String']>;
  OperationType?: Maybe<Scalars['String']>;
  OrderID?: Maybe<Scalars['Int']>;
  Reason?: Maybe<Scalars['String']>;
  SiteID?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  StatusDetail?: Maybe<Scalars['String']>;
  TotalPaidAmount?: Maybe<Scalars['Float']>;
  TransactionAmount?: Maybe<Scalars['Float']>;
};

export type PaymentsInput = {
  external: Scalars['Boolean'];
  orderID: Scalars['String'];
};

export type Phone = {
  areaCode: Scalars['String'];
  extension: Scalars['String'];
  number: Scalars['String'];
};

export type PlacePoint = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Poligon = {
  geometry?: Maybe<Geometry>;
  properties?: Maybe<OnlyName>;
  type?: Maybe<Scalars['String']>;
};

export type Preferences = {
  dimension: Dimension;
  logistics?: Maybe<Array<Logistic>>;
  restricted: Scalars['Boolean'];
};

export type Price = {
  currencyId: Scalars['String'];
  decimalPrice: Scalars['String'];
  decimalSeparator: Scalars['String'];
  integerPrice: Scalars['String'];
  symbol: Scalars['String'];
};

export type PrintLabelInput = {
  id: Scalars['String'];
};

export type PromiseLimit = {
  compensated: Scalars['Boolean'];
  date: Scalars['String'];
};

export type Purchases = {
  detail?: Maybe<SalesDetail>;
};

export type RegenerateLabelInput = {
  id: Scalars['String'];
};

export type ReputationTagInput = {
  id: Scalars['String'];
};

export type ReturnShipment = {
  id: Scalars['String'];
  pack: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  type: Scalars['String'];
};

export type ReturnTime = {
  Date: Scalars['String'];
  DateTo: Scalars['String'];
  Type: Scalars['String'];
  isBold: Scalars['Boolean'];
  isGrey: Scalars['Boolean'];
};

export type SaleTerms = {
  id: Scalars['String'];
  valueStruct: ItemSTValueStruct;
};

export type Sales = {
  lastMonth?: Maybe<MonthSales>;
  thisMonth?: Maybe<MonthSales>;
  total?: Maybe<MonthSales>;
};

export type SalesDetail = {
  availableDateFilters?: Maybe<Array<AvailableFilters>>;
  availableFilters?: Maybe<Array<AvailableFilters>>;
  availableSorts?: Maybe<Array<FilterValue>>;
  dateFilters?: Maybe<Array<AvailableFilters>>;
  filters?: Maybe<Array<AvailableFilters>>;
  orders?: Maybe<Array<UserOrder>>;
  paging?: Maybe<Paging>;
  sort: FilterValue;
};

export type ScheduleDay = {
  day: Scalars['String'];
  scheduleDetail?: Maybe<Array<Maybe<ScheduleDetail>>>;
};

export type ScheduleDetail = {
  cutoff: Scalars['String'];
  from: Scalars['String'];
  to: Scalars['String'];
};

export type SearchByValue = {
  searchBy: Scalars['String'];
  value: Scalars['String'];
};

export type SelfServiceConfiguration = {
  activationDate: Scalars['String'];
  addressLine: Scalars['String'];
  capacities?: Maybe<Capacities>;
  city?: Maybe<OnlyName>;
  creationDate: Scalars['String'];
  cutoffs?: Maybe<Cutoffs>;
  deliveryWindow: Scalars['String'];
  lastUpdate: Scalars['String'];
  penaltyStatus: Scalars['String'];
  recoverDate: Scalars['String'];
  serviceId: Scalars['String'];
  status: Scalars['String'];
  userId: Scalars['String'];
  zipCode: Scalars['String'];
  zones?: Maybe<Array<Maybe<Zones>>>;
};

export type SelfServiceTime = {
  capacity: Scalars['Int'];
  cutoff: Scalars['Int'];
  deliveryWindow: Scalars['String'];
};

export type Seller = {
  detail?: Maybe<SellerDetail>;
  id: Scalars['String'];
  user?: Maybe<User>;
};

export type SellerBilling = {
  erp: Scalars['String'];
  integration: Scalars['String'];
};

export type SellerDetail = {
  logistics: Array<Maybe<LogisticType>>;
  sales?: Maybe<Sales>;
  segment: Scalars['String'];
};

export type SellerInbounds = {
  paging: Paging;
  results?: Maybe<Array<Maybe<Inbound>>>;
};

export type SellerInventories = {
  paging: Paging;
  results?: Maybe<Array<Maybe<InventoryItem>>>;
};

export type SellerPricingWarehousings = {
  fromDate?: Maybe<Scalars['String']>;
  inventories?: Maybe<Array<Maybe<InventoryWarehosingCharge>>>;
  sellerID?: Maybe<Scalars['ID']>;
  toDate?: Maybe<Scalars['String']>;
};

export type SellerProperties = {
  activationDate: Scalars['String'];
  axado: Scalars['String'];
  bulky: Scalars['Boolean'];
  certificate: Scalars['String'];
  certificateType: Scalars['String'];
  fiscalOptin: Scalars['String'];
  flexAllawed: FlexAllowed;
  fragile: Scalars['String'];
  fulfillmentWithSelfService: Scalars['Boolean'];
  modes?: Maybe<Array<Scalars['String']>>;
  professional: Scalars['String'];
  shippingAddress: Scalars['String'];
  shippingOption: Scalars['String'];
  thermalPrinter: Scalars['String'];
  whitelistFlex?: Maybe<Scalars['Boolean']>;
};

export type SellerReputation = {
  levelId: Scalars['String'];
  powerSellerStatus: Scalars['String'];
};

export type SellerWithdrawals = {
  paging: Paging;
  results?: Maybe<Array<Maybe<Withdrawal>>>;
};

export type Service = {
  carrierId: Scalars['String'];
  service: Scalars['String'];
  serviceId: Scalars['String'];
};

export type Shipment = {
  PackID?: Maybe<Scalars['String']>;
  header?: Maybe<Header>;
  id: Scalars['ID'];
  orders?: Maybe<Array<Maybe<Order>>>;
  shipmentDetail?: Maybe<ShipmentDetail>;
  step?: Maybe<Step>;
  wms?: Maybe<WmsInfo>;
  address?: Maybe<Address>;
  type?: Maybe<query_getWithdrawalsRequest_shipment_type>;
};

export type ShipmentCompany = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ShipmentContainer = {
  address?: Maybe<Scalars['Map']>;
  estimatedDeliveryDate?: Maybe<Scalars['Map']>;
  orderId?: Maybe<Scalars['String']>;
  parcelId?: Maybe<Scalars['String']>;
  tracking?: Maybe<Array<Maybe<TrackingContainer>>>;
  trackingId?: Maybe<Scalars['String']>;
  transferUnitId?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
};

export type ShipmentDetail = {
  destination: Destination;
  dimensions?: Maybe<Dimension>;
  fiscalData?: Maybe<ShipmentFiscalData>;
  id: Scalars['String'];
  isProximity: Scalars['Boolean'];
  keyword: Scalars['String'];
  logisticType: Scalars['String'];
  method?: Maybe<Method>;
  mode: Scalars['String'];
  origin: Destination;
  service?: Maybe<Service>;
  shipmentHistory?: Maybe<Array<ShipmentHistory>>;
  shippingCosts?: Maybe<ShippingCosts>;
  shippingInfo?: Maybe<ShippingInfo>;
  siteId: Scalars['String'];
  status: Scalars['String'];
  substatus: Scalars['String'];
  time: Time;
  timeZone: Scalars['String'];
  volumetricWeight: Scalars['String'];
};

export type ShipmentFiscalData = {
  cfop: Scalars['Int'];
  companyStateTaxId: Scalars['String'];
  fiscalKey: Scalars['String'];
  invoiceNumber: Scalars['String'];
};

export type ShipmentHistory = {
  date: Scalars['String'];
  status: Scalars['String'];
  substatus: Scalars['String'];
};

export type ShipmentId = {
  id: Scalars['String'];
};

export type ShipmentMilestone = {
  id: Scalars['ID'];
  manual: Scalars['String'];
  message: Scalars['String'];
  status: Scalars['String'];
  subMilestones?: Maybe<Array<Maybe<ShipmentSubMilestone>>>;
};

export type ShipmentStatusHistory = {
  checkpoints?: Maybe<Array<Checkpoint>>;
  id: Scalars['ID'];
};

export type ShipmentSubMilestone = {
  date: Scalars['String'];
  id: Scalars['ID'];
  message: Scalars['String'];
  rule: Scalars['String'];
  status: Scalars['String'];
};

export type Shipping = {
  dimensions: Scalars['String'];
  freeMethod: Scalars['String'];
  freeShipping: Scalars['Boolean'];
  localPickup: Scalars['Boolean'];
  logisticType: Scalars['String'];
  mode: Scalars['String'];
  storePickUp: Scalars['Boolean'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ShippingCosts = {
  buyerCosts?: Maybe<UserCosts>;
  currencyID: Scalars['String'];
  sellerCosts?: Maybe<UserCosts>;
};

export type ShippingInfo = {
  country: Scalars['String'];
  method: Scalars['String'];
  service: Scalars['String'];
};

export type ShippingPreferences = {
  attributes?: Maybe<Array<Attribute>>;
  catalogProductId: Scalars['String'];
  id: Scalars['String'];
  modes: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  origin: Scalars['String'];
  preferences: Preferences;
};

export type ShpItem = {
  acceptsMercadopago?: Maybe<Scalars['Boolean']>;
  attributes?: Maybe<Array<Maybe<ItemAttribute>>>;
  availableQuantity?: Maybe<Scalars['Int']>;
  basePrice?: Maybe<Scalars['Float']>;
  bigDecimal?: Maybe<Scalars['Float']>;
  buyingMode?: Maybe<Scalars['String']>;
  catalogProductId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  currencyId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  domainId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  initialQuantity?: Maybe<Scalars['Int']>;
  internationalDeliveryMode?: Maybe<Scalars['String']>;
  inventoryId?: Maybe<Scalars['String']>;
  listingTypeId?: Maybe<Scalars['String']>;
  marketPlace?: Maybe<Scalars['String']>;
  officialStoreId?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['String']>;
  permalink?: Maybe<Scalars['String']>;
  pictures?: Maybe<Array<Maybe<ItemPicture>>>;
  preferenceId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  saleTerms?: Maybe<Array<Maybe<ItemSaleTerms>>>;
  sellerId?: Maybe<Scalars['Int']>;
  shipping?: Maybe<ItemShipping>;
  shippingId?: Maybe<Scalars['String']>;
  siteId?: Maybe<Scalars['String']>;
  soldQuantity?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  substatus?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  variations?: Maybe<Array<Maybe<ItemVariation>>>;
};

export type ShpOrder = {
  DateCreated?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['Int']>;
  Items?: Maybe<Array<Maybe<OrderItemHistory>>>;
  Payments?: Maybe<Array<Maybe<PaymentHistory>>>;
  Shipping?: Maybe<OnlyID>;
};

export type Source = {
  identifier: Scalars['String'];
  origin: Scalars['String'];
};

export type Step = {
  buyer?: Maybe<StepUser>;
  estimatedDeliveryLimit: Scalars['String'];
  handlingTime: Scalars['String'];
  id: Scalars['ID'];
  promiseDeliveryTime: Scalars['String'];
  seller?: Maybe<StepUser>;
  shippingCost: Scalars['String'];
  steps?: Maybe<Array<StepDetail>>;
};

export type StepDetail = {
  carrier: ShipmentCompany;
  destination: OriginDestination;
  finalDate: Scalars['String'];
  id: Scalars['String'];
  inCourse: Scalars['Boolean'];
  initialDate: Scalars['String'];
  isReturn: Scalars['Boolean'];
  logisticCenterID: Scalars['String'];
  logisticProvider: Scalars['String'];
  logisticProviderCity: Scalars['String'];
  origin: OriginDestination;
  point?: Maybe<PlacePoint>;
  sequence: Scalars['Int'];
  serviceID: Scalars['Int'];
  serviceName: Scalars['String'];
  trackingNumber: Scalars['String'];
  trackingURL: Scalars['String'];
  type: Scalars['String'];
};

export type StepUser = {
  active: Scalars['Boolean'];
  addresLine: Scalars['String'];
  id: Scalars['ID'];
  nickname: Scalars['String'];
};

export type StockDetailWithLocation = {
  locations?: Maybe<Array<Maybe<LocationDetail>>>;
  saleable?: Maybe<Scalars['Int']>;
  sellerProductId?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type StockFeeDetail = {
  feeAmount?: Maybe<Scalars['String']>;
  inventoryStatus?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
};

export type SubMotiveInp = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SummaryClaims = {
  dateOpened: Scalars['String'];
  id: Scalars['String'];
  info?: Maybe<Scalars['String']>;
  reasonId: Scalars['String'];
  riskBuyer: Scalars['String'];
  riskSender: Scalars['String'];
  solutionBuyer: Scalars['String'];
  solutionMediator?: Maybe<Array<Scalars['String']>>;
  solutionSeller: Scalars['String'];
  status: Scalars['String'];
  url: Scalars['String'];
};

export type SummaryHandlingTime = {
  delayed: Scalars['Boolean'];
  excluded: Scalars['Boolean'];
  handlingTime: Scalars['Int'];
  unit: Scalars['String'];
};

export type TagCaseInp = {
  message?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
};

export type Time = {
  delay?: Maybe<Delay>;
  lead?: Maybe<Lead>;
};

export type TimeLine = {
  header: Scalars['String'];
  story?: Maybe<Array<Maybe<ShipmentMilestone>>>;
  timelineColor: Scalars['String'];
};

export type TimeWindows = {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type TmsDevolution = {
  Dispatch?: Maybe<TmsDispatch>;
  Inbound?: Maybe<TmsInbound>;
  Labeling?: Maybe<Labeling>;
  Outbound?: Maybe<Outbound>;
};

export type TmsDispatch = {
  CarrierID: Scalars['Int'];
  CarrierName: Scalars['String'];
  DateFinished: Scalars['String'];
  DockID: Scalars['Int'];
  ID: Scalars['String'];
  IncludedAt: Scalars['String'];
  Status: Scalars['String'];
  TruckID: Scalars['String'];
  UserID: Scalars['String'];
};

export type TmsInbound = {
  CarrierID: Scalars['Int'];
  CarrierName: Scalars['String'];
  DateClosed: Scalars['String'];
  DateOpened: Scalars['String'];
  DockID: Scalars['Int'];
  ID: Scalars['String'];
  InboundOperation: Scalars['String'];
  IncludedAt: Scalars['String'];
  Status: Scalars['String'];
  TruckID: Scalars['String'];
  UserID: Scalars['String'];
};

export type TmsInfo = {
  Devolution?: Maybe<TmsDevolution>;
  Dispatch?: Maybe<TmsDispatch>;
  HubStatus: Scalars['String'];
  Inbound: TmsInbound;
  LastMile: Scalars['Boolean'];
  Outbound?: Maybe<TmsOutbound>;
  Priority: Scalars['String'];
  ShippingOption: Scalars['Int'];
  ShippingType: Scalars['String'];
  StatusDesc: Scalars['String'];
  Substatus: Scalars['String'];
};

export type TmsOutbound = {
  AddedBy: Scalars['String'];
  DateClosed: Scalars['String'];
  DateOpened: Scalars['String'];
  ID: Scalars['String'];
  IncludedAt: Scalars['String'];
  Status: Scalars['String'];
  UserIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Tracking = {
  history?: Maybe<Array<Maybe<TrackingNumber>>>;
  shipmentID: Scalars['String'];
};

export type TrackingContainer = {
  dateTime?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['String']>;
};

export type TrackingNumber = {
  dateCreated: Scalars['String'];
  number: Scalars['String'];
  plpID: Scalars['String'];
  serviceID: Scalars['String'];
  status: Scalars['String'];
  substatus: Scalars['String'];
};

export type UnitContainer = {
  details: Array<Maybe<UnitContainerDetail>>;
  inventoryId: Scalars['String'];
};

export type UnitContainerDetail = {
  quantity: Scalars['Int'];
  status: Scalars['String'];
};

export type User = {
  addresses: Array<Address>;
  agingDate?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id?: Maybe<Scalars['BigInt']>;
  identification: Identification;
  internalTags?: Maybe<Array<Scalars['String']>>;
  lastName: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  phone: Phone;
  points: Scalars['String'];
  purchases: SalesDetail;
  sales: UserSales;
  sellerReputation: SellerReputation;
  signature: Scalars['String'];
  siteId: Scalars['String'];
  status: UserStatus;
  tags?: Maybe<Array<Scalars['String']>>;
  test: Scalars['Boolean'];
  userType: Scalars['String'];
};


export type UserpurchasesArgs = {
  input: PaginatedInputWithDate;
};

export type UserCosts = {
  buyerBillingAmount: Scalars['Float'];
  cost: Scalars['Float'];
  costComponents: CostComponents;
  discount: Discount;
  save: Scalars['Float'];
  userID: Scalars['String'];
  userType: Scalars['String'];
};

export type UserFiscalData = {
  id: Scalars['String'];
  value: Scalars['String'];
};

export type UserOrder = {
  amountPaid: Scalars['String'];
  buyer: Scalars['String'];
  currencyId: Scalars['String'];
  logisticType: Scalars['String'];
  method: Scalars['String'];
  offer: Scalars['String'];
  orderId: Scalars['String'];
  orderStatus: Scalars['String'];
  publication: Scalars['String'];
  seller: Scalars['String'];
  status: Scalars['String'];
  subStatus: Scalars['String'];
  title: Scalars['String'];
};

export type UserSales = {
  amount?: Maybe<Sales>;
  detail?: Maybe<SalesDetail>;
  userId: Scalars['String'];
};


export type UserSalesamountArgs = {
  input: PaginatedInputWithDate;
};


export type UserSalesdetailArgs = {
  input: PaginatedInputWithDate;
};

export type UserStatus = {
  mercadopagoAccountType: Scalars['String'];
  siteStatus: Scalars['String'];
};

export type UserSubsidiary = {
  name: Scalars['String'];
  userFiscalData?: InputMaybe<Array<InputMaybe<UserFiscalData>>>;
  warehouseId: Scalars['String'];
};

export type ValueUnit = {
  unit: Scalars['String'];
  value: Scalars['Int'];
};

export type Withdrawal = {
  ableToReschedule?: Maybe<Scalars['Boolean']>;
  appointment?: Maybe<Appointment>;
  appointments?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  dateCreated?: Maybe<Scalars['String']>;
  defaultWarehouseId: Scalars['String'];
  fbppTicketsAlfred?: Maybe<Array<Scalars['String']>>;
  fee?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  lastUpdated?: Maybe<Scalars['String']>;
  rescheduleDeadline?: Maybe<Scalars['String']>;
  sellerId: Scalars['String'];
  siteId: Scalars['String'];
  status?: Maybe<query_getWithdrawal_status>;
  withdrawals?: Maybe<Array<Maybe<WithdrawalDetail>>>;
  code?: Maybe<Scalars['String']>;
  shipment?: Maybe<Shipment>;
  units?: Maybe<Array<Maybe<Scalars['JSON']>>>;
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

export type WithdrawalAppointment = {
  creationDate: Scalars['String'];
  date: Scalars['String'];
  from: Scalars['String'];
  source: Scalars['String'];
  to: Scalars['String'];
};

export type WithdrawalContainer = {
  dimensions?: Maybe<Dimensions>;
  id?: Maybe<Scalars['String']>;
  lastUpdate: Scalars['String'];
  movements?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  parcelId: Scalars['String'];
  sellerId: Scalars['String'];
  shipment?: Maybe<ContainerShipment>;
  siteId: Scalars['String'];
  status?: Maybe<query_getWithdrawalsContainer_status>;
  storageAddress: Scalars['String'];
  subStatus: Scalars['String'];
  units?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  warehouseId: Scalars['String'];
  withdrawalId: Scalars['Int'];
  withdrawal_id?: Maybe<Scalars['BigInt']>;
  parcel_id?: Maybe<Scalars['String']>;
  last_updated?: Maybe<Scalars['String']>;
  seller_id?: Maybe<Scalars['BigInt']>;
  warehouse_id?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  storage_address?: Maybe<Scalars['String']>;
};

export type WithdrawalDetail = {
  appointment: WithdrawalAppointment;
  appointments?: Maybe<Array<WithdrawalAppointment>>;
  containers?: Maybe<Array<Maybe<WithdrawalContainer>>>;
  dateCreated?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inventories?: Maybe<Array<WithdrawalInventory>>;
  lastUpdated?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  subStatus: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  warehouseId: Scalars['String'];
  withdrawalCharges?: Maybe<Array<Maybe<FbmCharge>>>;
};

export type WithdrawalInventory = {
  collectedQuantity: Scalars['String'];
  deliveredQuantity: Scalars['String'];
  insuranceCost: Scalars['String'];
  inventoryId: Scalars['String'];
  reservedQuantity: Scalars['String'];
  status: Scalars['String'];
};

export type WmsInfo = {
  EstimatedTimeDeparture: Scalars['String'];
  Status: Scalars['String'];
};

export type Zones = {
  id: Scalars['String'];
  mandatory: Scalars['Boolean'];
  name: Scalars['String'];
  polygon?: Maybe<Poligon>;
  price?: Maybe<Price>;
  required: Scalars['Boolean'];
  selected: Scalars['Boolean'];
};

export type dateTm = {
  isBold: Scalars['Boolean'];
  isGrey: Scalars['Boolean'];
  value: Scalars['String'];
};

export type itemHistory = {
  changeDate?: Maybe<Scalars['String']>;
  item?: Maybe<ShpItem>;
};

export type orderHistory = {
  changeDate?: Maybe<Scalars['String']>;
  order?: Maybe<ShpOrder>;
};

export type printLabelOutput = {
  contentLength: Scalars['Int'];
  contentType: Scalars['String'];
  fileName: Scalars['String'];
  fileUrl: Scalars['String'];
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

export type BigQueueMessage_Input = {
  msg?: InputMaybe<EventMessage_Input>;
};

export type EventMessage_Input = {
  source_id?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['BigInt']>;
};

export type list_teams_get_response = TeamResponse | HTTPValidationError;

export type TeamResponse = {
  id: Scalars['Int'];
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
};

export type HTTPValidationError = {
  detail?: Maybe<Array<Maybe<ValidationError>>>;
};

export type ValidationError = {
  loc: Array<Maybe<Scalars['String']>>;
  msg: Scalars['String'];
  type: Scalars['String'];
};

/** An enumeration. */
export type TeamOrderEnum =
  | 'asc'
  | 'desc';

export type get_by_team_code_teams__team_code__get_response = TeamResponse | HTTPValidationError;

export type get_teams_by_username_teams_user__username__get_response = TeamUserListResponse | HTTPValidationError;

export type TeamUserListResponse = {
  id: Scalars['Int'];
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  role: Scalars['String'];
  isTemporary: Scalars['Boolean'];
};

export type get_team_collaborators_teams__team_code__collaborators_get_response = TeamUserResponse | HTTPValidationError;

export type TeamUserResponse = {
  id: Scalars['Int'];
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  collaborators: Array<Maybe<UserResponse>>;
};

export type UserResponse = {
  id: Scalars['Int'];
  role: Scalars['String'];
  username: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  is_temporary: Scalars['Boolean'];
  active: Scalars['Boolean'];
  from_date?: Maybe<Scalars['String']>;
  to_date?: Maybe<Scalars['String']>;
  applications?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type get_applications_by_team_code_teams__team_code__applications_get_response = String_container | HTTPValidationError;

export type String_container = {
  String?: Maybe<Scalars['String']>;
};

export type RoleResponse = {
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type create_teams_post_response = TeamResponse | HTTPValidationError;

export type TeamRequest_Input = {
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  collaborators: Array<InputMaybe<TeamUserRequest_Input>>;
};

export type TeamUserRequest_Input = {
  username: Scalars['String'];
  role_name: Scalars['String'];
  full_name?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  from_date?: InputMaybe<Scalars['DateTime']>;
  to_date?: InputMaybe<Scalars['DateTime']>;
  is_temporary: Scalars['Boolean'];
  active?: InputMaybe<Scalars['Boolean']>;
  applications?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type update_teams__team_code__put_response = Void_container | HTTPValidationError;

export type Void_container = {
  Void?: Maybe<Scalars['Void']>;
};

export type TeamUpdateRequest_Input = {
  description?: InputMaybe<Scalars['String']>;
  collaborators: Array<InputMaybe<TeamUserRequest_Input>>;
};

export type delete_teams__team_code__delete_response = Void_container | HTTPValidationError;

export type refresh_teams__team_code__refresh_post_response = Void_container | HTTPValidationError;

export type exit_collaborator_teams_exit_collaborator_post_response = Void_container | HTTPValidationError;

export type SquidExitCollaboratorMessage_Input = {
  msg: SquidExitCollaboratorDetail_Input;
};

export type SquidExitCollaboratorDetail_Input = {
  details: SquidExitCollaboratorUsername_Input;
};

export type SquidExitCollaboratorUsername_Input = {
  username: Scalars['String'];
};

export type create_role_post_response = RoleResponse | HTTPValidationError;

export type RoleRequest_Input = {
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes = ResolversObject<{
  list_teams_get_response: ( TeamResponse ) | ( HTTPValidationError );
  get_by_team_code_teams__team_code__get_response: ( TeamResponse ) | ( HTTPValidationError );
  get_teams_by_username_teams_user__username__get_response: ( TeamUserListResponse ) | ( HTTPValidationError );
  get_team_collaborators_teams__team_code__collaborators_get_response: ( TeamUserResponse ) | ( HTTPValidationError );
  get_applications_by_team_code_teams__team_code__applications_get_response: ( String_container ) | ( HTTPValidationError );
  create_teams_post_response: ( TeamResponse ) | ( HTTPValidationError );
  update_teams__team_code__put_response: ( Void_container ) | ( HTTPValidationError );
  delete_teams__team_code__delete_response: ( Void_container ) | ( HTTPValidationError );
  refresh_teams__team_code__refresh_post_response: ( Void_container ) | ( HTTPValidationError );
  exit_collaborator_teams_exit_collaborator_post_response: ( Void_container ) | ( HTTPValidationError );
  create_role_post_response: ( RoleResponse ) | ( HTTPValidationError );
}>;

/** Mapping of union parent types */
export type ResolversUnionParentTypes = ResolversObject<{
  list_teams_get_response: ( TeamResponse ) | ( HTTPValidationError );
  get_by_team_code_teams__team_code__get_response: ( TeamResponse ) | ( HTTPValidationError );
  get_teams_by_username_teams_user__username__get_response: ( TeamUserListResponse ) | ( HTTPValidationError );
  get_team_collaborators_teams__team_code__collaborators_get_response: ( TeamUserResponse ) | ( HTTPValidationError );
  get_applications_by_team_code_teams__team_code__applications_get_response: ( String_container ) | ( HTTPValidationError );
  create_teams_post_response: ( TeamResponse ) | ( HTTPValidationError );
  update_teams__team_code__put_response: ( Void_container ) | ( HTTPValidationError );
  delete_teams__team_code__delete_response: ( Void_container ) | ( HTTPValidationError );
  refresh_teams__team_code__refresh_post_response: ( Void_container ) | ( HTTPValidationError );
  exit_collaborator_teams_exit_collaborator_post_response: ( Void_container ) | ( HTTPValidationError );
  create_role_post_response: ( RoleResponse ) | ( HTTPValidationError );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Action: ResolverTypeWrapper<Action>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Address: ResolverTypeWrapper<Address>;
  Attribute: ResolverTypeWrapper<Attribute>;
  AvailableFilters: ResolverTypeWrapper<AvailableFilters>;
  Buyer: ResolverTypeWrapper<Buyer>;
  Capacities: ResolverTypeWrapper<Capacities>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CarrierLabeling: ResolverTypeWrapper<CarrierLabeling>;
  CaseDataInp: ResolverTypeWrapper<CaseDataInp>;
  ChangeCBTStatusInput: ChangeCBTStatusInput;
  ChangeStatusInput: ChangeStatusInput;
  ChangeTrackingNumberInput: ChangeTrackingNumberInput;
  Checkpoint: ResolverTypeWrapper<Checkpoint>;
  Claim: ResolverTypeWrapper<Claim>;
  ComparisonChanges: ResolverTypeWrapper<ComparisonChanges>;
  Comparisons: ResolverTypeWrapper<Comparisons>;
  CostComponents: ResolverTypeWrapper<CostComponents>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  CrossDocking: CrossDocking;
  Crossdocking: ResolverTypeWrapper<Crossdocking>;
  CrossdockingDropOff: ResolverTypeWrapper<CrossdockingDropOff>;
  Currency: ResolverTypeWrapper<Currency>;
  Cutoffs: ResolverTypeWrapper<Cutoffs>;
  DailyDetailedItemDTO: DailyDetailedItemDTO;
  DataDisposalInventory: ResolverTypeWrapper<DataDisposalInventory>;
  Delay: ResolverTypeWrapper<Delay>;
  DeliveryPromise: ResolverTypeWrapper<DeliveryPromise>;
  Destination: ResolverTypeWrapper<Destination>;
  DetailInp: ResolverTypeWrapper<DetailInp>;
  Dimension: ResolverTypeWrapper<Dimension>;
  Dimensions: ResolverTypeWrapper<Dimensions>;
  Discount: ResolverTypeWrapper<Discount>;
  DropOff: ResolverTypeWrapper<DropOff>;
  EventInp: ResolverTypeWrapper<EventInp>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  FbmCharge: ResolverTypeWrapper<FbmCharge>;
  FbmChargeDetail: ResolverTypeWrapper<FbmChargeDetail>;
  FilterValue: ResolverTypeWrapper<FilterValue>;
  Flex: ResolverTypeWrapper<Flex>;
  FlexAllowed: ResolverTypeWrapper<FlexAllowed>;
  FraudProcessInput: FraudProcessInput;
  FromTo: ResolverTypeWrapper<FromTo>;
  Fulfillment: ResolverTypeWrapper<Fulfillment>;
  FulfillmentMLB: FulfillmentMLB;
  FulfillmentRestriction: ResolverTypeWrapper<FulfillmentRestriction>;
  GenericNameValue: ResolverTypeWrapper<GenericNameValue>;
  Geometry: ResolverTypeWrapper<Geometry>;
  HandlingTime: ResolverTypeWrapper<HandlingTime>;
  HandlingTimePredictions: ResolverTypeWrapper<HandlingTimePredictions>;
  Header: ResolverTypeWrapper<Header>;
  History: ResolverTypeWrapper<History>;
  HistoryItem: ResolverTypeWrapper<HistoryItem>;
  HistoryOrder: ResolverTypeWrapper<HistoryOrder>;
  IdName: ResolverTypeWrapper<IdName>;
  Identification: ResolverTypeWrapper<Identification>;
  Inbound: ResolverTypeWrapper<Inbound>;
  InboundInventories: ResolverTypeWrapper<InboundInventories>;
  InboundInventoriesResult: ResolverTypeWrapper<InboundInventoriesResult>;
  InboundInventory: ResolverTypeWrapper<InboundInventory>;
  InboundMilkRunPlannig: ResolverTypeWrapper<InboundMilkRunPlannig>;
  InboundMilkRunRunning: ResolverTypeWrapper<InboundMilkRunRunning>;
  InboundPenalties: ResolverTypeWrapper<InboundPenalties>;
  InboundPenalty: ResolverTypeWrapper<InboundPenalty>;
  InboundPenaltyDetail: ResolverTypeWrapper<InboundPenaltyDetail>;
  Incidence: ResolverTypeWrapper<Incidence>;
  IncidentsInp: ResolverTypeWrapper<IncidentsInp>;
  InventoryAddress: ResolverTypeWrapper<InventoryAddress>;
  InventoryDimensions: ResolverTypeWrapper<InventoryDimensions>;
  InventoryDimensionsUnit: ResolverTypeWrapper<InventoryDimensionsUnit>;
  InventoryFeeDetail: ResolverTypeWrapper<InventoryFeeDetail>;
  InventoryInbounds: ResolverTypeWrapper<InventoryInbounds>;
  InventoryItem: ResolverTypeWrapper<InventoryItem>;
  InventoryMovement: ResolverTypeWrapper<InventoryMovement>;
  InventoryMovementsResult: ResolverTypeWrapper<InventoryMovementsResult>;
  InventoryProblem: ResolverTypeWrapper<InventoryProblem>;
  InventoryProblemINP: ResolverTypeWrapper<InventoryProblemINP>;
  InventoryQuantityItem: ResolverTypeWrapper<InventoryQuantityItem>;
  InventoryRecommendationsItem: ResolverTypeWrapper<InventoryRecommendationsItem>;
  InventoryWarehosingCharge: ResolverTypeWrapper<InventoryWarehosingCharge>;
  Item: ResolverTypeWrapper<Item>;
  ItemAttribute: ResolverTypeWrapper<ItemAttribute>;
  ItemDetail: ResolverTypeWrapper<ItemDetail>;
  ItemDetailHistory: ResolverTypeWrapper<ItemDetailHistory>;
  ItemPicture: ResolverTypeWrapper<ItemPicture>;
  ItemSTValueStruct: ResolverTypeWrapper<ItemSTValueStruct>;
  ItemSaleTerms: ResolverTypeWrapper<ItemSaleTerms>;
  ItemShipping: ResolverTypeWrapper<ItemShipping>;
  ItemVariation: ResolverTypeWrapper<ItemVariation>;
  ItemVariations: ResolverTypeWrapper<ItemVariations>;
  Labeling: ResolverTypeWrapper<Labeling>;
  Lead: ResolverTypeWrapper<Lead>;
  LimitsQuantityItem: ResolverTypeWrapper<LimitsQuantityItem>;
  LocationDetail: ResolverTypeWrapper<LocationDetail>;
  Logistic: ResolverTypeWrapper<Logistic>;
  LogisticCenter: ResolverTypeWrapper<LogisticCenter>;
  LogisticCenterAddress: ResolverTypeWrapper<LogisticCenterAddress>;
  LogisticHandlingTime: ResolverTypeWrapper<LogisticHandlingTime>;
  LogisticInfo: ResolverTypeWrapper<LogisticInfo>;
  LogisticService: ResolverTypeWrapper<LogisticService>;
  LogisticType: ResolverTypeWrapper<LogisticType>;
  LogisticWarehouse: ResolverTypeWrapper<LogisticWarehouse>;
  MELogistic: ResolverTypeWrapper<MELogistic>;
  Map: ResolverTypeWrapper<Scalars['Map']>;
  MediationMessage: ResolverTypeWrapper<MediationMessage>;
  Method: ResolverTypeWrapper<Method>;
  MilkRunDay: ResolverTypeWrapper<MilkRunDay>;
  MilkRunDriver: ResolverTypeWrapper<MilkRunDriver>;
  MilkRunGenericEntity: ResolverTypeWrapper<MilkRunGenericEntity>;
  MilkRunIncidentType: ResolverTypeWrapper<MilkRunIncidentType>;
  MilkRunSellerEntity: ResolverTypeWrapper<MilkRunSellerEntity>;
  MilkRunTypeVehicle: ResolverTypeWrapper<MilkRunTypeVehicle>;
  MilkRunVehicle: ResolverTypeWrapper<MilkRunVehicle>;
  MilkrunCarrier: ResolverTypeWrapper<MilkrunCarrier>;
  MilkrunDriver: ResolverTypeWrapper<MilkrunDriver>;
  MilkrunHistory: ResolverTypeWrapper<MilkrunHistory>;
  MilkrunVehicle: ResolverTypeWrapper<MilkrunVehicle>;
  ModeActions: ResolverTypeWrapper<ModeActions>;
  MonthSales: ResolverTypeWrapper<MonthSales>;
  MovementContainer: ResolverTypeWrapper<MovementContainer>;
  OnlyID: ResolverTypeWrapper<OnlyID>;
  OnlyName: ResolverTypeWrapper<OnlyName>;
  Order: ResolverTypeWrapper<Order>;
  OrderBuyer: ResolverTypeWrapper<OrderBuyer>;
  OrderIDS: OrderIDS;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderItemHistory: ResolverTypeWrapper<OrderItemHistory>;
  OrderSeller: ResolverTypeWrapper<OrderSeller>;
  OrderSellerReputation: ResolverTypeWrapper<OrderSellerReputation>;
  OriginDestination: ResolverTypeWrapper<OriginDestination>;
  Outbound: ResolverTypeWrapper<Outbound>;
  PaginatedInputWithDate: PaginatedInputWithDate;
  Paging: ResolverTypeWrapper<Paging>;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentDetail: ResolverTypeWrapper<PaymentDetail>;
  PaymentHistory: ResolverTypeWrapper<PaymentHistory>;
  PaymentsInput: PaymentsInput;
  Phone: ResolverTypeWrapper<Phone>;
  PlacePoint: ResolverTypeWrapper<PlacePoint>;
  Poligon: ResolverTypeWrapper<Poligon>;
  Preferences: ResolverTypeWrapper<Preferences>;
  Price: ResolverTypeWrapper<Price>;
  PrintLabelInput: PrintLabelInput;
  PromiseLimit: ResolverTypeWrapper<PromiseLimit>;
  Purchases: ResolverTypeWrapper<Purchases>;
  RegenerateLabelInput: RegenerateLabelInput;
  ReputationTagInput: ReputationTagInput;
  ReturnShipment: ResolverTypeWrapper<ReturnShipment>;
  ReturnTime: ResolverTypeWrapper<ReturnTime>;
  SaleTerms: ResolverTypeWrapper<SaleTerms>;
  Sales: ResolverTypeWrapper<Sales>;
  SalesDetail: ResolverTypeWrapper<SalesDetail>;
  ScheduleDay: ResolverTypeWrapper<ScheduleDay>;
  ScheduleDetail: ResolverTypeWrapper<ScheduleDetail>;
  SearchByValue: SearchByValue;
  SelfServiceConfiguration: ResolverTypeWrapper<SelfServiceConfiguration>;
  SelfServiceTime: ResolverTypeWrapper<SelfServiceTime>;
  Seller: ResolverTypeWrapper<Seller>;
  SellerBilling: SellerBilling;
  SellerDetail: ResolverTypeWrapper<SellerDetail>;
  SellerInbounds: ResolverTypeWrapper<SellerInbounds>;
  SellerInventories: ResolverTypeWrapper<SellerInventories>;
  SellerPricingWarehousings: ResolverTypeWrapper<SellerPricingWarehousings>;
  SellerProperties: ResolverTypeWrapper<SellerProperties>;
  SellerReputation: ResolverTypeWrapper<SellerReputation>;
  SellerWithdrawals: ResolverTypeWrapper<SellerWithdrawals>;
  Service: ResolverTypeWrapper<Service>;
  Shipment: ResolverTypeWrapper<Shipment>;
  ShipmentCompany: ResolverTypeWrapper<ShipmentCompany>;
  ShipmentContainer: ResolverTypeWrapper<ShipmentContainer>;
  ShipmentDetail: ResolverTypeWrapper<ShipmentDetail>;
  ShipmentFiscalData: ResolverTypeWrapper<ShipmentFiscalData>;
  ShipmentHistory: ResolverTypeWrapper<ShipmentHistory>;
  ShipmentId: ResolverTypeWrapper<ShipmentId>;
  ShipmentMilestone: ResolverTypeWrapper<ShipmentMilestone>;
  ShipmentStatusHistory: ResolverTypeWrapper<ShipmentStatusHistory>;
  ShipmentSubMilestone: ResolverTypeWrapper<ShipmentSubMilestone>;
  Shipping: ResolverTypeWrapper<Shipping>;
  ShippingCosts: ResolverTypeWrapper<ShippingCosts>;
  ShippingInfo: ResolverTypeWrapper<ShippingInfo>;
  ShippingPreferences: ResolverTypeWrapper<ShippingPreferences>;
  ShpItem: ResolverTypeWrapper<ShpItem>;
  ShpOrder: ResolverTypeWrapper<ShpOrder>;
  Source: ResolverTypeWrapper<Source>;
  Step: ResolverTypeWrapper<Step>;
  StepDetail: ResolverTypeWrapper<StepDetail>;
  StepUser: ResolverTypeWrapper<StepUser>;
  StockDetailWithLocation: ResolverTypeWrapper<StockDetailWithLocation>;
  StockFeeDetail: ResolverTypeWrapper<StockFeeDetail>;
  SubMotiveInp: ResolverTypeWrapper<SubMotiveInp>;
  SummaryClaims: ResolverTypeWrapper<SummaryClaims>;
  SummaryHandlingTime: ResolverTypeWrapper<SummaryHandlingTime>;
  TagCaseInp: ResolverTypeWrapper<TagCaseInp>;
  Time: ResolverTypeWrapper<Time>;
  TimeLine: ResolverTypeWrapper<TimeLine>;
  TimeWindows: ResolverTypeWrapper<TimeWindows>;
  TmsDevolution: ResolverTypeWrapper<TmsDevolution>;
  TmsDispatch: ResolverTypeWrapper<TmsDispatch>;
  TmsInbound: ResolverTypeWrapper<TmsInbound>;
  TmsInfo: ResolverTypeWrapper<TmsInfo>;
  TmsOutbound: ResolverTypeWrapper<TmsOutbound>;
  Tracking: ResolverTypeWrapper<Tracking>;
  TrackingContainer: ResolverTypeWrapper<TrackingContainer>;
  TrackingNumber: ResolverTypeWrapper<TrackingNumber>;
  UnitContainer: ResolverTypeWrapper<UnitContainer>;
  UnitContainerDetail: ResolverTypeWrapper<UnitContainerDetail>;
  User: ResolverTypeWrapper<User>;
  UserCosts: ResolverTypeWrapper<UserCosts>;
  UserFiscalData: UserFiscalData;
  UserOrder: ResolverTypeWrapper<UserOrder>;
  UserSales: ResolverTypeWrapper<UserSales>;
  UserStatus: ResolverTypeWrapper<UserStatus>;
  UserSubsidiary: UserSubsidiary;
  ValueUnit: ResolverTypeWrapper<ValueUnit>;
  Withdrawal: ResolverTypeWrapper<Withdrawal>;
  WithdrawalAppointment: ResolverTypeWrapper<WithdrawalAppointment>;
  WithdrawalContainer: ResolverTypeWrapper<WithdrawalContainer>;
  WithdrawalDetail: ResolverTypeWrapper<WithdrawalDetail>;
  WithdrawalInventory: ResolverTypeWrapper<WithdrawalInventory>;
  WmsInfo: ResolverTypeWrapper<WmsInfo>;
  Zones: ResolverTypeWrapper<Zones>;
  dateTm: ResolverTypeWrapper<dateTm>;
  itemHistory: ResolverTypeWrapper<itemHistory>;
  orderHistory: ResolverTypeWrapper<orderHistory>;
  printLabelOutput: ResolverTypeWrapper<printLabelOutput>;
  WithdrawalRequest: ResolverTypeWrapper<WithdrawalRequest>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  query_getWithdrawalsRequest_shipment_type: query_getWithdrawalsRequest_shipment_type;
  Fee: ResolverTypeWrapper<Fee>;
  Appointment: ResolverTypeWrapper<Appointment>;
  query_getWithdrawalsRequest_appointment_source: query_getWithdrawalsRequest_appointment_source;
  query_getWithdrawalsRequest_type: query_getWithdrawalsRequest_type;
  query_getWithdrawalsRequest_status: query_getWithdrawalsRequest_status;
  DELAYED_const: DELAYED_const;
  query_getWithdrawalsRequest_print_action: query_getWithdrawalsRequest_print_action;
  SearchResultsWithdrawalRequest: ResolverTypeWrapper<SearchResultsWithdrawalRequest>;
  Sorter: ResolverTypeWrapper<Sorter>;
  query_searchWithdrawalRequests_sort_order: query_searchWithdrawalRequests_sort_order;
  StatusHistoryWithdrawalsRequestStatus: ResolverTypeWrapper<StatusHistoryWithdrawalsRequestStatus>;
  query_getWithdrawalsRequestHistory_items_status: query_getWithdrawalsRequestHistory_items_status;
  query_getWithdrawal_status: query_getWithdrawal_status;
  query_getWithdrawal_print_action: query_getWithdrawal_print_action;
  SearchResultsWithdrawal: ResolverTypeWrapper<SearchResultsWithdrawal>;
  DispatchInfo: ResolverTypeWrapper<DispatchInfo>;
  query_getWithdrawalReadyToDispatchInfo_constraint: query_getWithdrawalReadyToDispatchInfo_constraint;
  ContainerShipment: ResolverTypeWrapper<ContainerShipment>;
  query_getWithdrawalsContainer_shipment_type: query_getWithdrawalsContainer_shipment_type;
  Delivery: ResolverTypeWrapper<Delivery>;
  query_getWithdrawalsContainer_status: query_getWithdrawalsContainer_status;
  query_getWithdrawalsContainer_dimensions_length_measure_unit: query_getWithdrawalsContainer_dimensions_length_measure_unit;
  SearchResultsWithdrawalContainer: ResolverTypeWrapper<SearchResultsWithdrawalContainer>;
  WithdrawalContainerTrackingInfo: ResolverTypeWrapper<WithdrawalContainerTrackingInfo>;
  AddressDTO: ResolverTypeWrapper<AddressDTO>;
  AddressArea: ResolverTypeWrapper<AddressArea>;
  query_getWithdrawalsContainerTrackingInfo_shipment_type: query_getWithdrawalsContainerTrackingInfo_shipment_type;
  ContainerDocuments: ResolverTypeWrapper<ContainerDocuments>;
  BigQueueMessage_Input: BigQueueMessage_Input;
  EventMessage_Input: EventMessage_Input;
  list_teams_get_response: ResolverTypeWrapper<ResolversUnionTypes['list_teams_get_response']>;
  TeamResponse: ResolverTypeWrapper<TeamResponse>;
  HTTPValidationError: ResolverTypeWrapper<HTTPValidationError>;
  ValidationError: ResolverTypeWrapper<ValidationError>;
  TeamOrderEnum: TeamOrderEnum;
  get_by_team_code_teams__team_code__get_response: ResolverTypeWrapper<ResolversUnionTypes['get_by_team_code_teams__team_code__get_response']>;
  get_teams_by_username_teams_user__username__get_response: ResolverTypeWrapper<ResolversUnionTypes['get_teams_by_username_teams_user__username__get_response']>;
  TeamUserListResponse: ResolverTypeWrapper<TeamUserListResponse>;
  get_team_collaborators_teams__team_code__collaborators_get_response: ResolverTypeWrapper<ResolversUnionTypes['get_team_collaborators_teams__team_code__collaborators_get_response']>;
  TeamUserResponse: ResolverTypeWrapper<TeamUserResponse>;
  UserResponse: ResolverTypeWrapper<UserResponse>;
  get_applications_by_team_code_teams__team_code__applications_get_response: ResolverTypeWrapper<ResolversUnionTypes['get_applications_by_team_code_teams__team_code__applications_get_response']>;
  String_container: ResolverTypeWrapper<String_container>;
  RoleResponse: ResolverTypeWrapper<RoleResponse>;
  create_teams_post_response: ResolverTypeWrapper<ResolversUnionTypes['create_teams_post_response']>;
  TeamRequest_Input: TeamRequest_Input;
  TeamUserRequest_Input: TeamUserRequest_Input;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  update_teams__team_code__put_response: ResolverTypeWrapper<ResolversUnionTypes['update_teams__team_code__put_response']>;
  Void_container: ResolverTypeWrapper<Void_container>;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  TeamUpdateRequest_Input: TeamUpdateRequest_Input;
  delete_teams__team_code__delete_response: ResolverTypeWrapper<ResolversUnionTypes['delete_teams__team_code__delete_response']>;
  refresh_teams__team_code__refresh_post_response: ResolverTypeWrapper<ResolversUnionTypes['refresh_teams__team_code__refresh_post_response']>;
  exit_collaborator_teams_exit_collaborator_post_response: ResolverTypeWrapper<ResolversUnionTypes['exit_collaborator_teams_exit_collaborator_post_response']>;
  SquidExitCollaboratorMessage_Input: SquidExitCollaboratorMessage_Input;
  SquidExitCollaboratorDetail_Input: SquidExitCollaboratorDetail_Input;
  SquidExitCollaboratorUsername_Input: SquidExitCollaboratorUsername_Input;
  create_role_post_response: ResolverTypeWrapper<ResolversUnionTypes['create_role_post_response']>;
  RoleRequest_Input: RoleRequest_Input;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  Action: Action;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Address: Address;
  Attribute: Attribute;
  AvailableFilters: AvailableFilters;
  Buyer: Buyer;
  Capacities: Capacities;
  Int: Scalars['Int'];
  CarrierLabeling: CarrierLabeling;
  CaseDataInp: CaseDataInp;
  ChangeCBTStatusInput: ChangeCBTStatusInput;
  ChangeStatusInput: ChangeStatusInput;
  ChangeTrackingNumberInput: ChangeTrackingNumberInput;
  Checkpoint: Checkpoint;
  Claim: Claim;
  ComparisonChanges: ComparisonChanges;
  Comparisons: Comparisons;
  CostComponents: CostComponents;
  Float: Scalars['Float'];
  CrossDocking: CrossDocking;
  Crossdocking: Crossdocking;
  CrossdockingDropOff: CrossdockingDropOff;
  Currency: Currency;
  Cutoffs: Cutoffs;
  DailyDetailedItemDTO: DailyDetailedItemDTO;
  DataDisposalInventory: DataDisposalInventory;
  Delay: Delay;
  DeliveryPromise: DeliveryPromise;
  Destination: Destination;
  DetailInp: DetailInp;
  Dimension: Dimension;
  Dimensions: Dimensions;
  Discount: Discount;
  DropOff: DropOff;
  EventInp: EventInp;
  ID: Scalars['ID'];
  FbmCharge: FbmCharge;
  FbmChargeDetail: FbmChargeDetail;
  FilterValue: FilterValue;
  Flex: Flex;
  FlexAllowed: FlexAllowed;
  FraudProcessInput: FraudProcessInput;
  FromTo: FromTo;
  Fulfillment: Fulfillment;
  FulfillmentMLB: FulfillmentMLB;
  FulfillmentRestriction: FulfillmentRestriction;
  GenericNameValue: GenericNameValue;
  Geometry: Geometry;
  HandlingTime: HandlingTime;
  HandlingTimePredictions: HandlingTimePredictions;
  Header: Header;
  History: History;
  HistoryItem: HistoryItem;
  HistoryOrder: HistoryOrder;
  IdName: IdName;
  Identification: Identification;
  Inbound: Inbound;
  InboundInventories: InboundInventories;
  InboundInventoriesResult: InboundInventoriesResult;
  InboundInventory: InboundInventory;
  InboundMilkRunPlannig: InboundMilkRunPlannig;
  InboundMilkRunRunning: InboundMilkRunRunning;
  InboundPenalties: InboundPenalties;
  InboundPenalty: InboundPenalty;
  InboundPenaltyDetail: InboundPenaltyDetail;
  Incidence: Incidence;
  IncidentsInp: IncidentsInp;
  InventoryAddress: InventoryAddress;
  InventoryDimensions: InventoryDimensions;
  InventoryDimensionsUnit: InventoryDimensionsUnit;
  InventoryFeeDetail: InventoryFeeDetail;
  InventoryInbounds: InventoryInbounds;
  InventoryItem: InventoryItem;
  InventoryMovement: InventoryMovement;
  InventoryMovementsResult: InventoryMovementsResult;
  InventoryProblem: InventoryProblem;
  InventoryProblemINP: InventoryProblemINP;
  InventoryQuantityItem: InventoryQuantityItem;
  InventoryRecommendationsItem: InventoryRecommendationsItem;
  InventoryWarehosingCharge: InventoryWarehosingCharge;
  Item: Item;
  ItemAttribute: ItemAttribute;
  ItemDetail: ItemDetail;
  ItemDetailHistory: ItemDetailHistory;
  ItemPicture: ItemPicture;
  ItemSTValueStruct: ItemSTValueStruct;
  ItemSaleTerms: ItemSaleTerms;
  ItemShipping: ItemShipping;
  ItemVariation: ItemVariation;
  ItemVariations: ItemVariations;
  Labeling: Labeling;
  Lead: Lead;
  LimitsQuantityItem: LimitsQuantityItem;
  LocationDetail: LocationDetail;
  Logistic: Logistic;
  LogisticCenter: LogisticCenter;
  LogisticCenterAddress: LogisticCenterAddress;
  LogisticHandlingTime: LogisticHandlingTime;
  LogisticInfo: LogisticInfo;
  LogisticService: LogisticService;
  LogisticType: LogisticType;
  LogisticWarehouse: LogisticWarehouse;
  MELogistic: MELogistic;
  Map: Scalars['Map'];
  MediationMessage: MediationMessage;
  Method: Method;
  MilkRunDay: MilkRunDay;
  MilkRunDriver: MilkRunDriver;
  MilkRunGenericEntity: MilkRunGenericEntity;
  MilkRunIncidentType: MilkRunIncidentType;
  MilkRunSellerEntity: MilkRunSellerEntity;
  MilkRunTypeVehicle: MilkRunTypeVehicle;
  MilkRunVehicle: MilkRunVehicle;
  MilkrunCarrier: MilkrunCarrier;
  MilkrunDriver: MilkrunDriver;
  MilkrunHistory: MilkrunHistory;
  MilkrunVehicle: MilkrunVehicle;
  ModeActions: ModeActions;
  MonthSales: MonthSales;
  MovementContainer: MovementContainer;
  OnlyID: OnlyID;
  OnlyName: OnlyName;
  Order: Order;
  OrderBuyer: OrderBuyer;
  OrderIDS: OrderIDS;
  OrderItem: OrderItem;
  OrderItemHistory: OrderItemHistory;
  OrderSeller: OrderSeller;
  OrderSellerReputation: OrderSellerReputation;
  OriginDestination: OriginDestination;
  Outbound: Outbound;
  PaginatedInputWithDate: PaginatedInputWithDate;
  Paging: Paging;
  Payment: Payment;
  PaymentDetail: PaymentDetail;
  PaymentHistory: PaymentHistory;
  PaymentsInput: PaymentsInput;
  Phone: Phone;
  PlacePoint: PlacePoint;
  Poligon: Poligon;
  Preferences: Preferences;
  Price: Price;
  PrintLabelInput: PrintLabelInput;
  PromiseLimit: PromiseLimit;
  Purchases: Purchases;
  RegenerateLabelInput: RegenerateLabelInput;
  ReputationTagInput: ReputationTagInput;
  ReturnShipment: ReturnShipment;
  ReturnTime: ReturnTime;
  SaleTerms: SaleTerms;
  Sales: Sales;
  SalesDetail: SalesDetail;
  ScheduleDay: ScheduleDay;
  ScheduleDetail: ScheduleDetail;
  SearchByValue: SearchByValue;
  SelfServiceConfiguration: SelfServiceConfiguration;
  SelfServiceTime: SelfServiceTime;
  Seller: Seller;
  SellerBilling: SellerBilling;
  SellerDetail: SellerDetail;
  SellerInbounds: SellerInbounds;
  SellerInventories: SellerInventories;
  SellerPricingWarehousings: SellerPricingWarehousings;
  SellerProperties: SellerProperties;
  SellerReputation: SellerReputation;
  SellerWithdrawals: SellerWithdrawals;
  Service: Service;
  Shipment: Shipment;
  ShipmentCompany: ShipmentCompany;
  ShipmentContainer: ShipmentContainer;
  ShipmentDetail: ShipmentDetail;
  ShipmentFiscalData: ShipmentFiscalData;
  ShipmentHistory: ShipmentHistory;
  ShipmentId: ShipmentId;
  ShipmentMilestone: ShipmentMilestone;
  ShipmentStatusHistory: ShipmentStatusHistory;
  ShipmentSubMilestone: ShipmentSubMilestone;
  Shipping: Shipping;
  ShippingCosts: ShippingCosts;
  ShippingInfo: ShippingInfo;
  ShippingPreferences: ShippingPreferences;
  ShpItem: ShpItem;
  ShpOrder: ShpOrder;
  Source: Source;
  Step: Step;
  StepDetail: StepDetail;
  StepUser: StepUser;
  StockDetailWithLocation: StockDetailWithLocation;
  StockFeeDetail: StockFeeDetail;
  SubMotiveInp: SubMotiveInp;
  SummaryClaims: SummaryClaims;
  SummaryHandlingTime: SummaryHandlingTime;
  TagCaseInp: TagCaseInp;
  Time: Time;
  TimeLine: TimeLine;
  TimeWindows: TimeWindows;
  TmsDevolution: TmsDevolution;
  TmsDispatch: TmsDispatch;
  TmsInbound: TmsInbound;
  TmsInfo: TmsInfo;
  TmsOutbound: TmsOutbound;
  Tracking: Tracking;
  TrackingContainer: TrackingContainer;
  TrackingNumber: TrackingNumber;
  UnitContainer: UnitContainer;
  UnitContainerDetail: UnitContainerDetail;
  User: User;
  UserCosts: UserCosts;
  UserFiscalData: UserFiscalData;
  UserOrder: UserOrder;
  UserSales: UserSales;
  UserStatus: UserStatus;
  UserSubsidiary: UserSubsidiary;
  ValueUnit: ValueUnit;
  Withdrawal: Withdrawal;
  WithdrawalAppointment: WithdrawalAppointment;
  WithdrawalContainer: WithdrawalContainer;
  WithdrawalDetail: WithdrawalDetail;
  WithdrawalInventory: WithdrawalInventory;
  WmsInfo: WmsInfo;
  Zones: Zones;
  dateTm: dateTm;
  itemHistory: itemHistory;
  orderHistory: orderHistory;
  printLabelOutput: printLabelOutput;
  WithdrawalRequest: WithdrawalRequest;
  JSON: Scalars['JSON'];
  BigInt: Scalars['BigInt'];
  Fee: Fee;
  Appointment: Appointment;
  SearchResultsWithdrawalRequest: SearchResultsWithdrawalRequest;
  Sorter: Sorter;
  StatusHistoryWithdrawalsRequestStatus: StatusHistoryWithdrawalsRequestStatus;
  SearchResultsWithdrawal: SearchResultsWithdrawal;
  DispatchInfo: DispatchInfo;
  ContainerShipment: ContainerShipment;
  Delivery: Delivery;
  SearchResultsWithdrawalContainer: SearchResultsWithdrawalContainer;
  WithdrawalContainerTrackingInfo: WithdrawalContainerTrackingInfo;
  AddressDTO: AddressDTO;
  AddressArea: AddressArea;
  ContainerDocuments: ContainerDocuments;
  BigQueueMessage_Input: BigQueueMessage_Input;
  EventMessage_Input: EventMessage_Input;
  list_teams_get_response: ResolversUnionParentTypes['list_teams_get_response'];
  TeamResponse: TeamResponse;
  HTTPValidationError: HTTPValidationError;
  ValidationError: ValidationError;
  get_by_team_code_teams__team_code__get_response: ResolversUnionParentTypes['get_by_team_code_teams__team_code__get_response'];
  get_teams_by_username_teams_user__username__get_response: ResolversUnionParentTypes['get_teams_by_username_teams_user__username__get_response'];
  TeamUserListResponse: TeamUserListResponse;
  get_team_collaborators_teams__team_code__collaborators_get_response: ResolversUnionParentTypes['get_team_collaborators_teams__team_code__collaborators_get_response'];
  TeamUserResponse: TeamUserResponse;
  UserResponse: UserResponse;
  get_applications_by_team_code_teams__team_code__applications_get_response: ResolversUnionParentTypes['get_applications_by_team_code_teams__team_code__applications_get_response'];
  String_container: String_container;
  RoleResponse: RoleResponse;
  create_teams_post_response: ResolversUnionParentTypes['create_teams_post_response'];
  TeamRequest_Input: TeamRequest_Input;
  TeamUserRequest_Input: TeamUserRequest_Input;
  DateTime: Scalars['DateTime'];
  update_teams__team_code__put_response: ResolversUnionParentTypes['update_teams__team_code__put_response'];
  Void_container: Void_container;
  Void: Scalars['Void'];
  TeamUpdateRequest_Input: TeamUpdateRequest_Input;
  delete_teams__team_code__delete_response: ResolversUnionParentTypes['delete_teams__team_code__delete_response'];
  refresh_teams__team_code__refresh_post_response: ResolversUnionParentTypes['refresh_teams__team_code__refresh_post_response'];
  exit_collaborator_teams_exit_collaborator_post_response: ResolversUnionParentTypes['exit_collaborator_teams_exit_collaborator_post_response'];
  SquidExitCollaboratorMessage_Input: SquidExitCollaboratorMessage_Input;
  SquidExitCollaboratorDetail_Input: SquidExitCollaboratorDetail_Input;
  SquidExitCollaboratorUsername_Input: SquidExitCollaboratorUsername_Input;
  create_role_post_response: ResolversUnionParentTypes['create_role_post_response'];
  RoleRequest_Input: RoleRequest_Input;
}>;

export type oneOfDirectiveArgs = { };

export type oneOfDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = oneOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  buyer?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QuerybuyerArgs, 'shipmentId'>>;
  delay?: Resolver<ResolversTypes['Delay'], ParentType, ContextType, RequireFields<QuerydelayArgs, 'country' | 'id' | 'timeZone'>>;
  destination?: Resolver<ResolversTypes['Destination'], ParentType, ContextType, RequireFields<QuerydestinationArgs, 'id'>>;
  getReturnShipments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReturnShipment']>>>, ParentType, ContextType, RequireFields<QuerygetReturnShipmentsArgs, 'id'>>;
  getShipmentId?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipmentId']>>>, ParentType, ContextType, RequireFields<QuerygetShipmentIdArgs, 'input'>>;
  inbound?: Resolver<ResolversTypes['Inbound'], ParentType, ContextType, RequireFields<QueryinboundArgs, 'id'>>;
  inboundInventories?: Resolver<ResolversTypes['InboundInventories'], ParentType, ContextType, RequireFields<QueryinboundInventoriesArgs, 'id'>>;
  inboundInventoriesPaging?: Resolver<ResolversTypes['InboundInventoriesResult'], ParentType, ContextType, RequireFields<QueryinboundInventoriesPagingArgs, 'id' | 'limit' | 'offset'>>;
  inboundPenalties?: Resolver<ResolversTypes['InboundPenalties'], ParentType, ContextType, RequireFields<QueryinboundPenaltiesArgs, 'id' | 'limit' | 'offset'>>;
  incidences?: Resolver<Maybe<Array<Maybe<ResolversTypes['Incidence']>>>, ParentType, ContextType, RequireFields<QueryincidencesArgs, 'shipment'>>;
  inventory?: Resolver<ResolversTypes['InventoryItem'], ParentType, ContextType, RequireFields<QueryinventoryArgs, 'id'>>;
  inventoryAddresses?: Resolver<Array<Maybe<ResolversTypes['InventoryAddress']>>, ParentType, ContextType, RequireFields<QueryinventoryAddressesArgs, 'id'>>;
  inventoryInbounds?: Resolver<ResolversTypes['InventoryInbounds'], ParentType, ContextType, RequireFields<QueryinventoryInboundsArgs, 'inventoryId' | 'limit' | 'offset' | 'sellerId'>>;
  inventoryMovements?: Resolver<ResolversTypes['InventoryMovementsResult'], ParentType, ContextType, RequireFields<QueryinventoryMovementsArgs, 'inventoryId' | 'limit' | 'offset'>>;
  inventoryMovementsAll?: Resolver<Array<Maybe<ResolversTypes['InventoryMovement']>>, ParentType, ContextType, RequireFields<QueryinventoryMovementsAllArgs, 'id'>>;
  inventoryRecommendationsItem?: Resolver<Maybe<ResolversTypes['InventoryRecommendationsItem']>, ParentType, ContextType, RequireFields<QueryinventoryRecommendationsItemArgs, 'inventoryID'>>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType, RequireFields<QueryitemArgs, 'id'>>;
  itemHistory?: Resolver<ResolversTypes['History'], ParentType, ContextType, RequireFields<QueryitemHistoryArgs, 'from' | 'id' | 'limit' | 'offset' | 'to'>>;
  itemHistoryV2?: Resolver<ResolversTypes['HistoryItem'], ParentType, ContextType, RequireFields<QueryitemHistoryV2Args, 'from' | 'id' | 'limit' | 'offset' | 'to'>>;
  logisticCenter?: Resolver<Maybe<ResolversTypes['LogisticCenter']>, ParentType, ContextType, RequireFields<QuerylogisticCenterArgs, 'logisticCenterId'>>;
  meLogistic?: Resolver<Maybe<ResolversTypes['MELogistic']>, ParentType, ContextType, RequireFields<QuerymeLogisticArgs, 'sellerID'>>;
  orderHistory?: Resolver<ResolversTypes['History'], ParentType, ContextType, RequireFields<QueryorderHistoryArgs, 'from' | 'id' | 'limit' | 'offset' | 'to'>>;
  orderHistoryV2?: Resolver<ResolversTypes['HistoryOrder'], ParentType, ContextType, RequireFields<QueryorderHistoryV2Args, 'from' | 'id' | 'limit' | 'offset' | 'to'>>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType, RequireFields<QueryordersArgs, 'orders'>>;
  paymentDetail?: Resolver<Maybe<ResolversTypes['PaymentDetail']>, ParentType, ContextType, RequireFields<QuerypaymentDetailArgs, 'order'>>;
  payments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payment']>>>, ParentType, ContextType, RequireFields<QuerypaymentsArgs, 'input'>>;
  searchUser?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QuerysearchUserArgs, 'input'>>;
  seller?: Resolver<Maybe<ResolversTypes['Seller']>, ParentType, ContextType, RequireFields<QuerysellerArgs, 'id'>>;
  sellerInbounds?: Resolver<ResolversTypes['SellerInbounds'], ParentType, ContextType, RequireFields<QuerysellerInboundsArgs, 'id' | 'limit' | 'offset'>>;
  sellerInventories?: Resolver<ResolversTypes['SellerInventories'], ParentType, ContextType, RequireFields<QuerysellerInventoriesArgs, 'id' | 'limit' | 'offset'>>;
  sellerPenalties?: Resolver<ResolversTypes['InboundPenalties'], ParentType, ContextType, RequireFields<QuerysellerPenaltiesArgs, 'id' | 'limit' | 'offset'>>;
  sellerPricingWarehousings?: Resolver<ResolversTypes['SellerPricingWarehousings'], ParentType, ContextType, RequireFields<QuerysellerPricingWarehousingsArgs, 'fromDate' | 'id' | 'toDate'>>;
  sellerProperties?: Resolver<ResolversTypes['SellerProperties'], ParentType, ContextType, RequireFields<QuerysellerPropertiesArgs, 'userId'>>;
  sellerWithdrawals?: Resolver<ResolversTypes['SellerWithdrawals'], ParentType, ContextType, RequireFields<QuerysellerWithdrawalsArgs, 'id' | 'limit' | 'offset'>>;
  shipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<QueryshipmentArgs, 'id'>>;
  shipmentStatusHistory?: Resolver<ResolversTypes['ShipmentStatusHistory'], ParentType, ContextType, RequireFields<QueryshipmentStatusHistoryArgs, 'id'>>;
  step?: Resolver<ResolversTypes['Step'], ParentType, ContextType, RequireFields<QuerystepArgs, 'id'>>;
  timeline?: Resolver<ResolversTypes['TimeLine'], ParentType, ContextType, RequireFields<QuerytimelineArgs, 'shipmentId'>>;
  tmsInfo?: Resolver<ResolversTypes['TmsInfo'], ParentType, ContextType, RequireFields<QuerytmsInfoArgs, 'shipmentId'>>;
  tracking?: Resolver<ResolversTypes['Tracking'], ParentType, ContextType, RequireFields<QuerytrackingArgs, 'id'>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  withdrawal?: Resolver<ResolversTypes['Withdrawal'], ParentType, ContextType, RequireFields<QuerywithdrawalArgs, 'id'>>;
  getWithdrawalsRequest?: Resolver<Maybe<ResolversTypes['WithdrawalRequest']>, ParentType, ContextType, RequireFields<QuerygetWithdrawalsRequestArgs, 'id'>>;
  searchWithdrawalRequests?: Resolver<Maybe<ResolversTypes['SearchResultsWithdrawalRequest']>, ParentType, ContextType, RequireFields<QuerysearchWithdrawalRequestsArgs, 'limit'>>;
  getWithdrawalsRequestLocations?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerygetWithdrawalsRequestLocationsArgs, 'id'>>;
  getWithdrawalsRequestHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusHistoryWithdrawalsRequestStatus']>>>, ParentType, ContextType, RequireFields<QuerygetWithdrawalsRequestHistoryArgs, 'id'>>;
  getWithdrawal?: Resolver<Maybe<ResolversTypes['Withdrawal']>, ParentType, ContextType, RequireFields<QuerygetWithdrawalArgs, 'id'>>;
  searchWithdrawals?: Resolver<Maybe<ResolversTypes['SearchResultsWithdrawal']>, ParentType, ContextType, RequireFields<QuerysearchWithdrawalsArgs, 'limit'>>;
  getWithdrawalReadyToDispatchInfo?: Resolver<Maybe<ResolversTypes['DispatchInfo']>, ParentType, ContextType, RequireFields<QuerygetWithdrawalReadyToDispatchInfoArgs, 'code'>>;
  getWithdrawalsContainer?: Resolver<Maybe<ResolversTypes['WithdrawalContainer']>, ParentType, ContextType, RequireFields<QuerygetWithdrawalsContainerArgs, 'id'>>;
  searchWithdrawalContainers?: Resolver<Maybe<ResolversTypes['SearchResultsWithdrawalContainer']>, ParentType, ContextType, RequireFields<QuerysearchWithdrawalContainersArgs, 'limit'>>;
  getWithdrawalsContainerTrackingInfo?: Resolver<Maybe<ResolversTypes['WithdrawalContainerTrackingInfo']>, ParentType, ContextType, RequireFields<QuerygetWithdrawalsContainerTrackingInfoArgs, 'id'>>;
  getDocuments?: Resolver<Maybe<ResolversTypes['ContainerDocuments']>, ParentType, ContextType, RequireFields<QuerygetDocumentsArgs, 'id'>>;
  ping_ping_get?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  list_teams_get?: Resolver<Maybe<Array<Maybe<ResolversTypes['list_teams_get_response']>>>, ParentType, ContextType, Partial<Querylist_teams_getArgs>>;
  get_by_team_code_teams__team_code__get?: Resolver<Maybe<ResolversTypes['get_by_team_code_teams__team_code__get_response']>, ParentType, ContextType, RequireFields<Queryget_by_team_code_teams__team_code__getArgs, 'team_code'>>;
  get_teams_by_username_teams_user__username__get?: Resolver<Maybe<Array<Maybe<ResolversTypes['get_teams_by_username_teams_user__username__get_response']>>>, ParentType, ContextType, RequireFields<Queryget_teams_by_username_teams_user__username__getArgs, 'username'>>;
  get_team_collaborators_teams__team_code__collaborators_get?: Resolver<Maybe<ResolversTypes['get_team_collaborators_teams__team_code__collaborators_get_response']>, ParentType, ContextType, RequireFields<Queryget_team_collaborators_teams__team_code__collaborators_getArgs, 'team_code'>>;
  get_applications_by_team_code_teams__team_code__applications_get?: Resolver<Maybe<Array<Maybe<ResolversTypes['get_applications_by_team_code_teams__team_code__applications_get_response']>>>, ParentType, ContextType, RequireFields<Queryget_applications_by_team_code_teams__team_code__applications_getArgs, 'team_code'>>;
  list_role_get?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleResponse']>>>, ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  activateCBTAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationactivateCBTAccountArgs, 'userId'>>;
  activateDO?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationactivateDOArgs, 'carrierActivation' | 'userId'>>;
  activateFulfillment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationactivateFulfillmentArgs, 'userId'>>;
  activateFulfillmentMLB?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationactivateFulfillmentMLBArgs, 'input'>>;
  activateXD?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationactivateXDArgs, 'input'>>;
  activateXDDO?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationactivateXDDOArgs, 'placeId' | 'userId' | 'warehouseId'>>;
  addMode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationaddModeArgs, 'option' | 'shippingMode' | 'userId'>>;
  addOptionalMode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationaddOptionalModeArgs, 'shippingMode' | 'userId'>>;
  changeAxado?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationchangeAxadoArgs, 'token' | 'userId'>>;
  changeCBTCarrier?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationchangeCBTCarrierArgs, 'carrier' | 'countryId' | 'siteId' | 'userId'>>;
  changeCBTStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationchangeCBTStatusArgs, 'input'>>;
  changeHandlingTime?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationchangeHandlingTimeArgs, 'handlingTime' | 'logisticType' | 'userId'>>;
  changeMode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationchangeModeArgs, 'option' | 'shippingMode' | 'userId'>>;
  changeStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationchangeStatusArgs, 'input'>>;
  changeTrackingNumber?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationchangeTrackingNumberArgs, 'input'>>;
  deactivateFulfillment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeactivateFulfillmentArgs, 'userId'>>;
  deactivateSelfService?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeactivateSelfServiceArgs, 'userId'>>;
  deleteOptionalMode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteOptionalModeArgs, 'shippingMode' | 'userId'>>;
  editDO?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationeditDOArgs, 'carrierActivation' | 'userId'>>;
  editFBMPickUp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationeditFBMPickUpArgs, 'userId'>>;
  editFragile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationeditFragileArgs, 'fragile' | 'userId'>>;
  editFulfillment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationeditFulfillmentArgs, 'userId'>>;
  editXD?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationeditXDArgs, 'input'>>;
  editXDDO?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationeditXDDOArgs, 'placeId' | 'userId' | 'warehouseId'>>;
  fraudProcess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationfraudProcessArgs, 'input'>>;
  getModeActions?: Resolver<Maybe<Array<ResolversTypes['ModeActions']>>, ParentType, ContextType, RequireFields<MutationgetModeActionsArgs, 'sellerId'>>;
  mandatoryME?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationmandatoryMEArgs, 'comment' | 'status' | 'userId'>>;
  printLabel?: Resolver<ResolversTypes['printLabelOutput'], ParentType, ContextType, RequireFields<MutationprintLabelArgs, 'input'>>;
  regenerateLabel?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationregenerateLabelArgs, 'input'>>;
  removeFlammableTag?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationremoveFlammableTagArgs, 'id'>>;
  reputationTag?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationreputationTagArgs, 'input'>>;
  resetHandlingTime?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationresetHandlingTimeArgs, 'logisticType' | 'userId'>>;
  deleteWithdrawalRequestProjection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationdeleteWithdrawalRequestProjectionArgs, 'id'>>;
  deleteWithdrawalProjection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationdeleteWithdrawalProjectionArgs, 'id'>>;
  processWithdrawalRequestEventMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationprocessWithdrawalRequestEventMessageArgs>>;
  processWithdrawalEventMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationprocessWithdrawalEventMessageArgs>>;
  processWithdrawalEventMessage_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationprocessWithdrawalEventMessage_1Args>>;
  deleteWithdrawalContainerProjection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationdeleteWithdrawalContainerProjectionArgs, 'id'>>;
  create_teams_post?: Resolver<Maybe<ResolversTypes['create_teams_post_response']>, ParentType, ContextType, Partial<Mutationcreate_teams_postArgs>>;
  update_teams__team_code__put?: Resolver<Maybe<ResolversTypes['update_teams__team_code__put_response']>, ParentType, ContextType, RequireFields<Mutationupdate_teams__team_code__putArgs, 'team_code'>>;
  delete_teams__team_code__delete?: Resolver<Maybe<ResolversTypes['delete_teams__team_code__delete_response']>, ParentType, ContextType, RequireFields<Mutationdelete_teams__team_code__deleteArgs, 'team_code'>>;
  refresh_teams__team_code__refresh_post?: Resolver<Maybe<ResolversTypes['refresh_teams__team_code__refresh_post_response']>, ParentType, ContextType, RequireFields<Mutationrefresh_teams__team_code__refresh_postArgs, 'team_code'>>;
  exit_collaborator_teams_exit_collaborator_post?: Resolver<Maybe<ResolversTypes['exit_collaborator_teams_exit_collaborator_post_response']>, ParentType, ContextType, Partial<Mutationexit_collaborator_teams_exit_collaborator_postArgs>>;
  create_role_post?: Resolver<Maybe<ResolversTypes['create_role_post_response']>, ParentType, ContextType, Partial<Mutationcreate_role_postArgs>>;
  sync_temporary_role_sync_post?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
}>;

export type ActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Action'] = ResolversParentTypes['Action']> = ResolversObject<{
  body?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  params?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttributeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  valueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  valueName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvailableFiltersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AvailableFilters'] = ResolversParentTypes['AvailableFilters']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilterValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BuyerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Buyer'] = ResolversParentTypes['Buyer']> = ResolversObject<{
  address_line?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  doc_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  full_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  identification?: Resolver<ResolversTypes['Identification'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scoring?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CapacitiesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Capacities'] = ResolversParentTypes['Capacities']> = ResolversObject<{
  availables?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  currentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  selected?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CarrierLabelingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CarrierLabeling'] = ResolversParentTypes['CarrierLabeling']> = ResolversObject<{
  ID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CaseDataInpResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CaseDataInp'] = ResolversParentTypes['CaseDataInp']> = ResolversObject<{
  associatedPublicationId?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  identificationCounter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  physicalProductGtin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productExpirationDates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagCaseInp']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckpointResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Checkpoint'] = ResolversParentTypes['Checkpoint']> = ResolversObject<{
  checkpointDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipmentStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipmentSubstatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClaimResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Claim'] = ResolversParentTypes['Claim']> = ResolversObject<{
  detail?: Resolver<Maybe<ResolversTypes['SummaryClaims']>, ParentType, ContextType>;
  mediation?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediationMessage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComparisonChangesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ComparisonChanges'] = ResolversParentTypes['ComparisonChanges']> = ResolversObject<{
  modifiedField?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  oldValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComparisonsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Comparisons'] = ResolversParentTypes['Comparisons']> = ResolversObject<{
  changeDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comparisonChanges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComparisonChanges']>>>, ParentType, ContextType>;
  snapshot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CostComponentsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CostComponents'] = ResolversParentTypes['CostComponents']> = ResolversObject<{
  freeListingAdditionalAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  freeShippingAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gapDiscount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  insurance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  loyalCartDiscount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  loyalDiscount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mandatoryFsDiscount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  meliGmvDiscount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  meliRatioAdjustiment?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  normalDiscount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  roundingDifference?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  routeDiscount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ruleCost?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellerGmvAggregatedDiscount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellerMarketplaceFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellerShippingFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  specialDiscount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CrossdockingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Crossdocking'] = ResolversParentTypes['Crossdocking']> = ResolversObject<{
  logisticInfo?: Resolver<Maybe<ResolversTypes['LogisticInfo']>, ParentType, ContextType>;
  milkrunHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['MilkrunHistory']>>>, ParentType, ContextType, RequireFields<CrossdockingmilkrunHistoryArgs, 'date'>>;
  sellerID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CrossdockingDropOffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CrossdockingDropOff'] = ResolversParentTypes['CrossdockingDropOff']> = ResolversObject<{
  logisticInfo?: Resolver<Maybe<ResolversTypes['LogisticInfo']>, ParentType, ContextType>;
  sellerID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = ResolversObject<{
  decimal_places?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CutoffsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Cutoffs'] = ResolversParentTypes['Cutoffs']> = ResolversObject<{
  availables?: Resolver<Maybe<Array<ResolversTypes['ValueUnit']>>, ParentType, ContextType>;
  selected?: Resolver<Maybe<ResolversTypes['ValueUnit']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataDisposalInventoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataDisposalInventory'] = ResolversParentTypes['DataDisposalInventory']> = ResolversObject<{
  closeDisposalDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disposalQuantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DelayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Delay'] = ResolversParentTypes['Delay']> = ResolversObject<{
  extendedDateExtended?: Resolver<ResolversTypes['dateTm'], ParentType, ContextType>;
  extendedDateFinal?: Resolver<ResolversTypes['dateTm'], ParentType, ContextType>;
  extendedDateLimit?: Resolver<ResolversTypes['dateTm'], ParentType, ContextType>;
  extendedDateLimitReceiver?: Resolver<ResolversTypes['dateTm'], ParentType, ContextType>;
  promiseLimit?: Resolver<Maybe<ResolversTypes['PromiseLimit']>, ParentType, ContextType>;
  returnTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeliveryPromiseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DeliveryPromise'] = ResolversParentTypes['DeliveryPromise']> = ResolversObject<{
  dateCreated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rescheduled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DestinationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Destination'] = ResolversParentTypes['Destination']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receiverId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receiverName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receiverPhone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  returnAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shippingAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DetailInpResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DetailInp'] = ResolversParentTypes['DetailInp']> = ResolversObject<{
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DimensionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Dimension'] = ResolversParentTypes['Dimension']> = ResolversObject<{
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  measure_unit?: Resolver<Maybe<ResolversTypes['query_getWithdrawalsContainer_dimensions_length_measure_unit']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DimensionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Dimensions'] = ResolversParentTypes['Dimensions']> = ResolversObject<{
  cubicWeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dimensions?: Resolver<ResolversTypes['Dimension'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['Source'], ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Dimension']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Dimension']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Dimension']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Dimension']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiscountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = ResolversObject<{
  promotedAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DropOffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DropOff'] = ResolversParentTypes['DropOff']> = ResolversObject<{
  logisticInfo?: Resolver<Maybe<ResolversTypes['LogisticInfo']>, ParentType, ContextType>;
  sellerID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventInpResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventInp'] = ResolversParentTypes['EventInp']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifiedProductID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subMotives?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubMotiveInp']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FbmChargeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FbmCharge'] = ResolversParentTypes['FbmCharge']> = ResolversObject<{
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amountPerUnit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currencyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  details?: Resolver<ResolversTypes['FbmChargeDetail'], ParentType, ContextType>;
  ean?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inventoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inventoryType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newsDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  referenceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sellerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FbmChargeDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FbmChargeDetail'] = ResolversParentTypes['FbmChargeDetail']> = ResolversObject<{
  amountPerVolumeUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inboundId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  penaltyType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shipmentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  withdrawalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilterValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilterValue'] = ResolversParentTypes['FilterValue']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  results?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlexResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Flex'] = ResolversParentTypes['Flex']> = ResolversObject<{
  logisticInfo?: Resolver<Maybe<ResolversTypes['LogisticInfo']>, ParentType, ContextType>;
  selfServiceConfiguration?: Resolver<Maybe<ResolversTypes['SelfServiceConfiguration']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlexAllowedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FlexAllowed'] = ResolversParentTypes['FlexAllowed']> = ResolversObject<{
  activationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  allowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  causes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FromToResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FromTo'] = ResolversParentTypes['FromTo']> = ResolversObject<{
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isBold?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isGrey?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Fulfillment'] = ResolversParentTypes['Fulfillment']> = ResolversObject<{
  logisticInfo?: Resolver<Maybe<ResolversTypes['LogisticInfo']>, ParentType, ContextType>;
  sellerID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentRestrictionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FulfillmentRestriction'] = ResolversParentTypes['FulfillmentRestriction']> = ResolversObject<{
  dimensionsOrigin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  restricted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  restrictionCause?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenericNameValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GenericNameValue'] = ResolversParentTypes['GenericNameValue']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GeometryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Geometry'] = ResolversParentTypes['Geometry']> = ResolversObject<{
  coordinates?: Resolver<Maybe<Array<Maybe<Array<Maybe<Array<ResolversTypes['Float']>>>>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HandlingTimeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HandlingTime'] = ResolversParentTypes['HandlingTime']> = ResolversObject<{
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HandlingTimePredictionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HandlingTimePredictions'] = ResolversParentTypes['HandlingTimePredictions']> = ResolversObject<{
  day?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hour?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HeaderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Header'] = ResolversParentTypes['Header']> = ResolversObject<{
  buyer?: Resolver<ResolversTypes['Buyer'], ParentType, ContextType>;
  cart?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logistic_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketplace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  search_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['History'] = ResolversParentTypes['History']> = ResolversObject<{
  comparisons?: Resolver<Maybe<Array<ResolversTypes['Comparisons']>>, ParentType, ContextType>;
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoryItem'] = ResolversParentTypes['HistoryItem']> = ResolversObject<{
  historyItem?: Resolver<Maybe<Array<Maybe<ResolversTypes['itemHistory']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryOrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HistoryOrder'] = ResolversParentTypes['HistoryOrder']> = ResolversObject<{
  historyOrder?: Resolver<Maybe<Array<Maybe<ResolversTypes['orderHistory']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdNameResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IdName'] = ResolversParentTypes['IdName']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentificationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Identification'] = ResolversParentTypes['Identification']> = ResolversObject<{
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InboundResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Inbound'] = ResolversParentTypes['Inbound']> = ResolversObject<{
  appointmentDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  appointmentTimeSlot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  confirmationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  declaredPackages?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  declaredUnits?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fbppTicketsAlfred?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inboundCharges?: Resolver<Maybe<Array<Maybe<ResolversTypes['FbmCharge']>>>, ParentType, ContextType>;
  inboundMilkRunsPlannig?: Resolver<Maybe<ResolversTypes['InboundMilkRunPlannig']>, ParentType, ContextType>;
  inboundPenalties?: Resolver<Maybe<Array<Maybe<ResolversTypes['InboundPenalty']>>>, ParentType, ContextType>;
  inboundPlanId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inventories?: Resolver<Maybe<Array<Maybe<ResolversTypes['InboundInventory']>>>, ParentType, ContextType>;
  inventoryProblems?: Resolver<Maybe<Array<Maybe<ResolversTypes['InventoryProblem']>>>, ParentType, ContextType>;
  receivedPackages?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receivedUnits?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receptionDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sellerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shipmentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  warehouseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InboundInventoriesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InboundInventories'] = ResolversParentTypes['InboundInventories']> = ResolversObject<{
  hasQuantityDifferences?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inventories?: Resolver<Maybe<Array<ResolversTypes['InboundInventory']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InboundInventoriesResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InboundInventoriesResult'] = ResolversParentTypes['InboundInventoriesResult']> = ResolversObject<{
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Maybe<ResolversTypes['InboundInventories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InboundInventoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InboundInventory'] = ResolversParentTypes['InboundInventory']> = ResolversObject<{
  declaredUnits?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['Dimension']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inboundId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  insuranceCost?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inventoryProblem?: Resolver<Maybe<ResolversTypes['InventoryProblem']>, ParentType, ContextType>;
  inventoryProblemINP?: Resolver<Maybe<Array<Maybe<ResolversTypes['InventoryProblemINP']>>>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receivedUnits?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  warehouseInbound?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InboundMilkRunPlannigResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InboundMilkRunPlannig'] = ResolversParentTypes['InboundMilkRunPlannig']> = ResolversObject<{
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inboundMilkRunsRunning?: Resolver<Maybe<Array<Maybe<ResolversTypes['InboundMilkRunRunning']>>>, ParentType, ContextType>;
  milkRunDays?: Resolver<Maybe<Array<Maybe<ResolversTypes['MilkRunDay']>>>, ParentType, ContextType>;
  siteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InboundMilkRunRunningResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InboundMilkRunRunning'] = ResolversParentTypes['InboundMilkRunRunning']> = ResolversObject<{
  carrier?: Resolver<Maybe<ResolversTypes['MilkRunGenericEntity']>, ParentType, ContextType>;
  collectedPackage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deliveredNoteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  driver?: Resolver<Maybe<ResolversTypes['MilkRunDriver']>, ParentType, ContextType>;
  estimatedPackage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facilityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finishMilkRunTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  incidentType?: Resolver<Maybe<ResolversTypes['MilkRunIncidentType']>, ParentType, ContextType>;
  logisticType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  milkRunStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  milkRunTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outOfRange?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  outOfRangeDistance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outOfRangeGeolocationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  routeDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  routeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  routeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes['MilkRunSellerEntity']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startMilkRunTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topSeller?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  vehicle?: Resolver<Maybe<ResolversTypes['MilkRunVehicle']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InboundPenaltiesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InboundPenalties'] = ResolversParentTypes['InboundPenalties']> = ResolversObject<{
  availableFilters?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvailableFilters']>>>, ParentType, ContextType>;
  filters?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['InboundPenalty']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InboundPenaltyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InboundPenalty'] = ResolversParentTypes['InboundPenalty']> = ResolversObject<{
  bonificationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bookingId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bookingSource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chargeStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chargesInboudPenalty?: Resolver<Maybe<Array<Maybe<ResolversTypes['FbmCharge']>>>, ParentType, ContextType>;
  concept?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  detail?: Resolver<ResolversTypes['InboundPenaltyDetail'], ParentType, ContextType>;
  eventDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inboundId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sellerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipmentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAmountToPay?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalBonificationAmount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalChargeAmount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  warehouseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InboundPenaltyDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InboundPenaltyDetail'] = ResolversParentTypes['InboundPenaltyDetail']> = ResolversObject<{
  appointmentArrivalDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  appointmentCancellationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  appointmentCancellationLimitDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  appointmentDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateUpdated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  penaltyUnits?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toleranceDifference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalUnitsDeclared?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalUnitsReceived?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IncidenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Incidence'] = ResolversParentTypes['Incidence']> = ResolversObject<{
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category_description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IncidentsInpResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IncidentsInp'] = ResolversParentTypes['IncidentsInp']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pictures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryAddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryAddress'] = ResolversParentTypes['InventoryAddress']> = ResolversObject<{
  addressId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  availableQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reservedQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sellerProductId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  warehouseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryDimensionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryDimensions'] = ResolversParentTypes['InventoryDimensions']> = ResolversObject<{
  height?: Resolver<Maybe<ResolversTypes['InventoryDimensionsUnit']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['InventoryDimensionsUnit']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['InventoryDimensionsUnit']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['InventoryDimensionsUnit']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryDimensionsUnitResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryDimensionsUnit'] = ResolversParentTypes['InventoryDimensionsUnit']> = ResolversObject<{
  measureUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryFeeDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryFeeDetail'] = ResolversParentTypes['InventoryFeeDetail']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['StockFeeDetail']>>>, ParentType, ContextType>;
  totalFeeAmount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalQuantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryInboundsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryInbounds'] = ResolversParentTypes['InventoryInbounds']> = ResolversObject<{
  availableFilters?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvailableFilters']>>>, ParentType, ContextType>;
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Inbound']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryItem'] = ResolversParentTypes['InventoryItem']> = ResolversObject<{
  dataDisposalInventory?: Resolver<Maybe<ResolversTypes['DataDisposalInventory']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['InventoryDimensions']>, ParentType, ContextType>;
  fbppTicketsAlfred?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  fulfillmentActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  identifiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericNameValue']>>>, ParentType, ContextType>;
  insuranceCost?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inventoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemIsConsistent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sellerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stockDetailWithLocation?: Resolver<Maybe<ResolversTypes['StockDetailWithLocation']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryMovementResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryMovement'] = ResolversParentTypes['InventoryMovement']> = ResolversObject<{
  clientId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalReferences?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  fiscalCoverage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movements?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  processName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reservations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  sellerProductId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryMovementsResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryMovementsResult'] = ResolversParentTypes['InventoryMovementsResult']> = ResolversObject<{
  availableFilters?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvailableFilters']>>>, ParentType, ContextType>;
  filters?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['InventoryMovement']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryProblemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryProblem'] = ResolversParentTypes['InventoryProblem']> = ResolversObject<{
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inventoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pictures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  subCategory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryProblemINPResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryProblemINP'] = ResolversParentTypes['InventoryProblemINP']> = ResolversObject<{
  caseData?: Resolver<Maybe<ResolversTypes['CaseDataInp']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['DetailInp']>>>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventInp']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  incidents?: Resolver<Maybe<Array<Maybe<ResolversTypes['IncidentsInp']>>>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellerProductId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subCategory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  warehouseId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryQuantityItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryQuantityItem'] = ResolversParentTypes['InventoryQuantityItem']> = ResolversObject<{
  arrivalStock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availableStock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  delta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasForecast?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  itemID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  limits?: Resolver<Maybe<Array<Maybe<ResolversTypes['LimitsQuantityItem']>>>, ParentType, ContextType>;
  stockSurplus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variationID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryRecommendationsItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryRecommendationsItem'] = ResolversParentTypes['InventoryRecommendationsItem']> = ResolversObject<{
  inventoryQuantityRecommendations?: Resolver<Maybe<ResolversTypes['InventoryQuantityItem']>, ParentType, ContextType>;
  inventoryRecommendationsDetail?: Resolver<Maybe<ResolversTypes['InventoryQuantityItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InventoryWarehosingChargeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InventoryWarehosingCharge'] = ResolversParentTypes['InventoryWarehosingCharge']> = ResolversObject<{
  currencyID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['InventoryFeeDetail']>>>, ParentType, ContextType>;
  inventoryID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inventoryInfo?: Resolver<Maybe<ResolversTypes['InventoryItem']>, ParentType, ContextType>;
  sellerID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalFeeAmount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = ResolversObject<{
  actions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Action']>>>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['Dimensions']>, ParentType, ContextType>;
  fulfillmentRestriction?: Resolver<Maybe<ResolversTypes['FulfillmentRestriction']>, ParentType, ContextType>;
  inventories?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  itemDetail?: Resolver<ResolversTypes['ItemDetail'], ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  shippingPreferences?: Resolver<Maybe<ResolversTypes['ShippingPreferences']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemAttributeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemAttribute'] = ResolversParentTypes['ItemAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  valueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemDetail'] = ResolversParentTypes['ItemDetail']> = ResolversObject<{
  catalogId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  condition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  digital?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dimensionsExceeded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  flammable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  flex?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  freeShipping?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inventoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lostMe2ByDimensions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  permalink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  saleTerms?: Resolver<Maybe<Array<ResolversTypes['SaleTerms']>>, ParentType, ContextType>;
  shipping?: Resolver<Maybe<ResolversTypes['Shipping']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemVariations']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemDetailHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemDetailHistory'] = ResolversParentTypes['ItemDetailHistory']> = ResolversObject<{
  CategoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VariationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Warranty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemPictureResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemPicture'] = ResolversParentTypes['ItemPicture']> = ResolversObject<{
  secureUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemSTValueStructResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemSTValueStruct'] = ResolversParentTypes['ItemSTValueStruct']> = ResolversObject<{
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemSaleTermsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemSaleTerms'] = ResolversParentTypes['ItemSaleTerms']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueStruct?: Resolver<Maybe<ResolversTypes['ItemSTValueStruct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemShippingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemShipping'] = ResolversParentTypes['ItemShipping']> = ResolversObject<{
  dimensions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  freeMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  freeShipping?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  localPickup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  logisticType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storePickUp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemVariationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemVariation'] = ResolversParentTypes['ItemVariation']> = ResolversObject<{
  attributeCombinations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemAttribute']>>>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemAttribute']>>>, ParentType, ContextType>;
  availableQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  catalogProductId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inventoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soldQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemVariationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemVariations'] = ResolversParentTypes['ItemVariations']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inventoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LabelingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Labeling'] = ResolversParentTypes['Labeling']> = ResolversObject<{
  AddressLine?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Carrier?: Resolver<ResolversTypes['CarrierLabeling'], ParentType, ContextType>;
  GenerateDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  LastPrintUser?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  PrintDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Route?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  UserID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  WorkstationID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LeadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Lead'] = ResolversParentTypes['Lead']> = ResolversObject<{
  deliveryRange?: Resolver<Maybe<ResolversTypes['FromTo']>, ParentType, ContextType>;
  estimatedDeliveryTime?: Resolver<ResolversTypes['FromTo'], ParentType, ContextType>;
  handlingDelay?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  handlingTime?: Resolver<ResolversTypes['HandlingTime'], ParentType, ContextType>;
  limitHandlingTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manufacturingTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalPromiseDeliveryTime?: Resolver<ResolversTypes['FromTo'], ParentType, ContextType>;
  promiseDeliveryTime?: Resolver<ResolversTypes['FromTo'], ParentType, ContextType>;
  recalculatedPromises?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeliveryPromise']>>>, ParentType, ContextType>;
  returnTime?: Resolver<Maybe<ResolversTypes['ReturnTime']>, ParentType, ContextType>;
  shippingDelay?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LimitsQuantityItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LimitsQuantityItem'] = ResolversParentTypes['LimitsQuantityItem']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LocationDetail'] = ResolversParentTypes['LocationDetail']> = ResolversObject<{
  fiscalCoverage?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  inLocation?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  inLocationProcessing?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  inTransfer?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  locationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  saleable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LogisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Logistic'] = ResolversParentTypes['Logistic']> = ResolversObject<{
  mode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  types?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LogisticCenterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LogisticCenter'] = ResolversParentTypes['LogisticCenter']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['LogisticCenterAddress']>, ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logisticCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  logisticProvider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LogisticCenterAddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LogisticCenterAddress'] = ResolversParentTypes['LogisticCenterAddress']> = ResolversObject<{
  addressLine?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  agency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['IdName']>, ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['IdName']>, ParentType, ContextType>;
  geolocationType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isValidForCarrier?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  municipality?: Resolver<Maybe<ResolversTypes['IdName']>, ParentType, ContextType>;
  neighborhood?: Resolver<Maybe<ResolversTypes['IdName']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['IdName']>, ParentType, ContextType>;
  streetName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  types?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LogisticHandlingTimeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LogisticHandlingTime'] = ResolversParentTypes['LogisticHandlingTime']> = ResolversObject<{
  accuracy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logisticType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  predictions?: Resolver<Maybe<Array<Maybe<ResolversTypes['HandlingTimePredictions']>>>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LogisticInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LogisticInfo'] = ResolversParentTypes['LogisticInfo']> = ResolversObject<{
  carrierPickup?: Resolver<Maybe<Array<Maybe<ResolversTypes['LogisticService']>>>, ParentType, ContextType>;
  default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  handlingTime?: Resolver<Maybe<ResolversTypes['LogisticHandlingTime']>, ParentType, ContextType>;
  overCapacity?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  selfServiceTime?: Resolver<Maybe<ResolversTypes['SelfServiceTime']>, ParentType, ContextType>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['LogisticService']>>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenAxado?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  warehouses?: Resolver<Maybe<Array<Maybe<ResolversTypes['LogisticWarehouse']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LogisticServiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LogisticService'] = ResolversParentTypes['LogisticService']> = ResolversObject<{
  ID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LogisticTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LogisticType'] = ResolversParentTypes['LogisticType']> = ResolversObject<{
  default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  schedule?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScheduleDay']>>>, ParentType, ContextType>;
  services?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LogisticWarehouseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LogisticWarehouse'] = ResolversParentTypes['LogisticWarehouse']> = ResolversObject<{
  fiscal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flex?: Resolver<Maybe<ResolversTypes['Flex']>, ParentType, ContextType>;
  integrator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MELogisticResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MELogistic'] = ResolversParentTypes['MELogistic']> = ResolversObject<{
  crossdocking?: Resolver<Maybe<ResolversTypes['Crossdocking']>, ParentType, ContextType>;
  dropoff?: Resolver<Maybe<ResolversTypes['DropOff']>, ParentType, ContextType>;
  flex?: Resolver<Maybe<ResolversTypes['Flex']>, ParentType, ContextType>;
  fulfillment?: Resolver<Maybe<ResolversTypes['Fulfillment']>, ParentType, ContextType>;
  xddo?: Resolver<Maybe<ResolversTypes['CrossdockingDropOff']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface MapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Map'], any> {
  name: 'Map';
}

export type MediationMessageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediationMessage'] = ResolversParentTypes['MediationMessage']> = ResolversObject<{
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreatedNew?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receiverRole?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Method'] = ResolversParentTypes['Method']> = ResolversObject<{
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  methodId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkRunDayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkRunDay'] = ResolversParentTypes['MilkRunDay']> = ResolversObject<{
  carrier?: Resolver<Maybe<ResolversTypes['MilkRunGenericEntity']>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  driver?: Resolver<Maybe<ResolversTypes['MilkRunGenericEntity']>, ParentType, ContextType>;
  timeWindows?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimeWindows']>>>, ParentType, ContextType>;
  vehicle?: Resolver<Maybe<ResolversTypes['MilkRunVehicle']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkRunDriverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkRunDriver'] = ResolversParentTypes['MilkRunDriver']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkRunGenericEntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkRunGenericEntity'] = ResolversParentTypes['MilkRunGenericEntity']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkRunIncidentTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkRunIncidentType'] = ResolversParentTypes['MilkRunIncidentType']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkRunSellerEntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkRunSellerEntity'] = ResolversParentTypes['MilkRunSellerEntity']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkRunTypeVehicleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkRunTypeVehicle'] = ResolversParentTypes['MilkRunTypeVehicle']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkRunVehicleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkRunVehicle'] = ResolversParentTypes['MilkRunVehicle']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  licensePlate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['MilkRunTypeVehicle']>, ParentType, ContextType>;
  vehicleType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkrunCarrierResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkrunCarrier'] = ResolversParentTypes['MilkrunCarrier']> = ResolversObject<{
  ID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkrunDriverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkrunDriver'] = ResolversParentTypes['MilkrunDriver']> = ResolversObject<{
  ID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkrunHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkrunHistory'] = ResolversParentTypes['MilkrunHistory']> = ResolversObject<{
  carrier?: Resolver<Maybe<ResolversTypes['MilkrunCarrier']>, ParentType, ContextType>;
  configID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cutoff?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deliveryNotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  driver?: Resolver<Maybe<ResolversTypes['MilkrunDriver']>, ParentType, ContextType>;
  logisticCenter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  specialMilkrun?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  vehicle?: Resolver<Maybe<ResolversTypes['MilkrunVehicle']>, ParentType, ContextType>;
  window?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilkrunVehicleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilkrunVehicle'] = ResolversParentTypes['MilkrunVehicle']> = ResolversObject<{
  ID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  licensePlate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ModeActionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ModeActions'] = ResolversParentTypes['ModeActions']> = ResolversObject<{
  Disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  Label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MonthSalesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MonthSales'] = ResolversParentTypes['MonthSales']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amountME?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovementContainerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MovementContainer'] = ResolversParentTypes['MovementContainer']> = ResolversObject<{
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OnlyIDResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OnlyID'] = ResolversParentTypes['OnlyID']> = ResolversObject<{
  Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OnlyNameResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OnlyName'] = ResolversParentTypes['OnlyName']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  buyer?: Resolver<ResolversTypes['OrderBuyer'], ParentType, ContextType>;
  claims?: Resolver<Maybe<Array<Maybe<ResolversTypes['Claim']>>>, ParentType, ContextType>;
  external?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderItem?: Resolver<ResolversTypes['OrderItem'], ParentType, ContextType>;
  paymentDetail?: Resolver<ResolversTypes['PaymentDetail'], ParentType, ContextType>;
  payments?: Resolver<Array<Maybe<ResolversTypes['Payment']>>, ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['OrderSeller'], ParentType, ContextType>;
  summaryHandlingTime?: Resolver<ResolversTypes['SummaryHandlingTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderBuyerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderBuyer'] = ResolversParentTypes['OrderBuyer']> = ResolversObject<{
  userID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = ResolversObject<{
  cost?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  fragile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  item?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  listingTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  units?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderItemHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderItemHistory'] = ResolversParentTypes['OrderItemHistory']> = ResolversObject<{
  FullUnitPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  Item?: Resolver<Maybe<ResolversTypes['ItemDetailHistory']>, ParentType, ContextType>;
  ListingTypeID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  UnitPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderSellerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderSeller'] = ResolversParentTypes['OrderSeller']> = ResolversObject<{
  historicReputation?: Resolver<Maybe<ResolversTypes['OrderSellerReputation']>, ParentType, ContextType>;
  orderID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderSellerReputationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderSellerReputation'] = ResolversParentTypes['OrderSellerReputation']> = ResolversObject<{
  previousLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sellerLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OriginDestinationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OriginDestination'] = ResolversParentTypes['OriginDestination']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OutboundResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Outbound'] = ResolversParentTypes['Outbound']> = ResolversObject<{
  AddedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ClosedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DateClosed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DateOpened?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  IncludedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  UserIDs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  WorkstationID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PagingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Paging'] = ResolversParentTypes['Paging']> = ResolversObject<{
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = ResolversObject<{
  ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  creditCardSurchage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAcredited?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentAddition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productCost?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shippingCost?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusDetail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalCost?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentDetail'] = ResolversParentTypes['PaymentDetail']> = ResolversObject<{
  ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  autoPurchase?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fraudRiskDetected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDisponibility?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  originalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PaymentHistory'] = ResolversParentTypes['PaymentHistory']> = ResolversObject<{
  CurrencyID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DateApproved?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DateLastModified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  OperationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  OrderID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  SiteID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  StatusDetail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  TotalPaidAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TransactionAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PhoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Phone'] = ResolversParentTypes['Phone']> = ResolversObject<{
  areaCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlacePointResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlacePoint'] = ResolversParentTypes['PlacePoint']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoligonResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Poligon'] = ResolversParentTypes['Poligon']> = ResolversObject<{
  geometry?: Resolver<Maybe<ResolversTypes['Geometry']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['OnlyName']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PreferencesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Preferences'] = ResolversParentTypes['Preferences']> = ResolversObject<{
  dimension?: Resolver<ResolversTypes['Dimension'], ParentType, ContextType>;
  logistics?: Resolver<Maybe<Array<ResolversTypes['Logistic']>>, ParentType, ContextType>;
  restricted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = ResolversObject<{
  currencyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimalPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimalSeparator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  integerPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PromiseLimitResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PromiseLimit'] = ResolversParentTypes['PromiseLimit']> = ResolversObject<{
  compensated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PurchasesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Purchases'] = ResolversParentTypes['Purchases']> = ResolversObject<{
  detail?: Resolver<Maybe<ResolversTypes['SalesDetail']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReturnShipmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReturnShipment'] = ResolversParentTypes['ReturnShipment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pack?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReturnTimeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReturnTime'] = ResolversParentTypes['ReturnTime']> = ResolversObject<{
  Date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DateTo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isBold?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isGrey?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SaleTermsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SaleTerms'] = ResolversParentTypes['SaleTerms']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  valueStruct?: Resolver<ResolversTypes['ItemSTValueStruct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Sales'] = ResolversParentTypes['Sales']> = ResolversObject<{
  lastMonth?: Resolver<Maybe<ResolversTypes['MonthSales']>, ParentType, ContextType>;
  thisMonth?: Resolver<Maybe<ResolversTypes['MonthSales']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['MonthSales']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalesDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalesDetail'] = ResolversParentTypes['SalesDetail']> = ResolversObject<{
  availableDateFilters?: Resolver<Maybe<Array<ResolversTypes['AvailableFilters']>>, ParentType, ContextType>;
  availableFilters?: Resolver<Maybe<Array<ResolversTypes['AvailableFilters']>>, ParentType, ContextType>;
  availableSorts?: Resolver<Maybe<Array<ResolversTypes['FilterValue']>>, ParentType, ContextType>;
  dateFilters?: Resolver<Maybe<Array<ResolversTypes['AvailableFilters']>>, ParentType, ContextType>;
  filters?: Resolver<Maybe<Array<ResolversTypes['AvailableFilters']>>, ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<ResolversTypes['UserOrder']>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  sort?: Resolver<ResolversTypes['FilterValue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduleDayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ScheduleDay'] = ResolversParentTypes['ScheduleDay']> = ResolversObject<{
  day?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scheduleDetail?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScheduleDetail']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduleDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ScheduleDetail'] = ResolversParentTypes['ScheduleDetail']> = ResolversObject<{
  cutoff?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SelfServiceConfigurationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SelfServiceConfiguration'] = ResolversParentTypes['SelfServiceConfiguration']> = ResolversObject<{
  activationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressLine?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  capacities?: Resolver<Maybe<ResolversTypes['Capacities']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['OnlyName']>, ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cutoffs?: Resolver<Maybe<ResolversTypes['Cutoffs']>, ParentType, ContextType>;
  deliveryWindow?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastUpdate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  penaltyStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recoverDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serviceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['Zones']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SelfServiceTimeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SelfServiceTime'] = ResolversParentTypes['SelfServiceTime']> = ResolversObject<{
  capacity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cutoff?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deliveryWindow?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SellerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Seller'] = ResolversParentTypes['Seller']> = ResolversObject<{
  detail?: Resolver<Maybe<ResolversTypes['SellerDetail']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SellerDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SellerDetail'] = ResolversParentTypes['SellerDetail']> = ResolversObject<{
  logistics?: Resolver<Array<Maybe<ResolversTypes['LogisticType']>>, ParentType, ContextType>;
  sales?: Resolver<Maybe<ResolversTypes['Sales']>, ParentType, ContextType>;
  segment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SellerInboundsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SellerInbounds'] = ResolversParentTypes['SellerInbounds']> = ResolversObject<{
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Inbound']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SellerInventoriesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SellerInventories'] = ResolversParentTypes['SellerInventories']> = ResolversObject<{
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['InventoryItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SellerPricingWarehousingsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SellerPricingWarehousings'] = ResolversParentTypes['SellerPricingWarehousings']> = ResolversObject<{
  fromDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inventories?: Resolver<Maybe<Array<Maybe<ResolversTypes['InventoryWarehosingCharge']>>>, ParentType, ContextType>;
  sellerID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  toDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SellerPropertiesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SellerProperties'] = ResolversParentTypes['SellerProperties']> = ResolversObject<{
  activationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  axado?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bulky?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  certificate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  certificateType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fiscalOptin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flexAllawed?: Resolver<ResolversTypes['FlexAllowed'], ParentType, ContextType>;
  fragile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fulfillmentWithSelfService?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  modes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  professional?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shippingAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shippingOption?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thermalPrinter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  whitelistFlex?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SellerReputationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SellerReputation'] = ResolversParentTypes['SellerReputation']> = ResolversObject<{
  levelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  powerSellerStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SellerWithdrawalsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SellerWithdrawals'] = ResolversParentTypes['SellerWithdrawals']> = ResolversObject<{
  paging?: Resolver<ResolversTypes['Paging'], ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Withdrawal']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = ResolversObject<{
  carrierId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  service?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serviceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Shipment'] = ResolversParentTypes['Shipment']> = ResolversObject<{
  PackID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['Header']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  shipmentDetail?: Resolver<Maybe<ResolversTypes['ShipmentDetail']>, ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['Step']>, ParentType, ContextType>;
  wms?: Resolver<Maybe<ResolversTypes['WmsInfo']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['query_getWithdrawalsRequest_shipment_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentCompanyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentCompany'] = ResolversParentTypes['ShipmentCompany']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentContainerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentContainer'] = ResolversParentTypes['ShipmentContainer']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  estimatedDeliveryDate?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parcelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracking?: Resolver<Maybe<Array<Maybe<ResolversTypes['TrackingContainer']>>>, ParentType, ContextType>;
  trackingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transferUnitId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentDetail'] = ResolversParentTypes['ShipmentDetail']> = ResolversObject<{
  destination?: Resolver<ResolversTypes['Destination'], ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['Dimension']>, ParentType, ContextType>;
  fiscalData?: Resolver<Maybe<ResolversTypes['ShipmentFiscalData']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isProximity?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  keyword?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logisticType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['Method']>, ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Destination'], ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>;
  shipmentHistory?: Resolver<Maybe<Array<ResolversTypes['ShipmentHistory']>>, ParentType, ContextType>;
  shippingCosts?: Resolver<Maybe<ResolversTypes['ShippingCosts']>, ParentType, ContextType>;
  shippingInfo?: Resolver<Maybe<ResolversTypes['ShippingInfo']>, ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  substatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  timeZone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  volumetricWeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentFiscalDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentFiscalData'] = ResolversParentTypes['ShipmentFiscalData']> = ResolversObject<{
  cfop?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  companyStateTaxId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fiscalKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invoiceNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentHistory'] = ResolversParentTypes['ShipmentHistory']> = ResolversObject<{
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  substatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentIdResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentId'] = ResolversParentTypes['ShipmentId']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentMilestoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentMilestone'] = ResolversParentTypes['ShipmentMilestone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  manual?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subMilestones?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipmentSubMilestone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentStatusHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentStatusHistory'] = ResolversParentTypes['ShipmentStatusHistory']> = ResolversObject<{
  checkpoints?: Resolver<Maybe<Array<ResolversTypes['Checkpoint']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipmentSubMilestoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShipmentSubMilestone'] = ResolversParentTypes['ShipmentSubMilestone']> = ResolversObject<{
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rule?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShippingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Shipping'] = ResolversParentTypes['Shipping']> = ResolversObject<{
  dimensions?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  freeMethod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  freeShipping?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  localPickup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  logisticType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  storePickUp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShippingCostsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShippingCosts'] = ResolversParentTypes['ShippingCosts']> = ResolversObject<{
  buyerCosts?: Resolver<Maybe<ResolversTypes['UserCosts']>, ParentType, ContextType>;
  currencyID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sellerCosts?: Resolver<Maybe<ResolversTypes['UserCosts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShippingInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShippingInfo'] = ResolversParentTypes['ShippingInfo']> = ResolversObject<{
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  service?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShippingPreferencesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShippingPreferences'] = ResolversParentTypes['ShippingPreferences']> = ResolversObject<{
  attributes?: Resolver<Maybe<Array<ResolversTypes['Attribute']>>, ParentType, ContextType>;
  catalogProductId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modes?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preferences?: Resolver<ResolversTypes['Preferences'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShpItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShpItem'] = ResolversParentTypes['ShpItem']> = ResolversObject<{
  acceptsMercadopago?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemAttribute']>>>, ParentType, ContextType>;
  availableQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  basePrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bigDecimal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  buyingMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  catalogProductId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domainId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initialQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  internationalDeliveryMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inventoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listingTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marketPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  officialStoreId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permalink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pictures?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemPicture']>>>, ParentType, ContextType>;
  preferenceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  saleTerms?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSaleTerms']>>>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shipping?: Resolver<Maybe<ResolversTypes['ItemShipping']>, ParentType, ContextType>;
  shippingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  siteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  soldQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  substatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemVariation']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShpOrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShpOrder'] = ResolversParentTypes['ShpOrder']> = ResolversObject<{
  DateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Items?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemHistory']>>>, ParentType, ContextType>;
  Payments?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentHistory']>>>, ParentType, ContextType>;
  Shipping?: Resolver<Maybe<ResolversTypes['OnlyID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Source'] = ResolversParentTypes['Source']> = ResolversObject<{
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StepResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Step'] = ResolversParentTypes['Step']> = ResolversObject<{
  buyer?: Resolver<Maybe<ResolversTypes['StepUser']>, ParentType, ContextType>;
  estimatedDeliveryLimit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handlingTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  promiseDeliveryTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes['StepUser']>, ParentType, ContextType>;
  shippingCost?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  steps?: Resolver<Maybe<Array<ResolversTypes['StepDetail']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StepDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StepDetail'] = ResolversParentTypes['StepDetail']> = ResolversObject<{
  carrier?: Resolver<ResolversTypes['ShipmentCompany'], ParentType, ContextType>;
  destination?: Resolver<ResolversTypes['OriginDestination'], ParentType, ContextType>;
  finalDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inCourse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  initialDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isReturn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  logisticCenterID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logisticProvider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logisticProviderCity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['OriginDestination'], ParentType, ContextType>;
  point?: Resolver<Maybe<ResolversTypes['PlacePoint']>, ParentType, ContextType>;
  sequence?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  serviceID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  serviceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackingNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackingURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StepUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StepUser'] = ResolversParentTypes['StepUser']> = ResolversObject<{
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  addresLine?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StockDetailWithLocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StockDetailWithLocation'] = ResolversParentTypes['StockDetailWithLocation']> = ResolversObject<{
  locations?: Resolver<Maybe<Array<Maybe<ResolversTypes['LocationDetail']>>>, ParentType, ContextType>;
  saleable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellerProductId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StockFeeDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StockFeeDetail'] = ResolversParentTypes['StockFeeDetail']> = ResolversObject<{
  feeAmount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inventoryStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubMotiveInpResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubMotiveInp'] = ResolversParentTypes['SubMotiveInp']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SummaryClaimsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SummaryClaims'] = ResolversParentTypes['SummaryClaims']> = ResolversObject<{
  dateOpened?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reasonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  riskBuyer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  riskSender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  solutionBuyer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  solutionMediator?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  solutionSeller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SummaryHandlingTimeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SummaryHandlingTime'] = ResolversParentTypes['SummaryHandlingTime']> = ResolversObject<{
  delayed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  excluded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  handlingTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagCaseInpResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TagCaseInp'] = ResolversParentTypes['TagCaseInp']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time'] = ResolversParentTypes['Time']> = ResolversObject<{
  delay?: Resolver<Maybe<ResolversTypes['Delay']>, ParentType, ContextType>;
  lead?: Resolver<Maybe<ResolversTypes['Lead']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeLineResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeLine'] = ResolversParentTypes['TimeLine']> = ResolversObject<{
  header?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  story?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipmentMilestone']>>>, ParentType, ContextType>;
  timelineColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeWindowsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeWindows'] = ResolversParentTypes['TimeWindows']> = ResolversObject<{
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TmsDevolutionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TmsDevolution'] = ResolversParentTypes['TmsDevolution']> = ResolversObject<{
  Dispatch?: Resolver<Maybe<ResolversTypes['TmsDispatch']>, ParentType, ContextType>;
  Inbound?: Resolver<Maybe<ResolversTypes['TmsInbound']>, ParentType, ContextType>;
  Labeling?: Resolver<Maybe<ResolversTypes['Labeling']>, ParentType, ContextType>;
  Outbound?: Resolver<Maybe<ResolversTypes['Outbound']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TmsDispatchResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TmsDispatch'] = ResolversParentTypes['TmsDispatch']> = ResolversObject<{
  CarrierID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  CarrierName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DateFinished?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DockID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  IncludedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  TruckID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  UserID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TmsInboundResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TmsInbound'] = ResolversParentTypes['TmsInbound']> = ResolversObject<{
  CarrierID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  CarrierName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DateClosed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DateOpened?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DockID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  InboundOperation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  IncludedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  TruckID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  UserID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TmsInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TmsInfo'] = ResolversParentTypes['TmsInfo']> = ResolversObject<{
  Devolution?: Resolver<Maybe<ResolversTypes['TmsDevolution']>, ParentType, ContextType>;
  Dispatch?: Resolver<Maybe<ResolversTypes['TmsDispatch']>, ParentType, ContextType>;
  HubStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Inbound?: Resolver<ResolversTypes['TmsInbound'], ParentType, ContextType>;
  LastMile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  Outbound?: Resolver<Maybe<ResolversTypes['TmsOutbound']>, ParentType, ContextType>;
  Priority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ShippingOption?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ShippingType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  StatusDesc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Substatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TmsOutboundResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TmsOutbound'] = ResolversParentTypes['TmsOutbound']> = ResolversObject<{
  AddedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DateClosed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DateOpened?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  IncludedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  UserIDs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrackingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tracking'] = ResolversParentTypes['Tracking']> = ResolversObject<{
  history?: Resolver<Maybe<Array<Maybe<ResolversTypes['TrackingNumber']>>>, ParentType, ContextType>;
  shipmentID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrackingContainerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TrackingContainer'] = ResolversParentTypes['TrackingContainer']> = ResolversObject<{
  dateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrackingNumberResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TrackingNumber'] = ResolversParentTypes['TrackingNumber']> = ResolversObject<{
  dateCreated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plpID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serviceID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  substatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnitContainerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UnitContainer'] = ResolversParentTypes['UnitContainer']> = ResolversObject<{
  details?: Resolver<Array<Maybe<ResolversTypes['UnitContainerDetail']>>, ParentType, ContextType>;
  inventoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnitContainerDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UnitContainerDetail'] = ResolversParentTypes['UnitContainerDetail']> = ResolversObject<{
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  addresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType>;
  agingDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  identification?: Resolver<ResolversTypes['Identification'], ParentType, ContextType>;
  internalTags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['Phone'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purchases?: Resolver<ResolversTypes['SalesDetail'], ParentType, ContextType, RequireFields<UserpurchasesArgs, 'input'>>;
  sales?: Resolver<ResolversTypes['UserSales'], ParentType, ContextType>;
  sellerReputation?: Resolver<ResolversTypes['SellerReputation'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['UserStatus'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  test?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCostsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserCosts'] = ResolversParentTypes['UserCosts']> = ResolversObject<{
  buyerBillingAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  costComponents?: Resolver<ResolversTypes['CostComponents'], ParentType, ContextType>;
  discount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType>;
  save?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserOrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserOrder'] = ResolversParentTypes['UserOrder']> = ResolversObject<{
  amountPaid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  buyer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currencyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logisticType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  offer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publication?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserSalesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserSales'] = ResolversParentTypes['UserSales']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Sales']>, ParentType, ContextType, RequireFields<UserSalesamountArgs, 'input'>>;
  detail?: Resolver<Maybe<ResolversTypes['SalesDetail']>, ParentType, ContextType, RequireFields<UserSalesdetailArgs, 'input'>>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserStatusResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserStatus'] = ResolversParentTypes['UserStatus']> = ResolversObject<{
  mercadopagoAccountType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siteStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValueUnitResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ValueUnit'] = ResolversParentTypes['ValueUnit']> = ResolversObject<{
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdrawal'] = ResolversParentTypes['Withdrawal']> = ResolversObject<{
  ableToReschedule?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  appointment?: Resolver<Maybe<ResolversTypes['Appointment']>, ParentType, ContextType>;
  appointments?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultWarehouseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fbppTicketsAlfred?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  lastUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rescheduleDeadline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sellerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['query_getWithdrawal_status']>, ParentType, ContextType>;
  withdrawals?: Resolver<Maybe<Array<Maybe<ResolversTypes['WithdrawalDetail']>>>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipment?: Resolver<Maybe<ResolversTypes['Shipment']>, ParentType, ContextType>;
  units?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  transfer_plan_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sub_status?: Resolver<Maybe<ResolversTypes['DELAYED_const']>, ParentType, ContextType>;
  dispatch_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date_created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seller_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  warehouse_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  withdrawal_request_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  print_action?: Resolver<Maybe<ResolversTypes['query_getWithdrawal_print_action']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawalAppointmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawalAppointment'] = ResolversParentTypes['WithdrawalAppointment']> = ResolversObject<{
  creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawalContainerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawalContainer'] = ResolversParentTypes['WithdrawalContainer']> = ResolversObject<{
  dimensions?: Resolver<Maybe<ResolversTypes['Dimensions']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUpdate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movements?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  parcelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sellerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipment?: Resolver<Maybe<ResolversTypes['ContainerShipment']>, ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['query_getWithdrawalsContainer_status']>, ParentType, ContextType>;
  storageAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  units?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  warehouseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  withdrawalId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  withdrawal_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  parcel_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seller_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  warehouse_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storage_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawalDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawalDetail'] = ResolversParentTypes['WithdrawalDetail']> = ResolversObject<{
  appointment?: Resolver<ResolversTypes['WithdrawalAppointment'], ParentType, ContextType>;
  appointments?: Resolver<Maybe<Array<ResolversTypes['WithdrawalAppointment']>>, ParentType, ContextType>;
  containers?: Resolver<Maybe<Array<Maybe<ResolversTypes['WithdrawalContainer']>>>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inventories?: Resolver<Maybe<Array<ResolversTypes['WithdrawalInventory']>>, ParentType, ContextType>;
  lastUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  warehouseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  withdrawalCharges?: Resolver<Maybe<Array<Maybe<ResolversTypes['FbmCharge']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawalInventoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawalInventory'] = ResolversParentTypes['WithdrawalInventory']> = ResolversObject<{
  collectedQuantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deliveredQuantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  insuranceCost?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inventoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reservedQuantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WmsInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WmsInfo'] = ResolversParentTypes['WmsInfo']> = ResolversObject<{
  EstimatedTimeDeparture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ZonesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Zones'] = ResolversParentTypes['Zones']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mandatory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  polygon?: Resolver<Maybe<ResolversTypes['Poligon']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  selected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type dateTmResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['dateTm'] = ResolversParentTypes['dateTm']> = ResolversObject<{
  isBold?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isGrey?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type itemHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['itemHistory'] = ResolversParentTypes['itemHistory']> = ResolversObject<{
  changeDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['ShpItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type orderHistoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['orderHistory'] = ResolversParentTypes['orderHistory']> = ResolversObject<{
  changeDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['ShpOrder']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type printLabelOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['printLabelOutput'] = ResolversParentTypes['printLabelOutput']> = ResolversObject<{
  contentLength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawalRequestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawalRequest'] = ResolversParentTypes['WithdrawalRequest']> = ResolversObject<{
  appointments?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  shipment?: Resolver<Maybe<ResolversTypes['Shipment']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Fee']>, ParentType, ContextType>;
  appointment?: Resolver<Maybe<ResolversTypes['Appointment']>, ParentType, ContextType>;
  units?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['query_getWithdrawalsRequest_type']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['query_getWithdrawalsRequest_status']>, ParentType, ContextType>;
  default_warehouse_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sub_status?: Resolver<Maybe<ResolversTypes['DELAYED_const']>, ParentType, ContextType>;
  dispatch_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  withdrawal_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  last_updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seller_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  site_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  print_action?: Resolver<Maybe<ResolversTypes['query_getWithdrawalsRequest_print_action']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type FeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Fee'] = ResolversParentTypes['Fee']> = ResolversObject<{
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currency_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AppointmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Appointment'] = ResolversParentTypes['Appointment']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['query_getWithdrawalsRequest_appointment_source']>, ParentType, ContextType>;
  creation_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchResultsWithdrawalRequestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResultsWithdrawalRequest'] = ResolversParentTypes['SearchResultsWithdrawalRequest']> = ResolversObject<{
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  sort?: Resolver<Maybe<ResolversTypes['Sorter']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  applied_filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  available_filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SorterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Sorter'] = ResolversParentTypes['Sorter']> = ResolversObject<{
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['query_searchWithdrawalRequests_sort_order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusHistoryWithdrawalsRequestStatusResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StatusHistoryWithdrawalsRequestStatus'] = ResolversParentTypes['StatusHistoryWithdrawalsRequestStatus']> = ResolversObject<{
  status?: Resolver<Maybe<ResolversTypes['query_getWithdrawalsRequestHistory_items_status']>, ParentType, ContextType>;
  event_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchResultsWithdrawalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResultsWithdrawal'] = ResolversParentTypes['SearchResultsWithdrawal']> = ResolversObject<{
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  sort?: Resolver<Maybe<ResolversTypes['Sorter']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  applied_filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  available_filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DispatchInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DispatchInfo'] = ResolversParentTypes['DispatchInfo']> = ResolversObject<{
  constraint?: Resolver<Maybe<ResolversTypes['query_getWithdrawalReadyToDispatchInfo_constraint']>, ParentType, ContextType>;
  ready_to_dispatch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dispatch_channel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContainerShipmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContainerShipment'] = ResolversParentTypes['ContainerShipment']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['query_getWithdrawalsContainer_shipment_type']>, ParentType, ContextType>;
  tracking?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  order_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transfer_unit_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  estimated_delivery_date?: Resolver<Maybe<ResolversTypes['Delivery']>, ParentType, ContextType>;
  tracking_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parcel_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeliveryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Delivery'] = ResolversParentTypes['Delivery']> = ResolversObject<{
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchResultsWithdrawalContainerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResultsWithdrawalContainer'] = ResolversParentTypes['SearchResultsWithdrawalContainer']> = ResolversObject<{
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  sort?: Resolver<Maybe<ResolversTypes['Sorter']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  applied_filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  available_filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawalContainerTrackingInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawalContainerTrackingInfo'] = ResolversParentTypes['WithdrawalContainerTrackingInfo']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['AddressDTO']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  container_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['Dimensions']>, ParentType, ContextType>;
  withdrawal_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  shipment_type?: Resolver<Maybe<ResolversTypes['query_getWithdrawalsContainerTrackingInfo_shipment_type']>, ParentType, ContextType>;
  tracking_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddressDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddressDTO'] = ResolversParentTypes['AddressDTO']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['AddressArea']>, ParentType, ContextType>;
  references?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['AddressArea']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['AddressArea']>, ParentType, ContextType>;
  zip_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aditional_info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_line?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddressAreaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddressArea'] = ResolversParentTypes['AddressArea']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContainerDocumentsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContainerDocuments'] = ResolversParentTypes['ContainerDocuments']> = ResolversObject<{
  shipping_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoice_labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  box_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type list_teams_get_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['list_teams_get_response'] = ResolversParentTypes['list_teams_get_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'TeamResponse' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export type TeamResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamResponse'] = ResolversParentTypes['TeamResponse']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HTTPValidationErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HTTPValidationError'] = ResolversParentTypes['HTTPValidationError']> = ResolversObject<{
  detail?: Resolver<Maybe<Array<Maybe<ResolversTypes['ValidationError']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValidationErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ValidationError'] = ResolversParentTypes['ValidationError']> = ResolversObject<{
  loc?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  msg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type get_by_team_code_teams__team_code__get_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['get_by_team_code_teams__team_code__get_response'] = ResolversParentTypes['get_by_team_code_teams__team_code__get_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'TeamResponse' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export type get_teams_by_username_teams_user__username__get_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['get_teams_by_username_teams_user__username__get_response'] = ResolversParentTypes['get_teams_by_username_teams_user__username__get_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'TeamUserListResponse' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export type TeamUserListResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamUserListResponse'] = ResolversParentTypes['TeamUserListResponse']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isTemporary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type get_team_collaborators_teams__team_code__collaborators_get_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['get_team_collaborators_teams__team_code__collaborators_get_response'] = ResolversParentTypes['get_team_collaborators_teams__team_code__collaborators_get_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'TeamUserResponse' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export type TeamUserResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamUserResponse'] = ResolversParentTypes['TeamUserResponse']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collaborators?: Resolver<Array<Maybe<ResolversTypes['UserResponse']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserResponse'] = ResolversParentTypes['UserResponse']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_temporary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applications?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type get_applications_by_team_code_teams__team_code__applications_get_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['get_applications_by_team_code_teams__team_code__applications_get_response'] = ResolversParentTypes['get_applications_by_team_code_teams__team_code__applications_get_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'String_container' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export type String_containerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['String_container'] = ResolversParentTypes['String_container']> = ResolversObject<{
  String?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoleResponse'] = ResolversParentTypes['RoleResponse']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type create_teams_post_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['create_teams_post_response'] = ResolversParentTypes['create_teams_post_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'TeamResponse' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type update_teams__team_code__put_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['update_teams__team_code__put_response'] = ResolversParentTypes['update_teams__team_code__put_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Void_container' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export type Void_containerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Void_container'] = ResolversParentTypes['Void_container']> = ResolversObject<{
  Void?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type delete_teams__team_code__delete_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_teams__team_code__delete_response'] = ResolversParentTypes['delete_teams__team_code__delete_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Void_container' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export type refresh_teams__team_code__refresh_post_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['refresh_teams__team_code__refresh_post_response'] = ResolversParentTypes['refresh_teams__team_code__refresh_post_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Void_container' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export type exit_collaborator_teams_exit_collaborator_post_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['exit_collaborator_teams_exit_collaborator_post_response'] = ResolversParentTypes['exit_collaborator_teams_exit_collaborator_post_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Void_container' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export type create_role_post_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['create_role_post_response'] = ResolversParentTypes['create_role_post_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RoleResponse' | 'HTTPValidationError', ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Action?: ActionResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  AvailableFilters?: AvailableFiltersResolvers<ContextType>;
  Buyer?: BuyerResolvers<ContextType>;
  Capacities?: CapacitiesResolvers<ContextType>;
  CarrierLabeling?: CarrierLabelingResolvers<ContextType>;
  CaseDataInp?: CaseDataInpResolvers<ContextType>;
  Checkpoint?: CheckpointResolvers<ContextType>;
  Claim?: ClaimResolvers<ContextType>;
  ComparisonChanges?: ComparisonChangesResolvers<ContextType>;
  Comparisons?: ComparisonsResolvers<ContextType>;
  CostComponents?: CostComponentsResolvers<ContextType>;
  Crossdocking?: CrossdockingResolvers<ContextType>;
  CrossdockingDropOff?: CrossdockingDropOffResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  Cutoffs?: CutoffsResolvers<ContextType>;
  DataDisposalInventory?: DataDisposalInventoryResolvers<ContextType>;
  Delay?: DelayResolvers<ContextType>;
  DeliveryPromise?: DeliveryPromiseResolvers<ContextType>;
  Destination?: DestinationResolvers<ContextType>;
  DetailInp?: DetailInpResolvers<ContextType>;
  Dimension?: DimensionResolvers<ContextType>;
  Dimensions?: DimensionsResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  DropOff?: DropOffResolvers<ContextType>;
  EventInp?: EventInpResolvers<ContextType>;
  FbmCharge?: FbmChargeResolvers<ContextType>;
  FbmChargeDetail?: FbmChargeDetailResolvers<ContextType>;
  FilterValue?: FilterValueResolvers<ContextType>;
  Flex?: FlexResolvers<ContextType>;
  FlexAllowed?: FlexAllowedResolvers<ContextType>;
  FromTo?: FromToResolvers<ContextType>;
  Fulfillment?: FulfillmentResolvers<ContextType>;
  FulfillmentRestriction?: FulfillmentRestrictionResolvers<ContextType>;
  GenericNameValue?: GenericNameValueResolvers<ContextType>;
  Geometry?: GeometryResolvers<ContextType>;
  HandlingTime?: HandlingTimeResolvers<ContextType>;
  HandlingTimePredictions?: HandlingTimePredictionsResolvers<ContextType>;
  Header?: HeaderResolvers<ContextType>;
  History?: HistoryResolvers<ContextType>;
  HistoryItem?: HistoryItemResolvers<ContextType>;
  HistoryOrder?: HistoryOrderResolvers<ContextType>;
  IdName?: IdNameResolvers<ContextType>;
  Identification?: IdentificationResolvers<ContextType>;
  Inbound?: InboundResolvers<ContextType>;
  InboundInventories?: InboundInventoriesResolvers<ContextType>;
  InboundInventoriesResult?: InboundInventoriesResultResolvers<ContextType>;
  InboundInventory?: InboundInventoryResolvers<ContextType>;
  InboundMilkRunPlannig?: InboundMilkRunPlannigResolvers<ContextType>;
  InboundMilkRunRunning?: InboundMilkRunRunningResolvers<ContextType>;
  InboundPenalties?: InboundPenaltiesResolvers<ContextType>;
  InboundPenalty?: InboundPenaltyResolvers<ContextType>;
  InboundPenaltyDetail?: InboundPenaltyDetailResolvers<ContextType>;
  Incidence?: IncidenceResolvers<ContextType>;
  IncidentsInp?: IncidentsInpResolvers<ContextType>;
  InventoryAddress?: InventoryAddressResolvers<ContextType>;
  InventoryDimensions?: InventoryDimensionsResolvers<ContextType>;
  InventoryDimensionsUnit?: InventoryDimensionsUnitResolvers<ContextType>;
  InventoryFeeDetail?: InventoryFeeDetailResolvers<ContextType>;
  InventoryInbounds?: InventoryInboundsResolvers<ContextType>;
  InventoryItem?: InventoryItemResolvers<ContextType>;
  InventoryMovement?: InventoryMovementResolvers<ContextType>;
  InventoryMovementsResult?: InventoryMovementsResultResolvers<ContextType>;
  InventoryProblem?: InventoryProblemResolvers<ContextType>;
  InventoryProblemINP?: InventoryProblemINPResolvers<ContextType>;
  InventoryQuantityItem?: InventoryQuantityItemResolvers<ContextType>;
  InventoryRecommendationsItem?: InventoryRecommendationsItemResolvers<ContextType>;
  InventoryWarehosingCharge?: InventoryWarehosingChargeResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemAttribute?: ItemAttributeResolvers<ContextType>;
  ItemDetail?: ItemDetailResolvers<ContextType>;
  ItemDetailHistory?: ItemDetailHistoryResolvers<ContextType>;
  ItemPicture?: ItemPictureResolvers<ContextType>;
  ItemSTValueStruct?: ItemSTValueStructResolvers<ContextType>;
  ItemSaleTerms?: ItemSaleTermsResolvers<ContextType>;
  ItemShipping?: ItemShippingResolvers<ContextType>;
  ItemVariation?: ItemVariationResolvers<ContextType>;
  ItemVariations?: ItemVariationsResolvers<ContextType>;
  Labeling?: LabelingResolvers<ContextType>;
  Lead?: LeadResolvers<ContextType>;
  LimitsQuantityItem?: LimitsQuantityItemResolvers<ContextType>;
  LocationDetail?: LocationDetailResolvers<ContextType>;
  Logistic?: LogisticResolvers<ContextType>;
  LogisticCenter?: LogisticCenterResolvers<ContextType>;
  LogisticCenterAddress?: LogisticCenterAddressResolvers<ContextType>;
  LogisticHandlingTime?: LogisticHandlingTimeResolvers<ContextType>;
  LogisticInfo?: LogisticInfoResolvers<ContextType>;
  LogisticService?: LogisticServiceResolvers<ContextType>;
  LogisticType?: LogisticTypeResolvers<ContextType>;
  LogisticWarehouse?: LogisticWarehouseResolvers<ContextType>;
  MELogistic?: MELogisticResolvers<ContextType>;
  Map?: GraphQLScalarType;
  MediationMessage?: MediationMessageResolvers<ContextType>;
  Method?: MethodResolvers<ContextType>;
  MilkRunDay?: MilkRunDayResolvers<ContextType>;
  MilkRunDriver?: MilkRunDriverResolvers<ContextType>;
  MilkRunGenericEntity?: MilkRunGenericEntityResolvers<ContextType>;
  MilkRunIncidentType?: MilkRunIncidentTypeResolvers<ContextType>;
  MilkRunSellerEntity?: MilkRunSellerEntityResolvers<ContextType>;
  MilkRunTypeVehicle?: MilkRunTypeVehicleResolvers<ContextType>;
  MilkRunVehicle?: MilkRunVehicleResolvers<ContextType>;
  MilkrunCarrier?: MilkrunCarrierResolvers<ContextType>;
  MilkrunDriver?: MilkrunDriverResolvers<ContextType>;
  MilkrunHistory?: MilkrunHistoryResolvers<ContextType>;
  MilkrunVehicle?: MilkrunVehicleResolvers<ContextType>;
  ModeActions?: ModeActionsResolvers<ContextType>;
  MonthSales?: MonthSalesResolvers<ContextType>;
  MovementContainer?: MovementContainerResolvers<ContextType>;
  OnlyID?: OnlyIDResolvers<ContextType>;
  OnlyName?: OnlyNameResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderBuyer?: OrderBuyerResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  OrderItemHistory?: OrderItemHistoryResolvers<ContextType>;
  OrderSeller?: OrderSellerResolvers<ContextType>;
  OrderSellerReputation?: OrderSellerReputationResolvers<ContextType>;
  OriginDestination?: OriginDestinationResolvers<ContextType>;
  Outbound?: OutboundResolvers<ContextType>;
  Paging?: PagingResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PaymentDetail?: PaymentDetailResolvers<ContextType>;
  PaymentHistory?: PaymentHistoryResolvers<ContextType>;
  Phone?: PhoneResolvers<ContextType>;
  PlacePoint?: PlacePointResolvers<ContextType>;
  Poligon?: PoligonResolvers<ContextType>;
  Preferences?: PreferencesResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  PromiseLimit?: PromiseLimitResolvers<ContextType>;
  Purchases?: PurchasesResolvers<ContextType>;
  ReturnShipment?: ReturnShipmentResolvers<ContextType>;
  ReturnTime?: ReturnTimeResolvers<ContextType>;
  SaleTerms?: SaleTermsResolvers<ContextType>;
  Sales?: SalesResolvers<ContextType>;
  SalesDetail?: SalesDetailResolvers<ContextType>;
  ScheduleDay?: ScheduleDayResolvers<ContextType>;
  ScheduleDetail?: ScheduleDetailResolvers<ContextType>;
  SelfServiceConfiguration?: SelfServiceConfigurationResolvers<ContextType>;
  SelfServiceTime?: SelfServiceTimeResolvers<ContextType>;
  Seller?: SellerResolvers<ContextType>;
  SellerDetail?: SellerDetailResolvers<ContextType>;
  SellerInbounds?: SellerInboundsResolvers<ContextType>;
  SellerInventories?: SellerInventoriesResolvers<ContextType>;
  SellerPricingWarehousings?: SellerPricingWarehousingsResolvers<ContextType>;
  SellerProperties?: SellerPropertiesResolvers<ContextType>;
  SellerReputation?: SellerReputationResolvers<ContextType>;
  SellerWithdrawals?: SellerWithdrawalsResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  Shipment?: ShipmentResolvers<ContextType>;
  ShipmentCompany?: ShipmentCompanyResolvers<ContextType>;
  ShipmentContainer?: ShipmentContainerResolvers<ContextType>;
  ShipmentDetail?: ShipmentDetailResolvers<ContextType>;
  ShipmentFiscalData?: ShipmentFiscalDataResolvers<ContextType>;
  ShipmentHistory?: ShipmentHistoryResolvers<ContextType>;
  ShipmentId?: ShipmentIdResolvers<ContextType>;
  ShipmentMilestone?: ShipmentMilestoneResolvers<ContextType>;
  ShipmentStatusHistory?: ShipmentStatusHistoryResolvers<ContextType>;
  ShipmentSubMilestone?: ShipmentSubMilestoneResolvers<ContextType>;
  Shipping?: ShippingResolvers<ContextType>;
  ShippingCosts?: ShippingCostsResolvers<ContextType>;
  ShippingInfo?: ShippingInfoResolvers<ContextType>;
  ShippingPreferences?: ShippingPreferencesResolvers<ContextType>;
  ShpItem?: ShpItemResolvers<ContextType>;
  ShpOrder?: ShpOrderResolvers<ContextType>;
  Source?: SourceResolvers<ContextType>;
  Step?: StepResolvers<ContextType>;
  StepDetail?: StepDetailResolvers<ContextType>;
  StepUser?: StepUserResolvers<ContextType>;
  StockDetailWithLocation?: StockDetailWithLocationResolvers<ContextType>;
  StockFeeDetail?: StockFeeDetailResolvers<ContextType>;
  SubMotiveInp?: SubMotiveInpResolvers<ContextType>;
  SummaryClaims?: SummaryClaimsResolvers<ContextType>;
  SummaryHandlingTime?: SummaryHandlingTimeResolvers<ContextType>;
  TagCaseInp?: TagCaseInpResolvers<ContextType>;
  Time?: TimeResolvers<ContextType>;
  TimeLine?: TimeLineResolvers<ContextType>;
  TimeWindows?: TimeWindowsResolvers<ContextType>;
  TmsDevolution?: TmsDevolutionResolvers<ContextType>;
  TmsDispatch?: TmsDispatchResolvers<ContextType>;
  TmsInbound?: TmsInboundResolvers<ContextType>;
  TmsInfo?: TmsInfoResolvers<ContextType>;
  TmsOutbound?: TmsOutboundResolvers<ContextType>;
  Tracking?: TrackingResolvers<ContextType>;
  TrackingContainer?: TrackingContainerResolvers<ContextType>;
  TrackingNumber?: TrackingNumberResolvers<ContextType>;
  UnitContainer?: UnitContainerResolvers<ContextType>;
  UnitContainerDetail?: UnitContainerDetailResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCosts?: UserCostsResolvers<ContextType>;
  UserOrder?: UserOrderResolvers<ContextType>;
  UserSales?: UserSalesResolvers<ContextType>;
  UserStatus?: UserStatusResolvers<ContextType>;
  ValueUnit?: ValueUnitResolvers<ContextType>;
  Withdrawal?: WithdrawalResolvers<ContextType>;
  WithdrawalAppointment?: WithdrawalAppointmentResolvers<ContextType>;
  WithdrawalContainer?: WithdrawalContainerResolvers<ContextType>;
  WithdrawalDetail?: WithdrawalDetailResolvers<ContextType>;
  WithdrawalInventory?: WithdrawalInventoryResolvers<ContextType>;
  WmsInfo?: WmsInfoResolvers<ContextType>;
  Zones?: ZonesResolvers<ContextType>;
  dateTm?: dateTmResolvers<ContextType>;
  itemHistory?: itemHistoryResolvers<ContextType>;
  orderHistory?: orderHistoryResolvers<ContextType>;
  printLabelOutput?: printLabelOutputResolvers<ContextType>;
  WithdrawalRequest?: WithdrawalRequestResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Fee?: FeeResolvers<ContextType>;
  Appointment?: AppointmentResolvers<ContextType>;
  SearchResultsWithdrawalRequest?: SearchResultsWithdrawalRequestResolvers<ContextType>;
  Sorter?: SorterResolvers<ContextType>;
  StatusHistoryWithdrawalsRequestStatus?: StatusHistoryWithdrawalsRequestStatusResolvers<ContextType>;
  SearchResultsWithdrawal?: SearchResultsWithdrawalResolvers<ContextType>;
  DispatchInfo?: DispatchInfoResolvers<ContextType>;
  ContainerShipment?: ContainerShipmentResolvers<ContextType>;
  Delivery?: DeliveryResolvers<ContextType>;
  SearchResultsWithdrawalContainer?: SearchResultsWithdrawalContainerResolvers<ContextType>;
  WithdrawalContainerTrackingInfo?: WithdrawalContainerTrackingInfoResolvers<ContextType>;
  AddressDTO?: AddressDTOResolvers<ContextType>;
  AddressArea?: AddressAreaResolvers<ContextType>;
  ContainerDocuments?: ContainerDocumentsResolvers<ContextType>;
  list_teams_get_response?: list_teams_get_responseResolvers<ContextType>;
  TeamResponse?: TeamResponseResolvers<ContextType>;
  HTTPValidationError?: HTTPValidationErrorResolvers<ContextType>;
  ValidationError?: ValidationErrorResolvers<ContextType>;
  get_by_team_code_teams__team_code__get_response?: get_by_team_code_teams__team_code__get_responseResolvers<ContextType>;
  get_teams_by_username_teams_user__username__get_response?: get_teams_by_username_teams_user__username__get_responseResolvers<ContextType>;
  TeamUserListResponse?: TeamUserListResponseResolvers<ContextType>;
  get_team_collaborators_teams__team_code__collaborators_get_response?: get_team_collaborators_teams__team_code__collaborators_get_responseResolvers<ContextType>;
  TeamUserResponse?: TeamUserResponseResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
  get_applications_by_team_code_teams__team_code__applications_get_response?: get_applications_by_team_code_teams__team_code__applications_get_responseResolvers<ContextType>;
  String_container?: String_containerResolvers<ContextType>;
  RoleResponse?: RoleResponseResolvers<ContextType>;
  create_teams_post_response?: create_teams_post_responseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  update_teams__team_code__put_response?: update_teams__team_code__put_responseResolvers<ContextType>;
  Void_container?: Void_containerResolvers<ContextType>;
  Void?: GraphQLScalarType;
  delete_teams__team_code__delete_response?: delete_teams__team_code__delete_responseResolvers<ContextType>;
  refresh_teams__team_code__refresh_post_response?: refresh_teams__team_code__refresh_post_responseResolvers<ContextType>;
  exit_collaborator_teams_exit_collaborator_post_response?: exit_collaborator_teams_exit_collaborator_post_responseResolvers<ContextType>;
  create_role_post_response?: create_role_post_responseResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  oneOf?: oneOfDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = SauronBackofficeApiTypes.Context & ShippingBackofficeCoreTypes.Context & RubikApiTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/shipping-backoffice-core/jsonSchemaBundle":
      return Promise.resolve(importedModule$0) as T;
    
    case ".mesh/sources/rubik-api/jsonSchemaBundle":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = {"endpoint":"/api/query","port":8443,"cors":{"origin":"*"}} as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const sauronBackofficeApiTransforms = [];
const rubikApiTransforms = [];
const shippingBackofficeCoreTransforms = [];
const additionalTypeDefs = [] as any[];
const sauronBackofficeApiHandler = new GraphqlHandler({
              name: "sauron-backoffice-api",
              config: {"endpoint":"http://internal.mercadolibre.com/internal/sauron-api/prod/query","source":"./src/graphql/data-sauron-backoffice-api.graphql","retry":2,"timeout":5000,"operationHeaders":{"Content-Type":"application/json","accept-version":"2"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("sauron-backoffice-api"),
              logger: logger.child("sauron-backoffice-api"),
              importFn,
            });
const rubikApiHandler = new OpenapiHandler({
              name: "rubik-api",
              config: {"baseUrl":"https://team-api.furycloud.io","source":"./src/json/data-rubik-api.json","retry":2,"timeout":5000,"operationHeaders":{"Content-Type":"application/json","accept-version":"2"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("rubik-api"),
              logger: logger.child("rubik-api"),
              importFn,
            });
const shippingBackofficeCoreHandler = new OpenapiHandler({
              name: "shipping-backoffice-core",
              config: {"baseUrl":"https://internal-api.mercadolibre.com","source":"./src/json/data-shipping-backoffice-core.json","retry":2,"timeout":5000,"operationHeaders":{"Content-Type":"application/json","accept-version":"2"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("shipping-backoffice-core"),
              logger: logger.child("shipping-backoffice-core"),
              importFn,
            });
sources[0] = {
          name: 'sauron-backoffice-api',
          handler: sauronBackofficeApiHandler,
          transforms: sauronBackofficeApiTransforms
        }
sources[1] = {
          name: 'rubik-api',
          handler: rubikApiHandler,
          transforms: rubikApiTransforms
        }
sources[2] = {
          name: 'shipping-backoffice-core',
          handler: shippingBackofficeCoreHandler,
          transforms: shippingBackofficeCoreTransforms
        }
transforms[0] = new (NamingConventionTransform as any)({
            apiName: '',
            config: {"mode":"wrap"},
            baseDir,
            cache,
            pubsub,
            importFn,
            logger,
          })
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"endpoint":"/api/query","port":8443,"cors":{"origin":"*"}},
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));