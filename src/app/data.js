import { logo } from "./assets/logo";
import {aniv, anivDouble, autreFeteDouble, bateme, fleur, mariage, img2,img3,img4,mariageDouble, reliDouble, fleur1, reli, deco1} from "./assets/img"

export const logoEve = logo

// PRESANTATION HOME

export const PRESANTATION_HOME = {
  h3:"Createur de reve",
  h4:"Comme dans un conte de fée, un rêve toujours désiré, Eve-Event c'est la magie féerique qui donne vie à votre cérémonie",
  service:[
    "Bienvenue chez Eve-Event, votre partenaire de confiance pour des événements inoubliables. Spécialisée dans la décoration et l'organisation d'événements, notre équipe dédiée et passionnée transforme chaque moment spécial en une expérience magique et mémorable.",
    "Que ce soit pour des mariages féériques, des anniversaires joyeux, des baptêmes intimes, ou tout autre événement marquant, nous mettons notre créativité et notre expertise à votre service. Nous travaillons avec vous pour comprendre vos désirs et vos besoins, et nous assurons que chaque détail est soigneusement pensé et parfaitement exécuté.",
    "Avec [Nom de Eve-Event, vous pouvez vous détendre et profiter de votre événement, sachant que chaque aspect est entre de bonnes mains. Laissez-nous créer pour vous des souvenirs que vous chérirez pour toujours.",
    "Explorez nos services et découvrez comment nous pouvons vous aider à réaliser l'événement de vos rêves.",
  ],
  img:img4,
}

// DATA_PAGE_TT_LES SERVICES

export const DATA_PAGE_TT_LES_SERVICES = {
  h2:"POUR TOUT VOS EVENEMENT SUR MESSURE",
  services:[
    {
      id:0,
      h3:"Pour un",
      h4:"MARIAGE PERSONNALISÉ SUR MESURE",
      p:"Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
      link:"/evenement-prives/decoration-mariage-personnalise",
      img:mariageDouble,
      a:true,
    },
    {
      id:1,
      h3:"Pour un",
      h4:"ANNIVERSAIRE PERSONNALISÉ SUR MESURE",
      p:"Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
      link:"/evenement-prives/decoration-mariage-personnalise",
      img:anivDouble ,
      a:false,
    },
    {
      id:2,
      h3:"Pour un",
      h4:"BAPTÊME PERSONNALISÉ SUR MESURE",
      p:"Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
      link:"/evenement-prives/decoration-bateme",
      img:reliDouble,
      a:true,
    },
    {
      id:3,
      h3:"Pour un",
      h4:"AUTRE FETE PERSONNALISÉ SUR MESURE",
      p:"Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
      link:"/evenement-prives/decoration-autre-fete",
      img:autreFeteDouble ,
      a:false,
    },
  ],
}

// DATA_PAGE_SERVICE
export const DATA_PAGE_SERVICE = [
  {service:"decoration-mariage",
    card:{
      h3:"Mariage personnalisé",
      liste:[
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
      ],
      img:mariage,
    }
  },
  {service:"decoration-anniversaire",
    card:{
      h3:"Anniversaire personnalisé",
      liste:[
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
      ],
      img:img2,
    }
  },
  {service:"decoration-bapteme",
    card:{
      h3:"Bateme personnalisé",
      liste:[
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
      ],
      img:reli,
    }
  },
  {service:"decoration-autre-fete",
    card:{
      h3:"toute sorte de fete",
      liste:[
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
        "Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.",
      ],
      img:fleur1,
    }
  },

]

//APROPOS_SECTION

export const APROPOS_SECTION = {
  txt1:"Bonjour,",
  txt2:"Binevenur dans l'univers de la decoration ,Je suis votre décoratrice événementielle, une artiste passionnée, transforme chaque occasion en un spectacle inoubliable.",
  txt3:"Organisatrice et Décoratrice Evenementiel.",
  txt4:"Eve Event",
  txt5:"A-propos",
  img:img4,
}


// SERVICE_EVENT

export const SERVICE_EVENT = {
  h2:"Eve event glorie",
  h3:"EVE EVENT, DÉCORATRICE ET ORGANISATEUR D’ÉVÉNEMENTS SUR MESURE",
  service:[
    {img:mariage,txt:"Décoration Mariage personnalisé",link:"/evenement-prives/decoration-mariage"},
    {img:aniv,txt:"Décoration Anniversaire",link:"/evenement-prives/decoration-anniversaire"},
    {img:bateme,txt:"Décoration Baptême",link:"/evenement-prives/decoration-bateme"},
    {img:fleur,txt:"Décoration Autre fete",link:"/evenement-prives/decoration-autre-fete"},
]
}
// SERVICE 
export const SERVICE = {
  h2:"DÉCORATRICE ET ORGANISATRICE D’ÉVÉNEMENTS SUR MESURE",
  service:[
    {img:deco1,h3:"Décoration évenement privée"},
    {img:img3,h3:"Décoration évenement proffesionnel"},
  ]
}

