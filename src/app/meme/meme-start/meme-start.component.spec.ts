import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeStartComponent } from './meme-start.component';

describe('MemeStartComponent', () => {
  let component: MemeStartComponent;
  let fixture: ComponentFixture<MemeStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
