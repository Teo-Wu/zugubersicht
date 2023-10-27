import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZugPage } from './zug.page';

describe('ZugPage', () => {
  let component: ZugPage;
  let fixture: ComponentFixture<ZugPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
