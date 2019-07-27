# Local Setup

1. copy [helpilepsy/sample-app.json](helpilepsy/sample-app.json) to helpilepsy/app.json
2. change the app.json file to use your local network ip

```json
{
  "expo": {
    "name": "helpilepsy",
    "slug": "helpilepsy",
    "privacy": "public",
    "sdkVersion": "33.0.0",
    "platforms": ["ios", "android", "web"],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "extra": {
      "API_URL": "http://[YOUR_IP]:[SERVER_PORT]"
    }
  }
}
```
