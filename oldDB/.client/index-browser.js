
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.Tbl_registryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  value: 'value'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Wes_attScalarFieldEnum = makeEnum({
  id: 'id',
  attname: 'attname',
  cat_id: 'cat_id',
  sort: 'sort'
});

exports.Prisma.Wes_bewegungsdaten_catScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value',
  att_id: 'att_id',
  park_id: 'park_id',
  remarks: 'remarks',
  logtime: 'logtime',
  loguser: 'loguser'
});

exports.Prisma.Wes_bewegungsdaten_dateScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  user: 'user',
  date_created: 'date_created',
  user_created: 'user_created',
  park_id: 'park_id',
  frist: 'frist',
  start_date: 'start_date',
  start_user: 'start_user',
  end_date: 'end_date',
  end_user: 'end_user',
  reminder_sent: 'reminder_sent',
  reminder_II_sent: 'reminder_II_sent',
  status: 'status',
  bemerkungen: 'bemerkungen',
  final: 'final',
  steps: 'steps',
  partner: 'partner'
});

exports.Prisma.Wes_bewegungsdaten_date_auditScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  reg_date: 'reg_date',
  user: 'user',
  date: 'date'
});

exports.Prisma.Wes_catScalarFieldEnum = makeEnum({
  id: 'id',
  catname: 'catname',
  type_id: 'type_id',
  sort: 'sort'
});

exports.Prisma.Wes_dates_templateScalarFieldEnum = makeEnum({
  id: 'id',
  datename: 'datename',
  date_type: 'date_type',
  reminder: 'reminder',
  reminderII: 'reminderII',
  partner: 'partner',
  steps: 'steps',
  wiedervorlage: 'wiedervorlage',
  status: 'status',
  bemerkungen: 'bemerkungen'
});

exports.Prisma.Wes_dvScalarFieldEnum = makeEnum({
  id: 'id',
  dv: 'dv'
});

exports.Prisma.Wes_eisScalarFieldEnum = makeEnum({
  id: 'id',
  park_id: 'park_id',
  monat: 'monat',
  jahr: 'jahr',
  einsatz: 'einsatz',
  lastgang: 'lastgang',
  minute: 'minute',
  enwg: 'enwg',
  dvred: 'dvred',
  durchremark: 'durchremark',
  rechnung: 'rechnung',
  rechnungnummer: 'rechnungnummer',
  rechnungremark: 'rechnungremark'
});

exports.Prisma.Wes_kaScalarFieldEnum = makeEnum({
  id: 'id',
  ka: 'ka',
  sort: 'sort'
});

exports.Prisma.Wes_ka_kontaktScalarFieldEnum = makeEnum({
  ka: 'ka',
  kid: 'kid',
  value: 'value'
});

exports.Prisma.Wes_kfScalarFieldEnum = makeEnum({
  id: 'id',
  funktion: 'funktion'
});

exports.Prisma.Wes_kontaktScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Wes_kontakt_parkScalarFieldEnum = makeEnum({
  parkid: 'parkid',
  kid: 'kid',
  kfid: 'kfid'
});

exports.Prisma.Wes_parkScalarFieldEnum = makeEnum({
  id: 'id',
  parkname: 'parkname',
  ischild: 'ischild',
  istype: 'istype',
  isuser: 'isuser'
});

exports.Prisma.Wes_statusScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  sort: 'sort',
  prio: 'prio'
});

exports.Prisma.Wes_stepsScalarFieldEnum = makeEnum({
  id: 'id',
  stepname: 'stepname'
});

exports.Prisma.Wes_typeScalarFieldEnum = makeEnum({
  id: 'id',
  typename: 'typename'
});

exports.Prisma.Wes_userScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  email: 'email',
  last_login: 'last_login',
  heartbeat: 'heartbeat',
  password: 'password',
  level: 'level'
});


exports.Prisma.ModelName = makeEnum({
  tbl_registry: 'tbl_registry',
  wes_att: 'wes_att',
  wes_bewegungsdaten_cat: 'wes_bewegungsdaten_cat',
  wes_bewegungsdaten_date: 'wes_bewegungsdaten_date',
  wes_bewegungsdaten_date_audit: 'wes_bewegungsdaten_date_audit',
  wes_cat: 'wes_cat',
  wes_dates_template: 'wes_dates_template',
  wes_dv: 'wes_dv',
  wes_eis: 'wes_eis',
  wes_ka: 'wes_ka',
  wes_ka_kontakt: 'wes_ka_kontakt',
  wes_kf: 'wes_kf',
  wes_kontakt: 'wes_kontakt',
  wes_kontakt_park: 'wes_kontakt_park',
  wes_park: 'wes_park',
  wes_status: 'wes_status',
  wes_steps: 'wes_steps',
  wes_type: 'wes_type',
  wes_user: 'wes_user'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
