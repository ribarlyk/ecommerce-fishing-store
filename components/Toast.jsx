import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideToast } from './toastSlice';
import { ToastContainer, toast } from 'react-hot-toast';

const Toast = () => {
  const toastMessage = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (toastMessage) {
      toast.success(toastMessage, {
        duration: 2000,
        position: 'top-right',
        onClose: () => dispatch(hideToast()),
      });
    }
  }, [toastMessage, dispatch]);

  return <ToastContainer />;
};

export default Toast;
