[**Genesys Web Messaging Tester**](../README.md)

***

[Genesys Web Messaging Tester](../README.md) / Conversation

# Class: Conversation

Defined in: [packages/genesys-cloud-chatbot-tester/src/Conversation.ts:138](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L138)

Provides an API to simplify sending and receiving messages in a Web Messenger
session.

```typescript
const convo = new Conversation(
  new WebMessengerGuestSession({
    deploymentId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    region: 'xxxx.pure.cloud',
  }),
);

await convo.waitForConversationToStart();
await convo.sendText('hi');

await convo.waitForResponseContaining('Is this an example?');

await convo.sendText('yes');

const reply = await convo.waitForResponse();
console.log(reply);
```

## Constructors

### Constructor

> **new Conversation**(`messengerSession`, `timeoutSet`, `timeoutClear`): `Conversation`

Defined in: [packages/genesys-cloud-chatbot-tester/src/Conversation.ts:150](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L150)

#### Parameters

##### messengerSession

[`WebMessengerSession`](../interfaces/WebMessengerSession.md)

##### timeoutSet

*typeof* `setTimeout` = `setTimeout`

##### timeoutClear

(`timeout`) => `void`

#### Returns

`Conversation`

## Accessors

### isDisconnected

#### Get Signature

> **get** **isDisconnected**(): `boolean`

Defined in: [packages/genesys-cloud-chatbot-tester/src/Conversation.ts:211](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L211)

Returns whether the conversation has been disconnected

##### Returns

`boolean`

## Methods

### sendText()

> **sendText**(`text`, `delayInMs`): `Promise`\<`void`\>

Defined in: [packages/genesys-cloud-chatbot-tester/src/Conversation.ts:242](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L242)

Sends text to the conversation

#### Parameters

##### text

`string`

Text containing at least one character

##### delayInMs

`number` = `2000`

Delay in milliseconds between calling this method and the text being sent.
                 Without a delay some messages are sent so quickly after the original message
                 that Genesys Cloud doesn't acknowledge them.
                 A delay of 0 will result in the text being sent immediately.

#### Returns

`Promise`\<`void`\>

***

### waitForConversationToClose()

> **waitForConversationToClose**(`timeoutInMs`): `Promise`\<`void`\>

Defined in: [packages/genesys-cloud-chatbot-tester/src/Conversation.ts:176](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L176)

#### Parameters

##### timeoutInMs

`number` = `2000`

#### Returns

`Promise`\<`void`\>

***

### waitForConversationToStart()

> **waitForConversationToStart**(): `Promise`\<`Conversation`\>

Defined in: [packages/genesys-cloud-chatbot-tester/src/Conversation.ts:221](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L221)

Resolves when the conversation has started.

Starting a conversation is an automatic process that happens in the
background. This method allows you to wait for this process to finish.

#### Returns

`Promise`\<`Conversation`\>

***

### waitForResponses()

> **waitForResponses**(`timeToWaitAfterLastMessageInMs`): `Promise`\<`string`[]\>

Defined in: [packages/genesys-cloud-chatbot-tester/src/Conversation.ts:286](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L286)

Wait for all responses until there is a predefined amount of 'silence'.

#### Parameters

##### timeToWaitAfterLastMessageInMs

`number` = `2000`

#### Returns

`Promise`\<`string`[]\>

***

### waitForResponseText()

> **waitForResponseText**(): `Promise`\<`string`\>

Defined in: [packages/genesys-cloud-chatbot-tester/src/Conversation.ts:270](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L270)

Resolves on the next response from the other participant in the conversation that contains text.

If you want to wait for a specific message use [waitForResponseWithTextContaining](#waitforresponsewithtextcontaining).

#### Returns

`Promise`\<`string`\>

***

### waitForResponseWithTextContaining()

> **waitForResponseWithTextContaining**(`text`, `__namedParameters`): `Promise`\<`string`\>

Defined in: [packages/genesys-cloud-chatbot-tester/src/Conversation.ts:328](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L328)

Resolves when a response is received that contains a specific piece of text.
If no response is received that contains the text within the timeout period
then an exception is thrown.

Case-insensitive by default.

If you want to wait for the next response, regardless of what it contains
use [waitForResponseText](#waitforresponsetext).

#### Parameters

##### text

`string`

##### \_\_namedParameters

###### caseInsensitive?

`boolean` = `true`

###### timeoutInSeconds?

`number` = `10`

#### Returns

`Promise`\<`string`\>

***

### waitForResponseWithTextMatchingPattern()

> **waitForResponseWithTextMatchingPattern**(`pattern`, `__namedParameters`): `Promise`\<`string`\>

Defined in: [packages/genesys-cloud-chatbot-tester/src/Conversation.ts:359](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/Conversation.ts#L359)

Resolves when a response is received that matches a regular expression.
If no response is received that matches the pattern within the timeout period
then an exception is thrown.

If you want to wait for the next response, regardless of what it contains
use [waitForResponseText](#waitforresponsetext).

#### Parameters

##### pattern

`string` | `RegExp`

##### \_\_namedParameters

###### timeoutInSeconds?

`number` = `10`

#### Returns

`Promise`\<`string`\>
