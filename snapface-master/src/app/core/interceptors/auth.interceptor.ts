import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AugmentIndexHtmlOptions} from "@angular-devkit/build-angular/src/utils/index-file/augment-index-html";
import {AuthService} from "../services/auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService :AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders().append('Authorization', `Barear ${this.authService.getToken()}`);
    const updatedRequest = req.clone({ headers });
    return next.handle(updatedRequest);
  }
}

