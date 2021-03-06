import { Event, EventOptions } from '../../core/event';

const options: EventOptions = {
  options: {
    name: 'messageCreate',
  },
};

export const MessageCreate = ((Event) => {
  return {
    ...options,
    ...Event,
    run: () => {},
  };
})(Event);
