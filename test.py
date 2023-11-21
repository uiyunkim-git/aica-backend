import openai
import json
# OpenAI API 키 설정
openai.api_key = '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'

# Python 코드 생성을 위한 prompt
prompt = """다음 주어진 5개의 문장은 사람이 말한 내용이야. 내용을 요약하지 않고 5개의 문장을 취합해줘. : 

1.  안녕하세요. 초전도체는 특정온도에서 전기저항이 사라지는 현상을 나타내는데 이는 1911년에 헐리홈스피가 수은에서 발견했습니다. 
2.  1911년에 헐리홈스피가 수은에서 발견했습니다. 이런 특성으로 영하의 특정 온도에서 영구영속 전류를 유지하며 마이지노 효과로 강한 자기량을 형성할 수 있습니다. 
3.  영하의 특정 온도에서 영구영속 전류를 유지하며 마이지노 효과로 강한 자기량을 형성할 수 있습니다. 초전도체는 주로 저온에서 나타나지만 1986년에 고온초전도체가 발견되면서 응용분야가 크게 확정되었습니다. 
4.  강한 자기량을 형성할 수 있습니다. 초전도체는 주로 저온에서 나타나지만 1986년에 고온초전도체가 발견되면서 응용분야가 크게 확정되었습니다. 자기고립체로 활용되며 저장장치나 전송선에서 전기손실을 최소화하여 효율적인 전력 전달이 가능합니다.
5.  발견되면서 응용 분야가 크게 확정되었습니다. 자기고립체로 활용되며 저장장치나 전송선에서 전기손실을 최소화하여 효율적인 전력 전달이 가능합니다. 이는 우리 일상뿐 아니라 첨단기술 분야에서도 중요한 역할을 하고 있습니다. 앞으로의 연구개발을 통해 초전도체의 기술이 더욱 진화할 것으로 기대됩니다. 감사합니다.

result: """

"""안녕하세요. 초전도체는 특정온도에서 전기저항이 사라지는 현상을 나타내는데 이는 1911년에 헐리홈스피가 수은에서 발견했습니다. 이런 특성으로 영하의 특정 온도에서 영구영속 전류를 유지하며 마이지노 효과로 강한 자기량을 형성할 수 있습니다. 

초전도체는 주로 저온에서 나타나지만 1986년에 고온초전도체가 발견되면서 응용분야가 크게 확정되었습니다. 자기고립체로 활용되며 저장장치나 전송선에서 전기손실을 최소화하여 효율적인 전력 전달이 가능합니다.
 이는 우리 일상뿐 아니라 첨단기술 분야에서도 중요한 역할을 하고 있습니다. 앞으로의 연구개발을 통해 초전도체의 기술이 더욱 진화할 것으로 기대됩니다. 감사합니다."""

# OpenAI에 요청하여 코드 생성
response = openai.chat.completions.create(
    model="gpt-4-1106-preview",
    messages=[
        {"role": "system", "content": "You are a helpful assistant. Your response should be in JSON format."},
        {"role": "user", "content": f"{prompt}"}
    ],
    response_format={"type": "json_object"}
)

# 생성된 코드 출력

print(json.loads(response.choices[0].message.content)["result"] )


