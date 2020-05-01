import { NgModule } from '@angular/core';
import { JuryComponent } from './jury/jury';
import { FirstpageComponent } from './firstpage/firstpage';
@NgModule({
	declarations: [JuryComponent,
    FirstpageComponent],
	imports: [],
	exports: [JuryComponent,
    FirstpageComponent]
})
export class ComponentsModule {}
