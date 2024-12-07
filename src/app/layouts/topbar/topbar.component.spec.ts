import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set totalNotify to 0', () => {
    component.calculatenotification();
    expect(component.totalNotify).toEqual(0);
  });

  it('should initialize checkedValGet as an empty array', () => {
    component.calculatenotification();
    expect(component.checkedValGet).toEqual([]);
  });

  it('should display notification-actions element when checkedValGet has elements', () => {
    component.checkedValGet = [1, 2, 3]; // sample elements in the array
    component.calculatenotification();
    expect((document.getElementById("notification-actions") as HTMLElement).style.display).toEqual('block');
  });

  it('should hide notification-actions element when checkedValGet is empty', () => {
    component.calculatenotification();
    expect((document.getElementById("notification-actions") as HTMLElement).style.display).toEqual('none');
  });

  it('should remove class d-none from empty-notification-elem when totalNotify is 0', () => {
    component.totalNotify = 0;
    component.calculatenotification();
    expect(document.querySelector('.empty-notification-elem')?.classList.contains('d-none')).toEqual(false);
  });
});
