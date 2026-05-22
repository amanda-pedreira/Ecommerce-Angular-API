import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosProteinaComponent } from './produtos-proteina.component';

describe('ProdutosProteinaComponent', () => {
  let component: ProdutosProteinaComponent;
  let fixture: ComponentFixture<ProdutosProteinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosProteinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutosProteinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
