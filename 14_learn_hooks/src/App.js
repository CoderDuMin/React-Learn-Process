import React, { PureComponent } from 'react'
import CounterClass from './01_体验hooks/01_counter_class'
import CounterHook from './01_体验hooks/02_counter_hook'
import CounterHook2 from './01_体验hooks/03_counter_hook'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <CounterClass /> */}
        {/* <CounterHook /> */}
        <CounterHook2 />
      </div>
    )
  }
}