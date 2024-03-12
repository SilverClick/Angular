import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AetherComponent } from './aether.component';

describe('AetherComponent', () => {
  let component: AetherComponent;
  let fixture: ComponentFixture<AetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AetherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
