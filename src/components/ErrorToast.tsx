// src/components/ErrorToast.tsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showError = (message: string) => {
  toast.error(message, { position: "top-center" });
};

const ErrorToast = () => <ToastContainer />;

export default ErrorToast;
