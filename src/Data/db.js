import Js from '../Assets/javascript.png';
import Node from '../Assets/node-js.jpg';
import Mern from '../Assets/mern.png';
import Reacts from '../Assets/react-js.png';
import Pedro from '../Assets/pedro.png'
import Sonny from '../Assets/sonny.jfif'
import Maxi from '../Assets/maximi.jfif'

const dataList = {
    "courses": [
        {
            "id": 1,
            "title": "React&Redux",
            "price": 18,
            "time": "20 hours",
            "img": Reacts
        },
        {
            "id": 2,
            "title": "Node js",
            "price": 15,
            "time": "10 hours",
            "img": Node
        },
        {
            "id": 3,
            "title": "Mern Stack",
            "price": 23,
            "time": "24 hours",
            "img": Mern
        },
        {
            "id": 4,
            "title": "JavaScript",
            "price": 14,
            "time": "13 hours",
            "img": Js
        }
    ],
    "coach": [
        {
            "id": 11,
            "title": "Maximilian (FullStack)",
            "img": Maxi

        },
        {
            "id": 12,
            "title": "Sonny (FrontEnd)",
            "img": Sonny

        },
        {
            "id": 13,
            "title": "Pedro (BackEnd)",
            "img": Pedro
        }
    ]
}

export default dataList;
