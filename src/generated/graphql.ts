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

export type Book = {
  __typename?: 'Book';
  _id: Scalars['ID']['output'];
  author: Scalars['String']['output'];
  cover_image?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  finished_on?: Maybe<Scalars['String']['output']>;
  genres: Array<Maybe<Scalars['String']['output']>>;
  language?: Maybe<Scalars['String']['output']>;
  page_count?: Maybe<Scalars['Int']['output']>;
  publication_year: Scalars['String']['output'];
  publisher?: Maybe<Scalars['String']['output']>;
  rating: Scalars['Float']['output'];
  review?: Maybe<Scalars['String']['output']>;
  series_name?: Maybe<Scalars['String']['output']>;
  series_number?: Maybe<Scalars['Int']['output']>;
  started_from?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['ID']['output'];
};

export type BookFilterInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BookFilters = {
  __typename?: 'BookFilters';
  authors: Array<Scalars['String']['output']>;
  genres: Array<Scalars['String']['output']>;
  statuses: Array<Scalars['String']['output']>;
};

export type BookPage = {
  __typename?: 'BookPage';
  books: Array<Maybe<Book>>;
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  page_count: Scalars['Int']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type Cat = {
  __typename?: 'Cat';
  _id?: Maybe<Scalars['ID']['output']>;
  age?: Maybe<Scalars['Int']['output']>;
  breed?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Owner>;
};

export type CreateBookInput = {
  author: Scalars['String']['input'];
  cover_image?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  finished_on?: InputMaybe<Scalars['String']['input']>;
  genres: Array<InputMaybe<Scalars['String']['input']>>;
  language?: InputMaybe<Scalars['String']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  publication_year: Scalars['String']['input'];
  publisher?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  series_name?: InputMaybe<Scalars['String']['input']>;
  series_number?: InputMaybe<Scalars['Int']['input']>;
  started_from?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateMovieInput = {
  adult?: InputMaybe<Scalars['Boolean']['input']>;
  backdrop_path?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  finished_on?: InputMaybe<Scalars['String']['input']>;
  genres: Array<Scalars['String']['input']>;
  language: Scalars['String']['input'];
  origin_country: Scalars['String']['input'];
  original_title?: InputMaybe<Scalars['String']['input']>;
  platform: Scalars['String']['input'];
  poster_image?: InputMaybe<Scalars['String']['input']>;
  poster_path?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Float']['input'];
  release_year: Scalars['String']['input'];
  review?: InputMaybe<Scalars['String']['input']>;
  runtime: Scalars['Int']['input'];
  started_from?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
  tmdb_id?: InputMaybe<Scalars['Int']['input']>;
  video?: InputMaybe<Scalars['Boolean']['input']>;
  vote_average?: InputMaybe<Scalars['Float']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

export type CreatePoemInput = {
  atmosphere?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  cover_image?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  language: Scalars['String']['input'];
  mood?: InputMaybe<Scalars['String']['input']>;
  poem_type: Scalars['String']['input'];
  status: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type CreateSeriesInput = {
  creator?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  episodes: Scalars['Int']['input'];
  finished_on?: InputMaybe<Scalars['String']['input']>;
  genres: Array<Scalars['String']['input']>;
  language: Scalars['String']['input'];
  origin_country: Scalars['String']['input'];
  platform: Scalars['String']['input'];
  poster_image?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Float']['input'];
  release_year: Scalars['String']['input'];
  review?: InputMaybe<Scalars['String']['input']>;
  seasons: Scalars['Int']['input'];
  started_from?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  email_id: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  mobile_no?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  profile_pic?: InputMaybe<Scalars['String']['input']>;
  user_name: Scalars['String']['input'];
};

export type DashboardStats = {
  __typename?: 'DashboardStats';
  books: Scalars['Int']['output'];
  journal_entries: Scalars['Int']['output'];
  movies: Scalars['Int']['output'];
  poems: Scalars['Int']['output'];
  series: Scalars['Int']['output'];
};

export type Dog = {
  __typename?: 'Dog';
  _id?: Maybe<Scalars['ID']['output']>;
  age?: Maybe<Scalars['Int']['output']>;
  breed?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Owner>;
};

export type Library = {
  __typename?: 'Library';
  books?: Maybe<Array<Maybe<Book>>>;
  movies?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  series?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

export type Movie = {
  __typename?: 'Movie';
  _id: Scalars['ID']['output'];
  adult?: Maybe<Scalars['Boolean']['output']>;
  backdrop_path?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  finished_on?: Maybe<Scalars['String']['output']>;
  genres: Array<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
  original_title?: Maybe<Scalars['String']['output']>;
  platform: Scalars['String']['output'];
  poster_image?: Maybe<Scalars['String']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  rating: Scalars['Float']['output'];
  release_year: Scalars['String']['output'];
  review?: Maybe<Scalars['String']['output']>;
  runtime: Scalars['Int']['output'];
  started_from?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  tmdb_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['ID']['output'];
  video?: Maybe<Scalars['Boolean']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type MovieFilter = {
  directors?: InputMaybe<Array<Scalars['String']['input']>>;
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  platforms?: InputMaybe<Array<Scalars['String']['input']>>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MovieFilters = {
  __typename?: 'MovieFilters';
  directors: Array<Scalars['String']['output']>;
  genres: Array<Scalars['String']['output']>;
  languages: Array<Scalars['String']['output']>;
  platforms: Array<Scalars['String']['output']>;
  statuses: Array<Scalars['String']['output']>;
};

export type MovieResponse = {
  __typename?: 'MovieResponse';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  movies: Array<Movie>;
  page_count: Scalars['Int']['output'];
  per_page: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['String']['output']>;
  create_book?: Maybe<Book>;
  create_movie: Movie;
  create_poem: Poem;
  create_series: Series;
  create_user_account?: Maybe<AuthResponse>;
  delete_book?: Maybe<Scalars['Boolean']['output']>;
  delete_movie: Scalars['Boolean']['output'];
  delete_poem: Scalars['Boolean']['output'];
  delete_series: Scalars['Boolean']['output'];
  delete_target: Scalars['Boolean']['output'];
  delete_user_account?: Maybe<Scalars['Boolean']['output']>;
  login_user_account?: Maybe<AuthResponse>;
  send_otp?: Maybe<Scalars['Boolean']['output']>;
  set_target: Target;
  updateCatBreed?: Maybe<Cat>;
  updateDogBreed?: Maybe<Dog>;
  update_book?: Maybe<Book>;
  update_movie: Movie;
  update_poem: Poem;
  update_series: Series;
  update_user_account?: Maybe<User>;
  verify_otp?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreate_BookArgs = {
  input: CreateBookInput;
};


export type MutationCreate_MovieArgs = {
  input: CreateMovieInput;
};


export type MutationCreate_PoemArgs = {
  input: CreatePoemInput;
};


export type MutationCreate_SeriesArgs = {
  input: CreateSeriesInput;
};


export type MutationCreate_User_AccountArgs = {
  input: CreateUserInput;
};


export type MutationDelete_BookArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_MovieArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_PoemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_SeriesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_TargetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_User_AccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLogin_User_AccountArgs = {
  email_id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSend_OtpArgs = {
  email: Scalars['String']['input'];
};


export type MutationSet_TargetArgs = {
  input: TargetInput;
};


export type MutationUpdateCatBreedArgs = {
  input: UpdateCatBreedInput;
};


export type MutationUpdateDogBreedArgs = {
  input: UpdateDogBreedInput;
};


export type MutationUpdate_BookArgs = {
  id: Scalars['ID']['input'];
  input: UpdateBookInput;
};


export type MutationUpdate_MovieArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMovieInput;
};


export type MutationUpdate_PoemArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePoemInput;
};


export type MutationUpdate_SeriesArgs = {
  id: Scalars['ID']['input'];
  input: UpdateSeriesInput;
};


export type MutationUpdate_User_AccountArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};


export type MutationVerify_OtpArgs = {
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type Owner = {
  __typename?: 'Owner';
  _id?: Maybe<Scalars['ID']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  mobile_no?: Maybe<Scalars['String']['output']>;
  profile_pic?: Maybe<Scalars['String']['output']>;
};

export type Poem = {
  __typename?: 'Poem';
  _id: Scalars['ID']['output'];
  atmosphere?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  cover_image?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  language: Scalars['String']['output'];
  mood?: Maybe<Scalars['String']['output']>;
  poem_type: Scalars['String']['output'];
  status: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['ID']['output'];
};

export type PoemFilter = {
  language?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  poem_type?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PoemResponse = {
  __typename?: 'PoemResponse';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  page_count: Scalars['Int']['output'];
  per_page: Scalars['Int']['output'];
  poems: Array<Poem>;
  total_count: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']['output']>;
  check_email_exists?: Maybe<Scalars['Boolean']['output']>;
  check_username_exists?: Maybe<Scalars['Boolean']['output']>;
  getAllCats?: Maybe<Array<Maybe<Cat>>>;
  getAllDogs?: Maybe<Array<Maybe<Dog>>>;
  getCatById?: Maybe<Cat>;
  getDogById?: Maybe<Dog>;
  get_all_user_accounts?: Maybe<Array<Maybe<User>>>;
  get_book?: Maybe<Book>;
  get_book_filters: BookFilters;
  get_dashboard_stats: DashboardStats;
  get_movie?: Maybe<Movie>;
  get_movie_filters: MovieFilters;
  get_my_books: BookPage;
  get_my_movies: MovieResponse;
  get_my_poems: PoemResponse;
  get_my_series: SeriesResponse;
  get_my_target?: Maybe<Target>;
  get_poem?: Maybe<Poem>;
  get_series?: Maybe<Series>;
  get_series_filters: SeriesFilters;
  get_target_progress: TargetProgress;
  get_user_account?: Maybe<User>;
  get_user_books?: Maybe<Array<Maybe<Book>>>;
};


export type QueryCheck_Email_ExistsArgs = {
  email: Scalars['String']['input'];
};


export type QueryCheck_Username_ExistsArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetCatByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetDogByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGet_BookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGet_MovieArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGet_My_BooksArgs = {
  filter?: InputMaybe<BookFilterInput>;
};


export type QueryGet_My_MoviesArgs = {
  filter?: InputMaybe<MovieFilter>;
};


export type QueryGet_My_PoemsArgs = {
  filter?: InputMaybe<PoemFilter>;
};


export type QueryGet_My_SeriesArgs = {
  filter?: InputMaybe<SeriesFilter>;
};


export type QueryGet_My_TargetArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGet_PoemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGet_SeriesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGet_Target_ProgressArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGet_User_AccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGet_User_BooksArgs = {
  user_id: Scalars['ID']['input'];
};

export type Series = {
  __typename?: 'Series';
  _id: Scalars['ID']['output'];
  created_at?: Maybe<Scalars['String']['output']>;
  creator?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  episodes: Scalars['Int']['output'];
  finished_on?: Maybe<Scalars['String']['output']>;
  genres: Array<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
  platform: Scalars['String']['output'];
  poster_image?: Maybe<Scalars['String']['output']>;
  rating: Scalars['Float']['output'];
  release_year: Scalars['String']['output'];
  review?: Maybe<Scalars['String']['output']>;
  seasons: Scalars['Int']['output'];
  started_from?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['ID']['output'];
};

export type SeriesFilter = {
  creator?: InputMaybe<Scalars['String']['input']>;
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  platforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SeriesFilters = {
  __typename?: 'SeriesFilters';
  creators: Array<Scalars['String']['output']>;
  genres: Array<Scalars['String']['output']>;
  platforms: Array<Scalars['String']['output']>;
  statuses: Array<Scalars['String']['output']>;
};

export type SeriesResponse = {
  __typename?: 'SeriesResponse';
  current_page: Scalars['Int']['output'];
  has_next_page: Scalars['Boolean']['output'];
  page_count: Scalars['Int']['output'];
  per_page: Scalars['Int']['output'];
  series: Array<Series>;
  total_count: Scalars['Int']['output'];
};

export type Target = {
  __typename?: 'Target';
  _id: Scalars['ID']['output'];
  books?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  movies?: Maybe<Scalars['Int']['output']>;
  poems?: Maybe<Scalars['Int']['output']>;
  series?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['ID']['output'];
  year: Scalars['Int']['output'];
};

export type TargetInput = {
  books?: InputMaybe<Scalars['Int']['input']>;
  movies?: InputMaybe<Scalars['Int']['input']>;
  poems?: InputMaybe<Scalars['Int']['input']>;
  series?: InputMaybe<Scalars['Int']['input']>;
  year: Scalars['Int']['input'];
};

export type TargetProgress = {
  __typename?: 'TargetProgress';
  books: Scalars['Int']['output'];
  movies: Scalars['Int']['output'];
  poems: Scalars['Int']['output'];
  series: Scalars['Int']['output'];
};

export type UpdateBookInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  cover_image?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  finished_on?: InputMaybe<Scalars['String']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  publication_year?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  series_name?: InputMaybe<Scalars['String']['input']>;
  series_number?: InputMaybe<Scalars['Int']['input']>;
  started_from?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCatBreedInput = {
  _id: Scalars['ID']['input'];
  breed: Scalars['String']['input'];
};

export type UpdateDogBreedInput = {
  _id: Scalars['ID']['input'];
  breed: Scalars['String']['input'];
};

export type UpdateMovieInput = {
  adult?: InputMaybe<Scalars['Boolean']['input']>;
  backdrop_path?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  finished_on?: InputMaybe<Scalars['String']['input']>;
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  language?: InputMaybe<Scalars['String']['input']>;
  origin_country?: InputMaybe<Scalars['String']['input']>;
  original_title?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  poster_image?: InputMaybe<Scalars['String']['input']>;
  poster_path?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  release_year?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  started_from?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['Int']['input']>;
  video?: InputMaybe<Scalars['Boolean']['input']>;
  vote_average?: InputMaybe<Scalars['Float']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePoemInput = {
  atmosphere?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  cover_image?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  mood?: InputMaybe<Scalars['String']['input']>;
  poem_type?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSeriesInput = {
  creator?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Scalars['Int']['input']>;
  finished_on?: InputMaybe<Scalars['String']['input']>;
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  language?: InputMaybe<Scalars['String']['input']>;
  origin_country?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  poster_image?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  release_year?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  seasons?: InputMaybe<Scalars['Int']['input']>;
  started_from?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email_id?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  mobile_no?: InputMaybe<Scalars['String']['input']>;
  profile_pic?: InputMaybe<Scalars['String']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  email_id: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  last_name: Scalars['String']['output'];
  library?: Maybe<Library>;
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
  Book: ResolverTypeWrapper<Book>;
  BookFilterInput: BookFilterInput;
  BookFilters: ResolverTypeWrapper<BookFilters>;
  BookPage: ResolverTypeWrapper<BookPage>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cat: ResolverTypeWrapper<Cat>;
  CreateBookInput: CreateBookInput;
  CreateMovieInput: CreateMovieInput;
  CreatePoemInput: CreatePoemInput;
  CreateSeriesInput: CreateSeriesInput;
  CreateUserInput: CreateUserInput;
  DashboardStats: ResolverTypeWrapper<DashboardStats>;
  Dog: ResolverTypeWrapper<Dog>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Library: ResolverTypeWrapper<Library>;
  Movie: ResolverTypeWrapper<Movie>;
  MovieFilter: MovieFilter;
  MovieFilters: ResolverTypeWrapper<MovieFilters>;
  MovieResponse: ResolverTypeWrapper<MovieResponse>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Number: ResolverTypeWrapper<Scalars['Number']['output']>;
  Owner: ResolverTypeWrapper<Owner>;
  Poem: ResolverTypeWrapper<Poem>;
  PoemFilter: PoemFilter;
  PoemResponse: ResolverTypeWrapper<PoemResponse>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Series: ResolverTypeWrapper<Series>;
  SeriesFilter: SeriesFilter;
  SeriesFilters: ResolverTypeWrapper<SeriesFilters>;
  SeriesResponse: ResolverTypeWrapper<SeriesResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Target: ResolverTypeWrapper<Target>;
  TargetInput: TargetInput;
  TargetProgress: ResolverTypeWrapper<TargetProgress>;
  UpdateBookInput: UpdateBookInput;
  UpdateCatBreedInput: UpdateCatBreedInput;
  UpdateDogBreedInput: UpdateDogBreedInput;
  UpdateMovieInput: UpdateMovieInput;
  UpdatePoemInput: UpdatePoemInput;
  UpdateSeriesInput: UpdateSeriesInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthResponse: AuthResponse;
  Book: Book;
  BookFilterInput: BookFilterInput;
  BookFilters: BookFilters;
  BookPage: BookPage;
  Boolean: Scalars['Boolean']['output'];
  Cat: Cat;
  CreateBookInput: CreateBookInput;
  CreateMovieInput: CreateMovieInput;
  CreatePoemInput: CreatePoemInput;
  CreateSeriesInput: CreateSeriesInput;
  CreateUserInput: CreateUserInput;
  DashboardStats: DashboardStats;
  Dog: Dog;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Library: Library;
  Movie: Movie;
  MovieFilter: MovieFilter;
  MovieFilters: MovieFilters;
  MovieResponse: MovieResponse;
  Mutation: Record<PropertyKey, never>;
  Number: Scalars['Number']['output'];
  Owner: Owner;
  Poem: Poem;
  PoemFilter: PoemFilter;
  PoemResponse: PoemResponse;
  Query: Record<PropertyKey, never>;
  Series: Series;
  SeriesFilter: SeriesFilter;
  SeriesFilters: SeriesFilters;
  SeriesResponse: SeriesResponse;
  String: Scalars['String']['output'];
  Target: Target;
  TargetInput: TargetInput;
  TargetProgress: TargetProgress;
  UpdateBookInput: UpdateBookInput;
  UpdateCatBreedInput: UpdateCatBreedInput;
  UpdateDogBreedInput: UpdateDogBreedInput;
  UpdateMovieInput: UpdateMovieInput;
  UpdatePoemInput: UpdatePoemInput;
  UpdateSeriesInput: UpdateSeriesInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
};

export type AuthResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthResponse'] = ResolversParentTypes['AuthResponse']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cover_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finished_on?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publication_year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  series_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  series_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  started_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type BookFiltersResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookFilters'] = ResolversParentTypes['BookFilters']> = {
  authors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  statuses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
};

export type BookPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookPage'] = ResolversParentTypes['BookPage']> = {
  books?: Resolver<Array<Maybe<ResolversTypes['Book']>>, ParentType, ContextType>;
  current_page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  has_next_page?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  per_page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cat'] = ResolversParentTypes['Cat']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  breed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
};

export type DashboardStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DashboardStats'] = ResolversParentTypes['DashboardStats']> = {
  books?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  journal_entries?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  poems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  series?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type DogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dog'] = ResolversParentTypes['Dog']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  breed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
};

export type LibraryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Library'] = ResolversParentTypes['Library']> = {
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  movies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  series?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  adult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  backdrop_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  director?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finished_on?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin_country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  original_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  poster_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poster_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  release_year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runtime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  started_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tmdb_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  vote_average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vote_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type MovieFiltersResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieFilters'] = ResolversParentTypes['MovieFilters']> = {
  directors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  platforms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  statuses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
};

export type MovieResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieResponse'] = ResolversParentTypes['MovieResponse']> = {
  current_page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  has_next_page?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType>;
  page_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  per_page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  create_book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<MutationCreate_BookArgs, 'input'>>;
  create_movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationCreate_MovieArgs, 'input'>>;
  create_poem?: Resolver<ResolversTypes['Poem'], ParentType, ContextType, RequireFields<MutationCreate_PoemArgs, 'input'>>;
  create_series?: Resolver<ResolversTypes['Series'], ParentType, ContextType, RequireFields<MutationCreate_SeriesArgs, 'input'>>;
  create_user_account?: Resolver<Maybe<ResolversTypes['AuthResponse']>, ParentType, ContextType, RequireFields<MutationCreate_User_AccountArgs, 'input'>>;
  delete_book?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDelete_BookArgs, 'id'>>;
  delete_movie?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDelete_MovieArgs, 'id'>>;
  delete_poem?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDelete_PoemArgs, 'id'>>;
  delete_series?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDelete_SeriesArgs, 'id'>>;
  delete_target?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDelete_TargetArgs, 'id'>>;
  delete_user_account?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDelete_User_AccountArgs, 'id'>>;
  login_user_account?: Resolver<Maybe<ResolversTypes['AuthResponse']>, ParentType, ContextType, RequireFields<MutationLogin_User_AccountArgs, 'email_id' | 'password'>>;
  send_otp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSend_OtpArgs, 'email'>>;
  set_target?: Resolver<ResolversTypes['Target'], ParentType, ContextType, RequireFields<MutationSet_TargetArgs, 'input'>>;
  updateCatBreed?: Resolver<Maybe<ResolversTypes['Cat']>, ParentType, ContextType, RequireFields<MutationUpdateCatBreedArgs, 'input'>>;
  updateDogBreed?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationUpdateDogBreedArgs, 'input'>>;
  update_book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<MutationUpdate_BookArgs, 'id' | 'input'>>;
  update_movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationUpdate_MovieArgs, 'id' | 'input'>>;
  update_poem?: Resolver<ResolversTypes['Poem'], ParentType, ContextType, RequireFields<MutationUpdate_PoemArgs, 'id' | 'input'>>;
  update_series?: Resolver<ResolversTypes['Series'], ParentType, ContextType, RequireFields<MutationUpdate_SeriesArgs, 'id' | 'input'>>;
  update_user_account?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdate_User_AccountArgs, 'id' | 'input'>>;
  verify_otp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationVerify_OtpArgs, 'email' | 'otp'>>;
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

export type PoemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Poem'] = ResolversParentTypes['Poem']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  atmosphere?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cover_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poem_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PoemResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoemResponse'] = ResolversParentTypes['PoemResponse']> = {
  current_page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  has_next_page?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  per_page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  poems?: Resolver<Array<ResolversTypes['Poem']>, ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_email_exists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryCheck_Email_ExistsArgs, 'email'>>;
  check_username_exists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryCheck_Username_ExistsArgs, 'username'>>;
  getAllCats?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cat']>>>, ParentType, ContextType>;
  getAllDogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dog']>>>, ParentType, ContextType>;
  getCatById?: Resolver<Maybe<ResolversTypes['Cat']>, ParentType, ContextType, RequireFields<QueryGetCatByIdArgs, '_id'>>;
  getDogById?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<QueryGetDogByIdArgs, '_id'>>;
  get_all_user_accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  get_book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryGet_BookArgs, 'id'>>;
  get_book_filters?: Resolver<ResolversTypes['BookFilters'], ParentType, ContextType>;
  get_dashboard_stats?: Resolver<ResolversTypes['DashboardStats'], ParentType, ContextType>;
  get_movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryGet_MovieArgs, 'id'>>;
  get_movie_filters?: Resolver<ResolversTypes['MovieFilters'], ParentType, ContextType>;
  get_my_books?: Resolver<ResolversTypes['BookPage'], ParentType, ContextType, Partial<QueryGet_My_BooksArgs>>;
  get_my_movies?: Resolver<ResolversTypes['MovieResponse'], ParentType, ContextType, Partial<QueryGet_My_MoviesArgs>>;
  get_my_poems?: Resolver<ResolversTypes['PoemResponse'], ParentType, ContextType, Partial<QueryGet_My_PoemsArgs>>;
  get_my_series?: Resolver<ResolversTypes['SeriesResponse'], ParentType, ContextType, Partial<QueryGet_My_SeriesArgs>>;
  get_my_target?: Resolver<Maybe<ResolversTypes['Target']>, ParentType, ContextType, Partial<QueryGet_My_TargetArgs>>;
  get_poem?: Resolver<Maybe<ResolversTypes['Poem']>, ParentType, ContextType, RequireFields<QueryGet_PoemArgs, 'id'>>;
  get_series?: Resolver<Maybe<ResolversTypes['Series']>, ParentType, ContextType, RequireFields<QueryGet_SeriesArgs, 'id'>>;
  get_series_filters?: Resolver<ResolversTypes['SeriesFilters'], ParentType, ContextType>;
  get_target_progress?: Resolver<ResolversTypes['TargetProgress'], ParentType, ContextType, Partial<QueryGet_Target_ProgressArgs>>;
  get_user_account?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGet_User_AccountArgs, 'id'>>;
  get_user_books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType, RequireFields<QueryGet_User_BooksArgs, 'user_id'>>;
};

export type SeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Series'] = ResolversParentTypes['Series']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  finished_on?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin_country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  poster_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  release_year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seasons?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  started_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type SeriesFiltersResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeriesFilters'] = ResolversParentTypes['SeriesFilters']> = {
  creators?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  platforms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  statuses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
};

export type SeriesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeriesResponse'] = ResolversParentTypes['SeriesResponse']> = {
  current_page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  has_next_page?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  per_page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  series?: Resolver<Array<ResolversTypes['Series']>, ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type TargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Target'] = ResolversParentTypes['Target']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  books?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  movies?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  poems?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  series?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type TargetProgressResolvers<ContextType = any, ParentType extends ResolversParentTypes['TargetProgress'] = ResolversParentTypes['TargetProgress']> = {
  books?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  poems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  series?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  library?: Resolver<Maybe<ResolversTypes['Library']>, ParentType, ContextType>;
  mobile_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_pic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthResponse?: AuthResponseResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  BookFilters?: BookFiltersResolvers<ContextType>;
  BookPage?: BookPageResolvers<ContextType>;
  Cat?: CatResolvers<ContextType>;
  DashboardStats?: DashboardStatsResolvers<ContextType>;
  Dog?: DogResolvers<ContextType>;
  Library?: LibraryResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  MovieFilters?: MovieFiltersResolvers<ContextType>;
  MovieResponse?: MovieResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Number?: GraphQLScalarType;
  Owner?: OwnerResolvers<ContextType>;
  Poem?: PoemResolvers<ContextType>;
  PoemResponse?: PoemResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Series?: SeriesResolvers<ContextType>;
  SeriesFilters?: SeriesFiltersResolvers<ContextType>;
  SeriesResponse?: SeriesResponseResolvers<ContextType>;
  Target?: TargetResolvers<ContextType>;
  TargetProgress?: TargetProgressResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

