import { async, ComponentFixture, TestBed } from '@angular/core/testing';
declare function require(path: string): any;
var googleMap = require('@google/maps');
import { SearchListPageComponent } from './search-list-page.component';

describe('SearchListPageComponent', () => {
  let component: SearchListPageComponent;
  let fixture: ComponentFixture<SearchListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
