import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesdetailsComponent } from './gamesdetails.component';

describe('GamesdetailsComponent', () => {
  let component: GamesdetailsComponent;
  let fixture: ComponentFixture<GamesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
