export interface JobType {
  id: string;
  image: string;
  company: string;
  position: string;
  location: string;
  type: string;
  website: string;
}

export interface AllJobsType {
  title: string;
  jobs: JobType[];
}
