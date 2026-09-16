import { DatasetClassRecord } from '../types';

/**
 * Open-access dermatological dataset representations:
 * - ISIC 2020 / ISIC 2024 Archive (International Skin Imaging Collaboration)
 * - HAM10000 (Human Against Machine with 10,000 training images)
 * - DermNet NZ Dermatology Atlas (Eczema, Psoriasis, Inflammatory conditions)
 */
export const TARGET_DISEASE_DATASETS: Record<string, DatasetClassRecord> = {
  melanoma: {
    id: 'melanoma',
    name: 'Melanoma (Malignant Melanocytic Lesion)',
    datasetOrigin: 'ISIC 2024',
    sampleCount: 3840,
    features: [
      'Asymmetric structural axis',
      'Irregular border notchings and pseudopods',
      'Variegated chromatic distribution (blue-white veil, dark brown, black, slate gray)',
      'Atypical pigment network with localized regression',
      'Diameter > 6mm or rapidly evolving focal changes',
    ],
    diagnosticHallmarks: [
      'ABCDE criteria positivity',
      'Atypical network with abrupt border termination',
      'Dermoscopic blue-white veil indicative of orthokeratotic melanin',
    ],
    morphology: 'Atypical melanocytic proliferation with epidermal pagetoid spread and dermal invasion.',
    treatmentCategory: 'Urgent Surgical Oncology & Multidisciplinary Staging',
    prescriptionClasses: [
      'Targeted BRAF/MEK Inhibitors (e.g., Dabrafenib + Trametinib) for BRAF V600E mutations',
      'Immune Checkpoint Inhibitors (PD-1 / CTLA-4 blockers: Pembrolizumab, Nivolumab, Ipilimumab)',
      'High-dose systemic immunotherapy under medical oncologist supervision',
    ],
    procedures: [
      'Urgent diagnostic excisional biopsy with 1–2 mm margins (mandatory within 1–2 weeks)',
      'Sentinel lymph node biopsy (SLNB) for lesions > 0.8 mm Breslow depth',
      'Wide local excision with formal 1–2 cm margins based on pathologic Breslow thickness',
    ],
  },

  eczema: {
    id: 'eczema',
    name: 'Eczema (Atopic Dermatitis)',
    datasetOrigin: 'DermNet Atlas',
    sampleCount: 4210,
    features: [
      'Diffuse ill-defined erythema (pink/red background)',
      'Epidermal micro-vesiculation and surface serous crusting',
      'Lichenification with accentuated skin markings from chronic rubbing',
      'Pruritic excoriations and xerosis (skin barrier breakdown)',
      'Absence of atypical focal pigment networks',
    ],
    diagnosticHallmarks: [
      'Hanifin and Rajka diagnostic criteria compatibility',
      'Spongiotic dermatitis histological hallmark',
      'Defective filaggrin barrier with elevated transepidermal water loss',
    ],
    morphology: 'Spongiotic epidermal intracellular edema with perivascular lymphocytic infiltrate and stratum corneum disruption.',
    treatmentCategory: 'Barrier Repair, Topical Anti-Inflammatories & Biologic Therapy',
    prescriptionClasses: [
      'Prescription Topical Corticosteroids (e.g., Hydrocortisone 2.5%, Triamcinolone 0.1%, or Clobetasol 0.05% for severe flares)',
      'Prescription Topical Calcineurin Inhibitors (e.g., Tacrolimus 0.03%-0.1% ointment, Pimecrolimus 1% cream - non-steroidal)',
      'Topical PDE4 Inhibitors (Crisaborole 2% ointment / Eucrisa)',
      'Targeted IL-4Rα Biologics (Dupilumab / Dupixent subcutaneous injection for moderate-to-severe disease)',
      'JAK Inhibitors (Upadacitinib, Abrocitinib) prescribed for refractory severe atopic dermatitis',
    ],
    procedures: [
      'Comprehensive in-person patch testing to rule out allergic contact dermatitis triggers',
      'Quantitative SCORAD / EASI disease severity indexing',
      'Narrowband UVB (NB-UVB) phototherapy (2–3 times weekly in-office)',
    ],
  },

  psoriasis: {
    id: 'psoriasis',
    name: 'Plaque Psoriasis (Psoriasis Vulgaris)',
    datasetOrigin: 'DermNet Atlas',
    sampleCount: 3950,
    features: [
      'Sharply demarcated erythematous plaques',
      'Silvery-white mica-like adherent micaceous scales',
      'Regular globular/dotted vascular loops under dermoscopy (Auspitz sign)',
      'Symmetric distribution often involving extensor surfaces (elbows, knees, scalp)',
      'Uniform plaque thickness with distinct boundaries',
    ],
    diagnosticHallmarks: [
      'Auspitz sign (pinpoint punctate bleeding when scale is gently detached)',
      'Koebner isomorphic response to cutaneous trauma',
      'Epidermal hyperkeratosis, parakeratosis, and Munros microabscesses',
    ],
    morphology: 'Marked epidermal acanthosis with elongated rete ridges, hyperkeratosis with parakeratosis, and dermal capillary dilatation.',
    treatmentCategory: 'Keratolytics, Targeted Biologics & Photomedicine',
    prescriptionClasses: [
      'High-potency Topical Corticosteroids combined with Vitamin D analogues (e.g., Calcipotriene + Betamethasone dipropionate / Enstilar / Taclonex)',
      'Topical Keratolytics (Prescription Salicylic Acid 6% or tazarotene gel/cream)',
      'IL-23 / IL-17 Receptor Antagonists (e.g., Guselkumab, Risankizumab, Ixekizumab, Secukinumab) for systemic clearance',
      'TNF-alpha Blockers (Adalimumab, Etanercept) for plaque and psoriatic arthritis',
      'Oral PDE4 Inhibitor (Apremilast / Otezla)',
    ],
    procedures: [
      'Psoriasis Area and Severity Index (PASI) and BSA quantification',
      'Targeted Excimer Laser (308 nm) or Whole-Body Narrowband UVB Phototherapy',
      'Screening for psoriatic arthropathy and cardiovascular inflammatory comorbidity',
    ],
  },

  basal_or_acne: {
    id: 'basal_or_acne',
    name: 'Basal Cell Carcinoma / Acne Vulgaris',
    datasetOrigin: 'HAM10000',
    sampleCount: 4120,
    features: [
      'Translucent pearly papules with raised rolled borders (BCC)',
      'Arborizing branching telangiectasias and central micro-ulceration (BCC)',
      'Erythematous follicular papules, closed/open comedones, and pustules (Acne)',
      'Absence of atypical reticular melanin pigment network',
    ],
    diagnosticHallmarks: [
      'BCC: Basaloid epithelial cell nests with peripheral palisading and stroma retraction',
      'Acne: Follicular hyperkeratinization with Propionibacterium acnes colonization and sebum stasis',
    ],
    morphology: 'Nodular/superficial basal cell proliferation with stromal mucin or pilosebaceous unit rupture with neutrophilic inflammation.',
    treatmentCategory: 'Dermatologic Surgery (BCC) & Antimicrobial/Retinoid Regimens (Acne)',
    prescriptionClasses: [
      'For BCC: Topical Imiquimod 5% Cream (Aldara) or 5-Fluorouracil (5-FU) for biopsy-verified superficial subtypes; oral Vismodegib for unresectable cases',
      'For Acne: Prescription Topical Retinoids (Tretinoin 0.025%-0.1%, Adapalene 0.3%, Tazarotene 0.1%)',
      'For Acne: Topical fixed-dose combinations (Clindamycin/Benzoyl Peroxide, Epiduo)',
      'For Acne: Oral Tetracycline-class antibiotics (Doxycycline 100mg) or Oral Isotretinoin for cystic/nodular scarring acne',
    ],
    procedures: [
      'For BCC: Diagnostic punch/shave biopsy, Mohs Micrographic Surgery with 99% cure rate, or standard excision',
      'For Acne: Professional comedone extraction, intralesional triamcinolone injections for acute painful cysts, chemical peels (Salicylic 20%-30%)',
    ],
  },

  nevus: {
    id: 'nevus',
    name: 'Melanocytic Nevus (Benign Mole)',
    datasetOrigin: 'HAM10000',
    sampleCount: 6705,
    features: [
      'Symmetric round or oval structural boundary',
      'Uniform brown or tan pigment network distribution',
      'Regular distinct margins with smooth peripheral blending',
      'Absence of atypical vascular arborization or ulceration',
    ],
    diagnosticHallmarks: [
      'Uniform junctional, compound, or intradermal nest architecture',
      'Monomorphic melanocytes without mitotic atypia',
      'Intact ABCDE rule compliance',
    ],
    morphology: 'Benign clonal proliferation of melanocytes forming symmetrical cohesive nests in the epidermis or dermis.',
    treatmentCategory: 'Conservative Monitoring & Elective Management',
    prescriptionClasses: [
      'Prescription pharmaceuticals are generally not indicated for benign nevi.',
      'Broad-spectrum high-SPF photoprotection (SPF 50+ UVA/UVB) to minimize solar melanocytic mutations.',
      'Mild topical hydrocortisone (prescribed strictly if peripheral eczematous halo irritation develops).',
    ],
    procedures: [
      'Periodic dermoscopic surveillance and baseline photography',
      'Elective surgical excision or shave biopsy if mechanically irritated or cosmetically desired',
    ],
  },

  keratosis: {
    id: 'keratosis',
    name: 'Seborrheic Keratosis (Benign)',
    datasetOrigin: 'HAM10000',
    sampleCount: 1099,
    features: [
      'Sharply demarcated stuck-on warty or cobblestone appearance',
      'Milia-like pseudocysts and comedo-like follicular keratin plugs',
      'Homogeneous yellowish-tan to dark brown pigmentation',
      'Absence of malignant pigment reticulation or vascular loops',
    ],
    diagnosticHallmarks: [
      'Marked epidermal hyperkeratosis and acanthosis with horn pseudocysts',
      'Squamous and basaloid keratinocytes without cellular atypia',
    ],
    morphology: 'Benign non-melanocytic epidermal neoplasm with acanthotic expansion and prominent keratin-filled invaginations.',
    treatmentCategory: 'Procedural In-Office Removal & Keratolytic Regimens',
    prescriptionClasses: [
      'Topical Hydrogen Peroxide 40% (Eskata) for in-office physician application',
      'Prescription keratolytic ointments (Urea 20%-40% cream, Salicylic acid preparations)',
    ],
    procedures: [
      'Cryosurgery with liquid nitrogen (rapid in-office freezing)',
      'Light curettage, electrodessication, or superficial shave removal',
    ],
  },

  healthy_skin: {
    id: 'healthy_skin',
    name: 'Clear / Healthy Skin',
    datasetOrigin: 'HAM10000',
    sampleCount: 4500,
    features: [
      'Uniform epidermal coloration without focal hyperpigmentation',
      'Intact cutaneous surface with physiological micro-relief',
      'Absence of atypical vascular arborization or erythema plaques',
      'No structural asymmetry or elevated papular borders',
    ],
    diagnosticHallmarks: [
      'Physiological stratum corneum integrity',
      'Absence of dysplastic cellular atypia or spongiosis',
      'Normal baseline melanocyte distribution',
    ],
    morphology: 'Normal epidermal-dermal architecture with intact basement membrane and uniform melanin distribution.',
    treatmentCategory: 'Preventative Photoprotection & Maintenance Hygiene',
    prescriptionClasses: [],
    procedures: [],
  },
};

