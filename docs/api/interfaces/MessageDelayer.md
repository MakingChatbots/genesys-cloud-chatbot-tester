[**Genesys Web Messaging Tester**](../README.md) • **Docs**

***

[Genesys Web Messaging Tester](../README.md) / MessageDelayer

# Interface: MessageDelayer

Provides the ability to delay messages for the purpose of re-ordering them.
This is useful for reordering messages that are received out of order, presumably
due to it  being async and not guaranteeing order.

## Extends

- `EventEmitter`

## Accessors

### delay

> `get` **delay**(): `number`

#### Returns

`number`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/MessageDelayer.ts:10](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/MessageDelayer.ts#L10)

## Methods

### add()

> **add**(`message`, `whenReceived`): `void`

#### Parameters

• **message**: [`Response`](../type-aliases/Response.md)\<`unknown`\>

• **whenReceived**: `Date`

#### Returns

`void`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/MessageDelayer.ts:11](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/message-delayer/MessageDelayer.ts#L11)

***

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
