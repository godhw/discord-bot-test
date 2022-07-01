Discord Bot template
=========

## 1. 봇 추가하기
-  [discord dev applications](https://discord.com/developers/applications)로 이동하셔서 봇을 추가하세요.
-  new application 클릭해서 이름짓고 create
-  왼쪽 `SETTINGS`에서 `Bot`클릭한 후, Add Bot 누르기
   -  `Reset Token`을 누르면 토큰이 생성되고, 이것을 `.env`의 `token`에 추가하면 됩니다.
-  왼쪽 `SETTINGS`에서 `OAuth2`->`URL Generator` 누르기
   -  `OAuth2`->`General`에 `CLIENT ID`가 있습니다.
-  `SCOPES`에서 `bot`과 `applications.commands` 체크.
   -  `applications.commands`는 `slash command`를 위해 추가됩니다.
- `BOT PERMISSIONS`에서는 읽어보고 필요한 것들을 추가합니다.
- `GENERATED URL`을 복사해서 브라우저에서 이동한 후, 원하는 서버에 봇을 추가할 수 있습니다.


## 2. 수정해야 하는 부분

### **chatbot.js**
- [chatbot.js](https://github.com/godhw/discord-bot-test/blob/master/triggers/chatbot.js)를 참고하세요
- `keywords`, `prefixes`, `suffixes`를 수정할 필요가 있습니다.
  - `keywords` : 메시지 내용에 이 키워드가 포함되어 있으면 봇이 반응합니다.
  - `prefixes` : 메시지 제일 앞에 이 글자가 포함되어 있으면 봇이 반응합니다.
  - `suffixes` : 메시지 제일 끝에 이 글자가 포함되어 있으면 봇이 반응합니다.
- `async execute(message, args)`는 API서버와 통신하는 부분입니다.
  - 사용할 서버에 맞게 구현해 주세요.
  - `message.reply({})`부분은 안건드리셔도 됩니다.
  - `api_endpoint`는 직접 입력하셔도 되지만, `.env`에서 수정하시는 것이 바람직합니다.

### **.env**
- 이름을 [sample.env](https://github.com/godhw/discord-bot-test/blob/master/sample.env)를 `.env`로 변경하세요.
- 내용을 알맞게 변경하세요.
  - `owner`, `test_guild_id`는 디스코드 사용자 설정에서 고급 탭으로 가시면 개발자 모드가 있습니다.
  - 활성화 시키고 서버나 사용자에 우클릭하면 `ID 복사하기`옵션이 생긴것을 확인할 수 있습니다.

> SlashCommand등 자세한 내용은 밑에 링크를 확인하세요.
 
## Reference
This project is based on [discord-bot](https://github.com/AINFTs/discord-bot) by [AINFTs](https://github.com/AINFTs)

