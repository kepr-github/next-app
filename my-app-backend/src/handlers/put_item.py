import json
import os
import boto3
import json
import openai
from openai import OpenAI
import os

client = boto3.client('dynamodb')
openai.api_key = os.environ['OPENAI_API_KEY']  

def putItemHandler(event, context):
    if event["httpMethod"] != "POST":
        raise Exception(f"putItemHandler only accept POST method, you tried: {event.httpMethod}")

    # Get id and name from the body of the request
    print(event)
    body = json.loads(event["body"])
    message= body["message"]

    try:
        client = OpenAI()
        completion = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "あなたは人を導く神です"},
                {"role": "user", "content": f"困りごとは{message}。50字いないの役に立つ名言を書いてください。"},
            ]
        )
    except Exception as e:
        raise e
    res = completion.choices[0].message.content

    # result = client.put_item(TableName=os.environ["SAMPLE_TABLE"], Item={"id": {"S": id}, "name": {"S": name}})
   

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