// DATA NAVLINK
export const DATA_NAV_LINK= [
    {id:0,name: "Acceuil", link: "/" },
    {id:1, name: "Événements privés", link: "/evenement-prives",sousLink:[
      {id:0,name:"decoration mariage",link:"/evenement-prives/decoration-mariage"},
      {id:1,name:"decoration anniversaire",link:"/evenement-prives/decoration-anniversaire"},
      {id:2,name:"decoration baptême",link:"/evenement-prives/decoration-bapteme"},
      {id:3,name:"decoration autre-fete",link:"/evenement-prives/decoration-autre-fete"},  
    ]},
    {id:3, name: "Événements pro", link: "/evenement-pro" },
    {id:4, name: "Eve Event", link: "/",logo:logoEve },
    {id:5, name: "Galerie", link: "/" },
    {id:6, name: "Apropos", link: "/apropos" },
    {id:7, name: "Contacts", link: "/contact" },
  ];


  // DATA_PAGE_DYNAMIQU
 export const DATA_PAGE_DYNAMIQU={
     guide:{
      h3:"Notre guide pour un anniversaire inoubliable !",
      gp:[
        {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
        {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
        {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
        {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
        {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
        {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
    
      ]
    },

 }


   // DATA CONTACTER

   export  const DATA_CONTACT = {
    left :{
      h1: " Nous contacter", 
      p1: "Venez échanger avec nous à propos de vos besoins, votre problématique ou tout simplement pour faire notre connaissance",
      coordonnees:{
        h3:"Nos coordonnées",
        num:"05 44 34 44 10",
        lenkSite:"www.HPprestige.com",
      },
      adresse:{
        h3:"Adresse",
        rue:"Abidjan 1 cocody angre 8eme tranche",
      }
    },
    right:{
      form:{
        inputs:{
          inputNom :{type:"text",nom:"Nom"},
          inputPrenom :{type:"text",nom:"Prenom"},
          inputEmail :{type:"email",nom:"Email"},
          inputEntreprise :{type:"text",nom:"Entreprise"},
          inputTelephone :{type:"tel",nom:"Telephone"},
          inputMessage :{type:"none",nom:"Message",rows:3,col:50},
          inputCheckbox :{type:"Checkbox",nom:"Checkbox"},
          inputlabel :{htmlFor:"Checkbox",text:"I accept to receive emails from Royal Cheese Digital"},
          btn: {type:"submit",text:"Envoyé",}
        }
      }
    }
  }

  // DATA_FOOTER
  export const DATA_FOOTER = {
    div1:{txt1:"contactez-Nous",
          div:[
            { link: "#" ,txt1:"Mobile & WhatsApp:",txt2:"+2250759258354"},
            { link: "#" ,txt1:"Email:",txt2:"info@eveEvent.net", },
            { link: "#" ,txt1:"Facebook:",txt2:"facebook.com/eve-event", },
            { link: "#" ,txt1:"Instagram:",txt2:"instagram.com/eve-event", },
        ]
    },

    div2: {
          txt1:"La liste de vos rêves",
          div:[
          { name:"A-propos" ,link: "/apropos" },
          { name:"Contact" ,link: "/contact" },
          { name:"galerie" ,link: "/galerie" },
          { name:"Organisation proffesionnel" ,link: "Organisation proffesionnel" },
          { name:"Décoration mariage personnalisé"  ,link: "/evenement-prives/mariage" },
          { name:"Décoration anniversaire" ,link: "/evenement-prives/anniversaire" },
          { name:"Décoration baptême" ,link: "/evenement-prives/bapteme" },
          { name:"Décoration autre fete" ,link: "/evenement-prives/autre-fete" },
        ]},

    div3: { 
        div1: [
        "Midlands HQ & Showroom:", "Asian Wedding Services UK LTD",
        "28 Cato Street North","Nechells","Birmingham",
        "B7 5AN",
        ],
        div2 :{
          h3:"Opening Hours:",
          p:"Mon-Fri: 9am – 4pm",
        }
      }
  }
