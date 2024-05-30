curl --location 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation' \
--header 'Authorization: Bearer sk-PZlxBLdjwb' \
--header 'Content-Type: application/json' \
--data '{
    "model": "qwen-max",
    "input":{
        "messages":[      
            {
                "role": "system",
                "content": "你是一个资深设计师。我们正在做设计的第一步：头脑风暴。下一次对话我会给你一个词，你要根据这个词做思维拓展。"
            },
            {
                "role": "user",
                "content": "小户型厨房智能家电产品设计"
            }
        ]
    },
    "parameters": {
        "result_format": "text"
    }
}'
