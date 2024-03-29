import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private meta: Meta,
  ) {}

  AddMetaTag() {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:title');
    meta.setAttribute('content', 'HoangAnhQuan');
    document.getElementsByTagName('head')[0].appendChild(meta);
    const meta2 = document.createElement('meta');
    meta2.setAttribute('property', 'og:description');
    meta2.setAttribute('content', 'Hi, I am HoangAnhQuan');
    document.getElementsByTagName('head')[0].appendChild(meta2);
    const meta3 = document.createElement('meta');
    meta3.setAttribute('property', 'og:image');
    meta3.setAttribute('content', 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg');
    document.getElementsByTagName('head')[0].appendChild(meta3);
    const meta4 = document.createElement('meta');
    meta4.setAttribute('property', 'og:url');
    meta4.setAttribute('content', window.location.href);

    // copy link
    const textArea = document.createElement('textarea');
    textArea.value = window.location.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  AddMetaTag2() {
    this.meta.addTags([
      { property: 'og:title', content: 'HoangAnhQuan' },
      { property: 'og:description', content: 'Hi, I am HoangAnhQuan' },
      { property: 'og:image', content: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' },
      { property: 'og:url', content: window.location.href },
    ], true);

    // copy link
    const textArea = document.createElement('textarea');
    textArea.value = window.location.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  AddMetaTag3() {
    this.meta.updateTag({ property: 'og:title', content: 'HoangAnhQuan' });
    this.meta.updateTag({ property: 'og:description', content: 'Hi, I am HoangAnhQuan' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' });
    this.meta.updateTag({ property: 'og:url', content: window.location.href });

    // copy link
    const textArea = document.createElement('textarea');
    textArea.value = window.location.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
}
