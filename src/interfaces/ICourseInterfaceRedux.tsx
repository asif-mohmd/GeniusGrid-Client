export interface CreateCourse3Props {
  onNext: () => void;
  onPrev: () => void;
  data: string;
}


export interface ICreateCourse1 {
  thumbnail: string;
  courseName: string;
  courseDescription: string;
  coursePrice: string;
  estimatedPrice: string;
  courseCategory: string;
  totalVideos: string;
  courseLevel: string;
  demoURL: string;
  benefits: Array<string>;
  prerequisites: Array<string>;
}

export interface ICreateCourse3 {
  _id: string;
  instructorId:string;
  courseName: string;
  courseDescription: string;
  coursePrice: string;
  estimatedPrice: string;
  courseCategory: string;
  totalVideos: string;
  courseLevel: string;
  demoURL: string;
  benefits: Array<string>;
  prerequisites: Array<string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  courseLessons: Array<Array<{ [key: string]: any }>>;

}

export interface ICreateCourse2 {
  _id: string;
  courseName: string;
  courseDescription: string;
  coursePrice: string;
  estimatedPrice: string;
  courseCategory: string;
  totalVideos: string;
  courseLevel: string;
  demoURL: string;
  benefits: Array<string>;
  prerequisites: Array<string>;
}


export interface IPrivateIdStore {
  privateIdStore : number
}

