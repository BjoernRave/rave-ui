
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "oldDB/.client",
    ".client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"tbl_registry\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_att\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_bewegungsdaten_cat\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"att_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"park_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remarks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logtime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loguser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_bewegungsdaten_date\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"park_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frist\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reminder_sent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reminder_II_sent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bemerkungen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"final\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_bewegungsdaten_date_audit\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reg_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_cat\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_dates_template\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reminder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reminderII\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wiedervorlage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bemerkungen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_dv\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dv\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_eis\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"park_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jahr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"einsatz\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastgang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minute\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enwg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dvred\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durchremark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rechnung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rechnungnummer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rechnungremark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_ka\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ka\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_ka_kontakt\",\"dbName\":null,\"fields\":[{\"name\":\"ka\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"ka\",\"kid\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_kf\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"funktion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_kontakt\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_kontakt_park\",\"dbName\":null,\"fields\":[{\"name\":\"parkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kfid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"parkid\",\"kid\",\"kfid\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_park\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parkname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ischild\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"istype\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isuser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_status\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_steps\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stepname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_type\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"wes_user\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"heartbeat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"tbl_registry\",\"plural\":\"tbl_registries\",\"findUnique\":\"findUniquetbl_registry\",\"findFirst\":\"findFirsttbl_registry\",\"findMany\":\"findManytbl_registry\",\"create\":\"createOnetbl_registry\",\"createMany\":\"createManytbl_registry\",\"delete\":\"deleteOnetbl_registry\",\"update\":\"updateOnetbl_registry\",\"deleteMany\":\"deleteManytbl_registry\",\"updateMany\":\"updateManytbl_registry\",\"upsert\":\"upsertOnetbl_registry\",\"aggregate\":\"aggregatetbl_registry\",\"groupBy\":\"groupBytbl_registry\"},{\"model\":\"wes_att\",\"plural\":\"wes_atts\",\"findUnique\":\"findUniquewes_att\",\"findFirst\":\"findFirstwes_att\",\"findMany\":\"findManywes_att\",\"create\":\"createOnewes_att\",\"createMany\":\"createManywes_att\",\"delete\":\"deleteOnewes_att\",\"update\":\"updateOnewes_att\",\"deleteMany\":\"deleteManywes_att\",\"updateMany\":\"updateManywes_att\",\"upsert\":\"upsertOnewes_att\",\"aggregate\":\"aggregatewes_att\",\"groupBy\":\"groupBywes_att\"},{\"model\":\"wes_bewegungsdaten_cat\",\"plural\":\"wes_bewegungsdaten_cats\",\"findUnique\":\"findUniquewes_bewegungsdaten_cat\",\"findFirst\":\"findFirstwes_bewegungsdaten_cat\",\"findMany\":\"findManywes_bewegungsdaten_cat\",\"create\":\"createOnewes_bewegungsdaten_cat\",\"createMany\":\"createManywes_bewegungsdaten_cat\",\"delete\":\"deleteOnewes_bewegungsdaten_cat\",\"update\":\"updateOnewes_bewegungsdaten_cat\",\"deleteMany\":\"deleteManywes_bewegungsdaten_cat\",\"updateMany\":\"updateManywes_bewegungsdaten_cat\",\"upsert\":\"upsertOnewes_bewegungsdaten_cat\",\"aggregate\":\"aggregatewes_bewegungsdaten_cat\",\"groupBy\":\"groupBywes_bewegungsdaten_cat\"},{\"model\":\"wes_bewegungsdaten_date\",\"plural\":\"wes_bewegungsdaten_dates\",\"findUnique\":\"findUniquewes_bewegungsdaten_date\",\"findFirst\":\"findFirstwes_bewegungsdaten_date\",\"findMany\":\"findManywes_bewegungsdaten_date\",\"create\":\"createOnewes_bewegungsdaten_date\",\"createMany\":\"createManywes_bewegungsdaten_date\",\"delete\":\"deleteOnewes_bewegungsdaten_date\",\"update\":\"updateOnewes_bewegungsdaten_date\",\"deleteMany\":\"deleteManywes_bewegungsdaten_date\",\"updateMany\":\"updateManywes_bewegungsdaten_date\",\"upsert\":\"upsertOnewes_bewegungsdaten_date\",\"aggregate\":\"aggregatewes_bewegungsdaten_date\",\"groupBy\":\"groupBywes_bewegungsdaten_date\"},{\"model\":\"wes_bewegungsdaten_date_audit\",\"plural\":\"wes_bewegungsdaten_date_audits\",\"findUnique\":\"findUniquewes_bewegungsdaten_date_audit\",\"findFirst\":\"findFirstwes_bewegungsdaten_date_audit\",\"findMany\":\"findManywes_bewegungsdaten_date_audit\",\"create\":\"createOnewes_bewegungsdaten_date_audit\",\"createMany\":\"createManywes_bewegungsdaten_date_audit\",\"delete\":\"deleteOnewes_bewegungsdaten_date_audit\",\"update\":\"updateOnewes_bewegungsdaten_date_audit\",\"deleteMany\":\"deleteManywes_bewegungsdaten_date_audit\",\"updateMany\":\"updateManywes_bewegungsdaten_date_audit\",\"upsert\":\"upsertOnewes_bewegungsdaten_date_audit\",\"aggregate\":\"aggregatewes_bewegungsdaten_date_audit\",\"groupBy\":\"groupBywes_bewegungsdaten_date_audit\"},{\"model\":\"wes_cat\",\"plural\":\"wes_cats\",\"findUnique\":\"findUniquewes_cat\",\"findFirst\":\"findFirstwes_cat\",\"findMany\":\"findManywes_cat\",\"create\":\"createOnewes_cat\",\"createMany\":\"createManywes_cat\",\"delete\":\"deleteOnewes_cat\",\"update\":\"updateOnewes_cat\",\"deleteMany\":\"deleteManywes_cat\",\"updateMany\":\"updateManywes_cat\",\"upsert\":\"upsertOnewes_cat\",\"aggregate\":\"aggregatewes_cat\",\"groupBy\":\"groupBywes_cat\"},{\"model\":\"wes_dates_template\",\"plural\":\"wes_dates_templates\",\"findUnique\":\"findUniquewes_dates_template\",\"findFirst\":\"findFirstwes_dates_template\",\"findMany\":\"findManywes_dates_template\",\"create\":\"createOnewes_dates_template\",\"createMany\":\"createManywes_dates_template\",\"delete\":\"deleteOnewes_dates_template\",\"update\":\"updateOnewes_dates_template\",\"deleteMany\":\"deleteManywes_dates_template\",\"updateMany\":\"updateManywes_dates_template\",\"upsert\":\"upsertOnewes_dates_template\",\"aggregate\":\"aggregatewes_dates_template\",\"groupBy\":\"groupBywes_dates_template\"},{\"model\":\"wes_dv\",\"plural\":\"wes_dvs\",\"findUnique\":\"findUniquewes_dv\",\"findFirst\":\"findFirstwes_dv\",\"findMany\":\"findManywes_dv\",\"create\":\"createOnewes_dv\",\"createMany\":\"createManywes_dv\",\"delete\":\"deleteOnewes_dv\",\"update\":\"updateOnewes_dv\",\"deleteMany\":\"deleteManywes_dv\",\"updateMany\":\"updateManywes_dv\",\"upsert\":\"upsertOnewes_dv\",\"aggregate\":\"aggregatewes_dv\",\"groupBy\":\"groupBywes_dv\"},{\"model\":\"wes_eis\",\"plural\":\"wes_eis\",\"findUnique\":\"findUniquewes_eis\",\"findFirst\":\"findFirstwes_eis\",\"findMany\":\"findManywes_eis\",\"create\":\"createOnewes_eis\",\"createMany\":\"createManywes_eis\",\"delete\":\"deleteOnewes_eis\",\"update\":\"updateOnewes_eis\",\"deleteMany\":\"deleteManywes_eis\",\"updateMany\":\"updateManywes_eis\",\"upsert\":\"upsertOnewes_eis\",\"aggregate\":\"aggregatewes_eis\",\"groupBy\":\"groupBywes_eis\"},{\"model\":\"wes_ka\",\"plural\":\"wes_kas\",\"findUnique\":\"findUniquewes_ka\",\"findFirst\":\"findFirstwes_ka\",\"findMany\":\"findManywes_ka\",\"create\":\"createOnewes_ka\",\"createMany\":\"createManywes_ka\",\"delete\":\"deleteOnewes_ka\",\"update\":\"updateOnewes_ka\",\"deleteMany\":\"deleteManywes_ka\",\"updateMany\":\"updateManywes_ka\",\"upsert\":\"upsertOnewes_ka\",\"aggregate\":\"aggregatewes_ka\",\"groupBy\":\"groupBywes_ka\"},{\"model\":\"wes_ka_kontakt\",\"plural\":\"wes_ka_kontakts\",\"findUnique\":\"findUniquewes_ka_kontakt\",\"findFirst\":\"findFirstwes_ka_kontakt\",\"findMany\":\"findManywes_ka_kontakt\",\"create\":\"createOnewes_ka_kontakt\",\"createMany\":\"createManywes_ka_kontakt\",\"delete\":\"deleteOnewes_ka_kontakt\",\"update\":\"updateOnewes_ka_kontakt\",\"deleteMany\":\"deleteManywes_ka_kontakt\",\"updateMany\":\"updateManywes_ka_kontakt\",\"upsert\":\"upsertOnewes_ka_kontakt\",\"aggregate\":\"aggregatewes_ka_kontakt\",\"groupBy\":\"groupBywes_ka_kontakt\"},{\"model\":\"wes_kf\",\"plural\":\"wes_kfs\",\"findUnique\":\"findUniquewes_kf\",\"findFirst\":\"findFirstwes_kf\",\"findMany\":\"findManywes_kf\",\"create\":\"createOnewes_kf\",\"createMany\":\"createManywes_kf\",\"delete\":\"deleteOnewes_kf\",\"update\":\"updateOnewes_kf\",\"deleteMany\":\"deleteManywes_kf\",\"updateMany\":\"updateManywes_kf\",\"upsert\":\"upsertOnewes_kf\",\"aggregate\":\"aggregatewes_kf\",\"groupBy\":\"groupBywes_kf\"},{\"model\":\"wes_kontakt\",\"plural\":\"wes_kontakts\",\"findUnique\":\"findUniquewes_kontakt\",\"findFirst\":\"findFirstwes_kontakt\",\"findMany\":\"findManywes_kontakt\",\"create\":\"createOnewes_kontakt\",\"createMany\":\"createManywes_kontakt\",\"delete\":\"deleteOnewes_kontakt\",\"update\":\"updateOnewes_kontakt\",\"deleteMany\":\"deleteManywes_kontakt\",\"updateMany\":\"updateManywes_kontakt\",\"upsert\":\"upsertOnewes_kontakt\",\"aggregate\":\"aggregatewes_kontakt\",\"groupBy\":\"groupBywes_kontakt\"},{\"model\":\"wes_kontakt_park\",\"plural\":\"wes_kontakt_parks\",\"findUnique\":\"findUniquewes_kontakt_park\",\"findFirst\":\"findFirstwes_kontakt_park\",\"findMany\":\"findManywes_kontakt_park\",\"create\":\"createOnewes_kontakt_park\",\"createMany\":\"createManywes_kontakt_park\",\"delete\":\"deleteOnewes_kontakt_park\",\"update\":\"updateOnewes_kontakt_park\",\"deleteMany\":\"deleteManywes_kontakt_park\",\"updateMany\":\"updateManywes_kontakt_park\",\"upsert\":\"upsertOnewes_kontakt_park\",\"aggregate\":\"aggregatewes_kontakt_park\",\"groupBy\":\"groupBywes_kontakt_park\"},{\"model\":\"wes_park\",\"plural\":\"wes_parks\",\"findUnique\":\"findUniquewes_park\",\"findFirst\":\"findFirstwes_park\",\"findMany\":\"findManywes_park\",\"create\":\"createOnewes_park\",\"createMany\":\"createManywes_park\",\"delete\":\"deleteOnewes_park\",\"update\":\"updateOnewes_park\",\"deleteMany\":\"deleteManywes_park\",\"updateMany\":\"updateManywes_park\",\"upsert\":\"upsertOnewes_park\",\"aggregate\":\"aggregatewes_park\",\"groupBy\":\"groupBywes_park\"},{\"model\":\"wes_status\",\"plural\":\"wes_statuses\",\"findUnique\":\"findUniquewes_status\",\"findFirst\":\"findFirstwes_status\",\"findMany\":\"findManywes_status\",\"create\":\"createOnewes_status\",\"createMany\":\"createManywes_status\",\"delete\":\"deleteOnewes_status\",\"update\":\"updateOnewes_status\",\"deleteMany\":\"deleteManywes_status\",\"updateMany\":\"updateManywes_status\",\"upsert\":\"upsertOnewes_status\",\"aggregate\":\"aggregatewes_status\",\"groupBy\":\"groupBywes_status\"},{\"model\":\"wes_steps\",\"plural\":\"wes_steps\",\"findUnique\":\"findUniquewes_steps\",\"findFirst\":\"findFirstwes_steps\",\"findMany\":\"findManywes_steps\",\"create\":\"createOnewes_steps\",\"createMany\":\"createManywes_steps\",\"delete\":\"deleteOnewes_steps\",\"update\":\"updateOnewes_steps\",\"deleteMany\":\"deleteManywes_steps\",\"updateMany\":\"updateManywes_steps\",\"upsert\":\"upsertOnewes_steps\",\"aggregate\":\"aggregatewes_steps\",\"groupBy\":\"groupBywes_steps\"},{\"model\":\"wes_type\",\"plural\":\"wes_types\",\"findUnique\":\"findUniquewes_type\",\"findFirst\":\"findFirstwes_type\",\"findMany\":\"findManywes_type\",\"create\":\"createOnewes_type\",\"createMany\":\"createManywes_type\",\"delete\":\"deleteOnewes_type\",\"update\":\"updateOnewes_type\",\"deleteMany\":\"deleteManywes_type\",\"updateMany\":\"updateManywes_type\",\"upsert\":\"upsertOnewes_type\",\"aggregate\":\"aggregatewes_type\",\"groupBy\":\"groupBywes_type\"},{\"model\":\"wes_user\",\"plural\":\"wes_users\",\"findUnique\":\"findUniquewes_user\",\"findFirst\":\"findFirstwes_user\",\"findMany\":\"findManywes_user\",\"create\":\"createOnewes_user\",\"createMany\":\"createManywes_user\",\"delete\":\"deleteOnewes_user\",\"update\":\"updateOnewes_user\",\"deleteMany\":\"deleteManywes_user\",\"updateMany\":\"updateManywes_user\",\"upsert\":\"upsertOnewes_user\",\"aggregate\":\"aggregatewes_user\",\"groupBy\":\"groupBywes_user\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/bjoern/projects/wes-intra/oldDB/.client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "4.5.0",
  "engineVersion": "0362da9eebca54d94c8ef5edd3b2e90af99ba452",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "oldDB/.client/libquery_engine-darwin.dylib.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "oldDB/.client/schema.prisma")
