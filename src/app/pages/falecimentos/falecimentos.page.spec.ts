import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FalecimentosPage } from './falecimentos.page';

describe('FalecimentosPage', () => {
  let component: FalecimentosPage;
  let fixture: ComponentFixture<FalecimentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalecimentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FalecimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
