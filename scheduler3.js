/* House keeping of record older than 180 days */

import cron from "node-cron";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import invoice from "./data/archive.json" assert { type: "json" };

const houseKeepingTask= ()=>{
  console.log("Running hoise keeping task ", new Date());

  try {
    archive.map((item,index)=>{
      const pressentDate= new Date().getTime();
      const recordDate= new Date(item.date).getTime();
      console.log("the number of days",Math.floor((pressentDate-recordDate)/(1000* 60 * 60 * 24))
    );
    });
    
  } catch (error) {
    console.log("error",error);
    
  }
  console.log("Task Done");

}
cron.schedule("* * * * *", houseKeepingTask);