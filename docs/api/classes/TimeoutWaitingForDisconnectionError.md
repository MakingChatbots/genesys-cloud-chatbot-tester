[**Genesys Web Messaging Tester**](../README.md) • **Docs**

***

[Genesys Web Messaging Tester](../README.md) / TimeoutWaitingForDisconnectionError

# Class: TimeoutWaitingForDisconnectionError

## Extends

- `Error`

## Constructors

### new TimeoutWaitingForDisconnectionError()

> **new TimeoutWaitingForDisconnectionError**(): [`TimeoutWaitingForDisconnectionError`](TimeoutWaitingForDisconnectionError.md)

#### Returns

[`TimeoutWaitingForDisconnectionError`](TimeoutWaitingForDisconnectionError.md)

#### Overrides

`Error.constructor`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/Conversation.ts:101](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L101)

## Properties

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1075

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:11

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:4
