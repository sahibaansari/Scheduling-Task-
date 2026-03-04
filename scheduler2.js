/* JOB to check the status of invoice and 
if the status is paid we archive the record  */

import cron from "node-cron";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import invoice from "./data/invoice.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const archiveInvoiceTask = () => {
  console.log("archive task running", new Date());

  try {
    const paidInvoice = invoice.filter((item) => item.status === "paid");

    if (paidInvoice.length > 0) {
      paidInvoice.forEach((item) => {
        const index = invoice.findIndex((e) => e.id === item.id);
        if (index !== -1) {
          invoice.splice(index, 1);
        }
      });

      fs.writeFileSync(
        path.join(__dirname, "data", "invoice.json"),
        JSON.stringify(invoice, null, 2),
        "utf-8",
      );
      console.log("complet reading file and ready to update the file ")

      fs.writeFileSync(
        path.join(__dirname, "data", "archive.json"),
        JSON.stringify(paidInvoice, null, 2),
        "utf-8",
      );
    }
  } catch (error) {
    console.log(`error occurred: ${error}`);
  }

  console.log("invoice task ended");
};

cron.schedule("*/30 * * * * *", archiveInvoiceTask);
