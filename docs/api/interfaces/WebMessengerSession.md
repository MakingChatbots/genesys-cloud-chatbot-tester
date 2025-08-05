[**Genesys Web Messaging Tester**](../README.md) • **Docs**

***

[Genesys Web Messaging Tester](../README.md) / WebMessengerSession

# Interface: WebMessengerSession

## Extends

- `EventEmitter`

## Accessors

### messageDelayInMs

> `get` **messageDelayInMs**(): `number`

The Web Messenger server can sometimes return responses out of order. To cater for this
we have to have a delay after every message is received before passing it to any listeners
of the implementation. This delay hopefully provides enough time for any messages that should
have preceded the other to be received and ordered.

This delay should be taken into account for any timeout values of downstream functionality.

#### Returns

`number`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts:21](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts#L21)

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

[packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts:25](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts#L25)

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

[packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts:23](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/genesys/WebMessengerGuestSession.ts#L23)

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
