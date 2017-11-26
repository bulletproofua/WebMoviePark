import { Component, OnInit } from '@angular/core';
import { Movies, FireLoopRef } from '../../shared/sdk/models';
import { RealTime, CollaborativeFilteringApi, AprioriAlgorithmApi, UsersMoviesApi} from '../../shared/sdk/services';
import { Router } from '@angular/router';
import { LoopBackAuth } from '../../shared/sdk/services/core/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operator/filter';
import { forEach } from '@angular/router/src/utils/collection';
// import { CollaborativeFilteringApi } from '../../shared/sdk/services/custom/CollaborativeFiltering';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  private filmIdArr: any[] = [];
  private UserMovieIdsArr: any[] = [];
  private filter: object;
  serviceRef: FireLoopRef<Movies>;
  // fields = ["id", "createdAt", "updatedAt"];

  // options = {  

  // };

  constructor(
     private LoopBackAuth: LoopBackAuth, private realTime: RealTime, 
     private router: Router, public CF: CollaborativeFilteringApi, public AA: AprioriAlgorithmApi, public UsersMoviesApi: UsersMoviesApi)  { }

  ngOnInit() {
    // this.LoopBackAuth
    console.log('this.LoopBackAuth AAAAAAAAA ------------', this.LoopBackAuth.getCurrentUserId())
    this.realTime.onReady().subscribe(
      (res) => {
        console.log('this.serviceRef', this.serviceRef)
        this.serviceRef = this.realTime.FireLoop.ref<Movies>(Movies);


      //  this.setup()
      },
      (err:any) => {
        console.log('err', err)
      })
  }

  setup(): void {
    this.ngOnDestroy();

    this.serviceRef = this.realTime.FireLoop.ref<Movies>(Movies);
    console.log('this.serviceRef', this.serviceRef)
  }
  ngOnDestroy() {
    if (this.serviceRef) {
        this.serviceRef.dispose();
    }
  }

  onSelect(event: any) {
    this.router.navigateByUrl('/Movies/' + event.id);
  }

  onCollaborativefiltering(){
    this.CF.Collaborativefiltering(this.LoopBackAuth.getCurrentUserId()).subscribe(
      (res) => {
        this.filmIdArr = [];
        console.log('res !!!!!!!!!!!!!!!', res)
        res.forEach(element => {
          this.filmIdArr.push(element[0]);
        });
        console.log('this.filmIdArr', this.filmIdArr)
        // where: { "userId": this.LoopBackAuth.getCurrentUserId(), "MovieId": {inq: this.filmIdArr } }, order: 'MovieId ASC',
        this.filter = { 
          "include": ["photos"]  
        };
      },
      (err:any) => {
        console.log('err', err)
      }
    )
  }

  onApriori(){

    console.log("---------------------------------------")
    this.UsersMoviesApi.find({where:{ "UserId": this.LoopBackAuth.getCurrentUserId()}}).subscribe(
      (res:any) => {
        this.UserMovieIdsArr = [];
        res.forEach(element => {
          this.UserMovieIdsArr.push(element.MovieId)
        });
        console.log('this.UserMovieIdsArr', this.UserMovieIdsArr)

        this.AA.AprioriAlgorithm(this.LoopBackAuth.getCurrentUserId(), 3, 0.6).subscribe(
          (res:any) => {
            let recomendationArr: any[] = [];
            console.log('res', res)
            res.forEach( element => {
              element.from.forEach( rule => {

                this.UserMovieIdsArr.forEach( movie => {
                  if( rule == movie ){
                    recomendationArr.push( element.to )
                    console.log('recomendationArr', recomendationArr)
                  }
                })

              })
            })
          },
          (err:any) => {
            console.log('err', err)
    
          }
        )
      },
      (err:any) => {
        console.log('err', err)
    });
    
  }


}
