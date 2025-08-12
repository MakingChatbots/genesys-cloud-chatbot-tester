[**Genesys Web Messaging Tester**](../README.md) • **Docs**

***

[Genesys Web Messaging Tester](../README.md) / WebMessengerGuestSession

# Class: WebMessengerGuestSession

## See

https://developer.genesys.cloud/api/digital/webmessaging/websocketapi#configure-a-guest-session

## Extends

- `EventEmitter`

## Constructors

### new WebMessengerGuestSession()

> **new WebMessengerGuestSession**(`config`, `participantData`, `messageDelayer`, `wsFactory`): [`WebMessengerGuestSession`](WebMessengerGuestSession.md)

#### Parameters

• **config**: [`SessionConfig`](../interfaces/SessionConfig.md)

• **participantData**: `Record`\<`string`, `string`\> = `{}`

• **messageDelayer**: [`MessageDelayer`](../interfaces/MessageDelayer.md) = `...`

• **wsFactory** = `...`

#### Returns

[`WebMessengerGuestSession`](WebMessengerGuestSession.md)

#### Overrides

`EventEmitter.constructor`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts:51](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts#L51)

## Properties

### wsFactory()

> `readonly` **wsFactory**: (`url`, `options`?) => `WebSocket`

#### Parameters

• **url**: `string`

• **options?**: `ClientOptions` \| `ClientRequestArgs`

#### Returns

`WebSocket`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts:55](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts#L55)

***

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

### messageDelayInMs

> `get` **messageDelayInMs**(): `number`

#### Returns

`number`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts:71](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts#L71)

## Methods

### addListener()

> **addListener**(`event`, `listener`): `this`

#### Parameters

• **event**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

`EventEmitter.addListener`

#### Defined in

node\_modules/@types/node/events.d.ts:57

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts:146](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts#L146)

***

### emit()

> **emit**(`event`, ...`args`): `boolean`

#### Parameters

• **event**: `string` \| `symbol`

• ...**args**: `any`[]

#### Returns

`boolean`

#### Inherited from

`EventEmitter.emit`

#### Defined in

node\_modules/@types/node/events.d.ts:67

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

`EventEmitter.eventNames`

#### Defined in

node\_modules/@types/node/events.d.ts:72

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

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

#### Inherited from

`EventEmitter.removeListener`

#### Defined in

node\_modules/@types/node/events.d.ts:60

***

### sendText()

> **sendText**(`message`): `void`

#### Parameters

• **message**: `string`

#### Returns

`void`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts:123](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts#L123)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

#### Parameters

• **n**: `number`

#### Returns

`this`

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
