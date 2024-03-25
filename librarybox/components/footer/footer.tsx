import { useStyles } from './styles/styles';
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

const FooterContainer = () => {
  const { styles } = useStyles();
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.column}>
        <h1>LibraryBox</h1>
      </div>
      <div className={styles.column}>
        <h5>© {new Date().getFullYear()} LibraryBox. All rights reserved.</h5>
      </div>
      <div className={styles.column}>
        <div>
          <FacebookOutlined style={{ fontSize: '30px', marginRight: '10px' }} />
          <LinkedinOutlined style={{ fontSize: '30px', marginRight: '10px' }} />
          <InstagramOutlined style={{ fontSize: '30px', marginRight: '10px' }} />
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
