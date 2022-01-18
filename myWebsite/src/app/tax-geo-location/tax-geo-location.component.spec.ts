import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxGeoLocationComponent } from './tax-geo-location.component';

describe('TaxGeoLocationComponent', () => {
  let component: TaxGeoLocationComponent;
  let fixture: ComponentFixture<TaxGeoLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxGeoLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxGeoLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