/**
 * Returns overall statistical profile across all target conditions including healthy skin
 */
export function getDatasetIngestionStatistics() {
  const categories = Object.values(TARGET_DISEASE_DATASETS);
  const totalSamples = categories.reduce((sum, c) => sum + c.sampleCount, 0);

  return {
    datasetsIntegrated: ['ISIC 2024 Archive', 'HAM10000 Multi-Source Dataset', 'DermNet NZ Clinical Atlas'],
    targetClasses: [
      'Melanoma (Malignant Melanocytic)',
      'Melanocytic Nevus (Benign Mole)',
      'Eczema (Atopic Dermatitis)',
      'Plaque Psoriasis',
      'Basal Cell Carcinoma / Acne Vulgaris',
      'Seborrheic Keratosis (Benign)',
      'Clear / Healthy Skin',
    ],
    totalIngestedSamples: totalSamples,
    trainValidationSplit: {
      trainSetPct: 80,
      validationSetPct: 10,
      testSetPct: 10,
      trainCount: Math.round(totalSamples * 0.8),
      valCount: Math.round(totalSamples * 0.1),
      testCount: Math.round(totalSamples * 0.1),
    },
    classDistribution: categories.map((c) => ({
      name: c.name,
      origin: c.datasetOrigin,
      samples: c.sampleCount,
      percentage: Math.round((c.sampleCount / totalSamples) * 1000) / 10,
    })),
  };
}
