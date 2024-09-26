import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomWeatherComponent } from './random-weather.component';

describe('RandomWeatherComponent', () => {
  let component: RandomWeatherComponent;
  let fixture: ComponentFixture<RandomWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
