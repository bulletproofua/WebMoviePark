import { Component, Input, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Movies, FireLoopRef } from '../../shared/sdk/models';
import { Subscription } from 'rxjs/Subscription';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
selector: 'app-movie-list',
templateUrl: './movie-list.component.html',
styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnChanges {

    private serviceSub: Subscription;
    private data: any[];
    _service: any;

    @Input() filter: object;
    
    @Input() set service(ref: any) {
        console.log("ref ====================> : ", ref);
        if ( this.filter === undefined ) {
            this.filter = { order: 'MovieId ASC' };
        }
        
        if (ref) {
            console.log("ref INNNNN : ", ref);
            this._service = ref;

            this.serviceSub = this._service.on('change', this.filter ).subscribe(
                (instances: any) => {
                    if (instances instanceof Array) {                    
                        console.log('this.filter', this.filter)
                        console.log('instances', instances)
                        if ( this.fields === undefined ) {
                            this.fields = Object.keys(instances[0]);
                        }
                        //   instances.length = 4;
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

    };
    @Input() fields: any;

    @Output() selected: EventEmitter<any> = new EventEmitter();
    

    openMovie(context: any) {
        // this.router.navigateByUrl('/movie/' + context.id);
        this.selected.emit(context);
    }

    ngOnDestroy() {
        if (this.serviceSub) {
            this.serviceSub.unsubscribe();
        }
    }

    ngOnChanges(changes: SimpleChanges){
        console.log('changes --------------->', changes)
        if( changes.filter ){
            this.filter = changes.filter.currentValue;
            console.log('this.filter 2 ', this.filter)
    
            this.serviceSub = this._service.on('change', this.filter ).subscribe(
                (instances: any) => {
                    if (instances instanceof Array) {                    
                        console.log('this.filter', this.filter)
                        console.log('instances', instances)
                        if ( this.fields === undefined ) {
                            this.fields = Object.keys(instances[0]);
                        }
                        //   instances.length = 4;
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

}
