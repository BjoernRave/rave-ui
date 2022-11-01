
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model tbl_registry
 * 
 */
export type tbl_registry = {
  id: number
  name: string
  value: number | null
}

/**
 * Model wes_att
 * 
 */
export type wes_att = {
  id: number
  attname: string | null
  cat_id: number
  sort: string | null
}

/**
 * Model wes_bewegungsdaten_cat
 * 
 */
export type wes_bewegungsdaten_cat = {
  id: number
  value: string | null
  att_id: number
  park_id: number
  remarks: string | null
  logtime: Date
  loguser: number
}

/**
 * Model wes_bewegungsdaten_date
 * 
 */
export type wes_bewegungsdaten_date = {
  id: number
  type: number
  user: number
  date_created: Date | null
  user_created: number
  park_id: number
  frist: Date
  start_date: Date | null
  start_user: number
  end_date: Date | null
  end_user: number
  reminder_sent: Date | null
  reminder_II_sent: Date | null
  status: number
  bemerkungen: string | null
  final: number | null
  steps: string | null
  partner: string | null
}

/**
 * Model wes_bewegungsdaten_date_audit
 * 
 */
export type wes_bewegungsdaten_date_audit = {
  id: number
  text: string
  reg_date: Date | null
  user: number | null
  date: number | null
}

/**
 * Model wes_cat
 * 
 */
export type wes_cat = {
  id: number
  catname: string | null
  type_id: number | null
  sort: string | null
}

/**
 * Model wes_dates_template
 * 
 */
export type wes_dates_template = {
  id: number
  datename: string | null
  date_type: number
  reminder: number
  reminderII: number
  partner: string | null
  steps: string | null
  wiedervorlage: number
  status: string | null
  bemerkungen: string | null
}

/**
 * Model wes_dv
 * 
 */
export type wes_dv = {
  id: number
  dv: string
}

/**
 * Model wes_eis
 * 
 */
export type wes_eis = {
  id: number
  park_id: number
  monat: number | null
  jahr: number | null
  einsatz: number
  lastgang: number
  minute: number
  enwg: number
  dvred: number
  durchremark: string | null
  rechnung: number
  rechnungnummer: string | null
  rechnungremark: string | null
}

/**
 * Model wes_ka
 * 
 */
export type wes_ka = {
  id: number
  ka: string
  sort: string | null
}

/**
 * Model wes_ka_kontakt
 * 
 */
export type wes_ka_kontakt = {
  ka: number
  kid: number
  value: string
}

/**
 * Model wes_kf
 * 
 */
export type wes_kf = {
  id: number
  funktion: string | null
}

/**
 * Model wes_kontakt
 * 
 */
export type wes_kontakt = {
  id: number
  name: string
}

/**
 * Model wes_kontakt_park
 * 
 */
export type wes_kontakt_park = {
  parkid: number
  kid: number
  kfid: number
}

/**
 * Model wes_park
 * 
 */
export type wes_park = {
  id: number
  parkname: string | null
  ischild: number | null
  istype: number
  isuser: number | null
}

/**
 * Model wes_status
 * 
 */
export type wes_status = {
  id: number
  status: string
  sort: string
  prio: number
}

/**
 * Model wes_steps
 * 
 */
export type wes_steps = {
  id: number
  stepname: string
}

/**
 * Model wes_type
 * 
 */
export type wes_type = {
  id: number
  typename: string | null
}

/**
 * Model wes_user
 * 
 */
export type wes_user = {
  id: number
  username: string
  firstname: string
  lastname: string
  email: string | null
  last_login: Date | null
  heartbeat: Date | null
  password: string
  level: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_registries
 * const tbl_registries = await prisma.tbl_registry.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tbl_registries
   * const tbl_registries = await prisma.tbl_registry.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.tbl_registry`: Exposes CRUD operations for the **tbl_registry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_registries
    * const tbl_registries = await prisma.tbl_registry.findMany()
    * ```
    */
  get tbl_registry(): Prisma.tbl_registryDelegate<GlobalReject>;

  /**
   * `prisma.wes_att`: Exposes CRUD operations for the **wes_att** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_atts
    * const wes_atts = await prisma.wes_att.findMany()
    * ```
    */
  get wes_att(): Prisma.wes_attDelegate<GlobalReject>;

  /**
   * `prisma.wes_bewegungsdaten_cat`: Exposes CRUD operations for the **wes_bewegungsdaten_cat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_bewegungsdaten_cats
    * const wes_bewegungsdaten_cats = await prisma.wes_bewegungsdaten_cat.findMany()
    * ```
    */
  get wes_bewegungsdaten_cat(): Prisma.wes_bewegungsdaten_catDelegate<GlobalReject>;

  /**
   * `prisma.wes_bewegungsdaten_date`: Exposes CRUD operations for the **wes_bewegungsdaten_date** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_bewegungsdaten_dates
    * const wes_bewegungsdaten_dates = await prisma.wes_bewegungsdaten_date.findMany()
    * ```
    */
  get wes_bewegungsdaten_date(): Prisma.wes_bewegungsdaten_dateDelegate<GlobalReject>;

  /**
   * `prisma.wes_bewegungsdaten_date_audit`: Exposes CRUD operations for the **wes_bewegungsdaten_date_audit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_bewegungsdaten_date_audits
    * const wes_bewegungsdaten_date_audits = await prisma.wes_bewegungsdaten_date_audit.findMany()
    * ```
    */
  get wes_bewegungsdaten_date_audit(): Prisma.wes_bewegungsdaten_date_auditDelegate<GlobalReject>;

  /**
   * `prisma.wes_cat`: Exposes CRUD operations for the **wes_cat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_cats
    * const wes_cats = await prisma.wes_cat.findMany()
    * ```
    */
  get wes_cat(): Prisma.wes_catDelegate<GlobalReject>;

  /**
   * `prisma.wes_dates_template`: Exposes CRUD operations for the **wes_dates_template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_dates_templates
    * const wes_dates_templates = await prisma.wes_dates_template.findMany()
    * ```
    */
  get wes_dates_template(): Prisma.wes_dates_templateDelegate<GlobalReject>;

  /**
   * `prisma.wes_dv`: Exposes CRUD operations for the **wes_dv** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_dvs
    * const wes_dvs = await prisma.wes_dv.findMany()
    * ```
    */
  get wes_dv(): Prisma.wes_dvDelegate<GlobalReject>;

  /**
   * `prisma.wes_eis`: Exposes CRUD operations for the **wes_eis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_eis
    * const wes_eis = await prisma.wes_eis.findMany()
    * ```
    */
  get wes_eis(): Prisma.wes_eisDelegate<GlobalReject>;

  /**
   * `prisma.wes_ka`: Exposes CRUD operations for the **wes_ka** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_kas
    * const wes_kas = await prisma.wes_ka.findMany()
    * ```
    */
  get wes_ka(): Prisma.wes_kaDelegate<GlobalReject>;

  /**
   * `prisma.wes_ka_kontakt`: Exposes CRUD operations for the **wes_ka_kontakt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_ka_kontakts
    * const wes_ka_kontakts = await prisma.wes_ka_kontakt.findMany()
    * ```
    */
  get wes_ka_kontakt(): Prisma.wes_ka_kontaktDelegate<GlobalReject>;

  /**
   * `prisma.wes_kf`: Exposes CRUD operations for the **wes_kf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_kfs
    * const wes_kfs = await prisma.wes_kf.findMany()
    * ```
    */
  get wes_kf(): Prisma.wes_kfDelegate<GlobalReject>;

  /**
   * `prisma.wes_kontakt`: Exposes CRUD operations for the **wes_kontakt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_kontakts
    * const wes_kontakts = await prisma.wes_kontakt.findMany()
    * ```
    */
  get wes_kontakt(): Prisma.wes_kontaktDelegate<GlobalReject>;

  /**
   * `prisma.wes_kontakt_park`: Exposes CRUD operations for the **wes_kontakt_park** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_kontakt_parks
    * const wes_kontakt_parks = await prisma.wes_kontakt_park.findMany()
    * ```
    */
  get wes_kontakt_park(): Prisma.wes_kontakt_parkDelegate<GlobalReject>;

  /**
   * `prisma.wes_park`: Exposes CRUD operations for the **wes_park** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_parks
    * const wes_parks = await prisma.wes_park.findMany()
    * ```
    */
  get wes_park(): Prisma.wes_parkDelegate<GlobalReject>;

  /**
   * `prisma.wes_status`: Exposes CRUD operations for the **wes_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_statuses
    * const wes_statuses = await prisma.wes_status.findMany()
    * ```
    */
  get wes_status(): Prisma.wes_statusDelegate<GlobalReject>;

  /**
   * `prisma.wes_steps`: Exposes CRUD operations for the **wes_steps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_steps
    * const wes_steps = await prisma.wes_steps.findMany()
    * ```
    */
  get wes_steps(): Prisma.wes_stepsDelegate<GlobalReject>;

  /**
   * `prisma.wes_type`: Exposes CRUD operations for the **wes_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_types
    * const wes_types = await prisma.wes_type.findMany()
    * ```
    */
  get wes_type(): Prisma.wes_typeDelegate<GlobalReject>;

  /**
   * `prisma.wes_user`: Exposes CRUD operations for the **wes_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wes_users
    * const wes_users = await prisma.wes_user.findMany()
    * ```
    */
  get wes_user(): Prisma.wes_userDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export type Extension = runtime.Extension 

  /**
   * Prisma Client JS version: 4.5.0
   * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model tbl_registry
   */


  export type AggregateTbl_registry = {
    _count: Tbl_registryCountAggregateOutputType | null
    _avg: Tbl_registryAvgAggregateOutputType | null
    _sum: Tbl_registrySumAggregateOutputType | null
    _min: Tbl_registryMinAggregateOutputType | null
    _max: Tbl_registryMaxAggregateOutputType | null
  }

  export type Tbl_registryAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type Tbl_registrySumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type Tbl_registryMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
  }

  export type Tbl_registryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
  }

  export type Tbl_registryCountAggregateOutputType = {
    id: number
    name: number
    value: number
    _all: number
  }


  export type Tbl_registryAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type Tbl_registrySumAggregateInputType = {
    id?: true
    value?: true
  }

  export type Tbl_registryMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type Tbl_registryMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type Tbl_registryCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    _all?: true
  }

  export type Tbl_registryAggregateArgs = {
    /**
     * Filter which tbl_registry to aggregate.
     * 
    **/
    where?: tbl_registryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_registries to fetch.
     * 
    **/
    orderBy?: Enumerable<tbl_registryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: tbl_registryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_registries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_registries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_registries
    **/
    _count?: true | Tbl_registryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_registryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_registrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_registryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_registryMaxAggregateInputType
  }

  export type GetTbl_registryAggregateType<T extends Tbl_registryAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_registry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_registry[P]>
      : GetScalarType<T[P], AggregateTbl_registry[P]>
  }




  export type Tbl_registryGroupByArgs = {
    where?: tbl_registryWhereInput
    orderBy?: Enumerable<tbl_registryOrderByWithAggregationInput>
    by: Array<Tbl_registryScalarFieldEnum>
    having?: tbl_registryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_registryCountAggregateInputType | true
    _avg?: Tbl_registryAvgAggregateInputType
    _sum?: Tbl_registrySumAggregateInputType
    _min?: Tbl_registryMinAggregateInputType
    _max?: Tbl_registryMaxAggregateInputType
  }


  export type Tbl_registryGroupByOutputType = {
    id: number
    name: string
    value: number | null
    _count: Tbl_registryCountAggregateOutputType | null
    _avg: Tbl_registryAvgAggregateOutputType | null
    _sum: Tbl_registrySumAggregateOutputType | null
    _min: Tbl_registryMinAggregateOutputType | null
    _max: Tbl_registryMaxAggregateOutputType | null
  }

  type GetTbl_registryGroupByPayload<T extends Tbl_registryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Tbl_registryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_registryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_registryGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_registryGroupByOutputType[P]>
        }
      >
    >


  export type tbl_registrySelect = {
    id?: boolean
    name?: boolean
    value?: boolean
  }

  export type tbl_registryGetPayload<
    S extends boolean | null | undefined | tbl_registryArgs,
    U = keyof S
      > = S extends true
        ? tbl_registry
    : S extends undefined
    ? never
    : S extends tbl_registryArgs | tbl_registryFindManyArgs
    ?'include' extends U
    ? tbl_registry 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof tbl_registry ? tbl_registry[P] : never
  } 
    : tbl_registry
  : tbl_registry


  type tbl_registryCountArgs = Merge<
    Omit<tbl_registryFindManyArgs, 'select' | 'include'> & {
      select?: Tbl_registryCountAggregateInputType | true
    }
  >

  export interface tbl_registryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Tbl_registry that matches the filter.
     * @param {tbl_registryFindUniqueArgs} args - Arguments to find a Tbl_registry
     * @example
     * // Get one Tbl_registry
     * const tbl_registry = await prisma.tbl_registry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_registryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tbl_registryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tbl_registry'> extends True ? CheckSelect<T, Prisma__tbl_registryClient<tbl_registry>, Prisma__tbl_registryClient<tbl_registryGetPayload<T>>> : CheckSelect<T, Prisma__tbl_registryClient<tbl_registry | null, null>, Prisma__tbl_registryClient<tbl_registryGetPayload<T> | null, null>>

    /**
     * Find the first Tbl_registry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registryFindFirstArgs} args - Arguments to find a Tbl_registry
     * @example
     * // Get one Tbl_registry
     * const tbl_registry = await prisma.tbl_registry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_registryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tbl_registryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tbl_registry'> extends True ? CheckSelect<T, Prisma__tbl_registryClient<tbl_registry>, Prisma__tbl_registryClient<tbl_registryGetPayload<T>>> : CheckSelect<T, Prisma__tbl_registryClient<tbl_registry | null, null>, Prisma__tbl_registryClient<tbl_registryGetPayload<T> | null, null>>

    /**
     * Find zero or more Tbl_registries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_registries
     * const tbl_registries = await prisma.tbl_registry.findMany()
     * 
     * // Get first 10 Tbl_registries
     * const tbl_registries = await prisma.tbl_registry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_registryWithIdOnly = await prisma.tbl_registry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tbl_registryFindManyArgs>(
      args?: SelectSubset<T, tbl_registryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<tbl_registry>>, PrismaPromise<Array<tbl_registryGetPayload<T>>>>

    /**
     * Create a Tbl_registry.
     * @param {tbl_registryCreateArgs} args - Arguments to create a Tbl_registry.
     * @example
     * // Create one Tbl_registry
     * const Tbl_registry = await prisma.tbl_registry.create({
     *   data: {
     *     // ... data to create a Tbl_registry
     *   }
     * })
     * 
    **/
    create<T extends tbl_registryCreateArgs>(
      args: SelectSubset<T, tbl_registryCreateArgs>
    ): CheckSelect<T, Prisma__tbl_registryClient<tbl_registry>, Prisma__tbl_registryClient<tbl_registryGetPayload<T>>>

    /**
     * Create many Tbl_registries.
     *     @param {tbl_registryCreateManyArgs} args - Arguments to create many Tbl_registries.
     *     @example
     *     // Create many Tbl_registries
     *     const tbl_registry = await prisma.tbl_registry.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_registryCreateManyArgs>(
      args?: SelectSubset<T, tbl_registryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_registry.
     * @param {tbl_registryDeleteArgs} args - Arguments to delete one Tbl_registry.
     * @example
     * // Delete one Tbl_registry
     * const Tbl_registry = await prisma.tbl_registry.delete({
     *   where: {
     *     // ... filter to delete one Tbl_registry
     *   }
     * })
     * 
    **/
    delete<T extends tbl_registryDeleteArgs>(
      args: SelectSubset<T, tbl_registryDeleteArgs>
    ): CheckSelect<T, Prisma__tbl_registryClient<tbl_registry>, Prisma__tbl_registryClient<tbl_registryGetPayload<T>>>

    /**
     * Update one Tbl_registry.
     * @param {tbl_registryUpdateArgs} args - Arguments to update one Tbl_registry.
     * @example
     * // Update one Tbl_registry
     * const tbl_registry = await prisma.tbl_registry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_registryUpdateArgs>(
      args: SelectSubset<T, tbl_registryUpdateArgs>
    ): CheckSelect<T, Prisma__tbl_registryClient<tbl_registry>, Prisma__tbl_registryClient<tbl_registryGetPayload<T>>>

    /**
     * Delete zero or more Tbl_registries.
     * @param {tbl_registryDeleteManyArgs} args - Arguments to filter Tbl_registries to delete.
     * @example
     * // Delete a few Tbl_registries
     * const { count } = await prisma.tbl_registry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_registryDeleteManyArgs>(
      args?: SelectSubset<T, tbl_registryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_registries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_registries
     * const tbl_registry = await prisma.tbl_registry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_registryUpdateManyArgs>(
      args: SelectSubset<T, tbl_registryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_registry.
     * @param {tbl_registryUpsertArgs} args - Arguments to update or create a Tbl_registry.
     * @example
     * // Update or create a Tbl_registry
     * const tbl_registry = await prisma.tbl_registry.upsert({
     *   create: {
     *     // ... data to create a Tbl_registry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_registry we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_registryUpsertArgs>(
      args: SelectSubset<T, tbl_registryUpsertArgs>
    ): CheckSelect<T, Prisma__tbl_registryClient<tbl_registry>, Prisma__tbl_registryClient<tbl_registryGetPayload<T>>>

    /**
     * Find one Tbl_registry that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {tbl_registryFindUniqueOrThrowArgs} args - Arguments to find a Tbl_registry
     * @example
     * // Get one Tbl_registry
     * const tbl_registry = await prisma.tbl_registry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_registryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tbl_registryFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__tbl_registryClient<tbl_registry>, Prisma__tbl_registryClient<tbl_registryGetPayload<T>>>

    /**
     * Find the first Tbl_registry that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registryFindFirstOrThrowArgs} args - Arguments to find a Tbl_registry
     * @example
     * // Get one Tbl_registry
     * const tbl_registry = await prisma.tbl_registry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_registryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tbl_registryFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__tbl_registryClient<tbl_registry>, Prisma__tbl_registryClient<tbl_registryGetPayload<T>>>

    /**
     * Count the number of Tbl_registries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registryCountArgs} args - Arguments to filter Tbl_registries to count.
     * @example
     * // Count the number of Tbl_registries
     * const count = await prisma.tbl_registry.count({
     *   where: {
     *     // ... the filter for the Tbl_registries we want to count
     *   }
     * })
    **/
    count<T extends tbl_registryCountArgs>(
      args?: Subset<T, tbl_registryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_registryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_registry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_registryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_registryAggregateArgs>(args: Subset<T, Tbl_registryAggregateArgs>): PrismaPromise<GetTbl_registryAggregateType<T>>

    /**
     * Group by Tbl_registry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_registryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tbl_registryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tbl_registryGroupByArgs['orderBy'] }
        : { orderBy?: Tbl_registryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tbl_registryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_registryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_registry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tbl_registryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tbl_registry base type for findUnique actions
   */
  export type tbl_registryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tbl_registry
     * 
    **/
    select?: tbl_registrySelect | null
    /**
     * Filter, which tbl_registry to fetch.
     * 
    **/
    where: tbl_registryWhereUniqueInput
  }

  /**
   * tbl_registry: findUnique
   */
  export interface tbl_registryFindUniqueArgs extends tbl_registryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_registry base type for findFirst actions
   */
  export type tbl_registryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tbl_registry
     * 
    **/
    select?: tbl_registrySelect | null
    /**
     * Filter, which tbl_registry to fetch.
     * 
    **/
    where?: tbl_registryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_registries to fetch.
     * 
    **/
    orderBy?: Enumerable<tbl_registryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_registries.
     * 
    **/
    cursor?: tbl_registryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_registries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_registries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_registries.
     * 
    **/
    distinct?: Enumerable<Tbl_registryScalarFieldEnum>
  }

  /**
   * tbl_registry: findFirst
   */
  export interface tbl_registryFindFirstArgs extends tbl_registryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tbl_registry findMany
   */
  export type tbl_registryFindManyArgs = {
    /**
     * Select specific fields to fetch from the tbl_registry
     * 
    **/
    select?: tbl_registrySelect | null
    /**
     * Filter, which tbl_registries to fetch.
     * 
    **/
    where?: tbl_registryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_registries to fetch.
     * 
    **/
    orderBy?: Enumerable<tbl_registryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_registries.
     * 
    **/
    cursor?: tbl_registryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_registries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_registries.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Tbl_registryScalarFieldEnum>
  }


  /**
   * tbl_registry create
   */
  export type tbl_registryCreateArgs = {
    /**
     * Select specific fields to fetch from the tbl_registry
     * 
    **/
    select?: tbl_registrySelect | null
    /**
     * The data needed to create a tbl_registry.
     * 
    **/
    data: XOR<tbl_registryCreateInput, tbl_registryUncheckedCreateInput>
  }


  /**
   * tbl_registry createMany
   */
  export type tbl_registryCreateManyArgs = {
    /**
     * The data used to create many tbl_registries.
     * 
    **/
    data: Enumerable<tbl_registryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tbl_registry update
   */
  export type tbl_registryUpdateArgs = {
    /**
     * Select specific fields to fetch from the tbl_registry
     * 
    **/
    select?: tbl_registrySelect | null
    /**
     * The data needed to update a tbl_registry.
     * 
    **/
    data: XOR<tbl_registryUpdateInput, tbl_registryUncheckedUpdateInput>
    /**
     * Choose, which tbl_registry to update.
     * 
    **/
    where: tbl_registryWhereUniqueInput
  }


  /**
   * tbl_registry updateMany
   */
  export type tbl_registryUpdateManyArgs = {
    /**
     * The data used to update tbl_registries.
     * 
    **/
    data: XOR<tbl_registryUpdateManyMutationInput, tbl_registryUncheckedUpdateManyInput>
    /**
     * Filter which tbl_registries to update
     * 
    **/
    where?: tbl_registryWhereInput
  }


  /**
   * tbl_registry upsert
   */
  export type tbl_registryUpsertArgs = {
    /**
     * Select specific fields to fetch from the tbl_registry
     * 
    **/
    select?: tbl_registrySelect | null
    /**
     * The filter to search for the tbl_registry to update in case it exists.
     * 
    **/
    where: tbl_registryWhereUniqueInput
    /**
     * In case the tbl_registry found by the `where` argument doesn't exist, create a new tbl_registry with this data.
     * 
    **/
    create: XOR<tbl_registryCreateInput, tbl_registryUncheckedCreateInput>
    /**
     * In case the tbl_registry was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<tbl_registryUpdateInput, tbl_registryUncheckedUpdateInput>
  }


  /**
   * tbl_registry delete
   */
  export type tbl_registryDeleteArgs = {
    /**
     * Select specific fields to fetch from the tbl_registry
     * 
    **/
    select?: tbl_registrySelect | null
    /**
     * Filter which tbl_registry to delete.
     * 
    **/
    where: tbl_registryWhereUniqueInput
  }


  /**
   * tbl_registry deleteMany
   */
  export type tbl_registryDeleteManyArgs = {
    /**
     * Filter which tbl_registries to delete
     * 
    **/
    where?: tbl_registryWhereInput
  }


  /**
   * tbl_registry: findUniqueOrThrow
   */
  export type tbl_registryFindUniqueOrThrowArgs = tbl_registryFindUniqueArgsBase
      

  /**
   * tbl_registry: findFirstOrThrow
   */
  export type tbl_registryFindFirstOrThrowArgs = tbl_registryFindFirstArgsBase
      

  /**
   * tbl_registry without action
   */
  export type tbl_registryArgs = {
    /**
     * Select specific fields to fetch from the tbl_registry
     * 
    **/
    select?: tbl_registrySelect | null
  }



  /**
   * Model wes_att
   */


  export type AggregateWes_att = {
    _count: Wes_attCountAggregateOutputType | null
    _avg: Wes_attAvgAggregateOutputType | null
    _sum: Wes_attSumAggregateOutputType | null
    _min: Wes_attMinAggregateOutputType | null
    _max: Wes_attMaxAggregateOutputType | null
  }

  export type Wes_attAvgAggregateOutputType = {
    id: number | null
    cat_id: number | null
  }

  export type Wes_attSumAggregateOutputType = {
    id: number | null
    cat_id: number | null
  }

  export type Wes_attMinAggregateOutputType = {
    id: number | null
    attname: string | null
    cat_id: number | null
    sort: string | null
  }

  export type Wes_attMaxAggregateOutputType = {
    id: number | null
    attname: string | null
    cat_id: number | null
    sort: string | null
  }

  export type Wes_attCountAggregateOutputType = {
    id: number
    attname: number
    cat_id: number
    sort: number
    _all: number
  }


  export type Wes_attAvgAggregateInputType = {
    id?: true
    cat_id?: true
  }

  export type Wes_attSumAggregateInputType = {
    id?: true
    cat_id?: true
  }

  export type Wes_attMinAggregateInputType = {
    id?: true
    attname?: true
    cat_id?: true
    sort?: true
  }

  export type Wes_attMaxAggregateInputType = {
    id?: true
    attname?: true
    cat_id?: true
    sort?: true
  }

  export type Wes_attCountAggregateInputType = {
    id?: true
    attname?: true
    cat_id?: true
    sort?: true
    _all?: true
  }

  export type Wes_attAggregateArgs = {
    /**
     * Filter which wes_att to aggregate.
     * 
    **/
    where?: wes_attWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_atts to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_attOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_attWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_atts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_atts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_atts
    **/
    _count?: true | Wes_attCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_attAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_attSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_attMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_attMaxAggregateInputType
  }

  export type GetWes_attAggregateType<T extends Wes_attAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_att]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_att[P]>
      : GetScalarType<T[P], AggregateWes_att[P]>
  }




  export type Wes_attGroupByArgs = {
    where?: wes_attWhereInput
    orderBy?: Enumerable<wes_attOrderByWithAggregationInput>
    by: Array<Wes_attScalarFieldEnum>
    having?: wes_attScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_attCountAggregateInputType | true
    _avg?: Wes_attAvgAggregateInputType
    _sum?: Wes_attSumAggregateInputType
    _min?: Wes_attMinAggregateInputType
    _max?: Wes_attMaxAggregateInputType
  }


  export type Wes_attGroupByOutputType = {
    id: number
    attname: string | null
    cat_id: number
    sort: string | null
    _count: Wes_attCountAggregateOutputType | null
    _avg: Wes_attAvgAggregateOutputType | null
    _sum: Wes_attSumAggregateOutputType | null
    _min: Wes_attMinAggregateOutputType | null
    _max: Wes_attMaxAggregateOutputType | null
  }

  type GetWes_attGroupByPayload<T extends Wes_attGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_attGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_attGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_attGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_attGroupByOutputType[P]>
        }
      >
    >


  export type wes_attSelect = {
    id?: boolean
    attname?: boolean
    cat_id?: boolean
    sort?: boolean
  }

  export type wes_attGetPayload<
    S extends boolean | null | undefined | wes_attArgs,
    U = keyof S
      > = S extends true
        ? wes_att
    : S extends undefined
    ? never
    : S extends wes_attArgs | wes_attFindManyArgs
    ?'include' extends U
    ? wes_att 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_att ? wes_att[P] : never
  } 
    : wes_att
  : wes_att


  type wes_attCountArgs = Merge<
    Omit<wes_attFindManyArgs, 'select' | 'include'> & {
      select?: Wes_attCountAggregateInputType | true
    }
  >

  export interface wes_attDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_att that matches the filter.
     * @param {wes_attFindUniqueArgs} args - Arguments to find a Wes_att
     * @example
     * // Get one Wes_att
     * const wes_att = await prisma.wes_att.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_attFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_attFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_att'> extends True ? CheckSelect<T, Prisma__wes_attClient<wes_att>, Prisma__wes_attClient<wes_attGetPayload<T>>> : CheckSelect<T, Prisma__wes_attClient<wes_att | null, null>, Prisma__wes_attClient<wes_attGetPayload<T> | null, null>>

    /**
     * Find the first Wes_att that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_attFindFirstArgs} args - Arguments to find a Wes_att
     * @example
     * // Get one Wes_att
     * const wes_att = await prisma.wes_att.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_attFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_attFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_att'> extends True ? CheckSelect<T, Prisma__wes_attClient<wes_att>, Prisma__wes_attClient<wes_attGetPayload<T>>> : CheckSelect<T, Prisma__wes_attClient<wes_att | null, null>, Prisma__wes_attClient<wes_attGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_atts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_attFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_atts
     * const wes_atts = await prisma.wes_att.findMany()
     * 
     * // Get first 10 Wes_atts
     * const wes_atts = await prisma.wes_att.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_attWithIdOnly = await prisma.wes_att.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_attFindManyArgs>(
      args?: SelectSubset<T, wes_attFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_att>>, PrismaPromise<Array<wes_attGetPayload<T>>>>

    /**
     * Create a Wes_att.
     * @param {wes_attCreateArgs} args - Arguments to create a Wes_att.
     * @example
     * // Create one Wes_att
     * const Wes_att = await prisma.wes_att.create({
     *   data: {
     *     // ... data to create a Wes_att
     *   }
     * })
     * 
    **/
    create<T extends wes_attCreateArgs>(
      args: SelectSubset<T, wes_attCreateArgs>
    ): CheckSelect<T, Prisma__wes_attClient<wes_att>, Prisma__wes_attClient<wes_attGetPayload<T>>>

    /**
     * Create many Wes_atts.
     *     @param {wes_attCreateManyArgs} args - Arguments to create many Wes_atts.
     *     @example
     *     // Create many Wes_atts
     *     const wes_att = await prisma.wes_att.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_attCreateManyArgs>(
      args?: SelectSubset<T, wes_attCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_att.
     * @param {wes_attDeleteArgs} args - Arguments to delete one Wes_att.
     * @example
     * // Delete one Wes_att
     * const Wes_att = await prisma.wes_att.delete({
     *   where: {
     *     // ... filter to delete one Wes_att
     *   }
     * })
     * 
    **/
    delete<T extends wes_attDeleteArgs>(
      args: SelectSubset<T, wes_attDeleteArgs>
    ): CheckSelect<T, Prisma__wes_attClient<wes_att>, Prisma__wes_attClient<wes_attGetPayload<T>>>

    /**
     * Update one Wes_att.
     * @param {wes_attUpdateArgs} args - Arguments to update one Wes_att.
     * @example
     * // Update one Wes_att
     * const wes_att = await prisma.wes_att.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_attUpdateArgs>(
      args: SelectSubset<T, wes_attUpdateArgs>
    ): CheckSelect<T, Prisma__wes_attClient<wes_att>, Prisma__wes_attClient<wes_attGetPayload<T>>>

    /**
     * Delete zero or more Wes_atts.
     * @param {wes_attDeleteManyArgs} args - Arguments to filter Wes_atts to delete.
     * @example
     * // Delete a few Wes_atts
     * const { count } = await prisma.wes_att.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_attDeleteManyArgs>(
      args?: SelectSubset<T, wes_attDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_atts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_attUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_atts
     * const wes_att = await prisma.wes_att.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_attUpdateManyArgs>(
      args: SelectSubset<T, wes_attUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_att.
     * @param {wes_attUpsertArgs} args - Arguments to update or create a Wes_att.
     * @example
     * // Update or create a Wes_att
     * const wes_att = await prisma.wes_att.upsert({
     *   create: {
     *     // ... data to create a Wes_att
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_att we want to update
     *   }
     * })
    **/
    upsert<T extends wes_attUpsertArgs>(
      args: SelectSubset<T, wes_attUpsertArgs>
    ): CheckSelect<T, Prisma__wes_attClient<wes_att>, Prisma__wes_attClient<wes_attGetPayload<T>>>

    /**
     * Find one Wes_att that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_attFindUniqueOrThrowArgs} args - Arguments to find a Wes_att
     * @example
     * // Get one Wes_att
     * const wes_att = await prisma.wes_att.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_attFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_attFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_attClient<wes_att>, Prisma__wes_attClient<wes_attGetPayload<T>>>

    /**
     * Find the first Wes_att that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_attFindFirstOrThrowArgs} args - Arguments to find a Wes_att
     * @example
     * // Get one Wes_att
     * const wes_att = await prisma.wes_att.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_attFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_attFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_attClient<wes_att>, Prisma__wes_attClient<wes_attGetPayload<T>>>

    /**
     * Count the number of Wes_atts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_attCountArgs} args - Arguments to filter Wes_atts to count.
     * @example
     * // Count the number of Wes_atts
     * const count = await prisma.wes_att.count({
     *   where: {
     *     // ... the filter for the Wes_atts we want to count
     *   }
     * })
    **/
    count<T extends wes_attCountArgs>(
      args?: Subset<T, wes_attCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_attCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_att.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_attAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_attAggregateArgs>(args: Subset<T, Wes_attAggregateArgs>): PrismaPromise<GetWes_attAggregateType<T>>

    /**
     * Group by Wes_att.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_attGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_attGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_attGroupByArgs['orderBy'] }
        : { orderBy?: Wes_attGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_attGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_attGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_att.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_attClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_att base type for findUnique actions
   */
  export type wes_attFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_att
     * 
    **/
    select?: wes_attSelect | null
    /**
     * Filter, which wes_att to fetch.
     * 
    **/
    where: wes_attWhereUniqueInput
  }

  /**
   * wes_att: findUnique
   */
  export interface wes_attFindUniqueArgs extends wes_attFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_att base type for findFirst actions
   */
  export type wes_attFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_att
     * 
    **/
    select?: wes_attSelect | null
    /**
     * Filter, which wes_att to fetch.
     * 
    **/
    where?: wes_attWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_atts to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_attOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_atts.
     * 
    **/
    cursor?: wes_attWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_atts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_atts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_atts.
     * 
    **/
    distinct?: Enumerable<Wes_attScalarFieldEnum>
  }

  /**
   * wes_att: findFirst
   */
  export interface wes_attFindFirstArgs extends wes_attFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_att findMany
   */
  export type wes_attFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_att
     * 
    **/
    select?: wes_attSelect | null
    /**
     * Filter, which wes_atts to fetch.
     * 
    **/
    where?: wes_attWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_atts to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_attOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_atts.
     * 
    **/
    cursor?: wes_attWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_atts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_atts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_attScalarFieldEnum>
  }


  /**
   * wes_att create
   */
  export type wes_attCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_att
     * 
    **/
    select?: wes_attSelect | null
    /**
     * The data needed to create a wes_att.
     * 
    **/
    data: XOR<wes_attCreateInput, wes_attUncheckedCreateInput>
  }


  /**
   * wes_att createMany
   */
  export type wes_attCreateManyArgs = {
    /**
     * The data used to create many wes_atts.
     * 
    **/
    data: Enumerable<wes_attCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_att update
   */
  export type wes_attUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_att
     * 
    **/
    select?: wes_attSelect | null
    /**
     * The data needed to update a wes_att.
     * 
    **/
    data: XOR<wes_attUpdateInput, wes_attUncheckedUpdateInput>
    /**
     * Choose, which wes_att to update.
     * 
    **/
    where: wes_attWhereUniqueInput
  }


  /**
   * wes_att updateMany
   */
  export type wes_attUpdateManyArgs = {
    /**
     * The data used to update wes_atts.
     * 
    **/
    data: XOR<wes_attUpdateManyMutationInput, wes_attUncheckedUpdateManyInput>
    /**
     * Filter which wes_atts to update
     * 
    **/
    where?: wes_attWhereInput
  }


  /**
   * wes_att upsert
   */
  export type wes_attUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_att
     * 
    **/
    select?: wes_attSelect | null
    /**
     * The filter to search for the wes_att to update in case it exists.
     * 
    **/
    where: wes_attWhereUniqueInput
    /**
     * In case the wes_att found by the `where` argument doesn't exist, create a new wes_att with this data.
     * 
    **/
    create: XOR<wes_attCreateInput, wes_attUncheckedCreateInput>
    /**
     * In case the wes_att was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_attUpdateInput, wes_attUncheckedUpdateInput>
  }


  /**
   * wes_att delete
   */
  export type wes_attDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_att
     * 
    **/
    select?: wes_attSelect | null
    /**
     * Filter which wes_att to delete.
     * 
    **/
    where: wes_attWhereUniqueInput
  }


  /**
   * wes_att deleteMany
   */
  export type wes_attDeleteManyArgs = {
    /**
     * Filter which wes_atts to delete
     * 
    **/
    where?: wes_attWhereInput
  }


  /**
   * wes_att: findUniqueOrThrow
   */
  export type wes_attFindUniqueOrThrowArgs = wes_attFindUniqueArgsBase
      

  /**
   * wes_att: findFirstOrThrow
   */
  export type wes_attFindFirstOrThrowArgs = wes_attFindFirstArgsBase
      

  /**
   * wes_att without action
   */
  export type wes_attArgs = {
    /**
     * Select specific fields to fetch from the wes_att
     * 
    **/
    select?: wes_attSelect | null
  }



  /**
   * Model wes_bewegungsdaten_cat
   */


  export type AggregateWes_bewegungsdaten_cat = {
    _count: Wes_bewegungsdaten_catCountAggregateOutputType | null
    _avg: Wes_bewegungsdaten_catAvgAggregateOutputType | null
    _sum: Wes_bewegungsdaten_catSumAggregateOutputType | null
    _min: Wes_bewegungsdaten_catMinAggregateOutputType | null
    _max: Wes_bewegungsdaten_catMaxAggregateOutputType | null
  }

  export type Wes_bewegungsdaten_catAvgAggregateOutputType = {
    id: number | null
    att_id: number | null
    park_id: number | null
    loguser: number | null
  }

  export type Wes_bewegungsdaten_catSumAggregateOutputType = {
    id: number | null
    att_id: number | null
    park_id: number | null
    loguser: number | null
  }

  export type Wes_bewegungsdaten_catMinAggregateOutputType = {
    id: number | null
    value: string | null
    att_id: number | null
    park_id: number | null
    remarks: string | null
    logtime: Date | null
    loguser: number | null
  }

  export type Wes_bewegungsdaten_catMaxAggregateOutputType = {
    id: number | null
    value: string | null
    att_id: number | null
    park_id: number | null
    remarks: string | null
    logtime: Date | null
    loguser: number | null
  }

  export type Wes_bewegungsdaten_catCountAggregateOutputType = {
    id: number
    value: number
    att_id: number
    park_id: number
    remarks: number
    logtime: number
    loguser: number
    _all: number
  }


  export type Wes_bewegungsdaten_catAvgAggregateInputType = {
    id?: true
    att_id?: true
    park_id?: true
    loguser?: true
  }

  export type Wes_bewegungsdaten_catSumAggregateInputType = {
    id?: true
    att_id?: true
    park_id?: true
    loguser?: true
  }

  export type Wes_bewegungsdaten_catMinAggregateInputType = {
    id?: true
    value?: true
    att_id?: true
    park_id?: true
    remarks?: true
    logtime?: true
    loguser?: true
  }

  export type Wes_bewegungsdaten_catMaxAggregateInputType = {
    id?: true
    value?: true
    att_id?: true
    park_id?: true
    remarks?: true
    logtime?: true
    loguser?: true
  }

  export type Wes_bewegungsdaten_catCountAggregateInputType = {
    id?: true
    value?: true
    att_id?: true
    park_id?: true
    remarks?: true
    logtime?: true
    loguser?: true
    _all?: true
  }

  export type Wes_bewegungsdaten_catAggregateArgs = {
    /**
     * Filter which wes_bewegungsdaten_cat to aggregate.
     * 
    **/
    where?: wes_bewegungsdaten_catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_bewegungsdaten_cats to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_bewegungsdaten_catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_bewegungsdaten_catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_bewegungsdaten_cats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_bewegungsdaten_cats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_bewegungsdaten_cats
    **/
    _count?: true | Wes_bewegungsdaten_catCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_bewegungsdaten_catAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_bewegungsdaten_catSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_bewegungsdaten_catMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_bewegungsdaten_catMaxAggregateInputType
  }

  export type GetWes_bewegungsdaten_catAggregateType<T extends Wes_bewegungsdaten_catAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_bewegungsdaten_cat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_bewegungsdaten_cat[P]>
      : GetScalarType<T[P], AggregateWes_bewegungsdaten_cat[P]>
  }




  export type Wes_bewegungsdaten_catGroupByArgs = {
    where?: wes_bewegungsdaten_catWhereInput
    orderBy?: Enumerable<wes_bewegungsdaten_catOrderByWithAggregationInput>
    by: Array<Wes_bewegungsdaten_catScalarFieldEnum>
    having?: wes_bewegungsdaten_catScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_bewegungsdaten_catCountAggregateInputType | true
    _avg?: Wes_bewegungsdaten_catAvgAggregateInputType
    _sum?: Wes_bewegungsdaten_catSumAggregateInputType
    _min?: Wes_bewegungsdaten_catMinAggregateInputType
    _max?: Wes_bewegungsdaten_catMaxAggregateInputType
  }


  export type Wes_bewegungsdaten_catGroupByOutputType = {
    id: number
    value: string | null
    att_id: number
    park_id: number
    remarks: string | null
    logtime: Date
    loguser: number
    _count: Wes_bewegungsdaten_catCountAggregateOutputType | null
    _avg: Wes_bewegungsdaten_catAvgAggregateOutputType | null
    _sum: Wes_bewegungsdaten_catSumAggregateOutputType | null
    _min: Wes_bewegungsdaten_catMinAggregateOutputType | null
    _max: Wes_bewegungsdaten_catMaxAggregateOutputType | null
  }

  type GetWes_bewegungsdaten_catGroupByPayload<T extends Wes_bewegungsdaten_catGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_bewegungsdaten_catGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_bewegungsdaten_catGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_bewegungsdaten_catGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_bewegungsdaten_catGroupByOutputType[P]>
        }
      >
    >


  export type wes_bewegungsdaten_catSelect = {
    id?: boolean
    value?: boolean
    att_id?: boolean
    park_id?: boolean
    remarks?: boolean
    logtime?: boolean
    loguser?: boolean
  }

  export type wes_bewegungsdaten_catGetPayload<
    S extends boolean | null | undefined | wes_bewegungsdaten_catArgs,
    U = keyof S
      > = S extends true
        ? wes_bewegungsdaten_cat
    : S extends undefined
    ? never
    : S extends wes_bewegungsdaten_catArgs | wes_bewegungsdaten_catFindManyArgs
    ?'include' extends U
    ? wes_bewegungsdaten_cat 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_bewegungsdaten_cat ? wes_bewegungsdaten_cat[P] : never
  } 
    : wes_bewegungsdaten_cat
  : wes_bewegungsdaten_cat


  type wes_bewegungsdaten_catCountArgs = Merge<
    Omit<wes_bewegungsdaten_catFindManyArgs, 'select' | 'include'> & {
      select?: Wes_bewegungsdaten_catCountAggregateInputType | true
    }
  >

  export interface wes_bewegungsdaten_catDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_bewegungsdaten_cat that matches the filter.
     * @param {wes_bewegungsdaten_catFindUniqueArgs} args - Arguments to find a Wes_bewegungsdaten_cat
     * @example
     * // Get one Wes_bewegungsdaten_cat
     * const wes_bewegungsdaten_cat = await prisma.wes_bewegungsdaten_cat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_bewegungsdaten_catFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_bewegungsdaten_catFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_bewegungsdaten_cat'> extends True ? CheckSelect<T, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_cat>, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_catGetPayload<T>>> : CheckSelect<T, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_cat | null, null>, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_catGetPayload<T> | null, null>>

    /**
     * Find the first Wes_bewegungsdaten_cat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_catFindFirstArgs} args - Arguments to find a Wes_bewegungsdaten_cat
     * @example
     * // Get one Wes_bewegungsdaten_cat
     * const wes_bewegungsdaten_cat = await prisma.wes_bewegungsdaten_cat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_bewegungsdaten_catFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_bewegungsdaten_catFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_bewegungsdaten_cat'> extends True ? CheckSelect<T, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_cat>, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_catGetPayload<T>>> : CheckSelect<T, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_cat | null, null>, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_catGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_bewegungsdaten_cats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_catFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_bewegungsdaten_cats
     * const wes_bewegungsdaten_cats = await prisma.wes_bewegungsdaten_cat.findMany()
     * 
     * // Get first 10 Wes_bewegungsdaten_cats
     * const wes_bewegungsdaten_cats = await prisma.wes_bewegungsdaten_cat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_bewegungsdaten_catWithIdOnly = await prisma.wes_bewegungsdaten_cat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_bewegungsdaten_catFindManyArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_catFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_bewegungsdaten_cat>>, PrismaPromise<Array<wes_bewegungsdaten_catGetPayload<T>>>>

    /**
     * Create a Wes_bewegungsdaten_cat.
     * @param {wes_bewegungsdaten_catCreateArgs} args - Arguments to create a Wes_bewegungsdaten_cat.
     * @example
     * // Create one Wes_bewegungsdaten_cat
     * const Wes_bewegungsdaten_cat = await prisma.wes_bewegungsdaten_cat.create({
     *   data: {
     *     // ... data to create a Wes_bewegungsdaten_cat
     *   }
     * })
     * 
    **/
    create<T extends wes_bewegungsdaten_catCreateArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_catCreateArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_cat>, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_catGetPayload<T>>>

    /**
     * Create many Wes_bewegungsdaten_cats.
     *     @param {wes_bewegungsdaten_catCreateManyArgs} args - Arguments to create many Wes_bewegungsdaten_cats.
     *     @example
     *     // Create many Wes_bewegungsdaten_cats
     *     const wes_bewegungsdaten_cat = await prisma.wes_bewegungsdaten_cat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_bewegungsdaten_catCreateManyArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_catCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_bewegungsdaten_cat.
     * @param {wes_bewegungsdaten_catDeleteArgs} args - Arguments to delete one Wes_bewegungsdaten_cat.
     * @example
     * // Delete one Wes_bewegungsdaten_cat
     * const Wes_bewegungsdaten_cat = await prisma.wes_bewegungsdaten_cat.delete({
     *   where: {
     *     // ... filter to delete one Wes_bewegungsdaten_cat
     *   }
     * })
     * 
    **/
    delete<T extends wes_bewegungsdaten_catDeleteArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_catDeleteArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_cat>, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_catGetPayload<T>>>

    /**
     * Update one Wes_bewegungsdaten_cat.
     * @param {wes_bewegungsdaten_catUpdateArgs} args - Arguments to update one Wes_bewegungsdaten_cat.
     * @example
     * // Update one Wes_bewegungsdaten_cat
     * const wes_bewegungsdaten_cat = await prisma.wes_bewegungsdaten_cat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_bewegungsdaten_catUpdateArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_catUpdateArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_cat>, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_catGetPayload<T>>>

    /**
     * Delete zero or more Wes_bewegungsdaten_cats.
     * @param {wes_bewegungsdaten_catDeleteManyArgs} args - Arguments to filter Wes_bewegungsdaten_cats to delete.
     * @example
     * // Delete a few Wes_bewegungsdaten_cats
     * const { count } = await prisma.wes_bewegungsdaten_cat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_bewegungsdaten_catDeleteManyArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_catDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_bewegungsdaten_cats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_catUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_bewegungsdaten_cats
     * const wes_bewegungsdaten_cat = await prisma.wes_bewegungsdaten_cat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_bewegungsdaten_catUpdateManyArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_catUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_bewegungsdaten_cat.
     * @param {wes_bewegungsdaten_catUpsertArgs} args - Arguments to update or create a Wes_bewegungsdaten_cat.
     * @example
     * // Update or create a Wes_bewegungsdaten_cat
     * const wes_bewegungsdaten_cat = await prisma.wes_bewegungsdaten_cat.upsert({
     *   create: {
     *     // ... data to create a Wes_bewegungsdaten_cat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_bewegungsdaten_cat we want to update
     *   }
     * })
    **/
    upsert<T extends wes_bewegungsdaten_catUpsertArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_catUpsertArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_cat>, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_catGetPayload<T>>>

    /**
     * Find one Wes_bewegungsdaten_cat that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_bewegungsdaten_catFindUniqueOrThrowArgs} args - Arguments to find a Wes_bewegungsdaten_cat
     * @example
     * // Get one Wes_bewegungsdaten_cat
     * const wes_bewegungsdaten_cat = await prisma.wes_bewegungsdaten_cat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_bewegungsdaten_catFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_catFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_cat>, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_catGetPayload<T>>>

    /**
     * Find the first Wes_bewegungsdaten_cat that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_catFindFirstOrThrowArgs} args - Arguments to find a Wes_bewegungsdaten_cat
     * @example
     * // Get one Wes_bewegungsdaten_cat
     * const wes_bewegungsdaten_cat = await prisma.wes_bewegungsdaten_cat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_bewegungsdaten_catFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_catFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_cat>, Prisma__wes_bewegungsdaten_catClient<wes_bewegungsdaten_catGetPayload<T>>>

    /**
     * Count the number of Wes_bewegungsdaten_cats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_catCountArgs} args - Arguments to filter Wes_bewegungsdaten_cats to count.
     * @example
     * // Count the number of Wes_bewegungsdaten_cats
     * const count = await prisma.wes_bewegungsdaten_cat.count({
     *   where: {
     *     // ... the filter for the Wes_bewegungsdaten_cats we want to count
     *   }
     * })
    **/
    count<T extends wes_bewegungsdaten_catCountArgs>(
      args?: Subset<T, wes_bewegungsdaten_catCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_bewegungsdaten_catCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_bewegungsdaten_cat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_bewegungsdaten_catAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_bewegungsdaten_catAggregateArgs>(args: Subset<T, Wes_bewegungsdaten_catAggregateArgs>): PrismaPromise<GetWes_bewegungsdaten_catAggregateType<T>>

    /**
     * Group by Wes_bewegungsdaten_cat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_bewegungsdaten_catGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_bewegungsdaten_catGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_bewegungsdaten_catGroupByArgs['orderBy'] }
        : { orderBy?: Wes_bewegungsdaten_catGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_bewegungsdaten_catGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_bewegungsdaten_catGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_bewegungsdaten_cat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_bewegungsdaten_catClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_bewegungsdaten_cat base type for findUnique actions
   */
  export type wes_bewegungsdaten_catFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_cat
     * 
    **/
    select?: wes_bewegungsdaten_catSelect | null
    /**
     * Filter, which wes_bewegungsdaten_cat to fetch.
     * 
    **/
    where: wes_bewegungsdaten_catWhereUniqueInput
  }

  /**
   * wes_bewegungsdaten_cat: findUnique
   */
  export interface wes_bewegungsdaten_catFindUniqueArgs extends wes_bewegungsdaten_catFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_bewegungsdaten_cat base type for findFirst actions
   */
  export type wes_bewegungsdaten_catFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_cat
     * 
    **/
    select?: wes_bewegungsdaten_catSelect | null
    /**
     * Filter, which wes_bewegungsdaten_cat to fetch.
     * 
    **/
    where?: wes_bewegungsdaten_catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_bewegungsdaten_cats to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_bewegungsdaten_catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_bewegungsdaten_cats.
     * 
    **/
    cursor?: wes_bewegungsdaten_catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_bewegungsdaten_cats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_bewegungsdaten_cats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_bewegungsdaten_cats.
     * 
    **/
    distinct?: Enumerable<Wes_bewegungsdaten_catScalarFieldEnum>
  }

  /**
   * wes_bewegungsdaten_cat: findFirst
   */
  export interface wes_bewegungsdaten_catFindFirstArgs extends wes_bewegungsdaten_catFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_bewegungsdaten_cat findMany
   */
  export type wes_bewegungsdaten_catFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_cat
     * 
    **/
    select?: wes_bewegungsdaten_catSelect | null
    /**
     * Filter, which wes_bewegungsdaten_cats to fetch.
     * 
    **/
    where?: wes_bewegungsdaten_catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_bewegungsdaten_cats to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_bewegungsdaten_catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_bewegungsdaten_cats.
     * 
    **/
    cursor?: wes_bewegungsdaten_catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_bewegungsdaten_cats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_bewegungsdaten_cats.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_bewegungsdaten_catScalarFieldEnum>
  }


  /**
   * wes_bewegungsdaten_cat create
   */
  export type wes_bewegungsdaten_catCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_cat
     * 
    **/
    select?: wes_bewegungsdaten_catSelect | null
    /**
     * The data needed to create a wes_bewegungsdaten_cat.
     * 
    **/
    data: XOR<wes_bewegungsdaten_catCreateInput, wes_bewegungsdaten_catUncheckedCreateInput>
  }


  /**
   * wes_bewegungsdaten_cat createMany
   */
  export type wes_bewegungsdaten_catCreateManyArgs = {
    /**
     * The data used to create many wes_bewegungsdaten_cats.
     * 
    **/
    data: Enumerable<wes_bewegungsdaten_catCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_bewegungsdaten_cat update
   */
  export type wes_bewegungsdaten_catUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_cat
     * 
    **/
    select?: wes_bewegungsdaten_catSelect | null
    /**
     * The data needed to update a wes_bewegungsdaten_cat.
     * 
    **/
    data: XOR<wes_bewegungsdaten_catUpdateInput, wes_bewegungsdaten_catUncheckedUpdateInput>
    /**
     * Choose, which wes_bewegungsdaten_cat to update.
     * 
    **/
    where: wes_bewegungsdaten_catWhereUniqueInput
  }


  /**
   * wes_bewegungsdaten_cat updateMany
   */
  export type wes_bewegungsdaten_catUpdateManyArgs = {
    /**
     * The data used to update wes_bewegungsdaten_cats.
     * 
    **/
    data: XOR<wes_bewegungsdaten_catUpdateManyMutationInput, wes_bewegungsdaten_catUncheckedUpdateManyInput>
    /**
     * Filter which wes_bewegungsdaten_cats to update
     * 
    **/
    where?: wes_bewegungsdaten_catWhereInput
  }


  /**
   * wes_bewegungsdaten_cat upsert
   */
  export type wes_bewegungsdaten_catUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_cat
     * 
    **/
    select?: wes_bewegungsdaten_catSelect | null
    /**
     * The filter to search for the wes_bewegungsdaten_cat to update in case it exists.
     * 
    **/
    where: wes_bewegungsdaten_catWhereUniqueInput
    /**
     * In case the wes_bewegungsdaten_cat found by the `where` argument doesn't exist, create a new wes_bewegungsdaten_cat with this data.
     * 
    **/
    create: XOR<wes_bewegungsdaten_catCreateInput, wes_bewegungsdaten_catUncheckedCreateInput>
    /**
     * In case the wes_bewegungsdaten_cat was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_bewegungsdaten_catUpdateInput, wes_bewegungsdaten_catUncheckedUpdateInput>
  }


  /**
   * wes_bewegungsdaten_cat delete
   */
  export type wes_bewegungsdaten_catDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_cat
     * 
    **/
    select?: wes_bewegungsdaten_catSelect | null
    /**
     * Filter which wes_bewegungsdaten_cat to delete.
     * 
    **/
    where: wes_bewegungsdaten_catWhereUniqueInput
  }


  /**
   * wes_bewegungsdaten_cat deleteMany
   */
  export type wes_bewegungsdaten_catDeleteManyArgs = {
    /**
     * Filter which wes_bewegungsdaten_cats to delete
     * 
    **/
    where?: wes_bewegungsdaten_catWhereInput
  }


  /**
   * wes_bewegungsdaten_cat: findUniqueOrThrow
   */
  export type wes_bewegungsdaten_catFindUniqueOrThrowArgs = wes_bewegungsdaten_catFindUniqueArgsBase
      

  /**
   * wes_bewegungsdaten_cat: findFirstOrThrow
   */
  export type wes_bewegungsdaten_catFindFirstOrThrowArgs = wes_bewegungsdaten_catFindFirstArgsBase
      

  /**
   * wes_bewegungsdaten_cat without action
   */
  export type wes_bewegungsdaten_catArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_cat
     * 
    **/
    select?: wes_bewegungsdaten_catSelect | null
  }



  /**
   * Model wes_bewegungsdaten_date
   */


  export type AggregateWes_bewegungsdaten_date = {
    _count: Wes_bewegungsdaten_dateCountAggregateOutputType | null
    _avg: Wes_bewegungsdaten_dateAvgAggregateOutputType | null
    _sum: Wes_bewegungsdaten_dateSumAggregateOutputType | null
    _min: Wes_bewegungsdaten_dateMinAggregateOutputType | null
    _max: Wes_bewegungsdaten_dateMaxAggregateOutputType | null
  }

  export type Wes_bewegungsdaten_dateAvgAggregateOutputType = {
    id: number | null
    type: number | null
    user: number | null
    user_created: number | null
    park_id: number | null
    start_user: number | null
    end_user: number | null
    status: number | null
    final: number | null
  }

  export type Wes_bewegungsdaten_dateSumAggregateOutputType = {
    id: number | null
    type: number | null
    user: number | null
    user_created: number | null
    park_id: number | null
    start_user: number | null
    end_user: number | null
    status: number | null
    final: number | null
  }

  export type Wes_bewegungsdaten_dateMinAggregateOutputType = {
    id: number | null
    type: number | null
    user: number | null
    date_created: Date | null
    user_created: number | null
    park_id: number | null
    frist: Date | null
    start_date: Date | null
    start_user: number | null
    end_date: Date | null
    end_user: number | null
    reminder_sent: Date | null
    reminder_II_sent: Date | null
    status: number | null
    bemerkungen: string | null
    final: number | null
    steps: string | null
    partner: string | null
  }

  export type Wes_bewegungsdaten_dateMaxAggregateOutputType = {
    id: number | null
    type: number | null
    user: number | null
    date_created: Date | null
    user_created: number | null
    park_id: number | null
    frist: Date | null
    start_date: Date | null
    start_user: number | null
    end_date: Date | null
    end_user: number | null
    reminder_sent: Date | null
    reminder_II_sent: Date | null
    status: number | null
    bemerkungen: string | null
    final: number | null
    steps: string | null
    partner: string | null
  }

  export type Wes_bewegungsdaten_dateCountAggregateOutputType = {
    id: number
    type: number
    user: number
    date_created: number
    user_created: number
    park_id: number
    frist: number
    start_date: number
    start_user: number
    end_date: number
    end_user: number
    reminder_sent: number
    reminder_II_sent: number
    status: number
    bemerkungen: number
    final: number
    steps: number
    partner: number
    _all: number
  }


  export type Wes_bewegungsdaten_dateAvgAggregateInputType = {
    id?: true
    type?: true
    user?: true
    user_created?: true
    park_id?: true
    start_user?: true
    end_user?: true
    status?: true
    final?: true
  }

  export type Wes_bewegungsdaten_dateSumAggregateInputType = {
    id?: true
    type?: true
    user?: true
    user_created?: true
    park_id?: true
    start_user?: true
    end_user?: true
    status?: true
    final?: true
  }

  export type Wes_bewegungsdaten_dateMinAggregateInputType = {
    id?: true
    type?: true
    user?: true
    date_created?: true
    user_created?: true
    park_id?: true
    frist?: true
    start_date?: true
    start_user?: true
    end_date?: true
    end_user?: true
    reminder_sent?: true
    reminder_II_sent?: true
    status?: true
    bemerkungen?: true
    final?: true
    steps?: true
    partner?: true
  }

  export type Wes_bewegungsdaten_dateMaxAggregateInputType = {
    id?: true
    type?: true
    user?: true
    date_created?: true
    user_created?: true
    park_id?: true
    frist?: true
    start_date?: true
    start_user?: true
    end_date?: true
    end_user?: true
    reminder_sent?: true
    reminder_II_sent?: true
    status?: true
    bemerkungen?: true
    final?: true
    steps?: true
    partner?: true
  }

  export type Wes_bewegungsdaten_dateCountAggregateInputType = {
    id?: true
    type?: true
    user?: true
    date_created?: true
    user_created?: true
    park_id?: true
    frist?: true
    start_date?: true
    start_user?: true
    end_date?: true
    end_user?: true
    reminder_sent?: true
    reminder_II_sent?: true
    status?: true
    bemerkungen?: true
    final?: true
    steps?: true
    partner?: true
    _all?: true
  }

  export type Wes_bewegungsdaten_dateAggregateArgs = {
    /**
     * Filter which wes_bewegungsdaten_date to aggregate.
     * 
    **/
    where?: wes_bewegungsdaten_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_bewegungsdaten_dates to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_bewegungsdaten_dateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_bewegungsdaten_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_bewegungsdaten_dates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_bewegungsdaten_dates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_bewegungsdaten_dates
    **/
    _count?: true | Wes_bewegungsdaten_dateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_bewegungsdaten_dateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_bewegungsdaten_dateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_bewegungsdaten_dateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_bewegungsdaten_dateMaxAggregateInputType
  }

  export type GetWes_bewegungsdaten_dateAggregateType<T extends Wes_bewegungsdaten_dateAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_bewegungsdaten_date]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_bewegungsdaten_date[P]>
      : GetScalarType<T[P], AggregateWes_bewegungsdaten_date[P]>
  }




  export type Wes_bewegungsdaten_dateGroupByArgs = {
    where?: wes_bewegungsdaten_dateWhereInput
    orderBy?: Enumerable<wes_bewegungsdaten_dateOrderByWithAggregationInput>
    by: Array<Wes_bewegungsdaten_dateScalarFieldEnum>
    having?: wes_bewegungsdaten_dateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_bewegungsdaten_dateCountAggregateInputType | true
    _avg?: Wes_bewegungsdaten_dateAvgAggregateInputType
    _sum?: Wes_bewegungsdaten_dateSumAggregateInputType
    _min?: Wes_bewegungsdaten_dateMinAggregateInputType
    _max?: Wes_bewegungsdaten_dateMaxAggregateInputType
  }


  export type Wes_bewegungsdaten_dateGroupByOutputType = {
    id: number
    type: number
    user: number
    date_created: Date | null
    user_created: number
    park_id: number
    frist: Date
    start_date: Date | null
    start_user: number
    end_date: Date | null
    end_user: number
    reminder_sent: Date | null
    reminder_II_sent: Date | null
    status: number
    bemerkungen: string | null
    final: number | null
    steps: string | null
    partner: string | null
    _count: Wes_bewegungsdaten_dateCountAggregateOutputType | null
    _avg: Wes_bewegungsdaten_dateAvgAggregateOutputType | null
    _sum: Wes_bewegungsdaten_dateSumAggregateOutputType | null
    _min: Wes_bewegungsdaten_dateMinAggregateOutputType | null
    _max: Wes_bewegungsdaten_dateMaxAggregateOutputType | null
  }

  type GetWes_bewegungsdaten_dateGroupByPayload<T extends Wes_bewegungsdaten_dateGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_bewegungsdaten_dateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_bewegungsdaten_dateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_bewegungsdaten_dateGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_bewegungsdaten_dateGroupByOutputType[P]>
        }
      >
    >


  export type wes_bewegungsdaten_dateSelect = {
    id?: boolean
    type?: boolean
    user?: boolean
    date_created?: boolean
    user_created?: boolean
    park_id?: boolean
    frist?: boolean
    start_date?: boolean
    start_user?: boolean
    end_date?: boolean
    end_user?: boolean
    reminder_sent?: boolean
    reminder_II_sent?: boolean
    status?: boolean
    bemerkungen?: boolean
    final?: boolean
    steps?: boolean
    partner?: boolean
  }

  export type wes_bewegungsdaten_dateGetPayload<
    S extends boolean | null | undefined | wes_bewegungsdaten_dateArgs,
    U = keyof S
      > = S extends true
        ? wes_bewegungsdaten_date
    : S extends undefined
    ? never
    : S extends wes_bewegungsdaten_dateArgs | wes_bewegungsdaten_dateFindManyArgs
    ?'include' extends U
    ? wes_bewegungsdaten_date 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_bewegungsdaten_date ? wes_bewegungsdaten_date[P] : never
  } 
    : wes_bewegungsdaten_date
  : wes_bewegungsdaten_date


  type wes_bewegungsdaten_dateCountArgs = Merge<
    Omit<wes_bewegungsdaten_dateFindManyArgs, 'select' | 'include'> & {
      select?: Wes_bewegungsdaten_dateCountAggregateInputType | true
    }
  >

  export interface wes_bewegungsdaten_dateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_bewegungsdaten_date that matches the filter.
     * @param {wes_bewegungsdaten_dateFindUniqueArgs} args - Arguments to find a Wes_bewegungsdaten_date
     * @example
     * // Get one Wes_bewegungsdaten_date
     * const wes_bewegungsdaten_date = await prisma.wes_bewegungsdaten_date.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_bewegungsdaten_dateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_bewegungsdaten_dateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_bewegungsdaten_date'> extends True ? CheckSelect<T, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_date>, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_dateGetPayload<T>>> : CheckSelect<T, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_date | null, null>, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_dateGetPayload<T> | null, null>>

    /**
     * Find the first Wes_bewegungsdaten_date that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_dateFindFirstArgs} args - Arguments to find a Wes_bewegungsdaten_date
     * @example
     * // Get one Wes_bewegungsdaten_date
     * const wes_bewegungsdaten_date = await prisma.wes_bewegungsdaten_date.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_bewegungsdaten_dateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_bewegungsdaten_dateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_bewegungsdaten_date'> extends True ? CheckSelect<T, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_date>, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_dateGetPayload<T>>> : CheckSelect<T, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_date | null, null>, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_dateGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_bewegungsdaten_dates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_dateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_bewegungsdaten_dates
     * const wes_bewegungsdaten_dates = await prisma.wes_bewegungsdaten_date.findMany()
     * 
     * // Get first 10 Wes_bewegungsdaten_dates
     * const wes_bewegungsdaten_dates = await prisma.wes_bewegungsdaten_date.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_bewegungsdaten_dateWithIdOnly = await prisma.wes_bewegungsdaten_date.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_bewegungsdaten_dateFindManyArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_dateFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_bewegungsdaten_date>>, PrismaPromise<Array<wes_bewegungsdaten_dateGetPayload<T>>>>

    /**
     * Create a Wes_bewegungsdaten_date.
     * @param {wes_bewegungsdaten_dateCreateArgs} args - Arguments to create a Wes_bewegungsdaten_date.
     * @example
     * // Create one Wes_bewegungsdaten_date
     * const Wes_bewegungsdaten_date = await prisma.wes_bewegungsdaten_date.create({
     *   data: {
     *     // ... data to create a Wes_bewegungsdaten_date
     *   }
     * })
     * 
    **/
    create<T extends wes_bewegungsdaten_dateCreateArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_dateCreateArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_date>, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_dateGetPayload<T>>>

    /**
     * Create many Wes_bewegungsdaten_dates.
     *     @param {wes_bewegungsdaten_dateCreateManyArgs} args - Arguments to create many Wes_bewegungsdaten_dates.
     *     @example
     *     // Create many Wes_bewegungsdaten_dates
     *     const wes_bewegungsdaten_date = await prisma.wes_bewegungsdaten_date.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_bewegungsdaten_dateCreateManyArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_dateCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_bewegungsdaten_date.
     * @param {wes_bewegungsdaten_dateDeleteArgs} args - Arguments to delete one Wes_bewegungsdaten_date.
     * @example
     * // Delete one Wes_bewegungsdaten_date
     * const Wes_bewegungsdaten_date = await prisma.wes_bewegungsdaten_date.delete({
     *   where: {
     *     // ... filter to delete one Wes_bewegungsdaten_date
     *   }
     * })
     * 
    **/
    delete<T extends wes_bewegungsdaten_dateDeleteArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_dateDeleteArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_date>, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_dateGetPayload<T>>>

    /**
     * Update one Wes_bewegungsdaten_date.
     * @param {wes_bewegungsdaten_dateUpdateArgs} args - Arguments to update one Wes_bewegungsdaten_date.
     * @example
     * // Update one Wes_bewegungsdaten_date
     * const wes_bewegungsdaten_date = await prisma.wes_bewegungsdaten_date.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_bewegungsdaten_dateUpdateArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_dateUpdateArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_date>, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_dateGetPayload<T>>>

    /**
     * Delete zero or more Wes_bewegungsdaten_dates.
     * @param {wes_bewegungsdaten_dateDeleteManyArgs} args - Arguments to filter Wes_bewegungsdaten_dates to delete.
     * @example
     * // Delete a few Wes_bewegungsdaten_dates
     * const { count } = await prisma.wes_bewegungsdaten_date.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_bewegungsdaten_dateDeleteManyArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_dateDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_bewegungsdaten_dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_dateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_bewegungsdaten_dates
     * const wes_bewegungsdaten_date = await prisma.wes_bewegungsdaten_date.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_bewegungsdaten_dateUpdateManyArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_dateUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_bewegungsdaten_date.
     * @param {wes_bewegungsdaten_dateUpsertArgs} args - Arguments to update or create a Wes_bewegungsdaten_date.
     * @example
     * // Update or create a Wes_bewegungsdaten_date
     * const wes_bewegungsdaten_date = await prisma.wes_bewegungsdaten_date.upsert({
     *   create: {
     *     // ... data to create a Wes_bewegungsdaten_date
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_bewegungsdaten_date we want to update
     *   }
     * })
    **/
    upsert<T extends wes_bewegungsdaten_dateUpsertArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_dateUpsertArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_date>, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_dateGetPayload<T>>>

    /**
     * Find one Wes_bewegungsdaten_date that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_bewegungsdaten_dateFindUniqueOrThrowArgs} args - Arguments to find a Wes_bewegungsdaten_date
     * @example
     * // Get one Wes_bewegungsdaten_date
     * const wes_bewegungsdaten_date = await prisma.wes_bewegungsdaten_date.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_bewegungsdaten_dateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_dateFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_date>, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_dateGetPayload<T>>>

    /**
     * Find the first Wes_bewegungsdaten_date that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_dateFindFirstOrThrowArgs} args - Arguments to find a Wes_bewegungsdaten_date
     * @example
     * // Get one Wes_bewegungsdaten_date
     * const wes_bewegungsdaten_date = await prisma.wes_bewegungsdaten_date.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_bewegungsdaten_dateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_dateFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_date>, Prisma__wes_bewegungsdaten_dateClient<wes_bewegungsdaten_dateGetPayload<T>>>

    /**
     * Count the number of Wes_bewegungsdaten_dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_dateCountArgs} args - Arguments to filter Wes_bewegungsdaten_dates to count.
     * @example
     * // Count the number of Wes_bewegungsdaten_dates
     * const count = await prisma.wes_bewegungsdaten_date.count({
     *   where: {
     *     // ... the filter for the Wes_bewegungsdaten_dates we want to count
     *   }
     * })
    **/
    count<T extends wes_bewegungsdaten_dateCountArgs>(
      args?: Subset<T, wes_bewegungsdaten_dateCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_bewegungsdaten_dateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_bewegungsdaten_date.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_bewegungsdaten_dateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_bewegungsdaten_dateAggregateArgs>(args: Subset<T, Wes_bewegungsdaten_dateAggregateArgs>): PrismaPromise<GetWes_bewegungsdaten_dateAggregateType<T>>

    /**
     * Group by Wes_bewegungsdaten_date.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_bewegungsdaten_dateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_bewegungsdaten_dateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_bewegungsdaten_dateGroupByArgs['orderBy'] }
        : { orderBy?: Wes_bewegungsdaten_dateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_bewegungsdaten_dateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_bewegungsdaten_dateGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_bewegungsdaten_date.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_bewegungsdaten_dateClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_bewegungsdaten_date base type for findUnique actions
   */
  export type wes_bewegungsdaten_dateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date
     * 
    **/
    select?: wes_bewegungsdaten_dateSelect | null
    /**
     * Filter, which wes_bewegungsdaten_date to fetch.
     * 
    **/
    where: wes_bewegungsdaten_dateWhereUniqueInput
  }

  /**
   * wes_bewegungsdaten_date: findUnique
   */
  export interface wes_bewegungsdaten_dateFindUniqueArgs extends wes_bewegungsdaten_dateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_bewegungsdaten_date base type for findFirst actions
   */
  export type wes_bewegungsdaten_dateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date
     * 
    **/
    select?: wes_bewegungsdaten_dateSelect | null
    /**
     * Filter, which wes_bewegungsdaten_date to fetch.
     * 
    **/
    where?: wes_bewegungsdaten_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_bewegungsdaten_dates to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_bewegungsdaten_dateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_bewegungsdaten_dates.
     * 
    **/
    cursor?: wes_bewegungsdaten_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_bewegungsdaten_dates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_bewegungsdaten_dates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_bewegungsdaten_dates.
     * 
    **/
    distinct?: Enumerable<Wes_bewegungsdaten_dateScalarFieldEnum>
  }

  /**
   * wes_bewegungsdaten_date: findFirst
   */
  export interface wes_bewegungsdaten_dateFindFirstArgs extends wes_bewegungsdaten_dateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_bewegungsdaten_date findMany
   */
  export type wes_bewegungsdaten_dateFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date
     * 
    **/
    select?: wes_bewegungsdaten_dateSelect | null
    /**
     * Filter, which wes_bewegungsdaten_dates to fetch.
     * 
    **/
    where?: wes_bewegungsdaten_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_bewegungsdaten_dates to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_bewegungsdaten_dateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_bewegungsdaten_dates.
     * 
    **/
    cursor?: wes_bewegungsdaten_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_bewegungsdaten_dates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_bewegungsdaten_dates.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_bewegungsdaten_dateScalarFieldEnum>
  }


  /**
   * wes_bewegungsdaten_date create
   */
  export type wes_bewegungsdaten_dateCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date
     * 
    **/
    select?: wes_bewegungsdaten_dateSelect | null
    /**
     * The data needed to create a wes_bewegungsdaten_date.
     * 
    **/
    data: XOR<wes_bewegungsdaten_dateCreateInput, wes_bewegungsdaten_dateUncheckedCreateInput>
  }


  /**
   * wes_bewegungsdaten_date createMany
   */
  export type wes_bewegungsdaten_dateCreateManyArgs = {
    /**
     * The data used to create many wes_bewegungsdaten_dates.
     * 
    **/
    data: Enumerable<wes_bewegungsdaten_dateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_bewegungsdaten_date update
   */
  export type wes_bewegungsdaten_dateUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date
     * 
    **/
    select?: wes_bewegungsdaten_dateSelect | null
    /**
     * The data needed to update a wes_bewegungsdaten_date.
     * 
    **/
    data: XOR<wes_bewegungsdaten_dateUpdateInput, wes_bewegungsdaten_dateUncheckedUpdateInput>
    /**
     * Choose, which wes_bewegungsdaten_date to update.
     * 
    **/
    where: wes_bewegungsdaten_dateWhereUniqueInput
  }


  /**
   * wes_bewegungsdaten_date updateMany
   */
  export type wes_bewegungsdaten_dateUpdateManyArgs = {
    /**
     * The data used to update wes_bewegungsdaten_dates.
     * 
    **/
    data: XOR<wes_bewegungsdaten_dateUpdateManyMutationInput, wes_bewegungsdaten_dateUncheckedUpdateManyInput>
    /**
     * Filter which wes_bewegungsdaten_dates to update
     * 
    **/
    where?: wes_bewegungsdaten_dateWhereInput
  }


  /**
   * wes_bewegungsdaten_date upsert
   */
  export type wes_bewegungsdaten_dateUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date
     * 
    **/
    select?: wes_bewegungsdaten_dateSelect | null
    /**
     * The filter to search for the wes_bewegungsdaten_date to update in case it exists.
     * 
    **/
    where: wes_bewegungsdaten_dateWhereUniqueInput
    /**
     * In case the wes_bewegungsdaten_date found by the `where` argument doesn't exist, create a new wes_bewegungsdaten_date with this data.
     * 
    **/
    create: XOR<wes_bewegungsdaten_dateCreateInput, wes_bewegungsdaten_dateUncheckedCreateInput>
    /**
     * In case the wes_bewegungsdaten_date was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_bewegungsdaten_dateUpdateInput, wes_bewegungsdaten_dateUncheckedUpdateInput>
  }


  /**
   * wes_bewegungsdaten_date delete
   */
  export type wes_bewegungsdaten_dateDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date
     * 
    **/
    select?: wes_bewegungsdaten_dateSelect | null
    /**
     * Filter which wes_bewegungsdaten_date to delete.
     * 
    **/
    where: wes_bewegungsdaten_dateWhereUniqueInput
  }


  /**
   * wes_bewegungsdaten_date deleteMany
   */
  export type wes_bewegungsdaten_dateDeleteManyArgs = {
    /**
     * Filter which wes_bewegungsdaten_dates to delete
     * 
    **/
    where?: wes_bewegungsdaten_dateWhereInput
  }


  /**
   * wes_bewegungsdaten_date: findUniqueOrThrow
   */
  export type wes_bewegungsdaten_dateFindUniqueOrThrowArgs = wes_bewegungsdaten_dateFindUniqueArgsBase
      

  /**
   * wes_bewegungsdaten_date: findFirstOrThrow
   */
  export type wes_bewegungsdaten_dateFindFirstOrThrowArgs = wes_bewegungsdaten_dateFindFirstArgsBase
      

  /**
   * wes_bewegungsdaten_date without action
   */
  export type wes_bewegungsdaten_dateArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date
     * 
    **/
    select?: wes_bewegungsdaten_dateSelect | null
  }



  /**
   * Model wes_bewegungsdaten_date_audit
   */


  export type AggregateWes_bewegungsdaten_date_audit = {
    _count: Wes_bewegungsdaten_date_auditCountAggregateOutputType | null
    _avg: Wes_bewegungsdaten_date_auditAvgAggregateOutputType | null
    _sum: Wes_bewegungsdaten_date_auditSumAggregateOutputType | null
    _min: Wes_bewegungsdaten_date_auditMinAggregateOutputType | null
    _max: Wes_bewegungsdaten_date_auditMaxAggregateOutputType | null
  }

  export type Wes_bewegungsdaten_date_auditAvgAggregateOutputType = {
    id: number | null
    user: number | null
    date: number | null
  }

  export type Wes_bewegungsdaten_date_auditSumAggregateOutputType = {
    id: number | null
    user: number | null
    date: number | null
  }

  export type Wes_bewegungsdaten_date_auditMinAggregateOutputType = {
    id: number | null
    text: string | null
    reg_date: Date | null
    user: number | null
    date: number | null
  }

  export type Wes_bewegungsdaten_date_auditMaxAggregateOutputType = {
    id: number | null
    text: string | null
    reg_date: Date | null
    user: number | null
    date: number | null
  }

  export type Wes_bewegungsdaten_date_auditCountAggregateOutputType = {
    id: number
    text: number
    reg_date: number
    user: number
    date: number
    _all: number
  }


  export type Wes_bewegungsdaten_date_auditAvgAggregateInputType = {
    id?: true
    user?: true
    date?: true
  }

  export type Wes_bewegungsdaten_date_auditSumAggregateInputType = {
    id?: true
    user?: true
    date?: true
  }

  export type Wes_bewegungsdaten_date_auditMinAggregateInputType = {
    id?: true
    text?: true
    reg_date?: true
    user?: true
    date?: true
  }

  export type Wes_bewegungsdaten_date_auditMaxAggregateInputType = {
    id?: true
    text?: true
    reg_date?: true
    user?: true
    date?: true
  }

  export type Wes_bewegungsdaten_date_auditCountAggregateInputType = {
    id?: true
    text?: true
    reg_date?: true
    user?: true
    date?: true
    _all?: true
  }

  export type Wes_bewegungsdaten_date_auditAggregateArgs = {
    /**
     * Filter which wes_bewegungsdaten_date_audit to aggregate.
     * 
    **/
    where?: wes_bewegungsdaten_date_auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_bewegungsdaten_date_audits to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_bewegungsdaten_date_auditOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_bewegungsdaten_date_auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_bewegungsdaten_date_audits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_bewegungsdaten_date_audits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_bewegungsdaten_date_audits
    **/
    _count?: true | Wes_bewegungsdaten_date_auditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_bewegungsdaten_date_auditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_bewegungsdaten_date_auditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_bewegungsdaten_date_auditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_bewegungsdaten_date_auditMaxAggregateInputType
  }

  export type GetWes_bewegungsdaten_date_auditAggregateType<T extends Wes_bewegungsdaten_date_auditAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_bewegungsdaten_date_audit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_bewegungsdaten_date_audit[P]>
      : GetScalarType<T[P], AggregateWes_bewegungsdaten_date_audit[P]>
  }




  export type Wes_bewegungsdaten_date_auditGroupByArgs = {
    where?: wes_bewegungsdaten_date_auditWhereInput
    orderBy?: Enumerable<wes_bewegungsdaten_date_auditOrderByWithAggregationInput>
    by: Array<Wes_bewegungsdaten_date_auditScalarFieldEnum>
    having?: wes_bewegungsdaten_date_auditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_bewegungsdaten_date_auditCountAggregateInputType | true
    _avg?: Wes_bewegungsdaten_date_auditAvgAggregateInputType
    _sum?: Wes_bewegungsdaten_date_auditSumAggregateInputType
    _min?: Wes_bewegungsdaten_date_auditMinAggregateInputType
    _max?: Wes_bewegungsdaten_date_auditMaxAggregateInputType
  }


  export type Wes_bewegungsdaten_date_auditGroupByOutputType = {
    id: number
    text: string
    reg_date: Date | null
    user: number | null
    date: number | null
    _count: Wes_bewegungsdaten_date_auditCountAggregateOutputType | null
    _avg: Wes_bewegungsdaten_date_auditAvgAggregateOutputType | null
    _sum: Wes_bewegungsdaten_date_auditSumAggregateOutputType | null
    _min: Wes_bewegungsdaten_date_auditMinAggregateOutputType | null
    _max: Wes_bewegungsdaten_date_auditMaxAggregateOutputType | null
  }

  type GetWes_bewegungsdaten_date_auditGroupByPayload<T extends Wes_bewegungsdaten_date_auditGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_bewegungsdaten_date_auditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_bewegungsdaten_date_auditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_bewegungsdaten_date_auditGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_bewegungsdaten_date_auditGroupByOutputType[P]>
        }
      >
    >


  export type wes_bewegungsdaten_date_auditSelect = {
    id?: boolean
    text?: boolean
    reg_date?: boolean
    user?: boolean
    date?: boolean
  }

  export type wes_bewegungsdaten_date_auditGetPayload<
    S extends boolean | null | undefined | wes_bewegungsdaten_date_auditArgs,
    U = keyof S
      > = S extends true
        ? wes_bewegungsdaten_date_audit
    : S extends undefined
    ? never
    : S extends wes_bewegungsdaten_date_auditArgs | wes_bewegungsdaten_date_auditFindManyArgs
    ?'include' extends U
    ? wes_bewegungsdaten_date_audit 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_bewegungsdaten_date_audit ? wes_bewegungsdaten_date_audit[P] : never
  } 
    : wes_bewegungsdaten_date_audit
  : wes_bewegungsdaten_date_audit


  type wes_bewegungsdaten_date_auditCountArgs = Merge<
    Omit<wes_bewegungsdaten_date_auditFindManyArgs, 'select' | 'include'> & {
      select?: Wes_bewegungsdaten_date_auditCountAggregateInputType | true
    }
  >

  export interface wes_bewegungsdaten_date_auditDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_bewegungsdaten_date_audit that matches the filter.
     * @param {wes_bewegungsdaten_date_auditFindUniqueArgs} args - Arguments to find a Wes_bewegungsdaten_date_audit
     * @example
     * // Get one Wes_bewegungsdaten_date_audit
     * const wes_bewegungsdaten_date_audit = await prisma.wes_bewegungsdaten_date_audit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_bewegungsdaten_date_auditFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_bewegungsdaten_date_auditFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_bewegungsdaten_date_audit'> extends True ? CheckSelect<T, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_audit>, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_auditGetPayload<T>>> : CheckSelect<T, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_audit | null, null>, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_auditGetPayload<T> | null, null>>

    /**
     * Find the first Wes_bewegungsdaten_date_audit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_date_auditFindFirstArgs} args - Arguments to find a Wes_bewegungsdaten_date_audit
     * @example
     * // Get one Wes_bewegungsdaten_date_audit
     * const wes_bewegungsdaten_date_audit = await prisma.wes_bewegungsdaten_date_audit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_bewegungsdaten_date_auditFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_bewegungsdaten_date_auditFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_bewegungsdaten_date_audit'> extends True ? CheckSelect<T, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_audit>, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_auditGetPayload<T>>> : CheckSelect<T, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_audit | null, null>, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_auditGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_bewegungsdaten_date_audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_date_auditFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_bewegungsdaten_date_audits
     * const wes_bewegungsdaten_date_audits = await prisma.wes_bewegungsdaten_date_audit.findMany()
     * 
     * // Get first 10 Wes_bewegungsdaten_date_audits
     * const wes_bewegungsdaten_date_audits = await prisma.wes_bewegungsdaten_date_audit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_bewegungsdaten_date_auditWithIdOnly = await prisma.wes_bewegungsdaten_date_audit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_bewegungsdaten_date_auditFindManyArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_date_auditFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_bewegungsdaten_date_audit>>, PrismaPromise<Array<wes_bewegungsdaten_date_auditGetPayload<T>>>>

    /**
     * Create a Wes_bewegungsdaten_date_audit.
     * @param {wes_bewegungsdaten_date_auditCreateArgs} args - Arguments to create a Wes_bewegungsdaten_date_audit.
     * @example
     * // Create one Wes_bewegungsdaten_date_audit
     * const Wes_bewegungsdaten_date_audit = await prisma.wes_bewegungsdaten_date_audit.create({
     *   data: {
     *     // ... data to create a Wes_bewegungsdaten_date_audit
     *   }
     * })
     * 
    **/
    create<T extends wes_bewegungsdaten_date_auditCreateArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_date_auditCreateArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_audit>, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_auditGetPayload<T>>>

    /**
     * Create many Wes_bewegungsdaten_date_audits.
     *     @param {wes_bewegungsdaten_date_auditCreateManyArgs} args - Arguments to create many Wes_bewegungsdaten_date_audits.
     *     @example
     *     // Create many Wes_bewegungsdaten_date_audits
     *     const wes_bewegungsdaten_date_audit = await prisma.wes_bewegungsdaten_date_audit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_bewegungsdaten_date_auditCreateManyArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_date_auditCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_bewegungsdaten_date_audit.
     * @param {wes_bewegungsdaten_date_auditDeleteArgs} args - Arguments to delete one Wes_bewegungsdaten_date_audit.
     * @example
     * // Delete one Wes_bewegungsdaten_date_audit
     * const Wes_bewegungsdaten_date_audit = await prisma.wes_bewegungsdaten_date_audit.delete({
     *   where: {
     *     // ... filter to delete one Wes_bewegungsdaten_date_audit
     *   }
     * })
     * 
    **/
    delete<T extends wes_bewegungsdaten_date_auditDeleteArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_date_auditDeleteArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_audit>, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_auditGetPayload<T>>>

    /**
     * Update one Wes_bewegungsdaten_date_audit.
     * @param {wes_bewegungsdaten_date_auditUpdateArgs} args - Arguments to update one Wes_bewegungsdaten_date_audit.
     * @example
     * // Update one Wes_bewegungsdaten_date_audit
     * const wes_bewegungsdaten_date_audit = await prisma.wes_bewegungsdaten_date_audit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_bewegungsdaten_date_auditUpdateArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_date_auditUpdateArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_audit>, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_auditGetPayload<T>>>

    /**
     * Delete zero or more Wes_bewegungsdaten_date_audits.
     * @param {wes_bewegungsdaten_date_auditDeleteManyArgs} args - Arguments to filter Wes_bewegungsdaten_date_audits to delete.
     * @example
     * // Delete a few Wes_bewegungsdaten_date_audits
     * const { count } = await prisma.wes_bewegungsdaten_date_audit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_bewegungsdaten_date_auditDeleteManyArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_date_auditDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_bewegungsdaten_date_audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_date_auditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_bewegungsdaten_date_audits
     * const wes_bewegungsdaten_date_audit = await prisma.wes_bewegungsdaten_date_audit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_bewegungsdaten_date_auditUpdateManyArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_date_auditUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_bewegungsdaten_date_audit.
     * @param {wes_bewegungsdaten_date_auditUpsertArgs} args - Arguments to update or create a Wes_bewegungsdaten_date_audit.
     * @example
     * // Update or create a Wes_bewegungsdaten_date_audit
     * const wes_bewegungsdaten_date_audit = await prisma.wes_bewegungsdaten_date_audit.upsert({
     *   create: {
     *     // ... data to create a Wes_bewegungsdaten_date_audit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_bewegungsdaten_date_audit we want to update
     *   }
     * })
    **/
    upsert<T extends wes_bewegungsdaten_date_auditUpsertArgs>(
      args: SelectSubset<T, wes_bewegungsdaten_date_auditUpsertArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_audit>, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_auditGetPayload<T>>>

    /**
     * Find one Wes_bewegungsdaten_date_audit that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_bewegungsdaten_date_auditFindUniqueOrThrowArgs} args - Arguments to find a Wes_bewegungsdaten_date_audit
     * @example
     * // Get one Wes_bewegungsdaten_date_audit
     * const wes_bewegungsdaten_date_audit = await prisma.wes_bewegungsdaten_date_audit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_bewegungsdaten_date_auditFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_date_auditFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_audit>, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_auditGetPayload<T>>>

    /**
     * Find the first Wes_bewegungsdaten_date_audit that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_date_auditFindFirstOrThrowArgs} args - Arguments to find a Wes_bewegungsdaten_date_audit
     * @example
     * // Get one Wes_bewegungsdaten_date_audit
     * const wes_bewegungsdaten_date_audit = await prisma.wes_bewegungsdaten_date_audit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_bewegungsdaten_date_auditFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_bewegungsdaten_date_auditFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_audit>, Prisma__wes_bewegungsdaten_date_auditClient<wes_bewegungsdaten_date_auditGetPayload<T>>>

    /**
     * Count the number of Wes_bewegungsdaten_date_audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_bewegungsdaten_date_auditCountArgs} args - Arguments to filter Wes_bewegungsdaten_date_audits to count.
     * @example
     * // Count the number of Wes_bewegungsdaten_date_audits
     * const count = await prisma.wes_bewegungsdaten_date_audit.count({
     *   where: {
     *     // ... the filter for the Wes_bewegungsdaten_date_audits we want to count
     *   }
     * })
    **/
    count<T extends wes_bewegungsdaten_date_auditCountArgs>(
      args?: Subset<T, wes_bewegungsdaten_date_auditCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_bewegungsdaten_date_auditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_bewegungsdaten_date_audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_bewegungsdaten_date_auditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_bewegungsdaten_date_auditAggregateArgs>(args: Subset<T, Wes_bewegungsdaten_date_auditAggregateArgs>): PrismaPromise<GetWes_bewegungsdaten_date_auditAggregateType<T>>

    /**
     * Group by Wes_bewegungsdaten_date_audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_bewegungsdaten_date_auditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_bewegungsdaten_date_auditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_bewegungsdaten_date_auditGroupByArgs['orderBy'] }
        : { orderBy?: Wes_bewegungsdaten_date_auditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_bewegungsdaten_date_auditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_bewegungsdaten_date_auditGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_bewegungsdaten_date_audit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_bewegungsdaten_date_auditClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_bewegungsdaten_date_audit base type for findUnique actions
   */
  export type wes_bewegungsdaten_date_auditFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date_audit
     * 
    **/
    select?: wes_bewegungsdaten_date_auditSelect | null
    /**
     * Filter, which wes_bewegungsdaten_date_audit to fetch.
     * 
    **/
    where: wes_bewegungsdaten_date_auditWhereUniqueInput
  }

  /**
   * wes_bewegungsdaten_date_audit: findUnique
   */
  export interface wes_bewegungsdaten_date_auditFindUniqueArgs extends wes_bewegungsdaten_date_auditFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_bewegungsdaten_date_audit base type for findFirst actions
   */
  export type wes_bewegungsdaten_date_auditFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date_audit
     * 
    **/
    select?: wes_bewegungsdaten_date_auditSelect | null
    /**
     * Filter, which wes_bewegungsdaten_date_audit to fetch.
     * 
    **/
    where?: wes_bewegungsdaten_date_auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_bewegungsdaten_date_audits to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_bewegungsdaten_date_auditOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_bewegungsdaten_date_audits.
     * 
    **/
    cursor?: wes_bewegungsdaten_date_auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_bewegungsdaten_date_audits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_bewegungsdaten_date_audits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_bewegungsdaten_date_audits.
     * 
    **/
    distinct?: Enumerable<Wes_bewegungsdaten_date_auditScalarFieldEnum>
  }

  /**
   * wes_bewegungsdaten_date_audit: findFirst
   */
  export interface wes_bewegungsdaten_date_auditFindFirstArgs extends wes_bewegungsdaten_date_auditFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_bewegungsdaten_date_audit findMany
   */
  export type wes_bewegungsdaten_date_auditFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date_audit
     * 
    **/
    select?: wes_bewegungsdaten_date_auditSelect | null
    /**
     * Filter, which wes_bewegungsdaten_date_audits to fetch.
     * 
    **/
    where?: wes_bewegungsdaten_date_auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_bewegungsdaten_date_audits to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_bewegungsdaten_date_auditOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_bewegungsdaten_date_audits.
     * 
    **/
    cursor?: wes_bewegungsdaten_date_auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_bewegungsdaten_date_audits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_bewegungsdaten_date_audits.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_bewegungsdaten_date_auditScalarFieldEnum>
  }


  /**
   * wes_bewegungsdaten_date_audit create
   */
  export type wes_bewegungsdaten_date_auditCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date_audit
     * 
    **/
    select?: wes_bewegungsdaten_date_auditSelect | null
    /**
     * The data needed to create a wes_bewegungsdaten_date_audit.
     * 
    **/
    data: XOR<wes_bewegungsdaten_date_auditCreateInput, wes_bewegungsdaten_date_auditUncheckedCreateInput>
  }


  /**
   * wes_bewegungsdaten_date_audit createMany
   */
  export type wes_bewegungsdaten_date_auditCreateManyArgs = {
    /**
     * The data used to create many wes_bewegungsdaten_date_audits.
     * 
    **/
    data: Enumerable<wes_bewegungsdaten_date_auditCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_bewegungsdaten_date_audit update
   */
  export type wes_bewegungsdaten_date_auditUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date_audit
     * 
    **/
    select?: wes_bewegungsdaten_date_auditSelect | null
    /**
     * The data needed to update a wes_bewegungsdaten_date_audit.
     * 
    **/
    data: XOR<wes_bewegungsdaten_date_auditUpdateInput, wes_bewegungsdaten_date_auditUncheckedUpdateInput>
    /**
     * Choose, which wes_bewegungsdaten_date_audit to update.
     * 
    **/
    where: wes_bewegungsdaten_date_auditWhereUniqueInput
  }


  /**
   * wes_bewegungsdaten_date_audit updateMany
   */
  export type wes_bewegungsdaten_date_auditUpdateManyArgs = {
    /**
     * The data used to update wes_bewegungsdaten_date_audits.
     * 
    **/
    data: XOR<wes_bewegungsdaten_date_auditUpdateManyMutationInput, wes_bewegungsdaten_date_auditUncheckedUpdateManyInput>
    /**
     * Filter which wes_bewegungsdaten_date_audits to update
     * 
    **/
    where?: wes_bewegungsdaten_date_auditWhereInput
  }


  /**
   * wes_bewegungsdaten_date_audit upsert
   */
  export type wes_bewegungsdaten_date_auditUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date_audit
     * 
    **/
    select?: wes_bewegungsdaten_date_auditSelect | null
    /**
     * The filter to search for the wes_bewegungsdaten_date_audit to update in case it exists.
     * 
    **/
    where: wes_bewegungsdaten_date_auditWhereUniqueInput
    /**
     * In case the wes_bewegungsdaten_date_audit found by the `where` argument doesn't exist, create a new wes_bewegungsdaten_date_audit with this data.
     * 
    **/
    create: XOR<wes_bewegungsdaten_date_auditCreateInput, wes_bewegungsdaten_date_auditUncheckedCreateInput>
    /**
     * In case the wes_bewegungsdaten_date_audit was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_bewegungsdaten_date_auditUpdateInput, wes_bewegungsdaten_date_auditUncheckedUpdateInput>
  }


  /**
   * wes_bewegungsdaten_date_audit delete
   */
  export type wes_bewegungsdaten_date_auditDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date_audit
     * 
    **/
    select?: wes_bewegungsdaten_date_auditSelect | null
    /**
     * Filter which wes_bewegungsdaten_date_audit to delete.
     * 
    **/
    where: wes_bewegungsdaten_date_auditWhereUniqueInput
  }


  /**
   * wes_bewegungsdaten_date_audit deleteMany
   */
  export type wes_bewegungsdaten_date_auditDeleteManyArgs = {
    /**
     * Filter which wes_bewegungsdaten_date_audits to delete
     * 
    **/
    where?: wes_bewegungsdaten_date_auditWhereInput
  }


  /**
   * wes_bewegungsdaten_date_audit: findUniqueOrThrow
   */
  export type wes_bewegungsdaten_date_auditFindUniqueOrThrowArgs = wes_bewegungsdaten_date_auditFindUniqueArgsBase
      

  /**
   * wes_bewegungsdaten_date_audit: findFirstOrThrow
   */
  export type wes_bewegungsdaten_date_auditFindFirstOrThrowArgs = wes_bewegungsdaten_date_auditFindFirstArgsBase
      

  /**
   * wes_bewegungsdaten_date_audit without action
   */
  export type wes_bewegungsdaten_date_auditArgs = {
    /**
     * Select specific fields to fetch from the wes_bewegungsdaten_date_audit
     * 
    **/
    select?: wes_bewegungsdaten_date_auditSelect | null
  }



  /**
   * Model wes_cat
   */


  export type AggregateWes_cat = {
    _count: Wes_catCountAggregateOutputType | null
    _avg: Wes_catAvgAggregateOutputType | null
    _sum: Wes_catSumAggregateOutputType | null
    _min: Wes_catMinAggregateOutputType | null
    _max: Wes_catMaxAggregateOutputType | null
  }

  export type Wes_catAvgAggregateOutputType = {
    id: number | null
    type_id: number | null
  }

  export type Wes_catSumAggregateOutputType = {
    id: number | null
    type_id: number | null
  }

  export type Wes_catMinAggregateOutputType = {
    id: number | null
    catname: string | null
    type_id: number | null
    sort: string | null
  }

  export type Wes_catMaxAggregateOutputType = {
    id: number | null
    catname: string | null
    type_id: number | null
    sort: string | null
  }

  export type Wes_catCountAggregateOutputType = {
    id: number
    catname: number
    type_id: number
    sort: number
    _all: number
  }


  export type Wes_catAvgAggregateInputType = {
    id?: true
    type_id?: true
  }

  export type Wes_catSumAggregateInputType = {
    id?: true
    type_id?: true
  }

  export type Wes_catMinAggregateInputType = {
    id?: true
    catname?: true
    type_id?: true
    sort?: true
  }

  export type Wes_catMaxAggregateInputType = {
    id?: true
    catname?: true
    type_id?: true
    sort?: true
  }

  export type Wes_catCountAggregateInputType = {
    id?: true
    catname?: true
    type_id?: true
    sort?: true
    _all?: true
  }

  export type Wes_catAggregateArgs = {
    /**
     * Filter which wes_cat to aggregate.
     * 
    **/
    where?: wes_catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_cats to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_cats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_cats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_cats
    **/
    _count?: true | Wes_catCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_catAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_catSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_catMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_catMaxAggregateInputType
  }

  export type GetWes_catAggregateType<T extends Wes_catAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_cat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_cat[P]>
      : GetScalarType<T[P], AggregateWes_cat[P]>
  }




  export type Wes_catGroupByArgs = {
    where?: wes_catWhereInput
    orderBy?: Enumerable<wes_catOrderByWithAggregationInput>
    by: Array<Wes_catScalarFieldEnum>
    having?: wes_catScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_catCountAggregateInputType | true
    _avg?: Wes_catAvgAggregateInputType
    _sum?: Wes_catSumAggregateInputType
    _min?: Wes_catMinAggregateInputType
    _max?: Wes_catMaxAggregateInputType
  }


  export type Wes_catGroupByOutputType = {
    id: number
    catname: string | null
    type_id: number | null
    sort: string | null
    _count: Wes_catCountAggregateOutputType | null
    _avg: Wes_catAvgAggregateOutputType | null
    _sum: Wes_catSumAggregateOutputType | null
    _min: Wes_catMinAggregateOutputType | null
    _max: Wes_catMaxAggregateOutputType | null
  }

  type GetWes_catGroupByPayload<T extends Wes_catGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_catGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_catGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_catGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_catGroupByOutputType[P]>
        }
      >
    >


  export type wes_catSelect = {
    id?: boolean
    catname?: boolean
    type_id?: boolean
    sort?: boolean
  }

  export type wes_catGetPayload<
    S extends boolean | null | undefined | wes_catArgs,
    U = keyof S
      > = S extends true
        ? wes_cat
    : S extends undefined
    ? never
    : S extends wes_catArgs | wes_catFindManyArgs
    ?'include' extends U
    ? wes_cat 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_cat ? wes_cat[P] : never
  } 
    : wes_cat
  : wes_cat


  type wes_catCountArgs = Merge<
    Omit<wes_catFindManyArgs, 'select' | 'include'> & {
      select?: Wes_catCountAggregateInputType | true
    }
  >

  export interface wes_catDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_cat that matches the filter.
     * @param {wes_catFindUniqueArgs} args - Arguments to find a Wes_cat
     * @example
     * // Get one Wes_cat
     * const wes_cat = await prisma.wes_cat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_catFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_catFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_cat'> extends True ? CheckSelect<T, Prisma__wes_catClient<wes_cat>, Prisma__wes_catClient<wes_catGetPayload<T>>> : CheckSelect<T, Prisma__wes_catClient<wes_cat | null, null>, Prisma__wes_catClient<wes_catGetPayload<T> | null, null>>

    /**
     * Find the first Wes_cat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_catFindFirstArgs} args - Arguments to find a Wes_cat
     * @example
     * // Get one Wes_cat
     * const wes_cat = await prisma.wes_cat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_catFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_catFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_cat'> extends True ? CheckSelect<T, Prisma__wes_catClient<wes_cat>, Prisma__wes_catClient<wes_catGetPayload<T>>> : CheckSelect<T, Prisma__wes_catClient<wes_cat | null, null>, Prisma__wes_catClient<wes_catGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_cats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_catFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_cats
     * const wes_cats = await prisma.wes_cat.findMany()
     * 
     * // Get first 10 Wes_cats
     * const wes_cats = await prisma.wes_cat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_catWithIdOnly = await prisma.wes_cat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_catFindManyArgs>(
      args?: SelectSubset<T, wes_catFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_cat>>, PrismaPromise<Array<wes_catGetPayload<T>>>>

    /**
     * Create a Wes_cat.
     * @param {wes_catCreateArgs} args - Arguments to create a Wes_cat.
     * @example
     * // Create one Wes_cat
     * const Wes_cat = await prisma.wes_cat.create({
     *   data: {
     *     // ... data to create a Wes_cat
     *   }
     * })
     * 
    **/
    create<T extends wes_catCreateArgs>(
      args: SelectSubset<T, wes_catCreateArgs>
    ): CheckSelect<T, Prisma__wes_catClient<wes_cat>, Prisma__wes_catClient<wes_catGetPayload<T>>>

    /**
     * Create many Wes_cats.
     *     @param {wes_catCreateManyArgs} args - Arguments to create many Wes_cats.
     *     @example
     *     // Create many Wes_cats
     *     const wes_cat = await prisma.wes_cat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_catCreateManyArgs>(
      args?: SelectSubset<T, wes_catCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_cat.
     * @param {wes_catDeleteArgs} args - Arguments to delete one Wes_cat.
     * @example
     * // Delete one Wes_cat
     * const Wes_cat = await prisma.wes_cat.delete({
     *   where: {
     *     // ... filter to delete one Wes_cat
     *   }
     * })
     * 
    **/
    delete<T extends wes_catDeleteArgs>(
      args: SelectSubset<T, wes_catDeleteArgs>
    ): CheckSelect<T, Prisma__wes_catClient<wes_cat>, Prisma__wes_catClient<wes_catGetPayload<T>>>

    /**
     * Update one Wes_cat.
     * @param {wes_catUpdateArgs} args - Arguments to update one Wes_cat.
     * @example
     * // Update one Wes_cat
     * const wes_cat = await prisma.wes_cat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_catUpdateArgs>(
      args: SelectSubset<T, wes_catUpdateArgs>
    ): CheckSelect<T, Prisma__wes_catClient<wes_cat>, Prisma__wes_catClient<wes_catGetPayload<T>>>

    /**
     * Delete zero or more Wes_cats.
     * @param {wes_catDeleteManyArgs} args - Arguments to filter Wes_cats to delete.
     * @example
     * // Delete a few Wes_cats
     * const { count } = await prisma.wes_cat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_catDeleteManyArgs>(
      args?: SelectSubset<T, wes_catDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_cats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_catUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_cats
     * const wes_cat = await prisma.wes_cat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_catUpdateManyArgs>(
      args: SelectSubset<T, wes_catUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_cat.
     * @param {wes_catUpsertArgs} args - Arguments to update or create a Wes_cat.
     * @example
     * // Update or create a Wes_cat
     * const wes_cat = await prisma.wes_cat.upsert({
     *   create: {
     *     // ... data to create a Wes_cat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_cat we want to update
     *   }
     * })
    **/
    upsert<T extends wes_catUpsertArgs>(
      args: SelectSubset<T, wes_catUpsertArgs>
    ): CheckSelect<T, Prisma__wes_catClient<wes_cat>, Prisma__wes_catClient<wes_catGetPayload<T>>>

    /**
     * Find one Wes_cat that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_catFindUniqueOrThrowArgs} args - Arguments to find a Wes_cat
     * @example
     * // Get one Wes_cat
     * const wes_cat = await prisma.wes_cat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_catFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_catFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_catClient<wes_cat>, Prisma__wes_catClient<wes_catGetPayload<T>>>

    /**
     * Find the first Wes_cat that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_catFindFirstOrThrowArgs} args - Arguments to find a Wes_cat
     * @example
     * // Get one Wes_cat
     * const wes_cat = await prisma.wes_cat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_catFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_catFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_catClient<wes_cat>, Prisma__wes_catClient<wes_catGetPayload<T>>>

    /**
     * Count the number of Wes_cats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_catCountArgs} args - Arguments to filter Wes_cats to count.
     * @example
     * // Count the number of Wes_cats
     * const count = await prisma.wes_cat.count({
     *   where: {
     *     // ... the filter for the Wes_cats we want to count
     *   }
     * })
    **/
    count<T extends wes_catCountArgs>(
      args?: Subset<T, wes_catCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_catCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_cat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_catAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_catAggregateArgs>(args: Subset<T, Wes_catAggregateArgs>): PrismaPromise<GetWes_catAggregateType<T>>

    /**
     * Group by Wes_cat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_catGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_catGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_catGroupByArgs['orderBy'] }
        : { orderBy?: Wes_catGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_catGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_catGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_cat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_catClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_cat base type for findUnique actions
   */
  export type wes_catFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_cat
     * 
    **/
    select?: wes_catSelect | null
    /**
     * Filter, which wes_cat to fetch.
     * 
    **/
    where: wes_catWhereUniqueInput
  }

  /**
   * wes_cat: findUnique
   */
  export interface wes_catFindUniqueArgs extends wes_catFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_cat base type for findFirst actions
   */
  export type wes_catFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_cat
     * 
    **/
    select?: wes_catSelect | null
    /**
     * Filter, which wes_cat to fetch.
     * 
    **/
    where?: wes_catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_cats to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_cats.
     * 
    **/
    cursor?: wes_catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_cats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_cats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_cats.
     * 
    **/
    distinct?: Enumerable<Wes_catScalarFieldEnum>
  }

  /**
   * wes_cat: findFirst
   */
  export interface wes_catFindFirstArgs extends wes_catFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_cat findMany
   */
  export type wes_catFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_cat
     * 
    **/
    select?: wes_catSelect | null
    /**
     * Filter, which wes_cats to fetch.
     * 
    **/
    where?: wes_catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_cats to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_cats.
     * 
    **/
    cursor?: wes_catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_cats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_cats.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_catScalarFieldEnum>
  }


  /**
   * wes_cat create
   */
  export type wes_catCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_cat
     * 
    **/
    select?: wes_catSelect | null
    /**
     * The data needed to create a wes_cat.
     * 
    **/
    data: XOR<wes_catCreateInput, wes_catUncheckedCreateInput>
  }


  /**
   * wes_cat createMany
   */
  export type wes_catCreateManyArgs = {
    /**
     * The data used to create many wes_cats.
     * 
    **/
    data: Enumerable<wes_catCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_cat update
   */
  export type wes_catUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_cat
     * 
    **/
    select?: wes_catSelect | null
    /**
     * The data needed to update a wes_cat.
     * 
    **/
    data: XOR<wes_catUpdateInput, wes_catUncheckedUpdateInput>
    /**
     * Choose, which wes_cat to update.
     * 
    **/
    where: wes_catWhereUniqueInput
  }


  /**
   * wes_cat updateMany
   */
  export type wes_catUpdateManyArgs = {
    /**
     * The data used to update wes_cats.
     * 
    **/
    data: XOR<wes_catUpdateManyMutationInput, wes_catUncheckedUpdateManyInput>
    /**
     * Filter which wes_cats to update
     * 
    **/
    where?: wes_catWhereInput
  }


  /**
   * wes_cat upsert
   */
  export type wes_catUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_cat
     * 
    **/
    select?: wes_catSelect | null
    /**
     * The filter to search for the wes_cat to update in case it exists.
     * 
    **/
    where: wes_catWhereUniqueInput
    /**
     * In case the wes_cat found by the `where` argument doesn't exist, create a new wes_cat with this data.
     * 
    **/
    create: XOR<wes_catCreateInput, wes_catUncheckedCreateInput>
    /**
     * In case the wes_cat was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_catUpdateInput, wes_catUncheckedUpdateInput>
  }


  /**
   * wes_cat delete
   */
  export type wes_catDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_cat
     * 
    **/
    select?: wes_catSelect | null
    /**
     * Filter which wes_cat to delete.
     * 
    **/
    where: wes_catWhereUniqueInput
  }


  /**
   * wes_cat deleteMany
   */
  export type wes_catDeleteManyArgs = {
    /**
     * Filter which wes_cats to delete
     * 
    **/
    where?: wes_catWhereInput
  }


  /**
   * wes_cat: findUniqueOrThrow
   */
  export type wes_catFindUniqueOrThrowArgs = wes_catFindUniqueArgsBase
      

  /**
   * wes_cat: findFirstOrThrow
   */
  export type wes_catFindFirstOrThrowArgs = wes_catFindFirstArgsBase
      

  /**
   * wes_cat without action
   */
  export type wes_catArgs = {
    /**
     * Select specific fields to fetch from the wes_cat
     * 
    **/
    select?: wes_catSelect | null
  }



  /**
   * Model wes_dates_template
   */


  export type AggregateWes_dates_template = {
    _count: Wes_dates_templateCountAggregateOutputType | null
    _avg: Wes_dates_templateAvgAggregateOutputType | null
    _sum: Wes_dates_templateSumAggregateOutputType | null
    _min: Wes_dates_templateMinAggregateOutputType | null
    _max: Wes_dates_templateMaxAggregateOutputType | null
  }

  export type Wes_dates_templateAvgAggregateOutputType = {
    id: number | null
    date_type: number | null
    reminder: number | null
    reminderII: number | null
    wiedervorlage: number | null
  }

  export type Wes_dates_templateSumAggregateOutputType = {
    id: number | null
    date_type: number | null
    reminder: number | null
    reminderII: number | null
    wiedervorlage: number | null
  }

  export type Wes_dates_templateMinAggregateOutputType = {
    id: number | null
    datename: string | null
    date_type: number | null
    reminder: number | null
    reminderII: number | null
    partner: string | null
    steps: string | null
    wiedervorlage: number | null
    status: string | null
    bemerkungen: string | null
  }

  export type Wes_dates_templateMaxAggregateOutputType = {
    id: number | null
    datename: string | null
    date_type: number | null
    reminder: number | null
    reminderII: number | null
    partner: string | null
    steps: string | null
    wiedervorlage: number | null
    status: string | null
    bemerkungen: string | null
  }

  export type Wes_dates_templateCountAggregateOutputType = {
    id: number
    datename: number
    date_type: number
    reminder: number
    reminderII: number
    partner: number
    steps: number
    wiedervorlage: number
    status: number
    bemerkungen: number
    _all: number
  }


  export type Wes_dates_templateAvgAggregateInputType = {
    id?: true
    date_type?: true
    reminder?: true
    reminderII?: true
    wiedervorlage?: true
  }

  export type Wes_dates_templateSumAggregateInputType = {
    id?: true
    date_type?: true
    reminder?: true
    reminderII?: true
    wiedervorlage?: true
  }

  export type Wes_dates_templateMinAggregateInputType = {
    id?: true
    datename?: true
    date_type?: true
    reminder?: true
    reminderII?: true
    partner?: true
    steps?: true
    wiedervorlage?: true
    status?: true
    bemerkungen?: true
  }

  export type Wes_dates_templateMaxAggregateInputType = {
    id?: true
    datename?: true
    date_type?: true
    reminder?: true
    reminderII?: true
    partner?: true
    steps?: true
    wiedervorlage?: true
    status?: true
    bemerkungen?: true
  }

  export type Wes_dates_templateCountAggregateInputType = {
    id?: true
    datename?: true
    date_type?: true
    reminder?: true
    reminderII?: true
    partner?: true
    steps?: true
    wiedervorlage?: true
    status?: true
    bemerkungen?: true
    _all?: true
  }

  export type Wes_dates_templateAggregateArgs = {
    /**
     * Filter which wes_dates_template to aggregate.
     * 
    **/
    where?: wes_dates_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_dates_templates to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_dates_templateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_dates_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_dates_templates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_dates_templates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_dates_templates
    **/
    _count?: true | Wes_dates_templateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_dates_templateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_dates_templateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_dates_templateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_dates_templateMaxAggregateInputType
  }

  export type GetWes_dates_templateAggregateType<T extends Wes_dates_templateAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_dates_template]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_dates_template[P]>
      : GetScalarType<T[P], AggregateWes_dates_template[P]>
  }




  export type Wes_dates_templateGroupByArgs = {
    where?: wes_dates_templateWhereInput
    orderBy?: Enumerable<wes_dates_templateOrderByWithAggregationInput>
    by: Array<Wes_dates_templateScalarFieldEnum>
    having?: wes_dates_templateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_dates_templateCountAggregateInputType | true
    _avg?: Wes_dates_templateAvgAggregateInputType
    _sum?: Wes_dates_templateSumAggregateInputType
    _min?: Wes_dates_templateMinAggregateInputType
    _max?: Wes_dates_templateMaxAggregateInputType
  }


  export type Wes_dates_templateGroupByOutputType = {
    id: number
    datename: string | null
    date_type: number
    reminder: number
    reminderII: number
    partner: string | null
    steps: string | null
    wiedervorlage: number
    status: string | null
    bemerkungen: string | null
    _count: Wes_dates_templateCountAggregateOutputType | null
    _avg: Wes_dates_templateAvgAggregateOutputType | null
    _sum: Wes_dates_templateSumAggregateOutputType | null
    _min: Wes_dates_templateMinAggregateOutputType | null
    _max: Wes_dates_templateMaxAggregateOutputType | null
  }

  type GetWes_dates_templateGroupByPayload<T extends Wes_dates_templateGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_dates_templateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_dates_templateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_dates_templateGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_dates_templateGroupByOutputType[P]>
        }
      >
    >


  export type wes_dates_templateSelect = {
    id?: boolean
    datename?: boolean
    date_type?: boolean
    reminder?: boolean
    reminderII?: boolean
    partner?: boolean
    steps?: boolean
    wiedervorlage?: boolean
    status?: boolean
    bemerkungen?: boolean
  }

  export type wes_dates_templateGetPayload<
    S extends boolean | null | undefined | wes_dates_templateArgs,
    U = keyof S
      > = S extends true
        ? wes_dates_template
    : S extends undefined
    ? never
    : S extends wes_dates_templateArgs | wes_dates_templateFindManyArgs
    ?'include' extends U
    ? wes_dates_template 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_dates_template ? wes_dates_template[P] : never
  } 
    : wes_dates_template
  : wes_dates_template


  type wes_dates_templateCountArgs = Merge<
    Omit<wes_dates_templateFindManyArgs, 'select' | 'include'> & {
      select?: Wes_dates_templateCountAggregateInputType | true
    }
  >

  export interface wes_dates_templateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_dates_template that matches the filter.
     * @param {wes_dates_templateFindUniqueArgs} args - Arguments to find a Wes_dates_template
     * @example
     * // Get one Wes_dates_template
     * const wes_dates_template = await prisma.wes_dates_template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_dates_templateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_dates_templateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_dates_template'> extends True ? CheckSelect<T, Prisma__wes_dates_templateClient<wes_dates_template>, Prisma__wes_dates_templateClient<wes_dates_templateGetPayload<T>>> : CheckSelect<T, Prisma__wes_dates_templateClient<wes_dates_template | null, null>, Prisma__wes_dates_templateClient<wes_dates_templateGetPayload<T> | null, null>>

    /**
     * Find the first Wes_dates_template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_dates_templateFindFirstArgs} args - Arguments to find a Wes_dates_template
     * @example
     * // Get one Wes_dates_template
     * const wes_dates_template = await prisma.wes_dates_template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_dates_templateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_dates_templateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_dates_template'> extends True ? CheckSelect<T, Prisma__wes_dates_templateClient<wes_dates_template>, Prisma__wes_dates_templateClient<wes_dates_templateGetPayload<T>>> : CheckSelect<T, Prisma__wes_dates_templateClient<wes_dates_template | null, null>, Prisma__wes_dates_templateClient<wes_dates_templateGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_dates_templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_dates_templateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_dates_templates
     * const wes_dates_templates = await prisma.wes_dates_template.findMany()
     * 
     * // Get first 10 Wes_dates_templates
     * const wes_dates_templates = await prisma.wes_dates_template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_dates_templateWithIdOnly = await prisma.wes_dates_template.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_dates_templateFindManyArgs>(
      args?: SelectSubset<T, wes_dates_templateFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_dates_template>>, PrismaPromise<Array<wes_dates_templateGetPayload<T>>>>

    /**
     * Create a Wes_dates_template.
     * @param {wes_dates_templateCreateArgs} args - Arguments to create a Wes_dates_template.
     * @example
     * // Create one Wes_dates_template
     * const Wes_dates_template = await prisma.wes_dates_template.create({
     *   data: {
     *     // ... data to create a Wes_dates_template
     *   }
     * })
     * 
    **/
    create<T extends wes_dates_templateCreateArgs>(
      args: SelectSubset<T, wes_dates_templateCreateArgs>
    ): CheckSelect<T, Prisma__wes_dates_templateClient<wes_dates_template>, Prisma__wes_dates_templateClient<wes_dates_templateGetPayload<T>>>

    /**
     * Create many Wes_dates_templates.
     *     @param {wes_dates_templateCreateManyArgs} args - Arguments to create many Wes_dates_templates.
     *     @example
     *     // Create many Wes_dates_templates
     *     const wes_dates_template = await prisma.wes_dates_template.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_dates_templateCreateManyArgs>(
      args?: SelectSubset<T, wes_dates_templateCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_dates_template.
     * @param {wes_dates_templateDeleteArgs} args - Arguments to delete one Wes_dates_template.
     * @example
     * // Delete one Wes_dates_template
     * const Wes_dates_template = await prisma.wes_dates_template.delete({
     *   where: {
     *     // ... filter to delete one Wes_dates_template
     *   }
     * })
     * 
    **/
    delete<T extends wes_dates_templateDeleteArgs>(
      args: SelectSubset<T, wes_dates_templateDeleteArgs>
    ): CheckSelect<T, Prisma__wes_dates_templateClient<wes_dates_template>, Prisma__wes_dates_templateClient<wes_dates_templateGetPayload<T>>>

    /**
     * Update one Wes_dates_template.
     * @param {wes_dates_templateUpdateArgs} args - Arguments to update one Wes_dates_template.
     * @example
     * // Update one Wes_dates_template
     * const wes_dates_template = await prisma.wes_dates_template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_dates_templateUpdateArgs>(
      args: SelectSubset<T, wes_dates_templateUpdateArgs>
    ): CheckSelect<T, Prisma__wes_dates_templateClient<wes_dates_template>, Prisma__wes_dates_templateClient<wes_dates_templateGetPayload<T>>>

    /**
     * Delete zero or more Wes_dates_templates.
     * @param {wes_dates_templateDeleteManyArgs} args - Arguments to filter Wes_dates_templates to delete.
     * @example
     * // Delete a few Wes_dates_templates
     * const { count } = await prisma.wes_dates_template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_dates_templateDeleteManyArgs>(
      args?: SelectSubset<T, wes_dates_templateDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_dates_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_dates_templateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_dates_templates
     * const wes_dates_template = await prisma.wes_dates_template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_dates_templateUpdateManyArgs>(
      args: SelectSubset<T, wes_dates_templateUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_dates_template.
     * @param {wes_dates_templateUpsertArgs} args - Arguments to update or create a Wes_dates_template.
     * @example
     * // Update or create a Wes_dates_template
     * const wes_dates_template = await prisma.wes_dates_template.upsert({
     *   create: {
     *     // ... data to create a Wes_dates_template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_dates_template we want to update
     *   }
     * })
    **/
    upsert<T extends wes_dates_templateUpsertArgs>(
      args: SelectSubset<T, wes_dates_templateUpsertArgs>
    ): CheckSelect<T, Prisma__wes_dates_templateClient<wes_dates_template>, Prisma__wes_dates_templateClient<wes_dates_templateGetPayload<T>>>

    /**
     * Find one Wes_dates_template that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_dates_templateFindUniqueOrThrowArgs} args - Arguments to find a Wes_dates_template
     * @example
     * // Get one Wes_dates_template
     * const wes_dates_template = await prisma.wes_dates_template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_dates_templateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_dates_templateFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_dates_templateClient<wes_dates_template>, Prisma__wes_dates_templateClient<wes_dates_templateGetPayload<T>>>

    /**
     * Find the first Wes_dates_template that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_dates_templateFindFirstOrThrowArgs} args - Arguments to find a Wes_dates_template
     * @example
     * // Get one Wes_dates_template
     * const wes_dates_template = await prisma.wes_dates_template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_dates_templateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_dates_templateFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_dates_templateClient<wes_dates_template>, Prisma__wes_dates_templateClient<wes_dates_templateGetPayload<T>>>

    /**
     * Count the number of Wes_dates_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_dates_templateCountArgs} args - Arguments to filter Wes_dates_templates to count.
     * @example
     * // Count the number of Wes_dates_templates
     * const count = await prisma.wes_dates_template.count({
     *   where: {
     *     // ... the filter for the Wes_dates_templates we want to count
     *   }
     * })
    **/
    count<T extends wes_dates_templateCountArgs>(
      args?: Subset<T, wes_dates_templateCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_dates_templateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_dates_template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_dates_templateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_dates_templateAggregateArgs>(args: Subset<T, Wes_dates_templateAggregateArgs>): PrismaPromise<GetWes_dates_templateAggregateType<T>>

    /**
     * Group by Wes_dates_template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_dates_templateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_dates_templateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_dates_templateGroupByArgs['orderBy'] }
        : { orderBy?: Wes_dates_templateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_dates_templateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_dates_templateGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_dates_template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_dates_templateClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_dates_template base type for findUnique actions
   */
  export type wes_dates_templateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_dates_template
     * 
    **/
    select?: wes_dates_templateSelect | null
    /**
     * Filter, which wes_dates_template to fetch.
     * 
    **/
    where: wes_dates_templateWhereUniqueInput
  }

  /**
   * wes_dates_template: findUnique
   */
  export interface wes_dates_templateFindUniqueArgs extends wes_dates_templateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_dates_template base type for findFirst actions
   */
  export type wes_dates_templateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_dates_template
     * 
    **/
    select?: wes_dates_templateSelect | null
    /**
     * Filter, which wes_dates_template to fetch.
     * 
    **/
    where?: wes_dates_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_dates_templates to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_dates_templateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_dates_templates.
     * 
    **/
    cursor?: wes_dates_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_dates_templates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_dates_templates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_dates_templates.
     * 
    **/
    distinct?: Enumerable<Wes_dates_templateScalarFieldEnum>
  }

  /**
   * wes_dates_template: findFirst
   */
  export interface wes_dates_templateFindFirstArgs extends wes_dates_templateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_dates_template findMany
   */
  export type wes_dates_templateFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_dates_template
     * 
    **/
    select?: wes_dates_templateSelect | null
    /**
     * Filter, which wes_dates_templates to fetch.
     * 
    **/
    where?: wes_dates_templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_dates_templates to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_dates_templateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_dates_templates.
     * 
    **/
    cursor?: wes_dates_templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_dates_templates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_dates_templates.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_dates_templateScalarFieldEnum>
  }


  /**
   * wes_dates_template create
   */
  export type wes_dates_templateCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_dates_template
     * 
    **/
    select?: wes_dates_templateSelect | null
    /**
     * The data needed to create a wes_dates_template.
     * 
    **/
    data: XOR<wes_dates_templateCreateInput, wes_dates_templateUncheckedCreateInput>
  }


  /**
   * wes_dates_template createMany
   */
  export type wes_dates_templateCreateManyArgs = {
    /**
     * The data used to create many wes_dates_templates.
     * 
    **/
    data: Enumerable<wes_dates_templateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_dates_template update
   */
  export type wes_dates_templateUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_dates_template
     * 
    **/
    select?: wes_dates_templateSelect | null
    /**
     * The data needed to update a wes_dates_template.
     * 
    **/
    data: XOR<wes_dates_templateUpdateInput, wes_dates_templateUncheckedUpdateInput>
    /**
     * Choose, which wes_dates_template to update.
     * 
    **/
    where: wes_dates_templateWhereUniqueInput
  }


  /**
   * wes_dates_template updateMany
   */
  export type wes_dates_templateUpdateManyArgs = {
    /**
     * The data used to update wes_dates_templates.
     * 
    **/
    data: XOR<wes_dates_templateUpdateManyMutationInput, wes_dates_templateUncheckedUpdateManyInput>
    /**
     * Filter which wes_dates_templates to update
     * 
    **/
    where?: wes_dates_templateWhereInput
  }


  /**
   * wes_dates_template upsert
   */
  export type wes_dates_templateUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_dates_template
     * 
    **/
    select?: wes_dates_templateSelect | null
    /**
     * The filter to search for the wes_dates_template to update in case it exists.
     * 
    **/
    where: wes_dates_templateWhereUniqueInput
    /**
     * In case the wes_dates_template found by the `where` argument doesn't exist, create a new wes_dates_template with this data.
     * 
    **/
    create: XOR<wes_dates_templateCreateInput, wes_dates_templateUncheckedCreateInput>
    /**
     * In case the wes_dates_template was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_dates_templateUpdateInput, wes_dates_templateUncheckedUpdateInput>
  }


  /**
   * wes_dates_template delete
   */
  export type wes_dates_templateDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_dates_template
     * 
    **/
    select?: wes_dates_templateSelect | null
    /**
     * Filter which wes_dates_template to delete.
     * 
    **/
    where: wes_dates_templateWhereUniqueInput
  }


  /**
   * wes_dates_template deleteMany
   */
  export type wes_dates_templateDeleteManyArgs = {
    /**
     * Filter which wes_dates_templates to delete
     * 
    **/
    where?: wes_dates_templateWhereInput
  }


  /**
   * wes_dates_template: findUniqueOrThrow
   */
  export type wes_dates_templateFindUniqueOrThrowArgs = wes_dates_templateFindUniqueArgsBase
      

  /**
   * wes_dates_template: findFirstOrThrow
   */
  export type wes_dates_templateFindFirstOrThrowArgs = wes_dates_templateFindFirstArgsBase
      

  /**
   * wes_dates_template without action
   */
  export type wes_dates_templateArgs = {
    /**
     * Select specific fields to fetch from the wes_dates_template
     * 
    **/
    select?: wes_dates_templateSelect | null
  }



  /**
   * Model wes_dv
   */


  export type AggregateWes_dv = {
    _count: Wes_dvCountAggregateOutputType | null
    _avg: Wes_dvAvgAggregateOutputType | null
    _sum: Wes_dvSumAggregateOutputType | null
    _min: Wes_dvMinAggregateOutputType | null
    _max: Wes_dvMaxAggregateOutputType | null
  }

  export type Wes_dvAvgAggregateOutputType = {
    id: number | null
  }

  export type Wes_dvSumAggregateOutputType = {
    id: number | null
  }

  export type Wes_dvMinAggregateOutputType = {
    id: number | null
    dv: string | null
  }

  export type Wes_dvMaxAggregateOutputType = {
    id: number | null
    dv: string | null
  }

  export type Wes_dvCountAggregateOutputType = {
    id: number
    dv: number
    _all: number
  }


  export type Wes_dvAvgAggregateInputType = {
    id?: true
  }

  export type Wes_dvSumAggregateInputType = {
    id?: true
  }

  export type Wes_dvMinAggregateInputType = {
    id?: true
    dv?: true
  }

  export type Wes_dvMaxAggregateInputType = {
    id?: true
    dv?: true
  }

  export type Wes_dvCountAggregateInputType = {
    id?: true
    dv?: true
    _all?: true
  }

  export type Wes_dvAggregateArgs = {
    /**
     * Filter which wes_dv to aggregate.
     * 
    **/
    where?: wes_dvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_dvs to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_dvOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_dvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_dvs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_dvs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_dvs
    **/
    _count?: true | Wes_dvCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_dvAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_dvSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_dvMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_dvMaxAggregateInputType
  }

  export type GetWes_dvAggregateType<T extends Wes_dvAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_dv]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_dv[P]>
      : GetScalarType<T[P], AggregateWes_dv[P]>
  }




  export type Wes_dvGroupByArgs = {
    where?: wes_dvWhereInput
    orderBy?: Enumerable<wes_dvOrderByWithAggregationInput>
    by: Array<Wes_dvScalarFieldEnum>
    having?: wes_dvScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_dvCountAggregateInputType | true
    _avg?: Wes_dvAvgAggregateInputType
    _sum?: Wes_dvSumAggregateInputType
    _min?: Wes_dvMinAggregateInputType
    _max?: Wes_dvMaxAggregateInputType
  }


  export type Wes_dvGroupByOutputType = {
    id: number
    dv: string
    _count: Wes_dvCountAggregateOutputType | null
    _avg: Wes_dvAvgAggregateOutputType | null
    _sum: Wes_dvSumAggregateOutputType | null
    _min: Wes_dvMinAggregateOutputType | null
    _max: Wes_dvMaxAggregateOutputType | null
  }

  type GetWes_dvGroupByPayload<T extends Wes_dvGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_dvGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_dvGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_dvGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_dvGroupByOutputType[P]>
        }
      >
    >


  export type wes_dvSelect = {
    id?: boolean
    dv?: boolean
  }

  export type wes_dvGetPayload<
    S extends boolean | null | undefined | wes_dvArgs,
    U = keyof S
      > = S extends true
        ? wes_dv
    : S extends undefined
    ? never
    : S extends wes_dvArgs | wes_dvFindManyArgs
    ?'include' extends U
    ? wes_dv 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_dv ? wes_dv[P] : never
  } 
    : wes_dv
  : wes_dv


  type wes_dvCountArgs = Merge<
    Omit<wes_dvFindManyArgs, 'select' | 'include'> & {
      select?: Wes_dvCountAggregateInputType | true
    }
  >

  export interface wes_dvDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_dv that matches the filter.
     * @param {wes_dvFindUniqueArgs} args - Arguments to find a Wes_dv
     * @example
     * // Get one Wes_dv
     * const wes_dv = await prisma.wes_dv.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_dvFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_dvFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_dv'> extends True ? CheckSelect<T, Prisma__wes_dvClient<wes_dv>, Prisma__wes_dvClient<wes_dvGetPayload<T>>> : CheckSelect<T, Prisma__wes_dvClient<wes_dv | null, null>, Prisma__wes_dvClient<wes_dvGetPayload<T> | null, null>>

    /**
     * Find the first Wes_dv that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_dvFindFirstArgs} args - Arguments to find a Wes_dv
     * @example
     * // Get one Wes_dv
     * const wes_dv = await prisma.wes_dv.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_dvFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_dvFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_dv'> extends True ? CheckSelect<T, Prisma__wes_dvClient<wes_dv>, Prisma__wes_dvClient<wes_dvGetPayload<T>>> : CheckSelect<T, Prisma__wes_dvClient<wes_dv | null, null>, Prisma__wes_dvClient<wes_dvGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_dvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_dvFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_dvs
     * const wes_dvs = await prisma.wes_dv.findMany()
     * 
     * // Get first 10 Wes_dvs
     * const wes_dvs = await prisma.wes_dv.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_dvWithIdOnly = await prisma.wes_dv.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_dvFindManyArgs>(
      args?: SelectSubset<T, wes_dvFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_dv>>, PrismaPromise<Array<wes_dvGetPayload<T>>>>

    /**
     * Create a Wes_dv.
     * @param {wes_dvCreateArgs} args - Arguments to create a Wes_dv.
     * @example
     * // Create one Wes_dv
     * const Wes_dv = await prisma.wes_dv.create({
     *   data: {
     *     // ... data to create a Wes_dv
     *   }
     * })
     * 
    **/
    create<T extends wes_dvCreateArgs>(
      args: SelectSubset<T, wes_dvCreateArgs>
    ): CheckSelect<T, Prisma__wes_dvClient<wes_dv>, Prisma__wes_dvClient<wes_dvGetPayload<T>>>

    /**
     * Create many Wes_dvs.
     *     @param {wes_dvCreateManyArgs} args - Arguments to create many Wes_dvs.
     *     @example
     *     // Create many Wes_dvs
     *     const wes_dv = await prisma.wes_dv.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_dvCreateManyArgs>(
      args?: SelectSubset<T, wes_dvCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_dv.
     * @param {wes_dvDeleteArgs} args - Arguments to delete one Wes_dv.
     * @example
     * // Delete one Wes_dv
     * const Wes_dv = await prisma.wes_dv.delete({
     *   where: {
     *     // ... filter to delete one Wes_dv
     *   }
     * })
     * 
    **/
    delete<T extends wes_dvDeleteArgs>(
      args: SelectSubset<T, wes_dvDeleteArgs>
    ): CheckSelect<T, Prisma__wes_dvClient<wes_dv>, Prisma__wes_dvClient<wes_dvGetPayload<T>>>

    /**
     * Update one Wes_dv.
     * @param {wes_dvUpdateArgs} args - Arguments to update one Wes_dv.
     * @example
     * // Update one Wes_dv
     * const wes_dv = await prisma.wes_dv.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_dvUpdateArgs>(
      args: SelectSubset<T, wes_dvUpdateArgs>
    ): CheckSelect<T, Prisma__wes_dvClient<wes_dv>, Prisma__wes_dvClient<wes_dvGetPayload<T>>>

    /**
     * Delete zero or more Wes_dvs.
     * @param {wes_dvDeleteManyArgs} args - Arguments to filter Wes_dvs to delete.
     * @example
     * // Delete a few Wes_dvs
     * const { count } = await prisma.wes_dv.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_dvDeleteManyArgs>(
      args?: SelectSubset<T, wes_dvDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_dvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_dvUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_dvs
     * const wes_dv = await prisma.wes_dv.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_dvUpdateManyArgs>(
      args: SelectSubset<T, wes_dvUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_dv.
     * @param {wes_dvUpsertArgs} args - Arguments to update or create a Wes_dv.
     * @example
     * // Update or create a Wes_dv
     * const wes_dv = await prisma.wes_dv.upsert({
     *   create: {
     *     // ... data to create a Wes_dv
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_dv we want to update
     *   }
     * })
    **/
    upsert<T extends wes_dvUpsertArgs>(
      args: SelectSubset<T, wes_dvUpsertArgs>
    ): CheckSelect<T, Prisma__wes_dvClient<wes_dv>, Prisma__wes_dvClient<wes_dvGetPayload<T>>>

    /**
     * Find one Wes_dv that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_dvFindUniqueOrThrowArgs} args - Arguments to find a Wes_dv
     * @example
     * // Get one Wes_dv
     * const wes_dv = await prisma.wes_dv.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_dvFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_dvFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_dvClient<wes_dv>, Prisma__wes_dvClient<wes_dvGetPayload<T>>>

    /**
     * Find the first Wes_dv that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_dvFindFirstOrThrowArgs} args - Arguments to find a Wes_dv
     * @example
     * // Get one Wes_dv
     * const wes_dv = await prisma.wes_dv.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_dvFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_dvFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_dvClient<wes_dv>, Prisma__wes_dvClient<wes_dvGetPayload<T>>>

    /**
     * Count the number of Wes_dvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_dvCountArgs} args - Arguments to filter Wes_dvs to count.
     * @example
     * // Count the number of Wes_dvs
     * const count = await prisma.wes_dv.count({
     *   where: {
     *     // ... the filter for the Wes_dvs we want to count
     *   }
     * })
    **/
    count<T extends wes_dvCountArgs>(
      args?: Subset<T, wes_dvCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_dvCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_dv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_dvAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_dvAggregateArgs>(args: Subset<T, Wes_dvAggregateArgs>): PrismaPromise<GetWes_dvAggregateType<T>>

    /**
     * Group by Wes_dv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_dvGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_dvGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_dvGroupByArgs['orderBy'] }
        : { orderBy?: Wes_dvGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_dvGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_dvGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_dv.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_dvClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_dv base type for findUnique actions
   */
  export type wes_dvFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_dv
     * 
    **/
    select?: wes_dvSelect | null
    /**
     * Filter, which wes_dv to fetch.
     * 
    **/
    where: wes_dvWhereUniqueInput
  }

  /**
   * wes_dv: findUnique
   */
  export interface wes_dvFindUniqueArgs extends wes_dvFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_dv base type for findFirst actions
   */
  export type wes_dvFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_dv
     * 
    **/
    select?: wes_dvSelect | null
    /**
     * Filter, which wes_dv to fetch.
     * 
    **/
    where?: wes_dvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_dvs to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_dvOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_dvs.
     * 
    **/
    cursor?: wes_dvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_dvs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_dvs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_dvs.
     * 
    **/
    distinct?: Enumerable<Wes_dvScalarFieldEnum>
  }

  /**
   * wes_dv: findFirst
   */
  export interface wes_dvFindFirstArgs extends wes_dvFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_dv findMany
   */
  export type wes_dvFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_dv
     * 
    **/
    select?: wes_dvSelect | null
    /**
     * Filter, which wes_dvs to fetch.
     * 
    **/
    where?: wes_dvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_dvs to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_dvOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_dvs.
     * 
    **/
    cursor?: wes_dvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_dvs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_dvs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_dvScalarFieldEnum>
  }


  /**
   * wes_dv create
   */
  export type wes_dvCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_dv
     * 
    **/
    select?: wes_dvSelect | null
    /**
     * The data needed to create a wes_dv.
     * 
    **/
    data: XOR<wes_dvCreateInput, wes_dvUncheckedCreateInput>
  }


  /**
   * wes_dv createMany
   */
  export type wes_dvCreateManyArgs = {
    /**
     * The data used to create many wes_dvs.
     * 
    **/
    data: Enumerable<wes_dvCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_dv update
   */
  export type wes_dvUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_dv
     * 
    **/
    select?: wes_dvSelect | null
    /**
     * The data needed to update a wes_dv.
     * 
    **/
    data: XOR<wes_dvUpdateInput, wes_dvUncheckedUpdateInput>
    /**
     * Choose, which wes_dv to update.
     * 
    **/
    where: wes_dvWhereUniqueInput
  }


  /**
   * wes_dv updateMany
   */
  export type wes_dvUpdateManyArgs = {
    /**
     * The data used to update wes_dvs.
     * 
    **/
    data: XOR<wes_dvUpdateManyMutationInput, wes_dvUncheckedUpdateManyInput>
    /**
     * Filter which wes_dvs to update
     * 
    **/
    where?: wes_dvWhereInput
  }


  /**
   * wes_dv upsert
   */
  export type wes_dvUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_dv
     * 
    **/
    select?: wes_dvSelect | null
    /**
     * The filter to search for the wes_dv to update in case it exists.
     * 
    **/
    where: wes_dvWhereUniqueInput
    /**
     * In case the wes_dv found by the `where` argument doesn't exist, create a new wes_dv with this data.
     * 
    **/
    create: XOR<wes_dvCreateInput, wes_dvUncheckedCreateInput>
    /**
     * In case the wes_dv was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_dvUpdateInput, wes_dvUncheckedUpdateInput>
  }


  /**
   * wes_dv delete
   */
  export type wes_dvDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_dv
     * 
    **/
    select?: wes_dvSelect | null
    /**
     * Filter which wes_dv to delete.
     * 
    **/
    where: wes_dvWhereUniqueInput
  }


  /**
   * wes_dv deleteMany
   */
  export type wes_dvDeleteManyArgs = {
    /**
     * Filter which wes_dvs to delete
     * 
    **/
    where?: wes_dvWhereInput
  }


  /**
   * wes_dv: findUniqueOrThrow
   */
  export type wes_dvFindUniqueOrThrowArgs = wes_dvFindUniqueArgsBase
      

  /**
   * wes_dv: findFirstOrThrow
   */
  export type wes_dvFindFirstOrThrowArgs = wes_dvFindFirstArgsBase
      

  /**
   * wes_dv without action
   */
  export type wes_dvArgs = {
    /**
     * Select specific fields to fetch from the wes_dv
     * 
    **/
    select?: wes_dvSelect | null
  }



  /**
   * Model wes_eis
   */


  export type AggregateWes_eis = {
    _count: Wes_eisCountAggregateOutputType | null
    _avg: Wes_eisAvgAggregateOutputType | null
    _sum: Wes_eisSumAggregateOutputType | null
    _min: Wes_eisMinAggregateOutputType | null
    _max: Wes_eisMaxAggregateOutputType | null
  }

  export type Wes_eisAvgAggregateOutputType = {
    id: number | null
    park_id: number | null
    monat: number | null
    jahr: number | null
    einsatz: number | null
    lastgang: number | null
    minute: number | null
    enwg: number | null
    dvred: number | null
    rechnung: number | null
  }

  export type Wes_eisSumAggregateOutputType = {
    id: number | null
    park_id: number | null
    monat: number | null
    jahr: number | null
    einsatz: number | null
    lastgang: number | null
    minute: number | null
    enwg: number | null
    dvred: number | null
    rechnung: number | null
  }

  export type Wes_eisMinAggregateOutputType = {
    id: number | null
    park_id: number | null
    monat: number | null
    jahr: number | null
    einsatz: number | null
    lastgang: number | null
    minute: number | null
    enwg: number | null
    dvred: number | null
    durchremark: string | null
    rechnung: number | null
    rechnungnummer: string | null
    rechnungremark: string | null
  }

  export type Wes_eisMaxAggregateOutputType = {
    id: number | null
    park_id: number | null
    monat: number | null
    jahr: number | null
    einsatz: number | null
    lastgang: number | null
    minute: number | null
    enwg: number | null
    dvred: number | null
    durchremark: string | null
    rechnung: number | null
    rechnungnummer: string | null
    rechnungremark: string | null
  }

  export type Wes_eisCountAggregateOutputType = {
    id: number
    park_id: number
    monat: number
    jahr: number
    einsatz: number
    lastgang: number
    minute: number
    enwg: number
    dvred: number
    durchremark: number
    rechnung: number
    rechnungnummer: number
    rechnungremark: number
    _all: number
  }


  export type Wes_eisAvgAggregateInputType = {
    id?: true
    park_id?: true
    monat?: true
    jahr?: true
    einsatz?: true
    lastgang?: true
    minute?: true
    enwg?: true
    dvred?: true
    rechnung?: true
  }

  export type Wes_eisSumAggregateInputType = {
    id?: true
    park_id?: true
    monat?: true
    jahr?: true
    einsatz?: true
    lastgang?: true
    minute?: true
    enwg?: true
    dvred?: true
    rechnung?: true
  }

  export type Wes_eisMinAggregateInputType = {
    id?: true
    park_id?: true
    monat?: true
    jahr?: true
    einsatz?: true
    lastgang?: true
    minute?: true
    enwg?: true
    dvred?: true
    durchremark?: true
    rechnung?: true
    rechnungnummer?: true
    rechnungremark?: true
  }

  export type Wes_eisMaxAggregateInputType = {
    id?: true
    park_id?: true
    monat?: true
    jahr?: true
    einsatz?: true
    lastgang?: true
    minute?: true
    enwg?: true
    dvred?: true
    durchremark?: true
    rechnung?: true
    rechnungnummer?: true
    rechnungremark?: true
  }

  export type Wes_eisCountAggregateInputType = {
    id?: true
    park_id?: true
    monat?: true
    jahr?: true
    einsatz?: true
    lastgang?: true
    minute?: true
    enwg?: true
    dvred?: true
    durchremark?: true
    rechnung?: true
    rechnungnummer?: true
    rechnungremark?: true
    _all?: true
  }

  export type Wes_eisAggregateArgs = {
    /**
     * Filter which wes_eis to aggregate.
     * 
    **/
    where?: wes_eisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_eis to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_eisOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_eisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_eis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_eis.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_eis
    **/
    _count?: true | Wes_eisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_eisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_eisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_eisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_eisMaxAggregateInputType
  }

  export type GetWes_eisAggregateType<T extends Wes_eisAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_eis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_eis[P]>
      : GetScalarType<T[P], AggregateWes_eis[P]>
  }




  export type Wes_eisGroupByArgs = {
    where?: wes_eisWhereInput
    orderBy?: Enumerable<wes_eisOrderByWithAggregationInput>
    by: Array<Wes_eisScalarFieldEnum>
    having?: wes_eisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_eisCountAggregateInputType | true
    _avg?: Wes_eisAvgAggregateInputType
    _sum?: Wes_eisSumAggregateInputType
    _min?: Wes_eisMinAggregateInputType
    _max?: Wes_eisMaxAggregateInputType
  }


  export type Wes_eisGroupByOutputType = {
    id: number
    park_id: number
    monat: number | null
    jahr: number | null
    einsatz: number
    lastgang: number
    minute: number
    enwg: number
    dvred: number
    durchremark: string | null
    rechnung: number
    rechnungnummer: string | null
    rechnungremark: string | null
    _count: Wes_eisCountAggregateOutputType | null
    _avg: Wes_eisAvgAggregateOutputType | null
    _sum: Wes_eisSumAggregateOutputType | null
    _min: Wes_eisMinAggregateOutputType | null
    _max: Wes_eisMaxAggregateOutputType | null
  }

  type GetWes_eisGroupByPayload<T extends Wes_eisGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_eisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_eisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_eisGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_eisGroupByOutputType[P]>
        }
      >
    >


  export type wes_eisSelect = {
    id?: boolean
    park_id?: boolean
    monat?: boolean
    jahr?: boolean
    einsatz?: boolean
    lastgang?: boolean
    minute?: boolean
    enwg?: boolean
    dvred?: boolean
    durchremark?: boolean
    rechnung?: boolean
    rechnungnummer?: boolean
    rechnungremark?: boolean
  }

  export type wes_eisGetPayload<
    S extends boolean | null | undefined | wes_eisArgs,
    U = keyof S
      > = S extends true
        ? wes_eis
    : S extends undefined
    ? never
    : S extends wes_eisArgs | wes_eisFindManyArgs
    ?'include' extends U
    ? wes_eis 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_eis ? wes_eis[P] : never
  } 
    : wes_eis
  : wes_eis


  type wes_eisCountArgs = Merge<
    Omit<wes_eisFindManyArgs, 'select' | 'include'> & {
      select?: Wes_eisCountAggregateInputType | true
    }
  >

  export interface wes_eisDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_eis that matches the filter.
     * @param {wes_eisFindUniqueArgs} args - Arguments to find a Wes_eis
     * @example
     * // Get one Wes_eis
     * const wes_eis = await prisma.wes_eis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_eisFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_eisFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_eis'> extends True ? CheckSelect<T, Prisma__wes_eisClient<wes_eis>, Prisma__wes_eisClient<wes_eisGetPayload<T>>> : CheckSelect<T, Prisma__wes_eisClient<wes_eis | null, null>, Prisma__wes_eisClient<wes_eisGetPayload<T> | null, null>>

    /**
     * Find the first Wes_eis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_eisFindFirstArgs} args - Arguments to find a Wes_eis
     * @example
     * // Get one Wes_eis
     * const wes_eis = await prisma.wes_eis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_eisFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_eisFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_eis'> extends True ? CheckSelect<T, Prisma__wes_eisClient<wes_eis>, Prisma__wes_eisClient<wes_eisGetPayload<T>>> : CheckSelect<T, Prisma__wes_eisClient<wes_eis | null, null>, Prisma__wes_eisClient<wes_eisGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_eis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_eisFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_eis
     * const wes_eis = await prisma.wes_eis.findMany()
     * 
     * // Get first 10 Wes_eis
     * const wes_eis = await prisma.wes_eis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_eisWithIdOnly = await prisma.wes_eis.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_eisFindManyArgs>(
      args?: SelectSubset<T, wes_eisFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_eis>>, PrismaPromise<Array<wes_eisGetPayload<T>>>>

    /**
     * Create a Wes_eis.
     * @param {wes_eisCreateArgs} args - Arguments to create a Wes_eis.
     * @example
     * // Create one Wes_eis
     * const Wes_eis = await prisma.wes_eis.create({
     *   data: {
     *     // ... data to create a Wes_eis
     *   }
     * })
     * 
    **/
    create<T extends wes_eisCreateArgs>(
      args: SelectSubset<T, wes_eisCreateArgs>
    ): CheckSelect<T, Prisma__wes_eisClient<wes_eis>, Prisma__wes_eisClient<wes_eisGetPayload<T>>>

    /**
     * Create many Wes_eis.
     *     @param {wes_eisCreateManyArgs} args - Arguments to create many Wes_eis.
     *     @example
     *     // Create many Wes_eis
     *     const wes_eis = await prisma.wes_eis.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_eisCreateManyArgs>(
      args?: SelectSubset<T, wes_eisCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_eis.
     * @param {wes_eisDeleteArgs} args - Arguments to delete one Wes_eis.
     * @example
     * // Delete one Wes_eis
     * const Wes_eis = await prisma.wes_eis.delete({
     *   where: {
     *     // ... filter to delete one Wes_eis
     *   }
     * })
     * 
    **/
    delete<T extends wes_eisDeleteArgs>(
      args: SelectSubset<T, wes_eisDeleteArgs>
    ): CheckSelect<T, Prisma__wes_eisClient<wes_eis>, Prisma__wes_eisClient<wes_eisGetPayload<T>>>

    /**
     * Update one Wes_eis.
     * @param {wes_eisUpdateArgs} args - Arguments to update one Wes_eis.
     * @example
     * // Update one Wes_eis
     * const wes_eis = await prisma.wes_eis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_eisUpdateArgs>(
      args: SelectSubset<T, wes_eisUpdateArgs>
    ): CheckSelect<T, Prisma__wes_eisClient<wes_eis>, Prisma__wes_eisClient<wes_eisGetPayload<T>>>

    /**
     * Delete zero or more Wes_eis.
     * @param {wes_eisDeleteManyArgs} args - Arguments to filter Wes_eis to delete.
     * @example
     * // Delete a few Wes_eis
     * const { count } = await prisma.wes_eis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_eisDeleteManyArgs>(
      args?: SelectSubset<T, wes_eisDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_eis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_eisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_eis
     * const wes_eis = await prisma.wes_eis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_eisUpdateManyArgs>(
      args: SelectSubset<T, wes_eisUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_eis.
     * @param {wes_eisUpsertArgs} args - Arguments to update or create a Wes_eis.
     * @example
     * // Update or create a Wes_eis
     * const wes_eis = await prisma.wes_eis.upsert({
     *   create: {
     *     // ... data to create a Wes_eis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_eis we want to update
     *   }
     * })
    **/
    upsert<T extends wes_eisUpsertArgs>(
      args: SelectSubset<T, wes_eisUpsertArgs>
    ): CheckSelect<T, Prisma__wes_eisClient<wes_eis>, Prisma__wes_eisClient<wes_eisGetPayload<T>>>

    /**
     * Find one Wes_eis that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_eisFindUniqueOrThrowArgs} args - Arguments to find a Wes_eis
     * @example
     * // Get one Wes_eis
     * const wes_eis = await prisma.wes_eis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_eisFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_eisFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_eisClient<wes_eis>, Prisma__wes_eisClient<wes_eisGetPayload<T>>>

    /**
     * Find the first Wes_eis that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_eisFindFirstOrThrowArgs} args - Arguments to find a Wes_eis
     * @example
     * // Get one Wes_eis
     * const wes_eis = await prisma.wes_eis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_eisFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_eisFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_eisClient<wes_eis>, Prisma__wes_eisClient<wes_eisGetPayload<T>>>

    /**
     * Count the number of Wes_eis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_eisCountArgs} args - Arguments to filter Wes_eis to count.
     * @example
     * // Count the number of Wes_eis
     * const count = await prisma.wes_eis.count({
     *   where: {
     *     // ... the filter for the Wes_eis we want to count
     *   }
     * })
    **/
    count<T extends wes_eisCountArgs>(
      args?: Subset<T, wes_eisCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_eisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_eis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_eisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_eisAggregateArgs>(args: Subset<T, Wes_eisAggregateArgs>): PrismaPromise<GetWes_eisAggregateType<T>>

    /**
     * Group by Wes_eis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_eisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_eisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_eisGroupByArgs['orderBy'] }
        : { orderBy?: Wes_eisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_eisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_eisGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_eis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_eisClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_eis base type for findUnique actions
   */
  export type wes_eisFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_eis
     * 
    **/
    select?: wes_eisSelect | null
    /**
     * Filter, which wes_eis to fetch.
     * 
    **/
    where: wes_eisWhereUniqueInput
  }

  /**
   * wes_eis: findUnique
   */
  export interface wes_eisFindUniqueArgs extends wes_eisFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_eis base type for findFirst actions
   */
  export type wes_eisFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_eis
     * 
    **/
    select?: wes_eisSelect | null
    /**
     * Filter, which wes_eis to fetch.
     * 
    **/
    where?: wes_eisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_eis to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_eisOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_eis.
     * 
    **/
    cursor?: wes_eisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_eis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_eis.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_eis.
     * 
    **/
    distinct?: Enumerable<Wes_eisScalarFieldEnum>
  }

  /**
   * wes_eis: findFirst
   */
  export interface wes_eisFindFirstArgs extends wes_eisFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_eis findMany
   */
  export type wes_eisFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_eis
     * 
    **/
    select?: wes_eisSelect | null
    /**
     * Filter, which wes_eis to fetch.
     * 
    **/
    where?: wes_eisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_eis to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_eisOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_eis.
     * 
    **/
    cursor?: wes_eisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_eis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_eis.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_eisScalarFieldEnum>
  }


  /**
   * wes_eis create
   */
  export type wes_eisCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_eis
     * 
    **/
    select?: wes_eisSelect | null
    /**
     * The data needed to create a wes_eis.
     * 
    **/
    data: XOR<wes_eisCreateInput, wes_eisUncheckedCreateInput>
  }


  /**
   * wes_eis createMany
   */
  export type wes_eisCreateManyArgs = {
    /**
     * The data used to create many wes_eis.
     * 
    **/
    data: Enumerable<wes_eisCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_eis update
   */
  export type wes_eisUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_eis
     * 
    **/
    select?: wes_eisSelect | null
    /**
     * The data needed to update a wes_eis.
     * 
    **/
    data: XOR<wes_eisUpdateInput, wes_eisUncheckedUpdateInput>
    /**
     * Choose, which wes_eis to update.
     * 
    **/
    where: wes_eisWhereUniqueInput
  }


  /**
   * wes_eis updateMany
   */
  export type wes_eisUpdateManyArgs = {
    /**
     * The data used to update wes_eis.
     * 
    **/
    data: XOR<wes_eisUpdateManyMutationInput, wes_eisUncheckedUpdateManyInput>
    /**
     * Filter which wes_eis to update
     * 
    **/
    where?: wes_eisWhereInput
  }


  /**
   * wes_eis upsert
   */
  export type wes_eisUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_eis
     * 
    **/
    select?: wes_eisSelect | null
    /**
     * The filter to search for the wes_eis to update in case it exists.
     * 
    **/
    where: wes_eisWhereUniqueInput
    /**
     * In case the wes_eis found by the `where` argument doesn't exist, create a new wes_eis with this data.
     * 
    **/
    create: XOR<wes_eisCreateInput, wes_eisUncheckedCreateInput>
    /**
     * In case the wes_eis was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_eisUpdateInput, wes_eisUncheckedUpdateInput>
  }


  /**
   * wes_eis delete
   */
  export type wes_eisDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_eis
     * 
    **/
    select?: wes_eisSelect | null
    /**
     * Filter which wes_eis to delete.
     * 
    **/
    where: wes_eisWhereUniqueInput
  }


  /**
   * wes_eis deleteMany
   */
  export type wes_eisDeleteManyArgs = {
    /**
     * Filter which wes_eis to delete
     * 
    **/
    where?: wes_eisWhereInput
  }


  /**
   * wes_eis: findUniqueOrThrow
   */
  export type wes_eisFindUniqueOrThrowArgs = wes_eisFindUniqueArgsBase
      

  /**
   * wes_eis: findFirstOrThrow
   */
  export type wes_eisFindFirstOrThrowArgs = wes_eisFindFirstArgsBase
      

  /**
   * wes_eis without action
   */
  export type wes_eisArgs = {
    /**
     * Select specific fields to fetch from the wes_eis
     * 
    **/
    select?: wes_eisSelect | null
  }



  /**
   * Model wes_ka
   */


  export type AggregateWes_ka = {
    _count: Wes_kaCountAggregateOutputType | null
    _avg: Wes_kaAvgAggregateOutputType | null
    _sum: Wes_kaSumAggregateOutputType | null
    _min: Wes_kaMinAggregateOutputType | null
    _max: Wes_kaMaxAggregateOutputType | null
  }

  export type Wes_kaAvgAggregateOutputType = {
    id: number | null
  }

  export type Wes_kaSumAggregateOutputType = {
    id: number | null
  }

  export type Wes_kaMinAggregateOutputType = {
    id: number | null
    ka: string | null
    sort: string | null
  }

  export type Wes_kaMaxAggregateOutputType = {
    id: number | null
    ka: string | null
    sort: string | null
  }

  export type Wes_kaCountAggregateOutputType = {
    id: number
    ka: number
    sort: number
    _all: number
  }


  export type Wes_kaAvgAggregateInputType = {
    id?: true
  }

  export type Wes_kaSumAggregateInputType = {
    id?: true
  }

  export type Wes_kaMinAggregateInputType = {
    id?: true
    ka?: true
    sort?: true
  }

  export type Wes_kaMaxAggregateInputType = {
    id?: true
    ka?: true
    sort?: true
  }

  export type Wes_kaCountAggregateInputType = {
    id?: true
    ka?: true
    sort?: true
    _all?: true
  }

  export type Wes_kaAggregateArgs = {
    /**
     * Filter which wes_ka to aggregate.
     * 
    **/
    where?: wes_kaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kas to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_kaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_kas
    **/
    _count?: true | Wes_kaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_kaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_kaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_kaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_kaMaxAggregateInputType
  }

  export type GetWes_kaAggregateType<T extends Wes_kaAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_ka]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_ka[P]>
      : GetScalarType<T[P], AggregateWes_ka[P]>
  }




  export type Wes_kaGroupByArgs = {
    where?: wes_kaWhereInput
    orderBy?: Enumerable<wes_kaOrderByWithAggregationInput>
    by: Array<Wes_kaScalarFieldEnum>
    having?: wes_kaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_kaCountAggregateInputType | true
    _avg?: Wes_kaAvgAggregateInputType
    _sum?: Wes_kaSumAggregateInputType
    _min?: Wes_kaMinAggregateInputType
    _max?: Wes_kaMaxAggregateInputType
  }


  export type Wes_kaGroupByOutputType = {
    id: number
    ka: string
    sort: string | null
    _count: Wes_kaCountAggregateOutputType | null
    _avg: Wes_kaAvgAggregateOutputType | null
    _sum: Wes_kaSumAggregateOutputType | null
    _min: Wes_kaMinAggregateOutputType | null
    _max: Wes_kaMaxAggregateOutputType | null
  }

  type GetWes_kaGroupByPayload<T extends Wes_kaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_kaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_kaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_kaGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_kaGroupByOutputType[P]>
        }
      >
    >


  export type wes_kaSelect = {
    id?: boolean
    ka?: boolean
    sort?: boolean
  }

  export type wes_kaGetPayload<
    S extends boolean | null | undefined | wes_kaArgs,
    U = keyof S
      > = S extends true
        ? wes_ka
    : S extends undefined
    ? never
    : S extends wes_kaArgs | wes_kaFindManyArgs
    ?'include' extends U
    ? wes_ka 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_ka ? wes_ka[P] : never
  } 
    : wes_ka
  : wes_ka


  type wes_kaCountArgs = Merge<
    Omit<wes_kaFindManyArgs, 'select' | 'include'> & {
      select?: Wes_kaCountAggregateInputType | true
    }
  >

  export interface wes_kaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_ka that matches the filter.
     * @param {wes_kaFindUniqueArgs} args - Arguments to find a Wes_ka
     * @example
     * // Get one Wes_ka
     * const wes_ka = await prisma.wes_ka.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_kaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_kaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_ka'> extends True ? CheckSelect<T, Prisma__wes_kaClient<wes_ka>, Prisma__wes_kaClient<wes_kaGetPayload<T>>> : CheckSelect<T, Prisma__wes_kaClient<wes_ka | null, null>, Prisma__wes_kaClient<wes_kaGetPayload<T> | null, null>>

    /**
     * Find the first Wes_ka that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kaFindFirstArgs} args - Arguments to find a Wes_ka
     * @example
     * // Get one Wes_ka
     * const wes_ka = await prisma.wes_ka.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_kaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_kaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_ka'> extends True ? CheckSelect<T, Prisma__wes_kaClient<wes_ka>, Prisma__wes_kaClient<wes_kaGetPayload<T>>> : CheckSelect<T, Prisma__wes_kaClient<wes_ka | null, null>, Prisma__wes_kaClient<wes_kaGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_kas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_kas
     * const wes_kas = await prisma.wes_ka.findMany()
     * 
     * // Get first 10 Wes_kas
     * const wes_kas = await prisma.wes_ka.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_kaWithIdOnly = await prisma.wes_ka.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_kaFindManyArgs>(
      args?: SelectSubset<T, wes_kaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_ka>>, PrismaPromise<Array<wes_kaGetPayload<T>>>>

    /**
     * Create a Wes_ka.
     * @param {wes_kaCreateArgs} args - Arguments to create a Wes_ka.
     * @example
     * // Create one Wes_ka
     * const Wes_ka = await prisma.wes_ka.create({
     *   data: {
     *     // ... data to create a Wes_ka
     *   }
     * })
     * 
    **/
    create<T extends wes_kaCreateArgs>(
      args: SelectSubset<T, wes_kaCreateArgs>
    ): CheckSelect<T, Prisma__wes_kaClient<wes_ka>, Prisma__wes_kaClient<wes_kaGetPayload<T>>>

    /**
     * Create many Wes_kas.
     *     @param {wes_kaCreateManyArgs} args - Arguments to create many Wes_kas.
     *     @example
     *     // Create many Wes_kas
     *     const wes_ka = await prisma.wes_ka.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_kaCreateManyArgs>(
      args?: SelectSubset<T, wes_kaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_ka.
     * @param {wes_kaDeleteArgs} args - Arguments to delete one Wes_ka.
     * @example
     * // Delete one Wes_ka
     * const Wes_ka = await prisma.wes_ka.delete({
     *   where: {
     *     // ... filter to delete one Wes_ka
     *   }
     * })
     * 
    **/
    delete<T extends wes_kaDeleteArgs>(
      args: SelectSubset<T, wes_kaDeleteArgs>
    ): CheckSelect<T, Prisma__wes_kaClient<wes_ka>, Prisma__wes_kaClient<wes_kaGetPayload<T>>>

    /**
     * Update one Wes_ka.
     * @param {wes_kaUpdateArgs} args - Arguments to update one Wes_ka.
     * @example
     * // Update one Wes_ka
     * const wes_ka = await prisma.wes_ka.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_kaUpdateArgs>(
      args: SelectSubset<T, wes_kaUpdateArgs>
    ): CheckSelect<T, Prisma__wes_kaClient<wes_ka>, Prisma__wes_kaClient<wes_kaGetPayload<T>>>

    /**
     * Delete zero or more Wes_kas.
     * @param {wes_kaDeleteManyArgs} args - Arguments to filter Wes_kas to delete.
     * @example
     * // Delete a few Wes_kas
     * const { count } = await prisma.wes_ka.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_kaDeleteManyArgs>(
      args?: SelectSubset<T, wes_kaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_kas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_kas
     * const wes_ka = await prisma.wes_ka.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_kaUpdateManyArgs>(
      args: SelectSubset<T, wes_kaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_ka.
     * @param {wes_kaUpsertArgs} args - Arguments to update or create a Wes_ka.
     * @example
     * // Update or create a Wes_ka
     * const wes_ka = await prisma.wes_ka.upsert({
     *   create: {
     *     // ... data to create a Wes_ka
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_ka we want to update
     *   }
     * })
    **/
    upsert<T extends wes_kaUpsertArgs>(
      args: SelectSubset<T, wes_kaUpsertArgs>
    ): CheckSelect<T, Prisma__wes_kaClient<wes_ka>, Prisma__wes_kaClient<wes_kaGetPayload<T>>>

    /**
     * Find one Wes_ka that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_kaFindUniqueOrThrowArgs} args - Arguments to find a Wes_ka
     * @example
     * // Get one Wes_ka
     * const wes_ka = await prisma.wes_ka.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_kaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_kaFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_kaClient<wes_ka>, Prisma__wes_kaClient<wes_kaGetPayload<T>>>

    /**
     * Find the first Wes_ka that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kaFindFirstOrThrowArgs} args - Arguments to find a Wes_ka
     * @example
     * // Get one Wes_ka
     * const wes_ka = await prisma.wes_ka.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_kaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_kaFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_kaClient<wes_ka>, Prisma__wes_kaClient<wes_kaGetPayload<T>>>

    /**
     * Count the number of Wes_kas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kaCountArgs} args - Arguments to filter Wes_kas to count.
     * @example
     * // Count the number of Wes_kas
     * const count = await prisma.wes_ka.count({
     *   where: {
     *     // ... the filter for the Wes_kas we want to count
     *   }
     * })
    **/
    count<T extends wes_kaCountArgs>(
      args?: Subset<T, wes_kaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_kaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_ka.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_kaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_kaAggregateArgs>(args: Subset<T, Wes_kaAggregateArgs>): PrismaPromise<GetWes_kaAggregateType<T>>

    /**
     * Group by Wes_ka.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_kaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_kaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_kaGroupByArgs['orderBy'] }
        : { orderBy?: Wes_kaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_kaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_kaGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_ka.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_kaClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_ka base type for findUnique actions
   */
  export type wes_kaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_ka
     * 
    **/
    select?: wes_kaSelect | null
    /**
     * Filter, which wes_ka to fetch.
     * 
    **/
    where: wes_kaWhereUniqueInput
  }

  /**
   * wes_ka: findUnique
   */
  export interface wes_kaFindUniqueArgs extends wes_kaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_ka base type for findFirst actions
   */
  export type wes_kaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_ka
     * 
    **/
    select?: wes_kaSelect | null
    /**
     * Filter, which wes_ka to fetch.
     * 
    **/
    where?: wes_kaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kas to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_kas.
     * 
    **/
    cursor?: wes_kaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_kas.
     * 
    **/
    distinct?: Enumerable<Wes_kaScalarFieldEnum>
  }

  /**
   * wes_ka: findFirst
   */
  export interface wes_kaFindFirstArgs extends wes_kaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_ka findMany
   */
  export type wes_kaFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_ka
     * 
    **/
    select?: wes_kaSelect | null
    /**
     * Filter, which wes_kas to fetch.
     * 
    **/
    where?: wes_kaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kas to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_kas.
     * 
    **/
    cursor?: wes_kaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_kaScalarFieldEnum>
  }


  /**
   * wes_ka create
   */
  export type wes_kaCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_ka
     * 
    **/
    select?: wes_kaSelect | null
    /**
     * The data needed to create a wes_ka.
     * 
    **/
    data: XOR<wes_kaCreateInput, wes_kaUncheckedCreateInput>
  }


  /**
   * wes_ka createMany
   */
  export type wes_kaCreateManyArgs = {
    /**
     * The data used to create many wes_kas.
     * 
    **/
    data: Enumerable<wes_kaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_ka update
   */
  export type wes_kaUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_ka
     * 
    **/
    select?: wes_kaSelect | null
    /**
     * The data needed to update a wes_ka.
     * 
    **/
    data: XOR<wes_kaUpdateInput, wes_kaUncheckedUpdateInput>
    /**
     * Choose, which wes_ka to update.
     * 
    **/
    where: wes_kaWhereUniqueInput
  }


  /**
   * wes_ka updateMany
   */
  export type wes_kaUpdateManyArgs = {
    /**
     * The data used to update wes_kas.
     * 
    **/
    data: XOR<wes_kaUpdateManyMutationInput, wes_kaUncheckedUpdateManyInput>
    /**
     * Filter which wes_kas to update
     * 
    **/
    where?: wes_kaWhereInput
  }


  /**
   * wes_ka upsert
   */
  export type wes_kaUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_ka
     * 
    **/
    select?: wes_kaSelect | null
    /**
     * The filter to search for the wes_ka to update in case it exists.
     * 
    **/
    where: wes_kaWhereUniqueInput
    /**
     * In case the wes_ka found by the `where` argument doesn't exist, create a new wes_ka with this data.
     * 
    **/
    create: XOR<wes_kaCreateInput, wes_kaUncheckedCreateInput>
    /**
     * In case the wes_ka was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_kaUpdateInput, wes_kaUncheckedUpdateInput>
  }


  /**
   * wes_ka delete
   */
  export type wes_kaDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_ka
     * 
    **/
    select?: wes_kaSelect | null
    /**
     * Filter which wes_ka to delete.
     * 
    **/
    where: wes_kaWhereUniqueInput
  }


  /**
   * wes_ka deleteMany
   */
  export type wes_kaDeleteManyArgs = {
    /**
     * Filter which wes_kas to delete
     * 
    **/
    where?: wes_kaWhereInput
  }


  /**
   * wes_ka: findUniqueOrThrow
   */
  export type wes_kaFindUniqueOrThrowArgs = wes_kaFindUniqueArgsBase
      

  /**
   * wes_ka: findFirstOrThrow
   */
  export type wes_kaFindFirstOrThrowArgs = wes_kaFindFirstArgsBase
      

  /**
   * wes_ka without action
   */
  export type wes_kaArgs = {
    /**
     * Select specific fields to fetch from the wes_ka
     * 
    **/
    select?: wes_kaSelect | null
  }



  /**
   * Model wes_ka_kontakt
   */


  export type AggregateWes_ka_kontakt = {
    _count: Wes_ka_kontaktCountAggregateOutputType | null
    _avg: Wes_ka_kontaktAvgAggregateOutputType | null
    _sum: Wes_ka_kontaktSumAggregateOutputType | null
    _min: Wes_ka_kontaktMinAggregateOutputType | null
    _max: Wes_ka_kontaktMaxAggregateOutputType | null
  }

  export type Wes_ka_kontaktAvgAggregateOutputType = {
    ka: number | null
    kid: number | null
  }

  export type Wes_ka_kontaktSumAggregateOutputType = {
    ka: number | null
    kid: number | null
  }

  export type Wes_ka_kontaktMinAggregateOutputType = {
    ka: number | null
    kid: number | null
    value: string | null
  }

  export type Wes_ka_kontaktMaxAggregateOutputType = {
    ka: number | null
    kid: number | null
    value: string | null
  }

  export type Wes_ka_kontaktCountAggregateOutputType = {
    ka: number
    kid: number
    value: number
    _all: number
  }


  export type Wes_ka_kontaktAvgAggregateInputType = {
    ka?: true
    kid?: true
  }

  export type Wes_ka_kontaktSumAggregateInputType = {
    ka?: true
    kid?: true
  }

  export type Wes_ka_kontaktMinAggregateInputType = {
    ka?: true
    kid?: true
    value?: true
  }

  export type Wes_ka_kontaktMaxAggregateInputType = {
    ka?: true
    kid?: true
    value?: true
  }

  export type Wes_ka_kontaktCountAggregateInputType = {
    ka?: true
    kid?: true
    value?: true
    _all?: true
  }

  export type Wes_ka_kontaktAggregateArgs = {
    /**
     * Filter which wes_ka_kontakt to aggregate.
     * 
    **/
    where?: wes_ka_kontaktWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_ka_kontakts to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_ka_kontaktOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_ka_kontaktWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_ka_kontakts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_ka_kontakts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_ka_kontakts
    **/
    _count?: true | Wes_ka_kontaktCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_ka_kontaktAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_ka_kontaktSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_ka_kontaktMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_ka_kontaktMaxAggregateInputType
  }

  export type GetWes_ka_kontaktAggregateType<T extends Wes_ka_kontaktAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_ka_kontakt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_ka_kontakt[P]>
      : GetScalarType<T[P], AggregateWes_ka_kontakt[P]>
  }




  export type Wes_ka_kontaktGroupByArgs = {
    where?: wes_ka_kontaktWhereInput
    orderBy?: Enumerable<wes_ka_kontaktOrderByWithAggregationInput>
    by: Array<Wes_ka_kontaktScalarFieldEnum>
    having?: wes_ka_kontaktScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_ka_kontaktCountAggregateInputType | true
    _avg?: Wes_ka_kontaktAvgAggregateInputType
    _sum?: Wes_ka_kontaktSumAggregateInputType
    _min?: Wes_ka_kontaktMinAggregateInputType
    _max?: Wes_ka_kontaktMaxAggregateInputType
  }


  export type Wes_ka_kontaktGroupByOutputType = {
    ka: number
    kid: number
    value: string
    _count: Wes_ka_kontaktCountAggregateOutputType | null
    _avg: Wes_ka_kontaktAvgAggregateOutputType | null
    _sum: Wes_ka_kontaktSumAggregateOutputType | null
    _min: Wes_ka_kontaktMinAggregateOutputType | null
    _max: Wes_ka_kontaktMaxAggregateOutputType | null
  }

  type GetWes_ka_kontaktGroupByPayload<T extends Wes_ka_kontaktGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_ka_kontaktGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_ka_kontaktGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_ka_kontaktGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_ka_kontaktGroupByOutputType[P]>
        }
      >
    >


  export type wes_ka_kontaktSelect = {
    ka?: boolean
    kid?: boolean
    value?: boolean
  }

  export type wes_ka_kontaktGetPayload<
    S extends boolean | null | undefined | wes_ka_kontaktArgs,
    U = keyof S
      > = S extends true
        ? wes_ka_kontakt
    : S extends undefined
    ? never
    : S extends wes_ka_kontaktArgs | wes_ka_kontaktFindManyArgs
    ?'include' extends U
    ? wes_ka_kontakt 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_ka_kontakt ? wes_ka_kontakt[P] : never
  } 
    : wes_ka_kontakt
  : wes_ka_kontakt


  type wes_ka_kontaktCountArgs = Merge<
    Omit<wes_ka_kontaktFindManyArgs, 'select' | 'include'> & {
      select?: Wes_ka_kontaktCountAggregateInputType | true
    }
  >

  export interface wes_ka_kontaktDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_ka_kontakt that matches the filter.
     * @param {wes_ka_kontaktFindUniqueArgs} args - Arguments to find a Wes_ka_kontakt
     * @example
     * // Get one Wes_ka_kontakt
     * const wes_ka_kontakt = await prisma.wes_ka_kontakt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_ka_kontaktFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_ka_kontaktFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_ka_kontakt'> extends True ? CheckSelect<T, Prisma__wes_ka_kontaktClient<wes_ka_kontakt>, Prisma__wes_ka_kontaktClient<wes_ka_kontaktGetPayload<T>>> : CheckSelect<T, Prisma__wes_ka_kontaktClient<wes_ka_kontakt | null, null>, Prisma__wes_ka_kontaktClient<wes_ka_kontaktGetPayload<T> | null, null>>

    /**
     * Find the first Wes_ka_kontakt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_ka_kontaktFindFirstArgs} args - Arguments to find a Wes_ka_kontakt
     * @example
     * // Get one Wes_ka_kontakt
     * const wes_ka_kontakt = await prisma.wes_ka_kontakt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_ka_kontaktFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_ka_kontaktFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_ka_kontakt'> extends True ? CheckSelect<T, Prisma__wes_ka_kontaktClient<wes_ka_kontakt>, Prisma__wes_ka_kontaktClient<wes_ka_kontaktGetPayload<T>>> : CheckSelect<T, Prisma__wes_ka_kontaktClient<wes_ka_kontakt | null, null>, Prisma__wes_ka_kontaktClient<wes_ka_kontaktGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_ka_kontakts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_ka_kontaktFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_ka_kontakts
     * const wes_ka_kontakts = await prisma.wes_ka_kontakt.findMany()
     * 
     * // Get first 10 Wes_ka_kontakts
     * const wes_ka_kontakts = await prisma.wes_ka_kontakt.findMany({ take: 10 })
     * 
     * // Only select the `ka`
     * const wes_ka_kontaktWithKaOnly = await prisma.wes_ka_kontakt.findMany({ select: { ka: true } })
     * 
    **/
    findMany<T extends wes_ka_kontaktFindManyArgs>(
      args?: SelectSubset<T, wes_ka_kontaktFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_ka_kontakt>>, PrismaPromise<Array<wes_ka_kontaktGetPayload<T>>>>

    /**
     * Create a Wes_ka_kontakt.
     * @param {wes_ka_kontaktCreateArgs} args - Arguments to create a Wes_ka_kontakt.
     * @example
     * // Create one Wes_ka_kontakt
     * const Wes_ka_kontakt = await prisma.wes_ka_kontakt.create({
     *   data: {
     *     // ... data to create a Wes_ka_kontakt
     *   }
     * })
     * 
    **/
    create<T extends wes_ka_kontaktCreateArgs>(
      args: SelectSubset<T, wes_ka_kontaktCreateArgs>
    ): CheckSelect<T, Prisma__wes_ka_kontaktClient<wes_ka_kontakt>, Prisma__wes_ka_kontaktClient<wes_ka_kontaktGetPayload<T>>>

    /**
     * Create many Wes_ka_kontakts.
     *     @param {wes_ka_kontaktCreateManyArgs} args - Arguments to create many Wes_ka_kontakts.
     *     @example
     *     // Create many Wes_ka_kontakts
     *     const wes_ka_kontakt = await prisma.wes_ka_kontakt.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_ka_kontaktCreateManyArgs>(
      args?: SelectSubset<T, wes_ka_kontaktCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_ka_kontakt.
     * @param {wes_ka_kontaktDeleteArgs} args - Arguments to delete one Wes_ka_kontakt.
     * @example
     * // Delete one Wes_ka_kontakt
     * const Wes_ka_kontakt = await prisma.wes_ka_kontakt.delete({
     *   where: {
     *     // ... filter to delete one Wes_ka_kontakt
     *   }
     * })
     * 
    **/
    delete<T extends wes_ka_kontaktDeleteArgs>(
      args: SelectSubset<T, wes_ka_kontaktDeleteArgs>
    ): CheckSelect<T, Prisma__wes_ka_kontaktClient<wes_ka_kontakt>, Prisma__wes_ka_kontaktClient<wes_ka_kontaktGetPayload<T>>>

    /**
     * Update one Wes_ka_kontakt.
     * @param {wes_ka_kontaktUpdateArgs} args - Arguments to update one Wes_ka_kontakt.
     * @example
     * // Update one Wes_ka_kontakt
     * const wes_ka_kontakt = await prisma.wes_ka_kontakt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_ka_kontaktUpdateArgs>(
      args: SelectSubset<T, wes_ka_kontaktUpdateArgs>
    ): CheckSelect<T, Prisma__wes_ka_kontaktClient<wes_ka_kontakt>, Prisma__wes_ka_kontaktClient<wes_ka_kontaktGetPayload<T>>>

    /**
     * Delete zero or more Wes_ka_kontakts.
     * @param {wes_ka_kontaktDeleteManyArgs} args - Arguments to filter Wes_ka_kontakts to delete.
     * @example
     * // Delete a few Wes_ka_kontakts
     * const { count } = await prisma.wes_ka_kontakt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_ka_kontaktDeleteManyArgs>(
      args?: SelectSubset<T, wes_ka_kontaktDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_ka_kontakts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_ka_kontaktUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_ka_kontakts
     * const wes_ka_kontakt = await prisma.wes_ka_kontakt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_ka_kontaktUpdateManyArgs>(
      args: SelectSubset<T, wes_ka_kontaktUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_ka_kontakt.
     * @param {wes_ka_kontaktUpsertArgs} args - Arguments to update or create a Wes_ka_kontakt.
     * @example
     * // Update or create a Wes_ka_kontakt
     * const wes_ka_kontakt = await prisma.wes_ka_kontakt.upsert({
     *   create: {
     *     // ... data to create a Wes_ka_kontakt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_ka_kontakt we want to update
     *   }
     * })
    **/
    upsert<T extends wes_ka_kontaktUpsertArgs>(
      args: SelectSubset<T, wes_ka_kontaktUpsertArgs>
    ): CheckSelect<T, Prisma__wes_ka_kontaktClient<wes_ka_kontakt>, Prisma__wes_ka_kontaktClient<wes_ka_kontaktGetPayload<T>>>

    /**
     * Find one Wes_ka_kontakt that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_ka_kontaktFindUniqueOrThrowArgs} args - Arguments to find a Wes_ka_kontakt
     * @example
     * // Get one Wes_ka_kontakt
     * const wes_ka_kontakt = await prisma.wes_ka_kontakt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_ka_kontaktFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_ka_kontaktFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_ka_kontaktClient<wes_ka_kontakt>, Prisma__wes_ka_kontaktClient<wes_ka_kontaktGetPayload<T>>>

    /**
     * Find the first Wes_ka_kontakt that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_ka_kontaktFindFirstOrThrowArgs} args - Arguments to find a Wes_ka_kontakt
     * @example
     * // Get one Wes_ka_kontakt
     * const wes_ka_kontakt = await prisma.wes_ka_kontakt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_ka_kontaktFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_ka_kontaktFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_ka_kontaktClient<wes_ka_kontakt>, Prisma__wes_ka_kontaktClient<wes_ka_kontaktGetPayload<T>>>

    /**
     * Count the number of Wes_ka_kontakts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_ka_kontaktCountArgs} args - Arguments to filter Wes_ka_kontakts to count.
     * @example
     * // Count the number of Wes_ka_kontakts
     * const count = await prisma.wes_ka_kontakt.count({
     *   where: {
     *     // ... the filter for the Wes_ka_kontakts we want to count
     *   }
     * })
    **/
    count<T extends wes_ka_kontaktCountArgs>(
      args?: Subset<T, wes_ka_kontaktCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_ka_kontaktCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_ka_kontakt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_ka_kontaktAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_ka_kontaktAggregateArgs>(args: Subset<T, Wes_ka_kontaktAggregateArgs>): PrismaPromise<GetWes_ka_kontaktAggregateType<T>>

    /**
     * Group by Wes_ka_kontakt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_ka_kontaktGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_ka_kontaktGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_ka_kontaktGroupByArgs['orderBy'] }
        : { orderBy?: Wes_ka_kontaktGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_ka_kontaktGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_ka_kontaktGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_ka_kontakt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_ka_kontaktClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_ka_kontakt base type for findUnique actions
   */
  export type wes_ka_kontaktFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_ka_kontakt
     * 
    **/
    select?: wes_ka_kontaktSelect | null
    /**
     * Filter, which wes_ka_kontakt to fetch.
     * 
    **/
    where: wes_ka_kontaktWhereUniqueInput
  }

  /**
   * wes_ka_kontakt: findUnique
   */
  export interface wes_ka_kontaktFindUniqueArgs extends wes_ka_kontaktFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_ka_kontakt base type for findFirst actions
   */
  export type wes_ka_kontaktFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_ka_kontakt
     * 
    **/
    select?: wes_ka_kontaktSelect | null
    /**
     * Filter, which wes_ka_kontakt to fetch.
     * 
    **/
    where?: wes_ka_kontaktWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_ka_kontakts to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_ka_kontaktOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_ka_kontakts.
     * 
    **/
    cursor?: wes_ka_kontaktWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_ka_kontakts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_ka_kontakts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_ka_kontakts.
     * 
    **/
    distinct?: Enumerable<Wes_ka_kontaktScalarFieldEnum>
  }

  /**
   * wes_ka_kontakt: findFirst
   */
  export interface wes_ka_kontaktFindFirstArgs extends wes_ka_kontaktFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_ka_kontakt findMany
   */
  export type wes_ka_kontaktFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_ka_kontakt
     * 
    **/
    select?: wes_ka_kontaktSelect | null
    /**
     * Filter, which wes_ka_kontakts to fetch.
     * 
    **/
    where?: wes_ka_kontaktWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_ka_kontakts to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_ka_kontaktOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_ka_kontakts.
     * 
    **/
    cursor?: wes_ka_kontaktWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_ka_kontakts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_ka_kontakts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_ka_kontaktScalarFieldEnum>
  }


  /**
   * wes_ka_kontakt create
   */
  export type wes_ka_kontaktCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_ka_kontakt
     * 
    **/
    select?: wes_ka_kontaktSelect | null
    /**
     * The data needed to create a wes_ka_kontakt.
     * 
    **/
    data: XOR<wes_ka_kontaktCreateInput, wes_ka_kontaktUncheckedCreateInput>
  }


  /**
   * wes_ka_kontakt createMany
   */
  export type wes_ka_kontaktCreateManyArgs = {
    /**
     * The data used to create many wes_ka_kontakts.
     * 
    **/
    data: Enumerable<wes_ka_kontaktCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_ka_kontakt update
   */
  export type wes_ka_kontaktUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_ka_kontakt
     * 
    **/
    select?: wes_ka_kontaktSelect | null
    /**
     * The data needed to update a wes_ka_kontakt.
     * 
    **/
    data: XOR<wes_ka_kontaktUpdateInput, wes_ka_kontaktUncheckedUpdateInput>
    /**
     * Choose, which wes_ka_kontakt to update.
     * 
    **/
    where: wes_ka_kontaktWhereUniqueInput
  }


  /**
   * wes_ka_kontakt updateMany
   */
  export type wes_ka_kontaktUpdateManyArgs = {
    /**
     * The data used to update wes_ka_kontakts.
     * 
    **/
    data: XOR<wes_ka_kontaktUpdateManyMutationInput, wes_ka_kontaktUncheckedUpdateManyInput>
    /**
     * Filter which wes_ka_kontakts to update
     * 
    **/
    where?: wes_ka_kontaktWhereInput
  }


  /**
   * wes_ka_kontakt upsert
   */
  export type wes_ka_kontaktUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_ka_kontakt
     * 
    **/
    select?: wes_ka_kontaktSelect | null
    /**
     * The filter to search for the wes_ka_kontakt to update in case it exists.
     * 
    **/
    where: wes_ka_kontaktWhereUniqueInput
    /**
     * In case the wes_ka_kontakt found by the `where` argument doesn't exist, create a new wes_ka_kontakt with this data.
     * 
    **/
    create: XOR<wes_ka_kontaktCreateInput, wes_ka_kontaktUncheckedCreateInput>
    /**
     * In case the wes_ka_kontakt was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_ka_kontaktUpdateInput, wes_ka_kontaktUncheckedUpdateInput>
  }


  /**
   * wes_ka_kontakt delete
   */
  export type wes_ka_kontaktDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_ka_kontakt
     * 
    **/
    select?: wes_ka_kontaktSelect | null
    /**
     * Filter which wes_ka_kontakt to delete.
     * 
    **/
    where: wes_ka_kontaktWhereUniqueInput
  }


  /**
   * wes_ka_kontakt deleteMany
   */
  export type wes_ka_kontaktDeleteManyArgs = {
    /**
     * Filter which wes_ka_kontakts to delete
     * 
    **/
    where?: wes_ka_kontaktWhereInput
  }


  /**
   * wes_ka_kontakt: findUniqueOrThrow
   */
  export type wes_ka_kontaktFindUniqueOrThrowArgs = wes_ka_kontaktFindUniqueArgsBase
      

  /**
   * wes_ka_kontakt: findFirstOrThrow
   */
  export type wes_ka_kontaktFindFirstOrThrowArgs = wes_ka_kontaktFindFirstArgsBase
      

  /**
   * wes_ka_kontakt without action
   */
  export type wes_ka_kontaktArgs = {
    /**
     * Select specific fields to fetch from the wes_ka_kontakt
     * 
    **/
    select?: wes_ka_kontaktSelect | null
  }



  /**
   * Model wes_kf
   */


  export type AggregateWes_kf = {
    _count: Wes_kfCountAggregateOutputType | null
    _avg: Wes_kfAvgAggregateOutputType | null
    _sum: Wes_kfSumAggregateOutputType | null
    _min: Wes_kfMinAggregateOutputType | null
    _max: Wes_kfMaxAggregateOutputType | null
  }

  export type Wes_kfAvgAggregateOutputType = {
    id: number | null
  }

  export type Wes_kfSumAggregateOutputType = {
    id: number | null
  }

  export type Wes_kfMinAggregateOutputType = {
    id: number | null
    funktion: string | null
  }

  export type Wes_kfMaxAggregateOutputType = {
    id: number | null
    funktion: string | null
  }

  export type Wes_kfCountAggregateOutputType = {
    id: number
    funktion: number
    _all: number
  }


  export type Wes_kfAvgAggregateInputType = {
    id?: true
  }

  export type Wes_kfSumAggregateInputType = {
    id?: true
  }

  export type Wes_kfMinAggregateInputType = {
    id?: true
    funktion?: true
  }

  export type Wes_kfMaxAggregateInputType = {
    id?: true
    funktion?: true
  }

  export type Wes_kfCountAggregateInputType = {
    id?: true
    funktion?: true
    _all?: true
  }

  export type Wes_kfAggregateArgs = {
    /**
     * Filter which wes_kf to aggregate.
     * 
    **/
    where?: wes_kfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kfs to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kfOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_kfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kfs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kfs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_kfs
    **/
    _count?: true | Wes_kfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_kfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_kfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_kfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_kfMaxAggregateInputType
  }

  export type GetWes_kfAggregateType<T extends Wes_kfAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_kf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_kf[P]>
      : GetScalarType<T[P], AggregateWes_kf[P]>
  }




  export type Wes_kfGroupByArgs = {
    where?: wes_kfWhereInput
    orderBy?: Enumerable<wes_kfOrderByWithAggregationInput>
    by: Array<Wes_kfScalarFieldEnum>
    having?: wes_kfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_kfCountAggregateInputType | true
    _avg?: Wes_kfAvgAggregateInputType
    _sum?: Wes_kfSumAggregateInputType
    _min?: Wes_kfMinAggregateInputType
    _max?: Wes_kfMaxAggregateInputType
  }


  export type Wes_kfGroupByOutputType = {
    id: number
    funktion: string | null
    _count: Wes_kfCountAggregateOutputType | null
    _avg: Wes_kfAvgAggregateOutputType | null
    _sum: Wes_kfSumAggregateOutputType | null
    _min: Wes_kfMinAggregateOutputType | null
    _max: Wes_kfMaxAggregateOutputType | null
  }

  type GetWes_kfGroupByPayload<T extends Wes_kfGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_kfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_kfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_kfGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_kfGroupByOutputType[P]>
        }
      >
    >


  export type wes_kfSelect = {
    id?: boolean
    funktion?: boolean
  }

  export type wes_kfGetPayload<
    S extends boolean | null | undefined | wes_kfArgs,
    U = keyof S
      > = S extends true
        ? wes_kf
    : S extends undefined
    ? never
    : S extends wes_kfArgs | wes_kfFindManyArgs
    ?'include' extends U
    ? wes_kf 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_kf ? wes_kf[P] : never
  } 
    : wes_kf
  : wes_kf


  type wes_kfCountArgs = Merge<
    Omit<wes_kfFindManyArgs, 'select' | 'include'> & {
      select?: Wes_kfCountAggregateInputType | true
    }
  >

  export interface wes_kfDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_kf that matches the filter.
     * @param {wes_kfFindUniqueArgs} args - Arguments to find a Wes_kf
     * @example
     * // Get one Wes_kf
     * const wes_kf = await prisma.wes_kf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_kfFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_kfFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_kf'> extends True ? CheckSelect<T, Prisma__wes_kfClient<wes_kf>, Prisma__wes_kfClient<wes_kfGetPayload<T>>> : CheckSelect<T, Prisma__wes_kfClient<wes_kf | null, null>, Prisma__wes_kfClient<wes_kfGetPayload<T> | null, null>>

    /**
     * Find the first Wes_kf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kfFindFirstArgs} args - Arguments to find a Wes_kf
     * @example
     * // Get one Wes_kf
     * const wes_kf = await prisma.wes_kf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_kfFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_kfFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_kf'> extends True ? CheckSelect<T, Prisma__wes_kfClient<wes_kf>, Prisma__wes_kfClient<wes_kfGetPayload<T>>> : CheckSelect<T, Prisma__wes_kfClient<wes_kf | null, null>, Prisma__wes_kfClient<wes_kfGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_kfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kfFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_kfs
     * const wes_kfs = await prisma.wes_kf.findMany()
     * 
     * // Get first 10 Wes_kfs
     * const wes_kfs = await prisma.wes_kf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_kfWithIdOnly = await prisma.wes_kf.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_kfFindManyArgs>(
      args?: SelectSubset<T, wes_kfFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_kf>>, PrismaPromise<Array<wes_kfGetPayload<T>>>>

    /**
     * Create a Wes_kf.
     * @param {wes_kfCreateArgs} args - Arguments to create a Wes_kf.
     * @example
     * // Create one Wes_kf
     * const Wes_kf = await prisma.wes_kf.create({
     *   data: {
     *     // ... data to create a Wes_kf
     *   }
     * })
     * 
    **/
    create<T extends wes_kfCreateArgs>(
      args: SelectSubset<T, wes_kfCreateArgs>
    ): CheckSelect<T, Prisma__wes_kfClient<wes_kf>, Prisma__wes_kfClient<wes_kfGetPayload<T>>>

    /**
     * Create many Wes_kfs.
     *     @param {wes_kfCreateManyArgs} args - Arguments to create many Wes_kfs.
     *     @example
     *     // Create many Wes_kfs
     *     const wes_kf = await prisma.wes_kf.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_kfCreateManyArgs>(
      args?: SelectSubset<T, wes_kfCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_kf.
     * @param {wes_kfDeleteArgs} args - Arguments to delete one Wes_kf.
     * @example
     * // Delete one Wes_kf
     * const Wes_kf = await prisma.wes_kf.delete({
     *   where: {
     *     // ... filter to delete one Wes_kf
     *   }
     * })
     * 
    **/
    delete<T extends wes_kfDeleteArgs>(
      args: SelectSubset<T, wes_kfDeleteArgs>
    ): CheckSelect<T, Prisma__wes_kfClient<wes_kf>, Prisma__wes_kfClient<wes_kfGetPayload<T>>>

    /**
     * Update one Wes_kf.
     * @param {wes_kfUpdateArgs} args - Arguments to update one Wes_kf.
     * @example
     * // Update one Wes_kf
     * const wes_kf = await prisma.wes_kf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_kfUpdateArgs>(
      args: SelectSubset<T, wes_kfUpdateArgs>
    ): CheckSelect<T, Prisma__wes_kfClient<wes_kf>, Prisma__wes_kfClient<wes_kfGetPayload<T>>>

    /**
     * Delete zero or more Wes_kfs.
     * @param {wes_kfDeleteManyArgs} args - Arguments to filter Wes_kfs to delete.
     * @example
     * // Delete a few Wes_kfs
     * const { count } = await prisma.wes_kf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_kfDeleteManyArgs>(
      args?: SelectSubset<T, wes_kfDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_kfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_kfs
     * const wes_kf = await prisma.wes_kf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_kfUpdateManyArgs>(
      args: SelectSubset<T, wes_kfUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_kf.
     * @param {wes_kfUpsertArgs} args - Arguments to update or create a Wes_kf.
     * @example
     * // Update or create a Wes_kf
     * const wes_kf = await prisma.wes_kf.upsert({
     *   create: {
     *     // ... data to create a Wes_kf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_kf we want to update
     *   }
     * })
    **/
    upsert<T extends wes_kfUpsertArgs>(
      args: SelectSubset<T, wes_kfUpsertArgs>
    ): CheckSelect<T, Prisma__wes_kfClient<wes_kf>, Prisma__wes_kfClient<wes_kfGetPayload<T>>>

    /**
     * Find one Wes_kf that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_kfFindUniqueOrThrowArgs} args - Arguments to find a Wes_kf
     * @example
     * // Get one Wes_kf
     * const wes_kf = await prisma.wes_kf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_kfFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_kfFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_kfClient<wes_kf>, Prisma__wes_kfClient<wes_kfGetPayload<T>>>

    /**
     * Find the first Wes_kf that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kfFindFirstOrThrowArgs} args - Arguments to find a Wes_kf
     * @example
     * // Get one Wes_kf
     * const wes_kf = await prisma.wes_kf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_kfFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_kfFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_kfClient<wes_kf>, Prisma__wes_kfClient<wes_kfGetPayload<T>>>

    /**
     * Count the number of Wes_kfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kfCountArgs} args - Arguments to filter Wes_kfs to count.
     * @example
     * // Count the number of Wes_kfs
     * const count = await prisma.wes_kf.count({
     *   where: {
     *     // ... the filter for the Wes_kfs we want to count
     *   }
     * })
    **/
    count<T extends wes_kfCountArgs>(
      args?: Subset<T, wes_kfCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_kfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_kf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_kfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_kfAggregateArgs>(args: Subset<T, Wes_kfAggregateArgs>): PrismaPromise<GetWes_kfAggregateType<T>>

    /**
     * Group by Wes_kf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_kfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_kfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_kfGroupByArgs['orderBy'] }
        : { orderBy?: Wes_kfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_kfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_kfGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_kf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_kfClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_kf base type for findUnique actions
   */
  export type wes_kfFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_kf
     * 
    **/
    select?: wes_kfSelect | null
    /**
     * Filter, which wes_kf to fetch.
     * 
    **/
    where: wes_kfWhereUniqueInput
  }

  /**
   * wes_kf: findUnique
   */
  export interface wes_kfFindUniqueArgs extends wes_kfFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_kf base type for findFirst actions
   */
  export type wes_kfFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_kf
     * 
    **/
    select?: wes_kfSelect | null
    /**
     * Filter, which wes_kf to fetch.
     * 
    **/
    where?: wes_kfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kfs to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kfOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_kfs.
     * 
    **/
    cursor?: wes_kfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kfs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kfs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_kfs.
     * 
    **/
    distinct?: Enumerable<Wes_kfScalarFieldEnum>
  }

  /**
   * wes_kf: findFirst
   */
  export interface wes_kfFindFirstArgs extends wes_kfFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_kf findMany
   */
  export type wes_kfFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_kf
     * 
    **/
    select?: wes_kfSelect | null
    /**
     * Filter, which wes_kfs to fetch.
     * 
    **/
    where?: wes_kfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kfs to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kfOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_kfs.
     * 
    **/
    cursor?: wes_kfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kfs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kfs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_kfScalarFieldEnum>
  }


  /**
   * wes_kf create
   */
  export type wes_kfCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_kf
     * 
    **/
    select?: wes_kfSelect | null
    /**
     * The data needed to create a wes_kf.
     * 
    **/
    data: XOR<wes_kfCreateInput, wes_kfUncheckedCreateInput>
  }


  /**
   * wes_kf createMany
   */
  export type wes_kfCreateManyArgs = {
    /**
     * The data used to create many wes_kfs.
     * 
    **/
    data: Enumerable<wes_kfCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_kf update
   */
  export type wes_kfUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_kf
     * 
    **/
    select?: wes_kfSelect | null
    /**
     * The data needed to update a wes_kf.
     * 
    **/
    data: XOR<wes_kfUpdateInput, wes_kfUncheckedUpdateInput>
    /**
     * Choose, which wes_kf to update.
     * 
    **/
    where: wes_kfWhereUniqueInput
  }


  /**
   * wes_kf updateMany
   */
  export type wes_kfUpdateManyArgs = {
    /**
     * The data used to update wes_kfs.
     * 
    **/
    data: XOR<wes_kfUpdateManyMutationInput, wes_kfUncheckedUpdateManyInput>
    /**
     * Filter which wes_kfs to update
     * 
    **/
    where?: wes_kfWhereInput
  }


  /**
   * wes_kf upsert
   */
  export type wes_kfUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_kf
     * 
    **/
    select?: wes_kfSelect | null
    /**
     * The filter to search for the wes_kf to update in case it exists.
     * 
    **/
    where: wes_kfWhereUniqueInput
    /**
     * In case the wes_kf found by the `where` argument doesn't exist, create a new wes_kf with this data.
     * 
    **/
    create: XOR<wes_kfCreateInput, wes_kfUncheckedCreateInput>
    /**
     * In case the wes_kf was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_kfUpdateInput, wes_kfUncheckedUpdateInput>
  }


  /**
   * wes_kf delete
   */
  export type wes_kfDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_kf
     * 
    **/
    select?: wes_kfSelect | null
    /**
     * Filter which wes_kf to delete.
     * 
    **/
    where: wes_kfWhereUniqueInput
  }


  /**
   * wes_kf deleteMany
   */
  export type wes_kfDeleteManyArgs = {
    /**
     * Filter which wes_kfs to delete
     * 
    **/
    where?: wes_kfWhereInput
  }


  /**
   * wes_kf: findUniqueOrThrow
   */
  export type wes_kfFindUniqueOrThrowArgs = wes_kfFindUniqueArgsBase
      

  /**
   * wes_kf: findFirstOrThrow
   */
  export type wes_kfFindFirstOrThrowArgs = wes_kfFindFirstArgsBase
      

  /**
   * wes_kf without action
   */
  export type wes_kfArgs = {
    /**
     * Select specific fields to fetch from the wes_kf
     * 
    **/
    select?: wes_kfSelect | null
  }



  /**
   * Model wes_kontakt
   */


  export type AggregateWes_kontakt = {
    _count: Wes_kontaktCountAggregateOutputType | null
    _avg: Wes_kontaktAvgAggregateOutputType | null
    _sum: Wes_kontaktSumAggregateOutputType | null
    _min: Wes_kontaktMinAggregateOutputType | null
    _max: Wes_kontaktMaxAggregateOutputType | null
  }

  export type Wes_kontaktAvgAggregateOutputType = {
    id: number | null
  }

  export type Wes_kontaktSumAggregateOutputType = {
    id: number | null
  }

  export type Wes_kontaktMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Wes_kontaktMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Wes_kontaktCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Wes_kontaktAvgAggregateInputType = {
    id?: true
  }

  export type Wes_kontaktSumAggregateInputType = {
    id?: true
  }

  export type Wes_kontaktMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Wes_kontaktMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Wes_kontaktCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Wes_kontaktAggregateArgs = {
    /**
     * Filter which wes_kontakt to aggregate.
     * 
    **/
    where?: wes_kontaktWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kontakts to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kontaktOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_kontaktWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kontakts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kontakts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_kontakts
    **/
    _count?: true | Wes_kontaktCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_kontaktAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_kontaktSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_kontaktMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_kontaktMaxAggregateInputType
  }

  export type GetWes_kontaktAggregateType<T extends Wes_kontaktAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_kontakt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_kontakt[P]>
      : GetScalarType<T[P], AggregateWes_kontakt[P]>
  }




  export type Wes_kontaktGroupByArgs = {
    where?: wes_kontaktWhereInput
    orderBy?: Enumerable<wes_kontaktOrderByWithAggregationInput>
    by: Array<Wes_kontaktScalarFieldEnum>
    having?: wes_kontaktScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_kontaktCountAggregateInputType | true
    _avg?: Wes_kontaktAvgAggregateInputType
    _sum?: Wes_kontaktSumAggregateInputType
    _min?: Wes_kontaktMinAggregateInputType
    _max?: Wes_kontaktMaxAggregateInputType
  }


  export type Wes_kontaktGroupByOutputType = {
    id: number
    name: string
    _count: Wes_kontaktCountAggregateOutputType | null
    _avg: Wes_kontaktAvgAggregateOutputType | null
    _sum: Wes_kontaktSumAggregateOutputType | null
    _min: Wes_kontaktMinAggregateOutputType | null
    _max: Wes_kontaktMaxAggregateOutputType | null
  }

  type GetWes_kontaktGroupByPayload<T extends Wes_kontaktGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_kontaktGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_kontaktGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_kontaktGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_kontaktGroupByOutputType[P]>
        }
      >
    >


  export type wes_kontaktSelect = {
    id?: boolean
    name?: boolean
  }

  export type wes_kontaktGetPayload<
    S extends boolean | null | undefined | wes_kontaktArgs,
    U = keyof S
      > = S extends true
        ? wes_kontakt
    : S extends undefined
    ? never
    : S extends wes_kontaktArgs | wes_kontaktFindManyArgs
    ?'include' extends U
    ? wes_kontakt 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_kontakt ? wes_kontakt[P] : never
  } 
    : wes_kontakt
  : wes_kontakt


  type wes_kontaktCountArgs = Merge<
    Omit<wes_kontaktFindManyArgs, 'select' | 'include'> & {
      select?: Wes_kontaktCountAggregateInputType | true
    }
  >

  export interface wes_kontaktDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_kontakt that matches the filter.
     * @param {wes_kontaktFindUniqueArgs} args - Arguments to find a Wes_kontakt
     * @example
     * // Get one Wes_kontakt
     * const wes_kontakt = await prisma.wes_kontakt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_kontaktFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_kontaktFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_kontakt'> extends True ? CheckSelect<T, Prisma__wes_kontaktClient<wes_kontakt>, Prisma__wes_kontaktClient<wes_kontaktGetPayload<T>>> : CheckSelect<T, Prisma__wes_kontaktClient<wes_kontakt | null, null>, Prisma__wes_kontaktClient<wes_kontaktGetPayload<T> | null, null>>

    /**
     * Find the first Wes_kontakt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kontaktFindFirstArgs} args - Arguments to find a Wes_kontakt
     * @example
     * // Get one Wes_kontakt
     * const wes_kontakt = await prisma.wes_kontakt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_kontaktFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_kontaktFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_kontakt'> extends True ? CheckSelect<T, Prisma__wes_kontaktClient<wes_kontakt>, Prisma__wes_kontaktClient<wes_kontaktGetPayload<T>>> : CheckSelect<T, Prisma__wes_kontaktClient<wes_kontakt | null, null>, Prisma__wes_kontaktClient<wes_kontaktGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_kontakts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kontaktFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_kontakts
     * const wes_kontakts = await prisma.wes_kontakt.findMany()
     * 
     * // Get first 10 Wes_kontakts
     * const wes_kontakts = await prisma.wes_kontakt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_kontaktWithIdOnly = await prisma.wes_kontakt.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_kontaktFindManyArgs>(
      args?: SelectSubset<T, wes_kontaktFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_kontakt>>, PrismaPromise<Array<wes_kontaktGetPayload<T>>>>

    /**
     * Create a Wes_kontakt.
     * @param {wes_kontaktCreateArgs} args - Arguments to create a Wes_kontakt.
     * @example
     * // Create one Wes_kontakt
     * const Wes_kontakt = await prisma.wes_kontakt.create({
     *   data: {
     *     // ... data to create a Wes_kontakt
     *   }
     * })
     * 
    **/
    create<T extends wes_kontaktCreateArgs>(
      args: SelectSubset<T, wes_kontaktCreateArgs>
    ): CheckSelect<T, Prisma__wes_kontaktClient<wes_kontakt>, Prisma__wes_kontaktClient<wes_kontaktGetPayload<T>>>

    /**
     * Create many Wes_kontakts.
     *     @param {wes_kontaktCreateManyArgs} args - Arguments to create many Wes_kontakts.
     *     @example
     *     // Create many Wes_kontakts
     *     const wes_kontakt = await prisma.wes_kontakt.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_kontaktCreateManyArgs>(
      args?: SelectSubset<T, wes_kontaktCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_kontakt.
     * @param {wes_kontaktDeleteArgs} args - Arguments to delete one Wes_kontakt.
     * @example
     * // Delete one Wes_kontakt
     * const Wes_kontakt = await prisma.wes_kontakt.delete({
     *   where: {
     *     // ... filter to delete one Wes_kontakt
     *   }
     * })
     * 
    **/
    delete<T extends wes_kontaktDeleteArgs>(
      args: SelectSubset<T, wes_kontaktDeleteArgs>
    ): CheckSelect<T, Prisma__wes_kontaktClient<wes_kontakt>, Prisma__wes_kontaktClient<wes_kontaktGetPayload<T>>>

    /**
     * Update one Wes_kontakt.
     * @param {wes_kontaktUpdateArgs} args - Arguments to update one Wes_kontakt.
     * @example
     * // Update one Wes_kontakt
     * const wes_kontakt = await prisma.wes_kontakt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_kontaktUpdateArgs>(
      args: SelectSubset<T, wes_kontaktUpdateArgs>
    ): CheckSelect<T, Prisma__wes_kontaktClient<wes_kontakt>, Prisma__wes_kontaktClient<wes_kontaktGetPayload<T>>>

    /**
     * Delete zero or more Wes_kontakts.
     * @param {wes_kontaktDeleteManyArgs} args - Arguments to filter Wes_kontakts to delete.
     * @example
     * // Delete a few Wes_kontakts
     * const { count } = await prisma.wes_kontakt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_kontaktDeleteManyArgs>(
      args?: SelectSubset<T, wes_kontaktDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_kontakts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kontaktUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_kontakts
     * const wes_kontakt = await prisma.wes_kontakt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_kontaktUpdateManyArgs>(
      args: SelectSubset<T, wes_kontaktUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_kontakt.
     * @param {wes_kontaktUpsertArgs} args - Arguments to update or create a Wes_kontakt.
     * @example
     * // Update or create a Wes_kontakt
     * const wes_kontakt = await prisma.wes_kontakt.upsert({
     *   create: {
     *     // ... data to create a Wes_kontakt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_kontakt we want to update
     *   }
     * })
    **/
    upsert<T extends wes_kontaktUpsertArgs>(
      args: SelectSubset<T, wes_kontaktUpsertArgs>
    ): CheckSelect<T, Prisma__wes_kontaktClient<wes_kontakt>, Prisma__wes_kontaktClient<wes_kontaktGetPayload<T>>>

    /**
     * Find one Wes_kontakt that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_kontaktFindUniqueOrThrowArgs} args - Arguments to find a Wes_kontakt
     * @example
     * // Get one Wes_kontakt
     * const wes_kontakt = await prisma.wes_kontakt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_kontaktFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_kontaktFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_kontaktClient<wes_kontakt>, Prisma__wes_kontaktClient<wes_kontaktGetPayload<T>>>

    /**
     * Find the first Wes_kontakt that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kontaktFindFirstOrThrowArgs} args - Arguments to find a Wes_kontakt
     * @example
     * // Get one Wes_kontakt
     * const wes_kontakt = await prisma.wes_kontakt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_kontaktFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_kontaktFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_kontaktClient<wes_kontakt>, Prisma__wes_kontaktClient<wes_kontaktGetPayload<T>>>

    /**
     * Count the number of Wes_kontakts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kontaktCountArgs} args - Arguments to filter Wes_kontakts to count.
     * @example
     * // Count the number of Wes_kontakts
     * const count = await prisma.wes_kontakt.count({
     *   where: {
     *     // ... the filter for the Wes_kontakts we want to count
     *   }
     * })
    **/
    count<T extends wes_kontaktCountArgs>(
      args?: Subset<T, wes_kontaktCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_kontaktCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_kontakt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_kontaktAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_kontaktAggregateArgs>(args: Subset<T, Wes_kontaktAggregateArgs>): PrismaPromise<GetWes_kontaktAggregateType<T>>

    /**
     * Group by Wes_kontakt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_kontaktGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_kontaktGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_kontaktGroupByArgs['orderBy'] }
        : { orderBy?: Wes_kontaktGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_kontaktGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_kontaktGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_kontakt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_kontaktClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_kontakt base type for findUnique actions
   */
  export type wes_kontaktFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_kontakt
     * 
    **/
    select?: wes_kontaktSelect | null
    /**
     * Filter, which wes_kontakt to fetch.
     * 
    **/
    where: wes_kontaktWhereUniqueInput
  }

  /**
   * wes_kontakt: findUnique
   */
  export interface wes_kontaktFindUniqueArgs extends wes_kontaktFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_kontakt base type for findFirst actions
   */
  export type wes_kontaktFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_kontakt
     * 
    **/
    select?: wes_kontaktSelect | null
    /**
     * Filter, which wes_kontakt to fetch.
     * 
    **/
    where?: wes_kontaktWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kontakts to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kontaktOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_kontakts.
     * 
    **/
    cursor?: wes_kontaktWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kontakts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kontakts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_kontakts.
     * 
    **/
    distinct?: Enumerable<Wes_kontaktScalarFieldEnum>
  }

  /**
   * wes_kontakt: findFirst
   */
  export interface wes_kontaktFindFirstArgs extends wes_kontaktFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_kontakt findMany
   */
  export type wes_kontaktFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt
     * 
    **/
    select?: wes_kontaktSelect | null
    /**
     * Filter, which wes_kontakts to fetch.
     * 
    **/
    where?: wes_kontaktWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kontakts to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kontaktOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_kontakts.
     * 
    **/
    cursor?: wes_kontaktWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kontakts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kontakts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_kontaktScalarFieldEnum>
  }


  /**
   * wes_kontakt create
   */
  export type wes_kontaktCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt
     * 
    **/
    select?: wes_kontaktSelect | null
    /**
     * The data needed to create a wes_kontakt.
     * 
    **/
    data: XOR<wes_kontaktCreateInput, wes_kontaktUncheckedCreateInput>
  }


  /**
   * wes_kontakt createMany
   */
  export type wes_kontaktCreateManyArgs = {
    /**
     * The data used to create many wes_kontakts.
     * 
    **/
    data: Enumerable<wes_kontaktCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_kontakt update
   */
  export type wes_kontaktUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt
     * 
    **/
    select?: wes_kontaktSelect | null
    /**
     * The data needed to update a wes_kontakt.
     * 
    **/
    data: XOR<wes_kontaktUpdateInput, wes_kontaktUncheckedUpdateInput>
    /**
     * Choose, which wes_kontakt to update.
     * 
    **/
    where: wes_kontaktWhereUniqueInput
  }


  /**
   * wes_kontakt updateMany
   */
  export type wes_kontaktUpdateManyArgs = {
    /**
     * The data used to update wes_kontakts.
     * 
    **/
    data: XOR<wes_kontaktUpdateManyMutationInput, wes_kontaktUncheckedUpdateManyInput>
    /**
     * Filter which wes_kontakts to update
     * 
    **/
    where?: wes_kontaktWhereInput
  }


  /**
   * wes_kontakt upsert
   */
  export type wes_kontaktUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt
     * 
    **/
    select?: wes_kontaktSelect | null
    /**
     * The filter to search for the wes_kontakt to update in case it exists.
     * 
    **/
    where: wes_kontaktWhereUniqueInput
    /**
     * In case the wes_kontakt found by the `where` argument doesn't exist, create a new wes_kontakt with this data.
     * 
    **/
    create: XOR<wes_kontaktCreateInput, wes_kontaktUncheckedCreateInput>
    /**
     * In case the wes_kontakt was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_kontaktUpdateInput, wes_kontaktUncheckedUpdateInput>
  }


  /**
   * wes_kontakt delete
   */
  export type wes_kontaktDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt
     * 
    **/
    select?: wes_kontaktSelect | null
    /**
     * Filter which wes_kontakt to delete.
     * 
    **/
    where: wes_kontaktWhereUniqueInput
  }


  /**
   * wes_kontakt deleteMany
   */
  export type wes_kontaktDeleteManyArgs = {
    /**
     * Filter which wes_kontakts to delete
     * 
    **/
    where?: wes_kontaktWhereInput
  }


  /**
   * wes_kontakt: findUniqueOrThrow
   */
  export type wes_kontaktFindUniqueOrThrowArgs = wes_kontaktFindUniqueArgsBase
      

  /**
   * wes_kontakt: findFirstOrThrow
   */
  export type wes_kontaktFindFirstOrThrowArgs = wes_kontaktFindFirstArgsBase
      

  /**
   * wes_kontakt without action
   */
  export type wes_kontaktArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt
     * 
    **/
    select?: wes_kontaktSelect | null
  }



  /**
   * Model wes_kontakt_park
   */


  export type AggregateWes_kontakt_park = {
    _count: Wes_kontakt_parkCountAggregateOutputType | null
    _avg: Wes_kontakt_parkAvgAggregateOutputType | null
    _sum: Wes_kontakt_parkSumAggregateOutputType | null
    _min: Wes_kontakt_parkMinAggregateOutputType | null
    _max: Wes_kontakt_parkMaxAggregateOutputType | null
  }

  export type Wes_kontakt_parkAvgAggregateOutputType = {
    parkid: number | null
    kid: number | null
    kfid: number | null
  }

  export type Wes_kontakt_parkSumAggregateOutputType = {
    parkid: number | null
    kid: number | null
    kfid: number | null
  }

  export type Wes_kontakt_parkMinAggregateOutputType = {
    parkid: number | null
    kid: number | null
    kfid: number | null
  }

  export type Wes_kontakt_parkMaxAggregateOutputType = {
    parkid: number | null
    kid: number | null
    kfid: number | null
  }

  export type Wes_kontakt_parkCountAggregateOutputType = {
    parkid: number
    kid: number
    kfid: number
    _all: number
  }


  export type Wes_kontakt_parkAvgAggregateInputType = {
    parkid?: true
    kid?: true
    kfid?: true
  }

  export type Wes_kontakt_parkSumAggregateInputType = {
    parkid?: true
    kid?: true
    kfid?: true
  }

  export type Wes_kontakt_parkMinAggregateInputType = {
    parkid?: true
    kid?: true
    kfid?: true
  }

  export type Wes_kontakt_parkMaxAggregateInputType = {
    parkid?: true
    kid?: true
    kfid?: true
  }

  export type Wes_kontakt_parkCountAggregateInputType = {
    parkid?: true
    kid?: true
    kfid?: true
    _all?: true
  }

  export type Wes_kontakt_parkAggregateArgs = {
    /**
     * Filter which wes_kontakt_park to aggregate.
     * 
    **/
    where?: wes_kontakt_parkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kontakt_parks to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kontakt_parkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_kontakt_parkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kontakt_parks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kontakt_parks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_kontakt_parks
    **/
    _count?: true | Wes_kontakt_parkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_kontakt_parkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_kontakt_parkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_kontakt_parkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_kontakt_parkMaxAggregateInputType
  }

  export type GetWes_kontakt_parkAggregateType<T extends Wes_kontakt_parkAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_kontakt_park]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_kontakt_park[P]>
      : GetScalarType<T[P], AggregateWes_kontakt_park[P]>
  }




  export type Wes_kontakt_parkGroupByArgs = {
    where?: wes_kontakt_parkWhereInput
    orderBy?: Enumerable<wes_kontakt_parkOrderByWithAggregationInput>
    by: Array<Wes_kontakt_parkScalarFieldEnum>
    having?: wes_kontakt_parkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_kontakt_parkCountAggregateInputType | true
    _avg?: Wes_kontakt_parkAvgAggregateInputType
    _sum?: Wes_kontakt_parkSumAggregateInputType
    _min?: Wes_kontakt_parkMinAggregateInputType
    _max?: Wes_kontakt_parkMaxAggregateInputType
  }


  export type Wes_kontakt_parkGroupByOutputType = {
    parkid: number
    kid: number
    kfid: number
    _count: Wes_kontakt_parkCountAggregateOutputType | null
    _avg: Wes_kontakt_parkAvgAggregateOutputType | null
    _sum: Wes_kontakt_parkSumAggregateOutputType | null
    _min: Wes_kontakt_parkMinAggregateOutputType | null
    _max: Wes_kontakt_parkMaxAggregateOutputType | null
  }

  type GetWes_kontakt_parkGroupByPayload<T extends Wes_kontakt_parkGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_kontakt_parkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_kontakt_parkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_kontakt_parkGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_kontakt_parkGroupByOutputType[P]>
        }
      >
    >


  export type wes_kontakt_parkSelect = {
    parkid?: boolean
    kid?: boolean
    kfid?: boolean
  }

  export type wes_kontakt_parkGetPayload<
    S extends boolean | null | undefined | wes_kontakt_parkArgs,
    U = keyof S
      > = S extends true
        ? wes_kontakt_park
    : S extends undefined
    ? never
    : S extends wes_kontakt_parkArgs | wes_kontakt_parkFindManyArgs
    ?'include' extends U
    ? wes_kontakt_park 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_kontakt_park ? wes_kontakt_park[P] : never
  } 
    : wes_kontakt_park
  : wes_kontakt_park


  type wes_kontakt_parkCountArgs = Merge<
    Omit<wes_kontakt_parkFindManyArgs, 'select' | 'include'> & {
      select?: Wes_kontakt_parkCountAggregateInputType | true
    }
  >

  export interface wes_kontakt_parkDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_kontakt_park that matches the filter.
     * @param {wes_kontakt_parkFindUniqueArgs} args - Arguments to find a Wes_kontakt_park
     * @example
     * // Get one Wes_kontakt_park
     * const wes_kontakt_park = await prisma.wes_kontakt_park.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_kontakt_parkFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_kontakt_parkFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_kontakt_park'> extends True ? CheckSelect<T, Prisma__wes_kontakt_parkClient<wes_kontakt_park>, Prisma__wes_kontakt_parkClient<wes_kontakt_parkGetPayload<T>>> : CheckSelect<T, Prisma__wes_kontakt_parkClient<wes_kontakt_park | null, null>, Prisma__wes_kontakt_parkClient<wes_kontakt_parkGetPayload<T> | null, null>>

    /**
     * Find the first Wes_kontakt_park that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kontakt_parkFindFirstArgs} args - Arguments to find a Wes_kontakt_park
     * @example
     * // Get one Wes_kontakt_park
     * const wes_kontakt_park = await prisma.wes_kontakt_park.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_kontakt_parkFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_kontakt_parkFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_kontakt_park'> extends True ? CheckSelect<T, Prisma__wes_kontakt_parkClient<wes_kontakt_park>, Prisma__wes_kontakt_parkClient<wes_kontakt_parkGetPayload<T>>> : CheckSelect<T, Prisma__wes_kontakt_parkClient<wes_kontakt_park | null, null>, Prisma__wes_kontakt_parkClient<wes_kontakt_parkGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_kontakt_parks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kontakt_parkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_kontakt_parks
     * const wes_kontakt_parks = await prisma.wes_kontakt_park.findMany()
     * 
     * // Get first 10 Wes_kontakt_parks
     * const wes_kontakt_parks = await prisma.wes_kontakt_park.findMany({ take: 10 })
     * 
     * // Only select the `parkid`
     * const wes_kontakt_parkWithParkidOnly = await prisma.wes_kontakt_park.findMany({ select: { parkid: true } })
     * 
    **/
    findMany<T extends wes_kontakt_parkFindManyArgs>(
      args?: SelectSubset<T, wes_kontakt_parkFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_kontakt_park>>, PrismaPromise<Array<wes_kontakt_parkGetPayload<T>>>>

    /**
     * Create a Wes_kontakt_park.
     * @param {wes_kontakt_parkCreateArgs} args - Arguments to create a Wes_kontakt_park.
     * @example
     * // Create one Wes_kontakt_park
     * const Wes_kontakt_park = await prisma.wes_kontakt_park.create({
     *   data: {
     *     // ... data to create a Wes_kontakt_park
     *   }
     * })
     * 
    **/
    create<T extends wes_kontakt_parkCreateArgs>(
      args: SelectSubset<T, wes_kontakt_parkCreateArgs>
    ): CheckSelect<T, Prisma__wes_kontakt_parkClient<wes_kontakt_park>, Prisma__wes_kontakt_parkClient<wes_kontakt_parkGetPayload<T>>>

    /**
     * Create many Wes_kontakt_parks.
     *     @param {wes_kontakt_parkCreateManyArgs} args - Arguments to create many Wes_kontakt_parks.
     *     @example
     *     // Create many Wes_kontakt_parks
     *     const wes_kontakt_park = await prisma.wes_kontakt_park.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_kontakt_parkCreateManyArgs>(
      args?: SelectSubset<T, wes_kontakt_parkCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_kontakt_park.
     * @param {wes_kontakt_parkDeleteArgs} args - Arguments to delete one Wes_kontakt_park.
     * @example
     * // Delete one Wes_kontakt_park
     * const Wes_kontakt_park = await prisma.wes_kontakt_park.delete({
     *   where: {
     *     // ... filter to delete one Wes_kontakt_park
     *   }
     * })
     * 
    **/
    delete<T extends wes_kontakt_parkDeleteArgs>(
      args: SelectSubset<T, wes_kontakt_parkDeleteArgs>
    ): CheckSelect<T, Prisma__wes_kontakt_parkClient<wes_kontakt_park>, Prisma__wes_kontakt_parkClient<wes_kontakt_parkGetPayload<T>>>

    /**
     * Update one Wes_kontakt_park.
     * @param {wes_kontakt_parkUpdateArgs} args - Arguments to update one Wes_kontakt_park.
     * @example
     * // Update one Wes_kontakt_park
     * const wes_kontakt_park = await prisma.wes_kontakt_park.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_kontakt_parkUpdateArgs>(
      args: SelectSubset<T, wes_kontakt_parkUpdateArgs>
    ): CheckSelect<T, Prisma__wes_kontakt_parkClient<wes_kontakt_park>, Prisma__wes_kontakt_parkClient<wes_kontakt_parkGetPayload<T>>>

    /**
     * Delete zero or more Wes_kontakt_parks.
     * @param {wes_kontakt_parkDeleteManyArgs} args - Arguments to filter Wes_kontakt_parks to delete.
     * @example
     * // Delete a few Wes_kontakt_parks
     * const { count } = await prisma.wes_kontakt_park.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_kontakt_parkDeleteManyArgs>(
      args?: SelectSubset<T, wes_kontakt_parkDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_kontakt_parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kontakt_parkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_kontakt_parks
     * const wes_kontakt_park = await prisma.wes_kontakt_park.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_kontakt_parkUpdateManyArgs>(
      args: SelectSubset<T, wes_kontakt_parkUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_kontakt_park.
     * @param {wes_kontakt_parkUpsertArgs} args - Arguments to update or create a Wes_kontakt_park.
     * @example
     * // Update or create a Wes_kontakt_park
     * const wes_kontakt_park = await prisma.wes_kontakt_park.upsert({
     *   create: {
     *     // ... data to create a Wes_kontakt_park
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_kontakt_park we want to update
     *   }
     * })
    **/
    upsert<T extends wes_kontakt_parkUpsertArgs>(
      args: SelectSubset<T, wes_kontakt_parkUpsertArgs>
    ): CheckSelect<T, Prisma__wes_kontakt_parkClient<wes_kontakt_park>, Prisma__wes_kontakt_parkClient<wes_kontakt_parkGetPayload<T>>>

    /**
     * Find one Wes_kontakt_park that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_kontakt_parkFindUniqueOrThrowArgs} args - Arguments to find a Wes_kontakt_park
     * @example
     * // Get one Wes_kontakt_park
     * const wes_kontakt_park = await prisma.wes_kontakt_park.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_kontakt_parkFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_kontakt_parkFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_kontakt_parkClient<wes_kontakt_park>, Prisma__wes_kontakt_parkClient<wes_kontakt_parkGetPayload<T>>>

    /**
     * Find the first Wes_kontakt_park that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kontakt_parkFindFirstOrThrowArgs} args - Arguments to find a Wes_kontakt_park
     * @example
     * // Get one Wes_kontakt_park
     * const wes_kontakt_park = await prisma.wes_kontakt_park.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_kontakt_parkFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_kontakt_parkFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_kontakt_parkClient<wes_kontakt_park>, Prisma__wes_kontakt_parkClient<wes_kontakt_parkGetPayload<T>>>

    /**
     * Count the number of Wes_kontakt_parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_kontakt_parkCountArgs} args - Arguments to filter Wes_kontakt_parks to count.
     * @example
     * // Count the number of Wes_kontakt_parks
     * const count = await prisma.wes_kontakt_park.count({
     *   where: {
     *     // ... the filter for the Wes_kontakt_parks we want to count
     *   }
     * })
    **/
    count<T extends wes_kontakt_parkCountArgs>(
      args?: Subset<T, wes_kontakt_parkCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_kontakt_parkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_kontakt_park.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_kontakt_parkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_kontakt_parkAggregateArgs>(args: Subset<T, Wes_kontakt_parkAggregateArgs>): PrismaPromise<GetWes_kontakt_parkAggregateType<T>>

    /**
     * Group by Wes_kontakt_park.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_kontakt_parkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_kontakt_parkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_kontakt_parkGroupByArgs['orderBy'] }
        : { orderBy?: Wes_kontakt_parkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_kontakt_parkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_kontakt_parkGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_kontakt_park.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_kontakt_parkClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_kontakt_park base type for findUnique actions
   */
  export type wes_kontakt_parkFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_kontakt_park
     * 
    **/
    select?: wes_kontakt_parkSelect | null
    /**
     * Filter, which wes_kontakt_park to fetch.
     * 
    **/
    where: wes_kontakt_parkWhereUniqueInput
  }

  /**
   * wes_kontakt_park: findUnique
   */
  export interface wes_kontakt_parkFindUniqueArgs extends wes_kontakt_parkFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_kontakt_park base type for findFirst actions
   */
  export type wes_kontakt_parkFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_kontakt_park
     * 
    **/
    select?: wes_kontakt_parkSelect | null
    /**
     * Filter, which wes_kontakt_park to fetch.
     * 
    **/
    where?: wes_kontakt_parkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kontakt_parks to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kontakt_parkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_kontakt_parks.
     * 
    **/
    cursor?: wes_kontakt_parkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kontakt_parks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kontakt_parks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_kontakt_parks.
     * 
    **/
    distinct?: Enumerable<Wes_kontakt_parkScalarFieldEnum>
  }

  /**
   * wes_kontakt_park: findFirst
   */
  export interface wes_kontakt_parkFindFirstArgs extends wes_kontakt_parkFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_kontakt_park findMany
   */
  export type wes_kontakt_parkFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt_park
     * 
    **/
    select?: wes_kontakt_parkSelect | null
    /**
     * Filter, which wes_kontakt_parks to fetch.
     * 
    **/
    where?: wes_kontakt_parkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_kontakt_parks to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_kontakt_parkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_kontakt_parks.
     * 
    **/
    cursor?: wes_kontakt_parkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_kontakt_parks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_kontakt_parks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_kontakt_parkScalarFieldEnum>
  }


  /**
   * wes_kontakt_park create
   */
  export type wes_kontakt_parkCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt_park
     * 
    **/
    select?: wes_kontakt_parkSelect | null
    /**
     * The data needed to create a wes_kontakt_park.
     * 
    **/
    data: XOR<wes_kontakt_parkCreateInput, wes_kontakt_parkUncheckedCreateInput>
  }


  /**
   * wes_kontakt_park createMany
   */
  export type wes_kontakt_parkCreateManyArgs = {
    /**
     * The data used to create many wes_kontakt_parks.
     * 
    **/
    data: Enumerable<wes_kontakt_parkCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_kontakt_park update
   */
  export type wes_kontakt_parkUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt_park
     * 
    **/
    select?: wes_kontakt_parkSelect | null
    /**
     * The data needed to update a wes_kontakt_park.
     * 
    **/
    data: XOR<wes_kontakt_parkUpdateInput, wes_kontakt_parkUncheckedUpdateInput>
    /**
     * Choose, which wes_kontakt_park to update.
     * 
    **/
    where: wes_kontakt_parkWhereUniqueInput
  }


  /**
   * wes_kontakt_park updateMany
   */
  export type wes_kontakt_parkUpdateManyArgs = {
    /**
     * The data used to update wes_kontakt_parks.
     * 
    **/
    data: XOR<wes_kontakt_parkUpdateManyMutationInput, wes_kontakt_parkUncheckedUpdateManyInput>
    /**
     * Filter which wes_kontakt_parks to update
     * 
    **/
    where?: wes_kontakt_parkWhereInput
  }


  /**
   * wes_kontakt_park upsert
   */
  export type wes_kontakt_parkUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt_park
     * 
    **/
    select?: wes_kontakt_parkSelect | null
    /**
     * The filter to search for the wes_kontakt_park to update in case it exists.
     * 
    **/
    where: wes_kontakt_parkWhereUniqueInput
    /**
     * In case the wes_kontakt_park found by the `where` argument doesn't exist, create a new wes_kontakt_park with this data.
     * 
    **/
    create: XOR<wes_kontakt_parkCreateInput, wes_kontakt_parkUncheckedCreateInput>
    /**
     * In case the wes_kontakt_park was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_kontakt_parkUpdateInput, wes_kontakt_parkUncheckedUpdateInput>
  }


  /**
   * wes_kontakt_park delete
   */
  export type wes_kontakt_parkDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt_park
     * 
    **/
    select?: wes_kontakt_parkSelect | null
    /**
     * Filter which wes_kontakt_park to delete.
     * 
    **/
    where: wes_kontakt_parkWhereUniqueInput
  }


  /**
   * wes_kontakt_park deleteMany
   */
  export type wes_kontakt_parkDeleteManyArgs = {
    /**
     * Filter which wes_kontakt_parks to delete
     * 
    **/
    where?: wes_kontakt_parkWhereInput
  }


  /**
   * wes_kontakt_park: findUniqueOrThrow
   */
  export type wes_kontakt_parkFindUniqueOrThrowArgs = wes_kontakt_parkFindUniqueArgsBase
      

  /**
   * wes_kontakt_park: findFirstOrThrow
   */
  export type wes_kontakt_parkFindFirstOrThrowArgs = wes_kontakt_parkFindFirstArgsBase
      

  /**
   * wes_kontakt_park without action
   */
  export type wes_kontakt_parkArgs = {
    /**
     * Select specific fields to fetch from the wes_kontakt_park
     * 
    **/
    select?: wes_kontakt_parkSelect | null
  }



  /**
   * Model wes_park
   */


  export type AggregateWes_park = {
    _count: Wes_parkCountAggregateOutputType | null
    _avg: Wes_parkAvgAggregateOutputType | null
    _sum: Wes_parkSumAggregateOutputType | null
    _min: Wes_parkMinAggregateOutputType | null
    _max: Wes_parkMaxAggregateOutputType | null
  }

  export type Wes_parkAvgAggregateOutputType = {
    id: number | null
    ischild: number | null
    istype: number | null
    isuser: number | null
  }

  export type Wes_parkSumAggregateOutputType = {
    id: number | null
    ischild: number | null
    istype: number | null
    isuser: number | null
  }

  export type Wes_parkMinAggregateOutputType = {
    id: number | null
    parkname: string | null
    ischild: number | null
    istype: number | null
    isuser: number | null
  }

  export type Wes_parkMaxAggregateOutputType = {
    id: number | null
    parkname: string | null
    ischild: number | null
    istype: number | null
    isuser: number | null
  }

  export type Wes_parkCountAggregateOutputType = {
    id: number
    parkname: number
    ischild: number
    istype: number
    isuser: number
    _all: number
  }


  export type Wes_parkAvgAggregateInputType = {
    id?: true
    ischild?: true
    istype?: true
    isuser?: true
  }

  export type Wes_parkSumAggregateInputType = {
    id?: true
    ischild?: true
    istype?: true
    isuser?: true
  }

  export type Wes_parkMinAggregateInputType = {
    id?: true
    parkname?: true
    ischild?: true
    istype?: true
    isuser?: true
  }

  export type Wes_parkMaxAggregateInputType = {
    id?: true
    parkname?: true
    ischild?: true
    istype?: true
    isuser?: true
  }

  export type Wes_parkCountAggregateInputType = {
    id?: true
    parkname?: true
    ischild?: true
    istype?: true
    isuser?: true
    _all?: true
  }

  export type Wes_parkAggregateArgs = {
    /**
     * Filter which wes_park to aggregate.
     * 
    **/
    where?: wes_parkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_parks to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_parkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_parkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_parks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_parks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_parks
    **/
    _count?: true | Wes_parkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_parkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_parkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_parkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_parkMaxAggregateInputType
  }

  export type GetWes_parkAggregateType<T extends Wes_parkAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_park]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_park[P]>
      : GetScalarType<T[P], AggregateWes_park[P]>
  }




  export type Wes_parkGroupByArgs = {
    where?: wes_parkWhereInput
    orderBy?: Enumerable<wes_parkOrderByWithAggregationInput>
    by: Array<Wes_parkScalarFieldEnum>
    having?: wes_parkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_parkCountAggregateInputType | true
    _avg?: Wes_parkAvgAggregateInputType
    _sum?: Wes_parkSumAggregateInputType
    _min?: Wes_parkMinAggregateInputType
    _max?: Wes_parkMaxAggregateInputType
  }


  export type Wes_parkGroupByOutputType = {
    id: number
    parkname: string | null
    ischild: number | null
    istype: number
    isuser: number | null
    _count: Wes_parkCountAggregateOutputType | null
    _avg: Wes_parkAvgAggregateOutputType | null
    _sum: Wes_parkSumAggregateOutputType | null
    _min: Wes_parkMinAggregateOutputType | null
    _max: Wes_parkMaxAggregateOutputType | null
  }

  type GetWes_parkGroupByPayload<T extends Wes_parkGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_parkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_parkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_parkGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_parkGroupByOutputType[P]>
        }
      >
    >


  export type wes_parkSelect = {
    id?: boolean
    parkname?: boolean
    ischild?: boolean
    istype?: boolean
    isuser?: boolean
  }

  export type wes_parkGetPayload<
    S extends boolean | null | undefined | wes_parkArgs,
    U = keyof S
      > = S extends true
        ? wes_park
    : S extends undefined
    ? never
    : S extends wes_parkArgs | wes_parkFindManyArgs
    ?'include' extends U
    ? wes_park 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_park ? wes_park[P] : never
  } 
    : wes_park
  : wes_park


  type wes_parkCountArgs = Merge<
    Omit<wes_parkFindManyArgs, 'select' | 'include'> & {
      select?: Wes_parkCountAggregateInputType | true
    }
  >

  export interface wes_parkDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_park that matches the filter.
     * @param {wes_parkFindUniqueArgs} args - Arguments to find a Wes_park
     * @example
     * // Get one Wes_park
     * const wes_park = await prisma.wes_park.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_parkFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_parkFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_park'> extends True ? CheckSelect<T, Prisma__wes_parkClient<wes_park>, Prisma__wes_parkClient<wes_parkGetPayload<T>>> : CheckSelect<T, Prisma__wes_parkClient<wes_park | null, null>, Prisma__wes_parkClient<wes_parkGetPayload<T> | null, null>>

    /**
     * Find the first Wes_park that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_parkFindFirstArgs} args - Arguments to find a Wes_park
     * @example
     * // Get one Wes_park
     * const wes_park = await prisma.wes_park.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_parkFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_parkFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_park'> extends True ? CheckSelect<T, Prisma__wes_parkClient<wes_park>, Prisma__wes_parkClient<wes_parkGetPayload<T>>> : CheckSelect<T, Prisma__wes_parkClient<wes_park | null, null>, Prisma__wes_parkClient<wes_parkGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_parks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_parkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_parks
     * const wes_parks = await prisma.wes_park.findMany()
     * 
     * // Get first 10 Wes_parks
     * const wes_parks = await prisma.wes_park.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_parkWithIdOnly = await prisma.wes_park.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_parkFindManyArgs>(
      args?: SelectSubset<T, wes_parkFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_park>>, PrismaPromise<Array<wes_parkGetPayload<T>>>>

    /**
     * Create a Wes_park.
     * @param {wes_parkCreateArgs} args - Arguments to create a Wes_park.
     * @example
     * // Create one Wes_park
     * const Wes_park = await prisma.wes_park.create({
     *   data: {
     *     // ... data to create a Wes_park
     *   }
     * })
     * 
    **/
    create<T extends wes_parkCreateArgs>(
      args: SelectSubset<T, wes_parkCreateArgs>
    ): CheckSelect<T, Prisma__wes_parkClient<wes_park>, Prisma__wes_parkClient<wes_parkGetPayload<T>>>

    /**
     * Create many Wes_parks.
     *     @param {wes_parkCreateManyArgs} args - Arguments to create many Wes_parks.
     *     @example
     *     // Create many Wes_parks
     *     const wes_park = await prisma.wes_park.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_parkCreateManyArgs>(
      args?: SelectSubset<T, wes_parkCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_park.
     * @param {wes_parkDeleteArgs} args - Arguments to delete one Wes_park.
     * @example
     * // Delete one Wes_park
     * const Wes_park = await prisma.wes_park.delete({
     *   where: {
     *     // ... filter to delete one Wes_park
     *   }
     * })
     * 
    **/
    delete<T extends wes_parkDeleteArgs>(
      args: SelectSubset<T, wes_parkDeleteArgs>
    ): CheckSelect<T, Prisma__wes_parkClient<wes_park>, Prisma__wes_parkClient<wes_parkGetPayload<T>>>

    /**
     * Update one Wes_park.
     * @param {wes_parkUpdateArgs} args - Arguments to update one Wes_park.
     * @example
     * // Update one Wes_park
     * const wes_park = await prisma.wes_park.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_parkUpdateArgs>(
      args: SelectSubset<T, wes_parkUpdateArgs>
    ): CheckSelect<T, Prisma__wes_parkClient<wes_park>, Prisma__wes_parkClient<wes_parkGetPayload<T>>>

    /**
     * Delete zero or more Wes_parks.
     * @param {wes_parkDeleteManyArgs} args - Arguments to filter Wes_parks to delete.
     * @example
     * // Delete a few Wes_parks
     * const { count } = await prisma.wes_park.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_parkDeleteManyArgs>(
      args?: SelectSubset<T, wes_parkDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_parkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_parks
     * const wes_park = await prisma.wes_park.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_parkUpdateManyArgs>(
      args: SelectSubset<T, wes_parkUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_park.
     * @param {wes_parkUpsertArgs} args - Arguments to update or create a Wes_park.
     * @example
     * // Update or create a Wes_park
     * const wes_park = await prisma.wes_park.upsert({
     *   create: {
     *     // ... data to create a Wes_park
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_park we want to update
     *   }
     * })
    **/
    upsert<T extends wes_parkUpsertArgs>(
      args: SelectSubset<T, wes_parkUpsertArgs>
    ): CheckSelect<T, Prisma__wes_parkClient<wes_park>, Prisma__wes_parkClient<wes_parkGetPayload<T>>>

    /**
     * Find one Wes_park that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_parkFindUniqueOrThrowArgs} args - Arguments to find a Wes_park
     * @example
     * // Get one Wes_park
     * const wes_park = await prisma.wes_park.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_parkFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_parkFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_parkClient<wes_park>, Prisma__wes_parkClient<wes_parkGetPayload<T>>>

    /**
     * Find the first Wes_park that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_parkFindFirstOrThrowArgs} args - Arguments to find a Wes_park
     * @example
     * // Get one Wes_park
     * const wes_park = await prisma.wes_park.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_parkFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_parkFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_parkClient<wes_park>, Prisma__wes_parkClient<wes_parkGetPayload<T>>>

    /**
     * Count the number of Wes_parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_parkCountArgs} args - Arguments to filter Wes_parks to count.
     * @example
     * // Count the number of Wes_parks
     * const count = await prisma.wes_park.count({
     *   where: {
     *     // ... the filter for the Wes_parks we want to count
     *   }
     * })
    **/
    count<T extends wes_parkCountArgs>(
      args?: Subset<T, wes_parkCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_parkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_park.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_parkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_parkAggregateArgs>(args: Subset<T, Wes_parkAggregateArgs>): PrismaPromise<GetWes_parkAggregateType<T>>

    /**
     * Group by Wes_park.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_parkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_parkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_parkGroupByArgs['orderBy'] }
        : { orderBy?: Wes_parkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_parkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_parkGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_park.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_parkClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_park base type for findUnique actions
   */
  export type wes_parkFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_park
     * 
    **/
    select?: wes_parkSelect | null
    /**
     * Filter, which wes_park to fetch.
     * 
    **/
    where: wes_parkWhereUniqueInput
  }

  /**
   * wes_park: findUnique
   */
  export interface wes_parkFindUniqueArgs extends wes_parkFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_park base type for findFirst actions
   */
  export type wes_parkFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_park
     * 
    **/
    select?: wes_parkSelect | null
    /**
     * Filter, which wes_park to fetch.
     * 
    **/
    where?: wes_parkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_parks to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_parkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_parks.
     * 
    **/
    cursor?: wes_parkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_parks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_parks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_parks.
     * 
    **/
    distinct?: Enumerable<Wes_parkScalarFieldEnum>
  }

  /**
   * wes_park: findFirst
   */
  export interface wes_parkFindFirstArgs extends wes_parkFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_park findMany
   */
  export type wes_parkFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_park
     * 
    **/
    select?: wes_parkSelect | null
    /**
     * Filter, which wes_parks to fetch.
     * 
    **/
    where?: wes_parkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_parks to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_parkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_parks.
     * 
    **/
    cursor?: wes_parkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_parks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_parks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_parkScalarFieldEnum>
  }


  /**
   * wes_park create
   */
  export type wes_parkCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_park
     * 
    **/
    select?: wes_parkSelect | null
    /**
     * The data needed to create a wes_park.
     * 
    **/
    data: XOR<wes_parkCreateInput, wes_parkUncheckedCreateInput>
  }


  /**
   * wes_park createMany
   */
  export type wes_parkCreateManyArgs = {
    /**
     * The data used to create many wes_parks.
     * 
    **/
    data: Enumerable<wes_parkCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_park update
   */
  export type wes_parkUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_park
     * 
    **/
    select?: wes_parkSelect | null
    /**
     * The data needed to update a wes_park.
     * 
    **/
    data: XOR<wes_parkUpdateInput, wes_parkUncheckedUpdateInput>
    /**
     * Choose, which wes_park to update.
     * 
    **/
    where: wes_parkWhereUniqueInput
  }


  /**
   * wes_park updateMany
   */
  export type wes_parkUpdateManyArgs = {
    /**
     * The data used to update wes_parks.
     * 
    **/
    data: XOR<wes_parkUpdateManyMutationInput, wes_parkUncheckedUpdateManyInput>
    /**
     * Filter which wes_parks to update
     * 
    **/
    where?: wes_parkWhereInput
  }


  /**
   * wes_park upsert
   */
  export type wes_parkUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_park
     * 
    **/
    select?: wes_parkSelect | null
    /**
     * The filter to search for the wes_park to update in case it exists.
     * 
    **/
    where: wes_parkWhereUniqueInput
    /**
     * In case the wes_park found by the `where` argument doesn't exist, create a new wes_park with this data.
     * 
    **/
    create: XOR<wes_parkCreateInput, wes_parkUncheckedCreateInput>
    /**
     * In case the wes_park was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_parkUpdateInput, wes_parkUncheckedUpdateInput>
  }


  /**
   * wes_park delete
   */
  export type wes_parkDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_park
     * 
    **/
    select?: wes_parkSelect | null
    /**
     * Filter which wes_park to delete.
     * 
    **/
    where: wes_parkWhereUniqueInput
  }


  /**
   * wes_park deleteMany
   */
  export type wes_parkDeleteManyArgs = {
    /**
     * Filter which wes_parks to delete
     * 
    **/
    where?: wes_parkWhereInput
  }


  /**
   * wes_park: findUniqueOrThrow
   */
  export type wes_parkFindUniqueOrThrowArgs = wes_parkFindUniqueArgsBase
      

  /**
   * wes_park: findFirstOrThrow
   */
  export type wes_parkFindFirstOrThrowArgs = wes_parkFindFirstArgsBase
      

  /**
   * wes_park without action
   */
  export type wes_parkArgs = {
    /**
     * Select specific fields to fetch from the wes_park
     * 
    **/
    select?: wes_parkSelect | null
  }



  /**
   * Model wes_status
   */


  export type AggregateWes_status = {
    _count: Wes_statusCountAggregateOutputType | null
    _avg: Wes_statusAvgAggregateOutputType | null
    _sum: Wes_statusSumAggregateOutputType | null
    _min: Wes_statusMinAggregateOutputType | null
    _max: Wes_statusMaxAggregateOutputType | null
  }

  export type Wes_statusAvgAggregateOutputType = {
    id: number | null
    prio: number | null
  }

  export type Wes_statusSumAggregateOutputType = {
    id: number | null
    prio: number | null
  }

  export type Wes_statusMinAggregateOutputType = {
    id: number | null
    status: string | null
    sort: string | null
    prio: number | null
  }

  export type Wes_statusMaxAggregateOutputType = {
    id: number | null
    status: string | null
    sort: string | null
    prio: number | null
  }

  export type Wes_statusCountAggregateOutputType = {
    id: number
    status: number
    sort: number
    prio: number
    _all: number
  }


  export type Wes_statusAvgAggregateInputType = {
    id?: true
    prio?: true
  }

  export type Wes_statusSumAggregateInputType = {
    id?: true
    prio?: true
  }

  export type Wes_statusMinAggregateInputType = {
    id?: true
    status?: true
    sort?: true
    prio?: true
  }

  export type Wes_statusMaxAggregateInputType = {
    id?: true
    status?: true
    sort?: true
    prio?: true
  }

  export type Wes_statusCountAggregateInputType = {
    id?: true
    status?: true
    sort?: true
    prio?: true
    _all?: true
  }

  export type Wes_statusAggregateArgs = {
    /**
     * Filter which wes_status to aggregate.
     * 
    **/
    where?: wes_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_statuses to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_statusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_statuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_statuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_statuses
    **/
    _count?: true | Wes_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_statusMaxAggregateInputType
  }

  export type GetWes_statusAggregateType<T extends Wes_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_status[P]>
      : GetScalarType<T[P], AggregateWes_status[P]>
  }




  export type Wes_statusGroupByArgs = {
    where?: wes_statusWhereInput
    orderBy?: Enumerable<wes_statusOrderByWithAggregationInput>
    by: Array<Wes_statusScalarFieldEnum>
    having?: wes_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_statusCountAggregateInputType | true
    _avg?: Wes_statusAvgAggregateInputType
    _sum?: Wes_statusSumAggregateInputType
    _min?: Wes_statusMinAggregateInputType
    _max?: Wes_statusMaxAggregateInputType
  }


  export type Wes_statusGroupByOutputType = {
    id: number
    status: string
    sort: string
    prio: number
    _count: Wes_statusCountAggregateOutputType | null
    _avg: Wes_statusAvgAggregateOutputType | null
    _sum: Wes_statusSumAggregateOutputType | null
    _min: Wes_statusMinAggregateOutputType | null
    _max: Wes_statusMaxAggregateOutputType | null
  }

  type GetWes_statusGroupByPayload<T extends Wes_statusGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_statusGroupByOutputType[P]>
        }
      >
    >


  export type wes_statusSelect = {
    id?: boolean
    status?: boolean
    sort?: boolean
    prio?: boolean
  }

  export type wes_statusGetPayload<
    S extends boolean | null | undefined | wes_statusArgs,
    U = keyof S
      > = S extends true
        ? wes_status
    : S extends undefined
    ? never
    : S extends wes_statusArgs | wes_statusFindManyArgs
    ?'include' extends U
    ? wes_status 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_status ? wes_status[P] : never
  } 
    : wes_status
  : wes_status


  type wes_statusCountArgs = Merge<
    Omit<wes_statusFindManyArgs, 'select' | 'include'> & {
      select?: Wes_statusCountAggregateInputType | true
    }
  >

  export interface wes_statusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_status that matches the filter.
     * @param {wes_statusFindUniqueArgs} args - Arguments to find a Wes_status
     * @example
     * // Get one Wes_status
     * const wes_status = await prisma.wes_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_statusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_statusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_status'> extends True ? CheckSelect<T, Prisma__wes_statusClient<wes_status>, Prisma__wes_statusClient<wes_statusGetPayload<T>>> : CheckSelect<T, Prisma__wes_statusClient<wes_status | null, null>, Prisma__wes_statusClient<wes_statusGetPayload<T> | null, null>>

    /**
     * Find the first Wes_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_statusFindFirstArgs} args - Arguments to find a Wes_status
     * @example
     * // Get one Wes_status
     * const wes_status = await prisma.wes_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_statusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_statusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_status'> extends True ? CheckSelect<T, Prisma__wes_statusClient<wes_status>, Prisma__wes_statusClient<wes_statusGetPayload<T>>> : CheckSelect<T, Prisma__wes_statusClient<wes_status | null, null>, Prisma__wes_statusClient<wes_statusGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_statusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_statuses
     * const wes_statuses = await prisma.wes_status.findMany()
     * 
     * // Get first 10 Wes_statuses
     * const wes_statuses = await prisma.wes_status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_statusWithIdOnly = await prisma.wes_status.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_statusFindManyArgs>(
      args?: SelectSubset<T, wes_statusFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_status>>, PrismaPromise<Array<wes_statusGetPayload<T>>>>

    /**
     * Create a Wes_status.
     * @param {wes_statusCreateArgs} args - Arguments to create a Wes_status.
     * @example
     * // Create one Wes_status
     * const Wes_status = await prisma.wes_status.create({
     *   data: {
     *     // ... data to create a Wes_status
     *   }
     * })
     * 
    **/
    create<T extends wes_statusCreateArgs>(
      args: SelectSubset<T, wes_statusCreateArgs>
    ): CheckSelect<T, Prisma__wes_statusClient<wes_status>, Prisma__wes_statusClient<wes_statusGetPayload<T>>>

    /**
     * Create many Wes_statuses.
     *     @param {wes_statusCreateManyArgs} args - Arguments to create many Wes_statuses.
     *     @example
     *     // Create many Wes_statuses
     *     const wes_status = await prisma.wes_status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_statusCreateManyArgs>(
      args?: SelectSubset<T, wes_statusCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_status.
     * @param {wes_statusDeleteArgs} args - Arguments to delete one Wes_status.
     * @example
     * // Delete one Wes_status
     * const Wes_status = await prisma.wes_status.delete({
     *   where: {
     *     // ... filter to delete one Wes_status
     *   }
     * })
     * 
    **/
    delete<T extends wes_statusDeleteArgs>(
      args: SelectSubset<T, wes_statusDeleteArgs>
    ): CheckSelect<T, Prisma__wes_statusClient<wes_status>, Prisma__wes_statusClient<wes_statusGetPayload<T>>>

    /**
     * Update one Wes_status.
     * @param {wes_statusUpdateArgs} args - Arguments to update one Wes_status.
     * @example
     * // Update one Wes_status
     * const wes_status = await prisma.wes_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_statusUpdateArgs>(
      args: SelectSubset<T, wes_statusUpdateArgs>
    ): CheckSelect<T, Prisma__wes_statusClient<wes_status>, Prisma__wes_statusClient<wes_statusGetPayload<T>>>

    /**
     * Delete zero or more Wes_statuses.
     * @param {wes_statusDeleteManyArgs} args - Arguments to filter Wes_statuses to delete.
     * @example
     * // Delete a few Wes_statuses
     * const { count } = await prisma.wes_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_statusDeleteManyArgs>(
      args?: SelectSubset<T, wes_statusDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_statuses
     * const wes_status = await prisma.wes_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_statusUpdateManyArgs>(
      args: SelectSubset<T, wes_statusUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_status.
     * @param {wes_statusUpsertArgs} args - Arguments to update or create a Wes_status.
     * @example
     * // Update or create a Wes_status
     * const wes_status = await prisma.wes_status.upsert({
     *   create: {
     *     // ... data to create a Wes_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_status we want to update
     *   }
     * })
    **/
    upsert<T extends wes_statusUpsertArgs>(
      args: SelectSubset<T, wes_statusUpsertArgs>
    ): CheckSelect<T, Prisma__wes_statusClient<wes_status>, Prisma__wes_statusClient<wes_statusGetPayload<T>>>

    /**
     * Find one Wes_status that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_statusFindUniqueOrThrowArgs} args - Arguments to find a Wes_status
     * @example
     * // Get one Wes_status
     * const wes_status = await prisma.wes_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_statusFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_statusFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_statusClient<wes_status>, Prisma__wes_statusClient<wes_statusGetPayload<T>>>

    /**
     * Find the first Wes_status that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_statusFindFirstOrThrowArgs} args - Arguments to find a Wes_status
     * @example
     * // Get one Wes_status
     * const wes_status = await prisma.wes_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_statusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_statusFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_statusClient<wes_status>, Prisma__wes_statusClient<wes_statusGetPayload<T>>>

    /**
     * Count the number of Wes_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_statusCountArgs} args - Arguments to filter Wes_statuses to count.
     * @example
     * // Count the number of Wes_statuses
     * const count = await prisma.wes_status.count({
     *   where: {
     *     // ... the filter for the Wes_statuses we want to count
     *   }
     * })
    **/
    count<T extends wes_statusCountArgs>(
      args?: Subset<T, wes_statusCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_statusAggregateArgs>(args: Subset<T, Wes_statusAggregateArgs>): PrismaPromise<GetWes_statusAggregateType<T>>

    /**
     * Group by Wes_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_statusGroupByArgs['orderBy'] }
        : { orderBy?: Wes_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_statusGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_statusClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_status base type for findUnique actions
   */
  export type wes_statusFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_status
     * 
    **/
    select?: wes_statusSelect | null
    /**
     * Filter, which wes_status to fetch.
     * 
    **/
    where: wes_statusWhereUniqueInput
  }

  /**
   * wes_status: findUnique
   */
  export interface wes_statusFindUniqueArgs extends wes_statusFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_status base type for findFirst actions
   */
  export type wes_statusFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_status
     * 
    **/
    select?: wes_statusSelect | null
    /**
     * Filter, which wes_status to fetch.
     * 
    **/
    where?: wes_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_statuses to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_statusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_statuses.
     * 
    **/
    cursor?: wes_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_statuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_statuses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_statuses.
     * 
    **/
    distinct?: Enumerable<Wes_statusScalarFieldEnum>
  }

  /**
   * wes_status: findFirst
   */
  export interface wes_statusFindFirstArgs extends wes_statusFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_status findMany
   */
  export type wes_statusFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_status
     * 
    **/
    select?: wes_statusSelect | null
    /**
     * Filter, which wes_statuses to fetch.
     * 
    **/
    where?: wes_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_statuses to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_statusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_statuses.
     * 
    **/
    cursor?: wes_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_statuses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_statuses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_statusScalarFieldEnum>
  }


  /**
   * wes_status create
   */
  export type wes_statusCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_status
     * 
    **/
    select?: wes_statusSelect | null
    /**
     * The data needed to create a wes_status.
     * 
    **/
    data: XOR<wes_statusCreateInput, wes_statusUncheckedCreateInput>
  }


  /**
   * wes_status createMany
   */
  export type wes_statusCreateManyArgs = {
    /**
     * The data used to create many wes_statuses.
     * 
    **/
    data: Enumerable<wes_statusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_status update
   */
  export type wes_statusUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_status
     * 
    **/
    select?: wes_statusSelect | null
    /**
     * The data needed to update a wes_status.
     * 
    **/
    data: XOR<wes_statusUpdateInput, wes_statusUncheckedUpdateInput>
    /**
     * Choose, which wes_status to update.
     * 
    **/
    where: wes_statusWhereUniqueInput
  }


  /**
   * wes_status updateMany
   */
  export type wes_statusUpdateManyArgs = {
    /**
     * The data used to update wes_statuses.
     * 
    **/
    data: XOR<wes_statusUpdateManyMutationInput, wes_statusUncheckedUpdateManyInput>
    /**
     * Filter which wes_statuses to update
     * 
    **/
    where?: wes_statusWhereInput
  }


  /**
   * wes_status upsert
   */
  export type wes_statusUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_status
     * 
    **/
    select?: wes_statusSelect | null
    /**
     * The filter to search for the wes_status to update in case it exists.
     * 
    **/
    where: wes_statusWhereUniqueInput
    /**
     * In case the wes_status found by the `where` argument doesn't exist, create a new wes_status with this data.
     * 
    **/
    create: XOR<wes_statusCreateInput, wes_statusUncheckedCreateInput>
    /**
     * In case the wes_status was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_statusUpdateInput, wes_statusUncheckedUpdateInput>
  }


  /**
   * wes_status delete
   */
  export type wes_statusDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_status
     * 
    **/
    select?: wes_statusSelect | null
    /**
     * Filter which wes_status to delete.
     * 
    **/
    where: wes_statusWhereUniqueInput
  }


  /**
   * wes_status deleteMany
   */
  export type wes_statusDeleteManyArgs = {
    /**
     * Filter which wes_statuses to delete
     * 
    **/
    where?: wes_statusWhereInput
  }


  /**
   * wes_status: findUniqueOrThrow
   */
  export type wes_statusFindUniqueOrThrowArgs = wes_statusFindUniqueArgsBase
      

  /**
   * wes_status: findFirstOrThrow
   */
  export type wes_statusFindFirstOrThrowArgs = wes_statusFindFirstArgsBase
      

  /**
   * wes_status without action
   */
  export type wes_statusArgs = {
    /**
     * Select specific fields to fetch from the wes_status
     * 
    **/
    select?: wes_statusSelect | null
  }



  /**
   * Model wes_steps
   */


  export type AggregateWes_steps = {
    _count: Wes_stepsCountAggregateOutputType | null
    _avg: Wes_stepsAvgAggregateOutputType | null
    _sum: Wes_stepsSumAggregateOutputType | null
    _min: Wes_stepsMinAggregateOutputType | null
    _max: Wes_stepsMaxAggregateOutputType | null
  }

  export type Wes_stepsAvgAggregateOutputType = {
    id: number | null
  }

  export type Wes_stepsSumAggregateOutputType = {
    id: number | null
  }

  export type Wes_stepsMinAggregateOutputType = {
    id: number | null
    stepname: string | null
  }

  export type Wes_stepsMaxAggregateOutputType = {
    id: number | null
    stepname: string | null
  }

  export type Wes_stepsCountAggregateOutputType = {
    id: number
    stepname: number
    _all: number
  }


  export type Wes_stepsAvgAggregateInputType = {
    id?: true
  }

  export type Wes_stepsSumAggregateInputType = {
    id?: true
  }

  export type Wes_stepsMinAggregateInputType = {
    id?: true
    stepname?: true
  }

  export type Wes_stepsMaxAggregateInputType = {
    id?: true
    stepname?: true
  }

  export type Wes_stepsCountAggregateInputType = {
    id?: true
    stepname?: true
    _all?: true
  }

  export type Wes_stepsAggregateArgs = {
    /**
     * Filter which wes_steps to aggregate.
     * 
    **/
    where?: wes_stepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_steps to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_stepsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_stepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_steps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_steps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_steps
    **/
    _count?: true | Wes_stepsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_stepsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_stepsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_stepsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_stepsMaxAggregateInputType
  }

  export type GetWes_stepsAggregateType<T extends Wes_stepsAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_steps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_steps[P]>
      : GetScalarType<T[P], AggregateWes_steps[P]>
  }




  export type Wes_stepsGroupByArgs = {
    where?: wes_stepsWhereInput
    orderBy?: Enumerable<wes_stepsOrderByWithAggregationInput>
    by: Array<Wes_stepsScalarFieldEnum>
    having?: wes_stepsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_stepsCountAggregateInputType | true
    _avg?: Wes_stepsAvgAggregateInputType
    _sum?: Wes_stepsSumAggregateInputType
    _min?: Wes_stepsMinAggregateInputType
    _max?: Wes_stepsMaxAggregateInputType
  }


  export type Wes_stepsGroupByOutputType = {
    id: number
    stepname: string
    _count: Wes_stepsCountAggregateOutputType | null
    _avg: Wes_stepsAvgAggregateOutputType | null
    _sum: Wes_stepsSumAggregateOutputType | null
    _min: Wes_stepsMinAggregateOutputType | null
    _max: Wes_stepsMaxAggregateOutputType | null
  }

  type GetWes_stepsGroupByPayload<T extends Wes_stepsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_stepsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_stepsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_stepsGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_stepsGroupByOutputType[P]>
        }
      >
    >


  export type wes_stepsSelect = {
    id?: boolean
    stepname?: boolean
  }

  export type wes_stepsGetPayload<
    S extends boolean | null | undefined | wes_stepsArgs,
    U = keyof S
      > = S extends true
        ? wes_steps
    : S extends undefined
    ? never
    : S extends wes_stepsArgs | wes_stepsFindManyArgs
    ?'include' extends U
    ? wes_steps 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_steps ? wes_steps[P] : never
  } 
    : wes_steps
  : wes_steps


  type wes_stepsCountArgs = Merge<
    Omit<wes_stepsFindManyArgs, 'select' | 'include'> & {
      select?: Wes_stepsCountAggregateInputType | true
    }
  >

  export interface wes_stepsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_steps that matches the filter.
     * @param {wes_stepsFindUniqueArgs} args - Arguments to find a Wes_steps
     * @example
     * // Get one Wes_steps
     * const wes_steps = await prisma.wes_steps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_stepsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_stepsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_steps'> extends True ? CheckSelect<T, Prisma__wes_stepsClient<wes_steps>, Prisma__wes_stepsClient<wes_stepsGetPayload<T>>> : CheckSelect<T, Prisma__wes_stepsClient<wes_steps | null, null>, Prisma__wes_stepsClient<wes_stepsGetPayload<T> | null, null>>

    /**
     * Find the first Wes_steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_stepsFindFirstArgs} args - Arguments to find a Wes_steps
     * @example
     * // Get one Wes_steps
     * const wes_steps = await prisma.wes_steps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_stepsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_stepsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_steps'> extends True ? CheckSelect<T, Prisma__wes_stepsClient<wes_steps>, Prisma__wes_stepsClient<wes_stepsGetPayload<T>>> : CheckSelect<T, Prisma__wes_stepsClient<wes_steps | null, null>, Prisma__wes_stepsClient<wes_stepsGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_stepsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_steps
     * const wes_steps = await prisma.wes_steps.findMany()
     * 
     * // Get first 10 Wes_steps
     * const wes_steps = await prisma.wes_steps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_stepsWithIdOnly = await prisma.wes_steps.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_stepsFindManyArgs>(
      args?: SelectSubset<T, wes_stepsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_steps>>, PrismaPromise<Array<wes_stepsGetPayload<T>>>>

    /**
     * Create a Wes_steps.
     * @param {wes_stepsCreateArgs} args - Arguments to create a Wes_steps.
     * @example
     * // Create one Wes_steps
     * const Wes_steps = await prisma.wes_steps.create({
     *   data: {
     *     // ... data to create a Wes_steps
     *   }
     * })
     * 
    **/
    create<T extends wes_stepsCreateArgs>(
      args: SelectSubset<T, wes_stepsCreateArgs>
    ): CheckSelect<T, Prisma__wes_stepsClient<wes_steps>, Prisma__wes_stepsClient<wes_stepsGetPayload<T>>>

    /**
     * Create many Wes_steps.
     *     @param {wes_stepsCreateManyArgs} args - Arguments to create many Wes_steps.
     *     @example
     *     // Create many Wes_steps
     *     const wes_steps = await prisma.wes_steps.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_stepsCreateManyArgs>(
      args?: SelectSubset<T, wes_stepsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_steps.
     * @param {wes_stepsDeleteArgs} args - Arguments to delete one Wes_steps.
     * @example
     * // Delete one Wes_steps
     * const Wes_steps = await prisma.wes_steps.delete({
     *   where: {
     *     // ... filter to delete one Wes_steps
     *   }
     * })
     * 
    **/
    delete<T extends wes_stepsDeleteArgs>(
      args: SelectSubset<T, wes_stepsDeleteArgs>
    ): CheckSelect<T, Prisma__wes_stepsClient<wes_steps>, Prisma__wes_stepsClient<wes_stepsGetPayload<T>>>

    /**
     * Update one Wes_steps.
     * @param {wes_stepsUpdateArgs} args - Arguments to update one Wes_steps.
     * @example
     * // Update one Wes_steps
     * const wes_steps = await prisma.wes_steps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_stepsUpdateArgs>(
      args: SelectSubset<T, wes_stepsUpdateArgs>
    ): CheckSelect<T, Prisma__wes_stepsClient<wes_steps>, Prisma__wes_stepsClient<wes_stepsGetPayload<T>>>

    /**
     * Delete zero or more Wes_steps.
     * @param {wes_stepsDeleteManyArgs} args - Arguments to filter Wes_steps to delete.
     * @example
     * // Delete a few Wes_steps
     * const { count } = await prisma.wes_steps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_stepsDeleteManyArgs>(
      args?: SelectSubset<T, wes_stepsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_stepsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_steps
     * const wes_steps = await prisma.wes_steps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_stepsUpdateManyArgs>(
      args: SelectSubset<T, wes_stepsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_steps.
     * @param {wes_stepsUpsertArgs} args - Arguments to update or create a Wes_steps.
     * @example
     * // Update or create a Wes_steps
     * const wes_steps = await prisma.wes_steps.upsert({
     *   create: {
     *     // ... data to create a Wes_steps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_steps we want to update
     *   }
     * })
    **/
    upsert<T extends wes_stepsUpsertArgs>(
      args: SelectSubset<T, wes_stepsUpsertArgs>
    ): CheckSelect<T, Prisma__wes_stepsClient<wes_steps>, Prisma__wes_stepsClient<wes_stepsGetPayload<T>>>

    /**
     * Find one Wes_steps that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_stepsFindUniqueOrThrowArgs} args - Arguments to find a Wes_steps
     * @example
     * // Get one Wes_steps
     * const wes_steps = await prisma.wes_steps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_stepsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_stepsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_stepsClient<wes_steps>, Prisma__wes_stepsClient<wes_stepsGetPayload<T>>>

    /**
     * Find the first Wes_steps that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_stepsFindFirstOrThrowArgs} args - Arguments to find a Wes_steps
     * @example
     * // Get one Wes_steps
     * const wes_steps = await prisma.wes_steps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_stepsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_stepsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_stepsClient<wes_steps>, Prisma__wes_stepsClient<wes_stepsGetPayload<T>>>

    /**
     * Count the number of Wes_steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_stepsCountArgs} args - Arguments to filter Wes_steps to count.
     * @example
     * // Count the number of Wes_steps
     * const count = await prisma.wes_steps.count({
     *   where: {
     *     // ... the filter for the Wes_steps we want to count
     *   }
     * })
    **/
    count<T extends wes_stepsCountArgs>(
      args?: Subset<T, wes_stepsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_stepsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_stepsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_stepsAggregateArgs>(args: Subset<T, Wes_stepsAggregateArgs>): PrismaPromise<GetWes_stepsAggregateType<T>>

    /**
     * Group by Wes_steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_stepsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_stepsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_stepsGroupByArgs['orderBy'] }
        : { orderBy?: Wes_stepsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_stepsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_stepsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_steps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_stepsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_steps base type for findUnique actions
   */
  export type wes_stepsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_steps
     * 
    **/
    select?: wes_stepsSelect | null
    /**
     * Filter, which wes_steps to fetch.
     * 
    **/
    where: wes_stepsWhereUniqueInput
  }

  /**
   * wes_steps: findUnique
   */
  export interface wes_stepsFindUniqueArgs extends wes_stepsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_steps base type for findFirst actions
   */
  export type wes_stepsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_steps
     * 
    **/
    select?: wes_stepsSelect | null
    /**
     * Filter, which wes_steps to fetch.
     * 
    **/
    where?: wes_stepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_steps to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_stepsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_steps.
     * 
    **/
    cursor?: wes_stepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_steps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_steps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_steps.
     * 
    **/
    distinct?: Enumerable<Wes_stepsScalarFieldEnum>
  }

  /**
   * wes_steps: findFirst
   */
  export interface wes_stepsFindFirstArgs extends wes_stepsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_steps findMany
   */
  export type wes_stepsFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_steps
     * 
    **/
    select?: wes_stepsSelect | null
    /**
     * Filter, which wes_steps to fetch.
     * 
    **/
    where?: wes_stepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_steps to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_stepsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_steps.
     * 
    **/
    cursor?: wes_stepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_steps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_steps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_stepsScalarFieldEnum>
  }


  /**
   * wes_steps create
   */
  export type wes_stepsCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_steps
     * 
    **/
    select?: wes_stepsSelect | null
    /**
     * The data needed to create a wes_steps.
     * 
    **/
    data: XOR<wes_stepsCreateInput, wes_stepsUncheckedCreateInput>
  }


  /**
   * wes_steps createMany
   */
  export type wes_stepsCreateManyArgs = {
    /**
     * The data used to create many wes_steps.
     * 
    **/
    data: Enumerable<wes_stepsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_steps update
   */
  export type wes_stepsUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_steps
     * 
    **/
    select?: wes_stepsSelect | null
    /**
     * The data needed to update a wes_steps.
     * 
    **/
    data: XOR<wes_stepsUpdateInput, wes_stepsUncheckedUpdateInput>
    /**
     * Choose, which wes_steps to update.
     * 
    **/
    where: wes_stepsWhereUniqueInput
  }


  /**
   * wes_steps updateMany
   */
  export type wes_stepsUpdateManyArgs = {
    /**
     * The data used to update wes_steps.
     * 
    **/
    data: XOR<wes_stepsUpdateManyMutationInput, wes_stepsUncheckedUpdateManyInput>
    /**
     * Filter which wes_steps to update
     * 
    **/
    where?: wes_stepsWhereInput
  }


  /**
   * wes_steps upsert
   */
  export type wes_stepsUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_steps
     * 
    **/
    select?: wes_stepsSelect | null
    /**
     * The filter to search for the wes_steps to update in case it exists.
     * 
    **/
    where: wes_stepsWhereUniqueInput
    /**
     * In case the wes_steps found by the `where` argument doesn't exist, create a new wes_steps with this data.
     * 
    **/
    create: XOR<wes_stepsCreateInput, wes_stepsUncheckedCreateInput>
    /**
     * In case the wes_steps was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_stepsUpdateInput, wes_stepsUncheckedUpdateInput>
  }


  /**
   * wes_steps delete
   */
  export type wes_stepsDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_steps
     * 
    **/
    select?: wes_stepsSelect | null
    /**
     * Filter which wes_steps to delete.
     * 
    **/
    where: wes_stepsWhereUniqueInput
  }


  /**
   * wes_steps deleteMany
   */
  export type wes_stepsDeleteManyArgs = {
    /**
     * Filter which wes_steps to delete
     * 
    **/
    where?: wes_stepsWhereInput
  }


  /**
   * wes_steps: findUniqueOrThrow
   */
  export type wes_stepsFindUniqueOrThrowArgs = wes_stepsFindUniqueArgsBase
      

  /**
   * wes_steps: findFirstOrThrow
   */
  export type wes_stepsFindFirstOrThrowArgs = wes_stepsFindFirstArgsBase
      

  /**
   * wes_steps without action
   */
  export type wes_stepsArgs = {
    /**
     * Select specific fields to fetch from the wes_steps
     * 
    **/
    select?: wes_stepsSelect | null
  }



  /**
   * Model wes_type
   */


  export type AggregateWes_type = {
    _count: Wes_typeCountAggregateOutputType | null
    _avg: Wes_typeAvgAggregateOutputType | null
    _sum: Wes_typeSumAggregateOutputType | null
    _min: Wes_typeMinAggregateOutputType | null
    _max: Wes_typeMaxAggregateOutputType | null
  }

  export type Wes_typeAvgAggregateOutputType = {
    id: number | null
  }

  export type Wes_typeSumAggregateOutputType = {
    id: number | null
  }

  export type Wes_typeMinAggregateOutputType = {
    id: number | null
    typename: string | null
  }

  export type Wes_typeMaxAggregateOutputType = {
    id: number | null
    typename: string | null
  }

  export type Wes_typeCountAggregateOutputType = {
    id: number
    typename: number
    _all: number
  }


  export type Wes_typeAvgAggregateInputType = {
    id?: true
  }

  export type Wes_typeSumAggregateInputType = {
    id?: true
  }

  export type Wes_typeMinAggregateInputType = {
    id?: true
    typename?: true
  }

  export type Wes_typeMaxAggregateInputType = {
    id?: true
    typename?: true
  }

  export type Wes_typeCountAggregateInputType = {
    id?: true
    typename?: true
    _all?: true
  }

  export type Wes_typeAggregateArgs = {
    /**
     * Filter which wes_type to aggregate.
     * 
    **/
    where?: wes_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_types to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_types
    **/
    _count?: true | Wes_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_typeMaxAggregateInputType
  }

  export type GetWes_typeAggregateType<T extends Wes_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_type[P]>
      : GetScalarType<T[P], AggregateWes_type[P]>
  }




  export type Wes_typeGroupByArgs = {
    where?: wes_typeWhereInput
    orderBy?: Enumerable<wes_typeOrderByWithAggregationInput>
    by: Array<Wes_typeScalarFieldEnum>
    having?: wes_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_typeCountAggregateInputType | true
    _avg?: Wes_typeAvgAggregateInputType
    _sum?: Wes_typeSumAggregateInputType
    _min?: Wes_typeMinAggregateInputType
    _max?: Wes_typeMaxAggregateInputType
  }


  export type Wes_typeGroupByOutputType = {
    id: number
    typename: string | null
    _count: Wes_typeCountAggregateOutputType | null
    _avg: Wes_typeAvgAggregateOutputType | null
    _sum: Wes_typeSumAggregateOutputType | null
    _min: Wes_typeMinAggregateOutputType | null
    _max: Wes_typeMaxAggregateOutputType | null
  }

  type GetWes_typeGroupByPayload<T extends Wes_typeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_typeGroupByOutputType[P]>
        }
      >
    >


  export type wes_typeSelect = {
    id?: boolean
    typename?: boolean
  }

  export type wes_typeGetPayload<
    S extends boolean | null | undefined | wes_typeArgs,
    U = keyof S
      > = S extends true
        ? wes_type
    : S extends undefined
    ? never
    : S extends wes_typeArgs | wes_typeFindManyArgs
    ?'include' extends U
    ? wes_type 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_type ? wes_type[P] : never
  } 
    : wes_type
  : wes_type


  type wes_typeCountArgs = Merge<
    Omit<wes_typeFindManyArgs, 'select' | 'include'> & {
      select?: Wes_typeCountAggregateInputType | true
    }
  >

  export interface wes_typeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_type that matches the filter.
     * @param {wes_typeFindUniqueArgs} args - Arguments to find a Wes_type
     * @example
     * // Get one Wes_type
     * const wes_type = await prisma.wes_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_typeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_typeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_type'> extends True ? CheckSelect<T, Prisma__wes_typeClient<wes_type>, Prisma__wes_typeClient<wes_typeGetPayload<T>>> : CheckSelect<T, Prisma__wes_typeClient<wes_type | null, null>, Prisma__wes_typeClient<wes_typeGetPayload<T> | null, null>>

    /**
     * Find the first Wes_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_typeFindFirstArgs} args - Arguments to find a Wes_type
     * @example
     * // Get one Wes_type
     * const wes_type = await prisma.wes_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_typeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_typeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_type'> extends True ? CheckSelect<T, Prisma__wes_typeClient<wes_type>, Prisma__wes_typeClient<wes_typeGetPayload<T>>> : CheckSelect<T, Prisma__wes_typeClient<wes_type | null, null>, Prisma__wes_typeClient<wes_typeGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_typeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_types
     * const wes_types = await prisma.wes_type.findMany()
     * 
     * // Get first 10 Wes_types
     * const wes_types = await prisma.wes_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_typeWithIdOnly = await prisma.wes_type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_typeFindManyArgs>(
      args?: SelectSubset<T, wes_typeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_type>>, PrismaPromise<Array<wes_typeGetPayload<T>>>>

    /**
     * Create a Wes_type.
     * @param {wes_typeCreateArgs} args - Arguments to create a Wes_type.
     * @example
     * // Create one Wes_type
     * const Wes_type = await prisma.wes_type.create({
     *   data: {
     *     // ... data to create a Wes_type
     *   }
     * })
     * 
    **/
    create<T extends wes_typeCreateArgs>(
      args: SelectSubset<T, wes_typeCreateArgs>
    ): CheckSelect<T, Prisma__wes_typeClient<wes_type>, Prisma__wes_typeClient<wes_typeGetPayload<T>>>

    /**
     * Create many Wes_types.
     *     @param {wes_typeCreateManyArgs} args - Arguments to create many Wes_types.
     *     @example
     *     // Create many Wes_types
     *     const wes_type = await prisma.wes_type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_typeCreateManyArgs>(
      args?: SelectSubset<T, wes_typeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_type.
     * @param {wes_typeDeleteArgs} args - Arguments to delete one Wes_type.
     * @example
     * // Delete one Wes_type
     * const Wes_type = await prisma.wes_type.delete({
     *   where: {
     *     // ... filter to delete one Wes_type
     *   }
     * })
     * 
    **/
    delete<T extends wes_typeDeleteArgs>(
      args: SelectSubset<T, wes_typeDeleteArgs>
    ): CheckSelect<T, Prisma__wes_typeClient<wes_type>, Prisma__wes_typeClient<wes_typeGetPayload<T>>>

    /**
     * Update one Wes_type.
     * @param {wes_typeUpdateArgs} args - Arguments to update one Wes_type.
     * @example
     * // Update one Wes_type
     * const wes_type = await prisma.wes_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_typeUpdateArgs>(
      args: SelectSubset<T, wes_typeUpdateArgs>
    ): CheckSelect<T, Prisma__wes_typeClient<wes_type>, Prisma__wes_typeClient<wes_typeGetPayload<T>>>

    /**
     * Delete zero or more Wes_types.
     * @param {wes_typeDeleteManyArgs} args - Arguments to filter Wes_types to delete.
     * @example
     * // Delete a few Wes_types
     * const { count } = await prisma.wes_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_typeDeleteManyArgs>(
      args?: SelectSubset<T, wes_typeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_types
     * const wes_type = await prisma.wes_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_typeUpdateManyArgs>(
      args: SelectSubset<T, wes_typeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_type.
     * @param {wes_typeUpsertArgs} args - Arguments to update or create a Wes_type.
     * @example
     * // Update or create a Wes_type
     * const wes_type = await prisma.wes_type.upsert({
     *   create: {
     *     // ... data to create a Wes_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_type we want to update
     *   }
     * })
    **/
    upsert<T extends wes_typeUpsertArgs>(
      args: SelectSubset<T, wes_typeUpsertArgs>
    ): CheckSelect<T, Prisma__wes_typeClient<wes_type>, Prisma__wes_typeClient<wes_typeGetPayload<T>>>

    /**
     * Find one Wes_type that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_typeFindUniqueOrThrowArgs} args - Arguments to find a Wes_type
     * @example
     * // Get one Wes_type
     * const wes_type = await prisma.wes_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_typeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_typeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_typeClient<wes_type>, Prisma__wes_typeClient<wes_typeGetPayload<T>>>

    /**
     * Find the first Wes_type that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_typeFindFirstOrThrowArgs} args - Arguments to find a Wes_type
     * @example
     * // Get one Wes_type
     * const wes_type = await prisma.wes_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_typeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_typeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_typeClient<wes_type>, Prisma__wes_typeClient<wes_typeGetPayload<T>>>

    /**
     * Count the number of Wes_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_typeCountArgs} args - Arguments to filter Wes_types to count.
     * @example
     * // Count the number of Wes_types
     * const count = await prisma.wes_type.count({
     *   where: {
     *     // ... the filter for the Wes_types we want to count
     *   }
     * })
    **/
    count<T extends wes_typeCountArgs>(
      args?: Subset<T, wes_typeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_typeAggregateArgs>(args: Subset<T, Wes_typeAggregateArgs>): PrismaPromise<GetWes_typeAggregateType<T>>

    /**
     * Group by Wes_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_typeGroupByArgs['orderBy'] }
        : { orderBy?: Wes_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_typeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_typeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_type base type for findUnique actions
   */
  export type wes_typeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_type
     * 
    **/
    select?: wes_typeSelect | null
    /**
     * Filter, which wes_type to fetch.
     * 
    **/
    where: wes_typeWhereUniqueInput
  }

  /**
   * wes_type: findUnique
   */
  export interface wes_typeFindUniqueArgs extends wes_typeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_type base type for findFirst actions
   */
  export type wes_typeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_type
     * 
    **/
    select?: wes_typeSelect | null
    /**
     * Filter, which wes_type to fetch.
     * 
    **/
    where?: wes_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_types to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_types.
     * 
    **/
    cursor?: wes_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_types.
     * 
    **/
    distinct?: Enumerable<Wes_typeScalarFieldEnum>
  }

  /**
   * wes_type: findFirst
   */
  export interface wes_typeFindFirstArgs extends wes_typeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_type findMany
   */
  export type wes_typeFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_type
     * 
    **/
    select?: wes_typeSelect | null
    /**
     * Filter, which wes_types to fetch.
     * 
    **/
    where?: wes_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_types to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_types.
     * 
    **/
    cursor?: wes_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_types.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_typeScalarFieldEnum>
  }


  /**
   * wes_type create
   */
  export type wes_typeCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_type
     * 
    **/
    select?: wes_typeSelect | null
    /**
     * The data needed to create a wes_type.
     * 
    **/
    data: XOR<wes_typeCreateInput, wes_typeUncheckedCreateInput>
  }


  /**
   * wes_type createMany
   */
  export type wes_typeCreateManyArgs = {
    /**
     * The data used to create many wes_types.
     * 
    **/
    data: Enumerable<wes_typeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_type update
   */
  export type wes_typeUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_type
     * 
    **/
    select?: wes_typeSelect | null
    /**
     * The data needed to update a wes_type.
     * 
    **/
    data: XOR<wes_typeUpdateInput, wes_typeUncheckedUpdateInput>
    /**
     * Choose, which wes_type to update.
     * 
    **/
    where: wes_typeWhereUniqueInput
  }


  /**
   * wes_type updateMany
   */
  export type wes_typeUpdateManyArgs = {
    /**
     * The data used to update wes_types.
     * 
    **/
    data: XOR<wes_typeUpdateManyMutationInput, wes_typeUncheckedUpdateManyInput>
    /**
     * Filter which wes_types to update
     * 
    **/
    where?: wes_typeWhereInput
  }


  /**
   * wes_type upsert
   */
  export type wes_typeUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_type
     * 
    **/
    select?: wes_typeSelect | null
    /**
     * The filter to search for the wes_type to update in case it exists.
     * 
    **/
    where: wes_typeWhereUniqueInput
    /**
     * In case the wes_type found by the `where` argument doesn't exist, create a new wes_type with this data.
     * 
    **/
    create: XOR<wes_typeCreateInput, wes_typeUncheckedCreateInput>
    /**
     * In case the wes_type was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_typeUpdateInput, wes_typeUncheckedUpdateInput>
  }


  /**
   * wes_type delete
   */
  export type wes_typeDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_type
     * 
    **/
    select?: wes_typeSelect | null
    /**
     * Filter which wes_type to delete.
     * 
    **/
    where: wes_typeWhereUniqueInput
  }


  /**
   * wes_type deleteMany
   */
  export type wes_typeDeleteManyArgs = {
    /**
     * Filter which wes_types to delete
     * 
    **/
    where?: wes_typeWhereInput
  }


  /**
   * wes_type: findUniqueOrThrow
   */
  export type wes_typeFindUniqueOrThrowArgs = wes_typeFindUniqueArgsBase
      

  /**
   * wes_type: findFirstOrThrow
   */
  export type wes_typeFindFirstOrThrowArgs = wes_typeFindFirstArgsBase
      

  /**
   * wes_type without action
   */
  export type wes_typeArgs = {
    /**
     * Select specific fields to fetch from the wes_type
     * 
    **/
    select?: wes_typeSelect | null
  }



  /**
   * Model wes_user
   */


  export type AggregateWes_user = {
    _count: Wes_userCountAggregateOutputType | null
    _avg: Wes_userAvgAggregateOutputType | null
    _sum: Wes_userSumAggregateOutputType | null
    _min: Wes_userMinAggregateOutputType | null
    _max: Wes_userMaxAggregateOutputType | null
  }

  export type Wes_userAvgAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type Wes_userSumAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type Wes_userMinAggregateOutputType = {
    id: number | null
    username: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    last_login: Date | null
    heartbeat: Date | null
    password: string | null
    level: number | null
  }

  export type Wes_userMaxAggregateOutputType = {
    id: number | null
    username: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    last_login: Date | null
    heartbeat: Date | null
    password: string | null
    level: number | null
  }

  export type Wes_userCountAggregateOutputType = {
    id: number
    username: number
    firstname: number
    lastname: number
    email: number
    last_login: number
    heartbeat: number
    password: number
    level: number
    _all: number
  }


  export type Wes_userAvgAggregateInputType = {
    id?: true
    level?: true
  }

  export type Wes_userSumAggregateInputType = {
    id?: true
    level?: true
  }

  export type Wes_userMinAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    email?: true
    last_login?: true
    heartbeat?: true
    password?: true
    level?: true
  }

  export type Wes_userMaxAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    email?: true
    last_login?: true
    heartbeat?: true
    password?: true
    level?: true
  }

  export type Wes_userCountAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    email?: true
    last_login?: true
    heartbeat?: true
    password?: true
    level?: true
    _all?: true
  }

  export type Wes_userAggregateArgs = {
    /**
     * Filter which wes_user to aggregate.
     * 
    **/
    where?: wes_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_users to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: wes_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wes_users
    **/
    _count?: true | Wes_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wes_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wes_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wes_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wes_userMaxAggregateInputType
  }

  export type GetWes_userAggregateType<T extends Wes_userAggregateArgs> = {
        [P in keyof T & keyof AggregateWes_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWes_user[P]>
      : GetScalarType<T[P], AggregateWes_user[P]>
  }




  export type Wes_userGroupByArgs = {
    where?: wes_userWhereInput
    orderBy?: Enumerable<wes_userOrderByWithAggregationInput>
    by: Array<Wes_userScalarFieldEnum>
    having?: wes_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wes_userCountAggregateInputType | true
    _avg?: Wes_userAvgAggregateInputType
    _sum?: Wes_userSumAggregateInputType
    _min?: Wes_userMinAggregateInputType
    _max?: Wes_userMaxAggregateInputType
  }


  export type Wes_userGroupByOutputType = {
    id: number
    username: string
    firstname: string
    lastname: string
    email: string | null
    last_login: Date | null
    heartbeat: Date | null
    password: string
    level: number
    _count: Wes_userCountAggregateOutputType | null
    _avg: Wes_userAvgAggregateOutputType | null
    _sum: Wes_userSumAggregateOutputType | null
    _min: Wes_userMinAggregateOutputType | null
    _max: Wes_userMaxAggregateOutputType | null
  }

  type GetWes_userGroupByPayload<T extends Wes_userGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Wes_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wes_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wes_userGroupByOutputType[P]>
            : GetScalarType<T[P], Wes_userGroupByOutputType[P]>
        }
      >
    >


  export type wes_userSelect = {
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    last_login?: boolean
    heartbeat?: boolean
    password?: boolean
    level?: boolean
  }

  export type wes_userGetPayload<
    S extends boolean | null | undefined | wes_userArgs,
    U = keyof S
      > = S extends true
        ? wes_user
    : S extends undefined
    ? never
    : S extends wes_userArgs | wes_userFindManyArgs
    ?'include' extends U
    ? wes_user 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof wes_user ? wes_user[P] : never
  } 
    : wes_user
  : wes_user


  type wes_userCountArgs = Merge<
    Omit<wes_userFindManyArgs, 'select' | 'include'> & {
      select?: Wes_userCountAggregateInputType | true
    }
  >

  export interface wes_userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Wes_user that matches the filter.
     * @param {wes_userFindUniqueArgs} args - Arguments to find a Wes_user
     * @example
     * // Get one Wes_user
     * const wes_user = await prisma.wes_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wes_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, wes_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wes_user'> extends True ? CheckSelect<T, Prisma__wes_userClient<wes_user>, Prisma__wes_userClient<wes_userGetPayload<T>>> : CheckSelect<T, Prisma__wes_userClient<wes_user | null, null>, Prisma__wes_userClient<wes_userGetPayload<T> | null, null>>

    /**
     * Find the first Wes_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_userFindFirstArgs} args - Arguments to find a Wes_user
     * @example
     * // Get one Wes_user
     * const wes_user = await prisma.wes_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wes_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, wes_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wes_user'> extends True ? CheckSelect<T, Prisma__wes_userClient<wes_user>, Prisma__wes_userClient<wes_userGetPayload<T>>> : CheckSelect<T, Prisma__wes_userClient<wes_user | null, null>, Prisma__wes_userClient<wes_userGetPayload<T> | null, null>>

    /**
     * Find zero or more Wes_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wes_users
     * const wes_users = await prisma.wes_user.findMany()
     * 
     * // Get first 10 Wes_users
     * const wes_users = await prisma.wes_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wes_userWithIdOnly = await prisma.wes_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends wes_userFindManyArgs>(
      args?: SelectSubset<T, wes_userFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<wes_user>>, PrismaPromise<Array<wes_userGetPayload<T>>>>

    /**
     * Create a Wes_user.
     * @param {wes_userCreateArgs} args - Arguments to create a Wes_user.
     * @example
     * // Create one Wes_user
     * const Wes_user = await prisma.wes_user.create({
     *   data: {
     *     // ... data to create a Wes_user
     *   }
     * })
     * 
    **/
    create<T extends wes_userCreateArgs>(
      args: SelectSubset<T, wes_userCreateArgs>
    ): CheckSelect<T, Prisma__wes_userClient<wes_user>, Prisma__wes_userClient<wes_userGetPayload<T>>>

    /**
     * Create many Wes_users.
     *     @param {wes_userCreateManyArgs} args - Arguments to create many Wes_users.
     *     @example
     *     // Create many Wes_users
     *     const wes_user = await prisma.wes_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wes_userCreateManyArgs>(
      args?: SelectSubset<T, wes_userCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wes_user.
     * @param {wes_userDeleteArgs} args - Arguments to delete one Wes_user.
     * @example
     * // Delete one Wes_user
     * const Wes_user = await prisma.wes_user.delete({
     *   where: {
     *     // ... filter to delete one Wes_user
     *   }
     * })
     * 
    **/
    delete<T extends wes_userDeleteArgs>(
      args: SelectSubset<T, wes_userDeleteArgs>
    ): CheckSelect<T, Prisma__wes_userClient<wes_user>, Prisma__wes_userClient<wes_userGetPayload<T>>>

    /**
     * Update one Wes_user.
     * @param {wes_userUpdateArgs} args - Arguments to update one Wes_user.
     * @example
     * // Update one Wes_user
     * const wes_user = await prisma.wes_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wes_userUpdateArgs>(
      args: SelectSubset<T, wes_userUpdateArgs>
    ): CheckSelect<T, Prisma__wes_userClient<wes_user>, Prisma__wes_userClient<wes_userGetPayload<T>>>

    /**
     * Delete zero or more Wes_users.
     * @param {wes_userDeleteManyArgs} args - Arguments to filter Wes_users to delete.
     * @example
     * // Delete a few Wes_users
     * const { count } = await prisma.wes_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wes_userDeleteManyArgs>(
      args?: SelectSubset<T, wes_userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wes_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wes_users
     * const wes_user = await prisma.wes_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wes_userUpdateManyArgs>(
      args: SelectSubset<T, wes_userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wes_user.
     * @param {wes_userUpsertArgs} args - Arguments to update or create a Wes_user.
     * @example
     * // Update or create a Wes_user
     * const wes_user = await prisma.wes_user.upsert({
     *   create: {
     *     // ... data to create a Wes_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wes_user we want to update
     *   }
     * })
    **/
    upsert<T extends wes_userUpsertArgs>(
      args: SelectSubset<T, wes_userUpsertArgs>
    ): CheckSelect<T, Prisma__wes_userClient<wes_user>, Prisma__wes_userClient<wes_userGetPayload<T>>>

    /**
     * Find one Wes_user that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {wes_userFindUniqueOrThrowArgs} args - Arguments to find a Wes_user
     * @example
     * // Get one Wes_user
     * const wes_user = await prisma.wes_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wes_userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, wes_userFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_userClient<wes_user>, Prisma__wes_userClient<wes_userGetPayload<T>>>

    /**
     * Find the first Wes_user that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_userFindFirstOrThrowArgs} args - Arguments to find a Wes_user
     * @example
     * // Get one Wes_user
     * const wes_user = await prisma.wes_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wes_userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, wes_userFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__wes_userClient<wes_user>, Prisma__wes_userClient<wes_userGetPayload<T>>>

    /**
     * Count the number of Wes_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wes_userCountArgs} args - Arguments to filter Wes_users to count.
     * @example
     * // Count the number of Wes_users
     * const count = await prisma.wes_user.count({
     *   where: {
     *     // ... the filter for the Wes_users we want to count
     *   }
     * })
    **/
    count<T extends wes_userCountArgs>(
      args?: Subset<T, wes_userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wes_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wes_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Wes_userAggregateArgs>(args: Subset<T, Wes_userAggregateArgs>): PrismaPromise<GetWes_userAggregateType<T>>

    /**
     * Group by Wes_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wes_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Wes_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Wes_userGroupByArgs['orderBy'] }
        : { orderBy?: Wes_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Wes_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWes_userGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wes_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wes_userClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wes_user base type for findUnique actions
   */
  export type wes_userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the wes_user
     * 
    **/
    select?: wes_userSelect | null
    /**
     * Filter, which wes_user to fetch.
     * 
    **/
    where: wes_userWhereUniqueInput
  }

  /**
   * wes_user: findUnique
   */
  export interface wes_userFindUniqueArgs extends wes_userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_user base type for findFirst actions
   */
  export type wes_userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the wes_user
     * 
    **/
    select?: wes_userSelect | null
    /**
     * Filter, which wes_user to fetch.
     * 
    **/
    where?: wes_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_users to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wes_users.
     * 
    **/
    cursor?: wes_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wes_users.
     * 
    **/
    distinct?: Enumerable<Wes_userScalarFieldEnum>
  }

  /**
   * wes_user: findFirst
   */
  export interface wes_userFindFirstArgs extends wes_userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wes_user findMany
   */
  export type wes_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the wes_user
     * 
    **/
    select?: wes_userSelect | null
    /**
     * Filter, which wes_users to fetch.
     * 
    **/
    where?: wes_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wes_users to fetch.
     * 
    **/
    orderBy?: Enumerable<wes_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wes_users.
     * 
    **/
    cursor?: wes_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wes_users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wes_users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Wes_userScalarFieldEnum>
  }


  /**
   * wes_user create
   */
  export type wes_userCreateArgs = {
    /**
     * Select specific fields to fetch from the wes_user
     * 
    **/
    select?: wes_userSelect | null
    /**
     * The data needed to create a wes_user.
     * 
    **/
    data: XOR<wes_userCreateInput, wes_userUncheckedCreateInput>
  }


  /**
   * wes_user createMany
   */
  export type wes_userCreateManyArgs = {
    /**
     * The data used to create many wes_users.
     * 
    **/
    data: Enumerable<wes_userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wes_user update
   */
  export type wes_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the wes_user
     * 
    **/
    select?: wes_userSelect | null
    /**
     * The data needed to update a wes_user.
     * 
    **/
    data: XOR<wes_userUpdateInput, wes_userUncheckedUpdateInput>
    /**
     * Choose, which wes_user to update.
     * 
    **/
    where: wes_userWhereUniqueInput
  }


  /**
   * wes_user updateMany
   */
  export type wes_userUpdateManyArgs = {
    /**
     * The data used to update wes_users.
     * 
    **/
    data: XOR<wes_userUpdateManyMutationInput, wes_userUncheckedUpdateManyInput>
    /**
     * Filter which wes_users to update
     * 
    **/
    where?: wes_userWhereInput
  }


  /**
   * wes_user upsert
   */
  export type wes_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the wes_user
     * 
    **/
    select?: wes_userSelect | null
    /**
     * The filter to search for the wes_user to update in case it exists.
     * 
    **/
    where: wes_userWhereUniqueInput
    /**
     * In case the wes_user found by the `where` argument doesn't exist, create a new wes_user with this data.
     * 
    **/
    create: XOR<wes_userCreateInput, wes_userUncheckedCreateInput>
    /**
     * In case the wes_user was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<wes_userUpdateInput, wes_userUncheckedUpdateInput>
  }


  /**
   * wes_user delete
   */
  export type wes_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the wes_user
     * 
    **/
    select?: wes_userSelect | null
    /**
     * Filter which wes_user to delete.
     * 
    **/
    where: wes_userWhereUniqueInput
  }


  /**
   * wes_user deleteMany
   */
  export type wes_userDeleteManyArgs = {
    /**
     * Filter which wes_users to delete
     * 
    **/
    where?: wes_userWhereInput
  }


  /**
   * wes_user: findUniqueOrThrow
   */
  export type wes_userFindUniqueOrThrowArgs = wes_userFindUniqueArgsBase
      

  /**
   * wes_user: findFirstOrThrow
   */
  export type wes_userFindFirstOrThrowArgs = wes_userFindFirstArgsBase
      

  /**
   * wes_user without action
   */
  export type wes_userArgs = {
    /**
     * Select specific fields to fetch from the wes_user
     * 
    **/
    select?: wes_userSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const Tbl_registryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value'
  };

  export type Tbl_registryScalarFieldEnum = (typeof Tbl_registryScalarFieldEnum)[keyof typeof Tbl_registryScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Wes_attScalarFieldEnum: {
    id: 'id',
    attname: 'attname',
    cat_id: 'cat_id',
    sort: 'sort'
  };

  export type Wes_attScalarFieldEnum = (typeof Wes_attScalarFieldEnum)[keyof typeof Wes_attScalarFieldEnum]


  export const Wes_bewegungsdaten_catScalarFieldEnum: {
    id: 'id',
    value: 'value',
    att_id: 'att_id',
    park_id: 'park_id',
    remarks: 'remarks',
    logtime: 'logtime',
    loguser: 'loguser'
  };

  export type Wes_bewegungsdaten_catScalarFieldEnum = (typeof Wes_bewegungsdaten_catScalarFieldEnum)[keyof typeof Wes_bewegungsdaten_catScalarFieldEnum]


  export const Wes_bewegungsdaten_dateScalarFieldEnum: {
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
  };

  export type Wes_bewegungsdaten_dateScalarFieldEnum = (typeof Wes_bewegungsdaten_dateScalarFieldEnum)[keyof typeof Wes_bewegungsdaten_dateScalarFieldEnum]


  export const Wes_bewegungsdaten_date_auditScalarFieldEnum: {
    id: 'id',
    text: 'text',
    reg_date: 'reg_date',
    user: 'user',
    date: 'date'
  };

  export type Wes_bewegungsdaten_date_auditScalarFieldEnum = (typeof Wes_bewegungsdaten_date_auditScalarFieldEnum)[keyof typeof Wes_bewegungsdaten_date_auditScalarFieldEnum]


  export const Wes_catScalarFieldEnum: {
    id: 'id',
    catname: 'catname',
    type_id: 'type_id',
    sort: 'sort'
  };

  export type Wes_catScalarFieldEnum = (typeof Wes_catScalarFieldEnum)[keyof typeof Wes_catScalarFieldEnum]


  export const Wes_dates_templateScalarFieldEnum: {
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
  };

  export type Wes_dates_templateScalarFieldEnum = (typeof Wes_dates_templateScalarFieldEnum)[keyof typeof Wes_dates_templateScalarFieldEnum]


  export const Wes_dvScalarFieldEnum: {
    id: 'id',
    dv: 'dv'
  };

  export type Wes_dvScalarFieldEnum = (typeof Wes_dvScalarFieldEnum)[keyof typeof Wes_dvScalarFieldEnum]


  export const Wes_eisScalarFieldEnum: {
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
  };

  export type Wes_eisScalarFieldEnum = (typeof Wes_eisScalarFieldEnum)[keyof typeof Wes_eisScalarFieldEnum]


  export const Wes_kaScalarFieldEnum: {
    id: 'id',
    ka: 'ka',
    sort: 'sort'
  };

  export type Wes_kaScalarFieldEnum = (typeof Wes_kaScalarFieldEnum)[keyof typeof Wes_kaScalarFieldEnum]


  export const Wes_ka_kontaktScalarFieldEnum: {
    ka: 'ka',
    kid: 'kid',
    value: 'value'
  };

  export type Wes_ka_kontaktScalarFieldEnum = (typeof Wes_ka_kontaktScalarFieldEnum)[keyof typeof Wes_ka_kontaktScalarFieldEnum]


  export const Wes_kfScalarFieldEnum: {
    id: 'id',
    funktion: 'funktion'
  };

  export type Wes_kfScalarFieldEnum = (typeof Wes_kfScalarFieldEnum)[keyof typeof Wes_kfScalarFieldEnum]


  export const Wes_kontaktScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Wes_kontaktScalarFieldEnum = (typeof Wes_kontaktScalarFieldEnum)[keyof typeof Wes_kontaktScalarFieldEnum]


  export const Wes_kontakt_parkScalarFieldEnum: {
    parkid: 'parkid',
    kid: 'kid',
    kfid: 'kfid'
  };

  export type Wes_kontakt_parkScalarFieldEnum = (typeof Wes_kontakt_parkScalarFieldEnum)[keyof typeof Wes_kontakt_parkScalarFieldEnum]


  export const Wes_parkScalarFieldEnum: {
    id: 'id',
    parkname: 'parkname',
    ischild: 'ischild',
    istype: 'istype',
    isuser: 'isuser'
  };

  export type Wes_parkScalarFieldEnum = (typeof Wes_parkScalarFieldEnum)[keyof typeof Wes_parkScalarFieldEnum]


  export const Wes_statusScalarFieldEnum: {
    id: 'id',
    status: 'status',
    sort: 'sort',
    prio: 'prio'
  };

  export type Wes_statusScalarFieldEnum = (typeof Wes_statusScalarFieldEnum)[keyof typeof Wes_statusScalarFieldEnum]


  export const Wes_stepsScalarFieldEnum: {
    id: 'id',
    stepname: 'stepname'
  };

  export type Wes_stepsScalarFieldEnum = (typeof Wes_stepsScalarFieldEnum)[keyof typeof Wes_stepsScalarFieldEnum]


  export const Wes_typeScalarFieldEnum: {
    id: 'id',
    typename: 'typename'
  };

  export type Wes_typeScalarFieldEnum = (typeof Wes_typeScalarFieldEnum)[keyof typeof Wes_typeScalarFieldEnum]


  export const Wes_userScalarFieldEnum: {
    id: 'id',
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    last_login: 'last_login',
    heartbeat: 'heartbeat',
    password: 'password',
    level: 'level'
  };

  export type Wes_userScalarFieldEnum = (typeof Wes_userScalarFieldEnum)[keyof typeof Wes_userScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type tbl_registryWhereInput = {
    AND?: Enumerable<tbl_registryWhereInput>
    OR?: Enumerable<tbl_registryWhereInput>
    NOT?: Enumerable<tbl_registryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    value?: FloatNullableFilter | number | null
  }

  export type tbl_registryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type tbl_registryWhereUniqueInput = {
    id?: number
  }

  export type tbl_registryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    _count?: tbl_registryCountOrderByAggregateInput
    _avg?: tbl_registryAvgOrderByAggregateInput
    _max?: tbl_registryMaxOrderByAggregateInput
    _min?: tbl_registryMinOrderByAggregateInput
    _sum?: tbl_registrySumOrderByAggregateInput
  }

  export type tbl_registryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tbl_registryScalarWhereWithAggregatesInput>
    OR?: Enumerable<tbl_registryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tbl_registryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    value?: FloatNullableWithAggregatesFilter | number | null
  }

  export type wes_attWhereInput = {
    AND?: Enumerable<wes_attWhereInput>
    OR?: Enumerable<wes_attWhereInput>
    NOT?: Enumerable<wes_attWhereInput>
    id?: IntFilter | number
    attname?: StringNullableFilter | string | null
    cat_id?: IntFilter | number
    sort?: StringNullableFilter | string | null
  }

  export type wes_attOrderByWithRelationInput = {
    id?: SortOrder
    attname?: SortOrder
    cat_id?: SortOrder
    sort?: SortOrder
  }

  export type wes_attWhereUniqueInput = {
    id?: number
  }

  export type wes_attOrderByWithAggregationInput = {
    id?: SortOrder
    attname?: SortOrder
    cat_id?: SortOrder
    sort?: SortOrder
    _count?: wes_attCountOrderByAggregateInput
    _avg?: wes_attAvgOrderByAggregateInput
    _max?: wes_attMaxOrderByAggregateInput
    _min?: wes_attMinOrderByAggregateInput
    _sum?: wes_attSumOrderByAggregateInput
  }

  export type wes_attScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_attScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_attScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_attScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    attname?: StringNullableWithAggregatesFilter | string | null
    cat_id?: IntWithAggregatesFilter | number
    sort?: StringNullableWithAggregatesFilter | string | null
  }

  export type wes_bewegungsdaten_catWhereInput = {
    AND?: Enumerable<wes_bewegungsdaten_catWhereInput>
    OR?: Enumerable<wes_bewegungsdaten_catWhereInput>
    NOT?: Enumerable<wes_bewegungsdaten_catWhereInput>
    id?: IntFilter | number
    value?: StringNullableFilter | string | null
    att_id?: IntFilter | number
    park_id?: IntFilter | number
    remarks?: StringNullableFilter | string | null
    logtime?: DateTimeFilter | Date | string
    loguser?: IntFilter | number
  }

  export type wes_bewegungsdaten_catOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    att_id?: SortOrder
    park_id?: SortOrder
    remarks?: SortOrder
    logtime?: SortOrder
    loguser?: SortOrder
  }

  export type wes_bewegungsdaten_catWhereUniqueInput = {
    id?: number
  }

  export type wes_bewegungsdaten_catOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    att_id?: SortOrder
    park_id?: SortOrder
    remarks?: SortOrder
    logtime?: SortOrder
    loguser?: SortOrder
    _count?: wes_bewegungsdaten_catCountOrderByAggregateInput
    _avg?: wes_bewegungsdaten_catAvgOrderByAggregateInput
    _max?: wes_bewegungsdaten_catMaxOrderByAggregateInput
    _min?: wes_bewegungsdaten_catMinOrderByAggregateInput
    _sum?: wes_bewegungsdaten_catSumOrderByAggregateInput
  }

  export type wes_bewegungsdaten_catScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_bewegungsdaten_catScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_bewegungsdaten_catScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_bewegungsdaten_catScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    value?: StringNullableWithAggregatesFilter | string | null
    att_id?: IntWithAggregatesFilter | number
    park_id?: IntWithAggregatesFilter | number
    remarks?: StringNullableWithAggregatesFilter | string | null
    logtime?: DateTimeWithAggregatesFilter | Date | string
    loguser?: IntWithAggregatesFilter | number
  }

  export type wes_bewegungsdaten_dateWhereInput = {
    AND?: Enumerable<wes_bewegungsdaten_dateWhereInput>
    OR?: Enumerable<wes_bewegungsdaten_dateWhereInput>
    NOT?: Enumerable<wes_bewegungsdaten_dateWhereInput>
    id?: IntFilter | number
    type?: IntFilter | number
    user?: IntFilter | number
    date_created?: DateTimeNullableFilter | Date | string | null
    user_created?: IntFilter | number
    park_id?: IntFilter | number
    frist?: DateTimeFilter | Date | string
    start_date?: DateTimeNullableFilter | Date | string | null
    start_user?: IntFilter | number
    end_date?: DateTimeNullableFilter | Date | string | null
    end_user?: IntFilter | number
    reminder_sent?: DateTimeNullableFilter | Date | string | null
    reminder_II_sent?: DateTimeNullableFilter | Date | string | null
    status?: IntFilter | number
    bemerkungen?: StringNullableFilter | string | null
    final?: IntNullableFilter | number | null
    steps?: StringNullableFilter | string | null
    partner?: StringNullableFilter | string | null
  }

  export type wes_bewegungsdaten_dateOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    user?: SortOrder
    date_created?: SortOrder
    user_created?: SortOrder
    park_id?: SortOrder
    frist?: SortOrder
    start_date?: SortOrder
    start_user?: SortOrder
    end_date?: SortOrder
    end_user?: SortOrder
    reminder_sent?: SortOrder
    reminder_II_sent?: SortOrder
    status?: SortOrder
    bemerkungen?: SortOrder
    final?: SortOrder
    steps?: SortOrder
    partner?: SortOrder
  }

  export type wes_bewegungsdaten_dateWhereUniqueInput = {
    id?: number
  }

  export type wes_bewegungsdaten_dateOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    user?: SortOrder
    date_created?: SortOrder
    user_created?: SortOrder
    park_id?: SortOrder
    frist?: SortOrder
    start_date?: SortOrder
    start_user?: SortOrder
    end_date?: SortOrder
    end_user?: SortOrder
    reminder_sent?: SortOrder
    reminder_II_sent?: SortOrder
    status?: SortOrder
    bemerkungen?: SortOrder
    final?: SortOrder
    steps?: SortOrder
    partner?: SortOrder
    _count?: wes_bewegungsdaten_dateCountOrderByAggregateInput
    _avg?: wes_bewegungsdaten_dateAvgOrderByAggregateInput
    _max?: wes_bewegungsdaten_dateMaxOrderByAggregateInput
    _min?: wes_bewegungsdaten_dateMinOrderByAggregateInput
    _sum?: wes_bewegungsdaten_dateSumOrderByAggregateInput
  }

  export type wes_bewegungsdaten_dateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_bewegungsdaten_dateScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_bewegungsdaten_dateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_bewegungsdaten_dateScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type?: IntWithAggregatesFilter | number
    user?: IntWithAggregatesFilter | number
    date_created?: DateTimeNullableWithAggregatesFilter | Date | string | null
    user_created?: IntWithAggregatesFilter | number
    park_id?: IntWithAggregatesFilter | number
    frist?: DateTimeWithAggregatesFilter | Date | string
    start_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    start_user?: IntWithAggregatesFilter | number
    end_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    end_user?: IntWithAggregatesFilter | number
    reminder_sent?: DateTimeNullableWithAggregatesFilter | Date | string | null
    reminder_II_sent?: DateTimeNullableWithAggregatesFilter | Date | string | null
    status?: IntWithAggregatesFilter | number
    bemerkungen?: StringNullableWithAggregatesFilter | string | null
    final?: IntNullableWithAggregatesFilter | number | null
    steps?: StringNullableWithAggregatesFilter | string | null
    partner?: StringNullableWithAggregatesFilter | string | null
  }

  export type wes_bewegungsdaten_date_auditWhereInput = {
    AND?: Enumerable<wes_bewegungsdaten_date_auditWhereInput>
    OR?: Enumerable<wes_bewegungsdaten_date_auditWhereInput>
    NOT?: Enumerable<wes_bewegungsdaten_date_auditWhereInput>
    id?: IntFilter | number
    text?: StringFilter | string
    reg_date?: DateTimeNullableFilter | Date | string | null
    user?: IntNullableFilter | number | null
    date?: IntNullableFilter | number | null
  }

  export type wes_bewegungsdaten_date_auditOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    reg_date?: SortOrder
    user?: SortOrder
    date?: SortOrder
  }

  export type wes_bewegungsdaten_date_auditWhereUniqueInput = {
    id?: number
  }

  export type wes_bewegungsdaten_date_auditOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    reg_date?: SortOrder
    user?: SortOrder
    date?: SortOrder
    _count?: wes_bewegungsdaten_date_auditCountOrderByAggregateInput
    _avg?: wes_bewegungsdaten_date_auditAvgOrderByAggregateInput
    _max?: wes_bewegungsdaten_date_auditMaxOrderByAggregateInput
    _min?: wes_bewegungsdaten_date_auditMinOrderByAggregateInput
    _sum?: wes_bewegungsdaten_date_auditSumOrderByAggregateInput
  }

  export type wes_bewegungsdaten_date_auditScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_bewegungsdaten_date_auditScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_bewegungsdaten_date_auditScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_bewegungsdaten_date_auditScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    text?: StringWithAggregatesFilter | string
    reg_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    user?: IntNullableWithAggregatesFilter | number | null
    date?: IntNullableWithAggregatesFilter | number | null
  }

  export type wes_catWhereInput = {
    AND?: Enumerable<wes_catWhereInput>
    OR?: Enumerable<wes_catWhereInput>
    NOT?: Enumerable<wes_catWhereInput>
    id?: IntFilter | number
    catname?: StringNullableFilter | string | null
    type_id?: IntNullableFilter | number | null
    sort?: StringNullableFilter | string | null
  }

  export type wes_catOrderByWithRelationInput = {
    id?: SortOrder
    catname?: SortOrder
    type_id?: SortOrder
    sort?: SortOrder
  }

  export type wes_catWhereUniqueInput = {
    id?: number
  }

  export type wes_catOrderByWithAggregationInput = {
    id?: SortOrder
    catname?: SortOrder
    type_id?: SortOrder
    sort?: SortOrder
    _count?: wes_catCountOrderByAggregateInput
    _avg?: wes_catAvgOrderByAggregateInput
    _max?: wes_catMaxOrderByAggregateInput
    _min?: wes_catMinOrderByAggregateInput
    _sum?: wes_catSumOrderByAggregateInput
  }

  export type wes_catScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_catScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_catScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_catScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    catname?: StringNullableWithAggregatesFilter | string | null
    type_id?: IntNullableWithAggregatesFilter | number | null
    sort?: StringNullableWithAggregatesFilter | string | null
  }

  export type wes_dates_templateWhereInput = {
    AND?: Enumerable<wes_dates_templateWhereInput>
    OR?: Enumerable<wes_dates_templateWhereInput>
    NOT?: Enumerable<wes_dates_templateWhereInput>
    id?: IntFilter | number
    datename?: StringNullableFilter | string | null
    date_type?: IntFilter | number
    reminder?: IntFilter | number
    reminderII?: IntFilter | number
    partner?: StringNullableFilter | string | null
    steps?: StringNullableFilter | string | null
    wiedervorlage?: IntFilter | number
    status?: StringNullableFilter | string | null
    bemerkungen?: StringNullableFilter | string | null
  }

  export type wes_dates_templateOrderByWithRelationInput = {
    id?: SortOrder
    datename?: SortOrder
    date_type?: SortOrder
    reminder?: SortOrder
    reminderII?: SortOrder
    partner?: SortOrder
    steps?: SortOrder
    wiedervorlage?: SortOrder
    status?: SortOrder
    bemerkungen?: SortOrder
  }

  export type wes_dates_templateWhereUniqueInput = {
    id?: number
  }

  export type wes_dates_templateOrderByWithAggregationInput = {
    id?: SortOrder
    datename?: SortOrder
    date_type?: SortOrder
    reminder?: SortOrder
    reminderII?: SortOrder
    partner?: SortOrder
    steps?: SortOrder
    wiedervorlage?: SortOrder
    status?: SortOrder
    bemerkungen?: SortOrder
    _count?: wes_dates_templateCountOrderByAggregateInput
    _avg?: wes_dates_templateAvgOrderByAggregateInput
    _max?: wes_dates_templateMaxOrderByAggregateInput
    _min?: wes_dates_templateMinOrderByAggregateInput
    _sum?: wes_dates_templateSumOrderByAggregateInput
  }

  export type wes_dates_templateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_dates_templateScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_dates_templateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_dates_templateScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    datename?: StringNullableWithAggregatesFilter | string | null
    date_type?: IntWithAggregatesFilter | number
    reminder?: IntWithAggregatesFilter | number
    reminderII?: IntWithAggregatesFilter | number
    partner?: StringNullableWithAggregatesFilter | string | null
    steps?: StringNullableWithAggregatesFilter | string | null
    wiedervorlage?: IntWithAggregatesFilter | number
    status?: StringNullableWithAggregatesFilter | string | null
    bemerkungen?: StringNullableWithAggregatesFilter | string | null
  }

  export type wes_dvWhereInput = {
    AND?: Enumerable<wes_dvWhereInput>
    OR?: Enumerable<wes_dvWhereInput>
    NOT?: Enumerable<wes_dvWhereInput>
    id?: IntFilter | number
    dv?: StringFilter | string
  }

  export type wes_dvOrderByWithRelationInput = {
    id?: SortOrder
    dv?: SortOrder
  }

  export type wes_dvWhereUniqueInput = {
    id?: number
  }

  export type wes_dvOrderByWithAggregationInput = {
    id?: SortOrder
    dv?: SortOrder
    _count?: wes_dvCountOrderByAggregateInput
    _avg?: wes_dvAvgOrderByAggregateInput
    _max?: wes_dvMaxOrderByAggregateInput
    _min?: wes_dvMinOrderByAggregateInput
    _sum?: wes_dvSumOrderByAggregateInput
  }

  export type wes_dvScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_dvScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_dvScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_dvScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dv?: StringWithAggregatesFilter | string
  }

  export type wes_eisWhereInput = {
    AND?: Enumerable<wes_eisWhereInput>
    OR?: Enumerable<wes_eisWhereInput>
    NOT?: Enumerable<wes_eisWhereInput>
    id?: IntFilter | number
    park_id?: IntFilter | number
    monat?: IntNullableFilter | number | null
    jahr?: IntNullableFilter | number | null
    einsatz?: IntFilter | number
    lastgang?: IntFilter | number
    minute?: IntFilter | number
    enwg?: IntFilter | number
    dvred?: IntFilter | number
    durchremark?: StringNullableFilter | string | null
    rechnung?: IntFilter | number
    rechnungnummer?: StringNullableFilter | string | null
    rechnungremark?: StringNullableFilter | string | null
  }

  export type wes_eisOrderByWithRelationInput = {
    id?: SortOrder
    park_id?: SortOrder
    monat?: SortOrder
    jahr?: SortOrder
    einsatz?: SortOrder
    lastgang?: SortOrder
    minute?: SortOrder
    enwg?: SortOrder
    dvred?: SortOrder
    durchremark?: SortOrder
    rechnung?: SortOrder
    rechnungnummer?: SortOrder
    rechnungremark?: SortOrder
  }

  export type wes_eisWhereUniqueInput = {
    id?: number
  }

  export type wes_eisOrderByWithAggregationInput = {
    id?: SortOrder
    park_id?: SortOrder
    monat?: SortOrder
    jahr?: SortOrder
    einsatz?: SortOrder
    lastgang?: SortOrder
    minute?: SortOrder
    enwg?: SortOrder
    dvred?: SortOrder
    durchremark?: SortOrder
    rechnung?: SortOrder
    rechnungnummer?: SortOrder
    rechnungremark?: SortOrder
    _count?: wes_eisCountOrderByAggregateInput
    _avg?: wes_eisAvgOrderByAggregateInput
    _max?: wes_eisMaxOrderByAggregateInput
    _min?: wes_eisMinOrderByAggregateInput
    _sum?: wes_eisSumOrderByAggregateInput
  }

  export type wes_eisScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_eisScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_eisScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_eisScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    park_id?: IntWithAggregatesFilter | number
    monat?: IntNullableWithAggregatesFilter | number | null
    jahr?: IntNullableWithAggregatesFilter | number | null
    einsatz?: IntWithAggregatesFilter | number
    lastgang?: IntWithAggregatesFilter | number
    minute?: IntWithAggregatesFilter | number
    enwg?: IntWithAggregatesFilter | number
    dvred?: IntWithAggregatesFilter | number
    durchremark?: StringNullableWithAggregatesFilter | string | null
    rechnung?: IntWithAggregatesFilter | number
    rechnungnummer?: StringNullableWithAggregatesFilter | string | null
    rechnungremark?: StringNullableWithAggregatesFilter | string | null
  }

  export type wes_kaWhereInput = {
    AND?: Enumerable<wes_kaWhereInput>
    OR?: Enumerable<wes_kaWhereInput>
    NOT?: Enumerable<wes_kaWhereInput>
    id?: IntFilter | number
    ka?: StringFilter | string
    sort?: StringNullableFilter | string | null
  }

  export type wes_kaOrderByWithRelationInput = {
    id?: SortOrder
    ka?: SortOrder
    sort?: SortOrder
  }

  export type wes_kaWhereUniqueInput = {
    id?: number
  }

  export type wes_kaOrderByWithAggregationInput = {
    id?: SortOrder
    ka?: SortOrder
    sort?: SortOrder
    _count?: wes_kaCountOrderByAggregateInput
    _avg?: wes_kaAvgOrderByAggregateInput
    _max?: wes_kaMaxOrderByAggregateInput
    _min?: wes_kaMinOrderByAggregateInput
    _sum?: wes_kaSumOrderByAggregateInput
  }

  export type wes_kaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_kaScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_kaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_kaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    ka?: StringWithAggregatesFilter | string
    sort?: StringNullableWithAggregatesFilter | string | null
  }

  export type wes_ka_kontaktWhereInput = {
    AND?: Enumerable<wes_ka_kontaktWhereInput>
    OR?: Enumerable<wes_ka_kontaktWhereInput>
    NOT?: Enumerable<wes_ka_kontaktWhereInput>
    ka?: IntFilter | number
    kid?: IntFilter | number
    value?: StringFilter | string
  }

  export type wes_ka_kontaktOrderByWithRelationInput = {
    ka?: SortOrder
    kid?: SortOrder
    value?: SortOrder
  }

  export type wes_ka_kontaktWhereUniqueInput = {
    ka_kid?: wes_ka_kontaktKaKidCompoundUniqueInput
  }

  export type wes_ka_kontaktOrderByWithAggregationInput = {
    ka?: SortOrder
    kid?: SortOrder
    value?: SortOrder
    _count?: wes_ka_kontaktCountOrderByAggregateInput
    _avg?: wes_ka_kontaktAvgOrderByAggregateInput
    _max?: wes_ka_kontaktMaxOrderByAggregateInput
    _min?: wes_ka_kontaktMinOrderByAggregateInput
    _sum?: wes_ka_kontaktSumOrderByAggregateInput
  }

  export type wes_ka_kontaktScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_ka_kontaktScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_ka_kontaktScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_ka_kontaktScalarWhereWithAggregatesInput>
    ka?: IntWithAggregatesFilter | number
    kid?: IntWithAggregatesFilter | number
    value?: StringWithAggregatesFilter | string
  }

  export type wes_kfWhereInput = {
    AND?: Enumerable<wes_kfWhereInput>
    OR?: Enumerable<wes_kfWhereInput>
    NOT?: Enumerable<wes_kfWhereInput>
    id?: IntFilter | number
    funktion?: StringNullableFilter | string | null
  }

  export type wes_kfOrderByWithRelationInput = {
    id?: SortOrder
    funktion?: SortOrder
  }

  export type wes_kfWhereUniqueInput = {
    id?: number
  }

  export type wes_kfOrderByWithAggregationInput = {
    id?: SortOrder
    funktion?: SortOrder
    _count?: wes_kfCountOrderByAggregateInput
    _avg?: wes_kfAvgOrderByAggregateInput
    _max?: wes_kfMaxOrderByAggregateInput
    _min?: wes_kfMinOrderByAggregateInput
    _sum?: wes_kfSumOrderByAggregateInput
  }

  export type wes_kfScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_kfScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_kfScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_kfScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    funktion?: StringNullableWithAggregatesFilter | string | null
  }

  export type wes_kontaktWhereInput = {
    AND?: Enumerable<wes_kontaktWhereInput>
    OR?: Enumerable<wes_kontaktWhereInput>
    NOT?: Enumerable<wes_kontaktWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type wes_kontaktOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type wes_kontaktWhereUniqueInput = {
    id?: number
  }

  export type wes_kontaktOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: wes_kontaktCountOrderByAggregateInput
    _avg?: wes_kontaktAvgOrderByAggregateInput
    _max?: wes_kontaktMaxOrderByAggregateInput
    _min?: wes_kontaktMinOrderByAggregateInput
    _sum?: wes_kontaktSumOrderByAggregateInput
  }

  export type wes_kontaktScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_kontaktScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_kontaktScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_kontaktScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type wes_kontakt_parkWhereInput = {
    AND?: Enumerable<wes_kontakt_parkWhereInput>
    OR?: Enumerable<wes_kontakt_parkWhereInput>
    NOT?: Enumerable<wes_kontakt_parkWhereInput>
    parkid?: IntFilter | number
    kid?: IntFilter | number
    kfid?: IntFilter | number
  }

  export type wes_kontakt_parkOrderByWithRelationInput = {
    parkid?: SortOrder
    kid?: SortOrder
    kfid?: SortOrder
  }

  export type wes_kontakt_parkWhereUniqueInput = {
    parkid_kid_kfid?: wes_kontakt_parkParkidKidKfidCompoundUniqueInput
  }

  export type wes_kontakt_parkOrderByWithAggregationInput = {
    parkid?: SortOrder
    kid?: SortOrder
    kfid?: SortOrder
    _count?: wes_kontakt_parkCountOrderByAggregateInput
    _avg?: wes_kontakt_parkAvgOrderByAggregateInput
    _max?: wes_kontakt_parkMaxOrderByAggregateInput
    _min?: wes_kontakt_parkMinOrderByAggregateInput
    _sum?: wes_kontakt_parkSumOrderByAggregateInput
  }

  export type wes_kontakt_parkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_kontakt_parkScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_kontakt_parkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_kontakt_parkScalarWhereWithAggregatesInput>
    parkid?: IntWithAggregatesFilter | number
    kid?: IntWithAggregatesFilter | number
    kfid?: IntWithAggregatesFilter | number
  }

  export type wes_parkWhereInput = {
    AND?: Enumerable<wes_parkWhereInput>
    OR?: Enumerable<wes_parkWhereInput>
    NOT?: Enumerable<wes_parkWhereInput>
    id?: IntFilter | number
    parkname?: StringNullableFilter | string | null
    ischild?: IntNullableFilter | number | null
    istype?: IntFilter | number
    isuser?: IntNullableFilter | number | null
  }

  export type wes_parkOrderByWithRelationInput = {
    id?: SortOrder
    parkname?: SortOrder
    ischild?: SortOrder
    istype?: SortOrder
    isuser?: SortOrder
  }

  export type wes_parkWhereUniqueInput = {
    id?: number
  }

  export type wes_parkOrderByWithAggregationInput = {
    id?: SortOrder
    parkname?: SortOrder
    ischild?: SortOrder
    istype?: SortOrder
    isuser?: SortOrder
    _count?: wes_parkCountOrderByAggregateInput
    _avg?: wes_parkAvgOrderByAggregateInput
    _max?: wes_parkMaxOrderByAggregateInput
    _min?: wes_parkMinOrderByAggregateInput
    _sum?: wes_parkSumOrderByAggregateInput
  }

  export type wes_parkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_parkScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_parkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_parkScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    parkname?: StringNullableWithAggregatesFilter | string | null
    ischild?: IntNullableWithAggregatesFilter | number | null
    istype?: IntWithAggregatesFilter | number
    isuser?: IntNullableWithAggregatesFilter | number | null
  }

  export type wes_statusWhereInput = {
    AND?: Enumerable<wes_statusWhereInput>
    OR?: Enumerable<wes_statusWhereInput>
    NOT?: Enumerable<wes_statusWhereInput>
    id?: IntFilter | number
    status?: StringFilter | string
    sort?: StringFilter | string
    prio?: FloatFilter | number
  }

  export type wes_statusOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    sort?: SortOrder
    prio?: SortOrder
  }

  export type wes_statusWhereUniqueInput = {
    id?: number
  }

  export type wes_statusOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    sort?: SortOrder
    prio?: SortOrder
    _count?: wes_statusCountOrderByAggregateInput
    _avg?: wes_statusAvgOrderByAggregateInput
    _max?: wes_statusMaxOrderByAggregateInput
    _min?: wes_statusMinOrderByAggregateInput
    _sum?: wes_statusSumOrderByAggregateInput
  }

  export type wes_statusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_statusScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_statusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_statusScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    sort?: StringWithAggregatesFilter | string
    prio?: FloatWithAggregatesFilter | number
  }

  export type wes_stepsWhereInput = {
    AND?: Enumerable<wes_stepsWhereInput>
    OR?: Enumerable<wes_stepsWhereInput>
    NOT?: Enumerable<wes_stepsWhereInput>
    id?: IntFilter | number
    stepname?: StringFilter | string
  }

  export type wes_stepsOrderByWithRelationInput = {
    id?: SortOrder
    stepname?: SortOrder
  }

  export type wes_stepsWhereUniqueInput = {
    id?: number
  }

  export type wes_stepsOrderByWithAggregationInput = {
    id?: SortOrder
    stepname?: SortOrder
    _count?: wes_stepsCountOrderByAggregateInput
    _avg?: wes_stepsAvgOrderByAggregateInput
    _max?: wes_stepsMaxOrderByAggregateInput
    _min?: wes_stepsMinOrderByAggregateInput
    _sum?: wes_stepsSumOrderByAggregateInput
  }

  export type wes_stepsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_stepsScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_stepsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_stepsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    stepname?: StringWithAggregatesFilter | string
  }

  export type wes_typeWhereInput = {
    AND?: Enumerable<wes_typeWhereInput>
    OR?: Enumerable<wes_typeWhereInput>
    NOT?: Enumerable<wes_typeWhereInput>
    id?: IntFilter | number
    typename?: StringNullableFilter | string | null
  }

  export type wes_typeOrderByWithRelationInput = {
    id?: SortOrder
    typename?: SortOrder
  }

  export type wes_typeWhereUniqueInput = {
    id?: number
  }

  export type wes_typeOrderByWithAggregationInput = {
    id?: SortOrder
    typename?: SortOrder
    _count?: wes_typeCountOrderByAggregateInput
    _avg?: wes_typeAvgOrderByAggregateInput
    _max?: wes_typeMaxOrderByAggregateInput
    _min?: wes_typeMinOrderByAggregateInput
    _sum?: wes_typeSumOrderByAggregateInput
  }

  export type wes_typeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_typeScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_typeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_typeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    typename?: StringNullableWithAggregatesFilter | string | null
  }

  export type wes_userWhereInput = {
    AND?: Enumerable<wes_userWhereInput>
    OR?: Enumerable<wes_userWhereInput>
    NOT?: Enumerable<wes_userWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    email?: StringNullableFilter | string | null
    last_login?: DateTimeNullableFilter | Date | string | null
    heartbeat?: DateTimeNullableFilter | Date | string | null
    password?: StringFilter | string
    level?: IntFilter | number
  }

  export type wes_userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    last_login?: SortOrder
    heartbeat?: SortOrder
    password?: SortOrder
    level?: SortOrder
  }

  export type wes_userWhereUniqueInput = {
    id?: number
  }

  export type wes_userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    last_login?: SortOrder
    heartbeat?: SortOrder
    password?: SortOrder
    level?: SortOrder
    _count?: wes_userCountOrderByAggregateInput
    _avg?: wes_userAvgOrderByAggregateInput
    _max?: wes_userMaxOrderByAggregateInput
    _min?: wes_userMinOrderByAggregateInput
    _sum?: wes_userSumOrderByAggregateInput
  }

  export type wes_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<wes_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<wes_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<wes_userScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    firstname?: StringWithAggregatesFilter | string
    lastname?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    last_login?: DateTimeNullableWithAggregatesFilter | Date | string | null
    heartbeat?: DateTimeNullableWithAggregatesFilter | Date | string | null
    password?: StringWithAggregatesFilter | string
    level?: IntWithAggregatesFilter | number
  }

  export type tbl_registryCreateInput = {
    name: string
    value?: number | null
  }

  export type tbl_registryUncheckedCreateInput = {
    id?: number
    name: string
    value?: number | null
  }

  export type tbl_registryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tbl_registryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tbl_registryCreateManyInput = {
    id?: number
    name: string
    value?: number | null
  }

  export type tbl_registryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tbl_registryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type wes_attCreateInput = {
    attname?: string | null
    cat_id: number
    sort?: string | null
  }

  export type wes_attUncheckedCreateInput = {
    id?: number
    attname?: string | null
    cat_id: number
    sort?: string | null
  }

  export type wes_attUpdateInput = {
    attname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: IntFieldUpdateOperationsInput | number
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_attUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: IntFieldUpdateOperationsInput | number
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_attCreateManyInput = {
    id?: number
    attname?: string | null
    cat_id: number
    sort?: string | null
  }

  export type wes_attUpdateManyMutationInput = {
    attname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: IntFieldUpdateOperationsInput | number
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_attUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: IntFieldUpdateOperationsInput | number
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_bewegungsdaten_catCreateInput = {
    value?: string | null
    att_id: number
    park_id: number
    remarks?: string | null
    logtime: Date | string
    loguser: number
  }

  export type wes_bewegungsdaten_catUncheckedCreateInput = {
    id?: number
    value?: string | null
    att_id: number
    park_id: number
    remarks?: string | null
    logtime: Date | string
    loguser: number
  }

  export type wes_bewegungsdaten_catUpdateInput = {
    value?: NullableStringFieldUpdateOperationsInput | string | null
    att_id?: IntFieldUpdateOperationsInput | number
    park_id?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    logtime?: DateTimeFieldUpdateOperationsInput | Date | string
    loguser?: IntFieldUpdateOperationsInput | number
  }

  export type wes_bewegungsdaten_catUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    att_id?: IntFieldUpdateOperationsInput | number
    park_id?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    logtime?: DateTimeFieldUpdateOperationsInput | Date | string
    loguser?: IntFieldUpdateOperationsInput | number
  }

  export type wes_bewegungsdaten_catCreateManyInput = {
    id?: number
    value?: string | null
    att_id: number
    park_id: number
    remarks?: string | null
    logtime: Date | string
    loguser: number
  }

  export type wes_bewegungsdaten_catUpdateManyMutationInput = {
    value?: NullableStringFieldUpdateOperationsInput | string | null
    att_id?: IntFieldUpdateOperationsInput | number
    park_id?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    logtime?: DateTimeFieldUpdateOperationsInput | Date | string
    loguser?: IntFieldUpdateOperationsInput | number
  }

  export type wes_bewegungsdaten_catUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    att_id?: IntFieldUpdateOperationsInput | number
    park_id?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    logtime?: DateTimeFieldUpdateOperationsInput | Date | string
    loguser?: IntFieldUpdateOperationsInput | number
  }

  export type wes_bewegungsdaten_dateCreateInput = {
    type: number
    user: number
    date_created?: Date | string | null
    user_created: number
    park_id: number
    frist: Date | string
    start_date?: Date | string | null
    start_user: number
    end_date?: Date | string | null
    end_user: number
    reminder_sent?: Date | string | null
    reminder_II_sent?: Date | string | null
    status?: number
    bemerkungen?: string | null
    final?: number | null
    steps?: string | null
    partner?: string | null
  }

  export type wes_bewegungsdaten_dateUncheckedCreateInput = {
    id?: number
    type: number
    user: number
    date_created?: Date | string | null
    user_created: number
    park_id: number
    frist: Date | string
    start_date?: Date | string | null
    start_user: number
    end_date?: Date | string | null
    end_user: number
    reminder_sent?: Date | string | null
    reminder_II_sent?: Date | string | null
    status?: number
    bemerkungen?: string | null
    final?: number | null
    steps?: string | null
    partner?: string | null
  }

  export type wes_bewegungsdaten_dateUpdateInput = {
    type?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_created?: IntFieldUpdateOperationsInput | number
    park_id?: IntFieldUpdateOperationsInput | number
    frist?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_user?: IntFieldUpdateOperationsInput | number
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_user?: IntFieldUpdateOperationsInput | number
    reminder_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder_II_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    bemerkungen?: NullableStringFieldUpdateOperationsInput | string | null
    final?: NullableIntFieldUpdateOperationsInput | number | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    partner?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_bewegungsdaten_dateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_created?: IntFieldUpdateOperationsInput | number
    park_id?: IntFieldUpdateOperationsInput | number
    frist?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_user?: IntFieldUpdateOperationsInput | number
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_user?: IntFieldUpdateOperationsInput | number
    reminder_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder_II_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    bemerkungen?: NullableStringFieldUpdateOperationsInput | string | null
    final?: NullableIntFieldUpdateOperationsInput | number | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    partner?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_bewegungsdaten_dateCreateManyInput = {
    id?: number
    type: number
    user: number
    date_created?: Date | string | null
    user_created: number
    park_id: number
    frist: Date | string
    start_date?: Date | string | null
    start_user: number
    end_date?: Date | string | null
    end_user: number
    reminder_sent?: Date | string | null
    reminder_II_sent?: Date | string | null
    status?: number
    bemerkungen?: string | null
    final?: number | null
    steps?: string | null
    partner?: string | null
  }

  export type wes_bewegungsdaten_dateUpdateManyMutationInput = {
    type?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_created?: IntFieldUpdateOperationsInput | number
    park_id?: IntFieldUpdateOperationsInput | number
    frist?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_user?: IntFieldUpdateOperationsInput | number
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_user?: IntFieldUpdateOperationsInput | number
    reminder_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder_II_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    bemerkungen?: NullableStringFieldUpdateOperationsInput | string | null
    final?: NullableIntFieldUpdateOperationsInput | number | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    partner?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_bewegungsdaten_dateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    date_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_created?: IntFieldUpdateOperationsInput | number
    park_id?: IntFieldUpdateOperationsInput | number
    frist?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_user?: IntFieldUpdateOperationsInput | number
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_user?: IntFieldUpdateOperationsInput | number
    reminder_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder_II_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: IntFieldUpdateOperationsInput | number
    bemerkungen?: NullableStringFieldUpdateOperationsInput | string | null
    final?: NullableIntFieldUpdateOperationsInput | number | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    partner?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_bewegungsdaten_date_auditCreateInput = {
    text: string
    reg_date?: Date | string | null
    user?: number | null
    date?: number | null
  }

  export type wes_bewegungsdaten_date_auditUncheckedCreateInput = {
    id?: number
    text: string
    reg_date?: Date | string | null
    user?: number | null
    date?: number | null
  }

  export type wes_bewegungsdaten_date_auditUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type wes_bewegungsdaten_date_auditUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type wes_bewegungsdaten_date_auditCreateManyInput = {
    id?: number
    text: string
    reg_date?: Date | string | null
    user?: number | null
    date?: number | null
  }

  export type wes_bewegungsdaten_date_auditUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type wes_bewegungsdaten_date_auditUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    reg_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type wes_catCreateInput = {
    catname?: string | null
    type_id?: number | null
    sort?: string | null
  }

  export type wes_catUncheckedCreateInput = {
    id?: number
    catname?: string | null
    type_id?: number | null
    sort?: string | null
  }

  export type wes_catUpdateInput = {
    catname?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_catUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    catname?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_catCreateManyInput = {
    id?: number
    catname?: string | null
    type_id?: number | null
    sort?: string | null
  }

  export type wes_catUpdateManyMutationInput = {
    catname?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_catUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    catname?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_dates_templateCreateInput = {
    datename?: string | null
    date_type?: number
    reminder?: number
    reminderII?: number
    partner?: string | null
    steps?: string | null
    wiedervorlage?: number
    status?: string | null
    bemerkungen?: string | null
  }

  export type wes_dates_templateUncheckedCreateInput = {
    id?: number
    datename?: string | null
    date_type?: number
    reminder?: number
    reminderII?: number
    partner?: string | null
    steps?: string | null
    wiedervorlage?: number
    status?: string | null
    bemerkungen?: string | null
  }

  export type wes_dates_templateUpdateInput = {
    datename?: NullableStringFieldUpdateOperationsInput | string | null
    date_type?: IntFieldUpdateOperationsInput | number
    reminder?: IntFieldUpdateOperationsInput | number
    reminderII?: IntFieldUpdateOperationsInput | number
    partner?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    wiedervorlage?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    bemerkungen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_dates_templateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    datename?: NullableStringFieldUpdateOperationsInput | string | null
    date_type?: IntFieldUpdateOperationsInput | number
    reminder?: IntFieldUpdateOperationsInput | number
    reminderII?: IntFieldUpdateOperationsInput | number
    partner?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    wiedervorlage?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    bemerkungen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_dates_templateCreateManyInput = {
    id?: number
    datename?: string | null
    date_type?: number
    reminder?: number
    reminderII?: number
    partner?: string | null
    steps?: string | null
    wiedervorlage?: number
    status?: string | null
    bemerkungen?: string | null
  }

  export type wes_dates_templateUpdateManyMutationInput = {
    datename?: NullableStringFieldUpdateOperationsInput | string | null
    date_type?: IntFieldUpdateOperationsInput | number
    reminder?: IntFieldUpdateOperationsInput | number
    reminderII?: IntFieldUpdateOperationsInput | number
    partner?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    wiedervorlage?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    bemerkungen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_dates_templateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    datename?: NullableStringFieldUpdateOperationsInput | string | null
    date_type?: IntFieldUpdateOperationsInput | number
    reminder?: IntFieldUpdateOperationsInput | number
    reminderII?: IntFieldUpdateOperationsInput | number
    partner?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableStringFieldUpdateOperationsInput | string | null
    wiedervorlage?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    bemerkungen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_dvCreateInput = {
    dv: string
  }

  export type wes_dvUncheckedCreateInput = {
    id?: number
    dv: string
  }

  export type wes_dvUpdateInput = {
    dv?: StringFieldUpdateOperationsInput | string
  }

  export type wes_dvUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dv?: StringFieldUpdateOperationsInput | string
  }

  export type wes_dvCreateManyInput = {
    id?: number
    dv: string
  }

  export type wes_dvUpdateManyMutationInput = {
    dv?: StringFieldUpdateOperationsInput | string
  }

  export type wes_dvUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dv?: StringFieldUpdateOperationsInput | string
  }

  export type wes_eisCreateInput = {
    park_id: number
    monat?: number | null
    jahr?: number | null
    einsatz?: number
    lastgang?: number
    minute?: number
    enwg?: number
    dvred?: number
    durchremark?: string | null
    rechnung?: number
    rechnungnummer?: string | null
    rechnungremark?: string | null
  }

  export type wes_eisUncheckedCreateInput = {
    id?: number
    park_id: number
    monat?: number | null
    jahr?: number | null
    einsatz?: number
    lastgang?: number
    minute?: number
    enwg?: number
    dvred?: number
    durchremark?: string | null
    rechnung?: number
    rechnungnummer?: string | null
    rechnungremark?: string | null
  }

  export type wes_eisUpdateInput = {
    park_id?: IntFieldUpdateOperationsInput | number
    monat?: NullableIntFieldUpdateOperationsInput | number | null
    jahr?: NullableIntFieldUpdateOperationsInput | number | null
    einsatz?: IntFieldUpdateOperationsInput | number
    lastgang?: IntFieldUpdateOperationsInput | number
    minute?: IntFieldUpdateOperationsInput | number
    enwg?: IntFieldUpdateOperationsInput | number
    dvred?: IntFieldUpdateOperationsInput | number
    durchremark?: NullableStringFieldUpdateOperationsInput | string | null
    rechnung?: IntFieldUpdateOperationsInput | number
    rechnungnummer?: NullableStringFieldUpdateOperationsInput | string | null
    rechnungremark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_eisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    park_id?: IntFieldUpdateOperationsInput | number
    monat?: NullableIntFieldUpdateOperationsInput | number | null
    jahr?: NullableIntFieldUpdateOperationsInput | number | null
    einsatz?: IntFieldUpdateOperationsInput | number
    lastgang?: IntFieldUpdateOperationsInput | number
    minute?: IntFieldUpdateOperationsInput | number
    enwg?: IntFieldUpdateOperationsInput | number
    dvred?: IntFieldUpdateOperationsInput | number
    durchremark?: NullableStringFieldUpdateOperationsInput | string | null
    rechnung?: IntFieldUpdateOperationsInput | number
    rechnungnummer?: NullableStringFieldUpdateOperationsInput | string | null
    rechnungremark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_eisCreateManyInput = {
    id?: number
    park_id: number
    monat?: number | null
    jahr?: number | null
    einsatz?: number
    lastgang?: number
    minute?: number
    enwg?: number
    dvred?: number
    durchremark?: string | null
    rechnung?: number
    rechnungnummer?: string | null
    rechnungremark?: string | null
  }

  export type wes_eisUpdateManyMutationInput = {
    park_id?: IntFieldUpdateOperationsInput | number
    monat?: NullableIntFieldUpdateOperationsInput | number | null
    jahr?: NullableIntFieldUpdateOperationsInput | number | null
    einsatz?: IntFieldUpdateOperationsInput | number
    lastgang?: IntFieldUpdateOperationsInput | number
    minute?: IntFieldUpdateOperationsInput | number
    enwg?: IntFieldUpdateOperationsInput | number
    dvred?: IntFieldUpdateOperationsInput | number
    durchremark?: NullableStringFieldUpdateOperationsInput | string | null
    rechnung?: IntFieldUpdateOperationsInput | number
    rechnungnummer?: NullableStringFieldUpdateOperationsInput | string | null
    rechnungremark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_eisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    park_id?: IntFieldUpdateOperationsInput | number
    monat?: NullableIntFieldUpdateOperationsInput | number | null
    jahr?: NullableIntFieldUpdateOperationsInput | number | null
    einsatz?: IntFieldUpdateOperationsInput | number
    lastgang?: IntFieldUpdateOperationsInput | number
    minute?: IntFieldUpdateOperationsInput | number
    enwg?: IntFieldUpdateOperationsInput | number
    dvred?: IntFieldUpdateOperationsInput | number
    durchremark?: NullableStringFieldUpdateOperationsInput | string | null
    rechnung?: IntFieldUpdateOperationsInput | number
    rechnungnummer?: NullableStringFieldUpdateOperationsInput | string | null
    rechnungremark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_kaCreateInput = {
    ka: string
    sort?: string | null
  }

  export type wes_kaUncheckedCreateInput = {
    id?: number
    ka: string
    sort?: string | null
  }

  export type wes_kaUpdateInput = {
    ka?: StringFieldUpdateOperationsInput | string
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_kaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ka?: StringFieldUpdateOperationsInput | string
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_kaCreateManyInput = {
    id?: number
    ka: string
    sort?: string | null
  }

  export type wes_kaUpdateManyMutationInput = {
    ka?: StringFieldUpdateOperationsInput | string
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_kaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ka?: StringFieldUpdateOperationsInput | string
    sort?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_ka_kontaktCreateInput = {
    ka: number
    kid: number
    value: string
  }

  export type wes_ka_kontaktUncheckedCreateInput = {
    ka: number
    kid: number
    value: string
  }

  export type wes_ka_kontaktUpdateInput = {
    ka?: IntFieldUpdateOperationsInput | number
    kid?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type wes_ka_kontaktUncheckedUpdateInput = {
    ka?: IntFieldUpdateOperationsInput | number
    kid?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type wes_ka_kontaktCreateManyInput = {
    ka: number
    kid: number
    value: string
  }

  export type wes_ka_kontaktUpdateManyMutationInput = {
    ka?: IntFieldUpdateOperationsInput | number
    kid?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type wes_ka_kontaktUncheckedUpdateManyInput = {
    ka?: IntFieldUpdateOperationsInput | number
    kid?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type wes_kfCreateInput = {
    funktion?: string | null
  }

  export type wes_kfUncheckedCreateInput = {
    id?: number
    funktion?: string | null
  }

  export type wes_kfUpdateInput = {
    funktion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_kfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    funktion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_kfCreateManyInput = {
    id?: number
    funktion?: string | null
  }

  export type wes_kfUpdateManyMutationInput = {
    funktion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_kfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    funktion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_kontaktCreateInput = {
    name: string
  }

  export type wes_kontaktUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type wes_kontaktUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type wes_kontaktUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type wes_kontaktCreateManyInput = {
    id?: number
    name: string
  }

  export type wes_kontaktUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type wes_kontaktUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type wes_kontakt_parkCreateInput = {
    parkid: number
    kid: number
    kfid: number
  }

  export type wes_kontakt_parkUncheckedCreateInput = {
    parkid: number
    kid: number
    kfid: number
  }

  export type wes_kontakt_parkUpdateInput = {
    parkid?: IntFieldUpdateOperationsInput | number
    kid?: IntFieldUpdateOperationsInput | number
    kfid?: IntFieldUpdateOperationsInput | number
  }

  export type wes_kontakt_parkUncheckedUpdateInput = {
    parkid?: IntFieldUpdateOperationsInput | number
    kid?: IntFieldUpdateOperationsInput | number
    kfid?: IntFieldUpdateOperationsInput | number
  }

  export type wes_kontakt_parkCreateManyInput = {
    parkid: number
    kid: number
    kfid: number
  }

  export type wes_kontakt_parkUpdateManyMutationInput = {
    parkid?: IntFieldUpdateOperationsInput | number
    kid?: IntFieldUpdateOperationsInput | number
    kfid?: IntFieldUpdateOperationsInput | number
  }

  export type wes_kontakt_parkUncheckedUpdateManyInput = {
    parkid?: IntFieldUpdateOperationsInput | number
    kid?: IntFieldUpdateOperationsInput | number
    kfid?: IntFieldUpdateOperationsInput | number
  }

  export type wes_parkCreateInput = {
    parkname?: string | null
    ischild?: number | null
    istype: number
    isuser?: number | null
  }

  export type wes_parkUncheckedCreateInput = {
    id?: number
    parkname?: string | null
    ischild?: number | null
    istype: number
    isuser?: number | null
  }

  export type wes_parkUpdateInput = {
    parkname?: NullableStringFieldUpdateOperationsInput | string | null
    ischild?: NullableIntFieldUpdateOperationsInput | number | null
    istype?: IntFieldUpdateOperationsInput | number
    isuser?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type wes_parkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parkname?: NullableStringFieldUpdateOperationsInput | string | null
    ischild?: NullableIntFieldUpdateOperationsInput | number | null
    istype?: IntFieldUpdateOperationsInput | number
    isuser?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type wes_parkCreateManyInput = {
    id?: number
    parkname?: string | null
    ischild?: number | null
    istype: number
    isuser?: number | null
  }

  export type wes_parkUpdateManyMutationInput = {
    parkname?: NullableStringFieldUpdateOperationsInput | string | null
    ischild?: NullableIntFieldUpdateOperationsInput | number | null
    istype?: IntFieldUpdateOperationsInput | number
    isuser?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type wes_parkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parkname?: NullableStringFieldUpdateOperationsInput | string | null
    ischild?: NullableIntFieldUpdateOperationsInput | number | null
    istype?: IntFieldUpdateOperationsInput | number
    isuser?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type wes_statusCreateInput = {
    status: string
    sort: string
    prio?: number
  }

  export type wes_statusUncheckedCreateInput = {
    id?: number
    status: string
    sort: string
    prio?: number
  }

  export type wes_statusUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    sort?: StringFieldUpdateOperationsInput | string
    prio?: FloatFieldUpdateOperationsInput | number
  }

  export type wes_statusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sort?: StringFieldUpdateOperationsInput | string
    prio?: FloatFieldUpdateOperationsInput | number
  }

  export type wes_statusCreateManyInput = {
    id?: number
    status: string
    sort: string
    prio?: number
  }

  export type wes_statusUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    sort?: StringFieldUpdateOperationsInput | string
    prio?: FloatFieldUpdateOperationsInput | number
  }

  export type wes_statusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sort?: StringFieldUpdateOperationsInput | string
    prio?: FloatFieldUpdateOperationsInput | number
  }

  export type wes_stepsCreateInput = {
    stepname: string
  }

  export type wes_stepsUncheckedCreateInput = {
    id?: number
    stepname: string
  }

  export type wes_stepsUpdateInput = {
    stepname?: StringFieldUpdateOperationsInput | string
  }

  export type wes_stepsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepname?: StringFieldUpdateOperationsInput | string
  }

  export type wes_stepsCreateManyInput = {
    id?: number
    stepname: string
  }

  export type wes_stepsUpdateManyMutationInput = {
    stepname?: StringFieldUpdateOperationsInput | string
  }

  export type wes_stepsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepname?: StringFieldUpdateOperationsInput | string
  }

  export type wes_typeCreateInput = {
    typename?: string | null
  }

  export type wes_typeUncheckedCreateInput = {
    id?: number
    typename?: string | null
  }

  export type wes_typeUpdateInput = {
    typename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_typeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    typename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_typeCreateManyInput = {
    id?: number
    typename?: string | null
  }

  export type wes_typeUpdateManyMutationInput = {
    typename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_typeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    typename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wes_userCreateInput = {
    username: string
    firstname: string
    lastname: string
    email?: string | null
    last_login?: Date | string | null
    heartbeat?: Date | string | null
    password: string
    level: number
  }

  export type wes_userUncheckedCreateInput = {
    id?: number
    username: string
    firstname: string
    lastname: string
    email?: string | null
    last_login?: Date | string | null
    heartbeat?: Date | string | null
    password: string
    level: number
  }

  export type wes_userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type wes_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type wes_userCreateManyInput = {
    id?: number
    username: string
    firstname: string
    lastname: string
    email?: string | null
    last_login?: Date | string | null
    heartbeat?: Date | string | null
    password: string
    level: number
  }

  export type wes_userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type wes_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type tbl_registryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type tbl_registryAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type tbl_registryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type tbl_registryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type tbl_registrySumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type wes_attCountOrderByAggregateInput = {
    id?: SortOrder
    attname?: SortOrder
    cat_id?: SortOrder
    sort?: SortOrder
  }

  export type wes_attAvgOrderByAggregateInput = {
    id?: SortOrder
    cat_id?: SortOrder
  }

  export type wes_attMaxOrderByAggregateInput = {
    id?: SortOrder
    attname?: SortOrder
    cat_id?: SortOrder
    sort?: SortOrder
  }

  export type wes_attMinOrderByAggregateInput = {
    id?: SortOrder
    attname?: SortOrder
    cat_id?: SortOrder
    sort?: SortOrder
  }

  export type wes_attSumOrderByAggregateInput = {
    id?: SortOrder
    cat_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type wes_bewegungsdaten_catCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    att_id?: SortOrder
    park_id?: SortOrder
    remarks?: SortOrder
    logtime?: SortOrder
    loguser?: SortOrder
  }

  export type wes_bewegungsdaten_catAvgOrderByAggregateInput = {
    id?: SortOrder
    att_id?: SortOrder
    park_id?: SortOrder
    loguser?: SortOrder
  }

  export type wes_bewegungsdaten_catMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    att_id?: SortOrder
    park_id?: SortOrder
    remarks?: SortOrder
    logtime?: SortOrder
    loguser?: SortOrder
  }

  export type wes_bewegungsdaten_catMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    att_id?: SortOrder
    park_id?: SortOrder
    remarks?: SortOrder
    logtime?: SortOrder
    loguser?: SortOrder
  }

  export type wes_bewegungsdaten_catSumOrderByAggregateInput = {
    id?: SortOrder
    att_id?: SortOrder
    park_id?: SortOrder
    loguser?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type wes_bewegungsdaten_dateCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    user?: SortOrder
    date_created?: SortOrder
    user_created?: SortOrder
    park_id?: SortOrder
    frist?: SortOrder
    start_date?: SortOrder
    start_user?: SortOrder
    end_date?: SortOrder
    end_user?: SortOrder
    reminder_sent?: SortOrder
    reminder_II_sent?: SortOrder
    status?: SortOrder
    bemerkungen?: SortOrder
    final?: SortOrder
    steps?: SortOrder
    partner?: SortOrder
  }

  export type wes_bewegungsdaten_dateAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    user?: SortOrder
    user_created?: SortOrder
    park_id?: SortOrder
    start_user?: SortOrder
    end_user?: SortOrder
    status?: SortOrder
    final?: SortOrder
  }

  export type wes_bewegungsdaten_dateMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    user?: SortOrder
    date_created?: SortOrder
    user_created?: SortOrder
    park_id?: SortOrder
    frist?: SortOrder
    start_date?: SortOrder
    start_user?: SortOrder
    end_date?: SortOrder
    end_user?: SortOrder
    reminder_sent?: SortOrder
    reminder_II_sent?: SortOrder
    status?: SortOrder
    bemerkungen?: SortOrder
    final?: SortOrder
    steps?: SortOrder
    partner?: SortOrder
  }

  export type wes_bewegungsdaten_dateMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    user?: SortOrder
    date_created?: SortOrder
    user_created?: SortOrder
    park_id?: SortOrder
    frist?: SortOrder
    start_date?: SortOrder
    start_user?: SortOrder
    end_date?: SortOrder
    end_user?: SortOrder
    reminder_sent?: SortOrder
    reminder_II_sent?: SortOrder
    status?: SortOrder
    bemerkungen?: SortOrder
    final?: SortOrder
    steps?: SortOrder
    partner?: SortOrder
  }

  export type wes_bewegungsdaten_dateSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    user?: SortOrder
    user_created?: SortOrder
    park_id?: SortOrder
    start_user?: SortOrder
    end_user?: SortOrder
    status?: SortOrder
    final?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type wes_bewegungsdaten_date_auditCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    reg_date?: SortOrder
    user?: SortOrder
    date?: SortOrder
  }

  export type wes_bewegungsdaten_date_auditAvgOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    date?: SortOrder
  }

  export type wes_bewegungsdaten_date_auditMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    reg_date?: SortOrder
    user?: SortOrder
    date?: SortOrder
  }

  export type wes_bewegungsdaten_date_auditMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    reg_date?: SortOrder
    user?: SortOrder
    date?: SortOrder
  }

  export type wes_bewegungsdaten_date_auditSumOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    date?: SortOrder
  }

  export type wes_catCountOrderByAggregateInput = {
    id?: SortOrder
    catname?: SortOrder
    type_id?: SortOrder
    sort?: SortOrder
  }

  export type wes_catAvgOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
  }

  export type wes_catMaxOrderByAggregateInput = {
    id?: SortOrder
    catname?: SortOrder
    type_id?: SortOrder
    sort?: SortOrder
  }

  export type wes_catMinOrderByAggregateInput = {
    id?: SortOrder
    catname?: SortOrder
    type_id?: SortOrder
    sort?: SortOrder
  }

  export type wes_catSumOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
  }

  export type wes_dates_templateCountOrderByAggregateInput = {
    id?: SortOrder
    datename?: SortOrder
    date_type?: SortOrder
    reminder?: SortOrder
    reminderII?: SortOrder
    partner?: SortOrder
    steps?: SortOrder
    wiedervorlage?: SortOrder
    status?: SortOrder
    bemerkungen?: SortOrder
  }

  export type wes_dates_templateAvgOrderByAggregateInput = {
    id?: SortOrder
    date_type?: SortOrder
    reminder?: SortOrder
    reminderII?: SortOrder
    wiedervorlage?: SortOrder
  }

  export type wes_dates_templateMaxOrderByAggregateInput = {
    id?: SortOrder
    datename?: SortOrder
    date_type?: SortOrder
    reminder?: SortOrder
    reminderII?: SortOrder
    partner?: SortOrder
    steps?: SortOrder
    wiedervorlage?: SortOrder
    status?: SortOrder
    bemerkungen?: SortOrder
  }

  export type wes_dates_templateMinOrderByAggregateInput = {
    id?: SortOrder
    datename?: SortOrder
    date_type?: SortOrder
    reminder?: SortOrder
    reminderII?: SortOrder
    partner?: SortOrder
    steps?: SortOrder
    wiedervorlage?: SortOrder
    status?: SortOrder
    bemerkungen?: SortOrder
  }

  export type wes_dates_templateSumOrderByAggregateInput = {
    id?: SortOrder
    date_type?: SortOrder
    reminder?: SortOrder
    reminderII?: SortOrder
    wiedervorlage?: SortOrder
  }

  export type wes_dvCountOrderByAggregateInput = {
    id?: SortOrder
    dv?: SortOrder
  }

  export type wes_dvAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_dvMaxOrderByAggregateInput = {
    id?: SortOrder
    dv?: SortOrder
  }

  export type wes_dvMinOrderByAggregateInput = {
    id?: SortOrder
    dv?: SortOrder
  }

  export type wes_dvSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_eisCountOrderByAggregateInput = {
    id?: SortOrder
    park_id?: SortOrder
    monat?: SortOrder
    jahr?: SortOrder
    einsatz?: SortOrder
    lastgang?: SortOrder
    minute?: SortOrder
    enwg?: SortOrder
    dvred?: SortOrder
    durchremark?: SortOrder
    rechnung?: SortOrder
    rechnungnummer?: SortOrder
    rechnungremark?: SortOrder
  }

  export type wes_eisAvgOrderByAggregateInput = {
    id?: SortOrder
    park_id?: SortOrder
    monat?: SortOrder
    jahr?: SortOrder
    einsatz?: SortOrder
    lastgang?: SortOrder
    minute?: SortOrder
    enwg?: SortOrder
    dvred?: SortOrder
    rechnung?: SortOrder
  }

  export type wes_eisMaxOrderByAggregateInput = {
    id?: SortOrder
    park_id?: SortOrder
    monat?: SortOrder
    jahr?: SortOrder
    einsatz?: SortOrder
    lastgang?: SortOrder
    minute?: SortOrder
    enwg?: SortOrder
    dvred?: SortOrder
    durchremark?: SortOrder
    rechnung?: SortOrder
    rechnungnummer?: SortOrder
    rechnungremark?: SortOrder
  }

  export type wes_eisMinOrderByAggregateInput = {
    id?: SortOrder
    park_id?: SortOrder
    monat?: SortOrder
    jahr?: SortOrder
    einsatz?: SortOrder
    lastgang?: SortOrder
    minute?: SortOrder
    enwg?: SortOrder
    dvred?: SortOrder
    durchremark?: SortOrder
    rechnung?: SortOrder
    rechnungnummer?: SortOrder
    rechnungremark?: SortOrder
  }

  export type wes_eisSumOrderByAggregateInput = {
    id?: SortOrder
    park_id?: SortOrder
    monat?: SortOrder
    jahr?: SortOrder
    einsatz?: SortOrder
    lastgang?: SortOrder
    minute?: SortOrder
    enwg?: SortOrder
    dvred?: SortOrder
    rechnung?: SortOrder
  }

  export type wes_kaCountOrderByAggregateInput = {
    id?: SortOrder
    ka?: SortOrder
    sort?: SortOrder
  }

  export type wes_kaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_kaMaxOrderByAggregateInput = {
    id?: SortOrder
    ka?: SortOrder
    sort?: SortOrder
  }

  export type wes_kaMinOrderByAggregateInput = {
    id?: SortOrder
    ka?: SortOrder
    sort?: SortOrder
  }

  export type wes_kaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_ka_kontaktKaKidCompoundUniqueInput = {
    ka: number
    kid: number
  }

  export type wes_ka_kontaktCountOrderByAggregateInput = {
    ka?: SortOrder
    kid?: SortOrder
    value?: SortOrder
  }

  export type wes_ka_kontaktAvgOrderByAggregateInput = {
    ka?: SortOrder
    kid?: SortOrder
  }

  export type wes_ka_kontaktMaxOrderByAggregateInput = {
    ka?: SortOrder
    kid?: SortOrder
    value?: SortOrder
  }

  export type wes_ka_kontaktMinOrderByAggregateInput = {
    ka?: SortOrder
    kid?: SortOrder
    value?: SortOrder
  }

  export type wes_ka_kontaktSumOrderByAggregateInput = {
    ka?: SortOrder
    kid?: SortOrder
  }

  export type wes_kfCountOrderByAggregateInput = {
    id?: SortOrder
    funktion?: SortOrder
  }

  export type wes_kfAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_kfMaxOrderByAggregateInput = {
    id?: SortOrder
    funktion?: SortOrder
  }

  export type wes_kfMinOrderByAggregateInput = {
    id?: SortOrder
    funktion?: SortOrder
  }

  export type wes_kfSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_kontaktCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type wes_kontaktAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_kontaktMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type wes_kontaktMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type wes_kontaktSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_kontakt_parkParkidKidKfidCompoundUniqueInput = {
    parkid: number
    kid: number
    kfid: number
  }

  export type wes_kontakt_parkCountOrderByAggregateInput = {
    parkid?: SortOrder
    kid?: SortOrder
    kfid?: SortOrder
  }

  export type wes_kontakt_parkAvgOrderByAggregateInput = {
    parkid?: SortOrder
    kid?: SortOrder
    kfid?: SortOrder
  }

  export type wes_kontakt_parkMaxOrderByAggregateInput = {
    parkid?: SortOrder
    kid?: SortOrder
    kfid?: SortOrder
  }

  export type wes_kontakt_parkMinOrderByAggregateInput = {
    parkid?: SortOrder
    kid?: SortOrder
    kfid?: SortOrder
  }

  export type wes_kontakt_parkSumOrderByAggregateInput = {
    parkid?: SortOrder
    kid?: SortOrder
    kfid?: SortOrder
  }

  export type wes_parkCountOrderByAggregateInput = {
    id?: SortOrder
    parkname?: SortOrder
    ischild?: SortOrder
    istype?: SortOrder
    isuser?: SortOrder
  }

  export type wes_parkAvgOrderByAggregateInput = {
    id?: SortOrder
    ischild?: SortOrder
    istype?: SortOrder
    isuser?: SortOrder
  }

  export type wes_parkMaxOrderByAggregateInput = {
    id?: SortOrder
    parkname?: SortOrder
    ischild?: SortOrder
    istype?: SortOrder
    isuser?: SortOrder
  }

  export type wes_parkMinOrderByAggregateInput = {
    id?: SortOrder
    parkname?: SortOrder
    ischild?: SortOrder
    istype?: SortOrder
    isuser?: SortOrder
  }

  export type wes_parkSumOrderByAggregateInput = {
    id?: SortOrder
    ischild?: SortOrder
    istype?: SortOrder
    isuser?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type wes_statusCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    sort?: SortOrder
    prio?: SortOrder
  }

  export type wes_statusAvgOrderByAggregateInput = {
    id?: SortOrder
    prio?: SortOrder
  }

  export type wes_statusMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    sort?: SortOrder
    prio?: SortOrder
  }

  export type wes_statusMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    sort?: SortOrder
    prio?: SortOrder
  }

  export type wes_statusSumOrderByAggregateInput = {
    id?: SortOrder
    prio?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type wes_stepsCountOrderByAggregateInput = {
    id?: SortOrder
    stepname?: SortOrder
  }

  export type wes_stepsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_stepsMaxOrderByAggregateInput = {
    id?: SortOrder
    stepname?: SortOrder
  }

  export type wes_stepsMinOrderByAggregateInput = {
    id?: SortOrder
    stepname?: SortOrder
  }

  export type wes_stepsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_typeCountOrderByAggregateInput = {
    id?: SortOrder
    typename?: SortOrder
  }

  export type wes_typeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    typename?: SortOrder
  }

  export type wes_typeMinOrderByAggregateInput = {
    id?: SortOrder
    typename?: SortOrder
  }

  export type wes_typeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type wes_userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    last_login?: SortOrder
    heartbeat?: SortOrder
    password?: SortOrder
    level?: SortOrder
  }

  export type wes_userAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type wes_userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    last_login?: SortOrder
    heartbeat?: SortOrder
    password?: SortOrder
    level?: SortOrder
  }

  export type wes_userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    last_login?: SortOrder
    heartbeat?: SortOrder
    password?: SortOrder
    level?: SortOrder
  }

  export type wes_userSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}