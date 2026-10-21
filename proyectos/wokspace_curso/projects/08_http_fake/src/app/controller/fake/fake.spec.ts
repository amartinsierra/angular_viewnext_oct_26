import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fake } from './fake';

describe('Fake', () => {
  let component: Fake;
  let fixture: ComponentFixture<Fake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fake],
    }).compileComponents();

    fixture = TestBed.createComponent(Fake);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
