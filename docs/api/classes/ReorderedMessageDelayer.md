[**Genesys Web Messaging Tester**](../README.md) • **Docs**

***

[Genesys Web Messaging Tester](../README.md) / ReorderedMessageDelayer

# Class: ReorderedMessageDelayer

Reorders messages with a timestamp, being sure to maintain the overall order of messages with/without
timestamps.

> All messaging follows a request/response pattern. However, web messaging is an asynchronous
> channel and therefore no guarantee to ordering is provided.
> Source: https://developer.genesys.cloud/commdigital/digital/webmessaging/websocketapi#messaging

## Extends

- `EventEmitter`

## Implements

- [`MessageDelayer`](../interfaces/MessageDelayer.md)

## Constructors

### new ReorderedMessageDelayer()

> **new ReorderedMessageDelayer**(`delayBeforeEmittingInMs`, `intervalInMs`, `intervalSet`, `intervalClear`): [`ReorderedMessageDelayer`](ReorderedMessageDelayer.md)

#### Parameters

• **delayBeforeEmittingInMs**: `number` = `1000`

• **intervalInMs**: `number` = `1000`

• **intervalSet** = `setInterval`

• **intervalClear** = `clearInterval`

#### Returns

[`ReorderedMessageDelayer`](ReorderedMessageDelayer.md)

#### Overrides

