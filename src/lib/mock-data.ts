// ---- Types ----

export type CourseStatus = "active" | "draft";
export type LearnerStatus = "completed" | "in_progress" | "not_started";

export interface Course {
  id: number;
  title: string;
  sourcePolicy: string;
  status: CourseStatus;
  learnersEnrolled: number | null;
  completed: number | null;
  avgScore: number | null;
  flag: string | null;
  banner?: { text: string; variant: "amber" | "blue" };
  lastActivity?: string;
}

export interface Learner {
  id: number;
  name: string;
  email: string;
  status: LearnerStatus;
  score: number | null;
  date: string | null;
  courseId: number;
}

export interface CourseSection {
  id: number;
  title: string;
  durationMinutes: number;
  content: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ActivityEvent {
  id: number;
  learnerName: string;
  courseTitle: string;
  score: number;
  date: string;
}

export interface DashboardStats {
  totalCourses: number;
  learnersTrained: number;
  avgCompletion: number;
  needsReview: number;
}

// ---- Current user ----

export const currentUser = {
  name: "Sarah",
  fullName: "Sarah Mitchell",
  role: "HR Manager",
  organisation: "Brightfield Care",
};

// ---- Dashboard stats ----

export const dashboardStats: DashboardStats = {
  totalCourses: 3,
  learnersTrained: 209,
  avgCompletion: 86,
  needsReview: 1,
};

// ---- Courses ----

export const courses: Course[] = [
  {
    id: 1,
    title: "Lone Worker Safety",
    sourcePolicy: "Lone Worker Policy v3.2",
    status: "active",
    learnersEnrolled: 24,
    completed: 18,
    avgScore: 84,
    flag: null,
    lastActivity: "Today",
  },
  {
    id: 2,
    title: "Data Protection & GDPR",
    sourcePolicy: "GDPR & Data Handling Policy 2024",
    status: "active",
    learnersEnrolled: 85,
    completed: 71,
    avgScore: 79,
    flag: "Policy updated",
    banner: {
      text: "\u26A0\uFE0F Your GDPR policy has been updated \u2014 review this course.",
      variant: "amber",
    },
    lastActivity: "2 days ago",
  },
  {
    id: 3,
    title: "Fire Safety & Evacuation",
    sourcePolicy: "Fire Safety Policy 2024",
    status: "draft",
    learnersEnrolled: null,
    completed: null,
    avgScore: null,
    flag: null,
    banner: {
      text: "Draft \u2014 ready to review and publish.",
      variant: "blue",
    },
    lastActivity: "Just now",
  },
];

// ---- Learners (Course 1: Lone Worker Safety) ----

export const learnersCourse1: Learner[] = [
  { id: 1, name: "Emma Davies", email: "emma.davies@brightfieldcare.co.uk", status: "completed", score: 92, date: "14 Mar 2026", courseId: 1 },
  { id: 2, name: "James Thornton", email: "james.thornton@brightfieldcare.co.uk", status: "completed", score: 88, date: "15 Mar 2026", courseId: 1 },
  { id: 3, name: "Priya Nair", email: "priya.nair@brightfieldcare.co.uk", status: "completed", score: 76, date: "16 Mar 2026", courseId: 1 },
  { id: 4, name: "Marcus Webb", email: "marcus.webb@brightfieldcare.co.uk", status: "completed", score: 91, date: "17 Mar 2026", courseId: 1 },
  { id: 5, name: "Claire Oduya", email: "claire.oduya@brightfieldcare.co.uk", status: "completed", score: 83, date: "18 Mar 2026", courseId: 1 },
  { id: 6, name: "Daniel Ferreira", email: "daniel.ferreira@brightfieldcare.co.uk", status: "in_progress", score: null, date: "Opened 2 days ago", courseId: 1 },
  { id: 7, name: "Aisha Kamara", email: "aisha.kamara@brightfieldcare.co.uk", status: "in_progress", score: null, date: "Opened yesterday", courseId: 1 },
  { id: 8, name: "Tom Gallagher", email: "tom.gallagher@brightfieldcare.co.uk", status: "not_started", score: null, date: "Invited 5 days ago", courseId: 1 },
  { id: 9, name: "Bex Hartley", email: "bex.hartley@brightfieldcare.co.uk", status: "not_started", score: null, date: "Invited 3 days ago", courseId: 1 },
];

// ---- Course 3 sections (Safeguarding Adults at Risk) ----

export const course3Sections: CourseSection[] = [
  {
    id: 1,
    title: "What is adult safeguarding?",
    durationMinutes: 3,
    content: `Adult safeguarding means protecting a person's right to live in safety, free from abuse and neglect. At Brightfield Care, safeguarding is everyone's responsibility — not just the designated leads.\n\nThe Care Act 2014 places a duty on local authorities to make enquiries where they suspect an adult with care and support needs is experiencing, or at risk of, abuse or neglect. As a Brightfield Care employee, you play a critical role in identifying and reporting concerns early.\n\nSafeguarding is not about removing choice. It is about ensuring that adults who may be at risk are supported to make their own decisions wherever possible, and that action is taken proportionately when they cannot.`,
  },
  {
    id: 2,
    title: "The six safeguarding principles",
    durationMinutes: 4,
    content: `The six principles of safeguarding underpin all adult protection work in England. Brightfield Care embeds these into every policy and procedure:\n\n1. **Empowerment** — People are supported and encouraged to make their own decisions.\n2. **Prevention** — It is better to take action before harm occurs.\n3. **Proportionality** — The least intrusive response appropriate to the risk presented.\n4. **Protection** — Support and representation for those in greatest need.\n5. **Partnership** — Services work together to prevent, detect, and report neglect and abuse.\n6. **Accountability** — Accountability and transparency in safeguarding practice.\n\nAt Brightfield Care, proportionality is emphasised: the least intrusive response appropriate to the risk presented. This means not every concern requires the same level of action.`,
  },
  {
    id: 3,
    title: "Recognising signs of abuse or neglect",
    durationMinutes: 5,
    content: `Abuse can take many forms. Brightfield Care's Safeguarding Policy 2025 identifies the following categories:\n\n• **Physical abuse** — hitting, slapping, pushing, restraint, misuse of medication\n• **Emotional/psychological abuse** — threats, humiliation, controlling behaviour, isolation\n• **Financial abuse** — theft, fraud, coercion regarding finances, misuse of property\n• **Neglect** — ignoring medical or physical care needs, withholding necessities\n• **Sexual abuse** — any sexual activity without informed consent\n• **Organisational abuse** — poor care standards, rigid routines, inadequate responses to need\n\nSigns may include unexplained injuries, withdrawal, changes in behaviour, poor hygiene, or reluctance to be alone with certain people. Trust your professional judgement — if something feels wrong, report it.`,
  },
  {
    id: 4,
    title: "Brightfield Care\u2019s reporting procedure",
    durationMinutes: 4,
    content: `If you have a safeguarding concern at Brightfield Care, follow this procedure:\n\n1. **Ensure immediate safety** — if someone is in immediate danger, call 999.\n2. **Report to your line manager or the Designated Safeguarding Lead (DSL)** — Sarah Mitchell or James Thornton.\n3. **Log the concern** in Brightfield Care's SafeLog incident management system within 24 hours.\n4. **Do not investigate yourself** — your role is to report, not to determine whether abuse has occurred.\n5. **Preserve any evidence** — do not clean up, move items, or alter the environment.\n\nAll concerns logged in SafeLog are reviewed by the DSL within 4 working hours. The DSL will determine whether a referral to the local authority safeguarding team is required.`,
  },
  {
    id: 5,
    title: "Your responsibilities as a staff member",
    durationMinutes: 3,
    content: `Every Brightfield Care employee has a duty to:\n\n• Be alert to signs of abuse or neglect in the people you support\n• Report any concerns promptly — do not wait to be certain\n• Follow Brightfield Care's reporting procedure without exception\n• Attend safeguarding training annually and keep your certification current\n• Cooperate with any safeguarding investigations\n• Maintain confidentiality — share information only on a need-to-know basis\n\nFailure to report a safeguarding concern is a disciplinary matter at Brightfield Care. Remember: it is always better to raise a concern that turns out to be unfounded than to stay silent about one that was real.`,
  },
  {
    id: 6,
    title: "Assessment \u2014 20 questions",
    durationMinutes: 15,
    content: `This assessment covers all five sections of the Safeguarding Adults at Risk course. You need to score 75% or above to pass.\n\nTake your time — there is no time limit on individual questions. Your answers are saved automatically.`,
  },
];

// ---- Quiz questions (Course 3: Safeguarding) ----

export const course3Quiz: QuizQuestion[] = [
  {
    id: 1,
    question: "According to Brightfield Care\u2019s Safeguarding Policy 2025, who should you report a safeguarding concern to in the first instance?",
    options: [
      "Your line manager or the Designated Safeguarding Lead",
      "The local authority directly",
      "A colleague you trust",
      "The person\u2019s family",
    ],
    correctIndex: 0,
    explanation: "Correct. Brightfield Care\u2019s policy requires all concerns to be reported to your line manager or the Designated Safeguarding Lead in the first instance.",
  },
  {
    id: 2,
    question: "Within how many hours must a safeguarding concern be logged in Brightfield Care\u2019s incident management system?",
    options: ["24 hours", "48 hours", "72 hours", "At the next team meeting"],
    correctIndex: 0,
    explanation: "Correct. Brightfield Care\u2019s policy requires all concerns to be logged within 24 hours of the incident in the SafeLog incident management system.",
  },
  {
    id: 3,
    question: "Which of the following best describes Brightfield Care\u2019s approach to the \u2018Proportionality\u2019 safeguarding principle?",
    options: [
      "The least intrusive response appropriate to the risk presented",
      "Involving as many agencies as possible in every case",
      "Always prioritising the organisation\u2019s liability over the individual",
      "Escalating all concerns to the CQC immediately",
    ],
    correctIndex: 0,
    explanation: "Correct. Proportionality means responding with the least intrusive action appropriate to the level of risk, not escalating every concern to the highest level.",
  },
];

// ---- Recent activity feed ----

export const recentActivity: ActivityEvent[] = [
  { id: 1, learnerName: "Emma Davies", courseTitle: "Lone Worker Safety", score: 92, date: "14 Mar" },
  { id: 2, learnerName: "James Thornton", courseTitle: "Lone Worker Safety", score: 88, date: "15 Mar" },
  { id: 3, learnerName: "Priya Nair", courseTitle: "Lone Worker Safety", score: 76, date: "16 Mar" },
  { id: 4, learnerName: "Marcus Webb", courseTitle: "Lone Worker Safety", score: 91, date: "17 Mar" },
  { id: 5, learnerName: "Claire Oduya", courseTitle: "Lone Worker Safety", score: 83, date: "18 Mar" },
];
