import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogsRoutingModule } from './dialogs-routing.module';
import { DialogItemComponent } from './dialog-item/dialog-item.component';
import { MessageComponent } from './message/message.component';


@NgModule({
    declarations: [
        DialogItemComponent,
        MessageComponent
    ],
    exports: [
        DialogItemComponent,
        MessageComponent
    ],
    imports: [
        CommonModule,
        DialogsRoutingModule
    ]
})
export class DialogsModule { }
