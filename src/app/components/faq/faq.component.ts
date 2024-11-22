import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  FAQContent = [
    {
      id: 0,
      title: "suis-je obligé de créer un compte ?",
      content: "Non, absolument pas ! Ici, la fête est ouverte à tous, sans formalités inutiles. Pour rejoindre une party, saisissez simplement le code d'invitation et choisissez un pseudonyme qui vous inspire. C'est tout ! Cependant, si vous souhaitez créer votre propre événement et garder une trace de tous les moments mémorables, il vous suffit de créer un compte avec une adresse e-mail valide. ",
      open: false
    },
    {
      id: 1,
      title: "combien de parties puis-je créer ?",
      content: "Avec la formule classique de BetterDJ, vous pouvez créer jusqu'à une party par semaine. Cependant, si vous optez pour la formule premium, vous aurez la liberté de créer autant de party que vous le souhaitez. Alors, laissez libre cours à votre créativité et à vos envies de célébrer !",
      open: false
    },
    {
      id: 2,
      title: "quel est le nombre maximum de personnes sur un salon ?",
      content: "Illimité ! Chez BetterDJ, il n'y a pas de limite au nombre de personnes pouvant participer à un salon. Que vous soyez une petite bande d'amis ou une foule en délire, tout le monde est le bienvenu pour faire la fête ensemble. Alors, invitez autant d'amis que vous le souhaitez et préparez-vous à une soirée inoubliable !",
      open: false
    },
    {
      id: 3,
      title: "comment créer un salon",
      content: "Pour créer un salon, commencez par créer un compte. Ensuite, depuis la page d'accueil, rendez-vous sur votre profil. Vous y trouverez l'option pour créer une nouvelle party. Il vous suffira alors de renseigner les informations nécessaires, et le tour est joué ! Prêt à faire de votre événement un succès ?",
      open: false
    },
    {
      id: 4,
      title: "l'application est-elle gratuite ?",
      content: "Oui, l'application est gratuite ! Cependant, nous proposons également une option premium. Avec cette version, vous pouvez créer autant de fêtes que vous le souhaitez, et bénéficier de statistiques supplémentaires pour rendre vos événements encore plus incroyables. Alors, pourquoi ne pas essayer notre formule premium pour une expérience de fête ultime ?",
      open: false
    },
  ]

  public openContent(index: number) {
    this.FAQContent[index].open = !this.FAQContent[index].open;
  }

}
