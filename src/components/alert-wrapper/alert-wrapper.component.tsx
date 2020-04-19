import { Component, ComponentInterface, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cb-alert-wrapper'
})
export class AlertWrapperComponent implements ComponentInterface {
  @State() private alertVisible = true;

  @Listen('closeClicked')
  public hideAlert() {
    this.alertVisible = false;
  }

  public render() {
    return <cb-alert message="Hello StencilJS!" visible={this.alertVisible} />;
  }
}
