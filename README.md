# strava-efforts-api

Authorize app:
1. Add application in Strava Settings, obtain `client_id` and `client_secret`
2. visit https://www.strava.com/oauth/authorize?client_id=[YOUR CLIENT ID]&redirect_uri=http://localhost/exchange_token&response_type=code&approval_prompt=auto&scope=public&state=foo and log in
3. copy `code` from redirected url: http://localhost/exchange_token?state=foo&code=[YOUR NEW CODE]&scope=
4. exchange token: https://www.strava.com/oauth/token - `client_id`, `client_secret`, `code`
