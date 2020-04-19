import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'cb-alert',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements ComponentInterface {
  @Prop() public message: string;
  @Prop() public visible: boolean = false;

  @Event() public closeClicked: EventEmitter<MouseEvent>;

  public render() {
    return (
      <div class={`alert ${this.visible ? 'visible' : ''}`}>
        {this.message}
        <span class="close-btn" onClick={event => this.closeClicked.emit(event)}>
          &times;
        </span>
      </div>
    );
  }
}
