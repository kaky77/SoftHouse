export class Job {
    constructor(
           public jobName:string,
           public description:string, 
           public Qualite :string,
           public Salaire : string,
           public type: string,
           public horaire: string,
           public teletravail: string,
     ) { }
   }