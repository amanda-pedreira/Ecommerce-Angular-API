import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosAcessoriosComponent } from './produtos-acessorios.component';

describe('ProdutosAcessoriosComponent', () => {
  let component: ProdutosAcessoriosComponent;
  let fixture: ComponentFixture<ProdutosAcessoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosAcessoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutosAcessoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
