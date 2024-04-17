export interface ICreateCourse1{
    courseName : string,
    courseDescription : string,
    coursePrice : string,
    estimatedPrice : string,
    courseTags : string,
    totalVideos  : string,
    courseLevel : string,
    demoURL : string

}

export interface IInstructorData {
    instructorData: object | null;
  
  }

  export interface ICreateCourse3{
    videoTitle : string,
    videoURL : string,
    subtitleURL : string,
    videoDescription : string,
    link : string,

}

export interface ICreateCourse2{
  benefits : Array<string>,
  prerequisites : Array<string>
}