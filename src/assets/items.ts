import website from '../assets/website.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.jpg'
import youtube from '../assets/youtube.jpeg'
import dribbble from '../assets/dribbble.png'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'
import twitter from '../assets/twitter.png'

import christmasMusic from '../music/a-very-happy-christmas.mp3'
import yogaMusic from '../music/yoga-song.mp3'
import christmasImg from '../assets/music/christmas.webp'
import yogaImg from '../assets/music/yoga.jpg'

import { ItemType, SongType } from '../ts';

const items: ItemType[] = [{
    "title": "Website",
    "subtitle": "Look at my work!",
    "image": website,
    "link": "https://sagniksahoo.codes" //your personal website or portfolio  link
},
{
    "title": "GitHub",
    "subtitle": "@heysagnik | 🏡 to all my open-source projects",
    "image": github,
    "link": "https://github.com/heysagnik" //Github Profile link
},
{
    "title": "Instagram",
    "subtitle": "@heysagnik |  Shots of my life 🙂",
    "image": instagram,
    "link": "https://instagram.com/heysagnik" //instagram profile link 
},
{
    "title": "Twitter",
    "subtitle": "@heysagnik | 😉",
    "image": twitter,
    "link": "https://twitter.com/heysagnik"// twitter profile link 
},
{
    "title": "LinkedIn",
    "subtitle": "Know more about my profession 👨‍💼",
    "image": linkedin,
    "link": "https://www.linkedin.com/in/heysagnik/" // linkedin
},
{
    "title": "YouTube",
    "subtitle": "CODER SAGNIK | Official channel of mine",
    "image": youtube,
    "link": "https://www.youtube.com/channel/UCOUa9hvd4sJWQWQRIQctbSg"//youtube channel link 
},

{
    "title": "Dribbble",
    "subtitle": "@virtuonic | shots of dezigns ",
    "image": dribbble,
    "link": "https://dribbble.com/virtuonic" // Dribbble profile link 
},
{
    "title": "Telegram",
    "subtitle": "@heysagnik | Chat with me instantly ",
    "image": telegram,
    "link": "https://telegram.me/heysagnik" //Telegram Pofile 
}]

const songs: SongType[] = [
{
    "title": "Christmas",
    "audio": christmasMusic,
    "image": christmasImg,
},
{
    "title": "Yoga",
    "audio": yogaMusic,
    "image": yogaImg,
}
]

export {items, songs}
