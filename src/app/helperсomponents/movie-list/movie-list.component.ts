import { Component, Input, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  private serviceSub: Subscription;
  private data: any[];

  _service: any;

  @Input() filter: object;
  
  @Input() set service(ref: any) {
      console.log("ref : ", ref);

      if ( this.filter === undefined ) {
          this.filter = { order: 'MovieId ASC' };
      }
      
      if (ref) {
          console.log("ref INNNNN : ", ref);
          this._service = ref;

          
          this.serviceSub = this._service.on('change', this.filter ).subscribe(
              (instances: any) => {
                  if (instances instanceof Array) {
                      
                      if ( this.fields === undefined ) {
                          this.fields = Object.keys(instances[0]);
                      }
                      console.log("result : ", instances);
                      this.data = instances;
                  } else {
                      console.log("errors : ", instances.error);
                  }
              },
              (error: any) => {
                  console.log("errors : ", error);
              }
          );
      }
  }

  @Input() options: any = {
    //
  };
  @Input() fields: string[];

  @Output() selected: EventEmitter<any> = new EventEmitter();
  

  openMovie(context: any) {
      // this.router.navigateByUrl('/movie/' + context.id);
      this.selected.emit(context);
  }

}
