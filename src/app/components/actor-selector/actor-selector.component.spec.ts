import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorSelectorComponent } from './actor-selector.component';

describe('ActorSelectorComponent', () => {
  let component: ActorSelectorComponent;
  let fixture: ComponentFixture<ActorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
