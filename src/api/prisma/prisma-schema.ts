export const typeDefs = /* GraphQL */ `type Activity {
  id: ID!
  address: Address!
  occurrenceDate: DateTime!
  content: String!
  applicant: User!
  participants(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  currentDate: DateTime!
  startTime: DateTime!
  endTime: DateTime!
  reporter(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  reportDate: DateTime!
  reportContent: String!
  instructor(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  instructionDate: DateTime!
  instruction: String!
  priority: PriorityLevel!
}

type ActivityConnection {
  pageInfo: PageInfo!
  edges: [ActivityEdge]!
  aggregate: AggregateActivity!
}

input ActivityCreateInput {
  address: AddressCreateOneInput!
  occurrenceDate: DateTime!
  content: String!
  applicant: UserCreateOneInput!
  participants: UserCreateManyInput
  currentDate: DateTime!
  startTime: DateTime!
  endTime: DateTime!
  reporter: UserCreateManyInput
  reportDate: DateTime!
  reportContent: String!
  instructor: UserCreateManyInput
  instructionDate: DateTime!
  instruction: String!
  priority: PriorityLevel!
}

type ActivityEdge {
  node: Activity!
  cursor: String!
}

enum ActivityOrderByInput {
  id_ASC
  id_DESC
  occurrenceDate_ASC
  occurrenceDate_DESC
  content_ASC
  content_DESC
  currentDate_ASC
  currentDate_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  reportDate_ASC
  reportDate_DESC
  reportContent_ASC
  reportContent_DESC
  instructionDate_ASC
  instructionDate_DESC
  instruction_ASC
  instruction_DESC
  priority_ASC
  priority_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivityPreviousValues {
  id: ID!
  occurrenceDate: DateTime!
  content: String!
  currentDate: DateTime!
  startTime: DateTime!
  endTime: DateTime!
  reportDate: DateTime!
  reportContent: String!
  instructionDate: DateTime!
  instruction: String!
  priority: PriorityLevel!
}

type ActivitySubscriptionPayload {
  mutation: MutationType!
  node: Activity
  updatedFields: [String!]
  previousValues: ActivityPreviousValues
}

input ActivitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityWhereInput
  AND: [ActivitySubscriptionWhereInput!]
  OR: [ActivitySubscriptionWhereInput!]
  NOT: [ActivitySubscriptionWhereInput!]
}

input ActivityUpdateInput {
  address: AddressUpdateOneRequiredInput
  occurrenceDate: DateTime
  content: String
  applicant: UserUpdateOneRequiredInput
  participants: UserUpdateManyInput
  currentDate: DateTime
  startTime: DateTime
  endTime: DateTime
  reporter: UserUpdateManyInput
  reportDate: DateTime
  reportContent: String
  instructor: UserUpdateManyInput
  instructionDate: DateTime
  instruction: String
  priority: PriorityLevel
}

input ActivityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  address: AddressWhereInput
  occurrenceDate: DateTime
  occurrenceDate_not: DateTime
  occurrenceDate_in: [DateTime!]
  occurrenceDate_not_in: [DateTime!]
  occurrenceDate_lt: DateTime
  occurrenceDate_lte: DateTime
  occurrenceDate_gt: DateTime
  occurrenceDate_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  applicant: UserWhereInput
  participants_every: UserWhereInput
  participants_some: UserWhereInput
  participants_none: UserWhereInput
  currentDate: DateTime
  currentDate_not: DateTime
  currentDate_in: [DateTime!]
  currentDate_not_in: [DateTime!]
  currentDate_lt: DateTime
  currentDate_lte: DateTime
  currentDate_gt: DateTime
  currentDate_gte: DateTime
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
  reporter_every: UserWhereInput
  reporter_some: UserWhereInput
  reporter_none: UserWhereInput
  reportDate: DateTime
  reportDate_not: DateTime
  reportDate_in: [DateTime!]
  reportDate_not_in: [DateTime!]
  reportDate_lt: DateTime
  reportDate_lte: DateTime
  reportDate_gt: DateTime
  reportDate_gte: DateTime
  reportContent: String
  reportContent_not: String
  reportContent_in: [String!]
  reportContent_not_in: [String!]
  reportContent_lt: String
  reportContent_lte: String
  reportContent_gt: String
  reportContent_gte: String
  reportContent_contains: String
  reportContent_not_contains: String
  reportContent_starts_with: String
  reportContent_not_starts_with: String
  reportContent_ends_with: String
  reportContent_not_ends_with: String
  instructor_every: UserWhereInput
  instructor_some: UserWhereInput
  instructor_none: UserWhereInput
  instructionDate: DateTime
  instructionDate_not: DateTime
  instructionDate_in: [DateTime!]
  instructionDate_not_in: [DateTime!]
  instructionDate_lt: DateTime
  instructionDate_lte: DateTime
  instructionDate_gt: DateTime
  instructionDate_gte: DateTime
  instruction: String
  instruction_not: String
  instruction_in: [String!]
  instruction_not_in: [String!]
  instruction_lt: String
  instruction_lte: String
  instruction_gt: String
  instruction_gte: String
  instruction_contains: String
  instruction_not_contains: String
  instruction_starts_with: String
  instruction_not_starts_with: String
  instruction_ends_with: String
  instruction_not_ends_with: String
  priority: PriorityLevel
  priority_not: PriorityLevel
  priority_in: [PriorityLevel!]
  priority_not_in: [PriorityLevel!]
  AND: [ActivityWhereInput!]
  OR: [ActivityWhereInput!]
  NOT: [ActivityWhereInput!]
}

input ActivityWhereUniqueInput {
  id: ID
}

type Address {
  id: ID!
  street: String!
  suite: String!
  area: String!
  city: String!
  state: String!
  country: String!
  zipcode: String
  geo: Location
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  street: String!
  suite: String!
  area: String!
  city: String!
  state: String!
  country: String!
  zipcode: String
  geo: LocationCreateOneInput
}

input AddressCreateOneInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  street_ASC
  street_DESC
  suite_ASC
  suite_DESC
  area_ASC
  area_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  country_ASC
  country_DESC
  zipcode_ASC
  zipcode_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AddressPreviousValues {
  id: ID!
  street: String!
  suite: String!
  area: String!
  city: String!
  state: String!
  country: String!
  zipcode: String
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

input AddressUpdateDataInput {
  street: String
  suite: String
  area: String
  city: String
  state: String
  country: String
  zipcode: String
  geo: LocationUpdateOneInput
}

input AddressUpdateInput {
  street: String
  suite: String
  area: String
  city: String
  state: String
  country: String
  zipcode: String
  geo: LocationUpdateOneInput
}

input AddressUpdateOneRequiredInput {
  create: AddressCreateInput
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
  connect: AddressWhereUniqueInput
}

input AddressUpsertNestedInput {
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  suite: String
  suite_not: String
  suite_in: [String!]
  suite_not_in: [String!]
  suite_lt: String
  suite_lte: String
  suite_gt: String
  suite_gte: String
  suite_contains: String
  suite_not_contains: String
  suite_starts_with: String
  suite_not_starts_with: String
  suite_ends_with: String
  suite_not_ends_with: String
  area: String
  area_not: String
  area_in: [String!]
  area_not_in: [String!]
  area_lt: String
  area_lte: String
  area_gt: String
  area_gte: String
  area_contains: String
  area_not_contains: String
  area_starts_with: String
  area_not_starts_with: String
  area_ends_with: String
  area_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  zipcode: String
  zipcode_not: String
  zipcode_in: [String!]
  zipcode_not_in: [String!]
  zipcode_lt: String
  zipcode_lte: String
  zipcode_gt: String
  zipcode_gte: String
  zipcode_contains: String
  zipcode_not_contains: String
  zipcode_starts_with: String
  zipcode_not_starts_with: String
  zipcode_ends_with: String
  zipcode_not_ends_with: String
  geo: LocationWhereInput
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateActivity {
  count: Int!
}

type AggregateAddress {
  count: Int!
}

type AggregateArticle {
  count: Int!
}

type AggregateBanquete {
  count: Int!
}

type AggregateBussinessTrip {
  count: Int!
}

type AggregateContact {
  count: Int!
}

type AggregateDocument {
  count: Int!
}

type AggregateDocumentProcedure {
  count: Int!
}

type AggregateEntity {
  count: Int!
}

type AggregateEvaluationProcedure {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateItemProcedure {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregatePartyEntity {
  count: Int!
}

type AggregatePartyMembership {
  count: Int!
}

type AggregatePerson {
  count: Int!
}

type AggregateProcedure {
  count: Int!
}

type AggregatePromotionProcedure {
  count: Int!
}

type AggregateStorage {
  count: Int!
}

type AggregateTransaction {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVacation {
  count: Int!
}

type Article {
  id: ID!
  author: String!
  title: String!
  tags: [String!]!
  isPublished: Boolean!
  description: String
  text: String
  featuredImage: String
  format: ArticleFormat
  publishDate: DateTime!
}

type ArticleConnection {
  pageInfo: PageInfo!
  edges: [ArticleEdge]!
  aggregate: AggregateArticle!
}

input ArticleCreateInput {
  author: String!
  title: String!
  tags: ArticleCreatetagsInput
  isPublished: Boolean
  description: String
  text: String
  featuredImage: String
  format: ArticleFormat
  publishDate: DateTime
}

input ArticleCreatetagsInput {
  set: [String!]
}

type ArticleEdge {
  node: Article!
  cursor: String!
}

enum ArticleFormat {
  COMPACT
  WIDE
  COVER
}

enum ArticleOrderByInput {
  id_ASC
  id_DESC
  author_ASC
  author_DESC
  title_ASC
  title_DESC
  isPublished_ASC
  isPublished_DESC
  description_ASC
  description_DESC
  text_ASC
  text_DESC
  featuredImage_ASC
  featuredImage_DESC
  format_ASC
  format_DESC
  publishDate_ASC
  publishDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ArticlePreviousValues {
  id: ID!
  author: String!
  title: String!
  tags: [String!]!
  isPublished: Boolean!
  description: String
  text: String
  featuredImage: String
  format: ArticleFormat
  publishDate: DateTime!
}

type ArticleSubscriptionPayload {
  mutation: MutationType!
  node: Article
  updatedFields: [String!]
  previousValues: ArticlePreviousValues
}

input ArticleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArticleWhereInput
  AND: [ArticleSubscriptionWhereInput!]
  OR: [ArticleSubscriptionWhereInput!]
  NOT: [ArticleSubscriptionWhereInput!]
}

input ArticleUpdateInput {
  author: String
  title: String
  tags: ArticleUpdatetagsInput
  isPublished: Boolean
  description: String
  text: String
  featuredImage: String
  format: ArticleFormat
  publishDate: DateTime
}

input ArticleUpdatetagsInput {
  set: [String!]
}

input ArticleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  isPublished: Boolean
  isPublished_not: Boolean
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  featuredImage: String
  featuredImage_not: String
  featuredImage_in: [String!]
  featuredImage_not_in: [String!]
  featuredImage_lt: String
  featuredImage_lte: String
  featuredImage_gt: String
  featuredImage_gte: String
  featuredImage_contains: String
  featuredImage_not_contains: String
  featuredImage_starts_with: String
  featuredImage_not_starts_with: String
  featuredImage_ends_with: String
  featuredImage_not_ends_with: String
  format: ArticleFormat
  format_not: ArticleFormat
  format_in: [ArticleFormat!]
  format_not_in: [ArticleFormat!]
  publishDate: DateTime
  publishDate_not: DateTime
  publishDate_in: [DateTime!]
  publishDate_not_in: [DateTime!]
  publishDate_lt: DateTime
  publishDate_lte: DateTime
  publishDate_gt: DateTime
  publishDate_gte: DateTime
  AND: [ArticleWhereInput!]
  OR: [ArticleWhereInput!]
  NOT: [ArticleWhereInput!]
}

input ArticleWhereUniqueInput {
  id: ID
}

type Banquete {
  id: ID!
  applicant: String!
  purpose: String!
  offerer: User!
  authorizer: User!
  companions(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  guests(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  place: Entity!
  date: DateTime!
  description: String
  total: String!
  tags: [String!]!
}

type BanqueteConnection {
  pageInfo: PageInfo!
  edges: [BanqueteEdge]!
  aggregate: AggregateBanquete!
}

input BanqueteCreateInput {
  applicant: String!
  purpose: String!
  offerer: UserCreateOneInput!
  authorizer: UserCreateOneInput!
  companions: UserCreateManyInput
  guests: UserCreateManyInput
  place: EntityCreateOneInput!
  date: DateTime!
  description: String
  total: String!
  tags: BanqueteCreatetagsInput
}

input BanqueteCreatetagsInput {
  set: [String!]
}

type BanqueteEdge {
  node: Banquete!
  cursor: String!
}

enum BanqueteOrderByInput {
  id_ASC
  id_DESC
  applicant_ASC
  applicant_DESC
  purpose_ASC
  purpose_DESC
  date_ASC
  date_DESC
  description_ASC
  description_DESC
  total_ASC
  total_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BanquetePreviousValues {
  id: ID!
  applicant: String!
  purpose: String!
  date: DateTime!
  description: String
  total: String!
  tags: [String!]!
}

type BanqueteSubscriptionPayload {
  mutation: MutationType!
  node: Banquete
  updatedFields: [String!]
  previousValues: BanquetePreviousValues
}

input BanqueteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BanqueteWhereInput
  AND: [BanqueteSubscriptionWhereInput!]
  OR: [BanqueteSubscriptionWhereInput!]
  NOT: [BanqueteSubscriptionWhereInput!]
}

input BanqueteUpdateInput {
  applicant: String
  purpose: String
  offerer: UserUpdateOneRequiredInput
  authorizer: UserUpdateOneRequiredInput
  companions: UserUpdateManyInput
  guests: UserUpdateManyInput
  place: EntityUpdateOneRequiredInput
  date: DateTime
  description: String
  total: String
  tags: BanqueteUpdatetagsInput
}

input BanqueteUpdatetagsInput {
  set: [String!]
}

input BanqueteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  applicant: String
  applicant_not: String
  applicant_in: [String!]
  applicant_not_in: [String!]
  applicant_lt: String
  applicant_lte: String
  applicant_gt: String
  applicant_gte: String
  applicant_contains: String
  applicant_not_contains: String
  applicant_starts_with: String
  applicant_not_starts_with: String
  applicant_ends_with: String
  applicant_not_ends_with: String
  purpose: String
  purpose_not: String
  purpose_in: [String!]
  purpose_not_in: [String!]
  purpose_lt: String
  purpose_lte: String
  purpose_gt: String
  purpose_gte: String
  purpose_contains: String
  purpose_not_contains: String
  purpose_starts_with: String
  purpose_not_starts_with: String
  purpose_ends_with: String
  purpose_not_ends_with: String
  offerer: UserWhereInput
  authorizer: UserWhereInput
  companions_every: UserWhereInput
  companions_some: UserWhereInput
  companions_none: UserWhereInput
  guests_every: UserWhereInput
  guests_some: UserWhereInput
  guests_none: UserWhereInput
  place: EntityWhereInput
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  total: String
  total_not: String
  total_in: [String!]
  total_not_in: [String!]
  total_lt: String
  total_lte: String
  total_gt: String
  total_gte: String
  total_contains: String
  total_not_contains: String
  total_starts_with: String
  total_not_starts_with: String
  total_ends_with: String
  total_not_ends_with: String
  AND: [BanqueteWhereInput!]
  OR: [BanqueteWhereInput!]
  NOT: [BanqueteWhereInput!]
}

input BanqueteWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type BussinessTrip {
  id: ID!
  applicant(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  purpose: String!
  startDate: DateTime!
  endDate: DateTime!
  routes: [String!]!
  flightTicket: String!
  hotelRoom: String!
  transport: String!
}

type BussinessTripConnection {
  pageInfo: PageInfo!
  edges: [BussinessTripEdge]!
  aggregate: AggregateBussinessTrip!
}

input BussinessTripCreateInput {
  applicant: UserCreateManyInput
  purpose: String!
  startDate: DateTime!
  endDate: DateTime!
  routes: BussinessTripCreateroutesInput
  flightTicket: String
  hotelRoom: String
  transport: String
}

input BussinessTripCreateroutesInput {
  set: [String!]
}

type BussinessTripEdge {
  node: BussinessTrip!
  cursor: String!
}

enum BussinessTripOrderByInput {
  id_ASC
  id_DESC
  purpose_ASC
  purpose_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  flightTicket_ASC
  flightTicket_DESC
  hotelRoom_ASC
  hotelRoom_DESC
  transport_ASC
  transport_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BussinessTripPreviousValues {
  id: ID!
  purpose: String!
  startDate: DateTime!
  endDate: DateTime!
  routes: [String!]!
  flightTicket: String!
  hotelRoom: String!
  transport: String!
}

type BussinessTripSubscriptionPayload {
  mutation: MutationType!
  node: BussinessTrip
  updatedFields: [String!]
  previousValues: BussinessTripPreviousValues
}

input BussinessTripSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BussinessTripWhereInput
  AND: [BussinessTripSubscriptionWhereInput!]
  OR: [BussinessTripSubscriptionWhereInput!]
  NOT: [BussinessTripSubscriptionWhereInput!]
}

input BussinessTripUpdateInput {
  applicant: UserUpdateManyInput
  purpose: String
  startDate: DateTime
  endDate: DateTime
  routes: BussinessTripUpdateroutesInput
  flightTicket: String
  hotelRoom: String
  transport: String
}

input BussinessTripUpdateroutesInput {
  set: [String!]
}

input BussinessTripWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  applicant_every: UserWhereInput
  applicant_some: UserWhereInput
  applicant_none: UserWhereInput
  purpose: String
  purpose_not: String
  purpose_in: [String!]
  purpose_not_in: [String!]
  purpose_lt: String
  purpose_lte: String
  purpose_gt: String
  purpose_gte: String
  purpose_contains: String
  purpose_not_contains: String
  purpose_starts_with: String
  purpose_not_starts_with: String
  purpose_ends_with: String
  purpose_not_ends_with: String
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  flightTicket: String
  flightTicket_not: String
  flightTicket_in: [String!]
  flightTicket_not_in: [String!]
  flightTicket_lt: String
  flightTicket_lte: String
  flightTicket_gt: String
  flightTicket_gte: String
  flightTicket_contains: String
  flightTicket_not_contains: String
  flightTicket_starts_with: String
  flightTicket_not_starts_with: String
  flightTicket_ends_with: String
  flightTicket_not_ends_with: String
  hotelRoom: String
  hotelRoom_not: String
  hotelRoom_in: [String!]
  hotelRoom_not_in: [String!]
  hotelRoom_lt: String
  hotelRoom_lte: String
  hotelRoom_gt: String
  hotelRoom_gte: String
  hotelRoom_contains: String
  hotelRoom_not_contains: String
  hotelRoom_starts_with: String
  hotelRoom_not_starts_with: String
  hotelRoom_ends_with: String
  hotelRoom_not_ends_with: String
  transport: String
  transport_not: String
  transport_in: [String!]
  transport_not_in: [String!]
  transport_lt: String
  transport_lte: String
  transport_gt: String
  transport_gte: String
  transport_contains: String
  transport_not_contains: String
  transport_starts_with: String
  transport_not_starts_with: String
  transport_ends_with: String
  transport_not_ends_with: String
  AND: [BussinessTripWhereInput!]
  OR: [BussinessTripWhereInput!]
  NOT: [BussinessTripWhereInput!]
}

input BussinessTripWhereUniqueInput {
  id: ID
}

type Contact {
  id: ID!
  homePhone: String!
  officePhone: String!
  cellPhone: String!
  email: String!
  wechat: String
  whatsapp: String
  github: String
  twitter: String
  instagram: String
  homepage: String
  avatar: String
}

type ContactConnection {
  pageInfo: PageInfo!
  edges: [ContactEdge]!
  aggregate: AggregateContact!
}

input ContactCreateInput {
  homePhone: String!
  officePhone: String!
  cellPhone: String!
  email: String!
  wechat: String
  whatsapp: String
  github: String
  twitter: String
  instagram: String
  homepage: String
  avatar: String
}

input ContactCreateOneInput {
  create: ContactCreateInput
  connect: ContactWhereUniqueInput
}

type ContactEdge {
  node: Contact!
  cursor: String!
}

enum ContactOrderByInput {
  id_ASC
  id_DESC
  homePhone_ASC
  homePhone_DESC
  officePhone_ASC
  officePhone_DESC
  cellPhone_ASC
  cellPhone_DESC
  email_ASC
  email_DESC
  wechat_ASC
  wechat_DESC
  whatsapp_ASC
  whatsapp_DESC
  github_ASC
  github_DESC
  twitter_ASC
  twitter_DESC
  instagram_ASC
  instagram_DESC
  homepage_ASC
  homepage_DESC
  avatar_ASC
  avatar_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ContactPreviousValues {
  id: ID!
  homePhone: String!
  officePhone: String!
  cellPhone: String!
  email: String!
  wechat: String
  whatsapp: String
  github: String
  twitter: String
  instagram: String
  homepage: String
  avatar: String
}

type ContactSubscriptionPayload {
  mutation: MutationType!
  node: Contact
  updatedFields: [String!]
  previousValues: ContactPreviousValues
}

input ContactSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContactWhereInput
  AND: [ContactSubscriptionWhereInput!]
  OR: [ContactSubscriptionWhereInput!]
  NOT: [ContactSubscriptionWhereInput!]
}

input ContactUpdateDataInput {
  homePhone: String
  officePhone: String
  cellPhone: String
  email: String
  wechat: String
  whatsapp: String
  github: String
  twitter: String
  instagram: String
  homepage: String
  avatar: String
}

input ContactUpdateInput {
  homePhone: String
  officePhone: String
  cellPhone: String
  email: String
  wechat: String
  whatsapp: String
  github: String
  twitter: String
  instagram: String
  homepage: String
  avatar: String
}

input ContactUpdateOneInput {
  create: ContactCreateInput
  update: ContactUpdateDataInput
  upsert: ContactUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ContactWhereUniqueInput
}

input ContactUpsertNestedInput {
  update: ContactUpdateDataInput!
  create: ContactCreateInput!
}

input ContactWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  homePhone: String
  homePhone_not: String
  homePhone_in: [String!]
  homePhone_not_in: [String!]
  homePhone_lt: String
  homePhone_lte: String
  homePhone_gt: String
  homePhone_gte: String
  homePhone_contains: String
  homePhone_not_contains: String
  homePhone_starts_with: String
  homePhone_not_starts_with: String
  homePhone_ends_with: String
  homePhone_not_ends_with: String
  officePhone: String
  officePhone_not: String
  officePhone_in: [String!]
  officePhone_not_in: [String!]
  officePhone_lt: String
  officePhone_lte: String
  officePhone_gt: String
  officePhone_gte: String
  officePhone_contains: String
  officePhone_not_contains: String
  officePhone_starts_with: String
  officePhone_not_starts_with: String
  officePhone_ends_with: String
  officePhone_not_ends_with: String
  cellPhone: String
  cellPhone_not: String
  cellPhone_in: [String!]
  cellPhone_not_in: [String!]
  cellPhone_lt: String
  cellPhone_lte: String
  cellPhone_gt: String
  cellPhone_gte: String
  cellPhone_contains: String
  cellPhone_not_contains: String
  cellPhone_starts_with: String
  cellPhone_not_starts_with: String
  cellPhone_ends_with: String
  cellPhone_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  wechat: String
  wechat_not: String
  wechat_in: [String!]
  wechat_not_in: [String!]
  wechat_lt: String
  wechat_lte: String
  wechat_gt: String
  wechat_gte: String
  wechat_contains: String
  wechat_not_contains: String
  wechat_starts_with: String
  wechat_not_starts_with: String
  wechat_ends_with: String
  wechat_not_ends_with: String
  whatsapp: String
  whatsapp_not: String
  whatsapp_in: [String!]
  whatsapp_not_in: [String!]
  whatsapp_lt: String
  whatsapp_lte: String
  whatsapp_gt: String
  whatsapp_gte: String
  whatsapp_contains: String
  whatsapp_not_contains: String
  whatsapp_starts_with: String
  whatsapp_not_starts_with: String
  whatsapp_ends_with: String
  whatsapp_not_ends_with: String
  github: String
  github_not: String
  github_in: [String!]
  github_not_in: [String!]
  github_lt: String
  github_lte: String
  github_gt: String
  github_gte: String
  github_contains: String
  github_not_contains: String
  github_starts_with: String
  github_not_starts_with: String
  github_ends_with: String
  github_not_ends_with: String
  twitter: String
  twitter_not: String
  twitter_in: [String!]
  twitter_not_in: [String!]
  twitter_lt: String
  twitter_lte: String
  twitter_gt: String
  twitter_gte: String
  twitter_contains: String
  twitter_not_contains: String
  twitter_starts_with: String
  twitter_not_starts_with: String
  twitter_ends_with: String
  twitter_not_ends_with: String
  instagram: String
  instagram_not: String
  instagram_in: [String!]
  instagram_not_in: [String!]
  instagram_lt: String
  instagram_lte: String
  instagram_gt: String
  instagram_gte: String
  instagram_contains: String
  instagram_not_contains: String
  instagram_starts_with: String
  instagram_not_starts_with: String
  instagram_ends_with: String
  instagram_not_ends_with: String
  homepage: String
  homepage_not: String
  homepage_in: [String!]
  homepage_not_in: [String!]
  homepage_lt: String
  homepage_lte: String
  homepage_gt: String
  homepage_gte: String
  homepage_contains: String
  homepage_not_contains: String
  homepage_starts_with: String
  homepage_not_starts_with: String
  homepage_ends_with: String
  homepage_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  AND: [ContactWhereInput!]
  OR: [ContactWhereInput!]
  NOT: [ContactWhereInput!]
}

input ContactWhereUniqueInput {
  id: ID
}

scalar DateTime

type Document {
  id: ID!
  type: String
  mark: String
  classification: String
  startDate: DateTime!
  title: String!
  text: String!
  fromEntity: Entity!
  sendingEntity: Entity!
  toEntity: Entity!
  copyEntity: Entity
  attachment: String
  tags: String
  author: User!
}

type DocumentConnection {
  pageInfo: PageInfo!
  edges: [DocumentEdge]!
  aggregate: AggregateDocument!
}

input DocumentCreateInput {
  type: String
  mark: String
  classification: String
  startDate: DateTime!
  title: String!
  text: String!
  fromEntity: EntityCreateOneInput!
  sendingEntity: EntityCreateOneInput!
  toEntity: EntityCreateOneInput!
  copyEntity: EntityCreateOneInput
  attachment: String
  tags: String
  author: UserCreateOneWithoutDocumentsInput!
}

input DocumentCreateManyInput {
  create: [DocumentCreateInput!]
  connect: [DocumentWhereUniqueInput!]
}

input DocumentCreateManyWithoutAuthorInput {
  create: [DocumentCreateWithoutAuthorInput!]
  connect: [DocumentWhereUniqueInput!]
}

input DocumentCreateWithoutAuthorInput {
  type: String
  mark: String
  classification: String
  startDate: DateTime!
  title: String!
  text: String!
  fromEntity: EntityCreateOneInput!
  sendingEntity: EntityCreateOneInput!
  toEntity: EntityCreateOneInput!
  copyEntity: EntityCreateOneInput
  attachment: String
  tags: String
}

type DocumentEdge {
  node: Document!
  cursor: String!
}

enum DocumentOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  mark_ASC
  mark_DESC
  classification_ASC
  classification_DESC
  startDate_ASC
  startDate_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  attachment_ASC
  attachment_DESC
  tags_ASC
  tags_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DocumentPreviousValues {
  id: ID!
  type: String
  mark: String
  classification: String
  startDate: DateTime!
  title: String!
  text: String!
  attachment: String
  tags: String
}

type DocumentProcedure {
  id: ID!
  from: String!
  to: String!
  procedureState: Procedure!
}

type DocumentProcedureConnection {
  pageInfo: PageInfo!
  edges: [DocumentProcedureEdge]!
  aggregate: AggregateDocumentProcedure!
}

input DocumentProcedureCreateInput {
  from: String!
  to: String!
  procedureState: ProcedureCreateOneInput!
}

type DocumentProcedureEdge {
  node: DocumentProcedure!
  cursor: String!
}

enum DocumentProcedureOrderByInput {
  id_ASC
  id_DESC
  from_ASC
  from_DESC
  to_ASC
  to_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DocumentProcedurePreviousValues {
  id: ID!
  from: String!
  to: String!
}

type DocumentProcedureSubscriptionPayload {
  mutation: MutationType!
  node: DocumentProcedure
  updatedFields: [String!]
  previousValues: DocumentProcedurePreviousValues
}

input DocumentProcedureSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DocumentProcedureWhereInput
  AND: [DocumentProcedureSubscriptionWhereInput!]
  OR: [DocumentProcedureSubscriptionWhereInput!]
  NOT: [DocumentProcedureSubscriptionWhereInput!]
}

input DocumentProcedureUpdateInput {
  from: String
  to: String
  procedureState: ProcedureUpdateOneRequiredInput
}

input DocumentProcedureWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  to: String
  to_not: String
  to_in: [String!]
  to_not_in: [String!]
  to_lt: String
  to_lte: String
  to_gt: String
  to_gte: String
  to_contains: String
  to_not_contains: String
  to_starts_with: String
  to_not_starts_with: String
  to_ends_with: String
  to_not_ends_with: String
  procedureState: ProcedureWhereInput
  AND: [DocumentProcedureWhereInput!]
  OR: [DocumentProcedureWhereInput!]
  NOT: [DocumentProcedureWhereInput!]
}

input DocumentProcedureWhereUniqueInput {
  id: ID
}

type DocumentSubscriptionPayload {
  mutation: MutationType!
  node: Document
  updatedFields: [String!]
  previousValues: DocumentPreviousValues
}

input DocumentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DocumentWhereInput
  AND: [DocumentSubscriptionWhereInput!]
  OR: [DocumentSubscriptionWhereInput!]
  NOT: [DocumentSubscriptionWhereInput!]
}

input DocumentUpdateDataInput {
  type: String
  mark: String
  classification: String
  startDate: DateTime
  title: String
  text: String
  fromEntity: EntityUpdateOneRequiredInput
  sendingEntity: EntityUpdateOneRequiredInput
  toEntity: EntityUpdateOneRequiredInput
  copyEntity: EntityUpdateOneInput
  attachment: String
  tags: String
  author: UserUpdateOneRequiredWithoutDocumentsInput
}

input DocumentUpdateInput {
  type: String
  mark: String
  classification: String
  startDate: DateTime
  title: String
  text: String
  fromEntity: EntityUpdateOneRequiredInput
  sendingEntity: EntityUpdateOneRequiredInput
  toEntity: EntityUpdateOneRequiredInput
  copyEntity: EntityUpdateOneInput
  attachment: String
  tags: String
  author: UserUpdateOneRequiredWithoutDocumentsInput
}

input DocumentUpdateManyInput {
  create: [DocumentCreateInput!]
  update: [DocumentUpdateWithWhereUniqueNestedInput!]
  upsert: [DocumentUpsertWithWhereUniqueNestedInput!]
  delete: [DocumentWhereUniqueInput!]
  connect: [DocumentWhereUniqueInput!]
  disconnect: [DocumentWhereUniqueInput!]
}

input DocumentUpdateManyWithoutAuthorInput {
  create: [DocumentCreateWithoutAuthorInput!]
  delete: [DocumentWhereUniqueInput!]
  connect: [DocumentWhereUniqueInput!]
  disconnect: [DocumentWhereUniqueInput!]
  update: [DocumentUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [DocumentUpsertWithWhereUniqueWithoutAuthorInput!]
}

input DocumentUpdateWithoutAuthorDataInput {
  type: String
  mark: String
  classification: String
  startDate: DateTime
  title: String
  text: String
  fromEntity: EntityUpdateOneRequiredInput
  sendingEntity: EntityUpdateOneRequiredInput
  toEntity: EntityUpdateOneRequiredInput
  copyEntity: EntityUpdateOneInput
  attachment: String
  tags: String
}

input DocumentUpdateWithWhereUniqueNestedInput {
  where: DocumentWhereUniqueInput!
  data: DocumentUpdateDataInput!
}

input DocumentUpdateWithWhereUniqueWithoutAuthorInput {
  where: DocumentWhereUniqueInput!
  data: DocumentUpdateWithoutAuthorDataInput!
}

input DocumentUpsertWithWhereUniqueNestedInput {
  where: DocumentWhereUniqueInput!
  update: DocumentUpdateDataInput!
  create: DocumentCreateInput!
}

input DocumentUpsertWithWhereUniqueWithoutAuthorInput {
  where: DocumentWhereUniqueInput!
  update: DocumentUpdateWithoutAuthorDataInput!
  create: DocumentCreateWithoutAuthorInput!
}

input DocumentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  mark: String
  mark_not: String
  mark_in: [String!]
  mark_not_in: [String!]
  mark_lt: String
  mark_lte: String
  mark_gt: String
  mark_gte: String
  mark_contains: String
  mark_not_contains: String
  mark_starts_with: String
  mark_not_starts_with: String
  mark_ends_with: String
  mark_not_ends_with: String
  classification: String
  classification_not: String
  classification_in: [String!]
  classification_not_in: [String!]
  classification_lt: String
  classification_lte: String
  classification_gt: String
  classification_gte: String
  classification_contains: String
  classification_not_contains: String
  classification_starts_with: String
  classification_not_starts_with: String
  classification_ends_with: String
  classification_not_ends_with: String
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  fromEntity: EntityWhereInput
  sendingEntity: EntityWhereInput
  toEntity: EntityWhereInput
  copyEntity: EntityWhereInput
  attachment: String
  attachment_not: String
  attachment_in: [String!]
  attachment_not_in: [String!]
  attachment_lt: String
  attachment_lte: String
  attachment_gt: String
  attachment_gte: String
  attachment_contains: String
  attachment_not_contains: String
  attachment_starts_with: String
  attachment_not_starts_with: String
  attachment_ends_with: String
  attachment_not_ends_with: String
  tags: String
  tags_not: String
  tags_in: [String!]
  tags_not_in: [String!]
  tags_lt: String
  tags_lte: String
  tags_gt: String
  tags_gte: String
  tags_contains: String
  tags_not_contains: String
  tags_starts_with: String
  tags_not_starts_with: String
  tags_ends_with: String
  tags_not_ends_with: String
  author: UserWhereInput
  AND: [DocumentWhereInput!]
  OR: [DocumentWhereInput!]
  NOT: [DocumentWhereInput!]
}

input DocumentWhereUniqueInput {
  id: ID
}

type Entity {
  id: ID!
  name: String!
  fullName: String!
  abbr: String!
  address: Address!
  avatar: String
}

type EntityConnection {
  pageInfo: PageInfo!
  edges: [EntityEdge]!
  aggregate: AggregateEntity!
}

input EntityCreateInput {
  name: String!
  fullName: String!
  abbr: String!
  address: AddressCreateOneInput!
  avatar: String
}

input EntityCreateManyInput {
  create: [EntityCreateInput!]
  connect: [EntityWhereUniqueInput!]
}

input EntityCreateOneInput {
  create: EntityCreateInput
  connect: EntityWhereUniqueInput
}

type EntityEdge {
  node: Entity!
  cursor: String!
}

enum EntityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  fullName_ASC
  fullName_DESC
  abbr_ASC
  abbr_DESC
  avatar_ASC
  avatar_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EntityPreviousValues {
  id: ID!
  name: String!
  fullName: String!
  abbr: String!
  avatar: String
}

type EntitySubscriptionPayload {
  mutation: MutationType!
  node: Entity
  updatedFields: [String!]
  previousValues: EntityPreviousValues
}

input EntitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EntityWhereInput
  AND: [EntitySubscriptionWhereInput!]
  OR: [EntitySubscriptionWhereInput!]
  NOT: [EntitySubscriptionWhereInput!]
}

input EntityUpdateDataInput {
  name: String
  fullName: String
  abbr: String
  address: AddressUpdateOneRequiredInput
  avatar: String
}

input EntityUpdateInput {
  name: String
  fullName: String
  abbr: String
  address: AddressUpdateOneRequiredInput
  avatar: String
}

input EntityUpdateManyInput {
  create: [EntityCreateInput!]
  update: [EntityUpdateWithWhereUniqueNestedInput!]
  upsert: [EntityUpsertWithWhereUniqueNestedInput!]
  delete: [EntityWhereUniqueInput!]
  connect: [EntityWhereUniqueInput!]
  disconnect: [EntityWhereUniqueInput!]
}

input EntityUpdateOneInput {
  create: EntityCreateInput
  update: EntityUpdateDataInput
  upsert: EntityUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: EntityWhereUniqueInput
}

input EntityUpdateOneRequiredInput {
  create: EntityCreateInput
  update: EntityUpdateDataInput
  upsert: EntityUpsertNestedInput
  connect: EntityWhereUniqueInput
}

input EntityUpdateWithWhereUniqueNestedInput {
  where: EntityWhereUniqueInput!
  data: EntityUpdateDataInput!
}

input EntityUpsertNestedInput {
  update: EntityUpdateDataInput!
  create: EntityCreateInput!
}

input EntityUpsertWithWhereUniqueNestedInput {
  where: EntityWhereUniqueInput!
  update: EntityUpdateDataInput!
  create: EntityCreateInput!
}

input EntityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  fullName: String
  fullName_not: String
  fullName_in: [String!]
  fullName_not_in: [String!]
  fullName_lt: String
  fullName_lte: String
  fullName_gt: String
  fullName_gte: String
  fullName_contains: String
  fullName_not_contains: String
  fullName_starts_with: String
  fullName_not_starts_with: String
  fullName_ends_with: String
  fullName_not_ends_with: String
  abbr: String
  abbr_not: String
  abbr_in: [String!]
  abbr_not_in: [String!]
  abbr_lt: String
  abbr_lte: String
  abbr_gt: String
  abbr_gte: String
  abbr_contains: String
  abbr_not_contains: String
  abbr_starts_with: String
  abbr_not_starts_with: String
  abbr_ends_with: String
  abbr_not_ends_with: String
  address: AddressWhereInput
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  AND: [EntityWhereInput!]
  OR: [EntityWhereInput!]
  NOT: [EntityWhereInput!]
}

input EntityWhereUniqueInput {
  id: ID
}

type EvaluationProcedure {
  id: ID!
  target: User!
  positiveObservation: String
  negativeObservation: String
  expectation: String
  performanceLevel: String!
  proposal: String
  directSuperior: User!
  headOfInstitution: User
  procedureState: Procedure!
}

type EvaluationProcedureConnection {
  pageInfo: PageInfo!
  edges: [EvaluationProcedureEdge]!
  aggregate: AggregateEvaluationProcedure!
}

input EvaluationProcedureCreateInput {
  target: UserCreateOneInput!
  positiveObservation: String
  negativeObservation: String
  expectation: String
  performanceLevel: String!
  proposal: String
  directSuperior: UserCreateOneInput!
  headOfInstitution: UserCreateOneInput
  procedureState: ProcedureCreateOneInput!
}

type EvaluationProcedureEdge {
  node: EvaluationProcedure!
  cursor: String!
}

enum EvaluationProcedureOrderByInput {
  id_ASC
  id_DESC
  positiveObservation_ASC
  positiveObservation_DESC
  negativeObservation_ASC
  negativeObservation_DESC
  expectation_ASC
  expectation_DESC
  performanceLevel_ASC
  performanceLevel_DESC
  proposal_ASC
  proposal_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EvaluationProcedurePreviousValues {
  id: ID!
  positiveObservation: String
  negativeObservation: String
  expectation: String
  performanceLevel: String!
  proposal: String
}

type EvaluationProcedureSubscriptionPayload {
  mutation: MutationType!
  node: EvaluationProcedure
  updatedFields: [String!]
  previousValues: EvaluationProcedurePreviousValues
}

input EvaluationProcedureSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EvaluationProcedureWhereInput
  AND: [EvaluationProcedureSubscriptionWhereInput!]
  OR: [EvaluationProcedureSubscriptionWhereInput!]
  NOT: [EvaluationProcedureSubscriptionWhereInput!]
}

input EvaluationProcedureUpdateInput {
  target: UserUpdateOneRequiredInput
  positiveObservation: String
  negativeObservation: String
  expectation: String
  performanceLevel: String
  proposal: String
  directSuperior: UserUpdateOneRequiredInput
  headOfInstitution: UserUpdateOneInput
  procedureState: ProcedureUpdateOneRequiredInput
}

input EvaluationProcedureWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  target: UserWhereInput
  positiveObservation: String
  positiveObservation_not: String
  positiveObservation_in: [String!]
  positiveObservation_not_in: [String!]
  positiveObservation_lt: String
  positiveObservation_lte: String
  positiveObservation_gt: String
  positiveObservation_gte: String
  positiveObservation_contains: String
  positiveObservation_not_contains: String
  positiveObservation_starts_with: String
  positiveObservation_not_starts_with: String
  positiveObservation_ends_with: String
  positiveObservation_not_ends_with: String
  negativeObservation: String
  negativeObservation_not: String
  negativeObservation_in: [String!]
  negativeObservation_not_in: [String!]
  negativeObservation_lt: String
  negativeObservation_lte: String
  negativeObservation_gt: String
  negativeObservation_gte: String
  negativeObservation_contains: String
  negativeObservation_not_contains: String
  negativeObservation_starts_with: String
  negativeObservation_not_starts_with: String
  negativeObservation_ends_with: String
  negativeObservation_not_ends_with: String
  expectation: String
  expectation_not: String
  expectation_in: [String!]
  expectation_not_in: [String!]
  expectation_lt: String
  expectation_lte: String
  expectation_gt: String
  expectation_gte: String
  expectation_contains: String
  expectation_not_contains: String
  expectation_starts_with: String
  expectation_not_starts_with: String
  expectation_ends_with: String
  expectation_not_ends_with: String
  performanceLevel: String
  performanceLevel_not: String
  performanceLevel_in: [String!]
  performanceLevel_not_in: [String!]
  performanceLevel_lt: String
  performanceLevel_lte: String
  performanceLevel_gt: String
  performanceLevel_gte: String
  performanceLevel_contains: String
  performanceLevel_not_contains: String
  performanceLevel_starts_with: String
  performanceLevel_not_starts_with: String
  performanceLevel_ends_with: String
  performanceLevel_not_ends_with: String
  proposal: String
  proposal_not: String
  proposal_in: [String!]
  proposal_not_in: [String!]
  proposal_lt: String
  proposal_lte: String
  proposal_gt: String
  proposal_gte: String
  proposal_contains: String
  proposal_not_contains: String
  proposal_starts_with: String
  proposal_not_starts_with: String
  proposal_ends_with: String
  proposal_not_ends_with: String
  directSuperior: UserWhereInput
  headOfInstitution: UserWhereInput
  procedureState: ProcedureWhereInput
  AND: [EvaluationProcedureWhereInput!]
  OR: [EvaluationProcedureWhereInput!]
  NOT: [EvaluationProcedureWhereInput!]
}

input EvaluationProcedureWhereUniqueInput {
  id: ID
}

type Item {
  id: ID!
  name: String!
  brand: String!
  model: String!
  productionDate: DateTime
  overdueDate: DateTime
  description: String
  price: Float!
  mutationProcedure: ItemProcedure!
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  name: String!
  brand: String!
  model: String!
  productionDate: DateTime
  overdueDate: DateTime
  description: String
  price: Float!
  mutationProcedure: ItemProcedureCreateOneInput!
}

input ItemCreateManyInput {
  create: [ItemCreateInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateOneInput {
  create: ItemCreateInput
  connect: ItemWhereUniqueInput
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  brand_ASC
  brand_DESC
  model_ASC
  model_DESC
  productionDate_ASC
  productionDate_DESC
  overdueDate_ASC
  overdueDate_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  name: String!
  brand: String!
  model: String!
  productionDate: DateTime
  overdueDate: DateTime
  description: String
  price: Float!
}

type ItemProcedure {
  id: ID!
  previousPlace: String!
  currentPlace: String!
  devaluation: String!
  procedureState: Procedure!
}

type ItemProcedureConnection {
  pageInfo: PageInfo!
  edges: [ItemProcedureEdge]!
  aggregate: AggregateItemProcedure!
}

input ItemProcedureCreateInput {
  previousPlace: String!
  currentPlace: String!
  devaluation: String!
  procedureState: ProcedureCreateOneInput!
}

input ItemProcedureCreateOneInput {
  create: ItemProcedureCreateInput
  connect: ItemProcedureWhereUniqueInput
}

type ItemProcedureEdge {
  node: ItemProcedure!
  cursor: String!
}

enum ItemProcedureOrderByInput {
  id_ASC
  id_DESC
  previousPlace_ASC
  previousPlace_DESC
  currentPlace_ASC
  currentPlace_DESC
  devaluation_ASC
  devaluation_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemProcedurePreviousValues {
  id: ID!
  previousPlace: String!
  currentPlace: String!
  devaluation: String!
}

type ItemProcedureSubscriptionPayload {
  mutation: MutationType!
  node: ItemProcedure
  updatedFields: [String!]
  previousValues: ItemProcedurePreviousValues
}

input ItemProcedureSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemProcedureWhereInput
  AND: [ItemProcedureSubscriptionWhereInput!]
  OR: [ItemProcedureSubscriptionWhereInput!]
  NOT: [ItemProcedureSubscriptionWhereInput!]
}

input ItemProcedureUpdateDataInput {
  previousPlace: String
  currentPlace: String
  devaluation: String
  procedureState: ProcedureUpdateOneRequiredInput
}

input ItemProcedureUpdateInput {
  previousPlace: String
  currentPlace: String
  devaluation: String
  procedureState: ProcedureUpdateOneRequiredInput
}

input ItemProcedureUpdateOneRequiredInput {
  create: ItemProcedureCreateInput
  update: ItemProcedureUpdateDataInput
  upsert: ItemProcedureUpsertNestedInput
  connect: ItemProcedureWhereUniqueInput
}

input ItemProcedureUpsertNestedInput {
  update: ItemProcedureUpdateDataInput!
  create: ItemProcedureCreateInput!
}

input ItemProcedureWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  previousPlace: String
  previousPlace_not: String
  previousPlace_in: [String!]
  previousPlace_not_in: [String!]
  previousPlace_lt: String
  previousPlace_lte: String
  previousPlace_gt: String
  previousPlace_gte: String
  previousPlace_contains: String
  previousPlace_not_contains: String
  previousPlace_starts_with: String
  previousPlace_not_starts_with: String
  previousPlace_ends_with: String
  previousPlace_not_ends_with: String
  currentPlace: String
  currentPlace_not: String
  currentPlace_in: [String!]
  currentPlace_not_in: [String!]
  currentPlace_lt: String
  currentPlace_lte: String
  currentPlace_gt: String
  currentPlace_gte: String
  currentPlace_contains: String
  currentPlace_not_contains: String
  currentPlace_starts_with: String
  currentPlace_not_starts_with: String
  currentPlace_ends_with: String
  currentPlace_not_ends_with: String
  devaluation: String
  devaluation_not: String
  devaluation_in: [String!]
  devaluation_not_in: [String!]
  devaluation_lt: String
  devaluation_lte: String
  devaluation_gt: String
  devaluation_gte: String
  devaluation_contains: String
  devaluation_not_contains: String
  devaluation_starts_with: String
  devaluation_not_starts_with: String
  devaluation_ends_with: String
  devaluation_not_ends_with: String
  procedureState: ProcedureWhereInput
  AND: [ItemProcedureWhereInput!]
  OR: [ItemProcedureWhereInput!]
  NOT: [ItemProcedureWhereInput!]
}

input ItemProcedureWhereUniqueInput {
  id: ID
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateDataInput {
  name: String
  brand: String
  model: String
  productionDate: DateTime
  overdueDate: DateTime
  description: String
  price: Float
  mutationProcedure: ItemProcedureUpdateOneRequiredInput
}

input ItemUpdateInput {
  name: String
  brand: String
  model: String
  productionDate: DateTime
  overdueDate: DateTime
  description: String
  price: Float
  mutationProcedure: ItemProcedureUpdateOneRequiredInput
}

input ItemUpdateManyInput {
  create: [ItemCreateInput!]
  update: [ItemUpdateWithWhereUniqueNestedInput!]
  upsert: [ItemUpsertWithWhereUniqueNestedInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
}

input ItemUpdateOneInput {
  create: ItemCreateInput
  update: ItemUpdateDataInput
  upsert: ItemUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ItemWhereUniqueInput
}

input ItemUpdateWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateDataInput!
}

input ItemUpsertNestedInput {
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemUpsertWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  brand: String
  brand_not: String
  brand_in: [String!]
  brand_not_in: [String!]
  brand_lt: String
  brand_lte: String
  brand_gt: String
  brand_gte: String
  brand_contains: String
  brand_not_contains: String
  brand_starts_with: String
  brand_not_starts_with: String
  brand_ends_with: String
  brand_not_ends_with: String
  model: String
  model_not: String
  model_in: [String!]
  model_not_in: [String!]
  model_lt: String
  model_lte: String
  model_gt: String
  model_gte: String
  model_contains: String
  model_not_contains: String
  model_starts_with: String
  model_not_starts_with: String
  model_ends_with: String
  model_not_ends_with: String
  productionDate: DateTime
  productionDate_not: DateTime
  productionDate_in: [DateTime!]
  productionDate_not_in: [DateTime!]
  productionDate_lt: DateTime
  productionDate_lte: DateTime
  productionDate_gt: DateTime
  productionDate_gte: DateTime
  overdueDate: DateTime
  overdueDate_not: DateTime
  overdueDate_in: [DateTime!]
  overdueDate_not_in: [DateTime!]
  overdueDate_lt: DateTime
  overdueDate_lte: DateTime
  overdueDate_gt: DateTime
  overdueDate_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  mutationProcedure: ItemProcedureWhereInput
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

type Location {
  id: ID!
  latitude: Float!
  longitude: Float!
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  latitude: Float!
  longitude: Float!
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  latitude: Float!
  longitude: Float!
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateDataInput {
  latitude: Float
  longitude: Float
}

input LocationUpdateInput {
  latitude: Float
  longitude: Float
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createActivity(data: ActivityCreateInput!): Activity!
  updateActivity(data: ActivityUpdateInput!, where: ActivityWhereUniqueInput!): Activity
  updateManyActivities(data: ActivityUpdateInput!, where: ActivityWhereInput): BatchPayload!
  upsertActivity(where: ActivityWhereUniqueInput!, create: ActivityCreateInput!, update: ActivityUpdateInput!): Activity!
  deleteActivity(where: ActivityWhereUniqueInput!): Activity
  deleteManyActivities(where: ActivityWhereInput): BatchPayload!
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createArticle(data: ArticleCreateInput!): Article!
  updateArticle(data: ArticleUpdateInput!, where: ArticleWhereUniqueInput!): Article
  updateManyArticles(data: ArticleUpdateInput!, where: ArticleWhereInput): BatchPayload!
  upsertArticle(where: ArticleWhereUniqueInput!, create: ArticleCreateInput!, update: ArticleUpdateInput!): Article!
  deleteArticle(where: ArticleWhereUniqueInput!): Article
  deleteManyArticles(where: ArticleWhereInput): BatchPayload!
  createBanquete(data: BanqueteCreateInput!): Banquete!
  updateBanquete(data: BanqueteUpdateInput!, where: BanqueteWhereUniqueInput!): Banquete
  updateManyBanquetes(data: BanqueteUpdateInput!, where: BanqueteWhereInput): BatchPayload!
  upsertBanquete(where: BanqueteWhereUniqueInput!, create: BanqueteCreateInput!, update: BanqueteUpdateInput!): Banquete!
  deleteBanquete(where: BanqueteWhereUniqueInput!): Banquete
  deleteManyBanquetes(where: BanqueteWhereInput): BatchPayload!
  createBussinessTrip(data: BussinessTripCreateInput!): BussinessTrip!
  updateBussinessTrip(data: BussinessTripUpdateInput!, where: BussinessTripWhereUniqueInput!): BussinessTrip
  updateManyBussinessTrips(data: BussinessTripUpdateInput!, where: BussinessTripWhereInput): BatchPayload!
  upsertBussinessTrip(where: BussinessTripWhereUniqueInput!, create: BussinessTripCreateInput!, update: BussinessTripUpdateInput!): BussinessTrip!
  deleteBussinessTrip(where: BussinessTripWhereUniqueInput!): BussinessTrip
  deleteManyBussinessTrips(where: BussinessTripWhereInput): BatchPayload!
  createContact(data: ContactCreateInput!): Contact!
  updateContact(data: ContactUpdateInput!, where: ContactWhereUniqueInput!): Contact
  updateManyContacts(data: ContactUpdateInput!, where: ContactWhereInput): BatchPayload!
  upsertContact(where: ContactWhereUniqueInput!, create: ContactCreateInput!, update: ContactUpdateInput!): Contact!
  deleteContact(where: ContactWhereUniqueInput!): Contact
  deleteManyContacts(where: ContactWhereInput): BatchPayload!
  createDocument(data: DocumentCreateInput!): Document!
  updateDocument(data: DocumentUpdateInput!, where: DocumentWhereUniqueInput!): Document
  updateManyDocuments(data: DocumentUpdateInput!, where: DocumentWhereInput): BatchPayload!
  upsertDocument(where: DocumentWhereUniqueInput!, create: DocumentCreateInput!, update: DocumentUpdateInput!): Document!
  deleteDocument(where: DocumentWhereUniqueInput!): Document
  deleteManyDocuments(where: DocumentWhereInput): BatchPayload!
  createDocumentProcedure(data: DocumentProcedureCreateInput!): DocumentProcedure!
  updateDocumentProcedure(data: DocumentProcedureUpdateInput!, where: DocumentProcedureWhereUniqueInput!): DocumentProcedure
  updateManyDocumentProcedures(data: DocumentProcedureUpdateInput!, where: DocumentProcedureWhereInput): BatchPayload!
  upsertDocumentProcedure(where: DocumentProcedureWhereUniqueInput!, create: DocumentProcedureCreateInput!, update: DocumentProcedureUpdateInput!): DocumentProcedure!
  deleteDocumentProcedure(where: DocumentProcedureWhereUniqueInput!): DocumentProcedure
  deleteManyDocumentProcedures(where: DocumentProcedureWhereInput): BatchPayload!
  createEntity(data: EntityCreateInput!): Entity!
  updateEntity(data: EntityUpdateInput!, where: EntityWhereUniqueInput!): Entity
  updateManyEntities(data: EntityUpdateInput!, where: EntityWhereInput): BatchPayload!
  upsertEntity(where: EntityWhereUniqueInput!, create: EntityCreateInput!, update: EntityUpdateInput!): Entity!
  deleteEntity(where: EntityWhereUniqueInput!): Entity
  deleteManyEntities(where: EntityWhereInput): BatchPayload!
  createEvaluationProcedure(data: EvaluationProcedureCreateInput!): EvaluationProcedure!
  updateEvaluationProcedure(data: EvaluationProcedureUpdateInput!, where: EvaluationProcedureWhereUniqueInput!): EvaluationProcedure
  updateManyEvaluationProcedures(data: EvaluationProcedureUpdateInput!, where: EvaluationProcedureWhereInput): BatchPayload!
  upsertEvaluationProcedure(where: EvaluationProcedureWhereUniqueInput!, create: EvaluationProcedureCreateInput!, update: EvaluationProcedureUpdateInput!): EvaluationProcedure!
  deleteEvaluationProcedure(where: EvaluationProcedureWhereUniqueInput!): EvaluationProcedure
  deleteManyEvaluationProcedures(where: EvaluationProcedureWhereInput): BatchPayload!
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createItemProcedure(data: ItemProcedureCreateInput!): ItemProcedure!
  updateItemProcedure(data: ItemProcedureUpdateInput!, where: ItemProcedureWhereUniqueInput!): ItemProcedure
  updateManyItemProcedures(data: ItemProcedureUpdateInput!, where: ItemProcedureWhereInput): BatchPayload!
  upsertItemProcedure(where: ItemProcedureWhereUniqueInput!, create: ItemProcedureCreateInput!, update: ItemProcedureUpdateInput!): ItemProcedure!
  deleteItemProcedure(where: ItemProcedureWhereUniqueInput!): ItemProcedure
  deleteManyItemProcedures(where: ItemProcedureWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createPartyEntity(data: PartyEntityCreateInput!): PartyEntity!
  updatePartyEntity(data: PartyEntityUpdateInput!, where: PartyEntityWhereUniqueInput!): PartyEntity
  updateManyPartyEntities(data: PartyEntityUpdateInput!, where: PartyEntityWhereInput): BatchPayload!
  upsertPartyEntity(where: PartyEntityWhereUniqueInput!, create: PartyEntityCreateInput!, update: PartyEntityUpdateInput!): PartyEntity!
  deletePartyEntity(where: PartyEntityWhereUniqueInput!): PartyEntity
  deleteManyPartyEntities(where: PartyEntityWhereInput): BatchPayload!
  createPartyMembership(data: PartyMembershipCreateInput!): PartyMembership!
  updatePartyMembership(data: PartyMembershipUpdateInput!, where: PartyMembershipWhereUniqueInput!): PartyMembership
  updateManyPartyMemberships(data: PartyMembershipUpdateInput!, where: PartyMembershipWhereInput): BatchPayload!
  upsertPartyMembership(where: PartyMembershipWhereUniqueInput!, create: PartyMembershipCreateInput!, update: PartyMembershipUpdateInput!): PartyMembership!
  deletePartyMembership(where: PartyMembershipWhereUniqueInput!): PartyMembership
  deleteManyPartyMemberships(where: PartyMembershipWhereInput): BatchPayload!
  createPerson(data: PersonCreateInput!): Person!
  updatePerson(data: PersonUpdateInput!, where: PersonWhereUniqueInput!): Person
  updateManyPersons(data: PersonUpdateInput!, where: PersonWhereInput): BatchPayload!
  upsertPerson(where: PersonWhereUniqueInput!, create: PersonCreateInput!, update: PersonUpdateInput!): Person!
  deletePerson(where: PersonWhereUniqueInput!): Person
  deleteManyPersons(where: PersonWhereInput): BatchPayload!
  createProcedure(data: ProcedureCreateInput!): Procedure!
  updateProcedure(data: ProcedureUpdateInput!, where: ProcedureWhereUniqueInput!): Procedure
  updateManyProcedures(data: ProcedureUpdateInput!, where: ProcedureWhereInput): BatchPayload!
  upsertProcedure(where: ProcedureWhereUniqueInput!, create: ProcedureCreateInput!, update: ProcedureUpdateInput!): Procedure!
  deleteProcedure(where: ProcedureWhereUniqueInput!): Procedure
  deleteManyProcedures(where: ProcedureWhereInput): BatchPayload!
  createPromotionProcedure(data: PromotionProcedureCreateInput!): PromotionProcedure!
  updatePromotionProcedure(data: PromotionProcedureUpdateInput!, where: PromotionProcedureWhereUniqueInput!): PromotionProcedure
  updateManyPromotionProcedures(data: PromotionProcedureUpdateInput!, where: PromotionProcedureWhereInput): BatchPayload!
  upsertPromotionProcedure(where: PromotionProcedureWhereUniqueInput!, create: PromotionProcedureCreateInput!, update: PromotionProcedureUpdateInput!): PromotionProcedure!
  deletePromotionProcedure(where: PromotionProcedureWhereUniqueInput!): PromotionProcedure
  deleteManyPromotionProcedures(where: PromotionProcedureWhereInput): BatchPayload!
  createStorage(data: StorageCreateInput!): Storage!
  updateStorage(data: StorageUpdateInput!, where: StorageWhereUniqueInput!): Storage
  updateManyStorages(data: StorageUpdateInput!, where: StorageWhereInput): BatchPayload!
  upsertStorage(where: StorageWhereUniqueInput!, create: StorageCreateInput!, update: StorageUpdateInput!): Storage!
  deleteStorage(where: StorageWhereUniqueInput!): Storage
  deleteManyStorages(where: StorageWhereInput): BatchPayload!
  createTransaction(data: TransactionCreateInput!): Transaction!
  updateTransaction(data: TransactionUpdateInput!, where: TransactionWhereUniqueInput!): Transaction
  updateManyTransactions(data: TransactionUpdateInput!, where: TransactionWhereInput): BatchPayload!
  upsertTransaction(where: TransactionWhereUniqueInput!, create: TransactionCreateInput!, update: TransactionUpdateInput!): Transaction!
  deleteTransaction(where: TransactionWhereUniqueInput!): Transaction
  deleteManyTransactions(where: TransactionWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVacation(data: VacationCreateInput!): Vacation!
  updateVacation(data: VacationUpdateInput!, where: VacationWhereUniqueInput!): Vacation
  updateManyVacations(data: VacationUpdateInput!, where: VacationWhereInput): BatchPayload!
  upsertVacation(where: VacationWhereUniqueInput!, create: VacationCreateInput!, update: VacationUpdateInput!): Vacation!
  deleteVacation(where: VacationWhereUniqueInput!): Vacation
  deleteManyVacations(where: VacationWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type PartyEntity {
  id: ID!
  name: String!
  fullName: String!
  startDate: DateTime
  endDate: DateTime
}

type PartyEntityConnection {
  pageInfo: PageInfo!
  edges: [PartyEntityEdge]!
  aggregate: AggregatePartyEntity!
}

input PartyEntityCreateInput {
  name: String!
  fullName: String!
  startDate: DateTime
  endDate: DateTime
}

input PartyEntityCreateOneInput {
  create: PartyEntityCreateInput
  connect: PartyEntityWhereUniqueInput
}

type PartyEntityEdge {
  node: PartyEntity!
  cursor: String!
}

enum PartyEntityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  fullName_ASC
  fullName_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PartyEntityPreviousValues {
  id: ID!
  name: String!
  fullName: String!
  startDate: DateTime
  endDate: DateTime
}

type PartyEntitySubscriptionPayload {
  mutation: MutationType!
  node: PartyEntity
  updatedFields: [String!]
  previousValues: PartyEntityPreviousValues
}

input PartyEntitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartyEntityWhereInput
  AND: [PartyEntitySubscriptionWhereInput!]
  OR: [PartyEntitySubscriptionWhereInput!]
  NOT: [PartyEntitySubscriptionWhereInput!]
}

input PartyEntityUpdateDataInput {
  name: String
  fullName: String
  startDate: DateTime
  endDate: DateTime
}

input PartyEntityUpdateInput {
  name: String
  fullName: String
  startDate: DateTime
  endDate: DateTime
}

input PartyEntityUpdateOneRequiredInput {
  create: PartyEntityCreateInput
  update: PartyEntityUpdateDataInput
  upsert: PartyEntityUpsertNestedInput
  connect: PartyEntityWhereUniqueInput
}

input PartyEntityUpsertNestedInput {
  update: PartyEntityUpdateDataInput!
  create: PartyEntityCreateInput!
}

input PartyEntityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  fullName: String
  fullName_not: String
  fullName_in: [String!]
  fullName_not_in: [String!]
  fullName_lt: String
  fullName_lte: String
  fullName_gt: String
  fullName_gte: String
  fullName_contains: String
  fullName_not_contains: String
  fullName_starts_with: String
  fullName_not_starts_with: String
  fullName_ends_with: String
  fullName_not_ends_with: String
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  AND: [PartyEntityWhereInput!]
  OR: [PartyEntityWhereInput!]
  NOT: [PartyEntityWhereInput!]
}

input PartyEntityWhereUniqueInput {
  id: ID
}

type PartyMembership {
  id: ID!
  name: String!
  preEnrollDate: DateTime!
  EnrollDate: DateTime!
  registerInDate: DateTime!
  registerOutDate: DateTime!
  membershipState: String!
  contact: Contact
  belongToEntity: PartyEntity!
}

type PartyMembershipConnection {
  pageInfo: PageInfo!
  edges: [PartyMembershipEdge]!
  aggregate: AggregatePartyMembership!
}

input PartyMembershipCreateInput {
  name: String!
  preEnrollDate: DateTime!
  EnrollDate: DateTime!
  registerInDate: DateTime!
  registerOutDate: DateTime!
  membershipState: String!
  contact: ContactCreateOneInput
  belongToEntity: PartyEntityCreateOneInput!
}

input PartyMembershipCreateOneInput {
  create: PartyMembershipCreateInput
  connect: PartyMembershipWhereUniqueInput
}

type PartyMembershipEdge {
  node: PartyMembership!
  cursor: String!
}

enum PartyMembershipOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  preEnrollDate_ASC
  preEnrollDate_DESC
  EnrollDate_ASC
  EnrollDate_DESC
  registerInDate_ASC
  registerInDate_DESC
  registerOutDate_ASC
  registerOutDate_DESC
  membershipState_ASC
  membershipState_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PartyMembershipPreviousValues {
  id: ID!
  name: String!
  preEnrollDate: DateTime!
  EnrollDate: DateTime!
  registerInDate: DateTime!
  registerOutDate: DateTime!
  membershipState: String!
}

type PartyMembershipSubscriptionPayload {
  mutation: MutationType!
  node: PartyMembership
  updatedFields: [String!]
  previousValues: PartyMembershipPreviousValues
}

input PartyMembershipSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartyMembershipWhereInput
  AND: [PartyMembershipSubscriptionWhereInput!]
  OR: [PartyMembershipSubscriptionWhereInput!]
  NOT: [PartyMembershipSubscriptionWhereInput!]
}

input PartyMembershipUpdateDataInput {
  name: String
  preEnrollDate: DateTime
  EnrollDate: DateTime
  registerInDate: DateTime
  registerOutDate: DateTime
  membershipState: String
  contact: ContactUpdateOneInput
  belongToEntity: PartyEntityUpdateOneRequiredInput
}

input PartyMembershipUpdateInput {
  name: String
  preEnrollDate: DateTime
  EnrollDate: DateTime
  registerInDate: DateTime
  registerOutDate: DateTime
  membershipState: String
  contact: ContactUpdateOneInput
  belongToEntity: PartyEntityUpdateOneRequiredInput
}

input PartyMembershipUpdateOneInput {
  create: PartyMembershipCreateInput
  update: PartyMembershipUpdateDataInput
  upsert: PartyMembershipUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: PartyMembershipWhereUniqueInput
}

input PartyMembershipUpsertNestedInput {
  update: PartyMembershipUpdateDataInput!
  create: PartyMembershipCreateInput!
}

input PartyMembershipWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  preEnrollDate: DateTime
  preEnrollDate_not: DateTime
  preEnrollDate_in: [DateTime!]
  preEnrollDate_not_in: [DateTime!]
  preEnrollDate_lt: DateTime
  preEnrollDate_lte: DateTime
  preEnrollDate_gt: DateTime
  preEnrollDate_gte: DateTime
  EnrollDate: DateTime
  EnrollDate_not: DateTime
  EnrollDate_in: [DateTime!]
  EnrollDate_not_in: [DateTime!]
  EnrollDate_lt: DateTime
  EnrollDate_lte: DateTime
  EnrollDate_gt: DateTime
  EnrollDate_gte: DateTime
  registerInDate: DateTime
  registerInDate_not: DateTime
  registerInDate_in: [DateTime!]
  registerInDate_not_in: [DateTime!]
  registerInDate_lt: DateTime
  registerInDate_lte: DateTime
  registerInDate_gt: DateTime
  registerInDate_gte: DateTime
  registerOutDate: DateTime
  registerOutDate_not: DateTime
  registerOutDate_in: [DateTime!]
  registerOutDate_not_in: [DateTime!]
  registerOutDate_lt: DateTime
  registerOutDate_lte: DateTime
  registerOutDate_gt: DateTime
  registerOutDate_gte: DateTime
  membershipState: String
  membershipState_not: String
  membershipState_in: [String!]
  membershipState_not_in: [String!]
  membershipState_lt: String
  membershipState_lte: String
  membershipState_gt: String
  membershipState_gte: String
  membershipState_contains: String
  membershipState_not_contains: String
  membershipState_starts_with: String
  membershipState_not_starts_with: String
  membershipState_ends_with: String
  membershipState_not_ends_with: String
  contact: ContactWhereInput
  belongToEntity: PartyEntityWhereInput
  AND: [PartyMembershipWhereInput!]
  OR: [PartyMembershipWhereInput!]
  NOT: [PartyMembershipWhereInput!]
}

input PartyMembershipWhereUniqueInput {
  id: ID
}

type Person {
  id: ID!
  name: String!
  gender: String!
  birthday: DateTime!
}

type PersonConnection {
  pageInfo: PageInfo!
  edges: [PersonEdge]!
  aggregate: AggregatePerson!
}

input PersonCreateInput {
  name: String!
  gender: String!
  birthday: DateTime!
}

type PersonEdge {
  node: Person!
  cursor: String!
}

enum PersonOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  gender_ASC
  gender_DESC
  birthday_ASC
  birthday_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PersonPreviousValues {
  id: ID!
  name: String!
  gender: String!
  birthday: DateTime!
}

type PersonSubscriptionPayload {
  mutation: MutationType!
  node: Person
  updatedFields: [String!]
  previousValues: PersonPreviousValues
}

input PersonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PersonWhereInput
  AND: [PersonSubscriptionWhereInput!]
  OR: [PersonSubscriptionWhereInput!]
  NOT: [PersonSubscriptionWhereInput!]
}

input PersonUpdateInput {
  name: String
  gender: String
  birthday: DateTime
}

input PersonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  gender: String
  gender_not: String
  gender_in: [String!]
  gender_not_in: [String!]
  gender_lt: String
  gender_lte: String
  gender_gt: String
  gender_gte: String
  gender_contains: String
  gender_not_contains: String
  gender_starts_with: String
  gender_not_starts_with: String
  gender_ends_with: String
  gender_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  AND: [PersonWhereInput!]
  OR: [PersonWhereInput!]
  NOT: [PersonWhereInput!]
}

input PersonWhereUniqueInput {
  id: ID
}

enum PriorityLevel {
  HIGH
  MIDDLE
  LOW
}

type Procedure {
  id: ID!
  name: String!
  startDate: DateTime!
  deadline: DateTime
  progress: Float
  color: String
  previousProcedure: Procedure
  nextProcedure: Procedure
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  documents(where: DocumentWhereInput, orderBy: DocumentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Document!]
  entities(where: EntityWhereInput, orderBy: EntityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entity!]
}

type ProcedureConnection {
  pageInfo: PageInfo!
  edges: [ProcedureEdge]!
  aggregate: AggregateProcedure!
}

input ProcedureCreateInput {
  name: String!
  startDate: DateTime!
  deadline: DateTime
  progress: Float
  color: String
  previousProcedure: ProcedureCreateOneWithoutPreviousProcedureInput
  nextProcedure: ProcedureCreateOneWithoutNextProcedureInput
  users: UserCreateManyInput
  documents: DocumentCreateManyInput
  entities: EntityCreateManyInput
}

input ProcedureCreateOneInput {
  create: ProcedureCreateInput
  connect: ProcedureWhereUniqueInput
}

input ProcedureCreateOneWithoutNextProcedureInput {
  create: ProcedureCreateWithoutNextProcedureInput
  connect: ProcedureWhereUniqueInput
}

input ProcedureCreateOneWithoutPreviousProcedureInput {
  create: ProcedureCreateWithoutPreviousProcedureInput
  connect: ProcedureWhereUniqueInput
}

input ProcedureCreateWithoutNextProcedureInput {
  name: String!
  startDate: DateTime!
  deadline: DateTime
  progress: Float
  color: String
  previousProcedure: ProcedureCreateOneWithoutPreviousProcedureInput
  users: UserCreateManyInput
  documents: DocumentCreateManyInput
  entities: EntityCreateManyInput
}

input ProcedureCreateWithoutPreviousProcedureInput {
  name: String!
  startDate: DateTime!
  deadline: DateTime
  progress: Float
  color: String
  nextProcedure: ProcedureCreateOneWithoutNextProcedureInput
  users: UserCreateManyInput
  documents: DocumentCreateManyInput
  entities: EntityCreateManyInput
}

type ProcedureEdge {
  node: Procedure!
  cursor: String!
}

enum ProcedureOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  startDate_ASC
  startDate_DESC
  deadline_ASC
  deadline_DESC
  progress_ASC
  progress_DESC
  color_ASC
  color_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProcedurePreviousValues {
  id: ID!
  name: String!
  startDate: DateTime!
  deadline: DateTime
  progress: Float
  color: String
}

type ProcedureSubscriptionPayload {
  mutation: MutationType!
  node: Procedure
  updatedFields: [String!]
  previousValues: ProcedurePreviousValues
}

input ProcedureSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProcedureWhereInput
  AND: [ProcedureSubscriptionWhereInput!]
  OR: [ProcedureSubscriptionWhereInput!]
  NOT: [ProcedureSubscriptionWhereInput!]
}

input ProcedureUpdateDataInput {
  name: String
  startDate: DateTime
  deadline: DateTime
  progress: Float
  color: String
  previousProcedure: ProcedureUpdateOneWithoutPreviousProcedureInput
  nextProcedure: ProcedureUpdateOneWithoutNextProcedureInput
  users: UserUpdateManyInput
  documents: DocumentUpdateManyInput
  entities: EntityUpdateManyInput
}

input ProcedureUpdateInput {
  name: String
  startDate: DateTime
  deadline: DateTime
  progress: Float
  color: String
  previousProcedure: ProcedureUpdateOneWithoutPreviousProcedureInput
  nextProcedure: ProcedureUpdateOneWithoutNextProcedureInput
  users: UserUpdateManyInput
  documents: DocumentUpdateManyInput
  entities: EntityUpdateManyInput
}

input ProcedureUpdateOneRequiredInput {
  create: ProcedureCreateInput
  update: ProcedureUpdateDataInput
  upsert: ProcedureUpsertNestedInput
  connect: ProcedureWhereUniqueInput
}

input ProcedureUpdateOneWithoutNextProcedureInput {
  create: ProcedureCreateWithoutNextProcedureInput
  update: ProcedureUpdateWithoutNextProcedureDataInput
  upsert: ProcedureUpsertWithoutNextProcedureInput
  delete: Boolean
  disconnect: Boolean
  connect: ProcedureWhereUniqueInput
}

input ProcedureUpdateOneWithoutPreviousProcedureInput {
  create: ProcedureCreateWithoutPreviousProcedureInput
  update: ProcedureUpdateWithoutPreviousProcedureDataInput
  upsert: ProcedureUpsertWithoutPreviousProcedureInput
  delete: Boolean
  disconnect: Boolean
  connect: ProcedureWhereUniqueInput
}

input ProcedureUpdateWithoutNextProcedureDataInput {
  name: String
  startDate: DateTime
  deadline: DateTime
  progress: Float
  color: String
  previousProcedure: ProcedureUpdateOneWithoutPreviousProcedureInput
  users: UserUpdateManyInput
  documents: DocumentUpdateManyInput
  entities: EntityUpdateManyInput
}

input ProcedureUpdateWithoutPreviousProcedureDataInput {
  name: String
  startDate: DateTime
  deadline: DateTime
  progress: Float
  color: String
  nextProcedure: ProcedureUpdateOneWithoutNextProcedureInput
  users: UserUpdateManyInput
  documents: DocumentUpdateManyInput
  entities: EntityUpdateManyInput
}

input ProcedureUpsertNestedInput {
  update: ProcedureUpdateDataInput!
  create: ProcedureCreateInput!
}

input ProcedureUpsertWithoutNextProcedureInput {
  update: ProcedureUpdateWithoutNextProcedureDataInput!
  create: ProcedureCreateWithoutNextProcedureInput!
}

input ProcedureUpsertWithoutPreviousProcedureInput {
  update: ProcedureUpdateWithoutPreviousProcedureDataInput!
  create: ProcedureCreateWithoutPreviousProcedureInput!
}

input ProcedureWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  deadline: DateTime
  deadline_not: DateTime
  deadline_in: [DateTime!]
  deadline_not_in: [DateTime!]
  deadline_lt: DateTime
  deadline_lte: DateTime
  deadline_gt: DateTime
  deadline_gte: DateTime
  progress: Float
  progress_not: Float
  progress_in: [Float!]
  progress_not_in: [Float!]
  progress_lt: Float
  progress_lte: Float
  progress_gt: Float
  progress_gte: Float
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  previousProcedure: ProcedureWhereInput
  nextProcedure: ProcedureWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  documents_every: DocumentWhereInput
  documents_some: DocumentWhereInput
  documents_none: DocumentWhereInput
  entities_every: EntityWhereInput
  entities_some: EntityWhereInput
  entities_none: EntityWhereInput
  AND: [ProcedureWhereInput!]
  OR: [ProcedureWhereInput!]
  NOT: [ProcedureWhereInput!]
}

input ProcedureWhereUniqueInput {
  id: ID
}

type PromotionProcedure {
  id: ID!
  previousRank: String!
  currentRank: String!
  promitionDate: DateTime!
  previousSalary: String!
  currentSalary: String!
  procedureState: Procedure!
}

type PromotionProcedureConnection {
  pageInfo: PageInfo!
  edges: [PromotionProcedureEdge]!
  aggregate: AggregatePromotionProcedure!
}

input PromotionProcedureCreateInput {
  previousRank: String!
  currentRank: String!
  promitionDate: DateTime!
  previousSalary: String!
  currentSalary: String!
  procedureState: ProcedureCreateOneInput!
}

type PromotionProcedureEdge {
  node: PromotionProcedure!
  cursor: String!
}

enum PromotionProcedureOrderByInput {
  id_ASC
  id_DESC
  previousRank_ASC
  previousRank_DESC
  currentRank_ASC
  currentRank_DESC
  promitionDate_ASC
  promitionDate_DESC
  previousSalary_ASC
  previousSalary_DESC
  currentSalary_ASC
  currentSalary_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PromotionProcedurePreviousValues {
  id: ID!
  previousRank: String!
  currentRank: String!
  promitionDate: DateTime!
  previousSalary: String!
  currentSalary: String!
}

type PromotionProcedureSubscriptionPayload {
  mutation: MutationType!
  node: PromotionProcedure
  updatedFields: [String!]
  previousValues: PromotionProcedurePreviousValues
}

input PromotionProcedureSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PromotionProcedureWhereInput
  AND: [PromotionProcedureSubscriptionWhereInput!]
  OR: [PromotionProcedureSubscriptionWhereInput!]
  NOT: [PromotionProcedureSubscriptionWhereInput!]
}

input PromotionProcedureUpdateInput {
  previousRank: String
  currentRank: String
  promitionDate: DateTime
  previousSalary: String
  currentSalary: String
  procedureState: ProcedureUpdateOneRequiredInput
}

input PromotionProcedureWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  previousRank: String
  previousRank_not: String
  previousRank_in: [String!]
  previousRank_not_in: [String!]
  previousRank_lt: String
  previousRank_lte: String
  previousRank_gt: String
  previousRank_gte: String
  previousRank_contains: String
  previousRank_not_contains: String
  previousRank_starts_with: String
  previousRank_not_starts_with: String
  previousRank_ends_with: String
  previousRank_not_ends_with: String
  currentRank: String
  currentRank_not: String
  currentRank_in: [String!]
  currentRank_not_in: [String!]
  currentRank_lt: String
  currentRank_lte: String
  currentRank_gt: String
  currentRank_gte: String
  currentRank_contains: String
  currentRank_not_contains: String
  currentRank_starts_with: String
  currentRank_not_starts_with: String
  currentRank_ends_with: String
  currentRank_not_ends_with: String
  promitionDate: DateTime
  promitionDate_not: DateTime
  promitionDate_in: [DateTime!]
  promitionDate_not_in: [DateTime!]
  promitionDate_lt: DateTime
  promitionDate_lte: DateTime
  promitionDate_gt: DateTime
  promitionDate_gte: DateTime
  previousSalary: String
  previousSalary_not: String
  previousSalary_in: [String!]
  previousSalary_not_in: [String!]
  previousSalary_lt: String
  previousSalary_lte: String
  previousSalary_gt: String
  previousSalary_gte: String
  previousSalary_contains: String
  previousSalary_not_contains: String
  previousSalary_starts_with: String
  previousSalary_not_starts_with: String
  previousSalary_ends_with: String
  previousSalary_not_ends_with: String
  currentSalary: String
  currentSalary_not: String
  currentSalary_in: [String!]
  currentSalary_not_in: [String!]
  currentSalary_lt: String
  currentSalary_lte: String
  currentSalary_gt: String
  currentSalary_gte: String
  currentSalary_contains: String
  currentSalary_not_contains: String
  currentSalary_starts_with: String
  currentSalary_not_starts_with: String
  currentSalary_ends_with: String
  currentSalary_not_ends_with: String
  procedureState: ProcedureWhereInput
  AND: [PromotionProcedureWhereInput!]
  OR: [PromotionProcedureWhereInput!]
  NOT: [PromotionProcedureWhereInput!]
}

input PromotionProcedureWhereUniqueInput {
  id: ID
}

type Query {
  activity(where: ActivityWhereUniqueInput!): Activity
  activities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity]!
  activitiesConnection(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityConnection!
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  article(where: ArticleWhereUniqueInput!): Article
  articles(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article]!
  articlesConnection(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArticleConnection!
  banquete(where: BanqueteWhereUniqueInput!): Banquete
  banquetes(where: BanqueteWhereInput, orderBy: BanqueteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Banquete]!
  banquetesConnection(where: BanqueteWhereInput, orderBy: BanqueteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BanqueteConnection!
  bussinessTrip(where: BussinessTripWhereUniqueInput!): BussinessTrip
  bussinessTrips(where: BussinessTripWhereInput, orderBy: BussinessTripOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BussinessTrip]!
  bussinessTripsConnection(where: BussinessTripWhereInput, orderBy: BussinessTripOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BussinessTripConnection!
  contact(where: ContactWhereUniqueInput!): Contact
  contacts(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contact]!
  contactsConnection(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactConnection!
  document(where: DocumentWhereUniqueInput!): Document
  documents(where: DocumentWhereInput, orderBy: DocumentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Document]!
  documentsConnection(where: DocumentWhereInput, orderBy: DocumentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DocumentConnection!
  documentProcedure(where: DocumentProcedureWhereUniqueInput!): DocumentProcedure
  documentProcedures(where: DocumentProcedureWhereInput, orderBy: DocumentProcedureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DocumentProcedure]!
  documentProceduresConnection(where: DocumentProcedureWhereInput, orderBy: DocumentProcedureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DocumentProcedureConnection!
  entity(where: EntityWhereUniqueInput!): Entity
  entities(where: EntityWhereInput, orderBy: EntityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entity]!
  entitiesConnection(where: EntityWhereInput, orderBy: EntityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EntityConnection!
  evaluationProcedure(where: EvaluationProcedureWhereUniqueInput!): EvaluationProcedure
  evaluationProcedures(where: EvaluationProcedureWhereInput, orderBy: EvaluationProcedureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EvaluationProcedure]!
  evaluationProceduresConnection(where: EvaluationProcedureWhereInput, orderBy: EvaluationProcedureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EvaluationProcedureConnection!
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  itemProcedure(where: ItemProcedureWhereUniqueInput!): ItemProcedure
  itemProcedures(where: ItemProcedureWhereInput, orderBy: ItemProcedureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ItemProcedure]!
  itemProceduresConnection(where: ItemProcedureWhereInput, orderBy: ItemProcedureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemProcedureConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  partyEntity(where: PartyEntityWhereUniqueInput!): PartyEntity
  partyEntities(where: PartyEntityWhereInput, orderBy: PartyEntityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartyEntity]!
  partyEntitiesConnection(where: PartyEntityWhereInput, orderBy: PartyEntityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyEntityConnection!
  partyMembership(where: PartyMembershipWhereUniqueInput!): PartyMembership
  partyMemberships(where: PartyMembershipWhereInput, orderBy: PartyMembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartyMembership]!
  partyMembershipsConnection(where: PartyMembershipWhereInput, orderBy: PartyMembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartyMembershipConnection!
  person(where: PersonWhereUniqueInput!): Person
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!
  procedure(where: ProcedureWhereUniqueInput!): Procedure
  procedures(where: ProcedureWhereInput, orderBy: ProcedureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Procedure]!
  proceduresConnection(where: ProcedureWhereInput, orderBy: ProcedureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProcedureConnection!
  promotionProcedure(where: PromotionProcedureWhereUniqueInput!): PromotionProcedure
  promotionProcedures(where: PromotionProcedureWhereInput, orderBy: PromotionProcedureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PromotionProcedure]!
  promotionProceduresConnection(where: PromotionProcedureWhereInput, orderBy: PromotionProcedureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PromotionProcedureConnection!
  storage(where: StorageWhereUniqueInput!): Storage
  storages(where: StorageWhereInput, orderBy: StorageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Storage]!
  storagesConnection(where: StorageWhereInput, orderBy: StorageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StorageConnection!
  transaction(where: TransactionWhereUniqueInput!): Transaction
  transactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction]!
  transactionsConnection(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TransactionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vacation(where: VacationWhereUniqueInput!): Vacation
  vacations(where: VacationWhereInput, orderBy: VacationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vacation]!
  vacationsConnection(where: VacationWhereInput, orderBy: VacationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VacationConnection!
  node(id: ID!): Node
}

enum Route {
  USA
  FRANCE
  SPAIN
  OTHER
}

type Storage {
  id: ID!
  storageName: String!
  guardName: User!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
}

type StorageConnection {
  pageInfo: PageInfo!
  edges: [StorageEdge]!
  aggregate: AggregateStorage!
}

input StorageCreateInput {
  storageName: String!
  guardName: UserCreateOneInput!
  items: ItemCreateManyInput
}

type StorageEdge {
  node: Storage!
  cursor: String!
}

enum StorageOrderByInput {
  id_ASC
  id_DESC
  storageName_ASC
  storageName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StoragePreviousValues {
  id: ID!
  storageName: String!
}

type StorageSubscriptionPayload {
  mutation: MutationType!
  node: Storage
  updatedFields: [String!]
  previousValues: StoragePreviousValues
}

input StorageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StorageWhereInput
  AND: [StorageSubscriptionWhereInput!]
  OR: [StorageSubscriptionWhereInput!]
  NOT: [StorageSubscriptionWhereInput!]
}

input StorageUpdateInput {
  storageName: String
  guardName: UserUpdateOneRequiredInput
  items: ItemUpdateManyInput
}

input StorageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  storageName: String
  storageName_not: String
  storageName_in: [String!]
  storageName_not_in: [String!]
  storageName_lt: String
  storageName_lte: String
  storageName_gt: String
  storageName_gte: String
  storageName_contains: String
  storageName_not_contains: String
  storageName_starts_with: String
  storageName_not_starts_with: String
  storageName_ends_with: String
  storageName_not_ends_with: String
  guardName: UserWhereInput
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  AND: [StorageWhereInput!]
  OR: [StorageWhereInput!]
  NOT: [StorageWhereInput!]
}

input StorageWhereUniqueInput {
  id: ID
}

type Subscription {
  activity(where: ActivitySubscriptionWhereInput): ActivitySubscriptionPayload
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  article(where: ArticleSubscriptionWhereInput): ArticleSubscriptionPayload
  banquete(where: BanqueteSubscriptionWhereInput): BanqueteSubscriptionPayload
  bussinessTrip(where: BussinessTripSubscriptionWhereInput): BussinessTripSubscriptionPayload
  contact(where: ContactSubscriptionWhereInput): ContactSubscriptionPayload
  document(where: DocumentSubscriptionWhereInput): DocumentSubscriptionPayload
  documentProcedure(where: DocumentProcedureSubscriptionWhereInput): DocumentProcedureSubscriptionPayload
  entity(where: EntitySubscriptionWhereInput): EntitySubscriptionPayload
  evaluationProcedure(where: EvaluationProcedureSubscriptionWhereInput): EvaluationProcedureSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  itemProcedure(where: ItemProcedureSubscriptionWhereInput): ItemProcedureSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  partyEntity(where: PartyEntitySubscriptionWhereInput): PartyEntitySubscriptionPayload
  partyMembership(where: PartyMembershipSubscriptionWhereInput): PartyMembershipSubscriptionPayload
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  procedure(where: ProcedureSubscriptionWhereInput): ProcedureSubscriptionPayload
  promotionProcedure(where: PromotionProcedureSubscriptionWhereInput): PromotionProcedureSubscriptionPayload
  storage(where: StorageSubscriptionWhereInput): StorageSubscriptionPayload
  transaction(where: TransactionSubscriptionWhereInput): TransactionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vacation(where: VacationSubscriptionWhereInput): VacationSubscriptionPayload
}

type Transaction {
  id: ID!
  name: String!
  place: String
  date: DateTime!
  description: String
  applicant: String!
  item: Item
  quantity: Int
  total: String!
  type: TransactionType!
  tags: [String!]!
}

type TransactionConnection {
  pageInfo: PageInfo!
  edges: [TransactionEdge]!
  aggregate: AggregateTransaction!
}

input TransactionCreateInput {
  name: String!
  place: String
  date: DateTime!
  description: String
  applicant: String!
  item: ItemCreateOneInput
  quantity: Int
  total: String!
  type: TransactionType!
  tags: TransactionCreatetagsInput
}

input TransactionCreatetagsInput {
  set: [String!]
}

type TransactionEdge {
  node: Transaction!
  cursor: String!
}

enum TransactionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  place_ASC
  place_DESC
  date_ASC
  date_DESC
  description_ASC
  description_DESC
  applicant_ASC
  applicant_DESC
  quantity_ASC
  quantity_DESC
  total_ASC
  total_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TransactionPreviousValues {
  id: ID!
  name: String!
  place: String
  date: DateTime!
  description: String
  applicant: String!
  quantity: Int
  total: String!
  type: TransactionType!
  tags: [String!]!
}

type TransactionSubscriptionPayload {
  mutation: MutationType!
  node: Transaction
  updatedFields: [String!]
  previousValues: TransactionPreviousValues
}

input TransactionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TransactionWhereInput
  AND: [TransactionSubscriptionWhereInput!]
  OR: [TransactionSubscriptionWhereInput!]
  NOT: [TransactionSubscriptionWhereInput!]
}

enum TransactionType {
  IN
  OUT
  OTHER
}

input TransactionUpdateInput {
  name: String
  place: String
  date: DateTime
  description: String
  applicant: String
  item: ItemUpdateOneInput
  quantity: Int
  total: String
  type: TransactionType
  tags: TransactionUpdatetagsInput
}

input TransactionUpdatetagsInput {
  set: [String!]
}

input TransactionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  place: String
  place_not: String
  place_in: [String!]
  place_not_in: [String!]
  place_lt: String
  place_lte: String
  place_gt: String
  place_gte: String
  place_contains: String
  place_not_contains: String
  place_starts_with: String
  place_not_starts_with: String
  place_ends_with: String
  place_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  applicant: String
  applicant_not: String
  applicant_in: [String!]
  applicant_not_in: [String!]
  applicant_lt: String
  applicant_lte: String
  applicant_gt: String
  applicant_gte: String
  applicant_contains: String
  applicant_not_contains: String
  applicant_starts_with: String
  applicant_not_starts_with: String
  applicant_ends_with: String
  applicant_not_ends_with: String
  item: ItemWhereInput
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  total: String
  total_not: String
  total_in: [String!]
  total_not_in: [String!]
  total_lt: String
  total_lte: String
  total_gt: String
  total_gte: String
  total_contains: String
  total_not_contains: String
  total_starts_with: String
  total_not_starts_with: String
  total_ends_with: String
  total_not_ends_with: String
  type: TransactionType
  type_not: TransactionType
  type_in: [TransactionType!]
  type_not_in: [TransactionType!]
  AND: [TransactionWhereInput!]
  OR: [TransactionWhereInput!]
  NOT: [TransactionWhereInput!]
}

input TransactionWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  protocolId: String
  name: String!
  gender: String!
  position: String
  etnia: String!
  birthday: DateTime!
  academicBackground: String
  foreignLanguage: String
  politicalRole: String
  rank: String
  promotionDate: DateTime
  outRole: String
  innerRole: String
  chargeOf: String
  sendingEntity: String
  arrivingDate: DateTime
  leavingDate: DateTime
  fromEntity: String
  memo: String
  contact: Contact
  partyMembership: PartyMembership
  documents(where: DocumentWhereInput, orderBy: DocumentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Document!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  protocolId: String
  name: String!
  gender: String!
  position: String
  etnia: String!
  birthday: DateTime!
  academicBackground: String
  foreignLanguage: String
  politicalRole: String
  rank: String
  promotionDate: DateTime
  outRole: String
  innerRole: String
  chargeOf: String
  sendingEntity: String
  arrivingDate: DateTime
  leavingDate: DateTime
  fromEntity: String
  memo: String
  contact: ContactCreateOneInput
  partyMembership: PartyMembershipCreateOneInput
  documents: DocumentCreateManyWithoutAuthorInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutDocumentsInput {
  create: UserCreateWithoutDocumentsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutDocumentsInput {
  protocolId: String
  name: String!
  gender: String!
  position: String
  etnia: String!
  birthday: DateTime!
  academicBackground: String
  foreignLanguage: String
  politicalRole: String
  rank: String
  promotionDate: DateTime
  outRole: String
  innerRole: String
  chargeOf: String
  sendingEntity: String
  arrivingDate: DateTime
  leavingDate: DateTime
  fromEntity: String
  memo: String
  contact: ContactCreateOneInput
  partyMembership: PartyMembershipCreateOneInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  protocolId_ASC
  protocolId_DESC
  name_ASC
  name_DESC
  gender_ASC
  gender_DESC
  position_ASC
  position_DESC
  etnia_ASC
  etnia_DESC
  birthday_ASC
  birthday_DESC
  academicBackground_ASC
  academicBackground_DESC
  foreignLanguage_ASC
  foreignLanguage_DESC
  politicalRole_ASC
  politicalRole_DESC
  rank_ASC
  rank_DESC
  promotionDate_ASC
  promotionDate_DESC
  outRole_ASC
  outRole_DESC
  innerRole_ASC
  innerRole_DESC
  chargeOf_ASC
  chargeOf_DESC
  sendingEntity_ASC
  sendingEntity_DESC
  arrivingDate_ASC
  arrivingDate_DESC
  leavingDate_ASC
  leavingDate_DESC
  fromEntity_ASC
  fromEntity_DESC
  memo_ASC
  memo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  protocolId: String
  name: String!
  gender: String!
  position: String
  etnia: String!
  birthday: DateTime!
  academicBackground: String
  foreignLanguage: String
  politicalRole: String
  rank: String
  promotionDate: DateTime
  outRole: String
  innerRole: String
  chargeOf: String
  sendingEntity: String
  arrivingDate: DateTime
  leavingDate: DateTime
  fromEntity: String
  memo: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  protocolId: String
  name: String
  gender: String
  position: String
  etnia: String
  birthday: DateTime
  academicBackground: String
  foreignLanguage: String
  politicalRole: String
  rank: String
  promotionDate: DateTime
  outRole: String
  innerRole: String
  chargeOf: String
  sendingEntity: String
  arrivingDate: DateTime
  leavingDate: DateTime
  fromEntity: String
  memo: String
  contact: ContactUpdateOneInput
  partyMembership: PartyMembershipUpdateOneInput
  documents: DocumentUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  protocolId: String
  name: String
  gender: String
  position: String
  etnia: String
  birthday: DateTime
  academicBackground: String
  foreignLanguage: String
  politicalRole: String
  rank: String
  promotionDate: DateTime
  outRole: String
  innerRole: String
  chargeOf: String
  sendingEntity: String
  arrivingDate: DateTime
  leavingDate: DateTime
  fromEntity: String
  memo: String
  contact: ContactUpdateOneInput
  partyMembership: PartyMembershipUpdateOneInput
  documents: DocumentUpdateManyWithoutAuthorInput
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutDocumentsInput {
  create: UserCreateWithoutDocumentsInput
  update: UserUpdateWithoutDocumentsDataInput
  upsert: UserUpsertWithoutDocumentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutDocumentsDataInput {
  protocolId: String
  name: String
  gender: String
  position: String
  etnia: String
  birthday: DateTime
  academicBackground: String
  foreignLanguage: String
  politicalRole: String
  rank: String
  promotionDate: DateTime
  outRole: String
  innerRole: String
  chargeOf: String
  sendingEntity: String
  arrivingDate: DateTime
  leavingDate: DateTime
  fromEntity: String
  memo: String
  contact: ContactUpdateOneInput
  partyMembership: PartyMembershipUpdateOneInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutDocumentsInput {
  update: UserUpdateWithoutDocumentsDataInput!
  create: UserCreateWithoutDocumentsInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  protocolId: String
  protocolId_not: String
  protocolId_in: [String!]
  protocolId_not_in: [String!]
  protocolId_lt: String
  protocolId_lte: String
  protocolId_gt: String
  protocolId_gte: String
  protocolId_contains: String
  protocolId_not_contains: String
  protocolId_starts_with: String
  protocolId_not_starts_with: String
  protocolId_ends_with: String
  protocolId_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  gender: String
  gender_not: String
  gender_in: [String!]
  gender_not_in: [String!]
  gender_lt: String
  gender_lte: String
  gender_gt: String
  gender_gte: String
  gender_contains: String
  gender_not_contains: String
  gender_starts_with: String
  gender_not_starts_with: String
  gender_ends_with: String
  gender_not_ends_with: String
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  etnia: String
  etnia_not: String
  etnia_in: [String!]
  etnia_not_in: [String!]
  etnia_lt: String
  etnia_lte: String
  etnia_gt: String
  etnia_gte: String
  etnia_contains: String
  etnia_not_contains: String
  etnia_starts_with: String
  etnia_not_starts_with: String
  etnia_ends_with: String
  etnia_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  academicBackground: String
  academicBackground_not: String
  academicBackground_in: [String!]
  academicBackground_not_in: [String!]
  academicBackground_lt: String
  academicBackground_lte: String
  academicBackground_gt: String
  academicBackground_gte: String
  academicBackground_contains: String
  academicBackground_not_contains: String
  academicBackground_starts_with: String
  academicBackground_not_starts_with: String
  academicBackground_ends_with: String
  academicBackground_not_ends_with: String
  foreignLanguage: String
  foreignLanguage_not: String
  foreignLanguage_in: [String!]
  foreignLanguage_not_in: [String!]
  foreignLanguage_lt: String
  foreignLanguage_lte: String
  foreignLanguage_gt: String
  foreignLanguage_gte: String
  foreignLanguage_contains: String
  foreignLanguage_not_contains: String
  foreignLanguage_starts_with: String
  foreignLanguage_not_starts_with: String
  foreignLanguage_ends_with: String
  foreignLanguage_not_ends_with: String
  politicalRole: String
  politicalRole_not: String
  politicalRole_in: [String!]
  politicalRole_not_in: [String!]
  politicalRole_lt: String
  politicalRole_lte: String
  politicalRole_gt: String
  politicalRole_gte: String
  politicalRole_contains: String
  politicalRole_not_contains: String
  politicalRole_starts_with: String
  politicalRole_not_starts_with: String
  politicalRole_ends_with: String
  politicalRole_not_ends_with: String
  rank: String
  rank_not: String
  rank_in: [String!]
  rank_not_in: [String!]
  rank_lt: String
  rank_lte: String
  rank_gt: String
  rank_gte: String
  rank_contains: String
  rank_not_contains: String
  rank_starts_with: String
  rank_not_starts_with: String
  rank_ends_with: String
  rank_not_ends_with: String
  promotionDate: DateTime
  promotionDate_not: DateTime
  promotionDate_in: [DateTime!]
  promotionDate_not_in: [DateTime!]
  promotionDate_lt: DateTime
  promotionDate_lte: DateTime
  promotionDate_gt: DateTime
  promotionDate_gte: DateTime
  outRole: String
  outRole_not: String
  outRole_in: [String!]
  outRole_not_in: [String!]
  outRole_lt: String
  outRole_lte: String
  outRole_gt: String
  outRole_gte: String
  outRole_contains: String
  outRole_not_contains: String
  outRole_starts_with: String
  outRole_not_starts_with: String
  outRole_ends_with: String
  outRole_not_ends_with: String
  innerRole: String
  innerRole_not: String
  innerRole_in: [String!]
  innerRole_not_in: [String!]
  innerRole_lt: String
  innerRole_lte: String
  innerRole_gt: String
  innerRole_gte: String
  innerRole_contains: String
  innerRole_not_contains: String
  innerRole_starts_with: String
  innerRole_not_starts_with: String
  innerRole_ends_with: String
  innerRole_not_ends_with: String
  chargeOf: String
  chargeOf_not: String
  chargeOf_in: [String!]
  chargeOf_not_in: [String!]
  chargeOf_lt: String
  chargeOf_lte: String
  chargeOf_gt: String
  chargeOf_gte: String
  chargeOf_contains: String
  chargeOf_not_contains: String
  chargeOf_starts_with: String
  chargeOf_not_starts_with: String
  chargeOf_ends_with: String
  chargeOf_not_ends_with: String
  sendingEntity: String
  sendingEntity_not: String
  sendingEntity_in: [String!]
  sendingEntity_not_in: [String!]
  sendingEntity_lt: String
  sendingEntity_lte: String
  sendingEntity_gt: String
  sendingEntity_gte: String
  sendingEntity_contains: String
  sendingEntity_not_contains: String
  sendingEntity_starts_with: String
  sendingEntity_not_starts_with: String
  sendingEntity_ends_with: String
  sendingEntity_not_ends_with: String
  arrivingDate: DateTime
  arrivingDate_not: DateTime
  arrivingDate_in: [DateTime!]
  arrivingDate_not_in: [DateTime!]
  arrivingDate_lt: DateTime
  arrivingDate_lte: DateTime
  arrivingDate_gt: DateTime
  arrivingDate_gte: DateTime
  leavingDate: DateTime
  leavingDate_not: DateTime
  leavingDate_in: [DateTime!]
  leavingDate_not_in: [DateTime!]
  leavingDate_lt: DateTime
  leavingDate_lte: DateTime
  leavingDate_gt: DateTime
  leavingDate_gte: DateTime
  fromEntity: String
  fromEntity_not: String
  fromEntity_in: [String!]
  fromEntity_not_in: [String!]
  fromEntity_lt: String
  fromEntity_lte: String
  fromEntity_gt: String
  fromEntity_gte: String
  fromEntity_contains: String
  fromEntity_not_contains: String
  fromEntity_starts_with: String
  fromEntity_not_starts_with: String
  fromEntity_ends_with: String
  fromEntity_not_ends_with: String
  memo: String
  memo_not: String
  memo_in: [String!]
  memo_not_in: [String!]
  memo_lt: String
  memo_lte: String
  memo_gt: String
  memo_gte: String
  memo_contains: String
  memo_not_contains: String
  memo_starts_with: String
  memo_not_starts_with: String
  memo_ends_with: String
  memo_not_ends_with: String
  contact: ContactWhereInput
  partyMembership: PartyMembershipWhereInput
  documents_every: DocumentWhereInput
  documents_some: DocumentWhereInput
  documents_none: DocumentWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}

type Vacation {
  id: ID!
  applicant(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  startDate: DateTime!
  endDate: DateTime!
  routes: Route!
  type: VacationType!
  flightTicket: String!
  hotelRoom: String!
  transport: String!
}

type VacationConnection {
  pageInfo: PageInfo!
  edges: [VacationEdge]!
  aggregate: AggregateVacation!
}

input VacationCreateInput {
  applicant: UserCreateManyInput
  startDate: DateTime!
  endDate: DateTime!
  routes: Route!
  type: VacationType!
  flightTicket: String
  hotelRoom: String
  transport: String
}

type VacationEdge {
  node: Vacation!
  cursor: String!
}

enum VacationOrderByInput {
  id_ASC
  id_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  routes_ASC
  routes_DESC
  type_ASC
  type_DESC
  flightTicket_ASC
  flightTicket_DESC
  hotelRoom_ASC
  hotelRoom_DESC
  transport_ASC
  transport_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VacationPreviousValues {
  id: ID!
  startDate: DateTime!
  endDate: DateTime!
  routes: Route!
  type: VacationType!
  flightTicket: String!
  hotelRoom: String!
  transport: String!
}

type VacationSubscriptionPayload {
  mutation: MutationType!
  node: Vacation
  updatedFields: [String!]
  previousValues: VacationPreviousValues
}

input VacationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VacationWhereInput
  AND: [VacationSubscriptionWhereInput!]
  OR: [VacationSubscriptionWhereInput!]
  NOT: [VacationSubscriptionWhereInput!]
}

enum VacationType {
  ANUAL
  MISSION
  STUFF
  PUBLICHOLIDAY
  PRIVATE
  OTHER
}

input VacationUpdateInput {
  applicant: UserUpdateManyInput
  startDate: DateTime
  endDate: DateTime
  routes: Route
  type: VacationType
  flightTicket: String
  hotelRoom: String
  transport: String
}

input VacationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  applicant_every: UserWhereInput
  applicant_some: UserWhereInput
  applicant_none: UserWhereInput
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  routes: Route
  routes_not: Route
  routes_in: [Route!]
  routes_not_in: [Route!]
  type: VacationType
  type_not: VacationType
  type_in: [VacationType!]
  type_not_in: [VacationType!]
  flightTicket: String
  flightTicket_not: String
  flightTicket_in: [String!]
  flightTicket_not_in: [String!]
  flightTicket_lt: String
  flightTicket_lte: String
  flightTicket_gt: String
  flightTicket_gte: String
  flightTicket_contains: String
  flightTicket_not_contains: String
  flightTicket_starts_with: String
  flightTicket_not_starts_with: String
  flightTicket_ends_with: String
  flightTicket_not_ends_with: String
  hotelRoom: String
  hotelRoom_not: String
  hotelRoom_in: [String!]
  hotelRoom_not_in: [String!]
  hotelRoom_lt: String
  hotelRoom_lte: String
  hotelRoom_gt: String
  hotelRoom_gte: String
  hotelRoom_contains: String
  hotelRoom_not_contains: String
  hotelRoom_starts_with: String
  hotelRoom_not_starts_with: String
  hotelRoom_ends_with: String
  hotelRoom_not_ends_with: String
  transport: String
  transport_not: String
  transport_in: [String!]
  transport_not_in: [String!]
  transport_lt: String
  transport_lte: String
  transport_gt: String
  transport_gte: String
  transport_contains: String
  transport_not_contains: String
  transport_starts_with: String
  transport_not_starts_with: String
  transport_ends_with: String
  transport_not_ends_with: String
  AND: [VacationWhereInput!]
  OR: [VacationWhereInput!]
  NOT: [VacationWhereInput!]
}

input VacationWhereUniqueInput {
  id: ID
}
`