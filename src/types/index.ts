export interface CategoryProbability {
  category: string;
  code: string;
  probability: number; // 0 to 1
  description: string;
  nature: 'Benign' | 'Pre-malignant' | 'Requires Clinical Evaluation' | 'Indeterminate';
}

export interface ModelBenchmarkMetric {
  name: string;
  architecture: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  specificity: number;
  latencyMs: number;
  keyStrength: string;
}

export interface YoloDetectionBox {
  x: number; // % from left
  y: number; // % from top
  width: number; // % width
  height: number; // % height
  label: string;
  confidence: number;
}

export interface PcaFeatureMetadata {
  rawFeatureDimensions: number;
  selectedComponents: number;
  explainedVarianceRatio: number; // e.g. 0.954 (95.4%)
  topComponentsContribution: string[];
}

export interface PredictionSuggestion {
  rank: number; // 1 to 4
  diseaseName: string;
  shortName: string;
  categoryCode: string;
  confidenceScore: number;
  percentage: number;
  nature: 'Benign' | 'Requires Clinical Evaluation' | 'Monitoring Recommended' | 'Pre-malignant' | 'Inflammatory / Chronic Care';
  clinicalStatus: 'Primary Prediction' | 'Secondary Suggestion' | 'Alternative Suggestion' | 'Differential Consideration';
  reasonForSuggestion: string;
  hallmarks: string[];
}

export interface SkinAnalysisResult {
  id: string;
  prediction: string;
  categoryCode: string;
  nature: 'Benign' | 'Requires Clinical Evaluation' | 'Monitoring Recommended';
  confidence: number; // 0 to 1, e.g. 0.87
  topFourSuggestions: PredictionSuggestion[];
  probabilities: CategoryProbability[];
  model: string;
  modelVersion: string;
  inferenceTimeMs: number;
  explanation: string;
  detectedFeatures: string[];
  gradCamExplanation: string;
  heatmapDataUrl?: string;
  originalImageUrl: string;
  imageDimensions: { width: number; height: number };
  yoloDetection?: YoloDetectionBox;
  pcaMetadata?: PcaFeatureMetadata;
  evaluationMetrics?: {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
    specificity: number;
  };
  benchmarkComparisons?: ModelBenchmarkMetric[];
  imageQuality: {
    status: 'Good' | 'Fair' | 'Poor';
    message: string;
    lighting: 'Adequate' | 'Suboptimal';
    focus: 'Sharp' | 'Slightly Blur';
  };
  recommendedNextStep: {
    urgency: 'routine' | 'monitoring' | 'specialist-review';
    title: string;
    guidance: string;
    actionPoints: string[];
    clinicalTreatmentRoadmap?: {
      treatmentCategory: string;
      standardProcedures: string[];
      prescriptionClassesConsidered: string[];
      diagnosticPrerequisites: string[];
      prescriptionNote: string;
    };
  };
  timestamp: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isInitial?: boolean;
  relatedCategory?: string;
  imageUrl?: string;
  analysisResult?: Partial<SkinAnalysisResult>;
}

export interface SamplePreset {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  description: string;
}
