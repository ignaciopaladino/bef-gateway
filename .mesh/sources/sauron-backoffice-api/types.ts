// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SauronBackofficeApiTypes {
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
  Map: any;
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
};

export type Dimensions = {
  cubicWeight: Scalars['String'];
  dimensions: Dimension;
  source: Source;
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
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  total: Scalars['Int'];
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
  id: Scalars['ID'];
  identification: Identification;
  internalTags?: Maybe<Array<Scalars['String']>>;
  lastName: Scalars['String'];
  nickname: Scalars['String'];
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
  appointment: WithdrawalAppointment;
  appointments?: Maybe<Array<WithdrawalAppointment>>;
  dateCreated?: Maybe<Scalars['String']>;
  defaultWarehouseId: Scalars['String'];
  fbppTicketsAlfred?: Maybe<Array<Scalars['String']>>;
  fee?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastUpdated?: Maybe<Scalars['String']>;
  rescheduleDeadline?: Maybe<Scalars['String']>;
  sellerId: Scalars['String'];
  siteId: Scalars['String'];
  status: Scalars['String'];
  withdrawals?: Maybe<Array<Maybe<WithdrawalDetail>>>;
};

export type WithdrawalAppointment = {
  creationDate: Scalars['String'];
  date: Scalars['String'];
  from: Scalars['String'];
  source: Scalars['String'];
  to: Scalars['String'];
};

