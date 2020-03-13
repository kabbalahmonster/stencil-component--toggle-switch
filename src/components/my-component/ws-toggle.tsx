import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ws-toggle',
  styleUrl: 'ws-toggle.css',
  shadow: true
})
export class wsToggle {
  @Prop({mutable:true, reflect:true}) toggledOn:boolean = true;

  toggleMe(){
    this.toggledOn=!this.toggledOn
  }



  render() {

    let content = 
      <div class="component">
        <button id="mainBtn" class={this.toggledOn? "theButton theButton-on":"theButton"} onClick={this.toggleMe.bind(this)}>          
        </button>
        <label htmlFor="mainBtn">
          <slot/>
        </label>
      </div>;
    return content;
  }
}
