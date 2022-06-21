import { IllustrationNoResult, IllustrationNoResultDark } from '@douyinfe/semi-illustrations';
import { Empty } from '@douyinfe/semi-ui';
import { Component, PropsWithChildren } from 'react';
import { clearItems } from '@/utils';
import styles from './style.module.scss';

type State = {
  hasError: boolean;
}

class ErrorBoundary extends Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch() {
    // 将错误日志上报给服务器
    // logErrorToServer(error.message);
    clearItems();
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // 自定义降级后的 UI 并渲染
      return (
        <div className={styles['error-container']}>
          <Empty
            image={<IllustrationNoResult />}
            darkModeImage={<IllustrationNoResultDark />}
            description="不好意思，我们遇到了一些未知错误"
          />
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
