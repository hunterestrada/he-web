
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

export class AdminArticleTableView {
  static title() {
    return "Articles";
  }
  static articleTitle() {
    return "title";
  }
  static articleDetail() {
    return "detail";
  }
  static articleSlug() {
    return "slug";
  }
  static articleContent() {
    return "content";
  }
  static articleUpdated() {
    return "updated";
  }
  static articleCreated() {
    return "created";
  }
}

export class AdminArticleChangeForm {
  static create() {
    return "Create";
  }
  static update() {
    return "Update";
  }
}

export class AdminSignInView {
  static title() {
    return "Sign In";
  }
}

export class AdminSignUpView {
  static title() {
    return "Sign Up";
  }
}

export class AdminCredentialForm {
  static emailPlaceholder() {
    return "Email";
  }
  static passwordPlaceholder() {
    return "Password";
  }
  static submit() {
    return "Submit";
  }
  static invalidCredentials() {
    return "Invalid credentials";
  }
  static invalidEmail() {
    return "Invalid email";
  }
  static invalidPassword() {
    return "Invalid password"
  }
}

export class BadRouteView {
  static title() {
    return "That page doesn't exist."
  }
  static subtitle() {
    return "If you manually typed the link, check for typos then try again."
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
