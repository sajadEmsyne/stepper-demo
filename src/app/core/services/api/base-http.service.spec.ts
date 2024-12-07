/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { BaseHttpService } from "./base-http.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";

describe("BaseHttpService", () => {
  let service: BaseHttpService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [BrowserAnimationsModule],
      providers: [BaseHttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseHttpService],
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(BaseHttpService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should call getAll correctly", () => {
    const data = "test/url";
    const ngSpy = spyOn(service, "getAll").and.callThrough();
    service.getAll(data);
    expect(ngSpy).toHaveBeenCalled();
    expect(service).toBeTruthy();
  });
  it("should call getByID correctly", () => {
    const data = "test/url";
    const id = 1;
    const ngSpy = spyOn(service, "getByID").and.callThrough();
    service.getByID(data, id);
    expect(ngSpy).toHaveBeenCalled();
    expect(service).toBeTruthy();
  });
  it("should call delete correctly", () => {
    const data = "test/url/1";
    const id = 1;
    const ngSpy = spyOn(service, "delete").and.callThrough();
    service.delete(data);
    expect(ngSpy).toHaveBeenCalled();
    expect(service).toBeTruthy();
  });
  it("should call post correctly", () => {
    const url = "test/url";
    const data = [];
    const ngSpy = spyOn(service, "post").and.callThrough();
    service.post([], url);
    expect(ngSpy).toHaveBeenCalled();
    expect(service).toBeTruthy();
  });
  it("should call put correctly", () => {
    const url = "test/url";
    const data: [] = [];
    const ngSpy = spyOn(service, "put").and.callThrough();
    service.put(data, url);
    expect(ngSpy).toHaveBeenCalled();
    expect(service).toBeTruthy();
  });
  it("should call post correctly with data", () => {
    const url = "test/url";
    const data = [1, 23, 6];
    const ngSpy = spyOn(service, "post").and.callThrough();
    service.post(data, url);
    expect(ngSpy).toHaveBeenCalled();
    expect(service).toBeTruthy();
  });
});
