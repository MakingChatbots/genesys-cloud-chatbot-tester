[**Genesys Web Messaging Tester**](../README.md) • **Docs**

***

[Genesys Web Messaging Tester](../README.md) / WebMessageServerConnectionFixture

# Class: WebMessageServerConnectionFixture

## Constructors

### new WebMessageServerConnectionFixture()

> **new WebMessageServerConnectionFixture**(`ws`): [`WebMessageServerConnectionFixture`](WebMessageServerConnectionFixture.md)

#### Parameters

• **ws**: `WebSocket`

#### Returns

[`WebMessageServerConnectionFixture`](WebMessageServerConnectionFixture.md)

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts:5](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts#L5)

## Methods

### simulateInboundTextStructuredMessage()

> **simulateInboundTextStructuredMessage**(`text`, `date`): `void`

#### Parameters

• **text**: `string`

• **date**: `Date` = `...`

#### Returns

`void`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts:43](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts#L43)

***

### simulateOutboundDisconnectEventStructuredMessage()

> **simulateOutboundDisconnectEventStructuredMessage**(`date`): `void`

#### Parameters

• **date**: `Date` = `...`

#### Returns

`void`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts:38](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts#L38)

***

### simulateOutboundTextStructuredMessage()

> **simulateOutboundTextStructuredMessage**(`text`, `date`): `void`

#### Parameters

• **text**: `string`

• **date**: `Date` = `...`

#### Returns

`void`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts:33](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts#L33)

***

### simulateSessionResponseMessage()

> **simulateSessionResponseMessage**(): `void`

#### Returns

`void`

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts:28](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts#L28)

***

### waitForConnectionToClose()

> **waitForConnectionToClose**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts:24](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts#L24)

***

### waitForMessage()

> **waitForMessage**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts:8](https://github.com/MakingChatbots/genesys-cloud-chatbot-tester-cli/blob/main/packages/genesys-cloud-chatbot-tester/src/testFixtures/WebMessageServerConnectionFixture.ts#L8)
