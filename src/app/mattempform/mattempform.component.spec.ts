import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattempformComponent } from './mattempform.component';

describe('MattempformComponent', () => {
  let component: MattempformComponent;
  let fixture: ComponentFixture<MattempformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattempformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattempformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
