import styles from './style.module.scss';

type Props = {
  title: string;
  content: string | undefined;
}

const InfoBlock = ({ title, content }: Props) => (
  <div className={styles.block}>
    <h5 className={styles.title}>{title}</h5>
    <p className={styles.content}>{content || ''}</p>
  </div>
);

export default InfoBlock;
