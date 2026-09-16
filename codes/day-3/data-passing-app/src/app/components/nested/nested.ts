import { Component, EventEmitter, input, Input, InputSignal, output, Output, OutputEmitterRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nested',
  styleUrl: './nested.css',
  templateUrl: './nested.html',
})
export class Nested {
  // @Input("titleData") titlevalue = ""
  // @Output("titleDataChanged") titlevaluechanged = new EventEmitter<string>()

  titlevalue: InputSignal<string> = input("", { alias: "titleData" })
  titlevaluechanged: OutputEmitterRef<string> = output<string>({ alias: "titleDataChanged" })

  emitTitleValue(value: string) {
    this.titlevaluechanged.emit(value)
  }
}
