import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZugubersichtPage } from './zugubersicht.page';

describe('ZugubersichtPage', () => {
  let component: ZugubersichtPage;
  let fixture: ComponentFixture<ZugubersichtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZugubersichtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
