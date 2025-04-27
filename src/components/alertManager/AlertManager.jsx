import { Alert } from '@/components/alert';
import { registerAlertTrigger } from '@/utils/alert/alertController';
import { useEffect, useRef, useState } from 'react';
const AlertManager = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  const [type, setType] = useState('warning');
  const [customStyle, setCustomStyle] = useState({});
  const timeoutRef = useRef(null);
  const triggerAlert = (message, type = 'warning', duration = 2000, style = {}) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setVisible(true);
    setContent(message);
    setType(type);
    setCustomStyle(style);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      timeoutRef.current = null;
    }, duration);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    try {
      registerAlertTrigger(triggerAlert);
    } catch (error) {
      console.log(error);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  if (!visible) return null;

  return <Alert content={content} type={type} customStyle={customStyle} />;
};

export default AlertManager;
