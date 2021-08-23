import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export default class HttpError {
  public handleError(error: HttpErrorResponse) {
    if(error.status === 0)
      console.log('An error has ocurred')
    else
      console.log(`Code error returned: ${error.status}`)
    return throwError('Something bad happend');
  }
}
