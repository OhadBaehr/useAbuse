# useAbuse
new hook that act like the original setState but built for functional components

## visit the project npm page
https://www.npmjs.com/package/use-abuse

## install:
```js
npm i 'use-abuse'
```

## import:
```js
import {useAbuse} from 'use-abuse'
```

## usage:
```js
const [state, setState] = useAbuse({ name: "larry" , visible: true, counter: 1 })

setState({ visible: false })
setState(prev => ({ counter: prev.counter + 1 }))//based on previous value
setState({ name: "beans", counter: 12 , visible: true})//multiple 
```

## example component:
```js
import React from 'react';
import { useAbuse } from 'use-abuse'

const Counter = () => {
    const [state, setState] = useAbuse({ counter: 0 })
    return (
        <button style={{ background: "black", width: "100%", color: "white", fontSize: 20, textAlign: "center", padding: 20 }}
            onClick={() => setState(prev => ({ counter: prev.counter + 1 }))}>
            {state.counter}
        </button>
    );
}

export default Counter;
```

## license:
this is released into the public domain, you can do whatever you want with this

my brother and i wrote this, if you like it and think it's worth it, you can buy us a beer
