import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuriesTableComponent } from './injuries-table.component';

describe('InjuriesTableComponent', () => {
  let component: InjuriesTableComponent;
  let fixture: ComponentFixture<InjuriesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjuriesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InjuriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