`EventEmitter.constructor`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/ReorderedMessageDelayer.ts:34](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/ReorderedMessageDelayer.ts#L34)

## Properties

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](WebMessengerGuestSession.md#capturerejectionsymbol)

#### Inherited from

`EventEmitter.captureRejectionSymbol`

#### Defined in

node\_modules/@types/node/events.d.ts:38

***

### captureRejections

> `static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

`EventEmitter.captureRejections`

#### Defined in

node\_modules/@types/node/events.d.ts:44

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

`EventEmitter.defaultMaxListeners`

#### Defined in

node\_modules/@types/node/events.d.ts:45

***

### errorMonitor

> `readonly` `static` **errorMonitor**: *typeof* [`errorMonitor`](WebMessengerGuestSession.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

`EventEmitter.errorMonitor`

#### Defined in

node\_modules/@types/node/events.d.ts:37

## Accessors

### delay

> `get` **delay**(): `number`

#### Returns

`number`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`delay`](../interfaces/MessageDelayer.md#delay)

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/ReorderedMessageDelayer.ts:142](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/ReorderedMessageDelayer.ts#L142)

***

### unorderdMessageDetected

> `get` **unorderdMessageDetected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/ReorderedMessageDelayer.ts:69](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/ReorderedMessageDelayer.ts#L69)

## Methods

### add()

> **add**(`message`, `received`): `void`

Add a message to the pool. Each message added reset a timer to wait for any other messages
before releasing the oldest message.

#### Parameters

• **message**: [`Response`](../type-aliases/Response.md)\<`unknown`\>

• **received**: `Date`

#### Returns

`void`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`add`](../interfaces/MessageDelayer.md#add)

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/ReorderedMessageDelayer.ts:77](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/ReorderedMessageDelayer.ts#L77)

***

### addListener()

> **addListener**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`addListener`](../interfaces/MessageDelayer.md#addlistener)

#### Inherited from

`EventEmitter.addListener`

#### Defined in

node\_modules/@types/node/events.d.ts:57

***

### emit()

> **emit**(`event`, ...`args`): `boolean`

#### Parameters

• **event**: `string` \| `symbol`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`emit`](../interfaces/MessageDelayer.md#emit)

#### Inherited from

`EventEmitter.emit`

#### Defined in

node\_modules/@types/node/events.d.ts:67

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`eventNames`](../interfaces/MessageDelayer.md#eventnames)

#### Inherited from

`EventEmitter.eventNames`

#### Defined in

node\_modules/@types/node/events.d.ts:72

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`getMaxListeners`](../interfaces/MessageDelayer.md#getmaxlisteners)

#### Inherited from

`EventEmitter.getMaxListeners`

#### Defined in

node\_modules/@types/node/events.d.ts:64

***

### listenerCount()

> **listenerCount**(`event`): `number`

#### Parameters

• **event**: `string` \| `symbol`

#### Returns

`number`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`listenerCount`](../interfaces/MessageDelayer.md#listenercount)

#### Inherited from

`EventEmitter.listenerCount`

#### Defined in

node\_modules/@types/node/events.d.ts:68

***

### listeners()

> **listeners**(`event`): `Function`[]

#### Parameters

• **event**: `string` \| `symbol`

#### Returns

`Function`[]

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`listeners`](../interfaces/MessageDelayer.md#listeners)

#### Inherited from

`EventEmitter.listeners`

#### Defined in

node\_modules/@types/node/events.d.ts:65

***

### off()

> **off**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`off`](../interfaces/MessageDelayer.md#off)

#### Inherited from

`EventEmitter.off`

#### Defined in

node\_modules/@types/node/events.d.ts:61

***

### on()

> **on**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`on`](../interfaces/MessageDelayer.md#on)

#### Inherited from

`EventEmitter.on`

#### Defined in

node\_modules/@types/node/events.d.ts:58

***

### once()

> **once**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`once`](../interfaces/MessageDelayer.md#once)

#### Inherited from

`EventEmitter.once`

#### Defined in

node\_modules/@types/node/events.d.ts:59

***

### prependListener()

> **prependListener**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`prependListener`](../interfaces/MessageDelayer.md#prependlistener)

#### Inherited from

`EventEmitter.prependListener`

#### Defined in

node\_modules/@types/node/events.d.ts:70

***

### prependOnceListener()

> **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`prependOnceListener`](../interfaces/MessageDelayer.md#prependoncelistener)

#### Inherited from

`EventEmitter.prependOnceListener`

#### Defined in

node\_modules/@types/node/events.d.ts:71

***

### rawListeners()

> **rawListeners**(`event`): `Function`[]

#### Parameters

• **event**: `string` \| `symbol`

#### Returns

`Function`[]

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`rawListeners`](../interfaces/MessageDelayer.md#rawlisteners)

#### Inherited from

`EventEmitter.rawListeners`

#### Defined in

node\_modules/@types/node/events.d.ts:66

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

#### Parameters

• **event?**: `string` \| `symbol`

#### Returns

`this`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`removeAllListeners`](../interfaces/MessageDelayer.md#removealllisteners)

#### Inherited from

`EventEmitter.removeAllListeners`

#### Defined in

node\_modules/@types/node/events.d.ts:62

***

### removeListener()

> **removeListener**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`removeListener`](../interfaces/MessageDelayer.md#removelistener)

#### Inherited from

`EventEmitter.removeListener`

#### Defined in

node\_modules/@types/node/events.d.ts:60

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

#### Parameters

• **n**: `number`

#### Returns

`this`

#### Implementation of

[`MessageDelayer`](../interfaces/MessageDelayer.md).[`setMaxListeners`](../interfaces/MessageDelayer.md#setmaxlisteners)

#### Inherited from

`EventEmitter.setMaxListeners`

#### Defined in

node\_modules/@types/node/events.d.ts:63

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `event`): `number`

#### Parameters

• **emitter**: `EventEmitter`

• **event**: `string` \| `symbol`

#### Returns

`number`

#### Deprecated

since v4.0.0

#### Inherited from

`EventEmitter.listenerCount`

#### Defined in

node\_modules/@types/node/events.d.ts:26

***

### on()

> `static` **on**(`emitter`, `event`): `AsyncIterableIterator`\<`any`\>

#### Parameters

• **emitter**: `EventEmitter`

• **event**: `string`

#### Returns

`AsyncIterableIterator`\<`any`\>

#### Inherited from

`EventEmitter.on`

#### Defined in

node\_modules/@types/node/events.d.ts:23

***

### once()

#### once(emitter, event)

> `static` **once**(`emitter`, `event`): `Promise`\<`any`[]\>

##### Parameters

• **emitter**: `NodeEventTarget`

• **event**: `string` \| `symbol`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

`EventEmitter.once`

##### Defined in

node\_modules/@types/node/events.d.ts:21

#### once(emitter, event)

> `static` **once**(`emitter`, `event`): `Promise`\<`any`[]\>

##### Parameters

• **emitter**: `DOMEventTarget`

• **event**: `string`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

`EventEmitter.once`

##### Defined in

node\_modules/@types/node/events.d.ts:22
