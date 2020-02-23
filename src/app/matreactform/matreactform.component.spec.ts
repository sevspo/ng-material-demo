import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatreactformComponent } from './matreactform.component';

describe('MatreactformComponent', () => {
  let component: MatreactformComponent;
  let fixture: ComponentFixture<MatreactformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatreactformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatreactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
