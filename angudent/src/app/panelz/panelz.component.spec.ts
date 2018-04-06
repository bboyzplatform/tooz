import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelzComponent } from './panelz.component';

describe('PanelzComponent', () => {
  let component: PanelzComponent;
  let fixture: ComponentFixture<PanelzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
