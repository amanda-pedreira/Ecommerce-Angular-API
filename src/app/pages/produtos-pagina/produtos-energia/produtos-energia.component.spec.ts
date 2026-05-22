import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosEnergiaComponent } from './produtos-energia.component';

describe('ProdutosEnergiaComponent', () => {
  let component: ProdutosEnergiaComponent;
  let fixture: ComponentFixture<ProdutosEnergiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosEnergiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutosEnergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
