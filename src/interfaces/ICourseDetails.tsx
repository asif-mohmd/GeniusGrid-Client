export interface Course {
    id: number;
    thumbnail:string;
    courseName: string;
    coursePrice: number;
    courseLevel: string;
    totalVideos: number;
    // Add any other properties here
  }
  
  
  export interface AllCourse{
    _id: number;
    thumbnail:string;
    courseName: string;
    coursePrice: number;
    courseLevel: string;
    totalVideos: number;
  }

  export interface Lesson {
    videoTitle: string;
    videoURL: string;
    subtitleURL: string;
    videoDescription: string;
    links: string[]; // Assuming links are strings
    // Add other properties here if needed
  }
  
  export interface CourseData {
    _id:number;
    courseName: string;
    coursePrice: string;
    courseDescription: string;
    courseLevel: string;
    course: string;
    demoURL: string;
    estimatedPrice: string;
    instructorId: string;
    totalVideos: string;
    prerequisites: string[];
    benefits: string[];
    lessons: Lesson[][]; 
  }