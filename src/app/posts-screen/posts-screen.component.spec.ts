import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsScreenComponent } from './posts-screen.component';

describe('PostsScreenComponent', () => {
  let component: PostsScreenComponent;
  let fixture: ComponentFixture<PostsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
