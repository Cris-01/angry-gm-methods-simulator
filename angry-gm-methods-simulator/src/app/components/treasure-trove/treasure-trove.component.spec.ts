import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasureTroveComponent } from './treasure-trove.component';

describe('TreasureTroveComponent', () => {
  let component: TreasureTroveComponent;
  let fixture: ComponentFixture<TreasureTroveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreasureTroveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreasureTroveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
