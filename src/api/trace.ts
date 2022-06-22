import { request } from '@/utils';
import { TMessage } from './message';

export type TTrace = TMessage;

export const getTraceApi = (code: string) => request<TMessage>({
  url: '/getTrace',
  method: 'GET',
  params: {
    code,
  },
});
