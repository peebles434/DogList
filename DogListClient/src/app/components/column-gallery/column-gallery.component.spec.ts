import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnGalleryComponent } from './column-gallery.component';

describe('ColumnGalleryComponent', () => {
  let component: ColumnGalleryComponent;
  let fixture: ComponentFixture<ColumnGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
