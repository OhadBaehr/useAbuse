# useAbuse
new hook that act like the original setState but built for functional components


## import:
```js
import {useAbuse} from 'use-abuse'
```

## usage:
```js
const [state,setState]=useAbuse({value:12, hasFinished:true, counter:2})

setState({counter:8})
setState(prev => ({value: prev.value +5}))// value is now 17
setState({value:2,counter:10})
```

## example component:
```js
import React from 'react';
import {useAbuse} from 'use-abuse'

const Counter=()=>{
  const [state,setState]=useAbuse({data:0})
  return (
    <button style={{background:"black",width:"100%",color:"white",fontSize:20,textAlign:"center",padding:20}}
        onClick={()=>setState(prev=>({data:prev.data+1}))}>
        {state.data}
    </button>
  );
}

export default Counter;
```

## license:
this is released into the public domain, you can do whatever you want with this

my brother and i wrote this, if you like it and think it's worth it, you can buy us a beer
