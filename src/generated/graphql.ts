import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Number: { input: any; output: any; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type Cat = {
  __typename?: 'Cat';
  _id?: Maybe<Scalars['ID']['output']>;
  age?: Maybe<Scalars['Int']['output']>;
  breed?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Owner>;
};

export type CreateUserInput = {
  email_id: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  mobile_no?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  profile_pic?: InputMaybe<Scalars['String']['input']>;
};

export type Dog = {
  __typename?: 'Dog';
  _id?: Maybe<Scalars['ID']['output']>;
  age?: Maybe<Scalars['Int']['output']>;
  breed?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Owner>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['String']['output']>;
  create_user_account: AuthResponse;
  updateCatBreed?: Maybe<Cat>;
  updateDogBreed?: Maybe<Dog>;
};


export type MutationCreate_User_AccountArgs = {
  input: CreateUserInput;
};


export type MutationUpdateCatBreedArgs = {
  input: UpdateCatBreedInput;
};


export type MutationUpdateDogBreedArgs = {
  input: UpdateDogBreedInput;
};

export type Owner = {
  __typename?: 'Owner';
  _id?: Maybe<Scalars['ID']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  mobile_no?: Maybe<Scalars['String']['output']>;
  profile_pic?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']['output']>;
  getAllCats?: Maybe<Array<Maybe<Cat>>>;
  getAllDogs?: Maybe<Array<Maybe<Dog>>>;
  getCatById?: Maybe<Cat>;
  getDogById?: Maybe<Dog>;
};


export type QueryGetCatByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetDogByIdArgs = {
  _id: Scalars['ID']['input'];
};

export type UpdateCatBreedInput = {
  _id: Scalars['ID']['input'];
  breed: Scalars['String']['input'];
};

export type UpdateDogBreedInput = {
  _id: Scalars['ID']['input'];
  breed: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  email_id: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  last_name: Scalars['String']['output'];
  mobile_no?: Maybe<Scalars['String']['output']>;
  profile_pic?: Maybe<Scalars['String']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthResponse: ResolverTypeWrapper<AuthResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cat: ResolverTypeWrapper<Cat>;
  CreateUserInput: CreateUserInput;
  Dog: ResolverTypeWrapper<Dog>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Number: ResolverTypeWrapper<Scalars['Number']['output']>;
  Owner: ResolverTypeWrapper<Owner>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateCatBreedInput: UpdateCatBreedInput;
  UpdateDogBreedInput: UpdateDogBreedInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthResponse: AuthResponse;
  Boolean: Scalars['Boolean']['output'];
  Cat: Cat;
  CreateUserInput: CreateUserInput;
  Dog: Dog;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: Record<PropertyKey, never>;
  Number: Scalars['Number']['output'];
  Owner: Owner;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  UpdateCatBreedInput: UpdateCatBreedInput;
  UpdateDogBreedInput: UpdateDogBreedInput;
  User: User;
};

export type AuthResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthResponse'] = ResolversParentTypes['AuthResponse']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type CatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cat'] = ResolversParentTypes['Cat']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  breed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
};

export type DogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dog'] = ResolversParentTypes['Dog']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  breed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  create_user_account?: Resolver<ResolversTypes['AuthResponse'], ParentType, ContextType, RequireFields<MutationCreate_User_AccountArgs, 'input'>>;
  updateCatBreed?: Resolver<Maybe<ResolversTypes['Cat']>, ParentType, ContextType, RequireFields<MutationUpdateCatBreedArgs, 'input'>>;
  updateDogBreed?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationUpdateDogBreedArgs, 'input'>>;
};

export interface NumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Number'], any> {
  name: 'Number';
}

export type OwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Owner'] = ResolversParentTypes['Owner']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobile_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_pic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getAllCats?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cat']>>>, ParentType, ContextType>;
  getAllDogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dog']>>>, ParentType, ContextType>;
  getCatById?: Resolver<Maybe<ResolversTypes['Cat']>, ParentType, ContextType, RequireFields<QueryGetCatByIdArgs, '_id'>>;
  getDogById?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<QueryGetDogByIdArgs, '_id'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mobile_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_pic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthResponse?: AuthResponseResolvers<ContextType>;
  Cat?: CatResolvers<ContextType>;
  Dog?: DogResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Number?: GraphQLScalarType;
  Owner?: OwnerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