export type WithdrawalContainer = {
  dimensions?: Maybe<InventoryDimensions>;
  id: Scalars['String'];
  lastUpdate: Scalars['String'];
  movements?: Maybe<Array<Maybe<MovementContainer>>>;
  parcelId: Scalars['String'];
  sellerId: Scalars['String'];
  shipment?: Maybe<ShipmentContainer>;
  siteId: Scalars['String'];
  status: Scalars['String'];
  storageAddress: Scalars['String'];
  subStatus: Scalars['String'];
  units?: Maybe<Array<Maybe<UnitContainer>>>;
  warehouseId: Scalars['String'];
  withdrawalId: Scalars['Int'];
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

  export type QuerySdk = {
      /** undefined **/
  buyer: InContextSdkMethod<Query['buyer'], QuerybuyerArgs, MeshContext>,
  /** undefined **/
  delay: InContextSdkMethod<Query['delay'], QuerydelayArgs, MeshContext>,
  /** undefined **/
  destination: InContextSdkMethod<Query['destination'], QuerydestinationArgs, MeshContext>,
  /** undefined **/
  getReturnShipments: InContextSdkMethod<Query['getReturnShipments'], QuerygetReturnShipmentsArgs, MeshContext>,
  /** undefined **/
  getShipmentId: InContextSdkMethod<Query['getShipmentId'], QuerygetShipmentIdArgs, MeshContext>,
  /** undefined **/
  inbound: InContextSdkMethod<Query['inbound'], QueryinboundArgs, MeshContext>,
  /** undefined **/
  inboundInventories: InContextSdkMethod<Query['inboundInventories'], QueryinboundInventoriesArgs, MeshContext>,
  /** undefined **/
  inboundInventoriesPaging: InContextSdkMethod<Query['inboundInventoriesPaging'], QueryinboundInventoriesPagingArgs, MeshContext>,
  /** undefined **/
  inboundPenalties: InContextSdkMethod<Query['inboundPenalties'], QueryinboundPenaltiesArgs, MeshContext>,
  /** undefined **/
  incidences: InContextSdkMethod<Query['incidences'], QueryincidencesArgs, MeshContext>,
  /** undefined **/
  inventory: InContextSdkMethod<Query['inventory'], QueryinventoryArgs, MeshContext>,
  /** undefined **/
  inventoryAddresses: InContextSdkMethod<Query['inventoryAddresses'], QueryinventoryAddressesArgs, MeshContext>,
  /** undefined **/
  inventoryInbounds: InContextSdkMethod<Query['inventoryInbounds'], QueryinventoryInboundsArgs, MeshContext>,
  /** undefined **/
  inventoryMovements: InContextSdkMethod<Query['inventoryMovements'], QueryinventoryMovementsArgs, MeshContext>,
  /** undefined **/
  inventoryMovementsAll: InContextSdkMethod<Query['inventoryMovementsAll'], QueryinventoryMovementsAllArgs, MeshContext>,
  /** undefined **/
  inventoryRecommendationsItem: InContextSdkMethod<Query['inventoryRecommendationsItem'], QueryinventoryRecommendationsItemArgs, MeshContext>,
  /** undefined **/
  item: InContextSdkMethod<Query['item'], QueryitemArgs, MeshContext>,
  /** undefined **/
  itemHistory: InContextSdkMethod<Query['itemHistory'], QueryitemHistoryArgs, MeshContext>,
  /** undefined **/
  itemHistoryV2: InContextSdkMethod<Query['itemHistoryV2'], QueryitemHistoryV2Args, MeshContext>,
  /** undefined **/
  logisticCenter: InContextSdkMethod<Query['logisticCenter'], QuerylogisticCenterArgs, MeshContext>,
  /** undefined **/
  meLogistic: InContextSdkMethod<Query['meLogistic'], QuerymeLogisticArgs, MeshContext>,
  /** undefined **/
  orderHistory: InContextSdkMethod<Query['orderHistory'], QueryorderHistoryArgs, MeshContext>,
  /** undefined **/
  orderHistoryV2: InContextSdkMethod<Query['orderHistoryV2'], QueryorderHistoryV2Args, MeshContext>,
  /** undefined **/
  orders: InContextSdkMethod<Query['orders'], QueryordersArgs, MeshContext>,
  /** undefined **/
  paymentDetail: InContextSdkMethod<Query['paymentDetail'], QuerypaymentDetailArgs, MeshContext>,
  /** undefined **/
  payments: InContextSdkMethod<Query['payments'], QuerypaymentsArgs, MeshContext>,
  /** undefined **/
  searchUser: InContextSdkMethod<Query['searchUser'], QuerysearchUserArgs, MeshContext>,
  /** undefined **/
  seller: InContextSdkMethod<Query['seller'], QuerysellerArgs, MeshContext>,
  /** undefined **/
  sellerInbounds: InContextSdkMethod<Query['sellerInbounds'], QuerysellerInboundsArgs, MeshContext>,
  /** undefined **/
  sellerInventories: InContextSdkMethod<Query['sellerInventories'], QuerysellerInventoriesArgs, MeshContext>,
  /** undefined **/
  sellerPenalties: InContextSdkMethod<Query['sellerPenalties'], QuerysellerPenaltiesArgs, MeshContext>,
  /** undefined **/
  sellerPricingWarehousings: InContextSdkMethod<Query['sellerPricingWarehousings'], QuerysellerPricingWarehousingsArgs, MeshContext>,
  /** undefined **/
  sellerProperties: InContextSdkMethod<Query['sellerProperties'], QuerysellerPropertiesArgs, MeshContext>,
  /** undefined **/
  sellerWithdrawals: InContextSdkMethod<Query['sellerWithdrawals'], QuerysellerWithdrawalsArgs, MeshContext>,
  /** undefined **/
  shipment: InContextSdkMethod<Query['shipment'], QueryshipmentArgs, MeshContext>,
  /** undefined **/
  shipmentStatusHistory: InContextSdkMethod<Query['shipmentStatusHistory'], QueryshipmentStatusHistoryArgs, MeshContext>,
  /** undefined **/
  step: InContextSdkMethod<Query['step'], QuerystepArgs, MeshContext>,
  /** undefined **/
  timeline: InContextSdkMethod<Query['timeline'], QuerytimelineArgs, MeshContext>,
  /** undefined **/
  tmsInfo: InContextSdkMethod<Query['tmsInfo'], QuerytmsInfoArgs, MeshContext>,
  /** undefined **/
  tracking: InContextSdkMethod<Query['tracking'], QuerytrackingArgs, MeshContext>,
  /** undefined **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** undefined **/
  withdrawal: InContextSdkMethod<Query['withdrawal'], QuerywithdrawalArgs, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  activateCBTAccount: InContextSdkMethod<Mutation['activateCBTAccount'], MutationactivateCBTAccountArgs, MeshContext>,
  /** undefined **/
  activateDO: InContextSdkMethod<Mutation['activateDO'], MutationactivateDOArgs, MeshContext>,
  /** undefined **/
  activateFulfillment: InContextSdkMethod<Mutation['activateFulfillment'], MutationactivateFulfillmentArgs, MeshContext>,
  /** undefined **/
  activateFulfillmentMLB: InContextSdkMethod<Mutation['activateFulfillmentMLB'], MutationactivateFulfillmentMLBArgs, MeshContext>,
  /** undefined **/
  activateXD: InContextSdkMethod<Mutation['activateXD'], MutationactivateXDArgs, MeshContext>,
  /** undefined **/
  activateXDDO: InContextSdkMethod<Mutation['activateXDDO'], MutationactivateXDDOArgs, MeshContext>,
  /** undefined **/
  addMode: InContextSdkMethod<Mutation['addMode'], MutationaddModeArgs, MeshContext>,
  /** undefined **/
  addOptionalMode: InContextSdkMethod<Mutation['addOptionalMode'], MutationaddOptionalModeArgs, MeshContext>,
  /** undefined **/
  changeAxado: InContextSdkMethod<Mutation['changeAxado'], MutationchangeAxadoArgs, MeshContext>,
  /** undefined **/
  changeCBTCarrier: InContextSdkMethod<Mutation['changeCBTCarrier'], MutationchangeCBTCarrierArgs, MeshContext>,
  /** undefined **/
  changeCBTStatus: InContextSdkMethod<Mutation['changeCBTStatus'], MutationchangeCBTStatusArgs, MeshContext>,
  /** undefined **/
  changeHandlingTime: InContextSdkMethod<Mutation['changeHandlingTime'], MutationchangeHandlingTimeArgs, MeshContext>,
  /** undefined **/
  changeMode: InContextSdkMethod<Mutation['changeMode'], MutationchangeModeArgs, MeshContext>,
  /** undefined **/
  changeStatus: InContextSdkMethod<Mutation['changeStatus'], MutationchangeStatusArgs, MeshContext>,
  /** undefined **/
  changeTrackingNumber: InContextSdkMethod<Mutation['changeTrackingNumber'], MutationchangeTrackingNumberArgs, MeshContext>,
  /** undefined **/
  deactivateFulfillment: InContextSdkMethod<Mutation['deactivateFulfillment'], MutationdeactivateFulfillmentArgs, MeshContext>,
  /** undefined **/
  deactivateSelfService: InContextSdkMethod<Mutation['deactivateSelfService'], MutationdeactivateSelfServiceArgs, MeshContext>,
  /** undefined **/
  deleteOptionalMode: InContextSdkMethod<Mutation['deleteOptionalMode'], MutationdeleteOptionalModeArgs, MeshContext>,
  /** undefined **/
  editDO: InContextSdkMethod<Mutation['editDO'], MutationeditDOArgs, MeshContext>,
  /** undefined **/
  editFBMPickUp: InContextSdkMethod<Mutation['editFBMPickUp'], MutationeditFBMPickUpArgs, MeshContext>,
  /** undefined **/
  editFragile: InContextSdkMethod<Mutation['editFragile'], MutationeditFragileArgs, MeshContext>,
  /** undefined **/
  editFulfillment: InContextSdkMethod<Mutation['editFulfillment'], MutationeditFulfillmentArgs, MeshContext>,
  /** undefined **/
  editXD: InContextSdkMethod<Mutation['editXD'], MutationeditXDArgs, MeshContext>,
  /** undefined **/
  editXDDO: InContextSdkMethod<Mutation['editXDDO'], MutationeditXDDOArgs, MeshContext>,
  /** undefined **/
  fraudProcess: InContextSdkMethod<Mutation['fraudProcess'], MutationfraudProcessArgs, MeshContext>,
  /** undefined **/
  getModeActions: InContextSdkMethod<Mutation['getModeActions'], MutationgetModeActionsArgs, MeshContext>,
  /** undefined **/
  mandatoryME: InContextSdkMethod<Mutation['mandatoryME'], MutationmandatoryMEArgs, MeshContext>,
  /** undefined **/
  printLabel: InContextSdkMethod<Mutation['printLabel'], MutationprintLabelArgs, MeshContext>,
  /** undefined **/
  regenerateLabel: InContextSdkMethod<Mutation['regenerateLabel'], MutationregenerateLabelArgs, MeshContext>,
  /** undefined **/
  removeFlammableTag: InContextSdkMethod<Mutation['removeFlammableTag'], MutationremoveFlammableTagArgs, MeshContext>,
  /** undefined **/
  reputationTag: InContextSdkMethod<Mutation['reputationTag'], MutationreputationTagArgs, MeshContext>,
  /** undefined **/
  resetHandlingTime: InContextSdkMethod<Mutation['resetHandlingTime'], MutationresetHandlingTimeArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["sauron-backoffice-api"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
