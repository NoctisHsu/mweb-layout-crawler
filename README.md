# mweb-layout-crawler

## Usage
``` shell
npx mweb-layout-crawler --configPath {config.json} --loginUserName {username} --loginPwd {password}
```
## config example
``` json

{
    "siteBaseUrl":"https://www.anns.tw",
    "pages":[
        {
            "name": "商品頁",
            "path": "/SalePage/Index/6326384"
        },
        {
            "name": "會員專區首頁",
            "path": "/V2/VipMember/VIPMemberRelay?shopId=123"
        }
    ],
    "seekTargets": [
        " V2_Layout_platform ",
        " V2_Layout_ThemeBase ",
        " V1_Layout_Platform ",
        " V1_Layout_Activity ",
        " V1_Layout_ThemeBase "
     ]
}
```
