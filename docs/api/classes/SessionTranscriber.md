[**Genesys Web Messaging Tester**](../README.md) • **Docs**

***

[Genesys Web Messaging Tester](../README.md) / SessionTranscriber

# Class: SessionTranscriber

Transcribes a Web Messenger session into an array of transcribed messages.

## Extends

- `EventEmitter`

## Constructors

### new SessionTranscriber()

> **new SessionTranscriber**(`messengerSession`, `__namedParameters`): [`SessionTranscriber`](SessionTranscriber.md)

#### Parameters

• **messengerSession**: [`WebMessengerSession`](../interfaces/WebMessengerSession.md)

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.nameForClient?**: `string` = `'You'`

• **\_\_namedParameters.nameForServer?**: `string` = `'Them'`

#### Returns

[`SessionTranscriber`](SessionTranscriber.md)

#### Overrides

`EventEmitter.constructor`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/transcribe/Transcriber.ts:27](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/transcribe/Transcriber.ts#L27)

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

### getTranscript()

> **getTranscript**(): [`TranscribedMessage`](../interfaces/TranscribedMessage.md)[]

#### Returns

[`TranscribedMessage`](../interfaces/TranscribedMessage.md)[]

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/transcribe/Transcriber.ts:68](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/transcribe/Transcriber.ts#L68)

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
