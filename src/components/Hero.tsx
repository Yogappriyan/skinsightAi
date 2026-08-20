import React from 'react';
import { AlertCircle, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-4 pb-3 text-center max-w-3xl mx-auto px-4">
      <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-2">
        <Cpu className="w-3.5 h-3.5 text-teal-600" />
        <span>Hybrid Deep Learning & Explainable AI Prototype</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-1.5">
        AI-Assisted Skin Screening
      </h1>

      <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed mb-2">
        Integrated MobileNetV2 feature extraction, PCA selection, YOLOv4 localization & XAI analysis.
      </p>

      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50/80 border border-amber-200/70 text-amber-800 text-[11px] font-medium">
        <AlertCircle className="w-3 h-3 text-amber-600 shrink-0" />
        <span>Academic Demo • Not a Medical Diagnosis • Non-Prescriptive</span>
      </div>
    </section>
  );
};
