import json
import openai
from openai import OpenAI
import os

# import requests
openai.api_key = os.environ['OPENAI_API_KEY']  

def lambda_handler(event, context):
    """Sample pure Lambda function

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

        Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict

        Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """

    try:
        client = OpenAI()
        completion = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "何か喋ってみてください。"},
                {"role": "user", "content": "ランダムに文章を生成してください。"},
            ]
        )
    except Exception as e:
        raise e
    res = completion.choices[0].message.content

    return {
        "statusCode": 200,
        'headers': {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
            "Access-Control-Allow-Headers": "Content-Type"
        },
        "body": json.dumps({
            "message": res,
            
            # "location": ip.text.replace("\n", "")
        }, ensure_ascii=False),
    }
