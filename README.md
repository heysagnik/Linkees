Linkees **Experimental** Branch 🔬💻

> ⚠️ Warning <br/> <br/>
> This branch of Linkees is for experimental purposes only and is not intended for production use. Most of the components in this branch are broken and may not function as expected.

<table>
<tr >
    <th><img src="https://s3.us-east-2.amazonaws.com/fueler.io-images/fueler-creatons/ZO3GUmNNWMJL8vuRQMQIDs7ConJCktJOOo0xTjgr.png" width="50px" height="50px" style="display:inline-block; "/></th>
    <th><h1>&ensp;Linkees</h1></th>
</tr>
</table>

[![Generic badge](https://img.shields.io/badge/BUILD-Success-<COLOR>.svg?logo=github)](https://vercel.com/heysagnik/bio/deployments) [![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/heysagnik.svg?style=social&label=Follow%20%40heysagnik)](https://twitter.com/heysagnik)

## About 🎯

A beautiful Single Page Web App made with React to display all your important social links for your followers (Alternative to linktr.ee).

![Screenshot](https://api.microlink.io/?url=https://heysagnik.vercel.app&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=1500&type=jpeg&overlay.browser=dark&overlay.background=linear-gradient%28225deg%2C+%23FF057C+0%25%2C+%238D0B93+50%25%2C+%23321575+100%25%29)

## How to use ?🤔

install the linkees package

```
npm install --save linkees
```

import Linkees component from linkees package in your react app

```
import Linkees, { CHANNEL_TYPES } from "linkees";
```

Create a config for your links

```
[
  {
    title: //title of the link card
    subtitle: //subtitle of the link card
    link: //URL
    type: //channel type
  }
]
```

Example can be found in `example-linktree/src/index.tsx`

Deploy to Vercel or any other platform and Enjoy!

<br>

<br>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fheysagnik%2FLinkees)

We also support **_Docker 🐳_** .For more details read [this](https://github.com/heysagnik/Linkees/blob/d15c73b40e140249aa58e7354b80e1ae7508ef9f/docker.md).

## Contributing 📝

We always welcome contributions; big or small, it can be documentation updates, adding new checks or something bigger. Please check the Contributing Guide for details on how to help out.

### Special Thanks to those People who have contributed :

<img width="200" src="https://contrib.rocks/image?repo=heysagnik/Linkees" />
