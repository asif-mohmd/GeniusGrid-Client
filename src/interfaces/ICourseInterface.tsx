export interface CreateCourse3Props {
  onNext: () => void;
  onPrev: () => void;
  data: string;
}

export interface ICreateCourse1 {
  courseName: string;
  courseDescription: string;
  coursePrice: string;
  estimatedPrice: string;
  courseTags: string;
  totalVideos: string;
  courseLevel: string;
  demoURL: string;
  benefits: Array<string>;
  prerequisites: Array<string>;
}

export interface ICreateCourse3 {
  videoTitle: string;
  videoURL: string;
  subtitleURL: string;
  videoDescription: string;
  links:Array<string>;
}

export interface ICreateCourse2 {
  benefits: Array<string>;
  prerequisites: Array<string>;
}


export interface IPrivateIdStore {
  privateIdStore : number
}