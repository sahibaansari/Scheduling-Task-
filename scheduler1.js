import cron from "node-cron";

const task =()=>{
  console.log("running the scheduling task",new Date());
};
 cron.schedule("* * * * *",task);