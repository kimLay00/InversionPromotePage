export class EventEmitter {
    private listeners: any = {};

    addListener(eventName: any, fn: any) {
      this.listeners[eventName] = this.listeners[eventName] || [];
      this.listeners[eventName].push(fn);
      return this;
    }
    on(eventName: any, fn: any) {
      return this.addListener(eventName, fn);
    }
    once(eventName: any, fn: any) {
      this.listeners[eventName] = this.listeners[eventName] || [];
      const onceWrapper = () => {
        fn();
        this.off(eventName, onceWrapper);
      }
      this.listeners[eventName].push(onceWrapper);
      return this;
    }
    off(eventName: any, fn: any) {
      return this.removeListener(eventName, fn);
    }
    removeListener (eventName: any, fn: any) {
      let lis = this.listeners[eventName];
      if (!lis) return this;
      for(let i = lis.length; i > 0; i--) {
        if (lis[i] === fn) {
          lis.splice(i,1);
          break;
        }
      }
      return this;
    }
    emit(eventName: any, ...args: any) {
      let fns = this.listeners[eventName];
      if (!fns) return false;
      fns.forEach((f: any) => {
        f(...args);
      });
      return true;
    }
    listenerCount(eventName: any) {
      let fns = this.listeners[eventName] || [];
      return fns.length;
    }
    rawListeners(eventName: any) {
      return this.listeners[eventName];
    }
  }