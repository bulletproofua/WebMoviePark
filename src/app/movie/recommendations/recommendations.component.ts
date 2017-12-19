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

import * as _ from "lodash";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  private filmIdArr: any[] = [];
  private UserMovieIdsArr: any[] = [];
  private filter: object;
  private serviceRef: FireLoopRef<Movies>;

  private CFstatus: boolean = false;
  private AprioriStatus: boolean = false;
  private AACFstatus: boolean = false;

  constructor (
    private LoopBackAuth: LoopBackAuth, private realTime: RealTime, 
    private router: Router, public CF: CollaborativeFilteringApi,
    public AprioriAlgorithmApi: AprioriAlgorithmApi,
    public UsersMoviesApi: UsersMoviesApi
  ) { }

  ngOnInit() {

    if( this.realTime.connection.isConnected() == true ){
      this.setup();
    }


    let userData = this.LoopBackAuth.getCurrentUserData();

    this.realTime.IO.on("connect").subscribe(
      (res:any) => {
        console.log('chat || realTime -> connect')
        this.setup();
      }
    );
    
    if( userData === null || userData === undefined ){            
        console.log("    unauthorized user ! -> to login")
      this.router.navigate(['/login']);
    }
  }

  setup(): void {
    this.ngOnDestroy();

    this.serviceRef = this.realTime.FireLoop.ref<Movies>(Movies);
    this.onCollaborativefiltering();
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

    console.log('onCollaborativefiltering ---->>>')

    this.CFstatus = true; 
    this.AprioriStatus = false;
    this.AACFstatus = false;  

    this.CF.Collaborativefiltering(this.LoopBackAuth.getCurrentUserId()).subscribe(
      (res) => {
        this.filmIdArr = [];
        res.forEach(element => {
          this.filmIdArr.push(element[0]);
        });
        console.log('onCollaborativefiltering filmIdArr', this.filmIdArr)

        this.filter = { 
          include:{ 
            relation: "UsersMovies",
                    scope:{
                where:{
                    "UserId": this.LoopBackAuth.getCurrentUserId()
                }
            }
          },
          where: { 
            "userId": this.LoopBackAuth.getCurrentUserId(), 
            "MovieId": {inq: this.filmIdArr } 
          }, order: 'MovieId ASC',
        };
      },
      (err:any) => {
        console.log('err', err)
      }
    )
  }

  onApriori(){
    console.log('onApriori ---->>>')

    this.CFstatus = false; 
    this.AprioriStatus = true;
    this.AACFstatus = false;

    this.UsersMoviesApi.find({where:{ "UserId": this.LoopBackAuth.getCurrentUserId()}}).subscribe(
      (res:any) => {
        console.log('res', res)
        this.UserMovieIdsArr = [];

        res.forEach(element => {
          this.UserMovieIdsArr.push(element.MovieId)
        });
        console.log(' onApriori res', res)

        this.AprioriAlgorithmApi.AprioriAlgorithm(this.LoopBackAuth.getCurrentUserId(), 4, 0.6).subscribe(
          (res:any) => {
            console.log(' onApriori res 2 ', res)
            let recomendationArr: any[] = [];
            res.forEach( element => {
              element.from.forEach( rule => {
                this.UserMovieIdsArr.forEach( movie => {
                  if( rule == movie ){
                    recomendationArr.push( element.to )
                  } else {
                    return ;
                  }
                })

              })
            })

            recomendationArr = _.flattenDeep(recomendationArr);
            recomendationArr = _.uniq(recomendationArr);
            console.log('recomendationArr', recomendationArr)
            
              this.filter = { 
                include:{ 
                  relation: "UsersMovies",
                  scope:{
                    where:{
                      "UserId": this.LoopBackAuth.getCurrentUserId()
                    }
                  }
                },
                where: { 
                  "userId": this.LoopBackAuth.getCurrentUserId(), 
                  "MovieId": {inq: recomendationArr } 
                }, order: 'MovieId ASC'
              };          
              console.log('onApriori filter', filter)
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

  onApriorialgorithmAndCollaborativefiltering(){

    console.log('onApriorialgorithmAndCollaborativefiltering ---->>>')

    this.CFstatus = false; 
    this.AprioriStatus = false;
    this.AACFstatus = true;

    this.UsersMoviesApi.find({where:{ "UserId": this.LoopBackAuth.getCurrentUserId()}}).subscribe(
      (res:any) => {
        this.UserMovieIdsArr = [];

        res.forEach(element => {
          this.UserMovieIdsArr.push(element.MovieId)
        });

        this.AprioriAlgorithmApi.ApriorialgorithmAndCollaborativefiltering(this.LoopBackAuth.getCurrentUserId(), 4, 0.6).subscribe(
          (res:any) => {
            let recomendationArr: any[] = [];
            res.forEach( element => {
              element.from.forEach( rule => {
                this.UserMovieIdsArr.forEach( movie => {
                  if( rule == movie ){
                    recomendationArr.push( element.to )
                  } else {
                    return ;
                  }
                })
              })
            })

            recomendationArr = _.flattenDeep(recomendationArr);
            recomendationArr = _.uniq(recomendationArr);
            console.log('recomendationArr', recomendationArr)

            this.filter = { 
              include:{ 
                relation: "UsersMovies",
                        scope:{
                    where:{
                        "UserId": this.LoopBackAuth.getCurrentUserId()
                    }
                }
              },
              where: { 
                "userId": this.LoopBackAuth.getCurrentUserId(), 
                "MovieId": {inq: recomendationArr } 
              }, order: 'MovieId ASC',
            };     

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
