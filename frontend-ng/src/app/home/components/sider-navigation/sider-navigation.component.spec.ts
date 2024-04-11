import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavigationComponent } from './sider-navigation.component';

describe('SiderNavigationComponent', () => {
  let component: SidenavigationComponent;
  let fixture: ComponentFixture<SidenavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
