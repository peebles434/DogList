import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalHeaderBarComponent } from './global-header-bar.component';

describe('GlobalHeaderBarComponent', () => {
  let component: GlobalHeaderBarComponent;
  let fixture: ComponentFixture<GlobalHeaderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalHeaderBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
