import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { SpinnerService } from "../componets/spinner/spinner.service";

@Injectable()
export class SpinerInterceptor implements HttpInterceptor{
    constructor(private spinnerService: SpinnerService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        return next.handle(req).pipe(
            finalize(() => this.spinnerService.hide())
        )
    }

}