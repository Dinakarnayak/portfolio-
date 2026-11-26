export type ProjectCategory = 'AI & ML' | 'Full-stack' | 'Research' | 'Security'
export type Project = { name: string; category: ProjectCategory; summary: string; stack: string[]; href: string }
export const projects: Project[] = [
 {name:'IndinaGPT',category:'AI & ML',summary:'An LLM-powered assistant exploring modular AI services and conversational interfaces.',stack:['Python','FastAPI','LLMs'],href:'https://github.com/Dinakarnayak/IndinaGPT'},
 {name:'AI Security Guardrails',category:'Security',summary:'Practical guardrails for safer AI applications, with detection, validation and regression tests.',stack:['Python','AI Safety','Pytest'],href:'https://github.com/Dinakarnayak/ai-security-guardrails-starter'},
 {name:'Satellite Debris Detection',category:'Research',summary:'Computer-vision research focused on identifying orbital debris from image data.',stack:['Python','Computer Vision','Deep Learning'],href:'https://github.com/Dinakarnayak/satellite-debris-detection'},
 {name:'LinguaSpeak',category:'AI & ML',summary:'An NLP speech translation application connecting spoken language with translation workflows.',stack:['Python','Flask','NLP'],href:'https://github.com/Dinakarnayak/LinguaSpeak-NLP-Speech-Translator'},
 {name:'TrustVote',category:'Full-stack',summary:'A blockchain-inspired e-voting platform designed around transparency and verifiable records.',stack:['JavaScript','Blockchain','Web'],href:'https://github.com/Dinakarnayak/TrustVote-'},
 {name:'UniFlow',category:'Full-stack',summary:'A student productivity experience bringing tasks, calendar planning and collaboration together.',stack:['React','TypeScript','UX'],href:'https://github.com/Dinakarnayak/IDUX-CW1-UniFlow'}
]
export const categories = ['All','AI & ML','Full-stack','Research','Security'] as const
export type ProjectFilter = (typeof categories)[number]
export function filterProjects(items: Project[], filter: ProjectFilter): Project[] { return filter === 'All' ? items : items.filter(project => project.category === filter) }
export const skillGroups = [
 {title:'Languages',items:['Python','TypeScript','JavaScript','Java','C++','SQL']},
 {title:'AI & data',items:['Machine Learning','Deep Learning','NLP','LLMs','Computer Vision','PyTorch','TensorFlow']},
 {title:'Engineering',items:['React','Node.js','FastAPI','Flask','PostgreSQL','MongoDB','Docker','GitHub Actions']}
]
