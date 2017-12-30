
import gitHubImage from 'assets/img/git_hub.png'
import instagramImage from 'assets/img/instagram.png'
import linkedInImage from 'assets/img/linked_in.png'
import twitterImage from 'assets/img/twitter.png'

export class AboutDetailView {
  static title() {
    return "Hi, I'm Hunter.";
  }
  static subtitle() {
    return "I make things and say stuff."
  }
  static detail() {
    return "If you want to know more, let's connect.";
  }
  static emailLink() {
    return "mailto:" + this.emailAddress() + "?Subject=Hey man";
  }
  static emailAddress() {
    return "hello@hunterestrada.com";
  }
}

export class BottomBar {

  static gitHubImageLink() {
    return gitHubImage;
  }
  static gitHubLink() {
    return "https://github.com/hunterestrada";
  }
  static gitHubTitle() {
    return "GitHub";
  }
  static instagramImageLink() {
    return instagramImage;
  }
  static instagramLink() {
    return "https://www.instagram.com/hunterestrada/";
  }
  static instagramTitle() {
    return "Instagram";
  }
  static linkedInImageLink() {
    return linkedInImage;
  }
  static linkedInLink() {
    return "https://www.linkedin.com/in/hunterestrada";
  }
  static linkedInTitle() {
    return "LinkedIn";
  }
  static twitterImageLink() {
    return twitterImage;
  }
  static twitterLink() {
    return "https://twitter.com/hunterestrada";
  }
  static twitterTitle() {
    return "Twitter";
  }
}

export class TopBar {
  static feed() {
    return "Feed";
  }
  static about() {
    return "About";
  }
}
