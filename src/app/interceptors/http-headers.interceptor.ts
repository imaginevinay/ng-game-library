// key  : bIeqmAyYvwmshgmQTjEXU4D6615cp156qdZjsndhU4eaCP1Sda
// host : rawg-video-games-database.p.rapidapi.com

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders : {
                'x-rapidapi-key' : 'bIeqmAyYvwmshgmQTjEXU4D6615cp156qdZjsndhU4eaCP1Sda',
                'x-rapidapi-host' : 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams : {
                key : '7fc18b8d82bb450f83a76c363744e75f'
            }
        })

        return next.handle(req);
    }
}