interface Callback {
  (...args: Record<string, unknown>[]): void;
}

class EventBus {
  private listeners: Record<string, Callback[]>;
  constructor() {
    this.listeners = {};
  }
  on(eventName: string, callback: Callback): void {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }
  off(eventName: string, callback: Callback): void {
    if (!this.listeners[eventName]) {
      throw new Error(`No events with this name: ${eventName}`);
    }
    this.listeners[eventName] = this.listeners[eventName].filter((listener) => listener !== callback);
  }
  emit(eventName: string, ...args: Record<string, unknown>[]): void {
    const eventListeners = this.listeners[eventName];
    if (!eventListeners) {
      throw new Error(`No events with this name: ${eventName}`);
    }

    eventListeners.forEach((listener) => listener(...args));
  }
}

export default EventBus;
