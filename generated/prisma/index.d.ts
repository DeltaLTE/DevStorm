
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model produk
 * 
 */
export type produk = $Result.DefaultSelection<Prisma.$produkPayload>
/**
 * Model transaksi
 * 
 */
export type transaksi = $Result.DefaultSelection<Prisma.$transaksiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Produks
 * const produks = await prisma.produk.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Produks
   * const produks = await prisma.produk.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.produk`: Exposes CRUD operations for the **produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.produkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.transaksiDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    produk: 'produk',
    transaksi: 'transaksi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "produk" | "transaksi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      produk: {
        payload: Prisma.$produkPayload<ExtArgs>
        fields: Prisma.produkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findFirst: {
            args: Prisma.produkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findMany: {
            args: Prisma.produkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          create: {
            args: Prisma.produkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          createMany: {
            args: Prisma.produkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          delete: {
            args: Prisma.produkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          update: {
            args: Prisma.produkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          deleteMany: {
            args: Prisma.produkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          upsert: {
            args: Prisma.produkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.produkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.produkCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      transaksi: {
        payload: Prisma.$transaksiPayload<ExtArgs>
        fields: Prisma.transaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          findFirst: {
            args: Prisma.transaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          findMany: {
            args: Prisma.transaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          create: {
            args: Prisma.transaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          createMany: {
            args: Prisma.transaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          delete: {
            args: Prisma.transaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          update: {
            args: Prisma.transaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          deleteMany: {
            args: Prisma.transaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaksiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          upsert: {
            args: Prisma.transaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.transaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    produk?: produkOmit
    transaksi?: transaksiOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    transaksi: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | ProdukCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    id_produk: number | null
    harga: number | null
    stok: number | null
  }

  export type ProdukSumAggregateOutputType = {
    id_produk: number | null
    harga: number | null
    stok: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id_produk: number | null
    nama_produk: string | null
    harga: number | null
    stok: number | null
    foto: string | null
    deskripsi: string | null
  }

  export type ProdukMaxAggregateOutputType = {
    id_produk: number | null
    nama_produk: string | null
    harga: number | null
    stok: number | null
    foto: string | null
    deskripsi: string | null
  }

  export type ProdukCountAggregateOutputType = {
    id_produk: number
    nama_produk: number
    harga: number
    stok: number
    foto: number
    deskripsi: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    id_produk?: true
    harga?: true
    stok?: true
  }

  export type ProdukSumAggregateInputType = {
    id_produk?: true
    harga?: true
    stok?: true
  }

  export type ProdukMinAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    harga?: true
    stok?: true
    foto?: true
    deskripsi?: true
  }

  export type ProdukMaxAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    harga?: true
    stok?: true
    foto?: true
    deskripsi?: true
  }

  export type ProdukCountAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    harga?: true
    stok?: true
    foto?: true
    deskripsi?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produk to aggregate.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type produkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
    orderBy?: produkOrderByWithAggregationInput | produkOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: produkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id_produk: number
    nama_produk: string | null
    harga: number | null
    stok: number | null
    foto: string | null
    deskripsi: string | null
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends produkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type produkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    stok?: boolean
    foto?: boolean
    deskripsi?: boolean
    transaksi?: boolean | produk$transaksiArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type produkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    stok?: boolean
    foto?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["produk"]>

  export type produkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    stok?: boolean
    foto?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["produk"]>

  export type produkSelectScalar = {
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    stok?: boolean
    foto?: boolean
    deskripsi?: boolean
  }

  export type produkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produk" | "nama_produk" | "harga" | "stok" | "foto" | "deskripsi", ExtArgs["result"]["produk"]>
  export type produkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | produk$transaksiArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type produkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type produkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $produkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produk"
    objects: {
      transaksi: Prisma.$transaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produk: number
      nama_produk: string | null
      harga: number | null
      stok: number | null
      foto: string | null
      deskripsi: string | null
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type produkGetPayload<S extends boolean | null | undefined | produkDefaultArgs> = $Result.GetResult<Prisma.$produkPayload, S>

  type produkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface produkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produk'], meta: { name: 'produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {produkFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produkFindUniqueArgs>(args: SelectSubset<T, produkFindUniqueArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produkFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produkFindUniqueOrThrowArgs>(args: SelectSubset<T, produkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produkFindFirstArgs>(args?: SelectSubset<T, produkFindFirstArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produkFindFirstOrThrowArgs>(args?: SelectSubset<T, produkFindFirstOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.findMany({ select: { id_produk: true } })
     * 
     */
    findMany<T extends produkFindManyArgs>(args?: SelectSubset<T, produkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {produkCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends produkCreateArgs>(args: SelectSubset<T, produkCreateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {produkCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produkCreateManyArgs>(args?: SelectSubset<T, produkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produks and returns the data saved in the database.
     * @param {produkCreateManyAndReturnArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produks and only return the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.createManyAndReturn({
     *   select: { id_produk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produkCreateManyAndReturnArgs>(args?: SelectSubset<T, produkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produk.
     * @param {produkDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends produkDeleteArgs>(args: SelectSubset<T, produkDeleteArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {produkUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produkUpdateArgs>(args: SelectSubset<T, produkUpdateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {produkDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produkDeleteManyArgs>(args?: SelectSubset<T, produkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produkUpdateManyArgs>(args: SelectSubset<T, produkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks and returns the data updated in the database.
     * @param {produkUpdateManyAndReturnArgs} args - Arguments to update many Produks.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produks and only return the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.updateManyAndReturn({
     *   select: { id_produk: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends produkUpdateManyAndReturnArgs>(args: SelectSubset<T, produkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produk.
     * @param {produkUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends produkUpsertArgs>(args: SelectSubset<T, produkUpsertArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends produkCountArgs>(
      args?: Subset<T, produkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGroupByArgs} args - Group by arguments.
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
      T extends produkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produkGroupByArgs['orderBy'] }
        : { orderBy?: produkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, produkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produk model
   */
  readonly fields: produkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends produk$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, produk$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produk model
   */
  interface produkFieldRefs {
    readonly id_produk: FieldRef<"produk", 'Int'>
    readonly nama_produk: FieldRef<"produk", 'String'>
    readonly harga: FieldRef<"produk", 'Int'>
    readonly stok: FieldRef<"produk", 'Int'>
    readonly foto: FieldRef<"produk", 'String'>
    readonly deskripsi: FieldRef<"produk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * produk findUnique
   */
  export type produkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findUniqueOrThrow
   */
  export type produkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findFirst
   */
  export type produkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findFirstOrThrow
   */
  export type produkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findMany
   */
  export type produkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk create
   */
  export type produkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to create a produk.
     */
    data?: XOR<produkCreateInput, produkUncheckedCreateInput>
  }

  /**
   * produk createMany
   */
  export type produkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produk createManyAndReturn
   */
  export type produkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produk update
   */
  export type produkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to update a produk.
     */
    data: XOR<produkUpdateInput, produkUncheckedUpdateInput>
    /**
     * Choose, which produk to update.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk updateMany
   */
  export type produkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produk updateManyAndReturn
   */
  export type produkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produk upsert
   */
  export type produkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The filter to search for the produk to update in case it exists.
     */
    where: produkWhereUniqueInput
    /**
     * In case the produk found by the `where` argument doesn't exist, create a new produk with this data.
     */
    create: XOR<produkCreateInput, produkUncheckedCreateInput>
    /**
     * In case the produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produkUpdateInput, produkUncheckedUpdateInput>
  }

  /**
   * produk delete
   */
  export type produkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter which produk to delete.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk deleteMany
   */
  export type produkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produks to delete
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to delete.
     */
    limit?: number
  }

  /**
   * produk.transaksi
   */
  export type produk$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    cursor?: transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * produk without action
   */
  export type produkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
  }


  /**
   * Model transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiAvgAggregateOutputType = {
    id_transaksi: number | null
    total_harga: number | null
    id_produk: number | null
  }

  export type TransaksiSumAggregateOutputType = {
    id_transaksi: number | null
    total_harga: number | null
    id_produk: number | null
  }

  export type TransaksiMinAggregateOutputType = {
    id_transaksi: number | null
    nama_pelanggan: string | null
    total_harga: number | null
    tanggal_transaksi: Date | null
    id_produk: number | null
  }

  export type TransaksiMaxAggregateOutputType = {
    id_transaksi: number | null
    nama_pelanggan: string | null
    total_harga: number | null
    tanggal_transaksi: Date | null
    id_produk: number | null
  }

  export type TransaksiCountAggregateOutputType = {
    id_transaksi: number
    nama_pelanggan: number
    total_harga: number
    tanggal_transaksi: number
    id_produk: number
    _all: number
  }


  export type TransaksiAvgAggregateInputType = {
    id_transaksi?: true
    total_harga?: true
    id_produk?: true
  }

  export type TransaksiSumAggregateInputType = {
    id_transaksi?: true
    total_harga?: true
    id_produk?: true
  }

  export type TransaksiMinAggregateInputType = {
    id_transaksi?: true
    nama_pelanggan?: true
    total_harga?: true
    tanggal_transaksi?: true
    id_produk?: true
  }

  export type TransaksiMaxAggregateInputType = {
    id_transaksi?: true
    nama_pelanggan?: true
    total_harga?: true
    tanggal_transaksi?: true
    id_produk?: true
  }

  export type TransaksiCountAggregateInputType = {
    id_transaksi?: true
    nama_pelanggan?: true
    total_harga?: true
    tanggal_transaksi?: true
    id_produk?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksi to aggregate.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type transaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithAggregationInput | transaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: transaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _avg?: TransaksiAvgAggregateInputType
    _sum?: TransaksiSumAggregateInputType
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    id_transaksi: number
    nama_pelanggan: string | null
    total_harga: number | null
    tanggal_transaksi: Date | null
    id_produk: number | null
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends transaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type transaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi?: boolean
    nama_pelanggan?: boolean
    total_harga?: boolean
    tanggal_transaksi?: boolean
    id_produk?: boolean
    produk?: boolean | transaksi$produkArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi?: boolean
    nama_pelanggan?: boolean
    total_harga?: boolean
    tanggal_transaksi?: boolean
    id_produk?: boolean
    produk?: boolean | transaksi$produkArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi?: boolean
    nama_pelanggan?: boolean
    total_harga?: boolean
    tanggal_transaksi?: boolean
    id_produk?: boolean
    produk?: boolean | transaksi$produkArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectScalar = {
    id_transaksi?: boolean
    nama_pelanggan?: boolean
    total_harga?: boolean
    tanggal_transaksi?: boolean
    id_produk?: boolean
  }

  export type transaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_transaksi" | "nama_pelanggan" | "total_harga" | "tanggal_transaksi" | "id_produk", ExtArgs["result"]["transaksi"]>
  export type transaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | transaksi$produkArgs<ExtArgs>
  }
  export type transaksiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | transaksi$produkArgs<ExtArgs>
  }
  export type transaksiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | transaksi$produkArgs<ExtArgs>
  }

  export type $transaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaksi"
    objects: {
      produk: Prisma.$produkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_transaksi: number
      nama_pelanggan: string | null
      total_harga: number | null
      tanggal_transaksi: Date | null
      id_produk: number | null
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }

  type transaksiGetPayload<S extends boolean | null | undefined | transaksiDefaultArgs> = $Result.GetResult<Prisma.$transaksiPayload, S>

  type transaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface transaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaksi'], meta: { name: 'transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {transaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaksiFindUniqueArgs>(args: SelectSubset<T, transaksiFindUniqueArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, transaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaksiFindFirstArgs>(args?: SelectSubset<T, transaksiFindFirstArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, transaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `id_transaksi`
     * const transaksiWithId_transaksiOnly = await prisma.transaksi.findMany({ select: { id_transaksi: true } })
     * 
     */
    findMany<T extends transaksiFindManyArgs>(args?: SelectSubset<T, transaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaksi.
     * @param {transaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
     */
    create<T extends transaksiCreateArgs>(args: SelectSubset<T, transaksiCreateArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaksis.
     * @param {transaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaksiCreateManyArgs>(args?: SelectSubset<T, transaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaksis and returns the data saved in the database.
     * @param {transaksiCreateManyAndReturnArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaksis and only return the `id_transaksi`
     * const transaksiWithId_transaksiOnly = await prisma.transaksi.createManyAndReturn({
     *   select: { id_transaksi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaksiCreateManyAndReturnArgs>(args?: SelectSubset<T, transaksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaksi.
     * @param {transaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
     */
    delete<T extends transaksiDeleteArgs>(args: SelectSubset<T, transaksiDeleteArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaksi.
     * @param {transaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaksiUpdateArgs>(args: SelectSubset<T, transaksiUpdateArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaksis.
     * @param {transaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaksiDeleteManyArgs>(args?: SelectSubset<T, transaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaksiUpdateManyArgs>(args: SelectSubset<T, transaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis and returns the data updated in the database.
     * @param {transaksiUpdateManyAndReturnArgs} args - Arguments to update many Transaksis.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaksis and only return the `id_transaksi`
     * const transaksiWithId_transaksiOnly = await prisma.transaksi.updateManyAndReturn({
     *   select: { id_transaksi: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transaksiUpdateManyAndReturnArgs>(args: SelectSubset<T, transaksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaksi.
     * @param {transaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
     */
    upsert<T extends transaksiUpsertArgs>(args: SelectSubset<T, transaksiUpsertArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends transaksiCountArgs>(
      args?: Subset<T, transaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiGroupByArgs} args - Group by arguments.
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
      T extends transaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaksiGroupByArgs['orderBy'] }
        : { orderBy?: transaksiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, transaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaksi model
   */
  readonly fields: transaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends transaksi$produkArgs<ExtArgs> = {}>(args?: Subset<T, transaksi$produkArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaksi model
   */
  interface transaksiFieldRefs {
    readonly id_transaksi: FieldRef<"transaksi", 'Int'>
    readonly nama_pelanggan: FieldRef<"transaksi", 'String'>
    readonly total_harga: FieldRef<"transaksi", 'Int'>
    readonly tanggal_transaksi: FieldRef<"transaksi", 'DateTime'>
    readonly id_produk: FieldRef<"transaksi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * transaksi findUnique
   */
  export type transaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi findUniqueOrThrow
   */
  export type transaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi findFirst
   */
  export type transaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi findFirstOrThrow
   */
  export type transaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi findMany
   */
  export type transaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksis to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi create
   */
  export type transaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a transaksi.
     */
    data?: XOR<transaksiCreateInput, transaksiUncheckedCreateInput>
  }

  /**
   * transaksi createMany
   */
  export type transaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaksis.
     */
    data: transaksiCreateManyInput | transaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaksi createManyAndReturn
   */
  export type transaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The data used to create many transaksis.
     */
    data: transaksiCreateManyInput | transaksiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaksi update
   */
  export type transaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a transaksi.
     */
    data: XOR<transaksiUpdateInput, transaksiUncheckedUpdateInput>
    /**
     * Choose, which transaksi to update.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi updateMany
   */
  export type transaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaksis.
     */
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyInput>
    /**
     * Filter which transaksis to update
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to update.
     */
    limit?: number
  }

  /**
   * transaksi updateManyAndReturn
   */
  export type transaksiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The data used to update transaksis.
     */
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyInput>
    /**
     * Filter which transaksis to update
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaksi upsert
   */
  export type transaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the transaksi to update in case it exists.
     */
    where: transaksiWhereUniqueInput
    /**
     * In case the transaksi found by the `where` argument doesn't exist, create a new transaksi with this data.
     */
    create: XOR<transaksiCreateInput, transaksiUncheckedCreateInput>
    /**
     * In case the transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaksiUpdateInput, transaksiUncheckedUpdateInput>
  }

  /**
   * transaksi delete
   */
  export type transaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter which transaksi to delete.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi deleteMany
   */
  export type transaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksis to delete
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to delete.
     */
    limit?: number
  }

  /**
   * transaksi.produk
   */
  export type transaksi$produkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    where?: produkWhereInput
  }

  /**
   * transaksi without action
   */
  export type transaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProdukScalarFieldEnum: {
    id_produk: 'id_produk',
    nama_produk: 'nama_produk',
    harga: 'harga',
    stok: 'stok',
    foto: 'foto',
    deskripsi: 'deskripsi'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    id_transaksi: 'id_transaksi',
    nama_pelanggan: 'nama_pelanggan',
    total_harga: 'total_harga',
    tanggal_transaksi: 'tanggal_transaksi',
    id_produk: 'id_produk'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type produkWhereInput = {
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    id_produk?: IntFilter<"produk"> | number
    nama_produk?: StringNullableFilter<"produk"> | string | null
    harga?: IntNullableFilter<"produk"> | number | null
    stok?: IntNullableFilter<"produk"> | number | null
    foto?: StringNullableFilter<"produk"> | string | null
    deskripsi?: StringNullableFilter<"produk"> | string | null
    transaksi?: TransaksiListRelationFilter
  }

  export type produkOrderByWithRelationInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrderInput | SortOrder
    harga?: SortOrderInput | SortOrder
    stok?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    transaksi?: transaksiOrderByRelationAggregateInput
  }

  export type produkWhereUniqueInput = Prisma.AtLeast<{
    id_produk?: number
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    nama_produk?: StringNullableFilter<"produk"> | string | null
    harga?: IntNullableFilter<"produk"> | number | null
    stok?: IntNullableFilter<"produk"> | number | null
    foto?: StringNullableFilter<"produk"> | string | null
    deskripsi?: StringNullableFilter<"produk"> | string | null
    transaksi?: TransaksiListRelationFilter
  }, "id_produk">

  export type produkOrderByWithAggregationInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrderInput | SortOrder
    harga?: SortOrderInput | SortOrder
    stok?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    _count?: produkCountOrderByAggregateInput
    _avg?: produkAvgOrderByAggregateInput
    _max?: produkMaxOrderByAggregateInput
    _min?: produkMinOrderByAggregateInput
    _sum?: produkSumOrderByAggregateInput
  }

  export type produkScalarWhereWithAggregatesInput = {
    AND?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    OR?: produkScalarWhereWithAggregatesInput[]
    NOT?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    id_produk?: IntWithAggregatesFilter<"produk"> | number
    nama_produk?: StringNullableWithAggregatesFilter<"produk"> | string | null
    harga?: IntNullableWithAggregatesFilter<"produk"> | number | null
    stok?: IntNullableWithAggregatesFilter<"produk"> | number | null
    foto?: StringNullableWithAggregatesFilter<"produk"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"produk"> | string | null
  }

  export type transaksiWhereInput = {
    AND?: transaksiWhereInput | transaksiWhereInput[]
    OR?: transaksiWhereInput[]
    NOT?: transaksiWhereInput | transaksiWhereInput[]
    id_transaksi?: IntFilter<"transaksi"> | number
    nama_pelanggan?: StringNullableFilter<"transaksi"> | string | null
    total_harga?: IntNullableFilter<"transaksi"> | number | null
    tanggal_transaksi?: DateTimeNullableFilter<"transaksi"> | Date | string | null
    id_produk?: IntNullableFilter<"transaksi"> | number | null
    produk?: XOR<ProdukNullableScalarRelationFilter, produkWhereInput> | null
  }

  export type transaksiOrderByWithRelationInput = {
    id_transaksi?: SortOrder
    nama_pelanggan?: SortOrderInput | SortOrder
    total_harga?: SortOrderInput | SortOrder
    tanggal_transaksi?: SortOrderInput | SortOrder
    id_produk?: SortOrderInput | SortOrder
    produk?: produkOrderByWithRelationInput
  }

  export type transaksiWhereUniqueInput = Prisma.AtLeast<{
    id_transaksi?: number
    AND?: transaksiWhereInput | transaksiWhereInput[]
    OR?: transaksiWhereInput[]
    NOT?: transaksiWhereInput | transaksiWhereInput[]
    nama_pelanggan?: StringNullableFilter<"transaksi"> | string | null
    total_harga?: IntNullableFilter<"transaksi"> | number | null
    tanggal_transaksi?: DateTimeNullableFilter<"transaksi"> | Date | string | null
    id_produk?: IntNullableFilter<"transaksi"> | number | null
    produk?: XOR<ProdukNullableScalarRelationFilter, produkWhereInput> | null
  }, "id_transaksi">

  export type transaksiOrderByWithAggregationInput = {
    id_transaksi?: SortOrder
    nama_pelanggan?: SortOrderInput | SortOrder
    total_harga?: SortOrderInput | SortOrder
    tanggal_transaksi?: SortOrderInput | SortOrder
    id_produk?: SortOrderInput | SortOrder
    _count?: transaksiCountOrderByAggregateInput
    _avg?: transaksiAvgOrderByAggregateInput
    _max?: transaksiMaxOrderByAggregateInput
    _min?: transaksiMinOrderByAggregateInput
    _sum?: transaksiSumOrderByAggregateInput
  }

  export type transaksiScalarWhereWithAggregatesInput = {
    AND?: transaksiScalarWhereWithAggregatesInput | transaksiScalarWhereWithAggregatesInput[]
    OR?: transaksiScalarWhereWithAggregatesInput[]
    NOT?: transaksiScalarWhereWithAggregatesInput | transaksiScalarWhereWithAggregatesInput[]
    id_transaksi?: IntWithAggregatesFilter<"transaksi"> | number
    nama_pelanggan?: StringNullableWithAggregatesFilter<"transaksi"> | string | null
    total_harga?: IntNullableWithAggregatesFilter<"transaksi"> | number | null
    tanggal_transaksi?: DateTimeNullableWithAggregatesFilter<"transaksi"> | Date | string | null
    id_produk?: IntNullableWithAggregatesFilter<"transaksi"> | number | null
  }

  export type produkCreateInput = {
    nama_produk?: string | null
    harga?: number | null
    stok?: number | null
    foto?: string | null
    deskripsi?: string | null
    transaksi?: transaksiCreateNestedManyWithoutProdukInput
  }

  export type produkUncheckedCreateInput = {
    id_produk?: number
    nama_produk?: string | null
    harga?: number | null
    stok?: number | null
    foto?: string | null
    deskripsi?: string | null
    transaksi?: transaksiUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkUpdateInput = {
    nama_produk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    transaksi?: transaksiUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    transaksi?: transaksiUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkCreateManyInput = {
    id_produk?: number
    nama_produk?: string | null
    harga?: number | null
    stok?: number | null
    foto?: string | null
    deskripsi?: string | null
  }

  export type produkUpdateManyMutationInput = {
    nama_produk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkUncheckedUpdateManyInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiCreateInput = {
    nama_pelanggan?: string | null
    total_harga?: number | null
    tanggal_transaksi?: Date | string | null
    produk?: produkCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateInput = {
    id_transaksi?: number
    nama_pelanggan?: string | null
    total_harga?: number | null
    tanggal_transaksi?: Date | string | null
    id_produk?: number | null
  }

  export type transaksiUpdateInput = {
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produk?: produkUpdateOneWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_produk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaksiCreateManyInput = {
    id_transaksi?: number
    nama_pelanggan?: string | null
    total_harga?: number | null
    tanggal_transaksi?: Date | string | null
    id_produk?: number | null
  }

  export type transaksiUpdateManyMutationInput = {
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaksiUncheckedUpdateManyInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_produk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TransaksiListRelationFilter = {
    every?: transaksiWhereInput
    some?: transaksiWhereInput
    none?: transaksiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type transaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produkCountOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
  }

  export type produkAvgOrderByAggregateInput = {
    id_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
  }

  export type produkMaxOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
  }

  export type produkMinOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
  }

  export type produkSumOrderByAggregateInput = {
    id_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProdukNullableScalarRelationFilter = {
    is?: produkWhereInput | null
    isNot?: produkWhereInput | null
  }

  export type transaksiCountOrderByAggregateInput = {
    id_transaksi?: SortOrder
    nama_pelanggan?: SortOrder
    total_harga?: SortOrder
    tanggal_transaksi?: SortOrder
    id_produk?: SortOrder
  }

  export type transaksiAvgOrderByAggregateInput = {
    id_transaksi?: SortOrder
    total_harga?: SortOrder
    id_produk?: SortOrder
  }

  export type transaksiMaxOrderByAggregateInput = {
    id_transaksi?: SortOrder
    nama_pelanggan?: SortOrder
    total_harga?: SortOrder
    tanggal_transaksi?: SortOrder
    id_produk?: SortOrder
  }

  export type transaksiMinOrderByAggregateInput = {
    id_transaksi?: SortOrder
    nama_pelanggan?: SortOrder
    total_harga?: SortOrder
    tanggal_transaksi?: SortOrder
    id_produk?: SortOrder
  }

  export type transaksiSumOrderByAggregateInput = {
    id_transaksi?: SortOrder
    total_harga?: SortOrder
    id_produk?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type transaksiCreateNestedManyWithoutProdukInput = {
    create?: XOR<transaksiCreateWithoutProdukInput, transaksiUncheckedCreateWithoutProdukInput> | transaksiCreateWithoutProdukInput[] | transaksiUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutProdukInput | transaksiCreateOrConnectWithoutProdukInput[]
    createMany?: transaksiCreateManyProdukInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type transaksiUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<transaksiCreateWithoutProdukInput, transaksiUncheckedCreateWithoutProdukInput> | transaksiCreateWithoutProdukInput[] | transaksiUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutProdukInput | transaksiCreateOrConnectWithoutProdukInput[]
    createMany?: transaksiCreateManyProdukInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type transaksiUpdateManyWithoutProdukNestedInput = {
    create?: XOR<transaksiCreateWithoutProdukInput, transaksiUncheckedCreateWithoutProdukInput> | transaksiCreateWithoutProdukInput[] | transaksiUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutProdukInput | transaksiCreateOrConnectWithoutProdukInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutProdukInput | transaksiUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: transaksiCreateManyProdukInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutProdukInput | transaksiUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutProdukInput | transaksiUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type transaksiUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<transaksiCreateWithoutProdukInput, transaksiUncheckedCreateWithoutProdukInput> | transaksiCreateWithoutProdukInput[] | transaksiUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutProdukInput | transaksiCreateOrConnectWithoutProdukInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutProdukInput | transaksiUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: transaksiCreateManyProdukInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutProdukInput | transaksiUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutProdukInput | transaksiUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type produkCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<produkCreateWithoutTransaksiInput, produkUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: produkCreateOrConnectWithoutTransaksiInput
    connect?: produkWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type produkUpdateOneWithoutTransaksiNestedInput = {
    create?: XOR<produkCreateWithoutTransaksiInput, produkUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: produkCreateOrConnectWithoutTransaksiInput
    upsert?: produkUpsertWithoutTransaksiInput
    disconnect?: produkWhereInput | boolean
    delete?: produkWhereInput | boolean
    connect?: produkWhereUniqueInput
    update?: XOR<XOR<produkUpdateToOneWithWhereWithoutTransaksiInput, produkUpdateWithoutTransaksiInput>, produkUncheckedUpdateWithoutTransaksiInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type transaksiCreateWithoutProdukInput = {
    nama_pelanggan?: string | null
    total_harga?: number | null
    tanggal_transaksi?: Date | string | null
  }

  export type transaksiUncheckedCreateWithoutProdukInput = {
    id_transaksi?: number
    nama_pelanggan?: string | null
    total_harga?: number | null
    tanggal_transaksi?: Date | string | null
  }

  export type transaksiCreateOrConnectWithoutProdukInput = {
    where: transaksiWhereUniqueInput
    create: XOR<transaksiCreateWithoutProdukInput, transaksiUncheckedCreateWithoutProdukInput>
  }

  export type transaksiCreateManyProdukInputEnvelope = {
    data: transaksiCreateManyProdukInput | transaksiCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type transaksiUpsertWithWhereUniqueWithoutProdukInput = {
    where: transaksiWhereUniqueInput
    update: XOR<transaksiUpdateWithoutProdukInput, transaksiUncheckedUpdateWithoutProdukInput>
    create: XOR<transaksiCreateWithoutProdukInput, transaksiUncheckedCreateWithoutProdukInput>
  }

  export type transaksiUpdateWithWhereUniqueWithoutProdukInput = {
    where: transaksiWhereUniqueInput
    data: XOR<transaksiUpdateWithoutProdukInput, transaksiUncheckedUpdateWithoutProdukInput>
  }

  export type transaksiUpdateManyWithWhereWithoutProdukInput = {
    where: transaksiScalarWhereInput
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyWithoutProdukInput>
  }

  export type transaksiScalarWhereInput = {
    AND?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
    OR?: transaksiScalarWhereInput[]
    NOT?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
    id_transaksi?: IntFilter<"transaksi"> | number
    nama_pelanggan?: StringNullableFilter<"transaksi"> | string | null
    total_harga?: IntNullableFilter<"transaksi"> | number | null
    tanggal_transaksi?: DateTimeNullableFilter<"transaksi"> | Date | string | null
    id_produk?: IntNullableFilter<"transaksi"> | number | null
  }

  export type produkCreateWithoutTransaksiInput = {
    nama_produk?: string | null
    harga?: number | null
    stok?: number | null
    foto?: string | null
    deskripsi?: string | null
  }

  export type produkUncheckedCreateWithoutTransaksiInput = {
    id_produk?: number
    nama_produk?: string | null
    harga?: number | null
    stok?: number | null
    foto?: string | null
    deskripsi?: string | null
  }

  export type produkCreateOrConnectWithoutTransaksiInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutTransaksiInput, produkUncheckedCreateWithoutTransaksiInput>
  }

  export type produkUpsertWithoutTransaksiInput = {
    update: XOR<produkUpdateWithoutTransaksiInput, produkUncheckedUpdateWithoutTransaksiInput>
    create: XOR<produkCreateWithoutTransaksiInput, produkUncheckedCreateWithoutTransaksiInput>
    where?: produkWhereInput
  }

  export type produkUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: produkWhereInput
    data: XOR<produkUpdateWithoutTransaksiInput, produkUncheckedUpdateWithoutTransaksiInput>
  }

  export type produkUpdateWithoutTransaksiInput = {
    nama_produk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkUncheckedUpdateWithoutTransaksiInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiCreateManyProdukInput = {
    id_transaksi?: number
    nama_pelanggan?: string | null
    total_harga?: number | null
    tanggal_transaksi?: Date | string | null
  }

  export type transaksiUpdateWithoutProdukInput = {
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaksiUncheckedUpdateWithoutProdukInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaksiUncheckedUpdateManyWithoutProdukInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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