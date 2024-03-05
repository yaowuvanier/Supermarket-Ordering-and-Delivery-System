import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIRECTIVEComponent } from './directive.component';

describe('DIRECTIVEComponent', () => {
  let component: DIRECTIVEComponent;
  let fixture: ComponentFixture<DIRECTIVEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DIRECTIVEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DIRECTIVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
