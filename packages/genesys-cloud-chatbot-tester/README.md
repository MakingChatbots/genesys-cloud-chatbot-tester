# Genesys Cloud Chatbot Tester

[![npm](https://img.shields.io/npm/v/@makingchatbots/genesys-cloud-chatbot-tester)](https://www.npmjs.com/package/@makingchatbots/genesys-cloud-chatbot-tester)
[![Follow me on LinkedIn for updates](https://img.shields.io/badge/Follow%20for%20updates-LinkedIn-blue)](https://www.linkedin.com/in/lucas-woodward-the-dev/)

Easily write automated, and repeatable tests
for [Genesys' Web Messenger](https://help.mypurecloud.com/articles/web-messaging-overview/)
flows. The library provides a simple API for interacting with conversations, allowing you to send messages and set
expectations on replies. It has been designed to run in test frameworks
(e.g. [Jest](https://jestjs.io/)) and standalone scripts.

[Documentation](https://github.com/makingchatbots/genesys-cloud-chatbot-tester/tree/main/docs/api/README.md)

```typescript
const session = new WebMessengerGuestSession({
  deploymentId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  region: 'xxxx.pure.cloud',
});

const convo = new Conversation(session);
await convo.waitForConversationToStart();

await convo.sendText('hi');

await convo.waitForResponseContaining('Please enter your account number');

await convo.sendText('123');

await convo.waitForResponseContaining(
  'Your account number is too short. It is the 6 digit number on your bills',
);
```

## Getting Started

Install using [`npm`](https://www.npmjs.com/package/@makingchatbots/genesys-cloud-chatbot-tester):

```bash
npm install -g @makingchatbots/genesys-cloud-chatbot-tester
```

Then write a test. In the example below we test the validation of an account number:

> [examples/api/src/js-script.js:(test-section)](https://github.com/makingchatbots/genesys-cloud-chatbot-tester/tree/main/examples/api/src/js-script.js#L5-L33)

```javascript
const WebMsgTester = require('@makingchatbots/genesys-cloud-chatbot-tester');

(async () => {
  const session = new WebMsgTester.WebMessengerGuestSession({
    deploymentId: process.env.DEPLOYMENT_ID,
    region: process.env.REGION,
  });

  const convo = new WebMsgTester.Conversation(session);
  await convo.waitForConversationToStart();

  await convo.sendText('hi');

  await convo.waitForResponseWithTextContaining(
    'Can we ask you some questions about your experience today?',
  );

  await convo.sendText('Yes');

  await convo.waitForResponseWithTextMatchingPattern(/Thank you! Now for the next question[.]+/im, {
    timeoutInSeconds: 10,
  });

  session.close();
})().catch((e) => {
  throw e;
});
```

Finally, run the test by executing the script:

```shell
node examples/api/src/js-script.js
```

## Support

If you have any questions then please feel free to:

- Raise an issue on this [project's GitHub repository](https://github.com/makingchatbots/genesys-cloud-chatbot-tester)
- [Drop me a message](https://www.linkedin.com/in/lucas-woodward-the-dev/)

## Debugging

Messages sent between the client and Genesys' server can be output by setting the environment variable:

```shell
DEBUG=WebMessengerGuestSession
```
