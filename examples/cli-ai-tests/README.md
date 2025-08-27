# CLI AI Examples

## ChatGPT

```shell
# .env
export DEPLOYMENT_ID='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
export REGION='xxxx.pure.cloud'
export OPENAI_API_KEY='xx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
```

```shell
export $(cat .env | xargs) && ./chatgpt-run.sh
```

## Google Gemini

```shell
# .env
export DEPLOYMENT_ID='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
export REGION='xxxx.pure.cloud'
export GOOGLE_API_KEY='your-api-key'
```

You can find the environment vars supported by Google's GenAI library this tool uses [in their docs](https://github.com/googleapis/js-genai/tree/main?tab=readme-ov-file#optional-nodejs-only-using-environment-variables).

```shell
export $(cat .env | xargs) && ./google-gemini-run.sh
```

# Troubleshooting

## Permission denied during script running

If experiencing a permission denied error when running a script then try reinstalling the node version:

```shell
nvm uninstall <version in .nvm>
nvm install <version in .nvm>
```
