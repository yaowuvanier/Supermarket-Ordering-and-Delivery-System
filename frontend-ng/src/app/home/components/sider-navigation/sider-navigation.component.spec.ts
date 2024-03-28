import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderNavigationComponent } from './sider-navigation.component';

describe('SiderNavigationComponent', () => {
  let component: SiderNavigationComponent;
  let fixture: ComponentFixture<SiderNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
