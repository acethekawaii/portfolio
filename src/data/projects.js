import AcessignmentThumb from '../assets/img/thumb/acessignment-thumb.png'
import NftAzrielThumb from '../assets/img/thumb/Nft.azriel-thumb.png'
import MaskedEmotion from '../assets/img/thumb/masked-emotion-banner.png'
import Attendify from '../assets/img/thumb/attendify.png'

const projects = [
  {
    id: 1,
    languages: "PostgreSQL, AngularJS, NestJS, Tailwind",
    title: "Attendify",
    desc: "Attendify transforms manual attendance tracking in churches into a simplified system that saves time.",
    details: "/projects/details/attendify",
    live: "https://lthmi-ushers-registration.com/",
    repo: "https://github.com/lugh-tuatha/attendify-frontend",
    cover: Attendify,
  },
  {
    id: 2,
    languages: "Mongo, Express, React, Node, Tailwind and Vite",
    title: "Masked Emotion",
    desc: "Private place where people can share their deepest feelings and thoughts anonymously.",
    live: "https://masked-emotion.vercel.app/",
    repo: "https://github.com/lugh-tuatha/MaskedEmotion",
    cover: MaskedEmotion,
  },
  {
    id: 3,
    languages: "React, CSS, Bootstrap and Vite",
    title: "Nft.azriel",
    desc: "A virtual NFT marketplace",
    live: "https://nft-azriel.vercel.app/",
    repo: "https://github.com/lugh-tuatha/nft.azriel",
    cover: NftAzrielThumb,
  },
  {
    id: 4,
    languages: "HTML, CSS, JavaScript and Bootstrap",
    title: "Acessignment",
    desc: "Webpage full or resources for programers.",
    live: "https://acessignment.vercel.app/",
    repo: "https://github.com/lugh-tuatha/acessignment",
    cover: AcessignmentThumb,
  },
]

export default projects;