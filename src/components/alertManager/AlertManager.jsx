import { Alert } from '@/components/alert';
import { registerAlertTrigger } from '@/utils/alert/alertController';
import { useEffect, useState } from 'react';
const AlertManager = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  const [type, setType] = useState('warning');
  const [customStyle, setCustomStyle] = useState({});

  const triggerAlert = (message, type = 'warning', style = {}) => {
    setVisible(true);
    setContent(message);
    setType(type);
    setCustomStyle(style);
    setTimeout(() => {
      setVisible(false);
    }, 700);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    registerAlertTrigger(triggerAlert);
  }, []);
  if (!visible) return null;

  return <Alert content={content} type={type} customStyle={customStyle} />;
};

export default AlertManager;
