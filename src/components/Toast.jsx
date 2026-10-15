import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
export default function Toast({ toast, onClose }) {
  useEffect(() => { if (!toast) return; const timer = setTimeout(onClose, 3200); return () => clearTimeout(timer); }, [toast, onClose]);
  if (!toast) return null;
  const Icon = toast.type === 'error' ? AlertCircle : CheckCircle2;
  return <div className={`toast ${toast.type || 'success'}`} role="status"><Icon size={19}/><span>{toast.message}</span><button onClick={onClose} aria-label="Dismiss notification"><X size={16}/></button></div>;
}
