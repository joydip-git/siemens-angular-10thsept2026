import { Component, EventEmitter, input, Input, InputSignal, output, Output, OutputEmitterRef } from '@angular/core';
import { User } from '../../models/user';

@Component({
  imports: [],
  selector: 'app-nested',
  styleUrl: './nested.css',
  templateUrl: './nested.html',
})
export class Nested {
  // @Input("titleData") titlevalue = ""
  // @Output("titleDataChanged") titlevaluechanged = new EventEmitter<string>()

  user: InputSignal<User> = input({ username: "" }, { alias: "userInfo" })
  userchanged: OutputEmitterRef<User> = output<User>({ alias: "userInfoChanged" })

  emitTitleValue(value: string) {
    this.userchanged.emit({ username: value })
  }
}
