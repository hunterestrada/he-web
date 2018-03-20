
import * as type from 'managers/type.js'

import hunterEstradaImage from 'assets/img/hunter_estrada.jpg'
import gitHubImage from 'assets/img/git_hub.png'
import instagramImage from 'assets/img/instagram.png'
import linkedInImage from 'assets/img/linked_in.png'
import twitterImage from 'assets/img/twitter.png'

const Moment = require('moment');

const FORMAT_VIEW_DATE = 'MMMM D, YYYY [at] h:MM A [on] dddd';

// Private

class DataDateFormatting {
  static getFormattedDate(value) {
    if (!type.isString(value)) {
      return "";
    }
    return new Date(value).toLocaleString();
  }
}

class ViewDateFormatting {

  static getFormattedViewDate(value) {
    if (!type.isString(value)) {
      return "";
    }
    return Moment(value).format(FORMAT_VIEW_DATE);
  }

}

class ArticleViewDateFormatting extends ViewDateFormatting {

  static prefixFormattedCreatedDate() {
    return "Posted: "
  }

  static getFormattedCreatedDate(value) {
    return (
      this.prefixFormattedCreatedDate() +
      this.getFormattedViewDate(value)
    );
  }

}

// Exposed

export const isEmpty = (value) => {
  return !type.isString(value) || value === '';
}

export class AboutDetailView {
  static title() {
    return "I'm Hunter.";
  }
  static subtitle() {
    return "I build things and say stuff."
  }
  static detail() {
    return "Want to know more? Let's connect.";
  }
  static emailLink() {
    return "mailto:" + this.emailAddress() + "?Subject=Hey man";
  }
  static emailAddress() {
    return "hello@hunterestrada.com";
  }
  static imageLink() {
    return hunterEstradaImage;
  }
  static imageTitle() {
    return "Hunter Estrada";
  }
}

export class AdminArticleTableView {
  static title() {
    return "Articles";
  }
  static articleTitle() {
    return "title";
  }
  static articleSubtitle() {
    return "subtitle";
  }
  static articleSummary() {
    return "summary";
  }
  static articleFile() {
    return "file";
  }
  static articleSlug() {
    return "slug";
  }
  static articleUpdated() {
    return "updated";
  }
  static articleCreated() {
    return "created";
  }
}

export class AdminArticleChangeForm extends DataDateFormatting {
  static create() {
    return "Create";
  }
  static update() {
    return "Update";
  }
  static remove() {
    return "Remove";
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

export class AdminAuthenticationForm {
  static emailPlaceholder() {
    return "Email";
  }
  static passwordPlaceholder() {
    return "Password";
  }
  static repeatedPasswordPlaceholder() {
    return "Password (confirm)"
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
    return "Invalid password";
  }
  static invalidPasswordMatch() {
    return "Invalid password match";
  }
}

export class ArticleDetailView extends ArticleViewDateFormatting {

  static prefixFormattedUpdatedDate() {
    return "Last Edit: ";
  }

  static getFormattedUpdatedDate(value) {
    return (
      this.prefixFormattedUpdatedDate() +
      this.getFormattedViewDate(value)
    )
  }

}

export class ArticleListView extends ArticleViewDateFormatting {
  static emptyArticleListTitle() {
    return "Content is coming.";
  }
  static emptyArticleListSubtitle() {
    return "Just you wait!";
  }
}

export class BadRouteView {
  static title() {
    return "A page for this link doesn't exist."
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
