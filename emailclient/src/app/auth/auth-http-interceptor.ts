import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from "rxjs";
import {filter, tap } from 'rxjs/operators'

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //Modify or log the outgoing request
        const modifiedReq = req.clone({
            withCredentials: true
        })
        return next.handle(modifiedReq)
        // return next.handle(modifiedReq).pipe(
        //     filter(val => val.type === HttpEventType.Response),
        //     tap(val => {
        //         console.log('Sent a request');
        //         console.log(val);
                
                
        //         // if (val.type === HttpEventType.Sent) {
        //         //     console.log('Request was sent to server');                    
        //         // }   
                
        //         // if (val.type === HttpEventType.Response) {
        //         //     console.log('Got a response from the API', val);                    
        //         // }                     
        //     })
        // )
    }
}
