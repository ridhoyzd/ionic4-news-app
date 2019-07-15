import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  constructor(private newsService:NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?country=id').subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  /* Fungsi single article */
  onGoToSingleArticle(article: any){
    this.newsService.one_article = article;
    this.router.navigate(['/news-single']);
  }
}
