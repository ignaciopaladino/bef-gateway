// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace RubikApiTypes {
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
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date | string;
  /** Represents empty values */
  Void: void;
};

export type Query = {
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

export type Mutation = {
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

  export type QuerySdk = {
      /** Ping endpoint, used to know if the app is up. **/
  ping_ping_get: InContextSdkMethod<Query['ping_ping_get'], {}, MeshContext>,
  /** List **/
  list_teams_get: InContextSdkMethod<Query['list_teams_get'], Querylist_teams_getArgs, MeshContext>,
  /** Get By Team Code **/
  get_by_team_code_teams__team_code__get: InContextSdkMethod<Query['get_by_team_code_teams__team_code__get'], Queryget_by_team_code_teams__team_code__getArgs, MeshContext>,
  /** Get Teams By Username **/
  get_teams_by_username_teams_user__username__get: InContextSdkMethod<Query['get_teams_by_username_teams_user__username__get'], Queryget_teams_by_username_teams_user__username__getArgs, MeshContext>,
  /** Get Team Collaborators **/
  get_team_collaborators_teams__team_code__collaborators_get: InContextSdkMethod<Query['get_team_collaborators_teams__team_code__collaborators_get'], Queryget_team_collaborators_teams__team_code__collaborators_getArgs, MeshContext>,
  /** Get Applications By Team Code **/
  get_applications_by_team_code_teams__team_code__applications_get: InContextSdkMethod<Query['get_applications_by_team_code_teams__team_code__applications_get'], Queryget_applications_by_team_code_teams__team_code__applications_getArgs, MeshContext>,
  /** List **/
  list_role_get: InContextSdkMethod<Query['list_role_get'], {}, MeshContext>
  };

  export type MutationSdk = {
      /** Create **/
  create_teams_post: InContextSdkMethod<Mutation['create_teams_post'], Mutationcreate_teams_postArgs, MeshContext>,
  /** Update **/
  update_teams__team_code__put: InContextSdkMethod<Mutation['update_teams__team_code__put'], Mutationupdate_teams__team_code__putArgs, MeshContext>,
  /** Delete **/
  delete_teams__team_code__delete: InContextSdkMethod<Mutation['delete_teams__team_code__delete'], Mutationdelete_teams__team_code__deleteArgs, MeshContext>,
  /** Refresh **/
  refresh_teams__team_code__refresh_post: InContextSdkMethod<Mutation['refresh_teams__team_code__refresh_post'], Mutationrefresh_teams__team_code__refresh_postArgs, MeshContext>,
  /** Exit Collaborator **/
  exit_collaborator_teams_exit_collaborator_post: InContextSdkMethod<Mutation['exit_collaborator_teams_exit_collaborator_post'], Mutationexit_collaborator_teams_exit_collaborator_postArgs, MeshContext>,
  /** Create **/
  create_role_post: InContextSdkMethod<Mutation['create_role_post'], Mutationcreate_role_postArgs, MeshContext>,
  /** Sync **/
  sync_temporary_role_sync_post: InContextSdkMethod<Mutation['sync_temporary_role_sync_post'], {}, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["rubik-api"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
