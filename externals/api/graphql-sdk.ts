import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  JSON: object | number | string | boolean | null;
  JSONObject: any;
};

export enum AccessCode {
  AssignStudent = 'ASSIGN_STUDENT',
  AssignTeacher = 'ASSIGN_TEACHER',
  EditContent = 'EDIT_CONTENT',
  ModerateSubmissions = 'MODERATE_SUBMISSIONS',
  ResolveActivity = 'RESOLVE_ACTIVITY',
  SetStats = 'SET_STATS',
  SurveySetStats = 'SURVEY_SET_STATS',
  ViewStudentData = 'VIEW_STUDENT_DATA'
}

export type Ack = {
  __typename?: 'Ack';
  count?: Maybe<Scalars['Float']>;
  ids?: Maybe<Array<Scalars['String']>>;
  info?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export enum ActivityType {
  Comment = 'COMMENT',
  Flag = 'FLAG',
  SubmissionErrors = 'SUBMISSION_ERRORS'
}

export type AdminActiveModules = {
  __typename?: 'AdminActiveModules';
  activeEvaluationFunctions: Scalars['Int'];
  activeModules: Scalars['Int'];
  activeParts: Scalars['Int'];
  activeQuestions: Scalars['Int'];
  activeResponseAreas: Scalars['Int'];
  activeSets: Scalars['Int'];
};

export type AdminActiveModulesInput = {
  moduleId?: InputMaybe<Scalars['String']>;
};

export type AdminAssignFunctionCodesInput = {
  functionCodeIds: Array<Scalars['String']>;
  teacherRoleIds: Array<Scalars['String']>;
};

export type AdminAssignStudentsInput = {
  emails: Array<Scalars['String']>;
  moduleInstanceId: Scalars['String'];
  studentTagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type AdminAssignTeachersInput = {
  moduleInstanceId: Scalars['String'];
  teachers: Array<AdminModuleInstanceTeacherInput>;
};

export type AdminCloneModuleInstanceInput = {
  allowChatbot: Scalars['Boolean'];
  allowComments: Scalars['Boolean'];
  carryOverCommentSetting: Scalars['Boolean'];
  cloneFromModuleInstanceId: Scalars['String'];
  daysOffset: Scalars['Int'];
  endedAt: Scalars['DateTime'];
  includeUnpublishedQuestions: Scalars['Boolean'];
  name: Scalars['String'];
  publishCommentInstantly: Scalars['Boolean'];
  slug: Scalars['String'];
  startedAt: Scalars['DateTime'];
};

export type AdminConversationFlag = {
  __typename?: 'AdminConversationFlag';
  chatFunctionId: Scalars['String'];
  chatFunctionName: Scalars['String'];
  conversationId: Scalars['String'];
  flagDetails: Scalars['String'];
  flaggedAt: Scalars['DateTime'];
  id: Scalars['String'];
  messagePairId: Scalars['String'];
  moduleId: Scalars['String'];
  moduleInstanceId: Scalars['String'];
  moduleInstanceName: Scalars['String'];
  moduleInstanceSlug: Scalars['String'];
  moduleName: Scalars['String'];
  moduleSlug: Scalars['String'];
  questionId: Scalars['String'];
  questionName: Scalars['String'];
  questionNumber: Scalars['Int'];
  questionTitle: Scalars['String'];
  setId: Scalars['String'];
  setName: Scalars['String'];
  setNumber: Scalars['Int'];
  studentEmail: Scalars['String'];
};

export type AdminConversationFlags = {
  __typename?: 'AdminConversationFlags';
  edges: Array<AdminConversationFlag>;
  total: Scalars['Int'];
};

export type AdminConversationFlagsInput = {
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchAdminConversationFlagsFields>;
  sortFields?: InputMaybe<SortAdminConversationFlagsFields>;
  timeRangeType: Scalars['String'];
};

export type AdminConversationFlagsStatistics = {
  __typename?: 'AdminConversationFlagsStatistics';
  lastDay: Scalars['Int'];
  lastMonth: Scalars['Int'];
  lastWeek: Scalars['Int'];
  lastYear: Scalars['Int'];
  total: Scalars['Int'];
};

export type AdminCreateEvaluationFunctionInput = {
  docsContent?: InputMaybe<Scalars['String']>;
  includeDefaultTest: Scalars['Boolean'];
  name: Scalars['String'];
  paramsSchema?: InputMaybe<Scalars['JSON']>;
  remoteDocsUrl?: InputMaybe<Scalars['String']>;
  supportedTypes: Array<Scalars['String']>;
  tests: Array<AdminCreateFunctionTestInput>;
  url: Scalars['String'];
};

export type AdminCreateFunctionTestInput = {
  expectedResponse: Scalars['JSON'];
  payload: Scalars['JSON'];
};

export type AdminCreateGlobalTagInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tagOwnerEmail?: InputMaybe<Scalars['String']>;
  teacherEmails: Array<Scalars['String']>;
  type: GlobalTagType | `${GlobalTagType}`;
};

export type AdminCreateGlobalTagsInput = {
  globalTags: Array<AdminCreateGlobalTagInput>;
};

export type AdminCreateModuleInput = {
  assignCurrentUserAsOwner?: InputMaybe<Scalars['Boolean']>;
  description: Scalars['String'];
  endedAt: Scalars['DateTime'];
  instanceName: Scalars['String'];
  instanceSlug: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  startedAt: Scalars['DateTime'];
  teachers: Array<AdminModuleInstanceTeacherInput>;
  templateQuestionId?: InputMaybe<Scalars['String']>;
};

export type AdminCreateModuleInstanceInput = {
  endedAt: Scalars['DateTime'];
  moduleId: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  startedAt: Scalars['DateTime'];
  teachers: Array<AdminModuleInstanceTeacherInput>;
};

export type AdminCreateResponseTypeInput = {
  defaultEvaluationFunctionId?: InputMaybe<Scalars['String']>;
  defaultIncludeInPdf: Scalars['Boolean'];
  defaultLivePreview: Scalars['Boolean'];
  defaultSaveAllowed: Scalars['Boolean'];
  isSaveAllowedEditable: Scalars['Boolean'];
  type: Scalars['String'];
};

export type AdminCreateStudentsInput = {
  emails: Array<Scalars['String']>;
};

export type AdminCreateTeacherInput = {
  emails: Array<Scalars['String']>;
};

export type AdminCreateTeacherRoleInput = {
  description: Scalars['String'];
  functionCodeIds: Array<Scalars['String']>;
};

export type AdminCreateTemplateQuestionInput = {
  displayChatbot: Scalars['Boolean'];
  displayFinalAnswer: Scalars['Boolean'];
  displayStructuredTutorial: Scalars['Boolean'];
  displayWorkedSolution: Scalars['Boolean'];
  durationLowerBound?: InputMaybe<Scalars['Int']>;
  durationUpperBound?: InputMaybe<Scalars['Int']>;
  generatePDF: Scalars['Boolean'];
  guidance?: InputMaybe<Scalars['String']>;
  isSurvey?: InputMaybe<Scalars['Boolean']>;
  masterContent?: InputMaybe<Scalars['String']>;
  parts: Array<TeacherCreatePartWithoutQuestionIdInput>;
  skill?: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
};

export type AdminDeleteGlobalTagInput = {
  id: Scalars['String'];
};

export type AdminDeleteQuestionInput = {
  questionId: Scalars['String'];
};

export type AdminDeleteTeacherInput = {
  email: Scalars['String'];
};

export type AdminDeleteTeacherRoleInput = {
  id: Scalars['String'];
};

export type AdminDemoteAdminInput = {
  userId: Scalars['String'];
};

export type AdminEvaluationFunction = {
  __typename?: 'AdminEvaluationFunction';
  deletedAt?: Maybe<Scalars['DateTime']>;
  docsContent?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  includeDefaultTest: Scalars['Boolean'];
  name: Scalars['String'];
  paramsSchema?: Maybe<Scalars['JSON']>;
  remoteDocsUrl?: Maybe<Scalars['String']>;
  supportedTypes: Array<Scalars['String']>;
  tests: Array<AdminEvaluationFunctionTest>;
  url: Scalars['String'];
};

export type AdminEvaluationFunctionConnection = {
  __typename?: 'AdminEvaluationFunctionConnection';
  edges: Array<AdminEvaluationFunction>;
  total: Scalars['Int'];
};

export type AdminEvaluationFunctionError = {
  __typename?: 'AdminEvaluationFunctionError';
  moduleId: Scalars['String'];
  moduleInstanceId: Scalars['String'];
  moduleInstanceSlug: Scalars['String'];
  moduleName: Scalars['String'];
  questionId: Scalars['String'];
  questionNumber: Scalars['Int'];
  questionTitle: Scalars['String'];
  setId: Scalars['String'];
  setName: Scalars['String'];
};

export type AdminEvaluationFunctionErrors = {
  __typename?: 'AdminEvaluationFunctionErrors';
  edges: Array<AdminEvaluationFunctionError>;
  total: Scalars['Int'];
};

export type AdminEvaluationFunctionErrorsInput = {
  evaluationFunctionId: Scalars['String'];
  feedback?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  rawResponse: Scalars['JSON'];
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchAdminFunctionErrorsFields>;
  sortFields?: InputMaybe<SortAdminFunctionErrorsFields>;
  timeRangeType: Scalars['String'];
};

export type AdminEvaluationFunctionGroupedError = {
  __typename?: 'AdminEvaluationFunctionGroupedError';
  errorCount: Scalars['Int'];
  feedback?: Maybe<Scalars['String']>;
  rawResponse: Scalars['JSON'];
  rowId: Scalars['String'];
};

export type AdminEvaluationFunctionGroupedErrors = {
  __typename?: 'AdminEvaluationFunctionGroupedErrors';
  edges: Array<AdminEvaluationFunctionGroupedError>;
  evaluationFunctionId: Scalars['String'];
  evaluationFunctionName?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
};

export type AdminEvaluationFunctionGroupedErrorsInput = {
  evaluationFunctionId: Scalars['String'];
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchAdminFunctionGroupedErrorsFields>;
  sortFields?: InputMaybe<SortAdminFunctionGroupedErrorsFields>;
  timeRangeType: Scalars['String'];
};

export type AdminEvaluationFunctionTest = {
  __typename?: 'AdminEvaluationFunctionTest';
  expectedResponse: Scalars['JSON'];
  id: Scalars['String'];
  payload: Scalars['JSON'];
};

export type AdminEvaluationFunctionsInput = {
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchAdminFunctionFields>;
  sortFields?: InputMaybe<SortAdminFunctionFields>;
};

export type AdminEvaluationFunctionsStatistic = {
  __typename?: 'AdminEvaluationFunctionsStatistic';
  errorCount: Scalars['Int'];
  errorCountLastDay: Scalars['Int'];
  errorCountLastMonth: Scalars['Int'];
  errorCountLastWeek: Scalars['Int'];
  errorCountLastYear: Scalars['Int'];
  id: Scalars['String'];
  name: Scalars['String'];
  responseAreaCount: Scalars['Int'];
  submissionCount: Scalars['Int'];
};

export type AdminEvaluationFunctionsStatistics = {
  __typename?: 'AdminEvaluationFunctionsStatistics';
  edges: Array<AdminEvaluationFunctionsStatistic>;
  total: Scalars['Int'];
};

export type AdminEvaluationFunctionsStatisticsInput = {
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchAdminFunctionStatisticsFields>;
  sortFields?: InputMaybe<SortAdminFunctionStatisticsFields>;
};

export type AdminEventTypeUserAccess = {
  __typename?: 'AdminEventTypeUserAccess';
  eventAccessType: Scalars['String'];
  eventUserAccess: Array<AdminEventUserAccess>;
};

export type AdminEventUserAccess = {
  __typename?: 'AdminEventUserAccess';
  accessCount: Scalars['Int'];
  timePartNumber: Scalars['String'];
};

export type AdminFindGlobalTagsInput = {
  names: Array<Scalars['String']>;
};

export type AdminGetGlobalTagInput = {
  id: Scalars['String'];
};

export type AdminGetUserInput = {
  id: Scalars['String'];
};

export type AdminGlobalTagPerUserInput = {
  email: Scalars['String'];
  globalTagIds: Array<Scalars['String']>;
};

export type AdminGlobalTagsInput = {
  globalTagIds: Array<Scalars['String']>;
  userIds: Array<Scalars['String']>;
};

export type AdminGlobalTagsPerUsersInput = {
  globalTagsPerUser: Array<AdminGlobalTagPerUserInput>;
};

export type AdminGlobalTagsStatus = {
  __typename?: 'AdminGlobalTagsStatus';
  globalTagsStatus: Array<GlobalTagStatus>;
};

export type AdminJob = {
  __typename?: 'AdminJob';
  cancelledByUserEmail?: Maybe<Scalars['String']>;
  cancelledByUserId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdByUserEmail: Scalars['String'];
  createdByUserId: Scalars['String'];
  errorMessage?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  jobStatus: JobStatus | `${JobStatus}`;
  metadata: Scalars['JSON'];
  startedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminJobInstanceModuleRollover = {
  __typename?: 'AdminJobInstanceModuleRollover';
  errorMessage?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  jobInstanceStatus: JobInstanceStatus | `${JobInstanceStatus}`;
  moduleId: Scalars['String'];
  moduleSlug: Scalars['String'];
  sourceModuleInstanceId: Scalars['String'];
  sourceModuleInstanceSlug: Scalars['String'];
  startedAt?: Maybe<Scalars['DateTime']>;
  targetModuleInstanceId?: Maybe<Scalars['String']>;
  targetModuleInstanceSlug?: Maybe<Scalars['String']>;
};

export type AdminJobModuleRolloverWithInstances = {
  __typename?: 'AdminJobModuleRolloverWithInstances';
  allowChatbot?: Maybe<Scalars['Boolean']>;
  allowComments?: Maybe<Scalars['Boolean']>;
  cancelledByUserEmail?: Maybe<Scalars['String']>;
  cancelledByUserId?: Maybe<Scalars['String']>;
  carryOverCommentSetting?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  createdByUserEmail: Scalars['String'];
  createdByUserId: Scalars['String'];
  daysOffset?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  includeUnpublishedQuestions?: Maybe<Scalars['Boolean']>;
  jobStatus: JobStatus | `${JobStatus}`;
  metadata: Scalars['JSON'];
  moduleRolloverJobInstances: Array<AdminJobInstanceModuleRollover>;
  newEndedAt?: Maybe<Scalars['DateTime']>;
  newName?: Maybe<Scalars['String']>;
  newSlug?: Maybe<Scalars['String']>;
  newStartedAt?: Maybe<Scalars['DateTime']>;
  publishCommentInstantly?: Maybe<Scalars['Boolean']>;
  startedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminMessagePairCount = {
  __typename?: 'AdminMessagePairCount';
  chatFunctionId: Scalars['String'];
  chatFunctionName: Scalars['String'];
  count: Scalars['Int'];
  id: Scalars['String'];
  moduleId: Scalars['String'];
  moduleInstanceId: Scalars['String'];
  moduleInstanceName: Scalars['String'];
  moduleName: Scalars['String'];
  questionId: Scalars['String'];
  questionName: Scalars['String'];
  questionNumber: Scalars['Int'];
  questionTitle: Scalars['String'];
  setId: Scalars['String'];
  setName: Scalars['String'];
  setNumber: Scalars['Int'];
  setTitle: Scalars['String'];
  userCount: Scalars['Int'];
};

export type AdminMessagePairCountInput = {
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchAdminMessagePairCountFields>;
  sortFields?: InputMaybe<SortAdminMessagePairCountFields>;
  timeRangeType: Scalars['String'];
};

export type AdminMessagePairCountStatistics = {
  __typename?: 'AdminMessagePairCountStatistics';
  lastDay: Scalars['Int'];
  lastMonth: Scalars['Int'];
  lastWeek: Scalars['Int'];
  lastYear: Scalars['Int'];
  total: Scalars['Int'];
};

export type AdminMessagePairCounts = {
  __typename?: 'AdminMessagePairCounts';
  edges: Array<AdminMessagePairCount>;
  total: Scalars['Int'];
  totalCounts: Scalars['Int'];
};

export type AdminModule = {
  __typename?: 'AdminModule';
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  numberOfModuleInstances: Scalars['Int'];
  slug: Scalars['String'];
};

export type AdminModuleConnection = {
  __typename?: 'AdminModuleConnection';
  edges: Array<AdminModule>;
  total: Scalars['Int'];
};

export type AdminModuleInstance = {
  __typename?: 'AdminModuleInstance';
  allowChatbot: Scalars['Boolean'];
  allowComments: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  endedAt: Scalars['DateTime'];
  id: Scalars['String'];
  moduleId: Scalars['String'];
  moduleName: Scalars['String'];
  moduleSlug: Scalars['String'];
  name: Scalars['String'];
  publishCommentInstantly: Scalars['Boolean'];
  slug: Scalars['String'];
  startedAt: Scalars['DateTime'];
  teachers: Array<AdminModuleTeacher>;
};


export type AdminModuleInstanceTeachersArgs = {
  inputTeachers: AdminModuleInstanceTeachersInput;
};

export type AdminModuleInstanceConnection = {
  __typename?: 'AdminModuleInstanceConnection';
  edges: Array<AdminModuleInstance>;
  total: Scalars['Int'];
};

export type AdminModuleInstanceTeacherInput = {
  email: Scalars['String'];
  teacherRoleId: Scalars['String'];
};

export type AdminModuleInstanceTeachersInput = {
  searchFields?: InputMaybe<SearchAdminModuleInstanceTeachersFields>;
  sortFields?: InputMaybe<SortAdminModuleInstanceTeachersFields>;
};

export type AdminModuleInstanceWithTeachers = {
  __typename?: 'AdminModuleInstanceWithTeachers';
  endedAt: Scalars['DateTime'];
  id: Scalars['String'];
  moduleId: Scalars['String'];
  moduleName: Scalars['String'];
  moduleSlug: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  startedAt: Scalars['DateTime'];
  teachers?: Maybe<Array<Teacher>>;
};

export type AdminModuleInstancesInput = {
  first: Scalars['Int'];
  moduleId: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchAdminModuleInstancesFields>;
  sortFields?: InputMaybe<SortAdminModuleInstancesFields>;
};

export type AdminModuleTeacher = {
  __typename?: 'AdminModuleTeacher';
  email: Scalars['String'];
  id: Scalars['String'];
  isSuperAdmin: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  recapSchedule: RecapSchedule | `${RecapSchedule}`;
  role: UserRole | `${UserRole}`;
  teacherRoleId: Scalars['String'];
};

export type AdminModulesInput = {
  sortFields?: InputMaybe<SortAdminModulesFields>;
};

export type AdminPart = {
  __typename?: 'AdminPart';
  answerContent?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  responseAreas: Array<TeacherResponseArea>;
  tutorial: Array<StructuredContent>;
  universalPartId: Scalars['String'];
  workedSolution: Array<StructuredContent>;
};

export type AdminQuestion = {
  __typename?: 'AdminQuestion';
  createdAt: Scalars['DateTime'];
  displayChatbot: Scalars['Boolean'];
  displayFinalAnswer: Scalars['Boolean'];
  displayStructuredTutorial: Scalars['Boolean'];
  displayWorkedSolution: Scalars['Boolean'];
  durationLowerBound?: Maybe<Scalars['Int']>;
  durationUpperBound?: Maybe<Scalars['Int']>;
  guidance?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isSurvey: Scalars['Boolean'];
  masterContent?: Maybe<Scalars['String']>;
  number: Scalars['Int'];
  parts: Array<AdminPart>;
  skill?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  versionId: Scalars['String'];
};

export type AdminQuestionConnection = {
  __typename?: 'AdminQuestionConnection';
  edges: Array<AdminQuestion>;
  total: Scalars['Int'];
};

export type AdminRemoveEvaluationFunctionInput = {
  id: Scalars['String'];
};

export type AdminRemoveModuleInput = {
  id: Scalars['String'];
};

export type AdminRemoveModuleInstanceInput = {
  id: Scalars['String'];
};

export type AdminRemoveResponseTypeInput = {
  id: Scalars['String'];
};

export type AdminReplaceAndDeleteTeacherRoleInput = {
  deleteTeacherRoleId: Scalars['String'];
  replaceByTeacherRoleId: Scalars['String'];
};

export type AdminResponseType = {
  __typename?: 'AdminResponseType';
  defaultEvaluationFunctionId?: Maybe<Scalars['String']>;
  defaultEvaluationFunctionName?: Maybe<Scalars['String']>;
  defaultIncludeInPdf: Scalars['Boolean'];
  defaultLivePreview: Scalars['Boolean'];
  defaultSaveAllowed: Scalars['Boolean'];
  id: Scalars['String'];
  isSaveAllowedEditable: Scalars['Boolean'];
  supportedEvaluationFunctions: Array<SupportedEvaluationFunction>;
  type: Scalars['String'];
};

export type AdminResponseTypeConnection = {
  __typename?: 'AdminResponseTypeConnection';
  edges: Array<AdminResponseType>;
  total: Scalars['Int'];
};

export type AdminResponseTypesInput = {
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type AdminRestoreEvaluationFunctionInput = {
  id: Scalars['String'];
};

export type AdminRestoreModuleInput = {
  id: Scalars['String'];
};

export type AdminRestoreModuleInstanceInput = {
  id: Scalars['String'];
};

export type AdminRunJobModuleRollover = {
  __typename?: 'AdminRunJobModuleRollover';
  jobId: Scalars['String'];
};

export type AdminStudent = {
  __typename?: 'AdminStudent';
  email: Scalars['String'];
  globalTags: Array<GlobalTag>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type AdminStudentConnection = {
  __typename?: 'AdminStudentConnection';
  edges: Array<AdminStudent>;
  total: Scalars['Int'];
};

export type AdminStudentsInput = {
  searchFields?: InputMaybe<SearchAdminStudentsFields>;
  sortFields?: InputMaybe<SortAdminStudentsFields>;
};

export type AdminTeacher = {
  __typename?: 'AdminTeacher';
  email: Scalars['String'];
  id: Scalars['String'];
  moduleInstances: Array<AdminTeacherModuleInstance>;
  name?: Maybe<Scalars['String']>;
  recapSchedule: RecapSchedule | `${RecapSchedule}`;
  role: UserRole | `${UserRole}`;
  studentGlobalTags: Array<GlobalTag>;
  teacherGlobalTags: Array<AdminTeacherGlobalTag>;
};

export type AdminTeacherConnection = {
  __typename?: 'AdminTeacherConnection';
  edges: Array<AdminTeacher>;
  total: Scalars['Int'];
};

export type AdminTeacherDetails = {
  __typename?: 'AdminTeacherDetails';
  email: Scalars['String'];
  id: Scalars['String'];
  moduleInstances: Array<AdminTeacherModuleInstanceDetails>;
  name?: Maybe<Scalars['String']>;
  recapSchedule: RecapSchedule | `${RecapSchedule}`;
  role: UserRole | `${UserRole}`;
  studentGlobalTagIds: Array<Scalars['String']>;
  teacherGlobalTagIds: Array<Scalars['String']>;
};

export type AdminTeacherGlobalTag = {
  __typename?: 'AdminTeacherGlobalTag';
  id: Scalars['String'];
  isTagOwner: Scalars['Boolean'];
  name: Scalars['String'];
};

export type AdminTeacherModuleInstance = {
  __typename?: 'AdminTeacherModuleInstance';
  id: Scalars['String'];
  moduleId: Scalars['String'];
  moduleName: Scalars['String'];
  name: Scalars['String'];
  startedAt: Scalars['DateTime'];
};

export type AdminTeacherModuleInstanceDetails = {
  __typename?: 'AdminTeacherModuleInstanceDetails';
  endedAt: Scalars['DateTime'];
  globalTagIds: Array<Scalars['String']>;
  id: Scalars['String'];
  moduleId: Scalars['String'];
  moduleName: Scalars['String'];
  name: Scalars['String'];
  startedAt: Scalars['DateTime'];
  teacherRoleId?: Maybe<Scalars['String']>;
  tutorRoleId?: Maybe<Scalars['String']>;
};

export type AdminTeacherRole = {
  __typename?: 'AdminTeacherRole';
  description: Scalars['String'];
  id: Scalars['String'];
  moduleInstanceCount: Scalars['Int'];
  teacherCount: Scalars['Int'];
  teacherRoleType: TeacherRoleType | `${TeacherRoleType}`;
};

export type AdminTeachersInput = {
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchAdminTeachersFields>;
  sortFields?: InputMaybe<SortAdminTeachersFields>;
  userRoles: Array<UserRole | `${UserRole}`>;
};

export type AdminTenant = {
  __typename?: 'AdminTenant';
  defaultChatFunctionId?: Maybe<Scalars['String']>;
  defaultRecapSchedule: RecapSchedule | `${RecapSchedule}`;
  homePageBanner?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  signInBanner?: Maybe<Scalars['String']>;
  surveyDefaultHiddenAt?: Maybe<Scalars['DateTime']>;
  surveyDefaultReleasedAt?: Maybe<Scalars['DateTime']>;
  textEditor: TextEditor | `${TextEditor}`;
};

export type AdminUnassignTeacherInput = {
  moduleInstanceId: Scalars['String'];
  teacherId: Scalars['String'];
};

export type AdminUpdateAdminInput = {
  adminId: Scalars['String'];
  recapSchedule: Scalars['String'];
};

export type AdminUpdateEvaluationFunctionInput = {
  docsContent?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  includeDefaultTest?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  paramsSchema?: InputMaybe<Scalars['JSON']>;
  remoteDocsUrl?: InputMaybe<Scalars['String']>;
  supportedTypes?: InputMaybe<Array<Scalars['String']>>;
  tests?: InputMaybe<Array<AdminCreateFunctionTestInput>>;
  url?: InputMaybe<Scalars['String']>;
};

export type AdminUpdateGlobalTagInput = {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  tagOwnerEmail?: InputMaybe<Scalars['String']>;
  teacherEmails: Array<Scalars['String']>;
  type: GlobalTagType | `${GlobalTagType}`;
};

export type AdminUpdateGlobalTagsAssignmentsInput = {
  globalTagIds?: InputMaybe<Array<Scalars['String']>>;
  userId: Scalars['String'];
};

export type AdminUpdateModuleInput = {
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type AdminUpdateModuleInstanceInput = {
  endedAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  startedAt: Scalars['DateTime'];
};

export type AdminUpdateModuleInstanceTeacherRoleInput = {
  moduleInstanceId: Scalars['String'];
  teacherRoleId: Scalars['String'];
  userId: Scalars['String'];
};

export type AdminUpdateQuestionInput = {
  displayChatbot: Scalars['Boolean'];
  displayFinalAnswer: Scalars['Boolean'];
  displayStructuredTutorial: Scalars['Boolean'];
  displayWorkedSolution: Scalars['Boolean'];
  durationLowerBound?: InputMaybe<Scalars['Int']>;
  durationUpperBound?: InputMaybe<Scalars['Int']>;
  generatePDF: Scalars['Boolean'];
  guidance?: InputMaybe<Scalars['String']>;
  isSurvey?: InputMaybe<Scalars['Boolean']>;
  masterContent?: InputMaybe<Scalars['String']>;
  parts: Array<TeacherCreatePartWithoutQuestionIdInput>;
  questionId: Scalars['String'];
  skill?: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
};

export type AdminUpdateResponseTypeInput = {
  defaultEvaluationFunctionId?: InputMaybe<Scalars['String']>;
  defaultIncludeInPdf?: InputMaybe<Scalars['Boolean']>;
  defaultLivePreview?: InputMaybe<Scalars['Boolean']>;
  defaultSaveAllowed?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  isSaveAllowedEditable?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AdminUpdateTeacherInput = {
  recapSchedule: Scalars['String'];
  teacherId: Scalars['String'];
};

export type AdminUpdateTeacherRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  functionCodeIds: Array<Scalars['String']>;
  id: Scalars['String'];
};

export type AdminUpdateTenantInput = {
  defaultChatFunctionId?: InputMaybe<Scalars['String']>;
  defaultRecapSchedule: RecapSchedule | `${RecapSchedule}`;
  homePageBanner?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  signInBanner?: InputMaybe<Scalars['String']>;
  surveyDefaultHiddenAt?: InputMaybe<Scalars['DateTime']>;
  surveyDefaultReleasedAt?: InputMaybe<Scalars['DateTime']>;
  textEditor: TextEditor | `${TextEditor}`;
};

export type AdminUserAccessEvents = {
  __typename?: 'AdminUserAccessEvents';
  userAccessEvents: Array<AdminEventTypeUserAccess>;
};

export type AdminUserAccessEventsInput = {
  timeRangeType: TimeRangeType | `${TimeRangeType}`;
};

export type AdminUserNumbers = {
  __typename?: 'AdminUserNumbers';
  adminUsers: Scalars['Int'];
  studentUsers: Scalars['Int'];
  teacherUsers: Scalars['Int'];
  totalUsers: Scalars['Int'];
};

export type AdminUserNumbersInput = {
  moduleId?: InputMaybe<Scalars['String']>;
};

export type AdminUsersStatus = {
  __typename?: 'AdminUsersStatus';
  usersWithStatus: Array<UserWithStatus>;
};

export type AnalyticsEvent = {
  __typename?: 'AnalyticsEvent';
  success: Scalars['Boolean'];
};

export type BaseModuleInstance = {
  __typename?: 'BaseModuleInstance';
  endedAt: Scalars['DateTime'];
  id: Scalars['String'];
  isClosed: Scalars['Boolean'];
  moduleInstanceStats?: Maybe<ModuleInstanceStats>;
  name: Scalars['String'];
  slug: Scalars['String'];
  startedAt: Scalars['DateTime'];
};

export type BulkModerateSubmissionsInput = {
  submissionIds: Array<Scalars['String']>;
};

export type ButtonAnalyticsInput = {
  eventType: ButtonEventType | `${ButtonEventType}`;
  metadata?: InputMaybe<Scalars['JSON']>;
  partId?: InputMaybe<Scalars['String']>;
  universalPartId?: InputMaybe<Scalars['String']>;
};

export enum ButtonEventType {
  AudioPlay = 'AUDIO_PLAY',
  FaWarningCancel = 'FA_WARNING_CANCEL',
  FaWarningProceed = 'FA_WARNING_PROCEED',
  PartAnswer = 'PART_ANSWER',
  PartGuidance = 'PART_GUIDANCE',
  PartTutorial = 'PART_TUTORIAL',
  PartTutorialNext = 'PART_TUTORIAL_NEXT',
  PartTutorialPrevious = 'PART_TUTORIAL_PREVIOUS',
  PartTutorialShowAll = 'PART_TUTORIAL_SHOW_ALL',
  PartWorkedSolution = 'PART_WORKED_SOLUTION',
  PartWorkedSolutionNext = 'PART_WORKED_SOLUTION_NEXT',
  PartWorkedSolutionPrevious = 'PART_WORKED_SOLUTION_PREVIOUS',
  PartWorkedSolutionShowAll = 'PART_WORKED_SOLUTION_SHOW_ALL',
  StWarningCancel = 'ST_WARNING_CANCEL',
  StWarningProceed = 'ST_WARNING_PROCEED',
  SuggestTime = 'SUGGEST_TIME',
  WsWarningCancel = 'WS_WARNING_CANCEL',
  WsWarningProceed = 'WS_WARNING_PROCEED'
}

export type Canvas = {
  __typename?: 'Canvas';
  id: Scalars['String'];
  snapshot: Scalars['JSONObject'];
};

export type ChatFunctionDetails = {
  __typename?: 'ChatFunctionDetails';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  remoteDocsUrl?: Maybe<Scalars['String']>;
};

export type Column = {
  __typename?: 'Column';
  key: Scalars['String'];
  meta: ColumnMeta;
};

export type ColumnMeta = {
  __typename?: 'ColumnMeta';
  displayName: Scalars['String'];
  entityId?: Maybe<Scalars['String']>;
  shortDisplayName?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  canUserDelete: Scalars['Boolean'];
  comment: Scalars['String'];
  commentFeedback: CommentFeedback;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  createdByModuleTeacher: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedByUserId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges: Array<Comment>;
  total: Scalars['Int'];
};

export type CommentFeedback = {
  __typename?: 'CommentFeedback';
  canUserUpvote: Scalars['Boolean'];
  commentReactions?: Maybe<Array<CommentReaction>>;
  total: Scalars['Int'];
  userUpvoted: Scalars['Boolean'];
};

export type CommentReaction = {
  __typename?: 'CommentReaction';
  id: Scalars['String'];
  reaction?: Maybe<Scalars['String']>;
};

export type CommentsExist = {
  __typename?: 'CommentsExist';
  commentsExist: Scalars['Boolean'];
};

export type Conversation = {
  __typename?: 'Conversation';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  messagePairs: Array<MessagePair>;
  questionId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ConversationMessagePair = {
  __typename?: 'ConversationMessagePair';
  conversationId: Scalars['String'];
  conversationTitle?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  responseAt?: Maybe<Scalars['DateTime']>;
  responseMessage?: Maybe<Scalars['String']>;
  sentAt: Scalars['DateTime'];
  sentMessage: Scalars['String'];
};

export type CreateMessagePairInput = {
  chatFunctionId?: InputMaybe<Scalars['String']>;
  conversationId?: InputMaybe<Scalars['String']>;
  questionId: Scalars['String'];
  sentMessage: Scalars['String'];
};

export type CreateSignedImageInput = {
  contentType: Scalars['String'];
};

export type DeletedQuestion = {
  __typename?: 'DeletedQuestion';
  pdfError?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
};

export enum ExportFileType {
  Json = 'JSON',
  Pdf = 'PDF',
  Tex = 'TEX'
}

export enum FileDataContentType {
  Combined = 'COMBINED',
  Questions = 'QUESTIONS',
  Solutions = 'SOLUTIONS'
}

export type FilterArgs = {
  filterValue: Scalars['String'];
  operator: PrismaFilterOperatorString | `${PrismaFilterOperatorString}`;
};

export type FilterDateArgs = {
  filterValue: Scalars['DateTime'];
  operator: PrismaFilterOperatorDate | `${PrismaFilterOperatorDate}`;
};

export type FilterDropDownListArgs = {
  filterValue: Scalars['String'];
  operator: PrismaFilterOperatorDropDownList | `${PrismaFilterOperatorDropDownList}`;
};

export type FilterIsEmptyArgs = {
  filterValue: Scalars['String'];
  operator: PrismaFilterOperatorIsEmpty | `${PrismaFilterOperatorIsEmpty}`;
};

export type FilterNumberArgs = {
  filterValue: Scalars['Float'];
  operator: PrismaFilterOperatorNumber | `${PrismaFilterOperatorNumber}`;
};

export type FunctionCode = {
  __typename?: 'FunctionCode';
  code: AccessCode | `${AccessCode}`;
  description: Scalars['String'];
  id: Scalars['String'];
};

export type GetCanvasInput = {
  questionId: Scalars['String'];
};

export type GetConversationInput = {
  questionId: Scalars['String'];
};

export type GetNoteInput = {
  universalPartId: Scalars['String'];
};

export type GetSubmissionCountsInput = {
  moduleInstanceIds?: InputMaybe<Array<Scalars['String']>>;
  userIds?: InputMaybe<Array<Scalars['String']>>;
};

export type GetSubmissionDraftInput = {
  universalResponseAreaId: Scalars['String'];
};

export type GetSubmissionsInput = {
  methods?: InputMaybe<Array<SubmissionModerationMethod | `${SubmissionModerationMethod}`>>;
  moduleInstanceIds?: InputMaybe<Array<Scalars['String']>>;
  skip?: InputMaybe<Scalars['Int']>;
  sortFields?: InputMaybe<SortSubmissionsFields>;
  statuses?: InputMaybe<Array<SubmissionModerationStatus | `${SubmissionModerationStatus}`>>;
  take?: InputMaybe<Scalars['Int']>;
  userIds?: InputMaybe<Array<Scalars['String']>>;
};

export type GlobalTag = {
  __typename?: 'GlobalTag';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type GlobalTagStatus = {
  __typename?: 'GlobalTagStatus';
  id: Scalars['String'];
  name: Scalars['String'];
  similarExistingTags: Array<GlobalTag>;
  similarOtherNewTags: Array<GlobalTag>;
  status: TagStatus | `${TagStatus}`;
};

export enum GlobalTagType {
  Cohort = 'COHORT',
  Custom = 'CUSTOM',
  Pt = 'PT',
  St = 'ST'
}

export type GlobalTagWithDetails = {
  __typename?: 'GlobalTagWithDetails';
  id: Scalars['String'];
  name: Scalars['String'];
  tagOwnerEmail?: Maybe<Scalars['String']>;
  teacherEmails: Array<Scalars['String']>;
  type: GlobalTagType | `${GlobalTagType}`;
};

export type GraphStatistics = {
  __typename?: 'GraphStatistics';
  columns: Array<Column>;
  lines: Array<Line>;
};

export type InputSymbol = {
  __typename?: 'InputSymbol';
  aliases: Array<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isVisible: Scalars['Boolean'];
  symbol: Scalars['String'];
};

export type JobInput = {
  jobId: Scalars['String'];
};

export enum JobInstanceStatus {
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum JobStatus {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type Line = {
  __typename?: 'Line';
  data: Scalars['JSONObject'];
  key: Scalars['String'];
  meta: LineMeta;
};

export type LineMeta = {
  __typename?: 'LineMeta';
  displayName: Scalars['String'];
  entityId?: Maybe<Scalars['String']>;
  shortDisplayName?: Maybe<Scalars['String']>;
};

export type MarkCompletion = {
  __typename?: 'MarkCompletion';
  success: Scalars['Boolean'];
};

export type MarkCompletionInput = {
  checked: Scalars['Boolean'];
  partId: Scalars['String'];
  universalPartId: Scalars['String'];
};

export type MatchedCase = {
  __typename?: 'MatchedCase';
  color?: Maybe<Scalars['String']>;
  feedback: Scalars['String'];
  isCorrect: Scalars['Boolean'];
};

export type MathpixSessionResponse = {
  __typename?: 'MathpixSessionResponse';
  expiresAt: Scalars['Float'];
  token: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  post: MediaPost;
  url: Scalars['String'];
};

export type MediaPost = {
  __typename?: 'MediaPost';
  fields: Scalars['JSON'];
  url: Scalars['String'];
};

export type MessagePair = {
  __typename?: 'MessagePair';
  chatFunctionId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  responseAt?: Maybe<Scalars['DateTime']>;
  responseMessage?: Maybe<Scalars['String']>;
  sentAt: Scalars['DateTime'];
  sentMessage: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ModerationSubmission = {
  __typename?: 'ModerationSubmission';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  moderatedAt?: Maybe<Scalars['DateTime']>;
  moderatedBy?: Maybe<Scalars['String']>;
  moderationMethod?: Maybe<SubmissionModerationMethod | `${SubmissionModerationMethod}`>;
  moderationStatus?: Maybe<SubmissionModerationStatus | `${SubmissionModerationStatus}`>;
  moderatorEmail?: Maybe<Scalars['String']>;
  moderatorName?: Maybe<Scalars['String']>;
  moduleId: Scalars['String'];
  moduleInstanceId: Scalars['String'];
  moduleInstanceName: Scalars['String'];
  moduleInstanceSlug: Scalars['String'];
  moduleName: Scalars['String'];
  moduleSlug: Scalars['String'];
  partId: Scalars['String'];
  partIndex: Scalars['Float'];
  questionDisplayNumber: Scalars['Float'];
  questionId: Scalars['String'];
  questionTitle: Scalars['String'];
  responseAreaDisplayPosition: Scalars['Float'];
  responseAreaId: Scalars['String'];
  responseConfig?: Maybe<Scalars['JSON']>;
  responseType: Scalars['String'];
  setDisplayNumber: Scalars['Float'];
  setId: Scalars['String'];
  setName: Scalars['String'];
  subjects: Array<SetSubjectOutline>;
  submission?: Maybe<Scalars['JSON']>;
};

export type ModerationSubmissionConnection = {
  __typename?: 'ModerationSubmissionConnection';
  submissions: Array<ModerationSubmission>;
  total: Scalars['Int'];
};

export type ModularResponseInput = {
  answer: Scalars['JSON'];
  config?: InputMaybe<Scalars['JSON']>;
  responseType: Scalars['String'];
};

export type ModuleAccessStatisticsInput = {
  moduleInstanceId: Scalars['String'];
  studentGlobalTagIds?: InputMaybe<Array<Scalars['String']>>;
  studentTagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type ModuleError = {
  __typename?: 'ModuleError';
  code: ModuleErrorCode | `${ModuleErrorCode}`;
  message?: Maybe<Scalars['String']>;
};

export enum ModuleErrorCode {
  NotFound = 'NOT_FOUND'
}

export type ModuleGraphStatistics = {
  __typename?: 'ModuleGraphStatistics';
  graphStatistics: GraphStatistics;
  noOfStudents: Scalars['Int'];
};

export type ModuleInstanceStats = {
  __typename?: 'ModuleInstanceStats';
  setPreviews: Array<StudentSetPreview>;
  totalParts: Scalars['Int'];
  totalPartsCompleted: Scalars['Int'];
};

export type ModuleInstanceUserPreference = {
  __typename?: 'ModuleInstanceUserPreference';
  key: Scalars['String'];
  moduleInstanceId: Scalars['String'];
  value: Scalars['Boolean'];
};

export type ModuleInstanceUserPreferenceList = {
  __typename?: 'ModuleInstanceUserPreferenceList';
  edges: Array<ModuleInstanceUserPreference>;
  total: Scalars['Int'];
};

export enum ModuleStudentBinaryA {
  All = 'ALL',
  Have = 'HAVE',
  HaveNot = 'HAVE_NOT'
}

export enum ModuleStudentBinaryB {
  Accessed = 'ACCESSED',
  Completed = 'COMPLETED'
}

export type Mutation = {
  __typename?: 'Mutation';
  admin_assignFunctionCodes: Ack;
  admin_assignGlobalTagsToStudents: Ack;
  admin_assignGlobalTagsToTeachers: Ack;
  admin_assignStudents: Ack;
  admin_assignTeachers: AdminModuleInstanceWithTeachers;
  admin_bulkAssignGlobalTagsToStudents: Ack;
  admin_bulkAssignGlobalTagsToTeachers: Ack;
  admin_bulkUnassignGlobalTagsFromStudents: Ack;
  admin_bulkUnassignGlobalTagsFromTeachers: Ack;
  admin_cancelJob: Ack;
  admin_cloneModuleInstance: AdminModuleInstance;
  admin_createEvaluationFunction: AdminEvaluationFunction;
  admin_createGlobalTag: Ack;
  admin_createGlobalTags: Ack;
  admin_createModule: AdminModule;
  admin_createModuleInstance: AdminModuleInstanceWithTeachers;
  admin_createResponseType: AdminResponseType;
  admin_createSignedImage: Media;
  admin_createStudents: Ack;
  admin_createTeacherRole: Ack;
  admin_createTeachers: Ack;
  admin_createTemplateQuestion: AdminQuestion;
  admin_deleteEvaluationFunction: AdminEvaluationFunction;
  admin_deleteGlobalTag: Ack;
  admin_deleteModule: AdminModule;
  admin_deleteModuleInstance: AdminModuleInstance;
  admin_deleteQuestion: Ack;
  admin_deleteResponseType: AdminResponseType;
  admin_deleteTeacher: Ack;
  admin_deleteTeacherRole: Ack;
  admin_demoteAdmin: Ack;
  admin_replaceAndDeleteTeacherRole: Ack;
  admin_restoreEvaluationFunction: AdminEvaluationFunction;
  admin_restoreModule: AdminModule;
  admin_restoreModuleInstance: AdminModuleInstance;
  admin_runJobModuleRollover: AdminRunJobModuleRollover;
  admin_unassignFunctionCodes: Ack;
  admin_unassignTeacher: Ack;
  admin_updateAdmin: Ack;
  admin_updateEvaluationFunction: AdminEvaluationFunction;
  admin_updateGlobalTag: Ack;
  admin_updateGlobalTagsAssignmentsToStudents: Ack;
  admin_updateGlobalTagsAssignmentsToTeachers: Ack;
  admin_updateModule: AdminModule;
  admin_updateModuleInstance: AdminModuleInstance;
  admin_updateModuleInstanceTeacherRole: Ack;
  admin_updateQuestion: AdminQuestion;
  admin_updateResponseType: AdminResponseType;
  admin_updateTeacher: Ack;
  admin_updateTeacherRole: Ack;
  admin_updateTenant: AdminTenant;
  approveSubmission: Scalars['Boolean'];
  bulkApproveSubmissions: Scalars['Boolean'];
  bulkRejectSubmissions: Scalars['Boolean'];
  createConversationMessagePair?: Maybe<ConversationMessagePair>;
  getMathpixSession: MathpixSessionResponse;
  logButtonEvent: AnalyticsEvent;
  logLoginEvent: AnalyticsEvent;
  logPDFEvent: AnalyticsEvent;
  logQuestionAccessEvent: AnalyticsEvent;
  logSetAccessEvent: AnalyticsEvent;
  markCompletion: MarkCompletion;
  rejectSubmission: Scalars['Boolean'];
  student_createComment: Comment;
  student_createSignedImage: Media;
  student_deleteComment: Ack;
  student_demandSolutionsAccessStatus: StudentSolutionsAccessStatus;
  student_toggleCommentReaction: ToggleReaction;
  submitResponse: SubmissionResult;
  submitResponsePreview: SubmissionPreview;
  superadmin_assignAdmin: Ack;
  superadmin_removeAdmin: Ack;
  teacher_assignStudents: TeacherModuleInstance;
  teacher_assignStudentsTags: Ack;
  teacher_assignTeachers: Ack;
  teacher_cloneQuestion: TeacherQuestion;
  teacher_createComment: Comment;
  teacher_createModuleStudentTag: Ack;
  teacher_createQuestion: TeacherQuestion;
  teacher_createSet: TeacherSet;
  teacher_createSignedImage: Media;
  teacher_deleteComment: Ack;
  teacher_deleteModuleStudentTag: Ack;
  teacher_deleteQuestion: DeletedQuestion;
  teacher_deleteSet: Ack;
  teacher_exportQuestion: TeacherDataExport;
  teacher_exportSet: TeacherDataExport;
  teacher_exportSetAsPdf: TeacherExportSetAsPdf;
  teacher_getGuidanceTime: TeacherGuidanceTimeResponse;
  teacher_importQuestions: TeacherQuestionsImport;
  teacher_importSet: TeacherSetImport;
  teacher_moduleInstanceResolveActivities: Ack;
  teacher_moduleInstanceResolveActivity: Ack;
  teacher_moduleInstanceResolveFlags: Ack;
  teacher_publishComment: Ack;
  teacher_publishQuestions: TeacherQuestionsPublish;
  teacher_questionSetVisibility: TeacherQuestion;
  teacher_removeStudent: Ack;
  teacher_removeStudents: Ack;
  teacher_reorderQuestions: Ack;
  teacher_reorderSets: Array<TeacherSet>;
  teacher_retrieveModuleInstanceActivities: TeacherModuleInstanceActivityConnection;
  teacher_retrieveModuleInstanceErrors: TeacherModuleInstanceErrorConnection;
  teacher_retrieveModuleInstanceFlags: TeacherModuleInstanceFlagConnection;
  teacher_revertToQuestionVersion: TeacherQuestion;
  teacher_rollbackToVersion: TeacherQuestion;
  teacher_saveImportedQuestions: TeacherImportedQuestionsSaved;
  teacher_setQuestionVisibility: TeacherQuestion;
  teacher_setSetVisibility: TeacherSet;
  teacher_submitTest: TeacherSubmissionResponse;
  teacher_testSubmissionResponsePreview: SubmissionPreview;
  teacher_toggleCommentReaction: ToggleReaction;
  teacher_unassignStudentsTags: Ack;
  teacher_unassignTeacher: Ack;
  teacher_updateModuleInstance: TeacherModuleInstance;
  teacher_updateModuleInstanceTeacherRole: Ack;
  teacher_updateModuleStudentTag: Ack;
  teacher_updateQuestion: TeacherQuestion;
  teacher_updateQuestionDraft: TeacherQuestion;
  teacher_updateQuestionSettings: Ack;
  teacher_updateSet: TeacherSet;
  teacher_updateSetsHeader: Ack;
  teacher_updateStudentTagAssignments: Ack;
  toggleReaction: ToggleReaction;
  toggleTimingReaction: ToggleReaction;
  updateUserSettings: Ack;
  upsertCanvas?: Maybe<Canvas>;
  upsertNote?: Maybe<Note>;
  upsertSubmissionDraft?: Maybe<SubmissionDraft>;
};


export type MutationAdmin_AssignFunctionCodesArgs = {
  input: AdminAssignFunctionCodesInput;
};


export type MutationAdmin_AssignGlobalTagsToStudentsArgs = {
  input: AdminGlobalTagsPerUsersInput;
};


export type MutationAdmin_AssignGlobalTagsToTeachersArgs = {
  input: AdminGlobalTagsPerUsersInput;
};


export type MutationAdmin_AssignStudentsArgs = {
  input: AdminAssignStudentsInput;
};


export type MutationAdmin_AssignTeachersArgs = {
  input: AdminAssignTeachersInput;
};


export type MutationAdmin_BulkAssignGlobalTagsToStudentsArgs = {
  input: AdminGlobalTagsInput;
};


export type MutationAdmin_BulkAssignGlobalTagsToTeachersArgs = {
  input: AdminGlobalTagsInput;
};


export type MutationAdmin_BulkUnassignGlobalTagsFromStudentsArgs = {
  input: AdminGlobalTagsInput;
};


export type MutationAdmin_BulkUnassignGlobalTagsFromTeachersArgs = {
  input: AdminGlobalTagsInput;
};


export type MutationAdmin_CancelJobArgs = {
  input: JobInput;
};


export type MutationAdmin_CloneModuleInstanceArgs = {
  input: AdminCloneModuleInstanceInput;
};


export type MutationAdmin_CreateEvaluationFunctionArgs = {
  input: AdminCreateEvaluationFunctionInput;
};


export type MutationAdmin_CreateGlobalTagArgs = {
  input: AdminCreateGlobalTagInput;
};


export type MutationAdmin_CreateGlobalTagsArgs = {
  input: AdminCreateGlobalTagsInput;
};


export type MutationAdmin_CreateModuleArgs = {
  input: AdminCreateModuleInput;
};


export type MutationAdmin_CreateModuleInstanceArgs = {
  input: AdminCreateModuleInstanceInput;
};


export type MutationAdmin_CreateResponseTypeArgs = {
  input: AdminCreateResponseTypeInput;
};


export type MutationAdmin_CreateSignedImageArgs = {
  input: CreateSignedImageInput;
};


export type MutationAdmin_CreateStudentsArgs = {
  input: AdminCreateStudentsInput;
};


export type MutationAdmin_CreateTeacherRoleArgs = {
  input: AdminCreateTeacherRoleInput;
};


export type MutationAdmin_CreateTeachersArgs = {
  input: AdminCreateTeacherInput;
};


export type MutationAdmin_CreateTemplateQuestionArgs = {
  input: AdminCreateTemplateQuestionInput;
};


export type MutationAdmin_DeleteEvaluationFunctionArgs = {
  input: AdminRemoveEvaluationFunctionInput;
};


export type MutationAdmin_DeleteGlobalTagArgs = {
  input: AdminDeleteGlobalTagInput;
};


export type MutationAdmin_DeleteModuleArgs = {
  input: AdminRemoveModuleInput;
};


export type MutationAdmin_DeleteModuleInstanceArgs = {
  input: AdminRemoveModuleInstanceInput;
};


export type MutationAdmin_DeleteQuestionArgs = {
  input: AdminDeleteQuestionInput;
};


export type MutationAdmin_DeleteResponseTypeArgs = {
  input: AdminRemoveResponseTypeInput;
};


export type MutationAdmin_DeleteTeacherArgs = {
  input: AdminDeleteTeacherInput;
};


export type MutationAdmin_DeleteTeacherRoleArgs = {
  input: AdminDeleteTeacherRoleInput;
};


export type MutationAdmin_DemoteAdminArgs = {
  input: AdminDemoteAdminInput;
};


export type MutationAdmin_ReplaceAndDeleteTeacherRoleArgs = {
  input: AdminReplaceAndDeleteTeacherRoleInput;
};


export type MutationAdmin_RestoreEvaluationFunctionArgs = {
  input: AdminRestoreEvaluationFunctionInput;
};


export type MutationAdmin_RestoreModuleArgs = {
  input: AdminRestoreModuleInput;
};


export type MutationAdmin_RestoreModuleInstanceArgs = {
  input: AdminRestoreModuleInstanceInput;
};


export type MutationAdmin_RunJobModuleRolloverArgs = {
  input: RunJobModuleRolloverInput;
};


export type MutationAdmin_UnassignFunctionCodesArgs = {
  input: AdminAssignFunctionCodesInput;
};


export type MutationAdmin_UnassignTeacherArgs = {
  input: AdminUnassignTeacherInput;
};


export type MutationAdmin_UpdateAdminArgs = {
  input: AdminUpdateAdminInput;
};


export type MutationAdmin_UpdateEvaluationFunctionArgs = {
  input: AdminUpdateEvaluationFunctionInput;
};


export type MutationAdmin_UpdateGlobalTagArgs = {
  input: AdminUpdateGlobalTagInput;
};


export type MutationAdmin_UpdateGlobalTagsAssignmentsToStudentsArgs = {
  input: AdminUpdateGlobalTagsAssignmentsInput;
};


export type MutationAdmin_UpdateGlobalTagsAssignmentsToTeachersArgs = {
  input: AdminUpdateGlobalTagsAssignmentsInput;
};


export type MutationAdmin_UpdateModuleArgs = {
  input: AdminUpdateModuleInput;
};


export type MutationAdmin_UpdateModuleInstanceArgs = {
  input: AdminUpdateModuleInstanceInput;
};


export type MutationAdmin_UpdateModuleInstanceTeacherRoleArgs = {
  input: AdminUpdateModuleInstanceTeacherRoleInput;
};


export type MutationAdmin_UpdateQuestionArgs = {
  input: AdminUpdateQuestionInput;
};


export type MutationAdmin_UpdateResponseTypeArgs = {
  input: AdminUpdateResponseTypeInput;
};


export type MutationAdmin_UpdateTeacherArgs = {
  input: AdminUpdateTeacherInput;
};


export type MutationAdmin_UpdateTeacherRoleArgs = {
  input: AdminUpdateTeacherRoleInput;
};


export type MutationAdmin_UpdateTenantArgs = {
  input: AdminUpdateTenantInput;
};


export type MutationApproveSubmissionArgs = {
  submissionId: Scalars['String'];
};


export type MutationBulkApproveSubmissionsArgs = {
  input: BulkModerateSubmissionsInput;
};


export type MutationBulkRejectSubmissionsArgs = {
  input: BulkModerateSubmissionsInput;
};


export type MutationCreateConversationMessagePairArgs = {
  input: CreateMessagePairInput;
};


export type MutationLogButtonEventArgs = {
  input: ButtonAnalyticsInput;
};


export type MutationLogPdfEventArgs = {
  input: PdfAnalyticsInput;
};


export type MutationLogQuestionAccessEventArgs = {
  input: QuestionAccessAnalyticsInput;
};


export type MutationLogSetAccessEventArgs = {
  input: SetAccessAnalyticsInput;
};


export type MutationMarkCompletionArgs = {
  input: MarkCompletionInput;
};


export type MutationRejectSubmissionArgs = {
  submissionId: Scalars['String'];
};


export type MutationStudent_CreateCommentArgs = {
  input: StudentCreateCommentInput;
};


export type MutationStudent_CreateSignedImageArgs = {
  input: CreateSignedImageInput;
};


export type MutationStudent_DeleteCommentArgs = {
  input: StudentRemoveCommentInput;
};


export type MutationStudent_DemandSolutionsAccessStatusArgs = {
  input: StudentSolutionsAccessInput;
};


export type MutationStudent_ToggleCommentReactionArgs = {
  input: ToggleCommentReactionInput;
};


export type MutationSubmitResponseArgs = {
  input: SubmitResponseInput;
};


export type MutationSubmitResponsePreviewArgs = {
  input: SubmitResponseInput;
};


export type MutationSuperadmin_AssignAdminArgs = {
  input: SuperAdminAssignAdminInput;
};


export type MutationSuperadmin_RemoveAdminArgs = {
  input: SuperAdminRemoveAdminInput;
};


export type MutationTeacher_AssignStudentsArgs = {
  input: TeacherAssignStudentsInput;
};


export type MutationTeacher_AssignStudentsTagsArgs = {
  input: TeacherUpdateStudentsTagsAssignmentsInput;
};


export type MutationTeacher_AssignTeachersArgs = {
  input: AdminAssignTeachersInput;
};


export type MutationTeacher_CloneQuestionArgs = {
  input: TeacherCloneQuestionInput;
};


export type MutationTeacher_CreateCommentArgs = {
  input: TeacherCreateCommentInput;
};


export type MutationTeacher_CreateModuleStudentTagArgs = {
  input: TeacherCreateModuleStudentTagInput;
};


export type MutationTeacher_CreateQuestionArgs = {
  input: TeacherCreateQuestionInput;
};


export type MutationTeacher_CreateSetArgs = {
  input: TeacherCreateSetInput;
};


export type MutationTeacher_CreateSignedImageArgs = {
  input: CreateSignedImageInput;
};


export type MutationTeacher_DeleteCommentArgs = {
  input: TeacherRemoveCommentInput;
};


export type MutationTeacher_DeleteModuleStudentTagArgs = {
  input: TeacherDeleteModuleStudentTagInput;
};


export type MutationTeacher_DeleteQuestionArgs = {
  input: TeacherDeleteQuestionInput;
};


export type MutationTeacher_DeleteSetArgs = {
  input: TeacherDeleteSetInput;
};


export type MutationTeacher_ExportQuestionArgs = {
  input: TeacherExportQuestionInput;
};


export type MutationTeacher_ExportSetArgs = {
  input: TeacherExportSetInput;
};


export type MutationTeacher_ExportSetAsPdfArgs = {
  input: TeacherExportSetAsPdfInput;
};


export type MutationTeacher_GetGuidanceTimeArgs = {
  input: TeacherGuidanceTimeInput;
};


export type MutationTeacher_ImportQuestionsArgs = {
  input: TeacherImportQuestionsInput;
};


export type MutationTeacher_ImportSetArgs = {
  input: TeacherImportSetInput;
};


export type MutationTeacher_ModuleInstanceResolveActivitiesArgs = {
  input: TeacherModuleInstanceResolveActivitiesInput;
};


export type MutationTeacher_ModuleInstanceResolveActivityArgs = {
  input: TeacherModuleInstanceResolveActivityInput;
};


export type MutationTeacher_ModuleInstanceResolveFlagsArgs = {
  input: TeacherModuleInstanceResolveFlagInput;
};


export type MutationTeacher_PublishCommentArgs = {
  input: TeacherPublishCommentInput;
};


export type MutationTeacher_PublishQuestionsArgs = {
  input: TeacherPublishQuestionsInput;
};


export type MutationTeacher_QuestionSetVisibilityArgs = {
  input: TeacherQuestionVisibilityInput;
};


export type MutationTeacher_RemoveStudentArgs = {
  input: TeacherRemoveStudentInput;
};


export type MutationTeacher_RemoveStudentsArgs = {
  input: TeacherRemoveStudentsInput;
};


export type MutationTeacher_ReorderQuestionsArgs = {
  input: TeacherReorderQuestionsInput;
};


export type MutationTeacher_ReorderSetsArgs = {
  input: TeacherReorderSetsInput;
};


export type MutationTeacher_RetrieveModuleInstanceActivitiesArgs = {
  input: TeacherModuleInstanceActivitiesInput;
};


export type MutationTeacher_RetrieveModuleInstanceErrorsArgs = {
  input: TeacherModuleInstancePaginationInput;
};


export type MutationTeacher_RetrieveModuleInstanceFlagsArgs = {
  input: TeacherModuleInstanceFlagsInput;
};


export type MutationTeacher_RevertToQuestionVersionArgs = {
  input: TeacherRevertToQuestionVersionInput;
};


export type MutationTeacher_RollbackToVersionArgs = {
  input: TeacherQuestionVersionRollbackInput;
};


export type MutationTeacher_SaveImportedQuestionsArgs = {
  input: TeacherSaveImportedQuestionsInput;
};


export type MutationTeacher_SetQuestionVisibilityArgs = {
  input: TeacherQuestionVisibilityInput;
};


export type MutationTeacher_SetSetVisibilityArgs = {
  input: TeacherSetVisibilityInput;
};


export type MutationTeacher_SubmitTestArgs = {
  input: TeacherSubmitTestInput;
};


export type MutationTeacher_TestSubmissionResponsePreviewArgs = {
  input: TeacherPreviewTestInput;
};


export type MutationTeacher_ToggleCommentReactionArgs = {
  input: ToggleCommentReactionInput;
};


export type MutationTeacher_UnassignStudentsTagsArgs = {
  input: TeacherUpdateStudentsTagsAssignmentsInput;
};


export type MutationTeacher_UnassignTeacherArgs = {
  input: AdminUnassignTeacherInput;
};


export type MutationTeacher_UpdateModuleInstanceArgs = {
  input: TeacherUpdateModuleInstanceInput;
};


export type MutationTeacher_UpdateModuleInstanceTeacherRoleArgs = {
  input: TeacherUpdateModuleInstanceTeacherRoleInput;
};


export type MutationTeacher_UpdateModuleStudentTagArgs = {
  input: TeacherUpdateModuleStudentTagInput;
};


export type MutationTeacher_UpdateQuestionArgs = {
  input: TeacherUpdateQuestionInput;
};


export type MutationTeacher_UpdateQuestionDraftArgs = {
  input: TeacherUpdateQuestionInput;
};


export type MutationTeacher_UpdateQuestionSettingsArgs = {
  input: TeacherQuestionSettingsInput;
};


export type MutationTeacher_UpdateSetArgs = {
  input: TeacherUpdateSetInput;
};


export type MutationTeacher_UpdateSetsHeaderArgs = {
  input: TeacherSetsHeaderInput;
};


export type MutationTeacher_UpdateStudentTagAssignmentsArgs = {
  input: TeacherUpdateStudentTagAssignmentsInput;
};


export type MutationToggleReactionArgs = {
  input: ReactionToggleInput;
};


export type MutationToggleTimingReactionArgs = {
  input: TimingReactionToggleInput;
};


export type MutationUpdateUserSettingsArgs = {
  input: UpdateUserSettingsInput;
};


export type MutationUpsertCanvasArgs = {
  input: UpsertCanvasInput;
};


export type MutationUpsertNoteArgs = {
  input: UpsertNoteInput;
};


export type MutationUpsertSubmissionDraftArgs = {
  input: UpsertSubmissionDraftInput;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['String'];
  text: Scalars['String'];
};

export type PdfAnalyticsInput = {
  courseId: Scalars['String'];
  setId: Scalars['String'];
  url: Scalars['String'];
};

export type PaginationInput = {
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export enum PrismaFilterOperatorDate {
  After = 'AFTER',
  Before = 'BEFORE',
  Is = 'IS',
  IsEmpty = 'IS_EMPTY',
  IsNotEmpty = 'IS_NOT_EMPTY',
  Not = 'NOT',
  OnOrAfter = 'ON_OR_AFTER',
  OnOrBefore = 'ON_OR_BEFORE'
}

export enum PrismaFilterOperatorDropDownList {
  Equals = 'EQUALS'
}

export enum PrismaFilterOperatorIsEmpty {
  IsEmpty = 'IS_EMPTY',
  IsNotEmpty = 'IS_NOT_EMPTY'
}

export enum PrismaFilterOperatorNumber {
  Equals = 'EQUALS',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

export enum PrismaFilterOperatorString {
  Contains = 'CONTAINS',
  EndsWith = 'ENDS_WITH',
  Equals = 'EQUALS',
  StartsWith = 'STARTS_WITH'
}

export type Query = {
  __typename?: 'Query';
  admin_activeModules?: Maybe<AdminActiveModules>;
  admin_conversationFlags: AdminConversationFlags;
  admin_conversationFlagsStatistics?: Maybe<AdminConversationFlagsStatistics>;
  admin_evaluationFunction?: Maybe<AdminEvaluationFunction>;
  admin_evaluationFunctionErrors: AdminEvaluationFunctionErrors;
  admin_evaluationFunctionGroupedErrors: AdminEvaluationFunctionGroupedErrors;
  admin_evaluationFunctions: AdminEvaluationFunctionConnection;
  admin_evaluationFunctionsStatistics?: Maybe<AdminEvaluationFunctionsStatistics>;
  admin_functionCodesAll: Array<FunctionCode>;
  admin_globalTag?: Maybe<GlobalTagWithDetails>;
  admin_globalTagsAll: Array<GlobalTagWithDetails>;
  admin_globalTagsStatus: AdminGlobalTagsStatus;
  admin_jobModuleRollover: AdminJobModuleRolloverWithInstances;
  admin_jobs: Array<AdminJob>;
  admin_messagePairCountStatistics?: Maybe<AdminMessagePairCountStatistics>;
  admin_messagePairCounts: AdminMessagePairCounts;
  admin_module?: Maybe<AdminModule>;
  admin_moduleInstance?: Maybe<AdminModuleInstance>;
  admin_moduleInstances: AdminModuleInstanceConnection;
  admin_moduleInstancesForRollover: AdminModuleInstanceConnection;
  admin_modules: AdminModuleConnection;
  admin_responseType: AdminResponseType;
  admin_responseTypes: AdminResponseTypeConnection;
  admin_responseTypesAll: AdminResponseTypeConnection;
  admin_students: AdminStudentConnection;
  admin_teacherDetails: AdminTeacherDetails;
  admin_teacherRoles: Array<AdminTeacherRole>;
  admin_teachers: AdminTeacherConnection;
  admin_templateQuestion?: Maybe<AdminQuestion>;
  admin_templateQuestions: AdminQuestionConnection;
  admin_tenant: AdminTenant;
  admin_userAccessEvents: AdminUserAccessEvents;
  admin_userNumbers: AdminUserNumbers;
  admin_usersStatus: AdminUsersStatus;
  getCanvas?: Maybe<Canvas>;
  getChatFunctionsDetails: Array<ChatFunctionDetails>;
  getConversation?: Maybe<Conversation>;
  getDefaultChatFunctionForTenant?: Maybe<ChatFunctionDetails>;
  getNote?: Maybe<Note>;
  getSubmissionDraft?: Maybe<SubmissionDraft>;
  me: User;
  moduleInstanceUserPreferences: ModuleInstanceUserPreferenceList;
  student_comments: CommentConnection;
  student_moduleDetails: StudentModule;
  student_moduleInstance: StudentModuleInstance;
  student_modules: Array<StudentModule>;
  student_questionPreviews: Array<StudentQuestionPreview>;
  student_reactions: StudentQuestionReactions;
  student_set?: Maybe<StudentSetResult>;
  student_solutionsAccessStatus: StudentSolutionsAccessStatus;
  submissionCounts: SubmissionCounts;
  submissions: ModerationSubmissionConnection;
  teacher_allModuleInstanceStudents: Array<TeacherStudent>;
  teacher_allModuleInstanceTeachers: Array<TeacherStudent>;
  teacher_checkPublishQuestions: TeacherQuestionsPublish;
  teacher_cloneableQuestions: TeacherQuestionConnection;
  teacher_comments: CommentConnection;
  teacher_commentsExist: CommentsExist;
  teacher_evaluationFunction?: Maybe<TeacherEvaluationFunction>;
  teacher_evaluationFunctions: TeacherEvaluationFunctionConnection;
  teacher_globalTagsAll: Array<GlobalTag>;
  teacher_moduleAccessDailyStatistics: GraphStatistics;
  teacher_moduleAccessStatistics: ModuleGraphStatistics;
  teacher_moduleDetails: TeacherModuleDetails;
  teacher_moduleInstance?: Maybe<TeacherModuleInstanceResult>;
  teacher_moduleInstanceActivities: TeacherModuleInstanceActivityConnection;
  teacher_moduleInstanceErrors: TeacherModuleInstanceErrorConnection;
  teacher_moduleInstanceFlags: TeacherModuleInstanceFlagConnection;
  teacher_moduleInstanceStudentStatistics: StudentModuleInstance;
  teacher_moduleInstanceStudents: TeacherModuleInstanceStudentConnection;
  teacher_moduleInstanceStudentsStatistics: TeacherModuleInstanceStudentsStats;
  teacher_moduleInstances: TeacherModuleInstanceConnection;
  teacher_moduleStudentTagsAll: Array<StudentTag>;
  teacher_moduleTeacherRole: Array<TeacherRole>;
  teacher_modules: Array<TeacherModule>;
  teacher_modulesAccessStatistics: GraphStatistics;
  teacher_modulesAccessWeeklyStatistics: GraphStatistics;
  teacher_modulesActivities: TeacherModulesActivityList;
  teacher_questionVersions: TeacherQuestionConnection;
  teacher_responseAreaStatistics: TeacherResponseAreaStatistics;
  teacher_responseTypes: TeacherResponseTypeConnection;
  teacher_set?: Maybe<TeacherSetResult>;
  teacher_setStatistics: GraphStatistics;
  teacher_setTimingStatistics: GraphStatistics;
  teacher_studentsAccessWeeklyStatistics: Array<StudentsAccessWeeklyGraphStatistics>;
  teacher_studentsStatistics: StudentsGraphStatistics;
  teacher_surveyQuestions: TeacherQuestionConnection;
  teacher_teacherRole?: Maybe<TeacherRole>;
  teacher_teacherRoles: Array<TeacherRole>;
  teacher_teacherStudents: Array<TeacherStudentWithGlobalTags>;
  teacher_templateQuestions: TeacherQuestionConnection;
};


export type QueryAdmin_ActiveModulesArgs = {
  input: AdminActiveModulesInput;
};


export type QueryAdmin_ConversationFlagsArgs = {
  input: AdminConversationFlagsInput;
};


export type QueryAdmin_EvaluationFunctionArgs = {
  id: Scalars['String'];
};


export type QueryAdmin_EvaluationFunctionErrorsArgs = {
  input: AdminEvaluationFunctionErrorsInput;
};


export type QueryAdmin_EvaluationFunctionGroupedErrorsArgs = {
  input: AdminEvaluationFunctionGroupedErrorsInput;
};


export type QueryAdmin_EvaluationFunctionsArgs = {
  input: AdminEvaluationFunctionsInput;
};


export type QueryAdmin_EvaluationFunctionsStatisticsArgs = {
  input: AdminEvaluationFunctionsStatisticsInput;
};


export type QueryAdmin_GlobalTagArgs = {
  input: AdminGetGlobalTagInput;
};


export type QueryAdmin_GlobalTagsStatusArgs = {
  input: AdminFindGlobalTagsInput;
};


export type QueryAdmin_JobModuleRolloverArgs = {
  input: JobInput;
};


export type QueryAdmin_MessagePairCountsArgs = {
  input: AdminMessagePairCountInput;
};


export type QueryAdmin_ModuleArgs = {
  id: Scalars['String'];
};


export type QueryAdmin_ModuleInstanceArgs = {
  id: Scalars['String'];
};


export type QueryAdmin_ModuleInstancesArgs = {
  input: AdminModuleInstancesInput;
};


export type QueryAdmin_ModulesArgs = {
  input: AdminModulesInput;
};


export type QueryAdmin_ResponseTypeArgs = {
  id: Scalars['String'];
};


export type QueryAdmin_ResponseTypesArgs = {
  input: AdminResponseTypesInput;
};


export type QueryAdmin_StudentsArgs = {
  input: AdminStudentsInput;
};


export type QueryAdmin_TeacherDetailsArgs = {
  input: AdminGetUserInput;
};


export type QueryAdmin_TeachersArgs = {
  input: AdminTeachersInput;
};


export type QueryAdmin_TemplateQuestionArgs = {
  id: Scalars['String'];
};


export type QueryAdmin_TemplateQuestionsArgs = {
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryAdmin_UserAccessEventsArgs = {
  input: AdminUserAccessEventsInput;
};


export type QueryAdmin_UserNumbersArgs = {
  input: AdminUserNumbersInput;
};


export type QueryAdmin_UsersStatusArgs = {
  input: UserListInput;
};


export type QueryGetCanvasArgs = {
  input: GetCanvasInput;
};


export type QueryGetConversationArgs = {
  input: GetConversationInput;
};


export type QueryGetNoteArgs = {
  input: GetNoteInput;
};


export type QueryGetSubmissionDraftArgs = {
  input: GetSubmissionDraftInput;
};


export type QueryStudent_CommentsArgs = {
  input: StudentCommentsInput;
};


export type QueryStudent_ModuleDetailsArgs = {
  input: StudentModuleInput;
};


export type QueryStudent_ModuleInstanceArgs = {
  input: StudentModuleInstanceInput;
};


export type QueryStudent_ModulesArgs = {
  input: StudentModulesInput;
};


export type QueryStudent_QuestionPreviewsArgs = {
  input: StudentQuestionPreviewsInput;
};


export type QueryStudent_ReactionsArgs = {
  input: ReactionsInput;
};


export type QueryStudent_SetArgs = {
  id: Scalars['String'];
};


export type QueryStudent_SolutionsAccessStatusArgs = {
  input: StudentSolutionsAccessInput;
};


export type QuerySubmissionCountsArgs = {
  input: GetSubmissionCountsInput;
};


export type QuerySubmissionsArgs = {
  input: GetSubmissionsInput;
};


export type QueryTeacher_AllModuleInstanceStudentsArgs = {
  input: TeacherGetModuleInstanceInput;
};


export type QueryTeacher_AllModuleInstanceTeachersArgs = {
  input: TeacherGetModuleInstanceInput;
};


export type QueryTeacher_CheckPublishQuestionsArgs = {
  input: TeacherPublishQuestionsInput;
};


export type QueryTeacher_CloneableQuestionsArgs = {
  input: PaginationInput;
};


export type QueryTeacher_CommentsArgs = {
  input: TeacherCommentsInput;
};


export type QueryTeacher_CommentsExistArgs = {
  input: TeacherCommentsExistInput;
};


export type QueryTeacher_EvaluationFunctionArgs = {
  name: Scalars['String'];
};


export type QueryTeacher_EvaluationFunctionsArgs = {
  input: TeacherEvaluationFunctionsInput;
};


export type QueryTeacher_ModuleAccessDailyStatisticsArgs = {
  input: ModuleAccessStatisticsInput;
};


export type QueryTeacher_ModuleAccessStatisticsArgs = {
  input: ModuleAccessStatisticsInput;
};


export type QueryTeacher_ModuleDetailsArgs = {
  input: TeacherModuleInput;
};


export type QueryTeacher_ModuleInstanceArgs = {
  input: TeacherGetModuleInstanceInput;
};


export type QueryTeacher_ModuleInstanceActivitiesArgs = {
  input: TeacherModuleInstanceActivitiesInput;
};


export type QueryTeacher_ModuleInstanceErrorsArgs = {
  input: TeacherModuleInstancePaginationInput;
};


export type QueryTeacher_ModuleInstanceFlagsArgs = {
  input: TeacherModuleInstanceFlagsInput;
};


export type QueryTeacher_ModuleInstanceStudentStatisticsArgs = {
  input: TeacherGetModuleInstanceStudentStatsInput;
};


export type QueryTeacher_ModuleInstanceStudentsArgs = {
  input: TeacherModuleInstanceStudentContactsInput;
};


export type QueryTeacher_ModuleInstanceStudentsStatisticsArgs = {
  input: TeacherGetModuleInstanceStudentsStatsInput;
};


export type QueryTeacher_ModuleInstancesArgs = {
  input: TeacherModuleInstancesInput;
};


export type QueryTeacher_ModuleStudentTagsAllArgs = {
  input: TeacherModuleStudentTagsInput;
};


export type QueryTeacher_ModuleTeacherRoleArgs = {
  input: TeacherGetModuleTeacherRoleInput;
};


export type QueryTeacher_ModulesActivitiesArgs = {
  input: TeacherModulesActivitiesInput;
};


export type QueryTeacher_QuestionVersionsArgs = {
  input: TeacherQuestionVersionInput;
};


export type QueryTeacher_ResponseAreaStatisticsArgs = {
  input: TeacherGetResponseStatisticsInput;
};


export type QueryTeacher_SetArgs = {
  id: Scalars['String'];
};


export type QueryTeacher_SetStatisticsArgs = {
  input: SetStatisticsInput;
};


export type QueryTeacher_SetTimingStatisticsArgs = {
  input: SetStatisticsInput;
};


export type QueryTeacher_StudentsAccessWeeklyStatisticsArgs = {
  input: StudentsStatisticsInput;
};


export type QueryTeacher_StudentsStatisticsArgs = {
  input: StudentsStatisticsInput;
};


export type QueryTeacher_SurveyQuestionsArgs = {
  input: PaginationInput;
};


export type QueryTeacher_TeacherRoleArgs = {
  input: TeacherGetTeacherRoleInput;
};


export type QueryTeacher_TeacherRolesArgs = {
  input: TeacherGetTeacherRolesInput;
};


export type QueryTeacher_TemplateQuestionsArgs = {
  input: PaginationInput;
};

export type QuestionAccessAnalyticsInput = {
  partId: Scalars['String'];
  universalPartId: Scalars['String'];
};

export enum QuestionVersionType {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Versioned = 'VERSIONED'
}

export type ReactionToggleInput = {
  entityId: Scalars['String'];
  feedback?: InputMaybe<Scalars['String']>;
  reaction: Scalars['String'];
  reactionType: ReactionType | `${ReactionType}`;
};

export enum ReactionType {
  Chat = 'CHAT',
  Comment = 'COMMENT',
  Feedback = 'FEEDBACK',
  PartContent = 'PART_CONTENT'
}

export type ReactionsInput = {
  entityId: Scalars['String'];
  reactionType: ReactionType | `${ReactionType}`;
};

export enum RecapSchedule {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  None = 'NONE',
  Weekly = 'WEEKLY'
}

export type ResponseAreaCase = {
  __typename?: 'ResponseAreaCase';
  answer: Scalars['JSON'];
  color?: Maybe<Scalars['String']>;
  feedback: Scalars['String'];
  id: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  params?: Maybe<Scalars['JSON']>;
};

export type ResponseAreaTest = {
  __typename?: 'ResponseAreaTest';
  expectedResponse: Scalars['JSON'];
  id: Scalars['String'];
  payload: Scalars['JSON'];
};

export type RunJobModuleRolloverInput = {
  allowChatbot: Scalars['Boolean'];
  allowComments: Scalars['Boolean'];
  carryOverCommentSetting: Scalars['Boolean'];
  cloneFromModuleInstanceIds: Array<Scalars['String']>;
  daysOffset: Scalars['Int'];
  includeUnpublishedQuestions: Scalars['Boolean'];
  newEndedAt: Scalars['DateTime'];
  newName: Scalars['String'];
  newSlug: Scalars['String'];
  newStartedAt: Scalars['DateTime'];
  publishCommentInstantly: Scalars['Boolean'];
};

export type SearchAdminConversationFlagsFields = {
  chatFunction?: InputMaybe<FilterArgs>;
  createdAt?: InputMaybe<FilterDateArgs>;
  module?: InputMaybe<FilterArgs>;
  moduleInstance?: InputMaybe<FilterArgs>;
  question?: InputMaybe<FilterArgs>;
  set?: InputMaybe<FilterArgs>;
  studentEmail?: InputMaybe<FilterArgs>;
};

export type SearchAdminFunctionErrorsFields = {
  moduleInstanceSlug?: InputMaybe<FilterArgs>;
  moduleName?: InputMaybe<FilterArgs>;
  questionTitle?: InputMaybe<FilterArgs>;
  setName?: InputMaybe<FilterArgs>;
};

export type SearchAdminFunctionFields = {
  deletedAt?: InputMaybe<FilterIsEmptyArgs>;
  name?: InputMaybe<FilterArgs>;
};

export type SearchAdminFunctionGroupedErrorsFields = {
  errorCount?: InputMaybe<FilterNumberArgs>;
};

export type SearchAdminFunctionStatisticsFields = {
  errorCount?: InputMaybe<FilterNumberArgs>;
  errorCountLastDay?: InputMaybe<FilterNumberArgs>;
  errorCountLastMonth?: InputMaybe<FilterNumberArgs>;
  errorCountLastWeek?: InputMaybe<FilterNumberArgs>;
  errorCountLastYear?: InputMaybe<FilterNumberArgs>;
  name?: InputMaybe<FilterArgs>;
  responseAreaCount?: InputMaybe<FilterNumberArgs>;
  submissionCount?: InputMaybe<FilterNumberArgs>;
};

export type SearchAdminMessagePairCountFields = {
  chatFunction?: InputMaybe<FilterArgs>;
  module?: InputMaybe<FilterArgs>;
  moduleInstance?: InputMaybe<FilterArgs>;
  question?: InputMaybe<FilterArgs>;
  set?: InputMaybe<FilterArgs>;
};

export type SearchAdminModuleInstanceTeachersFields = {
  email?: InputMaybe<FilterArgs>;
};

export type SearchAdminModuleInstancesFields = {
  deletedAt?: InputMaybe<FilterIsEmptyArgs>;
  name?: InputMaybe<FilterArgs>;
  slug?: InputMaybe<FilterArgs>;
};

export type SearchAdminStudentsFields = {
  email?: InputMaybe<FilterArgs>;
};

export type SearchAdminTeachersFields = {
  email?: InputMaybe<FilterArgs>;
  recapSchedule?: InputMaybe<FilterDropDownListArgs>;
};

export type SearchStudentModulesFields = {
  name?: InputMaybe<FilterArgs>;
};

export type SearchTeacherModuleInstanceActivityFields = {
  activityType?: InputMaybe<FilterArgs>;
  message?: InputMaybe<FilterArgs>;
  resolvedAt?: InputMaybe<FilterIsEmptyArgs>;
  userEmail?: InputMaybe<FilterArgs>;
};

export type SearchTeacherModuleInstanceFlagsFields = {
  comment?: InputMaybe<FilterArgs>;
  createdAt?: InputMaybe<FilterArgs>;
  resolvedAt?: InputMaybe<FilterArgs>;
};

export type SearchTeacherModuleInstanceStudentsFields = {
  email?: InputMaybe<FilterArgs>;
};

export type SearchTeacherModuleInstancesFields = {
  moduleName?: InputMaybe<FilterArgs>;
  name?: InputMaybe<FilterArgs>;
};

export type SetAccessAnalyticsInput = {
  setId: Scalars['String'];
};

export type SetError = {
  __typename?: 'SetError';
  code: SetErrorCode | `${SetErrorCode}`;
  message?: Maybe<Scalars['String']>;
};

export enum SetErrorCode {
  NotFound = 'NOT_FOUND',
  NotReleased = 'NOT_RELEASED'
}

export type SetPreviewSlice = {
  __typename?: 'SetPreviewSlice';
  hasUploadedSolution: Scalars['Boolean'];
  questionId: Scalars['String'];
  questionNumber: Scalars['Float'];
};

export type SetStatisticsInput = {
  setId: Scalars['String'];
};

export type SetSubjectOutline = {
  __typename?: 'SetSubjectOutline';
  label: Scalars['String'];
  userId: Scalars['String'];
};

export enum SolutionType {
  FinalAnswer = 'FINAL_ANSWER',
  Guidance = 'GUIDANCE',
  StructuredTutorial = 'STRUCTURED_TUTORIAL',
  WorkedSolutions = 'WORKED_SOLUTIONS'
}

export type SortAdminConversationFlagsFields = {
  chatFunction?: InputMaybe<SortDirection | `${SortDirection}`>;
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  module?: InputMaybe<SortDirection | `${SortDirection}`>;
  moduleInstance?: InputMaybe<SortDirection | `${SortDirection}`>;
  question?: InputMaybe<SortDirection | `${SortDirection}`>;
  set?: InputMaybe<SortDirection | `${SortDirection}`>;
  studentEmail?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortAdminFunctionErrorsFields = {
  moduleInstanceSlug?: InputMaybe<SortDirection | `${SortDirection}`>;
  moduleName?: InputMaybe<SortDirection | `${SortDirection}`>;
  questionTitle?: InputMaybe<SortDirection | `${SortDirection}`>;
  setName?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortAdminFunctionFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  deletedAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  name?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortAdminFunctionGroupedErrorsFields = {
  errorCount?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortAdminFunctionStatisticsFields = {
  errorCount?: InputMaybe<SortDirection | `${SortDirection}`>;
  errorCountLastDay?: InputMaybe<SortDirection | `${SortDirection}`>;
  errorCountLastMonth?: InputMaybe<SortDirection | `${SortDirection}`>;
  errorCountLastWeek?: InputMaybe<SortDirection | `${SortDirection}`>;
  errorCountLastYear?: InputMaybe<SortDirection | `${SortDirection}`>;
  name?: InputMaybe<SortDirection | `${SortDirection}`>;
  responseAreaCount?: InputMaybe<SortDirection | `${SortDirection}`>;
  submissionCount?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortAdminMessagePairCountFields = {
  chatFunction?: InputMaybe<SortDirection | `${SortDirection}`>;
  count?: InputMaybe<SortDirection | `${SortDirection}`>;
  module?: InputMaybe<SortDirection | `${SortDirection}`>;
  moduleInstance?: InputMaybe<SortDirection | `${SortDirection}`>;
  question?: InputMaybe<SortDirection | `${SortDirection}`>;
  set?: InputMaybe<SortDirection | `${SortDirection}`>;
  userCount?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortAdminModuleInstanceTeachersFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  email?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortAdminModuleInstancesFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  deletedAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  endedAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  name?: InputMaybe<SortDirection | `${SortDirection}`>;
  slug?: InputMaybe<SortDirection | `${SortDirection}`>;
  startedAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  teachers?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortAdminModulesFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  deletedAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  name?: InputMaybe<SortDirection | `${SortDirection}`>;
  numberOfModuleInstances?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortAdminStudentsFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  email?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortAdminTeachersFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  email?: InputMaybe<SortDirection | `${SortDirection}`>;
  recapSchedule?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SortStudentCommentsFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  upvotedCount?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortStudentModulesFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  name?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortSubmissionsFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  moderatedAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  studentEmail?: InputMaybe<SortDirection | `${SortDirection}`>;
  studentName?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortTeacherCommentsFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  upvotedCount?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortTeacherModuleInstanceActivityFields = {
  activityType?: InputMaybe<SortDirection | `${SortDirection}`>;
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  message?: InputMaybe<SortDirection | `${SortDirection}`>;
  question?: InputMaybe<SortDirection | `${SortDirection}`>;
  resolvedAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  userEmail?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortTeacherModuleInstanceContactStudentsFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  email?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortTeacherModuleInstanceFlagsFields = {
  comment?: InputMaybe<SortDirection | `${SortDirection}`>;
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  resolvedAt?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortTeacherModuleInstanceStudentsFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  email?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortTeacherModuleInstanceTeachersFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  email?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type SortTeacherModuleInstancesFields = {
  createdAt?: InputMaybe<SortDirection | `${SortDirection}`>;
  moduleName?: InputMaybe<SortDirection | `${SortDirection}`>;
  name?: InputMaybe<SortDirection | `${SortDirection}`>;
  students?: InputMaybe<SortDirection | `${SortDirection}`>;
  teachers?: InputMaybe<SortDirection | `${SortDirection}`>;
};

export type StructuredContent = {
  __typename?: 'StructuredContent';
  content?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StructuredContentCreateInput = {
  children: Array<StructuredContentCreateInput>;
  content?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type StudentCommentsInput = {
  parentCommentId?: InputMaybe<Scalars['String']>;
  questionId: Scalars['String'];
  sortFields?: InputMaybe<SortStudentCommentsFields>;
};

export type StudentCreateCommentInput = {
  comment: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
  questionId: Scalars['String'];
};

export type StudentGlobalTagModule = {
  __typename?: 'StudentGlobalTagModule';
  id: Scalars['String'];
  moduleInstanceEndedAt: Scalars['DateTime'];
  moduleInstanceId: Scalars['String'];
  moduleInstanceName: Scalars['String'];
  moduleInstanceStartedAt: Scalars['DateTime'];
  name: Scalars['String'];
};

export type StudentModularResponse = {
  __typename?: 'StudentModularResponse';
  config?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
  responseType: Scalars['String'];
};

export type StudentModule = {
  __typename?: 'StudentModule';
  defaultModuleInstance?: Maybe<BaseModuleInstance>;
  description: Scalars['String'];
  id: Scalars['String'];
  moduleInstances?: Maybe<Array<BaseModuleInstance>>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type StudentModuleInput = {
  slug: Scalars['String'];
};

export type StudentModuleInstance = {
  __typename?: 'StudentModuleInstance';
  allowComments: Scalars['Boolean'];
  endedAt: Scalars['DateTime'];
  id: Scalars['String'];
  isUserModuleInstanceTeacher: Scalars['Boolean'];
  moduleId: Scalars['String'];
  moduleInstanceStats?: Maybe<ModuleInstanceStats>;
  moduleName: Scalars['String'];
  moduleSlug: Scalars['String'];
  name: Scalars['String'];
  publishCommentInstantly: Scalars['Boolean'];
  setsHeader?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  startedAt: Scalars['DateTime'];
};

export type StudentModuleInstanceGraphStatistics = {
  __typename?: 'StudentModuleInstanceGraphStatistics';
  moduleInstanceGraphStatistics: GraphStatistics;
  studentId: Scalars['String'];
};

export type StudentModuleInstanceInput = {
  moduleInstanceSlug: Scalars['String'];
  moduleSlug: Scalars['String'];
};

export type StudentModulesInput = {
  searchFields?: InputMaybe<SearchStudentModulesFields>;
  sortFields?: InputMaybe<SortStudentModulesFields>;
};

export type StudentPart = {
  __typename?: 'StudentPart';
  answerContent?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  isMarkedComplete: Scalars['Boolean'];
  position: Scalars['Int'];
  responseArea: Array<StudentResponseArea>;
  structuredTutorial: Array<StructuredContent>;
  universalPartId: Scalars['String'];
  workedSolution: Array<StructuredContent>;
};

export type StudentQuestion = {
  __typename?: 'StudentQuestion';
  displayChatbot: Scalars['Boolean'];
  durationLowerBound?: Maybe<Scalars['Int']>;
  durationUpperBound?: Maybe<Scalars['Int']>;
  guidance?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  masterContent?: Maybe<Scalars['String']>;
  number: Scalars['Int'];
  parts: Array<StudentPart>;
  skill?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  versionId: Scalars['String'];
};

export type StudentQuestionPreview = {
  __typename?: 'StudentQuestionPreview';
  id: Scalars['String'];
  markedParts: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  releasedAt: Scalars['DateTime'];
  setDisplayNumber: Scalars['Int'];
  setId: Scalars['String'];
  setName: Scalars['String'];
  setNumber: Scalars['Int'];
  skill: Scalars['Float'];
  title: Scalars['String'];
  totalParts: Scalars['Int'];
};

export type StudentQuestionPreviewsInput = {
  markedDone?: InputMaybe<Scalars['Boolean']>;
  moduleInstanceId: Scalars['String'];
  skillLevel?: InputMaybe<Scalars['Float']>;
  workedSolutions?: InputMaybe<Scalars['Boolean']>;
};

export type StudentQuestionReaction = {
  __typename?: 'StudentQuestionReaction';
  count: Scalars['Int'];
  reaction: Scalars['String'];
};

export type StudentQuestionReactions = {
  __typename?: 'StudentQuestionReactions';
  reactionStats: Array<StudentQuestionReaction>;
  userReactions: Array<Scalars['String']>;
};

export type StudentRemoveCommentInput = {
  id: Scalars['String'];
};

export type StudentResponseArea = {
  __typename?: 'StudentResponseArea';
  contentAfter?: Maybe<Scalars['String']>;
  displayInputSymbols: Scalars['Boolean'];
  id: Scalars['String'];
  includeInPdf: Scalars['Boolean'];
  inputSymbols: Array<InputSymbol>;
  livePreview: Scalars['Boolean'];
  postResponseText?: Maybe<Scalars['String']>;
  preResponseText?: Maybe<Scalars['String']>;
  response?: Maybe<StudentModularResponse>;
  saveAllowed: Scalars['Boolean'];
  submission?: Maybe<SubmissionResult>;
  universalResponseAreaId: Scalars['String'];
};

export type StudentSet = {
  __typename?: 'StudentSet';
  description: Scalars['String'];
  displayNumber: Scalars['Int'];
  id: Scalars['String'];
  isSurvey: Scalars['Boolean'];
  moduleInstanceSlug: Scalars['String'];
  moduleSlug: Scalars['String'];
  name: Scalars['String'];
  number: Scalars['Int'];
  pdfUrl?: Maybe<Scalars['String']>;
  questions: Array<StudentQuestion>;
  subjects: Array<SetSubjectOutline>;
};

export type StudentSetPreview = {
  __typename?: 'StudentSetPreview';
  completed: Array<SetPreviewSlice>;
  description: Scalars['String'];
  displayNumber: Scalars['Float'];
  id: Scalars['String'];
  isReleased: Scalars['Boolean'];
  isSurvey: Scalars['Boolean'];
  name: Scalars['String'];
  number: Scalars['Float'];
  partsCompleted: Scalars['Float'];
  releasedAt?: Maybe<Scalars['DateTime']>;
  started: Array<SetPreviewSlice>;
  totalParts: Scalars['Float'];
  unstarted: Array<SetPreviewSlice>;
};

export type StudentSetResult = {
  __typename?: 'StudentSetResult';
  error?: Maybe<SetError>;
  set?: Maybe<StudentSet>;
};

export type StudentSolutionAccessStatus = {
  __typename?: 'StudentSolutionAccessStatus';
  accessStatus: StudentSolutionAccessType | `${StudentSolutionAccessType}`;
  estimatedMinimumTime?: Maybe<Scalars['String']>;
  solutionType: SolutionType | `${SolutionType}`;
  timeTaken?: Maybe<Scalars['String']>;
};

export enum StudentSolutionAccessType {
  HiddenPerQuestion = 'HIDDEN_PER_QUESTION',
  HiddenPerSet = 'HIDDEN_PER_SET',
  Open = 'OPEN',
  OpenWithWarnings = 'OPEN_WITH_WARNINGS'
}

export type StudentSolutionsAccessInput = {
  partId: Scalars['String'];
  universalPartId: Scalars['String'];
};

export type StudentSolutionsAccessStatus = {
  __typename?: 'StudentSolutionsAccessStatus';
  partId: Scalars['String'];
  solutionsStatus: Array<StudentSolutionAccessStatus>;
  universalPartId: Scalars['String'];
};

export type StudentTag = {
  __typename?: 'StudentTag';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type StudentsAccessWeeklyGraphStatistics = {
  __typename?: 'StudentsAccessWeeklyGraphStatistics';
  columns: Array<Column>;
  moduleInstanceLines: Array<Line>;
  studentId: Scalars['String'];
  summaryLine: Line;
};

export type StudentsGraphStatistics = {
  __typename?: 'StudentsGraphStatistics';
  studentsModuleInstanceGraphStatistics: Array<StudentModuleInstanceGraphStatistics>;
  summaryGraphStatistics: GraphStatistics;
};

export type StudentsStatisticsInput = {
  studentIds: Array<Scalars['String']>;
};

export type Submission = {
  __typename?: 'Submission';
  color?: Maybe<Scalars['String']>;
  feedback?: Maybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  isError: Scalars['Boolean'];
  matchedCase?: Maybe<MatchedCase>;
  rawResult: Scalars['JSON'];
  submission?: Maybe<Scalars['JSON']>;
  submissionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type SubmissionCounts = {
  __typename?: 'SubmissionCounts';
  automatic: Scalars['Int'];
  manuallyApproved: Scalars['Int'];
  manuallyRejected: Scalars['Int'];
  pending: Scalars['Int'];
  total: Scalars['Int'];
};

export type SubmissionDraft = {
  __typename?: 'SubmissionDraft';
  color?: Maybe<Scalars['String']>;
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  isError: Scalars['Boolean'];
  matchedCase?: Maybe<MatchedCase>;
  snapshot: Scalars['JSON'];
};

/** Method used for submission moderation/approval */
export enum SubmissionModerationMethod {
  Duplicate = 'DUPLICATE',
  Empty = 'EMPTY',
  Manual = 'MANUAL'
}

/** Status of submission moderation */
export enum SubmissionModerationStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type SubmissionPreview = {
  __typename?: 'SubmissionPreview';
  feedback?: Maybe<Scalars['String']>;
  isError: Scalars['Boolean'];
  preview?: Maybe<Scalars['JSON']>;
  rawResult: Scalars['JSON'];
};

export type SubmissionResult = Submission | SubmissionWithoutFeedback;

export type SubmissionWithoutFeedback = {
  __typename?: 'SubmissionWithoutFeedback';
  submission?: Maybe<Scalars['JSON']>;
  submissionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type SubmitResponseInput = {
  additionalParams?: InputMaybe<Scalars['JSON']>;
  rawSubmission?: InputMaybe<Scalars['JSON']>;
  responseAreaId: Scalars['String'];
  universalResponseAreaId: Scalars['String'];
};

export type SuperAdminAssignAdminInput = {
  userId: Scalars['String'];
};

export type SuperAdminRemoveAdminInput = {
  userId: Scalars['String'];
};

export type SupportedEvaluationFunction = {
  __typename?: 'SupportedEvaluationFunction';
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum TagStatus {
  Existing = 'EXISTING',
  New = 'NEW'
}

export type Teacher = {
  __typename?: 'Teacher';
  automaticallyCreated: Scalars['Boolean'];
  email: Scalars['String'];
};

export type TeacherAreaStatistics = {
  __typename?: 'TeacherAreaStatistics';
  answers: Array<TeacherResponseAreaStatistic>;
  answersSuppressed: Scalars['Boolean'];
  approvedModerationCount?: Maybe<Scalars['Int']>;
  correctStudentsCount: Scalars['Int'];
  correctSubmissionsCount: Scalars['Int'];
  pendingModerationCount?: Maybe<Scalars['Int']>;
  position: Scalars['Int'];
  rejectedModerationCount?: Maybe<Scalars['Int']>;
  responseArea: TeacherResponseArea;
  responseConfig: Scalars['JSON'];
  responseType: Scalars['String'];
  studentsCount: Scalars['Int'];
  suppressionReasons: Array<Scalars['String']>;
  totalSubmissionsCount: Scalars['Int'];
  unmoderatedSubmissionCount?: Maybe<Scalars['Int']>;
};

export type TeacherAssignStudentsInput = {
  emails: Array<Scalars['String']>;
  moduleInstanceId: Scalars['String'];
  studentTagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type TeacherCloneQuestionInput = {
  cloneQuestionId: Scalars['String'];
  setId: Scalars['String'];
};

export type TeacherCommentsExistInput = {
  moduleInstanceId: Scalars['String'];
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeacherCommentsInput = {
  parentCommentId?: InputMaybe<Scalars['String']>;
  questionId: Scalars['String'];
  sortFields?: InputMaybe<SortTeacherCommentsFields>;
};

export type TeacherCreateCommentInput = {
  comment: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
  questionId: Scalars['String'];
};

export type TeacherCreateInputSymbolsInput = {
  aliases: Array<Scalars['String']>;
  code: Scalars['String'];
  isVisible: Scalars['Boolean'];
  symbol: Scalars['String'];
};

export type TeacherCreateModuleStudentTagInput = {
  moduleInstanceId: Scalars['String'];
  name: Scalars['String'];
};

export type TeacherCreatePartWithoutQuestionIdInput = {
  answerContent?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  responseAreas: Array<TeacherCreateResponseAreaInput>;
  tutorial?: InputMaybe<StructuredContentCreateInput>;
  universalPartId: Scalars['String'];
  workedSolution?: InputMaybe<StructuredContentCreateInput>;
};

export type TeacherCreateQuestionInput = {
  displayChatbot: Scalars['Boolean'];
  displayFinalAnswer: Scalars['Boolean'];
  displayStructuredTutorial: Scalars['Boolean'];
  displayWorkedSolution: Scalars['Boolean'];
  durationLowerBound?: InputMaybe<Scalars['Int']>;
  durationUpperBound?: InputMaybe<Scalars['Int']>;
  generatePDF: Scalars['Boolean'];
  guidance?: InputMaybe<Scalars['String']>;
  masterContent?: InputMaybe<Scalars['String']>;
  /** If undefined, the set will be ordered after all other questions */
  number?: InputMaybe<Scalars['Int']>;
  parts: Array<TeacherCreatePartWithoutQuestionIdInput>;
  publish: Scalars['Boolean'];
  setId: Scalars['String'];
  skill?: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
};

export type TeacherCreateResponseAreaCaseInput = {
  answer: Scalars['JSON'];
  color?: InputMaybe<Scalars['String']>;
  feedback: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  params?: InputMaybe<Scalars['JSON']>;
};

export type TeacherCreateResponseAreaInput = {
  cases: Array<TeacherCreateResponseAreaCaseInput>;
  commonFeedbackColor?: InputMaybe<Scalars['String']>;
  contentAfter?: InputMaybe<Scalars['String']>;
  correctFeedbackColor?: InputMaybe<Scalars['String']>;
  correctFeedbackPrefix?: InputMaybe<Scalars['String']>;
  displayInputSymbols?: InputMaybe<Scalars['Boolean']>;
  evaluationFunctionName?: InputMaybe<Scalars['String']>;
  gradeParams?: InputMaybe<Scalars['JSON']>;
  includeInPdf?: InputMaybe<Scalars['Boolean']>;
  incorrectFeedbackColor?: InputMaybe<Scalars['String']>;
  incorrectFeedbackPrefix?: InputMaybe<Scalars['String']>;
  inputSymbols: Array<TeacherCreateInputSymbolsInput>;
  livePreview?: InputMaybe<Scalars['Boolean']>;
  postResponseText?: InputMaybe<Scalars['String']>;
  preResponseText?: InputMaybe<Scalars['String']>;
  response: TeacherCreateResponseInput;
  saveAllowed: Scalars['Boolean'];
  separateFeedback: Scalars['Boolean'];
  tests: Array<TeacherCreateResponseAreaTestInput>;
  universalResponseAreaId: Scalars['String'];
};

export type TeacherCreateResponseAreaTestInput = {
  expectedResponse: Scalars['JSON'];
  payload: Scalars['JSON'];
};

export type TeacherCreateResponseInput = {
  responseInput: ModularResponseInput;
};

export type TeacherCreateSetInput = {
  chatbotVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
  description: Scalars['String'];
  finalAnswerVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
  hiddenAt?: InputMaybe<Scalars['DateTime']>;
  isSurvey: Scalars['Boolean'];
  moduleInstanceId: Scalars['String'];
  name: Scalars['String'];
  /** If undefined, the set will be ordered after all other sets */
  number?: InputMaybe<Scalars['Int']>;
  releasedAt?: InputMaybe<Scalars['DateTime']>;
  structuredTutorialVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
  workedSolutionVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
};

export type TeacherDataExport = {
  __typename?: 'TeacherDataExport';
  warnings: Array<Scalars['String']>;
  zippedData: Scalars['String'];
  zippedFileName: Scalars['String'];
};

export type TeacherDeleteModuleStudentTagInput = {
  id: Scalars['String'];
};

export type TeacherDeleteQuestionInput = {
  questionId: Scalars['String'];
};

export type TeacherDeleteSetInput = {
  setId: Scalars['String'];
};

export type TeacherEvaluationFunction = {
  __typename?: 'TeacherEvaluationFunction';
  deletedAt?: Maybe<Scalars['DateTime']>;
  docsContent?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  includeDefaultTest: Scalars['Boolean'];
  name: Scalars['String'];
  paramsSchema?: Maybe<Scalars['JSON']>;
  remoteDocsUrl?: Maybe<Scalars['String']>;
  supportedTypes: Array<Scalars['String']>;
  url: Scalars['String'];
};

export type TeacherEvaluationFunctionConnection = {
  __typename?: 'TeacherEvaluationFunctionConnection';
  edges: Array<TeacherEvaluationFunction>;
  total: Scalars['Int'];
};

export type TeacherEvaluationFunctionsInput = {
  first: Scalars['Int'];
  initialFunctionName?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type TeacherExportQuestionInput = {
  questionId: Scalars['String'];
};

export type TeacherExportSetAsPdf = {
  __typename?: 'TeacherExportSetAsPdf';
  exportedPdfUrl: Scalars['String'];
  pdfError?: Maybe<Scalars['String']>;
};

export type TeacherExportSetAsPdfInput = {
  fileDataContentType: FileDataContentType | `${FileDataContentType}`;
  setId: Scalars['String'];
};

export type TeacherExportSetInput = {
  exportFileType: ExportFileType | `${ExportFileType}`;
  fileDataContentType: FileDataContentType | `${FileDataContentType}`;
  setId: Scalars['String'];
  useDraftVersion: Scalars['Boolean'];
};

export type TeacherGetModuleInstanceInput = {
  id: Scalars['String'];
};

export type TeacherGetModuleInstanceStudentStatsInput = {
  email: Scalars['String'];
  moduleInstanceId: Scalars['String'];
};

export type TeacherGetModuleInstanceStudentsStatsInput = {
  moduleInstanceId: Scalars['String'];
  studentIds: Array<Scalars['String']>;
};

export type TeacherGetModuleTeacherRoleInput = {
  moduleInstanceId: Scalars['String'];
  userId: Scalars['String'];
};

export type TeacherGetResponseStatisticsInput = {
  correctnessSubmissions?: InputMaybe<Scalars['Boolean']>;
  feedbackSubmissions?: InputMaybe<Scalars['Boolean']>;
  includeTeachersSubmissions?: InputMaybe<Scalars['Boolean']>;
  latestOnly?: InputMaybe<Scalars['Boolean']>;
  questionId: Scalars['String'];
  simplifiedSubmissions?: InputMaybe<Scalars['Boolean']>;
  subjectUserId?: InputMaybe<Scalars['String']>;
};

export type TeacherGetTeacherRoleInput = {
  roleId: Scalars['String'];
};

export type TeacherGetTeacherRolesInput = {
  assignableByTeacherOnly?: InputMaybe<Scalars['Boolean']>;
  assignableRolesOnly?: InputMaybe<Scalars['Boolean']>;
};

export type TeacherGuidanceTimeInput = {
  questionId: Scalars['String'];
  skill?: InputMaybe<Scalars['Float']>;
};

export type TeacherGuidanceTimeResponse = {
  __typename?: 'TeacherGuidanceTimeResponse';
  lowerBound: Scalars['Int'];
  upperBound: Scalars['Int'];
};

export type TeacherImportQuestionsInput = {
  file: Scalars['String'];
  setId: Scalars['String'];
};

export type TeacherImportSetInput = {
  file: Scalars['String'];
  moduleInstanceId: Scalars['String'];
};

export type TeacherImportedQuestionsSaved = {
  __typename?: 'TeacherImportedQuestionsSaved';
  importedQuestionIds: Array<Scalars['String']>;
};

export type TeacherModularResponse = {
  __typename?: 'TeacherModularResponse';
  answer: Scalars['JSON'];
  config?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
  responseType: Scalars['String'];
};

export type TeacherModule = {
  __typename?: 'TeacherModule';
  defaultModuleInstance: BaseModuleInstance;
  defaultModuleInstanceTeacherRoleId: Scalars['String'];
  defaultModuleInstanceTotalStudents: Scalars['Int'];
  defaultModuleInstanceTotalTeachers: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['String'];
  instances: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type TeacherModuleDetails = {
  __typename?: 'TeacherModuleDetails';
  description: Scalars['String'];
  id: Scalars['String'];
  moduleInstances?: Maybe<Array<BaseModuleInstance>>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type TeacherModuleInput = {
  id: Scalars['String'];
};

export type TeacherModuleInstance = {
  __typename?: 'TeacherModuleInstance';
  allowChatbot: Scalars['Boolean'];
  allowComments: Scalars['Boolean'];
  id: Scalars['String'];
  isUserModuleInstanceTeacher: Scalars['Boolean'];
  moduleDescription: Scalars['String'];
  moduleId: Scalars['String'];
  moduleName: Scalars['String'];
  moduleSlug: Scalars['String'];
  name: Scalars['String'];
  numberOfComments: Scalars['Int'];
  numberOfErrors: Scalars['Int'];
  numberOfFlags: Scalars['Int'];
  numberOfSets: Scalars['Int'];
  numberOfStudents: Scalars['Int'];
  numberOfTeachers: Scalars['Int'];
  publishCommentInstantly: Scalars['Boolean'];
  sets: Array<TeacherSetForModuleInstance>;
  setsHeader?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  startedAt: Scalars['DateTime'];
  students: TeacherStudentConnection;
  teachers: TeacherTeacherConnection;
};


export type TeacherModuleInstanceStudentsArgs = {
  inputStudents: TeacherModuleInstanceStudentsInput;
};


export type TeacherModuleInstanceTeachersArgs = {
  inputTeachers: TeacherModuleInstanceTeachersInput;
};

export type TeacherModuleInstanceActivitiesInput = {
  first: Scalars['Int'];
  moduleInstanceId: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchTeacherModuleInstanceActivityFields>;
  sortFields?: InputMaybe<SortTeacherModuleInstanceActivityFields>;
};

export type TeacherModuleInstanceActivity = {
  __typename?: 'TeacherModuleInstanceActivity';
  activityType: ActivityType | `${ActivityType}`;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  partIndex: Scalars['Float'];
  questionId: Scalars['String'];
  questionNumber: Scalars['Float'];
  questionTitle: Scalars['String'];
  rawResponse?: Maybe<Scalars['JSON']>;
  resolvedAt?: Maybe<Scalars['DateTime']>;
  responseAreaIndex?: Maybe<Scalars['Float']>;
  setId: Scalars['String'];
  setNumber: Scalars['Float'];
  userEmail: Scalars['String'];
};

export type TeacherModuleInstanceActivityConnection = {
  __typename?: 'TeacherModuleInstanceActivityConnection';
  edges: Array<TeacherModuleInstanceActivity>;
  total: Scalars['Int'];
};

export type TeacherModuleInstanceConnection = {
  __typename?: 'TeacherModuleInstanceConnection';
  edges: Array<TeacherModuleInstancesItem>;
  total: Scalars['Int'];
};

export type TeacherModuleInstanceError = {
  __typename?: 'TeacherModuleInstanceError';
  errorAt: Scalars['DateTime'];
  evaluationFunctionId?: Maybe<Scalars['String']>;
  evaluationFunctionName?: Maybe<Scalars['String']>;
  evalutionFunctionOwnerEmail?: Maybe<Scalars['String']>;
  partId: Scalars['String'];
  partIndex: Scalars['Int'];
  questionId: Scalars['String'];
  questionNumber: Scalars['Float'];
  questionTitle: Scalars['String'];
  rawRequest?: Maybe<Scalars['JSON']>;
  rawResponse: Scalars['JSON'];
  resolvedAt?: Maybe<Scalars['DateTime']>;
  responseAreaId: Scalars['String'];
  setId: Scalars['String'];
  setName: Scalars['String'];
  setNumber: Scalars['Float'];
  studentEmail: Scalars['String'];
  submissionId: Scalars['String'];
};

export type TeacherModuleInstanceErrorConnection = {
  __typename?: 'TeacherModuleInstanceErrorConnection';
  edges: Array<TeacherModuleInstanceError>;
  total: Scalars['Int'];
};

export type TeacherModuleInstanceFlag = {
  __typename?: 'TeacherModuleInstanceFlag';
  comment?: Maybe<Scalars['String']>;
  flaggedAt: Scalars['DateTime'];
  id: Scalars['String'];
  partId: Scalars['String'];
  questionId: Scalars['String'];
  questionNumber: Scalars['Float'];
  questionTitle: Scalars['String'];
  questionVersionId: Scalars['String'];
  resolvedAt?: Maybe<Scalars['DateTime']>;
  setId: Scalars['String'];
  setName: Scalars['String'];
  setNumber: Scalars['Float'];
  studentEmail: Scalars['String'];
};

export type TeacherModuleInstanceFlagConnection = {
  __typename?: 'TeacherModuleInstanceFlagConnection';
  edges: Array<TeacherModuleInstanceFlag>;
  total: Scalars['Int'];
};

export type TeacherModuleInstanceFlagsInput = {
  first: Scalars['Int'];
  moduleInstanceId: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchTeacherModuleInstanceFlagsFields>;
  sortFields?: InputMaybe<SortTeacherModuleInstanceFlagsFields>;
};

export type TeacherModuleInstancePaginationInput = {
  first: Scalars['Int'];
  moduleInstanceId: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type TeacherModuleInstanceResolveActivitiesInput = {
  activityIds: Array<Scalars['String']>;
  activityType: ActivityType | `${ActivityType}`;
  moduleInstanceId: Scalars['String'];
  resolved: Scalars['Boolean'];
};

export type TeacherModuleInstanceResolveActivityInput = {
  activityId: Scalars['String'];
  activityType: ActivityType | `${ActivityType}`;
  moduleInstanceId: Scalars['String'];
  resolved: Scalars['Boolean'];
};

export type TeacherModuleInstanceResolveFlagInput = {
  flagId: Scalars['String'];
  moduleInstanceId: Scalars['String'];
  resolved: Scalars['Boolean'];
};

export type TeacherModuleInstanceResult = {
  __typename?: 'TeacherModuleInstanceResult';
  error?: Maybe<ModuleError>;
  moduleInstance?: Maybe<TeacherModuleInstance>;
};

export type TeacherModuleInstanceStudent = {
  __typename?: 'TeacherModuleInstanceStudent';
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  studentGlobalTags: Array<TeacherModuleInstanceStudentLabels>;
  studentTags: Array<TeacherModuleInstanceStudentLabels>;
};

export type TeacherModuleInstanceStudentConnection = {
  __typename?: 'TeacherModuleInstanceStudentConnection';
  edges: Array<TeacherModuleInstanceStudent>;
  total: Scalars['Int'];
};

export type TeacherModuleInstanceStudentContactsInput = {
  binaryA?: InputMaybe<ModuleStudentBinaryA | `${ModuleStudentBinaryA}`>;
  binaryB?: InputMaybe<ModuleStudentBinaryB | `${ModuleStudentBinaryB}`>;
  emails?: InputMaybe<Array<Scalars['String']>>;
  moduleInstanceId: Scalars['String'];
  setIds?: InputMaybe<Array<Scalars['String']>>;
  sortFields?: InputMaybe<SortTeacherModuleInstanceContactStudentsFields>;
  studentGlobalTagIds?: InputMaybe<Array<Scalars['String']>>;
  studentTagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type TeacherModuleInstanceStudentLabels = {
  __typename?: 'TeacherModuleInstanceStudentLabels';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type TeacherModuleInstanceStudentStats = {
  __typename?: 'TeacherModuleInstanceStudentStats';
  stats: ModuleInstanceStats;
  studentId: Scalars['String'];
};

export type TeacherModuleInstanceStudentsInput = {
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchTeacherModuleInstanceStudentsFields>;
  sortFields?: InputMaybe<SortTeacherModuleInstanceStudentsFields>;
};

export type TeacherModuleInstanceStudentsStats = {
  __typename?: 'TeacherModuleInstanceStudentsStats';
  edges: Array<TeacherModuleInstanceStudentStats>;
  total: Scalars['Int'];
};

export type TeacherModuleInstanceTeachersInput = {
  emails: Array<Scalars['String']>;
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortFields?: InputMaybe<SortTeacherModuleInstanceTeachersFields>;
};

export type TeacherModuleInstancesInput = {
  first: Scalars['Int'];
  moduleId?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  searchFields?: InputMaybe<SearchTeacherModuleInstancesFields>;
  sortFields?: InputMaybe<SortTeacherModuleInstancesFields>;
};

export type TeacherModuleInstancesItem = {
  __typename?: 'TeacherModuleInstancesItem';
  allowChatbot: Scalars['Boolean'];
  allowComments: Scalars['Boolean'];
  id: Scalars['String'];
  isUserModuleInstanceTeacher: Scalars['Boolean'];
  moduleDescription: Scalars['String'];
  moduleId: Scalars['String'];
  moduleName: Scalars['String'];
  moduleSlug: Scalars['String'];
  name: Scalars['String'];
  numberOfSets: Scalars['Int'];
  numberOfStudents: Scalars['Int'];
  numberOfTeachers: Scalars['Int'];
  publishCommentInstantly: Scalars['Boolean'];
  setsHeader?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  startedAt: Scalars['DateTime'];
};

export type TeacherModuleStudentTagsInput = {
  moduleInstanceId: Scalars['String'];
};

export type TeacherModulesActivitiesInput = {
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type TeacherModulesActivity = {
  __typename?: 'TeacherModulesActivity';
  activityType: ActivityType | `${ActivityType}`;
  createdAt: Scalars['DateTime'];
  ids: Array<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  moduleId: Scalars['String'];
  moduleInstanceId: Scalars['String'];
  moduleInstanceName: Scalars['String'];
  moduleInstanceSlug: Scalars['String'];
  moduleInstanceStartedAt: Scalars['DateTime'];
  moduleInstanceTeacherRoleId: Scalars['String'];
  moduleName: Scalars['String'];
  moduleSlug: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  partIndex: Scalars['Float'];
  questionId: Scalars['String'];
  questionNumber: Scalars['Float'];
  questionTitle: Scalars['String'];
  resolvedAt?: Maybe<Scalars['DateTime']>;
  setId: Scalars['String'];
  setNumber: Scalars['Float'];
  userEmails: Array<Scalars['String']>;
  userIds: Array<Scalars['String']>;
};

export type TeacherModulesActivityList = {
  __typename?: 'TeacherModulesActivityList';
  edges: Array<TeacherModulesActivity>;
  total: Scalars['Int'];
};

export type TeacherPart = {
  __typename?: 'TeacherPart';
  answerContent?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  responseAreas: Array<TeacherResponseArea>;
  tutorial: Array<StructuredContent>;
  universalPartId: Scalars['String'];
  workedSolution: Array<StructuredContent>;
};

export type TeacherPreviewTestInput = {
  additionalParams?: InputMaybe<Scalars['JSON']>;
  evaluationFunctionName: Scalars['String'];
  gradeParams?: InputMaybe<Scalars['JSON']>;
  inputSymbols: Array<TeacherSubmitInputSymbol>;
  submission?: InputMaybe<Scalars['JSON']>;
};

export type TeacherPublishCommentInput = {
  id: Scalars['String'];
};

export type TeacherPublishQuestionsInput = {
  setId: Scalars['String'];
};

export type TeacherQuestion = {
  __typename?: 'TeacherQuestion';
  ancestorVersionId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayChatbot: Scalars['Boolean'];
  displayFinalAnswer: Scalars['Boolean'];
  displayStructuredTutorial: Scalars['Boolean'];
  displayWorkedSolution: Scalars['Boolean'];
  durationLowerBound?: Maybe<Scalars['Int']>;
  durationUpperBound?: Maybe<Scalars['Int']>;
  guidance?: Maybe<Scalars['String']>;
  hasBeenPublished: Scalars['Boolean'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  masterContent?: Maybe<Scalars['String']>;
  number: Scalars['Int'];
  parents?: Maybe<TeacherQuestionParents>;
  parts: Array<TeacherPart>;
  pdfError?: Maybe<Scalars['String']>;
  skill?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  type: QuestionVersionType | `${QuestionVersionType}`;
  updatedAt: Scalars['DateTime'];
  versionId: Scalars['String'];
};

export type TeacherQuestionConnection = {
  __typename?: 'TeacherQuestionConnection';
  edges: Array<TeacherQuestion>;
  total: Scalars['Int'];
};

export type TeacherQuestionParents = {
  __typename?: 'TeacherQuestionParents';
  moduleId: Scalars['String'];
  moduleInstanceId: Scalars['String'];
  moduleInstanceName: Scalars['String'];
  moduleName: Scalars['String'];
  setId: Scalars['String'];
  setName: Scalars['String'];
  setNumber: Scalars['Float'];
};

export type TeacherQuestionSettingsInput = {
  displayChatbot?: InputMaybe<Scalars['Boolean']>;
  displayFinalAnswer?: InputMaybe<Scalars['Boolean']>;
  displayStructuredTutorial?: InputMaybe<Scalars['Boolean']>;
  displayWorkedSolution?: InputMaybe<Scalars['Boolean']>;
  questionId: Scalars['String'];
};

export type TeacherQuestionVersionInput = {
  first: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  questionId: Scalars['String'];
  search?: InputMaybe<Scalars['String']>;
};

export type TeacherQuestionVersionRollbackInput = {
  questionId: Scalars['String'];
  versionId: Scalars['String'];
};

export type TeacherQuestionVisibilityInput = {
  questionId: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type TeacherQuestionsImport = {
  __typename?: 'TeacherQuestionsImport';
  pdfError?: Maybe<Scalars['String']>;
  questionIds: Array<Scalars['String']>;
};

export type TeacherQuestionsPublish = {
  __typename?: 'TeacherQuestionsPublish';
  pdfError?: Maybe<Scalars['String']>;
  questionsForPublishing: Array<Scalars['Int']>;
  questionsNotChanged: Array<Scalars['Int']>;
};

export type TeacherRemoveCommentInput = {
  id: Scalars['String'];
};

export type TeacherRemoveStudentInput = {
  moduleInstanceId: Scalars['String'];
  studentId: Scalars['String'];
};

export type TeacherRemoveStudentsInput = {
  moduleInstanceId: Scalars['String'];
  studentIds: Array<Scalars['String']>;
};

export type TeacherReorderQuestionsInput = {
  /** this should include every question in the module */
  orderedQuestionIds: Array<Scalars['String']>;
  setId: Scalars['String'];
};

export type TeacherReorderSetsInput = {
  moduleInstanceId: Scalars['String'];
  /** this should include every set in the module */
  orderedSetIds: Array<Scalars['String']>;
  type: Scalars['String'];
};

export type TeacherResponseArea = {
  __typename?: 'TeacherResponseArea';
  cases: Array<ResponseAreaCase>;
  commonFeedbackColor?: Maybe<Scalars['String']>;
  contentAfter?: Maybe<Scalars['String']>;
  correctFeedbackColor?: Maybe<Scalars['String']>;
  correctFeedbackPrefix?: Maybe<Scalars['String']>;
  displayInputSymbols: Scalars['Boolean'];
  evaluationFunction?: Maybe<TeacherEvaluationFunction>;
  gradeParams?: Maybe<Scalars['JSON']>;
  hasSubmissions: Scalars['Boolean'];
  id: Scalars['String'];
  includeInPdf: Scalars['Boolean'];
  incorrectFeedbackColor?: Maybe<Scalars['String']>;
  incorrectFeedbackPrefix?: Maybe<Scalars['String']>;
  inputSymbols: Array<InputSymbol>;
  isPublishedOrSaved: Scalars['Boolean'];
  livePreview: Scalars['Boolean'];
  postResponseText?: Maybe<Scalars['String']>;
  preResponseText?: Maybe<Scalars['String']>;
  response?: Maybe<TeacherModularResponse>;
  saveAllowed: Scalars['Boolean'];
  separateFeedback: Scalars['Boolean'];
  tests: Array<ResponseAreaTest>;
  universalResponseAreaId: Scalars['String'];
};

export type TeacherResponseAreaPartStatistics = {
  __typename?: 'TeacherResponseAreaPartStatistics';
  areas: Array<TeacherAreaStatistics>;
  position: Scalars['Int'];
};

export type TeacherResponseAreaStatistic = {
  __typename?: 'TeacherResponseAreaStatistic';
  answer: Scalars['JSON'];
  color?: Maybe<Scalars['String']>;
  feedback?: Maybe<Scalars['String']>;
  frequency: Scalars['Int'];
  isCorrect?: Maybe<Scalars['Boolean']>;
  latexAnswer?: Maybe<Scalars['String']>;
  simplifiedAnswer?: Maybe<Scalars['String']>;
};

export type TeacherResponseAreaStatistics = {
  __typename?: 'TeacherResponseAreaStatistics';
  parts: Array<TeacherResponseAreaPartStatistics>;
  question?: Maybe<TeacherQuestion>;
};

export type TeacherResponseType = {
  __typename?: 'TeacherResponseType';
  defaultEvaluationFunctionId?: Maybe<Scalars['String']>;
  defaultEvaluationFunctionName?: Maybe<Scalars['String']>;
  defaultIncludeInPdf: Scalars['Boolean'];
  defaultLivePreview: Scalars['Boolean'];
  defaultSaveAllowed: Scalars['Boolean'];
  id: Scalars['String'];
  isSaveAllowedEditable: Scalars['Boolean'];
  type: Scalars['String'];
};

export type TeacherResponseTypeConnection = {
  __typename?: 'TeacherResponseTypeConnection';
  edges: Array<TeacherResponseType>;
  total: Scalars['Int'];
};

export type TeacherRevertToQuestionVersionInput = {
  questionId: Scalars['String'];
  saveDraft: Scalars['Boolean'];
  /** If null, will revert to the published version */
  versionId?: InputMaybe<Scalars['String']>;
};

export type TeacherRole = {
  __typename?: 'TeacherRole';
  description: Scalars['String'];
  functionCodes: Array<FunctionCode>;
  id: Scalars['String'];
  teacherRoleType: TeacherRoleType | `${TeacherRoleType}`;
};

export enum TeacherRoleType {
  Custom = 'CUSTOM',
  Owner = 'OWNER',
  Tutor = 'TUTOR'
}

export type TeacherSaveImportedQuestionsInput = {
  questions: Array<TeacherCreateQuestionInput>;
};

export type TeacherSet = {
  __typename?: 'TeacherSet';
  chatbotVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
  description: Scalars['String'];
  displayNumber: Scalars['Int'];
  finalAnswerVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
  hiddenAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isSurvey: Scalars['Boolean'];
  manuallyHiddenAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  number: Scalars['Int'];
  pdfUrl?: Maybe<Scalars['String']>;
  questions: Array<TeacherQuestion>;
  releasedAt?: Maybe<Scalars['DateTime']>;
  structuredTutorialVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
  subjects: Array<SetSubjectOutline>;
  workedSolutionVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
};

export type TeacherSetForModuleInstance = {
  __typename?: 'TeacherSetForModuleInstance';
  chatbotVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
  description: Scalars['String'];
  displayNumber: Scalars['Int'];
  durationLowerBound: Scalars['Int'];
  durationUpperBound: Scalars['Int'];
  durationWithUncertainty: Scalars['Boolean'];
  finalAnswerVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
  hiddenAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isSurvey: Scalars['Boolean'];
  manuallyHiddenAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  number: Scalars['Int'];
  pdfUrl?: Maybe<Scalars['String']>;
  releasedAt?: Maybe<Scalars['DateTime']>;
  structuredTutorialVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
  subjects: Array<SetSubjectOutline>;
  workedSolutionVisibility: VisibilityStatusType | `${VisibilityStatusType}`;
};

export type TeacherSetImport = {
  __typename?: 'TeacherSetImport';
  pdfError?: Maybe<Scalars['String']>;
  setId: Scalars['String'];
};

export type TeacherSetResult = {
  __typename?: 'TeacherSetResult';
  error?: Maybe<SetError>;
  set?: Maybe<TeacherSet>;
};

export type TeacherSetVisibilityInput = {
  setId: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type TeacherSetsHeaderInput = {
  content: Scalars['String'];
  moduleInstanceId: Scalars['String'];
};

export type TeacherStudent = {
  __typename?: 'TeacherStudent';
  email: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type TeacherStudentConnection = {
  __typename?: 'TeacherStudentConnection';
  edges: Array<TeacherStudent>;
  total: Scalars['Int'];
};

export type TeacherStudentWithGlobalTags = {
  __typename?: 'TeacherStudentWithGlobalTags';
  email: Scalars['String'];
  globalTags: Array<GlobalTag>;
  id: Scalars['String'];
  modules: Array<StudentGlobalTagModule>;
  name?: Maybe<Scalars['String']>;
};

export type TeacherSubmissionResponse = {
  __typename?: 'TeacherSubmissionResponse';
  color?: Maybe<Scalars['String']>;
  feedback?: Maybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  isError: Scalars['Boolean'];
  matchedCase?: Maybe<MatchedCase>;
  rawResponse?: Maybe<Scalars['JSON']>;
  submission?: Maybe<Scalars['JSON']>;
  submissionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type TeacherSubmitCase = {
  answer: Scalars['JSON'];
  color?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<Scalars['String']>;
  mark: Scalars['Int'];
  params?: InputMaybe<Scalars['JSON']>;
};

export type TeacherSubmitInputSymbol = {
  aliases: Array<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  symbol: Scalars['String'];
};

export type TeacherSubmitTestInput = {
  additionalParams?: InputMaybe<Scalars['JSON']>;
  answer: Scalars['JSON'];
  cases: Array<TeacherSubmitCase>;
  commonFeedbackColor?: InputMaybe<Scalars['String']>;
  correctFeedbackColor?: InputMaybe<Scalars['String']>;
  correctFeedbackPrefix?: InputMaybe<Scalars['String']>;
  evaluationFunctionName: Scalars['String'];
  gradeParams?: InputMaybe<Scalars['JSON']>;
  incorrectFeedbackColor?: InputMaybe<Scalars['String']>;
  incorrectFeedbackPrefix?: InputMaybe<Scalars['String']>;
  inputSymbols: Array<TeacherSubmitInputSymbol>;
  separateFeedback: Scalars['Boolean'];
  submission?: InputMaybe<Scalars['JSON']>;
};

export type TeacherTeacher = {
  __typename?: 'TeacherTeacher';
  email: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  teacherRoleId: Scalars['String'];
};

export type TeacherTeacherConnection = {
  __typename?: 'TeacherTeacherConnection';
  edges: Array<TeacherTeacher>;
  total: Scalars['Int'];
};

export type TeacherUpdateModuleInstanceInput = {
  allowChatbot: Scalars['Boolean'];
  allowComments: Scalars['Boolean'];
  moduleInstanceId: Scalars['String'];
  publishCommentInstantly: Scalars['Boolean'];
};

export type TeacherUpdateModuleInstanceTeacherRoleInput = {
  moduleInstanceId: Scalars['String'];
  teacherRoleId: Scalars['String'];
  userId: Scalars['String'];
};

export type TeacherUpdateModuleStudentTagInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type TeacherUpdateQuestionInput = {
  displayChatbot?: InputMaybe<Scalars['Boolean']>;
  displayFinalAnswer?: InputMaybe<Scalars['Boolean']>;
  displayStructuredTutorial?: InputMaybe<Scalars['Boolean']>;
  displayWorkedSolution?: InputMaybe<Scalars['Boolean']>;
  durationLowerBound?: InputMaybe<Scalars['Int']>;
  durationUpperBound?: InputMaybe<Scalars['Int']>;
  generatePDF?: InputMaybe<Scalars['Boolean']>;
  guidance?: InputMaybe<Scalars['String']>;
  masterContent?: InputMaybe<Scalars['String']>;
  /** If undefined, the set will be ordered after all other questions */
  number?: InputMaybe<Scalars['Int']>;
  parts?: InputMaybe<Array<TeacherCreatePartWithoutQuestionIdInput>>;
  publish: Scalars['Boolean'];
  questionId: Scalars['String'];
  skill?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TeacherUpdateSetInput = {
  chatbotVisibility?: InputMaybe<VisibilityStatusType | `${VisibilityStatusType}`>;
  description?: InputMaybe<Scalars['String']>;
  finalAnswerVisibility?: InputMaybe<VisibilityStatusType | `${VisibilityStatusType}`>;
  hiddenAt?: InputMaybe<Scalars['DateTime']>;
  isSurvey?: InputMaybe<Scalars['Boolean']>;
  manuallyHidden?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  releasedAt?: InputMaybe<Scalars['DateTime']>;
  setId: Scalars['String'];
  structuredTutorialVisibility?: InputMaybe<VisibilityStatusType | `${VisibilityStatusType}`>;
  subjectUserIds?: InputMaybe<Array<Scalars['String']>>;
  workedSolutionVisibility?: InputMaybe<VisibilityStatusType | `${VisibilityStatusType}`>;
};

export type TeacherUpdateStudentTagAssignmentsInput = {
  moduleInstanceId: Scalars['String'];
  studentTagIds?: InputMaybe<Array<Scalars['String']>>;
  userId: Scalars['String'];
};

export type TeacherUpdateStudentsTagsAssignmentsInput = {
  moduleInstanceId: Scalars['String'];
  studentTagIds?: InputMaybe<Array<Scalars['String']>>;
  userIds: Array<Scalars['String']>;
};

export enum TextEditor {
  Lexical = 'LEXICAL',
  Milkdown = 'MILKDOWN'
}

export enum TimeRangeType {
  All = 'ALL',
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export enum TimingReaction {
  Longer = 'LONGER',
  MuchLonger = 'MUCH_LONGER',
  Same = 'SAME',
  Shorter = 'SHORTER'
}

export type TimingReactionToggleInput = {
  partId: Scalars['String'];
  reaction: TimingReaction | `${TimingReaction}`;
};

export type ToggleCommentReactionInput = {
  commentId: Scalars['String'];
  questionId: Scalars['String'];
  reaction: Scalars['String'];
};

export type ToggleReaction = {
  __typename?: 'ToggleReaction';
  added: Scalars['Boolean'];
  deleted: Scalars['Boolean'];
};

export type UpdateUserSettingsInput = {
  excludeFromRecap: Scalars['JSON'];
  recapSchedule: Scalars['String'];
};

export type UpsertCanvasInput = {
  questionId: Scalars['String'];
  snapshot: Scalars['JSONObject'];
};

export type UpsertNoteInput = {
  partId: Scalars['String'];
  text: Scalars['String'];
  universalPartId: Scalars['String'];
};

export type UpsertSubmissionDraftInput = {
  snapshot: Scalars['JSON'];
  universalResponseAreaId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['String'];
  isSuperAdmin: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  recapSchedule: RecapSchedule | `${RecapSchedule}`;
  role: UserRole | `${UserRole}`;
};

export type UserListInput = {
  emails: Array<Scalars['String']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Student = 'STUDENT',
  Teacher = 'TEACHER'
}

export enum UserStatus {
  FoundInLambda = 'FOUND_IN_LAMBDA',
  FoundInUniversity = 'FOUND_IN_UNIVERSITY',
  NotFound = 'NOT_FOUND'
}

export type UserWithStatus = {
  __typename?: 'UserWithStatus';
  email: Scalars['String'];
  role?: Maybe<UserRole | `${UserRole}`>;
  status: UserStatus | `${UserStatus}`;
  studentGlobalTagNames: Array<Scalars['String']>;
  teacherGlobalTagNames: Array<Scalars['String']>;
};

export enum VisibilityStatusType {
  Hide = 'HIDE',
  Open = 'OPEN',
  OpenWithWarnings = 'OPEN_WITH_WARNINGS'
}

export type StandardAdminConversationFlagFragment = { __typename?: 'AdminConversationFlag', id: string, questionId: string, questionNumber: number, questionTitle: string, questionName: string, setId: string, setNumber: number, setName: string, moduleId: string, moduleSlug: string, moduleName: string, moduleInstanceId: string, moduleInstanceSlug: string, moduleInstanceName: string, conversationId: string, messagePairId: string, chatFunctionId: string, chatFunctionName: string, flagDetails: string, studentEmail: string, flaggedAt: string };

export type StandardAdminFunctionFragment = { __typename?: 'AdminEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ __typename?: 'AdminEvaluationFunctionTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> };

export type StandardAdminJobFragment = { __typename?: 'AdminJob', id: string, createdAt: string, createdByUserId: string, createdByUserEmail: string, cancelledByUserId?: string | null, cancelledByUserEmail?: string | null, jobStatus: JobStatus, startedAt?: string | null, finishedAt?: string | null, errorMessage?: string | null, metadata: object | number | string | boolean | null };

export type StandardAdminMessagePairCountFragment = { __typename?: 'AdminMessagePairCount', id: string, count: number, userCount: number, questionId: string, questionNumber: number, questionTitle: string, questionName: string, setId: string, setNumber: number, setTitle: string, setName: string, moduleId: string, moduleName: string, moduleInstanceId: string, moduleInstanceName: string, chatFunctionId: string, chatFunctionName: string };

export type StandardModuleInstanceToCloneFragment = { __typename?: 'AdminModuleInstance', id: string, name: string, slug: string, startedAt: string, endedAt: string, moduleId: string, moduleName: string, moduleSlug: string, teachers: Array<{ __typename?: 'AdminModuleTeacher', email: string }> };

export type StandardAdminModuleInstanceFragment = { __typename?: 'AdminModuleInstance', id: string, moduleId: string, name: string, slug: string, startedAt: string, endedAt: string, deletedAt?: string | null };

export type StandardAdminModuleFragment = { __typename?: 'AdminModule', id: string, name: string, slug: string, description: string, deletedAt?: string | null };

export type StandardAdminPartFragment = { __typename?: 'AdminPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> };

export type StandardAdminQuestionFragment = { __typename?: 'AdminQuestion', id: string, versionId: string, title: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, number: number, isSurvey: boolean, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'AdminPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> };

export type StandardAdminResponseTypeFragment = { __typename?: 'AdminResponseType', id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ __typename?: 'SupportedEvaluationFunction', id: string, name: string }> };

export type StandardAdminTeacherRoleFragment = { __typename?: 'AdminTeacherRole', id: string, description: string, teacherRoleType: TeacherRoleType, teacherCount: number, moduleInstanceCount: number };

export type StandardAdminTenantFragment = { __typename?: 'AdminTenant', id: string, homePageBanner?: string | null, signInBanner?: string | null, defaultRecapSchedule: RecapSchedule, textEditor: TextEditor, surveyDefaultReleasedAt?: string | null, surveyDefaultHiddenAt?: string | null };

export type StandardCommentFeedbackFragment = { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null };

export type CommentReactionsFragment = { __typename?: 'CommentReaction', id: string, reaction?: string | null };

export type StandardCommentFragment = { __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, comments: Array<{ __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } }>, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } };

export type CommentFieldsFragment = { __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } };

export type StandardMathpixSessionResponseFragment = { __typename?: 'MathpixSessionResponse', token: string, expiresAt: number };

export type StandardMeFragment = { __typename?: 'User', id: string, name?: string | null, email: string, role: UserRole, isSuperAdmin: boolean, recapSchedule: RecapSchedule };

export type StandardModuleInstanceUserPreferenceFragment = { __typename?: 'ModuleInstanceUserPreference', moduleInstanceId: string, key: string, value: boolean };

export type StandardModuleInstanceStatsFragment = { __typename?: 'ModuleInstanceStats', totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ __typename?: 'StudentSetPreview', id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> };

export type StandardModuleInstanceFragment = { __typename?: 'BaseModuleInstance', id: string, slug: string, name: string, startedAt: string, endedAt: string, isClosed: boolean };

export type StandardPartFragment = { __typename?: 'StudentPart', id: string, universalPartId: string, isAdmin: boolean, isMarkedComplete: boolean, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, structuredTutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseArea: Array<{ __typename?: 'StudentResponseArea', id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null }> };

export type StandardQuestionPreviewFragment = { __typename?: 'StudentQuestionPreview', id: string, setId: string, name: string, number: number, setNumber: number, setDisplayNumber: number, setName: string, title: string, markedParts: number, totalParts: number, releasedAt: string, skill: number };

export type StandardQuestionFragment = { __typename?: 'StudentQuestion', id: string, title: string, guidance?: string | null, skill?: number | null, durationLowerBound?: number | null, durationUpperBound?: number | null, displayChatbot: boolean, number: number, masterContent?: string | null, parts: Array<{ __typename?: 'StudentPart', id: string, universalPartId: string, isAdmin: boolean, isMarkedComplete: boolean, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, structuredTutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseArea: Array<{ __typename?: 'StudentResponseArea', id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null }> }> };

export type StudentModularResponseFragment = { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null };

export type StandardResponseAreaFragment = { __typename?: 'StudentResponseArea', id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null };

export type StandardSetPreviewFragment = { __typename?: 'StudentSetPreview', id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }> };

export type StandardSetResultFragment = { __typename?: 'StudentSetResult', set?: { __typename?: 'StudentSet', id: string, moduleSlug: string, moduleInstanceSlug: string, name: string, description: string, isSurvey: boolean, pdfUrl?: string | null, number: number, displayNumber: number, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }>, questions: Array<{ __typename?: 'StudentQuestion', id: string, title: string, guidance?: string | null, skill?: number | null, durationLowerBound?: number | null, durationUpperBound?: number | null, displayChatbot: boolean, number: number, masterContent?: string | null, parts: Array<{ __typename?: 'StudentPart', id: string, universalPartId: string, isAdmin: boolean, isMarkedComplete: boolean, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, structuredTutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseArea: Array<{ __typename?: 'StudentResponseArea', id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null }> }> }> } | null, error?: { __typename?: 'SetError', code: SetErrorCode, message?: string | null } | null };

export type StandardSetFragment = { __typename?: 'StudentSet', id: string, moduleSlug: string, moduleInstanceSlug: string, name: string, description: string, isSurvey: boolean, pdfUrl?: string | null, number: number, displayNumber: number, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }>, questions: Array<{ __typename?: 'StudentQuestion', id: string, title: string, guidance?: string | null, skill?: number | null, durationLowerBound?: number | null, durationUpperBound?: number | null, displayChatbot: boolean, number: number, masterContent?: string | null, parts: Array<{ __typename?: 'StudentPart', id: string, universalPartId: string, isAdmin: boolean, isMarkedComplete: boolean, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, structuredTutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseArea: Array<{ __typename?: 'StudentResponseArea', id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null }> }> }> };

export type StandardGraphStatisticsColumnFragment = { __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } };

export type StandardGraphStatisticsLineFragment = { __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } };

export type StandardGraphStatisticsFragment = { __typename?: 'GraphStatistics', columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> };

export type StandardStructuredContentFragment = { __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null };

export type StandardStudentModuleInstanceFragment = { __typename?: 'StudentModuleInstance', id: string, slug: string, name: string, startedAt: string, endedAt: string, moduleId: string, moduleSlug: string, moduleName: string, setsHeader?: string | null, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean };

export type StandardStudentGraphStatisticsFragment = { __typename?: 'StudentsAccessWeeklyGraphStatistics', studentId: string, columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, summaryLine: { __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }, moduleInstanceLines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> };

export type StandardSubmissionDraftFragment = { __typename?: 'SubmissionDraft', snapshot: object | number | string | boolean | null, feedback?: string | null, color?: string | null, isCorrect: boolean, isError: boolean, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null };

export type StandardSubmissionPreviewFragment = { __typename?: 'SubmissionPreview', isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, preview?: object | number | string | boolean | null | null };

export type StandardSubmissionWithoutFeedbackFragment = { __typename?: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string };

export type StandardSubmissionFragment = { __typename?: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null };

export type StandardGlobalTagWithDetailsFragment = { __typename?: 'GlobalTagWithDetails', id: string, type: GlobalTagType, name: string, tagOwnerEmail?: string | null, teacherEmails: Array<string> };

export type StandardGlobalTagFragment = { __typename?: 'GlobalTag', id: string, name: string };

export type StandardModerationSubmissionFragment = { __typename?: 'ModerationSubmission', id: string, createdAt: string, submission?: object | number | string | boolean | null | null, responseType: string, responseConfig?: object | number | string | boolean | null | null, moderationStatus?: SubmissionModerationStatus | null, moderationMethod?: SubmissionModerationMethod | null, moderatedAt?: string | null, moderatedBy?: string | null, moderatorEmail?: string | null, moderatorName?: string | null, moduleId: string, moduleName: string, moduleSlug: string, moduleInstanceId: string, moduleInstanceName: string, moduleInstanceSlug: string, setId: string, setName: string, setDisplayNumber: number, questionId: string, questionTitle: string, questionDisplayNumber: number, partId: string, partIndex: number, responseAreaId: string, responseAreaDisplayPosition: number, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }> };

export type StandardStudentTagFragment = { __typename?: 'StudentTag', id: string, name: string };

export type StandardFunctionCodeFragment = { __typename?: 'FunctionCode', id: string, code: AccessCode, description: string };

export type StandardTeacherFunctionFragment = { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, deletedAt?: string | null };

export type StandardTeacherModuleInstanceActivityFragment = { __typename?: 'TeacherModuleInstanceActivity', id: string, createdAt: string, resolvedAt?: string | null, userEmail: string, message?: string | null, questionId: string, questionTitle: string, questionNumber: number, partIndex: number, setId: string, setNumber: number, activityType: ActivityType, parentId?: string | null, responseAreaIndex?: number | null, rawResponse?: object | number | string | boolean | null | null };

export type StandardTeacherModuleInstanceErrorFragment = { __typename?: 'TeacherModuleInstanceError', submissionId: string, errorAt: string, resolvedAt?: string | null, studentEmail: string, rawRequest?: object | number | string | boolean | null | null, rawResponse: object | number | string | boolean | null, evaluationFunctionId?: string | null, evaluationFunctionName?: string | null, responseAreaId: string, evalutionFunctionOwnerEmail?: string | null, questionId: string, partId: string, partIndex: number, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number };

export type StandardTeacherModuleInstanceFlagFragment = { __typename?: 'TeacherModuleInstanceFlag', id: string, flaggedAt: string, resolvedAt?: string | null, studentEmail: string, comment?: string | null, questionId: string, questionVersionId: string, partId: string, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number };

export type StandardTeacherModuleInstanceStudentStatsFragment = { __typename?: 'TeacherModuleInstanceStudentStats', studentId: string, stats: { __typename?: 'ModuleInstanceStats', totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ __typename?: 'StudentSetPreview', id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> } };

export type StandardTeacherModuleInstanceFragment = { __typename?: 'TeacherModuleInstance', id: string, name: string, slug: string, startedAt: string, moduleId: string, moduleSlug: string, moduleName: string, moduleDescription: string, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean, setsHeader?: string | null, sets: Array<{ __typename?: 'TeacherSetForModuleInstance', id: string, name: string, number: number, displayNumber: number, description: string, isSurvey: boolean, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, durationLowerBound: number, durationUpperBound: number, durationWithUncertainty: boolean, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }> }> };

export type StandardTeacherModuleInstanceStudentFragment = { __typename?: 'TeacherModuleInstanceStudent', id: string, email: string, name: string, studentTags: Array<{ __typename?: 'TeacherModuleInstanceStudentLabels', id: string, name: string }>, studentGlobalTags: Array<{ __typename?: 'TeacherModuleInstanceStudentLabels', id: string, name: string }> };

export type StandardTeacherModulesActivityFragment = { __typename?: 'TeacherModulesActivity', activityType: ActivityType, ids: Array<string>, createdAt: string, resolvedAt?: string | null, userIds: Array<string>, userEmails: Array<string>, message?: string | null, moduleId: string, moduleInstanceId: string, moduleName: string, moduleSlug: string, moduleInstanceName: string, moduleInstanceSlug: string, moduleInstanceStartedAt: string, moduleInstanceTeacherRoleId: string, questionId: string, questionNumber: number, partIndex: number, questionTitle: string, setId: string, setNumber: number, parentId?: string | null };

export type StandardTeacherPartFragment = { __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> };

export type StandardTeacherQuestionFragment = { __typename?: 'TeacherQuestion', id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> };

export type TeacherModularResponseFragment = { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null };

export type StandardTeacherResponseAreaFragment = { __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null };

export type StandardTeacherResponseStatisticsFragment = { __typename?: 'TeacherAreaStatistics', position: number, responseType: string, responseConfig: object | number | string | boolean | null, answersSuppressed: boolean, suppressionReasons: Array<string>, totalSubmissionsCount: number, correctSubmissionsCount: number, studentsCount: number, correctStudentsCount: number, pendingModerationCount?: number | null, approvedModerationCount?: number | null, rejectedModerationCount?: number | null, unmoderatedSubmissionCount?: number | null, responseArea: { __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }, answers: Array<{ __typename?: 'TeacherResponseAreaStatistic', answer: object | number | string | boolean | null, latexAnswer?: string | null, simplifiedAnswer?: string | null, frequency: number, isCorrect?: boolean | null, feedback?: string | null, color?: string | null }> };

export type StandardTeacherResponseTypeFragment = { __typename?: 'TeacherResponseType', id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null };

export type StandardTeacherSetForModuleInstanceFragment = { __typename?: 'TeacherSetForModuleInstance', id: string, name: string, number: number, displayNumber: number, description: string, isSurvey: boolean, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, durationLowerBound: number, durationUpperBound: number, durationWithUncertainty: boolean, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }> };

export type StandardTeacherSetResultFragment = { __typename?: 'TeacherSetResult', set?: { __typename?: 'TeacherSet', id: string, isSurvey: boolean, name: string, number: number, displayNumber: number, description: string, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }>, questions: Array<{ __typename?: 'TeacherQuestion', id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } | null, error?: { __typename?: 'SetError', code: SetErrorCode, message?: string | null } | null };

export type StandardTeacherSetFragment = { __typename?: 'TeacherSet', id: string, isSurvey: boolean, name: string, number: number, displayNumber: number, description: string, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }>, questions: Array<{ __typename?: 'TeacherQuestion', id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> };

export type StandardTeacherStudentWithGlobalTagsFragment = { __typename?: 'TeacherStudentWithGlobalTags', id: string, email: string, globalTags: Array<{ __typename?: 'GlobalTag', id: string, name: string }>, modules: Array<{ __typename?: 'StudentGlobalTagModule', id: string, name: string, moduleInstanceId: string, moduleInstanceName: string, moduleInstanceStartedAt: string, moduleInstanceEndedAt: string }> };

export type StandardTeacherSubmissionFragment = { __typename?: 'TeacherSubmissionResponse', isCorrect: boolean, isError: boolean, feedback?: string | null, submission?: object | number | string | boolean | null | null, color?: string | null, rawResponse?: object | number | string | boolean | null | null, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null };

export type StandardTeacherRoleFragment = { __typename?: 'TeacherRole', id: string, description: string, teacherRoleType: TeacherRoleType, functionCodes: Array<{ __typename?: 'FunctionCode', id: string, code: AccessCode, description: string }> };

export type AdminAddGlobalTagMutationVariables = Exact<{
  input: AdminCreateGlobalTagInput;
}>;


export type AdminAddGlobalTagMutation = { __typename?: 'Mutation', admin_createGlobalTag: { __typename?: 'Ack', success: boolean } };

export type AdminAddGlobalTagsMutationVariables = Exact<{
  input: AdminCreateGlobalTagsInput;
}>;


export type AdminAddGlobalTagsMutation = { __typename?: 'Mutation', admin_createGlobalTags: { __typename?: 'Ack', success: boolean, count?: number | null } };

export type AdminAddStudentsMutationVariables = Exact<{
  input: AdminCreateStudentsInput;
}>;


export type AdminAddStudentsMutation = { __typename?: 'Mutation', admin_createStudents: { __typename?: 'Ack', success: boolean, count?: number | null } };

export type AdminAddTeachersMutationVariables = Exact<{
  input: AdminCreateTeacherInput;
}>;


export type AdminAddTeachersMutation = { __typename?: 'Mutation', admin_createTeachers: { __typename?: 'Ack', success: boolean, count?: number | null } };

export type AdminAddTeacherRoleMutationVariables = Exact<{
  input: AdminCreateTeacherRoleInput;
}>;


export type AdminAddTeacherRoleMutation = { __typename?: 'Mutation', admin_createTeacherRole: { __typename?: 'Ack', success: boolean } };

export type AdminAssignFunctionCodesMutationVariables = Exact<{
  input: AdminAssignFunctionCodesInput;
}>;


export type AdminAssignFunctionCodesMutation = { __typename?: 'Mutation', admin_assignFunctionCodes: { __typename?: 'Ack', success: boolean } };

export type AdminAssignGlobalTagsToStudentsMutationVariables = Exact<{
  input: AdminGlobalTagsPerUsersInput;
}>;


export type AdminAssignGlobalTagsToStudentsMutation = { __typename?: 'Mutation', admin_assignGlobalTagsToStudents: { __typename?: 'Ack', success: boolean, count?: number | null } };

export type AdminAssignGlobalTagsToTeachersMutationVariables = Exact<{
  input: AdminGlobalTagsPerUsersInput;
}>;


export type AdminAssignGlobalTagsToTeachersMutation = { __typename?: 'Mutation', admin_assignGlobalTagsToTeachers: { __typename?: 'Ack', success: boolean, count?: number | null } };

export type AdminAssignTeachersMutationVariables = Exact<{
  input: AdminAssignTeachersInput;
}>;


export type AdminAssignTeachersMutation = { __typename?: 'Mutation', admin_assignTeachers: { __typename?: 'AdminModuleInstanceWithTeachers', id: string, teachers?: Array<{ __typename?: 'Teacher', email: string, automaticallyCreated: boolean }> | null } };

export type TeacherFieldsFragment = { __typename?: 'Teacher', email: string, automaticallyCreated: boolean };

export type AdminBulkAssignGlobalTagsToStudentsMutationVariables = Exact<{
  input: AdminGlobalTagsInput;
}>;


export type AdminBulkAssignGlobalTagsToStudentsMutation = { __typename?: 'Mutation', admin_bulkAssignGlobalTagsToStudents: { __typename?: 'Ack', success: boolean } };

export type AdminBulkAssignGlobalTagsToTeachersMutationVariables = Exact<{
  input: AdminGlobalTagsInput;
}>;


export type AdminBulkAssignGlobalTagsToTeachersMutation = { __typename?: 'Mutation', admin_bulkAssignGlobalTagsToTeachers: { __typename?: 'Ack', success: boolean } };

export type AdminBulkUnassignGlobalTagsFromStudentsMutationVariables = Exact<{
  input: AdminGlobalTagsInput;
}>;


export type AdminBulkUnassignGlobalTagsFromStudentsMutation = { __typename?: 'Mutation', admin_bulkUnassignGlobalTagsFromStudents: { __typename?: 'Ack', success: boolean } };

export type AdminBulkUnassignGlobalTagsFromTeachersMutationVariables = Exact<{
  input: AdminGlobalTagsInput;
}>;


export type AdminBulkUnassignGlobalTagsFromTeachersMutation = { __typename?: 'Mutation', admin_bulkUnassignGlobalTagsFromTeachers: { __typename?: 'Ack', success: boolean } };

export type AdminCancelJobMutationVariables = Exact<{
  input: JobInput;
}>;


export type AdminCancelJobMutation = { __typename?: 'Mutation', admin_cancelJob: { __typename?: 'Ack', success: boolean } };

export type AdminCloneModuleInstanceMutationVariables = Exact<{
  input: AdminCloneModuleInstanceInput;
}>;


export type AdminCloneModuleInstanceMutation = { __typename?: 'Mutation', admin_cloneModuleInstance: { __typename?: 'AdminModuleInstance', id: string, moduleId: string, name: string, slug: string, startedAt: string, endedAt: string } };

export type TeacherDetailsFragment = { __typename?: 'Teacher', email: string, automaticallyCreated: boolean };

export type AdminCreateFunctionMutationVariables = Exact<{
  input: AdminCreateEvaluationFunctionInput;
}>;


export type AdminCreateFunctionMutation = { __typename?: 'Mutation', admin_createEvaluationFunction: { __typename?: 'AdminEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ __typename?: 'AdminEvaluationFunctionTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> } };

export type AdminCreateModuleMutationVariables = Exact<{
  input: AdminCreateModuleInput;
}>;


export type AdminCreateModuleMutation = { __typename?: 'Mutation', admin_createModule: { __typename?: 'AdminModule', id: string, name: string, slug: string, description: string } };

export type AdminCreateModuleInstanceMutationVariables = Exact<{
  input: AdminCreateModuleInstanceInput;
}>;


export type AdminCreateModuleInstanceMutation = { __typename?: 'Mutation', admin_createModuleInstance: { __typename?: 'AdminModuleInstanceWithTeachers', id: string, moduleId: string, name: string, slug: string, startedAt: string, endedAt: string, teachers?: Array<{ __typename?: 'Teacher', email: string, automaticallyCreated: boolean }> | null } };

export type AdminCreateResponseTypeMutationVariables = Exact<{
  input: AdminCreateResponseTypeInput;
}>;


export type AdminCreateResponseTypeMutation = { __typename?: 'Mutation', admin_createResponseType: { __typename?: 'AdminResponseType', id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ __typename?: 'SupportedEvaluationFunction', id: string, name: string }> } };

export type AdminCreateTemplateQuestionMutationVariables = Exact<{
  input: AdminCreateTemplateQuestionInput;
}>;


export type AdminCreateTemplateQuestionMutation = { __typename?: 'Mutation', admin_createTemplateQuestion: { __typename?: 'AdminQuestion', id: string, versionId: string, title: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, number: number, isSurvey: boolean, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'AdminPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> } };

export type AdminDeleteFunctionMutationVariables = Exact<{
  input: AdminRemoveEvaluationFunctionInput;
}>;


export type AdminDeleteFunctionMutation = { __typename?: 'Mutation', admin_deleteEvaluationFunction: { __typename?: 'AdminEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ __typename?: 'AdminEvaluationFunctionTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> } };

export type AdminDeleteGlobalTagMutationVariables = Exact<{
  input: AdminDeleteGlobalTagInput;
}>;


export type AdminDeleteGlobalTagMutation = { __typename?: 'Mutation', admin_deleteGlobalTag: { __typename?: 'Ack', success: boolean } };

export type AdminDeleteModuleMutationVariables = Exact<{
  input: AdminRemoveModuleInput;
}>;


export type AdminDeleteModuleMutation = { __typename?: 'Mutation', admin_deleteModule: { __typename?: 'AdminModule', id: string, name: string, slug: string, description: string, deletedAt?: string | null } };

export type AdminDeleteModuleInstanceMutationVariables = Exact<{
  input: AdminRemoveModuleInstanceInput;
}>;


export type AdminDeleteModuleInstanceMutation = { __typename?: 'Mutation', admin_deleteModuleInstance: { __typename?: 'AdminModuleInstance', id: string, moduleId: string, name: string, slug: string, startedAt: string, endedAt: string, deletedAt?: string | null } };

export type AdminDeleteQuestionMutationVariables = Exact<{
  input: AdminDeleteQuestionInput;
}>;


export type AdminDeleteQuestionMutation = { __typename?: 'Mutation', admin_deleteQuestion: { __typename?: 'Ack', success: boolean } };

export type AdminDeleteResponseTypeMutationVariables = Exact<{
  input: AdminRemoveResponseTypeInput;
}>;


export type AdminDeleteResponseTypeMutation = { __typename?: 'Mutation', admin_deleteResponseType: { __typename?: 'AdminResponseType', id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ __typename?: 'SupportedEvaluationFunction', id: string, name: string }> } };

export type AdminDeleteTeacherMutationVariables = Exact<{
  input: AdminDeleteTeacherInput;
}>;


export type AdminDeleteTeacherMutation = { __typename?: 'Mutation', admin_deleteTeacher: { __typename?: 'Ack', success: boolean } };

export type AdminDeleteTeacherRoleMutationVariables = Exact<{
  input: AdminDeleteTeacherRoleInput;
}>;


export type AdminDeleteTeacherRoleMutation = { __typename?: 'Mutation', admin_deleteTeacherRole: { __typename?: 'Ack', success: boolean } };

export type AdminDemoteAdminMutationVariables = Exact<{
  input: AdminDemoteAdminInput;
}>;


export type AdminDemoteAdminMutation = { __typename?: 'Mutation', admin_demoteAdmin: { __typename?: 'Ack', success: boolean } };

export type AdminReplaceAndDeleteTeacherRoleMutationVariables = Exact<{
  input: AdminReplaceAndDeleteTeacherRoleInput;
}>;


export type AdminReplaceAndDeleteTeacherRoleMutation = { __typename?: 'Mutation', admin_replaceAndDeleteTeacherRole: { __typename?: 'Ack', success: boolean } };

export type AdminRestoreFunctionMutationVariables = Exact<{
  input: AdminRestoreEvaluationFunctionInput;
}>;


export type AdminRestoreFunctionMutation = { __typename?: 'Mutation', admin_restoreEvaluationFunction: { __typename?: 'AdminEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ __typename?: 'AdminEvaluationFunctionTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> } };

export type AdminRestoreModuleMutationVariables = Exact<{
  input: AdminRestoreModuleInput;
}>;


export type AdminRestoreModuleMutation = { __typename?: 'Mutation', admin_restoreModule: { __typename?: 'AdminModule', id: string, name: string, slug: string, description: string, deletedAt?: string | null } };

export type AdminRestoreModuleInstanceMutationVariables = Exact<{
  input: AdminRestoreModuleInstanceInput;
}>;


export type AdminRestoreModuleInstanceMutation = { __typename?: 'Mutation', admin_restoreModuleInstance: { __typename?: 'AdminModuleInstance', id: string, moduleId: string, name: string, slug: string, startedAt: string, endedAt: string, deletedAt?: string | null } };

export type AdminRunJobModuleRolloverMutationVariables = Exact<{
  input: RunJobModuleRolloverInput;
}>;


export type AdminRunJobModuleRolloverMutation = { __typename?: 'Mutation', admin_runJobModuleRollover: { __typename?: 'AdminRunJobModuleRollover', jobId: string } };

export type AdminUnassignFunctionCodesMutationVariables = Exact<{
  input: AdminAssignFunctionCodesInput;
}>;


export type AdminUnassignFunctionCodesMutation = { __typename?: 'Mutation', admin_unassignFunctionCodes: { __typename?: 'Ack', success: boolean } };

export type AdminUnassignTeacherMutationVariables = Exact<{
  input: AdminUnassignTeacherInput;
}>;


export type AdminUnassignTeacherMutation = { __typename?: 'Mutation', admin_unassignTeacher: { __typename?: 'Ack', success: boolean } };

export type AdminUpdateAdminMutationVariables = Exact<{
  input: AdminUpdateAdminInput;
}>;


export type AdminUpdateAdminMutation = { __typename?: 'Mutation', admin_updateAdmin: { __typename?: 'Ack', success: boolean } };

export type AdminUpdateFunctionMutationVariables = Exact<{
  input: AdminUpdateEvaluationFunctionInput;
}>;


export type AdminUpdateFunctionMutation = { __typename?: 'Mutation', admin_updateEvaluationFunction: { __typename?: 'AdminEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ __typename?: 'AdminEvaluationFunctionTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> } };

export type AdminUpdateGlobalTagMutationVariables = Exact<{
  input: AdminUpdateGlobalTagInput;
}>;


export type AdminUpdateGlobalTagMutation = { __typename?: 'Mutation', admin_updateGlobalTag: { __typename?: 'Ack', success: boolean } };

export type AdminUpdateGlobalTagsAssignmentsToStudentsMutationVariables = Exact<{
  input: AdminUpdateGlobalTagsAssignmentsInput;
}>;


export type AdminUpdateGlobalTagsAssignmentsToStudentsMutation = { __typename?: 'Mutation', admin_updateGlobalTagsAssignmentsToStudents: { __typename?: 'Ack', success: boolean } };

export type AdminUpdateGlobalTagsAssignmentsToTeachersMutationVariables = Exact<{
  input: AdminUpdateGlobalTagsAssignmentsInput;
}>;


export type AdminUpdateGlobalTagsAssignmentsToTeachersMutation = { __typename?: 'Mutation', admin_updateGlobalTagsAssignmentsToTeachers: { __typename?: 'Ack', success: boolean } };

export type AdminUpdateModuleMutationVariables = Exact<{
  input: AdminUpdateModuleInput;
}>;


export type AdminUpdateModuleMutation = { __typename?: 'Mutation', admin_updateModule: { __typename?: 'AdminModule', id: string, name: string, slug: string, description: string } };

export type AdminUpdateModuleInstanceMutationVariables = Exact<{
  input: AdminUpdateModuleInstanceInput;
}>;


export type AdminUpdateModuleInstanceMutation = { __typename?: 'Mutation', admin_updateModuleInstance: { __typename?: 'AdminModuleInstance', id: string, name: string, slug: string, startedAt: string, endedAt: string } };

export type AdminUpdateModuleInstanceTeacherRoleMutationVariables = Exact<{
  input: AdminUpdateModuleInstanceTeacherRoleInput;
}>;


export type AdminUpdateModuleInstanceTeacherRoleMutation = { __typename?: 'Mutation', admin_updateModuleInstanceTeacherRole: { __typename?: 'Ack', success: boolean } };

export type AdminUpdateQuestionMutationVariables = Exact<{
  input: AdminUpdateQuestionInput;
}>;


export type AdminUpdateQuestionMutation = { __typename?: 'Mutation', admin_updateQuestion: { __typename?: 'AdminQuestion', id: string, versionId: string, title: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, number: number, isSurvey: boolean, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'AdminPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> } };

export type AdminUpdateResponseTypeMutationVariables = Exact<{
  input: AdminUpdateResponseTypeInput;
}>;


export type AdminUpdateResponseTypeMutation = { __typename?: 'Mutation', admin_updateResponseType: { __typename?: 'AdminResponseType', id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ __typename?: 'SupportedEvaluationFunction', id: string, name: string }> } };

export type AdminUpdateTeacherMutationVariables = Exact<{
  input: AdminUpdateTeacherInput;
}>;


export type AdminUpdateTeacherMutation = { __typename?: 'Mutation', admin_updateTeacher: { __typename?: 'Ack', success: boolean } };

export type AdminUpdateTeacherRoleMutationVariables = Exact<{
  input: AdminUpdateTeacherRoleInput;
}>;


export type AdminUpdateTeacherRoleMutation = { __typename?: 'Mutation', admin_updateTeacherRole: { __typename?: 'Ack', success: boolean } };

export type AdminUpdateTenantMutationVariables = Exact<{
  input: AdminUpdateTenantInput;
}>;


export type AdminUpdateTenantMutation = { __typename?: 'Mutation', admin_updateTenant: { __typename?: 'AdminTenant', id: string, homePageBanner?: string | null, signInBanner?: string | null, defaultRecapSchedule: RecapSchedule, textEditor: TextEditor, surveyDefaultReleasedAt?: string | null, surveyDefaultHiddenAt?: string | null } };

export type SuperadminAssignAdminMutationVariables = Exact<{
  input: SuperAdminAssignAdminInput;
}>;


export type SuperadminAssignAdminMutation = { __typename?: 'Mutation', superadmin_assignAdmin: { __typename?: 'Ack', success: boolean } };

export type CreateSignedMediaMutationVariables = Exact<{
  input: CreateSignedImageInput;
}>;


export type CreateSignedMediaMutation = { __typename?: 'Mutation', student_createSignedImage: { __typename?: 'Media', url: string, post: { __typename?: 'MediaPost', url: string, fields: object | number | string | boolean | null } } };

export type GetMathpixSessionMutationVariables = Exact<{ [key: string]: never; }>;


export type GetMathpixSessionMutation = { __typename?: 'Mutation', getMathpixSession: { __typename?: 'MathpixSessionResponse', token: string, expiresAt: number } };

export type LogButtonEventMutationVariables = Exact<{
  input: ButtonAnalyticsInput;
}>;


export type LogButtonEventMutation = { __typename?: 'Mutation', logButtonEvent: { __typename?: 'AnalyticsEvent', success: boolean } };

export type LogLoginEventMutationVariables = Exact<{ [key: string]: never; }>;


export type LogLoginEventMutation = { __typename?: 'Mutation', logLoginEvent: { __typename?: 'AnalyticsEvent', success: boolean } };

export type LogPdfEventMutationVariables = Exact<{
  input: PdfAnalyticsInput;
}>;


export type LogPdfEventMutation = { __typename?: 'Mutation', logPDFEvent: { __typename?: 'AnalyticsEvent', success: boolean } };

export type LogQuestionAccessEventMutationVariables = Exact<{
  partId: Scalars['String'];
  universalPartId: Scalars['String'];
}>;


export type LogQuestionAccessEventMutation = { __typename?: 'Mutation', logQuestionAccessEvent: { __typename?: 'AnalyticsEvent', success: boolean } };

export type LogSetAccessEventMutationVariables = Exact<{
  setId: Scalars['String'];
}>;


export type LogSetAccessEventMutation = { __typename?: 'Mutation', logSetAccessEvent: { __typename?: 'AnalyticsEvent', success: boolean } };

export type MarkCompletionMutationVariables = Exact<{
  checked: Scalars['Boolean'];
  partId: Scalars['String'];
  universalPartId: Scalars['String'];
}>;


export type MarkCompletionMutation = { __typename?: 'Mutation', markCompletion: { __typename?: 'MarkCompletion', success: boolean } };

export type StudentCreateCommentMutationVariables = Exact<{
  input: StudentCreateCommentInput;
}>;


export type StudentCreateCommentMutation = { __typename?: 'Mutation', student_createComment: { __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, comments: Array<{ __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } }>, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } } };

export type StudentCreateConversationMessagePairMutationVariables = Exact<{
  input: CreateMessagePairInput;
}>;


export type StudentCreateConversationMessagePairMutation = { __typename?: 'Mutation', createConversationMessagePair?: { __typename?: 'ConversationMessagePair', id: string, createdAt: string, conversationId: string, conversationTitle?: string | null, sentMessage: string, responseMessage?: string | null, sentAt: string, responseAt?: string | null } | null };

export type StudentDeleteCommentMutationVariables = Exact<{
  input: StudentRemoveCommentInput;
}>;


export type StudentDeleteCommentMutation = { __typename?: 'Mutation', student_deleteComment: { __typename?: 'Ack', success: boolean } };

export type StudentDemandSolutionsAccessStatusMutationVariables = Exact<{
  input: StudentSolutionsAccessInput;
}>;


export type StudentDemandSolutionsAccessStatusMutation = { __typename?: 'Mutation', student_demandSolutionsAccessStatus: { __typename?: 'StudentSolutionsAccessStatus', partId: string, universalPartId: string, solutionsStatus: Array<{ __typename?: 'StudentSolutionAccessStatus', solutionType: SolutionType, accessStatus: StudentSolutionAccessType, estimatedMinimumTime?: string | null, timeTaken?: string | null }> } };

export type StudentToggleCommentReactionMutationVariables = Exact<{
  input: ToggleCommentReactionInput;
}>;


export type StudentToggleCommentReactionMutation = { __typename?: 'Mutation', student_toggleCommentReaction: { __typename?: 'ToggleReaction', added: boolean, deleted: boolean } };

export type StudentUpsertCanvasMutationVariables = Exact<{
  input: UpsertCanvasInput;
}>;


export type StudentUpsertCanvasMutation = { __typename?: 'Mutation', upsertCanvas?: { __typename?: 'Canvas', snapshot: any } | null };

export type StudentUpsertSubmissionDraftMutationVariables = Exact<{
  input: UpsertSubmissionDraftInput;
}>;


export type StudentUpsertSubmissionDraftMutation = { __typename?: 'Mutation', upsertSubmissionDraft?: { __typename?: 'SubmissionDraft', snapshot: object | number | string | boolean | null, feedback?: string | null, color?: string | null, isCorrect: boolean, isError: boolean, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null } | null };

export type SubmitResponseMutationVariables = Exact<{
  submission?: InputMaybe<Scalars['JSON']>;
  additionalParams?: InputMaybe<Scalars['JSON']>;
  responseAreaId: Scalars['String'];
  universalResponseAreaId: Scalars['String'];
}>;


export type SubmitResponseMutation = { __typename?: 'Mutation', submitResponse: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } };

export type SubmitResponsePreviewMutationVariables = Exact<{
  submission: Scalars['JSON'];
  additionalParams?: InputMaybe<Scalars['JSON']>;
  universalResponseAreaId: Scalars['String'];
  responseAreaId: Scalars['String'];
}>;


export type SubmitResponsePreviewMutation = { __typename?: 'Mutation', submitResponsePreview: { __typename?: 'SubmissionPreview', isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, preview?: object | number | string | boolean | null | null } };

export type TeacherAddStudentsMutationVariables = Exact<{
  input: TeacherAssignStudentsInput;
}>;


export type TeacherAddStudentsMutation = { __typename?: 'Mutation', teacher_assignStudents: { __typename?: 'TeacherModuleInstance', id: string } };

export type TeacherApproveSubmissionMutationVariables = Exact<{
  submissionId: Scalars['String'];
}>;


export type TeacherApproveSubmissionMutation = { __typename?: 'Mutation', approveSubmission: boolean };

export type TeacherAssignStudentsTagsMutationVariables = Exact<{
  input: TeacherUpdateStudentsTagsAssignmentsInput;
}>;


export type TeacherAssignStudentsTagsMutation = { __typename?: 'Mutation', teacher_assignStudentsTags: { __typename?: 'Ack', success: boolean } };

export type TeacherAssignTeachersMutationVariables = Exact<{
  input: AdminAssignTeachersInput;
}>;


export type TeacherAssignTeachersMutation = { __typename?: 'Mutation', teacher_assignTeachers: { __typename?: 'Ack', success: boolean } };

export type TeacherBulkApproveSubmissionsMutationVariables = Exact<{
  input: BulkModerateSubmissionsInput;
}>;


export type TeacherBulkApproveSubmissionsMutation = { __typename?: 'Mutation', bulkApproveSubmissions: boolean };

export type TeacherBulkRejectSubmissionsMutationVariables = Exact<{
  input: BulkModerateSubmissionsInput;
}>;


export type TeacherBulkRejectSubmissionsMutation = { __typename?: 'Mutation', bulkRejectSubmissions: boolean };

export type TeacherCreateCommentMutationVariables = Exact<{
  input: TeacherCreateCommentInput;
}>;


export type TeacherCreateCommentMutation = { __typename?: 'Mutation', teacher_createComment: { __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, comments: Array<{ __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } }>, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } } };

export type TeacherCreateModuleStudentTagMutationVariables = Exact<{
  input: TeacherCreateModuleStudentTagInput;
}>;


export type TeacherCreateModuleStudentTagMutation = { __typename?: 'Mutation', teacher_createModuleStudentTag: { __typename?: 'Ack', success: boolean } };

export type TeacherCreateQuestionMutationVariables = Exact<{
  input: TeacherCreateQuestionInput;
}>;


export type TeacherCreateQuestionMutation = { __typename?: 'Mutation', teacher_createQuestion: { __typename?: 'TeacherQuestion', id: string, pdfError?: string | null } };

export type TeacherCreateSetMutationVariables = Exact<{
  input: TeacherCreateSetInput;
}>;


export type TeacherCreateSetMutation = { __typename?: 'Mutation', teacher_createSet: { __typename?: 'TeacherSet', id: string } };

export type TeacherCreateSignedImageMutationVariables = Exact<{
  input: CreateSignedImageInput;
}>;


export type TeacherCreateSignedImageMutation = { __typename?: 'Mutation', teacher_createSignedImage: { __typename?: 'Media', url: string, post: { __typename?: 'MediaPost', url: string, fields: object | number | string | boolean | null } } };

export type TeacherDeleteCommentMutationVariables = Exact<{
  input: TeacherRemoveCommentInput;
}>;


export type TeacherDeleteCommentMutation = { __typename?: 'Mutation', teacher_deleteComment: { __typename?: 'Ack', success: boolean } };

export type TeacherDeleteModuleStudentTagMutationVariables = Exact<{
  input: TeacherDeleteModuleStudentTagInput;
}>;


export type TeacherDeleteModuleStudentTagMutation = { __typename?: 'Mutation', teacher_deleteModuleStudentTag: { __typename?: 'Ack', success: boolean } };

export type TeacherDeleteQuestionMutationVariables = Exact<{
  input: TeacherDeleteQuestionInput;
}>;


export type TeacherDeleteQuestionMutation = { __typename?: 'Mutation', teacher_deleteQuestion: { __typename?: 'DeletedQuestion', questionId?: string | null, pdfError?: string | null } };

export type TeacherDeleteSetMutationVariables = Exact<{
  input: TeacherDeleteSetInput;
}>;


export type TeacherDeleteSetMutation = { __typename?: 'Mutation', teacher_deleteSet: { __typename?: 'Ack', success: boolean } };

export type TeacherExportQuestionMutationVariables = Exact<{
  input: TeacherExportQuestionInput;
}>;


export type TeacherExportQuestionMutation = { __typename?: 'Mutation', teacher_exportQuestion: { __typename?: 'TeacherDataExport', zippedData: string, zippedFileName: string, warnings: Array<string> } };

export type TeacherExportSetMutationVariables = Exact<{
  input: TeacherExportSetInput;
}>;


export type TeacherExportSetMutation = { __typename?: 'Mutation', teacher_exportSet: { __typename?: 'TeacherDataExport', zippedData: string, zippedFileName: string, warnings: Array<string> } };

export type TeacherExportSetAsPdfMutationVariables = Exact<{
  input: TeacherExportSetAsPdfInput;
}>;


export type TeacherExportSetAsPdfMutation = { __typename?: 'Mutation', teacher_exportSetAsPdf: { __typename?: 'TeacherExportSetAsPdf', exportedPdfUrl: string, pdfError?: string | null } };

export type TeacherGetGuidanceTimeMutationVariables = Exact<{
  input: TeacherGuidanceTimeInput;
}>;


export type TeacherGetGuidanceTimeMutation = { __typename?: 'Mutation', teacher_getGuidanceTime: { __typename?: 'TeacherGuidanceTimeResponse', upperBound: number, lowerBound: number } };

export type TeacherImportQuestionsMutationVariables = Exact<{
  input: TeacherImportQuestionsInput;
}>;


export type TeacherImportQuestionsMutation = { __typename?: 'Mutation', teacher_importQuestions: { __typename?: 'TeacherQuestionsImport', questionIds: Array<string>, pdfError?: string | null } };

export type TeacherImportSetMutationVariables = Exact<{
  input: TeacherImportSetInput;
}>;


export type TeacherImportSetMutation = { __typename?: 'Mutation', teacher_importSet: { __typename?: 'TeacherSetImport', setId: string, pdfError?: string | null } };

export type TeacherModuleInstanceResolveActivitiesMutationVariables = Exact<{
  input: TeacherModuleInstanceResolveActivitiesInput;
}>;


export type TeacherModuleInstanceResolveActivitiesMutation = { __typename?: 'Mutation', teacher_moduleInstanceResolveActivities: { __typename?: 'Ack', success: boolean } };

export type TeacherModuleInstanceResolveActivityMutationVariables = Exact<{
  input: TeacherModuleInstanceResolveActivityInput;
}>;


export type TeacherModuleInstanceResolveActivityMutation = { __typename?: 'Mutation', teacher_moduleInstanceResolveActivity: { __typename?: 'Ack', success: boolean } };

export type TeacherModuleInstanceResolveFlagsMutationVariables = Exact<{
  input: TeacherModuleInstanceResolveFlagInput;
}>;


export type TeacherModuleInstanceResolveFlagsMutation = { __typename?: 'Mutation', teacher_moduleInstanceResolveFlags: { __typename?: 'Ack', success: boolean } };

export type TeacherPublishCommentMutationVariables = Exact<{
  input: TeacherPublishCommentInput;
}>;


export type TeacherPublishCommentMutation = { __typename?: 'Mutation', teacher_publishComment: { __typename?: 'Ack', success: boolean } };

export type TeacherPublishQuestionsMutationVariables = Exact<{
  input: TeacherPublishQuestionsInput;
}>;


export type TeacherPublishQuestionsMutation = { __typename?: 'Mutation', teacher_publishQuestions: { __typename?: 'TeacherQuestionsPublish', questionsForPublishing: Array<number>, questionsNotChanged: Array<number>, pdfError?: string | null } };

export type TeacherRejectSubmissionMutationVariables = Exact<{
  submissionId: Scalars['String'];
}>;


export type TeacherRejectSubmissionMutation = { __typename?: 'Mutation', rejectSubmission: boolean };

export type TeacherRemoveStudentMutationVariables = Exact<{
  input: TeacherRemoveStudentInput;
}>;


export type TeacherRemoveStudentMutation = { __typename?: 'Mutation', teacher_removeStudent: { __typename?: 'Ack', success: boolean } };

export type TeacherRemoveStudentsMutationVariables = Exact<{
  input: TeacherRemoveStudentsInput;
}>;


export type TeacherRemoveStudentsMutation = { __typename?: 'Mutation', teacher_removeStudents: { __typename?: 'Ack', success: boolean } };

export type TeacherReorderQuestionsMutationVariables = Exact<{
  input: TeacherReorderQuestionsInput;
}>;


export type TeacherReorderQuestionsMutation = { __typename?: 'Mutation', teacher_reorderQuestions: { __typename?: 'Ack', success: boolean } };

export type TeacherReorderSetsMutationVariables = Exact<{
  input: TeacherReorderSetsInput;
}>;


export type TeacherReorderSetsMutation = { __typename?: 'Mutation', teacher_reorderSets: Array<{ __typename?: 'TeacherSet', id: string }> };

export type TeacherRetrieveModuleInstanceErrorsMutationVariables = Exact<{
  input: TeacherModuleInstancePaginationInput;
}>;


export type TeacherRetrieveModuleInstanceErrorsMutation = { __typename?: 'Mutation', teacher_retrieveModuleInstanceErrors: { __typename?: 'TeacherModuleInstanceErrorConnection', total: number, edges: Array<{ __typename?: 'TeacherModuleInstanceError', submissionId: string, errorAt: string, resolvedAt?: string | null, studentEmail: string, rawRequest?: object | number | string | boolean | null | null, rawResponse: object | number | string | boolean | null, evaluationFunctionId?: string | null, evaluationFunctionName?: string | null, responseAreaId: string, evalutionFunctionOwnerEmail?: string | null, questionId: string, partId: string, partIndex: number, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number }> } };

export type TeacherRetrieveModuleInstanceFlagsMutationVariables = Exact<{
  input: TeacherModuleInstanceFlagsInput;
}>;


export type TeacherRetrieveModuleInstanceFlagsMutation = { __typename?: 'Mutation', teacher_retrieveModuleInstanceFlags: { __typename?: 'TeacherModuleInstanceFlagConnection', total: number, edges: Array<{ __typename?: 'TeacherModuleInstanceFlag', id: string, flaggedAt: string, resolvedAt?: string | null, studentEmail: string, comment?: string | null, questionId: string, questionVersionId: string, partId: string, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number }> } };

export type TeacherRetrieveModuleInstanceActivitiesMutationVariables = Exact<{
  input: TeacherModuleInstanceActivitiesInput;
}>;


export type TeacherRetrieveModuleInstanceActivitiesMutation = { __typename?: 'Mutation', teacher_retrieveModuleInstanceActivities: { __typename?: 'TeacherModuleInstanceActivityConnection', total: number, edges: Array<{ __typename?: 'TeacherModuleInstanceActivity', id: string, createdAt: string, resolvedAt?: string | null, userEmail: string, message?: string | null, questionId: string, questionTitle: string, questionNumber: number, partIndex: number, setId: string, setNumber: number, activityType: ActivityType, parentId?: string | null, responseAreaIndex?: number | null, rawResponse?: object | number | string | boolean | null | null }> } };

export type TeacherRevertToQuestionVersionMutationVariables = Exact<{
  input: TeacherRevertToQuestionVersionInput;
}>;


export type TeacherRevertToQuestionVersionMutation = { __typename?: 'Mutation', teacher_revertToQuestionVersion: { __typename?: 'TeacherQuestion', id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> } };

export type TeacherSaveImportedQuestionsMutationVariables = Exact<{
  input: TeacherSaveImportedQuestionsInput;
}>;


export type TeacherSaveImportedQuestionsMutation = { __typename?: 'Mutation', teacher_saveImportedQuestions: { __typename?: 'TeacherImportedQuestionsSaved', importedQuestionIds: Array<string> } };

export type TeacherSubmitTestMutationVariables = Exact<{
  input: TeacherSubmitTestInput;
}>;


export type TeacherSubmitTestMutation = { __typename?: 'Mutation', teacher_submitTest: { __typename?: 'TeacherSubmissionResponse', isCorrect: boolean, isError: boolean, feedback?: string | null, submission?: object | number | string | boolean | null | null, color?: string | null, rawResponse?: object | number | string | boolean | null | null, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null } };

export type TeacherTestSubmisionPreviewMutationVariables = Exact<{
  input: TeacherPreviewTestInput;
}>;


export type TeacherTestSubmisionPreviewMutation = { __typename?: 'Mutation', teacher_testSubmissionResponsePreview: { __typename?: 'SubmissionPreview', isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, preview?: object | number | string | boolean | null | null } };

export type TeacherToggleCommentReactionMutationVariables = Exact<{
  input: ToggleCommentReactionInput;
}>;


export type TeacherToggleCommentReactionMutation = { __typename?: 'Mutation', teacher_toggleCommentReaction: { __typename?: 'ToggleReaction', added: boolean, deleted: boolean } };

export type TeacherToggleSetVisiblityMutationVariables = Exact<{
  input: TeacherSetVisibilityInput;
}>;


export type TeacherToggleSetVisiblityMutation = { __typename?: 'Mutation', teacher_setSetVisibility: { __typename?: 'TeacherSet', id: string } };

export type TeacherUnassignStudentsTagsMutationVariables = Exact<{
  input: TeacherUpdateStudentsTagsAssignmentsInput;
}>;


export type TeacherUnassignStudentsTagsMutation = { __typename?: 'Mutation', teacher_unassignStudentsTags: { __typename?: 'Ack', success: boolean } };

export type TeacherUnassignTeachersMutationVariables = Exact<{
  input: AdminUnassignTeacherInput;
}>;


export type TeacherUnassignTeachersMutation = { __typename?: 'Mutation', teacher_unassignTeacher: { __typename?: 'Ack', success: boolean } };

export type TeacherUpdateModuleInstanceMutationVariables = Exact<{
  input: TeacherUpdateModuleInstanceInput;
}>;


export type TeacherUpdateModuleInstanceMutation = { __typename?: 'Mutation', teacher_updateModuleInstance: { __typename?: 'TeacherModuleInstance', id: string, allowComments: boolean, publishCommentInstantly: boolean, allowChatbot: boolean } };

export type TeacherUpdateModuleInstanceTeacherRoleMutationVariables = Exact<{
  input: TeacherUpdateModuleInstanceTeacherRoleInput;
}>;


export type TeacherUpdateModuleInstanceTeacherRoleMutation = { __typename?: 'Mutation', teacher_updateModuleInstanceTeacherRole: { __typename?: 'Ack', success: boolean } };

export type TeacherUpdateModuleStudentTagMutationVariables = Exact<{
  input: TeacherUpdateModuleStudentTagInput;
}>;


export type TeacherUpdateModuleStudentTagMutation = { __typename?: 'Mutation', teacher_updateModuleStudentTag: { __typename?: 'Ack', success: boolean } };

export type TeacherUpdateQuestionMutationVariables = Exact<{
  input: TeacherUpdateQuestionInput;
}>;


export type TeacherUpdateQuestionMutation = { __typename?: 'Mutation', teacher_updateQuestion: { __typename?: 'TeacherQuestion', id: string, pdfError?: string | null } };

export type TeacherUpdateQuestionDraftMutationVariables = Exact<{
  input: TeacherUpdateQuestionInput;
}>;


export type TeacherUpdateQuestionDraftMutation = { __typename?: 'Mutation', teacher_updateQuestionDraft: { __typename?: 'TeacherQuestion', id: string } };

export type TeacherUpdateQuestionSettingsMutationVariables = Exact<{
  input: TeacherQuestionSettingsInput;
}>;


export type TeacherUpdateQuestionSettingsMutation = { __typename?: 'Mutation', teacher_updateQuestionSettings: { __typename?: 'Ack', success: boolean } };

export type TeacherUpdateSetMutationVariables = Exact<{
  input: TeacherUpdateSetInput;
}>;


export type TeacherUpdateSetMutation = { __typename?: 'Mutation', teacher_updateSet: { __typename?: 'TeacherSet', id: string } };

export type TeacherUpdateSetsHeaderMutationVariables = Exact<{
  input: TeacherSetsHeaderInput;
}>;


export type TeacherUpdateSetsHeaderMutation = { __typename?: 'Mutation', teacher_updateSetsHeader: { __typename?: 'Ack', success: boolean } };

export type TeacherUpdateStudentTagAssignmentsMutationVariables = Exact<{
  input: TeacherUpdateStudentTagAssignmentsInput;
}>;


export type TeacherUpdateStudentTagAssignmentsMutation = { __typename?: 'Mutation', teacher_updateStudentTagAssignments: { __typename?: 'Ack', success: boolean } };

export type ToggleReactionMutationVariables = Exact<{
  input: ReactionToggleInput;
}>;


export type ToggleReactionMutation = { __typename?: 'Mutation', toggleReaction: { __typename?: 'ToggleReaction', added: boolean, deleted: boolean } };

export type ToggleTimingReactionMutationVariables = Exact<{
  input: TimingReactionToggleInput;
}>;


export type ToggleTimingReactionMutation = { __typename?: 'Mutation', toggleTimingReaction: { __typename?: 'ToggleReaction', added: boolean, deleted: boolean } };

export type UpdateUserSettingsMutationVariables = Exact<{
  input: UpdateUserSettingsInput;
}>;


export type UpdateUserSettingsMutation = { __typename?: 'Mutation', updateUserSettings: { __typename?: 'Ack', success: boolean } };

export type UpsertNoteMutationVariables = Exact<{
  input: UpsertNoteInput;
}>;


export type UpsertNoteMutation = { __typename?: 'Mutation', upsertNote?: { __typename?: 'Note', text: string } | null };

export type AdminGetActiveModulesQueryVariables = Exact<{
  input: AdminActiveModulesInput;
}>;


export type AdminGetActiveModulesQuery = { __typename?: 'Query', admin_activeModules?: { __typename?: 'AdminActiveModules', activeModules: number, activeSets: number, activeQuestions: number, activeParts: number, activeResponseAreas: number, activeEvaluationFunctions: number } | null };

export type AdminGetAdminsQueryVariables = Exact<{
  input: AdminTeachersInput;
}>;


export type AdminGetAdminsQuery = { __typename?: 'Query', admin_teachers: { __typename?: 'AdminTeacherConnection', total: number, edges: Array<{ __typename?: 'AdminTeacher', id: string, name?: string | null, email: string, role: UserRole, recapSchedule: RecapSchedule, teacherGlobalTags: Array<{ __typename?: 'AdminTeacherGlobalTag', id: string, name: string }>, studentGlobalTags: Array<{ __typename?: 'GlobalTag', id: string, name: string }> }> } };

export type AdminGetConversationFlagsQueryVariables = Exact<{
  input: AdminConversationFlagsInput;
}>;


export type AdminGetConversationFlagsQuery = { __typename?: 'Query', admin_conversationFlags: { __typename?: 'AdminConversationFlags', total: number, edges: Array<{ __typename?: 'AdminConversationFlag', id: string, questionId: string, questionNumber: number, questionTitle: string, questionName: string, setId: string, setNumber: number, setName: string, moduleId: string, moduleSlug: string, moduleName: string, moduleInstanceId: string, moduleInstanceSlug: string, moduleInstanceName: string, conversationId: string, messagePairId: string, chatFunctionId: string, chatFunctionName: string, flagDetails: string, studentEmail: string, flaggedAt: string }> } };

export type AdminGetConversationFlagsStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetConversationFlagsStatisticsQuery = { __typename?: 'Query', admin_conversationFlagsStatistics?: { __typename?: 'AdminConversationFlagsStatistics', total: number, lastYear: number, lastMonth: number, lastWeek: number, lastDay: number } | null };

export type AdminGetEvaluationFunctionErrorsQueryVariables = Exact<{
  input: AdminEvaluationFunctionErrorsInput;
}>;


export type AdminGetEvaluationFunctionErrorsQuery = { __typename?: 'Query', admin_evaluationFunctionErrors: { __typename?: 'AdminEvaluationFunctionErrors', total: number, edges: Array<{ __typename?: 'AdminEvaluationFunctionError', moduleId: string, moduleName: string, moduleInstanceId: string, moduleInstanceSlug: string, setId: string, setName: string, questionId: string, questionNumber: number, questionTitle: string }> } };

export type AdminGetEvaluationFunctionGroupedErrorsQueryVariables = Exact<{
  input: AdminEvaluationFunctionGroupedErrorsInput;
}>;


export type AdminGetEvaluationFunctionGroupedErrorsQuery = { __typename?: 'Query', admin_evaluationFunctionGroupedErrors: { __typename?: 'AdminEvaluationFunctionGroupedErrors', evaluationFunctionId: string, evaluationFunctionName?: string | null, total: number, edges: Array<{ __typename?: 'AdminEvaluationFunctionGroupedError', feedback?: string | null, rawResponse: object | number | string | boolean | null, errorCount: number, rowId: string }> } };

export type AdminGetEvaluationFunctionStatisticsQueryVariables = Exact<{
  input: AdminEvaluationFunctionsStatisticsInput;
}>;


export type AdminGetEvaluationFunctionStatisticsQuery = { __typename?: 'Query', admin_evaluationFunctionsStatistics?: { __typename?: 'AdminEvaluationFunctionsStatistics', total: number, edges: Array<{ __typename?: 'AdminEvaluationFunctionsStatistic', id: string, name: string, responseAreaCount: number, submissionCount: number, errorCount: number, errorCountLastYear: number, errorCountLastMonth: number, errorCountLastWeek: number, errorCountLastDay: number }> } | null };

export type AdminGetFunctionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AdminGetFunctionQuery = { __typename?: 'Query', admin_evaluationFunction?: { __typename?: 'AdminEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ __typename?: 'AdminEvaluationFunctionTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> } | null };

export type AdminGetFunctionCodesAllQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetFunctionCodesAllQuery = { __typename?: 'Query', admin_functionCodesAll: Array<{ __typename?: 'FunctionCode', id: string, code: AccessCode, description: string }> };

export type AdminGetFunctionsQueryVariables = Exact<{
  input: AdminEvaluationFunctionsInput;
}>;


export type AdminGetFunctionsQuery = { __typename?: 'Query', admin_evaluationFunctions: { __typename?: 'AdminEvaluationFunctionConnection', total: number, edges: Array<{ __typename?: 'AdminEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ __typename?: 'AdminEvaluationFunctionTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> }> } };

export type AdminGetGlobalTagQueryVariables = Exact<{
  input: AdminGetGlobalTagInput;
}>;


export type AdminGetGlobalTagQuery = { __typename?: 'Query', admin_globalTag?: { __typename?: 'GlobalTagWithDetails', id: string, type: GlobalTagType, name: string, tagOwnerEmail?: string | null, teacherEmails: Array<string> } | null };

export type AdminGetGlobalTagsAllQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetGlobalTagsAllQuery = { __typename?: 'Query', admin_globalTagsAll: Array<{ __typename?: 'GlobalTagWithDetails', id: string, type: GlobalTagType, name: string, tagOwnerEmail?: string | null, teacherEmails: Array<string> }> };

export type AdminGetGlobalTagsStatusQueryVariables = Exact<{
  input: AdminFindGlobalTagsInput;
}>;


export type AdminGetGlobalTagsStatusQuery = { __typename?: 'Query', admin_globalTagsStatus: { __typename?: 'AdminGlobalTagsStatus', globalTagsStatus: Array<{ __typename?: 'GlobalTagStatus', id: string, name: string, status: TagStatus, similarExistingTags: Array<{ __typename?: 'GlobalTag', id: string, name: string }>, similarOtherNewTags: Array<{ __typename?: 'GlobalTag', id: string, name: string }> }> } };

export type AdminGetJobModuleRolloverQueryVariables = Exact<{
  input: JobInput;
}>;


export type AdminGetJobModuleRolloverQuery = { __typename?: 'Query', admin_jobModuleRollover: { __typename?: 'AdminJobModuleRolloverWithInstances', id: string, createdAt: string, createdByUserId: string, createdByUserEmail: string, cancelledByUserId?: string | null, cancelledByUserEmail?: string | null, jobStatus: JobStatus, startedAt?: string | null, finishedAt?: string | null, errorMessage?: string | null, metadata: object | number | string | boolean | null, newName?: string | null, newSlug?: string | null, newStartedAt?: string | null, newEndedAt?: string | null, daysOffset?: number | null, includeUnpublishedQuestions?: boolean | null, carryOverCommentSetting?: boolean | null, allowComments?: boolean | null, allowChatbot?: boolean | null, publishCommentInstantly?: boolean | null, moduleRolloverJobInstances: Array<{ __typename?: 'AdminJobInstanceModuleRollover', id: string, jobInstanceStatus: JobInstanceStatus, startedAt?: string | null, finishedAt?: string | null, errorMessage?: string | null, moduleId: string, moduleSlug: string, sourceModuleInstanceId: string, sourceModuleInstanceSlug: string, targetModuleInstanceId?: string | null, targetModuleInstanceSlug?: string | null }> } };

export type AdminGetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetJobsQuery = { __typename?: 'Query', admin_jobs: Array<{ __typename?: 'AdminJob', id: string, createdAt: string, createdByUserId: string, createdByUserEmail: string, cancelledByUserId?: string | null, cancelledByUserEmail?: string | null, jobStatus: JobStatus, startedAt?: string | null, finishedAt?: string | null, errorMessage?: string | null, metadata: object | number | string | boolean | null }> };

export type AdminGetMessagePairCountStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetMessagePairCountStatisticsQuery = { __typename?: 'Query', admin_messagePairCountStatistics?: { __typename?: 'AdminMessagePairCountStatistics', total: number, lastYear: number, lastMonth: number, lastWeek: number, lastDay: number } | null };

export type AdminGetMessagePairCountsQueryVariables = Exact<{
  input: AdminMessagePairCountInput;
}>;


export type AdminGetMessagePairCountsQuery = { __typename?: 'Query', admin_messagePairCounts: { __typename?: 'AdminMessagePairCounts', total: number, totalCounts: number, edges: Array<{ __typename?: 'AdminMessagePairCount', id: string, count: number, userCount: number, questionId: string, questionNumber: number, questionTitle: string, questionName: string, setId: string, setNumber: number, setTitle: string, setName: string, moduleId: string, moduleName: string, moduleInstanceId: string, moduleInstanceName: string, chatFunctionId: string, chatFunctionName: string }> } };

export type AdminGetModuleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AdminGetModuleQuery = { __typename?: 'Query', admin_module?: { __typename?: 'AdminModule', id: string, name: string, slug: string, description: string, deletedAt?: string | null } | null };

export type AdminGetModuleInstanceQueryVariables = Exact<{
  id: Scalars['String'];
  inputTeachers: AdminModuleInstanceTeachersInput;
}>;


export type AdminGetModuleInstanceQuery = { __typename?: 'Query', admin_moduleInstance?: { __typename?: 'AdminModuleInstance', id: string, name: string, slug: string, startedAt: string, endedAt: string, moduleId: string, moduleName: string, moduleSlug: string, allowComments: boolean, publishCommentInstantly: boolean, teachers: Array<{ __typename?: 'AdminModuleTeacher', id: string, email: string, teacherRoleId: string }> } | null };

export type AdminGetModuleInstancesQueryVariables = Exact<{
  input: AdminModuleInstancesInput;
  inputTeachers: AdminModuleInstanceTeachersInput;
}>;


export type AdminGetModuleInstancesQuery = { __typename?: 'Query', admin_moduleInstances: { __typename?: 'AdminModuleInstanceConnection', total: number, edges: Array<{ __typename?: 'AdminModuleInstance', id: string, name: string, slug: string, startedAt: string, endedAt: string, deletedAt?: string | null, teachers: Array<{ __typename?: 'AdminModuleTeacher', email: string }> }> } };

export type AdminGetModuleInstancesForRolloverQueryVariables = Exact<{
  inputTeachers: AdminModuleInstanceTeachersInput;
}>;


export type AdminGetModuleInstancesForRolloverQuery = { __typename?: 'Query', admin_moduleInstancesForRollover: { __typename?: 'AdminModuleInstanceConnection', total: number, edges: Array<{ __typename?: 'AdminModuleInstance', id: string, name: string, slug: string, startedAt: string, endedAt: string, moduleId: string, moduleName: string, moduleSlug: string, teachers: Array<{ __typename?: 'AdminModuleTeacher', email: string }> }> } };

export type AdminGetModulesQueryVariables = Exact<{
  input: AdminModulesInput;
}>;


export type AdminGetModulesQuery = { __typename?: 'Query', admin_modules: { __typename?: 'AdminModuleConnection', total: number, edges: Array<{ __typename?: 'AdminModule', id: string, name: string, slug: string, description: string, deletedAt?: string | null, numberOfModuleInstances: number }> } };

export type AdminGetResponseTypeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AdminGetResponseTypeQuery = { __typename?: 'Query', admin_responseType: { __typename?: 'AdminResponseType', id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ __typename?: 'SupportedEvaluationFunction', id: string, name: string }> } };

export type AdminGetResponseTypesQueryVariables = Exact<{
  input: AdminResponseTypesInput;
}>;


export type AdminGetResponseTypesQuery = { __typename?: 'Query', admin_responseTypes: { __typename?: 'AdminResponseTypeConnection', total: number, edges: Array<{ __typename?: 'AdminResponseType', id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ __typename?: 'SupportedEvaluationFunction', id: string, name: string }> }> } };

export type AdminGetResponseTypesAllQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetResponseTypesAllQuery = { __typename?: 'Query', admin_responseTypesAll: { __typename?: 'AdminResponseTypeConnection', total: number, edges: Array<{ __typename?: 'AdminResponseType', id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ __typename?: 'SupportedEvaluationFunction', id: string, name: string }> }> } };

export type AdminGetStudentsQueryVariables = Exact<{
  input: AdminStudentsInput;
}>;


export type AdminGetStudentsQuery = { __typename?: 'Query', admin_students: { __typename?: 'AdminStudentConnection', total: number, edges: Array<{ __typename?: 'AdminStudent', id: string, name?: string | null, email: string, globalTags: Array<{ __typename?: 'GlobalTag', id: string, name: string }> }> } };

export type AdminGetTeacherQueryVariables = Exact<{
  input: AdminGetUserInput;
}>;


export type AdminGetTeacherQuery = { __typename?: 'Query', admin_teacherDetails: { __typename?: 'AdminTeacherDetails', id: string, name?: string | null, email: string, role: UserRole, recapSchedule: RecapSchedule, teacherGlobalTagIds: Array<string>, studentGlobalTagIds: Array<string>, moduleInstances: Array<{ __typename?: 'AdminTeacherModuleInstanceDetails', id: string, name: string, startedAt: string, endedAt: string, moduleId: string, moduleName: string, teacherRoleId?: string | null, tutorRoleId?: string | null, globalTagIds: Array<string> }> } };

export type AdminGetTeacherRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetTeacherRolesQuery = { __typename?: 'Query', admin_teacherRoles: Array<{ __typename?: 'AdminTeacherRole', id: string, description: string, teacherRoleType: TeacherRoleType, teacherCount: number, moduleInstanceCount: number }> };

export type AdminGetTeachersQueryVariables = Exact<{
  input: AdminTeachersInput;
}>;


export type AdminGetTeachersQuery = { __typename?: 'Query', admin_teachers: { __typename?: 'AdminTeacherConnection', total: number, edges: Array<{ __typename?: 'AdminTeacher', id: string, name?: string | null, email: string, role: UserRole }> } };

export type AdminGetTeachersAllQueryVariables = Exact<{
  input: AdminTeachersInput;
}>;


export type AdminGetTeachersAllQuery = { __typename?: 'Query', admin_teachers: { __typename?: 'AdminTeacherConnection', total: number, edges: Array<{ __typename?: 'AdminTeacher', id: string, name?: string | null, email: string, role: UserRole }> } };

export type AdminGetTeachersWithModuleInstancesQueryVariables = Exact<{
  input: AdminTeachersInput;
}>;


export type AdminGetTeachersWithModuleInstancesQuery = { __typename?: 'Query', admin_teachers: { __typename?: 'AdminTeacherConnection', total: number, edges: Array<{ __typename?: 'AdminTeacher', id: string, name?: string | null, email: string, role: UserRole, recapSchedule: RecapSchedule, teacherGlobalTags: Array<{ __typename?: 'AdminTeacherGlobalTag', id: string, name: string, isTagOwner: boolean }>, studentGlobalTags: Array<{ __typename?: 'GlobalTag', id: string, name: string }>, moduleInstances: Array<{ __typename?: 'AdminTeacherModuleInstance', id: string, name: string, startedAt: string, moduleName: string, moduleId: string }> }> } };

export type AdminGetTemplateQuestionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AdminGetTemplateQuestionQuery = { __typename?: 'Query', admin_templateQuestion?: { __typename?: 'AdminQuestion', id: string, versionId: string, title: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, number: number, isSurvey: boolean, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'AdminPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> } | null };

export type AdminGetTemplateQuestionsQueryVariables = Exact<{
  first: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type AdminGetTemplateQuestionsQuery = { __typename?: 'Query', admin_templateQuestions: { __typename?: 'AdminQuestionConnection', total: number, edges: Array<{ __typename?: 'AdminQuestion', id: string, versionId: string, title: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, number: number, isSurvey: boolean, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'AdminPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } };

export type AdminGetTenantQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetTenantQuery = { __typename?: 'Query', admin_tenant: { __typename?: 'AdminTenant', id: string, homePageBanner?: string | null, signInBanner?: string | null, defaultRecapSchedule: RecapSchedule, textEditor: TextEditor, surveyDefaultReleasedAt?: string | null, surveyDefaultHiddenAt?: string | null } };

export type AdminGetTenantTextEditorQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetTenantTextEditorQuery = { __typename?: 'Query', admin_tenant: { __typename?: 'AdminTenant', textEditor: TextEditor } };

export type AdminGetUserAccessEventsQueryVariables = Exact<{
  input: AdminUserAccessEventsInput;
}>;


export type AdminGetUserAccessEventsQuery = { __typename?: 'Query', admin_userAccessEvents: { __typename?: 'AdminUserAccessEvents', userAccessEvents: Array<{ __typename?: 'AdminEventTypeUserAccess', eventAccessType: string, eventUserAccess: Array<{ __typename?: 'AdminEventUserAccess', timePartNumber: string, accessCount: number }> }> } };

export type AdminGetUserNumbersQueryVariables = Exact<{
  input: AdminUserNumbersInput;
}>;


export type AdminGetUserNumbersQuery = { __typename?: 'Query', admin_userNumbers: { __typename?: 'AdminUserNumbers', totalUsers: number, teacherUsers: number, studentUsers: number, adminUsers: number } };

export type AdminGetUsersStatusQueryVariables = Exact<{
  input: UserListInput;
}>;


export type AdminGetUsersStatusQuery = { __typename?: 'Query', admin_usersStatus: { __typename?: 'AdminUsersStatus', usersWithStatus: Array<{ __typename?: 'UserWithStatus', email: string, status: UserStatus, role?: UserRole | null, studentGlobalTagNames: Array<string>, teacherGlobalTagNames: Array<string> }> } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name?: string | null, email: string, role: UserRole, isSuperAdmin: boolean, recapSchedule: RecapSchedule } };

export type ListModuleInstanceUserPreferencesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListModuleInstanceUserPreferencesQuery = { __typename?: 'Query', moduleInstanceUserPreferences: { __typename?: 'ModuleInstanceUserPreferenceList', total: number, edges: Array<{ __typename?: 'ModuleInstanceUserPreference', moduleInstanceId: string, key: string, value: boolean }> } };

export type GetNoteQueryVariables = Exact<{
  input: GetNoteInput;
}>;


export type GetNoteQuery = { __typename?: 'Query', getNote?: { __typename?: 'Note', text: string } | null };

export type GetQuestionReactionsQueryVariables = Exact<{
  input: ReactionsInput;
}>;


export type GetQuestionReactionsQuery = { __typename?: 'Query', student_reactions: { __typename?: 'StudentQuestionReactions', userReactions: Array<string>, reactionStats: Array<{ __typename?: 'StudentQuestionReaction', reaction: string, count: number }> } };

export type GetSetQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetSetQuery = { __typename?: 'Query', student_set?: { __typename?: 'StudentSetResult', set?: { __typename?: 'StudentSet', id: string, moduleSlug: string, moduleInstanceSlug: string, name: string, description: string, isSurvey: boolean, pdfUrl?: string | null, number: number, displayNumber: number, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }>, questions: Array<{ __typename?: 'StudentQuestion', id: string, title: string, guidance?: string | null, skill?: number | null, durationLowerBound?: number | null, durationUpperBound?: number | null, displayChatbot: boolean, number: number, masterContent?: string | null, parts: Array<{ __typename?: 'StudentPart', id: string, universalPartId: string, isAdmin: boolean, isMarkedComplete: boolean, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, structuredTutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseArea: Array<{ __typename?: 'StudentResponseArea', id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { __typename?: 'MatchedCase', feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null }> }> }> } | null, error?: { __typename?: 'SetError', code: SetErrorCode, message?: string | null } | null } | null };

export type StudentGetCanvasQueryVariables = Exact<{
  input: GetCanvasInput;
}>;


export type StudentGetCanvasQuery = { __typename?: 'Query', getCanvas?: { __typename?: 'Canvas', snapshot: any } | null };

export type StudentGetChatFunctionsDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentGetChatFunctionsDetailsQuery = { __typename?: 'Query', getChatFunctionsDetails: Array<{ __typename?: 'ChatFunctionDetails', id: string, name: string, description?: string | null, remoteDocsUrl?: string | null }> };

export type StudentGetCommentsQueryVariables = Exact<{
  input: StudentCommentsInput;
}>;


export type StudentGetCommentsQuery = { __typename?: 'Query', student_comments: { __typename?: 'CommentConnection', total: number, edges: Array<{ __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, comments: Array<{ __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } }>, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } }> } };

export type StudentGetConversationQueryVariables = Exact<{
  input: GetConversationInput;
}>;


export type StudentGetConversationQuery = { __typename?: 'Query', getConversation?: { __typename?: 'Conversation', id: string, title?: string | null, createdAt: string, messagePairs: Array<{ __typename?: 'MessagePair', id: string, createdAt: string, updatedAt: string, sentMessage: string, responseMessage?: string | null, sentAt: string, responseAt?: string | null, chatFunctionId?: string | null }> } | null };

export type StudentGetDefaultChatFunctionsForTenantDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentGetDefaultChatFunctionsForTenantDetailsQuery = { __typename?: 'Query', getDefaultChatFunctionForTenant?: { __typename?: 'ChatFunctionDetails', id: string, name: string, description?: string | null, remoteDocsUrl?: string | null } | null };

export type StudentGetModuleAndDefaultInstanceQueryVariables = Exact<{
  input: StudentModuleInput;
}>;


export type StudentGetModuleAndDefaultInstanceQuery = { __typename?: 'Query', student_moduleDetails: { __typename?: 'StudentModule', id: string, slug: string, name: string, description: string, defaultModuleInstance?: { __typename?: 'BaseModuleInstance', id: string, slug: string, name: string, startedAt: string, endedAt: string, isClosed: boolean } | null } };

export type StudentGetModuleAndInstancesQueryVariables = Exact<{
  input: StudentModuleInput;
}>;


export type StudentGetModuleAndInstancesQuery = { __typename?: 'Query', student_moduleDetails: { __typename?: 'StudentModule', id: string, slug: string, name: string, description: string, moduleInstances?: Array<{ __typename?: 'BaseModuleInstance', id: string, slug: string, name: string, startedAt: string, endedAt: string }> | null } };

export type StudentGetModuleInstanceQueryVariables = Exact<{
  input: StudentModuleInstanceInput;
}>;


export type StudentGetModuleInstanceQuery = { __typename?: 'Query', student_moduleInstance: { __typename?: 'StudentModuleInstance', id: string, slug: string, name: string, startedAt: string, endedAt: string, moduleId: string, moduleSlug: string, moduleName: string, setsHeader?: string | null, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean } };

export type StudentGetModuleInstanceAndStatsQueryVariables = Exact<{
  input: StudentModuleInstanceInput;
}>;


export type StudentGetModuleInstanceAndStatsQuery = { __typename?: 'Query', student_moduleInstance: { __typename?: 'StudentModuleInstance', id: string, slug: string, name: string, startedAt: string, endedAt: string, moduleId: string, moduleSlug: string, moduleName: string, setsHeader?: string | null, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean, moduleInstanceStats?: { __typename?: 'ModuleInstanceStats', totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ __typename?: 'StudentSetPreview', id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> } | null } };

export type StudentGetModulesQueryVariables = Exact<{
  input: StudentModulesInput;
}>;


export type StudentGetModulesQuery = { __typename?: 'Query', student_modules: Array<{ __typename?: 'StudentModule', id: string, slug: string, name: string, defaultModuleInstance?: { __typename?: 'BaseModuleInstance', id: string, slug: string, name: string, startedAt: string, endedAt: string, isClosed: boolean, moduleInstanceStats?: { __typename?: 'ModuleInstanceStats', totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ __typename?: 'StudentSetPreview', id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> } | null } | null }> };

export type StudentGetQuestionPreviewsQueryVariables = Exact<{
  input: StudentQuestionPreviewsInput;
}>;


export type StudentGetQuestionPreviewsQuery = { __typename?: 'Query', student_questionPreviews: Array<{ __typename?: 'StudentQuestionPreview', id: string, setId: string, name: string, number: number, setNumber: number, setDisplayNumber: number, setName: string, title: string, markedParts: number, totalParts: number, releasedAt: string, skill: number }> };

export type StudentGetSolutionsAccessStatusQueryVariables = Exact<{
  input: StudentSolutionsAccessInput;
}>;


export type StudentGetSolutionsAccessStatusQuery = { __typename?: 'Query', student_solutionsAccessStatus: { __typename?: 'StudentSolutionsAccessStatus', partId: string, universalPartId: string, solutionsStatus: Array<{ __typename?: 'StudentSolutionAccessStatus', solutionType: SolutionType, accessStatus: StudentSolutionAccessType, estimatedMinimumTime?: string | null, timeTaken?: string | null }> } };

export type StudentGetSubmissionDraftQueryVariables = Exact<{
  input: GetSubmissionDraftInput;
}>;


export type StudentGetSubmissionDraftQuery = { __typename?: 'Query', getSubmissionDraft?: { __typename?: 'SubmissionDraft', snapshot: object | number | string | boolean | null, feedback?: string | null, color?: string | null } | null };

export type TeacherCheckPublishQuestionsQueryVariables = Exact<{
  input: TeacherPublishQuestionsInput;
}>;


export type TeacherCheckPublishQuestionsQuery = { __typename?: 'Query', teacher_checkPublishQuestions: { __typename?: 'TeacherQuestionsPublish', questionsForPublishing: Array<number>, questionsNotChanged: Array<number> } };

export type TeacherGetAllModuleInstanceStudentsQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
}>;


export type TeacherGetAllModuleInstanceStudentsQuery = { __typename?: 'Query', teacher_allModuleInstanceStudents: Array<{ __typename?: 'TeacherStudent', id: string, email: string }> };

export type TeacherGetAllModuleInstanceTeachersQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
}>;


export type TeacherGetAllModuleInstanceTeachersQuery = { __typename?: 'Query', teacher_allModuleInstanceTeachers: Array<{ __typename?: 'TeacherStudent', id: string, email: string, name?: string | null }> };

export type TeacherGetCloneableQuestionsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type TeacherGetCloneableQuestionsQuery = { __typename?: 'Query', teacher_cloneableQuestions: { __typename?: 'TeacherQuestionConnection', total: number, edges: Array<{ __typename?: 'TeacherQuestion', id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parents?: { __typename?: 'TeacherQuestionParents', setId: string, setNumber: number, setName: string, moduleInstanceId: string, moduleInstanceName: string, moduleId: string, moduleName: string } | null, parts: Array<{ __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } };

export type TeacherGetCommentsQueryVariables = Exact<{
  input: TeacherCommentsInput;
}>;


export type TeacherGetCommentsQuery = { __typename?: 'Query', teacher_comments: { __typename?: 'CommentConnection', total: number, edges: Array<{ __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, comments: Array<{ __typename?: 'Comment', id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } }>, commentFeedback: { __typename?: 'CommentFeedback', total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ __typename?: 'CommentReaction', id: string, reaction?: string | null }> | null } }> } };

export type TeacherGetFunctionQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type TeacherGetFunctionQuery = { __typename?: 'Query', teacher_evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, deletedAt?: string | null } | null };

export type TeacherGetFunctionsQueryVariables = Exact<{
  input: TeacherEvaluationFunctionsInput;
}>;


export type TeacherGetFunctionsQuery = { __typename?: 'Query', teacher_evaluationFunctions: { __typename?: 'TeacherEvaluationFunctionConnection', total: number, edges: Array<{ __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, deletedAt?: string | null }> } };

export type TeacherGetModuleAccessDailyStatisticsQueryVariables = Exact<{
  input: ModuleAccessStatisticsInput;
}>;


export type TeacherGetModuleAccessDailyStatisticsQuery = { __typename?: 'Query', teacher_moduleAccessDailyStatistics: { __typename?: 'GraphStatistics', columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } };

export type TeacherGetModuleAccessStatisticsQueryVariables = Exact<{
  input: ModuleAccessStatisticsInput;
}>;


export type TeacherGetModuleAccessStatisticsQuery = { __typename?: 'Query', teacher_moduleAccessStatistics: { __typename?: 'ModuleGraphStatistics', noOfStudents: number, graphStatistics: { __typename?: 'GraphStatistics', columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } } };

export type TeacherGetModuleAndInstancesQueryVariables = Exact<{
  input: TeacherModuleInput;
}>;


export type TeacherGetModuleAndInstancesQuery = { __typename?: 'Query', teacher_moduleDetails: { __typename?: 'TeacherModuleDetails', id: string, slug: string, name: string, description: string, moduleInstances?: Array<{ __typename?: 'BaseModuleInstance', id: string, slug: string, name: string, startedAt: string, endedAt: string }> | null } };

export type TeacherGetModuleInstanceCommentsExistQueryVariables = Exact<{
  input: TeacherCommentsExistInput;
}>;


export type TeacherGetModuleInstanceCommentsExistQuery = { __typename?: 'Query', teacher_commentsExist: { __typename?: 'CommentsExist', commentsExist: boolean } };

export type TeacherGetModuleInstanceQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
}>;


export type TeacherGetModuleInstanceQuery = { __typename?: 'Query', teacher_moduleInstance?: { __typename?: 'TeacherModuleInstanceResult', moduleInstance?: { __typename?: 'TeacherModuleInstance', id: string, name: string, slug: string, startedAt: string, moduleId: string, moduleSlug: string, moduleName: string, moduleDescription: string, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean, setsHeader?: string | null, sets: Array<{ __typename?: 'TeacherSetForModuleInstance', id: string, name: string, number: number, displayNumber: number, description: string, isSurvey: boolean, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, durationLowerBound: number, durationUpperBound: number, durationWithUncertainty: boolean, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }> }> } | null, error?: { __typename?: 'ModuleError', code: ModuleErrorCode, message?: string | null } | null } | null };

export type TeacherGetModuleInstanceActivitiesQueryVariables = Exact<{
  input: TeacherModuleInstanceActivitiesInput;
}>;


export type TeacherGetModuleInstanceActivitiesQuery = { __typename?: 'Query', teacher_moduleInstanceActivities: { __typename?: 'TeacherModuleInstanceActivityConnection', total: number, edges: Array<{ __typename?: 'TeacherModuleInstanceActivity', id: string, createdAt: string, resolvedAt?: string | null, userEmail: string, message?: string | null, questionId: string, questionTitle: string, questionNumber: number, partIndex: number, setId: string, setNumber: number, activityType: ActivityType, parentId?: string | null, responseAreaIndex?: number | null, rawResponse?: object | number | string | boolean | null | null }> } };

export type TeacherGetModuleInstanceErrorsQueryVariables = Exact<{
  input: TeacherModuleInstancePaginationInput;
}>;


export type TeacherGetModuleInstanceErrorsQuery = { __typename?: 'Query', teacher_moduleInstanceErrors: { __typename?: 'TeacherModuleInstanceErrorConnection', total: number, edges: Array<{ __typename?: 'TeacherModuleInstanceError', submissionId: string, errorAt: string, resolvedAt?: string | null, studentEmail: string, rawRequest?: object | number | string | boolean | null | null, rawResponse: object | number | string | boolean | null, evaluationFunctionId?: string | null, evaluationFunctionName?: string | null, responseAreaId: string, evalutionFunctionOwnerEmail?: string | null, questionId: string, partId: string, partIndex: number, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number }> } };

export type TeacherGetModuleInstanceFlagsQueryVariables = Exact<{
  input: TeacherModuleInstanceFlagsInput;
}>;


export type TeacherGetModuleInstanceFlagsQuery = { __typename?: 'Query', teacher_moduleInstanceFlags: { __typename?: 'TeacherModuleInstanceFlagConnection', total: number, edges: Array<{ __typename?: 'TeacherModuleInstanceFlag', id: string, flaggedAt: string, resolvedAt?: string | null, studentEmail: string, comment?: string | null, questionId: string, questionVersionId: string, partId: string, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number }> } };

export type TeacherGetModuleInstanceMetaQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
}>;


export type TeacherGetModuleInstanceMetaQuery = { __typename?: 'Query', teacher_moduleInstance?: { __typename?: 'TeacherModuleInstanceResult', moduleInstance?: { __typename?: 'TeacherModuleInstance', id: string, name: string, slug: string, startedAt: string, moduleId: string, moduleName: string, moduleSlug: string, allowComments: boolean, allowChatbot: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean, numberOfTeachers: number, numberOfStudents: number, numberOfSets: number, numberOfComments: number, numberOfFlags: number, numberOfErrors: number } | null, error?: { __typename?: 'ModuleError', code: ModuleErrorCode, message?: string | null } | null } | null };

export type TeacherGetModuleInstanceStudentStatsQueryVariables = Exact<{
  input: TeacherGetModuleInstanceStudentStatsInput;
}>;


export type TeacherGetModuleInstanceStudentStatsQuery = { __typename?: 'Query', teacher_moduleInstanceStudentStatistics: { __typename?: 'StudentModuleInstance', id: string, slug: string, name: string, startedAt: string, endedAt: string, moduleId: string, moduleSlug: string, moduleName: string, setsHeader?: string | null, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean, moduleInstanceStats?: { __typename?: 'ModuleInstanceStats', totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ __typename?: 'StudentSetPreview', id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> } | null } };

export type TeacherGetModuleInstanceStudentsQueryVariables = Exact<{
  input: TeacherModuleInstanceStudentContactsInput;
}>;


export type TeacherGetModuleInstanceStudentsQuery = { __typename?: 'Query', teacher_moduleInstanceStudents: { __typename?: 'TeacherModuleInstanceStudentConnection', total: number, edges: Array<{ __typename?: 'TeacherModuleInstanceStudent', id: string, email: string, name: string, studentTags: Array<{ __typename?: 'TeacherModuleInstanceStudentLabels', id: string, name: string }>, studentGlobalTags: Array<{ __typename?: 'TeacherModuleInstanceStudentLabels', id: string, name: string }> }> } };

export type TeacherGetModuleInstanceStudentsStatsQueryVariables = Exact<{
  input: TeacherGetModuleInstanceStudentsStatsInput;
}>;


export type TeacherGetModuleInstanceStudentsStatsQuery = { __typename?: 'Query', teacher_moduleInstanceStudentsStatistics: { __typename?: 'TeacherModuleInstanceStudentsStats', total: number, edges: Array<{ __typename?: 'TeacherModuleInstanceStudentStats', studentId: string, stats: { __typename?: 'ModuleInstanceStats', totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ __typename?: 'StudentSetPreview', id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ __typename?: 'SetPreviewSlice', questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> } }> } };

export type TeacherGetModuleInstanceWithStudentsQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
  inputStudents: TeacherModuleInstanceStudentsInput;
}>;


export type TeacherGetModuleInstanceWithStudentsQuery = { __typename?: 'Query', teacher_moduleInstance?: { __typename?: 'TeacherModuleInstanceResult', moduleInstance?: { __typename?: 'TeacherModuleInstance', id: string, name: string, slug: string, startedAt: string, moduleId: string, moduleName: string, moduleSlug: string, students: { __typename?: 'TeacherStudentConnection', total: number, edges: Array<{ __typename?: 'TeacherStudent', id: string, email: string, name?: string | null }> } } | null, error?: { __typename?: 'ModuleError', code: ModuleErrorCode, message?: string | null } | null } | null };

export type TeacherGetModuleInstanceWithTeachersQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
  inputTeachers: TeacherModuleInstanceTeachersInput;
}>;


export type TeacherGetModuleInstanceWithTeachersQuery = { __typename?: 'Query', teacher_moduleInstance?: { __typename?: 'TeacherModuleInstanceResult', moduleInstance?: { __typename?: 'TeacherModuleInstance', id: string, name: string, slug: string, startedAt: string, moduleId: string, moduleName: string, moduleSlug: string, teachers: { __typename?: 'TeacherTeacherConnection', total: number, edges: Array<{ __typename?: 'TeacherTeacher', id: string, email: string, name?: string | null, teacherRoleId: string }> } } | null, error?: { __typename?: 'ModuleError', code: ModuleErrorCode, message?: string | null } | null } | null };

export type TeacherGetModuleInstancesQueryVariables = Exact<{
  input: TeacherModuleInstancesInput;
}>;


export type TeacherGetModuleInstancesQuery = { __typename?: 'Query', teacher_moduleInstances: { __typename?: 'TeacherModuleInstanceConnection', total: number, edges: Array<{ __typename?: 'TeacherModuleInstancesItem', id: string, name: string, slug: string, startedAt: string, moduleName: string }> } };

export type TeacherGetModuleStudentTagsAllQueryVariables = Exact<{
  input: TeacherModuleStudentTagsInput;
}>;


export type TeacherGetModuleStudentTagsAllQuery = { __typename?: 'Query', teacher_moduleStudentTagsAll: Array<{ __typename?: 'StudentTag', id: string, name: string }> };

export type TeacherGetModuleTeacherRoleQueryVariables = Exact<{
  input: TeacherGetModuleTeacherRoleInput;
}>;


export type TeacherGetModuleTeacherRoleQuery = { __typename?: 'Query', teacher_moduleTeacherRole: Array<{ __typename?: 'TeacherRole', id: string, description: string, teacherRoleType: TeacherRoleType, functionCodes: Array<{ __typename?: 'FunctionCode', id: string, code: AccessCode, description: string }> }> };

export type TeacherGetModulesQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetModulesQuery = { __typename?: 'Query', teacher_modules: Array<{ __typename?: 'TeacherModule', id: string, slug: string, name: string, description: string, instances: number, defaultModuleInstanceTeacherRoleId: string, defaultModuleInstanceTotalTeachers: number, defaultModuleInstanceTotalStudents: number, defaultModuleInstance: { __typename?: 'BaseModuleInstance', id: string, slug: string, name: string, startedAt: string, endedAt: string, isClosed: boolean } }> };

export type TeacherGetModulesAccessStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetModulesAccessStatisticsQuery = { __typename?: 'Query', teacher_modulesAccessStatistics: { __typename?: 'GraphStatistics', columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } };

export type TeacherGetModulesAccessWeeklyStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetModulesAccessWeeklyStatisticsQuery = { __typename?: 'Query', teacher_modulesAccessWeeklyStatistics: { __typename?: 'GraphStatistics', columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } };

export type TeacherGetModulesActivitiesQueryVariables = Exact<{
  input: TeacherModulesActivitiesInput;
}>;


export type TeacherGetModulesActivitiesQuery = { __typename?: 'Query', teacher_modulesActivities: { __typename?: 'TeacherModulesActivityList', total: number, edges: Array<{ __typename?: 'TeacherModulesActivity', activityType: ActivityType, ids: Array<string>, createdAt: string, resolvedAt?: string | null, userIds: Array<string>, userEmails: Array<string>, message?: string | null, moduleId: string, moduleInstanceId: string, moduleName: string, moduleSlug: string, moduleInstanceName: string, moduleInstanceSlug: string, moduleInstanceStartedAt: string, moduleInstanceTeacherRoleId: string, questionId: string, questionNumber: number, partIndex: number, questionTitle: string, setId: string, setNumber: number, parentId?: string | null }> } };

export type TeacherGetQuestionHistoryQueryVariables = Exact<{
  input: TeacherQuestionVersionInput;
}>;


export type TeacherGetQuestionHistoryQuery = { __typename?: 'Query', teacher_questionVersions: { __typename?: 'TeacherQuestionConnection', total: number, edges: Array<{ __typename?: 'TeacherQuestion', id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } };

export type TeacherGetResponseTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetResponseTypesQuery = { __typename?: 'Query', teacher_responseTypes: { __typename?: 'TeacherResponseTypeConnection', total: number, edges: Array<{ __typename?: 'TeacherResponseType', id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null }> } };

export type TeacherGetSetQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TeacherGetSetQuery = { __typename?: 'Query', teacher_set?: { __typename?: 'TeacherSetResult', set?: { __typename?: 'TeacherSet', id: string, isSurvey: boolean, name: string, number: number, displayNumber: number, description: string, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }>, questions: Array<{ __typename?: 'TeacherQuestion', id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } | null, error?: { __typename?: 'SetError', code: SetErrorCode, message?: string | null } | null } | null };

export type TeacherGetSetStatisticsQueryVariables = Exact<{
  input: SetStatisticsInput;
}>;


export type TeacherGetSetStatisticsQuery = { __typename?: 'Query', teacher_setStatistics: { __typename?: 'GraphStatistics', columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } };

export type TeacherGetSetTimingStatisticsQueryVariables = Exact<{
  input: SetStatisticsInput;
}>;


export type TeacherGetSetTimingStatisticsQuery = { __typename?: 'Query', teacher_setTimingStatistics: { __typename?: 'GraphStatistics', columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } };

export type TeacherGetGlobalTagsAllQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetGlobalTagsAllQuery = { __typename?: 'Query', teacher_globalTagsAll: Array<{ __typename?: 'GlobalTag', id: string, name: string }> };

export type TeacherGetStudentsAccessWeeklyStatisticsQueryVariables = Exact<{
  input: StudentsStatisticsInput;
}>;


export type TeacherGetStudentsAccessWeeklyStatisticsQuery = { __typename?: 'Query', teacher_studentsAccessWeeklyStatistics: Array<{ __typename?: 'StudentsAccessWeeklyGraphStatistics', studentId: string, columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, summaryLine: { __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }, moduleInstanceLines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> }> };

export type TeacherGetStudentsStatisticsQueryVariables = Exact<{
  input: StudentsStatisticsInput;
}>;


export type TeacherGetStudentsStatisticsQuery = { __typename?: 'Query', teacher_studentsStatistics: { __typename?: 'StudentsGraphStatistics', summaryGraphStatistics: { __typename?: 'GraphStatistics', columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> }, studentsModuleInstanceGraphStatistics: Array<{ __typename?: 'StudentModuleInstanceGraphStatistics', studentId: string, moduleInstanceGraphStatistics: { __typename?: 'GraphStatistics', columns: Array<{ __typename?: 'Column', key: string, meta: { __typename?: 'ColumnMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ __typename?: 'Line', key: string, data: any, meta: { __typename?: 'LineMeta', displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } }> } };

export type TeacherGetSubmissionCountsQueryVariables = Exact<{
  input: GetSubmissionCountsInput;
}>;


export type TeacherGetSubmissionCountsQuery = { __typename?: 'Query', submissionCounts: { __typename?: 'SubmissionCounts', pending: number, manuallyApproved: number, manuallyRejected: number, automatic: number, total: number } };

export type TeacherGetSubmissionsQueryVariables = Exact<{
  input: GetSubmissionsInput;
}>;


export type TeacherGetSubmissionsQuery = { __typename?: 'Query', submissions: { __typename?: 'ModerationSubmissionConnection', total: number, submissions: Array<{ __typename?: 'ModerationSubmission', id: string, createdAt: string, submission?: object | number | string | boolean | null | null, responseType: string, responseConfig?: object | number | string | boolean | null | null, moderationStatus?: SubmissionModerationStatus | null, moderationMethod?: SubmissionModerationMethod | null, moderatedAt?: string | null, moderatedBy?: string | null, moderatorEmail?: string | null, moderatorName?: string | null, moduleId: string, moduleName: string, moduleSlug: string, moduleInstanceId: string, moduleInstanceName: string, moduleInstanceSlug: string, setId: string, setName: string, setDisplayNumber: number, questionId: string, questionTitle: string, questionDisplayNumber: number, partId: string, partIndex: number, responseAreaId: string, responseAreaDisplayPosition: number, subjects: Array<{ __typename?: 'SetSubjectOutline', userId: string, label: string }> }> } };

export type TeacherGetSurveyQuestionsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type TeacherGetSurveyQuestionsQuery = { __typename?: 'Query', teacher_surveyQuestions: { __typename?: 'TeacherQuestionConnection', total: number, edges: Array<{ __typename?: 'TeacherQuestion', id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } };

export type TeacherGetTeacherRoleQueryVariables = Exact<{
  input: TeacherGetTeacherRoleInput;
}>;


export type TeacherGetTeacherRoleQuery = { __typename?: 'Query', teacher_teacherRole?: { __typename?: 'TeacherRole', id: string, description: string, teacherRoleType: TeacherRoleType, functionCodes: Array<{ __typename?: 'FunctionCode', id: string, code: AccessCode, description: string }> } | null };

export type TeacherGetTeacherRolesQueryVariables = Exact<{
  input: TeacherGetTeacherRolesInput;
}>;


export type TeacherGetTeacherRolesQuery = { __typename?: 'Query', teacher_teacherRoles: Array<{ __typename?: 'TeacherRole', id: string, description: string, teacherRoleType: TeacherRoleType, functionCodes: Array<{ __typename?: 'FunctionCode', id: string, code: AccessCode, description: string }> }> };

export type TeacherGetTeacherStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetTeacherStudentsQuery = { __typename?: 'Query', teacher_teacherStudents: Array<{ __typename?: 'TeacherStudentWithGlobalTags', id: string, email: string, globalTags: Array<{ __typename?: 'GlobalTag', id: string, name: string }>, modules: Array<{ __typename?: 'StudentGlobalTagModule', id: string, name: string, moduleInstanceId: string, moduleInstanceName: string, moduleInstanceStartedAt: string, moduleInstanceEndedAt: string }> }> };

export type TeacherGetTemplateQuestionsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type TeacherGetTemplateQuestionsQuery = { __typename?: 'Query', teacher_templateQuestions: { __typename?: 'TeacherQuestionConnection', total: number, edges: Array<{ __typename?: 'TeacherQuestion', id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parents?: { __typename?: 'TeacherQuestionParents', setId: string, setNumber: number, setName: string, moduleInstanceId: string, moduleInstanceName: string, moduleId: string, moduleName: string } | null, parts: Array<{ __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } };

export type TeacherResponseAreaStatisticsQueryVariables = Exact<{
  input: TeacherGetResponseStatisticsInput;
}>;


export type TeacherResponseAreaStatisticsQuery = { __typename?: 'Query', teacher_responseAreaStatistics: { __typename?: 'TeacherResponseAreaStatistics', parts: Array<{ __typename?: 'TeacherResponseAreaPartStatistics', position: number, areas: Array<{ __typename?: 'TeacherAreaStatistics', position: number, responseType: string, responseConfig: object | number | string | boolean | null, answersSuppressed: boolean, suppressionReasons: Array<string>, totalSubmissionsCount: number, correctSubmissionsCount: number, studentsCount: number, correctStudentsCount: number, pendingModerationCount?: number | null, approvedModerationCount?: number | null, rejectedModerationCount?: number | null, unmoderatedSubmissionCount?: number | null, responseArea: { __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }, answers: Array<{ __typename?: 'TeacherResponseAreaStatistic', answer: object | number | string | boolean | null, latexAnswer?: string | null, simplifiedAnswer?: string | null, frequency: number, isCorrect?: boolean | null, feedback?: string | null, color?: string | null }> }> }>, question?: { __typename?: 'TeacherQuestion', id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ __typename?: 'TeacherPart', id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ __typename?: 'StructuredContent', id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ __typename?: 'TeacherResponseArea', id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ __typename?: 'ResponseAreaTest', id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ __typename?: 'ResponseAreaCase', id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ __typename?: 'InputSymbol', id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { __typename?: 'TeacherEvaluationFunction', id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> } | null } };

export const StandardAdminConversationFlagFragmentDoc = gql`
    fragment StandardAdminConversationFlag on AdminConversationFlag {
  id
  questionId
  questionNumber
  questionTitle
  questionName
  setId
  setNumber
  setName
  moduleId
  moduleSlug
  moduleName
  moduleInstanceId
  moduleInstanceSlug
  moduleInstanceName
  conversationId
  messagePairId
  chatFunctionId
  chatFunctionName
  flagDetails
  studentEmail
  flaggedAt
}
    `;
export const StandardAdminFunctionFragmentDoc = gql`
    fragment StandardAdminFunction on AdminEvaluationFunction {
  id
  name
  url
  includeDefaultTest
  deletedAt
  remoteDocsUrl
  paramsSchema
  supportedTypes
  docsContent
  tests {
    id
    payload
    expectedResponse
  }
}
    `;
export const StandardAdminJobFragmentDoc = gql`
    fragment StandardAdminJob on AdminJob {
  id
  createdAt
  createdByUserId
  createdByUserEmail
  cancelledByUserId
  cancelledByUserEmail
  jobStatus
  startedAt
  finishedAt
  errorMessage
  metadata
}
    `;
export const StandardAdminMessagePairCountFragmentDoc = gql`
    fragment StandardAdminMessagePairCount on AdminMessagePairCount {
  id
  count
  userCount
  questionId
  questionNumber
  questionTitle
  questionName
  setId
  setNumber
  setTitle
  setName
  moduleId
  moduleName
  moduleInstanceId
  moduleInstanceName
  chatFunctionId
  chatFunctionName
}
    `;
export const StandardModuleInstanceToCloneFragmentDoc = gql`
    fragment StandardModuleInstanceToClone on AdminModuleInstance {
  id
  name
  slug
  startedAt
  endedAt
  moduleId
  moduleName
  moduleSlug
  teachers(inputTeachers: $inputTeachers) {
    email
  }
}
    `;
export const StandardAdminModuleInstanceFragmentDoc = gql`
    fragment StandardAdminModuleInstance on AdminModuleInstance {
  id
  moduleId
  name
  slug
  startedAt
  endedAt
  deletedAt
}
    `;
export const StandardAdminModuleFragmentDoc = gql`
    fragment StandardAdminModule on AdminModule {
  id
  name
  slug
  description
  deletedAt
}
    `;
export const TeacherModularResponseFragmentDoc = gql`
    fragment TeacherModularResponse on TeacherModularResponse {
  __typename
  responseType
  config
  answer
}
    `;
export const StandardAdminPartFragmentDoc = gql`
    fragment StandardAdminPart on AdminPart {
  id
  universalPartId
  content
  answerContent
  workedSolution {
    id
    parentId
    title
    content
  }
  tutorial {
    id
    parentId
    title
    content
  }
  responseAreas {
    id
    universalResponseAreaId
    contentAfter
    preResponseText
    postResponseText
    livePreview
    displayInputSymbols
    includeInPdf
    saveAllowed
    separateFeedback
    commonFeedbackColor
    correctFeedbackColor
    correctFeedbackPrefix
    incorrectFeedbackColor
    incorrectFeedbackPrefix
    isPublishedOrSaved
    hasSubmissions
    gradeParams
    tests {
      id
      payload
      expectedResponse
    }
    cases {
      id
      answer
      feedback
      isCorrect
    }
    inputSymbols {
      id
      symbol
      code
      aliases
      isVisible
    }
    response {
      ...TeacherModularResponse
    }
    evaluationFunction {
      id
      name
      url
      includeDefaultTest
      supportedTypes
      docsContent
    }
  }
}
    ${TeacherModularResponseFragmentDoc}`;
export const StandardAdminQuestionFragmentDoc = gql`
    fragment StandardAdminQuestion on AdminQuestion {
  id
  versionId
  title
  guidance
  durationLowerBound
  durationUpperBound
  skill
  number
  isSurvey
  displayFinalAnswer
  displayStructuredTutorial
  displayWorkedSolution
  displayChatbot
  masterContent
  parts {
    ...StandardAdminPart
  }
}
    ${StandardAdminPartFragmentDoc}`;
export const StandardAdminResponseTypeFragmentDoc = gql`
    fragment StandardAdminResponseType on AdminResponseType {
  id
  type
  defaultIncludeInPdf
  defaultSaveAllowed
  isSaveAllowedEditable
  defaultLivePreview
  defaultEvaluationFunctionId
  defaultEvaluationFunctionName
  supportedEvaluationFunctions {
    id
    name
  }
}
    `;
export const StandardAdminTeacherRoleFragmentDoc = gql`
    fragment StandardAdminTeacherRole on AdminTeacherRole {
  id
  description
  teacherRoleType
  teacherCount
  moduleInstanceCount
}
    `;
export const StandardAdminTenantFragmentDoc = gql`
    fragment StandardAdminTenant on AdminTenant {
  id
  homePageBanner
  signInBanner
  defaultRecapSchedule
  textEditor
  surveyDefaultReleasedAt
  surveyDefaultHiddenAt
}
    `;
export const CommentReactionsFragmentDoc = gql`
    fragment CommentReactions on CommentReaction {
  id
  reaction
}
    `;
export const StandardCommentFeedbackFragmentDoc = gql`
    fragment StandardCommentFeedback on CommentFeedback {
  total
  canUserUpvote
  userUpvoted
  commentReactions {
    ...CommentReactions
  }
}
    ${CommentReactionsFragmentDoc}`;
export const CommentFieldsFragmentDoc = gql`
    fragment CommentFields on Comment {
  id
  comment
  userId
  userName
  parentId
  createdAt
  updatedAt
  publishedAt
  createdByModuleTeacher
  canUserDelete
  commentFeedback {
    ...StandardCommentFeedback
  }
}
    ${StandardCommentFeedbackFragmentDoc}`;
export const StandardCommentFragmentDoc = gql`
    fragment StandardComment on Comment {
  id
  comment
  userId
  userName
  parentId
  createdAt
  updatedAt
  publishedAt
  createdByModuleTeacher
  canUserDelete
  comments {
    ...CommentFields
  }
  commentFeedback {
    ...StandardCommentFeedback
  }
}
    ${CommentFieldsFragmentDoc}
${StandardCommentFeedbackFragmentDoc}`;
export const StandardMathpixSessionResponseFragmentDoc = gql`
    fragment StandardMathpixSessionResponse on MathpixSessionResponse {
  token
  expiresAt
}
    `;
export const StandardMeFragmentDoc = gql`
    fragment StandardMe on User {
  id
  name
  email
  role
  isSuperAdmin
  recapSchedule
}
    `;
export const StandardModuleInstanceUserPreferenceFragmentDoc = gql`
    fragment StandardModuleInstanceUserPreference on ModuleInstanceUserPreference {
  moduleInstanceId
  key
  value
}
    `;
export const StandardModuleInstanceFragmentDoc = gql`
    fragment StandardModuleInstance on BaseModuleInstance {
  id
  slug
  name
  startedAt
  endedAt
  isClosed
}
    `;
export const StandardQuestionPreviewFragmentDoc = gql`
    fragment StandardQuestionPreview on StudentQuestionPreview {
  id
  setId
  name
  number
  setNumber
  setDisplayNumber
  setName
  title
  markedParts
  totalParts
  releasedAt
  skill
}
    `;
export const StandardStructuredContentFragmentDoc = gql`
    fragment StandardStructuredContent on StructuredContent {
  id
  parentId
  title
  content
}
    `;
export const StandardSubmissionFragmentDoc = gql`
    fragment StandardSubmission on Submission {
  submissionId
  isCorrect
  isError
  feedback
  rawResult
  submission
  color
  matchedCase {
    feedback
    color
  }
  updatedAt
}
    `;
export const StandardSubmissionWithoutFeedbackFragmentDoc = gql`
    fragment StandardSubmissionWithoutFeedback on SubmissionWithoutFeedback {
  submissionId
  submission
  updatedAt
}
    `;
export const StudentModularResponseFragmentDoc = gql`
    fragment StudentModularResponse on StudentModularResponse {
  __typename
  responseType
  config
}
    `;
export const StandardResponseAreaFragmentDoc = gql`
    fragment StandardResponseArea on StudentResponseArea {
  id
  universalResponseAreaId
  livePreview
  displayInputSymbols
  includeInPdf
  saveAllowed
  inputSymbols {
    id
    symbol
    code
    aliases
    isVisible
  }
  submission {
    __typename
    ... on Submission {
      ...StandardSubmission
    }
    ... on SubmissionWithoutFeedback {
      ...StandardSubmissionWithoutFeedback
    }
  }
  preResponseText
  postResponseText
  contentAfter
  response {
    ...StudentModularResponse
  }
}
    ${StandardSubmissionFragmentDoc}
${StandardSubmissionWithoutFeedbackFragmentDoc}
${StudentModularResponseFragmentDoc}`;
export const StandardPartFragmentDoc = gql`
    fragment StandardPart on StudentPart {
  id
  universalPartId
  isAdmin
  isMarkedComplete
  content
  answerContent
  workedSolution {
    ...StandardStructuredContent
  }
  structuredTutorial {
    ...StandardStructuredContent
  }
  responseArea {
    ...StandardResponseArea
  }
}
    ${StandardStructuredContentFragmentDoc}
${StandardResponseAreaFragmentDoc}`;
export const StandardQuestionFragmentDoc = gql`
    fragment StandardQuestion on StudentQuestion {
  id
  title
  guidance
  skill
  durationLowerBound
  durationUpperBound
  displayChatbot
  number
  masterContent
  parts {
    ...StandardPart
  }
}
    ${StandardPartFragmentDoc}`;
export const StandardSetFragmentDoc = gql`
    fragment StandardSet on StudentSet {
  id
  moduleSlug
  moduleInstanceSlug
  name
  description
  isSurvey
  pdfUrl
  number
  displayNumber
  subjects {
    userId
    label
  }
  questions {
    ...StandardQuestion
  }
}
    ${StandardQuestionFragmentDoc}`;
export const StandardSetResultFragmentDoc = gql`
    fragment StandardSetResult on StudentSetResult {
  set {
    ...StandardSet
  }
  error {
    code
    message
  }
}
    ${StandardSetFragmentDoc}`;
export const StandardGraphStatisticsColumnFragmentDoc = gql`
    fragment StandardGraphStatisticsColumn on Column {
  key
  meta {
    displayName
    shortDisplayName
    entityId
  }
}
    `;
export const StandardGraphStatisticsLineFragmentDoc = gql`
    fragment StandardGraphStatisticsLine on Line {
  key
  meta {
    displayName
    shortDisplayName
    entityId
  }
  data
}
    `;
export const StandardGraphStatisticsFragmentDoc = gql`
    fragment StandardGraphStatistics on GraphStatistics {
  columns {
    ...StandardGraphStatisticsColumn
  }
  lines {
    ...StandardGraphStatisticsLine
  }
}
    ${StandardGraphStatisticsColumnFragmentDoc}
${StandardGraphStatisticsLineFragmentDoc}`;
export const StandardStudentModuleInstanceFragmentDoc = gql`
    fragment StandardStudentModuleInstance on StudentModuleInstance {
  id
  slug
  name
  startedAt
  endedAt
  moduleId
  moduleSlug
  moduleName
  setsHeader
  allowComments
  publishCommentInstantly
  isUserModuleInstanceTeacher
}
    `;
export const StandardStudentGraphStatisticsFragmentDoc = gql`
    fragment StandardStudentGraphStatistics on StudentsAccessWeeklyGraphStatistics {
  studentId
  columns {
    ...StandardGraphStatisticsColumn
  }
  summaryLine {
    ...StandardGraphStatisticsLine
  }
  moduleInstanceLines {
    ...StandardGraphStatisticsLine
  }
}
    ${StandardGraphStatisticsColumnFragmentDoc}
${StandardGraphStatisticsLineFragmentDoc}`;
export const StandardSubmissionDraftFragmentDoc = gql`
    fragment StandardSubmissionDraft on SubmissionDraft {
  snapshot
  feedback
  color
  isCorrect
  isError
  matchedCase {
    feedback
    color
  }
}
    `;
export const StandardSubmissionPreviewFragmentDoc = gql`
    fragment StandardSubmissionPreview on SubmissionPreview {
  isError
  feedback
  rawResult
  preview
}
    `;
export const StandardGlobalTagWithDetailsFragmentDoc = gql`
    fragment StandardGlobalTagWithDetails on GlobalTagWithDetails {
  id
  type
  name
  tagOwnerEmail
  teacherEmails
}
    `;
export const StandardModerationSubmissionFragmentDoc = gql`
    fragment StandardModerationSubmission on ModerationSubmission {
  id
  createdAt
  submission
  responseType
  responseConfig
  subjects {
    userId
    label
  }
  moderationStatus
  moderationMethod
  moderatedAt
  moderatedBy
  moderatorEmail
  moderatorName
  moduleId
  moduleName
  moduleSlug
  moduleInstanceId
  moduleInstanceName
  moduleInstanceSlug
  setId
  setName
  setDisplayNumber
  questionId
  questionTitle
  questionDisplayNumber
  partId
  partIndex
  responseAreaId
  responseAreaDisplayPosition
}
    `;
export const StandardStudentTagFragmentDoc = gql`
    fragment StandardStudentTag on StudentTag {
  id
  name
}
    `;
export const StandardTeacherFunctionFragmentDoc = gql`
    fragment StandardTeacherFunction on TeacherEvaluationFunction {
  id
  name
  url
  includeDefaultTest
  remoteDocsUrl
  paramsSchema
  supportedTypes
  docsContent
  deletedAt
}
    `;
export const StandardTeacherModuleInstanceActivityFragmentDoc = gql`
    fragment StandardTeacherModuleInstanceActivity on TeacherModuleInstanceActivity {
  id
  createdAt
  resolvedAt
  userEmail
  message
  questionId
  questionTitle
  questionNumber
  partIndex
  setId
  setNumber
  activityType
  parentId
  responseAreaIndex
  rawResponse
}
    `;
export const StandardTeacherModuleInstanceErrorFragmentDoc = gql`
    fragment StandardTeacherModuleInstanceError on TeacherModuleInstanceError {
  submissionId
  errorAt
  resolvedAt
  studentEmail
  rawRequest
  rawResponse
  evaluationFunctionId
  evaluationFunctionName
  responseAreaId
  evalutionFunctionOwnerEmail
  questionId
  partId
  partIndex
  questionTitle
  questionNumber
  setId
  setName
  setNumber
}
    `;
export const StandardTeacherModuleInstanceFlagFragmentDoc = gql`
    fragment StandardTeacherModuleInstanceFlag on TeacherModuleInstanceFlag {
  id
  flaggedAt
  resolvedAt
  studentEmail
  comment
  questionId
  questionVersionId
  partId
  questionTitle
  questionNumber
  setId
  setName
  setNumber
}
    `;
export const StandardSetPreviewFragmentDoc = gql`
    fragment StandardSetPreview on StudentSetPreview {
  id
  name
  number
  displayNumber
  isSurvey
  description
  isReleased
  releasedAt
  totalParts
  partsCompleted
  completed {
    questionId
    questionNumber
    hasUploadedSolution
  }
  started {
    questionId
    questionNumber
    hasUploadedSolution
  }
  unstarted {
    questionId
    questionNumber
    hasUploadedSolution
  }
}
    `;
export const StandardModuleInstanceStatsFragmentDoc = gql`
    fragment StandardModuleInstanceStats on ModuleInstanceStats {
  totalParts
  totalPartsCompleted
  setPreviews {
    ...StandardSetPreview
  }
}
    ${StandardSetPreviewFragmentDoc}`;
export const StandardTeacherModuleInstanceStudentStatsFragmentDoc = gql`
    fragment StandardTeacherModuleInstanceStudentStats on TeacherModuleInstanceStudentStats {
  studentId
  stats {
    ...StandardModuleInstanceStats
  }
}
    ${StandardModuleInstanceStatsFragmentDoc}`;
export const StandardTeacherSetForModuleInstanceFragmentDoc = gql`
    fragment StandardTeacherSetForModuleInstance on TeacherSetForModuleInstance {
  id
  name
  number
  displayNumber
  description
  isSurvey
  releasedAt
  hiddenAt
  manuallyHiddenAt
  finalAnswerVisibility
  workedSolutionVisibility
  structuredTutorialVisibility
  chatbotVisibility
  pdfUrl
  durationLowerBound
  durationUpperBound
  durationWithUncertainty
  subjects {
    userId
    label
  }
}
    `;
export const StandardTeacherModuleInstanceFragmentDoc = gql`
    fragment StandardTeacherModuleInstance on TeacherModuleInstance {
  id
  name
  slug
  startedAt
  moduleId
  moduleSlug
  moduleName
  moduleDescription
  allowComments
  publishCommentInstantly
  isUserModuleInstanceTeacher
  setsHeader
  sets {
    ...StandardTeacherSetForModuleInstance
  }
}
    ${StandardTeacherSetForModuleInstanceFragmentDoc}`;
export const StandardTeacherModuleInstanceStudentFragmentDoc = gql`
    fragment StandardTeacherModuleInstanceStudent on TeacherModuleInstanceStudent {
  id
  email
  name
  studentTags {
    id
    name
  }
  studentGlobalTags {
    id
    name
  }
}
    `;
export const StandardTeacherModulesActivityFragmentDoc = gql`
    fragment StandardTeacherModulesActivity on TeacherModulesActivity {
  activityType
  ids
  createdAt
  resolvedAt
  userIds
  userEmails
  message
  moduleId
  moduleInstanceId
  moduleName
  moduleSlug
  moduleInstanceName
  moduleInstanceSlug
  moduleInstanceStartedAt
  moduleInstanceTeacherRoleId
  questionId
  questionNumber
  partIndex
  questionTitle
  setId
  setNumber
  parentId
}
    `;
export const StandardTeacherResponseAreaFragmentDoc = gql`
    fragment StandardTeacherResponseArea on TeacherResponseArea {
  id
  universalResponseAreaId
  contentAfter
  preResponseText
  postResponseText
  livePreview
  displayInputSymbols
  includeInPdf
  saveAllowed
  separateFeedback
  commonFeedbackColor
  correctFeedbackColor
  correctFeedbackPrefix
  incorrectFeedbackColor
  incorrectFeedbackPrefix
  isPublishedOrSaved
  hasSubmissions
  gradeParams
  tests {
    id
    payload
    expectedResponse
  }
  cases {
    id
    answer
    feedback
    isCorrect
    params
    color
  }
  inputSymbols {
    id
    symbol
    code
    aliases
    isVisible
  }
  response {
    ...TeacherModularResponse
  }
  evaluationFunction {
    id
    name
    url
    includeDefaultTest
    supportedTypes
    docsContent
  }
}
    ${TeacherModularResponseFragmentDoc}`;
export const StandardTeacherResponseStatisticsFragmentDoc = gql`
    fragment StandardTeacherResponseStatistics on TeacherAreaStatistics {
  position
  responseType
  responseConfig
  responseArea {
    ...StandardTeacherResponseArea
  }
  answersSuppressed
  suppressionReasons
  answers {
    answer
    latexAnswer
    simplifiedAnswer
    frequency
    isCorrect
    feedback
    color
  }
  totalSubmissionsCount
  correctSubmissionsCount
  studentsCount
  correctStudentsCount
  pendingModerationCount
  approvedModerationCount
  rejectedModerationCount
  unmoderatedSubmissionCount
}
    ${StandardTeacherResponseAreaFragmentDoc}`;
export const StandardTeacherResponseTypeFragmentDoc = gql`
    fragment StandardTeacherResponseType on TeacherResponseType {
  id
  type
  defaultIncludeInPdf
  defaultSaveAllowed
  isSaveAllowedEditable
  defaultLivePreview
  defaultEvaluationFunctionId
  defaultEvaluationFunctionName
}
    `;
export const StandardTeacherPartFragmentDoc = gql`
    fragment StandardTeacherPart on TeacherPart {
  id
  universalPartId
  content
  answerContent
  workedSolution {
    id
    parentId
    title
    content
  }
  tutorial {
    id
    parentId
    title
    content
  }
  responseAreas {
    ...StandardTeacherResponseArea
  }
}
    ${StandardTeacherResponseAreaFragmentDoc}`;
export const StandardTeacherQuestionFragmentDoc = gql`
    fragment StandardTeacherQuestion on TeacherQuestion {
  id
  type
  hasBeenPublished
  versionId
  ancestorVersionId
  createdAt
  updatedAt
  guidance
  durationLowerBound
  durationUpperBound
  skill
  title
  number
  displayFinalAnswer
  displayStructuredTutorial
  displayWorkedSolution
  displayChatbot
  masterContent
  parts {
    ...StandardTeacherPart
  }
}
    ${StandardTeacherPartFragmentDoc}`;
export const StandardTeacherSetFragmentDoc = gql`
    fragment StandardTeacherSet on TeacherSet {
  id
  isSurvey
  name
  number
  displayNumber
  description
  releasedAt
  hiddenAt
  manuallyHiddenAt
  finalAnswerVisibility
  workedSolutionVisibility
  structuredTutorialVisibility
  chatbotVisibility
  pdfUrl
  subjects {
    userId
    label
  }
  questions {
    ...StandardTeacherQuestion
  }
}
    ${StandardTeacherQuestionFragmentDoc}`;
export const StandardTeacherSetResultFragmentDoc = gql`
    fragment StandardTeacherSetResult on TeacherSetResult {
  set {
    ...StandardTeacherSet
  }
  error {
    code
    message
  }
}
    ${StandardTeacherSetFragmentDoc}`;
export const StandardGlobalTagFragmentDoc = gql`
    fragment StandardGlobalTag on GlobalTag {
  id
  name
}
    `;
export const StandardTeacherStudentWithGlobalTagsFragmentDoc = gql`
    fragment StandardTeacherStudentWithGlobalTags on TeacherStudentWithGlobalTags {
  id
  email
  globalTags {
    ...StandardGlobalTag
  }
  modules {
    id
    name
    moduleInstanceId
    moduleInstanceName
    moduleInstanceStartedAt
    moduleInstanceEndedAt
  }
}
    ${StandardGlobalTagFragmentDoc}`;
export const StandardTeacherSubmissionFragmentDoc = gql`
    fragment StandardTeacherSubmission on TeacherSubmissionResponse {
  isCorrect
  isError
  feedback
  submission
  color
  matchedCase {
    feedback
    color
  }
  rawResponse
}
    `;
export const StandardFunctionCodeFragmentDoc = gql`
    fragment StandardFunctionCode on FunctionCode {
  id
  code
  description
}
    `;
export const StandardTeacherRoleFragmentDoc = gql`
    fragment StandardTeacherRole on TeacherRole {
  id
  description
  teacherRoleType
  functionCodes {
    ...StandardFunctionCode
  }
}
    ${StandardFunctionCodeFragmentDoc}`;
export const TeacherFieldsFragmentDoc = gql`
    fragment TeacherFields on Teacher {
  email
  automaticallyCreated
}
    `;
export const TeacherDetailsFragmentDoc = gql`
    fragment TeacherDetails on Teacher {
  email
  automaticallyCreated
}
    `;
export const AdminAddGlobalTagDocument = gql`
    mutation AdminAddGlobalTag($input: AdminCreateGlobalTagInput!) {
  admin_createGlobalTag(input: $input) {
    success
  }
}
    `;
export const AdminAddGlobalTagsDocument = gql`
    mutation AdminAddGlobalTags($input: AdminCreateGlobalTagsInput!) {
  admin_createGlobalTags(input: $input) {
    success
    count
  }
}
    `;
export const AdminAddStudentsDocument = gql`
    mutation AdminAddStudents($input: AdminCreateStudentsInput!) {
  admin_createStudents(input: $input) {
    success
    count
  }
}
    `;
export const AdminAddTeachersDocument = gql`
    mutation AdminAddTeachers($input: AdminCreateTeacherInput!) {
  admin_createTeachers(input: $input) {
    success
    count
  }
}
    `;
export const AdminAddTeacherRoleDocument = gql`
    mutation AdminAddTeacherRole($input: AdminCreateTeacherRoleInput!) {
  admin_createTeacherRole(input: $input) {
    success
  }
}
    `;
export const AdminAssignFunctionCodesDocument = gql`
    mutation AdminAssignFunctionCodes($input: AdminAssignFunctionCodesInput!) {
  admin_assignFunctionCodes(input: $input) {
    success
  }
}
    `;
export const AdminAssignGlobalTagsToStudentsDocument = gql`
    mutation AdminAssignGlobalTagsToStudents($input: AdminGlobalTagsPerUsersInput!) {
  admin_assignGlobalTagsToStudents(input: $input) {
    success
    count
  }
}
    `;
export const AdminAssignGlobalTagsToTeachersDocument = gql`
    mutation AdminAssignGlobalTagsToTeachers($input: AdminGlobalTagsPerUsersInput!) {
  admin_assignGlobalTagsToTeachers(input: $input) {
    success
    count
  }
}
    `;
export const AdminAssignTeachersDocument = gql`
    mutation AdminAssignTeachers($input: AdminAssignTeachersInput!) {
  admin_assignTeachers(input: $input) {
    id
    teachers {
      ...TeacherFields
    }
  }
}
    ${TeacherFieldsFragmentDoc}`;
export const AdminBulkAssignGlobalTagsToStudentsDocument = gql`
    mutation AdminBulkAssignGlobalTagsToStudents($input: AdminGlobalTagsInput!) {
  admin_bulkAssignGlobalTagsToStudents(input: $input) {
    success
  }
}
    `;
export const AdminBulkAssignGlobalTagsToTeachersDocument = gql`
    mutation AdminBulkAssignGlobalTagsToTeachers($input: AdminGlobalTagsInput!) {
  admin_bulkAssignGlobalTagsToTeachers(input: $input) {
    success
  }
}
    `;
export const AdminBulkUnassignGlobalTagsFromStudentsDocument = gql`
    mutation AdminBulkUnassignGlobalTagsFromStudents($input: AdminGlobalTagsInput!) {
  admin_bulkUnassignGlobalTagsFromStudents(input: $input) {
    success
  }
}
    `;
export const AdminBulkUnassignGlobalTagsFromTeachersDocument = gql`
    mutation AdminBulkUnassignGlobalTagsFromTeachers($input: AdminGlobalTagsInput!) {
  admin_bulkUnassignGlobalTagsFromTeachers(input: $input) {
    success
  }
}
    `;
export const AdminCancelJobDocument = gql`
    mutation AdminCancelJob($input: JobInput!) {
  admin_cancelJob(input: $input) {
    success
  }
}
    `;
export const AdminCloneModuleInstanceDocument = gql`
    mutation AdminCloneModuleInstance($input: AdminCloneModuleInstanceInput!) {
  admin_cloneModuleInstance(input: $input) {
    id
    moduleId
    name
    slug
    startedAt
    endedAt
  }
}
    `;
export const AdminCreateFunctionDocument = gql`
    mutation AdminCreateFunction($input: AdminCreateEvaluationFunctionInput!) {
  admin_createEvaluationFunction(input: $input) {
    ...StandardAdminFunction
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const AdminCreateModuleDocument = gql`
    mutation AdminCreateModule($input: AdminCreateModuleInput!) {
  admin_createModule(input: $input) {
    id
    name
    slug
    description
  }
}
    `;
export const AdminCreateModuleInstanceDocument = gql`
    mutation AdminCreateModuleInstance($input: AdminCreateModuleInstanceInput!) {
  admin_createModuleInstance(input: $input) {
    id
    moduleId
    name
    slug
    startedAt
    endedAt
    teachers {
      ...TeacherDetails
    }
  }
}
    ${TeacherDetailsFragmentDoc}`;
export const AdminCreateResponseTypeDocument = gql`
    mutation AdminCreateResponseType($input: AdminCreateResponseTypeInput!) {
  admin_createResponseType(input: $input) {
    ...StandardAdminResponseType
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const AdminCreateTemplateQuestionDocument = gql`
    mutation AdminCreateTemplateQuestion($input: AdminCreateTemplateQuestionInput!) {
  admin_createTemplateQuestion(input: $input) {
    ...StandardAdminQuestion
  }
}
    ${StandardAdminQuestionFragmentDoc}`;
export const AdminDeleteFunctionDocument = gql`
    mutation AdminDeleteFunction($input: AdminRemoveEvaluationFunctionInput!) {
  admin_deleteEvaluationFunction(input: $input) {
    ...StandardAdminFunction
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const AdminDeleteGlobalTagDocument = gql`
    mutation AdminDeleteGlobalTag($input: AdminDeleteGlobalTagInput!) {
  admin_deleteGlobalTag(input: $input) {
    success
  }
}
    `;
export const AdminDeleteModuleDocument = gql`
    mutation AdminDeleteModule($input: AdminRemoveModuleInput!) {
  admin_deleteModule(input: $input) {
    ...StandardAdminModule
  }
}
    ${StandardAdminModuleFragmentDoc}`;
export const AdminDeleteModuleInstanceDocument = gql`
    mutation AdminDeleteModuleInstance($input: AdminRemoveModuleInstanceInput!) {
  admin_deleteModuleInstance(input: $input) {
    ...StandardAdminModuleInstance
  }
}
    ${StandardAdminModuleInstanceFragmentDoc}`;
export const AdminDeleteQuestionDocument = gql`
    mutation AdminDeleteQuestion($input: AdminDeleteQuestionInput!) {
  admin_deleteQuestion(input: $input) {
    success
  }
}
    `;
export const AdminDeleteResponseTypeDocument = gql`
    mutation AdminDeleteResponseType($input: AdminRemoveResponseTypeInput!) {
  admin_deleteResponseType(input: $input) {
    ...StandardAdminResponseType
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const AdminDeleteTeacherDocument = gql`
    mutation AdminDeleteTeacher($input: AdminDeleteTeacherInput!) {
  admin_deleteTeacher(input: $input) {
    success
  }
}
    `;
export const AdminDeleteTeacherRoleDocument = gql`
    mutation AdminDeleteTeacherRole($input: AdminDeleteTeacherRoleInput!) {
  admin_deleteTeacherRole(input: $input) {
    success
  }
}
    `;
export const AdminDemoteAdminDocument = gql`
    mutation AdminDemoteAdmin($input: AdminDemoteAdminInput!) {
  admin_demoteAdmin(input: $input) {
    success
  }
}
    `;
export const AdminReplaceAndDeleteTeacherRoleDocument = gql`
    mutation AdminReplaceAndDeleteTeacherRole($input: AdminReplaceAndDeleteTeacherRoleInput!) {
  admin_replaceAndDeleteTeacherRole(input: $input) {
    success
  }
}
    `;
export const AdminRestoreFunctionDocument = gql`
    mutation AdminRestoreFunction($input: AdminRestoreEvaluationFunctionInput!) {
  admin_restoreEvaluationFunction(input: $input) {
    ...StandardAdminFunction
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const AdminRestoreModuleDocument = gql`
    mutation AdminRestoreModule($input: AdminRestoreModuleInput!) {
  admin_restoreModule(input: $input) {
    ...StandardAdminModule
  }
}
    ${StandardAdminModuleFragmentDoc}`;
export const AdminRestoreModuleInstanceDocument = gql`
    mutation AdminRestoreModuleInstance($input: AdminRestoreModuleInstanceInput!) {
  admin_restoreModuleInstance(input: $input) {
    ...StandardAdminModuleInstance
  }
}
    ${StandardAdminModuleInstanceFragmentDoc}`;
export const AdminRunJobModuleRolloverDocument = gql`
    mutation AdminRunJobModuleRollover($input: RunJobModuleRolloverInput!) {
  admin_runJobModuleRollover(input: $input) {
    jobId
  }
}
    `;
export const AdminUnassignFunctionCodesDocument = gql`
    mutation AdminUnassignFunctionCodes($input: AdminAssignFunctionCodesInput!) {
  admin_unassignFunctionCodes(input: $input) {
    success
  }
}
    `;
export const AdminUnassignTeacherDocument = gql`
    mutation AdminUnassignTeacher($input: AdminUnassignTeacherInput!) {
  admin_unassignTeacher(input: $input) {
    success
  }
}
    `;
export const AdminUpdateAdminDocument = gql`
    mutation AdminUpdateAdmin($input: AdminUpdateAdminInput!) {
  admin_updateAdmin(input: $input) {
    success
  }
}
    `;
export const AdminUpdateFunctionDocument = gql`
    mutation AdminUpdateFunction($input: AdminUpdateEvaluationFunctionInput!) {
  admin_updateEvaluationFunction(input: $input) {
    ...StandardAdminFunction
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const AdminUpdateGlobalTagDocument = gql`
    mutation AdminUpdateGlobalTag($input: AdminUpdateGlobalTagInput!) {
  admin_updateGlobalTag(input: $input) {
    success
  }
}
    `;
export const AdminUpdateGlobalTagsAssignmentsToStudentsDocument = gql`
    mutation AdminUpdateGlobalTagsAssignmentsToStudents($input: AdminUpdateGlobalTagsAssignmentsInput!) {
  admin_updateGlobalTagsAssignmentsToStudents(input: $input) {
    success
  }
}
    `;
export const AdminUpdateGlobalTagsAssignmentsToTeachersDocument = gql`
    mutation AdminUpdateGlobalTagsAssignmentsToTeachers($input: AdminUpdateGlobalTagsAssignmentsInput!) {
  admin_updateGlobalTagsAssignmentsToTeachers(input: $input) {
    success
  }
}
    `;
export const AdminUpdateModuleDocument = gql`
    mutation AdminUpdateModule($input: AdminUpdateModuleInput!) {
  admin_updateModule(input: $input) {
    id
    name
    slug
    description
  }
}
    `;
export const AdminUpdateModuleInstanceDocument = gql`
    mutation AdminUpdateModuleInstance($input: AdminUpdateModuleInstanceInput!) {
  admin_updateModuleInstance(input: $input) {
    id
    name
    slug
    startedAt
    endedAt
  }
}
    `;
export const AdminUpdateModuleInstanceTeacherRoleDocument = gql`
    mutation AdminUpdateModuleInstanceTeacherRole($input: AdminUpdateModuleInstanceTeacherRoleInput!) {
  admin_updateModuleInstanceTeacherRole(input: $input) {
    success
  }
}
    `;
export const AdminUpdateQuestionDocument = gql`
    mutation AdminUpdateQuestion($input: AdminUpdateQuestionInput!) {
  admin_updateQuestion(input: $input) {
    ...StandardAdminQuestion
  }
}
    ${StandardAdminQuestionFragmentDoc}`;
export const AdminUpdateResponseTypeDocument = gql`
    mutation AdminUpdateResponseType($input: AdminUpdateResponseTypeInput!) {
  admin_updateResponseType(input: $input) {
    ...StandardAdminResponseType
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const AdminUpdateTeacherDocument = gql`
    mutation AdminUpdateTeacher($input: AdminUpdateTeacherInput!) {
  admin_updateTeacher(input: $input) {
    success
  }
}
    `;
export const AdminUpdateTeacherRoleDocument = gql`
    mutation AdminUpdateTeacherRole($input: AdminUpdateTeacherRoleInput!) {
  admin_updateTeacherRole(input: $input) {
    success
  }
}
    `;
export const AdminUpdateTenantDocument = gql`
    mutation AdminUpdateTenant($input: AdminUpdateTenantInput!) {
  admin_updateTenant(input: $input) {
    ...StandardAdminTenant
  }
}
    ${StandardAdminTenantFragmentDoc}`;
export const SuperadminAssignAdminDocument = gql`
    mutation SuperadminAssignAdmin($input: SuperAdminAssignAdminInput!) {
  superadmin_assignAdmin(input: $input) {
    success
  }
}
    `;
export const CreateSignedMediaDocument = gql`
    mutation CreateSignedMedia($input: CreateSignedImageInput!) {
  student_createSignedImage(input: $input) {
    url
    post {
      url
      fields
    }
  }
}
    `;
export const GetMathpixSessionDocument = gql`
    mutation getMathpixSession {
  getMathpixSession {
    ...StandardMathpixSessionResponse
  }
}
    ${StandardMathpixSessionResponseFragmentDoc}`;
export const LogButtonEventDocument = gql`
    mutation logButtonEvent($input: ButtonAnalyticsInput!) {
  logButtonEvent(input: $input) {
    success
  }
}
    `;
export const LogLoginEventDocument = gql`
    mutation logLoginEvent {
  logLoginEvent {
    success
  }
}
    `;
export const LogPdfEventDocument = gql`
    mutation logPDFEvent($input: PDFAnalyticsInput!) {
  logPDFEvent(input: $input) {
    success
  }
}
    `;
export const LogQuestionAccessEventDocument = gql`
    mutation logQuestionAccessEvent($partId: String!, $universalPartId: String!) {
  logQuestionAccessEvent(
    input: {partId: $partId, universalPartId: $universalPartId}
  ) {
    success
  }
}
    `;
export const LogSetAccessEventDocument = gql`
    mutation logSetAccessEvent($setId: String!) {
  logSetAccessEvent(input: {setId: $setId}) {
    success
  }
}
    `;
export const MarkCompletionDocument = gql`
    mutation markCompletion($checked: Boolean!, $partId: String!, $universalPartId: String!) {
  markCompletion(
    input: {checked: $checked, universalPartId: $universalPartId, partId: $partId}
  ) {
    success
  }
}
    `;
export const StudentCreateCommentDocument = gql`
    mutation StudentCreateComment($input: StudentCreateCommentInput!) {
  student_createComment(input: $input) {
    ...StandardComment
  }
}
    ${StandardCommentFragmentDoc}`;
export const StudentCreateConversationMessagePairDocument = gql`
    mutation StudentCreateConversationMessagePair($input: CreateMessagePairInput!) {
  createConversationMessagePair(input: $input) {
    id
    createdAt
    conversationId
    conversationTitle
    sentMessage
    responseMessage
    sentAt
    responseAt
  }
}
    `;
export const StudentDeleteCommentDocument = gql`
    mutation StudentDeleteComment($input: StudentRemoveCommentInput!) {
  student_deleteComment(input: $input) {
    success
  }
}
    `;
export const StudentDemandSolutionsAccessStatusDocument = gql`
    mutation StudentDemandSolutionsAccessStatus($input: StudentSolutionsAccessInput!) {
  student_demandSolutionsAccessStatus(input: $input) {
    partId
    universalPartId
    solutionsStatus {
      solutionType
      accessStatus
      estimatedMinimumTime
      timeTaken
    }
  }
}
    `;
export const StudentToggleCommentReactionDocument = gql`
    mutation StudentToggleCommentReaction($input: ToggleCommentReactionInput!) {
  student_toggleCommentReaction(input: $input) {
    added
    deleted
  }
}
    `;
export const StudentUpsertCanvasDocument = gql`
    mutation StudentUpsertCanvas($input: UpsertCanvasInput!) {
  upsertCanvas(input: $input) {
    snapshot
  }
}
    `;
export const StudentUpsertSubmissionDraftDocument = gql`
    mutation StudentUpsertSubmissionDraft($input: UpsertSubmissionDraftInput!) {
  upsertSubmissionDraft(input: $input) {
    snapshot
    feedback
    color
    isCorrect
    isError
    matchedCase {
      feedback
      color
    }
  }
}
    `;
export const SubmitResponseDocument = gql`
    mutation submitResponse($submission: JSON, $additionalParams: JSON, $responseAreaId: String!, $universalResponseAreaId: String!) {
  submitResponse(
    input: {rawSubmission: $submission, additionalParams: $additionalParams, universalResponseAreaId: $universalResponseAreaId, responseAreaId: $responseAreaId}
  ) {
    __typename
    ... on Submission {
      ...StandardSubmission
    }
    ... on SubmissionWithoutFeedback {
      ...StandardSubmissionWithoutFeedback
    }
  }
}
    ${StandardSubmissionFragmentDoc}
${StandardSubmissionWithoutFeedbackFragmentDoc}`;
export const SubmitResponsePreviewDocument = gql`
    mutation submitResponsePreview($submission: JSON!, $additionalParams: JSON, $universalResponseAreaId: String!, $responseAreaId: String!) {
  submitResponsePreview(
    input: {rawSubmission: $submission, additionalParams: $additionalParams, universalResponseAreaId: $universalResponseAreaId, responseAreaId: $responseAreaId}
  ) {
    ...StandardSubmissionPreview
  }
}
    ${StandardSubmissionPreviewFragmentDoc}`;
export const TeacherAddStudentsDocument = gql`
    mutation TeacherAddStudents($input: TeacherAssignStudentsInput!) {
  teacher_assignStudents(input: $input) {
    id
  }
}
    `;
export const TeacherApproveSubmissionDocument = gql`
    mutation TeacherApproveSubmission($submissionId: String!) {
  approveSubmission(submissionId: $submissionId)
}
    `;
export const TeacherAssignStudentsTagsDocument = gql`
    mutation TeacherAssignStudentsTags($input: TeacherUpdateStudentsTagsAssignmentsInput!) {
  teacher_assignStudentsTags(input: $input) {
    success
  }
}
    `;
export const TeacherAssignTeachersDocument = gql`
    mutation TeacherAssignTeachers($input: AdminAssignTeachersInput!) {
  teacher_assignTeachers(input: $input) {
    success
  }
}
    `;
export const TeacherBulkApproveSubmissionsDocument = gql`
    mutation TeacherBulkApproveSubmissions($input: BulkModerateSubmissionsInput!) {
  bulkApproveSubmissions(input: $input)
}
    `;
export const TeacherBulkRejectSubmissionsDocument = gql`
    mutation TeacherBulkRejectSubmissions($input: BulkModerateSubmissionsInput!) {
  bulkRejectSubmissions(input: $input)
}
    `;
export const TeacherCreateCommentDocument = gql`
    mutation TeacherCreateComment($input: TeacherCreateCommentInput!) {
  teacher_createComment(input: $input) {
    ...StandardComment
  }
}
    ${StandardCommentFragmentDoc}`;
export const TeacherCreateModuleStudentTagDocument = gql`
    mutation TeacherCreateModuleStudentTag($input: TeacherCreateModuleStudentTagInput!) {
  teacher_createModuleStudentTag(input: $input) {
    success
  }
}
    `;
export const TeacherCreateQuestionDocument = gql`
    mutation TeacherCreateQuestion($input: TeacherCreateQuestionInput!) {
  teacher_createQuestion(input: $input) {
    id
    pdfError
  }
}
    `;
export const TeacherCreateSetDocument = gql`
    mutation TeacherCreateSet($input: TeacherCreateSetInput!) {
  teacher_createSet(input: $input) {
    id
  }
}
    `;
export const TeacherCreateSignedImageDocument = gql`
    mutation TeacherCreateSignedImage($input: CreateSignedImageInput!) {
  teacher_createSignedImage(input: $input) {
    url
    post {
      url
      fields
    }
  }
}
    `;
export const TeacherDeleteCommentDocument = gql`
    mutation TeacherDeleteComment($input: TeacherRemoveCommentInput!) {
  teacher_deleteComment(input: $input) {
    success
  }
}
    `;
export const TeacherDeleteModuleStudentTagDocument = gql`
    mutation TeacherDeleteModuleStudentTag($input: TeacherDeleteModuleStudentTagInput!) {
  teacher_deleteModuleStudentTag(input: $input) {
    success
  }
}
    `;
export const TeacherDeleteQuestionDocument = gql`
    mutation TeacherDeleteQuestion($input: TeacherDeleteQuestionInput!) {
  teacher_deleteQuestion(input: $input) {
    questionId
    pdfError
  }
}
    `;
export const TeacherDeleteSetDocument = gql`
    mutation TeacherDeleteSet($input: TeacherDeleteSetInput!) {
  teacher_deleteSet(input: $input) {
    success
  }
}
    `;
export const TeacherExportQuestionDocument = gql`
    mutation TeacherExportQuestion($input: TeacherExportQuestionInput!) {
  teacher_exportQuestion(input: $input) {
    zippedData
    zippedFileName
    warnings
  }
}
    `;
export const TeacherExportSetDocument = gql`
    mutation TeacherExportSet($input: TeacherExportSetInput!) {
  teacher_exportSet(input: $input) {
    zippedData
    zippedFileName
    warnings
  }
}
    `;
export const TeacherExportSetAsPdfDocument = gql`
    mutation TeacherExportSetAsPdf($input: TeacherExportSetAsPdfInput!) {
  teacher_exportSetAsPdf(input: $input) {
    exportedPdfUrl
    pdfError
  }
}
    `;
export const TeacherGetGuidanceTimeDocument = gql`
    mutation TeacherGetGuidanceTime($input: TeacherGuidanceTimeInput!) {
  teacher_getGuidanceTime(input: $input) {
    upperBound
    lowerBound
  }
}
    `;
export const TeacherImportQuestionsDocument = gql`
    mutation TeacherImportQuestions($input: TeacherImportQuestionsInput!) {
  teacher_importQuestions(input: $input) {
    questionIds
    pdfError
  }
}
    `;
export const TeacherImportSetDocument = gql`
    mutation TeacherImportSet($input: TeacherImportSetInput!) {
  teacher_importSet(input: $input) {
    setId
    pdfError
  }
}
    `;
export const TeacherModuleInstanceResolveActivitiesDocument = gql`
    mutation TeacherModuleInstanceResolveActivities($input: TeacherModuleInstanceResolveActivitiesInput!) {
  teacher_moduleInstanceResolveActivities(input: $input) {
    success
  }
}
    `;
export const TeacherModuleInstanceResolveActivityDocument = gql`
    mutation TeacherModuleInstanceResolveActivity($input: TeacherModuleInstanceResolveActivityInput!) {
  teacher_moduleInstanceResolveActivity(input: $input) {
    success
  }
}
    `;
export const TeacherModuleInstanceResolveFlagsDocument = gql`
    mutation TeacherModuleInstanceResolveFlags($input: TeacherModuleInstanceResolveFlagInput!) {
  teacher_moduleInstanceResolveFlags(input: $input) {
    success
  }
}
    `;
export const TeacherPublishCommentDocument = gql`
    mutation TeacherPublishComment($input: TeacherPublishCommentInput!) {
  teacher_publishComment(input: $input) {
    success
  }
}
    `;
export const TeacherPublishQuestionsDocument = gql`
    mutation TeacherPublishQuestions($input: TeacherPublishQuestionsInput!) {
  teacher_publishQuestions(input: $input) {
    questionsForPublishing
    questionsNotChanged
    pdfError
  }
}
    `;
export const TeacherRejectSubmissionDocument = gql`
    mutation TeacherRejectSubmission($submissionId: String!) {
  rejectSubmission(submissionId: $submissionId)
}
    `;
export const TeacherRemoveStudentDocument = gql`
    mutation TeacherRemoveStudent($input: TeacherRemoveStudentInput!) {
  teacher_removeStudent(input: $input) {
    success
  }
}
    `;
export const TeacherRemoveStudentsDocument = gql`
    mutation TeacherRemoveStudents($input: TeacherRemoveStudentsInput!) {
  teacher_removeStudents(input: $input) {
    success
  }
}
    `;
export const TeacherReorderQuestionsDocument = gql`
    mutation TeacherReorderQuestions($input: TeacherReorderQuestionsInput!) {
  teacher_reorderQuestions(input: $input) {
    success
  }
}
    `;
export const TeacherReorderSetsDocument = gql`
    mutation TeacherReorderSets($input: TeacherReorderSetsInput!) {
  teacher_reorderSets(input: $input) {
    id
  }
}
    `;
export const TeacherRetrieveModuleInstanceErrorsDocument = gql`
    mutation TeacherRetrieveModuleInstanceErrors($input: TeacherModuleInstancePaginationInput!) {
  teacher_retrieveModuleInstanceErrors(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceError
    }
    total
  }
}
    ${StandardTeacherModuleInstanceErrorFragmentDoc}`;
export const TeacherRetrieveModuleInstanceFlagsDocument = gql`
    mutation TeacherRetrieveModuleInstanceFlags($input: TeacherModuleInstanceFlagsInput!) {
  teacher_retrieveModuleInstanceFlags(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceFlag
    }
    total
  }
}
    ${StandardTeacherModuleInstanceFlagFragmentDoc}`;
export const TeacherRetrieveModuleInstanceActivitiesDocument = gql`
    mutation TeacherRetrieveModuleInstanceActivities($input: TeacherModuleInstanceActivitiesInput!) {
  teacher_retrieveModuleInstanceActivities(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceActivity
    }
    total
  }
}
    ${StandardTeacherModuleInstanceActivityFragmentDoc}`;
export const TeacherRevertToQuestionVersionDocument = gql`
    mutation TeacherRevertToQuestionVersion($input: TeacherRevertToQuestionVersionInput!) {
  teacher_revertToQuestionVersion(input: $input) {
    ...StandardTeacherQuestion
  }
}
    ${StandardTeacherQuestionFragmentDoc}`;
export const TeacherSaveImportedQuestionsDocument = gql`
    mutation TeacherSaveImportedQuestions($input: TeacherSaveImportedQuestionsInput!) {
  teacher_saveImportedQuestions(input: $input) {
    importedQuestionIds
  }
}
    `;
export const TeacherSubmitTestDocument = gql`
    mutation TeacherSubmitTest($input: TeacherSubmitTestInput!) {
  teacher_submitTest(input: $input) {
    ...StandardTeacherSubmission
  }
}
    ${StandardTeacherSubmissionFragmentDoc}`;
export const TeacherTestSubmisionPreviewDocument = gql`
    mutation TeacherTestSubmisionPreview($input: TeacherPreviewTestInput!) {
  teacher_testSubmissionResponsePreview(input: $input) {
    ...StandardSubmissionPreview
  }
}
    ${StandardSubmissionPreviewFragmentDoc}`;
export const TeacherToggleCommentReactionDocument = gql`
    mutation TeacherToggleCommentReaction($input: ToggleCommentReactionInput!) {
  teacher_toggleCommentReaction(input: $input) {
    added
    deleted
  }
}
    `;
export const TeacherToggleSetVisiblityDocument = gql`
    mutation TeacherToggleSetVisiblity($input: TeacherSetVisibilityInput!) {
  teacher_setSetVisibility(input: $input) {
    id
  }
}
    `;
export const TeacherUnassignStudentsTagsDocument = gql`
    mutation TeacherUnassignStudentsTags($input: TeacherUpdateStudentsTagsAssignmentsInput!) {
  teacher_unassignStudentsTags(input: $input) {
    success
  }
}
    `;
export const TeacherUnassignTeachersDocument = gql`
    mutation TeacherUnassignTeachers($input: AdminUnassignTeacherInput!) {
  teacher_unassignTeacher(input: $input) {
    success
  }
}
    `;
export const TeacherUpdateModuleInstanceDocument = gql`
    mutation TeacherUpdateModuleInstance($input: TeacherUpdateModuleInstanceInput!) {
  teacher_updateModuleInstance(input: $input) {
    id
    allowComments
    publishCommentInstantly
    allowChatbot
  }
}
    `;
export const TeacherUpdateModuleInstanceTeacherRoleDocument = gql`
    mutation TeacherUpdateModuleInstanceTeacherRole($input: TeacherUpdateModuleInstanceTeacherRoleInput!) {
  teacher_updateModuleInstanceTeacherRole(input: $input) {
    success
  }
}
    `;
export const TeacherUpdateModuleStudentTagDocument = gql`
    mutation TeacherUpdateModuleStudentTag($input: TeacherUpdateModuleStudentTagInput!) {
  teacher_updateModuleStudentTag(input: $input) {
    success
  }
}
    `;
export const TeacherUpdateQuestionDocument = gql`
    mutation TeacherUpdateQuestion($input: TeacherUpdateQuestionInput!) {
  teacher_updateQuestion(input: $input) {
    id
    pdfError
  }
}
    `;
export const TeacherUpdateQuestionDraftDocument = gql`
    mutation TeacherUpdateQuestionDraft($input: TeacherUpdateQuestionInput!) {
  teacher_updateQuestionDraft(input: $input) {
    id
  }
}
    `;
export const TeacherUpdateQuestionSettingsDocument = gql`
    mutation TeacherUpdateQuestionSettings($input: TeacherQuestionSettingsInput!) {
  teacher_updateQuestionSettings(input: $input) {
    success
  }
}
    `;
export const TeacherUpdateSetDocument = gql`
    mutation TeacherUpdateSet($input: TeacherUpdateSetInput!) {
  teacher_updateSet(input: $input) {
    id
  }
}
    `;
export const TeacherUpdateSetsHeaderDocument = gql`
    mutation TeacherUpdateSetsHeader($input: TeacherSetsHeaderInput!) {
  teacher_updateSetsHeader(input: $input) {
    success
  }
}
    `;
export const TeacherUpdateStudentTagAssignmentsDocument = gql`
    mutation TeacherUpdateStudentTagAssignments($input: TeacherUpdateStudentTagAssignmentsInput!) {
  teacher_updateStudentTagAssignments(input: $input) {
    success
  }
}
    `;
export const ToggleReactionDocument = gql`
    mutation ToggleReaction($input: ReactionToggleInput!) {
  toggleReaction(input: $input) {
    added
    deleted
  }
}
    `;
export const ToggleTimingReactionDocument = gql`
    mutation ToggleTimingReaction($input: TimingReactionToggleInput!) {
  toggleTimingReaction(input: $input) {
    added
    deleted
  }
}
    `;
export const UpdateUserSettingsDocument = gql`
    mutation UpdateUserSettings($input: UpdateUserSettingsInput!) {
  updateUserSettings(input: $input) {
    success
  }
}
    `;
export const UpsertNoteDocument = gql`
    mutation UpsertNote($input: UpsertNoteInput!) {
  upsertNote(input: $input) {
    text
  }
}
    `;
export const AdminGetActiveModulesDocument = gql`
    query AdminGetActiveModules($input: AdminActiveModulesInput!) {
  admin_activeModules(input: $input) {
    activeModules
    activeSets
    activeQuestions
    activeParts
    activeResponseAreas
    activeEvaluationFunctions
  }
}
    `;
export const AdminGetAdminsDocument = gql`
    query AdminGetAdmins($input: AdminTeachersInput!) {
  admin_teachers(input: $input) {
    edges {
      id
      name
      email
      role
      recapSchedule
      teacherGlobalTags {
        id
        name
      }
      studentGlobalTags {
        id
        name
      }
    }
    total
  }
}
    `;
export const AdminGetConversationFlagsDocument = gql`
    query AdminGetConversationFlags($input: AdminConversationFlagsInput!) {
  admin_conversationFlags(input: $input) {
    edges {
      ...StandardAdminConversationFlag
    }
    total
  }
}
    ${StandardAdminConversationFlagFragmentDoc}`;
export const AdminGetConversationFlagsStatisticsDocument = gql`
    query AdminGetConversationFlagsStatistics {
  admin_conversationFlagsStatistics {
    total
    lastYear
    lastMonth
    lastWeek
    lastDay
  }
}
    `;
export const AdminGetEvaluationFunctionErrorsDocument = gql`
    query AdminGetEvaluationFunctionErrors($input: AdminEvaluationFunctionErrorsInput!) {
  admin_evaluationFunctionErrors(input: $input) {
    edges {
      moduleId
      moduleName
      moduleInstanceId
      moduleInstanceSlug
      setId
      setName
      questionId
      questionNumber
      questionTitle
    }
    total
  }
}
    `;
export const AdminGetEvaluationFunctionGroupedErrorsDocument = gql`
    query AdminGetEvaluationFunctionGroupedErrors($input: AdminEvaluationFunctionGroupedErrorsInput!) {
  admin_evaluationFunctionGroupedErrors(input: $input) {
    evaluationFunctionId
    evaluationFunctionName
    edges {
      feedback
      rawResponse
      errorCount
      rowId
    }
    total
  }
}
    `;
export const AdminGetEvaluationFunctionStatisticsDocument = gql`
    query AdminGetEvaluationFunctionStatistics($input: AdminEvaluationFunctionsStatisticsInput!) {
  admin_evaluationFunctionsStatistics(input: $input) {
    edges {
      id
      name
      responseAreaCount
      submissionCount
      errorCount
      errorCountLastYear
      errorCountLastMonth
      errorCountLastWeek
      errorCountLastDay
    }
    total
  }
}
    `;
export const AdminGetFunctionDocument = gql`
    query AdminGetFunction($id: String!) {
  admin_evaluationFunction(id: $id) {
    ...StandardAdminFunction
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const AdminGetFunctionCodesAllDocument = gql`
    query AdminGetFunctionCodesAll {
  admin_functionCodesAll {
    ...StandardFunctionCode
  }
}
    ${StandardFunctionCodeFragmentDoc}`;
export const AdminGetFunctionsDocument = gql`
    query AdminGetFunctions($input: AdminEvaluationFunctionsInput!) {
  admin_evaluationFunctions(input: $input) {
    edges {
      ...StandardAdminFunction
    }
    total
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const AdminGetGlobalTagDocument = gql`
    query AdminGetGlobalTag($input: AdminGetGlobalTagInput!) {
  admin_globalTag(input: $input) {
    id
    type
    name
    tagOwnerEmail
    teacherEmails
  }
}
    `;
export const AdminGetGlobalTagsAllDocument = gql`
    query AdminGetGlobalTagsAll {
  admin_globalTagsAll {
    ...StandardGlobalTagWithDetails
  }
}
    ${StandardGlobalTagWithDetailsFragmentDoc}`;
export const AdminGetGlobalTagsStatusDocument = gql`
    query AdminGetGlobalTagsStatus($input: AdminFindGlobalTagsInput!) {
  admin_globalTagsStatus(input: $input) {
    globalTagsStatus {
      id
      name
      status
      similarExistingTags {
        id
        name
      }
      similarOtherNewTags {
        id
        name
      }
    }
  }
}
    `;
export const AdminGetJobModuleRolloverDocument = gql`
    query AdminGetJobModuleRollover($input: JobInput!) {
  admin_jobModuleRollover(input: $input) {
    id
    createdAt
    createdByUserId
    createdByUserEmail
    cancelledByUserId
    cancelledByUserEmail
    jobStatus
    startedAt
    finishedAt
    errorMessage
    metadata
    newName
    newSlug
    newStartedAt
    newEndedAt
    daysOffset
    includeUnpublishedQuestions
    carryOverCommentSetting
    allowComments
    allowChatbot
    publishCommentInstantly
    moduleRolloverJobInstances {
      id
      jobInstanceStatus
      startedAt
      finishedAt
      errorMessage
      moduleId
      moduleSlug
      sourceModuleInstanceId
      sourceModuleInstanceSlug
      targetModuleInstanceId
      targetModuleInstanceSlug
    }
  }
}
    `;
export const AdminGetJobsDocument = gql`
    query AdminGetJobs {
  admin_jobs {
    ...StandardAdminJob
  }
}
    ${StandardAdminJobFragmentDoc}`;
export const AdminGetMessagePairCountStatisticsDocument = gql`
    query AdminGetMessagePairCountStatistics {
  admin_messagePairCountStatistics {
    total
    lastYear
    lastMonth
    lastWeek
    lastDay
  }
}
    `;
export const AdminGetMessagePairCountsDocument = gql`
    query AdminGetMessagePairCounts($input: AdminMessagePairCountInput!) {
  admin_messagePairCounts(input: $input) {
    edges {
      ...StandardAdminMessagePairCount
    }
    total
    totalCounts
  }
}
    ${StandardAdminMessagePairCountFragmentDoc}`;
export const AdminGetModuleDocument = gql`
    query AdminGetModule($id: String!) {
  admin_module(id: $id) {
    id
    name
    slug
    description
    deletedAt
  }
}
    `;
export const AdminGetModuleInstanceDocument = gql`
    query AdminGetModuleInstance($id: String!, $inputTeachers: AdminModuleInstanceTeachersInput!) {
  admin_moduleInstance(id: $id) {
    id
    name
    slug
    startedAt
    endedAt
    moduleId
    moduleName
    moduleSlug
    allowComments
    publishCommentInstantly
    teachers(inputTeachers: $inputTeachers) {
      id
      email
      teacherRoleId
    }
  }
}
    `;
export const AdminGetModuleInstancesDocument = gql`
    query AdminGetModuleInstances($input: AdminModuleInstancesInput!, $inputTeachers: AdminModuleInstanceTeachersInput!) {
  admin_moduleInstances(input: $input) {
    edges {
      id
      name
      slug
      startedAt
      endedAt
      deletedAt
      teachers(inputTeachers: $inputTeachers) {
        email
      }
    }
    total
  }
}
    `;
export const AdminGetModuleInstancesForRolloverDocument = gql`
    query AdminGetModuleInstancesForRollover($inputTeachers: AdminModuleInstanceTeachersInput!) {
  admin_moduleInstancesForRollover {
    edges {
      ...StandardModuleInstanceToClone
    }
    total
  }
}
    ${StandardModuleInstanceToCloneFragmentDoc}`;
export const AdminGetModulesDocument = gql`
    query AdminGetModules($input: AdminModulesInput!) {
  admin_modules(input: $input) {
    edges {
      id
      name
      slug
      description
      deletedAt
      numberOfModuleInstances
    }
    total
  }
}
    `;
export const AdminGetResponseTypeDocument = gql`
    query AdminGetResponseType($id: String!) {
  admin_responseType(id: $id) {
    ...StandardAdminResponseType
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const AdminGetResponseTypesDocument = gql`
    query AdminGetResponseTypes($input: AdminResponseTypesInput!) {
  admin_responseTypes(input: $input) {
    edges {
      ...StandardAdminResponseType
    }
    total
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const AdminGetResponseTypesAllDocument = gql`
    query AdminGetResponseTypesAll {
  admin_responseTypesAll {
    edges {
      ...StandardAdminResponseType
    }
    total
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const AdminGetStudentsDocument = gql`
    query AdminGetStudents($input: AdminStudentsInput!) {
  admin_students(input: $input) {
    edges {
      id
      name
      email
      globalTags {
        id
        name
      }
    }
    total
  }
}
    `;
export const AdminGetTeacherDocument = gql`
    query AdminGetTeacher($input: AdminGetUserInput!) {
  admin_teacherDetails(input: $input) {
    id
    name
    email
    role
    recapSchedule
    teacherGlobalTagIds
    studentGlobalTagIds
    moduleInstances {
      id
      name
      startedAt
      endedAt
      moduleId
      moduleName
      teacherRoleId
      tutorRoleId
      globalTagIds
    }
  }
}
    `;
export const AdminGetTeacherRolesDocument = gql`
    query AdminGetTeacherRoles {
  admin_teacherRoles {
    ...StandardAdminTeacherRole
  }
}
    ${StandardAdminTeacherRoleFragmentDoc}`;
export const AdminGetTeachersDocument = gql`
    query AdminGetTeachers($input: AdminTeachersInput!) {
  admin_teachers(input: $input) {
    edges {
      id
      name
      email
      role
    }
    total
  }
}
    `;
export const AdminGetTeachersAllDocument = gql`
    query AdminGetTeachersAll($input: AdminTeachersInput!) {
  admin_teachers(input: $input) {
    edges {
      id
      name
      email
      role
    }
    total
  }
}
    `;
export const AdminGetTeachersWithModuleInstancesDocument = gql`
    query AdminGetTeachersWithModuleInstances($input: AdminTeachersInput!) {
  admin_teachers(input: $input) {
    edges {
      id
      name
      email
      role
      recapSchedule
      teacherGlobalTags {
        id
        name
        isTagOwner
      }
      studentGlobalTags {
        id
        name
      }
      moduleInstances {
        id
        name
        startedAt
        moduleName
        moduleId
      }
    }
    total
  }
}
    `;
export const AdminGetTemplateQuestionDocument = gql`
    query AdminGetTemplateQuestion($id: String!) {
  admin_templateQuestion(id: $id) {
    ...StandardAdminQuestion
  }
}
    ${StandardAdminQuestionFragmentDoc}`;
export const AdminGetTemplateQuestionsDocument = gql`
    query AdminGetTemplateQuestions($first: Int!, $offset: Int!) {
  admin_templateQuestions(first: $first, offset: $offset) {
    edges {
      ...StandardAdminQuestion
    }
    total
  }
}
    ${StandardAdminQuestionFragmentDoc}`;
export const AdminGetTenantDocument = gql`
    query AdminGetTenant {
  admin_tenant {
    ...StandardAdminTenant
  }
}
    ${StandardAdminTenantFragmentDoc}`;
export const AdminGetTenantTextEditorDocument = gql`
    query AdminGetTenantTextEditor {
  admin_tenant {
    textEditor
  }
}
    `;
export const AdminGetUserAccessEventsDocument = gql`
    query AdminGetUserAccessEvents($input: AdminUserAccessEventsInput!) {
  admin_userAccessEvents(input: $input) {
    userAccessEvents {
      eventAccessType
      eventUserAccess {
        timePartNumber
        accessCount
      }
    }
  }
}
    `;
export const AdminGetUserNumbersDocument = gql`
    query AdminGetUserNumbers($input: AdminUserNumbersInput!) {
  admin_userNumbers(input: $input) {
    totalUsers
    teacherUsers
    studentUsers
    adminUsers
  }
}
    `;
export const AdminGetUsersStatusDocument = gql`
    query AdminGetUsersStatus($input: UserListInput!) {
  admin_usersStatus(input: $input) {
    usersWithStatus {
      email
      status
      role
      studentGlobalTagNames
      teacherGlobalTagNames
    }
  }
}
    `;
export const GetMeDocument = gql`
    query GetMe {
  me {
    ...StandardMe
  }
}
    ${StandardMeFragmentDoc}`;
export const ListModuleInstanceUserPreferencesDocument = gql`
    query ListModuleInstanceUserPreferences {
  moduleInstanceUserPreferences {
    edges {
      ...StandardModuleInstanceUserPreference
    }
    total
  }
}
    ${StandardModuleInstanceUserPreferenceFragmentDoc}`;
export const GetNoteDocument = gql`
    query GetNote($input: GetNoteInput!) {
  getNote(input: $input) {
    text
  }
}
    `;
export const GetQuestionReactionsDocument = gql`
    query GetQuestionReactions($input: ReactionsInput!) {
  student_reactions(input: $input) {
    reactionStats {
      reaction
      count
    }
    userReactions
  }
}
    `;
export const GetSetDocument = gql`
    query GetSet($id: String!) {
  student_set(id: $id) {
    ...StandardSetResult
  }
}
    ${StandardSetResultFragmentDoc}`;
export const StudentGetCanvasDocument = gql`
    query StudentGetCanvas($input: GetCanvasInput!) {
  getCanvas(input: $input) {
    snapshot
  }
}
    `;
export const StudentGetChatFunctionsDetailsDocument = gql`
    query StudentGetChatFunctionsDetails {
  getChatFunctionsDetails {
    id
    name
    description
    remoteDocsUrl
  }
}
    `;
export const StudentGetCommentsDocument = gql`
    query StudentGetComments($input: StudentCommentsInput!) {
  student_comments(input: $input) {
    edges {
      ...StandardComment
    }
    total
  }
}
    ${StandardCommentFragmentDoc}`;
export const StudentGetConversationDocument = gql`
    query StudentGetConversation($input: GetConversationInput!) {
  getConversation(input: $input) {
    id
    title
    createdAt
    messagePairs {
      id
      createdAt
      updatedAt
      sentMessage
      responseMessage
      sentAt
      responseAt
      chatFunctionId
    }
  }
}
    `;
export const StudentGetDefaultChatFunctionsForTenantDetailsDocument = gql`
    query StudentGetDefaultChatFunctionsForTenantDetails {
  getDefaultChatFunctionForTenant {
    id
    name
    description
    remoteDocsUrl
  }
}
    `;
export const StudentGetModuleAndDefaultInstanceDocument = gql`
    query StudentGetModuleAndDefaultInstance($input: StudentModuleInput!) {
  student_moduleDetails(input: $input) {
    id
    slug
    name
    description
    defaultModuleInstance {
      ...StandardModuleInstance
    }
  }
}
    ${StandardModuleInstanceFragmentDoc}`;
export const StudentGetModuleAndInstancesDocument = gql`
    query StudentGetModuleAndInstances($input: StudentModuleInput!) {
  student_moduleDetails(input: $input) {
    id
    slug
    name
    description
    moduleInstances {
      id
      slug
      name
      startedAt
      endedAt
    }
  }
}
    `;
export const StudentGetModuleInstanceDocument = gql`
    query StudentGetModuleInstance($input: StudentModuleInstanceInput!) {
  student_moduleInstance(input: $input) {
    ...StandardStudentModuleInstance
  }
}
    ${StandardStudentModuleInstanceFragmentDoc}`;
export const StudentGetModuleInstanceAndStatsDocument = gql`
    query StudentGetModuleInstanceAndStats($input: StudentModuleInstanceInput!) {
  student_moduleInstance(input: $input) {
    ...StandardStudentModuleInstance
    moduleInstanceStats {
      ...StandardModuleInstanceStats
    }
  }
}
    ${StandardStudentModuleInstanceFragmentDoc}
${StandardModuleInstanceStatsFragmentDoc}`;
export const StudentGetModulesDocument = gql`
    query StudentGetModules($input: StudentModulesInput!) {
  student_modules(input: $input) {
    id
    slug
    name
    defaultModuleInstance {
      ...StandardModuleInstance
      moduleInstanceStats {
        ...StandardModuleInstanceStats
      }
    }
  }
}
    ${StandardModuleInstanceFragmentDoc}
${StandardModuleInstanceStatsFragmentDoc}`;
export const StudentGetQuestionPreviewsDocument = gql`
    query StudentGetQuestionPreviews($input: StudentQuestionPreviewsInput!) {
  student_questionPreviews(input: $input) {
    ...StandardQuestionPreview
  }
}
    ${StandardQuestionPreviewFragmentDoc}`;
export const StudentGetSolutionsAccessStatusDocument = gql`
    query StudentGetSolutionsAccessStatus($input: StudentSolutionsAccessInput!) {
  student_solutionsAccessStatus(input: $input) {
    partId
    universalPartId
    solutionsStatus {
      solutionType
      accessStatus
      estimatedMinimumTime
      timeTaken
    }
  }
}
    `;
export const StudentGetSubmissionDraftDocument = gql`
    query StudentGetSubmissionDraft($input: GetSubmissionDraftInput!) {
  getSubmissionDraft(input: $input) {
    snapshot
    feedback
    color
  }
}
    `;
export const TeacherCheckPublishQuestionsDocument = gql`
    query TeacherCheckPublishQuestions($input: TeacherPublishQuestionsInput!) {
  teacher_checkPublishQuestions(input: $input) {
    questionsForPublishing
    questionsNotChanged
  }
}
    `;
export const TeacherGetAllModuleInstanceStudentsDocument = gql`
    query TeacherGetAllModuleInstanceStudents($input: TeacherGetModuleInstanceInput!) {
  teacher_allModuleInstanceStudents(input: $input) {
    id
    email
  }
}
    `;
export const TeacherGetAllModuleInstanceTeachersDocument = gql`
    query TeacherGetAllModuleInstanceTeachers($input: TeacherGetModuleInstanceInput!) {
  teacher_allModuleInstanceTeachers(input: $input) {
    id
    email
    name
  }
}
    `;
export const TeacherGetCloneableQuestionsDocument = gql`
    query TeacherGetCloneableQuestions($input: PaginationInput!) {
  teacher_cloneableQuestions(input: $input) {
    edges {
      ...StandardTeacherQuestion
      parents {
        setId
        setNumber
        setName
        moduleInstanceId
        moduleInstanceName
        moduleId
        moduleName
      }
    }
    total
  }
}
    ${StandardTeacherQuestionFragmentDoc}`;
export const TeacherGetCommentsDocument = gql`
    query TeacherGetComments($input: TeacherCommentsInput!) {
  teacher_comments(input: $input) {
    edges {
      ...StandardComment
    }
    total
  }
}
    ${StandardCommentFragmentDoc}`;
export const TeacherGetFunctionDocument = gql`
    query TeacherGetFunction($name: String!) {
  teacher_evaluationFunction(name: $name) {
    ...StandardTeacherFunction
  }
}
    ${StandardTeacherFunctionFragmentDoc}`;
export const TeacherGetFunctionsDocument = gql`
    query TeacherGetFunctions($input: TeacherEvaluationFunctionsInput!) {
  teacher_evaluationFunctions(input: $input) {
    edges {
      ...StandardTeacherFunction
    }
    total
  }
}
    ${StandardTeacherFunctionFragmentDoc}`;
export const TeacherGetModuleAccessDailyStatisticsDocument = gql`
    query TeacherGetModuleAccessDailyStatistics($input: ModuleAccessStatisticsInput!) {
  teacher_moduleAccessDailyStatistics(input: $input) {
    ...StandardGraphStatistics
  }
}
    ${StandardGraphStatisticsFragmentDoc}`;
export const TeacherGetModuleAccessStatisticsDocument = gql`
    query TeacherGetModuleAccessStatistics($input: ModuleAccessStatisticsInput!) {
  teacher_moduleAccessStatistics(input: $input) {
    noOfStudents
    graphStatistics {
      ...StandardGraphStatistics
    }
  }
}
    ${StandardGraphStatisticsFragmentDoc}`;
export const TeacherGetModuleAndInstancesDocument = gql`
    query TeacherGetModuleAndInstances($input: TeacherModuleInput!) {
  teacher_moduleDetails(input: $input) {
    id
    slug
    name
    description
    moduleInstances {
      id
      slug
      name
      startedAt
      endedAt
    }
  }
}
    `;
export const TeacherGetModuleInstanceCommentsExistDocument = gql`
    query TeacherGetModuleInstanceCommentsExist($input: TeacherCommentsExistInput!) {
  teacher_commentsExist(input: $input) {
    commentsExist
  }
}
    `;
export const TeacherGetModuleInstanceDocument = gql`
    query TeacherGetModuleInstance($input: TeacherGetModuleInstanceInput!) {
  teacher_moduleInstance(input: $input) {
    moduleInstance {
      ...StandardTeacherModuleInstance
    }
    error {
      code
      message
    }
  }
}
    ${StandardTeacherModuleInstanceFragmentDoc}`;
export const TeacherGetModuleInstanceActivitiesDocument = gql`
    query TeacherGetModuleInstanceActivities($input: TeacherModuleInstanceActivitiesInput!) {
  teacher_moduleInstanceActivities(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceActivity
    }
    total
  }
}
    ${StandardTeacherModuleInstanceActivityFragmentDoc}`;
export const TeacherGetModuleInstanceErrorsDocument = gql`
    query TeacherGetModuleInstanceErrors($input: TeacherModuleInstancePaginationInput!) {
  teacher_moduleInstanceErrors(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceError
    }
    total
  }
}
    ${StandardTeacherModuleInstanceErrorFragmentDoc}`;
export const TeacherGetModuleInstanceFlagsDocument = gql`
    query TeacherGetModuleInstanceFlags($input: TeacherModuleInstanceFlagsInput!) {
  teacher_moduleInstanceFlags(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceFlag
    }
    total
  }
}
    ${StandardTeacherModuleInstanceFlagFragmentDoc}`;
export const TeacherGetModuleInstanceMetaDocument = gql`
    query TeacherGetModuleInstanceMeta($input: TeacherGetModuleInstanceInput!) {
  teacher_moduleInstance(input: $input) {
    moduleInstance {
      id
      name
      slug
      startedAt
      moduleId
      moduleName
      moduleSlug
      allowComments
      allowChatbot
      publishCommentInstantly
      isUserModuleInstanceTeacher
      numberOfTeachers
      numberOfStudents
      numberOfSets
      numberOfComments
      numberOfFlags
      numberOfErrors
    }
    error {
      code
      message
    }
  }
}
    `;
export const TeacherGetModuleInstanceStudentStatsDocument = gql`
    query TeacherGetModuleInstanceStudentStats($input: TeacherGetModuleInstanceStudentStatsInput!) {
  teacher_moduleInstanceStudentStatistics(input: $input) {
    ...StandardStudentModuleInstance
    moduleInstanceStats {
      ...StandardModuleInstanceStats
    }
  }
}
    ${StandardStudentModuleInstanceFragmentDoc}
${StandardModuleInstanceStatsFragmentDoc}`;
export const TeacherGetModuleInstanceStudentsDocument = gql`
    query TeacherGetModuleInstanceStudents($input: TeacherModuleInstanceStudentContactsInput!) {
  teacher_moduleInstanceStudents(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceStudent
    }
    total
  }
}
    ${StandardTeacherModuleInstanceStudentFragmentDoc}`;
export const TeacherGetModuleInstanceStudentsStatsDocument = gql`
    query TeacherGetModuleInstanceStudentsStats($input: TeacherGetModuleInstanceStudentsStatsInput!) {
  teacher_moduleInstanceStudentsStatistics(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceStudentStats
    }
    total
  }
}
    ${StandardTeacherModuleInstanceStudentStatsFragmentDoc}`;
export const TeacherGetModuleInstanceWithStudentsDocument = gql`
    query TeacherGetModuleInstanceWithStudents($input: TeacherGetModuleInstanceInput!, $inputStudents: TeacherModuleInstanceStudentsInput!) {
  teacher_moduleInstance(input: $input) {
    moduleInstance {
      id
      name
      slug
      startedAt
      moduleId
      moduleName
      moduleSlug
      students(inputStudents: $inputStudents) {
        total
        edges {
          id
          email
          name
        }
      }
    }
    error {
      code
      message
    }
  }
}
    `;
export const TeacherGetModuleInstanceWithTeachersDocument = gql`
    query TeacherGetModuleInstanceWithTeachers($input: TeacherGetModuleInstanceInput!, $inputTeachers: TeacherModuleInstanceTeachersInput!) {
  teacher_moduleInstance(input: $input) {
    moduleInstance {
      id
      name
      slug
      startedAt
      moduleId
      moduleName
      moduleSlug
      teachers(inputTeachers: $inputTeachers) {
        total
        edges {
          id
          email
          name
          teacherRoleId
        }
      }
    }
    error {
      code
      message
    }
  }
}
    `;
export const TeacherGetModuleInstancesDocument = gql`
    query TeacherGetModuleInstances($input: TeacherModuleInstancesInput!) {
  teacher_moduleInstances(input: $input) {
    edges {
      id
      name
      slug
      startedAt
      moduleName
    }
    total
  }
}
    `;
export const TeacherGetModuleStudentTagsAllDocument = gql`
    query TeacherGetModuleStudentTagsAll($input: TeacherModuleStudentTagsInput!) {
  teacher_moduleStudentTagsAll(input: $input) {
    ...StandardStudentTag
  }
}
    ${StandardStudentTagFragmentDoc}`;
export const TeacherGetModuleTeacherRoleDocument = gql`
    query TeacherGetModuleTeacherRole($input: TeacherGetModuleTeacherRoleInput!) {
  teacher_moduleTeacherRole(input: $input) {
    ...StandardTeacherRole
  }
}
    ${StandardTeacherRoleFragmentDoc}`;
export const TeacherGetModulesDocument = gql`
    query TeacherGetModules {
  teacher_modules {
    id
    slug
    name
    description
    instances
    defaultModuleInstance {
      ...StandardModuleInstance
    }
    defaultModuleInstanceTeacherRoleId
    defaultModuleInstanceTotalTeachers
    defaultModuleInstanceTotalStudents
  }
}
    ${StandardModuleInstanceFragmentDoc}`;
export const TeacherGetModulesAccessStatisticsDocument = gql`
    query TeacherGetModulesAccessStatistics {
  teacher_modulesAccessStatistics {
    ...StandardGraphStatistics
  }
}
    ${StandardGraphStatisticsFragmentDoc}`;
export const TeacherGetModulesAccessWeeklyStatisticsDocument = gql`
    query TeacherGetModulesAccessWeeklyStatistics {
  teacher_modulesAccessWeeklyStatistics {
    ...StandardGraphStatistics
  }
}
    ${StandardGraphStatisticsFragmentDoc}`;
export const TeacherGetModulesActivitiesDocument = gql`
    query TeacherGetModulesActivities($input: TeacherModulesActivitiesInput!) {
  teacher_modulesActivities(input: $input) {
    edges {
      ...StandardTeacherModulesActivity
    }
    total
  }
}
    ${StandardTeacherModulesActivityFragmentDoc}`;
export const TeacherGetQuestionHistoryDocument = gql`
    query TeacherGetQuestionHistory($input: TeacherQuestionVersionInput!) {
  teacher_questionVersions(input: $input) {
    edges {
      ...StandardTeacherQuestion
    }
    total
  }
}
    ${StandardTeacherQuestionFragmentDoc}`;
export const TeacherGetResponseTypesDocument = gql`
    query TeacherGetResponseTypes {
  teacher_responseTypes {
    edges {
      ...StandardTeacherResponseType
    }
    total
  }
}
    ${StandardTeacherResponseTypeFragmentDoc}`;
export const TeacherGetSetDocument = gql`
    query TeacherGetSet($id: String!) {
  teacher_set(id: $id) {
    ...StandardTeacherSetResult
  }
}
    ${StandardTeacherSetResultFragmentDoc}`;
export const TeacherGetSetStatisticsDocument = gql`
    query TeacherGetSetStatistics($input: SetStatisticsInput!) {
  teacher_setStatistics(input: $input) {
    ...StandardGraphStatistics
  }
}
    ${StandardGraphStatisticsFragmentDoc}`;
export const TeacherGetSetTimingStatisticsDocument = gql`
    query TeacherGetSetTimingStatistics($input: SetStatisticsInput!) {
  teacher_setTimingStatistics(input: $input) {
    ...StandardGraphStatistics
  }
}
    ${StandardGraphStatisticsFragmentDoc}`;
export const TeacherGetGlobalTagsAllDocument = gql`
    query TeacherGetGlobalTagsAll {
  teacher_globalTagsAll {
    ...StandardGlobalTag
  }
}
    ${StandardGlobalTagFragmentDoc}`;
export const TeacherGetStudentsAccessWeeklyStatisticsDocument = gql`
    query TeacherGetStudentsAccessWeeklyStatistics($input: StudentsStatisticsInput!) {
  teacher_studentsAccessWeeklyStatistics(input: $input) {
    ...StandardStudentGraphStatistics
  }
}
    ${StandardStudentGraphStatisticsFragmentDoc}`;
export const TeacherGetStudentsStatisticsDocument = gql`
    query TeacherGetStudentsStatistics($input: StudentsStatisticsInput!) {
  teacher_studentsStatistics(input: $input) {
    summaryGraphStatistics {
      ...StandardGraphStatistics
    }
    studentsModuleInstanceGraphStatistics {
      studentId
      moduleInstanceGraphStatistics {
        ...StandardGraphStatistics
      }
    }
  }
}
    ${StandardGraphStatisticsFragmentDoc}`;
export const TeacherGetSubmissionCountsDocument = gql`
    query TeacherGetSubmissionCounts($input: GetSubmissionCountsInput!) {
  submissionCounts(input: $input) {
    pending
    manuallyApproved
    manuallyRejected
    automatic
    total
  }
}
    `;
export const TeacherGetSubmissionsDocument = gql`
    query TeacherGetSubmissions($input: GetSubmissionsInput!) {
  submissions(input: $input) {
    submissions {
      ...StandardModerationSubmission
    }
    total
  }
}
    ${StandardModerationSubmissionFragmentDoc}`;
export const TeacherGetSurveyQuestionsDocument = gql`
    query TeacherGetSurveyQuestions($input: PaginationInput!) {
  teacher_surveyQuestions(input: $input) {
    edges {
      ...StandardTeacherQuestion
    }
    total
  }
}
    ${StandardTeacherQuestionFragmentDoc}`;
export const TeacherGetTeacherRoleDocument = gql`
    query TeacherGetTeacherRole($input: TeacherGetTeacherRoleInput!) {
  teacher_teacherRole(input: $input) {
    ...StandardTeacherRole
  }
}
    ${StandardTeacherRoleFragmentDoc}`;
export const TeacherGetTeacherRolesDocument = gql`
    query TeacherGetTeacherRoles($input: TeacherGetTeacherRolesInput!) {
  teacher_teacherRoles(input: $input) {
    ...StandardTeacherRole
  }
}
    ${StandardTeacherRoleFragmentDoc}`;
export const TeacherGetTeacherStudentsDocument = gql`
    query TeacherGetTeacherStudents {
  teacher_teacherStudents {
    ...StandardTeacherStudentWithGlobalTags
  }
}
    ${StandardTeacherStudentWithGlobalTagsFragmentDoc}`;
export const TeacherGetTemplateQuestionsDocument = gql`
    query TeacherGetTemplateQuestions($input: PaginationInput!) {
  teacher_templateQuestions(input: $input) {
    edges {
      ...StandardTeacherQuestion
      parents {
        setId
        setNumber
        setName
        moduleInstanceId
        moduleInstanceName
        moduleId
        moduleName
      }
    }
    total
  }
}
    ${StandardTeacherQuestionFragmentDoc}`;
export const TeacherResponseAreaStatisticsDocument = gql`
    query TeacherResponseAreaStatistics($input: TeacherGetResponseStatisticsInput!) {
  teacher_responseAreaStatistics(input: $input) {
    parts {
      position
      areas {
        ...StandardTeacherResponseStatistics
      }
    }
    question {
      ...StandardTeacherQuestion
    }
  }
}
    ${StandardTeacherResponseStatisticsFragmentDoc}
${StandardTeacherQuestionFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AdminAddGlobalTag(variables: AdminAddGlobalTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminAddGlobalTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminAddGlobalTagMutation>(AdminAddGlobalTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminAddGlobalTag', 'mutation');
    },
    AdminAddGlobalTags(variables: AdminAddGlobalTagsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminAddGlobalTagsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminAddGlobalTagsMutation>(AdminAddGlobalTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminAddGlobalTags', 'mutation');
    },
    AdminAddStudents(variables: AdminAddStudentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminAddStudentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminAddStudentsMutation>(AdminAddStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminAddStudents', 'mutation');
    },
    AdminAddTeachers(variables: AdminAddTeachersMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminAddTeachersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminAddTeachersMutation>(AdminAddTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminAddTeachers', 'mutation');
    },
    AdminAddTeacherRole(variables: AdminAddTeacherRoleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminAddTeacherRoleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminAddTeacherRoleMutation>(AdminAddTeacherRoleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminAddTeacherRole', 'mutation');
    },
    AdminAssignFunctionCodes(variables: AdminAssignFunctionCodesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminAssignFunctionCodesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminAssignFunctionCodesMutation>(AdminAssignFunctionCodesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminAssignFunctionCodes', 'mutation');
    },
    AdminAssignGlobalTagsToStudents(variables: AdminAssignGlobalTagsToStudentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminAssignGlobalTagsToStudentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminAssignGlobalTagsToStudentsMutation>(AdminAssignGlobalTagsToStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminAssignGlobalTagsToStudents', 'mutation');
    },
    AdminAssignGlobalTagsToTeachers(variables: AdminAssignGlobalTagsToTeachersMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminAssignGlobalTagsToTeachersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminAssignGlobalTagsToTeachersMutation>(AdminAssignGlobalTagsToTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminAssignGlobalTagsToTeachers', 'mutation');
    },
    AdminAssignTeachers(variables: AdminAssignTeachersMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminAssignTeachersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminAssignTeachersMutation>(AdminAssignTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminAssignTeachers', 'mutation');
    },
    AdminBulkAssignGlobalTagsToStudents(variables: AdminBulkAssignGlobalTagsToStudentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminBulkAssignGlobalTagsToStudentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminBulkAssignGlobalTagsToStudentsMutation>(AdminBulkAssignGlobalTagsToStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminBulkAssignGlobalTagsToStudents', 'mutation');
    },
    AdminBulkAssignGlobalTagsToTeachers(variables: AdminBulkAssignGlobalTagsToTeachersMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminBulkAssignGlobalTagsToTeachersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminBulkAssignGlobalTagsToTeachersMutation>(AdminBulkAssignGlobalTagsToTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminBulkAssignGlobalTagsToTeachers', 'mutation');
    },
    AdminBulkUnassignGlobalTagsFromStudents(variables: AdminBulkUnassignGlobalTagsFromStudentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminBulkUnassignGlobalTagsFromStudentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminBulkUnassignGlobalTagsFromStudentsMutation>(AdminBulkUnassignGlobalTagsFromStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminBulkUnassignGlobalTagsFromStudents', 'mutation');
    },
    AdminBulkUnassignGlobalTagsFromTeachers(variables: AdminBulkUnassignGlobalTagsFromTeachersMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminBulkUnassignGlobalTagsFromTeachersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminBulkUnassignGlobalTagsFromTeachersMutation>(AdminBulkUnassignGlobalTagsFromTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminBulkUnassignGlobalTagsFromTeachers', 'mutation');
    },
    AdminCancelJob(variables: AdminCancelJobMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminCancelJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminCancelJobMutation>(AdminCancelJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminCancelJob', 'mutation');
    },
    AdminCloneModuleInstance(variables: AdminCloneModuleInstanceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminCloneModuleInstanceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminCloneModuleInstanceMutation>(AdminCloneModuleInstanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminCloneModuleInstance', 'mutation');
    },
    AdminCreateFunction(variables: AdminCreateFunctionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminCreateFunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminCreateFunctionMutation>(AdminCreateFunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminCreateFunction', 'mutation');
    },
    AdminCreateModule(variables: AdminCreateModuleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminCreateModuleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminCreateModuleMutation>(AdminCreateModuleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminCreateModule', 'mutation');
    },
    AdminCreateModuleInstance(variables: AdminCreateModuleInstanceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminCreateModuleInstanceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminCreateModuleInstanceMutation>(AdminCreateModuleInstanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminCreateModuleInstance', 'mutation');
    },
    AdminCreateResponseType(variables: AdminCreateResponseTypeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminCreateResponseTypeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminCreateResponseTypeMutation>(AdminCreateResponseTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminCreateResponseType', 'mutation');
    },
    AdminCreateTemplateQuestion(variables: AdminCreateTemplateQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminCreateTemplateQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminCreateTemplateQuestionMutation>(AdminCreateTemplateQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminCreateTemplateQuestion', 'mutation');
    },
    AdminDeleteFunction(variables: AdminDeleteFunctionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminDeleteFunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminDeleteFunctionMutation>(AdminDeleteFunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminDeleteFunction', 'mutation');
    },
    AdminDeleteGlobalTag(variables: AdminDeleteGlobalTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminDeleteGlobalTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminDeleteGlobalTagMutation>(AdminDeleteGlobalTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminDeleteGlobalTag', 'mutation');
    },
    AdminDeleteModule(variables: AdminDeleteModuleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminDeleteModuleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminDeleteModuleMutation>(AdminDeleteModuleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminDeleteModule', 'mutation');
    },
    AdminDeleteModuleInstance(variables: AdminDeleteModuleInstanceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminDeleteModuleInstanceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminDeleteModuleInstanceMutation>(AdminDeleteModuleInstanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminDeleteModuleInstance', 'mutation');
    },
    AdminDeleteQuestion(variables: AdminDeleteQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminDeleteQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminDeleteQuestionMutation>(AdminDeleteQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminDeleteQuestion', 'mutation');
    },
    AdminDeleteResponseType(variables: AdminDeleteResponseTypeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminDeleteResponseTypeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminDeleteResponseTypeMutation>(AdminDeleteResponseTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminDeleteResponseType', 'mutation');
    },
    AdminDeleteTeacher(variables: AdminDeleteTeacherMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminDeleteTeacherMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminDeleteTeacherMutation>(AdminDeleteTeacherDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminDeleteTeacher', 'mutation');
    },
    AdminDeleteTeacherRole(variables: AdminDeleteTeacherRoleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminDeleteTeacherRoleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminDeleteTeacherRoleMutation>(AdminDeleteTeacherRoleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminDeleteTeacherRole', 'mutation');
    },
    AdminDemoteAdmin(variables: AdminDemoteAdminMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminDemoteAdminMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminDemoteAdminMutation>(AdminDemoteAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminDemoteAdmin', 'mutation');
    },
    AdminReplaceAndDeleteTeacherRole(variables: AdminReplaceAndDeleteTeacherRoleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminReplaceAndDeleteTeacherRoleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminReplaceAndDeleteTeacherRoleMutation>(AdminReplaceAndDeleteTeacherRoleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminReplaceAndDeleteTeacherRole', 'mutation');
    },
    AdminRestoreFunction(variables: AdminRestoreFunctionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminRestoreFunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminRestoreFunctionMutation>(AdminRestoreFunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminRestoreFunction', 'mutation');
    },
    AdminRestoreModule(variables: AdminRestoreModuleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminRestoreModuleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminRestoreModuleMutation>(AdminRestoreModuleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminRestoreModule', 'mutation');
    },
    AdminRestoreModuleInstance(variables: AdminRestoreModuleInstanceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminRestoreModuleInstanceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminRestoreModuleInstanceMutation>(AdminRestoreModuleInstanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminRestoreModuleInstance', 'mutation');
    },
    AdminRunJobModuleRollover(variables: AdminRunJobModuleRolloverMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminRunJobModuleRolloverMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminRunJobModuleRolloverMutation>(AdminRunJobModuleRolloverDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminRunJobModuleRollover', 'mutation');
    },
    AdminUnassignFunctionCodes(variables: AdminUnassignFunctionCodesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUnassignFunctionCodesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUnassignFunctionCodesMutation>(AdminUnassignFunctionCodesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUnassignFunctionCodes', 'mutation');
    },
    AdminUnassignTeacher(variables: AdminUnassignTeacherMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUnassignTeacherMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUnassignTeacherMutation>(AdminUnassignTeacherDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUnassignTeacher', 'mutation');
    },
    AdminUpdateAdmin(variables: AdminUpdateAdminMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateAdminMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateAdminMutation>(AdminUpdateAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateAdmin', 'mutation');
    },
    AdminUpdateFunction(variables: AdminUpdateFunctionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateFunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateFunctionMutation>(AdminUpdateFunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateFunction', 'mutation');
    },
    AdminUpdateGlobalTag(variables: AdminUpdateGlobalTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateGlobalTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateGlobalTagMutation>(AdminUpdateGlobalTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateGlobalTag', 'mutation');
    },
    AdminUpdateGlobalTagsAssignmentsToStudents(variables: AdminUpdateGlobalTagsAssignmentsToStudentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateGlobalTagsAssignmentsToStudentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateGlobalTagsAssignmentsToStudentsMutation>(AdminUpdateGlobalTagsAssignmentsToStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateGlobalTagsAssignmentsToStudents', 'mutation');
    },
    AdminUpdateGlobalTagsAssignmentsToTeachers(variables: AdminUpdateGlobalTagsAssignmentsToTeachersMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateGlobalTagsAssignmentsToTeachersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateGlobalTagsAssignmentsToTeachersMutation>(AdminUpdateGlobalTagsAssignmentsToTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateGlobalTagsAssignmentsToTeachers', 'mutation');
    },
    AdminUpdateModule(variables: AdminUpdateModuleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateModuleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateModuleMutation>(AdminUpdateModuleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateModule', 'mutation');
    },
    AdminUpdateModuleInstance(variables: AdminUpdateModuleInstanceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateModuleInstanceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateModuleInstanceMutation>(AdminUpdateModuleInstanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateModuleInstance', 'mutation');
    },
    AdminUpdateModuleInstanceTeacherRole(variables: AdminUpdateModuleInstanceTeacherRoleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateModuleInstanceTeacherRoleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateModuleInstanceTeacherRoleMutation>(AdminUpdateModuleInstanceTeacherRoleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateModuleInstanceTeacherRole', 'mutation');
    },
    AdminUpdateQuestion(variables: AdminUpdateQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateQuestionMutation>(AdminUpdateQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateQuestion', 'mutation');
    },
    AdminUpdateResponseType(variables: AdminUpdateResponseTypeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateResponseTypeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateResponseTypeMutation>(AdminUpdateResponseTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateResponseType', 'mutation');
    },
    AdminUpdateTeacher(variables: AdminUpdateTeacherMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateTeacherMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateTeacherMutation>(AdminUpdateTeacherDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateTeacher', 'mutation');
    },
    AdminUpdateTeacherRole(variables: AdminUpdateTeacherRoleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateTeacherRoleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateTeacherRoleMutation>(AdminUpdateTeacherRoleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateTeacherRole', 'mutation');
    },
    AdminUpdateTenant(variables: AdminUpdateTenantMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminUpdateTenantMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminUpdateTenantMutation>(AdminUpdateTenantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminUpdateTenant', 'mutation');
    },
    SuperadminAssignAdmin(variables: SuperadminAssignAdminMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SuperadminAssignAdminMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SuperadminAssignAdminMutation>(SuperadminAssignAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SuperadminAssignAdmin', 'mutation');
    },
    CreateSignedMedia(variables: CreateSignedMediaMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateSignedMediaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateSignedMediaMutation>(CreateSignedMediaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateSignedMedia', 'mutation');
    },
    getMathpixSession(variables?: GetMathpixSessionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMathpixSessionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMathpixSessionMutation>(GetMathpixSessionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMathpixSession', 'mutation');
    },
    logButtonEvent(variables: LogButtonEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LogButtonEventMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogButtonEventMutation>(LogButtonEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logButtonEvent', 'mutation');
    },
    logLoginEvent(variables?: LogLoginEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LogLoginEventMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogLoginEventMutation>(LogLoginEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logLoginEvent', 'mutation');
    },
    logPDFEvent(variables: LogPdfEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LogPdfEventMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogPdfEventMutation>(LogPdfEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logPDFEvent', 'mutation');
    },
    logQuestionAccessEvent(variables: LogQuestionAccessEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LogQuestionAccessEventMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogQuestionAccessEventMutation>(LogQuestionAccessEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logQuestionAccessEvent', 'mutation');
    },
    logSetAccessEvent(variables: LogSetAccessEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LogSetAccessEventMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogSetAccessEventMutation>(LogSetAccessEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logSetAccessEvent', 'mutation');
    },
    markCompletion(variables: MarkCompletionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarkCompletionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarkCompletionMutation>(MarkCompletionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markCompletion', 'mutation');
    },
    StudentCreateComment(variables: StudentCreateCommentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentCreateCommentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentCreateCommentMutation>(StudentCreateCommentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentCreateComment', 'mutation');
    },
    StudentCreateConversationMessagePair(variables: StudentCreateConversationMessagePairMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentCreateConversationMessagePairMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentCreateConversationMessagePairMutation>(StudentCreateConversationMessagePairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentCreateConversationMessagePair', 'mutation');
    },
    StudentDeleteComment(variables: StudentDeleteCommentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentDeleteCommentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentDeleteCommentMutation>(StudentDeleteCommentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentDeleteComment', 'mutation');
    },
    StudentDemandSolutionsAccessStatus(variables: StudentDemandSolutionsAccessStatusMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentDemandSolutionsAccessStatusMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentDemandSolutionsAccessStatusMutation>(StudentDemandSolutionsAccessStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentDemandSolutionsAccessStatus', 'mutation');
    },
    StudentToggleCommentReaction(variables: StudentToggleCommentReactionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentToggleCommentReactionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentToggleCommentReactionMutation>(StudentToggleCommentReactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentToggleCommentReaction', 'mutation');
    },
    StudentUpsertCanvas(variables: StudentUpsertCanvasMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentUpsertCanvasMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentUpsertCanvasMutation>(StudentUpsertCanvasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentUpsertCanvas', 'mutation');
    },
    StudentUpsertSubmissionDraft(variables: StudentUpsertSubmissionDraftMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentUpsertSubmissionDraftMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentUpsertSubmissionDraftMutation>(StudentUpsertSubmissionDraftDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentUpsertSubmissionDraft', 'mutation');
    },
    submitResponse(variables: SubmitResponseMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubmitResponseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubmitResponseMutation>(SubmitResponseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'submitResponse', 'mutation');
    },
    submitResponsePreview(variables: SubmitResponsePreviewMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubmitResponsePreviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubmitResponsePreviewMutation>(SubmitResponsePreviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'submitResponsePreview', 'mutation');
    },
    TeacherAddStudents(variables: TeacherAddStudentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherAddStudentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherAddStudentsMutation>(TeacherAddStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherAddStudents', 'mutation');
    },
    TeacherApproveSubmission(variables: TeacherApproveSubmissionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherApproveSubmissionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherApproveSubmissionMutation>(TeacherApproveSubmissionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherApproveSubmission', 'mutation');
    },
    TeacherAssignStudentsTags(variables: TeacherAssignStudentsTagsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherAssignStudentsTagsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherAssignStudentsTagsMutation>(TeacherAssignStudentsTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherAssignStudentsTags', 'mutation');
    },
    TeacherAssignTeachers(variables: TeacherAssignTeachersMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherAssignTeachersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherAssignTeachersMutation>(TeacherAssignTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherAssignTeachers', 'mutation');
    },
    TeacherBulkApproveSubmissions(variables: TeacherBulkApproveSubmissionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherBulkApproveSubmissionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherBulkApproveSubmissionsMutation>(TeacherBulkApproveSubmissionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherBulkApproveSubmissions', 'mutation');
    },
    TeacherBulkRejectSubmissions(variables: TeacherBulkRejectSubmissionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherBulkRejectSubmissionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherBulkRejectSubmissionsMutation>(TeacherBulkRejectSubmissionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherBulkRejectSubmissions', 'mutation');
    },
    TeacherCreateComment(variables: TeacherCreateCommentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherCreateCommentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherCreateCommentMutation>(TeacherCreateCommentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherCreateComment', 'mutation');
    },
    TeacherCreateModuleStudentTag(variables: TeacherCreateModuleStudentTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherCreateModuleStudentTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherCreateModuleStudentTagMutation>(TeacherCreateModuleStudentTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherCreateModuleStudentTag', 'mutation');
    },
    TeacherCreateQuestion(variables: TeacherCreateQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherCreateQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherCreateQuestionMutation>(TeacherCreateQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherCreateQuestion', 'mutation');
    },
    TeacherCreateSet(variables: TeacherCreateSetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherCreateSetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherCreateSetMutation>(TeacherCreateSetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherCreateSet', 'mutation');
    },
    TeacherCreateSignedImage(variables: TeacherCreateSignedImageMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherCreateSignedImageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherCreateSignedImageMutation>(TeacherCreateSignedImageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherCreateSignedImage', 'mutation');
    },
    TeacherDeleteComment(variables: TeacherDeleteCommentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherDeleteCommentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherDeleteCommentMutation>(TeacherDeleteCommentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherDeleteComment', 'mutation');
    },
    TeacherDeleteModuleStudentTag(variables: TeacherDeleteModuleStudentTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherDeleteModuleStudentTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherDeleteModuleStudentTagMutation>(TeacherDeleteModuleStudentTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherDeleteModuleStudentTag', 'mutation');
    },
    TeacherDeleteQuestion(variables: TeacherDeleteQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherDeleteQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherDeleteQuestionMutation>(TeacherDeleteQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherDeleteQuestion', 'mutation');
    },
    TeacherDeleteSet(variables: TeacherDeleteSetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherDeleteSetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherDeleteSetMutation>(TeacherDeleteSetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherDeleteSet', 'mutation');
    },
    TeacherExportQuestion(variables: TeacherExportQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherExportQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherExportQuestionMutation>(TeacherExportQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherExportQuestion', 'mutation');
    },
    TeacherExportSet(variables: TeacherExportSetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherExportSetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherExportSetMutation>(TeacherExportSetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherExportSet', 'mutation');
    },
    TeacherExportSetAsPdf(variables: TeacherExportSetAsPdfMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherExportSetAsPdfMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherExportSetAsPdfMutation>(TeacherExportSetAsPdfDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherExportSetAsPdf', 'mutation');
    },
    TeacherGetGuidanceTime(variables: TeacherGetGuidanceTimeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetGuidanceTimeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetGuidanceTimeMutation>(TeacherGetGuidanceTimeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetGuidanceTime', 'mutation');
    },
    TeacherImportQuestions(variables: TeacherImportQuestionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherImportQuestionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherImportQuestionsMutation>(TeacherImportQuestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherImportQuestions', 'mutation');
    },
    TeacherImportSet(variables: TeacherImportSetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherImportSetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherImportSetMutation>(TeacherImportSetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherImportSet', 'mutation');
    },
    TeacherModuleInstanceResolveActivities(variables: TeacherModuleInstanceResolveActivitiesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherModuleInstanceResolveActivitiesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherModuleInstanceResolveActivitiesMutation>(TeacherModuleInstanceResolveActivitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherModuleInstanceResolveActivities', 'mutation');
    },
    TeacherModuleInstanceResolveActivity(variables: TeacherModuleInstanceResolveActivityMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherModuleInstanceResolveActivityMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherModuleInstanceResolveActivityMutation>(TeacherModuleInstanceResolveActivityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherModuleInstanceResolveActivity', 'mutation');
    },
    TeacherModuleInstanceResolveFlags(variables: TeacherModuleInstanceResolveFlagsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherModuleInstanceResolveFlagsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherModuleInstanceResolveFlagsMutation>(TeacherModuleInstanceResolveFlagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherModuleInstanceResolveFlags', 'mutation');
    },
    TeacherPublishComment(variables: TeacherPublishCommentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherPublishCommentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherPublishCommentMutation>(TeacherPublishCommentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherPublishComment', 'mutation');
    },
    TeacherPublishQuestions(variables: TeacherPublishQuestionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherPublishQuestionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherPublishQuestionsMutation>(TeacherPublishQuestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherPublishQuestions', 'mutation');
    },
    TeacherRejectSubmission(variables: TeacherRejectSubmissionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherRejectSubmissionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherRejectSubmissionMutation>(TeacherRejectSubmissionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherRejectSubmission', 'mutation');
    },
    TeacherRemoveStudent(variables: TeacherRemoveStudentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherRemoveStudentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherRemoveStudentMutation>(TeacherRemoveStudentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherRemoveStudent', 'mutation');
    },
    TeacherRemoveStudents(variables: TeacherRemoveStudentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherRemoveStudentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherRemoveStudentsMutation>(TeacherRemoveStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherRemoveStudents', 'mutation');
    },
    TeacherReorderQuestions(variables: TeacherReorderQuestionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherReorderQuestionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherReorderQuestionsMutation>(TeacherReorderQuestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherReorderQuestions', 'mutation');
    },
    TeacherReorderSets(variables: TeacherReorderSetsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherReorderSetsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherReorderSetsMutation>(TeacherReorderSetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherReorderSets', 'mutation');
    },
    TeacherRetrieveModuleInstanceErrors(variables: TeacherRetrieveModuleInstanceErrorsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherRetrieveModuleInstanceErrorsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherRetrieveModuleInstanceErrorsMutation>(TeacherRetrieveModuleInstanceErrorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherRetrieveModuleInstanceErrors', 'mutation');
    },
    TeacherRetrieveModuleInstanceFlags(variables: TeacherRetrieveModuleInstanceFlagsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherRetrieveModuleInstanceFlagsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherRetrieveModuleInstanceFlagsMutation>(TeacherRetrieveModuleInstanceFlagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherRetrieveModuleInstanceFlags', 'mutation');
    },
    TeacherRetrieveModuleInstanceActivities(variables: TeacherRetrieveModuleInstanceActivitiesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherRetrieveModuleInstanceActivitiesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherRetrieveModuleInstanceActivitiesMutation>(TeacherRetrieveModuleInstanceActivitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherRetrieveModuleInstanceActivities', 'mutation');
    },
    TeacherRevertToQuestionVersion(variables: TeacherRevertToQuestionVersionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherRevertToQuestionVersionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherRevertToQuestionVersionMutation>(TeacherRevertToQuestionVersionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherRevertToQuestionVersion', 'mutation');
    },
    TeacherSaveImportedQuestions(variables: TeacherSaveImportedQuestionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherSaveImportedQuestionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherSaveImportedQuestionsMutation>(TeacherSaveImportedQuestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherSaveImportedQuestions', 'mutation');
    },
    TeacherSubmitTest(variables: TeacherSubmitTestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherSubmitTestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherSubmitTestMutation>(TeacherSubmitTestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherSubmitTest', 'mutation');
    },
    TeacherTestSubmisionPreview(variables: TeacherTestSubmisionPreviewMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherTestSubmisionPreviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherTestSubmisionPreviewMutation>(TeacherTestSubmisionPreviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherTestSubmisionPreview', 'mutation');
    },
    TeacherToggleCommentReaction(variables: TeacherToggleCommentReactionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherToggleCommentReactionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherToggleCommentReactionMutation>(TeacherToggleCommentReactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherToggleCommentReaction', 'mutation');
    },
    TeacherToggleSetVisiblity(variables: TeacherToggleSetVisiblityMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherToggleSetVisiblityMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherToggleSetVisiblityMutation>(TeacherToggleSetVisiblityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherToggleSetVisiblity', 'mutation');
    },
    TeacherUnassignStudentsTags(variables: TeacherUnassignStudentsTagsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUnassignStudentsTagsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUnassignStudentsTagsMutation>(TeacherUnassignStudentsTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUnassignStudentsTags', 'mutation');
    },
    TeacherUnassignTeachers(variables: TeacherUnassignTeachersMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUnassignTeachersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUnassignTeachersMutation>(TeacherUnassignTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUnassignTeachers', 'mutation');
    },
    TeacherUpdateModuleInstance(variables: TeacherUpdateModuleInstanceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUpdateModuleInstanceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUpdateModuleInstanceMutation>(TeacherUpdateModuleInstanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUpdateModuleInstance', 'mutation');
    },
    TeacherUpdateModuleInstanceTeacherRole(variables: TeacherUpdateModuleInstanceTeacherRoleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUpdateModuleInstanceTeacherRoleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUpdateModuleInstanceTeacherRoleMutation>(TeacherUpdateModuleInstanceTeacherRoleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUpdateModuleInstanceTeacherRole', 'mutation');
    },
    TeacherUpdateModuleStudentTag(variables: TeacherUpdateModuleStudentTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUpdateModuleStudentTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUpdateModuleStudentTagMutation>(TeacherUpdateModuleStudentTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUpdateModuleStudentTag', 'mutation');
    },
    TeacherUpdateQuestion(variables: TeacherUpdateQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUpdateQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUpdateQuestionMutation>(TeacherUpdateQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUpdateQuestion', 'mutation');
    },
    TeacherUpdateQuestionDraft(variables: TeacherUpdateQuestionDraftMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUpdateQuestionDraftMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUpdateQuestionDraftMutation>(TeacherUpdateQuestionDraftDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUpdateQuestionDraft', 'mutation');
    },
    TeacherUpdateQuestionSettings(variables: TeacherUpdateQuestionSettingsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUpdateQuestionSettingsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUpdateQuestionSettingsMutation>(TeacherUpdateQuestionSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUpdateQuestionSettings', 'mutation');
    },
    TeacherUpdateSet(variables: TeacherUpdateSetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUpdateSetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUpdateSetMutation>(TeacherUpdateSetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUpdateSet', 'mutation');
    },
    TeacherUpdateSetsHeader(variables: TeacherUpdateSetsHeaderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUpdateSetsHeaderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUpdateSetsHeaderMutation>(TeacherUpdateSetsHeaderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUpdateSetsHeader', 'mutation');
    },
    TeacherUpdateStudentTagAssignments(variables: TeacherUpdateStudentTagAssignmentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherUpdateStudentTagAssignmentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherUpdateStudentTagAssignmentsMutation>(TeacherUpdateStudentTagAssignmentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherUpdateStudentTagAssignments', 'mutation');
    },
    ToggleReaction(variables: ToggleReactionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ToggleReactionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ToggleReactionMutation>(ToggleReactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ToggleReaction', 'mutation');
    },
    ToggleTimingReaction(variables: ToggleTimingReactionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ToggleTimingReactionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ToggleTimingReactionMutation>(ToggleTimingReactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ToggleTimingReaction', 'mutation');
    },
    UpdateUserSettings(variables: UpdateUserSettingsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserSettingsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserSettingsMutation>(UpdateUserSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateUserSettings', 'mutation');
    },
    UpsertNote(variables: UpsertNoteMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertNoteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertNoteMutation>(UpsertNoteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpsertNote', 'mutation');
    },
    AdminGetActiveModules(variables: AdminGetActiveModulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetActiveModulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetActiveModulesQuery>(AdminGetActiveModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetActiveModules', 'query');
    },
    AdminGetAdmins(variables: AdminGetAdminsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetAdminsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetAdminsQuery>(AdminGetAdminsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetAdmins', 'query');
    },
    AdminGetConversationFlags(variables: AdminGetConversationFlagsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetConversationFlagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetConversationFlagsQuery>(AdminGetConversationFlagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetConversationFlags', 'query');
    },
    AdminGetConversationFlagsStatistics(variables?: AdminGetConversationFlagsStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetConversationFlagsStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetConversationFlagsStatisticsQuery>(AdminGetConversationFlagsStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetConversationFlagsStatistics', 'query');
    },
    AdminGetEvaluationFunctionErrors(variables: AdminGetEvaluationFunctionErrorsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetEvaluationFunctionErrorsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetEvaluationFunctionErrorsQuery>(AdminGetEvaluationFunctionErrorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetEvaluationFunctionErrors', 'query');
    },
    AdminGetEvaluationFunctionGroupedErrors(variables: AdminGetEvaluationFunctionGroupedErrorsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetEvaluationFunctionGroupedErrorsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetEvaluationFunctionGroupedErrorsQuery>(AdminGetEvaluationFunctionGroupedErrorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetEvaluationFunctionGroupedErrors', 'query');
    },
    AdminGetEvaluationFunctionStatistics(variables: AdminGetEvaluationFunctionStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetEvaluationFunctionStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetEvaluationFunctionStatisticsQuery>(AdminGetEvaluationFunctionStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetEvaluationFunctionStatistics', 'query');
    },
    AdminGetFunction(variables: AdminGetFunctionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetFunctionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetFunctionQuery>(AdminGetFunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetFunction', 'query');
    },
    AdminGetFunctionCodesAll(variables?: AdminGetFunctionCodesAllQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetFunctionCodesAllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetFunctionCodesAllQuery>(AdminGetFunctionCodesAllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetFunctionCodesAll', 'query');
    },
    AdminGetFunctions(variables: AdminGetFunctionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetFunctionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetFunctionsQuery>(AdminGetFunctionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetFunctions', 'query');
    },
    AdminGetGlobalTag(variables: AdminGetGlobalTagQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetGlobalTagQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetGlobalTagQuery>(AdminGetGlobalTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetGlobalTag', 'query');
    },
    AdminGetGlobalTagsAll(variables?: AdminGetGlobalTagsAllQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetGlobalTagsAllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetGlobalTagsAllQuery>(AdminGetGlobalTagsAllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetGlobalTagsAll', 'query');
    },
    AdminGetGlobalTagsStatus(variables: AdminGetGlobalTagsStatusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetGlobalTagsStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetGlobalTagsStatusQuery>(AdminGetGlobalTagsStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetGlobalTagsStatus', 'query');
    },
    AdminGetJobModuleRollover(variables: AdminGetJobModuleRolloverQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetJobModuleRolloverQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetJobModuleRolloverQuery>(AdminGetJobModuleRolloverDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetJobModuleRollover', 'query');
    },
    AdminGetJobs(variables?: AdminGetJobsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetJobsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetJobsQuery>(AdminGetJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetJobs', 'query');
    },
    AdminGetMessagePairCountStatistics(variables?: AdminGetMessagePairCountStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetMessagePairCountStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetMessagePairCountStatisticsQuery>(AdminGetMessagePairCountStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetMessagePairCountStatistics', 'query');
    },
    AdminGetMessagePairCounts(variables: AdminGetMessagePairCountsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetMessagePairCountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetMessagePairCountsQuery>(AdminGetMessagePairCountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetMessagePairCounts', 'query');
    },
    AdminGetModule(variables: AdminGetModuleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetModuleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetModuleQuery>(AdminGetModuleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetModule', 'query');
    },
    AdminGetModuleInstance(variables: AdminGetModuleInstanceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetModuleInstanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetModuleInstanceQuery>(AdminGetModuleInstanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetModuleInstance', 'query');
    },
    AdminGetModuleInstances(variables: AdminGetModuleInstancesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetModuleInstancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetModuleInstancesQuery>(AdminGetModuleInstancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetModuleInstances', 'query');
    },
    AdminGetModuleInstancesForRollover(variables: AdminGetModuleInstancesForRolloverQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetModuleInstancesForRolloverQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetModuleInstancesForRolloverQuery>(AdminGetModuleInstancesForRolloverDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetModuleInstancesForRollover', 'query');
    },
    AdminGetModules(variables: AdminGetModulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetModulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetModulesQuery>(AdminGetModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetModules', 'query');
    },
    AdminGetResponseType(variables: AdminGetResponseTypeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetResponseTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetResponseTypeQuery>(AdminGetResponseTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetResponseType', 'query');
    },
    AdminGetResponseTypes(variables: AdminGetResponseTypesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetResponseTypesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetResponseTypesQuery>(AdminGetResponseTypesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetResponseTypes', 'query');
    },
    AdminGetResponseTypesAll(variables?: AdminGetResponseTypesAllQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetResponseTypesAllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetResponseTypesAllQuery>(AdminGetResponseTypesAllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetResponseTypesAll', 'query');
    },
    AdminGetStudents(variables: AdminGetStudentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetStudentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetStudentsQuery>(AdminGetStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetStudents', 'query');
    },
    AdminGetTeacher(variables: AdminGetTeacherQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetTeacherQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetTeacherQuery>(AdminGetTeacherDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetTeacher', 'query');
    },
    AdminGetTeacherRoles(variables?: AdminGetTeacherRolesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetTeacherRolesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetTeacherRolesQuery>(AdminGetTeacherRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetTeacherRoles', 'query');
    },
    AdminGetTeachers(variables: AdminGetTeachersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetTeachersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetTeachersQuery>(AdminGetTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetTeachers', 'query');
    },
    AdminGetTeachersAll(variables: AdminGetTeachersAllQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetTeachersAllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetTeachersAllQuery>(AdminGetTeachersAllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetTeachersAll', 'query');
    },
    AdminGetTeachersWithModuleInstances(variables: AdminGetTeachersWithModuleInstancesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetTeachersWithModuleInstancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetTeachersWithModuleInstancesQuery>(AdminGetTeachersWithModuleInstancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetTeachersWithModuleInstances', 'query');
    },
    AdminGetTemplateQuestion(variables: AdminGetTemplateQuestionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetTemplateQuestionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetTemplateQuestionQuery>(AdminGetTemplateQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetTemplateQuestion', 'query');
    },
    AdminGetTemplateQuestions(variables: AdminGetTemplateQuestionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetTemplateQuestionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetTemplateQuestionsQuery>(AdminGetTemplateQuestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetTemplateQuestions', 'query');
    },
    AdminGetTenant(variables?: AdminGetTenantQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetTenantQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetTenantQuery>(AdminGetTenantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetTenant', 'query');
    },
    AdminGetTenantTextEditor(variables?: AdminGetTenantTextEditorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetTenantTextEditorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetTenantTextEditorQuery>(AdminGetTenantTextEditorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetTenantTextEditor', 'query');
    },
    AdminGetUserAccessEvents(variables: AdminGetUserAccessEventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetUserAccessEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetUserAccessEventsQuery>(AdminGetUserAccessEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetUserAccessEvents', 'query');
    },
    AdminGetUserNumbers(variables: AdminGetUserNumbersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetUserNumbersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetUserNumbersQuery>(AdminGetUserNumbersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetUserNumbers', 'query');
    },
    AdminGetUsersStatus(variables: AdminGetUsersStatusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetUsersStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetUsersStatusQuery>(AdminGetUsersStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdminGetUsersStatus', 'query');
    },
    GetMe(variables?: GetMeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMeQuery>(GetMeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMe', 'query');
    },
    ListModuleInstanceUserPreferences(variables?: ListModuleInstanceUserPreferencesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListModuleInstanceUserPreferencesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListModuleInstanceUserPreferencesQuery>(ListModuleInstanceUserPreferencesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ListModuleInstanceUserPreferences', 'query');
    },
    GetNote(variables: GetNoteQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetNoteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNoteQuery>(GetNoteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNote', 'query');
    },
    GetQuestionReactions(variables: GetQuestionReactionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetQuestionReactionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetQuestionReactionsQuery>(GetQuestionReactionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetQuestionReactions', 'query');
    },
    GetSet(variables: GetSetQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSetQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSetQuery>(GetSetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSet', 'query');
    },
    StudentGetCanvas(variables: StudentGetCanvasQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetCanvasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetCanvasQuery>(StudentGetCanvasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetCanvas', 'query');
    },
    StudentGetChatFunctionsDetails(variables?: StudentGetChatFunctionsDetailsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetChatFunctionsDetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetChatFunctionsDetailsQuery>(StudentGetChatFunctionsDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetChatFunctionsDetails', 'query');
    },
    StudentGetComments(variables: StudentGetCommentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetCommentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetCommentsQuery>(StudentGetCommentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetComments', 'query');
    },
    StudentGetConversation(variables: StudentGetConversationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetConversationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetConversationQuery>(StudentGetConversationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetConversation', 'query');
    },
    StudentGetDefaultChatFunctionsForTenantDetails(variables?: StudentGetDefaultChatFunctionsForTenantDetailsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetDefaultChatFunctionsForTenantDetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetDefaultChatFunctionsForTenantDetailsQuery>(StudentGetDefaultChatFunctionsForTenantDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetDefaultChatFunctionsForTenantDetails', 'query');
    },
    StudentGetModuleAndDefaultInstance(variables: StudentGetModuleAndDefaultInstanceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetModuleAndDefaultInstanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetModuleAndDefaultInstanceQuery>(StudentGetModuleAndDefaultInstanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetModuleAndDefaultInstance', 'query');
    },
    StudentGetModuleAndInstances(variables: StudentGetModuleAndInstancesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetModuleAndInstancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetModuleAndInstancesQuery>(StudentGetModuleAndInstancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetModuleAndInstances', 'query');
    },
    StudentGetModuleInstance(variables: StudentGetModuleInstanceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetModuleInstanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetModuleInstanceQuery>(StudentGetModuleInstanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetModuleInstance', 'query');
    },
    StudentGetModuleInstanceAndStats(variables: StudentGetModuleInstanceAndStatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetModuleInstanceAndStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetModuleInstanceAndStatsQuery>(StudentGetModuleInstanceAndStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetModuleInstanceAndStats', 'query');
    },
    StudentGetModules(variables: StudentGetModulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetModulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetModulesQuery>(StudentGetModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetModules', 'query');
    },
    StudentGetQuestionPreviews(variables: StudentGetQuestionPreviewsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetQuestionPreviewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetQuestionPreviewsQuery>(StudentGetQuestionPreviewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetQuestionPreviews', 'query');
    },
    StudentGetSolutionsAccessStatus(variables: StudentGetSolutionsAccessStatusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetSolutionsAccessStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetSolutionsAccessStatusQuery>(StudentGetSolutionsAccessStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetSolutionsAccessStatus', 'query');
    },
    StudentGetSubmissionDraft(variables: StudentGetSubmissionDraftQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StudentGetSubmissionDraftQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StudentGetSubmissionDraftQuery>(StudentGetSubmissionDraftDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StudentGetSubmissionDraft', 'query');
    },
    TeacherCheckPublishQuestions(variables: TeacherCheckPublishQuestionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherCheckPublishQuestionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherCheckPublishQuestionsQuery>(TeacherCheckPublishQuestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherCheckPublishQuestions', 'query');
    },
    TeacherGetAllModuleInstanceStudents(variables: TeacherGetAllModuleInstanceStudentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetAllModuleInstanceStudentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetAllModuleInstanceStudentsQuery>(TeacherGetAllModuleInstanceStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetAllModuleInstanceStudents', 'query');
    },
    TeacherGetAllModuleInstanceTeachers(variables: TeacherGetAllModuleInstanceTeachersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetAllModuleInstanceTeachersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetAllModuleInstanceTeachersQuery>(TeacherGetAllModuleInstanceTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetAllModuleInstanceTeachers', 'query');
    },
    TeacherGetCloneableQuestions(variables: TeacherGetCloneableQuestionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetCloneableQuestionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetCloneableQuestionsQuery>(TeacherGetCloneableQuestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetCloneableQuestions', 'query');
    },
    TeacherGetComments(variables: TeacherGetCommentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetCommentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetCommentsQuery>(TeacherGetCommentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetComments', 'query');
    },
    TeacherGetFunction(variables: TeacherGetFunctionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetFunctionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetFunctionQuery>(TeacherGetFunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetFunction', 'query');
    },
    TeacherGetFunctions(variables: TeacherGetFunctionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetFunctionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetFunctionsQuery>(TeacherGetFunctionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetFunctions', 'query');
    },
    TeacherGetModuleAccessDailyStatistics(variables: TeacherGetModuleAccessDailyStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleAccessDailyStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleAccessDailyStatisticsQuery>(TeacherGetModuleAccessDailyStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleAccessDailyStatistics', 'query');
    },
    TeacherGetModuleAccessStatistics(variables: TeacherGetModuleAccessStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleAccessStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleAccessStatisticsQuery>(TeacherGetModuleAccessStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleAccessStatistics', 'query');
    },
    TeacherGetModuleAndInstances(variables: TeacherGetModuleAndInstancesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleAndInstancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleAndInstancesQuery>(TeacherGetModuleAndInstancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleAndInstances', 'query');
    },
    TeacherGetModuleInstanceCommentsExist(variables: TeacherGetModuleInstanceCommentsExistQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceCommentsExistQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceCommentsExistQuery>(TeacherGetModuleInstanceCommentsExistDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstanceCommentsExist', 'query');
    },
    TeacherGetModuleInstance(variables: TeacherGetModuleInstanceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceQuery>(TeacherGetModuleInstanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstance', 'query');
    },
    TeacherGetModuleInstanceActivities(variables: TeacherGetModuleInstanceActivitiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceActivitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceActivitiesQuery>(TeacherGetModuleInstanceActivitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstanceActivities', 'query');
    },
    TeacherGetModuleInstanceErrors(variables: TeacherGetModuleInstanceErrorsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceErrorsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceErrorsQuery>(TeacherGetModuleInstanceErrorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstanceErrors', 'query');
    },
    TeacherGetModuleInstanceFlags(variables: TeacherGetModuleInstanceFlagsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceFlagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceFlagsQuery>(TeacherGetModuleInstanceFlagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstanceFlags', 'query');
    },
    TeacherGetModuleInstanceMeta(variables: TeacherGetModuleInstanceMetaQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceMetaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceMetaQuery>(TeacherGetModuleInstanceMetaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstanceMeta', 'query');
    },
    TeacherGetModuleInstanceStudentStats(variables: TeacherGetModuleInstanceStudentStatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceStudentStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceStudentStatsQuery>(TeacherGetModuleInstanceStudentStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstanceStudentStats', 'query');
    },
    TeacherGetModuleInstanceStudents(variables: TeacherGetModuleInstanceStudentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceStudentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceStudentsQuery>(TeacherGetModuleInstanceStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstanceStudents', 'query');
    },
    TeacherGetModuleInstanceStudentsStats(variables: TeacherGetModuleInstanceStudentsStatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceStudentsStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceStudentsStatsQuery>(TeacherGetModuleInstanceStudentsStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstanceStudentsStats', 'query');
    },
    TeacherGetModuleInstanceWithStudents(variables: TeacherGetModuleInstanceWithStudentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceWithStudentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceWithStudentsQuery>(TeacherGetModuleInstanceWithStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstanceWithStudents', 'query');
    },
    TeacherGetModuleInstanceWithTeachers(variables: TeacherGetModuleInstanceWithTeachersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstanceWithTeachersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstanceWithTeachersQuery>(TeacherGetModuleInstanceWithTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstanceWithTeachers', 'query');
    },
    TeacherGetModuleInstances(variables: TeacherGetModuleInstancesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleInstancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleInstancesQuery>(TeacherGetModuleInstancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleInstances', 'query');
    },
    TeacherGetModuleStudentTagsAll(variables: TeacherGetModuleStudentTagsAllQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleStudentTagsAllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleStudentTagsAllQuery>(TeacherGetModuleStudentTagsAllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleStudentTagsAll', 'query');
    },
    TeacherGetModuleTeacherRole(variables: TeacherGetModuleTeacherRoleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModuleTeacherRoleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModuleTeacherRoleQuery>(TeacherGetModuleTeacherRoleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModuleTeacherRole', 'query');
    },
    TeacherGetModules(variables?: TeacherGetModulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModulesQuery>(TeacherGetModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModules', 'query');
    },
    TeacherGetModulesAccessStatistics(variables?: TeacherGetModulesAccessStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModulesAccessStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModulesAccessStatisticsQuery>(TeacherGetModulesAccessStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModulesAccessStatistics', 'query');
    },
    TeacherGetModulesAccessWeeklyStatistics(variables?: TeacherGetModulesAccessWeeklyStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModulesAccessWeeklyStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModulesAccessWeeklyStatisticsQuery>(TeacherGetModulesAccessWeeklyStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModulesAccessWeeklyStatistics', 'query');
    },
    TeacherGetModulesActivities(variables: TeacherGetModulesActivitiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetModulesActivitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetModulesActivitiesQuery>(TeacherGetModulesActivitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetModulesActivities', 'query');
    },
    TeacherGetQuestionHistory(variables: TeacherGetQuestionHistoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetQuestionHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetQuestionHistoryQuery>(TeacherGetQuestionHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetQuestionHistory', 'query');
    },
    TeacherGetResponseTypes(variables?: TeacherGetResponseTypesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetResponseTypesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetResponseTypesQuery>(TeacherGetResponseTypesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetResponseTypes', 'query');
    },
    TeacherGetSet(variables: TeacherGetSetQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetSetQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetSetQuery>(TeacherGetSetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetSet', 'query');
    },
    TeacherGetSetStatistics(variables: TeacherGetSetStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetSetStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetSetStatisticsQuery>(TeacherGetSetStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetSetStatistics', 'query');
    },
    TeacherGetSetTimingStatistics(variables: TeacherGetSetTimingStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetSetTimingStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetSetTimingStatisticsQuery>(TeacherGetSetTimingStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetSetTimingStatistics', 'query');
    },
    TeacherGetGlobalTagsAll(variables?: TeacherGetGlobalTagsAllQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetGlobalTagsAllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetGlobalTagsAllQuery>(TeacherGetGlobalTagsAllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetGlobalTagsAll', 'query');
    },
    TeacherGetStudentsAccessWeeklyStatistics(variables: TeacherGetStudentsAccessWeeklyStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetStudentsAccessWeeklyStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetStudentsAccessWeeklyStatisticsQuery>(TeacherGetStudentsAccessWeeklyStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetStudentsAccessWeeklyStatistics', 'query');
    },
    TeacherGetStudentsStatistics(variables: TeacherGetStudentsStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetStudentsStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetStudentsStatisticsQuery>(TeacherGetStudentsStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetStudentsStatistics', 'query');
    },
    TeacherGetSubmissionCounts(variables: TeacherGetSubmissionCountsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetSubmissionCountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetSubmissionCountsQuery>(TeacherGetSubmissionCountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetSubmissionCounts', 'query');
    },
    TeacherGetSubmissions(variables: TeacherGetSubmissionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetSubmissionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetSubmissionsQuery>(TeacherGetSubmissionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetSubmissions', 'query');
    },
    TeacherGetSurveyQuestions(variables: TeacherGetSurveyQuestionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetSurveyQuestionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetSurveyQuestionsQuery>(TeacherGetSurveyQuestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetSurveyQuestions', 'query');
    },
    TeacherGetTeacherRole(variables: TeacherGetTeacherRoleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetTeacherRoleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetTeacherRoleQuery>(TeacherGetTeacherRoleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetTeacherRole', 'query');
    },
    TeacherGetTeacherRoles(variables: TeacherGetTeacherRolesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetTeacherRolesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetTeacherRolesQuery>(TeacherGetTeacherRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetTeacherRoles', 'query');
    },
    TeacherGetTeacherStudents(variables?: TeacherGetTeacherStudentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetTeacherStudentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetTeacherStudentsQuery>(TeacherGetTeacherStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetTeacherStudents', 'query');
    },
    TeacherGetTemplateQuestions(variables: TeacherGetTemplateQuestionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherGetTemplateQuestionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherGetTemplateQuestionsQuery>(TeacherGetTemplateQuestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherGetTemplateQuestions', 'query');
    },
    TeacherResponseAreaStatistics(variables: TeacherResponseAreaStatisticsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeacherResponseAreaStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeacherResponseAreaStatisticsQuery>(TeacherResponseAreaStatisticsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeacherResponseAreaStatistics', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;