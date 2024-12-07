/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import { loginStat, permStat } from "../../static/data"

@Injectable()
export class BaseHttpService {

  constructor(private http: HttpClient) { }

  getAll(url: string, paramsVal?: any): Observable<any[]> {
    const options = { params: paramsVal };
    return this.http.get<any[]>(url, options);
  }

  public getByID(url: string, id: number | string): Observable<any> {
    return this.http.get<any>(`${url}/${id}`);
  }

  public delete(url: string): Observable<any> {
    return this.http.delete<any>(url);
  }

  public post(data: any, url: string, headers: HttpHeaders = new HttpHeaders({})): Observable<any> {
    let response = this.http.post<any>(url, data, { headers: headers });
    return response;
  }

  public async postRequest(body: any, url: string, headers: HttpHeaders = new HttpHeaders({})): Promise<any> {
    let result: any = await new Promise((resolve, reject) => {
      this.http
        .post(url, body, {
          observe: 'response' as 'response',
          headers: headers
        })
        .subscribe(
          (res: any) => {
            resolve(res);
          },
          (error: any) => {
            reject(error);
          }
        );
    }).catch((error) => {
     });
    return result;
  }

  public put(data: any, url: string): Observable<any> {
    return this.http.put<any>(url, data);
  }
}
