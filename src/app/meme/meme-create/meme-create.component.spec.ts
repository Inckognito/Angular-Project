import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeCreateComponent } from './meme-create.component';

describe('MemeCreateComponent', () => {
  let component: MemeCreateComponent;
  let fixture: ComponentFixture<MemeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
