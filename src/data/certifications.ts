export interface Certification {
  title: string;
  issuer: string;
  date: string;
  verificationUrl: string;
  credentialId?: string;
}

export const certificationsData: Certification[] = [
  {
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: 'May 2026',
    verificationUrl: 'https://www.hackerrank.com/certificates/cd249100571a',
    credentialId: 'cd249100571a'
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'February 2025',
    verificationUrl: 'https://www.udemy.com/certificate/UC-bc665a5a-046d-4a62-aea4-cdfb9887ff8b/',
    credentialId: 'AWS-CCP-2025'
  }
];
