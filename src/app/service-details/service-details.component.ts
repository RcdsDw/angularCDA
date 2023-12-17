import { Component } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent {
  titreBan = "Livraison urbaine"
  textBan = "Des triporteurs pour vos colis citadins Nous développons des livraisons en ville en pariant sur la mobilité douce pour réduire les impacts et nous adaptons au trafic"
  imageBan = "../../assets/image3.jpg"

  serviceCardsData = [
    { 
      title: "Acheminement en centre ville", 
      subtitle: ".... avec les Triporteurs Palois", 
      desc1: `Circuler, stationner et livrer en centre ville n’est pas toujours chose aisée. 
      Notre département logistique, qui a vu le jour quelques semaines avant le premier
      confinement, achemine les marchandises de centre-ville sur le dernier kilomètre et réceptionne les colis 
      (Chronopost, DB Schenker, Heppner…), le tout à vélo électrique cargo à assistance électrique grâce aux Triporteurs Palois.`, 
      desc: `Nous évitons ainsi les encombrements provoqués par la livraison d’un gros véhicule en stationnement, et pouvons nous
      faufiler dans le trafic interurbain. Nous proposons également un service de livraison intra centre-ville entre commerçants
      ou commerçants/clients. Le recours à une mobilité douce permet de réduire les impacts tout en misant sur l’agilité et la
      proximité et une meilleure gestion des flux.`,
      image: "../../assets/stack.svg"
    },
    { 
      title: "Livraison dernier kilomètre (flux transporteur)", 
      subtitle: "Services aux transporteurs", 
      desc1: "",
      desc: `Nous distribuons vos colis et palettes en vélo cargo à assistance électronique. Nous acheminons ainsi sur le dernier
      kilomètres les palettes et colis de SCHENKER, BMV, HEPNER, CHRONOPOST…`,
      image: "../../assets/arrow.svg"
    },
    { 
      title: "Livraison de proximité", 
      subtitle: "Services aux commerçants", 
      desc1: "", 
      desc: `Nous préparons vos commandes et les expédions ou les livrons et assurons tant le stockage que la petite logistique
      urbaine. Nous réalisons ainsi la livraison pour le Drive fermier ou de fleurs pour le compte de nombreux fleuristes. Une
      nouvelle alternative pour des livraisons parfois faites par des taxis !`,
      image: "../../assets/user.svg"
    }, 
    { 
      title: "Collecte des biodéchets pour la restauration", 
      subtitle: "Service aux restaurateurs et services de restauration collective", 
      desc1: "", 
      desc: `Nous étudions le développement d’un service de collecte et de valorisation des biodéchets pour les cafetiers et
      restaurateurs palois, toujours avec les Triporteurs Palois. Un service qui pourrait également séduire les collectivités, les
      services de restauration collective.`,
      image: "../../assets/leaf.svg"
    },
  ];
}
