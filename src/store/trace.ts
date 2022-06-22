import { atom, useRecoilState } from 'recoil';
import { useMemo, useState } from 'react';
import shortid from 'shortid';
import { getTraceApi, TMessage, TTrace } from '@/api';
import { getStandardMessageList } from '@/utils';

const initialTrace = atom<TTrace | null>({
  key: 'trace',
  default: null,
});

const mapTraceToMessageList = (trace: TTrace | null): TMessage[] | null => {
  if (!trace) {
    return null;
  }

  return [trace];
};

export const useTraceStore = () => {
  const [trace, setRecoilTrace] = useRecoilState(initialTrace);
  const [loading, setLoading] = useState(false);

  const loadTrace = async (code: string) => {
    setLoading(true);
    const trace = await getTraceApi(code);
    trace.id = shortid.generate();
    setLoading(false);
    setRecoilTrace(trace);
  };

  const getTrace = () => useMemo(
    () => getStandardMessageList(mapTraceToMessageList(trace)),
    [trace],
  );

  return {
    loading,
    getTrace,
    loadTrace,
  };
};
