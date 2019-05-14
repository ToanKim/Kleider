import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSizeComponent } from "./choose-size.component";

describe('SupportComponent', () => {
  let component: ChooseSizeComponent;
  let fixture: ComponentFixture<ChooseSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
