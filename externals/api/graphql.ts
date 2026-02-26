import { fetchData } from '@api/fetcher';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
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
  ASSIGN_STUDENT = 'ASSIGN_STUDENT',
  ASSIGN_TEACHER = 'ASSIGN_TEACHER',
  EDIT_CONTENT = 'EDIT_CONTENT',
  MODERATE_SUBMISSIONS = 'MODERATE_SUBMISSIONS',
  RESOLVE_ACTIVITY = 'RESOLVE_ACTIVITY',
  SET_STATS = 'SET_STATS',
  SURVEY_SET_STATS = 'SURVEY_SET_STATS',
  VIEW_STUDENT_DATA = 'VIEW_STUDENT_DATA'
}

export type Ack = {
  count?: Maybe<Scalars['Float']>;
  ids?: Maybe<Array<Scalars['String']>>;
  info?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export enum ActivityType {
  COMMENT = 'COMMENT',
  FLAG = 'FLAG',
  SUBMISSION_ERRORS = 'SUBMISSION_ERRORS'
}

export type AdminActiveModules = {
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
  edges: Array<AdminEvaluationFunction>;
  total: Scalars['Int'];
};

export type AdminEvaluationFunctionError = {
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
  errorCount: Scalars['Int'];
  feedback?: Maybe<Scalars['String']>;
  rawResponse: Scalars['JSON'];
  rowId: Scalars['String'];
};

export type AdminEvaluationFunctionGroupedErrors = {
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
  eventAccessType: Scalars['String'];
  eventUserAccess: Array<AdminEventUserAccess>;
};

export type AdminEventUserAccess = {
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
  globalTagsStatus: Array<GlobalTagStatus>;
};

export type AdminJob = {
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
  lastDay: Scalars['Int'];
  lastMonth: Scalars['Int'];
  lastWeek: Scalars['Int'];
  lastYear: Scalars['Int'];
  total: Scalars['Int'];
};

export type AdminMessagePairCounts = {
  edges: Array<AdminMessagePairCount>;
  total: Scalars['Int'];
  totalCounts: Scalars['Int'];
};

export type AdminModule = {
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  numberOfModuleInstances: Scalars['Int'];
  slug: Scalars['String'];
};

export type AdminModuleConnection = {
  edges: Array<AdminModule>;
  total: Scalars['Int'];
};

export type AdminModuleInstance = {
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
  answerContent?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  responseAreas: Array<TeacherResponseArea>;
  tutorial: Array<StructuredContent>;
  universalPartId: Scalars['String'];
  workedSolution: Array<StructuredContent>;
};

export type AdminQuestion = {
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
  jobId: Scalars['String'];
};

export type AdminStudent = {
  email: Scalars['String'];
  globalTags: Array<GlobalTag>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type AdminStudentConnection = {
  edges: Array<AdminStudent>;
  total: Scalars['Int'];
};

export type AdminStudentsInput = {
  searchFields?: InputMaybe<SearchAdminStudentsFields>;
  sortFields?: InputMaybe<SortAdminStudentsFields>;
};

export type AdminTeacher = {
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
  edges: Array<AdminTeacher>;
  total: Scalars['Int'];
};

export type AdminTeacherDetails = {
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
  id: Scalars['String'];
  isTagOwner: Scalars['Boolean'];
  name: Scalars['String'];
};

export type AdminTeacherModuleInstance = {
  id: Scalars['String'];
  moduleId: Scalars['String'];
  moduleName: Scalars['String'];
  name: Scalars['String'];
  startedAt: Scalars['DateTime'];
};

export type AdminTeacherModuleInstanceDetails = {
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
  userAccessEvents: Array<AdminEventTypeUserAccess>;
};

export type AdminUserAccessEventsInput = {
  timeRangeType: TimeRangeType | `${TimeRangeType}`;
};

export type AdminUserNumbers = {
  adminUsers: Scalars['Int'];
  studentUsers: Scalars['Int'];
  teacherUsers: Scalars['Int'];
  totalUsers: Scalars['Int'];
};

export type AdminUserNumbersInput = {
  moduleId?: InputMaybe<Scalars['String']>;
};

export type AdminUsersStatus = {
  usersWithStatus: Array<UserWithStatus>;
};

export type AnalyticsEvent = {
  success: Scalars['Boolean'];
};

export type BaseModuleInstance = {
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
  AUDIO_PLAY = 'AUDIO_PLAY',
  FA_WARNING_CANCEL = 'FA_WARNING_CANCEL',
  FA_WARNING_PROCEED = 'FA_WARNING_PROCEED',
  PART_ANSWER = 'PART_ANSWER',
  PART_GUIDANCE = 'PART_GUIDANCE',
  PART_TUTORIAL = 'PART_TUTORIAL',
  PART_TUTORIAL_NEXT = 'PART_TUTORIAL_NEXT',
  PART_TUTORIAL_PREVIOUS = 'PART_TUTORIAL_PREVIOUS',
  PART_TUTORIAL_SHOW_ALL = 'PART_TUTORIAL_SHOW_ALL',
  PART_WORKED_SOLUTION = 'PART_WORKED_SOLUTION',
  PART_WORKED_SOLUTION_NEXT = 'PART_WORKED_SOLUTION_NEXT',
  PART_WORKED_SOLUTION_PREVIOUS = 'PART_WORKED_SOLUTION_PREVIOUS',
  PART_WORKED_SOLUTION_SHOW_ALL = 'PART_WORKED_SOLUTION_SHOW_ALL',
  ST_WARNING_CANCEL = 'ST_WARNING_CANCEL',
  ST_WARNING_PROCEED = 'ST_WARNING_PROCEED',
  SUGGEST_TIME = 'SUGGEST_TIME',
  WS_WARNING_CANCEL = 'WS_WARNING_CANCEL',
  WS_WARNING_PROCEED = 'WS_WARNING_PROCEED'
}

export type Canvas = {
  id: Scalars['String'];
  snapshot: Scalars['JSONObject'];
};

export type ChatFunctionDetails = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  remoteDocsUrl?: Maybe<Scalars['String']>;
};

export type Column = {
  key: Scalars['String'];
  meta: ColumnMeta;
};

export type ColumnMeta = {
  displayName: Scalars['String'];
  entityId?: Maybe<Scalars['String']>;
  shortDisplayName?: Maybe<Scalars['String']>;
};

export type Comment = {
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
  edges: Array<Comment>;
  total: Scalars['Int'];
};

export type CommentFeedback = {
  canUserUpvote: Scalars['Boolean'];
  commentReactions?: Maybe<Array<CommentReaction>>;
  total: Scalars['Int'];
  userUpvoted: Scalars['Boolean'];
};

export type CommentReaction = {
  id: Scalars['String'];
  reaction?: Maybe<Scalars['String']>;
};

export type CommentsExist = {
  commentsExist: Scalars['Boolean'];
};

export type Conversation = {
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  messagePairs: Array<MessagePair>;
  questionId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ConversationMessagePair = {
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
  pdfError?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
};

export enum ExportFileType {
  JSON = 'JSON',
  PDF = 'PDF',
  TEX = 'TEX'
}

export enum FileDataContentType {
  COMBINED = 'COMBINED',
  QUESTIONS = 'QUESTIONS',
  SOLUTIONS = 'SOLUTIONS'
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
  id: Scalars['String'];
  name: Scalars['String'];
};

export type GlobalTagStatus = {
  id: Scalars['String'];
  name: Scalars['String'];
  similarExistingTags: Array<GlobalTag>;
  similarOtherNewTags: Array<GlobalTag>;
  status: TagStatus | `${TagStatus}`;
};

export enum GlobalTagType {
  COHORT = 'COHORT',
  CUSTOM = 'CUSTOM',
  PT = 'PT',
  ST = 'ST'
}

export type GlobalTagWithDetails = {
  id: Scalars['String'];
  name: Scalars['String'];
  tagOwnerEmail?: Maybe<Scalars['String']>;
  teacherEmails: Array<Scalars['String']>;
  type: GlobalTagType | `${GlobalTagType}`;
};

export type GraphStatistics = {
  columns: Array<Column>;
  lines: Array<Line>;
};

export type InputSymbol = {
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
  FAILED = 'FAILED',
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS'
}

export enum JobStatus {
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS'
}

export type Line = {
  data: Scalars['JSONObject'];
  key: Scalars['String'];
  meta: LineMeta;
};

export type LineMeta = {
  displayName: Scalars['String'];
  entityId?: Maybe<Scalars['String']>;
  shortDisplayName?: Maybe<Scalars['String']>;
};

export type MarkCompletion = {
  success: Scalars['Boolean'];
};

export type MarkCompletionInput = {
  checked: Scalars['Boolean'];
  partId: Scalars['String'];
  universalPartId: Scalars['String'];
};

export type MatchedCase = {
  color?: Maybe<Scalars['String']>;
  feedback: Scalars['String'];
  isCorrect: Scalars['Boolean'];
};

export type MathpixSessionResponse = {
  expiresAt: Scalars['Float'];
  token: Scalars['String'];
};

export type Media = {
  post: MediaPost;
  url: Scalars['String'];
};

export type MediaPost = {
  fields: Scalars['JSON'];
  url: Scalars['String'];
};

export type MessagePair = {
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
  code: ModuleErrorCode | `${ModuleErrorCode}`;
  message?: Maybe<Scalars['String']>;
};

export enum ModuleErrorCode {
  NOT_FOUND = 'NOT_FOUND'
}

export type ModuleGraphStatistics = {
  graphStatistics: GraphStatistics;
  noOfStudents: Scalars['Int'];
};

export type ModuleInstanceStats = {
  setPreviews: Array<StudentSetPreview>;
  totalParts: Scalars['Int'];
  totalPartsCompleted: Scalars['Int'];
};

export type ModuleInstanceUserPreference = {
  key: Scalars['String'];
  moduleInstanceId: Scalars['String'];
  value: Scalars['Boolean'];
};

export type ModuleInstanceUserPreferenceList = {
  edges: Array<ModuleInstanceUserPreference>;
  total: Scalars['Int'];
};

export enum ModuleStudentBinaryA {
  ALL = 'ALL',
  HAVE = 'HAVE',
  HAVE_NOT = 'HAVE_NOT'
}

export enum ModuleStudentBinaryB {
  ACCESSED = 'ACCESSED',
  COMPLETED = 'COMPLETED'
}

export type Mutation = {
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
  AFTER = 'AFTER',
  BEFORE = 'BEFORE',
  IS = 'IS',
  IS_EMPTY = 'IS_EMPTY',
  IS_NOT_EMPTY = 'IS_NOT_EMPTY',
  NOT = 'NOT',
  ON_OR_AFTER = 'ON_OR_AFTER',
  ON_OR_BEFORE = 'ON_OR_BEFORE'
}

export enum PrismaFilterOperatorDropDownList {
  EQUALS = 'EQUALS'
}

export enum PrismaFilterOperatorIsEmpty {
  IS_EMPTY = 'IS_EMPTY',
  IS_NOT_EMPTY = 'IS_NOT_EMPTY'
}

export enum PrismaFilterOperatorNumber {
  EQUALS = 'EQUALS',
  GREATER_THAN = 'GREATER_THAN',
  GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
  LESS_THAN = 'LESS_THAN',
  LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
  NOT_EQUAL = 'NOT_EQUAL'
}

export enum PrismaFilterOperatorString {
  CONTAINS = 'CONTAINS',
  ENDS_WITH = 'ENDS_WITH',
  EQUALS = 'EQUALS',
  STARTS_WITH = 'STARTS_WITH'
}

export type Query = {
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
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  VERSIONED = 'VERSIONED'
}

export type ReactionToggleInput = {
  entityId: Scalars['String'];
  feedback?: InputMaybe<Scalars['String']>;
  reaction: Scalars['String'];
  reactionType: ReactionType | `${ReactionType}`;
};

export enum ReactionType {
  CHAT = 'CHAT',
  COMMENT = 'COMMENT',
  FEEDBACK = 'FEEDBACK',
  PART_CONTENT = 'PART_CONTENT'
}

export type ReactionsInput = {
  entityId: Scalars['String'];
  reactionType: ReactionType | `${ReactionType}`;
};

export enum RecapSchedule {
  DAILY = 'DAILY',
  MONTHLY = 'MONTHLY',
  NONE = 'NONE',
  WEEKLY = 'WEEKLY'
}

export type ResponseAreaCase = {
  answer: Scalars['JSON'];
  color?: Maybe<Scalars['String']>;
  feedback: Scalars['String'];
  id: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  params?: Maybe<Scalars['JSON']>;
};

export type ResponseAreaTest = {
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
  code: SetErrorCode | `${SetErrorCode}`;
  message?: Maybe<Scalars['String']>;
};

export enum SetErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  NOT_RELEASED = 'NOT_RELEASED'
}

export type SetPreviewSlice = {
  hasUploadedSolution: Scalars['Boolean'];
  questionId: Scalars['String'];
  questionNumber: Scalars['Float'];
};

export type SetStatisticsInput = {
  setId: Scalars['String'];
};

export type SetSubjectOutline = {
  label: Scalars['String'];
  userId: Scalars['String'];
};

export enum SolutionType {
  FINAL_ANSWER = 'FINAL_ANSWER',
  GUIDANCE = 'GUIDANCE',
  STRUCTURED_TUTORIAL = 'STRUCTURED_TUTORIAL',
  WORKED_SOLUTIONS = 'WORKED_SOLUTIONS'
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
  ASC = 'ASC',
  DESC = 'DESC'
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
  id: Scalars['String'];
  moduleInstanceEndedAt: Scalars['DateTime'];
  moduleInstanceId: Scalars['String'];
  moduleInstanceName: Scalars['String'];
  moduleInstanceStartedAt: Scalars['DateTime'];
  name: Scalars['String'];
};

export type StudentModularResponse = {
  config?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
  responseType: Scalars['String'];
};

export type StudentModule = {
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
  count: Scalars['Int'];
  reaction: Scalars['String'];
};

export type StudentQuestionReactions = {
  reactionStats: Array<StudentQuestionReaction>;
  userReactions: Array<Scalars['String']>;
};

export type StudentRemoveCommentInput = {
  id: Scalars['String'];
};

export type StudentResponseArea = {
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
  error?: Maybe<SetError>;
  set?: Maybe<StudentSet>;
};

export type StudentSolutionAccessStatus = {
  accessStatus: StudentSolutionAccessType | `${StudentSolutionAccessType}`;
  estimatedMinimumTime?: Maybe<Scalars['String']>;
  solutionType: SolutionType | `${SolutionType}`;
  timeTaken?: Maybe<Scalars['String']>;
};

export enum StudentSolutionAccessType {
  HIDDEN_PER_QUESTION = 'HIDDEN_PER_QUESTION',
  HIDDEN_PER_SET = 'HIDDEN_PER_SET',
  OPEN = 'OPEN',
  OPEN_WITH_WARNINGS = 'OPEN_WITH_WARNINGS'
}

export type StudentSolutionsAccessInput = {
  partId: Scalars['String'];
  universalPartId: Scalars['String'];
};

export type StudentSolutionsAccessStatus = {
  partId: Scalars['String'];
  solutionsStatus: Array<StudentSolutionAccessStatus>;
  universalPartId: Scalars['String'];
};

export type StudentTag = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type StudentsAccessWeeklyGraphStatistics = {
  columns: Array<Column>;
  moduleInstanceLines: Array<Line>;
  studentId: Scalars['String'];
  summaryLine: Line;
};

export type StudentsGraphStatistics = {
  studentsModuleInstanceGraphStatistics: Array<StudentModuleInstanceGraphStatistics>;
  summaryGraphStatistics: GraphStatistics;
};

export type StudentsStatisticsInput = {
  studentIds: Array<Scalars['String']>;
};

export type Submission = {
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
  automatic: Scalars['Int'];
  manuallyApproved: Scalars['Int'];
  manuallyRejected: Scalars['Int'];
  pending: Scalars['Int'];
  total: Scalars['Int'];
};

export type SubmissionDraft = {
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
  DUPLICATE = 'DUPLICATE',
  EMPTY = 'EMPTY',
  MANUAL = 'MANUAL'
}

/** Status of submission moderation */
export enum SubmissionModerationStatus {
  APPROVED = 'APPROVED',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED'
}

export type SubmissionPreview = {
  feedback?: Maybe<Scalars['String']>;
  isError: Scalars['Boolean'];
  preview?: Maybe<Scalars['JSON']>;
  rawResult: Scalars['JSON'];
};

export type SubmissionResult = Submission | SubmissionWithoutFeedback;

export type SubmissionWithoutFeedback = {
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
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum TagStatus {
  EXISTING = 'EXISTING',
  NEW = 'NEW'
}

export type Teacher = {
  automaticallyCreated: Scalars['Boolean'];
  email: Scalars['String'];
};

export type TeacherAreaStatistics = {
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
  importedQuestionIds: Array<Scalars['String']>;
};

export type TeacherModularResponse = {
  answer: Scalars['JSON'];
  config?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
  responseType: Scalars['String'];
};

export type TeacherModule = {
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
  edges: Array<TeacherModuleInstanceActivity>;
  total: Scalars['Int'];
};

export type TeacherModuleInstanceConnection = {
  edges: Array<TeacherModuleInstancesItem>;
  total: Scalars['Int'];
};

export type TeacherModuleInstanceError = {
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
  edges: Array<TeacherModuleInstanceError>;
  total: Scalars['Int'];
};

export type TeacherModuleInstanceFlag = {
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
  error?: Maybe<ModuleError>;
  moduleInstance?: Maybe<TeacherModuleInstance>;
};

export type TeacherModuleInstanceStudent = {
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  studentGlobalTags: Array<TeacherModuleInstanceStudentLabels>;
  studentTags: Array<TeacherModuleInstanceStudentLabels>;
};

export type TeacherModuleInstanceStudentConnection = {
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
  id: Scalars['String'];
  name: Scalars['String'];
};

export type TeacherModuleInstanceStudentStats = {
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
  edges: Array<TeacherModulesActivity>;
  total: Scalars['Int'];
};

export type TeacherPart = {
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
  edges: Array<TeacherQuestion>;
  total: Scalars['Int'];
};

export type TeacherQuestionParents = {
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
  pdfError?: Maybe<Scalars['String']>;
  questionIds: Array<Scalars['String']>;
};

export type TeacherQuestionsPublish = {
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
  areas: Array<TeacherAreaStatistics>;
  position: Scalars['Int'];
};

export type TeacherResponseAreaStatistic = {
  answer: Scalars['JSON'];
  color?: Maybe<Scalars['String']>;
  feedback?: Maybe<Scalars['String']>;
  frequency: Scalars['Int'];
  isCorrect?: Maybe<Scalars['Boolean']>;
  latexAnswer?: Maybe<Scalars['String']>;
  simplifiedAnswer?: Maybe<Scalars['String']>;
};

export type TeacherResponseAreaStatistics = {
  parts: Array<TeacherResponseAreaPartStatistics>;
  question?: Maybe<TeacherQuestion>;
};

export type TeacherResponseType = {
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
  description: Scalars['String'];
  functionCodes: Array<FunctionCode>;
  id: Scalars['String'];
  teacherRoleType: TeacherRoleType | `${TeacherRoleType}`;
};

export enum TeacherRoleType {
  CUSTOM = 'CUSTOM',
  OWNER = 'OWNER',
  TUTOR = 'TUTOR'
}

export type TeacherSaveImportedQuestionsInput = {
  questions: Array<TeacherCreateQuestionInput>;
};

export type TeacherSet = {
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
  pdfError?: Maybe<Scalars['String']>;
  setId: Scalars['String'];
};

export type TeacherSetResult = {
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
  email: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type TeacherStudentConnection = {
  edges: Array<TeacherStudent>;
  total: Scalars['Int'];
};

export type TeacherStudentWithGlobalTags = {
  email: Scalars['String'];
  globalTags: Array<GlobalTag>;
  id: Scalars['String'];
  modules: Array<StudentGlobalTagModule>;
  name?: Maybe<Scalars['String']>;
};

export type TeacherSubmissionResponse = {
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
  email: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  teacherRoleId: Scalars['String'];
};

export type TeacherTeacherConnection = {
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
  LEXICAL = 'LEXICAL',
  MILKDOWN = 'MILKDOWN'
}

export enum TimeRangeType {
  ALL = 'ALL',
  DAY = 'DAY',
  MONTH = 'MONTH',
  WEEK = 'WEEK',
  YEAR = 'YEAR'
}

export enum TimingReaction {
  LONGER = 'LONGER',
  MUCH_LONGER = 'MUCH_LONGER',
  SAME = 'SAME',
  SHORTER = 'SHORTER'
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
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER'
}

export enum UserStatus {
  FOUND_IN_LAMBDA = 'FOUND_IN_LAMBDA',
  FOUND_IN_UNIVERSITY = 'FOUND_IN_UNIVERSITY',
  NOT_FOUND = 'NOT_FOUND'
}

export type UserWithStatus = {
  email: Scalars['String'];
  role?: Maybe<UserRole | `${UserRole}`>;
  status: UserStatus | `${UserStatus}`;
  studentGlobalTagNames: Array<Scalars['String']>;
  teacherGlobalTagNames: Array<Scalars['String']>;
};

export enum VisibilityStatusType {
  HIDE = 'HIDE',
  OPEN = 'OPEN',
  OPEN_WITH_WARNINGS = 'OPEN_WITH_WARNINGS'
}

export type StandardAdminConversationFlagFragment = { id: string, questionId: string, questionNumber: number, questionTitle: string, questionName: string, setId: string, setNumber: number, setName: string, moduleId: string, moduleSlug: string, moduleName: string, moduleInstanceId: string, moduleInstanceSlug: string, moduleInstanceName: string, conversationId: string, messagePairId: string, chatFunctionId: string, chatFunctionName: string, flagDetails: string, studentEmail: string, flaggedAt: string };

export type StandardAdminFunctionFragment = { id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> };

export type StandardAdminJobFragment = { id: string, createdAt: string, createdByUserId: string, createdByUserEmail: string, cancelledByUserId?: string | null, cancelledByUserEmail?: string | null, jobStatus: JobStatus, startedAt?: string | null, finishedAt?: string | null, errorMessage?: string | null, metadata: object | number | string | boolean | null };

export type StandardAdminMessagePairCountFragment = { id: string, count: number, userCount: number, questionId: string, questionNumber: number, questionTitle: string, questionName: string, setId: string, setNumber: number, setTitle: string, setName: string, moduleId: string, moduleName: string, moduleInstanceId: string, moduleInstanceName: string, chatFunctionId: string, chatFunctionName: string };

export type StandardModuleInstanceToCloneFragment = { id: string, name: string, slug: string, startedAt: string, endedAt: string, moduleId: string, moduleName: string, moduleSlug: string, teachers: Array<{ email: string }> };

export type StandardAdminModuleInstanceFragment = { id: string, moduleId: string, name: string, slug: string, startedAt: string, endedAt: string, deletedAt?: string | null };

export type StandardAdminModuleFragment = { id: string, name: string, slug: string, description: string, deletedAt?: string | null };

export type StandardAdminPartFragment = { id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> };

export type StandardAdminQuestionFragment = { id: string, versionId: string, title: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, number: number, isSurvey: boolean, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> };

export type StandardAdminResponseTypeFragment = { id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ id: string, name: string }> };

export type StandardAdminTeacherRoleFragment = { id: string, description: string, teacherRoleType: TeacherRoleType, teacherCount: number, moduleInstanceCount: number };

export type StandardAdminTenantFragment = { id: string, homePageBanner?: string | null, signInBanner?: string | null, defaultRecapSchedule: RecapSchedule, textEditor: TextEditor, surveyDefaultReleasedAt?: string | null, surveyDefaultHiddenAt?: string | null };

export type StandardCommentFeedbackFragment = { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null };

export type CommentReactionsFragment = { id: string, reaction?: string | null };

export type StandardCommentFragment = { id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, comments: Array<{ id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } }>, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } };

export type CommentFieldsFragment = { id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } };

export type StandardMathpixSessionResponseFragment = { token: string, expiresAt: number };

export type StandardMeFragment = { id: string, name?: string | null, email: string, role: UserRole, isSuperAdmin: boolean, recapSchedule: RecapSchedule };

export type StandardModuleInstanceUserPreferenceFragment = { moduleInstanceId: string, key: string, value: boolean };

export type StandardModuleInstanceStatsFragment = { totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> };

export type StandardModuleInstanceFragment = { id: string, slug: string, name: string, startedAt: string, endedAt: string, isClosed: boolean };

export type StandardPartFragment = { id: string, universalPartId: string, isAdmin: boolean, isMarkedComplete: boolean, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, structuredTutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseArea: Array<{ id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null }> };

export type StandardQuestionPreviewFragment = { id: string, setId: string, name: string, number: number, setNumber: number, setDisplayNumber: number, setName: string, title: string, markedParts: number, totalParts: number, releasedAt: string, skill: number };

export type StandardQuestionFragment = { id: string, title: string, guidance?: string | null, skill?: number | null, durationLowerBound?: number | null, durationUpperBound?: number | null, displayChatbot: boolean, number: number, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, isAdmin: boolean, isMarkedComplete: boolean, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, structuredTutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseArea: Array<{ id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null }> }> };

export type StudentModularResponseFragment = { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null };

export type StandardResponseAreaFragment = { id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null };

export type StandardSetPreviewFragment = { id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }> };

export type StandardSetResultFragment = { set?: { id: string, moduleSlug: string, moduleInstanceSlug: string, name: string, description: string, isSurvey: boolean, pdfUrl?: string | null, number: number, displayNumber: number, subjects: Array<{ userId: string, label: string }>, questions: Array<{ id: string, title: string, guidance?: string | null, skill?: number | null, durationLowerBound?: number | null, durationUpperBound?: number | null, displayChatbot: boolean, number: number, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, isAdmin: boolean, isMarkedComplete: boolean, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, structuredTutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseArea: Array<{ id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null }> }> }> } | null, error?: { code: SetErrorCode, message?: string | null } | null };

export type StandardSetFragment = { id: string, moduleSlug: string, moduleInstanceSlug: string, name: string, description: string, isSurvey: boolean, pdfUrl?: string | null, number: number, displayNumber: number, subjects: Array<{ userId: string, label: string }>, questions: Array<{ id: string, title: string, guidance?: string | null, skill?: number | null, durationLowerBound?: number | null, durationUpperBound?: number | null, displayChatbot: boolean, number: number, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, isAdmin: boolean, isMarkedComplete: boolean, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, structuredTutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseArea: Array<{ id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null }> }> }> };

export type StandardGraphStatisticsColumnFragment = { key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } };

export type StandardGraphStatisticsLineFragment = { key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } };

export type StandardGraphStatisticsFragment = { columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> };

export type StandardStructuredContentFragment = { id: string, parentId?: string | null, title?: string | null, content?: string | null };

export type StandardStudentModuleInstanceFragment = { id: string, slug: string, name: string, startedAt: string, endedAt: string, moduleId: string, moduleSlug: string, moduleName: string, setsHeader?: string | null, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean };

export type StandardStudentGraphStatisticsFragment = { studentId: string, columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, summaryLine: { key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }, moduleInstanceLines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> };

export type StandardSubmissionDraftFragment = { snapshot: object | number | string | boolean | null, feedback?: string | null, color?: string | null, isCorrect: boolean, isError: boolean, matchedCase?: { feedback: string, color?: string | null } | null };

export type StandardSubmissionPreviewFragment = { isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, preview?: object | number | string | boolean | null | null };

export type StandardSubmissionWithoutFeedbackFragment = { submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string };

export type StandardSubmissionFragment = { submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { feedback: string, color?: string | null } | null };

export type StandardGlobalTagWithDetailsFragment = { id: string, type: GlobalTagType, name: string, tagOwnerEmail?: string | null, teacherEmails: Array<string> };

export type StandardGlobalTagFragment = { id: string, name: string };

export type StandardModerationSubmissionFragment = { id: string, createdAt: string, submission?: object | number | string | boolean | null | null, responseType: string, responseConfig?: object | number | string | boolean | null | null, moderationStatus?: SubmissionModerationStatus | null, moderationMethod?: SubmissionModerationMethod | null, moderatedAt?: string | null, moderatedBy?: string | null, moderatorEmail?: string | null, moderatorName?: string | null, moduleId: string, moduleName: string, moduleSlug: string, moduleInstanceId: string, moduleInstanceName: string, moduleInstanceSlug: string, setId: string, setName: string, setDisplayNumber: number, questionId: string, questionTitle: string, questionDisplayNumber: number, partId: string, partIndex: number, responseAreaId: string, responseAreaDisplayPosition: number, subjects: Array<{ userId: string, label: string }> };

export type StandardStudentTagFragment = { id: string, name: string };

export type StandardFunctionCodeFragment = { id: string, code: AccessCode, description: string };

export type StandardTeacherFunctionFragment = { id: string, name: string, url: string, includeDefaultTest: boolean, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, deletedAt?: string | null };

export type StandardTeacherModuleInstanceActivityFragment = { id: string, createdAt: string, resolvedAt?: string | null, userEmail: string, message?: string | null, questionId: string, questionTitle: string, questionNumber: number, partIndex: number, setId: string, setNumber: number, activityType: ActivityType, parentId?: string | null, responseAreaIndex?: number | null, rawResponse?: object | number | string | boolean | null | null };

export type StandardTeacherModuleInstanceErrorFragment = { submissionId: string, errorAt: string, resolvedAt?: string | null, studentEmail: string, rawRequest?: object | number | string | boolean | null | null, rawResponse: object | number | string | boolean | null, evaluationFunctionId?: string | null, evaluationFunctionName?: string | null, responseAreaId: string, evalutionFunctionOwnerEmail?: string | null, questionId: string, partId: string, partIndex: number, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number };

export type StandardTeacherModuleInstanceFlagFragment = { id: string, flaggedAt: string, resolvedAt?: string | null, studentEmail: string, comment?: string | null, questionId: string, questionVersionId: string, partId: string, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number };

export type StandardTeacherModuleInstanceStudentStatsFragment = { studentId: string, stats: { totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> } };

export type StandardTeacherModuleInstanceFragment = { id: string, name: string, slug: string, startedAt: string, moduleId: string, moduleSlug: string, moduleName: string, moduleDescription: string, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean, setsHeader?: string | null, sets: Array<{ id: string, name: string, number: number, displayNumber: number, description: string, isSurvey: boolean, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, durationLowerBound: number, durationUpperBound: number, durationWithUncertainty: boolean, subjects: Array<{ userId: string, label: string }> }> };

export type StandardTeacherModuleInstanceStudentFragment = { id: string, email: string, name: string, studentTags: Array<{ id: string, name: string }>, studentGlobalTags: Array<{ id: string, name: string }> };

export type StandardTeacherModulesActivityFragment = { activityType: ActivityType, ids: Array<string>, createdAt: string, resolvedAt?: string | null, userIds: Array<string>, userEmails: Array<string>, message?: string | null, moduleId: string, moduleInstanceId: string, moduleName: string, moduleSlug: string, moduleInstanceName: string, moduleInstanceSlug: string, moduleInstanceStartedAt: string, moduleInstanceTeacherRoleId: string, questionId: string, questionNumber: number, partIndex: number, questionTitle: string, setId: string, setNumber: number, parentId?: string | null };

export type StandardTeacherPartFragment = { id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> };

export type StandardTeacherQuestionFragment = { id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> };

export type TeacherModularResponseFragment = { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null };

export type StandardTeacherResponseAreaFragment = { id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null };

export type StandardTeacherResponseStatisticsFragment = { position: number, responseType: string, responseConfig: object | number | string | boolean | null, answersSuppressed: boolean, suppressionReasons: Array<string>, totalSubmissionsCount: number, correctSubmissionsCount: number, studentsCount: number, correctStudentsCount: number, pendingModerationCount?: number | null, approvedModerationCount?: number | null, rejectedModerationCount?: number | null, unmoderatedSubmissionCount?: number | null, responseArea: { id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }, answers: Array<{ answer: object | number | string | boolean | null, latexAnswer?: string | null, simplifiedAnswer?: string | null, frequency: number, isCorrect?: boolean | null, feedback?: string | null, color?: string | null }> };

export type StandardTeacherResponseTypeFragment = { id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null };

export type StandardTeacherSetForModuleInstanceFragment = { id: string, name: string, number: number, displayNumber: number, description: string, isSurvey: boolean, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, durationLowerBound: number, durationUpperBound: number, durationWithUncertainty: boolean, subjects: Array<{ userId: string, label: string }> };

export type StandardTeacherSetResultFragment = { set?: { id: string, isSurvey: boolean, name: string, number: number, displayNumber: number, description: string, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, subjects: Array<{ userId: string, label: string }>, questions: Array<{ id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } | null, error?: { code: SetErrorCode, message?: string | null } | null };

export type StandardTeacherSetFragment = { id: string, isSurvey: boolean, name: string, number: number, displayNumber: number, description: string, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, subjects: Array<{ userId: string, label: string }>, questions: Array<{ id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> };

export type StandardTeacherStudentWithGlobalTagsFragment = { id: string, email: string, globalTags: Array<{ id: string, name: string }>, modules: Array<{ id: string, name: string, moduleInstanceId: string, moduleInstanceName: string, moduleInstanceStartedAt: string, moduleInstanceEndedAt: string }> };

export type StandardTeacherSubmissionFragment = { isCorrect: boolean, isError: boolean, feedback?: string | null, submission?: object | number | string | boolean | null | null, color?: string | null, rawResponse?: object | number | string | boolean | null | null, matchedCase?: { feedback: string, color?: string | null } | null };

export type StandardTeacherRoleFragment = { id: string, description: string, teacherRoleType: TeacherRoleType, functionCodes: Array<{ id: string, code: AccessCode, description: string }> };

export type AdminAddGlobalTagMutationVariables = Exact<{
  input: AdminCreateGlobalTagInput;
}>;


export type AdminAddGlobalTagMutation = { admin_createGlobalTag: { success: boolean } };

export type AdminAddGlobalTagsMutationVariables = Exact<{
  input: AdminCreateGlobalTagsInput;
}>;


export type AdminAddGlobalTagsMutation = { admin_createGlobalTags: { success: boolean, count?: number | null } };

export type AdminAddStudentsMutationVariables = Exact<{
  input: AdminCreateStudentsInput;
}>;


export type AdminAddStudentsMutation = { admin_createStudents: { success: boolean, count?: number | null } };

export type AdminAddTeachersMutationVariables = Exact<{
  input: AdminCreateTeacherInput;
}>;


export type AdminAddTeachersMutation = { admin_createTeachers: { success: boolean, count?: number | null } };

export type AdminAddTeacherRoleMutationVariables = Exact<{
  input: AdminCreateTeacherRoleInput;
}>;


export type AdminAddTeacherRoleMutation = { admin_createTeacherRole: { success: boolean } };

export type AdminAssignFunctionCodesMutationVariables = Exact<{
  input: AdminAssignFunctionCodesInput;
}>;


export type AdminAssignFunctionCodesMutation = { admin_assignFunctionCodes: { success: boolean } };

export type AdminAssignGlobalTagsToStudentsMutationVariables = Exact<{
  input: AdminGlobalTagsPerUsersInput;
}>;


export type AdminAssignGlobalTagsToStudentsMutation = { admin_assignGlobalTagsToStudents: { success: boolean, count?: number | null } };

export type AdminAssignGlobalTagsToTeachersMutationVariables = Exact<{
  input: AdminGlobalTagsPerUsersInput;
}>;


export type AdminAssignGlobalTagsToTeachersMutation = { admin_assignGlobalTagsToTeachers: { success: boolean, count?: number | null } };

export type AdminAssignTeachersMutationVariables = Exact<{
  input: AdminAssignTeachersInput;
}>;


export type AdminAssignTeachersMutation = { admin_assignTeachers: { id: string, teachers?: Array<{ email: string, automaticallyCreated: boolean }> | null } };

export type TeacherFieldsFragment = { email: string, automaticallyCreated: boolean };

export type AdminBulkAssignGlobalTagsToStudentsMutationVariables = Exact<{
  input: AdminGlobalTagsInput;
}>;


export type AdminBulkAssignGlobalTagsToStudentsMutation = { admin_bulkAssignGlobalTagsToStudents: { success: boolean } };

export type AdminBulkAssignGlobalTagsToTeachersMutationVariables = Exact<{
  input: AdminGlobalTagsInput;
}>;


export type AdminBulkAssignGlobalTagsToTeachersMutation = { admin_bulkAssignGlobalTagsToTeachers: { success: boolean } };

export type AdminBulkUnassignGlobalTagsFromStudentsMutationVariables = Exact<{
  input: AdminGlobalTagsInput;
}>;


export type AdminBulkUnassignGlobalTagsFromStudentsMutation = { admin_bulkUnassignGlobalTagsFromStudents: { success: boolean } };

export type AdminBulkUnassignGlobalTagsFromTeachersMutationVariables = Exact<{
  input: AdminGlobalTagsInput;
}>;


export type AdminBulkUnassignGlobalTagsFromTeachersMutation = { admin_bulkUnassignGlobalTagsFromTeachers: { success: boolean } };

export type AdminCancelJobMutationVariables = Exact<{
  input: JobInput;
}>;


export type AdminCancelJobMutation = { admin_cancelJob: { success: boolean } };

export type AdminCloneModuleInstanceMutationVariables = Exact<{
  input: AdminCloneModuleInstanceInput;
}>;


export type AdminCloneModuleInstanceMutation = { admin_cloneModuleInstance: { id: string, moduleId: string, name: string, slug: string, startedAt: string, endedAt: string } };

export type TeacherDetailsFragment = { email: string, automaticallyCreated: boolean };

export type AdminCreateFunctionMutationVariables = Exact<{
  input: AdminCreateEvaluationFunctionInput;
}>;


export type AdminCreateFunctionMutation = { admin_createEvaluationFunction: { id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> } };

export type AdminCreateModuleMutationVariables = Exact<{
  input: AdminCreateModuleInput;
}>;


export type AdminCreateModuleMutation = { admin_createModule: { id: string, name: string, slug: string, description: string } };

export type AdminCreateModuleInstanceMutationVariables = Exact<{
  input: AdminCreateModuleInstanceInput;
}>;


export type AdminCreateModuleInstanceMutation = { admin_createModuleInstance: { id: string, moduleId: string, name: string, slug: string, startedAt: string, endedAt: string, teachers?: Array<{ email: string, automaticallyCreated: boolean }> | null } };

export type AdminCreateResponseTypeMutationVariables = Exact<{
  input: AdminCreateResponseTypeInput;
}>;


export type AdminCreateResponseTypeMutation = { admin_createResponseType: { id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ id: string, name: string }> } };

export type AdminCreateTemplateQuestionMutationVariables = Exact<{
  input: AdminCreateTemplateQuestionInput;
}>;


export type AdminCreateTemplateQuestionMutation = { admin_createTemplateQuestion: { id: string, versionId: string, title: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, number: number, isSurvey: boolean, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> } };

export type AdminDeleteFunctionMutationVariables = Exact<{
  input: AdminRemoveEvaluationFunctionInput;
}>;


export type AdminDeleteFunctionMutation = { admin_deleteEvaluationFunction: { id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> } };

export type AdminDeleteGlobalTagMutationVariables = Exact<{
  input: AdminDeleteGlobalTagInput;
}>;


export type AdminDeleteGlobalTagMutation = { admin_deleteGlobalTag: { success: boolean } };

export type AdminDeleteModuleMutationVariables = Exact<{
  input: AdminRemoveModuleInput;
}>;


export type AdminDeleteModuleMutation = { admin_deleteModule: { id: string, name: string, slug: string, description: string, deletedAt?: string | null } };

export type AdminDeleteModuleInstanceMutationVariables = Exact<{
  input: AdminRemoveModuleInstanceInput;
}>;


export type AdminDeleteModuleInstanceMutation = { admin_deleteModuleInstance: { id: string, moduleId: string, name: string, slug: string, startedAt: string, endedAt: string, deletedAt?: string | null } };

export type AdminDeleteQuestionMutationVariables = Exact<{
  input: AdminDeleteQuestionInput;
}>;


export type AdminDeleteQuestionMutation = { admin_deleteQuestion: { success: boolean } };

export type AdminDeleteResponseTypeMutationVariables = Exact<{
  input: AdminRemoveResponseTypeInput;
}>;


export type AdminDeleteResponseTypeMutation = { admin_deleteResponseType: { id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ id: string, name: string }> } };

export type AdminDeleteTeacherMutationVariables = Exact<{
  input: AdminDeleteTeacherInput;
}>;


export type AdminDeleteTeacherMutation = { admin_deleteTeacher: { success: boolean } };

export type AdminDeleteTeacherRoleMutationVariables = Exact<{
  input: AdminDeleteTeacherRoleInput;
}>;


export type AdminDeleteTeacherRoleMutation = { admin_deleteTeacherRole: { success: boolean } };

export type AdminDemoteAdminMutationVariables = Exact<{
  input: AdminDemoteAdminInput;
}>;


export type AdminDemoteAdminMutation = { admin_demoteAdmin: { success: boolean } };

export type AdminReplaceAndDeleteTeacherRoleMutationVariables = Exact<{
  input: AdminReplaceAndDeleteTeacherRoleInput;
}>;


export type AdminReplaceAndDeleteTeacherRoleMutation = { admin_replaceAndDeleteTeacherRole: { success: boolean } };

export type AdminRestoreFunctionMutationVariables = Exact<{
  input: AdminRestoreEvaluationFunctionInput;
}>;


export type AdminRestoreFunctionMutation = { admin_restoreEvaluationFunction: { id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> } };

export type AdminRestoreModuleMutationVariables = Exact<{
  input: AdminRestoreModuleInput;
}>;


export type AdminRestoreModuleMutation = { admin_restoreModule: { id: string, name: string, slug: string, description: string, deletedAt?: string | null } };

export type AdminRestoreModuleInstanceMutationVariables = Exact<{
  input: AdminRestoreModuleInstanceInput;
}>;


export type AdminRestoreModuleInstanceMutation = { admin_restoreModuleInstance: { id: string, moduleId: string, name: string, slug: string, startedAt: string, endedAt: string, deletedAt?: string | null } };

export type AdminRunJobModuleRolloverMutationVariables = Exact<{
  input: RunJobModuleRolloverInput;
}>;


export type AdminRunJobModuleRolloverMutation = { admin_runJobModuleRollover: { jobId: string } };

export type AdminUnassignFunctionCodesMutationVariables = Exact<{
  input: AdminAssignFunctionCodesInput;
}>;


export type AdminUnassignFunctionCodesMutation = { admin_unassignFunctionCodes: { success: boolean } };

export type AdminUnassignTeacherMutationVariables = Exact<{
  input: AdminUnassignTeacherInput;
}>;


export type AdminUnassignTeacherMutation = { admin_unassignTeacher: { success: boolean } };

export type AdminUpdateAdminMutationVariables = Exact<{
  input: AdminUpdateAdminInput;
}>;


export type AdminUpdateAdminMutation = { admin_updateAdmin: { success: boolean } };

export type AdminUpdateFunctionMutationVariables = Exact<{
  input: AdminUpdateEvaluationFunctionInput;
}>;


export type AdminUpdateFunctionMutation = { admin_updateEvaluationFunction: { id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> } };

export type AdminUpdateGlobalTagMutationVariables = Exact<{
  input: AdminUpdateGlobalTagInput;
}>;


export type AdminUpdateGlobalTagMutation = { admin_updateGlobalTag: { success: boolean } };

export type AdminUpdateGlobalTagsAssignmentsToStudentsMutationVariables = Exact<{
  input: AdminUpdateGlobalTagsAssignmentsInput;
}>;


export type AdminUpdateGlobalTagsAssignmentsToStudentsMutation = { admin_updateGlobalTagsAssignmentsToStudents: { success: boolean } };

export type AdminUpdateGlobalTagsAssignmentsToTeachersMutationVariables = Exact<{
  input: AdminUpdateGlobalTagsAssignmentsInput;
}>;


export type AdminUpdateGlobalTagsAssignmentsToTeachersMutation = { admin_updateGlobalTagsAssignmentsToTeachers: { success: boolean } };

export type AdminUpdateModuleMutationVariables = Exact<{
  input: AdminUpdateModuleInput;
}>;


export type AdminUpdateModuleMutation = { admin_updateModule: { id: string, name: string, slug: string, description: string } };

export type AdminUpdateModuleInstanceMutationVariables = Exact<{
  input: AdminUpdateModuleInstanceInput;
}>;


export type AdminUpdateModuleInstanceMutation = { admin_updateModuleInstance: { id: string, name: string, slug: string, startedAt: string, endedAt: string } };

export type AdminUpdateModuleInstanceTeacherRoleMutationVariables = Exact<{
  input: AdminUpdateModuleInstanceTeacherRoleInput;
}>;


export type AdminUpdateModuleInstanceTeacherRoleMutation = { admin_updateModuleInstanceTeacherRole: { success: boolean } };

export type AdminUpdateQuestionMutationVariables = Exact<{
  input: AdminUpdateQuestionInput;
}>;


export type AdminUpdateQuestionMutation = { admin_updateQuestion: { id: string, versionId: string, title: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, number: number, isSurvey: boolean, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> } };

export type AdminUpdateResponseTypeMutationVariables = Exact<{
  input: AdminUpdateResponseTypeInput;
}>;


export type AdminUpdateResponseTypeMutation = { admin_updateResponseType: { id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ id: string, name: string }> } };

export type AdminUpdateTeacherMutationVariables = Exact<{
  input: AdminUpdateTeacherInput;
}>;


export type AdminUpdateTeacherMutation = { admin_updateTeacher: { success: boolean } };

export type AdminUpdateTeacherRoleMutationVariables = Exact<{
  input: AdminUpdateTeacherRoleInput;
}>;


export type AdminUpdateTeacherRoleMutation = { admin_updateTeacherRole: { success: boolean } };

export type AdminUpdateTenantMutationVariables = Exact<{
  input: AdminUpdateTenantInput;
}>;


export type AdminUpdateTenantMutation = { admin_updateTenant: { id: string, homePageBanner?: string | null, signInBanner?: string | null, defaultRecapSchedule: RecapSchedule, textEditor: TextEditor, surveyDefaultReleasedAt?: string | null, surveyDefaultHiddenAt?: string | null } };

export type SuperadminAssignAdminMutationVariables = Exact<{
  input: SuperAdminAssignAdminInput;
}>;


export type SuperadminAssignAdminMutation = { superadmin_assignAdmin: { success: boolean } };

export type CreateSignedMediaMutationVariables = Exact<{
  input: CreateSignedImageInput;
}>;


export type CreateSignedMediaMutation = { student_createSignedImage: { url: string, post: { url: string, fields: object | number | string | boolean | null } } };

export type GetMathpixSessionMutationVariables = Exact<{ [key: string]: never; }>;


export type GetMathpixSessionMutation = { getMathpixSession: { token: string, expiresAt: number } };

export type LogButtonEventMutationVariables = Exact<{
  input: ButtonAnalyticsInput;
}>;


export type LogButtonEventMutation = { logButtonEvent: { success: boolean } };

export type LogLoginEventMutationVariables = Exact<{ [key: string]: never; }>;


export type LogLoginEventMutation = { logLoginEvent: { success: boolean } };

export type LogPdfEventMutationVariables = Exact<{
  input: PdfAnalyticsInput;
}>;


export type LogPdfEventMutation = { logPDFEvent: { success: boolean } };

export type LogQuestionAccessEventMutationVariables = Exact<{
  partId: Scalars['String'];
  universalPartId: Scalars['String'];
}>;


export type LogQuestionAccessEventMutation = { logQuestionAccessEvent: { success: boolean } };

export type LogSetAccessEventMutationVariables = Exact<{
  setId: Scalars['String'];
}>;


export type LogSetAccessEventMutation = { logSetAccessEvent: { success: boolean } };

export type MarkCompletionMutationVariables = Exact<{
  checked: Scalars['Boolean'];
  partId: Scalars['String'];
  universalPartId: Scalars['String'];
}>;


export type MarkCompletionMutation = { markCompletion: { success: boolean } };

export type StudentCreateCommentMutationVariables = Exact<{
  input: StudentCreateCommentInput;
}>;


export type StudentCreateCommentMutation = { student_createComment: { id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, comments: Array<{ id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } }>, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } } };

export type StudentCreateConversationMessagePairMutationVariables = Exact<{
  input: CreateMessagePairInput;
}>;


export type StudentCreateConversationMessagePairMutation = { createConversationMessagePair?: { id: string, createdAt: string, conversationId: string, conversationTitle?: string | null, sentMessage: string, responseMessage?: string | null, sentAt: string, responseAt?: string | null } | null };

export type StudentDeleteCommentMutationVariables = Exact<{
  input: StudentRemoveCommentInput;
}>;


export type StudentDeleteCommentMutation = { student_deleteComment: { success: boolean } };

export type StudentDemandSolutionsAccessStatusMutationVariables = Exact<{
  input: StudentSolutionsAccessInput;
}>;


export type StudentDemandSolutionsAccessStatusMutation = { student_demandSolutionsAccessStatus: { partId: string, universalPartId: string, solutionsStatus: Array<{ solutionType: SolutionType, accessStatus: StudentSolutionAccessType, estimatedMinimumTime?: string | null, timeTaken?: string | null }> } };

export type StudentToggleCommentReactionMutationVariables = Exact<{
  input: ToggleCommentReactionInput;
}>;


export type StudentToggleCommentReactionMutation = { student_toggleCommentReaction: { added: boolean, deleted: boolean } };

export type StudentUpsertCanvasMutationVariables = Exact<{
  input: UpsertCanvasInput;
}>;


export type StudentUpsertCanvasMutation = { upsertCanvas?: { snapshot: any } | null };

export type StudentUpsertSubmissionDraftMutationVariables = Exact<{
  input: UpsertSubmissionDraftInput;
}>;


export type StudentUpsertSubmissionDraftMutation = { upsertSubmissionDraft?: { snapshot: object | number | string | boolean | null, feedback?: string | null, color?: string | null, isCorrect: boolean, isError: boolean, matchedCase?: { feedback: string, color?: string | null } | null } | null };

export type SubmitResponseMutationVariables = Exact<{
  submission?: InputMaybe<Scalars['JSON']>;
  additionalParams?: InputMaybe<Scalars['JSON']>;
  responseAreaId: Scalars['String'];
  universalResponseAreaId: Scalars['String'];
}>;


export type SubmitResponseMutation = { submitResponse: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } };

export type SubmitResponsePreviewMutationVariables = Exact<{
  submission: Scalars['JSON'];
  additionalParams?: InputMaybe<Scalars['JSON']>;
  universalResponseAreaId: Scalars['String'];
  responseAreaId: Scalars['String'];
}>;


export type SubmitResponsePreviewMutation = { submitResponsePreview: { isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, preview?: object | number | string | boolean | null | null } };

export type TeacherAddStudentsMutationVariables = Exact<{
  input: TeacherAssignStudentsInput;
}>;


export type TeacherAddStudentsMutation = { teacher_assignStudents: { id: string } };

export type TeacherApproveSubmissionMutationVariables = Exact<{
  submissionId: Scalars['String'];
}>;


export type TeacherApproveSubmissionMutation = { approveSubmission: boolean };

export type TeacherAssignStudentsTagsMutationVariables = Exact<{
  input: TeacherUpdateStudentsTagsAssignmentsInput;
}>;


export type TeacherAssignStudentsTagsMutation = { teacher_assignStudentsTags: { success: boolean } };

export type TeacherAssignTeachersMutationVariables = Exact<{
  input: AdminAssignTeachersInput;
}>;


export type TeacherAssignTeachersMutation = { teacher_assignTeachers: { success: boolean } };

export type TeacherBulkApproveSubmissionsMutationVariables = Exact<{
  input: BulkModerateSubmissionsInput;
}>;


export type TeacherBulkApproveSubmissionsMutation = { bulkApproveSubmissions: boolean };

export type TeacherBulkRejectSubmissionsMutationVariables = Exact<{
  input: BulkModerateSubmissionsInput;
}>;


export type TeacherBulkRejectSubmissionsMutation = { bulkRejectSubmissions: boolean };

export type TeacherCreateCommentMutationVariables = Exact<{
  input: TeacherCreateCommentInput;
}>;


export type TeacherCreateCommentMutation = { teacher_createComment: { id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, comments: Array<{ id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } }>, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } } };

export type TeacherCreateModuleStudentTagMutationVariables = Exact<{
  input: TeacherCreateModuleStudentTagInput;
}>;


export type TeacherCreateModuleStudentTagMutation = { teacher_createModuleStudentTag: { success: boolean } };

export type TeacherCreateQuestionMutationVariables = Exact<{
  input: TeacherCreateQuestionInput;
}>;


export type TeacherCreateQuestionMutation = { teacher_createQuestion: { id: string, pdfError?: string | null } };

export type TeacherCreateSetMutationVariables = Exact<{
  input: TeacherCreateSetInput;
}>;


export type TeacherCreateSetMutation = { teacher_createSet: { id: string } };

export type TeacherCreateSignedImageMutationVariables = Exact<{
  input: CreateSignedImageInput;
}>;


export type TeacherCreateSignedImageMutation = { teacher_createSignedImage: { url: string, post: { url: string, fields: object | number | string | boolean | null } } };

export type TeacherDeleteCommentMutationVariables = Exact<{
  input: TeacherRemoveCommentInput;
}>;


export type TeacherDeleteCommentMutation = { teacher_deleteComment: { success: boolean } };

export type TeacherDeleteModuleStudentTagMutationVariables = Exact<{
  input: TeacherDeleteModuleStudentTagInput;
}>;


export type TeacherDeleteModuleStudentTagMutation = { teacher_deleteModuleStudentTag: { success: boolean } };

export type TeacherDeleteQuestionMutationVariables = Exact<{
  input: TeacherDeleteQuestionInput;
}>;


export type TeacherDeleteQuestionMutation = { teacher_deleteQuestion: { questionId?: string | null, pdfError?: string | null } };

export type TeacherDeleteSetMutationVariables = Exact<{
  input: TeacherDeleteSetInput;
}>;


export type TeacherDeleteSetMutation = { teacher_deleteSet: { success: boolean } };

export type TeacherExportQuestionMutationVariables = Exact<{
  input: TeacherExportQuestionInput;
}>;


export type TeacherExportQuestionMutation = { teacher_exportQuestion: { zippedData: string, zippedFileName: string, warnings: Array<string> } };

export type TeacherExportSetMutationVariables = Exact<{
  input: TeacherExportSetInput;
}>;


export type TeacherExportSetMutation = { teacher_exportSet: { zippedData: string, zippedFileName: string, warnings: Array<string> } };

export type TeacherExportSetAsPdfMutationVariables = Exact<{
  input: TeacherExportSetAsPdfInput;
}>;


export type TeacherExportSetAsPdfMutation = { teacher_exportSetAsPdf: { exportedPdfUrl: string, pdfError?: string | null } };

export type TeacherGetGuidanceTimeMutationVariables = Exact<{
  input: TeacherGuidanceTimeInput;
}>;


export type TeacherGetGuidanceTimeMutation = { teacher_getGuidanceTime: { upperBound: number, lowerBound: number } };

export type TeacherImportQuestionsMutationVariables = Exact<{
  input: TeacherImportQuestionsInput;
}>;


export type TeacherImportQuestionsMutation = { teacher_importQuestions: { questionIds: Array<string>, pdfError?: string | null } };

export type TeacherImportSetMutationVariables = Exact<{
  input: TeacherImportSetInput;
}>;


export type TeacherImportSetMutation = { teacher_importSet: { setId: string, pdfError?: string | null } };

export type TeacherModuleInstanceResolveActivitiesMutationVariables = Exact<{
  input: TeacherModuleInstanceResolveActivitiesInput;
}>;


export type TeacherModuleInstanceResolveActivitiesMutation = { teacher_moduleInstanceResolveActivities: { success: boolean } };

export type TeacherModuleInstanceResolveActivityMutationVariables = Exact<{
  input: TeacherModuleInstanceResolveActivityInput;
}>;


export type TeacherModuleInstanceResolveActivityMutation = { teacher_moduleInstanceResolveActivity: { success: boolean } };

export type TeacherModuleInstanceResolveFlagsMutationVariables = Exact<{
  input: TeacherModuleInstanceResolveFlagInput;
}>;


export type TeacherModuleInstanceResolveFlagsMutation = { teacher_moduleInstanceResolveFlags: { success: boolean } };

export type TeacherPublishCommentMutationVariables = Exact<{
  input: TeacherPublishCommentInput;
}>;


export type TeacherPublishCommentMutation = { teacher_publishComment: { success: boolean } };

export type TeacherPublishQuestionsMutationVariables = Exact<{
  input: TeacherPublishQuestionsInput;
}>;


export type TeacherPublishQuestionsMutation = { teacher_publishQuestions: { questionsForPublishing: Array<number>, questionsNotChanged: Array<number>, pdfError?: string | null } };

export type TeacherRejectSubmissionMutationVariables = Exact<{
  submissionId: Scalars['String'];
}>;


export type TeacherRejectSubmissionMutation = { rejectSubmission: boolean };

export type TeacherRemoveStudentMutationVariables = Exact<{
  input: TeacherRemoveStudentInput;
}>;


export type TeacherRemoveStudentMutation = { teacher_removeStudent: { success: boolean } };

export type TeacherRemoveStudentsMutationVariables = Exact<{
  input: TeacherRemoveStudentsInput;
}>;


export type TeacherRemoveStudentsMutation = { teacher_removeStudents: { success: boolean } };

export type TeacherReorderQuestionsMutationVariables = Exact<{
  input: TeacherReorderQuestionsInput;
}>;


export type TeacherReorderQuestionsMutation = { teacher_reorderQuestions: { success: boolean } };

export type TeacherReorderSetsMutationVariables = Exact<{
  input: TeacherReorderSetsInput;
}>;


export type TeacherReorderSetsMutation = { teacher_reorderSets: Array<{ id: string }> };

export type TeacherRetrieveModuleInstanceErrorsMutationVariables = Exact<{
  input: TeacherModuleInstancePaginationInput;
}>;


export type TeacherRetrieveModuleInstanceErrorsMutation = { teacher_retrieveModuleInstanceErrors: { total: number, edges: Array<{ submissionId: string, errorAt: string, resolvedAt?: string | null, studentEmail: string, rawRequest?: object | number | string | boolean | null | null, rawResponse: object | number | string | boolean | null, evaluationFunctionId?: string | null, evaluationFunctionName?: string | null, responseAreaId: string, evalutionFunctionOwnerEmail?: string | null, questionId: string, partId: string, partIndex: number, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number }> } };

export type TeacherRetrieveModuleInstanceFlagsMutationVariables = Exact<{
  input: TeacherModuleInstanceFlagsInput;
}>;


export type TeacherRetrieveModuleInstanceFlagsMutation = { teacher_retrieveModuleInstanceFlags: { total: number, edges: Array<{ id: string, flaggedAt: string, resolvedAt?: string | null, studentEmail: string, comment?: string | null, questionId: string, questionVersionId: string, partId: string, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number }> } };

export type TeacherRetrieveModuleInstanceActivitiesMutationVariables = Exact<{
  input: TeacherModuleInstanceActivitiesInput;
}>;


export type TeacherRetrieveModuleInstanceActivitiesMutation = { teacher_retrieveModuleInstanceActivities: { total: number, edges: Array<{ id: string, createdAt: string, resolvedAt?: string | null, userEmail: string, message?: string | null, questionId: string, questionTitle: string, questionNumber: number, partIndex: number, setId: string, setNumber: number, activityType: ActivityType, parentId?: string | null, responseAreaIndex?: number | null, rawResponse?: object | number | string | boolean | null | null }> } };

export type TeacherRevertToQuestionVersionMutationVariables = Exact<{
  input: TeacherRevertToQuestionVersionInput;
}>;


export type TeacherRevertToQuestionVersionMutation = { teacher_revertToQuestionVersion: { id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> } };

export type TeacherSaveImportedQuestionsMutationVariables = Exact<{
  input: TeacherSaveImportedQuestionsInput;
}>;


export type TeacherSaveImportedQuestionsMutation = { teacher_saveImportedQuestions: { importedQuestionIds: Array<string> } };

export type TeacherSubmitTestMutationVariables = Exact<{
  input: TeacherSubmitTestInput;
}>;


export type TeacherSubmitTestMutation = { teacher_submitTest: { isCorrect: boolean, isError: boolean, feedback?: string | null, submission?: object | number | string | boolean | null | null, color?: string | null, rawResponse?: object | number | string | boolean | null | null, matchedCase?: { feedback: string, color?: string | null } | null } };

export type TeacherTestSubmisionPreviewMutationVariables = Exact<{
  input: TeacherPreviewTestInput;
}>;


export type TeacherTestSubmisionPreviewMutation = { teacher_testSubmissionResponsePreview: { isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, preview?: object | number | string | boolean | null | null } };

export type TeacherToggleCommentReactionMutationVariables = Exact<{
  input: ToggleCommentReactionInput;
}>;


export type TeacherToggleCommentReactionMutation = { teacher_toggleCommentReaction: { added: boolean, deleted: boolean } };

export type TeacherToggleSetVisiblityMutationVariables = Exact<{
  input: TeacherSetVisibilityInput;
}>;


export type TeacherToggleSetVisiblityMutation = { teacher_setSetVisibility: { id: string } };

export type TeacherUnassignStudentsTagsMutationVariables = Exact<{
  input: TeacherUpdateStudentsTagsAssignmentsInput;
}>;


export type TeacherUnassignStudentsTagsMutation = { teacher_unassignStudentsTags: { success: boolean } };

export type TeacherUnassignTeachersMutationVariables = Exact<{
  input: AdminUnassignTeacherInput;
}>;


export type TeacherUnassignTeachersMutation = { teacher_unassignTeacher: { success: boolean } };

export type TeacherUpdateModuleInstanceMutationVariables = Exact<{
  input: TeacherUpdateModuleInstanceInput;
}>;


export type TeacherUpdateModuleInstanceMutation = { teacher_updateModuleInstance: { id: string, allowComments: boolean, publishCommentInstantly: boolean, allowChatbot: boolean } };

export type TeacherUpdateModuleInstanceTeacherRoleMutationVariables = Exact<{
  input: TeacherUpdateModuleInstanceTeacherRoleInput;
}>;


export type TeacherUpdateModuleInstanceTeacherRoleMutation = { teacher_updateModuleInstanceTeacherRole: { success: boolean } };

export type TeacherUpdateModuleStudentTagMutationVariables = Exact<{
  input: TeacherUpdateModuleStudentTagInput;
}>;


export type TeacherUpdateModuleStudentTagMutation = { teacher_updateModuleStudentTag: { success: boolean } };

export type TeacherUpdateQuestionMutationVariables = Exact<{
  input: TeacherUpdateQuestionInput;
}>;


export type TeacherUpdateQuestionMutation = { teacher_updateQuestion: { id: string, pdfError?: string | null } };

export type TeacherUpdateQuestionDraftMutationVariables = Exact<{
  input: TeacherUpdateQuestionInput;
}>;


export type TeacherUpdateQuestionDraftMutation = { teacher_updateQuestionDraft: { id: string } };

export type TeacherUpdateQuestionSettingsMutationVariables = Exact<{
  input: TeacherQuestionSettingsInput;
}>;


export type TeacherUpdateQuestionSettingsMutation = { teacher_updateQuestionSettings: { success: boolean } };

export type TeacherUpdateSetMutationVariables = Exact<{
  input: TeacherUpdateSetInput;
}>;


export type TeacherUpdateSetMutation = { teacher_updateSet: { id: string } };

export type TeacherUpdateSetsHeaderMutationVariables = Exact<{
  input: TeacherSetsHeaderInput;
}>;


export type TeacherUpdateSetsHeaderMutation = { teacher_updateSetsHeader: { success: boolean } };

export type TeacherUpdateStudentTagAssignmentsMutationVariables = Exact<{
  input: TeacherUpdateStudentTagAssignmentsInput;
}>;


export type TeacherUpdateStudentTagAssignmentsMutation = { teacher_updateStudentTagAssignments: { success: boolean } };

export type ToggleReactionMutationVariables = Exact<{
  input: ReactionToggleInput;
}>;


export type ToggleReactionMutation = { toggleReaction: { added: boolean, deleted: boolean } };

export type ToggleTimingReactionMutationVariables = Exact<{
  input: TimingReactionToggleInput;
}>;


export type ToggleTimingReactionMutation = { toggleTimingReaction: { added: boolean, deleted: boolean } };

export type UpdateUserSettingsMutationVariables = Exact<{
  input: UpdateUserSettingsInput;
}>;


export type UpdateUserSettingsMutation = { updateUserSettings: { success: boolean } };

export type UpsertNoteMutationVariables = Exact<{
  input: UpsertNoteInput;
}>;


export type UpsertNoteMutation = { upsertNote?: { text: string } | null };

export type AdminGetActiveModulesQueryVariables = Exact<{
  input: AdminActiveModulesInput;
}>;


export type AdminGetActiveModulesQuery = { admin_activeModules?: { activeModules: number, activeSets: number, activeQuestions: number, activeParts: number, activeResponseAreas: number, activeEvaluationFunctions: number } | null };

export type AdminGetAdminsQueryVariables = Exact<{
  input: AdminTeachersInput;
}>;


export type AdminGetAdminsQuery = { admin_teachers: { total: number, edges: Array<{ id: string, name?: string | null, email: string, role: UserRole, recapSchedule: RecapSchedule, teacherGlobalTags: Array<{ id: string, name: string }>, studentGlobalTags: Array<{ id: string, name: string }> }> } };

export type AdminGetConversationFlagsQueryVariables = Exact<{
  input: AdminConversationFlagsInput;
}>;


export type AdminGetConversationFlagsQuery = { admin_conversationFlags: { total: number, edges: Array<{ id: string, questionId: string, questionNumber: number, questionTitle: string, questionName: string, setId: string, setNumber: number, setName: string, moduleId: string, moduleSlug: string, moduleName: string, moduleInstanceId: string, moduleInstanceSlug: string, moduleInstanceName: string, conversationId: string, messagePairId: string, chatFunctionId: string, chatFunctionName: string, flagDetails: string, studentEmail: string, flaggedAt: string }> } };

export type AdminGetConversationFlagsStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetConversationFlagsStatisticsQuery = { admin_conversationFlagsStatistics?: { total: number, lastYear: number, lastMonth: number, lastWeek: number, lastDay: number } | null };

export type AdminGetEvaluationFunctionErrorsQueryVariables = Exact<{
  input: AdminEvaluationFunctionErrorsInput;
}>;


export type AdminGetEvaluationFunctionErrorsQuery = { admin_evaluationFunctionErrors: { total: number, edges: Array<{ moduleId: string, moduleName: string, moduleInstanceId: string, moduleInstanceSlug: string, setId: string, setName: string, questionId: string, questionNumber: number, questionTitle: string }> } };

export type AdminGetEvaluationFunctionGroupedErrorsQueryVariables = Exact<{
  input: AdminEvaluationFunctionGroupedErrorsInput;
}>;


export type AdminGetEvaluationFunctionGroupedErrorsQuery = { admin_evaluationFunctionGroupedErrors: { evaluationFunctionId: string, evaluationFunctionName?: string | null, total: number, edges: Array<{ feedback?: string | null, rawResponse: object | number | string | boolean | null, errorCount: number, rowId: string }> } };

export type AdminGetEvaluationFunctionStatisticsQueryVariables = Exact<{
  input: AdminEvaluationFunctionsStatisticsInput;
}>;


export type AdminGetEvaluationFunctionStatisticsQuery = { admin_evaluationFunctionsStatistics?: { total: number, edges: Array<{ id: string, name: string, responseAreaCount: number, submissionCount: number, errorCount: number, errorCountLastYear: number, errorCountLastMonth: number, errorCountLastWeek: number, errorCountLastDay: number }> } | null };

export type AdminGetFunctionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AdminGetFunctionQuery = { admin_evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> } | null };

export type AdminGetFunctionCodesAllQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetFunctionCodesAllQuery = { admin_functionCodesAll: Array<{ id: string, code: AccessCode, description: string }> };

export type AdminGetFunctionsQueryVariables = Exact<{
  input: AdminEvaluationFunctionsInput;
}>;


export type AdminGetFunctionsQuery = { admin_evaluationFunctions: { total: number, edges: Array<{ id: string, name: string, url: string, includeDefaultTest: boolean, deletedAt?: string | null, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }> }> } };

export type AdminGetGlobalTagQueryVariables = Exact<{
  input: AdminGetGlobalTagInput;
}>;


export type AdminGetGlobalTagQuery = { admin_globalTag?: { id: string, type: GlobalTagType, name: string, tagOwnerEmail?: string | null, teacherEmails: Array<string> } | null };

export type AdminGetGlobalTagsAllQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetGlobalTagsAllQuery = { admin_globalTagsAll: Array<{ id: string, type: GlobalTagType, name: string, tagOwnerEmail?: string | null, teacherEmails: Array<string> }> };

export type AdminGetGlobalTagsStatusQueryVariables = Exact<{
  input: AdminFindGlobalTagsInput;
}>;


export type AdminGetGlobalTagsStatusQuery = { admin_globalTagsStatus: { globalTagsStatus: Array<{ id: string, name: string, status: TagStatus, similarExistingTags: Array<{ id: string, name: string }>, similarOtherNewTags: Array<{ id: string, name: string }> }> } };

export type AdminGetJobModuleRolloverQueryVariables = Exact<{
  input: JobInput;
}>;


export type AdminGetJobModuleRolloverQuery = { admin_jobModuleRollover: { id: string, createdAt: string, createdByUserId: string, createdByUserEmail: string, cancelledByUserId?: string | null, cancelledByUserEmail?: string | null, jobStatus: JobStatus, startedAt?: string | null, finishedAt?: string | null, errorMessage?: string | null, metadata: object | number | string | boolean | null, newName?: string | null, newSlug?: string | null, newStartedAt?: string | null, newEndedAt?: string | null, daysOffset?: number | null, includeUnpublishedQuestions?: boolean | null, carryOverCommentSetting?: boolean | null, allowComments?: boolean | null, allowChatbot?: boolean | null, publishCommentInstantly?: boolean | null, moduleRolloverJobInstances: Array<{ id: string, jobInstanceStatus: JobInstanceStatus, startedAt?: string | null, finishedAt?: string | null, errorMessage?: string | null, moduleId: string, moduleSlug: string, sourceModuleInstanceId: string, sourceModuleInstanceSlug: string, targetModuleInstanceId?: string | null, targetModuleInstanceSlug?: string | null }> } };

export type AdminGetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetJobsQuery = { admin_jobs: Array<{ id: string, createdAt: string, createdByUserId: string, createdByUserEmail: string, cancelledByUserId?: string | null, cancelledByUserEmail?: string | null, jobStatus: JobStatus, startedAt?: string | null, finishedAt?: string | null, errorMessage?: string | null, metadata: object | number | string | boolean | null }> };

export type AdminGetMessagePairCountStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetMessagePairCountStatisticsQuery = { admin_messagePairCountStatistics?: { total: number, lastYear: number, lastMonth: number, lastWeek: number, lastDay: number } | null };

export type AdminGetMessagePairCountsQueryVariables = Exact<{
  input: AdminMessagePairCountInput;
}>;


export type AdminGetMessagePairCountsQuery = { admin_messagePairCounts: { total: number, totalCounts: number, edges: Array<{ id: string, count: number, userCount: number, questionId: string, questionNumber: number, questionTitle: string, questionName: string, setId: string, setNumber: number, setTitle: string, setName: string, moduleId: string, moduleName: string, moduleInstanceId: string, moduleInstanceName: string, chatFunctionId: string, chatFunctionName: string }> } };

export type AdminGetModuleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AdminGetModuleQuery = { admin_module?: { id: string, name: string, slug: string, description: string, deletedAt?: string | null } | null };

export type AdminGetModuleInstanceQueryVariables = Exact<{
  id: Scalars['String'];
  inputTeachers: AdminModuleInstanceTeachersInput;
}>;


export type AdminGetModuleInstanceQuery = { admin_moduleInstance?: { id: string, name: string, slug: string, startedAt: string, endedAt: string, moduleId: string, moduleName: string, moduleSlug: string, allowComments: boolean, publishCommentInstantly: boolean, teachers: Array<{ id: string, email: string, teacherRoleId: string }> } | null };

export type AdminGetModuleInstancesQueryVariables = Exact<{
  input: AdminModuleInstancesInput;
  inputTeachers: AdminModuleInstanceTeachersInput;
}>;


export type AdminGetModuleInstancesQuery = { admin_moduleInstances: { total: number, edges: Array<{ id: string, name: string, slug: string, startedAt: string, endedAt: string, deletedAt?: string | null, teachers: Array<{ email: string }> }> } };

export type AdminGetModuleInstancesForRolloverQueryVariables = Exact<{
  inputTeachers: AdminModuleInstanceTeachersInput;
}>;


export type AdminGetModuleInstancesForRolloverQuery = { admin_moduleInstancesForRollover: { total: number, edges: Array<{ id: string, name: string, slug: string, startedAt: string, endedAt: string, moduleId: string, moduleName: string, moduleSlug: string, teachers: Array<{ email: string }> }> } };

export type AdminGetModulesQueryVariables = Exact<{
  input: AdminModulesInput;
}>;


export type AdminGetModulesQuery = { admin_modules: { total: number, edges: Array<{ id: string, name: string, slug: string, description: string, deletedAt?: string | null, numberOfModuleInstances: number }> } };

export type AdminGetResponseTypeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AdminGetResponseTypeQuery = { admin_responseType: { id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ id: string, name: string }> } };

export type AdminGetResponseTypesQueryVariables = Exact<{
  input: AdminResponseTypesInput;
}>;


export type AdminGetResponseTypesQuery = { admin_responseTypes: { total: number, edges: Array<{ id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ id: string, name: string }> }> } };

export type AdminGetResponseTypesAllQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetResponseTypesAllQuery = { admin_responseTypesAll: { total: number, edges: Array<{ id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null, supportedEvaluationFunctions: Array<{ id: string, name: string }> }> } };

export type AdminGetStudentsQueryVariables = Exact<{
  input: AdminStudentsInput;
}>;


export type AdminGetStudentsQuery = { admin_students: { total: number, edges: Array<{ id: string, name?: string | null, email: string, globalTags: Array<{ id: string, name: string }> }> } };

export type AdminGetTeacherQueryVariables = Exact<{
  input: AdminGetUserInput;
}>;


export type AdminGetTeacherQuery = { admin_teacherDetails: { id: string, name?: string | null, email: string, role: UserRole, recapSchedule: RecapSchedule, teacherGlobalTagIds: Array<string>, studentGlobalTagIds: Array<string>, moduleInstances: Array<{ id: string, name: string, startedAt: string, endedAt: string, moduleId: string, moduleName: string, teacherRoleId?: string | null, tutorRoleId?: string | null, globalTagIds: Array<string> }> } };

export type AdminGetTeacherRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetTeacherRolesQuery = { admin_teacherRoles: Array<{ id: string, description: string, teacherRoleType: TeacherRoleType, teacherCount: number, moduleInstanceCount: number }> };

export type AdminGetTeachersQueryVariables = Exact<{
  input: AdminTeachersInput;
}>;


export type AdminGetTeachersQuery = { admin_teachers: { total: number, edges: Array<{ id: string, name?: string | null, email: string, role: UserRole }> } };

export type AdminGetTeachersAllQueryVariables = Exact<{
  input: AdminTeachersInput;
}>;


export type AdminGetTeachersAllQuery = { admin_teachers: { total: number, edges: Array<{ id: string, name?: string | null, email: string, role: UserRole }> } };

export type AdminGetTeachersWithModuleInstancesQueryVariables = Exact<{
  input: AdminTeachersInput;
}>;


export type AdminGetTeachersWithModuleInstancesQuery = { admin_teachers: { total: number, edges: Array<{ id: string, name?: string | null, email: string, role: UserRole, recapSchedule: RecapSchedule, teacherGlobalTags: Array<{ id: string, name: string, isTagOwner: boolean }>, studentGlobalTags: Array<{ id: string, name: string }>, moduleInstances: Array<{ id: string, name: string, startedAt: string, moduleName: string, moduleId: string }> }> } };

export type AdminGetTemplateQuestionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AdminGetTemplateQuestionQuery = { admin_templateQuestion?: { id: string, versionId: string, title: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, number: number, isSurvey: boolean, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> } | null };

export type AdminGetTemplateQuestionsQueryVariables = Exact<{
  first: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type AdminGetTemplateQuestionsQuery = { admin_templateQuestions: { total: number, edges: Array<{ id: string, versionId: string, title: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, number: number, isSurvey: boolean, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } };

export type AdminGetTenantQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetTenantQuery = { admin_tenant: { id: string, homePageBanner?: string | null, signInBanner?: string | null, defaultRecapSchedule: RecapSchedule, textEditor: TextEditor, surveyDefaultReleasedAt?: string | null, surveyDefaultHiddenAt?: string | null } };

export type AdminGetTenantTextEditorQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetTenantTextEditorQuery = { admin_tenant: { textEditor: TextEditor } };

export type AdminGetUserAccessEventsQueryVariables = Exact<{
  input: AdminUserAccessEventsInput;
}>;


export type AdminGetUserAccessEventsQuery = { admin_userAccessEvents: { userAccessEvents: Array<{ eventAccessType: string, eventUserAccess: Array<{ timePartNumber: string, accessCount: number }> }> } };

export type AdminGetUserNumbersQueryVariables = Exact<{
  input: AdminUserNumbersInput;
}>;


export type AdminGetUserNumbersQuery = { admin_userNumbers: { totalUsers: number, teacherUsers: number, studentUsers: number, adminUsers: number } };

export type AdminGetUsersStatusQueryVariables = Exact<{
  input: UserListInput;
}>;


export type AdminGetUsersStatusQuery = { admin_usersStatus: { usersWithStatus: Array<{ email: string, status: UserStatus, role?: UserRole | null, studentGlobalTagNames: Array<string>, teacherGlobalTagNames: Array<string> }> } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { me: { id: string, name?: string | null, email: string, role: UserRole, isSuperAdmin: boolean, recapSchedule: RecapSchedule } };

export type ListModuleInstanceUserPreferencesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListModuleInstanceUserPreferencesQuery = { moduleInstanceUserPreferences: { total: number, edges: Array<{ moduleInstanceId: string, key: string, value: boolean }> } };

export type GetNoteQueryVariables = Exact<{
  input: GetNoteInput;
}>;


export type GetNoteQuery = { getNote?: { text: string } | null };

export type GetQuestionReactionsQueryVariables = Exact<{
  input: ReactionsInput;
}>;


export type GetQuestionReactionsQuery = { student_reactions: { userReactions: Array<string>, reactionStats: Array<{ reaction: string, count: number }> } };

export type GetSetQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetSetQuery = { student_set?: { set?: { id: string, moduleSlug: string, moduleInstanceSlug: string, name: string, description: string, isSurvey: boolean, pdfUrl?: string | null, number: number, displayNumber: number, subjects: Array<{ userId: string, label: string }>, questions: Array<{ id: string, title: string, guidance?: string | null, skill?: number | null, durationLowerBound?: number | null, durationUpperBound?: number | null, displayChatbot: boolean, number: number, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, isAdmin: boolean, isMarkedComplete: boolean, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, structuredTutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseArea: Array<{ id: string, universalResponseAreaId: string, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, preResponseText?: string | null, postResponseText?: string | null, contentAfter?: string | null, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, submission?: { __typename: 'Submission', submissionId?: string | null, isCorrect: boolean, isError: boolean, feedback?: string | null, rawResult: object | number | string | boolean | null, submission?: object | number | string | boolean | null | null, color?: string | null, updatedAt: string, matchedCase?: { feedback: string, color?: string | null } | null } | { __typename: 'SubmissionWithoutFeedback', submissionId?: string | null, submission?: object | number | string | boolean | null | null, updatedAt: string } | null, response?: { __typename: 'StudentModularResponse', responseType: string, config?: object | number | string | boolean | null | null } | null }> }> }> } | null, error?: { code: SetErrorCode, message?: string | null } | null } | null };

export type StudentGetCanvasQueryVariables = Exact<{
  input: GetCanvasInput;
}>;


export type StudentGetCanvasQuery = { getCanvas?: { snapshot: any } | null };

export type StudentGetChatFunctionsDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentGetChatFunctionsDetailsQuery = { getChatFunctionsDetails: Array<{ id: string, name: string, description?: string | null, remoteDocsUrl?: string | null }> };

export type StudentGetCommentsQueryVariables = Exact<{
  input: StudentCommentsInput;
}>;


export type StudentGetCommentsQuery = { student_comments: { total: number, edges: Array<{ id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, comments: Array<{ id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } }>, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } }> } };

export type StudentGetConversationQueryVariables = Exact<{
  input: GetConversationInput;
}>;


export type StudentGetConversationQuery = { getConversation?: { id: string, title?: string | null, createdAt: string, messagePairs: Array<{ id: string, createdAt: string, updatedAt: string, sentMessage: string, responseMessage?: string | null, sentAt: string, responseAt?: string | null, chatFunctionId?: string | null }> } | null };

export type StudentGetDefaultChatFunctionsForTenantDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentGetDefaultChatFunctionsForTenantDetailsQuery = { getDefaultChatFunctionForTenant?: { id: string, name: string, description?: string | null, remoteDocsUrl?: string | null } | null };

export type StudentGetModuleAndDefaultInstanceQueryVariables = Exact<{
  input: StudentModuleInput;
}>;


export type StudentGetModuleAndDefaultInstanceQuery = { student_moduleDetails: { id: string, slug: string, name: string, description: string, defaultModuleInstance?: { id: string, slug: string, name: string, startedAt: string, endedAt: string, isClosed: boolean } | null } };

export type StudentGetModuleAndInstancesQueryVariables = Exact<{
  input: StudentModuleInput;
}>;


export type StudentGetModuleAndInstancesQuery = { student_moduleDetails: { id: string, slug: string, name: string, description: string, moduleInstances?: Array<{ id: string, slug: string, name: string, startedAt: string, endedAt: string }> | null } };

export type StudentGetModuleInstanceQueryVariables = Exact<{
  input: StudentModuleInstanceInput;
}>;


export type StudentGetModuleInstanceQuery = { student_moduleInstance: { id: string, slug: string, name: string, startedAt: string, endedAt: string, moduleId: string, moduleSlug: string, moduleName: string, setsHeader?: string | null, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean } };

export type StudentGetModuleInstanceAndStatsQueryVariables = Exact<{
  input: StudentModuleInstanceInput;
}>;


export type StudentGetModuleInstanceAndStatsQuery = { student_moduleInstance: { id: string, slug: string, name: string, startedAt: string, endedAt: string, moduleId: string, moduleSlug: string, moduleName: string, setsHeader?: string | null, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean, moduleInstanceStats?: { totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> } | null } };

export type StudentGetModulesQueryVariables = Exact<{
  input: StudentModulesInput;
}>;


export type StudentGetModulesQuery = { student_modules: Array<{ id: string, slug: string, name: string, defaultModuleInstance?: { id: string, slug: string, name: string, startedAt: string, endedAt: string, isClosed: boolean, moduleInstanceStats?: { totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> } | null } | null }> };

export type StudentGetQuestionPreviewsQueryVariables = Exact<{
  input: StudentQuestionPreviewsInput;
}>;


export type StudentGetQuestionPreviewsQuery = { student_questionPreviews: Array<{ id: string, setId: string, name: string, number: number, setNumber: number, setDisplayNumber: number, setName: string, title: string, markedParts: number, totalParts: number, releasedAt: string, skill: number }> };

export type StudentGetSolutionsAccessStatusQueryVariables = Exact<{
  input: StudentSolutionsAccessInput;
}>;


export type StudentGetSolutionsAccessStatusQuery = { student_solutionsAccessStatus: { partId: string, universalPartId: string, solutionsStatus: Array<{ solutionType: SolutionType, accessStatus: StudentSolutionAccessType, estimatedMinimumTime?: string | null, timeTaken?: string | null }> } };

export type StudentGetSubmissionDraftQueryVariables = Exact<{
  input: GetSubmissionDraftInput;
}>;


export type StudentGetSubmissionDraftQuery = { getSubmissionDraft?: { snapshot: object | number | string | boolean | null, feedback?: string | null, color?: string | null } | null };

export type TeacherCheckPublishQuestionsQueryVariables = Exact<{
  input: TeacherPublishQuestionsInput;
}>;


export type TeacherCheckPublishQuestionsQuery = { teacher_checkPublishQuestions: { questionsForPublishing: Array<number>, questionsNotChanged: Array<number> } };

export type TeacherGetAllModuleInstanceStudentsQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
}>;


export type TeacherGetAllModuleInstanceStudentsQuery = { teacher_allModuleInstanceStudents: Array<{ id: string, email: string }> };

export type TeacherGetAllModuleInstanceTeachersQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
}>;


export type TeacherGetAllModuleInstanceTeachersQuery = { teacher_allModuleInstanceTeachers: Array<{ id: string, email: string, name?: string | null }> };

export type TeacherGetCloneableQuestionsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type TeacherGetCloneableQuestionsQuery = { teacher_cloneableQuestions: { total: number, edges: Array<{ id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parents?: { setId: string, setNumber: number, setName: string, moduleInstanceId: string, moduleInstanceName: string, moduleId: string, moduleName: string } | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } };

export type TeacherGetCommentsQueryVariables = Exact<{
  input: TeacherCommentsInput;
}>;


export type TeacherGetCommentsQuery = { teacher_comments: { total: number, edges: Array<{ id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, comments: Array<{ id: string, comment: string, userId?: string | null, userName?: string | null, parentId?: string | null, createdAt: string, updatedAt: string, publishedAt?: string | null, createdByModuleTeacher: boolean, canUserDelete: boolean, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } }>, commentFeedback: { total: number, canUserUpvote: boolean, userUpvoted: boolean, commentReactions?: Array<{ id: string, reaction?: string | null }> | null } }> } };

export type TeacherGetFunctionQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type TeacherGetFunctionQuery = { teacher_evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, deletedAt?: string | null } | null };

export type TeacherGetFunctionsQueryVariables = Exact<{
  input: TeacherEvaluationFunctionsInput;
}>;


export type TeacherGetFunctionsQuery = { teacher_evaluationFunctions: { total: number, edges: Array<{ id: string, name: string, url: string, includeDefaultTest: boolean, remoteDocsUrl?: string | null, paramsSchema?: object | number | string | boolean | null | null, supportedTypes: Array<string>, docsContent?: string | null, deletedAt?: string | null }> } };

export type TeacherGetModuleAccessDailyStatisticsQueryVariables = Exact<{
  input: ModuleAccessStatisticsInput;
}>;


export type TeacherGetModuleAccessDailyStatisticsQuery = { teacher_moduleAccessDailyStatistics: { columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } };

export type TeacherGetModuleAccessStatisticsQueryVariables = Exact<{
  input: ModuleAccessStatisticsInput;
}>;


export type TeacherGetModuleAccessStatisticsQuery = { teacher_moduleAccessStatistics: { noOfStudents: number, graphStatistics: { columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } } };

export type TeacherGetModuleAndInstancesQueryVariables = Exact<{
  input: TeacherModuleInput;
}>;


export type TeacherGetModuleAndInstancesQuery = { teacher_moduleDetails: { id: string, slug: string, name: string, description: string, moduleInstances?: Array<{ id: string, slug: string, name: string, startedAt: string, endedAt: string }> | null } };

export type TeacherGetModuleInstanceCommentsExistQueryVariables = Exact<{
  input: TeacherCommentsExistInput;
}>;


export type TeacherGetModuleInstanceCommentsExistQuery = { teacher_commentsExist: { commentsExist: boolean } };

export type TeacherGetModuleInstanceQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
}>;


export type TeacherGetModuleInstanceQuery = { teacher_moduleInstance?: { moduleInstance?: { id: string, name: string, slug: string, startedAt: string, moduleId: string, moduleSlug: string, moduleName: string, moduleDescription: string, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean, setsHeader?: string | null, sets: Array<{ id: string, name: string, number: number, displayNumber: number, description: string, isSurvey: boolean, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, durationLowerBound: number, durationUpperBound: number, durationWithUncertainty: boolean, subjects: Array<{ userId: string, label: string }> }> } | null, error?: { code: ModuleErrorCode, message?: string | null } | null } | null };

export type TeacherGetModuleInstanceActivitiesQueryVariables = Exact<{
  input: TeacherModuleInstanceActivitiesInput;
}>;


export type TeacherGetModuleInstanceActivitiesQuery = { teacher_moduleInstanceActivities: { total: number, edges: Array<{ id: string, createdAt: string, resolvedAt?: string | null, userEmail: string, message?: string | null, questionId: string, questionTitle: string, questionNumber: number, partIndex: number, setId: string, setNumber: number, activityType: ActivityType, parentId?: string | null, responseAreaIndex?: number | null, rawResponse?: object | number | string | boolean | null | null }> } };

export type TeacherGetModuleInstanceErrorsQueryVariables = Exact<{
  input: TeacherModuleInstancePaginationInput;
}>;


export type TeacherGetModuleInstanceErrorsQuery = { teacher_moduleInstanceErrors: { total: number, edges: Array<{ submissionId: string, errorAt: string, resolvedAt?: string | null, studentEmail: string, rawRequest?: object | number | string | boolean | null | null, rawResponse: object | number | string | boolean | null, evaluationFunctionId?: string | null, evaluationFunctionName?: string | null, responseAreaId: string, evalutionFunctionOwnerEmail?: string | null, questionId: string, partId: string, partIndex: number, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number }> } };

export type TeacherGetModuleInstanceFlagsQueryVariables = Exact<{
  input: TeacherModuleInstanceFlagsInput;
}>;


export type TeacherGetModuleInstanceFlagsQuery = { teacher_moduleInstanceFlags: { total: number, edges: Array<{ id: string, flaggedAt: string, resolvedAt?: string | null, studentEmail: string, comment?: string | null, questionId: string, questionVersionId: string, partId: string, questionTitle: string, questionNumber: number, setId: string, setName: string, setNumber: number }> } };

export type TeacherGetModuleInstanceMetaQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
}>;


export type TeacherGetModuleInstanceMetaQuery = { teacher_moduleInstance?: { moduleInstance?: { id: string, name: string, slug: string, startedAt: string, moduleId: string, moduleName: string, moduleSlug: string, allowComments: boolean, allowChatbot: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean, numberOfTeachers: number, numberOfStudents: number, numberOfSets: number, numberOfComments: number, numberOfFlags: number, numberOfErrors: number } | null, error?: { code: ModuleErrorCode, message?: string | null } | null } | null };

export type TeacherGetModuleInstanceStudentStatsQueryVariables = Exact<{
  input: TeacherGetModuleInstanceStudentStatsInput;
}>;


export type TeacherGetModuleInstanceStudentStatsQuery = { teacher_moduleInstanceStudentStatistics: { id: string, slug: string, name: string, startedAt: string, endedAt: string, moduleId: string, moduleSlug: string, moduleName: string, setsHeader?: string | null, allowComments: boolean, publishCommentInstantly: boolean, isUserModuleInstanceTeacher: boolean, moduleInstanceStats?: { totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> } | null } };

export type TeacherGetModuleInstanceStudentsQueryVariables = Exact<{
  input: TeacherModuleInstanceStudentContactsInput;
}>;


export type TeacherGetModuleInstanceStudentsQuery = { teacher_moduleInstanceStudents: { total: number, edges: Array<{ id: string, email: string, name: string, studentTags: Array<{ id: string, name: string }>, studentGlobalTags: Array<{ id: string, name: string }> }> } };

export type TeacherGetModuleInstanceStudentsStatsQueryVariables = Exact<{
  input: TeacherGetModuleInstanceStudentsStatsInput;
}>;


export type TeacherGetModuleInstanceStudentsStatsQuery = { teacher_moduleInstanceStudentsStatistics: { total: number, edges: Array<{ studentId: string, stats: { totalParts: number, totalPartsCompleted: number, setPreviews: Array<{ id: string, name: string, number: number, displayNumber: number, isSurvey: boolean, description: string, isReleased: boolean, releasedAt?: string | null, totalParts: number, partsCompleted: number, completed: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, started: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }>, unstarted: Array<{ questionId: string, questionNumber: number, hasUploadedSolution: boolean }> }> } }> } };

export type TeacherGetModuleInstanceWithStudentsQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
  inputStudents: TeacherModuleInstanceStudentsInput;
}>;


export type TeacherGetModuleInstanceWithStudentsQuery = { teacher_moduleInstance?: { moduleInstance?: { id: string, name: string, slug: string, startedAt: string, moduleId: string, moduleName: string, moduleSlug: string, students: { total: number, edges: Array<{ id: string, email: string, name?: string | null }> } } | null, error?: { code: ModuleErrorCode, message?: string | null } | null } | null };

export type TeacherGetModuleInstanceWithTeachersQueryVariables = Exact<{
  input: TeacherGetModuleInstanceInput;
  inputTeachers: TeacherModuleInstanceTeachersInput;
}>;


export type TeacherGetModuleInstanceWithTeachersQuery = { teacher_moduleInstance?: { moduleInstance?: { id: string, name: string, slug: string, startedAt: string, moduleId: string, moduleName: string, moduleSlug: string, teachers: { total: number, edges: Array<{ id: string, email: string, name?: string | null, teacherRoleId: string }> } } | null, error?: { code: ModuleErrorCode, message?: string | null } | null } | null };

export type TeacherGetModuleInstancesQueryVariables = Exact<{
  input: TeacherModuleInstancesInput;
}>;


export type TeacherGetModuleInstancesQuery = { teacher_moduleInstances: { total: number, edges: Array<{ id: string, name: string, slug: string, startedAt: string, moduleName: string }> } };

export type TeacherGetModuleStudentTagsAllQueryVariables = Exact<{
  input: TeacherModuleStudentTagsInput;
}>;


export type TeacherGetModuleStudentTagsAllQuery = { teacher_moduleStudentTagsAll: Array<{ id: string, name: string }> };

export type TeacherGetModuleTeacherRoleQueryVariables = Exact<{
  input: TeacherGetModuleTeacherRoleInput;
}>;


export type TeacherGetModuleTeacherRoleQuery = { teacher_moduleTeacherRole: Array<{ id: string, description: string, teacherRoleType: TeacherRoleType, functionCodes: Array<{ id: string, code: AccessCode, description: string }> }> };

export type TeacherGetModulesQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetModulesQuery = { teacher_modules: Array<{ id: string, slug: string, name: string, description: string, instances: number, defaultModuleInstanceTeacherRoleId: string, defaultModuleInstanceTotalTeachers: number, defaultModuleInstanceTotalStudents: number, defaultModuleInstance: { id: string, slug: string, name: string, startedAt: string, endedAt: string, isClosed: boolean } }> };

export type TeacherGetModulesAccessStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetModulesAccessStatisticsQuery = { teacher_modulesAccessStatistics: { columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } };

export type TeacherGetModulesAccessWeeklyStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetModulesAccessWeeklyStatisticsQuery = { teacher_modulesAccessWeeklyStatistics: { columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } };

export type TeacherGetModulesActivitiesQueryVariables = Exact<{
  input: TeacherModulesActivitiesInput;
}>;


export type TeacherGetModulesActivitiesQuery = { teacher_modulesActivities: { total: number, edges: Array<{ activityType: ActivityType, ids: Array<string>, createdAt: string, resolvedAt?: string | null, userIds: Array<string>, userEmails: Array<string>, message?: string | null, moduleId: string, moduleInstanceId: string, moduleName: string, moduleSlug: string, moduleInstanceName: string, moduleInstanceSlug: string, moduleInstanceStartedAt: string, moduleInstanceTeacherRoleId: string, questionId: string, questionNumber: number, partIndex: number, questionTitle: string, setId: string, setNumber: number, parentId?: string | null }> } };

export type TeacherGetQuestionHistoryQueryVariables = Exact<{
  input: TeacherQuestionVersionInput;
}>;


export type TeacherGetQuestionHistoryQuery = { teacher_questionVersions: { total: number, edges: Array<{ id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } };

export type TeacherGetResponseTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetResponseTypesQuery = { teacher_responseTypes: { total: number, edges: Array<{ id: string, type: string, defaultIncludeInPdf: boolean, defaultSaveAllowed: boolean, isSaveAllowedEditable: boolean, defaultLivePreview: boolean, defaultEvaluationFunctionId?: string | null, defaultEvaluationFunctionName?: string | null }> } };

export type TeacherGetSetQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TeacherGetSetQuery = { teacher_set?: { set?: { id: string, isSurvey: boolean, name: string, number: number, displayNumber: number, description: string, releasedAt?: string | null, hiddenAt?: string | null, manuallyHiddenAt?: string | null, finalAnswerVisibility: VisibilityStatusType, workedSolutionVisibility: VisibilityStatusType, structuredTutorialVisibility: VisibilityStatusType, chatbotVisibility: VisibilityStatusType, pdfUrl?: string | null, subjects: Array<{ userId: string, label: string }>, questions: Array<{ id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } | null, error?: { code: SetErrorCode, message?: string | null } | null } | null };

export type TeacherGetSetStatisticsQueryVariables = Exact<{
  input: SetStatisticsInput;
}>;


export type TeacherGetSetStatisticsQuery = { teacher_setStatistics: { columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } };

export type TeacherGetSetTimingStatisticsQueryVariables = Exact<{
  input: SetStatisticsInput;
}>;


export type TeacherGetSetTimingStatisticsQuery = { teacher_setTimingStatistics: { columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } };

export type TeacherGetGlobalTagsAllQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetGlobalTagsAllQuery = { teacher_globalTagsAll: Array<{ id: string, name: string }> };

export type TeacherGetStudentsAccessWeeklyStatisticsQueryVariables = Exact<{
  input: StudentsStatisticsInput;
}>;


export type TeacherGetStudentsAccessWeeklyStatisticsQuery = { teacher_studentsAccessWeeklyStatistics: Array<{ studentId: string, columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, summaryLine: { key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }, moduleInstanceLines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> }> };

export type TeacherGetStudentsStatisticsQueryVariables = Exact<{
  input: StudentsStatisticsInput;
}>;


export type TeacherGetStudentsStatisticsQuery = { teacher_studentsStatistics: { summaryGraphStatistics: { columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> }, studentsModuleInstanceGraphStatistics: Array<{ studentId: string, moduleInstanceGraphStatistics: { columns: Array<{ key: string, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }>, lines: Array<{ key: string, data: any, meta: { displayName: string, shortDisplayName?: string | null, entityId?: string | null } }> } }> } };

export type TeacherGetSubmissionCountsQueryVariables = Exact<{
  input: GetSubmissionCountsInput;
}>;


export type TeacherGetSubmissionCountsQuery = { submissionCounts: { pending: number, manuallyApproved: number, manuallyRejected: number, automatic: number, total: number } };

export type TeacherGetSubmissionsQueryVariables = Exact<{
  input: GetSubmissionsInput;
}>;


export type TeacherGetSubmissionsQuery = { submissions: { total: number, submissions: Array<{ id: string, createdAt: string, submission?: object | number | string | boolean | null | null, responseType: string, responseConfig?: object | number | string | boolean | null | null, moderationStatus?: SubmissionModerationStatus | null, moderationMethod?: SubmissionModerationMethod | null, moderatedAt?: string | null, moderatedBy?: string | null, moderatorEmail?: string | null, moderatorName?: string | null, moduleId: string, moduleName: string, moduleSlug: string, moduleInstanceId: string, moduleInstanceName: string, moduleInstanceSlug: string, setId: string, setName: string, setDisplayNumber: number, questionId: string, questionTitle: string, questionDisplayNumber: number, partId: string, partIndex: number, responseAreaId: string, responseAreaDisplayPosition: number, subjects: Array<{ userId: string, label: string }> }> } };

export type TeacherGetSurveyQuestionsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type TeacherGetSurveyQuestionsQuery = { teacher_surveyQuestions: { total: number, edges: Array<{ id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } };

export type TeacherGetTeacherRoleQueryVariables = Exact<{
  input: TeacherGetTeacherRoleInput;
}>;


export type TeacherGetTeacherRoleQuery = { teacher_teacherRole?: { id: string, description: string, teacherRoleType: TeacherRoleType, functionCodes: Array<{ id: string, code: AccessCode, description: string }> } | null };

export type TeacherGetTeacherRolesQueryVariables = Exact<{
  input: TeacherGetTeacherRolesInput;
}>;


export type TeacherGetTeacherRolesQuery = { teacher_teacherRoles: Array<{ id: string, description: string, teacherRoleType: TeacherRoleType, functionCodes: Array<{ id: string, code: AccessCode, description: string }> }> };

export type TeacherGetTeacherStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherGetTeacherStudentsQuery = { teacher_teacherStudents: Array<{ id: string, email: string, globalTags: Array<{ id: string, name: string }>, modules: Array<{ id: string, name: string, moduleInstanceId: string, moduleInstanceName: string, moduleInstanceStartedAt: string, moduleInstanceEndedAt: string }> }> };

export type TeacherGetTemplateQuestionsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type TeacherGetTemplateQuestionsQuery = { teacher_templateQuestions: { total: number, edges: Array<{ id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parents?: { setId: string, setNumber: number, setName: string, moduleInstanceId: string, moduleInstanceName: string, moduleId: string, moduleName: string } | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> }> } };

export type TeacherResponseAreaStatisticsQueryVariables = Exact<{
  input: TeacherGetResponseStatisticsInput;
}>;


export type TeacherResponseAreaStatisticsQuery = { teacher_responseAreaStatistics: { parts: Array<{ position: number, areas: Array<{ position: number, responseType: string, responseConfig: object | number | string | boolean | null, answersSuppressed: boolean, suppressionReasons: Array<string>, totalSubmissionsCount: number, correctSubmissionsCount: number, studentsCount: number, correctStudentsCount: number, pendingModerationCount?: number | null, approvedModerationCount?: number | null, rejectedModerationCount?: number | null, unmoderatedSubmissionCount?: number | null, responseArea: { id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }, answers: Array<{ answer: object | number | string | boolean | null, latexAnswer?: string | null, simplifiedAnswer?: string | null, frequency: number, isCorrect?: boolean | null, feedback?: string | null, color?: string | null }> }> }>, question?: { id: string, type: QuestionVersionType, hasBeenPublished: boolean, versionId: string, ancestorVersionId?: string | null, createdAt: string, updatedAt: string, guidance?: string | null, durationLowerBound?: number | null, durationUpperBound?: number | null, skill?: number | null, title: string, number: number, displayFinalAnswer: boolean, displayStructuredTutorial: boolean, displayWorkedSolution: boolean, displayChatbot: boolean, masterContent?: string | null, parts: Array<{ id: string, universalPartId: string, content?: string | null, answerContent?: string | null, workedSolution: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, tutorial: Array<{ id: string, parentId?: string | null, title?: string | null, content?: string | null }>, responseAreas: Array<{ id: string, universalResponseAreaId: string, contentAfter?: string | null, preResponseText?: string | null, postResponseText?: string | null, livePreview: boolean, displayInputSymbols: boolean, includeInPdf: boolean, saveAllowed: boolean, separateFeedback: boolean, commonFeedbackColor?: string | null, correctFeedbackColor?: string | null, correctFeedbackPrefix?: string | null, incorrectFeedbackColor?: string | null, incorrectFeedbackPrefix?: string | null, isPublishedOrSaved: boolean, hasSubmissions: boolean, gradeParams?: object | number | string | boolean | null | null, tests: Array<{ id: string, payload: object | number | string | boolean | null, expectedResponse: object | number | string | boolean | null }>, cases: Array<{ id: string, answer: object | number | string | boolean | null, feedback: string, isCorrect: boolean, params?: object | number | string | boolean | null | null, color?: string | null }>, inputSymbols: Array<{ id: string, symbol: string, code?: string | null, aliases: Array<string>, isVisible: boolean }>, response?: { __typename: 'TeacherModularResponse', responseType: string, config?: object | number | string | boolean | null | null, answer: object | number | string | boolean | null } | null, evaluationFunction?: { id: string, name: string, url: string, includeDefaultTest: boolean, supportedTypes: Array<string>, docsContent?: string | null } | null }> }> } | null } };

export const StandardAdminConversationFlagFragmentDoc = `
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
export const StandardAdminFunctionFragmentDoc = `
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
export const StandardAdminJobFragmentDoc = `
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
export const StandardAdminMessagePairCountFragmentDoc = `
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
export const StandardModuleInstanceToCloneFragmentDoc = `
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
export const StandardAdminModuleInstanceFragmentDoc = `
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
export const StandardAdminModuleFragmentDoc = `
    fragment StandardAdminModule on AdminModule {
  id
  name
  slug
  description
  deletedAt
}
    `;
export const TeacherModularResponseFragmentDoc = `
    fragment TeacherModularResponse on TeacherModularResponse {
  __typename
  responseType
  config
  answer
}
    `;
export const StandardAdminPartFragmentDoc = `
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
    `;
export const StandardAdminQuestionFragmentDoc = `
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
    `;
export const StandardAdminResponseTypeFragmentDoc = `
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
export const StandardAdminTeacherRoleFragmentDoc = `
    fragment StandardAdminTeacherRole on AdminTeacherRole {
  id
  description
  teacherRoleType
  teacherCount
  moduleInstanceCount
}
    `;
export const StandardAdminTenantFragmentDoc = `
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
export const CommentReactionsFragmentDoc = `
    fragment CommentReactions on CommentReaction {
  id
  reaction
}
    `;
export const StandardCommentFeedbackFragmentDoc = `
    fragment StandardCommentFeedback on CommentFeedback {
  total
  canUserUpvote
  userUpvoted
  commentReactions {
    ...CommentReactions
  }
}
    `;
export const CommentFieldsFragmentDoc = `
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
    `;
export const StandardCommentFragmentDoc = `
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
    `;
export const StandardMathpixSessionResponseFragmentDoc = `
    fragment StandardMathpixSessionResponse on MathpixSessionResponse {
  token
  expiresAt
}
    `;
export const StandardMeFragmentDoc = `
    fragment StandardMe on User {
  id
  name
  email
  role
  isSuperAdmin
  recapSchedule
}
    `;
export const StandardModuleInstanceUserPreferenceFragmentDoc = `
    fragment StandardModuleInstanceUserPreference on ModuleInstanceUserPreference {
  moduleInstanceId
  key
  value
}
    `;
export const StandardModuleInstanceFragmentDoc = `
    fragment StandardModuleInstance on BaseModuleInstance {
  id
  slug
  name
  startedAt
  endedAt
  isClosed
}
    `;
export const StandardQuestionPreviewFragmentDoc = `
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
export const StandardStructuredContentFragmentDoc = `
    fragment StandardStructuredContent on StructuredContent {
  id
  parentId
  title
  content
}
    `;
export const StandardSubmissionFragmentDoc = `
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
export const StandardSubmissionWithoutFeedbackFragmentDoc = `
    fragment StandardSubmissionWithoutFeedback on SubmissionWithoutFeedback {
  submissionId
  submission
  updatedAt
}
    `;
export const StudentModularResponseFragmentDoc = `
    fragment StudentModularResponse on StudentModularResponse {
  __typename
  responseType
  config
}
    `;
export const StandardResponseAreaFragmentDoc = `
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
    `;
export const StandardPartFragmentDoc = `
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
    `;
export const StandardQuestionFragmentDoc = `
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
    `;
export const StandardSetFragmentDoc = `
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
    `;
export const StandardSetResultFragmentDoc = `
    fragment StandardSetResult on StudentSetResult {
  set {
    ...StandardSet
  }
  error {
    code
    message
  }
}
    `;
export const StandardGraphStatisticsColumnFragmentDoc = `
    fragment StandardGraphStatisticsColumn on Column {
  key
  meta {
    displayName
    shortDisplayName
    entityId
  }
}
    `;
export const StandardGraphStatisticsLineFragmentDoc = `
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
export const StandardGraphStatisticsFragmentDoc = `
    fragment StandardGraphStatistics on GraphStatistics {
  columns {
    ...StandardGraphStatisticsColumn
  }
  lines {
    ...StandardGraphStatisticsLine
  }
}
    `;
export const StandardStudentModuleInstanceFragmentDoc = `
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
export const StandardStudentGraphStatisticsFragmentDoc = `
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
    `;
export const StandardSubmissionDraftFragmentDoc = `
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
export const StandardSubmissionPreviewFragmentDoc = `
    fragment StandardSubmissionPreview on SubmissionPreview {
  isError
  feedback
  rawResult
  preview
}
    `;
export const StandardGlobalTagWithDetailsFragmentDoc = `
    fragment StandardGlobalTagWithDetails on GlobalTagWithDetails {
  id
  type
  name
  tagOwnerEmail
  teacherEmails
}
    `;
export const StandardModerationSubmissionFragmentDoc = `
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
export const StandardStudentTagFragmentDoc = `
    fragment StandardStudentTag on StudentTag {
  id
  name
}
    `;
export const StandardTeacherFunctionFragmentDoc = `
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
export const StandardTeacherModuleInstanceActivityFragmentDoc = `
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
export const StandardTeacherModuleInstanceErrorFragmentDoc = `
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
export const StandardTeacherModuleInstanceFlagFragmentDoc = `
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
export const StandardSetPreviewFragmentDoc = `
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
export const StandardModuleInstanceStatsFragmentDoc = `
    fragment StandardModuleInstanceStats on ModuleInstanceStats {
  totalParts
  totalPartsCompleted
  setPreviews {
    ...StandardSetPreview
  }
}
    `;
export const StandardTeacherModuleInstanceStudentStatsFragmentDoc = `
    fragment StandardTeacherModuleInstanceStudentStats on TeacherModuleInstanceStudentStats {
  studentId
  stats {
    ...StandardModuleInstanceStats
  }
}
    `;
export const StandardTeacherSetForModuleInstanceFragmentDoc = `
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
export const StandardTeacherModuleInstanceFragmentDoc = `
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
    `;
export const StandardTeacherModuleInstanceStudentFragmentDoc = `
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
export const StandardTeacherModulesActivityFragmentDoc = `
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
export const StandardTeacherResponseAreaFragmentDoc = `
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
    `;
export const StandardTeacherResponseStatisticsFragmentDoc = `
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
    `;
export const StandardTeacherResponseTypeFragmentDoc = `
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
export const StandardTeacherPartFragmentDoc = `
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
    `;
export const StandardTeacherQuestionFragmentDoc = `
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
    `;
export const StandardTeacherSetFragmentDoc = `
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
    `;
export const StandardTeacherSetResultFragmentDoc = `
    fragment StandardTeacherSetResult on TeacherSetResult {
  set {
    ...StandardTeacherSet
  }
  error {
    code
    message
  }
}
    `;
export const StandardGlobalTagFragmentDoc = `
    fragment StandardGlobalTag on GlobalTag {
  id
  name
}
    `;
export const StandardTeacherStudentWithGlobalTagsFragmentDoc = `
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
    `;
export const StandardTeacherSubmissionFragmentDoc = `
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
export const StandardFunctionCodeFragmentDoc = `
    fragment StandardFunctionCode on FunctionCode {
  id
  code
  description
}
    `;
export const StandardTeacherRoleFragmentDoc = `
    fragment StandardTeacherRole on TeacherRole {
  id
  description
  teacherRoleType
  functionCodes {
    ...StandardFunctionCode
  }
}
    `;
export const TeacherFieldsFragmentDoc = `
    fragment TeacherFields on Teacher {
  email
  automaticallyCreated
}
    `;
export const TeacherDetailsFragmentDoc = `
    fragment TeacherDetails on Teacher {
  email
  automaticallyCreated
}
    `;
export const AdminAddGlobalTagDocument = `
    mutation AdminAddGlobalTag($input: AdminCreateGlobalTagInput!) {
  admin_createGlobalTag(input: $input) {
    success
  }
}
    `;
export const useAdminAddGlobalTagMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminAddGlobalTagMutation, TError, AdminAddGlobalTagMutationVariables, TContext>) =>
    useMutation<AdminAddGlobalTagMutation, TError, AdminAddGlobalTagMutationVariables, TContext>(
      ['AdminAddGlobalTag'],
      (variables?: AdminAddGlobalTagMutationVariables) => fetchData<AdminAddGlobalTagMutation, AdminAddGlobalTagMutationVariables>(AdminAddGlobalTagDocument, variables)(),
      options
    );
useAdminAddGlobalTagMutation.getKey = () => ['AdminAddGlobalTag'];

useAdminAddGlobalTagMutation.fetcher = (variables: AdminAddGlobalTagMutationVariables, options?: RequestInit['headers']) => fetchData<AdminAddGlobalTagMutation, AdminAddGlobalTagMutationVariables>(AdminAddGlobalTagDocument, variables, options);
export const AdminAddGlobalTagsDocument = `
    mutation AdminAddGlobalTags($input: AdminCreateGlobalTagsInput!) {
  admin_createGlobalTags(input: $input) {
    success
    count
  }
}
    `;
export const useAdminAddGlobalTagsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminAddGlobalTagsMutation, TError, AdminAddGlobalTagsMutationVariables, TContext>) =>
    useMutation<AdminAddGlobalTagsMutation, TError, AdminAddGlobalTagsMutationVariables, TContext>(
      ['AdminAddGlobalTags'],
      (variables?: AdminAddGlobalTagsMutationVariables) => fetchData<AdminAddGlobalTagsMutation, AdminAddGlobalTagsMutationVariables>(AdminAddGlobalTagsDocument, variables)(),
      options
    );
useAdminAddGlobalTagsMutation.getKey = () => ['AdminAddGlobalTags'];

useAdminAddGlobalTagsMutation.fetcher = (variables: AdminAddGlobalTagsMutationVariables, options?: RequestInit['headers']) => fetchData<AdminAddGlobalTagsMutation, AdminAddGlobalTagsMutationVariables>(AdminAddGlobalTagsDocument, variables, options);
export const AdminAddStudentsDocument = `
    mutation AdminAddStudents($input: AdminCreateStudentsInput!) {
  admin_createStudents(input: $input) {
    success
    count
  }
}
    `;
export const useAdminAddStudentsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminAddStudentsMutation, TError, AdminAddStudentsMutationVariables, TContext>) =>
    useMutation<AdminAddStudentsMutation, TError, AdminAddStudentsMutationVariables, TContext>(
      ['AdminAddStudents'],
      (variables?: AdminAddStudentsMutationVariables) => fetchData<AdminAddStudentsMutation, AdminAddStudentsMutationVariables>(AdminAddStudentsDocument, variables)(),
      options
    );
useAdminAddStudentsMutation.getKey = () => ['AdminAddStudents'];

useAdminAddStudentsMutation.fetcher = (variables: AdminAddStudentsMutationVariables, options?: RequestInit['headers']) => fetchData<AdminAddStudentsMutation, AdminAddStudentsMutationVariables>(AdminAddStudentsDocument, variables, options);
export const AdminAddTeachersDocument = `
    mutation AdminAddTeachers($input: AdminCreateTeacherInput!) {
  admin_createTeachers(input: $input) {
    success
    count
  }
}
    `;
export const useAdminAddTeachersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminAddTeachersMutation, TError, AdminAddTeachersMutationVariables, TContext>) =>
    useMutation<AdminAddTeachersMutation, TError, AdminAddTeachersMutationVariables, TContext>(
      ['AdminAddTeachers'],
      (variables?: AdminAddTeachersMutationVariables) => fetchData<AdminAddTeachersMutation, AdminAddTeachersMutationVariables>(AdminAddTeachersDocument, variables)(),
      options
    );
useAdminAddTeachersMutation.getKey = () => ['AdminAddTeachers'];

useAdminAddTeachersMutation.fetcher = (variables: AdminAddTeachersMutationVariables, options?: RequestInit['headers']) => fetchData<AdminAddTeachersMutation, AdminAddTeachersMutationVariables>(AdminAddTeachersDocument, variables, options);
export const AdminAddTeacherRoleDocument = `
    mutation AdminAddTeacherRole($input: AdminCreateTeacherRoleInput!) {
  admin_createTeacherRole(input: $input) {
    success
  }
}
    `;
export const useAdminAddTeacherRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminAddTeacherRoleMutation, TError, AdminAddTeacherRoleMutationVariables, TContext>) =>
    useMutation<AdminAddTeacherRoleMutation, TError, AdminAddTeacherRoleMutationVariables, TContext>(
      ['AdminAddTeacherRole'],
      (variables?: AdminAddTeacherRoleMutationVariables) => fetchData<AdminAddTeacherRoleMutation, AdminAddTeacherRoleMutationVariables>(AdminAddTeacherRoleDocument, variables)(),
      options
    );
useAdminAddTeacherRoleMutation.getKey = () => ['AdminAddTeacherRole'];

useAdminAddTeacherRoleMutation.fetcher = (variables: AdminAddTeacherRoleMutationVariables, options?: RequestInit['headers']) => fetchData<AdminAddTeacherRoleMutation, AdminAddTeacherRoleMutationVariables>(AdminAddTeacherRoleDocument, variables, options);
export const AdminAssignFunctionCodesDocument = `
    mutation AdminAssignFunctionCodes($input: AdminAssignFunctionCodesInput!) {
  admin_assignFunctionCodes(input: $input) {
    success
  }
}
    `;
export const useAdminAssignFunctionCodesMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminAssignFunctionCodesMutation, TError, AdminAssignFunctionCodesMutationVariables, TContext>) =>
    useMutation<AdminAssignFunctionCodesMutation, TError, AdminAssignFunctionCodesMutationVariables, TContext>(
      ['AdminAssignFunctionCodes'],
      (variables?: AdminAssignFunctionCodesMutationVariables) => fetchData<AdminAssignFunctionCodesMutation, AdminAssignFunctionCodesMutationVariables>(AdminAssignFunctionCodesDocument, variables)(),
      options
    );
useAdminAssignFunctionCodesMutation.getKey = () => ['AdminAssignFunctionCodes'];

useAdminAssignFunctionCodesMutation.fetcher = (variables: AdminAssignFunctionCodesMutationVariables, options?: RequestInit['headers']) => fetchData<AdminAssignFunctionCodesMutation, AdminAssignFunctionCodesMutationVariables>(AdminAssignFunctionCodesDocument, variables, options);
export const AdminAssignGlobalTagsToStudentsDocument = `
    mutation AdminAssignGlobalTagsToStudents($input: AdminGlobalTagsPerUsersInput!) {
  admin_assignGlobalTagsToStudents(input: $input) {
    success
    count
  }
}
    `;
export const useAdminAssignGlobalTagsToStudentsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminAssignGlobalTagsToStudentsMutation, TError, AdminAssignGlobalTagsToStudentsMutationVariables, TContext>) =>
    useMutation<AdminAssignGlobalTagsToStudentsMutation, TError, AdminAssignGlobalTagsToStudentsMutationVariables, TContext>(
      ['AdminAssignGlobalTagsToStudents'],
      (variables?: AdminAssignGlobalTagsToStudentsMutationVariables) => fetchData<AdminAssignGlobalTagsToStudentsMutation, AdminAssignGlobalTagsToStudentsMutationVariables>(AdminAssignGlobalTagsToStudentsDocument, variables)(),
      options
    );
useAdminAssignGlobalTagsToStudentsMutation.getKey = () => ['AdminAssignGlobalTagsToStudents'];

useAdminAssignGlobalTagsToStudentsMutation.fetcher = (variables: AdminAssignGlobalTagsToStudentsMutationVariables, options?: RequestInit['headers']) => fetchData<AdminAssignGlobalTagsToStudentsMutation, AdminAssignGlobalTagsToStudentsMutationVariables>(AdminAssignGlobalTagsToStudentsDocument, variables, options);
export const AdminAssignGlobalTagsToTeachersDocument = `
    mutation AdminAssignGlobalTagsToTeachers($input: AdminGlobalTagsPerUsersInput!) {
  admin_assignGlobalTagsToTeachers(input: $input) {
    success
    count
  }
}
    `;
export const useAdminAssignGlobalTagsToTeachersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminAssignGlobalTagsToTeachersMutation, TError, AdminAssignGlobalTagsToTeachersMutationVariables, TContext>) =>
    useMutation<AdminAssignGlobalTagsToTeachersMutation, TError, AdminAssignGlobalTagsToTeachersMutationVariables, TContext>(
      ['AdminAssignGlobalTagsToTeachers'],
      (variables?: AdminAssignGlobalTagsToTeachersMutationVariables) => fetchData<AdminAssignGlobalTagsToTeachersMutation, AdminAssignGlobalTagsToTeachersMutationVariables>(AdminAssignGlobalTagsToTeachersDocument, variables)(),
      options
    );
useAdminAssignGlobalTagsToTeachersMutation.getKey = () => ['AdminAssignGlobalTagsToTeachers'];

useAdminAssignGlobalTagsToTeachersMutation.fetcher = (variables: AdminAssignGlobalTagsToTeachersMutationVariables, options?: RequestInit['headers']) => fetchData<AdminAssignGlobalTagsToTeachersMutation, AdminAssignGlobalTagsToTeachersMutationVariables>(AdminAssignGlobalTagsToTeachersDocument, variables, options);
export const AdminAssignTeachersDocument = `
    mutation AdminAssignTeachers($input: AdminAssignTeachersInput!) {
  admin_assignTeachers(input: $input) {
    id
    teachers {
      ...TeacherFields
    }
  }
}
    ${TeacherFieldsFragmentDoc}`;
export const useAdminAssignTeachersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminAssignTeachersMutation, TError, AdminAssignTeachersMutationVariables, TContext>) =>
    useMutation<AdminAssignTeachersMutation, TError, AdminAssignTeachersMutationVariables, TContext>(
      ['AdminAssignTeachers'],
      (variables?: AdminAssignTeachersMutationVariables) => fetchData<AdminAssignTeachersMutation, AdminAssignTeachersMutationVariables>(AdminAssignTeachersDocument, variables)(),
      options
    );
useAdminAssignTeachersMutation.getKey = () => ['AdminAssignTeachers'];

useAdminAssignTeachersMutation.fetcher = (variables: AdminAssignTeachersMutationVariables, options?: RequestInit['headers']) => fetchData<AdminAssignTeachersMutation, AdminAssignTeachersMutationVariables>(AdminAssignTeachersDocument, variables, options);
export const AdminBulkAssignGlobalTagsToStudentsDocument = `
    mutation AdminBulkAssignGlobalTagsToStudents($input: AdminGlobalTagsInput!) {
  admin_bulkAssignGlobalTagsToStudents(input: $input) {
    success
  }
}
    `;
export const useAdminBulkAssignGlobalTagsToStudentsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminBulkAssignGlobalTagsToStudentsMutation, TError, AdminBulkAssignGlobalTagsToStudentsMutationVariables, TContext>) =>
    useMutation<AdminBulkAssignGlobalTagsToStudentsMutation, TError, AdminBulkAssignGlobalTagsToStudentsMutationVariables, TContext>(
      ['AdminBulkAssignGlobalTagsToStudents'],
      (variables?: AdminBulkAssignGlobalTagsToStudentsMutationVariables) => fetchData<AdminBulkAssignGlobalTagsToStudentsMutation, AdminBulkAssignGlobalTagsToStudentsMutationVariables>(AdminBulkAssignGlobalTagsToStudentsDocument, variables)(),
      options
    );
useAdminBulkAssignGlobalTagsToStudentsMutation.getKey = () => ['AdminBulkAssignGlobalTagsToStudents'];

useAdminBulkAssignGlobalTagsToStudentsMutation.fetcher = (variables: AdminBulkAssignGlobalTagsToStudentsMutationVariables, options?: RequestInit['headers']) => fetchData<AdminBulkAssignGlobalTagsToStudentsMutation, AdminBulkAssignGlobalTagsToStudentsMutationVariables>(AdminBulkAssignGlobalTagsToStudentsDocument, variables, options);
export const AdminBulkAssignGlobalTagsToTeachersDocument = `
    mutation AdminBulkAssignGlobalTagsToTeachers($input: AdminGlobalTagsInput!) {
  admin_bulkAssignGlobalTagsToTeachers(input: $input) {
    success
  }
}
    `;
export const useAdminBulkAssignGlobalTagsToTeachersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminBulkAssignGlobalTagsToTeachersMutation, TError, AdminBulkAssignGlobalTagsToTeachersMutationVariables, TContext>) =>
    useMutation<AdminBulkAssignGlobalTagsToTeachersMutation, TError, AdminBulkAssignGlobalTagsToTeachersMutationVariables, TContext>(
      ['AdminBulkAssignGlobalTagsToTeachers'],
      (variables?: AdminBulkAssignGlobalTagsToTeachersMutationVariables) => fetchData<AdminBulkAssignGlobalTagsToTeachersMutation, AdminBulkAssignGlobalTagsToTeachersMutationVariables>(AdminBulkAssignGlobalTagsToTeachersDocument, variables)(),
      options
    );
useAdminBulkAssignGlobalTagsToTeachersMutation.getKey = () => ['AdminBulkAssignGlobalTagsToTeachers'];

useAdminBulkAssignGlobalTagsToTeachersMutation.fetcher = (variables: AdminBulkAssignGlobalTagsToTeachersMutationVariables, options?: RequestInit['headers']) => fetchData<AdminBulkAssignGlobalTagsToTeachersMutation, AdminBulkAssignGlobalTagsToTeachersMutationVariables>(AdminBulkAssignGlobalTagsToTeachersDocument, variables, options);
export const AdminBulkUnassignGlobalTagsFromStudentsDocument = `
    mutation AdminBulkUnassignGlobalTagsFromStudents($input: AdminGlobalTagsInput!) {
  admin_bulkUnassignGlobalTagsFromStudents(input: $input) {
    success
  }
}
    `;
export const useAdminBulkUnassignGlobalTagsFromStudentsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminBulkUnassignGlobalTagsFromStudentsMutation, TError, AdminBulkUnassignGlobalTagsFromStudentsMutationVariables, TContext>) =>
    useMutation<AdminBulkUnassignGlobalTagsFromStudentsMutation, TError, AdminBulkUnassignGlobalTagsFromStudentsMutationVariables, TContext>(
      ['AdminBulkUnassignGlobalTagsFromStudents'],
      (variables?: AdminBulkUnassignGlobalTagsFromStudentsMutationVariables) => fetchData<AdminBulkUnassignGlobalTagsFromStudentsMutation, AdminBulkUnassignGlobalTagsFromStudentsMutationVariables>(AdminBulkUnassignGlobalTagsFromStudentsDocument, variables)(),
      options
    );
useAdminBulkUnassignGlobalTagsFromStudentsMutation.getKey = () => ['AdminBulkUnassignGlobalTagsFromStudents'];

useAdminBulkUnassignGlobalTagsFromStudentsMutation.fetcher = (variables: AdminBulkUnassignGlobalTagsFromStudentsMutationVariables, options?: RequestInit['headers']) => fetchData<AdminBulkUnassignGlobalTagsFromStudentsMutation, AdminBulkUnassignGlobalTagsFromStudentsMutationVariables>(AdminBulkUnassignGlobalTagsFromStudentsDocument, variables, options);
export const AdminBulkUnassignGlobalTagsFromTeachersDocument = `
    mutation AdminBulkUnassignGlobalTagsFromTeachers($input: AdminGlobalTagsInput!) {
  admin_bulkUnassignGlobalTagsFromTeachers(input: $input) {
    success
  }
}
    `;
export const useAdminBulkUnassignGlobalTagsFromTeachersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminBulkUnassignGlobalTagsFromTeachersMutation, TError, AdminBulkUnassignGlobalTagsFromTeachersMutationVariables, TContext>) =>
    useMutation<AdminBulkUnassignGlobalTagsFromTeachersMutation, TError, AdminBulkUnassignGlobalTagsFromTeachersMutationVariables, TContext>(
      ['AdminBulkUnassignGlobalTagsFromTeachers'],
      (variables?: AdminBulkUnassignGlobalTagsFromTeachersMutationVariables) => fetchData<AdminBulkUnassignGlobalTagsFromTeachersMutation, AdminBulkUnassignGlobalTagsFromTeachersMutationVariables>(AdminBulkUnassignGlobalTagsFromTeachersDocument, variables)(),
      options
    );
useAdminBulkUnassignGlobalTagsFromTeachersMutation.getKey = () => ['AdminBulkUnassignGlobalTagsFromTeachers'];

useAdminBulkUnassignGlobalTagsFromTeachersMutation.fetcher = (variables: AdminBulkUnassignGlobalTagsFromTeachersMutationVariables, options?: RequestInit['headers']) => fetchData<AdminBulkUnassignGlobalTagsFromTeachersMutation, AdminBulkUnassignGlobalTagsFromTeachersMutationVariables>(AdminBulkUnassignGlobalTagsFromTeachersDocument, variables, options);
export const AdminCancelJobDocument = `
    mutation AdminCancelJob($input: JobInput!) {
  admin_cancelJob(input: $input) {
    success
  }
}
    `;
export const useAdminCancelJobMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminCancelJobMutation, TError, AdminCancelJobMutationVariables, TContext>) =>
    useMutation<AdminCancelJobMutation, TError, AdminCancelJobMutationVariables, TContext>(
      ['AdminCancelJob'],
      (variables?: AdminCancelJobMutationVariables) => fetchData<AdminCancelJobMutation, AdminCancelJobMutationVariables>(AdminCancelJobDocument, variables)(),
      options
    );
useAdminCancelJobMutation.getKey = () => ['AdminCancelJob'];

useAdminCancelJobMutation.fetcher = (variables: AdminCancelJobMutationVariables, options?: RequestInit['headers']) => fetchData<AdminCancelJobMutation, AdminCancelJobMutationVariables>(AdminCancelJobDocument, variables, options);
export const AdminCloneModuleInstanceDocument = `
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
export const useAdminCloneModuleInstanceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminCloneModuleInstanceMutation, TError, AdminCloneModuleInstanceMutationVariables, TContext>) =>
    useMutation<AdminCloneModuleInstanceMutation, TError, AdminCloneModuleInstanceMutationVariables, TContext>(
      ['AdminCloneModuleInstance'],
      (variables?: AdminCloneModuleInstanceMutationVariables) => fetchData<AdminCloneModuleInstanceMutation, AdminCloneModuleInstanceMutationVariables>(AdminCloneModuleInstanceDocument, variables)(),
      options
    );
useAdminCloneModuleInstanceMutation.getKey = () => ['AdminCloneModuleInstance'];

useAdminCloneModuleInstanceMutation.fetcher = (variables: AdminCloneModuleInstanceMutationVariables, options?: RequestInit['headers']) => fetchData<AdminCloneModuleInstanceMutation, AdminCloneModuleInstanceMutationVariables>(AdminCloneModuleInstanceDocument, variables, options);
export const AdminCreateFunctionDocument = `
    mutation AdminCreateFunction($input: AdminCreateEvaluationFunctionInput!) {
  admin_createEvaluationFunction(input: $input) {
    ...StandardAdminFunction
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const useAdminCreateFunctionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminCreateFunctionMutation, TError, AdminCreateFunctionMutationVariables, TContext>) =>
    useMutation<AdminCreateFunctionMutation, TError, AdminCreateFunctionMutationVariables, TContext>(
      ['AdminCreateFunction'],
      (variables?: AdminCreateFunctionMutationVariables) => fetchData<AdminCreateFunctionMutation, AdminCreateFunctionMutationVariables>(AdminCreateFunctionDocument, variables)(),
      options
    );
useAdminCreateFunctionMutation.getKey = () => ['AdminCreateFunction'];

useAdminCreateFunctionMutation.fetcher = (variables: AdminCreateFunctionMutationVariables, options?: RequestInit['headers']) => fetchData<AdminCreateFunctionMutation, AdminCreateFunctionMutationVariables>(AdminCreateFunctionDocument, variables, options);
export const AdminCreateModuleDocument = `
    mutation AdminCreateModule($input: AdminCreateModuleInput!) {
  admin_createModule(input: $input) {
    id
    name
    slug
    description
  }
}
    `;
export const useAdminCreateModuleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminCreateModuleMutation, TError, AdminCreateModuleMutationVariables, TContext>) =>
    useMutation<AdminCreateModuleMutation, TError, AdminCreateModuleMutationVariables, TContext>(
      ['AdminCreateModule'],
      (variables?: AdminCreateModuleMutationVariables) => fetchData<AdminCreateModuleMutation, AdminCreateModuleMutationVariables>(AdminCreateModuleDocument, variables)(),
      options
    );
useAdminCreateModuleMutation.getKey = () => ['AdminCreateModule'];

useAdminCreateModuleMutation.fetcher = (variables: AdminCreateModuleMutationVariables, options?: RequestInit['headers']) => fetchData<AdminCreateModuleMutation, AdminCreateModuleMutationVariables>(AdminCreateModuleDocument, variables, options);
export const AdminCreateModuleInstanceDocument = `
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
export const useAdminCreateModuleInstanceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminCreateModuleInstanceMutation, TError, AdminCreateModuleInstanceMutationVariables, TContext>) =>
    useMutation<AdminCreateModuleInstanceMutation, TError, AdminCreateModuleInstanceMutationVariables, TContext>(
      ['AdminCreateModuleInstance'],
      (variables?: AdminCreateModuleInstanceMutationVariables) => fetchData<AdminCreateModuleInstanceMutation, AdminCreateModuleInstanceMutationVariables>(AdminCreateModuleInstanceDocument, variables)(),
      options
    );
useAdminCreateModuleInstanceMutation.getKey = () => ['AdminCreateModuleInstance'];

useAdminCreateModuleInstanceMutation.fetcher = (variables: AdminCreateModuleInstanceMutationVariables, options?: RequestInit['headers']) => fetchData<AdminCreateModuleInstanceMutation, AdminCreateModuleInstanceMutationVariables>(AdminCreateModuleInstanceDocument, variables, options);
export const AdminCreateResponseTypeDocument = `
    mutation AdminCreateResponseType($input: AdminCreateResponseTypeInput!) {
  admin_createResponseType(input: $input) {
    ...StandardAdminResponseType
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const useAdminCreateResponseTypeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminCreateResponseTypeMutation, TError, AdminCreateResponseTypeMutationVariables, TContext>) =>
    useMutation<AdminCreateResponseTypeMutation, TError, AdminCreateResponseTypeMutationVariables, TContext>(
      ['AdminCreateResponseType'],
      (variables?: AdminCreateResponseTypeMutationVariables) => fetchData<AdminCreateResponseTypeMutation, AdminCreateResponseTypeMutationVariables>(AdminCreateResponseTypeDocument, variables)(),
      options
    );
useAdminCreateResponseTypeMutation.getKey = () => ['AdminCreateResponseType'];

useAdminCreateResponseTypeMutation.fetcher = (variables: AdminCreateResponseTypeMutationVariables, options?: RequestInit['headers']) => fetchData<AdminCreateResponseTypeMutation, AdminCreateResponseTypeMutationVariables>(AdminCreateResponseTypeDocument, variables, options);
export const AdminCreateTemplateQuestionDocument = `
    mutation AdminCreateTemplateQuestion($input: AdminCreateTemplateQuestionInput!) {
  admin_createTemplateQuestion(input: $input) {
    ...StandardAdminQuestion
  }
}
    ${StandardAdminQuestionFragmentDoc}
${StandardAdminPartFragmentDoc}
${TeacherModularResponseFragmentDoc}`;
export const useAdminCreateTemplateQuestionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminCreateTemplateQuestionMutation, TError, AdminCreateTemplateQuestionMutationVariables, TContext>) =>
    useMutation<AdminCreateTemplateQuestionMutation, TError, AdminCreateTemplateQuestionMutationVariables, TContext>(
      ['AdminCreateTemplateQuestion'],
      (variables?: AdminCreateTemplateQuestionMutationVariables) => fetchData<AdminCreateTemplateQuestionMutation, AdminCreateTemplateQuestionMutationVariables>(AdminCreateTemplateQuestionDocument, variables)(),
      options
    );
useAdminCreateTemplateQuestionMutation.getKey = () => ['AdminCreateTemplateQuestion'];

useAdminCreateTemplateQuestionMutation.fetcher = (variables: AdminCreateTemplateQuestionMutationVariables, options?: RequestInit['headers']) => fetchData<AdminCreateTemplateQuestionMutation, AdminCreateTemplateQuestionMutationVariables>(AdminCreateTemplateQuestionDocument, variables, options);
export const AdminDeleteFunctionDocument = `
    mutation AdminDeleteFunction($input: AdminRemoveEvaluationFunctionInput!) {
  admin_deleteEvaluationFunction(input: $input) {
    ...StandardAdminFunction
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const useAdminDeleteFunctionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminDeleteFunctionMutation, TError, AdminDeleteFunctionMutationVariables, TContext>) =>
    useMutation<AdminDeleteFunctionMutation, TError, AdminDeleteFunctionMutationVariables, TContext>(
      ['AdminDeleteFunction'],
      (variables?: AdminDeleteFunctionMutationVariables) => fetchData<AdminDeleteFunctionMutation, AdminDeleteFunctionMutationVariables>(AdminDeleteFunctionDocument, variables)(),
      options
    );
useAdminDeleteFunctionMutation.getKey = () => ['AdminDeleteFunction'];

useAdminDeleteFunctionMutation.fetcher = (variables: AdminDeleteFunctionMutationVariables, options?: RequestInit['headers']) => fetchData<AdminDeleteFunctionMutation, AdminDeleteFunctionMutationVariables>(AdminDeleteFunctionDocument, variables, options);
export const AdminDeleteGlobalTagDocument = `
    mutation AdminDeleteGlobalTag($input: AdminDeleteGlobalTagInput!) {
  admin_deleteGlobalTag(input: $input) {
    success
  }
}
    `;
export const useAdminDeleteGlobalTagMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminDeleteGlobalTagMutation, TError, AdminDeleteGlobalTagMutationVariables, TContext>) =>
    useMutation<AdminDeleteGlobalTagMutation, TError, AdminDeleteGlobalTagMutationVariables, TContext>(
      ['AdminDeleteGlobalTag'],
      (variables?: AdminDeleteGlobalTagMutationVariables) => fetchData<AdminDeleteGlobalTagMutation, AdminDeleteGlobalTagMutationVariables>(AdminDeleteGlobalTagDocument, variables)(),
      options
    );
useAdminDeleteGlobalTagMutation.getKey = () => ['AdminDeleteGlobalTag'];

useAdminDeleteGlobalTagMutation.fetcher = (variables: AdminDeleteGlobalTagMutationVariables, options?: RequestInit['headers']) => fetchData<AdminDeleteGlobalTagMutation, AdminDeleteGlobalTagMutationVariables>(AdminDeleteGlobalTagDocument, variables, options);
export const AdminDeleteModuleDocument = `
    mutation AdminDeleteModule($input: AdminRemoveModuleInput!) {
  admin_deleteModule(input: $input) {
    ...StandardAdminModule
  }
}
    ${StandardAdminModuleFragmentDoc}`;
export const useAdminDeleteModuleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminDeleteModuleMutation, TError, AdminDeleteModuleMutationVariables, TContext>) =>
    useMutation<AdminDeleteModuleMutation, TError, AdminDeleteModuleMutationVariables, TContext>(
      ['AdminDeleteModule'],
      (variables?: AdminDeleteModuleMutationVariables) => fetchData<AdminDeleteModuleMutation, AdminDeleteModuleMutationVariables>(AdminDeleteModuleDocument, variables)(),
      options
    );
useAdminDeleteModuleMutation.getKey = () => ['AdminDeleteModule'];

useAdminDeleteModuleMutation.fetcher = (variables: AdminDeleteModuleMutationVariables, options?: RequestInit['headers']) => fetchData<AdminDeleteModuleMutation, AdminDeleteModuleMutationVariables>(AdminDeleteModuleDocument, variables, options);
export const AdminDeleteModuleInstanceDocument = `
    mutation AdminDeleteModuleInstance($input: AdminRemoveModuleInstanceInput!) {
  admin_deleteModuleInstance(input: $input) {
    ...StandardAdminModuleInstance
  }
}
    ${StandardAdminModuleInstanceFragmentDoc}`;
export const useAdminDeleteModuleInstanceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminDeleteModuleInstanceMutation, TError, AdminDeleteModuleInstanceMutationVariables, TContext>) =>
    useMutation<AdminDeleteModuleInstanceMutation, TError, AdminDeleteModuleInstanceMutationVariables, TContext>(
      ['AdminDeleteModuleInstance'],
      (variables?: AdminDeleteModuleInstanceMutationVariables) => fetchData<AdminDeleteModuleInstanceMutation, AdminDeleteModuleInstanceMutationVariables>(AdminDeleteModuleInstanceDocument, variables)(),
      options
    );
useAdminDeleteModuleInstanceMutation.getKey = () => ['AdminDeleteModuleInstance'];

useAdminDeleteModuleInstanceMutation.fetcher = (variables: AdminDeleteModuleInstanceMutationVariables, options?: RequestInit['headers']) => fetchData<AdminDeleteModuleInstanceMutation, AdminDeleteModuleInstanceMutationVariables>(AdminDeleteModuleInstanceDocument, variables, options);
export const AdminDeleteQuestionDocument = `
    mutation AdminDeleteQuestion($input: AdminDeleteQuestionInput!) {
  admin_deleteQuestion(input: $input) {
    success
  }
}
    `;
export const useAdminDeleteQuestionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminDeleteQuestionMutation, TError, AdminDeleteQuestionMutationVariables, TContext>) =>
    useMutation<AdminDeleteQuestionMutation, TError, AdminDeleteQuestionMutationVariables, TContext>(
      ['AdminDeleteQuestion'],
      (variables?: AdminDeleteQuestionMutationVariables) => fetchData<AdminDeleteQuestionMutation, AdminDeleteQuestionMutationVariables>(AdminDeleteQuestionDocument, variables)(),
      options
    );
useAdminDeleteQuestionMutation.getKey = () => ['AdminDeleteQuestion'];

useAdminDeleteQuestionMutation.fetcher = (variables: AdminDeleteQuestionMutationVariables, options?: RequestInit['headers']) => fetchData<AdminDeleteQuestionMutation, AdminDeleteQuestionMutationVariables>(AdminDeleteQuestionDocument, variables, options);
export const AdminDeleteResponseTypeDocument = `
    mutation AdminDeleteResponseType($input: AdminRemoveResponseTypeInput!) {
  admin_deleteResponseType(input: $input) {
    ...StandardAdminResponseType
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const useAdminDeleteResponseTypeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminDeleteResponseTypeMutation, TError, AdminDeleteResponseTypeMutationVariables, TContext>) =>
    useMutation<AdminDeleteResponseTypeMutation, TError, AdminDeleteResponseTypeMutationVariables, TContext>(
      ['AdminDeleteResponseType'],
      (variables?: AdminDeleteResponseTypeMutationVariables) => fetchData<AdminDeleteResponseTypeMutation, AdminDeleteResponseTypeMutationVariables>(AdminDeleteResponseTypeDocument, variables)(),
      options
    );
useAdminDeleteResponseTypeMutation.getKey = () => ['AdminDeleteResponseType'];

useAdminDeleteResponseTypeMutation.fetcher = (variables: AdminDeleteResponseTypeMutationVariables, options?: RequestInit['headers']) => fetchData<AdminDeleteResponseTypeMutation, AdminDeleteResponseTypeMutationVariables>(AdminDeleteResponseTypeDocument, variables, options);
export const AdminDeleteTeacherDocument = `
    mutation AdminDeleteTeacher($input: AdminDeleteTeacherInput!) {
  admin_deleteTeacher(input: $input) {
    success
  }
}
    `;
export const useAdminDeleteTeacherMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminDeleteTeacherMutation, TError, AdminDeleteTeacherMutationVariables, TContext>) =>
    useMutation<AdminDeleteTeacherMutation, TError, AdminDeleteTeacherMutationVariables, TContext>(
      ['AdminDeleteTeacher'],
      (variables?: AdminDeleteTeacherMutationVariables) => fetchData<AdminDeleteTeacherMutation, AdminDeleteTeacherMutationVariables>(AdminDeleteTeacherDocument, variables)(),
      options
    );
useAdminDeleteTeacherMutation.getKey = () => ['AdminDeleteTeacher'];

useAdminDeleteTeacherMutation.fetcher = (variables: AdminDeleteTeacherMutationVariables, options?: RequestInit['headers']) => fetchData<AdminDeleteTeacherMutation, AdminDeleteTeacherMutationVariables>(AdminDeleteTeacherDocument, variables, options);
export const AdminDeleteTeacherRoleDocument = `
    mutation AdminDeleteTeacherRole($input: AdminDeleteTeacherRoleInput!) {
  admin_deleteTeacherRole(input: $input) {
    success
  }
}
    `;
export const useAdminDeleteTeacherRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminDeleteTeacherRoleMutation, TError, AdminDeleteTeacherRoleMutationVariables, TContext>) =>
    useMutation<AdminDeleteTeacherRoleMutation, TError, AdminDeleteTeacherRoleMutationVariables, TContext>(
      ['AdminDeleteTeacherRole'],
      (variables?: AdminDeleteTeacherRoleMutationVariables) => fetchData<AdminDeleteTeacherRoleMutation, AdminDeleteTeacherRoleMutationVariables>(AdminDeleteTeacherRoleDocument, variables)(),
      options
    );
useAdminDeleteTeacherRoleMutation.getKey = () => ['AdminDeleteTeacherRole'];

useAdminDeleteTeacherRoleMutation.fetcher = (variables: AdminDeleteTeacherRoleMutationVariables, options?: RequestInit['headers']) => fetchData<AdminDeleteTeacherRoleMutation, AdminDeleteTeacherRoleMutationVariables>(AdminDeleteTeacherRoleDocument, variables, options);
export const AdminDemoteAdminDocument = `
    mutation AdminDemoteAdmin($input: AdminDemoteAdminInput!) {
  admin_demoteAdmin(input: $input) {
    success
  }
}
    `;
export const useAdminDemoteAdminMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminDemoteAdminMutation, TError, AdminDemoteAdminMutationVariables, TContext>) =>
    useMutation<AdminDemoteAdminMutation, TError, AdminDemoteAdminMutationVariables, TContext>(
      ['AdminDemoteAdmin'],
      (variables?: AdminDemoteAdminMutationVariables) => fetchData<AdminDemoteAdminMutation, AdminDemoteAdminMutationVariables>(AdminDemoteAdminDocument, variables)(),
      options
    );
useAdminDemoteAdminMutation.getKey = () => ['AdminDemoteAdmin'];

useAdminDemoteAdminMutation.fetcher = (variables: AdminDemoteAdminMutationVariables, options?: RequestInit['headers']) => fetchData<AdminDemoteAdminMutation, AdminDemoteAdminMutationVariables>(AdminDemoteAdminDocument, variables, options);
export const AdminReplaceAndDeleteTeacherRoleDocument = `
    mutation AdminReplaceAndDeleteTeacherRole($input: AdminReplaceAndDeleteTeacherRoleInput!) {
  admin_replaceAndDeleteTeacherRole(input: $input) {
    success
  }
}
    `;
export const useAdminReplaceAndDeleteTeacherRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminReplaceAndDeleteTeacherRoleMutation, TError, AdminReplaceAndDeleteTeacherRoleMutationVariables, TContext>) =>
    useMutation<AdminReplaceAndDeleteTeacherRoleMutation, TError, AdminReplaceAndDeleteTeacherRoleMutationVariables, TContext>(
      ['AdminReplaceAndDeleteTeacherRole'],
      (variables?: AdminReplaceAndDeleteTeacherRoleMutationVariables) => fetchData<AdminReplaceAndDeleteTeacherRoleMutation, AdminReplaceAndDeleteTeacherRoleMutationVariables>(AdminReplaceAndDeleteTeacherRoleDocument, variables)(),
      options
    );
useAdminReplaceAndDeleteTeacherRoleMutation.getKey = () => ['AdminReplaceAndDeleteTeacherRole'];

useAdminReplaceAndDeleteTeacherRoleMutation.fetcher = (variables: AdminReplaceAndDeleteTeacherRoleMutationVariables, options?: RequestInit['headers']) => fetchData<AdminReplaceAndDeleteTeacherRoleMutation, AdminReplaceAndDeleteTeacherRoleMutationVariables>(AdminReplaceAndDeleteTeacherRoleDocument, variables, options);
export const AdminRestoreFunctionDocument = `
    mutation AdminRestoreFunction($input: AdminRestoreEvaluationFunctionInput!) {
  admin_restoreEvaluationFunction(input: $input) {
    ...StandardAdminFunction
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const useAdminRestoreFunctionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminRestoreFunctionMutation, TError, AdminRestoreFunctionMutationVariables, TContext>) =>
    useMutation<AdminRestoreFunctionMutation, TError, AdminRestoreFunctionMutationVariables, TContext>(
      ['AdminRestoreFunction'],
      (variables?: AdminRestoreFunctionMutationVariables) => fetchData<AdminRestoreFunctionMutation, AdminRestoreFunctionMutationVariables>(AdminRestoreFunctionDocument, variables)(),
      options
    );
useAdminRestoreFunctionMutation.getKey = () => ['AdminRestoreFunction'];

useAdminRestoreFunctionMutation.fetcher = (variables: AdminRestoreFunctionMutationVariables, options?: RequestInit['headers']) => fetchData<AdminRestoreFunctionMutation, AdminRestoreFunctionMutationVariables>(AdminRestoreFunctionDocument, variables, options);
export const AdminRestoreModuleDocument = `
    mutation AdminRestoreModule($input: AdminRestoreModuleInput!) {
  admin_restoreModule(input: $input) {
    ...StandardAdminModule
  }
}
    ${StandardAdminModuleFragmentDoc}`;
export const useAdminRestoreModuleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminRestoreModuleMutation, TError, AdminRestoreModuleMutationVariables, TContext>) =>
    useMutation<AdminRestoreModuleMutation, TError, AdminRestoreModuleMutationVariables, TContext>(
      ['AdminRestoreModule'],
      (variables?: AdminRestoreModuleMutationVariables) => fetchData<AdminRestoreModuleMutation, AdminRestoreModuleMutationVariables>(AdminRestoreModuleDocument, variables)(),
      options
    );
useAdminRestoreModuleMutation.getKey = () => ['AdminRestoreModule'];

useAdminRestoreModuleMutation.fetcher = (variables: AdminRestoreModuleMutationVariables, options?: RequestInit['headers']) => fetchData<AdminRestoreModuleMutation, AdminRestoreModuleMutationVariables>(AdminRestoreModuleDocument, variables, options);
export const AdminRestoreModuleInstanceDocument = `
    mutation AdminRestoreModuleInstance($input: AdminRestoreModuleInstanceInput!) {
  admin_restoreModuleInstance(input: $input) {
    ...StandardAdminModuleInstance
  }
}
    ${StandardAdminModuleInstanceFragmentDoc}`;
export const useAdminRestoreModuleInstanceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminRestoreModuleInstanceMutation, TError, AdminRestoreModuleInstanceMutationVariables, TContext>) =>
    useMutation<AdminRestoreModuleInstanceMutation, TError, AdminRestoreModuleInstanceMutationVariables, TContext>(
      ['AdminRestoreModuleInstance'],
      (variables?: AdminRestoreModuleInstanceMutationVariables) => fetchData<AdminRestoreModuleInstanceMutation, AdminRestoreModuleInstanceMutationVariables>(AdminRestoreModuleInstanceDocument, variables)(),
      options
    );
useAdminRestoreModuleInstanceMutation.getKey = () => ['AdminRestoreModuleInstance'];

useAdminRestoreModuleInstanceMutation.fetcher = (variables: AdminRestoreModuleInstanceMutationVariables, options?: RequestInit['headers']) => fetchData<AdminRestoreModuleInstanceMutation, AdminRestoreModuleInstanceMutationVariables>(AdminRestoreModuleInstanceDocument, variables, options);
export const AdminRunJobModuleRolloverDocument = `
    mutation AdminRunJobModuleRollover($input: RunJobModuleRolloverInput!) {
  admin_runJobModuleRollover(input: $input) {
    jobId
  }
}
    `;
export const useAdminRunJobModuleRolloverMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminRunJobModuleRolloverMutation, TError, AdminRunJobModuleRolloverMutationVariables, TContext>) =>
    useMutation<AdminRunJobModuleRolloverMutation, TError, AdminRunJobModuleRolloverMutationVariables, TContext>(
      ['AdminRunJobModuleRollover'],
      (variables?: AdminRunJobModuleRolloverMutationVariables) => fetchData<AdminRunJobModuleRolloverMutation, AdminRunJobModuleRolloverMutationVariables>(AdminRunJobModuleRolloverDocument, variables)(),
      options
    );
useAdminRunJobModuleRolloverMutation.getKey = () => ['AdminRunJobModuleRollover'];

useAdminRunJobModuleRolloverMutation.fetcher = (variables: AdminRunJobModuleRolloverMutationVariables, options?: RequestInit['headers']) => fetchData<AdminRunJobModuleRolloverMutation, AdminRunJobModuleRolloverMutationVariables>(AdminRunJobModuleRolloverDocument, variables, options);
export const AdminUnassignFunctionCodesDocument = `
    mutation AdminUnassignFunctionCodes($input: AdminAssignFunctionCodesInput!) {
  admin_unassignFunctionCodes(input: $input) {
    success
  }
}
    `;
export const useAdminUnassignFunctionCodesMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUnassignFunctionCodesMutation, TError, AdminUnassignFunctionCodesMutationVariables, TContext>) =>
    useMutation<AdminUnassignFunctionCodesMutation, TError, AdminUnassignFunctionCodesMutationVariables, TContext>(
      ['AdminUnassignFunctionCodes'],
      (variables?: AdminUnassignFunctionCodesMutationVariables) => fetchData<AdminUnassignFunctionCodesMutation, AdminUnassignFunctionCodesMutationVariables>(AdminUnassignFunctionCodesDocument, variables)(),
      options
    );
useAdminUnassignFunctionCodesMutation.getKey = () => ['AdminUnassignFunctionCodes'];

useAdminUnassignFunctionCodesMutation.fetcher = (variables: AdminUnassignFunctionCodesMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUnassignFunctionCodesMutation, AdminUnassignFunctionCodesMutationVariables>(AdminUnassignFunctionCodesDocument, variables, options);
export const AdminUnassignTeacherDocument = `
    mutation AdminUnassignTeacher($input: AdminUnassignTeacherInput!) {
  admin_unassignTeacher(input: $input) {
    success
  }
}
    `;
export const useAdminUnassignTeacherMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUnassignTeacherMutation, TError, AdminUnassignTeacherMutationVariables, TContext>) =>
    useMutation<AdminUnassignTeacherMutation, TError, AdminUnassignTeacherMutationVariables, TContext>(
      ['AdminUnassignTeacher'],
      (variables?: AdminUnassignTeacherMutationVariables) => fetchData<AdminUnassignTeacherMutation, AdminUnassignTeacherMutationVariables>(AdminUnassignTeacherDocument, variables)(),
      options
    );
useAdminUnassignTeacherMutation.getKey = () => ['AdminUnassignTeacher'];

useAdminUnassignTeacherMutation.fetcher = (variables: AdminUnassignTeacherMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUnassignTeacherMutation, AdminUnassignTeacherMutationVariables>(AdminUnassignTeacherDocument, variables, options);
export const AdminUpdateAdminDocument = `
    mutation AdminUpdateAdmin($input: AdminUpdateAdminInput!) {
  admin_updateAdmin(input: $input) {
    success
  }
}
    `;
export const useAdminUpdateAdminMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateAdminMutation, TError, AdminUpdateAdminMutationVariables, TContext>) =>
    useMutation<AdminUpdateAdminMutation, TError, AdminUpdateAdminMutationVariables, TContext>(
      ['AdminUpdateAdmin'],
      (variables?: AdminUpdateAdminMutationVariables) => fetchData<AdminUpdateAdminMutation, AdminUpdateAdminMutationVariables>(AdminUpdateAdminDocument, variables)(),
      options
    );
useAdminUpdateAdminMutation.getKey = () => ['AdminUpdateAdmin'];

useAdminUpdateAdminMutation.fetcher = (variables: AdminUpdateAdminMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateAdminMutation, AdminUpdateAdminMutationVariables>(AdminUpdateAdminDocument, variables, options);
export const AdminUpdateFunctionDocument = `
    mutation AdminUpdateFunction($input: AdminUpdateEvaluationFunctionInput!) {
  admin_updateEvaluationFunction(input: $input) {
    ...StandardAdminFunction
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const useAdminUpdateFunctionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateFunctionMutation, TError, AdminUpdateFunctionMutationVariables, TContext>) =>
    useMutation<AdminUpdateFunctionMutation, TError, AdminUpdateFunctionMutationVariables, TContext>(
      ['AdminUpdateFunction'],
      (variables?: AdminUpdateFunctionMutationVariables) => fetchData<AdminUpdateFunctionMutation, AdminUpdateFunctionMutationVariables>(AdminUpdateFunctionDocument, variables)(),
      options
    );
useAdminUpdateFunctionMutation.getKey = () => ['AdminUpdateFunction'];

useAdminUpdateFunctionMutation.fetcher = (variables: AdminUpdateFunctionMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateFunctionMutation, AdminUpdateFunctionMutationVariables>(AdminUpdateFunctionDocument, variables, options);
export const AdminUpdateGlobalTagDocument = `
    mutation AdminUpdateGlobalTag($input: AdminUpdateGlobalTagInput!) {
  admin_updateGlobalTag(input: $input) {
    success
  }
}
    `;
export const useAdminUpdateGlobalTagMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateGlobalTagMutation, TError, AdminUpdateGlobalTagMutationVariables, TContext>) =>
    useMutation<AdminUpdateGlobalTagMutation, TError, AdminUpdateGlobalTagMutationVariables, TContext>(
      ['AdminUpdateGlobalTag'],
      (variables?: AdminUpdateGlobalTagMutationVariables) => fetchData<AdminUpdateGlobalTagMutation, AdminUpdateGlobalTagMutationVariables>(AdminUpdateGlobalTagDocument, variables)(),
      options
    );
useAdminUpdateGlobalTagMutation.getKey = () => ['AdminUpdateGlobalTag'];

useAdminUpdateGlobalTagMutation.fetcher = (variables: AdminUpdateGlobalTagMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateGlobalTagMutation, AdminUpdateGlobalTagMutationVariables>(AdminUpdateGlobalTagDocument, variables, options);
export const AdminUpdateGlobalTagsAssignmentsToStudentsDocument = `
    mutation AdminUpdateGlobalTagsAssignmentsToStudents($input: AdminUpdateGlobalTagsAssignmentsInput!) {
  admin_updateGlobalTagsAssignmentsToStudents(input: $input) {
    success
  }
}
    `;
export const useAdminUpdateGlobalTagsAssignmentsToStudentsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateGlobalTagsAssignmentsToStudentsMutation, TError, AdminUpdateGlobalTagsAssignmentsToStudentsMutationVariables, TContext>) =>
    useMutation<AdminUpdateGlobalTagsAssignmentsToStudentsMutation, TError, AdminUpdateGlobalTagsAssignmentsToStudentsMutationVariables, TContext>(
      ['AdminUpdateGlobalTagsAssignmentsToStudents'],
      (variables?: AdminUpdateGlobalTagsAssignmentsToStudentsMutationVariables) => fetchData<AdminUpdateGlobalTagsAssignmentsToStudentsMutation, AdminUpdateGlobalTagsAssignmentsToStudentsMutationVariables>(AdminUpdateGlobalTagsAssignmentsToStudentsDocument, variables)(),
      options
    );
useAdminUpdateGlobalTagsAssignmentsToStudentsMutation.getKey = () => ['AdminUpdateGlobalTagsAssignmentsToStudents'];

useAdminUpdateGlobalTagsAssignmentsToStudentsMutation.fetcher = (variables: AdminUpdateGlobalTagsAssignmentsToStudentsMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateGlobalTagsAssignmentsToStudentsMutation, AdminUpdateGlobalTagsAssignmentsToStudentsMutationVariables>(AdminUpdateGlobalTagsAssignmentsToStudentsDocument, variables, options);
export const AdminUpdateGlobalTagsAssignmentsToTeachersDocument = `
    mutation AdminUpdateGlobalTagsAssignmentsToTeachers($input: AdminUpdateGlobalTagsAssignmentsInput!) {
  admin_updateGlobalTagsAssignmentsToTeachers(input: $input) {
    success
  }
}
    `;
export const useAdminUpdateGlobalTagsAssignmentsToTeachersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateGlobalTagsAssignmentsToTeachersMutation, TError, AdminUpdateGlobalTagsAssignmentsToTeachersMutationVariables, TContext>) =>
    useMutation<AdminUpdateGlobalTagsAssignmentsToTeachersMutation, TError, AdminUpdateGlobalTagsAssignmentsToTeachersMutationVariables, TContext>(
      ['AdminUpdateGlobalTagsAssignmentsToTeachers'],
      (variables?: AdminUpdateGlobalTagsAssignmentsToTeachersMutationVariables) => fetchData<AdminUpdateGlobalTagsAssignmentsToTeachersMutation, AdminUpdateGlobalTagsAssignmentsToTeachersMutationVariables>(AdminUpdateGlobalTagsAssignmentsToTeachersDocument, variables)(),
      options
    );
useAdminUpdateGlobalTagsAssignmentsToTeachersMutation.getKey = () => ['AdminUpdateGlobalTagsAssignmentsToTeachers'];

useAdminUpdateGlobalTagsAssignmentsToTeachersMutation.fetcher = (variables: AdminUpdateGlobalTagsAssignmentsToTeachersMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateGlobalTagsAssignmentsToTeachersMutation, AdminUpdateGlobalTagsAssignmentsToTeachersMutationVariables>(AdminUpdateGlobalTagsAssignmentsToTeachersDocument, variables, options);
export const AdminUpdateModuleDocument = `
    mutation AdminUpdateModule($input: AdminUpdateModuleInput!) {
  admin_updateModule(input: $input) {
    id
    name
    slug
    description
  }
}
    `;
export const useAdminUpdateModuleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateModuleMutation, TError, AdminUpdateModuleMutationVariables, TContext>) =>
    useMutation<AdminUpdateModuleMutation, TError, AdminUpdateModuleMutationVariables, TContext>(
      ['AdminUpdateModule'],
      (variables?: AdminUpdateModuleMutationVariables) => fetchData<AdminUpdateModuleMutation, AdminUpdateModuleMutationVariables>(AdminUpdateModuleDocument, variables)(),
      options
    );
useAdminUpdateModuleMutation.getKey = () => ['AdminUpdateModule'];

useAdminUpdateModuleMutation.fetcher = (variables: AdminUpdateModuleMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateModuleMutation, AdminUpdateModuleMutationVariables>(AdminUpdateModuleDocument, variables, options);
export const AdminUpdateModuleInstanceDocument = `
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
export const useAdminUpdateModuleInstanceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateModuleInstanceMutation, TError, AdminUpdateModuleInstanceMutationVariables, TContext>) =>
    useMutation<AdminUpdateModuleInstanceMutation, TError, AdminUpdateModuleInstanceMutationVariables, TContext>(
      ['AdminUpdateModuleInstance'],
      (variables?: AdminUpdateModuleInstanceMutationVariables) => fetchData<AdminUpdateModuleInstanceMutation, AdminUpdateModuleInstanceMutationVariables>(AdminUpdateModuleInstanceDocument, variables)(),
      options
    );
useAdminUpdateModuleInstanceMutation.getKey = () => ['AdminUpdateModuleInstance'];

useAdminUpdateModuleInstanceMutation.fetcher = (variables: AdminUpdateModuleInstanceMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateModuleInstanceMutation, AdminUpdateModuleInstanceMutationVariables>(AdminUpdateModuleInstanceDocument, variables, options);
export const AdminUpdateModuleInstanceTeacherRoleDocument = `
    mutation AdminUpdateModuleInstanceTeacherRole($input: AdminUpdateModuleInstanceTeacherRoleInput!) {
  admin_updateModuleInstanceTeacherRole(input: $input) {
    success
  }
}
    `;
export const useAdminUpdateModuleInstanceTeacherRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateModuleInstanceTeacherRoleMutation, TError, AdminUpdateModuleInstanceTeacherRoleMutationVariables, TContext>) =>
    useMutation<AdminUpdateModuleInstanceTeacherRoleMutation, TError, AdminUpdateModuleInstanceTeacherRoleMutationVariables, TContext>(
      ['AdminUpdateModuleInstanceTeacherRole'],
      (variables?: AdminUpdateModuleInstanceTeacherRoleMutationVariables) => fetchData<AdminUpdateModuleInstanceTeacherRoleMutation, AdminUpdateModuleInstanceTeacherRoleMutationVariables>(AdminUpdateModuleInstanceTeacherRoleDocument, variables)(),
      options
    );
useAdminUpdateModuleInstanceTeacherRoleMutation.getKey = () => ['AdminUpdateModuleInstanceTeacherRole'];

useAdminUpdateModuleInstanceTeacherRoleMutation.fetcher = (variables: AdminUpdateModuleInstanceTeacherRoleMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateModuleInstanceTeacherRoleMutation, AdminUpdateModuleInstanceTeacherRoleMutationVariables>(AdminUpdateModuleInstanceTeacherRoleDocument, variables, options);
export const AdminUpdateQuestionDocument = `
    mutation AdminUpdateQuestion($input: AdminUpdateQuestionInput!) {
  admin_updateQuestion(input: $input) {
    ...StandardAdminQuestion
  }
}
    ${StandardAdminQuestionFragmentDoc}
${StandardAdminPartFragmentDoc}
${TeacherModularResponseFragmentDoc}`;
export const useAdminUpdateQuestionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateQuestionMutation, TError, AdminUpdateQuestionMutationVariables, TContext>) =>
    useMutation<AdminUpdateQuestionMutation, TError, AdminUpdateQuestionMutationVariables, TContext>(
      ['AdminUpdateQuestion'],
      (variables?: AdminUpdateQuestionMutationVariables) => fetchData<AdminUpdateQuestionMutation, AdminUpdateQuestionMutationVariables>(AdminUpdateQuestionDocument, variables)(),
      options
    );
useAdminUpdateQuestionMutation.getKey = () => ['AdminUpdateQuestion'];

useAdminUpdateQuestionMutation.fetcher = (variables: AdminUpdateQuestionMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateQuestionMutation, AdminUpdateQuestionMutationVariables>(AdminUpdateQuestionDocument, variables, options);
export const AdminUpdateResponseTypeDocument = `
    mutation AdminUpdateResponseType($input: AdminUpdateResponseTypeInput!) {
  admin_updateResponseType(input: $input) {
    ...StandardAdminResponseType
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const useAdminUpdateResponseTypeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateResponseTypeMutation, TError, AdminUpdateResponseTypeMutationVariables, TContext>) =>
    useMutation<AdminUpdateResponseTypeMutation, TError, AdminUpdateResponseTypeMutationVariables, TContext>(
      ['AdminUpdateResponseType'],
      (variables?: AdminUpdateResponseTypeMutationVariables) => fetchData<AdminUpdateResponseTypeMutation, AdminUpdateResponseTypeMutationVariables>(AdminUpdateResponseTypeDocument, variables)(),
      options
    );
useAdminUpdateResponseTypeMutation.getKey = () => ['AdminUpdateResponseType'];

useAdminUpdateResponseTypeMutation.fetcher = (variables: AdminUpdateResponseTypeMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateResponseTypeMutation, AdminUpdateResponseTypeMutationVariables>(AdminUpdateResponseTypeDocument, variables, options);
export const AdminUpdateTeacherDocument = `
    mutation AdminUpdateTeacher($input: AdminUpdateTeacherInput!) {
  admin_updateTeacher(input: $input) {
    success
  }
}
    `;
export const useAdminUpdateTeacherMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateTeacherMutation, TError, AdminUpdateTeacherMutationVariables, TContext>) =>
    useMutation<AdminUpdateTeacherMutation, TError, AdminUpdateTeacherMutationVariables, TContext>(
      ['AdminUpdateTeacher'],
      (variables?: AdminUpdateTeacherMutationVariables) => fetchData<AdminUpdateTeacherMutation, AdminUpdateTeacherMutationVariables>(AdminUpdateTeacherDocument, variables)(),
      options
    );
useAdminUpdateTeacherMutation.getKey = () => ['AdminUpdateTeacher'];

useAdminUpdateTeacherMutation.fetcher = (variables: AdminUpdateTeacherMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateTeacherMutation, AdminUpdateTeacherMutationVariables>(AdminUpdateTeacherDocument, variables, options);
export const AdminUpdateTeacherRoleDocument = `
    mutation AdminUpdateTeacherRole($input: AdminUpdateTeacherRoleInput!) {
  admin_updateTeacherRole(input: $input) {
    success
  }
}
    `;
export const useAdminUpdateTeacherRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateTeacherRoleMutation, TError, AdminUpdateTeacherRoleMutationVariables, TContext>) =>
    useMutation<AdminUpdateTeacherRoleMutation, TError, AdminUpdateTeacherRoleMutationVariables, TContext>(
      ['AdminUpdateTeacherRole'],
      (variables?: AdminUpdateTeacherRoleMutationVariables) => fetchData<AdminUpdateTeacherRoleMutation, AdminUpdateTeacherRoleMutationVariables>(AdminUpdateTeacherRoleDocument, variables)(),
      options
    );
useAdminUpdateTeacherRoleMutation.getKey = () => ['AdminUpdateTeacherRole'];

useAdminUpdateTeacherRoleMutation.fetcher = (variables: AdminUpdateTeacherRoleMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateTeacherRoleMutation, AdminUpdateTeacherRoleMutationVariables>(AdminUpdateTeacherRoleDocument, variables, options);
export const AdminUpdateTenantDocument = `
    mutation AdminUpdateTenant($input: AdminUpdateTenantInput!) {
  admin_updateTenant(input: $input) {
    ...StandardAdminTenant
  }
}
    ${StandardAdminTenantFragmentDoc}`;
export const useAdminUpdateTenantMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AdminUpdateTenantMutation, TError, AdminUpdateTenantMutationVariables, TContext>) =>
    useMutation<AdminUpdateTenantMutation, TError, AdminUpdateTenantMutationVariables, TContext>(
      ['AdminUpdateTenant'],
      (variables?: AdminUpdateTenantMutationVariables) => fetchData<AdminUpdateTenantMutation, AdminUpdateTenantMutationVariables>(AdminUpdateTenantDocument, variables)(),
      options
    );
useAdminUpdateTenantMutation.getKey = () => ['AdminUpdateTenant'];

useAdminUpdateTenantMutation.fetcher = (variables: AdminUpdateTenantMutationVariables, options?: RequestInit['headers']) => fetchData<AdminUpdateTenantMutation, AdminUpdateTenantMutationVariables>(AdminUpdateTenantDocument, variables, options);
export const SuperadminAssignAdminDocument = `
    mutation SuperadminAssignAdmin($input: SuperAdminAssignAdminInput!) {
  superadmin_assignAdmin(input: $input) {
    success
  }
}
    `;
export const useSuperadminAssignAdminMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SuperadminAssignAdminMutation, TError, SuperadminAssignAdminMutationVariables, TContext>) =>
    useMutation<SuperadminAssignAdminMutation, TError, SuperadminAssignAdminMutationVariables, TContext>(
      ['SuperadminAssignAdmin'],
      (variables?: SuperadminAssignAdminMutationVariables) => fetchData<SuperadminAssignAdminMutation, SuperadminAssignAdminMutationVariables>(SuperadminAssignAdminDocument, variables)(),
      options
    );
useSuperadminAssignAdminMutation.getKey = () => ['SuperadminAssignAdmin'];

useSuperadminAssignAdminMutation.fetcher = (variables: SuperadminAssignAdminMutationVariables, options?: RequestInit['headers']) => fetchData<SuperadminAssignAdminMutation, SuperadminAssignAdminMutationVariables>(SuperadminAssignAdminDocument, variables, options);
export const CreateSignedMediaDocument = `
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
export const useCreateSignedMediaMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateSignedMediaMutation, TError, CreateSignedMediaMutationVariables, TContext>) =>
    useMutation<CreateSignedMediaMutation, TError, CreateSignedMediaMutationVariables, TContext>(
      ['CreateSignedMedia'],
      (variables?: CreateSignedMediaMutationVariables) => fetchData<CreateSignedMediaMutation, CreateSignedMediaMutationVariables>(CreateSignedMediaDocument, variables)(),
      options
    );
useCreateSignedMediaMutation.getKey = () => ['CreateSignedMedia'];

useCreateSignedMediaMutation.fetcher = (variables: CreateSignedMediaMutationVariables, options?: RequestInit['headers']) => fetchData<CreateSignedMediaMutation, CreateSignedMediaMutationVariables>(CreateSignedMediaDocument, variables, options);
export const GetMathpixSessionDocument = `
    mutation getMathpixSession {
  getMathpixSession {
    ...StandardMathpixSessionResponse
  }
}
    ${StandardMathpixSessionResponseFragmentDoc}`;
export const useGetMathpixSessionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<GetMathpixSessionMutation, TError, GetMathpixSessionMutationVariables, TContext>) =>
    useMutation<GetMathpixSessionMutation, TError, GetMathpixSessionMutationVariables, TContext>(
      ['getMathpixSession'],
      (variables?: GetMathpixSessionMutationVariables) => fetchData<GetMathpixSessionMutation, GetMathpixSessionMutationVariables>(GetMathpixSessionDocument, variables)(),
      options
    );
useGetMathpixSessionMutation.getKey = () => ['getMathpixSession'];

useGetMathpixSessionMutation.fetcher = (variables?: GetMathpixSessionMutationVariables, options?: RequestInit['headers']) => fetchData<GetMathpixSessionMutation, GetMathpixSessionMutationVariables>(GetMathpixSessionDocument, variables, options);
export const LogButtonEventDocument = `
    mutation logButtonEvent($input: ButtonAnalyticsInput!) {
  logButtonEvent(input: $input) {
    success
  }
}
    `;
export const useLogButtonEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LogButtonEventMutation, TError, LogButtonEventMutationVariables, TContext>) =>
    useMutation<LogButtonEventMutation, TError, LogButtonEventMutationVariables, TContext>(
      ['logButtonEvent'],
      (variables?: LogButtonEventMutationVariables) => fetchData<LogButtonEventMutation, LogButtonEventMutationVariables>(LogButtonEventDocument, variables)(),
      options
    );
useLogButtonEventMutation.getKey = () => ['logButtonEvent'];

useLogButtonEventMutation.fetcher = (variables: LogButtonEventMutationVariables, options?: RequestInit['headers']) => fetchData<LogButtonEventMutation, LogButtonEventMutationVariables>(LogButtonEventDocument, variables, options);
export const LogLoginEventDocument = `
    mutation logLoginEvent {
  logLoginEvent {
    success
  }
}
    `;
export const useLogLoginEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LogLoginEventMutation, TError, LogLoginEventMutationVariables, TContext>) =>
    useMutation<LogLoginEventMutation, TError, LogLoginEventMutationVariables, TContext>(
      ['logLoginEvent'],
      (variables?: LogLoginEventMutationVariables) => fetchData<LogLoginEventMutation, LogLoginEventMutationVariables>(LogLoginEventDocument, variables)(),
      options
    );
useLogLoginEventMutation.getKey = () => ['logLoginEvent'];

useLogLoginEventMutation.fetcher = (variables?: LogLoginEventMutationVariables, options?: RequestInit['headers']) => fetchData<LogLoginEventMutation, LogLoginEventMutationVariables>(LogLoginEventDocument, variables, options);
export const LogPdfEventDocument = `
    mutation logPDFEvent($input: PDFAnalyticsInput!) {
  logPDFEvent(input: $input) {
    success
  }
}
    `;
export const useLogPdfEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LogPdfEventMutation, TError, LogPdfEventMutationVariables, TContext>) =>
    useMutation<LogPdfEventMutation, TError, LogPdfEventMutationVariables, TContext>(
      ['logPDFEvent'],
      (variables?: LogPdfEventMutationVariables) => fetchData<LogPdfEventMutation, LogPdfEventMutationVariables>(LogPdfEventDocument, variables)(),
      options
    );
useLogPdfEventMutation.getKey = () => ['logPDFEvent'];

useLogPdfEventMutation.fetcher = (variables: LogPdfEventMutationVariables, options?: RequestInit['headers']) => fetchData<LogPdfEventMutation, LogPdfEventMutationVariables>(LogPdfEventDocument, variables, options);
export const LogQuestionAccessEventDocument = `
    mutation logQuestionAccessEvent($partId: String!, $universalPartId: String!) {
  logQuestionAccessEvent(
    input: {partId: $partId, universalPartId: $universalPartId}
  ) {
    success
  }
}
    `;
export const useLogQuestionAccessEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LogQuestionAccessEventMutation, TError, LogQuestionAccessEventMutationVariables, TContext>) =>
    useMutation<LogQuestionAccessEventMutation, TError, LogQuestionAccessEventMutationVariables, TContext>(
      ['logQuestionAccessEvent'],
      (variables?: LogQuestionAccessEventMutationVariables) => fetchData<LogQuestionAccessEventMutation, LogQuestionAccessEventMutationVariables>(LogQuestionAccessEventDocument, variables)(),
      options
    );
useLogQuestionAccessEventMutation.getKey = () => ['logQuestionAccessEvent'];

useLogQuestionAccessEventMutation.fetcher = (variables: LogQuestionAccessEventMutationVariables, options?: RequestInit['headers']) => fetchData<LogQuestionAccessEventMutation, LogQuestionAccessEventMutationVariables>(LogQuestionAccessEventDocument, variables, options);
export const LogSetAccessEventDocument = `
    mutation logSetAccessEvent($setId: String!) {
  logSetAccessEvent(input: {setId: $setId}) {
    success
  }
}
    `;
export const useLogSetAccessEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LogSetAccessEventMutation, TError, LogSetAccessEventMutationVariables, TContext>) =>
    useMutation<LogSetAccessEventMutation, TError, LogSetAccessEventMutationVariables, TContext>(
      ['logSetAccessEvent'],
      (variables?: LogSetAccessEventMutationVariables) => fetchData<LogSetAccessEventMutation, LogSetAccessEventMutationVariables>(LogSetAccessEventDocument, variables)(),
      options
    );
useLogSetAccessEventMutation.getKey = () => ['logSetAccessEvent'];

useLogSetAccessEventMutation.fetcher = (variables: LogSetAccessEventMutationVariables, options?: RequestInit['headers']) => fetchData<LogSetAccessEventMutation, LogSetAccessEventMutationVariables>(LogSetAccessEventDocument, variables, options);
export const MarkCompletionDocument = `
    mutation markCompletion($checked: Boolean!, $partId: String!, $universalPartId: String!) {
  markCompletion(
    input: {checked: $checked, universalPartId: $universalPartId, partId: $partId}
  ) {
    success
  }
}
    `;
export const useMarkCompletionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<MarkCompletionMutation, TError, MarkCompletionMutationVariables, TContext>) =>
    useMutation<MarkCompletionMutation, TError, MarkCompletionMutationVariables, TContext>(
      ['markCompletion'],
      (variables?: MarkCompletionMutationVariables) => fetchData<MarkCompletionMutation, MarkCompletionMutationVariables>(MarkCompletionDocument, variables)(),
      options
    );
useMarkCompletionMutation.getKey = () => ['markCompletion'];

useMarkCompletionMutation.fetcher = (variables: MarkCompletionMutationVariables, options?: RequestInit['headers']) => fetchData<MarkCompletionMutation, MarkCompletionMutationVariables>(MarkCompletionDocument, variables, options);
export const StudentCreateCommentDocument = `
    mutation StudentCreateComment($input: StudentCreateCommentInput!) {
  student_createComment(input: $input) {
    ...StandardComment
  }
}
    ${StandardCommentFragmentDoc}
${CommentFieldsFragmentDoc}
${StandardCommentFeedbackFragmentDoc}
${CommentReactionsFragmentDoc}`;
export const useStudentCreateCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<StudentCreateCommentMutation, TError, StudentCreateCommentMutationVariables, TContext>) =>
    useMutation<StudentCreateCommentMutation, TError, StudentCreateCommentMutationVariables, TContext>(
      ['StudentCreateComment'],
      (variables?: StudentCreateCommentMutationVariables) => fetchData<StudentCreateCommentMutation, StudentCreateCommentMutationVariables>(StudentCreateCommentDocument, variables)(),
      options
    );
useStudentCreateCommentMutation.getKey = () => ['StudentCreateComment'];

useStudentCreateCommentMutation.fetcher = (variables: StudentCreateCommentMutationVariables, options?: RequestInit['headers']) => fetchData<StudentCreateCommentMutation, StudentCreateCommentMutationVariables>(StudentCreateCommentDocument, variables, options);
export const StudentCreateConversationMessagePairDocument = `
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
export const useStudentCreateConversationMessagePairMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<StudentCreateConversationMessagePairMutation, TError, StudentCreateConversationMessagePairMutationVariables, TContext>) =>
    useMutation<StudentCreateConversationMessagePairMutation, TError, StudentCreateConversationMessagePairMutationVariables, TContext>(
      ['StudentCreateConversationMessagePair'],
      (variables?: StudentCreateConversationMessagePairMutationVariables) => fetchData<StudentCreateConversationMessagePairMutation, StudentCreateConversationMessagePairMutationVariables>(StudentCreateConversationMessagePairDocument, variables)(),
      options
    );
useStudentCreateConversationMessagePairMutation.getKey = () => ['StudentCreateConversationMessagePair'];

useStudentCreateConversationMessagePairMutation.fetcher = (variables: StudentCreateConversationMessagePairMutationVariables, options?: RequestInit['headers']) => fetchData<StudentCreateConversationMessagePairMutation, StudentCreateConversationMessagePairMutationVariables>(StudentCreateConversationMessagePairDocument, variables, options);
export const StudentDeleteCommentDocument = `
    mutation StudentDeleteComment($input: StudentRemoveCommentInput!) {
  student_deleteComment(input: $input) {
    success
  }
}
    `;
export const useStudentDeleteCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<StudentDeleteCommentMutation, TError, StudentDeleteCommentMutationVariables, TContext>) =>
    useMutation<StudentDeleteCommentMutation, TError, StudentDeleteCommentMutationVariables, TContext>(
      ['StudentDeleteComment'],
      (variables?: StudentDeleteCommentMutationVariables) => fetchData<StudentDeleteCommentMutation, StudentDeleteCommentMutationVariables>(StudentDeleteCommentDocument, variables)(),
      options
    );
useStudentDeleteCommentMutation.getKey = () => ['StudentDeleteComment'];

useStudentDeleteCommentMutation.fetcher = (variables: StudentDeleteCommentMutationVariables, options?: RequestInit['headers']) => fetchData<StudentDeleteCommentMutation, StudentDeleteCommentMutationVariables>(StudentDeleteCommentDocument, variables, options);
export const StudentDemandSolutionsAccessStatusDocument = `
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
export const useStudentDemandSolutionsAccessStatusMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<StudentDemandSolutionsAccessStatusMutation, TError, StudentDemandSolutionsAccessStatusMutationVariables, TContext>) =>
    useMutation<StudentDemandSolutionsAccessStatusMutation, TError, StudentDemandSolutionsAccessStatusMutationVariables, TContext>(
      ['StudentDemandSolutionsAccessStatus'],
      (variables?: StudentDemandSolutionsAccessStatusMutationVariables) => fetchData<StudentDemandSolutionsAccessStatusMutation, StudentDemandSolutionsAccessStatusMutationVariables>(StudentDemandSolutionsAccessStatusDocument, variables)(),
      options
    );
useStudentDemandSolutionsAccessStatusMutation.getKey = () => ['StudentDemandSolutionsAccessStatus'];

useStudentDemandSolutionsAccessStatusMutation.fetcher = (variables: StudentDemandSolutionsAccessStatusMutationVariables, options?: RequestInit['headers']) => fetchData<StudentDemandSolutionsAccessStatusMutation, StudentDemandSolutionsAccessStatusMutationVariables>(StudentDemandSolutionsAccessStatusDocument, variables, options);
export const StudentToggleCommentReactionDocument = `
    mutation StudentToggleCommentReaction($input: ToggleCommentReactionInput!) {
  student_toggleCommentReaction(input: $input) {
    added
    deleted
  }
}
    `;
export const useStudentToggleCommentReactionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<StudentToggleCommentReactionMutation, TError, StudentToggleCommentReactionMutationVariables, TContext>) =>
    useMutation<StudentToggleCommentReactionMutation, TError, StudentToggleCommentReactionMutationVariables, TContext>(
      ['StudentToggleCommentReaction'],
      (variables?: StudentToggleCommentReactionMutationVariables) => fetchData<StudentToggleCommentReactionMutation, StudentToggleCommentReactionMutationVariables>(StudentToggleCommentReactionDocument, variables)(),
      options
    );
useStudentToggleCommentReactionMutation.getKey = () => ['StudentToggleCommentReaction'];

useStudentToggleCommentReactionMutation.fetcher = (variables: StudentToggleCommentReactionMutationVariables, options?: RequestInit['headers']) => fetchData<StudentToggleCommentReactionMutation, StudentToggleCommentReactionMutationVariables>(StudentToggleCommentReactionDocument, variables, options);
export const StudentUpsertCanvasDocument = `
    mutation StudentUpsertCanvas($input: UpsertCanvasInput!) {
  upsertCanvas(input: $input) {
    snapshot
  }
}
    `;
export const useStudentUpsertCanvasMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<StudentUpsertCanvasMutation, TError, StudentUpsertCanvasMutationVariables, TContext>) =>
    useMutation<StudentUpsertCanvasMutation, TError, StudentUpsertCanvasMutationVariables, TContext>(
      ['StudentUpsertCanvas'],
      (variables?: StudentUpsertCanvasMutationVariables) => fetchData<StudentUpsertCanvasMutation, StudentUpsertCanvasMutationVariables>(StudentUpsertCanvasDocument, variables)(),
      options
    );
useStudentUpsertCanvasMutation.getKey = () => ['StudentUpsertCanvas'];

useStudentUpsertCanvasMutation.fetcher = (variables: StudentUpsertCanvasMutationVariables, options?: RequestInit['headers']) => fetchData<StudentUpsertCanvasMutation, StudentUpsertCanvasMutationVariables>(StudentUpsertCanvasDocument, variables, options);
export const StudentUpsertSubmissionDraftDocument = `
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
export const useStudentUpsertSubmissionDraftMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<StudentUpsertSubmissionDraftMutation, TError, StudentUpsertSubmissionDraftMutationVariables, TContext>) =>
    useMutation<StudentUpsertSubmissionDraftMutation, TError, StudentUpsertSubmissionDraftMutationVariables, TContext>(
      ['StudentUpsertSubmissionDraft'],
      (variables?: StudentUpsertSubmissionDraftMutationVariables) => fetchData<StudentUpsertSubmissionDraftMutation, StudentUpsertSubmissionDraftMutationVariables>(StudentUpsertSubmissionDraftDocument, variables)(),
      options
    );
useStudentUpsertSubmissionDraftMutation.getKey = () => ['StudentUpsertSubmissionDraft'];

useStudentUpsertSubmissionDraftMutation.fetcher = (variables: StudentUpsertSubmissionDraftMutationVariables, options?: RequestInit['headers']) => fetchData<StudentUpsertSubmissionDraftMutation, StudentUpsertSubmissionDraftMutationVariables>(StudentUpsertSubmissionDraftDocument, variables, options);
export const SubmitResponseDocument = `
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
export const useSubmitResponseMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SubmitResponseMutation, TError, SubmitResponseMutationVariables, TContext>) =>
    useMutation<SubmitResponseMutation, TError, SubmitResponseMutationVariables, TContext>(
      ['submitResponse'],
      (variables?: SubmitResponseMutationVariables) => fetchData<SubmitResponseMutation, SubmitResponseMutationVariables>(SubmitResponseDocument, variables)(),
      options
    );
useSubmitResponseMutation.getKey = () => ['submitResponse'];

useSubmitResponseMutation.fetcher = (variables: SubmitResponseMutationVariables, options?: RequestInit['headers']) => fetchData<SubmitResponseMutation, SubmitResponseMutationVariables>(SubmitResponseDocument, variables, options);
export const SubmitResponsePreviewDocument = `
    mutation submitResponsePreview($submission: JSON!, $additionalParams: JSON, $universalResponseAreaId: String!, $responseAreaId: String!) {
  submitResponsePreview(
    input: {rawSubmission: $submission, additionalParams: $additionalParams, universalResponseAreaId: $universalResponseAreaId, responseAreaId: $responseAreaId}
  ) {
    ...StandardSubmissionPreview
  }
}
    ${StandardSubmissionPreviewFragmentDoc}`;
export const useSubmitResponsePreviewMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SubmitResponsePreviewMutation, TError, SubmitResponsePreviewMutationVariables, TContext>) =>
    useMutation<SubmitResponsePreviewMutation, TError, SubmitResponsePreviewMutationVariables, TContext>(
      ['submitResponsePreview'],
      (variables?: SubmitResponsePreviewMutationVariables) => fetchData<SubmitResponsePreviewMutation, SubmitResponsePreviewMutationVariables>(SubmitResponsePreviewDocument, variables)(),
      options
    );
useSubmitResponsePreviewMutation.getKey = () => ['submitResponsePreview'];

useSubmitResponsePreviewMutation.fetcher = (variables: SubmitResponsePreviewMutationVariables, options?: RequestInit['headers']) => fetchData<SubmitResponsePreviewMutation, SubmitResponsePreviewMutationVariables>(SubmitResponsePreviewDocument, variables, options);
export const TeacherAddStudentsDocument = `
    mutation TeacherAddStudents($input: TeacherAssignStudentsInput!) {
  teacher_assignStudents(input: $input) {
    id
  }
}
    `;
export const useTeacherAddStudentsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherAddStudentsMutation, TError, TeacherAddStudentsMutationVariables, TContext>) =>
    useMutation<TeacherAddStudentsMutation, TError, TeacherAddStudentsMutationVariables, TContext>(
      ['TeacherAddStudents'],
      (variables?: TeacherAddStudentsMutationVariables) => fetchData<TeacherAddStudentsMutation, TeacherAddStudentsMutationVariables>(TeacherAddStudentsDocument, variables)(),
      options
    );
useTeacherAddStudentsMutation.getKey = () => ['TeacherAddStudents'];

useTeacherAddStudentsMutation.fetcher = (variables: TeacherAddStudentsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherAddStudentsMutation, TeacherAddStudentsMutationVariables>(TeacherAddStudentsDocument, variables, options);
export const TeacherApproveSubmissionDocument = `
    mutation TeacherApproveSubmission($submissionId: String!) {
  approveSubmission(submissionId: $submissionId)
}
    `;
export const useTeacherApproveSubmissionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherApproveSubmissionMutation, TError, TeacherApproveSubmissionMutationVariables, TContext>) =>
    useMutation<TeacherApproveSubmissionMutation, TError, TeacherApproveSubmissionMutationVariables, TContext>(
      ['TeacherApproveSubmission'],
      (variables?: TeacherApproveSubmissionMutationVariables) => fetchData<TeacherApproveSubmissionMutation, TeacherApproveSubmissionMutationVariables>(TeacherApproveSubmissionDocument, variables)(),
      options
    );
useTeacherApproveSubmissionMutation.getKey = () => ['TeacherApproveSubmission'];

useTeacherApproveSubmissionMutation.fetcher = (variables: TeacherApproveSubmissionMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherApproveSubmissionMutation, TeacherApproveSubmissionMutationVariables>(TeacherApproveSubmissionDocument, variables, options);
export const TeacherAssignStudentsTagsDocument = `
    mutation TeacherAssignStudentsTags($input: TeacherUpdateStudentsTagsAssignmentsInput!) {
  teacher_assignStudentsTags(input: $input) {
    success
  }
}
    `;
export const useTeacherAssignStudentsTagsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherAssignStudentsTagsMutation, TError, TeacherAssignStudentsTagsMutationVariables, TContext>) =>
    useMutation<TeacherAssignStudentsTagsMutation, TError, TeacherAssignStudentsTagsMutationVariables, TContext>(
      ['TeacherAssignStudentsTags'],
      (variables?: TeacherAssignStudentsTagsMutationVariables) => fetchData<TeacherAssignStudentsTagsMutation, TeacherAssignStudentsTagsMutationVariables>(TeacherAssignStudentsTagsDocument, variables)(),
      options
    );
useTeacherAssignStudentsTagsMutation.getKey = () => ['TeacherAssignStudentsTags'];

useTeacherAssignStudentsTagsMutation.fetcher = (variables: TeacherAssignStudentsTagsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherAssignStudentsTagsMutation, TeacherAssignStudentsTagsMutationVariables>(TeacherAssignStudentsTagsDocument, variables, options);
export const TeacherAssignTeachersDocument = `
    mutation TeacherAssignTeachers($input: AdminAssignTeachersInput!) {
  teacher_assignTeachers(input: $input) {
    success
  }
}
    `;
export const useTeacherAssignTeachersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherAssignTeachersMutation, TError, TeacherAssignTeachersMutationVariables, TContext>) =>
    useMutation<TeacherAssignTeachersMutation, TError, TeacherAssignTeachersMutationVariables, TContext>(
      ['TeacherAssignTeachers'],
      (variables?: TeacherAssignTeachersMutationVariables) => fetchData<TeacherAssignTeachersMutation, TeacherAssignTeachersMutationVariables>(TeacherAssignTeachersDocument, variables)(),
      options
    );
useTeacherAssignTeachersMutation.getKey = () => ['TeacherAssignTeachers'];

useTeacherAssignTeachersMutation.fetcher = (variables: TeacherAssignTeachersMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherAssignTeachersMutation, TeacherAssignTeachersMutationVariables>(TeacherAssignTeachersDocument, variables, options);
export const TeacherBulkApproveSubmissionsDocument = `
    mutation TeacherBulkApproveSubmissions($input: BulkModerateSubmissionsInput!) {
  bulkApproveSubmissions(input: $input)
}
    `;
export const useTeacherBulkApproveSubmissionsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherBulkApproveSubmissionsMutation, TError, TeacherBulkApproveSubmissionsMutationVariables, TContext>) =>
    useMutation<TeacherBulkApproveSubmissionsMutation, TError, TeacherBulkApproveSubmissionsMutationVariables, TContext>(
      ['TeacherBulkApproveSubmissions'],
      (variables?: TeacherBulkApproveSubmissionsMutationVariables) => fetchData<TeacherBulkApproveSubmissionsMutation, TeacherBulkApproveSubmissionsMutationVariables>(TeacherBulkApproveSubmissionsDocument, variables)(),
      options
    );
useTeacherBulkApproveSubmissionsMutation.getKey = () => ['TeacherBulkApproveSubmissions'];

useTeacherBulkApproveSubmissionsMutation.fetcher = (variables: TeacherBulkApproveSubmissionsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherBulkApproveSubmissionsMutation, TeacherBulkApproveSubmissionsMutationVariables>(TeacherBulkApproveSubmissionsDocument, variables, options);
export const TeacherBulkRejectSubmissionsDocument = `
    mutation TeacherBulkRejectSubmissions($input: BulkModerateSubmissionsInput!) {
  bulkRejectSubmissions(input: $input)
}
    `;
export const useTeacherBulkRejectSubmissionsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherBulkRejectSubmissionsMutation, TError, TeacherBulkRejectSubmissionsMutationVariables, TContext>) =>
    useMutation<TeacherBulkRejectSubmissionsMutation, TError, TeacherBulkRejectSubmissionsMutationVariables, TContext>(
      ['TeacherBulkRejectSubmissions'],
      (variables?: TeacherBulkRejectSubmissionsMutationVariables) => fetchData<TeacherBulkRejectSubmissionsMutation, TeacherBulkRejectSubmissionsMutationVariables>(TeacherBulkRejectSubmissionsDocument, variables)(),
      options
    );
useTeacherBulkRejectSubmissionsMutation.getKey = () => ['TeacherBulkRejectSubmissions'];

useTeacherBulkRejectSubmissionsMutation.fetcher = (variables: TeacherBulkRejectSubmissionsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherBulkRejectSubmissionsMutation, TeacherBulkRejectSubmissionsMutationVariables>(TeacherBulkRejectSubmissionsDocument, variables, options);
export const TeacherCreateCommentDocument = `
    mutation TeacherCreateComment($input: TeacherCreateCommentInput!) {
  teacher_createComment(input: $input) {
    ...StandardComment
  }
}
    ${StandardCommentFragmentDoc}
${CommentFieldsFragmentDoc}
${StandardCommentFeedbackFragmentDoc}
${CommentReactionsFragmentDoc}`;
export const useTeacherCreateCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherCreateCommentMutation, TError, TeacherCreateCommentMutationVariables, TContext>) =>
    useMutation<TeacherCreateCommentMutation, TError, TeacherCreateCommentMutationVariables, TContext>(
      ['TeacherCreateComment'],
      (variables?: TeacherCreateCommentMutationVariables) => fetchData<TeacherCreateCommentMutation, TeacherCreateCommentMutationVariables>(TeacherCreateCommentDocument, variables)(),
      options
    );
useTeacherCreateCommentMutation.getKey = () => ['TeacherCreateComment'];

useTeacherCreateCommentMutation.fetcher = (variables: TeacherCreateCommentMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherCreateCommentMutation, TeacherCreateCommentMutationVariables>(TeacherCreateCommentDocument, variables, options);
export const TeacherCreateModuleStudentTagDocument = `
    mutation TeacherCreateModuleStudentTag($input: TeacherCreateModuleStudentTagInput!) {
  teacher_createModuleStudentTag(input: $input) {
    success
  }
}
    `;
export const useTeacherCreateModuleStudentTagMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherCreateModuleStudentTagMutation, TError, TeacherCreateModuleStudentTagMutationVariables, TContext>) =>
    useMutation<TeacherCreateModuleStudentTagMutation, TError, TeacherCreateModuleStudentTagMutationVariables, TContext>(
      ['TeacherCreateModuleStudentTag'],
      (variables?: TeacherCreateModuleStudentTagMutationVariables) => fetchData<TeacherCreateModuleStudentTagMutation, TeacherCreateModuleStudentTagMutationVariables>(TeacherCreateModuleStudentTagDocument, variables)(),
      options
    );
useTeacherCreateModuleStudentTagMutation.getKey = () => ['TeacherCreateModuleStudentTag'];

useTeacherCreateModuleStudentTagMutation.fetcher = (variables: TeacherCreateModuleStudentTagMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherCreateModuleStudentTagMutation, TeacherCreateModuleStudentTagMutationVariables>(TeacherCreateModuleStudentTagDocument, variables, options);
export const TeacherCreateQuestionDocument = `
    mutation TeacherCreateQuestion($input: TeacherCreateQuestionInput!) {
  teacher_createQuestion(input: $input) {
    id
    pdfError
  }
}
    `;
export const useTeacherCreateQuestionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherCreateQuestionMutation, TError, TeacherCreateQuestionMutationVariables, TContext>) =>
    useMutation<TeacherCreateQuestionMutation, TError, TeacherCreateQuestionMutationVariables, TContext>(
      ['TeacherCreateQuestion'],
      (variables?: TeacherCreateQuestionMutationVariables) => fetchData<TeacherCreateQuestionMutation, TeacherCreateQuestionMutationVariables>(TeacherCreateQuestionDocument, variables)(),
      options
    );
useTeacherCreateQuestionMutation.getKey = () => ['TeacherCreateQuestion'];

useTeacherCreateQuestionMutation.fetcher = (variables: TeacherCreateQuestionMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherCreateQuestionMutation, TeacherCreateQuestionMutationVariables>(TeacherCreateQuestionDocument, variables, options);
export const TeacherCreateSetDocument = `
    mutation TeacherCreateSet($input: TeacherCreateSetInput!) {
  teacher_createSet(input: $input) {
    id
  }
}
    `;
export const useTeacherCreateSetMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherCreateSetMutation, TError, TeacherCreateSetMutationVariables, TContext>) =>
    useMutation<TeacherCreateSetMutation, TError, TeacherCreateSetMutationVariables, TContext>(
      ['TeacherCreateSet'],
      (variables?: TeacherCreateSetMutationVariables) => fetchData<TeacherCreateSetMutation, TeacherCreateSetMutationVariables>(TeacherCreateSetDocument, variables)(),
      options
    );
useTeacherCreateSetMutation.getKey = () => ['TeacherCreateSet'];

useTeacherCreateSetMutation.fetcher = (variables: TeacherCreateSetMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherCreateSetMutation, TeacherCreateSetMutationVariables>(TeacherCreateSetDocument, variables, options);
export const TeacherCreateSignedImageDocument = `
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
export const useTeacherCreateSignedImageMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherCreateSignedImageMutation, TError, TeacherCreateSignedImageMutationVariables, TContext>) =>
    useMutation<TeacherCreateSignedImageMutation, TError, TeacherCreateSignedImageMutationVariables, TContext>(
      ['TeacherCreateSignedImage'],
      (variables?: TeacherCreateSignedImageMutationVariables) => fetchData<TeacherCreateSignedImageMutation, TeacherCreateSignedImageMutationVariables>(TeacherCreateSignedImageDocument, variables)(),
      options
    );
useTeacherCreateSignedImageMutation.getKey = () => ['TeacherCreateSignedImage'];

useTeacherCreateSignedImageMutation.fetcher = (variables: TeacherCreateSignedImageMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherCreateSignedImageMutation, TeacherCreateSignedImageMutationVariables>(TeacherCreateSignedImageDocument, variables, options);
export const TeacherDeleteCommentDocument = `
    mutation TeacherDeleteComment($input: TeacherRemoveCommentInput!) {
  teacher_deleteComment(input: $input) {
    success
  }
}
    `;
export const useTeacherDeleteCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherDeleteCommentMutation, TError, TeacherDeleteCommentMutationVariables, TContext>) =>
    useMutation<TeacherDeleteCommentMutation, TError, TeacherDeleteCommentMutationVariables, TContext>(
      ['TeacherDeleteComment'],
      (variables?: TeacherDeleteCommentMutationVariables) => fetchData<TeacherDeleteCommentMutation, TeacherDeleteCommentMutationVariables>(TeacherDeleteCommentDocument, variables)(),
      options
    );
useTeacherDeleteCommentMutation.getKey = () => ['TeacherDeleteComment'];

useTeacherDeleteCommentMutation.fetcher = (variables: TeacherDeleteCommentMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherDeleteCommentMutation, TeacherDeleteCommentMutationVariables>(TeacherDeleteCommentDocument, variables, options);
export const TeacherDeleteModuleStudentTagDocument = `
    mutation TeacherDeleteModuleStudentTag($input: TeacherDeleteModuleStudentTagInput!) {
  teacher_deleteModuleStudentTag(input: $input) {
    success
  }
}
    `;
export const useTeacherDeleteModuleStudentTagMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherDeleteModuleStudentTagMutation, TError, TeacherDeleteModuleStudentTagMutationVariables, TContext>) =>
    useMutation<TeacherDeleteModuleStudentTagMutation, TError, TeacherDeleteModuleStudentTagMutationVariables, TContext>(
      ['TeacherDeleteModuleStudentTag'],
      (variables?: TeacherDeleteModuleStudentTagMutationVariables) => fetchData<TeacherDeleteModuleStudentTagMutation, TeacherDeleteModuleStudentTagMutationVariables>(TeacherDeleteModuleStudentTagDocument, variables)(),
      options
    );
useTeacherDeleteModuleStudentTagMutation.getKey = () => ['TeacherDeleteModuleStudentTag'];

useTeacherDeleteModuleStudentTagMutation.fetcher = (variables: TeacherDeleteModuleStudentTagMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherDeleteModuleStudentTagMutation, TeacherDeleteModuleStudentTagMutationVariables>(TeacherDeleteModuleStudentTagDocument, variables, options);
export const TeacherDeleteQuestionDocument = `
    mutation TeacherDeleteQuestion($input: TeacherDeleteQuestionInput!) {
  teacher_deleteQuestion(input: $input) {
    questionId
    pdfError
  }
}
    `;
export const useTeacherDeleteQuestionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherDeleteQuestionMutation, TError, TeacherDeleteQuestionMutationVariables, TContext>) =>
    useMutation<TeacherDeleteQuestionMutation, TError, TeacherDeleteQuestionMutationVariables, TContext>(
      ['TeacherDeleteQuestion'],
      (variables?: TeacherDeleteQuestionMutationVariables) => fetchData<TeacherDeleteQuestionMutation, TeacherDeleteQuestionMutationVariables>(TeacherDeleteQuestionDocument, variables)(),
      options
    );
useTeacherDeleteQuestionMutation.getKey = () => ['TeacherDeleteQuestion'];

useTeacherDeleteQuestionMutation.fetcher = (variables: TeacherDeleteQuestionMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherDeleteQuestionMutation, TeacherDeleteQuestionMutationVariables>(TeacherDeleteQuestionDocument, variables, options);
export const TeacherDeleteSetDocument = `
    mutation TeacherDeleteSet($input: TeacherDeleteSetInput!) {
  teacher_deleteSet(input: $input) {
    success
  }
}
    `;
export const useTeacherDeleteSetMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherDeleteSetMutation, TError, TeacherDeleteSetMutationVariables, TContext>) =>
    useMutation<TeacherDeleteSetMutation, TError, TeacherDeleteSetMutationVariables, TContext>(
      ['TeacherDeleteSet'],
      (variables?: TeacherDeleteSetMutationVariables) => fetchData<TeacherDeleteSetMutation, TeacherDeleteSetMutationVariables>(TeacherDeleteSetDocument, variables)(),
      options
    );
useTeacherDeleteSetMutation.getKey = () => ['TeacherDeleteSet'];

useTeacherDeleteSetMutation.fetcher = (variables: TeacherDeleteSetMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherDeleteSetMutation, TeacherDeleteSetMutationVariables>(TeacherDeleteSetDocument, variables, options);
export const TeacherExportQuestionDocument = `
    mutation TeacherExportQuestion($input: TeacherExportQuestionInput!) {
  teacher_exportQuestion(input: $input) {
    zippedData
    zippedFileName
    warnings
  }
}
    `;
export const useTeacherExportQuestionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherExportQuestionMutation, TError, TeacherExportQuestionMutationVariables, TContext>) =>
    useMutation<TeacherExportQuestionMutation, TError, TeacherExportQuestionMutationVariables, TContext>(
      ['TeacherExportQuestion'],
      (variables?: TeacherExportQuestionMutationVariables) => fetchData<TeacherExportQuestionMutation, TeacherExportQuestionMutationVariables>(TeacherExportQuestionDocument, variables)(),
      options
    );
useTeacherExportQuestionMutation.getKey = () => ['TeacherExportQuestion'];

useTeacherExportQuestionMutation.fetcher = (variables: TeacherExportQuestionMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherExportQuestionMutation, TeacherExportQuestionMutationVariables>(TeacherExportQuestionDocument, variables, options);
export const TeacherExportSetDocument = `
    mutation TeacherExportSet($input: TeacherExportSetInput!) {
  teacher_exportSet(input: $input) {
    zippedData
    zippedFileName
    warnings
  }
}
    `;
export const useTeacherExportSetMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherExportSetMutation, TError, TeacherExportSetMutationVariables, TContext>) =>
    useMutation<TeacherExportSetMutation, TError, TeacherExportSetMutationVariables, TContext>(
      ['TeacherExportSet'],
      (variables?: TeacherExportSetMutationVariables) => fetchData<TeacherExportSetMutation, TeacherExportSetMutationVariables>(TeacherExportSetDocument, variables)(),
      options
    );
useTeacherExportSetMutation.getKey = () => ['TeacherExportSet'];

useTeacherExportSetMutation.fetcher = (variables: TeacherExportSetMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherExportSetMutation, TeacherExportSetMutationVariables>(TeacherExportSetDocument, variables, options);
export const TeacherExportSetAsPdfDocument = `
    mutation TeacherExportSetAsPdf($input: TeacherExportSetAsPdfInput!) {
  teacher_exportSetAsPdf(input: $input) {
    exportedPdfUrl
    pdfError
  }
}
    `;
export const useTeacherExportSetAsPdfMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherExportSetAsPdfMutation, TError, TeacherExportSetAsPdfMutationVariables, TContext>) =>
    useMutation<TeacherExportSetAsPdfMutation, TError, TeacherExportSetAsPdfMutationVariables, TContext>(
      ['TeacherExportSetAsPdf'],
      (variables?: TeacherExportSetAsPdfMutationVariables) => fetchData<TeacherExportSetAsPdfMutation, TeacherExportSetAsPdfMutationVariables>(TeacherExportSetAsPdfDocument, variables)(),
      options
    );
useTeacherExportSetAsPdfMutation.getKey = () => ['TeacherExportSetAsPdf'];

useTeacherExportSetAsPdfMutation.fetcher = (variables: TeacherExportSetAsPdfMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherExportSetAsPdfMutation, TeacherExportSetAsPdfMutationVariables>(TeacherExportSetAsPdfDocument, variables, options);
export const TeacherGetGuidanceTimeDocument = `
    mutation TeacherGetGuidanceTime($input: TeacherGuidanceTimeInput!) {
  teacher_getGuidanceTime(input: $input) {
    upperBound
    lowerBound
  }
}
    `;
export const useTeacherGetGuidanceTimeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherGetGuidanceTimeMutation, TError, TeacherGetGuidanceTimeMutationVariables, TContext>) =>
    useMutation<TeacherGetGuidanceTimeMutation, TError, TeacherGetGuidanceTimeMutationVariables, TContext>(
      ['TeacherGetGuidanceTime'],
      (variables?: TeacherGetGuidanceTimeMutationVariables) => fetchData<TeacherGetGuidanceTimeMutation, TeacherGetGuidanceTimeMutationVariables>(TeacherGetGuidanceTimeDocument, variables)(),
      options
    );
useTeacherGetGuidanceTimeMutation.getKey = () => ['TeacherGetGuidanceTime'];

useTeacherGetGuidanceTimeMutation.fetcher = (variables: TeacherGetGuidanceTimeMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherGetGuidanceTimeMutation, TeacherGetGuidanceTimeMutationVariables>(TeacherGetGuidanceTimeDocument, variables, options);
export const TeacherImportQuestionsDocument = `
    mutation TeacherImportQuestions($input: TeacherImportQuestionsInput!) {
  teacher_importQuestions(input: $input) {
    questionIds
    pdfError
  }
}
    `;
export const useTeacherImportQuestionsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherImportQuestionsMutation, TError, TeacherImportQuestionsMutationVariables, TContext>) =>
    useMutation<TeacherImportQuestionsMutation, TError, TeacherImportQuestionsMutationVariables, TContext>(
      ['TeacherImportQuestions'],
      (variables?: TeacherImportQuestionsMutationVariables) => fetchData<TeacherImportQuestionsMutation, TeacherImportQuestionsMutationVariables>(TeacherImportQuestionsDocument, variables)(),
      options
    );
useTeacherImportQuestionsMutation.getKey = () => ['TeacherImportQuestions'];

useTeacherImportQuestionsMutation.fetcher = (variables: TeacherImportQuestionsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherImportQuestionsMutation, TeacherImportQuestionsMutationVariables>(TeacherImportQuestionsDocument, variables, options);
export const TeacherImportSetDocument = `
    mutation TeacherImportSet($input: TeacherImportSetInput!) {
  teacher_importSet(input: $input) {
    setId
    pdfError
  }
}
    `;
export const useTeacherImportSetMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherImportSetMutation, TError, TeacherImportSetMutationVariables, TContext>) =>
    useMutation<TeacherImportSetMutation, TError, TeacherImportSetMutationVariables, TContext>(
      ['TeacherImportSet'],
      (variables?: TeacherImportSetMutationVariables) => fetchData<TeacherImportSetMutation, TeacherImportSetMutationVariables>(TeacherImportSetDocument, variables)(),
      options
    );
useTeacherImportSetMutation.getKey = () => ['TeacherImportSet'];

useTeacherImportSetMutation.fetcher = (variables: TeacherImportSetMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherImportSetMutation, TeacherImportSetMutationVariables>(TeacherImportSetDocument, variables, options);
export const TeacherModuleInstanceResolveActivitiesDocument = `
    mutation TeacherModuleInstanceResolveActivities($input: TeacherModuleInstanceResolveActivitiesInput!) {
  teacher_moduleInstanceResolveActivities(input: $input) {
    success
  }
}
    `;
export const useTeacherModuleInstanceResolveActivitiesMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherModuleInstanceResolveActivitiesMutation, TError, TeacherModuleInstanceResolveActivitiesMutationVariables, TContext>) =>
    useMutation<TeacherModuleInstanceResolveActivitiesMutation, TError, TeacherModuleInstanceResolveActivitiesMutationVariables, TContext>(
      ['TeacherModuleInstanceResolveActivities'],
      (variables?: TeacherModuleInstanceResolveActivitiesMutationVariables) => fetchData<TeacherModuleInstanceResolveActivitiesMutation, TeacherModuleInstanceResolveActivitiesMutationVariables>(TeacherModuleInstanceResolveActivitiesDocument, variables)(),
      options
    );
useTeacherModuleInstanceResolveActivitiesMutation.getKey = () => ['TeacherModuleInstanceResolveActivities'];

useTeacherModuleInstanceResolveActivitiesMutation.fetcher = (variables: TeacherModuleInstanceResolveActivitiesMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherModuleInstanceResolveActivitiesMutation, TeacherModuleInstanceResolveActivitiesMutationVariables>(TeacherModuleInstanceResolveActivitiesDocument, variables, options);
export const TeacherModuleInstanceResolveActivityDocument = `
    mutation TeacherModuleInstanceResolveActivity($input: TeacherModuleInstanceResolveActivityInput!) {
  teacher_moduleInstanceResolveActivity(input: $input) {
    success
  }
}
    `;
export const useTeacherModuleInstanceResolveActivityMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherModuleInstanceResolveActivityMutation, TError, TeacherModuleInstanceResolveActivityMutationVariables, TContext>) =>
    useMutation<TeacherModuleInstanceResolveActivityMutation, TError, TeacherModuleInstanceResolveActivityMutationVariables, TContext>(
      ['TeacherModuleInstanceResolveActivity'],
      (variables?: TeacherModuleInstanceResolveActivityMutationVariables) => fetchData<TeacherModuleInstanceResolveActivityMutation, TeacherModuleInstanceResolveActivityMutationVariables>(TeacherModuleInstanceResolveActivityDocument, variables)(),
      options
    );
useTeacherModuleInstanceResolveActivityMutation.getKey = () => ['TeacherModuleInstanceResolveActivity'];

useTeacherModuleInstanceResolveActivityMutation.fetcher = (variables: TeacherModuleInstanceResolveActivityMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherModuleInstanceResolveActivityMutation, TeacherModuleInstanceResolveActivityMutationVariables>(TeacherModuleInstanceResolveActivityDocument, variables, options);
export const TeacherModuleInstanceResolveFlagsDocument = `
    mutation TeacherModuleInstanceResolveFlags($input: TeacherModuleInstanceResolveFlagInput!) {
  teacher_moduleInstanceResolveFlags(input: $input) {
    success
  }
}
    `;
export const useTeacherModuleInstanceResolveFlagsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherModuleInstanceResolveFlagsMutation, TError, TeacherModuleInstanceResolveFlagsMutationVariables, TContext>) =>
    useMutation<TeacherModuleInstanceResolveFlagsMutation, TError, TeacherModuleInstanceResolveFlagsMutationVariables, TContext>(
      ['TeacherModuleInstanceResolveFlags'],
      (variables?: TeacherModuleInstanceResolveFlagsMutationVariables) => fetchData<TeacherModuleInstanceResolveFlagsMutation, TeacherModuleInstanceResolveFlagsMutationVariables>(TeacherModuleInstanceResolveFlagsDocument, variables)(),
      options
    );
useTeacherModuleInstanceResolveFlagsMutation.getKey = () => ['TeacherModuleInstanceResolveFlags'];

useTeacherModuleInstanceResolveFlagsMutation.fetcher = (variables: TeacherModuleInstanceResolveFlagsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherModuleInstanceResolveFlagsMutation, TeacherModuleInstanceResolveFlagsMutationVariables>(TeacherModuleInstanceResolveFlagsDocument, variables, options);
export const TeacherPublishCommentDocument = `
    mutation TeacherPublishComment($input: TeacherPublishCommentInput!) {
  teacher_publishComment(input: $input) {
    success
  }
}
    `;
export const useTeacherPublishCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherPublishCommentMutation, TError, TeacherPublishCommentMutationVariables, TContext>) =>
    useMutation<TeacherPublishCommentMutation, TError, TeacherPublishCommentMutationVariables, TContext>(
      ['TeacherPublishComment'],
      (variables?: TeacherPublishCommentMutationVariables) => fetchData<TeacherPublishCommentMutation, TeacherPublishCommentMutationVariables>(TeacherPublishCommentDocument, variables)(),
      options
    );
useTeacherPublishCommentMutation.getKey = () => ['TeacherPublishComment'];

useTeacherPublishCommentMutation.fetcher = (variables: TeacherPublishCommentMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherPublishCommentMutation, TeacherPublishCommentMutationVariables>(TeacherPublishCommentDocument, variables, options);
export const TeacherPublishQuestionsDocument = `
    mutation TeacherPublishQuestions($input: TeacherPublishQuestionsInput!) {
  teacher_publishQuestions(input: $input) {
    questionsForPublishing
    questionsNotChanged
    pdfError
  }
}
    `;
export const useTeacherPublishQuestionsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherPublishQuestionsMutation, TError, TeacherPublishQuestionsMutationVariables, TContext>) =>
    useMutation<TeacherPublishQuestionsMutation, TError, TeacherPublishQuestionsMutationVariables, TContext>(
      ['TeacherPublishQuestions'],
      (variables?: TeacherPublishQuestionsMutationVariables) => fetchData<TeacherPublishQuestionsMutation, TeacherPublishQuestionsMutationVariables>(TeacherPublishQuestionsDocument, variables)(),
      options
    );
useTeacherPublishQuestionsMutation.getKey = () => ['TeacherPublishQuestions'];

useTeacherPublishQuestionsMutation.fetcher = (variables: TeacherPublishQuestionsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherPublishQuestionsMutation, TeacherPublishQuestionsMutationVariables>(TeacherPublishQuestionsDocument, variables, options);
export const TeacherRejectSubmissionDocument = `
    mutation TeacherRejectSubmission($submissionId: String!) {
  rejectSubmission(submissionId: $submissionId)
}
    `;
export const useTeacherRejectSubmissionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherRejectSubmissionMutation, TError, TeacherRejectSubmissionMutationVariables, TContext>) =>
    useMutation<TeacherRejectSubmissionMutation, TError, TeacherRejectSubmissionMutationVariables, TContext>(
      ['TeacherRejectSubmission'],
      (variables?: TeacherRejectSubmissionMutationVariables) => fetchData<TeacherRejectSubmissionMutation, TeacherRejectSubmissionMutationVariables>(TeacherRejectSubmissionDocument, variables)(),
      options
    );
useTeacherRejectSubmissionMutation.getKey = () => ['TeacherRejectSubmission'];

useTeacherRejectSubmissionMutation.fetcher = (variables: TeacherRejectSubmissionMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherRejectSubmissionMutation, TeacherRejectSubmissionMutationVariables>(TeacherRejectSubmissionDocument, variables, options);
export const TeacherRemoveStudentDocument = `
    mutation TeacherRemoveStudent($input: TeacherRemoveStudentInput!) {
  teacher_removeStudent(input: $input) {
    success
  }
}
    `;
export const useTeacherRemoveStudentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherRemoveStudentMutation, TError, TeacherRemoveStudentMutationVariables, TContext>) =>
    useMutation<TeacherRemoveStudentMutation, TError, TeacherRemoveStudentMutationVariables, TContext>(
      ['TeacherRemoveStudent'],
      (variables?: TeacherRemoveStudentMutationVariables) => fetchData<TeacherRemoveStudentMutation, TeacherRemoveStudentMutationVariables>(TeacherRemoveStudentDocument, variables)(),
      options
    );
useTeacherRemoveStudentMutation.getKey = () => ['TeacherRemoveStudent'];

useTeacherRemoveStudentMutation.fetcher = (variables: TeacherRemoveStudentMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherRemoveStudentMutation, TeacherRemoveStudentMutationVariables>(TeacherRemoveStudentDocument, variables, options);
export const TeacherRemoveStudentsDocument = `
    mutation TeacherRemoveStudents($input: TeacherRemoveStudentsInput!) {
  teacher_removeStudents(input: $input) {
    success
  }
}
    `;
export const useTeacherRemoveStudentsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherRemoveStudentsMutation, TError, TeacherRemoveStudentsMutationVariables, TContext>) =>
    useMutation<TeacherRemoveStudentsMutation, TError, TeacherRemoveStudentsMutationVariables, TContext>(
      ['TeacherRemoveStudents'],
      (variables?: TeacherRemoveStudentsMutationVariables) => fetchData<TeacherRemoveStudentsMutation, TeacherRemoveStudentsMutationVariables>(TeacherRemoveStudentsDocument, variables)(),
      options
    );
useTeacherRemoveStudentsMutation.getKey = () => ['TeacherRemoveStudents'];

useTeacherRemoveStudentsMutation.fetcher = (variables: TeacherRemoveStudentsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherRemoveStudentsMutation, TeacherRemoveStudentsMutationVariables>(TeacherRemoveStudentsDocument, variables, options);
export const TeacherReorderQuestionsDocument = `
    mutation TeacherReorderQuestions($input: TeacherReorderQuestionsInput!) {
  teacher_reorderQuestions(input: $input) {
    success
  }
}
    `;
export const useTeacherReorderQuestionsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherReorderQuestionsMutation, TError, TeacherReorderQuestionsMutationVariables, TContext>) =>
    useMutation<TeacherReorderQuestionsMutation, TError, TeacherReorderQuestionsMutationVariables, TContext>(
      ['TeacherReorderQuestions'],
      (variables?: TeacherReorderQuestionsMutationVariables) => fetchData<TeacherReorderQuestionsMutation, TeacherReorderQuestionsMutationVariables>(TeacherReorderQuestionsDocument, variables)(),
      options
    );
useTeacherReorderQuestionsMutation.getKey = () => ['TeacherReorderQuestions'];

useTeacherReorderQuestionsMutation.fetcher = (variables: TeacherReorderQuestionsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherReorderQuestionsMutation, TeacherReorderQuestionsMutationVariables>(TeacherReorderQuestionsDocument, variables, options);
export const TeacherReorderSetsDocument = `
    mutation TeacherReorderSets($input: TeacherReorderSetsInput!) {
  teacher_reorderSets(input: $input) {
    id
  }
}
    `;
export const useTeacherReorderSetsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherReorderSetsMutation, TError, TeacherReorderSetsMutationVariables, TContext>) =>
    useMutation<TeacherReorderSetsMutation, TError, TeacherReorderSetsMutationVariables, TContext>(
      ['TeacherReorderSets'],
      (variables?: TeacherReorderSetsMutationVariables) => fetchData<TeacherReorderSetsMutation, TeacherReorderSetsMutationVariables>(TeacherReorderSetsDocument, variables)(),
      options
    );
useTeacherReorderSetsMutation.getKey = () => ['TeacherReorderSets'];

useTeacherReorderSetsMutation.fetcher = (variables: TeacherReorderSetsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherReorderSetsMutation, TeacherReorderSetsMutationVariables>(TeacherReorderSetsDocument, variables, options);
export const TeacherRetrieveModuleInstanceErrorsDocument = `
    mutation TeacherRetrieveModuleInstanceErrors($input: TeacherModuleInstancePaginationInput!) {
  teacher_retrieveModuleInstanceErrors(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceError
    }
    total
  }
}
    ${StandardTeacherModuleInstanceErrorFragmentDoc}`;
export const useTeacherRetrieveModuleInstanceErrorsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherRetrieveModuleInstanceErrorsMutation, TError, TeacherRetrieveModuleInstanceErrorsMutationVariables, TContext>) =>
    useMutation<TeacherRetrieveModuleInstanceErrorsMutation, TError, TeacherRetrieveModuleInstanceErrorsMutationVariables, TContext>(
      ['TeacherRetrieveModuleInstanceErrors'],
      (variables?: TeacherRetrieveModuleInstanceErrorsMutationVariables) => fetchData<TeacherRetrieveModuleInstanceErrorsMutation, TeacherRetrieveModuleInstanceErrorsMutationVariables>(TeacherRetrieveModuleInstanceErrorsDocument, variables)(),
      options
    );
useTeacherRetrieveModuleInstanceErrorsMutation.getKey = () => ['TeacherRetrieveModuleInstanceErrors'];

useTeacherRetrieveModuleInstanceErrorsMutation.fetcher = (variables: TeacherRetrieveModuleInstanceErrorsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherRetrieveModuleInstanceErrorsMutation, TeacherRetrieveModuleInstanceErrorsMutationVariables>(TeacherRetrieveModuleInstanceErrorsDocument, variables, options);
export const TeacherRetrieveModuleInstanceFlagsDocument = `
    mutation TeacherRetrieveModuleInstanceFlags($input: TeacherModuleInstanceFlagsInput!) {
  teacher_retrieveModuleInstanceFlags(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceFlag
    }
    total
  }
}
    ${StandardTeacherModuleInstanceFlagFragmentDoc}`;
export const useTeacherRetrieveModuleInstanceFlagsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherRetrieveModuleInstanceFlagsMutation, TError, TeacherRetrieveModuleInstanceFlagsMutationVariables, TContext>) =>
    useMutation<TeacherRetrieveModuleInstanceFlagsMutation, TError, TeacherRetrieveModuleInstanceFlagsMutationVariables, TContext>(
      ['TeacherRetrieveModuleInstanceFlags'],
      (variables?: TeacherRetrieveModuleInstanceFlagsMutationVariables) => fetchData<TeacherRetrieveModuleInstanceFlagsMutation, TeacherRetrieveModuleInstanceFlagsMutationVariables>(TeacherRetrieveModuleInstanceFlagsDocument, variables)(),
      options
    );
useTeacherRetrieveModuleInstanceFlagsMutation.getKey = () => ['TeacherRetrieveModuleInstanceFlags'];

useTeacherRetrieveModuleInstanceFlagsMutation.fetcher = (variables: TeacherRetrieveModuleInstanceFlagsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherRetrieveModuleInstanceFlagsMutation, TeacherRetrieveModuleInstanceFlagsMutationVariables>(TeacherRetrieveModuleInstanceFlagsDocument, variables, options);
export const TeacherRetrieveModuleInstanceActivitiesDocument = `
    mutation TeacherRetrieveModuleInstanceActivities($input: TeacherModuleInstanceActivitiesInput!) {
  teacher_retrieveModuleInstanceActivities(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceActivity
    }
    total
  }
}
    ${StandardTeacherModuleInstanceActivityFragmentDoc}`;
export const useTeacherRetrieveModuleInstanceActivitiesMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherRetrieveModuleInstanceActivitiesMutation, TError, TeacherRetrieveModuleInstanceActivitiesMutationVariables, TContext>) =>
    useMutation<TeacherRetrieveModuleInstanceActivitiesMutation, TError, TeacherRetrieveModuleInstanceActivitiesMutationVariables, TContext>(
      ['TeacherRetrieveModuleInstanceActivities'],
      (variables?: TeacherRetrieveModuleInstanceActivitiesMutationVariables) => fetchData<TeacherRetrieveModuleInstanceActivitiesMutation, TeacherRetrieveModuleInstanceActivitiesMutationVariables>(TeacherRetrieveModuleInstanceActivitiesDocument, variables)(),
      options
    );
useTeacherRetrieveModuleInstanceActivitiesMutation.getKey = () => ['TeacherRetrieveModuleInstanceActivities'];

useTeacherRetrieveModuleInstanceActivitiesMutation.fetcher = (variables: TeacherRetrieveModuleInstanceActivitiesMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherRetrieveModuleInstanceActivitiesMutation, TeacherRetrieveModuleInstanceActivitiesMutationVariables>(TeacherRetrieveModuleInstanceActivitiesDocument, variables, options);
export const TeacherRevertToQuestionVersionDocument = `
    mutation TeacherRevertToQuestionVersion($input: TeacherRevertToQuestionVersionInput!) {
  teacher_revertToQuestionVersion(input: $input) {
    ...StandardTeacherQuestion
  }
}
    ${StandardTeacherQuestionFragmentDoc}
${StandardTeacherPartFragmentDoc}
${StandardTeacherResponseAreaFragmentDoc}
${TeacherModularResponseFragmentDoc}`;
export const useTeacherRevertToQuestionVersionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherRevertToQuestionVersionMutation, TError, TeacherRevertToQuestionVersionMutationVariables, TContext>) =>
    useMutation<TeacherRevertToQuestionVersionMutation, TError, TeacherRevertToQuestionVersionMutationVariables, TContext>(
      ['TeacherRevertToQuestionVersion'],
      (variables?: TeacherRevertToQuestionVersionMutationVariables) => fetchData<TeacherRevertToQuestionVersionMutation, TeacherRevertToQuestionVersionMutationVariables>(TeacherRevertToQuestionVersionDocument, variables)(),
      options
    );
useTeacherRevertToQuestionVersionMutation.getKey = () => ['TeacherRevertToQuestionVersion'];

useTeacherRevertToQuestionVersionMutation.fetcher = (variables: TeacherRevertToQuestionVersionMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherRevertToQuestionVersionMutation, TeacherRevertToQuestionVersionMutationVariables>(TeacherRevertToQuestionVersionDocument, variables, options);
export const TeacherSaveImportedQuestionsDocument = `
    mutation TeacherSaveImportedQuestions($input: TeacherSaveImportedQuestionsInput!) {
  teacher_saveImportedQuestions(input: $input) {
    importedQuestionIds
  }
}
    `;
export const useTeacherSaveImportedQuestionsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherSaveImportedQuestionsMutation, TError, TeacherSaveImportedQuestionsMutationVariables, TContext>) =>
    useMutation<TeacherSaveImportedQuestionsMutation, TError, TeacherSaveImportedQuestionsMutationVariables, TContext>(
      ['TeacherSaveImportedQuestions'],
      (variables?: TeacherSaveImportedQuestionsMutationVariables) => fetchData<TeacherSaveImportedQuestionsMutation, TeacherSaveImportedQuestionsMutationVariables>(TeacherSaveImportedQuestionsDocument, variables)(),
      options
    );
useTeacherSaveImportedQuestionsMutation.getKey = () => ['TeacherSaveImportedQuestions'];

useTeacherSaveImportedQuestionsMutation.fetcher = (variables: TeacherSaveImportedQuestionsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherSaveImportedQuestionsMutation, TeacherSaveImportedQuestionsMutationVariables>(TeacherSaveImportedQuestionsDocument, variables, options);
export const TeacherSubmitTestDocument = `
    mutation TeacherSubmitTest($input: TeacherSubmitTestInput!) {
  teacher_submitTest(input: $input) {
    ...StandardTeacherSubmission
  }
}
    ${StandardTeacherSubmissionFragmentDoc}`;
export const useTeacherSubmitTestMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherSubmitTestMutation, TError, TeacherSubmitTestMutationVariables, TContext>) =>
    useMutation<TeacherSubmitTestMutation, TError, TeacherSubmitTestMutationVariables, TContext>(
      ['TeacherSubmitTest'],
      (variables?: TeacherSubmitTestMutationVariables) => fetchData<TeacherSubmitTestMutation, TeacherSubmitTestMutationVariables>(TeacherSubmitTestDocument, variables)(),
      options
    );
useTeacherSubmitTestMutation.getKey = () => ['TeacherSubmitTest'];

useTeacherSubmitTestMutation.fetcher = (variables: TeacherSubmitTestMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherSubmitTestMutation, TeacherSubmitTestMutationVariables>(TeacherSubmitTestDocument, variables, options);
export const TeacherTestSubmisionPreviewDocument = `
    mutation TeacherTestSubmisionPreview($input: TeacherPreviewTestInput!) {
  teacher_testSubmissionResponsePreview(input: $input) {
    ...StandardSubmissionPreview
  }
}
    ${StandardSubmissionPreviewFragmentDoc}`;
export const useTeacherTestSubmisionPreviewMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherTestSubmisionPreviewMutation, TError, TeacherTestSubmisionPreviewMutationVariables, TContext>) =>
    useMutation<TeacherTestSubmisionPreviewMutation, TError, TeacherTestSubmisionPreviewMutationVariables, TContext>(
      ['TeacherTestSubmisionPreview'],
      (variables?: TeacherTestSubmisionPreviewMutationVariables) => fetchData<TeacherTestSubmisionPreviewMutation, TeacherTestSubmisionPreviewMutationVariables>(TeacherTestSubmisionPreviewDocument, variables)(),
      options
    );
useTeacherTestSubmisionPreviewMutation.getKey = () => ['TeacherTestSubmisionPreview'];

useTeacherTestSubmisionPreviewMutation.fetcher = (variables: TeacherTestSubmisionPreviewMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherTestSubmisionPreviewMutation, TeacherTestSubmisionPreviewMutationVariables>(TeacherTestSubmisionPreviewDocument, variables, options);
export const TeacherToggleCommentReactionDocument = `
    mutation TeacherToggleCommentReaction($input: ToggleCommentReactionInput!) {
  teacher_toggleCommentReaction(input: $input) {
    added
    deleted
  }
}
    `;
export const useTeacherToggleCommentReactionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherToggleCommentReactionMutation, TError, TeacherToggleCommentReactionMutationVariables, TContext>) =>
    useMutation<TeacherToggleCommentReactionMutation, TError, TeacherToggleCommentReactionMutationVariables, TContext>(
      ['TeacherToggleCommentReaction'],
      (variables?: TeacherToggleCommentReactionMutationVariables) => fetchData<TeacherToggleCommentReactionMutation, TeacherToggleCommentReactionMutationVariables>(TeacherToggleCommentReactionDocument, variables)(),
      options
    );
useTeacherToggleCommentReactionMutation.getKey = () => ['TeacherToggleCommentReaction'];

useTeacherToggleCommentReactionMutation.fetcher = (variables: TeacherToggleCommentReactionMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherToggleCommentReactionMutation, TeacherToggleCommentReactionMutationVariables>(TeacherToggleCommentReactionDocument, variables, options);
export const TeacherToggleSetVisiblityDocument = `
    mutation TeacherToggleSetVisiblity($input: TeacherSetVisibilityInput!) {
  teacher_setSetVisibility(input: $input) {
    id
  }
}
    `;
export const useTeacherToggleSetVisiblityMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherToggleSetVisiblityMutation, TError, TeacherToggleSetVisiblityMutationVariables, TContext>) =>
    useMutation<TeacherToggleSetVisiblityMutation, TError, TeacherToggleSetVisiblityMutationVariables, TContext>(
      ['TeacherToggleSetVisiblity'],
      (variables?: TeacherToggleSetVisiblityMutationVariables) => fetchData<TeacherToggleSetVisiblityMutation, TeacherToggleSetVisiblityMutationVariables>(TeacherToggleSetVisiblityDocument, variables)(),
      options
    );
useTeacherToggleSetVisiblityMutation.getKey = () => ['TeacherToggleSetVisiblity'];

useTeacherToggleSetVisiblityMutation.fetcher = (variables: TeacherToggleSetVisiblityMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherToggleSetVisiblityMutation, TeacherToggleSetVisiblityMutationVariables>(TeacherToggleSetVisiblityDocument, variables, options);
export const TeacherUnassignStudentsTagsDocument = `
    mutation TeacherUnassignStudentsTags($input: TeacherUpdateStudentsTagsAssignmentsInput!) {
  teacher_unassignStudentsTags(input: $input) {
    success
  }
}
    `;
export const useTeacherUnassignStudentsTagsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUnassignStudentsTagsMutation, TError, TeacherUnassignStudentsTagsMutationVariables, TContext>) =>
    useMutation<TeacherUnassignStudentsTagsMutation, TError, TeacherUnassignStudentsTagsMutationVariables, TContext>(
      ['TeacherUnassignStudentsTags'],
      (variables?: TeacherUnassignStudentsTagsMutationVariables) => fetchData<TeacherUnassignStudentsTagsMutation, TeacherUnassignStudentsTagsMutationVariables>(TeacherUnassignStudentsTagsDocument, variables)(),
      options
    );
useTeacherUnassignStudentsTagsMutation.getKey = () => ['TeacherUnassignStudentsTags'];

useTeacherUnassignStudentsTagsMutation.fetcher = (variables: TeacherUnassignStudentsTagsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUnassignStudentsTagsMutation, TeacherUnassignStudentsTagsMutationVariables>(TeacherUnassignStudentsTagsDocument, variables, options);
export const TeacherUnassignTeachersDocument = `
    mutation TeacherUnassignTeachers($input: AdminUnassignTeacherInput!) {
  teacher_unassignTeacher(input: $input) {
    success
  }
}
    `;
export const useTeacherUnassignTeachersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUnassignTeachersMutation, TError, TeacherUnassignTeachersMutationVariables, TContext>) =>
    useMutation<TeacherUnassignTeachersMutation, TError, TeacherUnassignTeachersMutationVariables, TContext>(
      ['TeacherUnassignTeachers'],
      (variables?: TeacherUnassignTeachersMutationVariables) => fetchData<TeacherUnassignTeachersMutation, TeacherUnassignTeachersMutationVariables>(TeacherUnassignTeachersDocument, variables)(),
      options
    );
useTeacherUnassignTeachersMutation.getKey = () => ['TeacherUnassignTeachers'];

useTeacherUnassignTeachersMutation.fetcher = (variables: TeacherUnassignTeachersMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUnassignTeachersMutation, TeacherUnassignTeachersMutationVariables>(TeacherUnassignTeachersDocument, variables, options);
export const TeacherUpdateModuleInstanceDocument = `
    mutation TeacherUpdateModuleInstance($input: TeacherUpdateModuleInstanceInput!) {
  teacher_updateModuleInstance(input: $input) {
    id
    allowComments
    publishCommentInstantly
    allowChatbot
  }
}
    `;
export const useTeacherUpdateModuleInstanceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUpdateModuleInstanceMutation, TError, TeacherUpdateModuleInstanceMutationVariables, TContext>) =>
    useMutation<TeacherUpdateModuleInstanceMutation, TError, TeacherUpdateModuleInstanceMutationVariables, TContext>(
      ['TeacherUpdateModuleInstance'],
      (variables?: TeacherUpdateModuleInstanceMutationVariables) => fetchData<TeacherUpdateModuleInstanceMutation, TeacherUpdateModuleInstanceMutationVariables>(TeacherUpdateModuleInstanceDocument, variables)(),
      options
    );
useTeacherUpdateModuleInstanceMutation.getKey = () => ['TeacherUpdateModuleInstance'];

useTeacherUpdateModuleInstanceMutation.fetcher = (variables: TeacherUpdateModuleInstanceMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUpdateModuleInstanceMutation, TeacherUpdateModuleInstanceMutationVariables>(TeacherUpdateModuleInstanceDocument, variables, options);
export const TeacherUpdateModuleInstanceTeacherRoleDocument = `
    mutation TeacherUpdateModuleInstanceTeacherRole($input: TeacherUpdateModuleInstanceTeacherRoleInput!) {
  teacher_updateModuleInstanceTeacherRole(input: $input) {
    success
  }
}
    `;
export const useTeacherUpdateModuleInstanceTeacherRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUpdateModuleInstanceTeacherRoleMutation, TError, TeacherUpdateModuleInstanceTeacherRoleMutationVariables, TContext>) =>
    useMutation<TeacherUpdateModuleInstanceTeacherRoleMutation, TError, TeacherUpdateModuleInstanceTeacherRoleMutationVariables, TContext>(
      ['TeacherUpdateModuleInstanceTeacherRole'],
      (variables?: TeacherUpdateModuleInstanceTeacherRoleMutationVariables) => fetchData<TeacherUpdateModuleInstanceTeacherRoleMutation, TeacherUpdateModuleInstanceTeacherRoleMutationVariables>(TeacherUpdateModuleInstanceTeacherRoleDocument, variables)(),
      options
    );
useTeacherUpdateModuleInstanceTeacherRoleMutation.getKey = () => ['TeacherUpdateModuleInstanceTeacherRole'];

useTeacherUpdateModuleInstanceTeacherRoleMutation.fetcher = (variables: TeacherUpdateModuleInstanceTeacherRoleMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUpdateModuleInstanceTeacherRoleMutation, TeacherUpdateModuleInstanceTeacherRoleMutationVariables>(TeacherUpdateModuleInstanceTeacherRoleDocument, variables, options);
export const TeacherUpdateModuleStudentTagDocument = `
    mutation TeacherUpdateModuleStudentTag($input: TeacherUpdateModuleStudentTagInput!) {
  teacher_updateModuleStudentTag(input: $input) {
    success
  }
}
    `;
export const useTeacherUpdateModuleStudentTagMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUpdateModuleStudentTagMutation, TError, TeacherUpdateModuleStudentTagMutationVariables, TContext>) =>
    useMutation<TeacherUpdateModuleStudentTagMutation, TError, TeacherUpdateModuleStudentTagMutationVariables, TContext>(
      ['TeacherUpdateModuleStudentTag'],
      (variables?: TeacherUpdateModuleStudentTagMutationVariables) => fetchData<TeacherUpdateModuleStudentTagMutation, TeacherUpdateModuleStudentTagMutationVariables>(TeacherUpdateModuleStudentTagDocument, variables)(),
      options
    );
useTeacherUpdateModuleStudentTagMutation.getKey = () => ['TeacherUpdateModuleStudentTag'];

useTeacherUpdateModuleStudentTagMutation.fetcher = (variables: TeacherUpdateModuleStudentTagMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUpdateModuleStudentTagMutation, TeacherUpdateModuleStudentTagMutationVariables>(TeacherUpdateModuleStudentTagDocument, variables, options);
export const TeacherUpdateQuestionDocument = `
    mutation TeacherUpdateQuestion($input: TeacherUpdateQuestionInput!) {
  teacher_updateQuestion(input: $input) {
    id
    pdfError
  }
}
    `;
export const useTeacherUpdateQuestionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUpdateQuestionMutation, TError, TeacherUpdateQuestionMutationVariables, TContext>) =>
    useMutation<TeacherUpdateQuestionMutation, TError, TeacherUpdateQuestionMutationVariables, TContext>(
      ['TeacherUpdateQuestion'],
      (variables?: TeacherUpdateQuestionMutationVariables) => fetchData<TeacherUpdateQuestionMutation, TeacherUpdateQuestionMutationVariables>(TeacherUpdateQuestionDocument, variables)(),
      options
    );
useTeacherUpdateQuestionMutation.getKey = () => ['TeacherUpdateQuestion'];

useTeacherUpdateQuestionMutation.fetcher = (variables: TeacherUpdateQuestionMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUpdateQuestionMutation, TeacherUpdateQuestionMutationVariables>(TeacherUpdateQuestionDocument, variables, options);
export const TeacherUpdateQuestionDraftDocument = `
    mutation TeacherUpdateQuestionDraft($input: TeacherUpdateQuestionInput!) {
  teacher_updateQuestionDraft(input: $input) {
    id
  }
}
    `;
export const useTeacherUpdateQuestionDraftMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUpdateQuestionDraftMutation, TError, TeacherUpdateQuestionDraftMutationVariables, TContext>) =>
    useMutation<TeacherUpdateQuestionDraftMutation, TError, TeacherUpdateQuestionDraftMutationVariables, TContext>(
      ['TeacherUpdateQuestionDraft'],
      (variables?: TeacherUpdateQuestionDraftMutationVariables) => fetchData<TeacherUpdateQuestionDraftMutation, TeacherUpdateQuestionDraftMutationVariables>(TeacherUpdateQuestionDraftDocument, variables)(),
      options
    );
useTeacherUpdateQuestionDraftMutation.getKey = () => ['TeacherUpdateQuestionDraft'];

useTeacherUpdateQuestionDraftMutation.fetcher = (variables: TeacherUpdateQuestionDraftMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUpdateQuestionDraftMutation, TeacherUpdateQuestionDraftMutationVariables>(TeacherUpdateQuestionDraftDocument, variables, options);
export const TeacherUpdateQuestionSettingsDocument = `
    mutation TeacherUpdateQuestionSettings($input: TeacherQuestionSettingsInput!) {
  teacher_updateQuestionSettings(input: $input) {
    success
  }
}
    `;
export const useTeacherUpdateQuestionSettingsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUpdateQuestionSettingsMutation, TError, TeacherUpdateQuestionSettingsMutationVariables, TContext>) =>
    useMutation<TeacherUpdateQuestionSettingsMutation, TError, TeacherUpdateQuestionSettingsMutationVariables, TContext>(
      ['TeacherUpdateQuestionSettings'],
      (variables?: TeacherUpdateQuestionSettingsMutationVariables) => fetchData<TeacherUpdateQuestionSettingsMutation, TeacherUpdateQuestionSettingsMutationVariables>(TeacherUpdateQuestionSettingsDocument, variables)(),
      options
    );
useTeacherUpdateQuestionSettingsMutation.getKey = () => ['TeacherUpdateQuestionSettings'];

useTeacherUpdateQuestionSettingsMutation.fetcher = (variables: TeacherUpdateQuestionSettingsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUpdateQuestionSettingsMutation, TeacherUpdateQuestionSettingsMutationVariables>(TeacherUpdateQuestionSettingsDocument, variables, options);
export const TeacherUpdateSetDocument = `
    mutation TeacherUpdateSet($input: TeacherUpdateSetInput!) {
  teacher_updateSet(input: $input) {
    id
  }
}
    `;
export const useTeacherUpdateSetMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUpdateSetMutation, TError, TeacherUpdateSetMutationVariables, TContext>) =>
    useMutation<TeacherUpdateSetMutation, TError, TeacherUpdateSetMutationVariables, TContext>(
      ['TeacherUpdateSet'],
      (variables?: TeacherUpdateSetMutationVariables) => fetchData<TeacherUpdateSetMutation, TeacherUpdateSetMutationVariables>(TeacherUpdateSetDocument, variables)(),
      options
    );
useTeacherUpdateSetMutation.getKey = () => ['TeacherUpdateSet'];

useTeacherUpdateSetMutation.fetcher = (variables: TeacherUpdateSetMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUpdateSetMutation, TeacherUpdateSetMutationVariables>(TeacherUpdateSetDocument, variables, options);
export const TeacherUpdateSetsHeaderDocument = `
    mutation TeacherUpdateSetsHeader($input: TeacherSetsHeaderInput!) {
  teacher_updateSetsHeader(input: $input) {
    success
  }
}
    `;
export const useTeacherUpdateSetsHeaderMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUpdateSetsHeaderMutation, TError, TeacherUpdateSetsHeaderMutationVariables, TContext>) =>
    useMutation<TeacherUpdateSetsHeaderMutation, TError, TeacherUpdateSetsHeaderMutationVariables, TContext>(
      ['TeacherUpdateSetsHeader'],
      (variables?: TeacherUpdateSetsHeaderMutationVariables) => fetchData<TeacherUpdateSetsHeaderMutation, TeacherUpdateSetsHeaderMutationVariables>(TeacherUpdateSetsHeaderDocument, variables)(),
      options
    );
useTeacherUpdateSetsHeaderMutation.getKey = () => ['TeacherUpdateSetsHeader'];

useTeacherUpdateSetsHeaderMutation.fetcher = (variables: TeacherUpdateSetsHeaderMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUpdateSetsHeaderMutation, TeacherUpdateSetsHeaderMutationVariables>(TeacherUpdateSetsHeaderDocument, variables, options);
export const TeacherUpdateStudentTagAssignmentsDocument = `
    mutation TeacherUpdateStudentTagAssignments($input: TeacherUpdateStudentTagAssignmentsInput!) {
  teacher_updateStudentTagAssignments(input: $input) {
    success
  }
}
    `;
export const useTeacherUpdateStudentTagAssignmentsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TeacherUpdateStudentTagAssignmentsMutation, TError, TeacherUpdateStudentTagAssignmentsMutationVariables, TContext>) =>
    useMutation<TeacherUpdateStudentTagAssignmentsMutation, TError, TeacherUpdateStudentTagAssignmentsMutationVariables, TContext>(
      ['TeacherUpdateStudentTagAssignments'],
      (variables?: TeacherUpdateStudentTagAssignmentsMutationVariables) => fetchData<TeacherUpdateStudentTagAssignmentsMutation, TeacherUpdateStudentTagAssignmentsMutationVariables>(TeacherUpdateStudentTagAssignmentsDocument, variables)(),
      options
    );
useTeacherUpdateStudentTagAssignmentsMutation.getKey = () => ['TeacherUpdateStudentTagAssignments'];

useTeacherUpdateStudentTagAssignmentsMutation.fetcher = (variables: TeacherUpdateStudentTagAssignmentsMutationVariables, options?: RequestInit['headers']) => fetchData<TeacherUpdateStudentTagAssignmentsMutation, TeacherUpdateStudentTagAssignmentsMutationVariables>(TeacherUpdateStudentTagAssignmentsDocument, variables, options);
export const ToggleReactionDocument = `
    mutation ToggleReaction($input: ReactionToggleInput!) {
  toggleReaction(input: $input) {
    added
    deleted
  }
}
    `;
export const useToggleReactionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ToggleReactionMutation, TError, ToggleReactionMutationVariables, TContext>) =>
    useMutation<ToggleReactionMutation, TError, ToggleReactionMutationVariables, TContext>(
      ['ToggleReaction'],
      (variables?: ToggleReactionMutationVariables) => fetchData<ToggleReactionMutation, ToggleReactionMutationVariables>(ToggleReactionDocument, variables)(),
      options
    );
useToggleReactionMutation.getKey = () => ['ToggleReaction'];

useToggleReactionMutation.fetcher = (variables: ToggleReactionMutationVariables, options?: RequestInit['headers']) => fetchData<ToggleReactionMutation, ToggleReactionMutationVariables>(ToggleReactionDocument, variables, options);
export const ToggleTimingReactionDocument = `
    mutation ToggleTimingReaction($input: TimingReactionToggleInput!) {
  toggleTimingReaction(input: $input) {
    added
    deleted
  }
}
    `;
export const useToggleTimingReactionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ToggleTimingReactionMutation, TError, ToggleTimingReactionMutationVariables, TContext>) =>
    useMutation<ToggleTimingReactionMutation, TError, ToggleTimingReactionMutationVariables, TContext>(
      ['ToggleTimingReaction'],
      (variables?: ToggleTimingReactionMutationVariables) => fetchData<ToggleTimingReactionMutation, ToggleTimingReactionMutationVariables>(ToggleTimingReactionDocument, variables)(),
      options
    );
useToggleTimingReactionMutation.getKey = () => ['ToggleTimingReaction'];

useToggleTimingReactionMutation.fetcher = (variables: ToggleTimingReactionMutationVariables, options?: RequestInit['headers']) => fetchData<ToggleTimingReactionMutation, ToggleTimingReactionMutationVariables>(ToggleTimingReactionDocument, variables, options);
export const UpdateUserSettingsDocument = `
    mutation UpdateUserSettings($input: UpdateUserSettingsInput!) {
  updateUserSettings(input: $input) {
    success
  }
}
    `;
export const useUpdateUserSettingsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateUserSettingsMutation, TError, UpdateUserSettingsMutationVariables, TContext>) =>
    useMutation<UpdateUserSettingsMutation, TError, UpdateUserSettingsMutationVariables, TContext>(
      ['UpdateUserSettings'],
      (variables?: UpdateUserSettingsMutationVariables) => fetchData<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>(UpdateUserSettingsDocument, variables)(),
      options
    );
useUpdateUserSettingsMutation.getKey = () => ['UpdateUserSettings'];

useUpdateUserSettingsMutation.fetcher = (variables: UpdateUserSettingsMutationVariables, options?: RequestInit['headers']) => fetchData<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>(UpdateUserSettingsDocument, variables, options);
export const UpsertNoteDocument = `
    mutation UpsertNote($input: UpsertNoteInput!) {
  upsertNote(input: $input) {
    text
  }
}
    `;
export const useUpsertNoteMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpsertNoteMutation, TError, UpsertNoteMutationVariables, TContext>) =>
    useMutation<UpsertNoteMutation, TError, UpsertNoteMutationVariables, TContext>(
      ['UpsertNote'],
      (variables?: UpsertNoteMutationVariables) => fetchData<UpsertNoteMutation, UpsertNoteMutationVariables>(UpsertNoteDocument, variables)(),
      options
    );
useUpsertNoteMutation.getKey = () => ['UpsertNote'];

useUpsertNoteMutation.fetcher = (variables: UpsertNoteMutationVariables, options?: RequestInit['headers']) => fetchData<UpsertNoteMutation, UpsertNoteMutationVariables>(UpsertNoteDocument, variables, options);
export const AdminGetActiveModulesDocument = `
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
export const useAdminGetActiveModulesQuery = <
      TData = AdminGetActiveModulesQuery,
      TError = unknown
    >(
      variables: AdminGetActiveModulesQueryVariables,
      options?: UseQueryOptions<AdminGetActiveModulesQuery, TError, TData>
    ) =>
    useQuery<AdminGetActiveModulesQuery, TError, TData>(
      ['AdminGetActiveModules', variables],
      fetchData<AdminGetActiveModulesQuery, AdminGetActiveModulesQueryVariables>(AdminGetActiveModulesDocument, variables),
      options
    );
useAdminGetActiveModulesQuery.document = AdminGetActiveModulesDocument;


useAdminGetActiveModulesQuery.getKey = (variables: AdminGetActiveModulesQueryVariables) => ['AdminGetActiveModules', variables];
;

useAdminGetActiveModulesQuery.fetcher = (variables: AdminGetActiveModulesQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetActiveModulesQuery, AdminGetActiveModulesQueryVariables>(AdminGetActiveModulesDocument, variables, options);
export const AdminGetAdminsDocument = `
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
export const useAdminGetAdminsQuery = <
      TData = AdminGetAdminsQuery,
      TError = unknown
    >(
      variables: AdminGetAdminsQueryVariables,
      options?: UseQueryOptions<AdminGetAdminsQuery, TError, TData>
    ) =>
    useQuery<AdminGetAdminsQuery, TError, TData>(
      ['AdminGetAdmins', variables],
      fetchData<AdminGetAdminsQuery, AdminGetAdminsQueryVariables>(AdminGetAdminsDocument, variables),
      options
    );
useAdminGetAdminsQuery.document = AdminGetAdminsDocument;


useAdminGetAdminsQuery.getKey = (variables: AdminGetAdminsQueryVariables) => ['AdminGetAdmins', variables];
;

useAdminGetAdminsQuery.fetcher = (variables: AdminGetAdminsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetAdminsQuery, AdminGetAdminsQueryVariables>(AdminGetAdminsDocument, variables, options);
export const AdminGetConversationFlagsDocument = `
    query AdminGetConversationFlags($input: AdminConversationFlagsInput!) {
  admin_conversationFlags(input: $input) {
    edges {
      ...StandardAdminConversationFlag
    }
    total
  }
}
    ${StandardAdminConversationFlagFragmentDoc}`;
export const useAdminGetConversationFlagsQuery = <
      TData = AdminGetConversationFlagsQuery,
      TError = unknown
    >(
      variables: AdminGetConversationFlagsQueryVariables,
      options?: UseQueryOptions<AdminGetConversationFlagsQuery, TError, TData>
    ) =>
    useQuery<AdminGetConversationFlagsQuery, TError, TData>(
      ['AdminGetConversationFlags', variables],
      fetchData<AdminGetConversationFlagsQuery, AdminGetConversationFlagsQueryVariables>(AdminGetConversationFlagsDocument, variables),
      options
    );
useAdminGetConversationFlagsQuery.document = AdminGetConversationFlagsDocument;


useAdminGetConversationFlagsQuery.getKey = (variables: AdminGetConversationFlagsQueryVariables) => ['AdminGetConversationFlags', variables];
;

useAdminGetConversationFlagsQuery.fetcher = (variables: AdminGetConversationFlagsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetConversationFlagsQuery, AdminGetConversationFlagsQueryVariables>(AdminGetConversationFlagsDocument, variables, options);
export const AdminGetConversationFlagsStatisticsDocument = `
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
export const useAdminGetConversationFlagsStatisticsQuery = <
      TData = AdminGetConversationFlagsStatisticsQuery,
      TError = unknown
    >(
      variables?: AdminGetConversationFlagsStatisticsQueryVariables,
      options?: UseQueryOptions<AdminGetConversationFlagsStatisticsQuery, TError, TData>
    ) =>
    useQuery<AdminGetConversationFlagsStatisticsQuery, TError, TData>(
      variables === undefined ? ['AdminGetConversationFlagsStatistics'] : ['AdminGetConversationFlagsStatistics', variables],
      fetchData<AdminGetConversationFlagsStatisticsQuery, AdminGetConversationFlagsStatisticsQueryVariables>(AdminGetConversationFlagsStatisticsDocument, variables),
      options
    );
useAdminGetConversationFlagsStatisticsQuery.document = AdminGetConversationFlagsStatisticsDocument;


useAdminGetConversationFlagsStatisticsQuery.getKey = (variables?: AdminGetConversationFlagsStatisticsQueryVariables) => variables === undefined ? ['AdminGetConversationFlagsStatistics'] : ['AdminGetConversationFlagsStatistics', variables];
;

useAdminGetConversationFlagsStatisticsQuery.fetcher = (variables?: AdminGetConversationFlagsStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetConversationFlagsStatisticsQuery, AdminGetConversationFlagsStatisticsQueryVariables>(AdminGetConversationFlagsStatisticsDocument, variables, options);
export const AdminGetEvaluationFunctionErrorsDocument = `
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
export const useAdminGetEvaluationFunctionErrorsQuery = <
      TData = AdminGetEvaluationFunctionErrorsQuery,
      TError = unknown
    >(
      variables: AdminGetEvaluationFunctionErrorsQueryVariables,
      options?: UseQueryOptions<AdminGetEvaluationFunctionErrorsQuery, TError, TData>
    ) =>
    useQuery<AdminGetEvaluationFunctionErrorsQuery, TError, TData>(
      ['AdminGetEvaluationFunctionErrors', variables],
      fetchData<AdminGetEvaluationFunctionErrorsQuery, AdminGetEvaluationFunctionErrorsQueryVariables>(AdminGetEvaluationFunctionErrorsDocument, variables),
      options
    );
useAdminGetEvaluationFunctionErrorsQuery.document = AdminGetEvaluationFunctionErrorsDocument;


useAdminGetEvaluationFunctionErrorsQuery.getKey = (variables: AdminGetEvaluationFunctionErrorsQueryVariables) => ['AdminGetEvaluationFunctionErrors', variables];
;

useAdminGetEvaluationFunctionErrorsQuery.fetcher = (variables: AdminGetEvaluationFunctionErrorsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetEvaluationFunctionErrorsQuery, AdminGetEvaluationFunctionErrorsQueryVariables>(AdminGetEvaluationFunctionErrorsDocument, variables, options);
export const AdminGetEvaluationFunctionGroupedErrorsDocument = `
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
export const useAdminGetEvaluationFunctionGroupedErrorsQuery = <
      TData = AdminGetEvaluationFunctionGroupedErrorsQuery,
      TError = unknown
    >(
      variables: AdminGetEvaluationFunctionGroupedErrorsQueryVariables,
      options?: UseQueryOptions<AdminGetEvaluationFunctionGroupedErrorsQuery, TError, TData>
    ) =>
    useQuery<AdminGetEvaluationFunctionGroupedErrorsQuery, TError, TData>(
      ['AdminGetEvaluationFunctionGroupedErrors', variables],
      fetchData<AdminGetEvaluationFunctionGroupedErrorsQuery, AdminGetEvaluationFunctionGroupedErrorsQueryVariables>(AdminGetEvaluationFunctionGroupedErrorsDocument, variables),
      options
    );
useAdminGetEvaluationFunctionGroupedErrorsQuery.document = AdminGetEvaluationFunctionGroupedErrorsDocument;


useAdminGetEvaluationFunctionGroupedErrorsQuery.getKey = (variables: AdminGetEvaluationFunctionGroupedErrorsQueryVariables) => ['AdminGetEvaluationFunctionGroupedErrors', variables];
;

useAdminGetEvaluationFunctionGroupedErrorsQuery.fetcher = (variables: AdminGetEvaluationFunctionGroupedErrorsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetEvaluationFunctionGroupedErrorsQuery, AdminGetEvaluationFunctionGroupedErrorsQueryVariables>(AdminGetEvaluationFunctionGroupedErrorsDocument, variables, options);
export const AdminGetEvaluationFunctionStatisticsDocument = `
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
export const useAdminGetEvaluationFunctionStatisticsQuery = <
      TData = AdminGetEvaluationFunctionStatisticsQuery,
      TError = unknown
    >(
      variables: AdminGetEvaluationFunctionStatisticsQueryVariables,
      options?: UseQueryOptions<AdminGetEvaluationFunctionStatisticsQuery, TError, TData>
    ) =>
    useQuery<AdminGetEvaluationFunctionStatisticsQuery, TError, TData>(
      ['AdminGetEvaluationFunctionStatistics', variables],
      fetchData<AdminGetEvaluationFunctionStatisticsQuery, AdminGetEvaluationFunctionStatisticsQueryVariables>(AdminGetEvaluationFunctionStatisticsDocument, variables),
      options
    );
useAdminGetEvaluationFunctionStatisticsQuery.document = AdminGetEvaluationFunctionStatisticsDocument;


useAdminGetEvaluationFunctionStatisticsQuery.getKey = (variables: AdminGetEvaluationFunctionStatisticsQueryVariables) => ['AdminGetEvaluationFunctionStatistics', variables];
;

useAdminGetEvaluationFunctionStatisticsQuery.fetcher = (variables: AdminGetEvaluationFunctionStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetEvaluationFunctionStatisticsQuery, AdminGetEvaluationFunctionStatisticsQueryVariables>(AdminGetEvaluationFunctionStatisticsDocument, variables, options);
export const AdminGetFunctionDocument = `
    query AdminGetFunction($id: String!) {
  admin_evaluationFunction(id: $id) {
    ...StandardAdminFunction
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const useAdminGetFunctionQuery = <
      TData = AdminGetFunctionQuery,
      TError = unknown
    >(
      variables: AdminGetFunctionQueryVariables,
      options?: UseQueryOptions<AdminGetFunctionQuery, TError, TData>
    ) =>
    useQuery<AdminGetFunctionQuery, TError, TData>(
      ['AdminGetFunction', variables],
      fetchData<AdminGetFunctionQuery, AdminGetFunctionQueryVariables>(AdminGetFunctionDocument, variables),
      options
    );
useAdminGetFunctionQuery.document = AdminGetFunctionDocument;


useAdminGetFunctionQuery.getKey = (variables: AdminGetFunctionQueryVariables) => ['AdminGetFunction', variables];
;

useAdminGetFunctionQuery.fetcher = (variables: AdminGetFunctionQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetFunctionQuery, AdminGetFunctionQueryVariables>(AdminGetFunctionDocument, variables, options);
export const AdminGetFunctionCodesAllDocument = `
    query AdminGetFunctionCodesAll {
  admin_functionCodesAll {
    ...StandardFunctionCode
  }
}
    ${StandardFunctionCodeFragmentDoc}`;
export const useAdminGetFunctionCodesAllQuery = <
      TData = AdminGetFunctionCodesAllQuery,
      TError = unknown
    >(
      variables?: AdminGetFunctionCodesAllQueryVariables,
      options?: UseQueryOptions<AdminGetFunctionCodesAllQuery, TError, TData>
    ) =>
    useQuery<AdminGetFunctionCodesAllQuery, TError, TData>(
      variables === undefined ? ['AdminGetFunctionCodesAll'] : ['AdminGetFunctionCodesAll', variables],
      fetchData<AdminGetFunctionCodesAllQuery, AdminGetFunctionCodesAllQueryVariables>(AdminGetFunctionCodesAllDocument, variables),
      options
    );
useAdminGetFunctionCodesAllQuery.document = AdminGetFunctionCodesAllDocument;


useAdminGetFunctionCodesAllQuery.getKey = (variables?: AdminGetFunctionCodesAllQueryVariables) => variables === undefined ? ['AdminGetFunctionCodesAll'] : ['AdminGetFunctionCodesAll', variables];
;

useAdminGetFunctionCodesAllQuery.fetcher = (variables?: AdminGetFunctionCodesAllQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetFunctionCodesAllQuery, AdminGetFunctionCodesAllQueryVariables>(AdminGetFunctionCodesAllDocument, variables, options);
export const AdminGetFunctionsDocument = `
    query AdminGetFunctions($input: AdminEvaluationFunctionsInput!) {
  admin_evaluationFunctions(input: $input) {
    edges {
      ...StandardAdminFunction
    }
    total
  }
}
    ${StandardAdminFunctionFragmentDoc}`;
export const useAdminGetFunctionsQuery = <
      TData = AdminGetFunctionsQuery,
      TError = unknown
    >(
      variables: AdminGetFunctionsQueryVariables,
      options?: UseQueryOptions<AdminGetFunctionsQuery, TError, TData>
    ) =>
    useQuery<AdminGetFunctionsQuery, TError, TData>(
      ['AdminGetFunctions', variables],
      fetchData<AdminGetFunctionsQuery, AdminGetFunctionsQueryVariables>(AdminGetFunctionsDocument, variables),
      options
    );
useAdminGetFunctionsQuery.document = AdminGetFunctionsDocument;


useAdminGetFunctionsQuery.getKey = (variables: AdminGetFunctionsQueryVariables) => ['AdminGetFunctions', variables];
;

useAdminGetFunctionsQuery.fetcher = (variables: AdminGetFunctionsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetFunctionsQuery, AdminGetFunctionsQueryVariables>(AdminGetFunctionsDocument, variables, options);
export const AdminGetGlobalTagDocument = `
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
export const useAdminGetGlobalTagQuery = <
      TData = AdminGetGlobalTagQuery,
      TError = unknown
    >(
      variables: AdminGetGlobalTagQueryVariables,
      options?: UseQueryOptions<AdminGetGlobalTagQuery, TError, TData>
    ) =>
    useQuery<AdminGetGlobalTagQuery, TError, TData>(
      ['AdminGetGlobalTag', variables],
      fetchData<AdminGetGlobalTagQuery, AdminGetGlobalTagQueryVariables>(AdminGetGlobalTagDocument, variables),
      options
    );
useAdminGetGlobalTagQuery.document = AdminGetGlobalTagDocument;


useAdminGetGlobalTagQuery.getKey = (variables: AdminGetGlobalTagQueryVariables) => ['AdminGetGlobalTag', variables];
;

useAdminGetGlobalTagQuery.fetcher = (variables: AdminGetGlobalTagQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetGlobalTagQuery, AdminGetGlobalTagQueryVariables>(AdminGetGlobalTagDocument, variables, options);
export const AdminGetGlobalTagsAllDocument = `
    query AdminGetGlobalTagsAll {
  admin_globalTagsAll {
    ...StandardGlobalTagWithDetails
  }
}
    ${StandardGlobalTagWithDetailsFragmentDoc}`;
export const useAdminGetGlobalTagsAllQuery = <
      TData = AdminGetGlobalTagsAllQuery,
      TError = unknown
    >(
      variables?: AdminGetGlobalTagsAllQueryVariables,
      options?: UseQueryOptions<AdminGetGlobalTagsAllQuery, TError, TData>
    ) =>
    useQuery<AdminGetGlobalTagsAllQuery, TError, TData>(
      variables === undefined ? ['AdminGetGlobalTagsAll'] : ['AdminGetGlobalTagsAll', variables],
      fetchData<AdminGetGlobalTagsAllQuery, AdminGetGlobalTagsAllQueryVariables>(AdminGetGlobalTagsAllDocument, variables),
      options
    );
useAdminGetGlobalTagsAllQuery.document = AdminGetGlobalTagsAllDocument;


useAdminGetGlobalTagsAllQuery.getKey = (variables?: AdminGetGlobalTagsAllQueryVariables) => variables === undefined ? ['AdminGetGlobalTagsAll'] : ['AdminGetGlobalTagsAll', variables];
;

useAdminGetGlobalTagsAllQuery.fetcher = (variables?: AdminGetGlobalTagsAllQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetGlobalTagsAllQuery, AdminGetGlobalTagsAllQueryVariables>(AdminGetGlobalTagsAllDocument, variables, options);
export const AdminGetGlobalTagsStatusDocument = `
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
export const useAdminGetGlobalTagsStatusQuery = <
      TData = AdminGetGlobalTagsStatusQuery,
      TError = unknown
    >(
      variables: AdminGetGlobalTagsStatusQueryVariables,
      options?: UseQueryOptions<AdminGetGlobalTagsStatusQuery, TError, TData>
    ) =>
    useQuery<AdminGetGlobalTagsStatusQuery, TError, TData>(
      ['AdminGetGlobalTagsStatus', variables],
      fetchData<AdminGetGlobalTagsStatusQuery, AdminGetGlobalTagsStatusQueryVariables>(AdminGetGlobalTagsStatusDocument, variables),
      options
    );
useAdminGetGlobalTagsStatusQuery.document = AdminGetGlobalTagsStatusDocument;


useAdminGetGlobalTagsStatusQuery.getKey = (variables: AdminGetGlobalTagsStatusQueryVariables) => ['AdminGetGlobalTagsStatus', variables];
;

useAdminGetGlobalTagsStatusQuery.fetcher = (variables: AdminGetGlobalTagsStatusQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetGlobalTagsStatusQuery, AdminGetGlobalTagsStatusQueryVariables>(AdminGetGlobalTagsStatusDocument, variables, options);
export const AdminGetJobModuleRolloverDocument = `
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
export const useAdminGetJobModuleRolloverQuery = <
      TData = AdminGetJobModuleRolloverQuery,
      TError = unknown
    >(
      variables: AdminGetJobModuleRolloverQueryVariables,
      options?: UseQueryOptions<AdminGetJobModuleRolloverQuery, TError, TData>
    ) =>
    useQuery<AdminGetJobModuleRolloverQuery, TError, TData>(
      ['AdminGetJobModuleRollover', variables],
      fetchData<AdminGetJobModuleRolloverQuery, AdminGetJobModuleRolloverQueryVariables>(AdminGetJobModuleRolloverDocument, variables),
      options
    );
useAdminGetJobModuleRolloverQuery.document = AdminGetJobModuleRolloverDocument;


useAdminGetJobModuleRolloverQuery.getKey = (variables: AdminGetJobModuleRolloverQueryVariables) => ['AdminGetJobModuleRollover', variables];
;

useAdminGetJobModuleRolloverQuery.fetcher = (variables: AdminGetJobModuleRolloverQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetJobModuleRolloverQuery, AdminGetJobModuleRolloverQueryVariables>(AdminGetJobModuleRolloverDocument, variables, options);
export const AdminGetJobsDocument = `
    query AdminGetJobs {
  admin_jobs {
    ...StandardAdminJob
  }
}
    ${StandardAdminJobFragmentDoc}`;
export const useAdminGetJobsQuery = <
      TData = AdminGetJobsQuery,
      TError = unknown
    >(
      variables?: AdminGetJobsQueryVariables,
      options?: UseQueryOptions<AdminGetJobsQuery, TError, TData>
    ) =>
    useQuery<AdminGetJobsQuery, TError, TData>(
      variables === undefined ? ['AdminGetJobs'] : ['AdminGetJobs', variables],
      fetchData<AdminGetJobsQuery, AdminGetJobsQueryVariables>(AdminGetJobsDocument, variables),
      options
    );
useAdminGetJobsQuery.document = AdminGetJobsDocument;


useAdminGetJobsQuery.getKey = (variables?: AdminGetJobsQueryVariables) => variables === undefined ? ['AdminGetJobs'] : ['AdminGetJobs', variables];
;

useAdminGetJobsQuery.fetcher = (variables?: AdminGetJobsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetJobsQuery, AdminGetJobsQueryVariables>(AdminGetJobsDocument, variables, options);
export const AdminGetMessagePairCountStatisticsDocument = `
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
export const useAdminGetMessagePairCountStatisticsQuery = <
      TData = AdminGetMessagePairCountStatisticsQuery,
      TError = unknown
    >(
      variables?: AdminGetMessagePairCountStatisticsQueryVariables,
      options?: UseQueryOptions<AdminGetMessagePairCountStatisticsQuery, TError, TData>
    ) =>
    useQuery<AdminGetMessagePairCountStatisticsQuery, TError, TData>(
      variables === undefined ? ['AdminGetMessagePairCountStatistics'] : ['AdminGetMessagePairCountStatistics', variables],
      fetchData<AdminGetMessagePairCountStatisticsQuery, AdminGetMessagePairCountStatisticsQueryVariables>(AdminGetMessagePairCountStatisticsDocument, variables),
      options
    );
useAdminGetMessagePairCountStatisticsQuery.document = AdminGetMessagePairCountStatisticsDocument;


useAdminGetMessagePairCountStatisticsQuery.getKey = (variables?: AdminGetMessagePairCountStatisticsQueryVariables) => variables === undefined ? ['AdminGetMessagePairCountStatistics'] : ['AdminGetMessagePairCountStatistics', variables];
;

useAdminGetMessagePairCountStatisticsQuery.fetcher = (variables?: AdminGetMessagePairCountStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetMessagePairCountStatisticsQuery, AdminGetMessagePairCountStatisticsQueryVariables>(AdminGetMessagePairCountStatisticsDocument, variables, options);
export const AdminGetMessagePairCountsDocument = `
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
export const useAdminGetMessagePairCountsQuery = <
      TData = AdminGetMessagePairCountsQuery,
      TError = unknown
    >(
      variables: AdminGetMessagePairCountsQueryVariables,
      options?: UseQueryOptions<AdminGetMessagePairCountsQuery, TError, TData>
    ) =>
    useQuery<AdminGetMessagePairCountsQuery, TError, TData>(
      ['AdminGetMessagePairCounts', variables],
      fetchData<AdminGetMessagePairCountsQuery, AdminGetMessagePairCountsQueryVariables>(AdminGetMessagePairCountsDocument, variables),
      options
    );
useAdminGetMessagePairCountsQuery.document = AdminGetMessagePairCountsDocument;


useAdminGetMessagePairCountsQuery.getKey = (variables: AdminGetMessagePairCountsQueryVariables) => ['AdminGetMessagePairCounts', variables];
;

useAdminGetMessagePairCountsQuery.fetcher = (variables: AdminGetMessagePairCountsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetMessagePairCountsQuery, AdminGetMessagePairCountsQueryVariables>(AdminGetMessagePairCountsDocument, variables, options);
export const AdminGetModuleDocument = `
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
export const useAdminGetModuleQuery = <
      TData = AdminGetModuleQuery,
      TError = unknown
    >(
      variables: AdminGetModuleQueryVariables,
      options?: UseQueryOptions<AdminGetModuleQuery, TError, TData>
    ) =>
    useQuery<AdminGetModuleQuery, TError, TData>(
      ['AdminGetModule', variables],
      fetchData<AdminGetModuleQuery, AdminGetModuleQueryVariables>(AdminGetModuleDocument, variables),
      options
    );
useAdminGetModuleQuery.document = AdminGetModuleDocument;


useAdminGetModuleQuery.getKey = (variables: AdminGetModuleQueryVariables) => ['AdminGetModule', variables];
;

useAdminGetModuleQuery.fetcher = (variables: AdminGetModuleQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetModuleQuery, AdminGetModuleQueryVariables>(AdminGetModuleDocument, variables, options);
export const AdminGetModuleInstanceDocument = `
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
export const useAdminGetModuleInstanceQuery = <
      TData = AdminGetModuleInstanceQuery,
      TError = unknown
    >(
      variables: AdminGetModuleInstanceQueryVariables,
      options?: UseQueryOptions<AdminGetModuleInstanceQuery, TError, TData>
    ) =>
    useQuery<AdminGetModuleInstanceQuery, TError, TData>(
      ['AdminGetModuleInstance', variables],
      fetchData<AdminGetModuleInstanceQuery, AdminGetModuleInstanceQueryVariables>(AdminGetModuleInstanceDocument, variables),
      options
    );
useAdminGetModuleInstanceQuery.document = AdminGetModuleInstanceDocument;


useAdminGetModuleInstanceQuery.getKey = (variables: AdminGetModuleInstanceQueryVariables) => ['AdminGetModuleInstance', variables];
;

useAdminGetModuleInstanceQuery.fetcher = (variables: AdminGetModuleInstanceQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetModuleInstanceQuery, AdminGetModuleInstanceQueryVariables>(AdminGetModuleInstanceDocument, variables, options);
export const AdminGetModuleInstancesDocument = `
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
export const useAdminGetModuleInstancesQuery = <
      TData = AdminGetModuleInstancesQuery,
      TError = unknown
    >(
      variables: AdminGetModuleInstancesQueryVariables,
      options?: UseQueryOptions<AdminGetModuleInstancesQuery, TError, TData>
    ) =>
    useQuery<AdminGetModuleInstancesQuery, TError, TData>(
      ['AdminGetModuleInstances', variables],
      fetchData<AdminGetModuleInstancesQuery, AdminGetModuleInstancesQueryVariables>(AdminGetModuleInstancesDocument, variables),
      options
    );
useAdminGetModuleInstancesQuery.document = AdminGetModuleInstancesDocument;


useAdminGetModuleInstancesQuery.getKey = (variables: AdminGetModuleInstancesQueryVariables) => ['AdminGetModuleInstances', variables];
;

useAdminGetModuleInstancesQuery.fetcher = (variables: AdminGetModuleInstancesQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetModuleInstancesQuery, AdminGetModuleInstancesQueryVariables>(AdminGetModuleInstancesDocument, variables, options);
export const AdminGetModuleInstancesForRolloverDocument = `
    query AdminGetModuleInstancesForRollover($inputTeachers: AdminModuleInstanceTeachersInput!) {
  admin_moduleInstancesForRollover {
    edges {
      ...StandardModuleInstanceToClone
    }
    total
  }
}
    ${StandardModuleInstanceToCloneFragmentDoc}`;
export const useAdminGetModuleInstancesForRolloverQuery = <
      TData = AdminGetModuleInstancesForRolloverQuery,
      TError = unknown
    >(
      variables: AdminGetModuleInstancesForRolloverQueryVariables,
      options?: UseQueryOptions<AdminGetModuleInstancesForRolloverQuery, TError, TData>
    ) =>
    useQuery<AdminGetModuleInstancesForRolloverQuery, TError, TData>(
      ['AdminGetModuleInstancesForRollover', variables],
      fetchData<AdminGetModuleInstancesForRolloverQuery, AdminGetModuleInstancesForRolloverQueryVariables>(AdminGetModuleInstancesForRolloverDocument, variables),
      options
    );
useAdminGetModuleInstancesForRolloverQuery.document = AdminGetModuleInstancesForRolloverDocument;


useAdminGetModuleInstancesForRolloverQuery.getKey = (variables: AdminGetModuleInstancesForRolloverQueryVariables) => ['AdminGetModuleInstancesForRollover', variables];
;

useAdminGetModuleInstancesForRolloverQuery.fetcher = (variables: AdminGetModuleInstancesForRolloverQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetModuleInstancesForRolloverQuery, AdminGetModuleInstancesForRolloverQueryVariables>(AdminGetModuleInstancesForRolloverDocument, variables, options);
export const AdminGetModulesDocument = `
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
export const useAdminGetModulesQuery = <
      TData = AdminGetModulesQuery,
      TError = unknown
    >(
      variables: AdminGetModulesQueryVariables,
      options?: UseQueryOptions<AdminGetModulesQuery, TError, TData>
    ) =>
    useQuery<AdminGetModulesQuery, TError, TData>(
      ['AdminGetModules', variables],
      fetchData<AdminGetModulesQuery, AdminGetModulesQueryVariables>(AdminGetModulesDocument, variables),
      options
    );
useAdminGetModulesQuery.document = AdminGetModulesDocument;


useAdminGetModulesQuery.getKey = (variables: AdminGetModulesQueryVariables) => ['AdminGetModules', variables];
;

useAdminGetModulesQuery.fetcher = (variables: AdminGetModulesQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetModulesQuery, AdminGetModulesQueryVariables>(AdminGetModulesDocument, variables, options);
export const AdminGetResponseTypeDocument = `
    query AdminGetResponseType($id: String!) {
  admin_responseType(id: $id) {
    ...StandardAdminResponseType
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const useAdminGetResponseTypeQuery = <
      TData = AdminGetResponseTypeQuery,
      TError = unknown
    >(
      variables: AdminGetResponseTypeQueryVariables,
      options?: UseQueryOptions<AdminGetResponseTypeQuery, TError, TData>
    ) =>
    useQuery<AdminGetResponseTypeQuery, TError, TData>(
      ['AdminGetResponseType', variables],
      fetchData<AdminGetResponseTypeQuery, AdminGetResponseTypeQueryVariables>(AdminGetResponseTypeDocument, variables),
      options
    );
useAdminGetResponseTypeQuery.document = AdminGetResponseTypeDocument;


useAdminGetResponseTypeQuery.getKey = (variables: AdminGetResponseTypeQueryVariables) => ['AdminGetResponseType', variables];
;

useAdminGetResponseTypeQuery.fetcher = (variables: AdminGetResponseTypeQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetResponseTypeQuery, AdminGetResponseTypeQueryVariables>(AdminGetResponseTypeDocument, variables, options);
export const AdminGetResponseTypesDocument = `
    query AdminGetResponseTypes($input: AdminResponseTypesInput!) {
  admin_responseTypes(input: $input) {
    edges {
      ...StandardAdminResponseType
    }
    total
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const useAdminGetResponseTypesQuery = <
      TData = AdminGetResponseTypesQuery,
      TError = unknown
    >(
      variables: AdminGetResponseTypesQueryVariables,
      options?: UseQueryOptions<AdminGetResponseTypesQuery, TError, TData>
    ) =>
    useQuery<AdminGetResponseTypesQuery, TError, TData>(
      ['AdminGetResponseTypes', variables],
      fetchData<AdminGetResponseTypesQuery, AdminGetResponseTypesQueryVariables>(AdminGetResponseTypesDocument, variables),
      options
    );
useAdminGetResponseTypesQuery.document = AdminGetResponseTypesDocument;


useAdminGetResponseTypesQuery.getKey = (variables: AdminGetResponseTypesQueryVariables) => ['AdminGetResponseTypes', variables];
;

useAdminGetResponseTypesQuery.fetcher = (variables: AdminGetResponseTypesQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetResponseTypesQuery, AdminGetResponseTypesQueryVariables>(AdminGetResponseTypesDocument, variables, options);
export const AdminGetResponseTypesAllDocument = `
    query AdminGetResponseTypesAll {
  admin_responseTypesAll {
    edges {
      ...StandardAdminResponseType
    }
    total
  }
}
    ${StandardAdminResponseTypeFragmentDoc}`;
export const useAdminGetResponseTypesAllQuery = <
      TData = AdminGetResponseTypesAllQuery,
      TError = unknown
    >(
      variables?: AdminGetResponseTypesAllQueryVariables,
      options?: UseQueryOptions<AdminGetResponseTypesAllQuery, TError, TData>
    ) =>
    useQuery<AdminGetResponseTypesAllQuery, TError, TData>(
      variables === undefined ? ['AdminGetResponseTypesAll'] : ['AdminGetResponseTypesAll', variables],
      fetchData<AdminGetResponseTypesAllQuery, AdminGetResponseTypesAllQueryVariables>(AdminGetResponseTypesAllDocument, variables),
      options
    );
useAdminGetResponseTypesAllQuery.document = AdminGetResponseTypesAllDocument;


useAdminGetResponseTypesAllQuery.getKey = (variables?: AdminGetResponseTypesAllQueryVariables) => variables === undefined ? ['AdminGetResponseTypesAll'] : ['AdminGetResponseTypesAll', variables];
;

useAdminGetResponseTypesAllQuery.fetcher = (variables?: AdminGetResponseTypesAllQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetResponseTypesAllQuery, AdminGetResponseTypesAllQueryVariables>(AdminGetResponseTypesAllDocument, variables, options);
export const AdminGetStudentsDocument = `
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
export const useAdminGetStudentsQuery = <
      TData = AdminGetStudentsQuery,
      TError = unknown
    >(
      variables: AdminGetStudentsQueryVariables,
      options?: UseQueryOptions<AdminGetStudentsQuery, TError, TData>
    ) =>
    useQuery<AdminGetStudentsQuery, TError, TData>(
      ['AdminGetStudents', variables],
      fetchData<AdminGetStudentsQuery, AdminGetStudentsQueryVariables>(AdminGetStudentsDocument, variables),
      options
    );
useAdminGetStudentsQuery.document = AdminGetStudentsDocument;


useAdminGetStudentsQuery.getKey = (variables: AdminGetStudentsQueryVariables) => ['AdminGetStudents', variables];
;

useAdminGetStudentsQuery.fetcher = (variables: AdminGetStudentsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetStudentsQuery, AdminGetStudentsQueryVariables>(AdminGetStudentsDocument, variables, options);
export const AdminGetTeacherDocument = `
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
export const useAdminGetTeacherQuery = <
      TData = AdminGetTeacherQuery,
      TError = unknown
    >(
      variables: AdminGetTeacherQueryVariables,
      options?: UseQueryOptions<AdminGetTeacherQuery, TError, TData>
    ) =>
    useQuery<AdminGetTeacherQuery, TError, TData>(
      ['AdminGetTeacher', variables],
      fetchData<AdminGetTeacherQuery, AdminGetTeacherQueryVariables>(AdminGetTeacherDocument, variables),
      options
    );
useAdminGetTeacherQuery.document = AdminGetTeacherDocument;


useAdminGetTeacherQuery.getKey = (variables: AdminGetTeacherQueryVariables) => ['AdminGetTeacher', variables];
;

useAdminGetTeacherQuery.fetcher = (variables: AdminGetTeacherQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetTeacherQuery, AdminGetTeacherQueryVariables>(AdminGetTeacherDocument, variables, options);
export const AdminGetTeacherRolesDocument = `
    query AdminGetTeacherRoles {
  admin_teacherRoles {
    ...StandardAdminTeacherRole
  }
}
    ${StandardAdminTeacherRoleFragmentDoc}`;
export const useAdminGetTeacherRolesQuery = <
      TData = AdminGetTeacherRolesQuery,
      TError = unknown
    >(
      variables?: AdminGetTeacherRolesQueryVariables,
      options?: UseQueryOptions<AdminGetTeacherRolesQuery, TError, TData>
    ) =>
    useQuery<AdminGetTeacherRolesQuery, TError, TData>(
      variables === undefined ? ['AdminGetTeacherRoles'] : ['AdminGetTeacherRoles', variables],
      fetchData<AdminGetTeacherRolesQuery, AdminGetTeacherRolesQueryVariables>(AdminGetTeacherRolesDocument, variables),
      options
    );
useAdminGetTeacherRolesQuery.document = AdminGetTeacherRolesDocument;


useAdminGetTeacherRolesQuery.getKey = (variables?: AdminGetTeacherRolesQueryVariables) => variables === undefined ? ['AdminGetTeacherRoles'] : ['AdminGetTeacherRoles', variables];
;

useAdminGetTeacherRolesQuery.fetcher = (variables?: AdminGetTeacherRolesQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetTeacherRolesQuery, AdminGetTeacherRolesQueryVariables>(AdminGetTeacherRolesDocument, variables, options);
export const AdminGetTeachersDocument = `
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
export const useAdminGetTeachersQuery = <
      TData = AdminGetTeachersQuery,
      TError = unknown
    >(
      variables: AdminGetTeachersQueryVariables,
      options?: UseQueryOptions<AdminGetTeachersQuery, TError, TData>
    ) =>
    useQuery<AdminGetTeachersQuery, TError, TData>(
      ['AdminGetTeachers', variables],
      fetchData<AdminGetTeachersQuery, AdminGetTeachersQueryVariables>(AdminGetTeachersDocument, variables),
      options
    );
useAdminGetTeachersQuery.document = AdminGetTeachersDocument;


useAdminGetTeachersQuery.getKey = (variables: AdminGetTeachersQueryVariables) => ['AdminGetTeachers', variables];
;

useAdminGetTeachersQuery.fetcher = (variables: AdminGetTeachersQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetTeachersQuery, AdminGetTeachersQueryVariables>(AdminGetTeachersDocument, variables, options);
export const AdminGetTeachersAllDocument = `
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
export const useAdminGetTeachersAllQuery = <
      TData = AdminGetTeachersAllQuery,
      TError = unknown
    >(
      variables: AdminGetTeachersAllQueryVariables,
      options?: UseQueryOptions<AdminGetTeachersAllQuery, TError, TData>
    ) =>
    useQuery<AdminGetTeachersAllQuery, TError, TData>(
      ['AdminGetTeachersAll', variables],
      fetchData<AdminGetTeachersAllQuery, AdminGetTeachersAllQueryVariables>(AdminGetTeachersAllDocument, variables),
      options
    );
useAdminGetTeachersAllQuery.document = AdminGetTeachersAllDocument;


useAdminGetTeachersAllQuery.getKey = (variables: AdminGetTeachersAllQueryVariables) => ['AdminGetTeachersAll', variables];
;

useAdminGetTeachersAllQuery.fetcher = (variables: AdminGetTeachersAllQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetTeachersAllQuery, AdminGetTeachersAllQueryVariables>(AdminGetTeachersAllDocument, variables, options);
export const AdminGetTeachersWithModuleInstancesDocument = `
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
export const useAdminGetTeachersWithModuleInstancesQuery = <
      TData = AdminGetTeachersWithModuleInstancesQuery,
      TError = unknown
    >(
      variables: AdminGetTeachersWithModuleInstancesQueryVariables,
      options?: UseQueryOptions<AdminGetTeachersWithModuleInstancesQuery, TError, TData>
    ) =>
    useQuery<AdminGetTeachersWithModuleInstancesQuery, TError, TData>(
      ['AdminGetTeachersWithModuleInstances', variables],
      fetchData<AdminGetTeachersWithModuleInstancesQuery, AdminGetTeachersWithModuleInstancesQueryVariables>(AdminGetTeachersWithModuleInstancesDocument, variables),
      options
    );
useAdminGetTeachersWithModuleInstancesQuery.document = AdminGetTeachersWithModuleInstancesDocument;


useAdminGetTeachersWithModuleInstancesQuery.getKey = (variables: AdminGetTeachersWithModuleInstancesQueryVariables) => ['AdminGetTeachersWithModuleInstances', variables];
;

useAdminGetTeachersWithModuleInstancesQuery.fetcher = (variables: AdminGetTeachersWithModuleInstancesQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetTeachersWithModuleInstancesQuery, AdminGetTeachersWithModuleInstancesQueryVariables>(AdminGetTeachersWithModuleInstancesDocument, variables, options);
export const AdminGetTemplateQuestionDocument = `
    query AdminGetTemplateQuestion($id: String!) {
  admin_templateQuestion(id: $id) {
    ...StandardAdminQuestion
  }
}
    ${StandardAdminQuestionFragmentDoc}
${StandardAdminPartFragmentDoc}
${TeacherModularResponseFragmentDoc}`;
export const useAdminGetTemplateQuestionQuery = <
      TData = AdminGetTemplateQuestionQuery,
      TError = unknown
    >(
      variables: AdminGetTemplateQuestionQueryVariables,
      options?: UseQueryOptions<AdminGetTemplateQuestionQuery, TError, TData>
    ) =>
    useQuery<AdminGetTemplateQuestionQuery, TError, TData>(
      ['AdminGetTemplateQuestion', variables],
      fetchData<AdminGetTemplateQuestionQuery, AdminGetTemplateQuestionQueryVariables>(AdminGetTemplateQuestionDocument, variables),
      options
    );
useAdminGetTemplateQuestionQuery.document = AdminGetTemplateQuestionDocument;


useAdminGetTemplateQuestionQuery.getKey = (variables: AdminGetTemplateQuestionQueryVariables) => ['AdminGetTemplateQuestion', variables];
;

useAdminGetTemplateQuestionQuery.fetcher = (variables: AdminGetTemplateQuestionQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetTemplateQuestionQuery, AdminGetTemplateQuestionQueryVariables>(AdminGetTemplateQuestionDocument, variables, options);
export const AdminGetTemplateQuestionsDocument = `
    query AdminGetTemplateQuestions($first: Int!, $offset: Int!) {
  admin_templateQuestions(first: $first, offset: $offset) {
    edges {
      ...StandardAdminQuestion
    }
    total
  }
}
    ${StandardAdminQuestionFragmentDoc}
${StandardAdminPartFragmentDoc}
${TeacherModularResponseFragmentDoc}`;
export const useAdminGetTemplateQuestionsQuery = <
      TData = AdminGetTemplateQuestionsQuery,
      TError = unknown
    >(
      variables: AdminGetTemplateQuestionsQueryVariables,
      options?: UseQueryOptions<AdminGetTemplateQuestionsQuery, TError, TData>
    ) =>
    useQuery<AdminGetTemplateQuestionsQuery, TError, TData>(
      ['AdminGetTemplateQuestions', variables],
      fetchData<AdminGetTemplateQuestionsQuery, AdminGetTemplateQuestionsQueryVariables>(AdminGetTemplateQuestionsDocument, variables),
      options
    );
useAdminGetTemplateQuestionsQuery.document = AdminGetTemplateQuestionsDocument;


useAdminGetTemplateQuestionsQuery.getKey = (variables: AdminGetTemplateQuestionsQueryVariables) => ['AdminGetTemplateQuestions', variables];
;

useAdminGetTemplateQuestionsQuery.fetcher = (variables: AdminGetTemplateQuestionsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetTemplateQuestionsQuery, AdminGetTemplateQuestionsQueryVariables>(AdminGetTemplateQuestionsDocument, variables, options);
export const AdminGetTenantDocument = `
    query AdminGetTenant {
  admin_tenant {
    ...StandardAdminTenant
  }
}
    ${StandardAdminTenantFragmentDoc}`;
export const useAdminGetTenantQuery = <
      TData = AdminGetTenantQuery,
      TError = unknown
    >(
      variables?: AdminGetTenantQueryVariables,
      options?: UseQueryOptions<AdminGetTenantQuery, TError, TData>
    ) =>
    useQuery<AdminGetTenantQuery, TError, TData>(
      variables === undefined ? ['AdminGetTenant'] : ['AdminGetTenant', variables],
      fetchData<AdminGetTenantQuery, AdminGetTenantQueryVariables>(AdminGetTenantDocument, variables),
      options
    );
useAdminGetTenantQuery.document = AdminGetTenantDocument;


useAdminGetTenantQuery.getKey = (variables?: AdminGetTenantQueryVariables) => variables === undefined ? ['AdminGetTenant'] : ['AdminGetTenant', variables];
;

useAdminGetTenantQuery.fetcher = (variables?: AdminGetTenantQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetTenantQuery, AdminGetTenantQueryVariables>(AdminGetTenantDocument, variables, options);
export const AdminGetTenantTextEditorDocument = `
    query AdminGetTenantTextEditor {
  admin_tenant {
    textEditor
  }
}
    `;
export const useAdminGetTenantTextEditorQuery = <
      TData = AdminGetTenantTextEditorQuery,
      TError = unknown
    >(
      variables?: AdminGetTenantTextEditorQueryVariables,
      options?: UseQueryOptions<AdminGetTenantTextEditorQuery, TError, TData>
    ) =>
    useQuery<AdminGetTenantTextEditorQuery, TError, TData>(
      variables === undefined ? ['AdminGetTenantTextEditor'] : ['AdminGetTenantTextEditor', variables],
      fetchData<AdminGetTenantTextEditorQuery, AdminGetTenantTextEditorQueryVariables>(AdminGetTenantTextEditorDocument, variables),
      options
    );
useAdminGetTenantTextEditorQuery.document = AdminGetTenantTextEditorDocument;


useAdminGetTenantTextEditorQuery.getKey = (variables?: AdminGetTenantTextEditorQueryVariables) => variables === undefined ? ['AdminGetTenantTextEditor'] : ['AdminGetTenantTextEditor', variables];
;

useAdminGetTenantTextEditorQuery.fetcher = (variables?: AdminGetTenantTextEditorQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetTenantTextEditorQuery, AdminGetTenantTextEditorQueryVariables>(AdminGetTenantTextEditorDocument, variables, options);
export const AdminGetUserAccessEventsDocument = `
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
export const useAdminGetUserAccessEventsQuery = <
      TData = AdminGetUserAccessEventsQuery,
      TError = unknown
    >(
      variables: AdminGetUserAccessEventsQueryVariables,
      options?: UseQueryOptions<AdminGetUserAccessEventsQuery, TError, TData>
    ) =>
    useQuery<AdminGetUserAccessEventsQuery, TError, TData>(
      ['AdminGetUserAccessEvents', variables],
      fetchData<AdminGetUserAccessEventsQuery, AdminGetUserAccessEventsQueryVariables>(AdminGetUserAccessEventsDocument, variables),
      options
    );
useAdminGetUserAccessEventsQuery.document = AdminGetUserAccessEventsDocument;


useAdminGetUserAccessEventsQuery.getKey = (variables: AdminGetUserAccessEventsQueryVariables) => ['AdminGetUserAccessEvents', variables];
;

useAdminGetUserAccessEventsQuery.fetcher = (variables: AdminGetUserAccessEventsQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetUserAccessEventsQuery, AdminGetUserAccessEventsQueryVariables>(AdminGetUserAccessEventsDocument, variables, options);
export const AdminGetUserNumbersDocument = `
    query AdminGetUserNumbers($input: AdminUserNumbersInput!) {
  admin_userNumbers(input: $input) {
    totalUsers
    teacherUsers
    studentUsers
    adminUsers
  }
}
    `;
export const useAdminGetUserNumbersQuery = <
      TData = AdminGetUserNumbersQuery,
      TError = unknown
    >(
      variables: AdminGetUserNumbersQueryVariables,
      options?: UseQueryOptions<AdminGetUserNumbersQuery, TError, TData>
    ) =>
    useQuery<AdminGetUserNumbersQuery, TError, TData>(
      ['AdminGetUserNumbers', variables],
      fetchData<AdminGetUserNumbersQuery, AdminGetUserNumbersQueryVariables>(AdminGetUserNumbersDocument, variables),
      options
    );
useAdminGetUserNumbersQuery.document = AdminGetUserNumbersDocument;


useAdminGetUserNumbersQuery.getKey = (variables: AdminGetUserNumbersQueryVariables) => ['AdminGetUserNumbers', variables];
;

useAdminGetUserNumbersQuery.fetcher = (variables: AdminGetUserNumbersQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetUserNumbersQuery, AdminGetUserNumbersQueryVariables>(AdminGetUserNumbersDocument, variables, options);
export const AdminGetUsersStatusDocument = `
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
export const useAdminGetUsersStatusQuery = <
      TData = AdminGetUsersStatusQuery,
      TError = unknown
    >(
      variables: AdminGetUsersStatusQueryVariables,
      options?: UseQueryOptions<AdminGetUsersStatusQuery, TError, TData>
    ) =>
    useQuery<AdminGetUsersStatusQuery, TError, TData>(
      ['AdminGetUsersStatus', variables],
      fetchData<AdminGetUsersStatusQuery, AdminGetUsersStatusQueryVariables>(AdminGetUsersStatusDocument, variables),
      options
    );
useAdminGetUsersStatusQuery.document = AdminGetUsersStatusDocument;


useAdminGetUsersStatusQuery.getKey = (variables: AdminGetUsersStatusQueryVariables) => ['AdminGetUsersStatus', variables];
;

useAdminGetUsersStatusQuery.fetcher = (variables: AdminGetUsersStatusQueryVariables, options?: RequestInit['headers']) => fetchData<AdminGetUsersStatusQuery, AdminGetUsersStatusQueryVariables>(AdminGetUsersStatusDocument, variables, options);
export const GetMeDocument = `
    query GetMe {
  me {
    ...StandardMe
  }
}
    ${StandardMeFragmentDoc}`;
export const useGetMeQuery = <
      TData = GetMeQuery,
      TError = unknown
    >(
      variables?: GetMeQueryVariables,
      options?: UseQueryOptions<GetMeQuery, TError, TData>
    ) =>
    useQuery<GetMeQuery, TError, TData>(
      variables === undefined ? ['GetMe'] : ['GetMe', variables],
      fetchData<GetMeQuery, GetMeQueryVariables>(GetMeDocument, variables),
      options
    );
useGetMeQuery.document = GetMeDocument;


useGetMeQuery.getKey = (variables?: GetMeQueryVariables) => variables === undefined ? ['GetMe'] : ['GetMe', variables];
;

useGetMeQuery.fetcher = (variables?: GetMeQueryVariables, options?: RequestInit['headers']) => fetchData<GetMeQuery, GetMeQueryVariables>(GetMeDocument, variables, options);
export const ListModuleInstanceUserPreferencesDocument = `
    query ListModuleInstanceUserPreferences {
  moduleInstanceUserPreferences {
    edges {
      ...StandardModuleInstanceUserPreference
    }
    total
  }
}
    ${StandardModuleInstanceUserPreferenceFragmentDoc}`;
export const useListModuleInstanceUserPreferencesQuery = <
      TData = ListModuleInstanceUserPreferencesQuery,
      TError = unknown
    >(
      variables?: ListModuleInstanceUserPreferencesQueryVariables,
      options?: UseQueryOptions<ListModuleInstanceUserPreferencesQuery, TError, TData>
    ) =>
    useQuery<ListModuleInstanceUserPreferencesQuery, TError, TData>(
      variables === undefined ? ['ListModuleInstanceUserPreferences'] : ['ListModuleInstanceUserPreferences', variables],
      fetchData<ListModuleInstanceUserPreferencesQuery, ListModuleInstanceUserPreferencesQueryVariables>(ListModuleInstanceUserPreferencesDocument, variables),
      options
    );
useListModuleInstanceUserPreferencesQuery.document = ListModuleInstanceUserPreferencesDocument;


useListModuleInstanceUserPreferencesQuery.getKey = (variables?: ListModuleInstanceUserPreferencesQueryVariables) => variables === undefined ? ['ListModuleInstanceUserPreferences'] : ['ListModuleInstanceUserPreferences', variables];
;

useListModuleInstanceUserPreferencesQuery.fetcher = (variables?: ListModuleInstanceUserPreferencesQueryVariables, options?: RequestInit['headers']) => fetchData<ListModuleInstanceUserPreferencesQuery, ListModuleInstanceUserPreferencesQueryVariables>(ListModuleInstanceUserPreferencesDocument, variables, options);
export const GetNoteDocument = `
    query GetNote($input: GetNoteInput!) {
  getNote(input: $input) {
    text
  }
}
    `;
export const useGetNoteQuery = <
      TData = GetNoteQuery,
      TError = unknown
    >(
      variables: GetNoteQueryVariables,
      options?: UseQueryOptions<GetNoteQuery, TError, TData>
    ) =>
    useQuery<GetNoteQuery, TError, TData>(
      ['GetNote', variables],
      fetchData<GetNoteQuery, GetNoteQueryVariables>(GetNoteDocument, variables),
      options
    );
useGetNoteQuery.document = GetNoteDocument;


useGetNoteQuery.getKey = (variables: GetNoteQueryVariables) => ['GetNote', variables];
;

useGetNoteQuery.fetcher = (variables: GetNoteQueryVariables, options?: RequestInit['headers']) => fetchData<GetNoteQuery, GetNoteQueryVariables>(GetNoteDocument, variables, options);
export const GetQuestionReactionsDocument = `
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
export const useGetQuestionReactionsQuery = <
      TData = GetQuestionReactionsQuery,
      TError = unknown
    >(
      variables: GetQuestionReactionsQueryVariables,
      options?: UseQueryOptions<GetQuestionReactionsQuery, TError, TData>
    ) =>
    useQuery<GetQuestionReactionsQuery, TError, TData>(
      ['GetQuestionReactions', variables],
      fetchData<GetQuestionReactionsQuery, GetQuestionReactionsQueryVariables>(GetQuestionReactionsDocument, variables),
      options
    );
useGetQuestionReactionsQuery.document = GetQuestionReactionsDocument;


useGetQuestionReactionsQuery.getKey = (variables: GetQuestionReactionsQueryVariables) => ['GetQuestionReactions', variables];
;

useGetQuestionReactionsQuery.fetcher = (variables: GetQuestionReactionsQueryVariables, options?: RequestInit['headers']) => fetchData<GetQuestionReactionsQuery, GetQuestionReactionsQueryVariables>(GetQuestionReactionsDocument, variables, options);
export const GetSetDocument = `
    query GetSet($id: String!) {
  student_set(id: $id) {
    ...StandardSetResult
  }
}
    ${StandardSetResultFragmentDoc}
${StandardSetFragmentDoc}
${StandardQuestionFragmentDoc}
${StandardPartFragmentDoc}
${StandardStructuredContentFragmentDoc}
${StandardResponseAreaFragmentDoc}
${StandardSubmissionFragmentDoc}
${StandardSubmissionWithoutFeedbackFragmentDoc}
${StudentModularResponseFragmentDoc}`;
export const useGetSetQuery = <
      TData = GetSetQuery,
      TError = unknown
    >(
      variables: GetSetQueryVariables,
      options?: UseQueryOptions<GetSetQuery, TError, TData>
    ) =>
    useQuery<GetSetQuery, TError, TData>(
      ['GetSet', variables],
      fetchData<GetSetQuery, GetSetQueryVariables>(GetSetDocument, variables),
      options
    );
useGetSetQuery.document = GetSetDocument;


useGetSetQuery.getKey = (variables: GetSetQueryVariables) => ['GetSet', variables];
;

useGetSetQuery.fetcher = (variables: GetSetQueryVariables, options?: RequestInit['headers']) => fetchData<GetSetQuery, GetSetQueryVariables>(GetSetDocument, variables, options);
export const StudentGetCanvasDocument = `
    query StudentGetCanvas($input: GetCanvasInput!) {
  getCanvas(input: $input) {
    snapshot
  }
}
    `;
export const useStudentGetCanvasQuery = <
      TData = StudentGetCanvasQuery,
      TError = unknown
    >(
      variables: StudentGetCanvasQueryVariables,
      options?: UseQueryOptions<StudentGetCanvasQuery, TError, TData>
    ) =>
    useQuery<StudentGetCanvasQuery, TError, TData>(
      ['StudentGetCanvas', variables],
      fetchData<StudentGetCanvasQuery, StudentGetCanvasQueryVariables>(StudentGetCanvasDocument, variables),
      options
    );
useStudentGetCanvasQuery.document = StudentGetCanvasDocument;


useStudentGetCanvasQuery.getKey = (variables: StudentGetCanvasQueryVariables) => ['StudentGetCanvas', variables];
;

useStudentGetCanvasQuery.fetcher = (variables: StudentGetCanvasQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetCanvasQuery, StudentGetCanvasQueryVariables>(StudentGetCanvasDocument, variables, options);
export const StudentGetChatFunctionsDetailsDocument = `
    query StudentGetChatFunctionsDetails {
  getChatFunctionsDetails {
    id
    name
    description
    remoteDocsUrl
  }
}
    `;
export const useStudentGetChatFunctionsDetailsQuery = <
      TData = StudentGetChatFunctionsDetailsQuery,
      TError = unknown
    >(
      variables?: StudentGetChatFunctionsDetailsQueryVariables,
      options?: UseQueryOptions<StudentGetChatFunctionsDetailsQuery, TError, TData>
    ) =>
    useQuery<StudentGetChatFunctionsDetailsQuery, TError, TData>(
      variables === undefined ? ['StudentGetChatFunctionsDetails'] : ['StudentGetChatFunctionsDetails', variables],
      fetchData<StudentGetChatFunctionsDetailsQuery, StudentGetChatFunctionsDetailsQueryVariables>(StudentGetChatFunctionsDetailsDocument, variables),
      options
    );
useStudentGetChatFunctionsDetailsQuery.document = StudentGetChatFunctionsDetailsDocument;


useStudentGetChatFunctionsDetailsQuery.getKey = (variables?: StudentGetChatFunctionsDetailsQueryVariables) => variables === undefined ? ['StudentGetChatFunctionsDetails'] : ['StudentGetChatFunctionsDetails', variables];
;

useStudentGetChatFunctionsDetailsQuery.fetcher = (variables?: StudentGetChatFunctionsDetailsQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetChatFunctionsDetailsQuery, StudentGetChatFunctionsDetailsQueryVariables>(StudentGetChatFunctionsDetailsDocument, variables, options);
export const StudentGetCommentsDocument = `
    query StudentGetComments($input: StudentCommentsInput!) {
  student_comments(input: $input) {
    edges {
      ...StandardComment
    }
    total
  }
}
    ${StandardCommentFragmentDoc}
${CommentFieldsFragmentDoc}
${StandardCommentFeedbackFragmentDoc}
${CommentReactionsFragmentDoc}`;
export const useStudentGetCommentsQuery = <
      TData = StudentGetCommentsQuery,
      TError = unknown
    >(
      variables: StudentGetCommentsQueryVariables,
      options?: UseQueryOptions<StudentGetCommentsQuery, TError, TData>
    ) =>
    useQuery<StudentGetCommentsQuery, TError, TData>(
      ['StudentGetComments', variables],
      fetchData<StudentGetCommentsQuery, StudentGetCommentsQueryVariables>(StudentGetCommentsDocument, variables),
      options
    );
useStudentGetCommentsQuery.document = StudentGetCommentsDocument;


useStudentGetCommentsQuery.getKey = (variables: StudentGetCommentsQueryVariables) => ['StudentGetComments', variables];
;

useStudentGetCommentsQuery.fetcher = (variables: StudentGetCommentsQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetCommentsQuery, StudentGetCommentsQueryVariables>(StudentGetCommentsDocument, variables, options);
export const StudentGetConversationDocument = `
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
export const useStudentGetConversationQuery = <
      TData = StudentGetConversationQuery,
      TError = unknown
    >(
      variables: StudentGetConversationQueryVariables,
      options?: UseQueryOptions<StudentGetConversationQuery, TError, TData>
    ) =>
    useQuery<StudentGetConversationQuery, TError, TData>(
      ['StudentGetConversation', variables],
      fetchData<StudentGetConversationQuery, StudentGetConversationQueryVariables>(StudentGetConversationDocument, variables),
      options
    );
useStudentGetConversationQuery.document = StudentGetConversationDocument;


useStudentGetConversationQuery.getKey = (variables: StudentGetConversationQueryVariables) => ['StudentGetConversation', variables];
;

useStudentGetConversationQuery.fetcher = (variables: StudentGetConversationQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetConversationQuery, StudentGetConversationQueryVariables>(StudentGetConversationDocument, variables, options);
export const StudentGetDefaultChatFunctionsForTenantDetailsDocument = `
    query StudentGetDefaultChatFunctionsForTenantDetails {
  getDefaultChatFunctionForTenant {
    id
    name
    description
    remoteDocsUrl
  }
}
    `;
export const useStudentGetDefaultChatFunctionsForTenantDetailsQuery = <
      TData = StudentGetDefaultChatFunctionsForTenantDetailsQuery,
      TError = unknown
    >(
      variables?: StudentGetDefaultChatFunctionsForTenantDetailsQueryVariables,
      options?: UseQueryOptions<StudentGetDefaultChatFunctionsForTenantDetailsQuery, TError, TData>
    ) =>
    useQuery<StudentGetDefaultChatFunctionsForTenantDetailsQuery, TError, TData>(
      variables === undefined ? ['StudentGetDefaultChatFunctionsForTenantDetails'] : ['StudentGetDefaultChatFunctionsForTenantDetails', variables],
      fetchData<StudentGetDefaultChatFunctionsForTenantDetailsQuery, StudentGetDefaultChatFunctionsForTenantDetailsQueryVariables>(StudentGetDefaultChatFunctionsForTenantDetailsDocument, variables),
      options
    );
useStudentGetDefaultChatFunctionsForTenantDetailsQuery.document = StudentGetDefaultChatFunctionsForTenantDetailsDocument;


useStudentGetDefaultChatFunctionsForTenantDetailsQuery.getKey = (variables?: StudentGetDefaultChatFunctionsForTenantDetailsQueryVariables) => variables === undefined ? ['StudentGetDefaultChatFunctionsForTenantDetails'] : ['StudentGetDefaultChatFunctionsForTenantDetails', variables];
;

useStudentGetDefaultChatFunctionsForTenantDetailsQuery.fetcher = (variables?: StudentGetDefaultChatFunctionsForTenantDetailsQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetDefaultChatFunctionsForTenantDetailsQuery, StudentGetDefaultChatFunctionsForTenantDetailsQueryVariables>(StudentGetDefaultChatFunctionsForTenantDetailsDocument, variables, options);
export const StudentGetModuleAndDefaultInstanceDocument = `
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
export const useStudentGetModuleAndDefaultInstanceQuery = <
      TData = StudentGetModuleAndDefaultInstanceQuery,
      TError = unknown
    >(
      variables: StudentGetModuleAndDefaultInstanceQueryVariables,
      options?: UseQueryOptions<StudentGetModuleAndDefaultInstanceQuery, TError, TData>
    ) =>
    useQuery<StudentGetModuleAndDefaultInstanceQuery, TError, TData>(
      ['StudentGetModuleAndDefaultInstance', variables],
      fetchData<StudentGetModuleAndDefaultInstanceQuery, StudentGetModuleAndDefaultInstanceQueryVariables>(StudentGetModuleAndDefaultInstanceDocument, variables),
      options
    );
useStudentGetModuleAndDefaultInstanceQuery.document = StudentGetModuleAndDefaultInstanceDocument;


useStudentGetModuleAndDefaultInstanceQuery.getKey = (variables: StudentGetModuleAndDefaultInstanceQueryVariables) => ['StudentGetModuleAndDefaultInstance', variables];
;

useStudentGetModuleAndDefaultInstanceQuery.fetcher = (variables: StudentGetModuleAndDefaultInstanceQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetModuleAndDefaultInstanceQuery, StudentGetModuleAndDefaultInstanceQueryVariables>(StudentGetModuleAndDefaultInstanceDocument, variables, options);
export const StudentGetModuleAndInstancesDocument = `
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
export const useStudentGetModuleAndInstancesQuery = <
      TData = StudentGetModuleAndInstancesQuery,
      TError = unknown
    >(
      variables: StudentGetModuleAndInstancesQueryVariables,
      options?: UseQueryOptions<StudentGetModuleAndInstancesQuery, TError, TData>
    ) =>
    useQuery<StudentGetModuleAndInstancesQuery, TError, TData>(
      ['StudentGetModuleAndInstances', variables],
      fetchData<StudentGetModuleAndInstancesQuery, StudentGetModuleAndInstancesQueryVariables>(StudentGetModuleAndInstancesDocument, variables),
      options
    );
useStudentGetModuleAndInstancesQuery.document = StudentGetModuleAndInstancesDocument;


useStudentGetModuleAndInstancesQuery.getKey = (variables: StudentGetModuleAndInstancesQueryVariables) => ['StudentGetModuleAndInstances', variables];
;

useStudentGetModuleAndInstancesQuery.fetcher = (variables: StudentGetModuleAndInstancesQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetModuleAndInstancesQuery, StudentGetModuleAndInstancesQueryVariables>(StudentGetModuleAndInstancesDocument, variables, options);
export const StudentGetModuleInstanceDocument = `
    query StudentGetModuleInstance($input: StudentModuleInstanceInput!) {
  student_moduleInstance(input: $input) {
    ...StandardStudentModuleInstance
  }
}
    ${StandardStudentModuleInstanceFragmentDoc}`;
export const useStudentGetModuleInstanceQuery = <
      TData = StudentGetModuleInstanceQuery,
      TError = unknown
    >(
      variables: StudentGetModuleInstanceQueryVariables,
      options?: UseQueryOptions<StudentGetModuleInstanceQuery, TError, TData>
    ) =>
    useQuery<StudentGetModuleInstanceQuery, TError, TData>(
      ['StudentGetModuleInstance', variables],
      fetchData<StudentGetModuleInstanceQuery, StudentGetModuleInstanceQueryVariables>(StudentGetModuleInstanceDocument, variables),
      options
    );
useStudentGetModuleInstanceQuery.document = StudentGetModuleInstanceDocument;


useStudentGetModuleInstanceQuery.getKey = (variables: StudentGetModuleInstanceQueryVariables) => ['StudentGetModuleInstance', variables];
;

useStudentGetModuleInstanceQuery.fetcher = (variables: StudentGetModuleInstanceQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetModuleInstanceQuery, StudentGetModuleInstanceQueryVariables>(StudentGetModuleInstanceDocument, variables, options);
export const StudentGetModuleInstanceAndStatsDocument = `
    query StudentGetModuleInstanceAndStats($input: StudentModuleInstanceInput!) {
  student_moduleInstance(input: $input) {
    ...StandardStudentModuleInstance
    moduleInstanceStats {
      ...StandardModuleInstanceStats
    }
  }
}
    ${StandardStudentModuleInstanceFragmentDoc}
${StandardModuleInstanceStatsFragmentDoc}
${StandardSetPreviewFragmentDoc}`;
export const useStudentGetModuleInstanceAndStatsQuery = <
      TData = StudentGetModuleInstanceAndStatsQuery,
      TError = unknown
    >(
      variables: StudentGetModuleInstanceAndStatsQueryVariables,
      options?: UseQueryOptions<StudentGetModuleInstanceAndStatsQuery, TError, TData>
    ) =>
    useQuery<StudentGetModuleInstanceAndStatsQuery, TError, TData>(
      ['StudentGetModuleInstanceAndStats', variables],
      fetchData<StudentGetModuleInstanceAndStatsQuery, StudentGetModuleInstanceAndStatsQueryVariables>(StudentGetModuleInstanceAndStatsDocument, variables),
      options
    );
useStudentGetModuleInstanceAndStatsQuery.document = StudentGetModuleInstanceAndStatsDocument;


useStudentGetModuleInstanceAndStatsQuery.getKey = (variables: StudentGetModuleInstanceAndStatsQueryVariables) => ['StudentGetModuleInstanceAndStats', variables];
;

useStudentGetModuleInstanceAndStatsQuery.fetcher = (variables: StudentGetModuleInstanceAndStatsQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetModuleInstanceAndStatsQuery, StudentGetModuleInstanceAndStatsQueryVariables>(StudentGetModuleInstanceAndStatsDocument, variables, options);
export const StudentGetModulesDocument = `
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
${StandardModuleInstanceStatsFragmentDoc}
${StandardSetPreviewFragmentDoc}`;
export const useStudentGetModulesQuery = <
      TData = StudentGetModulesQuery,
      TError = unknown
    >(
      variables: StudentGetModulesQueryVariables,
      options?: UseQueryOptions<StudentGetModulesQuery, TError, TData>
    ) =>
    useQuery<StudentGetModulesQuery, TError, TData>(
      ['StudentGetModules', variables],
      fetchData<StudentGetModulesQuery, StudentGetModulesQueryVariables>(StudentGetModulesDocument, variables),
      options
    );
useStudentGetModulesQuery.document = StudentGetModulesDocument;


useStudentGetModulesQuery.getKey = (variables: StudentGetModulesQueryVariables) => ['StudentGetModules', variables];
;

useStudentGetModulesQuery.fetcher = (variables: StudentGetModulesQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetModulesQuery, StudentGetModulesQueryVariables>(StudentGetModulesDocument, variables, options);
export const StudentGetQuestionPreviewsDocument = `
    query StudentGetQuestionPreviews($input: StudentQuestionPreviewsInput!) {
  student_questionPreviews(input: $input) {
    ...StandardQuestionPreview
  }
}
    ${StandardQuestionPreviewFragmentDoc}`;
export const useStudentGetQuestionPreviewsQuery = <
      TData = StudentGetQuestionPreviewsQuery,
      TError = unknown
    >(
      variables: StudentGetQuestionPreviewsQueryVariables,
      options?: UseQueryOptions<StudentGetQuestionPreviewsQuery, TError, TData>
    ) =>
    useQuery<StudentGetQuestionPreviewsQuery, TError, TData>(
      ['StudentGetQuestionPreviews', variables],
      fetchData<StudentGetQuestionPreviewsQuery, StudentGetQuestionPreviewsQueryVariables>(StudentGetQuestionPreviewsDocument, variables),
      options
    );
useStudentGetQuestionPreviewsQuery.document = StudentGetQuestionPreviewsDocument;


useStudentGetQuestionPreviewsQuery.getKey = (variables: StudentGetQuestionPreviewsQueryVariables) => ['StudentGetQuestionPreviews', variables];
;

useStudentGetQuestionPreviewsQuery.fetcher = (variables: StudentGetQuestionPreviewsQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetQuestionPreviewsQuery, StudentGetQuestionPreviewsQueryVariables>(StudentGetQuestionPreviewsDocument, variables, options);
export const StudentGetSolutionsAccessStatusDocument = `
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
export const useStudentGetSolutionsAccessStatusQuery = <
      TData = StudentGetSolutionsAccessStatusQuery,
      TError = unknown
    >(
      variables: StudentGetSolutionsAccessStatusQueryVariables,
      options?: UseQueryOptions<StudentGetSolutionsAccessStatusQuery, TError, TData>
    ) =>
    useQuery<StudentGetSolutionsAccessStatusQuery, TError, TData>(
      ['StudentGetSolutionsAccessStatus', variables],
      fetchData<StudentGetSolutionsAccessStatusQuery, StudentGetSolutionsAccessStatusQueryVariables>(StudentGetSolutionsAccessStatusDocument, variables),
      options
    );
useStudentGetSolutionsAccessStatusQuery.document = StudentGetSolutionsAccessStatusDocument;


useStudentGetSolutionsAccessStatusQuery.getKey = (variables: StudentGetSolutionsAccessStatusQueryVariables) => ['StudentGetSolutionsAccessStatus', variables];
;

useStudentGetSolutionsAccessStatusQuery.fetcher = (variables: StudentGetSolutionsAccessStatusQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetSolutionsAccessStatusQuery, StudentGetSolutionsAccessStatusQueryVariables>(StudentGetSolutionsAccessStatusDocument, variables, options);
export const StudentGetSubmissionDraftDocument = `
    query StudentGetSubmissionDraft($input: GetSubmissionDraftInput!) {
  getSubmissionDraft(input: $input) {
    snapshot
    feedback
    color
  }
}
    `;
export const useStudentGetSubmissionDraftQuery = <
      TData = StudentGetSubmissionDraftQuery,
      TError = unknown
    >(
      variables: StudentGetSubmissionDraftQueryVariables,
      options?: UseQueryOptions<StudentGetSubmissionDraftQuery, TError, TData>
    ) =>
    useQuery<StudentGetSubmissionDraftQuery, TError, TData>(
      ['StudentGetSubmissionDraft', variables],
      fetchData<StudentGetSubmissionDraftQuery, StudentGetSubmissionDraftQueryVariables>(StudentGetSubmissionDraftDocument, variables),
      options
    );
useStudentGetSubmissionDraftQuery.document = StudentGetSubmissionDraftDocument;


useStudentGetSubmissionDraftQuery.getKey = (variables: StudentGetSubmissionDraftQueryVariables) => ['StudentGetSubmissionDraft', variables];
;

useStudentGetSubmissionDraftQuery.fetcher = (variables: StudentGetSubmissionDraftQueryVariables, options?: RequestInit['headers']) => fetchData<StudentGetSubmissionDraftQuery, StudentGetSubmissionDraftQueryVariables>(StudentGetSubmissionDraftDocument, variables, options);
export const TeacherCheckPublishQuestionsDocument = `
    query TeacherCheckPublishQuestions($input: TeacherPublishQuestionsInput!) {
  teacher_checkPublishQuestions(input: $input) {
    questionsForPublishing
    questionsNotChanged
  }
}
    `;
export const useTeacherCheckPublishQuestionsQuery = <
      TData = TeacherCheckPublishQuestionsQuery,
      TError = unknown
    >(
      variables: TeacherCheckPublishQuestionsQueryVariables,
      options?: UseQueryOptions<TeacherCheckPublishQuestionsQuery, TError, TData>
    ) =>
    useQuery<TeacherCheckPublishQuestionsQuery, TError, TData>(
      ['TeacherCheckPublishQuestions', variables],
      fetchData<TeacherCheckPublishQuestionsQuery, TeacherCheckPublishQuestionsQueryVariables>(TeacherCheckPublishQuestionsDocument, variables),
      options
    );
useTeacherCheckPublishQuestionsQuery.document = TeacherCheckPublishQuestionsDocument;


useTeacherCheckPublishQuestionsQuery.getKey = (variables: TeacherCheckPublishQuestionsQueryVariables) => ['TeacherCheckPublishQuestions', variables];
;

useTeacherCheckPublishQuestionsQuery.fetcher = (variables: TeacherCheckPublishQuestionsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherCheckPublishQuestionsQuery, TeacherCheckPublishQuestionsQueryVariables>(TeacherCheckPublishQuestionsDocument, variables, options);
export const TeacherGetAllModuleInstanceStudentsDocument = `
    query TeacherGetAllModuleInstanceStudents($input: TeacherGetModuleInstanceInput!) {
  teacher_allModuleInstanceStudents(input: $input) {
    id
    email
  }
}
    `;
export const useTeacherGetAllModuleInstanceStudentsQuery = <
      TData = TeacherGetAllModuleInstanceStudentsQuery,
      TError = unknown
    >(
      variables: TeacherGetAllModuleInstanceStudentsQueryVariables,
      options?: UseQueryOptions<TeacherGetAllModuleInstanceStudentsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetAllModuleInstanceStudentsQuery, TError, TData>(
      ['TeacherGetAllModuleInstanceStudents', variables],
      fetchData<TeacherGetAllModuleInstanceStudentsQuery, TeacherGetAllModuleInstanceStudentsQueryVariables>(TeacherGetAllModuleInstanceStudentsDocument, variables),
      options
    );
useTeacherGetAllModuleInstanceStudentsQuery.document = TeacherGetAllModuleInstanceStudentsDocument;


useTeacherGetAllModuleInstanceStudentsQuery.getKey = (variables: TeacherGetAllModuleInstanceStudentsQueryVariables) => ['TeacherGetAllModuleInstanceStudents', variables];
;

useTeacherGetAllModuleInstanceStudentsQuery.fetcher = (variables: TeacherGetAllModuleInstanceStudentsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetAllModuleInstanceStudentsQuery, TeacherGetAllModuleInstanceStudentsQueryVariables>(TeacherGetAllModuleInstanceStudentsDocument, variables, options);
export const TeacherGetAllModuleInstanceTeachersDocument = `
    query TeacherGetAllModuleInstanceTeachers($input: TeacherGetModuleInstanceInput!) {
  teacher_allModuleInstanceTeachers(input: $input) {
    id
    email
    name
  }
}
    `;
export const useTeacherGetAllModuleInstanceTeachersQuery = <
      TData = TeacherGetAllModuleInstanceTeachersQuery,
      TError = unknown
    >(
      variables: TeacherGetAllModuleInstanceTeachersQueryVariables,
      options?: UseQueryOptions<TeacherGetAllModuleInstanceTeachersQuery, TError, TData>
    ) =>
    useQuery<TeacherGetAllModuleInstanceTeachersQuery, TError, TData>(
      ['TeacherGetAllModuleInstanceTeachers', variables],
      fetchData<TeacherGetAllModuleInstanceTeachersQuery, TeacherGetAllModuleInstanceTeachersQueryVariables>(TeacherGetAllModuleInstanceTeachersDocument, variables),
      options
    );
useTeacherGetAllModuleInstanceTeachersQuery.document = TeacherGetAllModuleInstanceTeachersDocument;


useTeacherGetAllModuleInstanceTeachersQuery.getKey = (variables: TeacherGetAllModuleInstanceTeachersQueryVariables) => ['TeacherGetAllModuleInstanceTeachers', variables];
;

useTeacherGetAllModuleInstanceTeachersQuery.fetcher = (variables: TeacherGetAllModuleInstanceTeachersQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetAllModuleInstanceTeachersQuery, TeacherGetAllModuleInstanceTeachersQueryVariables>(TeacherGetAllModuleInstanceTeachersDocument, variables, options);
export const TeacherGetCloneableQuestionsDocument = `
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
    ${StandardTeacherQuestionFragmentDoc}
${StandardTeacherPartFragmentDoc}
${StandardTeacherResponseAreaFragmentDoc}
${TeacherModularResponseFragmentDoc}`;
export const useTeacherGetCloneableQuestionsQuery = <
      TData = TeacherGetCloneableQuestionsQuery,
      TError = unknown
    >(
      variables: TeacherGetCloneableQuestionsQueryVariables,
      options?: UseQueryOptions<TeacherGetCloneableQuestionsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetCloneableQuestionsQuery, TError, TData>(
      ['TeacherGetCloneableQuestions', variables],
      fetchData<TeacherGetCloneableQuestionsQuery, TeacherGetCloneableQuestionsQueryVariables>(TeacherGetCloneableQuestionsDocument, variables),
      options
    );
useTeacherGetCloneableQuestionsQuery.document = TeacherGetCloneableQuestionsDocument;


useTeacherGetCloneableQuestionsQuery.getKey = (variables: TeacherGetCloneableQuestionsQueryVariables) => ['TeacherGetCloneableQuestions', variables];
;

useTeacherGetCloneableQuestionsQuery.fetcher = (variables: TeacherGetCloneableQuestionsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetCloneableQuestionsQuery, TeacherGetCloneableQuestionsQueryVariables>(TeacherGetCloneableQuestionsDocument, variables, options);
export const TeacherGetCommentsDocument = `
    query TeacherGetComments($input: TeacherCommentsInput!) {
  teacher_comments(input: $input) {
    edges {
      ...StandardComment
    }
    total
  }
}
    ${StandardCommentFragmentDoc}
${CommentFieldsFragmentDoc}
${StandardCommentFeedbackFragmentDoc}
${CommentReactionsFragmentDoc}`;
export const useTeacherGetCommentsQuery = <
      TData = TeacherGetCommentsQuery,
      TError = unknown
    >(
      variables: TeacherGetCommentsQueryVariables,
      options?: UseQueryOptions<TeacherGetCommentsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetCommentsQuery, TError, TData>(
      ['TeacherGetComments', variables],
      fetchData<TeacherGetCommentsQuery, TeacherGetCommentsQueryVariables>(TeacherGetCommentsDocument, variables),
      options
    );
useTeacherGetCommentsQuery.document = TeacherGetCommentsDocument;


useTeacherGetCommentsQuery.getKey = (variables: TeacherGetCommentsQueryVariables) => ['TeacherGetComments', variables];
;

useTeacherGetCommentsQuery.fetcher = (variables: TeacherGetCommentsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetCommentsQuery, TeacherGetCommentsQueryVariables>(TeacherGetCommentsDocument, variables, options);
export const TeacherGetFunctionDocument = `
    query TeacherGetFunction($name: String!) {
  teacher_evaluationFunction(name: $name) {
    ...StandardTeacherFunction
  }
}
    ${StandardTeacherFunctionFragmentDoc}`;
export const useTeacherGetFunctionQuery = <
      TData = TeacherGetFunctionQuery,
      TError = unknown
    >(
      variables: TeacherGetFunctionQueryVariables,
      options?: UseQueryOptions<TeacherGetFunctionQuery, TError, TData>
    ) =>
    useQuery<TeacherGetFunctionQuery, TError, TData>(
      ['TeacherGetFunction', variables],
      fetchData<TeacherGetFunctionQuery, TeacherGetFunctionQueryVariables>(TeacherGetFunctionDocument, variables),
      options
    );
useTeacherGetFunctionQuery.document = TeacherGetFunctionDocument;


useTeacherGetFunctionQuery.getKey = (variables: TeacherGetFunctionQueryVariables) => ['TeacherGetFunction', variables];
;

useTeacherGetFunctionQuery.fetcher = (variables: TeacherGetFunctionQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetFunctionQuery, TeacherGetFunctionQueryVariables>(TeacherGetFunctionDocument, variables, options);
export const TeacherGetFunctionsDocument = `
    query TeacherGetFunctions($input: TeacherEvaluationFunctionsInput!) {
  teacher_evaluationFunctions(input: $input) {
    edges {
      ...StandardTeacherFunction
    }
    total
  }
}
    ${StandardTeacherFunctionFragmentDoc}`;
export const useTeacherGetFunctionsQuery = <
      TData = TeacherGetFunctionsQuery,
      TError = unknown
    >(
      variables: TeacherGetFunctionsQueryVariables,
      options?: UseQueryOptions<TeacherGetFunctionsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetFunctionsQuery, TError, TData>(
      ['TeacherGetFunctions', variables],
      fetchData<TeacherGetFunctionsQuery, TeacherGetFunctionsQueryVariables>(TeacherGetFunctionsDocument, variables),
      options
    );
useTeacherGetFunctionsQuery.document = TeacherGetFunctionsDocument;


useTeacherGetFunctionsQuery.getKey = (variables: TeacherGetFunctionsQueryVariables) => ['TeacherGetFunctions', variables];
;

useTeacherGetFunctionsQuery.fetcher = (variables: TeacherGetFunctionsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetFunctionsQuery, TeacherGetFunctionsQueryVariables>(TeacherGetFunctionsDocument, variables, options);
export const TeacherGetModuleAccessDailyStatisticsDocument = `
    query TeacherGetModuleAccessDailyStatistics($input: ModuleAccessStatisticsInput!) {
  teacher_moduleAccessDailyStatistics(input: $input) {
    ...StandardGraphStatistics
  }
}
    ${StandardGraphStatisticsFragmentDoc}
${StandardGraphStatisticsColumnFragmentDoc}
${StandardGraphStatisticsLineFragmentDoc}`;
export const useTeacherGetModuleAccessDailyStatisticsQuery = <
      TData = TeacherGetModuleAccessDailyStatisticsQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleAccessDailyStatisticsQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleAccessDailyStatisticsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleAccessDailyStatisticsQuery, TError, TData>(
      ['TeacherGetModuleAccessDailyStatistics', variables],
      fetchData<TeacherGetModuleAccessDailyStatisticsQuery, TeacherGetModuleAccessDailyStatisticsQueryVariables>(TeacherGetModuleAccessDailyStatisticsDocument, variables),
      options
    );
useTeacherGetModuleAccessDailyStatisticsQuery.document = TeacherGetModuleAccessDailyStatisticsDocument;


useTeacherGetModuleAccessDailyStatisticsQuery.getKey = (variables: TeacherGetModuleAccessDailyStatisticsQueryVariables) => ['TeacherGetModuleAccessDailyStatistics', variables];
;

useTeacherGetModuleAccessDailyStatisticsQuery.fetcher = (variables: TeacherGetModuleAccessDailyStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleAccessDailyStatisticsQuery, TeacherGetModuleAccessDailyStatisticsQueryVariables>(TeacherGetModuleAccessDailyStatisticsDocument, variables, options);
export const TeacherGetModuleAccessStatisticsDocument = `
    query TeacherGetModuleAccessStatistics($input: ModuleAccessStatisticsInput!) {
  teacher_moduleAccessStatistics(input: $input) {
    noOfStudents
    graphStatistics {
      ...StandardGraphStatistics
    }
  }
}
    ${StandardGraphStatisticsFragmentDoc}
${StandardGraphStatisticsColumnFragmentDoc}
${StandardGraphStatisticsLineFragmentDoc}`;
export const useTeacherGetModuleAccessStatisticsQuery = <
      TData = TeacherGetModuleAccessStatisticsQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleAccessStatisticsQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleAccessStatisticsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleAccessStatisticsQuery, TError, TData>(
      ['TeacherGetModuleAccessStatistics', variables],
      fetchData<TeacherGetModuleAccessStatisticsQuery, TeacherGetModuleAccessStatisticsQueryVariables>(TeacherGetModuleAccessStatisticsDocument, variables),
      options
    );
useTeacherGetModuleAccessStatisticsQuery.document = TeacherGetModuleAccessStatisticsDocument;


useTeacherGetModuleAccessStatisticsQuery.getKey = (variables: TeacherGetModuleAccessStatisticsQueryVariables) => ['TeacherGetModuleAccessStatistics', variables];
;

useTeacherGetModuleAccessStatisticsQuery.fetcher = (variables: TeacherGetModuleAccessStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleAccessStatisticsQuery, TeacherGetModuleAccessStatisticsQueryVariables>(TeacherGetModuleAccessStatisticsDocument, variables, options);
export const TeacherGetModuleAndInstancesDocument = `
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
export const useTeacherGetModuleAndInstancesQuery = <
      TData = TeacherGetModuleAndInstancesQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleAndInstancesQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleAndInstancesQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleAndInstancesQuery, TError, TData>(
      ['TeacherGetModuleAndInstances', variables],
      fetchData<TeacherGetModuleAndInstancesQuery, TeacherGetModuleAndInstancesQueryVariables>(TeacherGetModuleAndInstancesDocument, variables),
      options
    );
useTeacherGetModuleAndInstancesQuery.document = TeacherGetModuleAndInstancesDocument;


useTeacherGetModuleAndInstancesQuery.getKey = (variables: TeacherGetModuleAndInstancesQueryVariables) => ['TeacherGetModuleAndInstances', variables];
;

useTeacherGetModuleAndInstancesQuery.fetcher = (variables: TeacherGetModuleAndInstancesQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleAndInstancesQuery, TeacherGetModuleAndInstancesQueryVariables>(TeacherGetModuleAndInstancesDocument, variables, options);
export const TeacherGetModuleInstanceCommentsExistDocument = `
    query TeacherGetModuleInstanceCommentsExist($input: TeacherCommentsExistInput!) {
  teacher_commentsExist(input: $input) {
    commentsExist
  }
}
    `;
export const useTeacherGetModuleInstanceCommentsExistQuery = <
      TData = TeacherGetModuleInstanceCommentsExistQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceCommentsExistQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceCommentsExistQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceCommentsExistQuery, TError, TData>(
      ['TeacherGetModuleInstanceCommentsExist', variables],
      fetchData<TeacherGetModuleInstanceCommentsExistQuery, TeacherGetModuleInstanceCommentsExistQueryVariables>(TeacherGetModuleInstanceCommentsExistDocument, variables),
      options
    );
useTeacherGetModuleInstanceCommentsExistQuery.document = TeacherGetModuleInstanceCommentsExistDocument;


useTeacherGetModuleInstanceCommentsExistQuery.getKey = (variables: TeacherGetModuleInstanceCommentsExistQueryVariables) => ['TeacherGetModuleInstanceCommentsExist', variables];
;

useTeacherGetModuleInstanceCommentsExistQuery.fetcher = (variables: TeacherGetModuleInstanceCommentsExistQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceCommentsExistQuery, TeacherGetModuleInstanceCommentsExistQueryVariables>(TeacherGetModuleInstanceCommentsExistDocument, variables, options);
export const TeacherGetModuleInstanceDocument = `
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
    ${StandardTeacherModuleInstanceFragmentDoc}
${StandardTeacherSetForModuleInstanceFragmentDoc}`;
export const useTeacherGetModuleInstanceQuery = <
      TData = TeacherGetModuleInstanceQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceQuery, TError, TData>(
      ['TeacherGetModuleInstance', variables],
      fetchData<TeacherGetModuleInstanceQuery, TeacherGetModuleInstanceQueryVariables>(TeacherGetModuleInstanceDocument, variables),
      options
    );
useTeacherGetModuleInstanceQuery.document = TeacherGetModuleInstanceDocument;


useTeacherGetModuleInstanceQuery.getKey = (variables: TeacherGetModuleInstanceQueryVariables) => ['TeacherGetModuleInstance', variables];
;

useTeacherGetModuleInstanceQuery.fetcher = (variables: TeacherGetModuleInstanceQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceQuery, TeacherGetModuleInstanceQueryVariables>(TeacherGetModuleInstanceDocument, variables, options);
export const TeacherGetModuleInstanceActivitiesDocument = `
    query TeacherGetModuleInstanceActivities($input: TeacherModuleInstanceActivitiesInput!) {
  teacher_moduleInstanceActivities(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceActivity
    }
    total
  }
}
    ${StandardTeacherModuleInstanceActivityFragmentDoc}`;
export const useTeacherGetModuleInstanceActivitiesQuery = <
      TData = TeacherGetModuleInstanceActivitiesQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceActivitiesQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceActivitiesQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceActivitiesQuery, TError, TData>(
      ['TeacherGetModuleInstanceActivities', variables],
      fetchData<TeacherGetModuleInstanceActivitiesQuery, TeacherGetModuleInstanceActivitiesQueryVariables>(TeacherGetModuleInstanceActivitiesDocument, variables),
      options
    );
useTeacherGetModuleInstanceActivitiesQuery.document = TeacherGetModuleInstanceActivitiesDocument;


useTeacherGetModuleInstanceActivitiesQuery.getKey = (variables: TeacherGetModuleInstanceActivitiesQueryVariables) => ['TeacherGetModuleInstanceActivities', variables];
;

useTeacherGetModuleInstanceActivitiesQuery.fetcher = (variables: TeacherGetModuleInstanceActivitiesQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceActivitiesQuery, TeacherGetModuleInstanceActivitiesQueryVariables>(TeacherGetModuleInstanceActivitiesDocument, variables, options);
export const TeacherGetModuleInstanceErrorsDocument = `
    query TeacherGetModuleInstanceErrors($input: TeacherModuleInstancePaginationInput!) {
  teacher_moduleInstanceErrors(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceError
    }
    total
  }
}
    ${StandardTeacherModuleInstanceErrorFragmentDoc}`;
export const useTeacherGetModuleInstanceErrorsQuery = <
      TData = TeacherGetModuleInstanceErrorsQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceErrorsQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceErrorsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceErrorsQuery, TError, TData>(
      ['TeacherGetModuleInstanceErrors', variables],
      fetchData<TeacherGetModuleInstanceErrorsQuery, TeacherGetModuleInstanceErrorsQueryVariables>(TeacherGetModuleInstanceErrorsDocument, variables),
      options
    );
useTeacherGetModuleInstanceErrorsQuery.document = TeacherGetModuleInstanceErrorsDocument;


useTeacherGetModuleInstanceErrorsQuery.getKey = (variables: TeacherGetModuleInstanceErrorsQueryVariables) => ['TeacherGetModuleInstanceErrors', variables];
;

useTeacherGetModuleInstanceErrorsQuery.fetcher = (variables: TeacherGetModuleInstanceErrorsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceErrorsQuery, TeacherGetModuleInstanceErrorsQueryVariables>(TeacherGetModuleInstanceErrorsDocument, variables, options);
export const TeacherGetModuleInstanceFlagsDocument = `
    query TeacherGetModuleInstanceFlags($input: TeacherModuleInstanceFlagsInput!) {
  teacher_moduleInstanceFlags(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceFlag
    }
    total
  }
}
    ${StandardTeacherModuleInstanceFlagFragmentDoc}`;
export const useTeacherGetModuleInstanceFlagsQuery = <
      TData = TeacherGetModuleInstanceFlagsQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceFlagsQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceFlagsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceFlagsQuery, TError, TData>(
      ['TeacherGetModuleInstanceFlags', variables],
      fetchData<TeacherGetModuleInstanceFlagsQuery, TeacherGetModuleInstanceFlagsQueryVariables>(TeacherGetModuleInstanceFlagsDocument, variables),
      options
    );
useTeacherGetModuleInstanceFlagsQuery.document = TeacherGetModuleInstanceFlagsDocument;


useTeacherGetModuleInstanceFlagsQuery.getKey = (variables: TeacherGetModuleInstanceFlagsQueryVariables) => ['TeacherGetModuleInstanceFlags', variables];
;

useTeacherGetModuleInstanceFlagsQuery.fetcher = (variables: TeacherGetModuleInstanceFlagsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceFlagsQuery, TeacherGetModuleInstanceFlagsQueryVariables>(TeacherGetModuleInstanceFlagsDocument, variables, options);
export const TeacherGetModuleInstanceMetaDocument = `
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
export const useTeacherGetModuleInstanceMetaQuery = <
      TData = TeacherGetModuleInstanceMetaQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceMetaQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceMetaQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceMetaQuery, TError, TData>(
      ['TeacherGetModuleInstanceMeta', variables],
      fetchData<TeacherGetModuleInstanceMetaQuery, TeacherGetModuleInstanceMetaQueryVariables>(TeacherGetModuleInstanceMetaDocument, variables),
      options
    );
useTeacherGetModuleInstanceMetaQuery.document = TeacherGetModuleInstanceMetaDocument;


useTeacherGetModuleInstanceMetaQuery.getKey = (variables: TeacherGetModuleInstanceMetaQueryVariables) => ['TeacherGetModuleInstanceMeta', variables];
;

useTeacherGetModuleInstanceMetaQuery.fetcher = (variables: TeacherGetModuleInstanceMetaQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceMetaQuery, TeacherGetModuleInstanceMetaQueryVariables>(TeacherGetModuleInstanceMetaDocument, variables, options);
export const TeacherGetModuleInstanceStudentStatsDocument = `
    query TeacherGetModuleInstanceStudentStats($input: TeacherGetModuleInstanceStudentStatsInput!) {
  teacher_moduleInstanceStudentStatistics(input: $input) {
    ...StandardStudentModuleInstance
    moduleInstanceStats {
      ...StandardModuleInstanceStats
    }
  }
}
    ${StandardStudentModuleInstanceFragmentDoc}
${StandardModuleInstanceStatsFragmentDoc}
${StandardSetPreviewFragmentDoc}`;
export const useTeacherGetModuleInstanceStudentStatsQuery = <
      TData = TeacherGetModuleInstanceStudentStatsQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceStudentStatsQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceStudentStatsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceStudentStatsQuery, TError, TData>(
      ['TeacherGetModuleInstanceStudentStats', variables],
      fetchData<TeacherGetModuleInstanceStudentStatsQuery, TeacherGetModuleInstanceStudentStatsQueryVariables>(TeacherGetModuleInstanceStudentStatsDocument, variables),
      options
    );
useTeacherGetModuleInstanceStudentStatsQuery.document = TeacherGetModuleInstanceStudentStatsDocument;


useTeacherGetModuleInstanceStudentStatsQuery.getKey = (variables: TeacherGetModuleInstanceStudentStatsQueryVariables) => ['TeacherGetModuleInstanceStudentStats', variables];
;

useTeacherGetModuleInstanceStudentStatsQuery.fetcher = (variables: TeacherGetModuleInstanceStudentStatsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceStudentStatsQuery, TeacherGetModuleInstanceStudentStatsQueryVariables>(TeacherGetModuleInstanceStudentStatsDocument, variables, options);
export const TeacherGetModuleInstanceStudentsDocument = `
    query TeacherGetModuleInstanceStudents($input: TeacherModuleInstanceStudentContactsInput!) {
  teacher_moduleInstanceStudents(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceStudent
    }
    total
  }
}
    ${StandardTeacherModuleInstanceStudentFragmentDoc}`;
export const useTeacherGetModuleInstanceStudentsQuery = <
      TData = TeacherGetModuleInstanceStudentsQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceStudentsQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceStudentsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceStudentsQuery, TError, TData>(
      ['TeacherGetModuleInstanceStudents', variables],
      fetchData<TeacherGetModuleInstanceStudentsQuery, TeacherGetModuleInstanceStudentsQueryVariables>(TeacherGetModuleInstanceStudentsDocument, variables),
      options
    );
useTeacherGetModuleInstanceStudentsQuery.document = TeacherGetModuleInstanceStudentsDocument;


useTeacherGetModuleInstanceStudentsQuery.getKey = (variables: TeacherGetModuleInstanceStudentsQueryVariables) => ['TeacherGetModuleInstanceStudents', variables];
;

useTeacherGetModuleInstanceStudentsQuery.fetcher = (variables: TeacherGetModuleInstanceStudentsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceStudentsQuery, TeacherGetModuleInstanceStudentsQueryVariables>(TeacherGetModuleInstanceStudentsDocument, variables, options);
export const TeacherGetModuleInstanceStudentsStatsDocument = `
    query TeacherGetModuleInstanceStudentsStats($input: TeacherGetModuleInstanceStudentsStatsInput!) {
  teacher_moduleInstanceStudentsStatistics(input: $input) {
    edges {
      ...StandardTeacherModuleInstanceStudentStats
    }
    total
  }
}
    ${StandardTeacherModuleInstanceStudentStatsFragmentDoc}
${StandardModuleInstanceStatsFragmentDoc}
${StandardSetPreviewFragmentDoc}`;
export const useTeacherGetModuleInstanceStudentsStatsQuery = <
      TData = TeacherGetModuleInstanceStudentsStatsQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceStudentsStatsQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceStudentsStatsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceStudentsStatsQuery, TError, TData>(
      ['TeacherGetModuleInstanceStudentsStats', variables],
      fetchData<TeacherGetModuleInstanceStudentsStatsQuery, TeacherGetModuleInstanceStudentsStatsQueryVariables>(TeacherGetModuleInstanceStudentsStatsDocument, variables),
      options
    );
useTeacherGetModuleInstanceStudentsStatsQuery.document = TeacherGetModuleInstanceStudentsStatsDocument;


useTeacherGetModuleInstanceStudentsStatsQuery.getKey = (variables: TeacherGetModuleInstanceStudentsStatsQueryVariables) => ['TeacherGetModuleInstanceStudentsStats', variables];
;

useTeacherGetModuleInstanceStudentsStatsQuery.fetcher = (variables: TeacherGetModuleInstanceStudentsStatsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceStudentsStatsQuery, TeacherGetModuleInstanceStudentsStatsQueryVariables>(TeacherGetModuleInstanceStudentsStatsDocument, variables, options);
export const TeacherGetModuleInstanceWithStudentsDocument = `
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
export const useTeacherGetModuleInstanceWithStudentsQuery = <
      TData = TeacherGetModuleInstanceWithStudentsQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceWithStudentsQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceWithStudentsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceWithStudentsQuery, TError, TData>(
      ['TeacherGetModuleInstanceWithStudents', variables],
      fetchData<TeacherGetModuleInstanceWithStudentsQuery, TeacherGetModuleInstanceWithStudentsQueryVariables>(TeacherGetModuleInstanceWithStudentsDocument, variables),
      options
    );
useTeacherGetModuleInstanceWithStudentsQuery.document = TeacherGetModuleInstanceWithStudentsDocument;


useTeacherGetModuleInstanceWithStudentsQuery.getKey = (variables: TeacherGetModuleInstanceWithStudentsQueryVariables) => ['TeacherGetModuleInstanceWithStudents', variables];
;

useTeacherGetModuleInstanceWithStudentsQuery.fetcher = (variables: TeacherGetModuleInstanceWithStudentsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceWithStudentsQuery, TeacherGetModuleInstanceWithStudentsQueryVariables>(TeacherGetModuleInstanceWithStudentsDocument, variables, options);
export const TeacherGetModuleInstanceWithTeachersDocument = `
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
export const useTeacherGetModuleInstanceWithTeachersQuery = <
      TData = TeacherGetModuleInstanceWithTeachersQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstanceWithTeachersQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstanceWithTeachersQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstanceWithTeachersQuery, TError, TData>(
      ['TeacherGetModuleInstanceWithTeachers', variables],
      fetchData<TeacherGetModuleInstanceWithTeachersQuery, TeacherGetModuleInstanceWithTeachersQueryVariables>(TeacherGetModuleInstanceWithTeachersDocument, variables),
      options
    );
useTeacherGetModuleInstanceWithTeachersQuery.document = TeacherGetModuleInstanceWithTeachersDocument;


useTeacherGetModuleInstanceWithTeachersQuery.getKey = (variables: TeacherGetModuleInstanceWithTeachersQueryVariables) => ['TeacherGetModuleInstanceWithTeachers', variables];
;

useTeacherGetModuleInstanceWithTeachersQuery.fetcher = (variables: TeacherGetModuleInstanceWithTeachersQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstanceWithTeachersQuery, TeacherGetModuleInstanceWithTeachersQueryVariables>(TeacherGetModuleInstanceWithTeachersDocument, variables, options);
export const TeacherGetModuleInstancesDocument = `
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
export const useTeacherGetModuleInstancesQuery = <
      TData = TeacherGetModuleInstancesQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleInstancesQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleInstancesQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleInstancesQuery, TError, TData>(
      ['TeacherGetModuleInstances', variables],
      fetchData<TeacherGetModuleInstancesQuery, TeacherGetModuleInstancesQueryVariables>(TeacherGetModuleInstancesDocument, variables),
      options
    );
useTeacherGetModuleInstancesQuery.document = TeacherGetModuleInstancesDocument;


useTeacherGetModuleInstancesQuery.getKey = (variables: TeacherGetModuleInstancesQueryVariables) => ['TeacherGetModuleInstances', variables];
;

useTeacherGetModuleInstancesQuery.fetcher = (variables: TeacherGetModuleInstancesQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleInstancesQuery, TeacherGetModuleInstancesQueryVariables>(TeacherGetModuleInstancesDocument, variables, options);
export const TeacherGetModuleStudentTagsAllDocument = `
    query TeacherGetModuleStudentTagsAll($input: TeacherModuleStudentTagsInput!) {
  teacher_moduleStudentTagsAll(input: $input) {
    ...StandardStudentTag
  }
}
    ${StandardStudentTagFragmentDoc}`;
export const useTeacherGetModuleStudentTagsAllQuery = <
      TData = TeacherGetModuleStudentTagsAllQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleStudentTagsAllQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleStudentTagsAllQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleStudentTagsAllQuery, TError, TData>(
      ['TeacherGetModuleStudentTagsAll', variables],
      fetchData<TeacherGetModuleStudentTagsAllQuery, TeacherGetModuleStudentTagsAllQueryVariables>(TeacherGetModuleStudentTagsAllDocument, variables),
      options
    );
useTeacherGetModuleStudentTagsAllQuery.document = TeacherGetModuleStudentTagsAllDocument;


useTeacherGetModuleStudentTagsAllQuery.getKey = (variables: TeacherGetModuleStudentTagsAllQueryVariables) => ['TeacherGetModuleStudentTagsAll', variables];
;

useTeacherGetModuleStudentTagsAllQuery.fetcher = (variables: TeacherGetModuleStudentTagsAllQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleStudentTagsAllQuery, TeacherGetModuleStudentTagsAllQueryVariables>(TeacherGetModuleStudentTagsAllDocument, variables, options);
export const TeacherGetModuleTeacherRoleDocument = `
    query TeacherGetModuleTeacherRole($input: TeacherGetModuleTeacherRoleInput!) {
  teacher_moduleTeacherRole(input: $input) {
    ...StandardTeacherRole
  }
}
    ${StandardTeacherRoleFragmentDoc}
${StandardFunctionCodeFragmentDoc}`;
export const useTeacherGetModuleTeacherRoleQuery = <
      TData = TeacherGetModuleTeacherRoleQuery,
      TError = unknown
    >(
      variables: TeacherGetModuleTeacherRoleQueryVariables,
      options?: UseQueryOptions<TeacherGetModuleTeacherRoleQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModuleTeacherRoleQuery, TError, TData>(
      ['TeacherGetModuleTeacherRole', variables],
      fetchData<TeacherGetModuleTeacherRoleQuery, TeacherGetModuleTeacherRoleQueryVariables>(TeacherGetModuleTeacherRoleDocument, variables),
      options
    );
useTeacherGetModuleTeacherRoleQuery.document = TeacherGetModuleTeacherRoleDocument;


useTeacherGetModuleTeacherRoleQuery.getKey = (variables: TeacherGetModuleTeacherRoleQueryVariables) => ['TeacherGetModuleTeacherRole', variables];
;

useTeacherGetModuleTeacherRoleQuery.fetcher = (variables: TeacherGetModuleTeacherRoleQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModuleTeacherRoleQuery, TeacherGetModuleTeacherRoleQueryVariables>(TeacherGetModuleTeacherRoleDocument, variables, options);
export const TeacherGetModulesDocument = `
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
export const useTeacherGetModulesQuery = <
      TData = TeacherGetModulesQuery,
      TError = unknown
    >(
      variables?: TeacherGetModulesQueryVariables,
      options?: UseQueryOptions<TeacherGetModulesQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModulesQuery, TError, TData>(
      variables === undefined ? ['TeacherGetModules'] : ['TeacherGetModules', variables],
      fetchData<TeacherGetModulesQuery, TeacherGetModulesQueryVariables>(TeacherGetModulesDocument, variables),
      options
    );
useTeacherGetModulesQuery.document = TeacherGetModulesDocument;


useTeacherGetModulesQuery.getKey = (variables?: TeacherGetModulesQueryVariables) => variables === undefined ? ['TeacherGetModules'] : ['TeacherGetModules', variables];
;

useTeacherGetModulesQuery.fetcher = (variables?: TeacherGetModulesQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModulesQuery, TeacherGetModulesQueryVariables>(TeacherGetModulesDocument, variables, options);
export const TeacherGetModulesAccessStatisticsDocument = `
    query TeacherGetModulesAccessStatistics {
  teacher_modulesAccessStatistics {
    ...StandardGraphStatistics
  }
}
    ${StandardGraphStatisticsFragmentDoc}
${StandardGraphStatisticsColumnFragmentDoc}
${StandardGraphStatisticsLineFragmentDoc}`;
export const useTeacherGetModulesAccessStatisticsQuery = <
      TData = TeacherGetModulesAccessStatisticsQuery,
      TError = unknown
    >(
      variables?: TeacherGetModulesAccessStatisticsQueryVariables,
      options?: UseQueryOptions<TeacherGetModulesAccessStatisticsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModulesAccessStatisticsQuery, TError, TData>(
      variables === undefined ? ['TeacherGetModulesAccessStatistics'] : ['TeacherGetModulesAccessStatistics', variables],
      fetchData<TeacherGetModulesAccessStatisticsQuery, TeacherGetModulesAccessStatisticsQueryVariables>(TeacherGetModulesAccessStatisticsDocument, variables),
      options
    );
useTeacherGetModulesAccessStatisticsQuery.document = TeacherGetModulesAccessStatisticsDocument;


useTeacherGetModulesAccessStatisticsQuery.getKey = (variables?: TeacherGetModulesAccessStatisticsQueryVariables) => variables === undefined ? ['TeacherGetModulesAccessStatistics'] : ['TeacherGetModulesAccessStatistics', variables];
;

useTeacherGetModulesAccessStatisticsQuery.fetcher = (variables?: TeacherGetModulesAccessStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModulesAccessStatisticsQuery, TeacherGetModulesAccessStatisticsQueryVariables>(TeacherGetModulesAccessStatisticsDocument, variables, options);
export const TeacherGetModulesAccessWeeklyStatisticsDocument = `
    query TeacherGetModulesAccessWeeklyStatistics {
  teacher_modulesAccessWeeklyStatistics {
    ...StandardGraphStatistics
  }
}
    ${StandardGraphStatisticsFragmentDoc}
${StandardGraphStatisticsColumnFragmentDoc}
${StandardGraphStatisticsLineFragmentDoc}`;
export const useTeacherGetModulesAccessWeeklyStatisticsQuery = <
      TData = TeacherGetModulesAccessWeeklyStatisticsQuery,
      TError = unknown
    >(
      variables?: TeacherGetModulesAccessWeeklyStatisticsQueryVariables,
      options?: UseQueryOptions<TeacherGetModulesAccessWeeklyStatisticsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModulesAccessWeeklyStatisticsQuery, TError, TData>(
      variables === undefined ? ['TeacherGetModulesAccessWeeklyStatistics'] : ['TeacherGetModulesAccessWeeklyStatistics', variables],
      fetchData<TeacherGetModulesAccessWeeklyStatisticsQuery, TeacherGetModulesAccessWeeklyStatisticsQueryVariables>(TeacherGetModulesAccessWeeklyStatisticsDocument, variables),
      options
    );
useTeacherGetModulesAccessWeeklyStatisticsQuery.document = TeacherGetModulesAccessWeeklyStatisticsDocument;


useTeacherGetModulesAccessWeeklyStatisticsQuery.getKey = (variables?: TeacherGetModulesAccessWeeklyStatisticsQueryVariables) => variables === undefined ? ['TeacherGetModulesAccessWeeklyStatistics'] : ['TeacherGetModulesAccessWeeklyStatistics', variables];
;

useTeacherGetModulesAccessWeeklyStatisticsQuery.fetcher = (variables?: TeacherGetModulesAccessWeeklyStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModulesAccessWeeklyStatisticsQuery, TeacherGetModulesAccessWeeklyStatisticsQueryVariables>(TeacherGetModulesAccessWeeklyStatisticsDocument, variables, options);
export const TeacherGetModulesActivitiesDocument = `
    query TeacherGetModulesActivities($input: TeacherModulesActivitiesInput!) {
  teacher_modulesActivities(input: $input) {
    edges {
      ...StandardTeacherModulesActivity
    }
    total
  }
}
    ${StandardTeacherModulesActivityFragmentDoc}`;
export const useTeacherGetModulesActivitiesQuery = <
      TData = TeacherGetModulesActivitiesQuery,
      TError = unknown
    >(
      variables: TeacherGetModulesActivitiesQueryVariables,
      options?: UseQueryOptions<TeacherGetModulesActivitiesQuery, TError, TData>
    ) =>
    useQuery<TeacherGetModulesActivitiesQuery, TError, TData>(
      ['TeacherGetModulesActivities', variables],
      fetchData<TeacherGetModulesActivitiesQuery, TeacherGetModulesActivitiesQueryVariables>(TeacherGetModulesActivitiesDocument, variables),
      options
    );
useTeacherGetModulesActivitiesQuery.document = TeacherGetModulesActivitiesDocument;


useTeacherGetModulesActivitiesQuery.getKey = (variables: TeacherGetModulesActivitiesQueryVariables) => ['TeacherGetModulesActivities', variables];
;

useTeacherGetModulesActivitiesQuery.fetcher = (variables: TeacherGetModulesActivitiesQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetModulesActivitiesQuery, TeacherGetModulesActivitiesQueryVariables>(TeacherGetModulesActivitiesDocument, variables, options);
export const TeacherGetQuestionHistoryDocument = `
    query TeacherGetQuestionHistory($input: TeacherQuestionVersionInput!) {
  teacher_questionVersions(input: $input) {
    edges {
      ...StandardTeacherQuestion
    }
    total
  }
}
    ${StandardTeacherQuestionFragmentDoc}
${StandardTeacherPartFragmentDoc}
${StandardTeacherResponseAreaFragmentDoc}
${TeacherModularResponseFragmentDoc}`;
export const useTeacherGetQuestionHistoryQuery = <
      TData = TeacherGetQuestionHistoryQuery,
      TError = unknown
    >(
      variables: TeacherGetQuestionHistoryQueryVariables,
      options?: UseQueryOptions<TeacherGetQuestionHistoryQuery, TError, TData>
    ) =>
    useQuery<TeacherGetQuestionHistoryQuery, TError, TData>(
      ['TeacherGetQuestionHistory', variables],
      fetchData<TeacherGetQuestionHistoryQuery, TeacherGetQuestionHistoryQueryVariables>(TeacherGetQuestionHistoryDocument, variables),
      options
    );
useTeacherGetQuestionHistoryQuery.document = TeacherGetQuestionHistoryDocument;


useTeacherGetQuestionHistoryQuery.getKey = (variables: TeacherGetQuestionHistoryQueryVariables) => ['TeacherGetQuestionHistory', variables];
;

useTeacherGetQuestionHistoryQuery.fetcher = (variables: TeacherGetQuestionHistoryQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetQuestionHistoryQuery, TeacherGetQuestionHistoryQueryVariables>(TeacherGetQuestionHistoryDocument, variables, options);
export const TeacherGetResponseTypesDocument = `
    query TeacherGetResponseTypes {
  teacher_responseTypes {
    edges {
      ...StandardTeacherResponseType
    }
    total
  }
}
    ${StandardTeacherResponseTypeFragmentDoc}`;
export const useTeacherGetResponseTypesQuery = <
      TData = TeacherGetResponseTypesQuery,
      TError = unknown
    >(
      variables?: TeacherGetResponseTypesQueryVariables,
      options?: UseQueryOptions<TeacherGetResponseTypesQuery, TError, TData>
    ) =>
    useQuery<TeacherGetResponseTypesQuery, TError, TData>(
      variables === undefined ? ['TeacherGetResponseTypes'] : ['TeacherGetResponseTypes', variables],
      fetchData<TeacherGetResponseTypesQuery, TeacherGetResponseTypesQueryVariables>(TeacherGetResponseTypesDocument, variables),
      options
    );
useTeacherGetResponseTypesQuery.document = TeacherGetResponseTypesDocument;


useTeacherGetResponseTypesQuery.getKey = (variables?: TeacherGetResponseTypesQueryVariables) => variables === undefined ? ['TeacherGetResponseTypes'] : ['TeacherGetResponseTypes', variables];
;

useTeacherGetResponseTypesQuery.fetcher = (variables?: TeacherGetResponseTypesQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetResponseTypesQuery, TeacherGetResponseTypesQueryVariables>(TeacherGetResponseTypesDocument, variables, options);
export const TeacherGetSetDocument = `
    query TeacherGetSet($id: String!) {
  teacher_set(id: $id) {
    ...StandardTeacherSetResult
  }
}
    ${StandardTeacherSetResultFragmentDoc}
${StandardTeacherSetFragmentDoc}
${StandardTeacherQuestionFragmentDoc}
${StandardTeacherPartFragmentDoc}
${StandardTeacherResponseAreaFragmentDoc}
${TeacherModularResponseFragmentDoc}`;
export const useTeacherGetSetQuery = <
      TData = TeacherGetSetQuery,
      TError = unknown
    >(
      variables: TeacherGetSetQueryVariables,
      options?: UseQueryOptions<TeacherGetSetQuery, TError, TData>
    ) =>
    useQuery<TeacherGetSetQuery, TError, TData>(
      ['TeacherGetSet', variables],
      fetchData<TeacherGetSetQuery, TeacherGetSetQueryVariables>(TeacherGetSetDocument, variables),
      options
    );
useTeacherGetSetQuery.document = TeacherGetSetDocument;


useTeacherGetSetQuery.getKey = (variables: TeacherGetSetQueryVariables) => ['TeacherGetSet', variables];
;

useTeacherGetSetQuery.fetcher = (variables: TeacherGetSetQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetSetQuery, TeacherGetSetQueryVariables>(TeacherGetSetDocument, variables, options);
export const TeacherGetSetStatisticsDocument = `
    query TeacherGetSetStatistics($input: SetStatisticsInput!) {
  teacher_setStatistics(input: $input) {
    ...StandardGraphStatistics
  }
}
    ${StandardGraphStatisticsFragmentDoc}
${StandardGraphStatisticsColumnFragmentDoc}
${StandardGraphStatisticsLineFragmentDoc}`;
export const useTeacherGetSetStatisticsQuery = <
      TData = TeacherGetSetStatisticsQuery,
      TError = unknown
    >(
      variables: TeacherGetSetStatisticsQueryVariables,
      options?: UseQueryOptions<TeacherGetSetStatisticsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetSetStatisticsQuery, TError, TData>(
      ['TeacherGetSetStatistics', variables],
      fetchData<TeacherGetSetStatisticsQuery, TeacherGetSetStatisticsQueryVariables>(TeacherGetSetStatisticsDocument, variables),
      options
    );
useTeacherGetSetStatisticsQuery.document = TeacherGetSetStatisticsDocument;


useTeacherGetSetStatisticsQuery.getKey = (variables: TeacherGetSetStatisticsQueryVariables) => ['TeacherGetSetStatistics', variables];
;

useTeacherGetSetStatisticsQuery.fetcher = (variables: TeacherGetSetStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetSetStatisticsQuery, TeacherGetSetStatisticsQueryVariables>(TeacherGetSetStatisticsDocument, variables, options);
export const TeacherGetSetTimingStatisticsDocument = `
    query TeacherGetSetTimingStatistics($input: SetStatisticsInput!) {
  teacher_setTimingStatistics(input: $input) {
    ...StandardGraphStatistics
  }
}
    ${StandardGraphStatisticsFragmentDoc}
${StandardGraphStatisticsColumnFragmentDoc}
${StandardGraphStatisticsLineFragmentDoc}`;
export const useTeacherGetSetTimingStatisticsQuery = <
      TData = TeacherGetSetTimingStatisticsQuery,
      TError = unknown
    >(
      variables: TeacherGetSetTimingStatisticsQueryVariables,
      options?: UseQueryOptions<TeacherGetSetTimingStatisticsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetSetTimingStatisticsQuery, TError, TData>(
      ['TeacherGetSetTimingStatistics', variables],
      fetchData<TeacherGetSetTimingStatisticsQuery, TeacherGetSetTimingStatisticsQueryVariables>(TeacherGetSetTimingStatisticsDocument, variables),
      options
    );
useTeacherGetSetTimingStatisticsQuery.document = TeacherGetSetTimingStatisticsDocument;


useTeacherGetSetTimingStatisticsQuery.getKey = (variables: TeacherGetSetTimingStatisticsQueryVariables) => ['TeacherGetSetTimingStatistics', variables];
;

useTeacherGetSetTimingStatisticsQuery.fetcher = (variables: TeacherGetSetTimingStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetSetTimingStatisticsQuery, TeacherGetSetTimingStatisticsQueryVariables>(TeacherGetSetTimingStatisticsDocument, variables, options);
export const TeacherGetGlobalTagsAllDocument = `
    query TeacherGetGlobalTagsAll {
  teacher_globalTagsAll {
    ...StandardGlobalTag
  }
}
    ${StandardGlobalTagFragmentDoc}`;
export const useTeacherGetGlobalTagsAllQuery = <
      TData = TeacherGetGlobalTagsAllQuery,
      TError = unknown
    >(
      variables?: TeacherGetGlobalTagsAllQueryVariables,
      options?: UseQueryOptions<TeacherGetGlobalTagsAllQuery, TError, TData>
    ) =>
    useQuery<TeacherGetGlobalTagsAllQuery, TError, TData>(
      variables === undefined ? ['TeacherGetGlobalTagsAll'] : ['TeacherGetGlobalTagsAll', variables],
      fetchData<TeacherGetGlobalTagsAllQuery, TeacherGetGlobalTagsAllQueryVariables>(TeacherGetGlobalTagsAllDocument, variables),
      options
    );
useTeacherGetGlobalTagsAllQuery.document = TeacherGetGlobalTagsAllDocument;


useTeacherGetGlobalTagsAllQuery.getKey = (variables?: TeacherGetGlobalTagsAllQueryVariables) => variables === undefined ? ['TeacherGetGlobalTagsAll'] : ['TeacherGetGlobalTagsAll', variables];
;

useTeacherGetGlobalTagsAllQuery.fetcher = (variables?: TeacherGetGlobalTagsAllQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetGlobalTagsAllQuery, TeacherGetGlobalTagsAllQueryVariables>(TeacherGetGlobalTagsAllDocument, variables, options);
export const TeacherGetStudentsAccessWeeklyStatisticsDocument = `
    query TeacherGetStudentsAccessWeeklyStatistics($input: StudentsStatisticsInput!) {
  teacher_studentsAccessWeeklyStatistics(input: $input) {
    ...StandardStudentGraphStatistics
  }
}
    ${StandardStudentGraphStatisticsFragmentDoc}
${StandardGraphStatisticsColumnFragmentDoc}
${StandardGraphStatisticsLineFragmentDoc}`;
export const useTeacherGetStudentsAccessWeeklyStatisticsQuery = <
      TData = TeacherGetStudentsAccessWeeklyStatisticsQuery,
      TError = unknown
    >(
      variables: TeacherGetStudentsAccessWeeklyStatisticsQueryVariables,
      options?: UseQueryOptions<TeacherGetStudentsAccessWeeklyStatisticsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetStudentsAccessWeeklyStatisticsQuery, TError, TData>(
      ['TeacherGetStudentsAccessWeeklyStatistics', variables],
      fetchData<TeacherGetStudentsAccessWeeklyStatisticsQuery, TeacherGetStudentsAccessWeeklyStatisticsQueryVariables>(TeacherGetStudentsAccessWeeklyStatisticsDocument, variables),
      options
    );
useTeacherGetStudentsAccessWeeklyStatisticsQuery.document = TeacherGetStudentsAccessWeeklyStatisticsDocument;


useTeacherGetStudentsAccessWeeklyStatisticsQuery.getKey = (variables: TeacherGetStudentsAccessWeeklyStatisticsQueryVariables) => ['TeacherGetStudentsAccessWeeklyStatistics', variables];
;

useTeacherGetStudentsAccessWeeklyStatisticsQuery.fetcher = (variables: TeacherGetStudentsAccessWeeklyStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetStudentsAccessWeeklyStatisticsQuery, TeacherGetStudentsAccessWeeklyStatisticsQueryVariables>(TeacherGetStudentsAccessWeeklyStatisticsDocument, variables, options);
export const TeacherGetStudentsStatisticsDocument = `
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
    ${StandardGraphStatisticsFragmentDoc}
${StandardGraphStatisticsColumnFragmentDoc}
${StandardGraphStatisticsLineFragmentDoc}`;
export const useTeacherGetStudentsStatisticsQuery = <
      TData = TeacherGetStudentsStatisticsQuery,
      TError = unknown
    >(
      variables: TeacherGetStudentsStatisticsQueryVariables,
      options?: UseQueryOptions<TeacherGetStudentsStatisticsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetStudentsStatisticsQuery, TError, TData>(
      ['TeacherGetStudentsStatistics', variables],
      fetchData<TeacherGetStudentsStatisticsQuery, TeacherGetStudentsStatisticsQueryVariables>(TeacherGetStudentsStatisticsDocument, variables),
      options
    );
useTeacherGetStudentsStatisticsQuery.document = TeacherGetStudentsStatisticsDocument;


useTeacherGetStudentsStatisticsQuery.getKey = (variables: TeacherGetStudentsStatisticsQueryVariables) => ['TeacherGetStudentsStatistics', variables];
;

useTeacherGetStudentsStatisticsQuery.fetcher = (variables: TeacherGetStudentsStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetStudentsStatisticsQuery, TeacherGetStudentsStatisticsQueryVariables>(TeacherGetStudentsStatisticsDocument, variables, options);
export const TeacherGetSubmissionCountsDocument = `
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
export const useTeacherGetSubmissionCountsQuery = <
      TData = TeacherGetSubmissionCountsQuery,
      TError = unknown
    >(
      variables: TeacherGetSubmissionCountsQueryVariables,
      options?: UseQueryOptions<TeacherGetSubmissionCountsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetSubmissionCountsQuery, TError, TData>(
      ['TeacherGetSubmissionCounts', variables],
      fetchData<TeacherGetSubmissionCountsQuery, TeacherGetSubmissionCountsQueryVariables>(TeacherGetSubmissionCountsDocument, variables),
      options
    );
useTeacherGetSubmissionCountsQuery.document = TeacherGetSubmissionCountsDocument;


useTeacherGetSubmissionCountsQuery.getKey = (variables: TeacherGetSubmissionCountsQueryVariables) => ['TeacherGetSubmissionCounts', variables];
;

useTeacherGetSubmissionCountsQuery.fetcher = (variables: TeacherGetSubmissionCountsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetSubmissionCountsQuery, TeacherGetSubmissionCountsQueryVariables>(TeacherGetSubmissionCountsDocument, variables, options);
export const TeacherGetSubmissionsDocument = `
    query TeacherGetSubmissions($input: GetSubmissionsInput!) {
  submissions(input: $input) {
    submissions {
      ...StandardModerationSubmission
    }
    total
  }
}
    ${StandardModerationSubmissionFragmentDoc}`;
export const useTeacherGetSubmissionsQuery = <
      TData = TeacherGetSubmissionsQuery,
      TError = unknown
    >(
      variables: TeacherGetSubmissionsQueryVariables,
      options?: UseQueryOptions<TeacherGetSubmissionsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetSubmissionsQuery, TError, TData>(
      ['TeacherGetSubmissions', variables],
      fetchData<TeacherGetSubmissionsQuery, TeacherGetSubmissionsQueryVariables>(TeacherGetSubmissionsDocument, variables),
      options
    );
useTeacherGetSubmissionsQuery.document = TeacherGetSubmissionsDocument;


useTeacherGetSubmissionsQuery.getKey = (variables: TeacherGetSubmissionsQueryVariables) => ['TeacherGetSubmissions', variables];
;

useTeacherGetSubmissionsQuery.fetcher = (variables: TeacherGetSubmissionsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetSubmissionsQuery, TeacherGetSubmissionsQueryVariables>(TeacherGetSubmissionsDocument, variables, options);
export const TeacherGetSurveyQuestionsDocument = `
    query TeacherGetSurveyQuestions($input: PaginationInput!) {
  teacher_surveyQuestions(input: $input) {
    edges {
      ...StandardTeacherQuestion
    }
    total
  }
}
    ${StandardTeacherQuestionFragmentDoc}
${StandardTeacherPartFragmentDoc}
${StandardTeacherResponseAreaFragmentDoc}
${TeacherModularResponseFragmentDoc}`;
export const useTeacherGetSurveyQuestionsQuery = <
      TData = TeacherGetSurveyQuestionsQuery,
      TError = unknown
    >(
      variables: TeacherGetSurveyQuestionsQueryVariables,
      options?: UseQueryOptions<TeacherGetSurveyQuestionsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetSurveyQuestionsQuery, TError, TData>(
      ['TeacherGetSurveyQuestions', variables],
      fetchData<TeacherGetSurveyQuestionsQuery, TeacherGetSurveyQuestionsQueryVariables>(TeacherGetSurveyQuestionsDocument, variables),
      options
    );
useTeacherGetSurveyQuestionsQuery.document = TeacherGetSurveyQuestionsDocument;


useTeacherGetSurveyQuestionsQuery.getKey = (variables: TeacherGetSurveyQuestionsQueryVariables) => ['TeacherGetSurveyQuestions', variables];
;

useTeacherGetSurveyQuestionsQuery.fetcher = (variables: TeacherGetSurveyQuestionsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetSurveyQuestionsQuery, TeacherGetSurveyQuestionsQueryVariables>(TeacherGetSurveyQuestionsDocument, variables, options);
export const TeacherGetTeacherRoleDocument = `
    query TeacherGetTeacherRole($input: TeacherGetTeacherRoleInput!) {
  teacher_teacherRole(input: $input) {
    ...StandardTeacherRole
  }
}
    ${StandardTeacherRoleFragmentDoc}
${StandardFunctionCodeFragmentDoc}`;
export const useTeacherGetTeacherRoleQuery = <
      TData = TeacherGetTeacherRoleQuery,
      TError = unknown
    >(
      variables: TeacherGetTeacherRoleQueryVariables,
      options?: UseQueryOptions<TeacherGetTeacherRoleQuery, TError, TData>
    ) =>
    useQuery<TeacherGetTeacherRoleQuery, TError, TData>(
      ['TeacherGetTeacherRole', variables],
      fetchData<TeacherGetTeacherRoleQuery, TeacherGetTeacherRoleQueryVariables>(TeacherGetTeacherRoleDocument, variables),
      options
    );
useTeacherGetTeacherRoleQuery.document = TeacherGetTeacherRoleDocument;


useTeacherGetTeacherRoleQuery.getKey = (variables: TeacherGetTeacherRoleQueryVariables) => ['TeacherGetTeacherRole', variables];
;

useTeacherGetTeacherRoleQuery.fetcher = (variables: TeacherGetTeacherRoleQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetTeacherRoleQuery, TeacherGetTeacherRoleQueryVariables>(TeacherGetTeacherRoleDocument, variables, options);
export const TeacherGetTeacherRolesDocument = `
    query TeacherGetTeacherRoles($input: TeacherGetTeacherRolesInput!) {
  teacher_teacherRoles(input: $input) {
    ...StandardTeacherRole
  }
}
    ${StandardTeacherRoleFragmentDoc}
${StandardFunctionCodeFragmentDoc}`;
export const useTeacherGetTeacherRolesQuery = <
      TData = TeacherGetTeacherRolesQuery,
      TError = unknown
    >(
      variables: TeacherGetTeacherRolesQueryVariables,
      options?: UseQueryOptions<TeacherGetTeacherRolesQuery, TError, TData>
    ) =>
    useQuery<TeacherGetTeacherRolesQuery, TError, TData>(
      ['TeacherGetTeacherRoles', variables],
      fetchData<TeacherGetTeacherRolesQuery, TeacherGetTeacherRolesQueryVariables>(TeacherGetTeacherRolesDocument, variables),
      options
    );
useTeacherGetTeacherRolesQuery.document = TeacherGetTeacherRolesDocument;


useTeacherGetTeacherRolesQuery.getKey = (variables: TeacherGetTeacherRolesQueryVariables) => ['TeacherGetTeacherRoles', variables];
;

useTeacherGetTeacherRolesQuery.fetcher = (variables: TeacherGetTeacherRolesQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetTeacherRolesQuery, TeacherGetTeacherRolesQueryVariables>(TeacherGetTeacherRolesDocument, variables, options);
export const TeacherGetTeacherStudentsDocument = `
    query TeacherGetTeacherStudents {
  teacher_teacherStudents {
    ...StandardTeacherStudentWithGlobalTags
  }
}
    ${StandardTeacherStudentWithGlobalTagsFragmentDoc}
${StandardGlobalTagFragmentDoc}`;
export const useTeacherGetTeacherStudentsQuery = <
      TData = TeacherGetTeacherStudentsQuery,
      TError = unknown
    >(
      variables?: TeacherGetTeacherStudentsQueryVariables,
      options?: UseQueryOptions<TeacherGetTeacherStudentsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetTeacherStudentsQuery, TError, TData>(
      variables === undefined ? ['TeacherGetTeacherStudents'] : ['TeacherGetTeacherStudents', variables],
      fetchData<TeacherGetTeacherStudentsQuery, TeacherGetTeacherStudentsQueryVariables>(TeacherGetTeacherStudentsDocument, variables),
      options
    );
useTeacherGetTeacherStudentsQuery.document = TeacherGetTeacherStudentsDocument;


useTeacherGetTeacherStudentsQuery.getKey = (variables?: TeacherGetTeacherStudentsQueryVariables) => variables === undefined ? ['TeacherGetTeacherStudents'] : ['TeacherGetTeacherStudents', variables];
;

useTeacherGetTeacherStudentsQuery.fetcher = (variables?: TeacherGetTeacherStudentsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetTeacherStudentsQuery, TeacherGetTeacherStudentsQueryVariables>(TeacherGetTeacherStudentsDocument, variables, options);
export const TeacherGetTemplateQuestionsDocument = `
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
    ${StandardTeacherQuestionFragmentDoc}
${StandardTeacherPartFragmentDoc}
${StandardTeacherResponseAreaFragmentDoc}
${TeacherModularResponseFragmentDoc}`;
export const useTeacherGetTemplateQuestionsQuery = <
      TData = TeacherGetTemplateQuestionsQuery,
      TError = unknown
    >(
      variables: TeacherGetTemplateQuestionsQueryVariables,
      options?: UseQueryOptions<TeacherGetTemplateQuestionsQuery, TError, TData>
    ) =>
    useQuery<TeacherGetTemplateQuestionsQuery, TError, TData>(
      ['TeacherGetTemplateQuestions', variables],
      fetchData<TeacherGetTemplateQuestionsQuery, TeacherGetTemplateQuestionsQueryVariables>(TeacherGetTemplateQuestionsDocument, variables),
      options
    );
useTeacherGetTemplateQuestionsQuery.document = TeacherGetTemplateQuestionsDocument;


useTeacherGetTemplateQuestionsQuery.getKey = (variables: TeacherGetTemplateQuestionsQueryVariables) => ['TeacherGetTemplateQuestions', variables];
;

useTeacherGetTemplateQuestionsQuery.fetcher = (variables: TeacherGetTemplateQuestionsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherGetTemplateQuestionsQuery, TeacherGetTemplateQuestionsQueryVariables>(TeacherGetTemplateQuestionsDocument, variables, options);
export const TeacherResponseAreaStatisticsDocument = `
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
${StandardTeacherResponseAreaFragmentDoc}
${TeacherModularResponseFragmentDoc}
${StandardTeacherQuestionFragmentDoc}
${StandardTeacherPartFragmentDoc}`;
export const useTeacherResponseAreaStatisticsQuery = <
      TData = TeacherResponseAreaStatisticsQuery,
      TError = unknown
    >(
      variables: TeacherResponseAreaStatisticsQueryVariables,
      options?: UseQueryOptions<TeacherResponseAreaStatisticsQuery, TError, TData>
    ) =>
    useQuery<TeacherResponseAreaStatisticsQuery, TError, TData>(
      ['TeacherResponseAreaStatistics', variables],
      fetchData<TeacherResponseAreaStatisticsQuery, TeacherResponseAreaStatisticsQueryVariables>(TeacherResponseAreaStatisticsDocument, variables),
      options
    );
useTeacherResponseAreaStatisticsQuery.document = TeacherResponseAreaStatisticsDocument;


useTeacherResponseAreaStatisticsQuery.getKey = (variables: TeacherResponseAreaStatisticsQueryVariables) => ['TeacherResponseAreaStatistics', variables];
;

useTeacherResponseAreaStatisticsQuery.fetcher = (variables: TeacherResponseAreaStatisticsQueryVariables, options?: RequestInit['headers']) => fetchData<TeacherResponseAreaStatisticsQuery, TeacherResponseAreaStatisticsQueryVariables>(TeacherResponseAreaStatisticsDocument, variables, options);