# useAbuse
nice hack for replacing useState with something more similar to setState


## short guide:
after copying the file to your project:
```import {useAbuse} from './useAbuse'```

and can be later used as follows inside a functional component:
```
const [state,setState]=useAbuse({value:12, hasFinished:true, counter:2})
setState({counter:8})
setState(prev => ({value: prev.value +5}))
```

## license:
this is released into the public domain, you can do whatever you want with this
my brother and i wrote this, if you like it and think it's worth it, you can buy us a beer