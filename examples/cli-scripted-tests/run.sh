#sh

npm install -g ../../packages/genesys-cloud-chatbot-tester-cli

function cleanup {
  npm uninstall -g ../../packages/genesys-cloud-chatbot-tester-cli
}
trap cleanup EXIT

## Help message for updating the docs
genesys-cloud-chatbot-tester scripted --help

## Passing example exits with exit code 0
genesys-cloud-chatbot-tester scripted example-pass.yml -id $DEPLOYMENT_ID -r $REGION -p 10
if [ $? -ne 0 ]
then
  echo ""
  echo "========="
  echo "UNEXPECTED EXIT CODE $? - Passing example did not result in Exit Code of 0"
  exit 1
fi

## Failing example exits with exit code 1
genesys-cloud-chatbot-tester scripted example-fail.yml -id $DEPLOYMENT_ID -r $REGION -p 10
if [ $? -ne 1 ]
then
  echo ""
  echo "========="
  echo "UNEXPECTED EXIT CODE $? - Intentionally failing example did not result in Exit Code of 1"
  exit 1
fi

exit 0
